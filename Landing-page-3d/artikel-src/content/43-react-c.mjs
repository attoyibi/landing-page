const D = '2026-10-30';
const C = 'React & Web Modern';
const jsx = String.raw;
const js = String.raw;
const ts = String.raw;

const REF_REACT = ['React Documentation (react.dev)', 'https://react.dev/learn'];
const REF_MDN = ['MDN Web Docs: JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript'];

export default [
    {
        slug: 'fetch-api-javascript-async-await-promise-dan-penanganan-error',
        title: 'Fetch API JavaScript: Promise, async/await, dan Error',
        description: 'Pahami fetch API, Promise, dan async/await: status HTTP, penanganan error yang benar, timeout, dan permintaan paralel, dengan contoh yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['fetch API', 'async await', 'Promise', 'JavaScript', 'REST API'], cta: 'jasa',
        prereq: ['fungsi JavaScript', 'JSON dasar'],
        lead: 'Hampir semua aplikasi web modern bergantung pada data dari server. Di JavaScript, itu berarti memahami operasi asinkron: pekerjaan yang selesai nanti, sementara program terus berjalan. Promise dan async/await adalah cara menuliskannya agar terbaca, dan fetch adalah pintu menuju API. Kesalahan terbesar pemula: mengira fetch otomatis melempar galat pada status 404.',
        body: [
            { objectives: ['menjelaskan mengapa operasi jaringan bersifat asinkron', 'memakai Promise, then/catch, dan async/await', 'memanggil fetch, membaca JSON, dan memeriksa response.ok', 'menangani galat jaringan, status HTTP, dan JSON rusak', 'menjalankan permintaan paralel dan memberi timeout'] },
            { h2: 'Mengapa asinkron' },
            `JavaScript menjalankan kode Anda pada satu utas. Bila permintaan jaringan menahan program sampai selesai, halaman akan membeku. Karena itu operasi lambat (jaringan, timer, berkas) dimulai lalu dilanjutkan <b>nanti</b>, saat hasilnya siap, melalui event loop.`,
            { code: js`console.log('1. mulai');
setTimeout(() => console.log('3. dari timer (setelah 0 ms, tetapi tetap NANTI)'), 0);
Promise.resolve().then(() => console.log('2b. microtask (Promise) berjalan sebelum timer'));
console.log('2. selesai kode sinkron');`, lang: 'javascript', run: true, caption: 'Urutan keluaran: semua kode sinkron dulu, lalu microtask (Promise), baru callback timer. Memahami urutan ini menjelaskan banyak "keanehan" asinkron.' },
            { h2: 'Promise: nilai yang datang nanti' },
            `Promise memiliki tiga keadaan: <i>pending</i> (menunggu), <i>fulfilled</i> (berhasil dengan nilai), atau <i>rejected</i> (gagal dengan galat).`,
            { code: js`const tunggu = (ms, nilai, gagal = false) =>
    new Promise((ok, tolak) => setTimeout(() => (gagal ? tolak(new Error(nilai)) : ok(nilai)), ms));

tunggu(20, 'data pengguna')
    .then(data => { console.log('berhasil:', data); return data.toUpperCase(); })
    .then(besar => console.log('diubah  :', besar))
    .catch(galat => console.log('gagal   :', galat.message))
    .finally(() => console.log('selesai (selalu berjalan)'));

tunggu(10, 'server error', true)
    .then(d => console.log('tidak sampai sini', d))
    .catch(g => console.log('ditangkap:', g.message));`, lang: 'javascript', run: true },
            { h2: 'async/await: kode asinkron yang terbaca seperti sinkron' },
            { code: js`const tunggu = (ms, nilai, gagal = false) =>
    new Promise((ok, tolak) => setTimeout(() => (gagal ? tolak(new Error(nilai)) : ok(nilai)), ms));

async function ambilProfil(id) {
    try {
        const pengguna = await tunggu(15, { id, nama: 'Ani' });      // menunggu tanpa memblokir program lain
        const pesanan = await tunggu(15, [101, 102]);
        return { ...pengguna, pesanan };
    } catch (galat) {
        console.log('galat tertangkap:', galat.message);
        throw galat;
    }
}

(async () => {
    console.log(await ambilProfil(7));
    try {
        await tunggu(5, 'koneksi putus', true);
    } catch (g) { console.log('try/catch bekerja dengan await:', g.message); }
})();`, lang: 'javascript', run: true, caption: 'async function selalu mengembalikan Promise. await hanya boleh di dalam async function (atau di tingkat atas modul ES).' },
            { h2: 'fetch: jebakan status HTTP' },
            { callout: 'Promise dari <code>fetch</code> <b>hanya ditolak bila jaringan gagal</b> (tidak ada koneksi, DNS gagal). Status 404 atau 500 tetap dianggap "berhasil". Periksa <code>response.ok</code> (true untuk status 200–299) sebelum membaca data.', kind: 'warn', title: 'Salah kaprah paling umum' },
            { code: js`const http = require('node:http');

// server kecil di komputer ini untuk mendemonstrasikan fetch dengan aman
const server = http.createServer((req, res) => {
    if (req.url === '/ok')       { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify({ nama: 'Ani', umur: 20 })); }
    else if (req.url === '/rusak') { res.setHeader('Content-Type', 'application/json'); res.end('{bukan json'); }
    else if (req.url === '/lambat') { setTimeout(() => res.end('terlambat'), 500); }
    else { res.statusCode = 404; res.end('tidak ada'); }
});

async function ambil(url) {
    const respons = await fetch(url);
    if (!respons.ok) throw new Error('HTTP ' + respons.status + ' ' + respons.statusText);   // 4xx/5xx tidak otomatis galat
    return respons.json();
}

server.listen(0, async () => {
    const dasar = 'http://127.0.0.1:' + server.address().port;
    for (const jalur of ['/ok', '/tidak-ada', '/rusak']) {
        try { console.log(jalur.padEnd(11), '->', JSON.stringify(await ambil(dasar + jalur))); }
        catch (g) { console.log(jalur.padEnd(11), '-> galat:', g.name + ':', g.message.slice(0, 40)); }
    }
    // jaringan gagal total: port tidak ada
    try { await fetch('http://127.0.0.1:1/'); } catch (g) { console.log('jaringan gagal  -> galat:', g.name); }
    server.close();
});`, lang: 'javascript', run: true, caption: 'Tiga jenis kegagalan berbeda: status HTTP (diperiksa dengan response.ok), JSON rusak (galat saat respons.json()), dan jaringan gagal (fetch sendiri ditolak).' },
            { h2: 'Timeout dan pembatalan dengan AbortController' },
            { code: js`const http = require('node:http');
const server = http.createServer((req, res) => setTimeout(() => res.end('terlambat'), 800));

async function ambilDenganBatas(url, batasMs) {
    const kontrol = new AbortController();
    const id = setTimeout(() => kontrol.abort(), batasMs);
    try {
        const r = await fetch(url, { signal: kontrol.signal });
        return await r.text();
    } catch (g) {
        if (g.name === 'AbortError') throw new Error('Permintaan melebihi ' + batasMs + ' ms');
        throw g;
    } finally {
        clearTimeout(id);
    }
}

server.listen(0, async () => {
    try { console.log(await ambilDenganBatas('http://127.0.0.1:' + server.address().port, 100)); }
    catch (g) { console.log('galat:', g.message); }
    server.closeAllConnections?.();
    server.close();
});

// Alternatif modern: fetch(url, { signal: AbortSignal.timeout(100) })`, lang: 'javascript', run: true },
            { h2: 'Permintaan paralel' },
            { code: js`const tunggu = (ms, nilai, gagal = false) =>
    new Promise((ok, tolak) => setTimeout(() => (gagal ? tolak(new Error(nilai)) : ok(nilai)), ms));

(async () => {
    // berurutan: total waktu = jumlah
    let t0 = Date.now();
    await tunggu(100, 'a'); await tunggu(100, 'b'); await tunggu(100, 'c');
    console.log('berurutan  :', Math.round((Date.now() - t0) / 100) * 100, 'ms');

    // paralel: total waktu = yang terlama
    t0 = Date.now();
    const hasil = await Promise.all([tunggu(100, 'a'), tunggu(100, 'b'), tunggu(100, 'c')]);
    console.log('paralel    :', Math.round((Date.now() - t0) / 100) * 100, 'ms', hasil);

    // Promise.all gagal bila satu gagal; allSettled melaporkan semuanya
    const semua = await Promise.allSettled([tunggu(10, 'ok'), tunggu(10, 'gagal', true)]);
    console.log(semua.map(s => s.status + ':' + (s.value ?? s.reason.message)));
})();`, lang: 'javascript', run: true, caption: 'Gunakan Promise.all untuk permintaan yang tidak saling bergantung; Promise.allSettled bila ingin hasil sebagian tetap dipakai walau ada yang gagal.' },
            { w: 'checklist', title: 'Pemanggilan API yang sehat', items: ['Saya memeriksa response.ok (atau status) sebelum membaca isi.', 'Saya menangani tiga kegagalan: jaringan, status HTTP, dan JSON rusak.', 'Permintaan yang tidak saling bergantung dijalankan paralel (Promise.all).', 'Ada timeout atau pembatalan (AbortController) untuk permintaan yang bisa menggantung.', 'Pengguna melihat status memuat dan pesan galat yang jelas, bukan layar kosong.', 'Rahasia (kunci API) tidak ditaruh di kode klien.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'fetch menolak Promise bila server membalas 404?', options: ['Tidak; periksa response.ok', 'Ya, selalu', 'Hanya untuk POST'], answer: 0, why: 'Hanya kegagalan jaringan yang menolak.' }, { q: 'Urutan: kode sinkron, microtask Promise, lalu...', options: ['Callback timer', 'Kembali ke awal', 'Tidak ada'], answer: 0, why: 'Event loop memproses antrean tugas sesudah microtask.' }, { q: 'Untuk tiga permintaan yang independen, gunakan...', options: ['Promise.all', 'await berurutan', 'setTimeout'], answer: 0, why: 'Waktu total mengikuti yang terlama.' }] },
            { exercise: [['Tulis fungsi ambilJSON(url) yang melempar galat jelas bila status bukan 2xx.', '<code>async function ambilJSON(url) { const r = await fetch(url); if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }</code>'], ['Mengapa await di dalam for-of berurutan lebih lambat dari Promise.all?', 'Setiap iterasi menunggu yang sebelumnya selesai; Promise.all memulai semuanya sekaligus.'], ['Apa bedanya Promise.all dan Promise.allSettled?', 'all menolak segera bila satu ditolak; allSettled menunggu semua dan melaporkan status masing-masing.'], ['Apa yang terjadi bila lupa await pada async function?', 'Anda mendapatkan Promise, bukan nilainya; kode berikutnya berjalan sebelum hasil siap.']] },
            { summary: ['Operasi jaringan asinkron; event loop menjalankan kode sinkron, microtask, lalu callback.', 'Promise: pending, fulfilled, rejected; async/await membuatnya terbaca linear.', 'fetch hanya menolak bila jaringan gagal; periksa response.ok untuk status HTTP.', 'Tangani JSON rusak, beri timeout dengan AbortController, dan paralelkan dengan Promise.all.'] },
        ],
        faq: [['Apa bedanya fetch dan axios?', 'fetch bawaan browser dan Node; axios pustaka tambahan yang otomatis menolak pada status galat, mendukung interceptor, dan pembatalan. Untuk banyak kasus fetch sudah cukup.'], ['Apa itu CORS dan mengapa fetch gagal di browser?', 'Browser memblokir permintaan lintas asal kecuali server mengizinkannya lewat header CORS. Itu pembatasan browser, bukan bug kode Anda.'], ['Bolehkah memakai await di tingkat atas?', 'Ya, di modul ES (type="module" atau .mjs); di skrip biasa bungkus dalam async function.']],
        sources: [['MDN: Using the Fetch API', 'https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch'], ['MDN: Using Promises', 'https://developer.mozilla.org/docs/Web/JavaScript/Guide/Using_promises'], ['MDN: async function', 'https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function'], ['javascript.info: Promises, async/await', 'https://javascript.info/async']],
    },

    {
        slug: 'tanstack-query-react-fetch-data-cache-dan-mutasi',
        title: 'TanStack Query: Fetch Data, Cache, dan Mutasi di React',
        description: 'Pelajari mengelola data server di React dengan TanStack Query (React Query): useQuery, cache, staleTime, refetch, mutasi, invalidasi, dan mengapa tidak cukup dengan useEffect.',
        date: D, category: C, level: 'Menengah', tags: ['TanStack Query', 'React Query', 'data fetching', 'cache', 'useQuery'], cta: 'jasa',
        prereq: ['useEffect', 'fetch API dan async/await'],
        lead: 'Mengambil data dengan useEffect dan useState tampak mudah, sampai Anda butuh status memuat, galat, pembatalan, cache, pengambilan ulang saat jendela kembali aktif, dan pembaruan setelah mutasi. Kode itu cepat membengkak dan penuh jebakan. TanStack Query memperlakukan data server sebagai kategori tersendiri dan menyelesaikan semuanya.',
        body: [
            { objectives: ['membedakan state klien dan state server', 'memakai useQuery dengan queryKey dan queryFn', 'memahami cache, staleTime, dan pengambilan ulang otomatis', 'melakukan mutasi dan menginvalidasi cache dengan useMutation', 'menjelaskan apa yang dihemat dibanding fetch manual'] },
            { h2: 'Dua jenis state' },
            { table: { head: ['', 'State klien', 'State server'], rows: [['Contoh', 'Tab aktif, isi kotak ketik, modal terbuka', 'Daftar produk, profil pengguna, pesanan'], ['Pemilik', 'Aplikasi Anda', 'Server; aplikasi hanya punya salinan'], ['Masalah khas', 'Sinkronisasi antar komponen', 'Salinan bisa usang, perlu cache, pengambilan ulang, dan invalidasi'], ['Alat', 'useState, useReducer, Zustand', 'TanStack Query, SWR']] } },
            { h2: 'Masalah fetch manual' },
            { code: jsx`// Versi manual: tiga state, satu efek, dan masih banyak yang belum ditangani
function Produk({ id }) {
    const [data, setData] = useState(null);
    const [memuat, setMemuat] = useState(true);
    const [galat, setGalat] = useState(null);

    useEffect(() => {
        let batal = false;
        setMemuat(true);
        fetch('/api/produk/' + id)
            .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
            .then(d => { if (!batal) { setData(d); setMemuat(false); } })
            .catch(e => { if (!batal) { setGalat(e); setMemuat(false); } });
        return () => { batal = true; };
    }, [id]);
    // belum ada: cache, penghapusan duplikat permintaan, retry, refetch saat fokus, pembaruan setelah mutasi...
}`, lang: 'jsx' },
            { h2: 'useQuery: deklaratif' },
            { code: jsx`import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const klien = new QueryClient({
    defaultOptions: { queries: { staleTime: 60_000, retry: 1 } },
});

function Produk({ id }) {
    const { data, isPending, isError, error, isFetching } = useQuery({
        queryKey: ['produk', id],                          // identitas data: berubah -> ambil lagi
        queryFn: async () => {
            const r = await fetch('/api/produk/' + id);
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        },
    });

    if (isPending) return <p>Memuat...</p>;
    if (isError)   return <p>Gagal: {error.message}</p>;
    return <h1>{data.nama} {isFetching && '(menyegarkan...)'}</h1>;
}

export default function App() {
    return <QueryClientProvider client={klien}><Produk id={42} /></QueryClientProvider>;
}`, lang: 'jsx', caption: 'Tiga baris menggantikan tiga state dan satu efek. queryKey menjadi kunci cache: dua komponen yang meminta ["produk", 42] berbagi satu permintaan dan satu hasil.' },
            { h2: 'Cara kerja cache: fresh, stale, dan refetch' },
            `Data di cache dianggap <b>fresh</b> selama <code>staleTime</code> (bawaan 0). Setelah itu <b>stale</b>: masih ditampilkan seketika dari cache, sementara di latar belakang diambil ulang (stale-while-revalidate). Pengambilan ulang otomatis terjadi saat komponen baru dipasang, jendela mendapat fokus kembali, atau koneksi pulih.`,
            { code: js`// Simulasi inti cache stale-while-revalidate (konsep, bukan kode pustaka)
function buatCache(staleMs, ambilServer) {
    const cache = new Map();
    let panggilanServer = 0;
    async function dapatkan(kunci, sekarang) {
        const ada = cache.get(kunci);
        if (ada && sekarang - ada.waktu < staleMs) return { data: ada.data, sumber: 'cache (fresh)' };
        const hasilServer = async () => { panggilanServer++; const data = await ambilServer(kunci); cache.set(kunci, { data, waktu: sekarang }); return data; };
        if (ada) { hasilServer(); return { data: ada.data, sumber: 'cache (stale) + refetch di latar' }; }
        return { data: await hasilServer(), sumber: 'server' };
    }
    return { dapatkan, jumlahPanggilan: () => panggilanServer };
}

(async () => {
    const c = buatCache(1000, async k => 'data-' + k + '@server');
    for (const [waktu, kunci] of [[0, 'produk/1'], [200, 'produk/1'], [900, 'produk/1'], [1500, 'produk/1'], [1600, 'produk/2']]) {
        const h = await c.dapatkan(kunci, waktu);
        console.log(('t=' + waktu + 'ms').padEnd(9), kunci.padEnd(9), '->', h.data.padEnd(18), h.sumber);
    }
    console.log('total panggilan ke server:', c.jumlahPanggilan());
})();`, lang: 'javascript', run: true, caption: 'Pengguna selalu melihat data seketika (dari cache) dan data disegarkan diam-diam bila sudah usang. Lima permintaan komponen hanya menghasilkan tiga panggilan jaringan.' },
            { table: { head: ['Opsi', 'Fungsi'], rows: [['staleTime', 'Berapa lama data dianggap segar (tidak diambil ulang)'], ['gcTime', 'Berapa lama data tak terpakai disimpan di cache sebelum dibuang'], ['retry', 'Jumlah percobaan ulang bila gagal'], ['enabled', 'Menunda query sampai kondisi terpenuhi (misalnya id tersedia)'], ['placeholderData / initialData', 'Data sementara agar tampilan tidak kosong'], ['select', 'Mengubah atau memilih bagian dari data sebelum sampai ke komponen']] } },
            { h2: 'Mutasi dan invalidasi' },
            { code: jsx`import { useMutation, useQueryClient } from '@tanstack/react-query';

function FormTambah() {
    const klien = useQueryClient();
    const tambah = useMutation({
        mutationFn: baru => fetch('/api/produk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(baru),
        }).then(r => { if (!r.ok) throw new Error('Gagal menyimpan'); return r.json(); }),
        onSuccess: () => klien.invalidateQueries({ queryKey: ['produk'] }),   // tandai usang -> daftar diambil ulang
    });

    return (
        <button disabled={tambah.isPending} onClick={() => tambah.mutate({ nama: 'Kopi Baru' })}>
            {tambah.isPending ? 'Menyimpan...' : 'Tambah'}
        </button>
    );
}`, lang: 'jsx', caption: 'Setelah mutasi berhasil, invalidasi membuat semua query berawalan ["produk"] diambil ulang sehingga tampilan sinkron dengan server tanpa kode manual.' },
            { callout: '<b>Pembaruan optimistis</b>: untuk aksi yang hampir pasti berhasil (menyukai, mencentang), perbarui tampilan seketika dengan <code>onMutate</code> dan kembalikan bila gagal di <code>onError</code>. Terasa instan bagi pengguna, tetapi tangani kegagalan dengan jujur.', kind: 'info', title: 'Terasa instan' },
            { h2: 'Kapan tidak perlu' },
            { ul: ['Aplikasi kecil dengan satu atau dua permintaan sederhana: fetch + useEffect (dengan pembatalan) cukup.', 'Bila memakai framework dengan pemuatan data bawaan (loader Next.js, Remix, Server Components), sebagian peran ini sudah ditangani framework.', 'Data murni klien (state UI) bukan tugas pustaka ini.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'queryKey berfungsi sebagai...', options: ['Kunci cache dan pemicu pengambilan ulang bila berubah', 'Kata sandi', 'URL API'], answer: 0, why: 'Menentukan identitas data.' }, { q: 'Data "stale" berarti...', options: ['Ditampilkan dari cache sambil diambil ulang di latar', 'Dihapus', 'Salah'], answer: 0, why: 'Stale-while-revalidate.' }, { q: 'Setelah mutasi berhasil, cara menyegarkan daftar?', options: ['invalidateQueries', 'Muat ulang halaman', 'Menghapus cache browser'], answer: 0, why: 'Menandai query usang dan mengambil ulang.' }] },
            { exercise: [['Tulis queryKey untuk daftar produk berfilter kategori dan halaman.', '<code>["produk", { kategori, halaman }]</code>: perubahan filter otomatis membuat entri cache terpisah.'], ['Mengapa query dengan id undefined perlu opsi enabled?', 'Agar tidak mengirim permintaan sampai id tersedia: <code>enabled: !!id</code>.'], ['Apa keuntungan berbagi queryKey antar komponen?', 'Satu permintaan, satu cache; semua komponen yang memakai kunci itu menerima pembaruan yang sama.'], ['Kapan menaikkan staleTime?', 'Bila data jarang berubah (daftar negara, konfigurasi) sehingga pengambilan ulang tidak diperlukan.']] },
            { summary: ['Pisahkan state klien dari state server; yang kedua punya masalah cache dan sinkronisasi.', 'useQuery: queryKey + queryFn memberi data, status, dan galat; cache dibagi lewat kunci.', 'staleTime dan stale-while-revalidate: tampil seketika, segarkan di latar.', 'useMutation + invalidateQueries menjaga tampilan sinkron setelah perubahan.'] },
        ],
        faq: [['Apa bedanya TanStack Query dan SWR?', 'Keduanya serupa (stale-while-revalidate). TanStack Query punya fitur lebih lengkap (mutasi, paginasi infinit, devtools); SWR lebih ringkas.'], ['Apakah tetap butuh Redux?', 'Untuk data server tidak lagi; Redux/Zustand tetap berguna bagi state klien kompleks, tetapi banyak aplikasi tidak membutuhkannya.'], ['Apakah mendukung rendering di server?', 'Ya, dengan prefetch dan dehydrate/hydrate sehingga data awal sudah ada saat halaman sampai ke browser.']],
        sources: [['TanStack Query Documentation', 'https://tanstack.com/query/latest/docs/framework/react/overview'], ['TkDodo: Practical React Query', 'https://tkdodo.eu/blog/practical-react-query'], ['TanStack Query: Important Defaults', 'https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults'], REF_REACT],
    },

    {
        slug: 'typescript-untuk-react-tipe-props-state-dan-event',
        title: 'TypeScript untuk React: Tipe Props, State, dan Event',
        description: 'Panduan TypeScript di React: tipe props, state, event handler, children, generics pada komponen dan hook, union untuk status, dan kesalahan umum yang sebaiknya dihindari.',
        date: D, category: C, level: 'Menengah', tags: ['TypeScript', 'React TypeScript', 'tipe props', 'generics', 'union type'], cta: 'jasa',
        prereq: ['React dasar', 'JavaScript modern'],
        lead: 'TypeScript menangkap kesalahan sebelum kode berjalan: salah ketik nama props, lupa menangani kasus data kosong, mengirim string ke fungsi yang mengharapkan angka. Di proyek React yang tumbuh, ia menjadi dokumentasi hidup sekaligus jaring pengaman refactoring. Tidak perlu menguasai semua fitur; sedikit pola cukup untuk 90% pekerjaan.',
        body: [
            { objectives: ['mengetik props, state, dan event handler di komponen React', 'memakai union type untuk memodelkan status dan varian', 'memakai generics pada hook dan komponen daftar', 'membedakan interface dan type serta memilih yang tepat', 'menghindari any dan memakai penyempitan tipe (narrowing)'] },
            { h2: 'Props dan children' },
            { code: ts`import type { ReactNode } from 'react';

type Props = {
    nama: string;
    umur?: number;                       // opsional
    peran: 'admin' | 'editor' | 'tamu';   // hanya tiga nilai yang sah
    onPilih: (nama: string) => void;      // fungsi dengan tanda tangan jelas
    children?: ReactNode;
};

export function KartuPengguna({ nama, umur, peran, onPilih, children }: Props) {
    return (
        <div onClick={() => onPilih(nama)}>
            <h3>{nama} {umur !== undefined && '(' + umur + ')'}</h3>
            <small>{peran}</small>
            {children}
        </div>
    );
}

// <KartuPengguna nama="Ani" peran="owner" onPilih={() => {}} />   // galat kompilasi: "owner" bukan peran yang sah`, lang: 'tsx', caption: 'Salah ketik atau nilai di luar daftar langsung ditandai editor sebelum Anda menjalankan aplikasi.' },
            { h2: 'State dan event' },
            { code: ts`import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type Tugas = { id: number; judul: string; selesai: boolean };

export function DaftarTugas() {
    const [tugas, setTugas] = useState<Tugas[]>([]);            // tanpa generik, [] dianggap never[]
    const [judul, setJudul] = useState('');                     // string disimpulkan otomatis
    const [terpilih, setTerpilih] = useState<Tugas | null>(null); // nilai awal null perlu generik

    const ubah = (e: ChangeEvent<HTMLInputElement>) => setJudul(e.target.value);
    const kirim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTugas(t => [...t, { id: Date.now(), judul, selesai: false }]);
        setJudul('');
    };

    return (
        <form onSubmit={kirim}>
            <input value={judul} onChange={ubah} />
            {terpilih && <p>{terpilih.judul}</p>}
        </form>
    );
}`, lang: 'tsx', caption: 'Tipe event berasal dari React (ChangeEvent, FormEvent, MouseEvent). Anda juga bisa menulis handler di tempat (inline) dan membiarkan TypeScript menyimpulkan tipenya.' },
            { h2: 'Union untuk status: buat keadaan mustahil tidak bisa ditulis' },
            `Alih-alih beberapa boolean yang dapat bertentangan, pakai <b>discriminated union</b>: setiap bentuk punya penanda (<code>status</code>) yang membuat TypeScript tahu properti apa yang ada.`,
            { code: ts`type Hasil<T> =
    | { status: 'memuat' }
    | { status: 'sukses'; data: T }
    | { status: 'gagal'; galat: string };

function tampilkan(h: Hasil<string[]>) {
    switch (h.status) {
        case 'memuat': return 'Memuat...';
        case 'sukses': return h.data.join(', ');        // h.data hanya ada pada status "sukses"
        case 'gagal':  return 'Galat: ' + h.galat;      // h.galat hanya ada pada status "gagal"
    }
}`, lang: 'typescript', caption: 'Bila Anda menambah status baru dan lupa menanganinya di switch, TypeScript dapat memperingatkan (dengan pemeriksaan kelengkapan).' },
            { h2: 'Generics: satu komponen untuk berbagai tipe' },
            { code: ts`type DaftarProps<T> = {
    item: T[];
    kunci: (i: T) => string | number;
    render: (i: T) => React.ReactNode;
};

function Daftar<T>({ item, kunci, render }: DaftarProps<T>) {
    return <ul>{item.map(i => <li key={kunci(i)}>{render(i)}</li>)}</ul>;
}

// T disimpulkan dari data; render mengetahui bentuk item
// <Daftar item={[{ id: 1, nama: 'Ani' }]} kunci={p => p.id} render={p => p.nama} />

// generik pada hook
function useDaftar<T>(awal: T[]) {
    const [daftar, setDaftar] = useState<T[]>(awal);
    return { daftar, tambah: (x: T) => setDaftar(d => [...d, x]) };
}`, lang: 'tsx' },
            { h2: 'interface atau type?' },
            { table: { head: ['', 'type', 'interface'], rows: [['Bisa union dan tuple', 'Ya', 'Tidak'], ['Bisa diperluas (extends)', 'Dengan interseksi (&)', 'Ya, dan bisa digabung (declaration merging)'], ['Cocok untuk', 'Union, utilitas, props', 'Bentuk objek yang diperluas antar modul'], ['Pedoman', 'Pilih satu dan konsisten dalam proyek', 'Banyak tim memakai type untuk props dan state']] } },
            { h2: 'Menyempitkan tipe (narrowing) dengan aman' },
            { code: js`// Logika penyempitan yang sama dalam JavaScript: periksa dulu sebelum memakai
function formatNilai(nilai) {
    if (nilai === null || nilai === undefined) return '(kosong)';       // tangani kasus tak ada
    if (typeof nilai === 'number') return nilai.toFixed(1);             // sekarang pasti number
    if (typeof nilai === 'string') return nilai.trim().toUpperCase();   // sekarang pasti string
    if (Array.isArray(nilai)) return nilai.length + ' item';
    return JSON.stringify(nilai);
}
for (const n of [3.14159, '  halo ', null, undefined, [1, 2, 3], { a: 1 }]) console.log(String(JSON.stringify(n)).padEnd(10), '->', formatNilai(n));`, lang: 'javascript', run: true, caption: 'TypeScript memahami pola ini (typeof, null-check, Array.isArray) dan mempersempit tipe di dalam masing-masing cabang. Itu sebabnya kode JavaScript yang defensif tetap relevan.' },
            { callout: 'Hindari <code>any</code>: ia mematikan pemeriksaan tipe. Bila tipe benar-benar tidak diketahui (misalnya hasil JSON dari server), pakai <code>unknown</code> lalu persempit atau validasi dengan pustaka seperti <b>Zod</b>. Tipe TypeScript hilang saat runtime, jadi data dari luar tetap harus divalidasi.', kind: 'warn', title: 'any dan data luar' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'useState<Tugas | null>(null) memakai generik karena...', options: ['Nilai awal null tidak cukup memberi tahu tipe sebenarnya', 'Wajib untuk semua useState', 'Agar lebih cepat'], answer: 0, why: 'TypeScript menyimpulkan tipe dari nilai awal; null saja kurang informatif.' }, { q: 'Discriminated union berguna untuk...', options: ['Memodelkan status yang saling eksklusif', 'Mempercepat build', 'Mengganti CSS'], answer: 0, why: 'Properti penanda menentukan bentuk data.' }, { q: 'Apa yang lebih aman daripada any untuk data tak dikenal?', options: ['unknown + penyempitan/validasi', 'object', 'Tidak mengetik'], answer: 0, why: 'unknown memaksa pemeriksaan sebelum dipakai.' }] },
            { exercise: [['Ketik props komponen Tombol dengan variant "utama" atau "sekunder" dan onClick opsional.', '<code>type Props = { variant: "utama" | "sekunder"; onClick?: () => void; children: ReactNode }</code>'], ['Mengapa tipe TypeScript tidak melindungi dari respons API yang salah bentuk?', 'Tipe dihapus saat kompilasi; data runtime dari jaringan harus divalidasi (misalnya dengan Zod) sebelum dipercaya.'], ['Buat tipe Hasil untuk operasi yang berhasil dengan data atau gagal dengan pesan.', '<code>type Hasil<T> = { ok: true; data: T } | { ok: false; pesan: string }</code>'], ['Kapan menulis tipe secara eksplisit dan kapan membiarkannya disimpulkan?', 'Eksplisit pada batas (props, fungsi publik, nilai awal ambigu); biarkan disimpulkan untuk variabel lokal yang jelas.']] },
            { summary: ['Ketik props dengan type; gunakan union literal untuk nilai terbatas; children bertipe ReactNode.', 'useState<T> bila nilai awal tidak memberi tahu tipe; tipe event berasal dari React.', 'Discriminated union dan generics membuat keadaan mustahil tidak dapat ditulis dan komponen dapat dipakai ulang.', 'Hindari any; validasi data eksternal karena tipe tidak ada saat runtime.'] },
        ],
        faq: [['Apakah TypeScript memperlambat pengembangan?', 'Awalnya sedikit, lalu mempercepat karena autocompletion, refactoring aman, dan kesalahan tertangkap lebih awal, terutama pada tim dan proyek yang tumbuh.'], ['Bagaimana memulai proyek React dengan TypeScript?', 'Vite menyediakan templat: npm create vite@latest nama -- --template react-ts.'], ['Apakah wajib mengetik semuanya?', 'Tidak; mulai dari props, data dari API, dan fungsi bersama. Aktifkan strict mode agar pemeriksaan bermakna.']],
        sources: [['React: Using TypeScript', 'https://react.dev/learn/typescript'], ['TypeScript Handbook', 'https://www.typescriptlang.org/docs/handbook/intro.html'], ['React TypeScript Cheatsheet', 'https://react-typescript-cheatsheet.netlify.app/'], ['Zod: validasi skema TypeScript', 'https://zod.dev/']],
    },

    {
        slug: 'tailwind-css-untuk-pemula-utility-first-responsif-dan-dark-mode',
        title: 'Tailwind CSS untuk Pemula: Utility-First, Responsif, Dark Mode',
        description: 'Pelajari Tailwind CSS: utility-first, spacing dan warna, responsif mobile-first, hover dan dark mode, serta cara membuat komponen yang dapat dipakai ulang.',
        date: D, category: C, level: 'Pemula', tags: ['Tailwind CSS', 'utility-first', 'CSS responsif', 'dark mode', 'frontend'], cta: 'jasa',
        prereq: ['dasar HTML dan CSS'],
        lead: 'Tailwind CSS mengubah cara menulis gaya: alih-alih menamai kelas dan menulis aturan CSS di berkas terpisah, Anda menyusun kelas utilitas kecil langsung di markup. Awalnya terasa aneh, bahkan "kotor". Setelah beberapa hari banyak orang menyadari kecepatannya: tidak ada lagi bingung menamai, berpindah berkas, atau takut menghapus CSS yang mungkin masih dipakai.',
        body: [
            { objectives: ['menjelaskan pendekatan utility-first dan kelebihan serta kekurangannya', 'memakai kelas spacing, tipografi, warna, flex, dan grid', 'membuat tampilan responsif dengan breakpoint mobile-first', 'memakai varian state (hover, focus) dan dark mode', 'membuat komponen yang dapat dipakai ulang tanpa menggandakan kelas'] },
            { h2: 'Ide inti' },
            { w: 'compare', title: 'CSS biasa vs utility-first', tabs: [{ label: 'CSS biasa', html: 'Anda menamai kelas (<code>.kartu-produk</code>), menulis aturannya di berkas CSS, lalu menerapkannya. Berpindah berkas, penamaan sulit, CSS cenderung menumpuk dan tak berani dihapus.' }, { label: 'Tailwind', html: 'Anda menerapkan kelas kecil bermakna tunggal (<code>p-4</code>, <code>rounded-lg</code>, <code>bg-white</code>) langsung di elemen. Gaya berada di tempat Anda melihat elemennya; hanya kelas yang dipakai yang masuk ke CSS akhir.' }] },
            { code: '<!-- Kartu produk dengan Tailwind -->\n<article class="max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm">\n  <h3 class="text-lg font-semibold text-slate-900">Kopi Gayo</h3>\n  <p class="mt-1 text-sm text-slate-600">Biji pilihan, sangrai medium.</p>\n  <div class="mt-4 flex items-center justify-between">\n    <span class="text-base font-bold text-emerald-700">Rp65.000</span>\n    <button class="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">\n      Beli\n    </button>\n  </div>\n</article>', lang: 'html', caption: 'Setiap kelas melakukan satu hal: p-4 = padding 1rem, mt-4 = margin atas 1rem, text-sm = ukuran huruf kecil, hover:bg-emerald-700 = warna latar saat kursor di atasnya.' },
            { h2: 'Sistem skala: konsistensi bawaan' },
            { table: { head: ['Kelas', 'Nilai CSS', 'Catatan'], rows: [['p-1, p-2, p-4, p-8', '0.25rem, 0.5rem, 1rem, 2rem', 'Satu satuan = 0,25rem (4px); angka naik mengikuti skala'], ['m-4, mx-auto, mt-2', 'margin', 'x = kiri-kanan, y = atas-bawah, t/r/b/l = satu sisi'], ['text-sm, text-base, text-xl', '0.875, 1, 1.25 rem', 'Ukuran huruf'], ['font-medium, font-bold', '500, 700', 'Ketebalan'], ['w-full, max-w-md, h-10', 'lebar dan tinggi', 'Juga w-1/2, min-h-screen'], ['rounded, rounded-xl, rounded-full', 'radius sudut', ''], ['bg-slate-100, text-slate-700', 'warna', 'Nama warna + tingkat 50 sampai 950']] } },
            { code: js`// Skala spacing Tailwind: satu satuan = 0.25rem = 4px (pada ukuran huruf dasar 16px)
const px = n => n * 4;
for (const n of [1, 2, 4, 6, 8, 12, 16]) console.log('p-' + String(n).padEnd(3), '=', (n * 0.25) + 'rem', '=', px(n) + 'px');`, lang: 'javascript', run: true, caption: 'Karena semua jarak memakai skala yang sama, tampilan otomatis konsisten tanpa Anda memilih angka acak seperti 13px atau 17px.' },
            { h2: 'Responsif: mobile-first dengan breakpoint' },
            { table: { head: ['Awalan', 'Aktif mulai lebar', 'Contoh'], rows: [['(tanpa)', 'semua layar (mobile dulu)', 'flex-col'], ['sm:', '640px ke atas', 'sm:flex-row'], ['md:', '768px', 'md:grid-cols-2'], ['lg:', '1024px', 'lg:grid-cols-3'], ['xl:', '1280px', 'xl:max-w-6xl']] } },
            { code: '<!-- 1 kolom di ponsel, 2 di tablet, 3 di desktop -->\n<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">\n  <li class="rounded-lg bg-white p-4">...</li>\n</ul>\n\n<!-- Menumpuk di ponsel, berdampingan mulai tablet -->\n<div class="flex flex-col gap-4 md:flex-row md:items-center">\n  <img class="w-full rounded-lg md:w-48" src="..." alt="...">\n  <p class="text-base md:text-lg">Teks</p>\n</div>', lang: 'html', caption: 'Mobile-first: tulis gaya dasar untuk layar kecil, lalu tambahkan perubahan pada layar yang lebih besar dengan awalan breakpoint.' },
            { h2: 'State, fokus, dan dark mode' },
            { code: '<button class="bg-sky-600 text-white\n               hover:bg-sky-700 active:bg-sky-800\n               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600\n               disabled:cursor-not-allowed disabled:opacity-50\n               dark:bg-sky-500 dark:hover:bg-sky-400">\n  Simpan\n</button>\n\n<!-- Dark mode mengikuti pengaturan sistem (bawaan) atau kelas "dark" di <html> bila dikonfigurasi -->\n<body class="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">', lang: 'html', caption: 'Varian (hover:, focus-visible:, disabled:, dark:) dapat digabung dengan breakpoint, misalnya md:hover:bg-sky-700. Jangan menghapus indikator fokus; gunakan gaya fokus yang jelas demi aksesibilitas keyboard.' },
            { h2: 'Menghindari pengulangan kelas' },
            { ul: ['<b>Jadikan komponen</b>: di React, bungkus markup berulang dalam komponen (<code>Tombol</code>, <code>Kartu</code>) sehingga kelas ditulis sekali.', '<b>Varian lewat props</b>: petakan nama varian ke string kelas (atau pakai pustaka kecil seperti <code>clsx</code> dan <code>tailwind-merge</code>).', '<b>@apply</b> bisa dipakai untuk pola yang sangat umum di CSS, tetapi jangan berlebihan: ia mengembalikan Anda ke penamaan kelas yang ingin dihindari.', '<b>Tema</b> (warna merek, font) dikonfigurasi di satu tempat sehingga seluruh situs mengikuti.'] },
            { code: js`// Peta varian -> kelas: komponen Tombol cukup menerima "variant"
const kelasDasar = 'rounded-lg px-3 py-1.5 text-sm font-medium focus-visible:outline-2';
const varian = {
    utama:    'bg-emerald-600 text-white hover:bg-emerald-700',
    sekunder: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    bahaya:   'bg-red-600 text-white hover:bg-red-700',
};
const gabung = (...k) => k.filter(Boolean).join(' ');
const kelasTombol = (v = 'utama', tambahan) => gabung(kelasDasar, varian[v] ?? varian.utama, tambahan);

console.log(kelasTombol());
console.log(kelasTombol('bahaya', 'w-full'));
console.log(kelasTombol('tidak-ada'));`, lang: 'javascript', run: true },
            { h2: 'Kelebihan dan kekurangan' },
            { table: { head: ['Kelebihan', 'Kekurangan'], rows: [['Cepat membangun; tidak berpindah berkas', 'Markup terlihat ramai dengan banyak kelas'], ['Konsisten berkat skala desain', 'Perlu menghafal nama kelas (autocomplete dan dokumentasi membantu)'], ['CSS akhir kecil: hanya kelas terpakai', 'Kurang cocok untuk gaya yang sangat dinamis tanpa kerangka komponen'], ['Aman dihapus: gaya terikat pada elemen', 'Tim perlu sepakat soal konvensi komponen']] } },
            { callout: 'Tailwind tidak menggantikan pemahaman CSS: flexbox, grid, specificity, dan model kotak tetap dasarnya. Orang yang paham CSS justru paling produktif dengan Tailwind karena tahu apa yang terjadi di balik kelasnya.', kind: 'info', title: 'Tetap pelajari CSS' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada Tailwind, "md:flex-row" artinya...', options: ['flex-row mulai lebar 768px ke atas', 'flex-row hanya di ponsel', 'flex-row saat hover'], answer: 0, why: 'Awalan breakpoint bersifat mobile-first.' }, { q: 'p-4 setara dengan padding...', options: ['1rem', '4rem', '4px saja'], answer: 0, why: '4 x 0,25rem.' }, { q: 'Cara mengurangi pengulangan kelas?', options: ['Jadikan komponen yang dipakai ulang', 'Salin tempel ke semua halaman', 'Hapus semua kelas'], answer: 0, why: 'Satu komponen, satu tempat gaya.' }] },
            { exercise: [['Tulis kelas untuk tombol biru dengan sudut membulat, padding vertikal 8px dan horizontal 16px.', '<code>bg-blue-600 text-white rounded-lg py-2 px-4</code> (py-2 = 0,5rem = 8px; px-4 = 1rem = 16px)'], ['Buat grid 2 kolom di tablet dan 4 kolom di desktop.', '<code>grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4</code>'], ['Mengapa menghapus outline fokus tanpa pengganti buruk?', 'Pengguna keyboard kehilangan petunjuk elemen yang sedang fokus; gunakan focus-visible dengan ring atau outline yang jelas.'], ['Kapan CSS biasa atau CSS Modules lebih cocok dari Tailwind?', 'Untuk animasi kompleks, gaya yang sangat dinamis dari data, atau tim yang sudah punya sistem desain berbasis CSS yang matang.']] },
            { summary: ['Utility-first: kelas kecil bermakna tunggal disusun langsung di elemen.', 'Skala bawaan (spacing, warna, ukuran) menjaga konsistensi.', 'Responsif mobile-first dengan sm:, md:, lg:; varian state seperti hover: dan focus-visible:, plus dark:.', 'Hindari pengulangan dengan komponen dan peta varian; tetap kuasai dasar CSS.'] },
        ],
        faq: [['Apakah Tailwind membuat CSS membengkak?', 'Tidak; hanya kelas yang benar-benar dipakai yang dibangkitkan sehingga CSS produksi biasanya kecil.'], ['Bagaimana memasang Tailwind di Vite?', 'Pasang paket tailwindcss dan plugin Vite-nya, impor Tailwind di berkas CSS utama, lalu mulai memakai kelas; ikuti panduan resmi untuk versi terbaru.'], ['Apakah Tailwind cocok untuk proyek besar?', 'Ya, banyak produk besar memakainya; kuncinya komponen yang dapat dipakai ulang dan tema terpusat.']],
        sources: [['Tailwind CSS Documentation', 'https://tailwindcss.com/docs'], ['Tailwind: Utility-First Fundamentals', 'https://tailwindcss.com/docs/styling-with-utility-classes'], ['MDN: CSS Flexible Box Layout', 'https://developer.mozilla.org/docs/Web/CSS/CSS_flexible_box_layout'], ['web.dev: Learn CSS', 'https://web.dev/learn/css']],
    },

    {
        slug: 'seo-untuk-aplikasi-react-ssr-prerender-dan-metadata',
        title: 'SEO untuk Aplikasi React: SSR, Prerender, dan Metadata',
        description: 'Mengapa React murni sulit di-SEO dan solusinya: SSR, SSG, prerender, metadata per halaman, sitemap, data terstruktur, dan Core Web Vitals.',
        date: D, category: C, level: 'Menengah', tags: ['SEO React', 'SSR', 'prerender', 'meta tags', 'Next.js'], cta: 'jasa',
        prereq: ['React dasar', 'React Router', 'dasar HTML'],
        lead: 'Anda membangun aplikasi React yang bagus, tetapi tidak muncul di Google. Penyebabnya sering sama: HTML yang dikirim server hanya berisi div kosong, dan isi halaman baru ada setelah JavaScript dijalankan. Mesin pencari modern dapat menjalankan JavaScript, tetapi lebih lambat dan tidak selalu andal. Cara terbaik adalah memastikan HTML sudah berisi konten sejak awal.',
        body: [
            { objectives: ['menjelaskan perbedaan CSR, SSR, SSG, dan prerender', 'mengenali masalah SEO pada SPA murni', 'mengatur judul, deskripsi, canonical, dan Open Graph per halaman', 'membuat sitemap dan data terstruktur', 'memahami hubungan SEO dengan Core Web Vitals dan aksesibilitas'] },
            { h2: 'Apa yang dilihat mesin pencari' },
            `Penjelajah mengunduh HTML terlebih dahulu. Bila konten sudah ada di sana, ia langsung bisa memahaminya. Bila HTML hanya berisi <code>&lt;div id="root"&gt;&lt;/div&gt;</code>, ia harus menjalankan JavaScript dan menunggu render, antrean tambahan yang menunda indeks dan rawan gagal. Peramban sosial (pratinjau tautan WhatsApp, Facebook, X) bahkan umumnya <b>tidak</b> menjalankan JavaScript.`,
            { code: js`const React = require('react');
const { renderToString } = require('react-dom/server');
const e = React.createElement;

function Artikel({ judul, isi }) {
    return e('article', null, e('h1', null, judul), e('p', null, isi));
}

// 1. SPA murni (CSR): server mengirim cangkang kosong
const csr = '<!doctype html><html><head><title>Aplikasi</title></head><body><div id="root"></div><script src="/app.js"></script></body></html>';

// 2. Dirender di server (SSR) / saat build (SSG, prerender): HTML sudah berisi konten
const html = renderToString(e(Artikel, { judul: 'Belajar React', isi: 'Komponen, props, dan state.' }));
const ssr = '<!doctype html><html><head><title>Belajar React</title></head><body><div id="root">' + html + '</div><script src="/app.js"></script></body></html>';

const ringkas = s => s.match(/<body>([\s\S]*)<\/body>/)[1];
console.log('CSR  ->', ringkas(csr));
console.log('SSR  ->', ringkas(ssr));
console.log('teks terbaca sebelum JS jalan? CSR:', /Belajar React/.test(ringkas(csr)), '| SSR:', /Belajar React/.test(ringkas(ssr)));`, lang: 'javascript', run: true, caption: 'Perbedaan mendasar: apa yang ada di HTML pertama. Pada SSR/SSG, komponen yang sama dijalankan di server dan hasilnya dikirim sebagai HTML, lalu browser "menghidupkan" (hydrate) dengan JavaScript.' },
            { h2: 'Empat strategi rendering' },
            { table: { head: ['Strategi', 'HTML dibuat', 'Cocok untuk', 'SEO'], rows: [['CSR (SPA murni)', 'Di browser', 'Dasbor di balik login, aplikasi internal', 'Lemah untuk halaman publik'], ['SSR', 'Di server pada setiap permintaan', 'Halaman dinamis dan personal yang perlu SEO', 'Baik; butuh server'], ['SSG', 'Saat build, sekali', 'Blog, dokumentasi, landing page, katalog yang jarang berubah', 'Sangat baik dan cepat'], ['ISR / revalidate', 'Saat build lalu diperbarui berkala', 'Katalog besar yang sesekali berubah', 'Sangat baik']] } },
            { callout: 'Aplikasi di balik login tidak perlu SEO, jadi CSR sudah cukup. Untuk halaman publik (landing page, artikel, produk), pilih SSG atau SSR. Framework seperti <b>Next.js</b>, <b>Remix/React Router framework mode</b>, atau <b>Astro</b> menyediakannya; atau lakukan <b>prerender</b> pada proyek Vite untuk halaman tertentu.', kind: 'info', title: 'Pilih sesuai halaman' },
            { h2: 'Metadata per halaman' },
            { table: { head: ['Elemen', 'Fungsi', 'Panduan'], rows: [['<title>', 'Judul di hasil pencarian dan tab', 'Unik per halaman, sekitar 50–60 karakter, kata kunci utama di depan'], ['meta description', 'Cuplikan di hasil pencarian', '120–160 karakter, menarik dan informatif'], ['link rel="canonical"', 'Alamat utama halaman', 'Mencegah konten ganda dari parameter URL'], ['Open Graph / Twitter Card', 'Pratinjau saat dibagikan', 'og:title, og:description, og:image 1200x630'], ['meta robots', 'Mengatur pengindeksan', 'noindex untuk halaman yang tidak perlu muncul'], ['html lang', 'Bahasa halaman', 'lang="id" untuk konten Bahasa Indonesia']] } },
            { code: jsx`// React 19 mengangkat <title> dan <meta> yang dirender di komponen ke <head> secara otomatis
function HalamanArtikel({ artikel }) {
    return (
        <article>
            <title>{artikel.judul} | Situs Saya</title>
            <meta name="description" content={artikel.ringkasan} />
            <link rel="canonical" href={'https://situs.id/artikel/' + artikel.slug} />
            <meta property="og:title" content={artikel.judul} />
            <meta property="og:image" content={artikel.gambar} />
            <h1>{artikel.judul}</h1>
        </article>
    );
}
// Versi lama: pustaka react-helmet-async; Next.js: objek metadata / generateMetadata.`, lang: 'jsx', caption: 'Metadata harus berada di HTML yang dikirim (SSR/SSG), bukan hanya diatur oleh JavaScript di browser, agar terbaca oleh penjelajah sosial dan mesin pencari sederhana.' },
            { h2: 'Sitemap dan robots.txt' },
            { code: js`// Membangun sitemap.xml dari daftar halaman (jalankan saat build)
const halaman = [
    { jalur: '/', ubah: '2026-10-30', prioritas: 1.0 },
    { jalur: '/artikel/belajar-react', ubah: '2026-10-28', prioritas: 0.8 },
    { jalur: '/artikel/seo-react', ubah: '2026-10-30', prioritas: 0.8 },
];
const dasar = 'https://situs.id';
const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...halaman.map(h => '  <url><loc>' + dasar + h.jalur + '</loc><lastmod>' + h.ubah + '</lastmod></url>'),
    '</urlset>',
].join('\n');
console.log(xml);
console.log('\n# robots.txt\nUser-agent: *\nAllow: /\nSitemap: ' + dasar + '/sitemap.xml');`, lang: 'javascript', run: true, caption: 'Kirim sitemap di Google Search Console agar penemuan halaman lebih cepat. robots.txt hanya memberi petunjuk; jangan memakainya untuk menyembunyikan data sensitif.' },
            { h2: 'Data terstruktur (JSON-LD)' },
            { code: js`const artikel = { judul: 'SEO untuk Aplikasi React', penulis: 'Muhammad Muchson Attoyibi', tanggal: '2026-10-30', url: 'https://situs.id/artikel/seo-react' };
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: artikel.judul,
    author: { '@type': 'Person', name: artikel.penulis },
    datePublished: artikel.tanggal,
    mainEntityOfPage: artikel.url,
};
console.log('<script type="application/ld+json">' + JSON.stringify(jsonLd, null, 2) + '</script>');`, lang: 'javascript', run: true, caption: 'Data terstruktur membantu mesin pencari memahami jenis konten (artikel, produk, FAQ, breadcrumb) dan dapat memunculkan hasil yang lebih kaya. Validasi dengan alat uji hasil kaya Google.' },
            { h2: 'SEO teknis lain yang berkaitan dengan React' },
            { ul: ['<b>Tautan sungguhan</b>: pakai <code>&lt;a href&gt;</code> atau Link yang menghasilkan href; tombol dengan onClick tidak bisa dirayapi.', '<b>Status HTTP benar</b>: halaman tidak ada harus mengembalikan 404 sungguhan, bukan 200 dengan pesan "tidak ditemukan" (soft 404).', '<b>Kecepatan</b>: Core Web Vitals (LCP, INP, CLS) memengaruhi pengalaman dan peringkat; pecah bundel, muat gambar malas, tentukan ukuran gambar.', '<b>Konten di HTML</b>: judul, paragraf, dan tautan penting jangan hanya muncul setelah interaksi atau pengambilan data sisi klien.', '<b>Aksesibilitas</b>: struktur judul h1–h3 yang logis, teks alternatif gambar, dan landmark membantu pengguna sekaligus mesin pencari.', '<b>Konten berkualitas</b>: teknik tidak menggantikan isi yang berguna, jelas, dan dijawab dengan baik.'] },
            { w: 'checklist', title: 'Periksa SEO halaman React Anda', items: ['HTML yang dikirim server sudah memuat konten utama (cek dengan "View Source" atau curl).', 'Setiap halaman punya title, meta description, dan canonical yang unik.', 'Open Graph dan gambar pratinjau tersedia di HTML awal.', 'sitemap.xml dibuat otomatis dan dikirim ke Search Console.', 'Halaman tidak ditemukan mengembalikan status 404 sungguhan.', 'Tautan internal memakai href yang dapat dirayapi.', 'Core Web Vitals diukur (Lighthouse, PageSpeed Insights) dan dijaga.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Strategi rendering yang membuat HTML saat build?', options: ['SSG', 'CSR', 'Tidak ada'], answer: 0, why: 'Static Site Generation.' }, { q: 'Mengapa pratinjau tautan WhatsApp bisa kosong pada SPA murni?', options: ['Peramban sosial umumnya tidak menjalankan JavaScript', 'WhatsApp rusak', 'Gambar terlalu besar'], answer: 0, why: 'Meta tag harus ada di HTML awal.' }, { q: 'Halaman yang tak ada sebaiknya mengembalikan...', options: ['Status 404', 'Status 200 dengan pesan', 'Status 301 ke beranda'], answer: 0, why: 'Menghindari soft 404.' }] },
            { exercise: [['Cek cepat apakah halaman Anda dirender di server tanpa alat khusus.', 'Buka "View Page Source" (bukan Inspect) atau jalankan curl pada URL dan cari teks konten utama di dalam HTML.'], ['Pilih strategi rendering untuk: blog pribadi, dasbor admin, katalog 10.000 produk.', 'Blog: SSG. Dasbor admin: CSR cukup. Katalog: SSG dengan ISR atau SSR.'], ['Mengapa canonical penting untuk halaman dengan parameter ?urut=?', 'Menyatakan alamat utama sehingga variasi URL tidak dianggap konten ganda.'], ['Apa risiko bergantung hanya pada JavaScript untuk metadata?', 'Penjelajah sosial dan sebagian mesin pencari tidak menjalankannya sehingga pratinjau dan judul bisa salah atau kosong.']] },
            { summary: ['SPA murni mengirim HTML kosong; SSR/SSG/prerender mengirim HTML berisi konten.', 'Halaman publik: pilih SSG atau SSR; dasbor di balik login cukup CSR.', 'Metadata (title, description, canonical, Open Graph) harus ada di HTML awal.', 'Sitemap, JSON-LD, status HTTP benar, tautan sungguhan, dan Core Web Vitals melengkapi SEO teknis.'] },
        ],
        faq: [['Apakah Google bisa mengindeks aplikasi React murni?', 'Bisa, karena Googlebot menjalankan JavaScript, tetapi prosesnya lebih lambat dan tidak selalu andal; bing dan penjelajah sosial lebih terbatas. HTML sisi server tetap pilihan terbaik.'], ['Apakah harus pindah ke Next.js?', 'Tidak selalu. Situs kecil dengan Vite dapat memprerender halaman publik, atau memakai Astro untuk konten dengan pulau-pulau React.'], ['Berapa lama hasil SEO terlihat?', 'Pengindeksan bisa berhari-hari sampai berminggu-minggu; peringkat bergantung pada kualitas konten, tautan balik, dan kompetisi.']],
        sources: [['Google Search Central: JavaScript SEO basics', 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics'], ['web.dev: Rendering on the Web', 'https://web.dev/articles/rendering-on-the-web'], ['React: Document metadata (title, meta, link)', 'https://react.dev/reference/react-dom/components/title'], ['Schema.org: Article', 'https://schema.org/Article']],
    },
];
