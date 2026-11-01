const D = '2026-10-30';
const C = 'React & Web Modern';
const jsx = String.raw;

const REF_REACT = ['React Documentation (react.dev)', 'https://react.dev/learn'];
const REF_MDN = ['MDN Web Docs: JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript'];
const REF_REFERENCE = ['React Reference: Hooks', 'https://react.dev/reference/react/hooks'];

export default [
    {
        slug: 'belajar-react-dari-nol-komponen-jsx-dan-props',
        title: 'Belajar React dari Nol: Komponen, JSX, dan Props',
        description: 'Panduan React untuk pemula: apa itu komponen, JSX, props, komposisi, dan rendering, dengan contoh kode React yang benar-benar dijalankan dan latihan.',
        date: D, category: C, level: 'Pemula', tags: ['React', 'JSX', 'komponen', 'props', 'belajar React'], cta: 'jasa',
        prereq: ['dasar HTML dan JavaScript (variabel, fungsi, array)'],
        lead: 'React adalah pustaka JavaScript untuk membangun antarmuka dari potongan kecil yang disebut komponen. Satu ide inti menopang semuanya: tampilan adalah fungsi dari data. Berikan data, dapatkan tampilan. Dengan pegangan ini, sisa React terasa jauh lebih masuk akal.',
        body: [
            { objectives: ['menjelaskan apa itu komponen dan mengapa antarmuka dipecah menjadi komponen', 'menulis JSX dan memahami bahwa ia hanyalah JavaScript', 'mengirim data ke komponen lewat props', 'menyusun komponen kecil menjadi tampilan yang lebih besar (komposisi)', 'melihat HTML yang dihasilkan komponen dengan contoh yang dijalankan'] },
            { h2: 'Mengapa React ada' },
            `Membangun antarmuka dengan DOM langsung berarti Anda harus mengatur sendiri setiap perubahan: cari elemen, ubah teksnya, tambah atau hapus bagian. Semakin banyak keadaan (state) yang berubah, semakin mudah tampilan tidak sinkron dengan data. React membalik pendekatannya: Anda menyatakan <b>seperti apa tampilan untuk data tertentu</b>, dan React yang menyesuaikan DOM saat data berubah.`,
            { w: 'compare', title: 'Dua cara berpikir', tabs: [{ label: 'Imperatif (DOM langsung)', html: '"Cari elemen #total, ubah teksnya, sembunyikan pesan kosong, tambah baris baru..." Anda mengatur setiap langkah perubahan.' }, { label: 'Deklaratif (React)', html: '"Bila keranjang berisi 3 barang, tampilkan 3 baris dan total sekian." Anda menjelaskan hasil akhirnya; React menghitung perubahan yang diperlukan.' }] },
            { h2: 'Komponen: fungsi yang mengembalikan tampilan' },
            `Komponen React adalah fungsi JavaScript biasa yang namanya diawali <b>huruf besar</b> dan mengembalikan tampilan (JSX). Kita jalankan langsung dengan React 19 dan <code>renderToString</code>, yang menghasilkan HTML dari komponen.`,
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

function Salam() {
    return <h1>Halo, dunia!</h1>;
}

console.log(renderToString(<Salam />));`, lang: 'jsx', run: true, caption: 'Browser tidak mengerti JSX. Alat build (Vite, esbuild) mengubahnya menjadi pemanggilan fungsi JavaScript biasa sebelum dijalankan.' },
            { h2: 'JSX: bukan HTML, tapi JavaScript' },
            `JSX terlihat seperti HTML, tetapi aturannya sedikit berbeda karena sebenarnya ia ekspresi JavaScript. Yang perlu dihafal hanya beberapa hal.`,
            { table: { head: ['Di HTML', 'Di JSX', 'Alasan'], rows: [['class="kotak"', 'className="kotak"', 'class adalah kata kunci JavaScript'], ['for="nama"', 'htmlFor="nama"', 'for juga kata kunci'], ['onclick="..."', 'onClick={fungsi}', 'camelCase dan fungsi, bukan string'], ['style="color: red"', 'style={{ color: "red" }}', 'objek JavaScript; kurung kurawal luar untuk ekspresi'], ['<br>', '<br />', 'semua tag harus ditutup'], ['dua elemen sejajar', 'dibungkus <>...</> (fragment)', 'komponen mengembalikan satu akar']] } },
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

function Kartu() {
    const nama = 'Ani';
    const harga = 25000;
    const diskon = true;
    return (
        <div className="kartu" style={{ padding: 8 }}>
            <h2>{nama.toUpperCase()}</h2>
            <p>Total: Rp{(harga * 2).toLocaleString('id-ID')}</p>
            {diskon && <span>Diskon aktif</span>}
            {!diskon && <span>Tanpa diskon</span>}
        </div>
    );
}
console.log(renderToString(<Kartu />));`, lang: 'jsx', run: true, caption: 'Apa pun di dalam {} adalah ekspresi JavaScript: pemanggilan metode, aritmetika, bahkan kondisi dengan &&. Atribut class menjadi className, style menjadi objek. Penanda &lt;!-- --&gt; pada keluaran adalah cara React memisahkan teks yang berdampingan saat dirender di server; tidak terlihat di layar.' },
            { h2: 'Props: data masuk ke komponen' },
            `Props (properties) adalah argumen komponen. Komponen menerimanya dalam satu objek dan hanya <b>membacanya</b>: props tidak boleh diubah di dalam komponen penerima.`,
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

function KartuProduk({ nama, harga, stok = 0 }) {          // nilai bawaan stok = 0
    return (
        <article>
            <h3>{nama}</h3>
            <p>Rp{harga.toLocaleString('id-ID')}</p>
            <p>{stok > 0 ? 'Tersedia ' + stok : 'Habis'}</p>
        </article>
    );
}

console.log(renderToString(<KartuProduk nama="Kopi Gayo" harga={65000} stok={12} />));
console.log(renderToString(<KartuProduk nama="Teh Hijau" harga={40000} />));`, lang: 'jsx', run: true },
            { callout: 'Aturan emas: <b>props mengalir ke bawah, dari induk ke anak</b> (aliran data satu arah). Anak tidak mengubah props; bila ia perlu memberi tahu induk, induk mengirim fungsi lewat props (callback). Aturan sederhana ini membuat aliran data mudah dilacak.', kind: 'info', title: 'Satu arah' },
            { h2: 'Komposisi: komponen di dalam komponen' },
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

function Tombol({ children }) {
    return <button type="button">{children}</button>;
}

function Kartu({ judul, children }) {
    return (
        <section>
            <h2>{judul}</h2>
            <div>{children}</div>
        </section>
    );
}

function Halaman() {
    return (
        <main>
            <Kartu judul="Promo">
                <p>Diskon akhir pekan.</p>
                <Tombol>Lihat promo</Tombol>
            </Kartu>
            <Kartu judul="Kontak">
                <Tombol>Hubungi kami</Tombol>
            </Kartu>
        </main>
    );
}
console.log(renderToString(<Halaman />));`, lang: 'jsx', run: true, caption: 'children adalah props khusus: isi yang ditaruh di antara tag pembuka dan penutup. Ia memungkinkan komponen berperan sebagai "bingkai" yang dapat diisi apa pun.' },
            { h2: 'Cara memecah antarmuka menjadi komponen' },
            { ol: ['Gambar atau lihat desainnya, lalu <b>lingkari</b> setiap bagian yang berdiri sendiri.', 'Beri nama sesuai fungsinya (KartuProduk, DaftarPesanan), bukan sesuai tampilan (KotakBiru).', 'Pecah lagi bila suatu bagian dipakai berulang atau terlalu panjang untuk dibaca sekilas.', 'Tentukan data apa yang dibutuhkan tiap komponen: itulah props-nya.', 'Satu komponen sebaiknya melakukan satu hal (prinsip tanggung jawab tunggal).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Nama komponen React harus diawali...', options: ['Huruf besar', 'Huruf kecil', 'Garis bawah'], answer: 0, why: 'Huruf kecil dianggap tag HTML biasa.' }, { q: 'Di JSX, atribut class ditulis...', options: ['className', 'class', 'cssClass'], answer: 0, why: 'class adalah kata kunci JavaScript.' }, { q: 'Props yang diterima komponen...', options: ['Hanya dibaca, tidak diubah', 'Boleh diubah bebas', 'Selalu berupa string'], answer: 0, why: 'Aliran data satu arah.' }] },
            { exercise: [['Buat komponen Profil dengan props nama dan peran yang menampilkan "Nama (peran)".', '<code>function Profil({ nama, peran }) { return <p>{nama} ({peran})</p>; }</code>'], ['Mengapa komponen harus mengembalikan satu elemen akar?', 'Fungsi hanya dapat mengembalikan satu nilai; bungkus dengan elemen induk atau fragment <code>&lt;&gt;...&lt;/&gt;</code>.'], ['Apa yang terjadi bila nama komponen ditulis huruf kecil, <code>&lt;salam /&gt;</code>?', 'React menganggapnya tag HTML bernama "salam", bukan komponen Anda.'], ['Tulis ekspresi JSX yang menampilkan "Lunas" bila lunas bernilai true dan "Belum" bila false.', '<code>{lunas ? "Lunas" : "Belum"}</code>']] },
            { summary: ['Komponen adalah fungsi (huruf besar) yang mengembalikan JSX.', 'JSX adalah sintaks JavaScript: {} untuk ekspresi, className, onClick, style objek.', 'Props mengalir dari induk ke anak dan hanya dibaca; children memungkinkan komposisi.', 'Pecah antarmuka menjadi komponen kecil berdasarkan fungsi dan penggunaan ulang.'] },
        ],
        faq: [['Apa bedanya React dan framework seperti Next.js?', 'React adalah pustaka untuk membangun antarmuka. Next.js adalah framework di atasnya yang menambah routing, rendering di server, dan optimasi.'], ['Apakah harus belajar JavaScript dulu?', 'Ya, dasarnya: variabel, fungsi, array dan objek, map/filter, dan destructuring. React hanyalah JavaScript dengan konvensi tertentu.'], ['Apakah React masih relevan?', 'Ya. React termasuk pustaka antarmuka paling banyak dipakai dan menjadi dasar ekosistem seperti Next.js dan React Native.']],
        sources: [REF_REACT, ['React: Your First Component', 'https://react.dev/learn/your-first-component'], ['React: Passing Props to a Component', 'https://react.dev/learn/passing-props-to-a-component'], REF_MDN],
    },

    {
        slug: 'usestate-react-adalah-state-event-dan-cara-kerjanya',
        title: 'useState React: Apa Itu State dan Bagaimana Cara Kerjanya',
        description: 'Pahami useState di React: apa itu state, mengapa variabel biasa tidak cukup, pembaruan lewat setter, state sebagai potret, update fungsional, dan kesalahan umum.',
        date: D, category: C, level: 'Pemula', tags: ['useState', 'React hooks', 'state', 'event handler', 'belajar React'], cta: 'jasa',
        prereq: ['komponen, JSX, dan props'],
        lead: 'Komponen yang hanya menampilkan props itu statis. Untuk membuatnya hidup, yaitu bereaksi pada klik, ketikan, atau data masuk, React memberi komponen ingatan bernama state. useState adalah pintu masuk ke sana, dan memahami cara kerjanya menghindarkan Anda dari sebagian besar bug pemula.',
        body: [
            { objectives: ['menjelaskan perbedaan props dan state', 'memakai useState untuk menyimpan dan memperbarui data', 'menjelaskan mengapa variabel biasa tidak membuat tampilan berubah', 'memahami state sebagai potret (snapshot) dan pembaruan fungsional', 'menghindari kesalahan umum: mengubah state langsung, state turunan, dan batch update'] },
            { h2: 'Masalah: variabel biasa tidak cukup' },
            `Coba buat penghitung dengan variabel biasa. Fungsi komponen dijalankan ulang setiap kali React merender; variabel lokal dibuat dari awal tiap kali, dan mengubahnya tidak memicu render.`,
            { code: jsx`// SALAH: variabel biasa
function Penghitung() {
    let jumlah = 0;
    function tambah() { jumlah = jumlah + 1; console.log(jumlah); }
    return <button onClick={tambah}>Klik: {jumlah}</button>;
}
// Nilai bertambah di memori, tetapi layar tetap menampilkan 0 karena tidak ada render ulang,
// dan bila ada render ulang, jumlah dimulai lagi dari 0.`, lang: 'jsx' },
            { h2: 'useState: ingatan yang memicu render' },
            { code: jsx`import { useState } from 'react';

function Penghitung() {
    const [jumlah, setJumlah] = useState(0);        // [nilai sekarang, fungsi pengubah]

    return (
        <button onClick={() => setJumlah(jumlah + 1)}>
            Klik: {jumlah}
        </button>
    );
}`, lang: 'jsx', caption: 'useState(0) memberi nilai awal 0 hanya pada render pertama. Memanggil setJumlah menyimpan nilai baru dan meminta React merender ulang komponen.' },
            { callout: 'Aturan hook: panggil hook (useState, useEffect, ...) <b>di tingkat paling atas komponen</b>, bukan di dalam kondisi, perulangan, atau fungsi bersarang. React mengenali state berdasarkan urutan pemanggilannya.', kind: 'warn', title: 'Aturan hooks' },
            { h2: 'Mengintip cara kerjanya dengan useState mini' },
            `React menyimpan state di luar fungsi komponen, per komponen dan per urutan hook. Berikut tiruan sangat disederhanakan (bukan kode React sebenarnya) untuk menunjukkan idenya.`,
            { code: String.raw`// Tiruan useState: ingatan disimpan di luar fungsi komponen
const ingatan = [];
let posisi = 0;
function useState(awal) {
    const i = posisi++;
    if (!(i in ingatan)) ingatan[i] = awal;           // nilai awal hanya sekali
    const setter = nilaiBaru => {
        ingatan[i] = typeof nilaiBaru === 'function' ? nilaiBaru(ingatan[i]) : nilaiBaru;
        render();                                      // memicu render ulang
    };
    return [ingatan[i], setter];
}

let setJumlahGlobal;
function Penghitung() {
    const [jumlah, setJumlah] = useState(0);
    setJumlahGlobal = setJumlah;
    return 'Klik: ' + jumlah;
}
function render() {
    posisi = 0;                                        // render dimulai dari hook pertama
    console.log(Penghitung());
}

render();                                              // render pertama
setJumlahGlobal(1);                                    // seolah pengguna klik
setJumlahGlobal(n => n + 1);                           // update berbasis nilai sebelumnya
setJumlahGlobal(n => n + 1);`, lang: 'javascript', run: true, caption: 'Inilah alasan aturan hook: state dicari lewat urutan panggilan. Bila urutannya berubah antar render (misalnya hook di dalam if), state tertukar.' },
            { h2: 'State adalah potret' },
            `Di dalam satu render, nilai state <b>tidak berubah</b>. Memanggil setter menjadwalkan render berikutnya dengan nilai baru, bukan mengubah variabel yang sedang Anda baca.`,
            { code: String.raw`// Simulasi satu render: 'jumlah' adalah potret bernilai 0 selama render ini
let jumlah = 0;                       // nilai pada render ini (potret)
const jadwal = [];
const setJumlah = nilai => jadwal.push(nilai);

function klikTiga() {
    setJumlah(jumlah + 1);            // 0 + 1
    setJumlah(jumlah + 1);            // masih 0 + 1
    setJumlah(jumlah + 1);            // masih 0 + 1
}
klikTiga();
console.log('antrean nilai baru:', jadwal);            // [1, 1, 1] -> hasil akhir 1, bukan 3

// Bentuk fungsional: setiap pembaruan menerima nilai terbaru
let state = 0;
const antreanFungsi = [];
const setFungsi = f => antreanFungsi.push(f);
function klikTigaBenar() {
    setFungsi(n => n + 1); setFungsi(n => n + 1); setFungsi(n => n + 1);
}
klikTigaBenar();
for (const f of antreanFungsi) state = f(state);
console.log('dengan update fungsional:', state);      // 3`, lang: 'javascript', run: true, caption: 'Gunakan setJumlah(n => n + 1) bila nilai baru bergantung pada nilai sebelumnya, terutama bila dipanggil lebih dari sekali dalam satu event.' },
            { h2: 'State berupa objek dan array: jangan diubah langsung' },
            { code: String.raw`const state = { nama: 'Ani', alamat: { kota: 'Madiun' }, hobi: ['membaca'] };

// SALAH: mengubah objek yang sama. React membandingkan referensi, jadi ia tidak melihat ada perubahan.
const salah = state;
salah.hobi.push('menulis');
console.log('referensi sama?', salah === state);

// BENAR: buat salinan baru
const baru = { ...state, hobi: [...state.hobi, 'menulis'] };
console.log('referensi sama?', baru === state, baru.hobi);

// objek bersarang: salin tiap tingkat yang berubah
const pindah = { ...state, alamat: { ...state.alamat, kota: 'Surabaya' } };
console.log(pindah.alamat.kota, '| asli tetap', state.alamat.kota);

// operasi array yang tidak mengubah asli
const daftar = [1, 2, 3];
console.log(daftar.map(x => x * 2), daftar.filter(x => x !== 2), [...daftar, 4], daftar);`, lang: 'javascript', run: true, caption: 'Memperlakukan state sebagai tak dapat diubah (immutable) membuat React mudah mendeteksi perubahan dan membuat fitur seperti undo atau perbandingan riwayat lebih sederhana.' },
            { h2: 'Props atau state?' },
            { table: { head: ['', 'Props', 'State'], rows: [['Milik siapa', 'Dikirim dari induk', 'Dimiliki komponen itu sendiri'], ['Bisa diubah komponen?', 'Tidak (hanya baca)', 'Ya, lewat setter'], ['Fungsi', 'Konfigurasi dari luar', 'Ingatan yang berubah seiring interaksi'], ['Perubahan memicu render?', 'Ya, saat induk mengirim nilai baru', 'Ya, saat setter dipanggil']] } },
            { callout: 'Jangan menyimpan di state sesuatu yang bisa <b>dihitung</b> dari props atau state lain. Misalnya simpan <code>daftar</code> dan <code>kataCari</code>, lalu hitung <code>hasilFilter</code> saat render. Menyimpannya terpisah menciptakan dua sumber kebenaran yang bisa tidak sinkron.', kind: 'good', title: 'Hindari state turunan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Memanggil setJumlah(jumlah + 1) tiga kali dalam satu event menghasilkan...', options: ['Naik 1 (karena potret nilai yang sama)', 'Naik 3', 'Error'], answer: 0, why: 'Gunakan setJumlah(n => n + 1) untuk bertambah tiga.' }, { q: 'Mengapa tidak boleh memakai state.hobi.push(...) lalu setState(state)?', options: ['Referensi sama sehingga React tidak melihat perubahan', 'push dilarang', 'Array tidak bisa disimpan'], answer: 0, why: 'Buat salinan baru.' }, { q: 'useState hanya boleh dipanggil...', options: ['Di tingkat atas komponen', 'Di dalam if', 'Di dalam perulangan'], answer: 0, why: 'Urutan hook harus tetap.' }] },
            { exercise: [['Tulis state untuk toggle "tampilkan detail" dan tombol yang membaliknya.', '<code>const [buka, setBuka] = useState(false); ... onClick={() => setBuka(b => !b)}</code>'], ['Tambahkan item ke state array daftar tanpa mengubah aslinya.', '<code>setDaftar([...daftar, itemBaru])</code> atau <code>setDaftar(d => [...d, itemBaru])</code>'], ['Ubah properti "selesai" pada tugas ber-id 2 dalam array tugas.', '<code>setTugas(t => t.map(x => x.id === 2 ? { ...x, selesai: true } : x))</code>'], ['Mengapa nilai awal useState(hitungBerat()) boros dan apa solusinya?', 'hitungBerat() dipanggil di setiap render walau hasilnya hanya dipakai sekali. Pakai inisialisasi malas: <code>useState(() => hitungBerat())</code>.']] },
            { summary: ['State adalah ingatan komponen; useState memberi [nilai, setter] dan setter memicu render.', 'State adalah potret per render; pakai update fungsional bila bergantung pada nilai sebelumnya.', 'Jangan ubah objek atau array state langsung; buat salinan baru.', 'Panggil hook di tingkat atas; hindari menyimpan data yang bisa dihitung dari state lain.'] },
        ],
        faq: [['Apa bedanya useState dan useRef?', 'Mengubah ref tidak memicu render ulang; useRef cocok untuk menyimpan nilai yang tidak memengaruhi tampilan (elemen DOM, id timer).'], ['Mengapa console.log setelah setState menampilkan nilai lama?', 'Karena state adalah potret untuk render saat ini; nilai baru baru terlihat pada render berikutnya.'], ['Kapan memakai useReducer?', 'Saat logika pembaruan state rumit atau banyak aksi berbeda mengubah state yang saling terkait.']],
        sources: [['React: State: A Component\'s Memory', 'https://react.dev/learn/state-a-components-memory'], ['React: State as a Snapshot', 'https://react.dev/learn/state-as-a-snapshot'], ['React: Updating Objects in State', 'https://react.dev/learn/updating-objects-in-state'], REF_REFERENCE],
    },

    {
        slug: 'useeffect-react-kapan-dipakai-dependency-dan-cleanup',
        title: 'useEffect React: Kapan Dipakai, Dependency, dan Cleanup',
        description: 'Pahami useEffect: efek samping, array dependency, cleanup, kesalahan klasik (loop tak berujung, state basi), dan kapan sebenarnya tidak perlu useEffect.',
        date: D, category: C, level: 'Menengah', tags: ['useEffect', 'React hooks', 'efek samping', 'cleanup', 'dependency array'], cta: 'jasa',
        prereq: ['useState', 'event handler'],
        lead: 'useEffect adalah hook yang paling sering disalahgunakan. Tujuannya sederhana: menyinkronkan komponen dengan sesuatu di luar React, seperti server, timer, atau API browser. Begitu Anda melihatnya sebagai "sinkronisasi" bukan "siklus hidup", kebanyakan kebingungan hilang.',
        body: [
            { objectives: ['menjelaskan apa itu efek samping dan kapan useEffect diperlukan', 'memakai array dependency dengan benar', 'menulis fungsi cleanup untuk timer, langganan, dan permintaan', 'mengenali dan memperbaiki kesalahan umum', 'mengenali kasus yang tidak perlu useEffect'] },
            { h2: 'Efek samping dan sinkronisasi' },
            `Rendering harus <b>murni</b>: dengan props dan state yang sama menghasilkan JSX yang sama, tanpa mengubah hal di luar komponen. Hal-hal yang menyentuh dunia luar (mengambil data, mengubah judul dokumen, memulai timer, mendengarkan event window) disebut efek samping dan ditempatkan di <code>useEffect</code>, yang dijalankan <i>setelah</i> React menampilkan hasil render.`,
            { code: jsx`import { useState, useEffect } from 'react';

function JudulHalaman({ nama }) {
    useEffect(() => {
        document.title = 'Halo, ' + nama;      // menyinkronkan dokumen dengan props
    }, [nama]);                                // jalankan ulang hanya bila nama berubah

    return <h1>Halo, {nama}</h1>;
}`, lang: 'jsx' },
            { h2: 'Tiga bentuk array dependency' },
            { table: { head: ['Bentuk', 'Kapan efek berjalan', 'Pemakaian'], rows: [['useEffect(fn)', 'Setelah setiap render', 'Jarang diperlukan'], ['useEffect(fn, [])', 'Sekali setelah render pertama (dan cleanup saat dilepas)', 'Sinkronisasi yang tidak bergantung pada data komponen'], ['useEffect(fn, [a, b])', 'Setelah render pertama dan setiap kali a atau b berubah', 'Paling umum']] } },
            { callout: 'Aturan: <b>semua nilai reaktif (props, state, fungsi) yang dipakai di dalam efek harus masuk ke array dependency</b>. Memaksa array kosong padahal efek memakai state akan menghasilkan nilai basi (stale). Linter eslint-plugin-react-hooks membantu memeriksanya otomatis.', kind: 'warn', title: 'Jujurlah pada dependency' },
            { h2: 'Cleanup: membereskan sebelum efek berikutnya' },
            `Fungsi yang dikembalikan efek dijalankan <b>sebelum efek dijalankan ulang</b> dan saat komponen dilepas. Pakai untuk menghentikan timer, membatalkan langganan, atau membatalkan permintaan.`,
            { code: jsx`import { useState, useEffect } from 'react';

function Jam() {
    const [waktu, setWaktu] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => setWaktu(new Date()), 1000);
        return () => clearInterval(id);        // cleanup: tanpa ini timer terus berjalan setelah komponen hilang
    }, []);

    return <p>{waktu.toLocaleTimeString('id-ID')}</p>;
}`, lang: 'jsx' },
            { h2: 'Simulasi urutan efek dan cleanup' },
            `Berikut tiruan sederhana (bukan kode React) yang mencetak urutan kejadian ketika dependency berubah. Urutannya yang penting: <b>cleanup efek lama berjalan sebelum efek baru</b>.`,
            { code: String.raw`const efekAktif = new Map();
function jalankanEfek(nama, deps, fn, depsLama) {
    const berubah = !depsLama || deps.some((d, i) => d !== depsLama[i]);
    if (!berubah) return;
    if (efekAktif.has(nama)) { console.log('  cleanup  ->', nama, 'dengan deps lama', JSON.stringify(depsLama)); efekAktif.get(nama)(); }
    console.log('  efek     ->', nama, 'dengan deps', JSON.stringify(deps));
    efekAktif.set(nama, fn() || (() => {}));
}

let depsLama;
for (const idRoom of ['umum', 'umum', 'kerja', 'kerja', 'umum']) {
    console.log('render dengan idRoom =', idRoom);
    jalankanEfek('sambung', [idRoom], () => {
        console.log('     (terhubung ke', idRoom + ')');
        return () => console.log('     (terputus dari', idRoom + ')');
    }, depsLama);
    depsLama = [idRoom];
}`, lang: 'javascript', run: true, caption: 'Render ke-2 dan ke-4 tidak memicu efek karena idRoom tidak berubah. Setiap perubahan menjalankan cleanup lama lalu efek baru.' },
            { h2: 'Kesalahan klasik' },
            { h3: '1. Loop tak berujung' },
            { code: jsx`function Salah() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([1, 2, 3]);         // mengubah state -> render ulang -> efek berjalan lagi -> ...
    });                             // tanpa array dependency, efek berjalan setiap render
    return null;
}
// Perbaikan: beri array dependency yang tepat, atau tidak perlu efek bila data bisa dihitung saat render.`, lang: 'jsx' },
            { h3: '2. Lupa membatalkan permintaan yang sudah usang' },
            { code: jsx`useEffect(() => {
    const kontrol = new AbortController();
    fetch('/api/cari?q=' + kata, { signal: kontrol.signal })
        .then(r => r.json())
        .then(setHasil)
        .catch(e => { if (e.name !== 'AbortError') setGalat(e); });
    return () => kontrol.abort();   // jawaban lama tidak menimpa pencarian terbaru (race condition)
}, [kata]);`, lang: 'jsx', caption: 'Tanpa pembatalan, jawaban untuk pencarian "ka" yang lambat bisa tiba setelah pencarian "kar" dan menimpa hasil yang lebih baru.' },
            { h2: 'Kapan TIDAK memakai useEffect' },
            { table: { head: ['Keinginan', 'Jangan', 'Lakukan'], rows: [['Hitung nilai dari props/state', 'Simpan di state lewat efek', 'Hitung langsung saat render'], ['Menanggapi klik atau input', 'Menaruh logika di efek yang mengamati state', 'Taruh di event handler'], ['Mereset state saat prop berubah', 'Efek yang memanggil setState', 'Beri key pada komponen agar dibuat ulang'], ['Mengambil data untuk halaman', 'useEffect + fetch manual di mana-mana', 'Pustaka data (TanStack Query, SWR) atau framework (loader, Server Components)'], ['Meneruskan data ke induk', 'Efek yang memanggil callback', 'Panggil callback di event handler yang sama']] } },
            { callout: 'Cara cepat menilai: tanyakan <b>"mengapa kode ini berjalan?"</b>. Jika jawabannya "karena pengguna melakukan sesuatu", itu event handler. Jika "karena komponen tampil di layar dan harus tersinkron dengan sistem luar", itu efek.', kind: 'good', title: 'Pertanyaan penentu' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'useEffect(() => {...}, []) berjalan...', options: ['Sekali setelah render pertama', 'Setiap render', 'Tidak pernah'], answer: 0, why: 'Array dependency kosong.' }, { q: 'Fungsi yang dikembalikan efek disebut...', options: ['Cleanup', 'Callback', 'Reducer'], answer: 0, why: 'Dijalankan sebelum efek berikutnya dan saat unmount.' }, { q: 'Menghitung total harga dari daftar belanja sebaiknya...', options: ['Dihitung langsung saat render', 'Disimpan ke state lewat useEffect', 'Memakai setInterval'], answer: 0, why: 'Nilai turunan tidak perlu efek.' }] },
            { exercise: [['Buat efek yang menambah event listener "resize" pada window dan membersihkannya.', '<code>useEffect(() => { const f = () => setLebar(window.innerWidth); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);</code>'], ['Mengapa efek yang memakai state "jumlah" tetapi berdependency [] menghasilkan nilai basi?', 'Efek menangkap potret nilai pada render pertama; ia tidak melihat pembaruan. Tambahkan jumlah ke dependency atau pakai update fungsional.'], ['Mengapa React dalam mode pengembangan (StrictMode) menjalankan efek dua kali?', 'Untuk membantu menemukan efek tanpa cleanup yang benar; efek yang baik tahan dijalankan, dibersihkan, lalu dijalankan lagi.'], ['Ubah efek yang menyalin props.nama ke state "namaTampil" menjadi cara yang benar.', 'Tidak perlu state atau efek; pakai props.nama langsung (atau hitung saat render).']] },
            { summary: ['useEffect menyinkronkan komponen dengan sistem di luar React, setelah render.', 'Dependency harus jujur: semua nilai reaktif yang dipakai efek.', 'Cleanup berjalan sebelum efek berikutnya dan saat komponen dilepas.', 'Banyak kasus tidak perlu efek: hitung saat render atau pakai event handler.', 'Batalkan permintaan usang untuk menghindari race condition.'] },
        ],
        faq: [['Apa bedanya useEffect dan useLayoutEffect?', 'useLayoutEffect berjalan sebelum browser menggambar, untuk mengukur atau mengubah tata letak tanpa kedipan; useEffect berjalan setelahnya dan lebih cocok untuk hampir semua efek.'], ['Apakah useEffect berjalan di server?', 'Tidak. Efek hanya berjalan di browser; saat rendering di server, efek diabaikan.'], ['Bagaimana mengambil data tanpa useEffect?', 'Dengan pustaka seperti TanStack Query, atau fitur framework (Next.js, React Router loader, Server Components).']],
        sources: [['React: Synchronizing with Effects', 'https://react.dev/learn/synchronizing-with-effects'], ['React: You Might Not Need an Effect', 'https://react.dev/learn/you-might-not-need-an-effect'], ['React: Lifecycle of Reactive Effects', 'https://react.dev/learn/lifecycle-of-reactive-effects'], REF_REFERENCE],
    },

    {
        slug: 'render-list-react-map-key-dan-filter-yang-benar',
        title: 'Render List di React: map, key, dan Filter yang Benar',
        description: 'Pelajari menampilkan daftar di React: map, kunci (key) yang benar, filter dan urutkan data, state daftar, dan mengapa key berupa indeks bisa menimbulkan bug.',
        date: D, category: C, level: 'Pemula', tags: ['React list', 'key React', 'map', 'filter', 'render daftar'], cta: 'jasa',
        prereq: ['komponen dan props', 'useState', 'array map dan filter'],
        lead: 'Hampir semua aplikasi menampilkan daftar: produk, pesan, tugas, hasil pencarian. Di React, daftar dibuat dengan map, dan ada satu aturan yang sering dilanggar pemula: setiap item butuh key yang stabil dan unik. Melanggarnya menimbulkan bug halus yang sulit dilacak.',
        body: [
            { objectives: ['menampilkan array sebagai daftar komponen dengan map', 'menjelaskan fungsi key dan memilih key yang benar', 'menyaring dan mengurutkan data tanpa mengubah array aslinya', 'mengelola daftar di state: tambah, hapus, ubah', 'menjelaskan mengapa key indeks dapat menyebabkan bug'] },
            { h2: 'Menampilkan daftar dengan map' },
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

const produk = [
    { id: 'p1', nama: 'Kopi Gayo', harga: 65000 },
    { id: 'p2', nama: 'Teh Hijau', harga: 40000 },
    { id: 'p3', nama: 'Gula Aren', harga: 22000 },
];

function DaftarProduk({ data }) {
    return (
        <ul>
            {data.map(p => (
                <li key={p.id}>{p.nama} - Rp{p.harga.toLocaleString('id-ID')}</li>
            ))}
        </ul>
    );
}
console.log(renderToString(<DaftarProduk data={produk} />));
console.log(renderToString(<DaftarProduk data={[]} />));`, lang: 'jsx', run: true, caption: 'Array kosong menghasilkan daftar kosong; sering Anda ingin menampilkan pesan "Belum ada produk" untuk kasus itu.' },
            { h2: 'Mengapa key diperlukan' },
            `Saat data berubah, React membandingkan daftar lama dan baru untuk memutuskan elemen mana yang ditambah, dihapus, dipindah, atau dipertahankan. <b>Key</b> adalah identitas setiap item untuk perbandingan itu. Tanpa key yang stabil, React hanya bisa mencocokkan berdasarkan posisi.`,
            { w: 'compare', title: 'Memilih key', tabs: [{ label: 'Key yang baik', html: '<b>Stabil dan unik di antara saudaranya</b>: id dari basis data, slug, atau id yang dibuat saat data dibuat (crypto.randomUUID()).' }, { label: 'Key yang buruk', html: '<b>Indeks array</b> (berubah saat daftar diurutkan atau item disisipkan), <b>Math.random()</b> pada saat render (berubah setiap render sehingga elemen dibuat ulang terus), atau nilai yang tidak unik.' }] },
            { h3: 'Demonstrasi: apa yang terjadi bila key = indeks' },
            `Misalkan setiap baris memiliki kotak isian (state milik komponen baris). Bila item pertama dihapus dan key adalah indeks, React menganggap baris 0 masih baris 0, sehingga <i>isian milik item yang dihapus tampak bergeser ke item lain</i>. Kode di bawah mensimulasikan pencocokan itu.`,
            { code: String.raw`// Simulasi rekonsiliasi sederhana: React mencocokkan item lama dan baru berdasarkan KEY,
// dan state setiap baris (misalnya isi kotak catatan) melekat pada key.
function cocokkan(lama, baru, keyFn) {
    const stateLama = new Map(lama.map((item, i) => [keyFn(item, i), item.catatan]));
    return baru.map((item, i) => ({ nama: item.nama, catatanYangTampil: stateLama.has(keyFn(item, i)) ? stateLama.get(keyFn(item, i)) : '(kosong)' }));
}

const lama = [
    { id: 'a', nama: 'Ani',  catatan: 'catatan Ani' },
    { id: 'b', nama: 'Budi', catatan: 'catatan Budi' },
    { id: 'c', nama: 'Citra', catatan: 'catatan Citra' },
];
const baru = lama.slice(1);                 // Ani dihapus

console.log('Key = indeks (SALAH):');
for (const r of cocokkan(lama, baru, (item, i) => i)) console.log('  ', r.nama.padEnd(6), '->', r.catatanYangTampil);

console.log('Key = id (BENAR):');
for (const r of cocokkan(lama, baru, item => item.id)) console.log('  ', r.nama.padEnd(6), '->', r.catatanYangTampil);`, lang: 'javascript', run: true, caption: 'Dengan key indeks, "Budi" menampilkan catatan Ani dan "Citra" menampilkan catatan Budi. Dengan key id, setiap catatan tetap melekat pada pemiliknya.' },
            { h2: 'Menyaring dan mengurutkan' },
            { callout: 'Jangan memakai <code>sort()</code> langsung pada array props atau state: ia <b>mengubah array aslinya</b>. Salin dulu dengan <code>[...data].sort(...)</code> atau pakai <code>toSorted()</code> (JavaScript modern).', kind: 'warn', title: 'sort mengubah array' },
            { code: jsx`const React = require('react');
const { renderToString } = require('react-dom/server');

const produk = [
    { id: 1, nama: 'Kopi Gayo', harga: 65000, kategori: 'minuman' },
    { id: 2, nama: 'Kerupuk',   harga: 12000, kategori: 'camilan' },
    { id: 3, nama: 'Teh Hijau', harga: 40000, kategori: 'minuman' },
    { id: 4, nama: 'Keripik',   harga: 18000, kategori: 'camilan' },
];

function Katalog({ data, kategori, urut }) {
    const tampil = data
        .filter(p => !kategori || p.kategori === kategori)       // saring
        .toSorted((a, b) => urut === 'murah' ? a.harga - b.harga : b.harga - a.harga);   // salinan terurut
    if (tampil.length === 0) return <p>Tidak ada produk.</p>;
    return <ol>{tampil.map(p => <li key={p.id}>{p.nama} ({p.harga})</li>)}</ol>;
}

console.log(renderToString(<Katalog data={produk} kategori="minuman" urut="murah" />));
console.log(renderToString(<Katalog data={produk} urut="mahal" />));
console.log(renderToString(<Katalog data={produk} kategori="mainan" />));
console.log('array asli tidak berubah:', produk.map(p => p.id).join(','));`, lang: 'jsx', run: true },
            { h2: 'Daftar di state: tambah, hapus, ubah' },
            { table: { head: ['Aksi', 'Cara (tanpa mengubah array lama)', 'Contoh'], rows: [['Tambah', 'Sebar dan tambahkan', 'setDaftar([...daftar, baru])'], ['Hapus', 'filter', 'setDaftar(daftar.filter(x => x.id !== id))'], ['Ubah satu item', 'map dan salin item yang berubah', 'setDaftar(daftar.map(x => x.id === id ? { ...x, selesai: true } : x))'], ['Sisip di posisi', 'slice dan sebar', 'setDaftar([...daftar.slice(0, i), baru, ...daftar.slice(i)])']] } },
            { code: String.raw`// Reducer murni untuk daftar tugas: fungsi yang sama dapat dipakai dengan useReducer
function tugasReducer(daftar, aksi) {
    switch (aksi.tipe) {
        case 'tambah':  return [...daftar, { id: aksi.id, judul: aksi.judul, selesai: false }];
        case 'hapus':   return daftar.filter(t => t.id !== aksi.id);
        case 'ubah':    return daftar.map(t => t.id === aksi.id ? { ...t, selesai: !t.selesai } : t);
        default: throw new Error('aksi tidak dikenal: ' + aksi.tipe);
    }
}

let s = [];
const aksi = [
    { tipe: 'tambah', id: 1, judul: 'Tulis laporan' },
    { tipe: 'tambah', id: 2, judul: 'Kirim surel' },
    { tipe: 'ubah', id: 1 },
    { tipe: 'hapus', id: 2 },
];
for (const a of aksi) {
    const sebelum = s;
    s = tugasReducer(s, a);
    console.log(a.tipe.padEnd(6), JSON.stringify(s), '| objek baru?', s !== sebelum);
}`, lang: 'javascript', run: true, caption: 'Setiap aksi menghasilkan array baru. Fungsi murni seperti ini mudah diuji tanpa React sama sekali.' },
            { h2: 'Daftar komponen yang rapi' },
            { ul: ['<b>Letakkan key pada elemen terluar</b> yang dikembalikan map (bukan pada elemen di dalam komponen anak).', 'Key tidak diteruskan sebagai props; bila anak butuh id, kirim sebagai props terpisah.', 'Gunakan <code>&lt;Fragment key=...&gt;</code> bila satu item menghasilkan beberapa elemen.', 'Untuk daftar panjang (ribuan), pertimbangkan virtualisasi (react-window, TanStack Virtual) agar hanya yang terlihat yang dirender.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Key yang paling tepat untuk daftar yang bisa diurutkan ulang?', options: ['id unik dari data', 'Indeks array', 'Math.random()'], answer: 0, why: 'Harus stabil dan unik.' }, { q: 'Mengurutkan data props dengan data.sort(...) berbahaya karena...', options: ['Mengubah array asli', 'Terlalu lambat', 'Tidak mendukung angka'], answer: 0, why: 'Salin dulu dengan [...data] atau toSorted.' }, { q: 'Untuk menghapus item dari state array, gunakan...', options: ['filter', 'splice pada state langsung', 'delete'], answer: 0, why: 'filter menghasilkan array baru.' }] },
            { exercise: [['Tampilkan daftar nama dengan pesan "Belum ada data" bila kosong.', '<code>data.length === 0 ? <p>Belum ada data</p> : <ul>{data.map(n => <li key={n.id}>{n.nama}</li>)}</ul></code>'], ['Mengapa Math.random() sebagai key buruk?', 'Key berubah setiap render sehingga React membuang dan membuat ulang semua elemen, kehilangan state dan fokus.'], ['Tulis ekspresi untuk mengubah harga produk ber-id 3 menjadi 50000 tanpa mengubah array asli.', '<code>produk.map(p => p.id === 3 ? { ...p, harga: 50000 } : p)</code>'], ['Kapan key indeks masih aman?', 'Bila daftar statis: tidak pernah diurutkan ulang, disisipi, atau dihapus, dan item tidak memiliki state internal.']] },
            { summary: ['Tampilkan daftar dengan data.map(item => <Komponen key=... />).', 'Key harus stabil dan unik; hindari indeks dan Math.random().', 'filter dan toSorted (atau salinan lalu sort) tidak mengubah array asli.', 'Perbarui daftar di state dengan array baru: sebar, filter, map.'] },
        ],
        faq: [['Mengapa React memperingatkan "Each child in a list should have a unique key"?', 'Karena item daftar tidak punya key; tambahkan key yang stabil pada elemen terluar yang dikembalikan map.'], ['Bolehkah memakai key yang sama pada daftar berbeda?', 'Boleh; key hanya harus unik di antara saudara dalam daftar yang sama.'], ['Bagaimana membuat id untuk data baru di sisi klien?', 'crypto.randomUUID() saat item dibuat (bukan saat render), atau id dari server setelah disimpan.']],
        sources: [['React: Rendering Lists', 'https://react.dev/learn/rendering-lists'], ['React: Updating Arrays in State', 'https://react.dev/learn/updating-arrays-in-state'], ['MDN: Array.prototype.toSorted()', 'https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted'], REF_MDN],
    },

    {
        slug: 'form-react-controlled-component-validasi-dan-submit',
        title: 'Form di React: Controlled Component, Validasi, dan Submit',
        description: 'Cara membuat form di React yang benar: controlled input, satu state untuk banyak kolom, validasi sisi klien, pesan error, submit, dan aksesibilitas label.',
        date: D, category: C, level: 'Menengah', tags: ['form React', 'controlled component', 'validasi form', 'onSubmit', 'input React'], cta: 'jasa',
        prereq: ['useState', 'event handler'],
        lead: 'Form adalah tempat aplikasi bertemu pengguna sungguhan: pendaftaran, pemesanan, pencarian. Membuatnya di React terlihat sepele sampai Anda menemui validasi, pesan galat, tombol yang dinonaktifkan, dan aksesibilitas. Materi ini membangun form dari dasar yang kokoh, dengan logika validasi yang dapat diuji.',
        body: [
            { objectives: ['membuat input terkendali (controlled) dengan value dan onChange', 'mengelola banyak kolom dengan satu objek state', 'menulis fungsi validasi murni dan mengujinya', 'menampilkan pesan galat hanya setelah pengguna menyentuh kolom', 'menangani submit dan menjaga aksesibilitas (label, aria)'] },
            { h2: 'Controlled component' },
            `Pada input terkendali, <b>state React adalah sumber kebenaran</b>: nilai input selalu berasal dari state, dan setiap ketikan memperbarui state lewat <code>onChange</code>.`,
            { code: jsx`import { useState } from 'react';

function Pendaftaran() {
    const [nama, setNama] = useState('');

    return (
        <label>
            Nama
            <input value={nama} onChange={e => setNama(e.target.value)} />
            <small>{nama.length} karakter</small>
        </label>
    );
}`, lang: 'jsx', caption: 'Karena nilainya ada di state, Anda dapat memformat, membatasi, atau memvalidasi input di setiap ketikan.' },
            { h2: 'Banyak kolom, satu state' },
            { code: jsx`import { useState } from 'react';

function Form() {
    const [data, setData] = useState({ nama: '', surel: '', umur: '' });

    function ubah(e) {
        const { name, value } = e.target;
        setData(d => ({ ...d, [name]: value }));     // nama atribut input = kunci objek
    }

    return (
        <form>
            <input name="nama"  value={data.nama}  onChange={ubah} />
            <input name="surel" value={data.surel} onChange={ubah} type="email" />
            <input name="umur"  value={data.umur}  onChange={ubah} type="number" />
        </form>
    );
}`, lang: 'jsx' },
            { h2: 'Validasi sebagai fungsi murni' },
            `Pisahkan aturan validasi dari komponen. Fungsi murni yang menerima data dan mengembalikan objek galat mudah diuji tanpa React, dan dapat dipakai ulang (juga di server).`,
            { code: String.raw`const POLA_SUREL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validasi(data) {
    const galat = {};
    if (!data.nama.trim()) galat.nama = 'Nama wajib diisi.';
    else if (data.nama.trim().length < 3) galat.nama = 'Nama minimal 3 karakter.';

    if (!data.surel) galat.surel = 'Surel wajib diisi.';
    else if (!POLA_SUREL.test(data.surel)) galat.surel = 'Format surel belum benar.';

    const umur = Number(data.umur);
    if (data.umur === '') galat.umur = 'Umur wajib diisi.';
    else if (!Number.isInteger(umur) || umur < 17 || umur > 100) galat.umur = 'Umur harus bilangan bulat 17 sampai 100.';
    return galat;
}

const kasus = [
    { nama: '',     surel: '',          umur: '' },
    { nama: 'Al',   surel: 'al@x',      umur: '15' },
    { nama: 'Ani',  surel: 'ani@contoh.id', umur: '20.5' },
    { nama: 'Ani Lestari', surel: 'ani@contoh.id', umur: '20' },
];
for (const k of kasus) {
    const g = validasi(k);
    console.log(JSON.stringify(k), '->', Object.keys(g).length ? JSON.stringify(g) : 'VALID');
}`, lang: 'javascript', run: true, caption: 'Empat kasus uji mencakup kolom kosong, format salah, nilai di luar batas, dan data valid. Menguji validasi sebagai fungsi biasa jauh lebih mudah daripada menguji lewat tampilan.' },
            { h2: 'Tampilkan galat dengan bijak' },
            { ul: ['<b>Jangan menampilkan galat sebelum pengguna menyentuh kolom</b>; form kosong penuh warna merah terasa menegur.', 'Simpan state "touched" per kolom (diisi pada <code>onBlur</code>) dan tampilkan galat hanya untuk kolom yang sudah disentuh atau setelah mencoba submit.', 'Tulis pesan yang menjelaskan cara memperbaiki ("Format surel belum benar", bukan "Invalid").', 'Nonaktifkan tombol kirim hanya bila alasannya jelas; sering lebih baik membiarkan aktif dan menampilkan galat saat submit.'] },
            { code: jsx`import { useState } from 'react';

function FormDaftar({ validasi, kirim }) {
    const [data, setData] = useState({ nama: '', surel: '', umur: '' });
    const [disentuh, setDisentuh] = useState({});
    const [mencobaKirim, setMencobaKirim] = useState(false);
    const galat = validasi(data);                        // dihitung saat render, bukan disimpan di state

    const tampilGalat = nama => (disentuh[nama] || mencobaKirim) && galat[nama];

    function submit(e) {
        e.preventDefault();                              // cegah muat ulang halaman
        setMencobaKirim(true);
        if (Object.keys(galat).length === 0) kirim(data);
    }

    return (
        <form onSubmit={submit} noValidate>
            <div>
                <label htmlFor="nama">Nama</label>
                <input id="nama" name="nama" value={data.nama}
                    onChange={e => setData({ ...data, nama: e.target.value })}
                    onBlur={() => setDisentuh(d => ({ ...d, nama: true }))}
                    aria-invalid={!!tampilGalat('nama')}
                    aria-describedby="nama-galat" />
                {tampilGalat('nama') && <p id="nama-galat" role="alert">{galat.nama}</p>}
            </div>
            {/* kolom surel dan umur dengan pola yang sama */}
            <button type="submit">Daftar</button>
        </form>
    );
}`, lang: 'jsx', caption: 'Perhatikan: galat dihitung dari data saat render (tidak disimpan di state), label terhubung lewat htmlFor, dan galat diumumkan ke pembaca layar lewat role="alert" dan aria-describedby.' },
            { h2: 'Menyaring masukan: contoh format angka' },
            { code: String.raw`// Menormalkan masukan nomor ponsel Indonesia: menerima 0812..., +62812..., 62812...
function normalisasiHP(teks) {
    let angka = teks.replace(/[^\d+]/g, '');
    if (angka.startsWith('+62')) angka = '0' + angka.slice(3);
    else if (angka.startsWith('62')) angka = '0' + angka.slice(2);
    return angka;
}
function hpValid(teks) { return /^08\d{8,11}$/.test(normalisasiHP(teks)); }

for (const t of ['0812-3456-7890', '+62 812 3456 7890', '6281234567890', '12345', '081234abc']) {
    console.log(t.padEnd(20), '->', normalisasiHP(t).padEnd(14), hpValid(t) ? 'valid' : 'tidak valid');
}`, lang: 'javascript', run: true },
            { h2: 'Validasi klien bukan pengganti validasi server' },
            { callout: 'Validasi di browser hanya untuk kenyamanan pengguna; <b>siapa pun dapat melewatinya</b> (alat pengembang, permintaan langsung). Server tetap harus memvalidasi semua masukan dan tidak mempercayai klien. Anda dapat memakai skema yang sama di kedua sisi (misalnya pustaka Zod) agar aturan tidak berbeda.', kind: 'warn', title: 'Keamanan' },
            { h2: 'Pustaka form: kapan perlu' },
            `Untuk form kecil, state sendiri sudah cukup. Untuk form besar dengan banyak kolom, validasi bersarang, dan array dinamis, pustaka seperti <b>React Hook Form</b> mengurangi render ulang dan kode berulang. React 19 juga menambahkan <i>Actions</i> dan hook <code>useActionState</code> untuk menangani submit asinkron dan status pending dengan lebih ringkas.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada input terkendali, sumber kebenaran nilai input adalah...', options: ['State React', 'DOM', 'LocalStorage'], answer: 0, why: 'value berasal dari state; onChange memperbaruinya.' }, { q: 'Mengapa e.preventDefault() dipanggil pada submit?', options: ['Mencegah halaman dimuat ulang oleh form bawaan browser', 'Menghapus data', 'Mempercepat render'], answer: 0, why: 'Agar React yang menangani submit.' }, { q: 'Validasi di klien saja...', options: ['Tidak cukup; server harus memvalidasi ulang', 'Sudah cukup', 'Dilarang'], answer: 0, why: 'Klien dapat dilewati.' }] },
            { exercise: [['Tambahkan kolom "kata sandi" dengan aturan minimal 8 karakter ke fungsi validasi.', '<code>if (!data.sandi) galat.sandi = "Kata sandi wajib diisi."; else if (data.sandi.length < 8) galat.sandi = "Minimal 8 karakter.";</code>'], ['Mengapa galat sebaiknya dihitung saat render, bukan disimpan di state?', 'Galat adalah turunan dari data; menyimpannya terpisah dapat tidak sinkron dengan data.'], ['Apa bedanya input terkendali dan tak terkendali (uncontrolled)?', 'Terkendali: nilai di state React. Tak terkendali: nilai disimpan DOM dan dibaca saat dibutuhkan lewat ref atau FormData.'], ['Mengapa input perlu label yang terhubung?', 'Pembaca layar mengumumkan label, dan klik pada label memfokuskan input; ini kebutuhan aksesibilitas dasar.']] },
            { summary: ['Input terkendali: value dari state, onChange memperbarui state.', 'Satu objek state dan atribut name memudahkan banyak kolom.', 'Validasi sebagai fungsi murni: mudah diuji dan dipakai ulang.', 'Tampilkan galat setelah kolom disentuh atau submit; pesan harus membantu.', 'Selalu validasi ulang di server; jaga label dan atribut aria.'] },
        ],
        faq: [['Bagaimana mengunggah berkas di form React?', 'Input type="file" bersifat tak terkendali; baca e.target.files dan kirim dengan FormData.'], ['Apa itu React Hook Form dan Formik?', 'Pustaka pengelola form. React Hook Form populer karena memakai input tak terkendali sehingga lebih sedikit render ulang.'], ['Bagaimana mencegah kirim ganda?', 'Simpan status "sedang mengirim" dan nonaktifkan tombol (atau abaikan submit berikutnya) sampai respons tiba; server sebaiknya idempoten.']],
        sources: [['React: Reacting to Input with State', 'https://react.dev/learn/reacting-to-input-with-state'], ['React: <input> reference', 'https://react.dev/reference/react-dom/components/input'], ['MDN: Client-side form validation', 'https://developer.mozilla.org/docs/Learn_web_development/Extensions/Forms/Form_validation'], ['W3C WAI: Forms Tutorial', 'https://www.w3.org/WAI/tutorials/forms/']],
    },
];
