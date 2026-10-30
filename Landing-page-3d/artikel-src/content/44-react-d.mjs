const D = '2026-10-30';
const C = 'React & Web Modern';
const jsx = String.raw;
const js = String.raw;

const REF_REACT = ['React Documentation (react.dev)', 'https://react.dev/learn'];

export default [
    {
        slug: 'vite-react-setup-proyek-struktur-folder-dan-environment',
        title: 'Vite + React: Setup Proyek, Struktur Folder, dan Env',
        description: 'Panduan memulai proyek React dengan Vite: perintah pembuatan, struktur folder yang rapi, variabel environment, alias impor, build produksi, dan kesalahan setup yang umum.',
        date: D, category: C, level: 'Pemula', tags: ['Vite', 'setup React', 'struktur folder', 'environment variable', 'build produksi'], cta: 'jasa',
        prereq: ['Node.js terpasang', 'JavaScript dasar'],
        lead: 'Create React App sudah tidak lagi direkomendasikan. Vite menjadi pilihan standar untuk proyek React baru karena server pengembangan hampir instan dan build produksi yang efisien. Materi ini membawa Anda dari nol sampai proyek yang rapi, siap dikembangkan dan dideploy.',
        body: [
            { objectives: ['membuat proyek React dengan Vite dan memahami berkas yang dihasilkan', 'mengatur struktur folder yang terukur untuk proyek berkembang', 'memakai variabel environment dengan benar dan aman', 'mengatur alias impor dan variabel konfigurasi dasar', 'membangun dan menguji hasil produksi secara lokal'] },
            { h2: 'Mengapa Vite' },
            `Vite memakai modul ES native di browser selama pengembangan, jadi tidak perlu membundel seluruh aplikasi sebelum bisa dibuka; hanya berkas yang diminta yang diproses (dengan esbuild yang sangat cepat). Hasilnya: server dev menyala hampir seketika dan pembaruan modul panas (HMR) terasa instan. Untuk produksi, Vite membundel dengan Rollup.`,
            { h2: 'Membuat proyek' },
            { code: 'npm create vite@latest aplikasi-saya -- --template react\ncd aplikasi-saya\nnpm install\nnpm run dev        # server pengembangan, biasanya di http://localhost:5173\nnpm run build      # hasil produksi ke folder dist/\nnpm run preview    # menjalankan hasil build secara lokal untuk diuji', lang: 'bash', caption: 'Untuk TypeScript pakai --template react-ts. Pastikan Node.js versi LTS terbaru terpasang.' },
            { code: 'aplikasi-saya/\n├── index.html            # titik masuk (Vite memakai HTML sebagai pintu masuk)\n├── package.json          # dependensi dan skrip\n├── vite.config.js        # konfigurasi Vite\n├── public/               # berkas statis yang disalin apa adanya (favicon, robots.txt)\n└── src/\n    ├── main.jsx          # memasang komponen akar ke #root\n    ├── App.jsx\n    └── assets/           # gambar dan font yang diimpor dari kode', lang: 'text' },
            { table: { head: ['Folder', 'Isi', 'Aturan'], rows: [['public/', 'Berkas yang diakses langsung lewat alamat tetap (/robots.txt, /favicon.svg)', 'Tidak diproses atau diberi hash'], ['src/assets/', 'Gambar, font, dan berkas yang diimpor di kode', 'Diproses, diberi hash nama (cache-busting), dioptimalkan'], ['index.html', 'Berada di akar, bukan di public/', 'Tempat title, meta, dan script modul']] } },
            { h2: 'Struktur folder yang tumbuh dengan sehat' },
            `Tidak ada struktur tunggal yang benar, tetapi satu pedoman bertahan baik: <b>kelompokkan menurut fitur, bukan menurut jenis berkas</b>. Mengelompokkan semua komponen di satu folder dan semua hook di folder lain membuat Anda berlari-lari antar folder untuk satu fitur.`,
            { code: 'src/\n├── app/                  # inisialisasi aplikasi: router, provider, tata letak global\n│   ├── App.jsx\n│   └── router.jsx\n├── fitur/                # satu folder per fitur\n│   ├── keranjang/\n│   │   ├── KeranjangPanel.jsx\n│   │   ├── useKeranjang.js\n│   │   ├── keranjangReducer.js\n│   │   └── keranjang.test.js\n│   └── produk/\n│       ├── DaftarProduk.jsx\n│       ├── api.js\n│       └── ...\n├── komponen/             # komponen UI generik yang dipakai lintas fitur (Tombol, Modal)\n├── lib/                  # fungsi bantu murni (format, validasi), klien API\n└── main.jsx', lang: 'text', caption: 'Aturan sederhana: kode yang dipakai hanya oleh satu fitur tinggal di folder fitur itu; naikkan ke komponen/ atau lib/ hanya bila benar-benar dipakai bersama.' },
            { h2: 'Variabel environment' },
            `Vite hanya mengekspos variabel berawalan <code>VITE_</code> ke kode klien, lewat <code>import.meta.env</code>. Variabel tanpa awalan itu tetap rahasia di mesin build.`,
            { code: '# .env                 (dikomit: nilai bawaan yang tidak rahasia)\nVITE_API_URL=https://api.contoh.id\n\n# .env.local           (TIDAK dikomit: nilai khusus mesin Anda)\nVITE_API_URL=http://localhost:8000\n\n# .env.production      (dipakai saat npm run build)\nVITE_API_URL=https://api.contoh.id', lang: 'bash' },
            { code: jsx`// src/lib/api.js
const dasar = import.meta.env.VITE_API_URL;            // diganti dengan nilainya saat build
export const ambilProduk = () => fetch(dasar + '/produk').then(r => r.json());

console.log(import.meta.env.MODE);                      // 'development' atau 'production'
console.log(import.meta.env.DEV, import.meta.env.PROD); // boolean`, lang: 'jsx' },
            { callout: '<b>Semua yang berawalan VITE_ akan terlihat oleh siapa pun</b> yang membuka aplikasi Anda (ia disisipkan ke JavaScript klien). Jangan pernah menaruh kunci rahasia (kunci API privat, kata sandi basis data) di variabel VITE_. Rahasia harus berada di server. Tambahkan <code>.env.local</code> ke <code>.gitignore</code>.', kind: 'warn', title: 'Bukan tempat rahasia' },
            { h2: 'Konfigurasi dasar dan alias impor' },
            { code: jsx`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },   // import '@/lib/api' bukan '../../../lib/api'
    },
    server: {
        port: 5173,
        proxy: { '/api': 'http://localhost:8000' },                          // hindari CORS saat pengembangan
    },
    build: { sourcemap: true },
});`, lang: 'jsx', caption: 'Proxy pengembangan meneruskan permintaan /api ke server backend sehingga browser menganggapnya satu asal dan tidak memicu masalah CORS.' },
            { h2: 'Build produksi dan mengujinya' },
            { code: 'npm run build        # hasil di dist/: HTML, JS, CSS dengan nama berhash\nnpm run preview      # menyajikan dist/ secara lokal, mendekati produksi\n\ndist/\n├── index.html\n└── assets/\n    ├── index-Dk3fA9xQ.js     # hash berubah bila isi berubah -> cache browser aman\n    └── index-B1x2yZ0a.css', lang: 'bash', caption: 'Nama berhash membuat berkas dapat di-cache selamanya oleh browser dan CDN; saat isi berubah, nama berubah sehingga pengguna otomatis mendapat versi baru.' },
            { code: js`// Mengapa nama berkas diberi hash isi: perubahan isi -> nama berubah -> cache aman
const crypto = require('node:crypto');
const hash = isi => crypto.createHash('sha256').update(isi).digest('base64url').slice(0, 8);
const versi1 = 'console.log("halo")';
const versi2 = 'console.log("halo dunia")';
console.log('index-' + hash(versi1) + '.js');
console.log('index-' + hash(versi1) + '.js  (isi sama -> nama sama, cache dipakai)');
console.log('index-' + hash(versi2) + '.js  (isi berubah -> nama baru, unduh ulang)');`, lang: 'javascript', run: true },
            { h2: 'Deploy: yang perlu diingat' },
            { ul: ['<b>SPA fallback</b>: bila memakai routing sisi klien, host harus mengembalikan index.html untuk alamat yang tidak ditemukan (Cloudflare Pages/Workers, Vercel, dan Netlify memiliki pengaturannya).', '<b>Variabel environment</b> produksi diatur di dashboard host sebelum build, karena nilainya disisipkan saat build.', '<b>base</b>: bila aplikasi ditaruh di subfolder (misalnya GitHub Pages), atur <code>base</code> di vite.config.', '<b>Periksa ukuran bundel</b> dengan plugin visualisasi sebelum merilis.'] },
            { w: 'checklist', title: 'Setelah membuat proyek', items: ['.gitignore memuat node_modules, dist, dan .env.local.', 'README menjelaskan cara menjalankan (npm install, npm run dev).', 'Struktur fitur disepakati sebelum kode bertambah banyak.', 'Tidak ada rahasia di variabel VITE_.', 'npm run build dan npm run preview berjalan bersih.', 'Linter (ESLint) dan pemformat (Prettier) terpasang dan dijalankan otomatis.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Variabel environment yang terbaca di kode klien Vite harus berawalan...', options: ['VITE_', 'REACT_APP_', 'PUBLIC_'], answer: 0, why: 'Hanya itu yang diekspos ke klien.' }, { q: 'Mengapa nama berkas hasil build berhash?', options: ['Agar cache aman: isi berubah, nama berubah', 'Agar rahasia', 'Agar kecil'], answer: 0, why: 'Memungkinkan cache jangka panjang.' }, { q: 'Perintah untuk menguji hasil build lokal?', options: ['npm run preview', 'npm run dev', 'npm start'], answer: 0, why: 'Menyajikan dist/ seperti di produksi.' }] },
            { exercise: [['Mengapa .env.local tidak boleh dikomit?', 'Berisi nilai khusus mesin atau rahasia pribadi; tambahkan ke .gitignore.'], ['Kapan berkas ditaruh di public/ dan kapan di src/assets/?', 'public/ untuk berkas dengan alamat tetap (robots.txt, favicon); src/assets/ untuk berkas yang diimpor dan perlu hash serta optimasi.'], ['Apa gunanya proxy di server dev?', 'Meneruskan /api ke backend sehingga tidak ada masalah CORS saat pengembangan.'], ['Mengapa struktur berdasarkan fitur lebih mudah dirawat?', 'Semua file satu fitur berdekatan; mengubah atau menghapus fitur cukup menyentuh satu folder.']] },
            { summary: ['Vite: server dev cepat, build produksi dengan Rollup; buat dengan npm create vite.', 'Struktur folder berdasarkan fitur; komponen generik di komponen/, fungsi bantu di lib/.', 'Variabel VITE_ terlihat publik: tidak untuk rahasia.', 'Uji hasil build dengan preview; siapkan SPA fallback dan variabel environment di host.'] },
        ],
        faq: [['Apa bedanya Vite dan Next.js?', 'Vite adalah alat build/dev untuk SPA (atau pustaka lain); Next.js adalah framework penuh dengan routing, SSR, dan optimasi bawaan.'], ['Apakah masih ada Create React App?', 'Sudah tidak dipelihara aktif dan tidak lagi direkomendasikan; React docs menyarankan framework atau Vite.'], ['Bagaimana menambah ESLint dan Prettier?', 'Templat Vite menyertakan ESLint; tambahkan Prettier dan skrip lint/format, lalu jalankan otomatis dengan hook Git (husky) atau CI.']],
        sources: [['Vite: Getting Started', 'https://vite.dev/guide/'], ['Vite: Env Variables and Modes', 'https://vite.dev/guide/env-and-mode'], ['React: Build a React app from scratch / Start a new project', 'https://react.dev/learn/build-a-react-app-from-scratch'], ['Node.js: Releases', 'https://nodejs.org/en/about/previous-releases']],
    },

    {
        slug: 'testing-react-vitest-testing-library-dan-tes-logika-murni',
        title: 'Testing React: Vitest, Testing Library, dan Tes Logika',
        description: 'Belajar menguji React: Vitest dan Testing Library, menguji perilaku bukan implementasi, mock jaringan dan waktu, serta tes logika murni yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['testing React', 'Vitest', 'React Testing Library', 'unit test', 'TDD'], cta: 'jasa',
        prereq: ['React dasar', 'useState', 'fungsi JavaScript'],
        lead: 'Tes otomatis membuat Anda berani mengubah kode tanpa takut merusak yang lain. Di React, kesalahan umum adalah menguji detail implementasi (nama state, jumlah render) sehingga tes pecah setiap kali kode dirapikan. Pendekatan yang benar: uji apa yang dilihat dan dilakukan pengguna, dan pisahkan logika murni agar mudah diuji tanpa React.',
        body: [
            { objectives: ['menentukan apa yang layak diuji dan jenis tes yang tepat', 'menulis tes logika murni dengan test runner', 'menulis tes komponen dengan Vitest dan Testing Library (perilaku pengguna)', 'memakai mock untuk jaringan dan waktu', 'menghindari tes rapuh yang menguji implementasi'] },
            { h2: 'Apa yang diuji' },
            { svg: 'layers', label: 'Piramida pengujian', items: [{ t: 'End-to-end (Playwright, Cypress)', d: 'sedikit; alur penting seperti login dan checkout' }, { t: 'Tes komponen dan integrasi (Testing Library)', d: 'cukup banyak; perilaku yang dilihat pengguna' }, { t: 'Tes unit logika murni (Vitest)', d: 'banyak; cepat dan murah: validasi, reducer, format' }] },
            { callout: 'Prinsip Testing Library: <b>"Semakin mirip tes Anda dengan cara perangkat lunak dipakai, semakin besar keyakinan yang diberikannya."</b> Cari elemen seperti pengguna mencarinya (berdasarkan teks, label, peran), bukan berdasarkan kelas CSS atau struktur internal.', kind: 'info', title: 'Pegangan' },
            { h2: 'Tes unit untuk logika murni' },
            `Logika murni (fungsi tanpa efek samping) adalah tempat tes paling murah dan paling berharga. Berikut dijalankan dengan pelari tes mini yang kita tulis sendiri; bentuk <code>test(nama, fn)</code> dan asersinya sama dengan di Vitest dan Jest.`,
            { code: js`const assert = require('node:assert/strict');

// Pelari tes mini: gagasannya sama dengan test() di Vitest/Jest
let lulus = 0, gagal = 0;
function test(nama, fn) {
    try { fn(); console.log('  LULUS ', nama); lulus++; }
    catch (e) { console.log('  GAGAL ', nama, '\n         diharapkan:', e.expected, '| aktual:', e.actual); gagal++; }
}

function hitungDiskon(total, anggota) {
    if (total < 0) throw new RangeError('total tidak boleh negatif');
    let diskon = 0;
    if (total >= 500_000) diskon += 0.10;
    if (anggota) diskon += 0.05;
    return Math.round(total * (1 - diskon));
}

test('tanpa diskon di bawah ambang', () => assert.equal(hitungDiskon(100_000, false), 100_000));
test('diskon 10% mulai 500 ribu',    () => assert.equal(hitungDiskon(500_000, false), 450_000));
test('anggota menambah 5%',          () => assert.equal(hitungDiskon(500_000, true), 425_000));
test('nilai batas: 499.999 belum diskon', () => assert.equal(hitungDiskon(499_999, false), 499_999));
test('total negatif ditolak',        () => assert.throws(() => hitungDiskon(-1, false), RangeError));
test('uji yang sengaja gagal',       () => assert.equal(hitungDiskon(1_000_000, false), 1_000_000));
console.log(lulus + ' lulus, ' + gagal + ' gagal');`, lang: 'javascript', run: true, caption: 'Perhatikan nilai batas (499.999 vs 500.000) dan kasus galat. Satu uji sengaja gagal agar Anda melihat laporan nilai harapan vs aktual. Di proyek nyata, pelari tes seperti Vitest melakukan ini (plus pelaporan, pemantauan perubahan, dan cakupan).' },
            { h2: 'Tes komponen dengan Testing Library' },
            { code: 'npm install -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom', lang: 'bash' },
            { code: jsx`// vite.config.js : tambahkan  test: { environment: 'jsdom', setupFiles: './src/setupTests.js', globals: true }
// src/setupTests.js : import '@testing-library/jest-dom/vitest';

// Penghitung.jsx
export function Penghitung({ awal = 0 }) {
    const [n, setN] = useState(awal);
    return (
        <div>
            <p>Jumlah: {n}</p>
            <button onClick={() => setN(n + 1)}>Tambah</button>
            <button onClick={() => setN(0)}>Reset</button>
        </div>
    );
}

// Penghitung.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Penghitung } from './Penghitung';

test('menambah jumlah saat tombol diklik', async () => {
    const pengguna = userEvent.setup();
    render(<Penghitung awal={2} />);

    expect(screen.getByText('Jumlah: 2')).toBeInTheDocument();
    await pengguna.click(screen.getByRole('button', { name: 'Tambah' }));   // cari berdasarkan peran + nama
    expect(screen.getByText('Jumlah: 3')).toBeInTheDocument();

    await pengguna.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Jumlah: 0')).toBeInTheDocument();
});`, lang: 'jsx', caption: 'Tes ini tidak peduli apakah state bernama n atau jumlah, atau apakah memakai useState atau useReducer. Ia hanya memeriksa yang dilihat pengguna, sehingga tetap lulus saat Anda merapikan implementasi.' },
            { h3: 'Urutan prioritas mencari elemen' },
            { table: { head: ['Query', 'Kapan', 'Mengapa'], rows: [['getByRole("button", { name: "Simpan" })', 'Hampir selalu', 'Sama dengan cara teknologi bantu membaca halaman; sekaligus menguji aksesibilitas'], ['getByLabelText("Surel")', 'Kolom form', 'Menguji bahwa label terhubung ke input'], ['getByText("...")', 'Teks yang terlihat', ''], ['getByTestId("...")', 'Pilihan terakhir', 'Tidak berarti bagi pengguna; pakai bila tak ada cara lain']] } },
            { h2: 'Menguji hal asinkron dan jaringan' },
            { code: jsx`import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

test('menampilkan produk setelah data tiba', async () => {
    // tiruan fetch: tidak menyentuh jaringan sungguhan
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: 1, nama: 'Kopi Gayo' }],
    }));

    render(<DaftarProduk />);
    expect(screen.getByText('Memuat...')).toBeInTheDocument();
    expect(await screen.findByText('Kopi Gayo')).toBeInTheDocument();   // findBy* menunggu elemen muncul
});

test('menampilkan pesan galat saat server gagal', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    render(<DaftarProduk />);
    expect(await screen.findByRole('alert')).toHaveTextContent('Gagal memuat');
});`, lang: 'jsx', caption: 'Untuk simulasi server yang lebih realistis, pakai Mock Service Worker (MSW) yang mencegat permintaan pada tingkat jaringan.' },
            { code: js`// Jam palsu: kita yang menggerakkan waktu, jadi tes tidak benar-benar menunggu
function buatJamPalsu() {
    let sekarang = 0, id = 0; const tugas = new Map();
    return {
        setTimeout: (fn, ms) => { tugas.set(++id, { fn, waktu: sekarang + ms }); return id; },
        clearTimeout: i => tugas.delete(i),
        tick(ms) {
            sekarang += ms;
            for (const [i, t] of [...tugas]) if (t.waktu <= sekarang) { tugas.delete(i); t.fn(); }
        },
    };
}
function buatDebounce(fn, ms, jam) { let id; return (...a) => { jam.clearTimeout(id); id = jam.setTimeout(() => fn(...a), ms); }; }

const jam = buatJamPalsu();
const panggilan = [];
const cari = buatDebounce(k => panggilan.push(k), 300, jam);
cari('r'); cari('re'); cari('rea');
jam.tick(299);
console.log('setelah 299 ms :', JSON.stringify(panggilan), '(belum waktunya)');
jam.tick(1);
console.log('setelah 300 ms :', JSON.stringify(panggilan), '(hanya nilai terakhir)');`, lang: 'javascript', run: true, caption: 'Jam palsu membuat tes waktu cepat dan deterministik; tidak ada yang benar-benar menunggu 300 ms. Vitest menyediakan vi.useFakeTimers() yang melakukan hal serupa pada timer global.' },
            { h2: 'Menghindari tes rapuh' },
            { table: { head: ['Hindari', 'Lakukan'], rows: [['Memeriksa state internal atau nama fungsi', 'Memeriksa teks, peran, dan hasil yang terlihat'], ['Memilih elemen dengan kelas CSS atau urutan DOM', 'Memilih dengan role, label, atau teks'], ['Memanggil fireEvent langsung pada banyak hal', 'user-event yang meniru interaksi nyata'], ['Snapshot besar yang selalu diperbarui tanpa dibaca', 'Asersi spesifik pada hal yang penting'], ['Mock berlebihan sampai tes tak menguji apa pun', 'Mock hanya batas luar (jaringan, waktu), uji sisanya sungguhan']] } },
            { w: 'checklist', title: 'Tes yang sehat', items: ['Logika bisnis diuji sebagai fungsi murni dengan nilai batas dan kasus galat.', 'Komponen diuji lewat perilaku pengguna (role, label, teks).', 'Jaringan dan waktu dikendalikan lewat mock atau jam palsu.', 'Tes berjalan cepat dan berurutan bebas (tidak saling bergantung).', 'Tes dijalankan otomatis di CI sebelum kode digabung.', 'Bug yang ditemukan diberi tes pencegah regresi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Cara terbaik memilih tombol di Testing Library?', options: ['getByRole("button", { name })', 'Selector kelas CSS', 'Indeks elemen'], answer: 0, why: 'Meniru cara pengguna dan teknologi bantu.' }, { q: 'Mengapa memisahkan logika murni dari komponen?', options: ['Mudah diuji cepat tanpa render', 'Agar kode panjang', 'Wajib oleh React'], answer: 0, why: 'Tes unit murah dan andal.' }, { q: 'Fungsi jam palsu dalam tes?', options: ['Mengendalikan waktu tanpa menunggu', 'Mempercepat internet', 'Menyembunyikan galat'], answer: 0, why: 'Tes deterministik dan cepat.' }] },
            { exercise: [['Tulis tes untuk fungsi format Rupiah yang menguji 0, 1000, 1234567, dan nilai negatif.', 'Harapkan misalnya "Rp0", "Rp1.000", "Rp1.234.567", dan keputusan jelas untuk negatif (misalnya "-Rp500"); tulis kasus batas dahulu.'], ['Mengapa tes yang memeriksa nama state internal rapuh?', 'Merapikan kode (mengganti nama atau struktur) memecahkan tes meski perilaku untuk pengguna sama.'], ['Kapan memakai tes end-to-end dibanding tes komponen?', 'Untuk alur lintas halaman dan sistem nyata yang paling kritis (login, pembayaran); jumlahnya sedikit karena lambat dan lebih rapuh.'], ['Apa itu regresi dan bagaimana tes mencegahnya?', 'Fitur lama rusak akibat perubahan baru; tes otomatis yang dijalankan di setiap perubahan mendeteksinya segera.']] },
            { summary: ['Piramida: banyak tes logika murni, cukup banyak tes komponen, sedikit end-to-end.', 'Uji perilaku yang terlihat pengguna dengan Testing Library; cari lewat role, label, teks.', 'Kendalikan jaringan dan waktu dengan mock dan jam palsu.', 'Hindari menguji implementasi dan snapshot membabi buta; jalankan tes di CI.'] },
        ],
        faq: [['Vitest atau Jest?', 'Vitest terintegrasi dengan Vite, lebih cepat, dan hampir kompatibel dengan API Jest; Jest masih umum di proyek lama.'], ['Berapa cakupan kode (coverage) yang ideal?', 'Tidak ada angka sakral; cakupan tinggi tanpa asersi bermakna menyesatkan. Fokus pada logika bisnis dan alur penting.'], ['Apa itu Playwright?', 'Alat uji end-to-end yang menjalankan browser sungguhan untuk menguji alur lengkap aplikasi.']],
        sources: [['Vitest Documentation', 'https://vitest.dev/guide/'], ['Testing Library: React', 'https://testing-library.com/docs/react-testing-library/intro/'], ['Node.js: Test runner', 'https://nodejs.org/api/test.html'], ['Kent C. Dodds: Common mistakes with React Testing Library', 'https://kentcdodds.com/blog/common-mistakes-with-react-testing-library']],
    },

    {
        slug: 'aksesibilitas-react-semantik-html-aria-fokus-dan-keyboard',
        title: 'Aksesibilitas di React: Semantik, ARIA, Fokus, Keyboard',
        description: 'Panduan aksesibilitas (a11y) untuk React: HTML semantik, label form, ARIA yang benar, navigasi keyboard, manajemen fokus pada modal, kontras warna, dan cara mengujinya.',
        date: D, category: C, level: 'Menengah', tags: ['aksesibilitas', 'a11y', 'ARIA', 'WCAG', 'keyboard navigation'], cta: 'jasa',
        prereq: ['React dasar', 'HTML dasar'],
        lead: 'Aksesibilitas bukan fitur tambahan untuk segelintir pengguna. Sekitar satu dari enam orang di dunia hidup dengan disabilitas, dan banyak lagi memakai keyboard, layar kecil di bawah matahari, atau koneksi lambat. Kabar baiknya: sebagian besar aksesibilitas berasal dari menulis HTML yang benar, dan React tidak menghalangi itu.',
        body: [
            { objectives: ['memakai elemen HTML semantik alih-alih div serba guna', 'memberi label pada form dan kontrol dengan benar', 'memakai ARIA hanya bila diperlukan dan dengan benar', 'memastikan seluruh fungsi dapat dipakai dengan keyboard dan mengelola fokus', 'memeriksa kontras warna dan menguji aksesibilitas'] },
            { h2: 'Aturan pertama: pakai elemen yang tepat' },
            `Elemen HTML semantik membawa perilaku aksesibilitas gratis: <code>button</code> bisa difokuskan, aktif dengan Enter dan Spasi, dan diumumkan sebagai "tombol". <code>div onClick</code> tidak punya satu pun dari itu.`,
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

// BURUK: div yang meniru tombol
const Buruk = () => <div className="tombol" onClick={() => {}}>Simpan</div>;

// BAIK: elemen yang tepat
const Baik = () => <button type="button" onClick={() => {}}>Simpan</button>;

// Struktur halaman semantik: landmark membantu pembaca layar melompat antar bagian
const Halaman = () => (
    <>
        <header><nav aria-label="Utama"><a href="/">Beranda</a></nav></header>
        <main>
            <h1>Judul halaman</h1>
            <section aria-labelledby="judul-promo"><h2 id="judul-promo">Promo</h2></section>
        </main>
        <footer>Hak cipta</footer>
    </>
);

console.log(renderToString(<Buruk />));
console.log(renderToString(<Baik />));
console.log(renderToString(<Halaman />));`, lang: 'jsx', run: true, caption: 'Hasil HTML sekilas mirip, tetapi button dapat difokuskan dan dioperasikan keyboard tanpa kode tambahan; div tidak.' },
            { table: { head: ['Tujuan', 'Elemen', 'Jangan'], rows: [['Aksi di halaman', '<button>', '<div onClick>'], ['Berpindah ke halaman lain', '<a href>', '<span onClick> atau <a> tanpa href'], ['Judul bagian', '<h1>–<h6> berurutan', 'Memilih tingkat karena ukuran huruf'], ['Daftar', '<ul>, <ol>', 'Serangkaian div'], ['Data tabular', '<table> dengan <th>', 'Tata letak memakai tabel'], ['Wilayah halaman', 'header, nav, main, footer, aside', 'Semua div']] } },
            { h2: 'Form: label bukan opsional' },
            { code: jsx`// Setiap input butuh label yang terhubung
<label htmlFor="surel">Surel</label>
<input id="surel" type="email" autoComplete="email" required aria-describedby="surel-bantuan" />
<p id="surel-bantuan">Kami tidak membagikan surel Anda.</p>

// Galat: umumkan ke teknologi bantu
<input id="sandi" aria-invalid={!!galat} aria-describedby={galat ? 'sandi-galat' : undefined} />
{galat && <p id="sandi-galat" role="alert">{galat}</p>}

// Placeholder BUKAN pengganti label (hilang saat mengetik, kontras rendah, tidak selalu diumumkan)`, lang: 'jsx' },
            { h2: 'ARIA: gunakan sedikit dan dengan benar' },
            { callout: '<b>Aturan pertama ARIA: jangan memakai ARIA bila elemen HTML native bisa melakukannya.</b> ARIA hanya mengubah apa yang diumumkan teknologi bantu; ia tidak menambah perilaku keyboard. <code>role="button"</code> pada div tidak membuatnya bisa ditekan dengan Enter. ARIA yang salah lebih buruk daripada tanpa ARIA.', kind: 'warn', title: 'ARIA bukan pewarna ajaib' },
            { table: { head: ['Atribut', 'Fungsi', 'Contoh'], rows: [['aria-label', 'Nama untuk elemen tanpa teks terlihat', 'Tombol ikon: <button aria-label="Tutup">'], ['aria-labelledby', 'Mengacu elemen lain sebagai nama', 'Bagian dengan judulnya'], ['aria-describedby', 'Deskripsi tambahan', 'Teks bantuan atau pesan galat'], ['aria-expanded', 'Status buka/tutup', 'Tombol akordeon dan menu'], ['aria-live / role="alert"', 'Mengumumkan perubahan dinamis', 'Pesan sukses atau galat'], ['aria-hidden="true"', 'Menyembunyikan dari teknologi bantu', 'Ikon dekoratif (jangan pada elemen yang bisa difokuskan)']] } },
            { h2: 'Keyboard dan fokus' },
            { ul: ['Semua yang bisa diklik harus bisa dicapai dan dioperasikan dengan <b>Tab</b>, <b>Enter</b>, <b>Spasi</b>, dan <b>Esc</b> (untuk menutup).', '<b>Urutan fokus</b> mengikuti urutan visual dan logis; jangan memakai tabindex positif.', '<b>Indikator fokus harus terlihat</b>; jangan <code>outline: none</code> tanpa pengganti.', '<b>Modal</b>: pindahkan fokus ke dalam saat dibuka, kurung fokus di dalamnya, tutup dengan Esc, dan kembalikan fokus ke pemicu saat ditutup. Elemen bawaan <code>&lt;dialog&gt;</code> menangani sebagian besar ini.', '<b>Pindah halaman di SPA</b>: pindahkan fokus ke judul halaman baru dan umumkan perubahan agar pengguna pembaca layar tahu.'] },
            { code: jsx`import { useEffect, useRef } from 'react';

function Modal({ buka, onTutup, judul, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const d = dialogRef.current;
        if (buka && !d.open) d.showModal();          // <dialog>: kurung fokus, Esc, latar tak aktif
        if (!buka && d.open) d.close();
    }, [buka]);

    return (
        <dialog ref={dialogRef} onClose={onTutup} aria-labelledby="judul-modal">
            <h2 id="judul-modal">{judul}</h2>
            {children}
            <button type="button" onClick={onTutup}>Tutup</button>
        </dialog>
    );
}`, lang: 'jsx', caption: 'Dengan elemen dialog native, perilaku fokus yang sulit (kurungan fokus, Esc, mengembalikan fokus) sudah ditangani browser.' },
            { h2: 'Warna dan kontras' },
            `WCAG mensyaratkan rasio kontras minimal <b>4,5:1</b> untuk teks biasa dan <b>3:1</b> untuk teks besar dan komponen UI (tingkat AA). Jangan menyampaikan informasi hanya lewat warna (misalnya galat hanya berwarna merah); tambahkan ikon atau teks.`,
            { code: js`// Menghitung rasio kontras WCAG 2.x antara dua warna heksa
function luminans(hex) {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
        .map(v => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function kontras(a, b) {
    const [l1, l2] = [luminans(a), luminans(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
}
const kasus = [['#767676', '#ffffff'], ['#777777', '#ffffff'], ['#0f1a33', '#ffffff'], ['#1e5ab2', '#e8f1ff'], ['#9aa5b8', '#ffffff']];
for (const [fg, bg] of kasus) {
    const r = kontras(fg, bg);
    console.log(fg, 'di atas', bg, '->', r.toFixed(2) + ':1', r >= 7 ? 'AAA' : r >= 4.5 ? 'AA (teks biasa)' : r >= 3 ? 'hanya teks besar/komponen' : 'GAGAL');
}`, lang: 'javascript', run: true, caption: '#767676 di atas putih adalah abu-abu paling terang yang masih lolos AA untuk teks biasa (rasio 4,54:1); #777777 sedikit di bawah batas.' },
            { w: 'contrast', title: 'Periksa kontras warna', desc: 'Pilih warna teks dan latar untuk melihat rasio dan kelulusan WCAG.' },
            { h2: 'Menguji aksesibilitas' },
            { ol: ['<b>Otomatis</b>: eslint-plugin-jsx-a11y saat menulis, axe DevTools atau Lighthouse di browser, dan jest-axe/vitest-axe di tes. Alat otomatis hanya menangkap sebagian masalah (sekitar sepertiga).', '<b>Keyboard</b>: cabut mouse. Bisakah Anda mencapai dan memakai semuanya dengan Tab, Enter, Spasi, Esc? Apakah fokus selalu terlihat?', '<b>Pembaca layar</b>: coba NVDA (Windows, gratis), VoiceOver (macOS/iOS), atau TalkBack (Android) pada alur utama.', '<b>Zoom dan teks besar</b>: perbesar 200%, ubah ukuran huruf; pastikan tata letak tidak pecah.', '<b>Pengguna nyata</b> dengan kebutuhan beragam memberi wawasan yang tak tergantikan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Untuk aksi di halaman, gunakan...', options: ['<button>', '<div onClick>', '<span>'], answer: 0, why: 'Native: fokus dan keyboard gratis.' }, { q: 'Rasio kontras minimal AA untuk teks biasa?', options: ['4,5:1', '2:1', '10:1'], answer: 0, why: 'WCAG 2.x AA.' }, { q: 'Placeholder sebagai pengganti label...', options: ['Tidak cukup', 'Cukup', 'Lebih baik'], answer: 0, why: 'Hilang saat mengetik dan tidak andal diumumkan.' }] },
            { exercise: [['Ubah <div onClick={hapus}>Hapus</div> menjadi aksesibel.', '<code>&lt;button type="button" onClick={hapus}&gt;Hapus&lt;/button&gt;</code>'], ['Beri nama aksesibel pada tombol ikon silang.', '<code>&lt;button aria-label="Tutup"&gt;&lt;svg aria-hidden="true" ...&gt;&lt;/svg&gt;&lt;/button&gt;</code>'], ['Mengapa outline: none berbahaya?', 'Pengguna keyboard kehilangan petunjuk letak fokus; sediakan gaya fokus pengganti yang jelas.'], ['Mengapa jangan menyampaikan galat hanya dengan warna merah?', 'Pengguna buta warna atau pembaca layar tidak menangkapnya; tambahkan teks atau ikon dan role="alert".']] },
            { summary: ['HTML semantik memberi aksesibilitas gratis: button, a, heading, landmark, label.', 'ARIA hanya bila perlu dan dengan benar; ia mengubah pengumuman, bukan perilaku.', 'Semua fungsi harus bisa dipakai dengan keyboard; kelola fokus pada modal dan perpindahan halaman.', 'Kontras minimal 4,5:1 (AA) dan jangan hanya mengandalkan warna.', 'Uji dengan alat otomatis, keyboard, dan pembaca layar.'] },
        ],
        faq: [['Apakah aksesibilitas wajib secara hukum?', 'Di banyak negara ada regulasi (misalnya ADA, EAA di Uni Eropa) dan pedoman pemerintah; di Indonesia ada ketentuan tentang kesetaraan akses layanan publik. Terlepas dari itu, aksesibilitas memperluas jangkauan pengguna.'], ['Apa itu WCAG?', 'Web Content Accessibility Guidelines dari W3C; tingkat A, AA, dan AAA. AA adalah target umum.'], ['Apakah aksesibilitas memperlambat pengembangan?', 'Jauh lebih murah bila dibangun sejak awal daripada diperbaiki belakangan.']],
        sources: [['W3C: Web Content Accessibility Guidelines (WCAG) 2.2', 'https://www.w3.org/TR/WCAG22/'], ['React: Accessibility', 'https://legacy.reactjs.org/docs/accessibility.html'], ['MDN: Accessibility', 'https://developer.mozilla.org/docs/Web/Accessibility'], ['WAI-ARIA Authoring Practices Guide', 'https://www.w3.org/WAI/ARIA/apg/']],
    },

    {
        slug: 'suspense-lazy-dan-error-boundary-react-loading-dan-galat',
        title: 'Suspense, lazy, dan Error Boundary di React',
        description: 'Pelajari React.lazy, Suspense, dan error boundary untuk code splitting serta menangani status memuat dan galat secara deklaratif.',
        date: D, category: C, level: 'Menengah', tags: ['Suspense', 'React.lazy', 'error boundary', 'code splitting', 'loading state'], cta: 'jasa',
        prereq: ['komponen React', 'async/await', 'useEffect'],
        lead: 'Setiap aplikasi punya dua kejadian yang harus ditangani: sesuatu belum siap (memuat) dan sesuatu rusak (galat). Tanpa pola yang baik, kode penuh pemeriksaan if (memuat) dan if (galat) di setiap komponen. React menyediakan Suspense untuk yang pertama dan error boundary untuk yang kedua, keduanya sebagai pembungkus deklaratif.',
        body: [
            { objectives: ['memakai React.lazy dan Suspense untuk memecah bundel (code splitting)', 'menempatkan batas Suspense dengan fallback yang masuk akal', 'membuat error boundary dan memahami apa yang tidak ditangkapnya', 'menggabungkan keduanya untuk pengalaman memuat dan gagal yang rapi', 'memahami Suspense untuk data dan hook use pada React 19'] },
            { h2: 'Code splitting dengan lazy' },
            `Secara bawaan, semua komponen masuk ke satu bundel JavaScript. Halaman yang jarang dibuka (pengaturan, laporan) membuat pengguna mengunduh kode yang mungkin tak pernah dipakai. <code>React.lazy</code> memuat komponen saat pertama kali dibutuhkan, memakai <code>import()</code> dinamis.`,
            { code: jsx`import { lazy, Suspense } from 'react';

const HalamanLaporan = lazy(() => import('./HalamanLaporan'));     // dimuat saat pertama dirender
const Editor = lazy(() => import('./Editor'));

function Aplikasi({ halaman }) {
    return (
        <Suspense fallback={<p role="status">Memuat halaman...</p>}>
            {halaman === 'laporan' ? <HalamanLaporan /> : <Editor />}
        </Suspense>
    );
}`, lang: 'jsx', caption: 'Selama berkas komponen diunduh, Suspense menampilkan fallback. Bundler (Vite) memisahkan setiap import() menjadi berkas sendiri.' },
            { code: js`// Gagasan di balik import() dinamis: modul dimuat saat dibutuhkan, lalu di-cache
const cacheModul = new Map();
let unduhan = 0;
async function muat(nama) {
    if (!cacheModul.has(nama)) {
        unduhan++;
        cacheModul.set(nama, new Promise(ok => setTimeout(() => ok({ default: () => 'komponen ' + nama }), 30)));
    }
    return cacheModul.get(nama);
}
(async () => {
    console.log('awal: tidak ada unduhan,', unduhan);
    const a = await muat('Laporan'); console.log('pembukaan pertama ->', a.default(), '| unduhan:', unduhan);
    const b = await muat('Laporan'); console.log('pembukaan kedua   ->', b.default(), '| unduhan:', unduhan, '(dari cache)');
})();`, lang: 'javascript', run: true },
            { h2: 'Suspense: di mana menaruhnya' },
            { ul: ['<b>Satu batas besar</b> di sekitar halaman: sederhana, tetapi seluruh halaman diganti fallback saat satu bagian menunggu.', '<b>Beberapa batas kecil</b> di sekitar bagian independen (sidebar, daftar, panel): bagian lain tetap tampil, pengalaman lebih halus.', 'Fallback yang baik menyerupai bentuk akhir (kerangka/skeleton) agar tata letak tidak melompat (CLS rendah).', 'Suspense bersarang: fallback terdekat di atas komponen yang menunggu yang dipakai.'] },
            { h2: 'Error boundary: jaring pengaman render' },
            { callout: 'Tanpa error boundary, galat saat render di satu komponen kecil akan <b>membuat seluruh aplikasi menjadi layar kosong</b>. Error boundary menangkap galat di pohon di bawahnya dan menampilkan UI cadangan. Hingga kini error boundary harus berupa <i>class component</i>; pustaka <code>react-error-boundary</code> menyediakan versi siap pakai dengan API fungsional.', kind: 'warn', title: 'Layar putih' },
            { code: jsx`import { Component } from 'react';

class BatasGalat extends Component {
    state = { galat: null };
    static getDerivedStateFromError(galat) { return { galat }; }            // beralih ke UI cadangan
    componentDidCatch(galat, info) { console.error('Galat tertangkap:', galat, info.componentStack); /* kirim ke layanan pelaporan */ }
    render() {
        if (this.state.galat) return this.props.cadangan ?? <p role="alert">Terjadi kesalahan.</p>;
        return this.props.children;
    }
}

// pemakaian: batasi dampak kerusakan ke bagian tertentu
<BatasGalat cadangan={<p>Grafik tidak dapat dimuat.</p>}>
    <GrafikPenjualan />
</BatasGalat>`, lang: 'jsx' },
            { h3: 'Yang TIDAK ditangkap error boundary' },
            { table: { head: ['Tidak ditangkap', 'Tangani dengan'], rows: [['Galat di event handler (onClick)', 'try/catch di handler'], ['Kode asinkron (setTimeout, fetch, promise)', 'try/catch atau .catch; simpan galat di state'], ['Galat saat rendering di server', 'Mekanisme galat framework'], ['Galat di error boundary itu sendiri', 'Boundary di tingkat lebih atas']] } },
            { code: js`// Pola "galat sebagai nilai": fungsi asinkron yang tidak melempar, mengembalikan hasil terstruktur
async function aman(janji) {
    try { return { ok: true, data: await janji }; }
    catch (galat) { return { ok: false, galat: galat.message }; }
}

(async () => {
    const sukses = await aman(Promise.resolve([1, 2, 3]));
    const gagal  = await aman(Promise.reject(new Error('Server tidak menjawab')));
    for (const h of [sukses, gagal]) console.log(h.ok ? 'tampilkan ' + JSON.stringify(h.data) : 'tampilkan pesan: ' + h.galat);
})();`, lang: 'javascript', run: true, caption: 'Karena error boundary tidak menangkap galat asinkron, galat dari permintaan jaringan lazimnya ditangani sebagai state (atau dilempar ulang saat render agar ditangkap boundary).' },
            { h2: 'Menggabungkan keduanya' },
            { code: jsx`function BagianLaporan() {
    return (
        <BatasGalat cadangan={<p>Laporan gagal dimuat. <button>Coba lagi</button></p>}>
            <Suspense fallback={<KerangkaLaporan />}>
                <LaporanBulanan />            {/* lazy atau menunggu data */}
            </Suspense>
        </BatasGalat>
    );
}
// Urutan: Boundary di luar (menangkap galat), Suspense di dalam (menangani menunggu).
// Bagian lain halaman tetap berfungsi walau laporan gagal atau lambat.`, lang: 'jsx', caption: 'Pembungkus seperti ini memisahkan "apa yang ditampilkan saat siap" dari "apa yang terjadi saat menunggu atau gagal". Komponen LaporanBulanan cukup menulis kasus normalnya.' },
            { h2: 'Suspense untuk data dan hook use' },
            `Suspense tidak hanya untuk <code>lazy</code>. Dengan pustaka atau framework yang mendukungnya (TanStack Query dengan <code>useSuspenseQuery</code>, Next.js, React Router), komponen dapat "menunggu" data dan Suspense menampilkan fallback. React 19 menambahkan hook <code>use(promise)</code> yang membaca Promise di dalam render dan menangguhkan komponen sampai selesai; bila Promise ditolak, galatnya ditangkap error boundary terdekat. Janji untuk <code>use</code> harus dibuat di luar render (misalnya di Server Component, atau di-cache), bukan dibuat baru setiap render.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'React.lazy memuat komponen...', options: ['Saat pertama kali dibutuhkan', 'Saat aplikasi dimulai', 'Tidak pernah'], answer: 0, why: 'Memakai import() dinamis.' }, { q: 'Error boundary menangkap galat dari...', options: ['Render dan lifecycle komponen di bawahnya', 'Event handler', 'setTimeout'], answer: 0, why: 'Galat lain perlu try/catch.' }, { q: 'Fallback Suspense yang baik...', options: ['Menyerupai bentuk konten akhir (skeleton)', 'Layar kosong', 'Halaman lain'], answer: 0, why: 'Mencegah lompatan tata letak.' }] },
            { exercise: [['Ubah impor halaman Pengaturan menjadi lazy dan bungkus dengan Suspense.', '<code>const Pengaturan = lazy(() => import("./Pengaturan")); &lt;Suspense fallback={&lt;p&gt;Memuat...&lt;/p&gt;}&gt;&lt;Pengaturan /&gt;&lt;/Suspense&gt;</code>'], ['Mengapa galat di onClick tidak masuk ke error boundary?', 'Error boundary hanya menangkap galat saat render; handler berjalan di luar render sehingga perlu try/catch.'], ['Di mana sebaiknya menaruh beberapa error boundary?', 'Di sekitar bagian independen (widget, panel) agar kerusakan satu bagian tidak mematikan seluruh halaman.'], ['Apa keuntungan code splitting bagi pengguna?', 'Bundel awal lebih kecil sehingga halaman pertama termuat lebih cepat; kode halaman lain diunduh saat dibutuhkan.']] },
            { summary: ['React.lazy + import() memecah bundel; Suspense menampilkan fallback selama menunggu.', 'Beberapa batas Suspense kecil memberi pengalaman lebih halus; fallback menyerupai konten akhir.', 'Error boundary menangkap galat render dan menampilkan UI cadangan; ia tidak menangkap event handler atau kode asinkron.', 'Gabungkan boundary (luar) dengan Suspense (dalam); React 19 use() membaca Promise saat render.'] },
        ],
        faq: [['Apakah lazy bekerja dengan SSR?', 'Ya, melalui framework yang mendukung streaming SSR dan Suspense (Next.js, React Router framework); konfigurasi sendiri lebih rumit.'], ['Bagaimana melaporkan galat produksi?', 'Kirim dari componentDidCatch atau onError ke layanan seperti Sentry agar Anda tahu kegagalan yang dialami pengguna.'], ['Apakah Suspense menggantikan status loading manual?', 'Untuk data yang mendukungnya, ya; Anda tidak perlu isLoading di setiap komponen karena fallback ditangani di batas di atasnya.']],
        sources: [['React: Suspense', 'https://react.dev/reference/react/Suspense'], ['React: lazy', 'https://react.dev/reference/react/lazy'], ['React: Catching rendering errors with an error boundary', 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary'], ['react-error-boundary', 'https://github.com/bvaughn/react-error-boundary']],
    },

    {
        slug: 'fitur-baru-react-19-actions-use-dan-form-lebih-ringkas',
        title: 'Fitur Baru React 19: Actions, use, dan Form Lebih Ringkas',
        description: 'Ringkasan fitur React 19: Actions, useActionState, useOptimistic, hook use, ref sebagai props, metadata dokumen, dan perubahan pada kode lama.',
        date: D, category: C, level: 'Menengah', tags: ['React 19', 'Actions', 'useActionState', 'useOptimistic', 'fitur baru React'], cta: 'jasa',
        prereq: ['React hooks', 'form React', 'async/await'],
        lead: 'React 19 membawa perubahan terbesar pada cara menangani form dan operasi asinkron sejak hooks diperkenalkan. Banyak kode boilerplate untuk status "mengirim", galat, dan pembaruan optimistis berubah menjadi beberapa baris. Materi ini merangkum fitur utama, dengan fokus pada apa yang berubah dalam pekerjaan sehari-hari.',
        body: [
            { objectives: ['menjelaskan konsep Actions dan transisi asinkron', 'memakai useActionState untuk form dengan status pending dan galat', 'memakai useOptimistic untuk pembaruan instan', 'memahami hook use, ref sebagai props, dan metadata dokumen', 'mengenali perubahan yang dapat memengaruhi kode lama'] },
            { callout: 'Fitur di bawah ini tersedia di React 19 (proyek ini sendiri memakai React 19). Beberapa bagian yang bergantung pada server (Server Actions, Server Components) memerlukan framework yang mendukungnya, seperti Next.js; bagian lain berjalan di aplikasi klien biasa.', kind: 'info', title: 'Catatan ruang lingkup' },
            { h2: 'Actions: fungsi asinkron untuk perubahan data' },
            `<b>Action</b> adalah fungsi (sering asinkron) yang dijalankan di dalam <i>transisi</i> sehingga React mengelola status pending, galat, dan urutan pembaruan untuk Anda. Pada <code>&lt;form&gt;</code>, atribut <code>action</code> kini dapat menerima fungsi.`,
            { code: jsx`// React 18: banyak state manual
function Lama() {
    const [nama, setNama] = useState('');
    const [kirim, setKirim] = useState(false);
    const [galat, setGalat] = useState(null);
    async function onSubmit(e) {
        e.preventDefault(); setKirim(true); setGalat(null);
        try { await simpanNama(nama); } catch (x) { setGalat(x.message); }
        setKirim(false);
    }
    return <form onSubmit={onSubmit}>...</form>;
}

// React 19: action pada form; data form diterima sebagai FormData
function Baru() {
    async function simpan(formData) {
        await simpanNama(formData.get('nama'));
    }
    return (
        <form action={simpan}>
            <input name="nama" />
            <button type="submit">Simpan</button>
        </form>
    );
}   // setelah action sukses, form tak terkendali direset otomatis`, lang: 'jsx', caption: 'Form tak terkendali dengan FormData kembali menjadi cara yang sederhana dan cukup untuk banyak kasus.' },
            { h2: 'useActionState: status, galat, dan hasil' },
            { code: jsx`import { useActionState } from 'react';

async function daftarAksi(stateSebelumnya, formData) {
    const surel = formData.get('surel');
    if (!surel.includes('@')) return { galat: 'Surel tidak valid', sukses: false };
    await kirimKeServer(surel);
    return { galat: null, sukses: true };
}

function FormDaftar() {
    const [hasil, aksi, sedangKirim] = useActionState(daftarAksi, { galat: null, sukses: false });

    return (
        <form action={aksi}>
            <input name="surel" type="email" aria-invalid={!!hasil.galat} />
            <button disabled={sedangKirim}>{sedangKirim ? 'Mengirim...' : 'Daftar'}</button>
            {hasil.galat && <p role="alert">{hasil.galat}</p>}
            {hasil.sukses && <p>Terima kasih sudah mendaftar!</p>}
        </form>
    );
}`, lang: 'jsx', caption: 'useActionState mengembalikan [state terbaru, fungsi aksi untuk form, status sedang berjalan]. Fungsi aksi menerima state sebelumnya dan FormData, dan nilai kembaliannya menjadi state berikutnya.' },
            { code: js`// Gagasan useActionState: reducer asinkron (stateSebelumnya, input) -> state baru
async function jalankan(aksi, state, input) {
    const mulai = Date.now();
    const hasil = await aksi(state, input);
    return { hasil, pending: false };
}
async function daftarAksi(sebelumnya, data) {
    if (!data.surel.includes('@')) return { galat: 'Surel tidak valid', sukses: false };
    await new Promise(r => setTimeout(r, 10));            // seolah menyimpan ke server
    return { galat: null, sukses: true };
}
(async () => {
    let state = { galat: null, sukses: false };
    for (const surel of ['salah', 'ani@contoh.id']) {
        const r = await jalankan(daftarAksi, state, { surel });
        state = r.hasil;
        console.log(surel.padEnd(14), '->', JSON.stringify(state));
    }
})();`, lang: 'javascript', run: true },
            { h2: 'useFormStatus: tombol yang tahu form-nya sedang mengirim' },
            { code: jsx`import { useFormStatus } from 'react-dom';

function TombolKirim({ children }) {
    const { pending } = useFormStatus();           // membaca status form induk terdekat; tanpa props
    return <button type="submit" disabled={pending}>{pending ? 'Mengirim...' : children}</button>;
}

// <form action={aksi}><input name="x" /><TombolKirim>Simpan</TombolKirim></form>`, lang: 'jsx', caption: 'Komponen tombol dapat dipakai di form mana pun tanpa menerima props status.' },
            { h2: 'useOptimistic: tampil instan, kembalikan bila gagal' },
            { code: jsx`import { useOptimistic, useState } from 'react';

function DaftarKomentar({ komentar, kirimKomentar }) {
    const [terlihat, tambahSementara] = useOptimistic(
        komentar,
        (sekarang, baru) => [...sekarang, { ...baru, mengirim: true }],     // tampilan sementara
    );

    async function aksi(formData) {
        const baru = { id: crypto.randomUUID(), teks: formData.get('teks') };
        tambahSementara(baru);                       // langsung muncul di layar
        await kirimKeServer(baru);                    // bila gagal, tampilan kembali ke "komentar" asli
        kirimKomentar(baru);
    }

    return (
        <>
            <ul>{terlihat.map(k => <li key={k.id} style={{ opacity: k.mengirim ? 0.5 : 1 }}>{k.teks}</li>)}</ul>
            <form action={aksi}><input name="teks" /><button>Kirim</button></form>
        </>
    );
}`, lang: 'jsx', caption: 'Pengguna melihat komentarnya muncul seketika (dengan penanda "mengirim"). Bila permintaan gagal, nilai optimistis otomatis dibuang dan tampilan kembali sesuai data sebenarnya.' },
            { h2: 'Hook use: membaca Promise dan Context saat render' },
            { code: jsx`import { use, Suspense } from 'react';

function Profil({ janjiPengguna }) {
    const pengguna = use(janjiPengguna);            // menangguhkan komponen sampai Promise selesai
    return <h1>{pengguna.nama}</h1>;
}

function Halaman({ janjiPengguna }) {
    return (
        <Suspense fallback={<p>Memuat profil...</p>}>
            <Profil janjiPengguna={janjiPengguna} />
        </Suspense>
    );
}
// use() juga bisa dipakai di dalam kondisi/perulangan (tidak seperti hook lain) dan membaca Context: use(TemaContext)`, lang: 'jsx', caption: 'Promise yang diberikan harus stabil antar render (dibuat di luar render atau di-cache), bukan dibuat baru di dalam komponen yang memanggil use.' },
            { h2: 'Perbaikan kecil yang terasa' },
            { table: { head: ['Perubahan', 'Sebelum', 'React 19'], rows: [['ref sebagai props', 'forwardRef untuk meneruskan ref', 'ref langsung menjadi props biasa pada komponen fungsi'], ['Provider Context', '<Konteks.Provider value>', '<Konteks value> (Provider boleh ditulis langsung sebagai konteks)'], ['Metadata dokumen', 'react-helmet atau efek manual', '<title>, <meta>, <link> di komponen otomatis diangkat ke <head>'], ['Cleanup ref', 'ref callback tak punya cleanup', 'ref callback boleh mengembalikan fungsi cleanup'], ['Pesan galat hidrasi', 'Sulit dibaca', 'Satu pesan dengan selisih yang jelas'], ['Custom Elements', 'Dukungan parsial', 'Dukungan penuh (props dan atribut)']] } },
            { h2: 'Hal yang perlu diperhatikan saat meningkatkan versi' },
            { ul: ['<b>API yang dihapus</b>: propTypes dan defaultProps untuk komponen fungsi, string refs, ReactDOM.render (gunakan createRoot), dan test-utils lama.', '<b>Jalankan codemod</b> resmi dan baca panduan peningkatan sebelum mengganti versi.', '<b>Periksa dependensi</b>: pustaka pihak ketiga mungkin perlu versi yang kompatibel dengan React 19.', '<b>Perubahan perilaku</b> pada StrictMode dan penanganan galat; jalankan tes dan periksa konsol.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Atribut action pada <form> di React 19 dapat menerima...', options: ['Fungsi', 'Hanya URL', 'Hanya string'], answer: 0, why: 'Fungsi action dijalankan dengan FormData.' }, { q: 'Hook yang mengembalikan [state, aksi, sedangKirim]?', options: ['useActionState', 'useState', 'useReducer'], answer: 0, why: 'Mengelola hasil dan pending action.' }, { q: 'useOptimistic berguna untuk...', options: ['Menampilkan perubahan seketika sebelum server menjawab', 'Mempercepat server', 'Mengurangi bundel'], answer: 0, why: 'Dibatalkan otomatis bila gagal.' }] },
            { exercise: [['Ubah form login dengan tiga state manual menjadi memakai useActionState.', 'Pindahkan logika submit ke fungsi aksi (state, formData) yang mengembalikan {galat}; pakai [hasil, aksi, pending] dan form action={aksi}.'], ['Mengapa Promise untuk use() tidak boleh dibuat di dalam komponen yang memanggilnya?', 'Setiap render membuat Promise baru sehingga komponen menangguhkan terus; buat di luar atau di-cache.'], ['Apa pengganti forwardRef di React 19?', 'Cukup menerima ref sebagai props biasa di komponen fungsi.'], ['Kapan useOptimistic kurang tepat?', 'Untuk aksi berisiko tinggi atau sering gagal (pembayaran) yang membuat pengguna salah mengira sudah berhasil.']] },
            { summary: ['Actions: fungsi asinkron pada form; React mengelola pending, galat, dan urutan.', 'useActionState, useFormStatus, dan useOptimistic memangkas boilerplate form.', 'use() membaca Promise dan Context saat render dengan Suspense.', 'ref sebagai props, metadata dokumen, dan peningkatan lain; periksa API yang dihapus saat meningkatkan.'] },
        ],
        faq: [['Apakah kode React 18 saya otomatis rusak?', 'Sebagian besar berjalan, tetapi ada API yang dihapus (misalnya propTypes dan defaultProps pada fungsi); ikuti panduan peningkatan dan codemod.'], ['Apa itu Server Actions?', 'Fungsi yang berjalan di server dan dipanggil dari komponen (didukung framework seperti Next.js); aman karena logika dan rahasia tidak dikirim ke klien.'], ['Apakah wajib memakai fitur baru?', 'Tidak. Kode lama tetap valid; adopsi bertahap pada form dan alur asinkron yang paling banyak boilerplate-nya.']],
        sources: [['React 19 Blog Post', 'https://react.dev/blog/2024/12/05/react-19'], ['React: useActionState', 'https://react.dev/reference/react/useActionState'], ['React: useOptimistic', 'https://react.dev/reference/react/useOptimistic'], ['React 19 Upgrade Guide', 'https://react.dev/blog/2024/04/25/react-19-upgrade-guide']],
    },
];
