const D = '2026-10-23';
const C = 'Dasar Informatika';
const py = String.raw;

const REF_ROSEN = ['Kenneth Rosen, Discrete Mathematics and Its Applications (McGraw-Hill)', ''];
const REF_AHO = ['Aho, Lam, Sethi, Ullman, Compilers: Principles, Techniques, and Tools (Pearson)', ''];
const REF_CRAFT = ['Robert Nystrom, Crafting Interpreters (gratis)', 'https://craftinginterpreters.com/'];
const REF_SIPSER = ['Michael Sipser, Introduction to the Theory of Computation (Cengage)', ''];
const REF_CLRS = ['Cormen, Leiserson, Rivest, Stein, Introduction to Algorithms (edisi ke-4, MIT Press, 2022)', ''];
const REF_ISLP = ['James, Witten, Hastie, Tibshirani, An Introduction to Statistical Learning (gratis)', 'https://www.statlearning.com/'];
const REF_SKL = ['scikit-learn: User Guide', 'https://scikit-learn.org/stable/user_guide.html'];

export default [
    {
        slug: 'cara-kerja-kompilator-dan-interpreter-lexer-parser-dan-eksekusi',
        title: 'Cara Kerja Kompilator dan Interpreter: Lexer, Parser, Eksekusi',
        description: 'Bangun interpreter mini di Python: lexer, parser rekursif turun, AST, dan evaluasi, lalu pahami cara kompilator nyata bekerja.',
        date: D, category: C, level: 'Menengah', tags: ['kompilator', 'interpreter', 'lexer', 'parser', 'AST'], cta: 'none',
        prereq: ['rekursi', 'kelas dan struktur data dasar'],
        lead: 'Bagaimana komputer "mengerti" kode yang Anda tulis? Dari teks mentah menjadi tindakan, ada rantai tahap: memecah teks menjadi token, menyusunnya menjadi pohon sesuai tata bahasa, lalu menjalankan atau menerjemahkan pohon itu. Dengan membangun interpreter kalkulator mini, tahap-tahap yang tampak ajaib itu menjadi sederhana.',
        body: [
            { objectives: ['membedakan kompilator, interpreter, dan pendekatan hibrida (bytecode, JIT)', 'menjelaskan tahap: analisis leksikal, sintaksis, semantik, pembangkitan kode', 'menulis lexer dan parser rekursif turun untuk ekspresi aritmetika', 'menggambarkan pohon sintaks abstrak (AST) dan mengevaluasinya', 'menjelaskan presedensi operator lewat tata bahasa'] },
            { h2: 'Dari teks ke eksekusi' },
            { svg: 'flow', label: 'Tahap kompilator', steps: [{ t: 'Kode sumber', d: '"2 + 3 * 4"' }, { t: 'Lexer', d: 'memecah menjadi token' }, { t: 'Parser', d: 'menyusun pohon sintaks (AST)' }, { t: 'Analisis semantik', d: 'periksa tipe dan nama' }, { t: 'Generasi kode / eksekusi', d: 'kode mesin, bytecode, atau langsung dievaluasi' }], caption: 'Interpreter mengeksekusi pohon (atau bytecode) langsung; kompilator menerjemahkan seluruh program menjadi bahasa target lebih dulu.' },
            { table: { head: ['Pendekatan', 'Cara kerja', 'Contoh'], rows: [['Kompilator', 'Menerjemahkan seluruh program ke kode mesin sebelum dijalankan', 'C, C++, Rust, Go'], ['Interpreter', 'Membaca dan menjalankan program baris atau pohon secara langsung', 'Shell, versi awal Ruby'], ['Hibrida: bytecode + VM', 'Dikompilasi ke bytecode lalu dijalankan mesin virtual', 'Python (CPython), Java (JVM)'], ['JIT (just-in-time)', 'Bytecode yang sering dijalankan dikompilasi ke kode mesin saat berjalan', 'JVM HotSpot, V8 (JavaScript), PyPy']] } },
            { h2: 'Tahap 1: lexer (analisis leksikal)' },
            `Lexer membaca karakter dan mengelompokkannya menjadi <b>token</b>: unit bermakna seperti angka, operator, dan kurung. Spasi biasanya dibuang.`,
            { code: py`import re

POLA = [
    ("ANGKA", r"\d+(?:\.\d+)?"),
    ("TAMBAH", r"\+"), ("KURANG", r"-"), ("KALI", r"\*"), ("BAGI", r"/"), ("PANGKAT", r"\^"),
    ("KURBUKA", r"\("), ("KURTUTUP", r"\)"),
    ("SPASI", r"\s+"),
]
REGEX = re.compile("|".join(f"(?P<{n}>{p})" for n, p in POLA))

def tokenisasi(teks):
    token, i = [], 0
    while i < len(teks):
        m = REGEX.match(teks, i)
        if not m:
            raise SyntaxError(f"karakter tak dikenal {teks[i]!r} pada posisi {i}")
        if m.lastgroup != "SPASI":
            token.append((m.lastgroup, m.group()))
        i = m.end()
    return token

print(tokenisasi("2 + 3 * (4 - 1.5)"))
try:
    tokenisasi("2 + $3")
except SyntaxError as e:
    print("galat leksikal:", e)`, lang: 'python', run: true },
            { h2: 'Tahap 2: parser dan tata bahasa' },
            `Tata bahasa menyatakan bentuk kalimat yang sah. Untuk ekspresi aritmetika, presedensi operator terkodekan dalam <b>tingkatan</b> aturan: yang mengikat lebih kuat berada lebih dalam.`,
            { code: 'ekspresi  → suku  ( ("+" | "-") suku )*          // paling lemah: + dan -\nsuku      → faktor ( ("*" | "/") faktor )*       // lebih kuat: * dan /\nfaktor    → unit ( "^" faktor )?                   // pangkat, rapat ke kanan\nunit      → ANGKA | "(" ekspresi ")" | "-" unit   // angka, kurung, minus unary', lang: 'text', caption: 'Setiap aturan menjadi satu fungsi pada parser rekursif turun. Karena * dipanggil dari dalam +, perkalian dievaluasi lebih dulu: presedensi tanpa tabel khusus.' },
            { code: py`import re

POLA = [("ANGKA", r"\d+(?:\.\d+)?"), ("OP", r"[-+*/^()]"), ("SPASI", r"\s+")]
REGEX = re.compile("|".join(f"(?P<{n}>{p})" for n, p in POLA))

def tokenisasi(teks):
    hasil, i = [], 0
    while i < len(teks):
        m = REGEX.match(teks, i)
        if not m: raise SyntaxError(f"karakter tak dikenal {teks[i]!r}")
        if m.lastgroup != "SPASI": hasil.append((m.lastgroup, m.group()))
        i = m.end()
    return hasil

class Parser:
    def __init__(self, token): self.t, self.i = token, 0
    def lihat(self): return self.t[self.i][1] if self.i < len(self.t) else None
    def ambil(self): tok = self.t[self.i]; self.i += 1; return tok

    def ekspresi(self):                                   # suku (('+'|'-') suku)*
        kiri = self.suku()
        while self.lihat() in ("+", "-"):
            op = self.ambil()[1]
            kiri = (op, kiri, self.suku())
        return kiri
    def suku(self):                                       # faktor (('*'|'/') faktor)*
        kiri = self.faktor()
        while self.lihat() in ("*", "/"):
            op = self.ambil()[1]
            kiri = (op, kiri, self.faktor())
        return kiri
    def faktor(self):                                     # unit ('^' faktor)?
        dasar = self.unit()
        if self.lihat() == "^":
            self.ambil()
            return ("^", dasar, self.faktor())            # rekursi ke kanan: 2^3^2 = 2^(3^2)
        return dasar
    def unit(self):
        if self.lihat() == "-": self.ambil(); return ("neg", self.unit())
        if self.lihat() == "(":
            self.ambil(); e = self.ekspresi()
            if self.lihat() != ")": raise SyntaxError("kurung tutup hilang")
            self.ambil(); return e
        jenis, nilai = self.ambil()
        if jenis != "ANGKA": raise SyntaxError(f"token tak terduga {nilai!r}")
        return float(nilai) if "." in nilai else int(nilai)

def parse(teks):
    p = Parser(tokenisasi(teks)); pohon = p.ekspresi()
    if p.i != len(p.t): raise SyntaxError(f"sisa token: {p.t[p.i:]}")
    return pohon

for e in ("2 + 3 * 4", "(2 + 3) * 4", "2 ^ 3 ^ 2", "-(1 + 2) * 3"):
    print(f"{e:<14} -> {parse(e)}")`, lang: 'python', run: true, caption: 'Hasilnya adalah AST berupa tuple bersarang: ("+", 2, ("*", 3, 4)) menyatakan bahwa perkalian adalah anak dari penjumlahan, sehingga dievaluasi lebih dulu.' },
            { svg: 'diagram', w: 560, h: 220, label: 'AST dari 2 + 3 * 4', nodes: [{ id: 'p', x: 280, y: 30, shape: 'circle', w: 40, h: 40, t: '+' }, { id: 'a', x: 160, y: 110, shape: 'circle', w: 40, h: 40, t: '2' }, { id: 'k', x: 400, y: 110, shape: 'circle', w: 40, h: 40, t: '*' }, { id: 'b', x: 340, y: 190, shape: 'circle', w: 40, h: 40, t: '3' }, { id: 'c', x: 460, y: 190, shape: 'circle', w: 40, h: 40, t: '4' }], edges: [{ from: 'p', to: 'a', head: 'none' }, { from: 'p', to: 'k', head: 'none' }, { from: 'k', to: 'b', head: 'none' }, { from: 'k', to: 'c', head: 'none' }], caption: 'Evaluasi dilakukan dari daun ke akar (post-order): 3 × 4 = 12, lalu 2 + 12 = 14.' },
            { h2: 'Tahap 3: evaluasi (interpreter)' },
            { code: py`import re

POLA = [("ANGKA", r"\d+(?:\.\d+)?"), ("OP", r"[-+*/^()]"), ("SPASI", r"\s+")]
REGEX = re.compile("|".join(f"(?P<{n}>{p})" for n, p in POLA))

def tokenisasi(teks):
    hasil, i = [], 0
    while i < len(teks):
        m = REGEX.match(teks, i)
        if not m: raise SyntaxError(f"karakter tak dikenal {teks[i]!r}")
        if m.lastgroup != "SPASI": hasil.append((m.lastgroup, m.group()))
        i = m.end()
    return hasil

class Parser:
    def __init__(self, t): self.t, self.i = t, 0
    def lihat(self): return self.t[self.i][1] if self.i < len(self.t) else None
    def ambil(self): x = self.t[self.i]; self.i += 1; return x
    def ekspresi(self):
        kiri = self.suku()
        while self.lihat() in ("+", "-"): op = self.ambil()[1]; kiri = (op, kiri, self.suku())
        return kiri
    def suku(self):
        kiri = self.faktor()
        while self.lihat() in ("*", "/"): op = self.ambil()[1]; kiri = (op, kiri, self.faktor())
        return kiri
    def faktor(self):
        d = self.unit()
        if self.lihat() == "^": self.ambil(); return ("^", d, self.faktor())
        return d
    def unit(self):
        if self.lihat() == "-": self.ambil(); return ("neg", self.unit())
        if self.lihat() == "(":
            self.ambil(); e = self.ekspresi()
            if self.lihat() != ")": raise SyntaxError("kurung tutup hilang")
            self.ambil(); return e
        jenis, nilai = self.ambil()
        if jenis != "ANGKA": raise SyntaxError(f"token tak terduga {nilai!r}")
        return float(nilai) if "." in nilai else int(nilai)

def evaluasi(n):
    if isinstance(n, (int, float)): return n
    if n[0] == "neg": return -evaluasi(n[1])
    op, a, b = n[0], evaluasi(n[1]), evaluasi(n[2])
    if op == "+": return a + b
    if op == "-": return a - b
    if op == "*": return a * b
    if op == "/":
        if b == 0: raise ZeroDivisionError("pembagian dengan nol")
        return a / b
    if op == "^": return a ** b

def hitung(teks):
    p = Parser(tokenisasi(teks)); pohon = p.ekspresi()
    if p.i != len(p.t): raise SyntaxError("token berlebih")
    return evaluasi(pohon)

for e in ("2 + 3 * 4", "(2 + 3) * 4", "2 ^ 3 ^ 2", "10 / 4 - 1", "-(1 + 2) * 3", "2 + * 3", "(1 + 2", "4 / (2 - 2)"):
    try: print(f"{e:<14} = {hitung(e)}")
    except Exception as ex: print(f"{e:<14} ! {type(ex).__name__}: {ex}")`, lang: 'python', run: true, caption: 'Kalkulator ini sekitar 60 baris. Interpreter bahasa pemrograman sungguhan menambah variabel, fungsi, kondisi, dan perulangan, tetapi kerangkanya sama.' },
            { h2: 'Dari pohon ke bytecode' },
            `Python tidak mengeksekusi pohon langsung. Ia mengompilasi ke <b>bytecode</b> yang dijalankan mesin virtual berbasis tumpukan. Anda dapat melihatnya dengan modul <code>dis</code>.`,
            { code: py`import dis
def f(a, b):
    return a + b * 2
dis.dis(f)`, lang: 'python', run: true, caption: 'Instruksi seperti LOAD_FAST, BINARY_OP, dan RETURN_VALUE bekerja pada tumpukan nilai, mirip kalkulator postfix yang pernah kita bahas. (Nama instruksi dan angkanya berubah antar versi Python.)' },
            { callout: 'Banyak alat sehari-hari adalah kompilator atau interpreter kecil: pemformat kode, linter, mesin templat, kueri SQL, ekspresi reguler, dan konfigurasi. Memahami lexer dan parser membuat Anda mampu membangun atau memahami semuanya, dan menjelaskan pesan "SyntaxError" yang Anda lihat setiap hari.', kind: 'good', title: 'Mengapa mempelajarinya' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tahap yang memecah teks menjadi token?', options: ['Lexer', 'Parser', 'Optimizer'], answer: 0, why: 'Analisis leksikal.' }, { q: 'Dalam parser rekursif turun, presedensi * lebih tinggi dari + karena...', options: ['Aturan * dipanggil dari dalam aturan +', 'Ada tabel prioritas', 'Python menentukannya'], answer: 0, why: 'Aturan yang lebih dalam dievaluasi lebih dulu.' }, { q: 'Python CPython dijalankan dengan...', options: ['Kompilasi ke bytecode lalu mesin virtual', 'Kode mesin langsung', 'Hanya interpretasi teks'], answer: 0, why: 'Hibrida bytecode + VM.' }] },
            { exercise: [['Gambarkan AST untuk (2 + 3) * 4.', 'Akar *, anak kiri + (dengan 2 dan 3), anak kanan 4.'], ['Mengapa 2 ^ 3 ^ 2 dihitung sebagai 2 ^ (3 ^ 2) = 512?', 'Pangkat bersifat asosiatif kanan; faktor() memanggil dirinya sendiri untuk sisi kanan.'], ['Tambahkan operator modulo % ke kalkulator. Apa yang perlu diubah?', 'Tambah % pada pola lexer, masukkan pada tingkat suku bersama * dan /, dan cabang di evaluasi.'], ['Apa perbedaan galat sintaks dan galat semantik?', 'Sintaks: bentuk tidak sah menurut tata bahasa (2 + * 3). Semantik: bentuk sah tetapi tak bermakna (menjumlahkan teks dengan fungsi, variabel belum didefinisikan).']] },
            { summary: ['Kompilator menerjemahkan; interpreter menjalankan; banyak sistem hibrida (bytecode, JIT).', 'Lexer: teks menjadi token. Parser: token menjadi AST sesuai tata bahasa.', 'Presedensi tertanam pada tingkatan aturan tata bahasa.', 'Evaluasi AST dari daun ke akar; tahap berikutnya dapat optimasi dan generasi kode.'] },
        ],
        faq: [['Apa itu tata bahasa bebas konteks?', 'Cara formal menyatakan sintaks bahasa dengan aturan produksi (seperti di atas); dasar hampir semua bahasa pemrograman.'], ['Apa itu alat pembangkit parser?', 'Alat seperti ANTLR, Yacc/Bison, atau Lark membangkitkan lexer dan parser dari deskripsi tata bahasa.'], ['Mengapa kode yang dikompilasi biasanya lebih cepat?', 'Penerjemahan dan optimasi dilakukan sebelum jalan, serta menghasilkan instruksi mesin langsung; JIT modern mempersempit perbedaannya.']],
        sources: [REF_CRAFT, REF_AHO, ['Dokumentasi Python: modul dis', 'https://docs.python.org/3/library/dis.html'], ['Dokumentasi Python: re, Regular expression operations', 'https://docs.python.org/3/library/re.html']],
    },

    {
        slug: 'himpunan-dan-logika-proposisi-matematika-diskrit-untuk-informatika',
        title: 'Himpunan dan Logika Proposisi: Matematika Diskrit',
        description: 'Pelajari matematika diskrit: himpunan, logika proposisi, implikasi, kuantor, dan teknik bukti termasuk induksi, dengan kode Python untuk memeriksa.',
        date: D, category: C, level: 'Pemula', tags: ['matematika diskrit', 'himpunan', 'logika proposisi', 'induksi matematika', 'bukti'], cta: 'none',
        prereq: ['logika boolean dasar'],
        lead: 'Matematika diskrit adalah bahasa untuk berpikir presisi tentang hal-hal yang terpisah-pisah: himpunan, pernyataan, hubungan, graf, dan hitungan. Ia mendasari basis data, algoritma, kriptografi, dan verifikasi program. Mulailah dari dua pilar: himpunan dan logika.',
        body: [
            { objectives: ['menyatakan himpunan dan operasi gabungan, irisan, selisih, komplemen, himpunan kuasa', 'menggunakan hukum himpunan dan diagram Venn', 'menyusun dan mengevaluasi pernyataan dengan konektif logika dan implikasi', 'memakai kuantor universal dan eksistensial dan menegasinya', 'mengenali dan menyusun bukti: langsung, kontraposisi, kontradiksi, induksi'] },
            { h2: 'Himpunan' },
            `Himpunan adalah kumpulan objek berbeda tanpa urutan. Notasi: <code>A = {1, 2, 3}</code>; <code>x ∈ A</code> berarti x anggota A; <code>|A|</code> adalah kardinalitas; <code>∅</code> himpunan kosong.`,
            { table: { head: ['Operasi', 'Simbol', 'Arti', 'Python', 'Padanan SQL'], rows: [['Gabungan', 'A ∪ B', 'anggota A atau B', 'A | B', 'UNION'], ['Irisan', 'A ∩ B', 'anggota A dan B', 'A & B', 'INTERSECT / INNER JOIN'], ['Selisih', 'A − B', 'anggota A yang bukan B', 'A - B', 'EXCEPT'], ['Selisih simetris', 'A ⊕ B', 'anggota salah satu saja', 'A ^ B', ''], ['Himpunan bagian', 'A ⊆ B', 'semua A ada di B', 'A <= B', ''], ['Komplemen', 'Aᶜ', 'bukan anggota A dalam semesta U', 'U - A', 'NOT IN']] } },
            { code: py`A = {1, 2, 3, 4, 5, 6}
B = {2, 4, 6, 8}
U = set(range(1, 11))

print("A ∪ B =", sorted(A | B))
print("A ∩ B =", sorted(A & B))
print("A − B =", sorted(A - B))
print("A ⊕ B =", sorted(A ^ B))
print("Aᶜ    =", sorted(U - A))
print("{2,4} ⊆ A ?", {2, 4} <= A, "| |A ∪ B| =", len(A | B))

# prinsip inklusi-eksklusi: |A ∪ B| = |A| + |B| - |A ∩ B|
print(len(A | B) == len(A) + len(B) - len(A & B))

# hukum De Morgan untuk himpunan: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ
print("De Morgan:", (U - (A | B)) == ((U - A) & (U - B)))

# himpunan kuasa (semua himpunan bagian): ada 2^n anggota
from itertools import combinations
def himpunan_kuasa(s):
    s = list(s)
    return [set(c) for r in range(len(s) + 1) for c in combinations(s, r)]
P = himpunan_kuasa({"a", "b", "c"})
print(len(P), "himpunan bagian dari {a,b,c}:", [sorted(x) for x in P])`, lang: 'python', run: true },
            { h2: 'Logika proposisi' },
            `Proposisi adalah kalimat yang tepat benar atau salah. Konektif: ¬ (bukan), ∧ (dan), ∨ (atau), → (jika ... maka), ↔ (jika dan hanya jika).`,
            { w: 'truth', title: 'Tabel kebenaran implikasi', desc: 'Ketik "not p or q" (setara dengan p → q) dan bandingkan dengan tabel implikasi. Coba juga "p != q" (XOR).', expr: 'not p or q' },
            { callout: 'Implikasi <b>p → q hanya salah bila p benar dan q salah</b>. Jika p salah, implikasi benar (vakum): "Jika saya burung, maka saya bisa terbang" benar bagi saya yang bukan burung. Banyak kesalahan penalaran berasal dari salah memahami ini.', kind: 'warn', title: 'Jebakan implikasi' },
            { code: py`from itertools import product

imp = lambda p, q: (not p) or q            # p -> q setara dengan (not p) or q
print(" p     q     p->q   q->p   ¬q->¬p")
for p, q in product([True, False], repeat=2):
    print(f" {p!s:<5} {q!s:<5} {imp(p, q)!s:<6} {imp(q, p)!s:<6} {imp(not q, not p)}")

# konvers (q->p) BUKAN sama dengan implikasi; kontraposisi (¬q->¬p) SAMA
setara = lambda f, g: all(f(p, q) == g(p, q) for p, q in product([True, False], repeat=2))
print("\nimplikasi == konvers      :", setara(imp, lambda p, q: imp(q, p)))
print("implikasi == kontraposisi :", setara(imp, lambda p, q: imp(not q, not p)))
print("De Morgan 1               :", setara(lambda p, q: not (p and q), lambda p, q: (not p) or (not q)))
print("p <-> q setara dengan (p->q) and (q->p):", setara(lambda p, q: p == q, lambda p, q: imp(p, q) and imp(q, p)))`, lang: 'python', run: true, caption: 'Contoh sehari-hari: "Jika hujan, jalan basah" tidak sama dengan "Jika jalan basah, hujan" (konvers), tetapi sama dengan "Jika jalan tidak basah, tidak hujan" (kontraposisi).' },
            { h2: 'Kuantor' },
            { table: { head: ['Kuantor', 'Arti', 'Contoh', 'Negasi'], rows: [['∀x P(x)', 'untuk semua x, P(x)', 'Semua mahasiswa memiliki NIM', '∃x ¬P(x): ada mahasiswa tanpa NIM'], ['∃x P(x)', 'ada x sehingga P(x)', 'Ada bilangan prima genap', '∀x ¬P(x): tidak ada yang genap'], ['∀x ∃y P(x, y)', 'untuk setiap x ada y', 'Setiap orang punya ibu', 'Urutan kuantor penting!']] } },
            { code: py`data = [4, 8, 15, 16, 23, 42]
print("semua genap?        ", all(x % 2 == 0 for x in data))            # ∀
print("ada yang > 40?      ", any(x > 40 for x in data))                # ∃
# negasi: ¬∀x P(x) == ∃x ¬P(x)
print("¬(semua genap) == ada yang ganjil:", (not all(x % 2 == 0 for x in data)) == any(x % 2 != 0 for x in data))

# urutan kuantor: ∀x ∃y (y > x) benar di bilangan bulat; ∃y ∀x (y > x) salah
U = range(-5, 6)
print("∀x ∃y y>x :", all(any(y > x for y in U) for x in U), "(di semesta terbatas, x = 5 gagal; di Z tak berhingga benar)")
print("∃y ∀x y>x :", any(all(y > x for x in U) for y in U))`, lang: 'python', run: true, caption: 'Pada semesta terbatas, ∀x ∃y (y > x) gagal untuk x terbesar; pada bilangan bulat tak berhingga, ia benar. Semesta wacana menentukan kebenaran pernyataan berkuantor.' },
            { h2: 'Teknik bukti' },
            { table: { head: ['Teknik', 'Cara', 'Contoh'], rows: [['Langsung', 'Dari asumsi p, turunkan q', 'Jumlah dua bilangan genap adalah genap: 2a + 2b = 2(a+b)'], ['Kontraposisi', 'Buktikan ¬q → ¬p', 'Jika n² genap maka n genap: bila n ganjil, n² ganjil'], ['Kontradiksi', 'Asumsikan negasi lalu capai kemustahilan', '√2 tak rasional'], ['Induksi', 'Basis + langkah induktif', 'Jumlah 1 sampai n adalah n(n+1)/2']] } },
            { h3: 'Induksi matematika' },
            `Untuk membuktikan P(n) berlaku untuk semua n ≥ 1: (1) <b>basis</b>: P(1) benar; (2) <b>langkah induktif</b>: jika P(k) benar maka P(k+1) benar. Seperti domino: yang pertama jatuh, dan setiap yang jatuh menjatuhkan berikutnya.`,
            { math: 'P(n): 1 + 2 + … + n = n(n + 1) / 2' },
            { ul: ['<b>Basis</b>: n = 1 → ruas kiri 1, ruas kanan 1·2/2 = 1. ✓', '<b>Langkah</b>: asumsikan P(k): 1 + … + k = k(k+1)/2. Maka 1 + … + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, yaitu P(k+1). ✓'] },
            { code: py`# Pengujian numerik BUKAN bukti, tetapi pemeriksaan yang berguna
print(all(sum(range(1, n + 1)) == n * (n + 1) // 2 for n in range(1, 10000)))

# contoh pernyataan yang tampak benar tetapi salah: n^2 + n + 41 selalu prima
def prima(x): return x > 1 and all(x % d for d in range(2, int(x ** 0.5) + 1))
tandingan = next(n for n in range(100) if not prima(n * n + n + 41))
print("n^2+n+41 prima untuk n=0..", tandingan - 1, "tetapi gagal pada n =", tandingan, "->", tandingan ** 2 + tandingan + 41)`, lang: 'python', run: true, caption: 'Pemeriksaan untuk banyak kasus tidak membuktikan apa pun. Polinomial Euler menghasilkan bilangan prima untuk n = 0 sampai 39, lalu gagal pada n = 40. Satu contoh tandingan cukup membantah pernyataan umum; bukti diperlukan untuk menegakkannya.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Kapan p → q bernilai salah?', options: ['p benar dan q salah', 'p salah dan q benar', 'p dan q salah'], answer: 0, why: 'Satu-satunya kasus salah.' }, { q: 'Negasi dari "semua mahasiswa lulus" adalah...', options: ['Ada mahasiswa yang tidak lulus', 'Semua mahasiswa tidak lulus', 'Tidak ada yang lulus'], answer: 0, why: '¬∀x P(x) ≡ ∃x ¬P(x).' }, { q: 'Berapa banyak himpunan bagian dari himpunan berukuran 4?', options: ['16', '8', '4'], answer: 0, why: '2⁴ = 16.' }] },
            { exercise: [['Jika A = {1,2,3} dan B = {3,4}, tentukan A ∪ B, A ∩ B, A − B.', '{1,2,3,4}; {3}; {1,2}.'], ['Tulis kontraposisi dari "Jika program lulus uji maka tidak ada bug yang ditemukan uji."', 'Jika ada bug yang ditemukan uji, maka program tidak lulus uji.'], ['Buktikan dengan induksi bahwa jumlah n bilangan ganjil pertama adalah n².', 'Basis n=1: 1 = 1². Langkah: k² + (2k+1) = (k+1)².'], ['Apa beda "∀x ∃y" dan "∃y ∀x"? Beri contoh bahwa urutannya penting.', '"Setiap orang mencintai seseorang" tidak sama dengan "ada seseorang yang dicintai semua orang".']] },
            { summary: ['Himpunan: ∪, ∩, −, komplemen, himpunan kuasa (2ⁿ), inklusi-eksklusi.', 'Logika: ¬ ∧ ∨ → ↔; p → q setara dengan ¬p ∨ q dan dengan kontraposisinya.', 'Kuantor ∀ dan ∃, serta negasinya; urutan kuantor penting.', 'Bukti: langsung, kontraposisi, kontradiksi, induksi. Pengujian bukan bukti.'] },
        ],
        faq: [['Mengapa matematika diskrit penting bagi informatika?', 'Ia adalah bahasa formal untuk algoritma, struktur data, basis data relasional, kriptografi, jaringan, dan verifikasi program.'], ['Apa bedanya himpunan dan list?', 'Himpunan tidak berurutan dan tanpa duplikat; list berurutan dan boleh duplikat.'], ['Apa itu relasi dan fungsi?', 'Relasi adalah himpunan pasangan terurut; fungsi adalah relasi yang memetakan setiap masukan ke tepat satu keluaran. Relasi adalah dasar tabel basis data.']],
        sources: [REF_ROSEN, ['Lehman, Leighton, Meyer, Mathematics for Computer Science (MIT, gratis)', 'https://courses.csail.mit.edu/6.042/spring18/mcs.pdf'], ['MIT OpenCourseWare 6.042J: Mathematics for Computer Science', 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/'], ['Dokumentasi Python: set types', 'https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset']],
    },

    {
        slug: 'kombinatorika-dan-peluang-permutasi-kombinasi-dan-simulasi',
        title: 'Kombinatorika dan Peluang: Permutasi, Kombinasi, Simulasi',
        description: 'Pelajari permutasi, kombinasi, peluang, teorema Bayes, dan paradoks ulang tahun, dengan simulasi Monte Carlo untuk memeriksa jawaban.',
        date: D, category: C, level: 'Menengah', tags: ['kombinatorika', 'peluang', 'permutasi', 'kombinasi', 'teorema Bayes'], cta: 'none',
        prereq: ['himpunan', 'rekursi dasar'],
        lead: 'Berapa banyak kata sandi 8 karakter yang mungkin? Berapa peluang dua orang di satu kelas berulang tahun sama? Seberapa percaya hasil tes medis yang positif? Kombinatorika dan peluang menjawab pertanyaan seperti ini, dan mendasari analisis algoritma, keamanan, basis data, dan pembelajaran mesin.',
        body: [
            { objectives: ['memakai prinsip penjumlahan dan perkalian', 'membedakan permutasi dan kombinasi serta menghitungnya', 'memakai peluang klasik, aturan penjumlahan, dan perkalian', 'menghitung peluang bersyarat dan memakai teorema Bayes', 'memverifikasi jawaban analitis dengan simulasi Monte Carlo'] },
            { h2: 'Prinsip menghitung' },
            { w: 'compare', title: 'Dua prinsip dasar', tabs: [{ label: 'Perkalian', html: 'Bila satu pekerjaan terdiri dari beberapa langkah <b>berurutan</b> dengan m, n, ... pilihan, jumlah cara = m × n × ... Contoh: kata sandi 4 digit PIN: 10 × 10 × 10 × 10 = 10.000.' }, { label: 'Penjumlahan', html: 'Bila ada beberapa pilihan <b>yang saling lepas</b>, jumlah cara = m + n + ... Contoh: memilih satu kegiatan dari 3 olahraga atau 4 kesenian: 3 + 4 = 7.' }] },
            { code: py`def baca(detik):
    for batas, satuan in ((60, "detik"), (3600, "menit"), (86400, "jam"), (86400 * 365, "hari")):
        if detik < batas:
            pembagi = {"detik": 1, "menit": 60, "jam": 3600, "hari": 86400}[satuan]
            return f"{detik / pembagi:,.1f} {satuan}"
    return f"{detik / (86400 * 365):,.3g} tahun"

# kata sandi acak: ruang kemungkinan tumbuh eksponensial terhadap panjang
for panjang, alfabet, nama in [(6, 10, "angka saja (10)"), (8, 26, "huruf kecil (26)"), (8, 62, "huruf+angka (62)"), (12, 94, "semua karakter cetak (94)")]:
    total = alfabet ** panjang
    print(f"{panjang:>2} karakter, {nama:<26} {total:>28,} kemungkinan -> rata-rata {baca(total / 2 / 1e10)} pada 10 miliar tebakan/detik")`, lang: 'python', run: true, caption: 'Menambah panjang jauh lebih berpengaruh daripada menambah ragam karakter: 12 karakter acak dari 94 simbol berada di luar jangkauan serangan tebak buta.' },
            { h2: 'Permutasi dan kombinasi' },
            { table: { head: ['', 'Urutan penting?', 'Rumus', 'Contoh: pilih 3 dari 5 orang'], rows: [['Permutasi P(n, r)', 'Ya', 'n! / (n − r)!', '5×4×3 = 60 (ketua, wakil, sekretaris)'], ['Kombinasi C(n, r)', 'Tidak', 'n! / (r! (n − r)!)', '60 / 3! = 10 (panitia 3 orang)']] } },
            { code: py`from math import factorial, perm, comb
from itertools import permutations, combinations

print("5! =", factorial(5), "| P(5,3) =", perm(5, 3), "| C(5,3) =", comb(5, 3))
orang = ["A", "B", "C", "D", "E"]
print("jumlah permutasi 3 dari 5:", len(list(permutations(orang, 3))), "contoh:", list(permutations(orang, 3))[:3])
print("jumlah kombinasi 3 dari 5:", len(list(combinations(orang, 3))), "contoh:", list(combinations(orang, 3))[:3])

# identitas: C(n,r) = C(n,n-r); jumlah semua C(n,r) = 2^n
n = 10
print(comb(10, 3) == comb(10, 7), sum(comb(n, r) for r in range(n + 1)) == 2 ** n)

# segitiga Pascal: C(n,r) = C(n-1,r-1) + C(n-1,r)
for baris in range(6):
    print(" ".join(f"{comb(baris, r):>2}" for r in range(baris + 1)).center(24))

# contoh: berapa poker "full house"? 3 kartu sejenis + 2 kartu sejenis dari kartu 52
full_house = 13 * comb(4, 3) * 12 * comb(4, 2)
print("\nfull house:", full_house, "dari", comb(52, 5), "tangan ->", f"{full_house / comb(52, 5) * 100:.3f}%")`, lang: 'python', run: true },
            { h2: 'Peluang dasar' },
            `Bila semua hasil sama mungkin, <b>P(A) = (hasil yang diinginkan) / (semua hasil)</b>, bernilai antara 0 dan 1. Aturan: P(Aᶜ) = 1 − P(A); P(A ∪ B) = P(A) + P(B) − P(A ∩ B); untuk kejadian <i>bebas</i>, P(A ∩ B) = P(A) · P(B).`,
            { code: py`import random
from itertools import product

# dua dadu: peluang jumlah = 7
hasil = list(product(range(1, 7), repeat=2))
print("P(jumlah=7) analitis :", sum(1 for a, b in hasil if a + b == 7), "/", len(hasil), "=", round(6 / 36, 4))

# simulasi Monte Carlo untuk memeriksa
rng = random.Random(42)
N = 200_000
sim = sum(1 for _ in range(N) if rng.randint(1, 6) + rng.randint(1, 6) == 7) / N
print("P(jumlah=7) simulasi  :", round(sim, 4), f"(dari {N:,} lemparan)")

# "gambler's fallacy": setelah 5 kali angka, peluang angka berikutnya tetap 0.5
berurutan = tahan = 0
for _ in range(400_000):
    lemparan = [rng.random() < 0.5 for _ in range(6)]
    if all(lemparan[:5]):
        berurutan += 1; tahan += lemparan[5]
print("setelah 5 angka berturut-turut, P(angka lagi) =", round(tahan / berurutan, 3))`, lang: 'python', run: true, caption: 'Kejadian bebas tidak memiliki ingatan: lemparan sebelumnya tidak memengaruhi berikutnya.' },
            { h2: 'Paradoks ulang tahun' },
            `Berapa orang dalam satu ruangan agar peluang ada dua yang berulang tahun sama melebihi 50%? Jawabannya mengejutkan: hanya <b>23 orang</b>. Intuisi kita membandingkan dengan diri sendiri, padahal jumlah pasangan tumbuh kuadratik: 23 orang menghasilkan 253 pasangan.`,
            { code: py`from math import prod
import random

def peluang_sama(n, hari=365):
    tak_ada = prod((hari - k) / hari for k in range(n))      # semua berbeda
    return 1 - tak_ada

for n in (10, 23, 30, 50, 70):
    print(f"{n:>3} orang: peluang ada yang berulang tahun sama = {peluang_sama(n) * 100:5.1f}%")

rng = random.Random(7)
N = 20000
sim = sum(1 for _ in range(N) if len({rng.randrange(365) for _ in range(23)}) < 23) / N
print(f"\nsimulasi untuk 23 orang: {sim * 100:.1f}%")

# kaitannya dengan keamanan: tabrakan hash. Untuk hash b bit, tabrakan muncul setelah ~2^(b/2) masukan
print("hash 32 bit: tabrakan setelah ~", int(2 ** 16), "masukan | hash 128 bit: ~", f"{2 ** 64:.1e}")`, lang: 'python', run: true, caption: 'Prinsip yang sama menjelaskan serangan ulang tahun terhadap fungsi hash: tabrakan jauh lebih mudah ditemukan daripada preimage, sehingga hash aman memerlukan keluaran panjang (SHA-256 untuk keamanan 128 bit terhadap tabrakan).' },
            { h2: 'Peluang bersyarat dan Bayes' },
            { math: 'P(A | B) = P(A ∩ B) / P(B)        Bayes: P(A | B) = P(B | A) · P(A) / P(B)' },
            `Contoh klasik: sebuah penyakit menyerang 1% populasi. Tes memiliki sensitivitas 95% (benar positif bila sakit) dan spesifisitas 90% (benar negatif bila sehat). Bila hasil tes seseorang positif, seberapa besar peluang ia benar-benar sakit?`,
            { code: py`prevalensi = 0.01
sensitivitas = 0.95            # P(positif | sakit)
spesifisitas = 0.90            # P(negatif | sehat)

p_positif = sensitivitas * prevalensi + (1 - spesifisitas) * (1 - prevalensi)
p_sakit_jika_positif = sensitivitas * prevalensi / p_positif
print(f"P(positif)               = {p_positif:.4f}")
print(f"P(sakit | tes positif)   = {p_sakit_jika_positif:.4f}  (hanya ~{p_sakit_jika_positif * 100:.1f}%)")

# cara intuitif: bayangkan 10.000 orang
sakit, sehat = 10_000 * prevalensi, 10_000 * (1 - prevalensi)
benar_positif = sakit * sensitivitas
salah_positif = sehat * (1 - spesifisitas)
print(f"dari 10.000 orang: {benar_positif:.0f} sakit-positif vs {salah_positif:.0f} sehat-positif -> {benar_positif / (benar_positif + salah_positif) * 100:.1f}%")`, lang: 'python', run: true, caption: 'Meski tes "akurat 90–95%", sebagian besar hasil positif adalah positif palsu karena penyakitnya langka. Inilah "kekeliruan tingkat dasar" (base rate fallacy), dan dasar filter spam Bayesian serta evaluasi model klasifikasi.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Memilih ketua, wakil, dan bendahara dari 6 orang adalah...', options: ['Permutasi P(6,3) = 120', 'Kombinasi C(6,3) = 20', '6³ = 216'], answer: 0, why: 'Urutan (jabatan) penting.' }, { q: 'Peluang ada dua orang berulang tahun sama pada kelompok 23 orang?', options: ['Sekitar 50%', 'Sekitar 6%', 'Sekitar 99%'], answer: 0, why: 'Karena ada 253 pasangan.' }, { q: 'Pada tes dengan prevalensi sangat rendah, positif palsu...', options: ['Bisa mendominasi hasil positif', 'Tidak pernah terjadi', 'Selalu lebih sedikit dari positif benar'], answer: 0, why: 'Teorema Bayes.' }] },
            { exercise: [['Berapa cara menyusun huruf dari kata "KOMPUTER" (semua berbeda)?', '8! = 40.320.'], ['Berapa banyak kata berbeda dari "BAKSO"? Dari "KAKAK"?', 'BAKSO: 5! = 120 (semua beda). KAKAK: 5!/(3!·2!) = 10 (K tiga kali, A dua kali).'], ['Dari 10 mahasiswa dipilih 4 untuk tim. Berapa cara?', 'C(10,4) = 210.'], ['Lempar dua koin. Peluang minimal satu gambar?', '1 − P(dua angka) = 1 − ¼ = ¾.']] },
            { summary: ['Perkalian untuk langkah berurutan; penjumlahan untuk pilihan yang saling lepas.', 'Permutasi mementingkan urutan; kombinasi tidak.', 'Peluang klasik, kejadian bebas, dan inklusi-eksklusi.', 'Bayes memperbarui keyakinan dengan bukti baru; waspadai tingkat dasar.', 'Simulasi Monte Carlo memeriksa jawaban analitis.'] },
        ],
        faq: [['Apa itu distribusi binomial?', 'Peluang mendapat k keberhasilan dalam n percobaan bebas dengan peluang p: C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ.'], ['Mengapa simulasi tidak persis sama dengan jawaban analitis?', 'Hasil simulasi acak mendekati nilai sebenarnya dengan galat sekitar 1/√N; makin banyak percobaan makin dekat.'], ['Di mana peluang dipakai dalam informatika?', 'Analisis algoritma acak (quick sort acak, hash), keamanan, kompresi, jaringan (antrean), dan pembelajaran mesin.']],
        sources: [REF_ROSEN, ['Blitzstein dan Hwang, Introduction to Probability (CRC Press; Harvard Stat 110)', 'https://projects.iq.harvard.edu/stat110/home'], ['Dokumentasi Python: math.comb dan math.perm', 'https://docs.python.org/3/library/math.html#math.comb'], ['MIT OpenCourseWare 6.042J: Mathematics for Computer Science', 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/']],
    },

    {
        slug: 'automata-hingga-dfa-dan-ekspresi-reguler-mesin-keadaan-berhingga',
        title: 'Automata Hingga: DFA dan Ekspresi Reguler',
        description: 'Pelajari DFA dan ekspresi reguler: keadaan, transisi, simulasi di Python, hubungan dengan regex, dan batasnya (mengapa kurung seimbang butuh lebih).',
        date: D, category: C, level: 'Menengah', tags: ['automata', 'DFA', 'ekspresi reguler', 'mesin keadaan', 'teori komputasi'], cta: 'none',
        prereq: ['himpunan', 'ekspresi reguler dasar'],
        lead: 'Mesin keadaan berhingga adalah model komputasi paling sederhana: sejumlah keadaan dan aturan perpindahan. Namun ia muncul di mana-mana: pencocokan teks, protokol jaringan, lampu lalu lintas, kontrol gim, dan tentu saja ekspresi reguler. Memahaminya menunjukkan apa yang dapat dan tidak dapat dilakukan regex.',
        body: [
            { objectives: ['mendefinisikan DFA: keadaan, alfabet, transisi, keadaan awal dan akhir', 'menggambar dan mensimulasikan DFA untuk suatu bahasa', 'menghubungkan DFA dengan ekspresi reguler', 'merancang DFA untuk pola praktis (angka, surel sederhana, protokol)', 'menjelaskan batas DFA: bahasa non-reguler seperti kurung seimbang'] },
            { h2: 'Contoh pertama: lampu lalu lintas' },
            { svg: 'diagram', w: 600, h: 160, label: 'Mesin keadaan lampu lalu lintas', nodes: [{ id: 'h', x: 100, y: 80, shape: 'circle', w: 70, h: 70, t: 'Hijau' }, { id: 'k', x: 300, y: 80, shape: 'circle', w: 70, h: 70, t: 'Kuning' }, { id: 'm', x: 500, y: 80, shape: 'circle', w: 70, h: 70, t: 'Merah' }], edges: [{ from: 'h', to: 'k', label: 'timer' }, { from: 'k', to: 'm', label: 'timer' }, { from: 'm', to: 'h', label: 'timer', via: [[300, 140]] }], caption: 'Keadaan (lingkaran), transisi (panah berlabel masukan). Mesin selalu berada di tepat satu keadaan.' },
            { h2: 'Definisi DFA' },
            `DFA (Deterministic Finite Automaton) terdiri dari: himpunan keadaan <i>Q</i>, alfabet <i>Σ</i>, fungsi transisi <i>δ: Q × Σ → Q</i> (tepat satu keadaan berikutnya untuk setiap simbol), keadaan awal <i>q₀</i>, dan himpunan keadaan akhir (penerima) <i>F</i>. Sebuah string <b>diterima</b> bila setelah membaca seluruh string, mesin berada di keadaan akhir.`,
            { h3: 'DFA untuk: string biner dengan jumlah 1 yang genap' },
            { svg: 'diagram', w: 520, h: 140, label: 'DFA jumlah satu genap', nodes: [{ id: 'g', x: 130, y: 70, shape: 'circle', w: 80, h: 80, t: 'genap (awal, akhir)' }, { id: 'j', x: 390, y: 70, shape: 'circle', w: 80, h: 80, t: 'ganjil' }], edges: [{ from: 'g', to: 'j', label: '1', via: [[260, 25]] }, { from: 'j', to: 'g', label: '1', via: [[260, 115]] }], caption: 'Membaca 0 tidak mengubah keadaan (panah ke diri sendiri, tidak digambar); membaca 1 membalik keadaan.' },
            { code: py`class DFA:
    def __init__(self, transisi, awal, akhir):
        self.t, self.awal, self.akhir = transisi, awal, set(akhir)

    def terima(self, teks):
        keadaan = self.awal
        jejak = [keadaan]
        for simbol in teks:
            if (keadaan, simbol) not in self.t:        # tidak ada transisi: ditolak
                return False, jejak
            keadaan = self.t[(keadaan, simbol)]
            jejak.append(keadaan)
        return keadaan in self.akhir, jejak

# jumlah '1' genap
genap1 = DFA({("genap", "0"): "genap", ("genap", "1"): "ganjil",
              ("ganjil", "0"): "ganjil", ("ganjil", "1"): "genap"}, "genap", {"genap"})

for s in ["", "0", "1", "11", "1011", "10101", "0000"]:
    diterima, jejak = genap1.terima(s)
    print(f"{s!r:>8} -> {'DITERIMA' if diterima else 'ditolak ':<8}  {' > '.join(jejak)}")`, lang: 'python', run: true },
            { h3: 'DFA untuk: bilangan bulat berformat "tanda opsional lalu satu atau lebih digit"' },
            { code: py`class DFA:
    def __init__(self, transisi, awal, akhir): self.t, self.awal, self.akhir = transisi, awal, set(akhir)
    def terima(self, teks):
        k = self.awal
        for s in teks:
            k = self.t.get((k, s))
            if k is None: return False
        return k in self.akhir

# keadaan: S (awal), T (sudah tanda), D (sudah ada digit; akhir)
t = {}
for d in "0123456789":
    t[("S", d)] = "D"; t[("T", d)] = "D"; t[("D", d)] = "D"
t[("S", "+")] = "T"; t[("S", "-")] = "T"
bulat = DFA(t, "S", {"D"})

for s in ["42", "-7", "+0", "", "-", "4-2", "12a", "007"]:
    print(f"{s!r:>6} -> {bulat.terima(s)}")

# setara dengan ekspresi reguler  [+-]?[0-9]+
import re
polanya = re.compile(r"[+-]?[0-9]+")
print("DFA dan regex sepakat:", all(bulat.terima(s) == bool(polanya.fullmatch(s)) for s in ["42", "-7", "+0", "", "-", "4-2", "12a", "007"]))`, lang: 'python', run: true, caption: 'DFA dan ekspresi reguler dapat menyatakan kelas bahasa yang sama: bahasa reguler (teorema Kleene).' },
            { h2: 'Ekspresi reguler: tiga operasi dasar' },
            { table: { head: ['Operasi', 'Notasi', 'Makna'], rows: [['Penyambungan', 'ab', 'a diikuti b'], ['Pilihan', 'a|b', 'a atau b'], ['Bintang Kleene', 'a*', 'nol atau lebih a']] } },
            `Fitur lain (<code>+</code>, <code>?</code>, <code>[a-z]</code>, <code>\\d</code>) hanyalah singkatan dari ketiga operasi itu. Mesin regex mengubah pola menjadi automata (NFA lalu DFA) untuk mencocokkan teks.`,
            { w: 'regex', title: 'Coba ekspresi reguler', desc: 'Pola ini mencocokkan bilangan bulat opsional bertanda. Ubah untuk bereksperimen.', pattern: '[+-]?[0-9]+', text: 'Suhu 25, turun ke -3, lalu +12 dan 007.' },
            { h2: 'Batas DFA: yang tidak dapat dilakukan' },
            `DFA hanya memiliki memori terbatas (keadaan saat ini). Ia tidak dapat menghitung tanpa batas. Akibatnya, bahasa seperti <b>kurung seimbang</b> <code>(((...)))</code> atau <code>aⁿbⁿ</code> (n kali a lalu n kali b) <b>bukan reguler</b>: perlu mengingat berapa kurung terbuka, bilangan yang tak terbatas.`,
            { code: py`import re

# regex tidak dapat mencocokkan kurung bersarang dengan kedalaman sembarang
pola = re.compile(r"^(\(\))*$")                    # hanya "()()()", tidak memahami "(())"
for s in ["()", "()()", "(())", "((()))"]:
    print(f"{s:<8} regex: {bool(pola.match(s))}   seimbang sebenarnya: {s.count('(') == s.count(')')}")

# pemecahan: tambahkan memori berupa pencacah atau tumpukan (automata pushdown)
def seimbang(s):
    kedalaman = 0
    for ch in s:
        kedalaman += 1 if ch == "(" else -1
        if kedalaman < 0: return False
    return kedalaman == 0
print([seimbang(s) for s in ["(())", "(()", "())("]])`, lang: 'python', run: true, caption: 'Hierarki Chomsky: bahasa reguler (DFA/regex) ⊂ bebas konteks (automata pushdown, tata bahasa untuk bahasa pemrograman) ⊂ peka konteks ⊂ rekursif enumerabel (mesin Turing).' },
            { callout: 'Peringatan praktis: banyak mesin regex modern (Python <code>re</code>, JavaScript, PCRE) memakai <i>backtracking</i> dan fitur di luar bahasa reguler (referensi balik). Pola buruk seperti <code>(a+)+$</code> dapat berjalan sangat lambat pada masukan tertentu (ReDoS), kerentanan nyata. Untuk masukan tak tepercaya, batasi panjang dan hindari pola bersarang yang ambigu.', kind: 'warn', title: 'ReDoS' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'DFA diterima bila setelah membaca seluruh string mesin berada di...', options: ['Keadaan akhir', 'Keadaan awal', 'Keadaan mana saja'], answer: 0, why: 'Himpunan F.' }, { q: 'Bahasa yang tidak dapat dikenali DFA?', options: ['Kurung seimbang', 'Bilangan biner genap', 'String berakhiran "ab"'], answer: 0, why: 'Perlu memori tak terbatas.' }, { q: 'Ekspresi reguler dan DFA...', options: ['Menyatakan kelas bahasa yang sama', 'Berbeda total', 'Hanya sama untuk angka'], answer: 0, why: 'Teorema Kleene.' }] },
            { exercise: [['Rancang DFA untuk string biner yang berakhiran "01".', 'Tiga keadaan: awal, sudah membaca 0, sudah membaca "01" (akhir); dari "01" membaca 1 kembali ke awal, membaca 0 ke keadaan "sudah 0".'], ['Tulis regex untuk kode pos 5 digit dan jelaskan DFA-nya.', '[0-9]{5}: lima keadaan berurutan, masing-masing menerima satu digit, keadaan kelima akhir.'], ['Mengapa DFA untuk "banyak a sama dengan banyak b" tidak mungkin?', 'Perlu menghitung selisih tanpa batas; keadaan berhingga tidak cukup (lema pemompaan).'], ['Apa perbedaan DFA dan NFA?', 'NFA boleh memiliki beberapa transisi untuk satu simbol (dan transisi kosong). Daya ekspresinya sama; NFA dapat diubah menjadi DFA.']] },
            { summary: ['DFA: keadaan, alfabet, transisi, awal, akhir; menerima bila berakhir di keadaan akhir.', 'DFA dan ekspresi reguler setara: bahasa reguler.', 'Regex praktis = penyambungan, pilihan, bintang, dengan singkatan.', 'Memori terbatas membuat DFA tak mampu mengenali kurung seimbang; butuh tumpukan.', 'Waspadai ReDoS pada regex backtracking.'] },
        ],
        faq: [['Di mana mesin keadaan dipakai selain teks?', 'Protokol jaringan (TCP), kontrol gim dan UI, perangkat tersemat, alur kerja pesanan (status pesanan), dan pemodelan perilaku.'], ['Apa itu mesin Turing?', 'Model komputasi dengan pita tak terbatas; mampu menghitung apa pun yang dapat dihitung secara algoritmik.'], ['Bagaimana membangun lexer dengan DFA?', 'Setiap jenis token (identifier, angka) dinyatakan sebagai pola regex yang digabung menjadi satu DFA; alat seperti Lex/Flex melakukannya.']],
        sources: [REF_SIPSER, ['Russ Cox, Regular Expression Matching Can Be Simple And Fast', 'https://swtch.com/~rsc/regexp/regexp1.html'], REF_AHO, ['Dokumentasi Python: re', 'https://docs.python.org/3/library/re.html']],
    },

    {
        slug: 'machine-learning-dasar-regresi-linear-knn-dan-evaluasi-dari-nol',
        title: 'Machine Learning Dasar: Regresi Linear, KNN, dan Evaluasi',
        description: 'Bangun regresi linear dan KNN dari nol di Python, pahami data latih-uji, overfitting, serta metrik akurasi, presisi, dan recall.',
        date: D, category: C, level: 'Menengah', tags: ['machine learning', 'regresi linear', 'KNN', 'overfitting', 'evaluasi model'], cta: 'none',
        prereq: ['Python dasar', 'fungsi dan list', 'aljabar dasar'],
        lead: 'Pembelajaran mesin tampak misterius sampai Anda membangunnya dari nol. Pada intinya: kita punya data, memilih model dengan parameter, mengukur seberapa salah model itu, dan menyetel parameter agar kesalahannya mengecil. Dua model sederhana, regresi linear dan KNN, cukup untuk memahami hampir semua gagasan utama.',
        body: [
            { objectives: ['membedakan pembelajaran terbimbing, tak terbimbing, dan penguatan', 'membangun regresi linear dengan fungsi kerugian dan gradient descent', 'membangun klasifikasi k-nearest neighbors', 'membagi data menjadi latih dan uji serta menjelaskan overfitting', 'menghitung dan menafsirkan akurasi, presisi, recall, dan matriks konfusi'] },
            { h2: 'Gambaran besar' },
            { table: { head: ['Jenis', 'Data', 'Tujuan', 'Contoh'], rows: [['Terbimbing (supervised)', 'Masukan + label benar', 'Memprediksi label untuk data baru', 'Prediksi harga rumah (regresi), deteksi spam (klasifikasi)'], ['Tak terbimbing (unsupervised)', 'Masukan tanpa label', 'Menemukan struktur', 'Pengelompokan pelanggan (clustering)'], ['Penguatan (reinforcement)', 'Interaksi dan hadiah', 'Belajar kebijakan bertindak', 'Gim, robotika']] } },
            { svg: 'cycle', label: 'Siklus pembelajaran mesin', items: ['Kumpulkan dan bersihkan data', 'Pilih model dan fitur', 'Latih: sesuaikan parameter', 'Evaluasi pada data yang belum pernah dilihat', 'Perbaiki atau pasang'], caption: 'Kebanyakan waktu proyek nyata dihabiskan pada data (tahap 1) dan evaluasi yang jujur (tahap 4).' },
            { h2: 'Regresi linear dengan gradient descent' },
            `Model: <code>ŷ = w·x + b</code>. Kita mencari w dan b sehingga garis paling mendekati data. Ukuran kesalahan: <b>MSE</b> (rata-rata kuadrat selisih). Gradient descent menyetel parameter sedikit demi sedikit ke arah yang menurunkan MSE.`,
            { code: py`import random

# data sintetis: harga = 3 * luas + 20 + derau
rng = random.Random(1)
luas  = [rng.uniform(20, 120) for _ in range(60)]
harga = [3 * x + 20 + rng.gauss(0, 12) for x in luas]        # satuan: juta Rp
n = len(luas)

def mse(w, b, xs):
    return sum((w * x + b - y) ** 2 for x, y in zip(xs, harga)) / n

def latih(xs, laju, langkah, cetak):
    w = b = 0.0
    for t in range(1, langkah + 1):
        gw = sum(2 * (w * x + b - y) * x for x, y in zip(xs, harga)) / n
        gb = sum(2 * (w * x + b - y)     for x, y in zip(xs, harga)) / n
        w -= laju * gw; b -= laju * gb
        if t in cetak: print(f"   langkah {t:>3}: w={w:9.3f} b={b:9.3f} MSE={mse(w, b, xs):14.2f}")
    return w, b

# 1) fitur mentah dengan laju belajar terlalu besar -> MENYIMPANG (kesalahan makin besar)
print("laju 0.001 pada fitur mentah:")
latih(luas, 0.001, 5, {1, 2, 3, 4, 5})

# 2) standarkan fitur (rata-rata 0, simpangan baku 1) -> belajar stabil dan cepat
mx = sum(luas) / n
sx = (sum((x - mx) ** 2 for x in luas) / n) ** 0.5
xs = [(x - mx) / sx for x in luas]
print("fitur distandarkan, laju 0.1 (w dan b pada langkah ini masih dalam satuan terstandar):")
ws, bs = latih(xs, 0.1, 100, {1, 5, 20, 100})

# kembalikan ke satuan asli: w * (x - mx)/sx + b  =  (w/sx) * x + (b - w*mx/sx)
w, b = ws / sx, bs - ws * mx / sx
my = sum(harga) / n
w_opt = sum((x - mx) * (y - my) for x, y in zip(luas, harga)) / sum((x - mx) ** 2 for x in luas)
b_opt = my - w_opt * mx
print(f"gradient descent : w={w:6.3f}  b={b:6.3f}")
print(f"solusi tertutup  : w={w_opt:6.3f}  b={b_opt:6.3f}")
print(f"prediksi rumah 80 m2: {w * 80 + b:.1f} juta Rp")`, lang: 'python', run: true, caption: 'Parameter sejati w=3 dan b=20; hasil mendekati dengan derau. Gradient descent adalah cara yang sama melatih jaringan saraf, hanya dengan jutaan parameter.' },
            { callout: '<b>Laju belajar</b> (learning rate) adalah pilihan penting: terlalu kecil membuat belajar sangat lambat, terlalu besar membuat parameter melompat melewati titik terbaik dan bahkan menyimpang (kesalahan membesar). Contoh di atas memperlihatkan keduanya: laju 0,001 pada fitur mentah menyimpang, sedangkan fitur yang distandarkan stabil dengan laju 0,1. Karena itu data hampir selalu distandarkan sebelum dilatih.', kind: 'info', title: 'Laju belajar' },
            { h2: 'Klasifikasi dengan k-nearest neighbors (KNN)' },
            `KNN tidak "belajar" parameter. Untuk data baru, ia mencari k data latih terdekat dan memilih label mayoritas. Intuisi: hal yang mirip cenderung berlabel sama.`,
            { code: py`import random, math
from collections import Counter

rng = random.Random(3)
# dua kelas titik 2D: "A" berpusat di (2,2), "B" berpusat di (5,5)
data = [((rng.gauss(2, 1), rng.gauss(2, 1)), "A") for _ in range(50)] + \
       [((rng.gauss(5, 1), rng.gauss(5, 1)), "B") for _ in range(50)]
rng.shuffle(data)
latih, uji = data[:70], data[70:]                      # 70% latih, 30% uji

def knn(titik, data_latih, k=5):
    terdekat = sorted(data_latih, key=lambda d: math.dist(titik, d[0]))[:k]
    return Counter(label for _, label in terdekat).most_common(1)[0][0]

benar = sum(1 for x, y in uji if knn(x, latih) == y)
print(f"akurasi pada data uji: {benar}/{len(uji)} = {benar / len(uji) * 100:.1f}%")
print("titik (2,2) ->", knn((2, 2), latih), "| titik (5,5) ->", knn((5, 5), latih), "| titik (3.5,3.5) ->", knn((3.5, 3.5), latih), "(di perbatasan)")`, lang: 'python', run: true },
            { h2: 'Overfitting: menghafal vs belajar' },
            `Model yang terlalu rumit menghafal derau pada data latih sehingga gagal pada data baru. Pada KNN, <code>k = 1</code> menghafal setiap titik; <code>k</code> terlalu besar terlalu kasar. Kita pilih k dengan melihat kinerja pada data yang <b>tidak dipakai melatih</b>.`,
            { code: py`import random, math
from collections import Counter

rng = random.Random(11)
def buat(n):
    out = []
    for _ in range(n):
        label = rng.choice("AB")
        pusat = 2 if label == "A" else 3.2                  # kelas tumpang tindih sehingga ada derau nyata
        out.append(((rng.gauss(pusat, 1.1), rng.gauss(pusat, 1.1)), label))
    return out

latih, uji = buat(120), buat(400)

def knn(t, data, k):
    terdekat = sorted(data, key=lambda d: math.dist(t, d[0]))[:k]
    return Counter(l for _, l in terdekat).most_common(1)[0][0]

def akurasi(data_uji, data_latih, k):
    return sum(knn(x, data_latih, k) == y for x, y in data_uji) / len(data_uji)

print(" k   akurasi latih   akurasi uji")
for k in (1, 3, 5, 9, 15, 31, 61):
    print(f"{k:>2}      {akurasi(latih, latih, k) * 100:6.1f}%       {akurasi(uji, latih, k) * 100:6.1f}%")`, lang: 'python', run: true, caption: 'Pada k = 1, akurasi latih 100% (setiap titik tetangga terdekat dirinya sendiri) tetapi akurasi uji lebih rendah: itu overfitting. Akurasi uji adalah ukuran kejujuran.' },
            { h2: 'Metrik evaluasi klasifikasi' },
            { table: { head: ['Metrik', 'Rumus', 'Pertanyaan'], rows: [['Akurasi', '(TP + TN) / total', 'Berapa persen tebakan benar?'], ['Presisi', 'TP / (TP + FP)', 'Dari yang diprediksi positif, berapa yang benar-benar positif?'], ['Recall (sensitivitas)', 'TP / (TP + FN)', 'Dari yang sebenarnya positif, berapa yang tertangkap?'], ['F1', '2·P·R / (P + R)', 'Rata-rata harmonik presisi dan recall']] } },
            { code: py`# kasus: deteksi penipuan, hanya 2% transaksi yang penipuan
TP, FN = 12, 8            # dari 20 penipuan: 12 tertangkap, 8 lolos
FP, TN = 30, 950          # dari 980 transaksi normal: 30 salah ditandai, 950 benar
total = TP + FN + FP + TN
akurasi = (TP + TN) / total
presisi = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * presisi * recall / (presisi + recall)
print(f"akurasi {akurasi:.3f} | presisi {presisi:.3f} | recall {recall:.3f} | F1 {f1:.3f}")

# model "malas": menyatakan semua transaksi normal
akurasi_malas = (0 + (FP + TN)) / total
print(f"model yang tidak pernah mendeteksi penipuan: akurasi {akurasi_malas:.3f} (tampak bagus!), recall 0.000")`, lang: 'python', run: true, caption: 'Akurasi menyesatkan pada data tak seimbang. Pilih metrik sesuai biaya kesalahan: pada deteksi penyakit biasanya recall tinggi (jangan lewatkan yang sakit), pada penyaringan spam penting presisi (jangan buang surel sah).' },
            { callout: 'Aturan kejujuran evaluasi: <b>jangan menilai model dengan data yang dipakai melatihnya</b>, dan jangan menyetel berulang-ulang terhadap data uji (itu membocorkan data uji ke model). Pisahkan data latih, validasi (untuk memilih model), dan uji (satu kali di akhir). Hati-hati juga terhadap kebocoran data (data leakage) dan bias pada data.', kind: 'warn', title: 'Evaluasi yang jujur' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tujuan gradient descent?', options: ['Menyetel parameter untuk memperkecil kerugian', 'Membagi data', 'Memilih fitur secara acak'], answer: 0, why: 'Bergerak ke arah penurunan kesalahan.' }, { q: 'Overfitting ditandai dengan...', options: ['Akurasi latih tinggi tetapi akurasi uji rendah', 'Akurasi latih dan uji sama-sama rendah', 'Akurasi uji lebih tinggi dari latih'], answer: 0, why: 'Model menghafal derau.' }, { q: 'Pada data sangat tak seimbang, metrik yang menyesatkan?', options: ['Akurasi', 'Recall', 'Matriks konfusi'], answer: 0, why: 'Model malas pun tampak akurat.' }] },
            { exercise: [['Apa yang terjadi bila laju belajar gradient descent terlalu besar?', 'Parameter melompat melewati optimum dan kerugian dapat membesar (divergen).'], ['Mengapa fitur sebaiknya distandarkan untuk KNN?', 'KNN memakai jarak; fitur berskala besar (gaji) mendominasi fitur berskala kecil (umur) jika tidak distandarkan.'], ['Hitung presisi dan recall: TP=40, FP=10, FN=20.', 'Presisi 40/50 = 0,8; recall 40/60 ≈ 0,667.'], ['Mengapa data uji tidak boleh dipakai untuk memilih k terbaik berulang kali?', 'Pilihan menjadi cocok dengan data uji tersebut (kebocoran), sehingga estimasi kinerja terlalu optimis; gunakan data validasi.']] },
            { summary: ['Pembelajaran mesin: data + model berparameter + ukuran kesalahan + penyetelan.', 'Regresi linear dengan gradient descent menyetel w dan b untuk memperkecil MSE.', 'KNN mengklasifikasi lewat tetangga terdekat; k mengatur kompleksitas.', 'Overfitting: bagus pada data latih, buruk pada data baru; ukur dengan data uji.', 'Pilih metrik sesuai biaya kesalahan; akurasi menyesatkan pada data tak seimbang.'] },
        ],
        faq: [['Pustaka apa yang dipakai di dunia nyata?', 'scikit-learn untuk model klasik, PyTorch atau TensorFlow untuk jaringan saraf, serta pandas dan NumPy untuk data.'], ['Apa bedanya AI, machine learning, dan deep learning?', 'AI adalah bidang luas membuat mesin berperilaku cerdas; ML adalah pendekatan belajar dari data; deep learning adalah ML dengan jaringan saraf berlapis banyak.'], ['Bagaimana dengan model bahasa besar?', 'Mereka dilatih dengan prinsip serupa (meminimalkan kesalahan prediksi token berikutnya) pada skala data dan parameter yang sangat besar.']],
        sources: [REF_ISLP, REF_SKL, ['Andrew Ng, Machine Learning Specialization (Coursera/Stanford)', 'https://www.coursera.org/specializations/machine-learning-introduction'], ['Géron, Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (O\'Reilly)', '']],
    },

    {
        slug: 'hash-table-dari-nol-fungsi-hash-tabrakan-dan-rehashing',
        title: 'Hash Table dari Nol: Fungsi Hash, Tabrakan, Rehashing',
        description: 'Bangun hash table dari nol: fungsi hash, tabrakan, chaining, open addressing, rehashing, dan kompleksitasnya, serta cara kerja dict Python.',
        date: D, category: C, level: 'Menengah', tags: ['hash table', 'fungsi hash', 'tabrakan', 'chaining', 'dictionary'], cta: 'none',
        prereq: ['list', 'dictionary Python', 'kompleksitas algoritma'],
        lead: 'Dictionary Python, HashMap Java, objek JavaScript, dan indeks hash basis data semuanya adalah hash table: struktur data yang menjanjikan pencarian, penyisipan, dan penghapusan dalam waktu rata-rata konstan. Mari bangun satu dari nol untuk melihat mengapa ia cepat, kapan melambat, dan apa yang terjadi saat dua kunci "bertabrakan".',
        body: [
            { objectives: ['menjelaskan ide pemetaan kunci ke indeks dengan fungsi hash', 'mengimplementasikan hash table dengan chaining', 'menjelaskan open addressing (linear probing) dan clustering', 'menjelaskan faktor muat dan rehashing', 'menganalisis kompleksitas rata-rata vs terburuk dan menghubungkannya dengan dict Python'] },
            { h2: 'Ide dasar' },
            `Array memberi akses O(1) lewat indeks. Hash table meminjam trik itu untuk kunci apa saja: sebuah <b>fungsi hash</b> mengubah kunci menjadi bilangan bulat, lalu <code>bilangan mod ukuran_tabel</code> memberi indeks di array internal (ember/bucket).`,
            { w: 'hash', title: 'Cara kerja hash table', desc: 'Masukkan kata dan lihat ember tempat ia jatuh. Perhatikan bila dua kata berbagi ember (tabrakan).' },
            { h2: 'Fungsi hash dan tabrakan' },
            `Karena kunci yang mungkin jauh lebih banyak dari ember, <b>tabrakan tidak terhindarkan</b> (prinsip lubang merpati). Fungsi hash yang baik menyebar kunci merata dan murah dihitung.`,
            { code: py`def hash_buruk(kunci, ukuran):
    return len(kunci) % ukuran                      # hanya panjang kunci: banyak tabrakan

def hash_polinomial(kunci, ukuran):
    h = 0
    for ch in kunci:
        h = (h * 31 + ord(ch)) % (2 ** 32)           # setiap karakter dan posisinya berpengaruh
    return h % ukuran

kunci = ["apel", "jeruk", "mangga", "pisang", "durian", "melon", "kiwi", "nanas", "pepaya", "salak"]
for fungsi in (hash_buruk, hash_polinomial):
    ember = [0] * 7
    for k in kunci: ember[fungsi(k, 7)] += 1
    print(f"{fungsi.__name__:<16} sebaran per ember: {ember}   ember terpadat: {max(ember)}")`, lang: 'python', run: true, caption: 'Hash buruk menumpuk kunci berpanjang sama pada ember yang sama; hash polinomial menyebar lebih merata.' },
            { h2: 'Chaining: setiap ember berisi daftar' },
            { code: py`class HashChaining:
    def __init__(self, kapasitas=8):
        self.kapasitas = kapasitas
        self.ember = [[] for _ in range(kapasitas)]
        self.n = 0

    def _indeks(self, kunci): return hash(kunci) % self.kapasitas

    def set(self, kunci, nilai):
        daftar = self.ember[self._indeks(kunci)]
        for i, (k, _) in enumerate(daftar):
            if k == kunci:
                daftar[i] = (kunci, nilai); return          # perbarui kunci yang sudah ada
        daftar.append((kunci, nilai)); self.n += 1
        if self.n / self.kapasitas > 0.75: self._rehash()   # faktor muat terlalu tinggi

    def get(self, kunci, bawaan=None):
        for k, v in self.ember[self._indeks(kunci)]:
            if k == kunci: return v
        return bawaan

    def hapus(self, kunci):
        daftar = self.ember[self._indeks(kunci)]
        for i, (k, _) in enumerate(daftar):
            if k == kunci: del daftar[i]; self.n -= 1; return True
        return False

    def _rehash(self):
        lama = [item for daftar in self.ember for item in daftar]
        self.kapasitas *= 2                                  # gandakan ukuran
        self.ember = [[] for _ in range(self.kapasitas)]
        self.n = 0
        for k, v in lama: self.set(k, v)                     # setiap kunci dihitung ulang posisinya
        print(f"   (rehash: kapasitas menjadi {self.kapasitas})")

tabel = HashChaining()
for i, kata in enumerate(["apel", "jeruk", "mangga", "pisang", "durian", "melon", "kiwi", "nanas"]):
    tabel.set(kata, i)
print("get('mangga') =", tabel.get("mangga"), "| get('rambutan') =", tabel.get("rambutan", "tidak ada"))
tabel.set("mangga", 99); tabel.hapus("apel")
print("n =", tabel.n, "| faktor muat =", round(tabel.n / tabel.kapasitas, 2))`, lang: 'python', run: true, caption: 'Rehashing memastikan rata-rata panjang daftar tetap kecil. Karena kapasitas digandakan, biaya rehash teramortisasi menjadi O(1) per penyisipan.' },
            { h2: 'Open addressing: satu elemen per sel' },
            `Alih-alih daftar, jika sel sudah terisi, cari sel kosong berikutnya (<b>linear probing</b>: coba indeks+1, +2, ...). Penghapusan memerlukan penanda khusus ("batu nisan") agar rantai pencarian tidak terputus.`,
            { code: py`KOSONG, HAPUS = object(), object()

class HashProbing:
    def __init__(self, kapasitas=8):
        self.kap, self.sel, self.n = kapasitas, [KOSONG] * kapasitas, 0

    def _cari(self, kunci):
        i = hash(kunci) % self.kap
        pertama_hapus = None
        for langkah in range(self.kap):
            j = (i + langkah) % self.kap                       # linear probing
            if self.sel[j] is KOSONG:
                return (pertama_hapus if pertama_hapus is not None else j), langkah, False
            if self.sel[j] is HAPUS:
                if pertama_hapus is None: pertama_hapus = j
            elif self.sel[j][0] == kunci:
                return j, langkah, True
        return pertama_hapus, self.kap, False

    def set(self, kunci, nilai):
        j, _, ada = self._cari(kunci)
        if not ada:
            if (self.n + 1) / self.kap > 0.7: self._rehash(); j, _, _ = self._cari(kunci)
            self.n += 1
        self.sel[j] = (kunci, nilai)

    def get(self, kunci):
        j, langkah, ada = self._cari(kunci)
        return (self.sel[j][1], langkah) if ada else (None, langkah)

    def hapus(self, kunci):
        j, _, ada = self._cari(kunci)
        if ada: self.sel[j] = HAPUS; self.n -= 1

    def _rehash(self):
        lama = [s for s in self.sel if s is not KOSONG and s is not HAPUS]
        self.kap *= 2; self.sel = [KOSONG] * self.kap; self.n = 0
        for k, v in lama: self.set(k, v)

t = HashProbing()
for i, kata in enumerate(["apel", "jeruk", "mangga", "pisang", "durian"]): t.set(kata, i)
print("get('durian') ->", t.get("durian"), "(nilai, jumlah langkah probing)")
t.hapus("jeruk")
print("setelah hapus 'jeruk': get('jeruk') ->", t.get("jeruk"), "| get('durian') masih ->", t.get("durian"))
print("kapasitas:", t.kap, "| n:", t.n)`, lang: 'python', run: true },
            { h2: 'Perbandingan dan kompleksitas' },
            { table: { head: ['Aspek', 'Chaining', 'Open addressing'], rows: [['Memori', 'Ekstra penunjuk untuk daftar', 'Hanya array; lokalitas cache baik'], ['Faktor muat', 'Boleh > 1', 'Harus < 1; performa turun cepat mendekati 1'], ['Hapus', 'Sederhana', 'Perlu penanda hapus'], ['Kelemahan', 'Penunjuk tersebar', 'Clustering primer: kelompok sel terisi memanjang']] } },
            { table: { head: ['Operasi', 'Rata-rata', 'Terburuk'], rows: [['Cari / sisip / hapus', 'O(1)', 'O(n) bila semua kunci bertabrakan'], ['Rehash', 'O(n), teramortisasi O(1) per sisip', '']] } },
            { code: py`# bukti terburuk: kunci dengan hash sama membuat dict melambat menjadi O(n)
import time

class Buruk:
    def __init__(self, v): self.v = v
    def __hash__(self): return 1                  # semua kunci bertabrakan
    def __eq__(self, o): return self.v == o.v

class Baik:
    def __init__(self, v): self.v = v
    def __hash__(self): return hash(self.v)
    def __eq__(self, o): return self.v == o.v

for kelas in (Baik, Buruk):
    n = 2000
    mulai = time.perf_counter()
    d = {kelas(i): i for i in range(n)}
    durasi = time.perf_counter() - mulai
    print(f"{kelas.__name__:<6} {n} sisipan: {durasi * 1000:8.1f} ms")`, lang: 'python', run: true, caption: 'Satu fungsi hash yang buruk mengubah struktur O(1) menjadi O(n²) untuk n sisipan. Itu juga dasar serangan penolakan layanan dengan kunci yang dirancang bertabrakan; karena itu Python mengacak hash string per proses (PYTHONHASHSEED).' },
            { callout: 'Karena kunci dicari lewat hash dan kesamaan, kunci harus <b>immutable</b> (atau setidaknya tidak berubah hash-nya): itulah sebabnya list tidak boleh menjadi kunci dict di Python, tetapi tuple boleh. Dua objek yang sama menurut <code>==</code> harus memiliki hash yang sama.', kind: 'info', title: 'Aturan emas kunci' },
            { h2: 'Dict Python dan HashMap Java' },
            { ul: ['<b>dict CPython</b>: open addressing dengan probing yang diacak, ukuran tabel pangkat dua, rehash saat sekitar dua pertiga terisi; sejak Python 3.7 menjaga urutan penyisipan lewat larik indeks kompak terpisah.', '<b>HashMap Java</b>: chaining; ember dengan daftar panjang diubah menjadi pohon seimbang (sejak Java 8) agar kasus terburuk menjadi O(log n); kapasitas pangkat dua, faktor muat bawaan 0,75.', '<b>Set</b> hampir sama dengan dict tanpa nilai.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa tabrakan tidak terhindarkan?', options: ['Kunci mungkin jauh lebih banyak dari ember', 'Fungsi hash selalu buruk', 'Memori terbatas'], answer: 0, why: 'Prinsip lubang merpati.' }, { q: 'Tujuan rehashing?', options: ['Menjaga faktor muat rendah agar tetap cepat', 'Menghapus data', 'Mengurutkan kunci'], answer: 0, why: 'Memperbesar tabel dan menyebar ulang.' }, { q: 'Mengapa list tidak dapat menjadi kunci dict?', options: ['Dapat berubah sehingga hash-nya bisa berubah', 'Terlalu besar', 'Tidak ada urutan'], answer: 0, why: 'Hash harus stabil selama kunci di tabel.' }] },
            { exercise: [['Mengapa pencarian di hash table "rata-rata O(1)", bukan "selalu O(1)"?', 'Bila banyak kunci bertabrakan, pencarian harus menelusuri rantai atau probing panjang hingga O(n) pada kasus terburuk.'], ['Tabel berkapasitas 16 dan 12 elemen: faktor muatnya? Apa yang terjadi pada implementasi dengan ambang 0,75?', '12/16 = 0,75; menambah satu elemen lagi memicu rehash menjadi kapasitas 32.'], ['Mengapa penghapusan pada linear probing tidak boleh langsung mengosongkan sel?', 'Pencarian kunci lain yang pernah melewati sel itu akan berhenti terlalu awal dan gagal menemukan kunci yang ada.'], ['Implementasikan sistem hitung kemunculan kata memakai dict dan jelaskan kompleksitasnya.', 'Satu putaran: hitung[kata] = hitung.get(kata, 0) + 1; O(n) total untuk n kata (rata-rata).']] },
            { summary: ['Hash table memetakan kunci ke indeks dengan fungsi hash mod ukuran tabel.', 'Tabrakan ditangani dengan chaining atau open addressing.', 'Faktor muat dijaga lewat rehashing; sisip teramortisasi O(1).', 'Rata-rata O(1), terburuk O(n); hash buruk atau serangan membuatnya lambat.', 'Kunci harus tak berubah dan konsisten antara == dan hash.'] },
        ],
        faq: [['Apa bedanya hash table dan pohon seimbang?', 'Hash table cepat rata-rata tetapi tak berurutan; pohon seimbang menjaga urutan kunci dan kasus terburuk O(log n).'], ['Apa itu consistent hashing?', 'Teknik memetakan kunci ke server dengan hash sehingga menambah atau menghapus server hanya memindahkan sedikit kunci; dipakai pada cache terdistribusi.'], ['Apakah hash sama dengan enkripsi?', 'Tidak. Hash tabel adalah untuk pencarian cepat dan tidak perlu aman secara kriptografi; hash kriptografi punya syarat tambahan.']],
        sources: [REF_CLRS, ['Python Wiki: TimeComplexity', 'https://wiki.python.org/moin/TimeComplexity'], ['Raymond Hettinger: Modern Python Dictionaries (PyCon 2017)', 'https://www.youtube.com/watch?v=npw4s1QTmPg'], ['Sedgewick dan Wayne, Algorithms (edisi ke-4), bab Hash Tables', 'https://algs4.cs.princeton.edu/34hash/']],
    },
];
