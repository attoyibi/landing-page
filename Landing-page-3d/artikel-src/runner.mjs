// Runs the code samples of the articles for real, so every output shown in an article comes from an actual run
// and a broken example stops the build. Results are cached in artikel-src/.cache (ignored by git).

import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const CACHE = join(dirname(fileURLToPath(import.meta.url)), '.cache');
mkdirSync(CACHE, { recursive: true });

const key = (...p) => createHash('sha1').update(p.join('\u0000')).digest('hex');
function cached(k, fn) {
    const f = join(CACHE, k + '.json');
    if (existsSync(f)) return JSON.parse(readFileSync(f, 'utf8'));
    const v = fn();
    writeFileSync(f, JSON.stringify(v));
    return v;
}
const tmp = prefix => mkdtempSync(join(tmpdir(), prefix));
const lastLines = (s, n) => s.split('\n').filter(Boolean).slice(-n).join('\n');

export function runPython(code, { input = '', expectError = false } = {}) {
    return cached(key('py', code, input, expectError), () => {
        const dir = tmp('py-');
        writeFileSync(join(dir, 'main.py'), code);
        const r = spawnSync('python', ['-X', 'utf8', 'main.py'], { input, encoding: 'utf8', timeout: 20000, cwd: dir });
        rmSync(dir, { recursive: true, force: true });
        if (r.status !== 0 && !expectError) throw new Error(`Kode Python gagal:\n${code.slice(0, 400)}\n---\n${r.stderr}`);
        return { out: (r.stdout || '') + (r.status !== 0 ? lastLines(r.stderr || '', 1) + '\n' : '') };
    });
}

export function runJava(code, { input = '', expectError = false } = {}) {
    return cached(key('java', code, input, expectError), () => {
        const dir = tmp('java-');
        writeFileSync(join(dir, 'Main.java'), code);
        const c = spawnSync('javac', ['-encoding', 'UTF-8', '-d', dir, 'Main.java'], { encoding: 'utf8', timeout: 60000, cwd: dir });
        if (c.status !== 0) { rmSync(dir, { recursive: true, force: true }); throw new Error(`Kode Java tidak bisa dikompilasi:\n${code.slice(0, 400)}\n---\n${c.stderr}`); }
        const r = spawnSync('java', ['-Dfile.encoding=UTF-8', '-cp', dir, 'Main'], { input, encoding: 'utf8', timeout: 30000, cwd: dir });
        rmSync(dir, { recursive: true, force: true });
        if (r.status !== 0 && !expectError) throw new Error(`Kode Java gagal dijalankan:\n${code.slice(0, 400)}\n---\n${r.stderr}`);
        return { out: (r.stdout || '') + (r.status !== 0 ? lastLines(r.stderr || '', 2) + '\n' : '') };
    });
}

// JavaScript (and JSX/React) samples run with Node. JSX is compiled with esbuild; react and react-dom come from this project's node_modules.
const ROOT_MODULES = join(dirname(fileURLToPath(import.meta.url)), '..', 'node_modules');
export function runNode(code, { input = '', expectError = false, jsx = false } = {}) {
    return cached(key('node', code, input, expectError, jsx), () => {
        const dir = tmp('node-');
        let src = code;
        if (jsx) {
            const { transformSync } = createRequire(import.meta.url)('esbuild');
            src = transformSync(code, { loader: 'jsx', format: 'cjs', jsx: 'transform' }).code;
        }
        writeFileSync(join(dir, 'main.cjs'), src);
        const r = spawnSync('node', ['main.cjs'], { input, encoding: 'utf8', timeout: 20000, cwd: dir, env: { ...process.env, NODE_PATH: ROOT_MODULES } });
        rmSync(dir, { recursive: true, force: true });
        if (r.status !== 0 && !expectError) throw new Error(`Kode JavaScript gagal:\n${code.slice(0, 400)}\n---\n${r.stderr}`);
        return { out: (r.stdout || '') + (r.status !== 0 ? lastLines(r.stderr || '', 2) + '\n' : '') };
    });
}

// Plain Dart (no Flutter): runs with the installed Dart SDK. Keep samples compatible with Dart 2.19+ (no records or patterns).
export function runDart(code, { input = '', expectError = false } = {}) {
    return cached(key('dart', code, input, expectError), () => {
        const dir = tmp('dart-');
        writeFileSync(join(dir, 'main.dart'), code);
        const r = spawnSync('dart', ['main.dart'], { input, encoding: 'utf8', timeout: 90000, cwd: dir, shell: process.platform === 'win32' });
        rmSync(dir, { recursive: true, force: true });
        if (r.status !== 0 && !expectError) throw new Error(`Kode Dart gagal:\n${code.slice(0, 400)}\n---\n${r.stderr}${r.stdout}`);
        return { out: (r.stdout || '') + (r.status !== 0 ? lastLines(r.stderr || '', 2) + '\n' : '') };
    });
}

// Line-by-line trace of a Python program: for each step, the line about to run, the call stack with variables, and the output so far.
const TRACER = `
import sys, json, io
src = open(sys.argv[1], encoding='utf-8').read()
stdin_text = open(sys.argv[2], encoding='utf-8').read()
code = compile(src, '<trace>', 'exec')
steps, out, MAX = [], io.StringIO(), 400
def show(v):
    r = repr(v)
    return r if len(r) <= 60 else r[:57] + '...'
def snap(frame):
    stack, f = [], frame
    while f is not None and f.f_code.co_filename == '<trace>':
        name = '(modul)' if f.f_code.co_name == '<module>' else f.f_code.co_name
        vs = {}
        for k, v in f.f_locals.items():
            if k.startswith('__') or callable(v) or isinstance(v, type(sys)):
                continue
            vs[k] = show(v)
        stack.append({'name': name, 'vars': vs})
        f = f.f_back
    return list(reversed(stack))
def tracer(frame, event, arg):
    if frame.f_code.co_filename != '<trace>':
        return None
    if len(steps) < MAX:
        if event == 'line':
            steps.append({'line': frame.f_lineno, 'stack': snap(frame), 'out': out.getvalue()})
        elif event == 'return' and frame.f_code.co_name == '<module>':
            steps.append({'line': 0, 'stack': snap(frame), 'out': out.getvalue()})
    return tracer
real_out, real_in = sys.stdout, sys.stdin
sys.stdout, sys.stdin = out, io.StringIO(stdin_text)
sys.settrace(tracer)
try:
    exec(code, {'__name__': '__main__'})
finally:
    sys.settrace(None)
    sys.stdout, sys.stdin = real_out, real_in
print(json.dumps({'steps': steps, 'truncated': len(steps) >= MAX}))
`;

export function tracePython(code, { input = '' } = {}) {
    return cached(key('trace', code, input), () => {
        const dir = tmp('tr-');
        writeFileSync(join(dir, 'tracer.py'), TRACER);
        writeFileSync(join(dir, 'prog.py'), code);
        writeFileSync(join(dir, 'in.txt'), input);
        const r = spawnSync('python', ['-X', 'utf8', 'tracer.py', 'prog.py', 'in.txt'], { encoding: 'utf8', timeout: 30000, cwd: dir });
        rmSync(dir, { recursive: true, force: true });
        if (r.status !== 0) throw new Error(`Trace Python gagal:\n${code.slice(0, 300)}\n---\n${r.stderr}`);
        const res = JSON.parse(r.stdout);
        if (res.truncated) throw new Error(`Trace terlalu panjang (lebih dari 400 langkah), perpendek kodenya:\n${code.slice(0, 200)}`);
        return res.steps;
    });
}
