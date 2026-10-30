const D = '2026-10-30';
const C = 'React & Web Modern';
const jsx = String.raw;
const js = String.raw;

const REF_REACT = ['React Documentation (react.dev)', 'https://react.dev/learn'];
const REF_HOOKS = ['React Reference: Hooks', 'https://react.dev/reference/react/hooks'];
const REF_MDN = ['MDN Web Docs: JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript'];

export default [
    {
        slug: 'usereducer-react-kelola-state-kompleks-dengan-reducer',
        title: 'useReducer React: Kelola State Kompleks dengan Reducer',
        description: 'Pelajari useReducer: pola reducer, action, kapan lebih baik dari useState, dan cara menguji logika state sebagai fungsi murni, lengkap dengan contoh keranjang belanja.',
        date: D, category: C, level: 'Menengah', tags: ['useReducer', 'reducer', 'React state', 'state management', 'Redux'], cta: 'jasa',
        prereq: ['useState', 'render list'],
        lead: 'Ketika satu komponen mulai memiliki lima state yang saling terkait dan tujuh fungsi yang mengubahnya, kode menjadi sulit diikuti. useReducer memusatkan semua cara state berubah di satu tempat, dalam sebuah fungsi murni yang mudah dibaca dan diuji. Pola yang sama menjadi inti Redux.',
        body: [
            { objectives: ['menjelaskan pola reducer: (state, action) → state baru', 'memakai useReducer pada komponen React', 'memilih antara useState dan useReducer', 'menulis dan menguji reducer sebagai fungsi murni', 'menangani aksi tak dikenal dan status asinkron secara terstruktur'] },
            { h2: 'Reducer: satu fungsi untuk semua perubahan' },
            `Reducer menerima <b>state sekarang</b> dan sebuah <b>aksi</b> (objek yang menjelaskan apa yang terjadi), lalu mengembalikan <b>state baru</b>. Ia murni: tanpa efek samping, tanpa mengubah state lama. Karena murni, ia bisa dijalankan dan diuji di luar React.`,
            { code: js`// Reducer keranjang belanja
function keranjangReducer(state, aksi) {
    switch (aksi.tipe) {
        case 'tambah': {
            const ada = state.item.find(i => i.id === aksi.produk.id);
            const item = ada
                ? state.item.map(i => i.id === aksi.produk.id ? { ...i, jumlah: i.jumlah + 1 } : i)
                : [...state.item, { ...aksi.produk, jumlah: 1 }];
            return { ...state, item };
        }
        case 'kurang': {
            const item = state.item
                .map(i => i.id === aksi.id ? { ...i, jumlah: i.jumlah - 1 } : i)
                .filter(i => i.jumlah > 0);                         // jumlah 0 -> hapus
            return { ...state, item };
        }
        case 'kupon':
            return { ...state, kupon: aksi.kode };
        case 'kosongkan':
            return { ...state, item: [] };
        default:
            throw new Error('Aksi tidak dikenal: ' + aksi.tipe);
    }
}

const hitungTotal = s => {
    const subtotal = s.item.reduce((t, i) => t + i.harga * i.jumlah, 0);
    return s.kupon === 'HEMAT10' ? Math.round(subtotal * 0.9) : subtotal;
};

let state = { item: [], kupon: '' };
const kopi = { id: 1, nama: 'Kopi', harga: 20000 };
const teh = { id: 2, nama: 'Teh', harga: 15000 };
const urutan = [
    { tipe: 'tambah', produk: kopi }, { tipe: 'tambah', produk: kopi }, { tipe: 'tambah', produk: teh },
    { tipe: 'kupon', kode: 'HEMAT10' }, { tipe: 'kurang', id: 2 },
];
for (const a of urutan) {
    state = keranjangReducer(state, a);
    console.log(a.tipe.padEnd(7), 'item:', state.item.map(i => i.nama + 'x' + i.jumlah).join(', ') || '-', '| total', hitungTotal(state));
}
try { keranjangReducer(state, { tipe: 'terbang' }); } catch (e) { console.log('galat:', e.message); }`, lang: 'javascript', run: true, caption: 'Seluruh aturan keranjang ada dalam satu fungsi. Total dihitung dari state saat dibutuhkan, bukan disimpan.' },
            { h2: 'Memakainya di komponen' },
            { code: jsx`import { useReducer } from 'react';

function Keranjang({ produk }) {
    const [state, kirim] = useReducer(keranjangReducer, { item: [], kupon: '' });

    return (
        <div>
            {produk.map(p => (
                <button key={p.id} onClick={() => kirim({ tipe: 'tambah', produk: p })}>
                    Tambah {p.nama}
                </button>
            ))}
            <ul>
                {state.item.map(i => (
                    <li key={i.id}>
                        {i.nama} x {i.jumlah}
                        <button onClick={() => kirim({ tipe: 'kurang', id: i.id })}>-</button>
                    </li>
                ))}
            </ul>
            <p>Total: Rp{hitungTotal(state).toLocaleString('id-ID')}</p>
        </div>
    );
}`, lang: 'jsx', caption: 'Komponen hanya "mengirim" apa yang terjadi (dispatch). Aturan bagaimana state berubah berada di reducer.' },
            { h2: 'useState atau useReducer?' },
            { table: { head: ['', 'useState', 'useReducer'], rows: [['Cocok untuk', 'State sederhana dan independen', 'Beberapa nilai saling terkait atau banyak jenis perubahan'], ['Logika pembaruan', 'Tersebar di handler', 'Terpusat di reducer'], ['Pengujian', 'Lewat komponen', 'Reducer diuji sebagai fungsi biasa'], ['Kode', 'Lebih pendek untuk kasus kecil', 'Lebih panjang di awal, lebih rapi saat tumbuh'], ['Debugging', 'Sulit melacak sumber perubahan', 'Setiap perubahan punya nama aksi']] } },
            { callout: 'Tidak ada aturan keras. Mulai dengan <code>useState</code>; pindah ke <code>useReducer</code> ketika Anda mendapati handler yang bolak-balik mengubah banyak state sekaligus atau ketika pembaruan state mulai sulit dipahami.', kind: 'info', title: 'Pedoman' },
            { h2: 'Menguji reducer tanpa React' },
            { code: js`const assert = require('node:assert');

function reducer(state, aksi) {
    switch (aksi.tipe) {
        case 'tambah': return { ...state, hitung: state.hitung + (aksi.jumlah ?? 1) };
        case 'reset':  return { ...state, hitung: 0 };
        default: return state;
    }
}

const kasus = [
    ['menambah satu secara bawaan', { hitung: 0 }, { tipe: 'tambah' }, { hitung: 1 }],
    ['menambah sebanyak jumlah',    { hitung: 2 }, { tipe: 'tambah', jumlah: 5 }, { hitung: 7 }],
    ['reset kembali ke nol',        { hitung: 9 }, { tipe: 'reset' }, { hitung: 0 }],
    ['aksi tak dikenal tak mengubah', { hitung: 4 }, { tipe: 'x' }, { hitung: 4 }],
];
let lulus = 0;
for (const [nama, awal, aksi, harapan] of kasus) {
    try { assert.deepStrictEqual(reducer(awal, aksi), harapan); console.log('LULUS ', nama); lulus++; }
    catch (e) { console.log('GAGAL ', nama); }
}
console.log(lulus + '/' + kasus.length + ' lulus');

const awal = { hitung: 3 };
reducer(awal, { tipe: 'tambah' });
console.log('state asli tidak berubah:', JSON.stringify(awal));`, lang: 'javascript', run: true, caption: 'Tes seperti ini cepat, tidak butuh browser, dan menangkap kesalahan aturan bisnis sebelum sampai ke layar.' },
            { h2: 'State asinkron: modelkan statusnya' },
            `Alih-alih tiga state terpisah (<code>memuat</code>, <code>data</code>, <code>galat</code>) yang bisa saling bertentangan (memuat dan galat sekaligus?), modelkan satu <b>status</b> dengan kemungkinan terbatas.`,
            { code: js`function fetchReducer(state, aksi) {
    switch (aksi.tipe) {
        case 'mulai':  return { status: 'memuat', data: state.data, galat: null };
        case 'sukses': return { status: 'sukses', data: aksi.data, galat: null };
        case 'gagal':  return { status: 'gagal', data: state.data, galat: aksi.galat };
        default: return state;
    }
}
let s = { status: 'diam', data: null, galat: null };
for (const a of [{ tipe: 'mulai' }, { tipe: 'sukses', data: [1, 2, 3] }, { tipe: 'mulai' }, { tipe: 'gagal', galat: 'Koneksi putus' }]) {
    s = fetchReducer(s, a);
    console.log(a.tipe.padEnd(7), JSON.stringify(s));
}`, lang: 'javascript', run: true, caption: 'Keadaan mustahil (memuat sambil sukses) tidak bisa terjadi karena status hanya satu nilai pada satu waktu. Setelah gagal, data lama tetap ada agar bisa ditampilkan bersama pesan galat.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Reducer harus...', options: ['Murni dan tidak mengubah state lama', 'Memanggil API', 'Mengubah state langsung'], answer: 0, why: 'Murni sehingga mudah diuji dan dapat diprediksi.' }, { q: 'Hasil useReducer adalah...', options: ['[state, dispatch]', '[state, setState]', 'state saja'], answer: 0, why: 'dispatch mengirim aksi ke reducer.' }, { q: 'Kapan useReducer lebih baik dari useState?', options: ['State saling terkait dengan banyak jenis perubahan', 'Hanya satu angka', 'Tidak pernah'], answer: 0, why: 'Memusatkan logika pembaruan.' }] },
            { exercise: [['Tambahkan aksi "hapus" yang menghapus item ber-id tertentu dari keranjang.', '<code>case "hapus": return { ...state, item: state.item.filter(i => i.id !== aksi.id) };</code>'], ['Mengapa reducer tidak boleh memanggil fetch?', 'Reducer harus murni dan deterministik; permintaan jaringan adalah efek samping yang dilakukan di event handler atau efek, lalu hasilnya dikirim sebagai aksi.'], ['Apa yang terjadi bila reducer mengubah state langsung dan mengembalikan objek yang sama?', 'React menganggap tidak ada perubahan (referensi sama) dan tidak merender ulang; mode pengembangan juga bisa memanggil reducer dua kali sehingga mengungkap bug.'], ['Berikan dua keuntungan menamai aksi.', 'Alur perubahan mudah dilacak dan didebug, serta daftar aksi menjadi dokumentasi perilaku state.']] },
            { summary: ['Reducer: (state, aksi) → state baru, fungsi murni.', 'useReducer mengembalikan [state, dispatch]; komponen mengirim aksi, reducer menentukan perubahan.', 'Pilih bila state saling terkait atau jenis perubahan banyak; reducer mudah diuji tanpa React.', 'Modelkan status asinkron sebagai satu nilai status untuk menghindari keadaan mustahil.'] },
        ],
        faq: [['Apa hubungan useReducer dengan Redux?', 'Redux memakai pola reducer yang sama, tetapi dengan satu penyimpanan global dan alat bantu (devtools, middleware). useReducer bersifat lokal pada komponen, kecuali digabung dengan Context.'], ['Apakah dispatch berubah antar render?', 'Tidak; identitas dispatch stabil sehingga aman diteruskan ke anak atau dimasukkan ke dependency.'], ['Bagaimana menangani efek samping pada aksi?', 'Lakukan di event handler atau useEffect, lalu kirim aksi hasilnya (misalnya sukses atau gagal).']],
        sources: [['React: Extracting State Logic into a Reducer', 'https://react.dev/learn/extracting-state-logic-into-a-reducer'], ['React: useReducer reference', 'https://react.dev/reference/react/useReducer'], ['Redux: Style Guide', 'https://redux.js.org/style-guide/'], REF_HOOKS],
    },

    {
        slug: 'context-api-react-berbagi-data-tanpa-prop-drilling',
        title: 'Context API React: Berbagi Data Tanpa Prop Drilling',
        description: 'Pahami React Context: masalah prop drilling, createContext dan Provider, useContext, pola context dengan reducer, kapan context cukup, dan jebakan performanya.',
        date: D, category: C, level: 'Menengah', tags: ['React Context', 'useContext', 'prop drilling', 'state global', 'Provider'], cta: 'jasa',
        prereq: ['props', 'useState', 'useReducer'],
        lead: 'Mengirim props lewat lima tingkat komponen hanya agar komponen paling dalam bisa membaca tema atau pengguna yang login itu melelahkan, dan merusak keterbacaan. Context menyediakan jalur pintas: nilai ditaruh di satu titik pohon dan dibaca oleh komponen di bawahnya. Namun Context bukan pengganti semua state management.',
        body: [
            { objectives: ['menjelaskan prop drilling dan kapan menjadi masalah', 'membuat dan memakai Context dengan createContext, Provider, dan useContext', 'memadukan Context dengan useReducer untuk state aplikasi', 'mengenali jebakan performa Context dan cara mengurangi render ulang', 'memilih antara Context, props, composition, dan pustaka state eksternal'] },
            { h2: 'Masalah: prop drilling' },
            { code: jsx`// Tema dikirim lewat banyak tingkat yang tidak membutuhkannya
<Aplikasi tema={tema}>
  <Tata letak tema={tema}>
    <Sidebar tema={tema}>
      <TombolMenu tema={tema} />   // hanya komponen ini yang butuh tema
    </Sidebar>
  </Tata letak>
</Aplikasi>`, lang: 'jsx', caption: 'Komponen perantara dipaksa mengenal props yang bukan urusannya, dan setiap perubahan struktur menuntut mengubah banyak file.' },
            { h2: 'Context: tiga langkah' },
            { ol: ['<b>Buat</b> context dengan <code>createContext(nilaiBawaan)</code>.', '<b>Sediakan</b> nilainya dengan <code>&lt;Context.Provider value=...&gt;</code> di atas komponen yang membutuhkan.', '<b>Baca</b> dengan <code>useContext(Context)</code> di komponen mana pun di bawah Provider.'] },
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');
const { createContext, useContext } = React;

const TemaContext = createContext('terang');            // nilai bawaan bila tak ada Provider

function TombolMenu() {
    const tema = useContext(TemaContext);                // dibaca langsung tanpa props
    return <button className={'tombol-' + tema}>Menu ({tema})</button>;
}
function Sidebar()  { return <aside><TombolMenu /></aside>; }      // tidak tahu apa pun soal tema
function TataLetak() { return <main><Sidebar /></main>; }

function Aplikasi({ tema }) {
    return (
        <TemaContext.Provider value={tema}>
            <TataLetak />
        </TemaContext.Provider>
    );
}

console.log(renderToString(<Aplikasi tema="gelap" />));
console.log(renderToString(<TombolMenu />));               // di luar Provider: memakai nilai bawaan`, lang: 'jsx', run: true, caption: 'Sidebar dan TataLetak tidak menerima apa pun. Di luar Provider, komponen jatuh ke nilai bawaan createContext.' },
            { h2: 'Pola yang rapi: Provider + hook khusus' },
            `Bungkus context dalam modul sendiri: Provider yang mengelola state, dan hook khusus yang memberi pesan galat bila dipakai di luar Provider.`,
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');
const { createContext, useContext, useReducer } = React;

const AuthContext = createContext(null);

function authReducer(state, aksi) {
    switch (aksi.tipe) {
        case 'masuk':  return { pengguna: aksi.pengguna };
        case 'keluar': return { pengguna: null };
        default: throw new Error('aksi tidak dikenal');
    }
}

export function AuthProvider({ children, awal = { pengguna: null } }) {
    const [state, dispatch] = useReducer(authReducer, awal);
    return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (ctx === null) throw new Error('useAuth harus dipakai di dalam <AuthProvider>');
    return ctx;
}

function Salam() {
    const { pengguna } = useAuth();
    return <p>{pengguna ? 'Halo, ' + pengguna.nama : 'Silakan masuk'}</p>;
}

console.log(renderToString(<AuthProvider><Salam /></AuthProvider>));
console.log(renderToString(<AuthProvider awal={{ pengguna: { nama: 'Ani' } }}><Salam /></AuthProvider>));
try { renderToString(<Salam />); } catch (e) { console.log('galat jelas:', e.message); }`, lang: 'jsx', run: true, caption: 'Hook useAuth menyembunyikan detail Context dan memberi pesan galat yang jelas bila lupa membungkus dengan Provider.' },
            { h2: 'Jebakan: semua pembaca ikut render ulang' },
            `Saat nilai <code>value</code> pada Provider berubah, <b>setiap komponen yang memanggil useContext(context itu) dirender ulang</b>, walau ia hanya memakai sebagian nilai. Dan membuat objek baru di <code>value={{ ... }}</code> setiap render membuat nilainya selalu "berubah".`,
            { code: js`// Mengapa value={{ a, b }} selalu dianggap berubah: objek baru setiap render
const render1 = { pengguna: 'Ani', dispatch: () => {} };
const render2 = { pengguna: 'Ani', dispatch: () => {} };     // isinya sama, objeknya berbeda
console.log('dianggap sama oleh React?', Object.is(render1, render2));

// Perbaikan: stabilkan nilai (di React: useMemo) atau pecah context
const stabil = { pengguna: 'Ani' };
console.log('objek yang sama dipakai ulang?', Object.is(stabil, stabil));`, lang: 'javascript', run: true },
            { ul: ['<b>Pecah context</b> menurut seberapa sering berubah: konteks tema (jarang) terpisah dari konteks keranjang (sering).', '<b>Pisahkan state dan dispatch</b> ke dua context agar komponen yang hanya mengirim aksi tidak ikut render saat state berubah.', '<b>Stabilkan nilai</b> dengan <code>useMemo</code> bila Provider sendiri sering dirender ulang oleh induknya.', '<b>Pertimbangkan composition</b>: kirim komponen sebagai children atau props agar perantara tidak perlu mengenal data.'] },
            { h2: 'Kapan memakai apa' },
            { table: { head: ['Kebutuhan', 'Pilihan'], rows: [['Data jarang berubah dan dipakai di banyak tempat (tema, bahasa, pengguna)', 'Context'], ['Data hanya dipakai satu atau dua tingkat di bawah', 'Props biasa'], ['Perantara hanya meneruskan elemen', 'Composition (children)'], ['State global besar yang sering berubah dan perlu pembaruan selektif', 'Pustaka state (Zustand, Redux Toolkit, Jotai)'], ['Data dari server dengan cache', 'TanStack Query atau SWR, bukan Context']] } },
            { callout: 'Context <b>bukan alat manajemen state</b> sendirian; ia adalah mekanisme pengiriman nilai. State tetap berasal dari useState atau useReducer. Jangan memasukkan semua state aplikasi ke satu context raksasa.', kind: 'warn', title: 'Salah kaprah' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Masalah yang diselesaikan Context?', options: ['Prop drilling', 'Kecepatan jaringan', 'Routing'], answer: 0, why: 'Mengirim nilai ke komponen dalam tanpa melewati perantara.' }, { q: 'Saat value Provider berubah...', options: ['Semua pembaca context itu dirender ulang', 'Tidak ada yang berubah', 'Hanya Provider'], answer: 0, why: 'Karena itu pecah context menurut frekuensi perubahan.' }, { q: 'Untuk data server dengan cache, sebaiknya...', options: ['Pustaka seperti TanStack Query', 'Context saja', 'Variabel global'], answer: 0, why: 'Menangani cache, status, dan sinkronisasi.' }] },
            { exercise: [['Buat context bahasa ("id" atau "en") dengan tombol untuk mengganti.', 'Provider memegang useState("id") dan menyediakan { bahasa, setBahasa }; komponen membaca dengan useContext.'], ['Mengapa membungkus useContext dalam hook khusus berguna?', 'Menyembunyikan detail, memberi pesan galat jelas di luar Provider, dan memudahkan mengganti implementasi.'], ['Kapan composition lebih baik daripada Context?', 'Saat hanya satu atau dua tingkat perantara; mengirim JSX sebagai children menghindari ketergantungan global.'], ['Mengapa memisahkan context state dan dispatch mengurangi render?', 'Komponen yang hanya memanggil dispatch (stabil) tidak berlangganan state, sehingga tidak dirender ulang saat state berubah.']] },
            { summary: ['Context mengirim nilai ke komponen mana pun di bawah Provider tanpa melewati props.', 'createContext, Provider, useContext; bungkus dalam Provider dan hook khusus.', 'Nilai berubah → semua pembaca ikut render ulang; pecah context dan stabilkan nilai.', 'Context bukan pengganti state management dan bukan cache data server.'] },
        ],
        faq: [['Apa bedanya Context dan Redux?', 'Context hanya mengirim nilai; Redux menyediakan penyimpanan terpusat, pola aksi-reducer, middleware, dan devtools, dengan pembaruan selektif yang efisien.'], ['Bolehkah memakai beberapa Provider?', 'Boleh dan umum; urutan bersarang menentukan context mana yang tersedia bagi komponen di dalamnya.'], ['Apakah Context bekerja saat rendering di server?', 'Ya, seperti contoh di atas yang dijalankan dengan renderToString.']],
        sources: [['React: Passing Data Deeply with Context', 'https://react.dev/learn/passing-data-deeply-with-context'], ['React: Scaling Up with Reducer and Context', 'https://react.dev/learn/scaling-up-with-reducer-and-context'], ['React: useContext reference', 'https://react.dev/reference/react/useContext'], REF_HOOKS],
    },

    {
        slug: 'custom-hook-react-cara-membuat-dan-contoh-yang-berguna',
        title: 'Custom Hook React: Cara Membuat dan Contoh yang Berguna',
        description: 'Belajar membuat custom hook di React: ekstrak logika berulang, aturan penamaan use, contoh useDebounce, useLocalStorage, dan useToggle, serta cara menguji logikanya.',
        date: D, category: C, level: 'Menengah', tags: ['custom hook', 'React hooks', 'useDebounce', 'useLocalStorage', 'refactoring React'], cta: 'jasa',
        prereq: ['useState', 'useEffect'],
        lead: 'Custom hook adalah cara React untuk berbagi logika yang bersifat stateful antar komponen: fungsi biasa yang namanya diawali "use" dan memanggil hook lain. Bila Anda menyalin pasangan useState dan useEffect yang sama ke tiga komponen, itulah sinyal untuk mengekstraknya menjadi hook.',
        body: [
            { objectives: ['menjelaskan apa itu custom hook dan aturannya', 'mengekstrak logika berulang menjadi hook', 'membuat hook useToggle, useDebounce, dan useLocalStorage', 'memisahkan logika murni dari bagian yang memakai hook agar mudah diuji', 'mengenali kapan sebuah hook layak dibuat'] },
            { h2: 'Aturan dan ide dasar' },
            { ul: ['Custom hook adalah <b>fungsi</b> yang namanya dimulai dengan <code>use</code> dan memanggil hook lain di dalamnya.', 'Ia <b>berbagi logika</b>, bukan berbagi state: setiap komponen yang memanggilnya mendapat salinan state sendiri.', 'Aturan hooks tetap berlaku: panggil di tingkat atas, bukan dalam kondisi atau perulangan.', 'Awalan <code>use</code> memberi tahu linter dan pembaca bahwa fungsi ini mengikuti aturan hooks.'] },
            { h2: 'Contoh 1: useToggle' },
            { code: jsx`import { useState, useCallback } from 'react';

export function useToggle(awal = false) {
    const [nilai, setNilai] = useState(awal);
    const balik = useCallback(() => setNilai(n => !n), []);
    return [nilai, balik, setNilai];
}

// pemakaian
function Panel() {
    const [buka, balikBuka] = useToggle();
    return (
        <>
            <button onClick={balikBuka}>{buka ? 'Tutup' : 'Buka'}</button>
            {buka && <p>Isi panel</p>}
        </>
    );
}`, lang: 'jsx' },
            { h2: 'Contoh 2: useDebounce' },
            `Saat pengguna mengetik di kolom pencarian, kita tidak ingin menembak API di setiap huruf. Debounce menunda nilai sampai pengguna berhenti mengetik sejenak.`,
            { code: jsx`import { useState, useEffect } from 'react';

export function useDebounce(nilai, tundaMs = 400) {
    const [ditunda, setDitunda] = useState(nilai);
    useEffect(() => {
        const id = setTimeout(() => setDitunda(nilai), tundaMs);
        return () => clearTimeout(id);          // ketikan baru membatalkan timer sebelumnya
    }, [nilai, tundaMs]);
    return ditunda;
}

function Pencarian() {
    const [kata, setKata] = useState('');
    const kataTunda = useDebounce(kata, 400);   // hanya berubah setelah 400 ms tanpa ketikan
    // useEffect(() => { cariKeApi(kataTunda); }, [kataTunda]);
    return <input value={kata} onChange={e => setKata(e.target.value)} />;
}`, lang: 'jsx' },
            `Logika intinya, yaitu "tunda dan batalkan yang sebelumnya", dapat dijalankan dan dipahami tanpa React:`,
            { code: js`function buatDebounce(fn, tundaMs) {
    let id;
    return (...args) => {
        clearTimeout(id);                    // batalkan pemanggilan yang tertunda
        id = setTimeout(() => fn(...args), tundaMs);
    };
}

const cari = buatDebounce(kata => console.log('mencari ke server:', kata), 50);

// pengguna mengetik "r", "re", "rea", "reac" dengan jeda pendek, lalu berhenti
['r', 're', 'rea', 'reac'].forEach((kata, i) => setTimeout(() => { console.log('ketik:', kata); cari(kata); }, i * 10));
setTimeout(() => console.log('(selesai)'), 200);`, lang: 'javascript', run: true, caption: 'Empat ketikan hanya menghasilkan satu panggilan ke server, yaitu untuk nilai terakhir. Itu penghematan permintaan sekaligus mencegah hasil usang tiba belakangan.' },
            { h2: 'Contoh 3: useLocalStorage' },
            { code: jsx`import { useState, useEffect } from 'react';

export function useLocalStorage(kunci, awal) {
    const [nilai, setNilai] = useState(() => {
        try {
            const tersimpan = window.localStorage.getItem(kunci);
            return tersimpan !== null ? JSON.parse(tersimpan) : awal;
        } catch {
            return awal;                          // localStorage bisa diblokir atau berisi data rusak
        }
    });

    useEffect(() => {
        try { window.localStorage.setItem(kunci, JSON.stringify(nilai)); } catch { /* abaikan */ }
    }, [kunci, nilai]);

    return [nilai, setNilai];
}

// const [tema, setTema] = useLocalStorage('tema', 'terang');`, lang: 'jsx', caption: 'Perhatikan inisialisasi malas (fungsi di useState) agar localStorage dibaca sekali, dan try/catch karena localStorage dapat gagal (mode privat, kuota penuh, data rusak).' },
            { h3: 'Ekstrak logika murninya agar bisa diuji' },
            { code: js`// Bagian yang tidak butuh React dipisahkan: mudah diuji
function bacaTersimpan(penyimpanan, kunci, awal) {
    try {
        const teks = penyimpanan.getItem(kunci);
        return teks !== null ? JSON.parse(teks) : awal;
    } catch {
        return awal;
    }
}

// penyimpanan tiruan
const tiruan = data => ({ getItem: k => (k in data ? data[k] : null) });

console.log('belum ada     ->', bacaTersimpan(tiruan({}), 'tema', 'terang'));
console.log('ada           ->', bacaTersimpan(tiruan({ tema: '"gelap"' }), 'tema', 'terang'));
console.log('data rusak    ->', bacaTersimpan(tiruan({ tema: '{bukan json' }), 'tema', 'terang'));
console.log('akses gagal   ->', bacaTersimpan({ getItem() { throw new Error('diblokir'); } }, 'tema', 'terang'));`, lang: 'javascript', run: true },
            { h2: 'Kapan layak membuat hook' },
            { table: { head: ['Tanda', 'Tindakan'], rows: [['Pasangan useState + useEffect yang sama muncul di beberapa komponen', 'Ekstrak ke hook'], ['Komponen terlalu panjang karena logika non-tampilan', 'Pindahkan logika ke hook bernama jelas'], ['Hanya dipakai sekali dan sederhana', 'Biarkan di komponen; jangan memaksa abstraksi'], ['Hook yang hanya membungkus satu useState', 'Biasanya tidak perlu']] } },
            { callout: 'Nama hook harus menjelaskan <b>tujuan</b> (<code>useOnlineStatus</code>, <code>useDebounce</code>), bukan siklus hidup (<code>useMount</code>). Hindari hook "serba bisa" yang menerima callback awal-akhir; hook yang baik punya satu tanggung jawab yang jelas.', kind: 'good', title: 'Penamaan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Custom hook harus diawali...', options: ['use', 'get', 'hook'], answer: 0, why: 'Konvensi yang dikenali linter.' }, { q: 'Dua komponen memanggil useToggle yang sama. State-nya...', options: ['Terpisah untuk masing-masing', 'Dibagi bersama', 'Berubah serentak'], answer: 0, why: 'Hook berbagi logika, bukan state.' }, { q: 'Tujuan debounce pada pencarian?', options: ['Mengurangi permintaan saat pengguna masih mengetik', 'Mempercepat render', 'Menyimpan hasil'], answer: 0, why: 'Menunda hingga ada jeda.' }] },
            { exercise: [['Buat hook useOnlineStatus yang melacak navigator.onLine dengan event "online" dan "offline".', 'State awal navigator.onLine; useEffect menambah dua listener dan membersihkannya di cleanup.'], ['Mengapa useLocalStorage memakai try/catch?', 'Akses dapat dilempar galat (mode privat, diblokir, kuota penuh) dan JSON.parse bisa gagal pada data rusak.'], ['Apa bedanya custom hook dan komponen?', 'Hook mengembalikan nilai (logika) tanpa tampilan; komponen mengembalikan JSX.'], ['Bagaimana membuat useDebounce lebih umum untuk fungsi, bukan nilai?', 'Simpan fungsi di ref dan kembalikan fungsi yang menunda pemanggilannya (seperti buatDebounce), dengan cleanup saat dilepas.']] },
            { summary: ['Custom hook: fungsi berawalan use yang berbagi logika, bukan state.', 'Ekstrak bila logika stateful berulang; beri nama sesuai tujuan.', 'useToggle, useDebounce, dan useLocalStorage adalah contoh praktis.', 'Pisahkan logika murni agar bisa diuji tanpa React; jangan memaksa abstraksi dini.'] },
        ],
        faq: [['Pustaka hook siap pakai apa yang populer?', 'usehooks-ts, react-use, dan ahooks berisi puluhan hook umum. Periksa dulu bundel dan kebutuhan sebelum menambahnya.'], ['Bisakah hook memanggil hook lain?', 'Ya, itulah kekuatan komposisinya, selama aturan hooks tetap dipatuhi.'], ['Apakah hook bisa async?', 'Hook sendiri tidak async; ia mengelola state dan efek untuk pekerjaan asinkron (misalnya useFetch) dan mengembalikan status yang berubah.']],
        sources: [['React: Reusing Logic with Custom Hooks', 'https://react.dev/learn/reusing-logic-with-custom-hooks'], ['React: Rules of Hooks', 'https://react.dev/reference/rules/rules-of-hooks'], ['MDN: Web Storage API', 'https://developer.mozilla.org/docs/Web/API/Web_Storage_API'], REF_HOOKS],
    },

    {
        slug: 'optimasi-performa-react-memo-usememo-usecallback-dan-profiling',
        title: 'Optimasi Performa React: memo, useMemo, useCallback',
        description: 'Pahami kapan React lambat dan cara memperbaikinya: render ulang, React.memo, useMemo, useCallback, memindahkan state, virtualisasi, dan profiling dengan React DevTools.',
        date: D, category: C, level: 'Lanjut', tags: ['performa React', 'React.memo', 'useMemo', 'useCallback', 'render ulang'], cta: 'jasa',
        prereq: ['useState', 'useEffect', 'props'],
        lead: 'Banyak orang mengoptimasi React dengan menaburkan useMemo dan useCallback di mana-mana, lalu heran mengapa tidak ada bedanya. Optimasi yang efektif dimulai dengan mengukur dan memahami <i>mengapa</i> render terjadi. Sering kali perbaikan terbaik bukan memoisasi, melainkan menata ulang tempat state berada.',
        body: [
            { objectives: ['menjelaskan kapan dan mengapa komponen dirender ulang', 'membedakan render dari pembaruan DOM dan mengapa render murah itu normal', 'memakai React.memo, useMemo, dan useCallback pada tempat yang tepat', 'memperbaiki masalah dengan memindahkan state dan komposisi', 'mengukur dengan Profiler sebelum dan sesudah mengoptimasi'] },
            { h2: 'Kapan sebuah komponen dirender ulang' },
            { ul: ['State komponen itu berubah.', 'Induknya dirender ulang (dan komponen tidak dibungkus memo).', 'Context yang dibacanya berubah.'] },
            `Render adalah memanggil fungsi komponen untuk menghitung JSX; hanya bila hasilnya berbeda React menyentuh DOM. Render ulang yang menghasilkan keluaran sama itu <b>murah dan wajar</b>. Optimasi baru perlu bila render menjadi <i>lambat</i> (pekerjaan berat per render) atau <i>terlalu sering</i> pada pohon besar.`,
            { callout: 'Pertama <b>ukur</b>. Buka React DevTools → Profiler, rekam interaksi yang terasa lambat, lalu lihat komponen mana yang memakan waktu dan mengapa ia dirender. Mengoptimasi tanpa mengukur sering menambah kerumitan tanpa manfaat.', kind: 'warn', title: 'Mulai dari pengukuran' },
            { h2: 'Perbaikan pertama: pindahkan state ke bawah' },
            `Bila state yang cepat berubah (misalnya isi kotak ketik) berada di komponen besar, seluruh anaknya ikut dirender. Pindahkan state ke komponen kecil yang benar-benar memakainya.`,
            { code: jsx`// Sebelum: setiap ketikan merender ulang DaftarBerat
function Halaman() {
    const [kata, setKata] = useState('');
    return (
        <>
            <input value={kata} onChange={e => setKata(e.target.value)} />
            <DaftarBerat />
        </>
    );
}

// Sesudah: state dipindah ke komponen sendiri; Halaman tidak lagi dirender saat mengetik
function KotakCari() {
    const [kata, setKata] = useState('');
    return <input value={kata} onChange={e => setKata(e.target.value)} />;
}
function Halaman() {
    return (
        <>
            <KotakCari />
            <DaftarBerat />
        </>
    );
}`, lang: 'jsx', caption: 'Tanpa memo atau hook tambahan. Teknik serupa: mengangkat bagian yang berubah ke children sehingga induk tidak merender ulang bagian statis.' },
            { h2: 'React.memo: lewati render bila props sama' },
            `<code>React.memo(Komponen)</code> membuat React melewati render ulang bila props <b>sama</b> dibandingkan sebelumnya (perbandingan dangkal dengan <code>Object.is</code>). Perhatikan jebakannya: objek, array, dan fungsi yang dibuat di dalam komponen induk selalu "baru" pada setiap render.`,
            { code: js`// Perbandingan dangkal seperti yang dilakukan React.memo
function samaDangkal(a, b) {
    const ka = Object.keys(a), kb = Object.keys(b);
    return ka.length === kb.length && ka.every(k => Object.is(a[k], b[k]));
}

const fungsiTetap = () => {};
console.log('props primitif sama      :', samaDangkal({ nama: 'Ani', umur: 20 }, { nama: 'Ani', umur: 20 }));
console.log('objek baru, isi sama     :', samaDangkal({ gaya: { warna: 'biru' } }, { gaya: { warna: 'biru' } }));
console.log('fungsi baru tiap render  :', samaDangkal({ klik: () => {} }, { klik: () => {} }));
console.log('fungsi yang distabilkan  :', samaDangkal({ klik: fungsiTetap }, { klik: fungsiTetap }));`, lang: 'javascript', run: true, caption: 'memo hanya berguna bila props benar-benar stabil. Itulah alasan useCallback dan useMemo sering menyertainya.' },
            { h2: 'useMemo dan useCallback: menyimpan hasil antar render' },
            { table: { head: ['Hook', 'Menyimpan', 'Pakai bila'], rows: [['useMemo(() => hitung(a, b), [a, b])', 'Hasil perhitungan', 'Perhitungan benar-benar mahal, atau agar objek/array stabil sebagai props atau dependency'], ['useCallback(fn, [deps])', 'Fungsi itu sendiri', 'Fungsi dikirim ke komponen memo atau menjadi dependency efek']] } },
            { code: js`// Seberapa mahal sebuah perhitungan? Ukur dulu.
function hitungMahal(n) { let t = 0; for (let i = 0; i < n; i++) t += Math.sqrt(i); return t; }

let t0 = performance.now();
for (let i = 0; i < 200; i++) hitungMahal(10_000);      // 200 render x pekerjaan ringan
console.log('200 x 10 ribu iterasi  :', (performance.now() - t0).toFixed(1), 'ms  -> useMemo tidak diperlukan');

t0 = performance.now();
for (let i = 0; i < 20; i++) hitungMahal(5_000_000);    // 20 render x pekerjaan berat
console.log('20 x 5 juta iterasi    :', (performance.now() - t0).toFixed(0), 'ms  -> memoisasi layak dipertimbangkan');

// memoisasi sederhana: hasil dipakai ulang bila argumen sama
function memo(fn) { const cache = new Map(); return n => cache.has(n) ? cache.get(n) : (cache.set(n, fn(n)), cache.get(n)); }
const cepat = memo(hitungMahal);
t0 = performance.now();
for (let i = 0; i < 20; i++) cepat(5_000_000);
console.log('20 x dengan cache      :', (performance.now() - t0).toFixed(0), 'ms');`, lang: 'javascript', run: true, caption: 'Angka milidetik berbeda di tiap mesin, tetapi pola intinya konsisten: memoisasi menguntungkan hanya saat pekerjaan per render memang berat.' },
            { h2: 'Tanda dan solusi masalah performa' },
            { table: { head: ['Gejala', 'Penyebab umum', 'Solusi'], rows: [['Mengetik terasa lambat', 'State di komponen besar; render daftar berat tiap ketikan', 'Pindahkan state ke bawah; debounce; useDeferredValue'], ['Daftar ribuan item lambat', 'Terlalu banyak elemen DOM', 'Virtualisasi (TanStack Virtual, react-window), paginasi'], ['Seluruh aplikasi render saat context berubah', 'Satu context raksasa', 'Pecah context, pustaka state selektif'], ['Halaman awal lambat dimuat', 'Bundel JavaScript besar', 'Code splitting dengan React.lazy dan Suspense; analisis bundel'], ['Komponen memo tetap render', 'Props objek/fungsi tidak stabil', 'useMemo/useCallback pada props, atau komposisi']] } },
            { h2: 'React Compiler' },
            `React Compiler (alat build dari tim React, kini tersedia dalam rilis stabil) dapat <b>menambahkan memoisasi otomatis</b> pada waktu kompilasi, sehingga Anda tidak perlu menulis useMemo dan useCallback secara manual di banyak kasus. Tetap saja, pemahaman tentang render, state yang diletakkan dengan baik, dan pengukuran tidak tergantikan.`,
            { w: 'checklist', title: 'Sebelum mengoptimasi', items: ['Saya sudah merekam masalahnya dengan React DevTools Profiler (bukan menebak).', 'Saya sudah mencoba memindahkan state ke bawah atau memakai komposisi.', 'Daftar panjang memakai virtualisasi atau paginasi.', 'Bundel sudah dianalisis; rute berat dimuat malas.', 'Props yang diberikan ke komponen memo stabil (objek, array, fungsi).', 'Saya membandingkan hasil sebelum dan sesudah dengan pengukuran yang sama.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Render ulang yang menghasilkan JSX sama...', options: ['Tidak mengubah DOM dan biasanya murah', 'Selalu merusak DOM', 'Dilarang'], answer: 0, why: 'React hanya memperbarui DOM bila ada perbedaan.' }, { q: 'Mengapa React.memo kadang tidak bekerja?', options: ['Props objek atau fungsi baru tiap render', 'memo rusak', 'Komponen terlalu kecil'], answer: 0, why: 'Perbandingan dangkal menganggap referensi baru sebagai berubah.' }, { q: 'Langkah pertama optimasi?', options: ['Mengukur dengan Profiler', 'Menambah useMemo di mana-mana', 'Menulis ulang dengan Redux'], answer: 0, why: 'Optimasi tanpa data sering sia-sia.' }] },
            { exercise: [['Kotak ketik membuat tabel besar lambat. Beri dua perbaikan tanpa memo.', 'Pindahkan state kotak ke komponen sendiri; atau gunakan useDeferredValue/debounce untuk nilai yang dipakai tabel.'], ['Kapan useCallback tidak berguna?', 'Bila fungsi tidak dikirim ke komponen memo dan tidak menjadi dependency efek; ia hanya menambah kerumitan.'], ['Mengapa menyimpan perhitungan murah di useMemo bisa lebih lambat?', 'useMemo sendiri punya biaya (menyimpan dan membandingkan dependency); untuk pekerjaan kecil biayanya melebihi manfaat.'], ['Apa fungsi key pada pengoptimalan daftar?', 'Key stabil membuat React memindahkan elemen alih-alih membuang dan membuat ulang, menjaga state dan mengurangi pekerjaan DOM.']] },
            { summary: ['Render murah itu normal; optimasi perlu bila lambat atau terlalu sering pada pohon besar.', 'Ukur dengan Profiler, lalu coba pindahkan state ke bawah dan komposisi lebih dulu.', 'React.memo, useMemo, useCallback bekerja bila props stabil dan pekerjaan memang berat.', 'Virtualisasi untuk daftar panjang, code splitting untuk bundel besar; React Compiler dapat mengotomasi memoisasi.'] },
        ],
        faq: [['Apakah semua komponen sebaiknya dibungkus memo?', 'Tidak. Pembungkusan sembarangan menambah kerumitan dan biaya perbandingan; pakai di titik yang terbukti bermasalah.'], ['Apa itu useDeferredValue?', 'Hook untuk menunda pembaruan bagian UI yang berat agar input tetap responsif; nilai "tertunda" menyusul setelah render mendesak selesai.'], ['Bagaimana menganalisis ukuran bundel?', 'Gunakan plugin visualisasi (misalnya rollup-plugin-visualizer untuk Vite) untuk melihat paket yang memakan ruang dan pertimbangkan impor dinamis.']],
        sources: [['React: Render and Commit', 'https://react.dev/learn/render-and-commit'], ['React: memo reference', 'https://react.dev/reference/react/memo'], ['React: useMemo reference', 'https://react.dev/reference/react/useMemo'], ['React Compiler', 'https://react.dev/learn/react-compiler']],
    },

    {
        slug: 'react-router-routing-halaman-parameter-dan-navigasi',
        title: 'React Router: Routing Halaman, Parameter, dan Navigasi',
        description: 'Belajar routing di aplikasi React dengan React Router: rute, link, parameter dinamis, nested route, redirect, halaman 404, dan memahami cara pencocokan path bekerja.',
        date: D, category: C, level: 'Menengah', tags: ['React Router', 'routing', 'SPA', 'parameter URL', 'navigasi'], cta: 'jasa',
        prereq: ['komponen React', 'useState'],
        lead: 'Aplikasi React biasa berupa satu halaman HTML (single-page application). Routing membuat pengguna tetap merasakan banyak halaman: alamat di bilah browser berubah, tombol kembali berfungsi, dan setiap tampilan dapat dibagikan lewat tautan. React Router adalah pustaka routing yang paling banyak dipakai.',
        body: [
            { objectives: ['menjelaskan bagaimana SPA mengelola banyak halaman', 'mendefinisikan rute, Link, dan nested route dengan React Router', 'membaca parameter dinamis dan query string', 'menangani redirect, halaman 404, dan navigasi terprogram', 'memahami logika pencocokan path dengan implementasi sederhana'] },
            { h2: 'Bagaimana SPA "berpindah halaman"' },
            `Alih-alih meminta HTML baru dari server, SPA memakai <b>History API</b> browser untuk mengubah alamat tanpa muat ulang, lalu memilih komponen mana yang tampil berdasarkan alamat. Karena itu tautan harus memakai komponen <code>Link</code> (bukan <code>&lt;a href&gt;</code> biasa) agar tidak memuat ulang seluruh halaman.`,
            { w: 'compare', title: 'Dua cara berpindah', tabs: [{ label: '<a href> biasa', html: 'Browser meminta halaman baru ke server, semua JavaScript dimuat ulang, state aplikasi hilang.' }, { label: '<Link> React Router', html: 'Mengubah URL lewat History API dan merender komponen rute baru tanpa muat ulang. State di luar rute tetap hidup, transisi cepat.' }] },
            { h2: 'Rute dasar' },
            { code: jsx`import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Aplikasi() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to="/">Beranda</NavLink>
                <NavLink to="/produk">Produk</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/produk" element={<DaftarProduk />} />
                <Route path="/produk/:id" element={<DetailProduk />} />
                <Route path="*" element={<TidakDitemukan />} />      {/* cadangan: 404 */}
            </Routes>
        </BrowserRouter>
    );
}`, lang: 'jsx', caption: 'NavLink adalah Link yang otomatis memberi kelas "active" pada tautan yang cocok. Path "*" menangkap semua alamat yang tidak cocok.' },
            { h2: 'Parameter dinamis dan query string' },
            { code: jsx`import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

function DetailProduk() {
    const { id } = useParams();                          // dari /produk/:id  -> "42"
    const [params, setParams] = useSearchParams();        // dari ?urut=murah&hal=2
    const navigate = useNavigate();

    const urut = params.get('urut') ?? 'terbaru';
    return (
        <div>
            <h1>Produk #{id} (urut: {urut})</h1>
            <button onClick={() => setParams({ urut: 'murah' })}>Termurah</button>
            <button onClick={() => navigate('/produk')}>Kembali</button>
            <button onClick={() => navigate('/masuk', { replace: true })}>Keluar</button>
        </div>
    );
}`, lang: 'jsx', caption: 'Parameter path (/produk/42) menyatakan identitas sumber daya; query string (?urut=murah) menyatakan variasi tampilan. Keduanya membuat tampilan bisa dibagikan lewat tautan.' },
            { h2: 'Nested route dan Layout' },
            { code: jsx`import { Outlet } from 'react-router-dom';

function TataLetak() {
    return (
        <div>
            <header>Situs Saya</header>
            <main><Outlet /></main>        {/* anak rute tampil di sini */}
            <footer>2026</footer>
        </div>
    );
}

<Routes>
    <Route element={<TataLetak />}>
        <Route index element={<Beranda />} />
        <Route path="produk" element={<DaftarProduk />} />
        <Route path="produk/:id" element={<DetailProduk />} />
    </Route>
    <Route path="/masuk" element={<Masuk />} />     {/* tanpa tata letak */}
</Routes>`, lang: 'jsx' },
            { h2: 'Bagaimana pencocokan path bekerja' },
            `Di balik layar, router memecah path menjadi segmen dan membandingkannya dengan pola rute: segmen biasa harus sama persis, <code>:nama</code> mencocokkan apa saja dan menjadi parameter, dan <code>*</code> mencocokkan sisanya. Implementasi mini berikut menunjukkan idenya dan bisa Anda jalankan.`,
            { code: js`function cocokkan(pola, path) {
    const ps = pola.split('/').filter(Boolean);
    const xs = path.split('?')[0].split('/').filter(Boolean);
    const params = {};
    for (let i = 0; i < ps.length; i++) {
        if (ps[i] === '*') return { params };                          // cadangan: menerima sisanya
        if (xs[i] === undefined) return null;
        if (ps[i].startsWith(':')) params[ps[i].slice(1)] = decodeURIComponent(xs[i]);
        else if (ps[i] !== xs[i]) return null;
    }
    return xs.length === ps.length ? { params } : null;
}

const rute = ['/', '/produk', '/produk/:id', '/pengguna/:nama/pesanan/:no', '*'];
function resolusi(path) {
    for (const r of rute) { const c = cocokkan(r, path); if (c) return { rute: r, ...c }; }
}

for (const p of ['/', '/produk', '/produk/42', '/pengguna/ani%20lestari/pesanan/7', '/tidak/ada', '/produk/42/ulasan']) {
    const h = resolusi(p);
    console.log(p.padEnd(36), '->', h.rute.padEnd(30), JSON.stringify(h.params));
}`, lang: 'javascript', run: true, caption: 'Urutan rute penting: rute spesifik harus lebih dulu daripada cadangan "*". React Router modern memberi peringkat kecocokan secara otomatis, tetapi prinsipnya sama.' },
            { h2: 'Hal praktis yang sering terlewat' },
            { ul: ['<b>Server harus mengembalikan index.html untuk semua alamat</b> (SPA fallback); bila tidak, membuka /produk/42 langsung memberi 404. Cloudflare Pages dan Vercel menyediakan pengaturan ini, atau gunakan <code>HashRouter</code> sebagai cadangan.', '<b>Pindah halaman harus mengembalikan fokus dan gulir ke atas</b>; tanpa ini pengguna pembaca layar tidak tahu halaman berganti.', '<b>Judul dokumen</b> perlu diperbarui per rute agar tab dan riwayat bermakna.', '<b>SEO</b>: halaman SPA murni dirender di browser; bila penting bagi mesin pencari, pakai rendering di server atau prerender (Next.js, Remix, React Router framework mode).', '<b>Rute yang dilindungi</b> (butuh login) dikerjakan dengan komponen pembungkus yang mengalihkan dengan <code>&lt;Navigate to="/masuk" replace /&gt;</code> bila belum masuk.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa memakai <Link> alih-alih <a>?', options: ['Menghindari muat ulang halaman penuh', 'Lebih cantik', 'Wajib oleh HTML'], answer: 0, why: 'Link mengubah URL lewat History API.' }, { q: 'Path "/produk/:id" cocok dengan...', options: ['/produk/42', '/produk', '/produk/42/ulasan'], answer: 0, why: ':id mencocokkan satu segmen.' }, { q: 'Mengapa server perlu "SPA fallback"?', options: ['Agar membuka alamat dalam langsung tetap memuat aplikasi', 'Untuk keamanan', 'Untuk kompresi'], answer: 0, why: 'Server tidak punya berkas untuk /produk/42.' }] },
            { exercise: [['Tulis rute untuk halaman profil di /pengguna/:nama dan baca namanya.', '<code>&lt;Route path="/pengguna/:nama" element={&lt;Profil /&gt;} /&gt;</code> dan <code>const { nama } = useParams();</code>'], ['Apa bedanya parameter path dan query string?', 'Parameter path mengidentifikasi sumber daya (/produk/42); query string menyaring atau mengatur tampilan (?urut=murah).'], ['Bagaimana mengalihkan pengguna yang belum login dari rute terlindungi?', 'Komponen pembungkus memeriksa status login dan mengembalikan <code>&lt;Navigate to="/masuk" replace /&gt;</code> bila belum masuk.'], ['Mengapa halaman SPA murni kurang ideal untuk SEO dan apa alternatifnya?', 'Konten dirender di browser sehingga tidak selalu terbaca penjelajah sederhana; gunakan SSR/SSG atau prerender.']] },
            { summary: ['SPA mengganti tampilan lewat History API tanpa muat ulang; gunakan Link/NavLink.', 'Routes, Route, parameter :id, useParams, useSearchParams, useNavigate, Outlet untuk tata letak bersarang.', 'Pencocokan path membandingkan segmen; rute cadangan "*" untuk 404.', 'Siapkan SPA fallback di server, kelola fokus dan judul halaman, dan pikirkan SEO.'] },
        ],
        faq: [['Apa bedanya BrowserRouter dan HashRouter?', 'BrowserRouter memakai alamat bersih (/produk) dan butuh SPA fallback di server; HashRouter memakai /#/produk dan bekerja tanpa konfigurasi server.'], ['Apakah React Router satu-satunya pilihan?', 'Ada alternatif seperti TanStack Router, dan framework dengan routing berbasis berkas (Next.js, Remix).'], ['Apa itu loader dan action?', 'Pada mode data React Router, loader mengambil data sebelum rute tampil dan action menangani submit form, sehingga pengambilan data terintegrasi dengan routing.']],
        sources: [['React Router Documentation', 'https://reactrouter.com/'], ['React Router: Tutorial', 'https://reactrouter.com/start/library/installation'], ['MDN: History API', 'https://developer.mozilla.org/docs/Web/API/History_API'], REF_REACT],
    },
];
