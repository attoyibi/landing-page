const D = '2026-10-30';
const C = 'Laravel & Backend';
const php = String.raw;
const py = String.raw;
const js = String.raw;

const REF_LARAVEL = ['Laravel Documentation', 'https://laravel.com/docs'];
const REF_PHP = ['PHP Manual', 'https://www.php.net/manual/en/'];
const NOTE_PHP = { callout: 'Kode PHP/Laravel di artikel ini ditampilkan sebagai contoh yang mengikuti dokumentasi Laravel (versi 11 dan seterusnya, PHP 8.2 atau lebih baru). Bagian "cara kerja di balik layar" dijalankan sungguhan dengan Python atau JavaScript agar konsepnya dapat dibuktikan.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'belajar-laravel-dari-nol-mvc-routing-controller-dan-blade',
        title: 'Belajar Laravel dari Nol: MVC, Routing, Controller, Blade',
        description: 'Panduan Laravel untuk pemula: instalasi, struktur proyek, pola MVC, routing, controller, view Blade, dan alur satu permintaan dari browser sampai respons.',
        date: D, category: C, level: 'Pemula', tags: ['Laravel', 'MVC', 'routing', 'Blade', 'belajar Laravel'], cta: 'jasa',
        prereq: ['dasar PHP (variabel, fungsi, array, class)', 'dasar HTML'],
        lead: 'Laravel adalah kerangka kerja PHP yang paling populer untuk membangun aplikasi web. Daya tariknya sederhana: ia menyediakan jawaban yang rapi untuk hal-hal yang selalu Anda butuhkan (routing, basis data, autentikasi, validasi, antrean) sehingga Anda dapat fokus pada logika bisnis. Materi ini membangun gambaran besar: bagaimana satu permintaan bergerak melalui aplikasi Laravel.',
        body: [
            { objectives: ['menjelaskan pola MVC dan perannya di Laravel', 'memasang Laravel dan memahami struktur folder utama', 'mendefinisikan rute dan menghubungkannya ke controller', 'membuat view dengan Blade (escaping, kondisi, perulangan, layout)', 'menelusuri alur satu permintaan dari browser sampai respons'] },
            NOTE_PHP,
            { h2: 'MVC: tiga peran yang dipisahkan' },
            { svg: 'flow', label: 'Alur permintaan di Laravel', steps: [{ t: 'Browser', d: 'GET /produk/5' }, { t: 'Route', d: 'mencocokkan URL ke controller' }, { t: 'Controller', d: 'mengatur logika, memanggil model' }, { t: 'Model', d: 'berbicara dengan basis data' }, { t: 'View (Blade)', d: 'membentuk HTML respons' }] },
            { table: { head: ['Peran', 'Tugas', 'Di Laravel'], rows: [['Model', 'Data dan aturan bisnis; berhubungan dengan basis data', 'app/Models/Produk.php (Eloquent)'], ['View', 'Tampilan yang dilihat pengguna', 'resources/views/*.blade.php'], ['Controller', 'Menerima permintaan, mengatur alur, memilih view atau respons', 'app/Http/Controllers/ProdukController.php']] } },
            { h2: 'Memasang Laravel' },
            { code: '# Prasyarat: PHP 8.2+, Composer, dan Node.js (untuk aset front-end)\ncomposer create-project laravel/laravel toko\ncd toko\nphp artisan serve          # server pengembangan di http://127.0.0.1:8000\n\n# atau memakai installer Laravel (menawarkan starter kit)\ncomposer global require laravel/installer\nlaravel new toko', lang: 'bash', caption: 'Artisan adalah alat baris perintah Laravel: php artisan list menampilkan semua perintah; php artisan make:... membuat kerangka kode.' },
            { code: 'toko/\n├── app/\n│   ├── Http/Controllers/     # controller\n│   └── Models/               # model Eloquent\n├── bootstrap/app.php         # konfigurasi aplikasi (routing, middleware)\n├── config/                   # konfigurasi\n├── database/\n│   ├── migrations/           # skema basis data bertahap\n│   ├── factories/ seeders/   # data uji dan data awal\n├── public/index.php          # TITIK MASUK semua permintaan (arahkan server web ke sini)\n├── resources/views/          # templat Blade\n├── routes/web.php            # rute halaman\n├── routes/api.php            # rute API (setelah php artisan install:api)\n├── storage/                  # log, cache, unggahan\n├── tests/                    # tes\n└── .env                      # pengaturan lingkungan (JANGAN dikomit)', lang: 'text' },
            { callout: 'Server web harus diarahkan ke folder <code>public/</code>, bukan ke akar proyek. Bila akar proyek terbuka ke publik, berkas <code>.env</code> (berisi kata sandi basis data dan kunci) bisa diunduh siapa pun. Ini salah satu kesalahan deploy yang paling berbahaya.', kind: 'warn', title: 'Keamanan dasar' },
            { h2: 'Routing' },
            { code: php`<?php
// routes/web.php
use App\Http\Controllers\ProdukController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => view('beranda'));                         // rute sederhana dengan closure

Route::get('/produk', [ProdukController::class, 'index']);          // daftar
Route::get('/produk/{produk}', [ProdukController::class, 'show']);  // detail; {produk} adalah parameter

// nama rute memudahkan membuat URL tanpa menulis alamat manual
Route::get('/tentang', fn () => view('tentang'))->name('tentang');
// di view:  <a href="{{ route('tentang') }}">Tentang</a>

// satu baris untuk tujuh rute CRUD standar
Route::resource('kategori', KategoriController::class);`, lang: 'php', caption: 'Lihat semua rute dengan php artisan route:list.' },
            { h3: 'Bagaimana pencocokan rute bekerja' },
            `Router mencocokkan metode HTTP dan pola path, mengambil parameter dalam kurung kurawal, dan memanggil penangan yang sesuai. Berikut implementasi mini konsepnya (JavaScript) yang dapat dijalankan:`,
            { code: js`const rute = [];
const daftar = (metode, pola, penangan) => rute.push({ metode, pola: pola.split('/').filter(Boolean), penangan });

daftar('GET', '/', () => 'beranda');
daftar('GET', '/produk', () => 'daftar produk');
daftar('GET', '/produk/{id}', ({ id }) => 'detail produk ' + id);
daftar('POST', '/produk', () => 'simpan produk baru');

function kirim(metode, url) {
    const bagian = url.split('/').filter(Boolean);
    for (const r of rute) {
        if (r.metode !== metode || r.pola.length !== bagian.length) continue;
        const params = {};
        const cocok = r.pola.every((p, i) => p.startsWith('{') ? (params[p.slice(1, -1)] = bagian[i], true) : p === bagian[i]);
        if (cocok) return '200 ' + r.penangan(params);
    }
    return rute.some(r => r.pola.join('/') === bagian.join('/')) ? '405 Method Not Allowed' : '404 Not Found';
}
for (const [m, u] of [['GET', '/'], ['GET', '/produk/5'], ['POST', '/produk'], ['DELETE', '/produk'], ['GET', '/tidak-ada']]) console.log((m + ' ' + u).padEnd(18), '->', kirim(m, u));`, lang: 'javascript', run: true, caption: 'Laravel melakukan hal serupa dengan lebih banyak fitur: pembatasan parameter (where), grup, middleware, dan binding model otomatis.' },
            { h2: 'Controller' },
            { code: php`<?php
// php artisan make:controller ProdukController
namespace App\Http\Controllers;

use App\Models\Produk;

class ProdukController extends Controller
{
    public function index()
    {
        $produk = Produk::orderBy('nama')->paginate(12);        // ambil dari basis data
        return view('produk.index', ['produk' => $produk]);     // kirim data ke view
    }

    public function show(Produk $produk)                         // route model binding: {produk} otomatis menjadi objek Produk
    {
        return view('produk.show', compact('produk'));           // bila id tidak ada, otomatis 404
    }
}`, lang: 'php', caption: 'Controller tipis adalah tujuan: ia menerima permintaan, memanggil logika, dan memilih respons. Logika bisnis yang rumit sebaiknya berada di model atau kelas layanan.' },
            { h2: 'View dengan Blade' },
            { code: '{{-- resources/views/layouts/app.blade.php --}}\n<!doctype html>\n<html lang="id">\n<head><title>@yield(\'judul\') | Toko</title></head>\n<body>\n    <nav>...</nav>\n    <main>@yield(\'isi\')</main>\n</body>\n</html>\n\n{{-- resources/views/produk/index.blade.php --}}\n@extends(\'layouts.app\')\n\n@section(\'judul\', \'Daftar Produk\')\n\n@section(\'isi\')\n    <h1>Produk</h1>\n\n    @forelse ($produk as $p)\n        <article>\n            <h2><a href="{{ route(\'produk.show\', $p) }}">{{ $p->nama }}</a></h2>\n            <p>Rp{{ number_format($p->harga, 0, \',\', \'.\') }}</p>\n            @if ($p->stok < 1) <span>Habis</span> @endif\n        </article>\n    @empty\n        <p>Belum ada produk.</p>\n    @endforelse\n\n    {{ $produk->links() }}   {{-- navigasi halaman otomatis --}}\n@endsection', lang: 'html', caption: '{{ }} otomatis meloloskan (escape) HTML sehingga aman dari XSS. {!! !!} mencetak mentah dan hanya boleh dipakai untuk konten yang sepenuhnya Anda percayai.' },
            { code: py`import html

# Mengapa {{ }} aman: karakter berbahaya diubah menjadi entitas HTML
masukan_pengguna = '<script>alert("curi cookie")</script>'
print("{{ }}   :", html.escape(masukan_pengguna))
print("{!! !!} :", masukan_pengguna, " <- browser akan MENJALANKAN skrip ini")`, lang: 'python', run: true },
            { h2: 'Ringkasan alur satu permintaan' },
            { ol: ['Server web mengirim semua permintaan ke <code>public/index.php</code>.', 'Laravel memulai aplikasi, memuat konfigurasi, dan menjalankan <b>middleware</b> global (sesi, CSRF, dan lainnya).', 'Router mencocokkan URL dan metode ke rute, lalu memanggil controller.', 'Controller memakai model untuk membaca atau menulis basis data, lalu mengembalikan view atau respons JSON.', 'Respons kembali melewati middleware dan dikirim ke browser.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Folder yang harus menjadi akar dokumen server web?', options: ['public/', 'app/', 'Akar proyek'], answer: 0, why: 'Menjaga .env dan kode tidak terbuka ke publik.' }, { q: 'Blade {{ $nama }} akan...', options: ['Meloloskan HTML otomatis', 'Mencetak mentah', 'Menjalankan kode PHP bebas'], answer: 0, why: 'Aman dari XSS secara bawaan.' }, { q: 'php artisan route:list digunakan untuk...', options: ['Melihat semua rute terdaftar', 'Membuat rute baru', 'Menghapus rute'], answer: 0, why: 'Membantu debugging routing.' }] },
            { exercise: [['Tulis rute GET /kategori/{slug} ke method show pada KategoriController.', '<code>Route::get("/kategori/{slug}", [KategoriController::class, "show"]);</code>'], ['Mengapa controller sebaiknya tipis?', 'Agar mudah dibaca dan diuji; logika bisnis dipindah ke model atau kelas layanan yang dapat dipakai ulang.'], ['Apa gunanya route model binding?', 'Parameter {produk} otomatis diubah menjadi objek Produk dari basis data dan memberi 404 bila tidak ada.'], ['Mengapa .env tidak boleh dikomit ke Git?', 'Berisi kata sandi dan kunci rahasia; gunakan .env.example sebagai templat tanpa rahasia.']] },
            { summary: ['MVC: model (data), view (tampilan), controller (alur).', 'Semua permintaan masuk lewat public/index.php; router memilih controller.', 'Blade memberi templat dengan escaping otomatis, layout, kondisi, dan perulangan.', 'Artisan mempercepat pekerjaan; arahkan server web ke public/ dan jaga .env tetap rahasia.'] },
        ],
        faq: [['Mengapa memilih Laravel?', 'Ekosistem besar, dokumentasi sangat baik, banyak bawaan (autentikasi, antrean, tes), dan komunitas aktif, termasuk di Indonesia.'], ['Apakah masih perlu PHP murni?', 'Memahami PHP dasar penting; Laravel hanya mengatur cara memakainya dengan rapi.'], ['Apa itu starter kit?', 'Kerangka awal dengan autentikasi dan tampilan siap pakai (misalnya Breeze, atau starter kit React/Vue/Livewire pada installer baru).']],
        sources: [REF_LARAVEL, ['Laravel: Routing', 'https://laravel.com/docs/routing'], ['Laravel: Blade Templates', 'https://laravel.com/docs/blade'], REF_PHP],
    },

    {
        slug: 'eloquent-orm-laravel-migrasi-model-relasi-dan-masalah-n-plus-1',
        title: 'Eloquent ORM Laravel: Migrasi, Model, Relasi, dan N+1',
        description: 'Pelajari Eloquent: migrasi skema, model, query builder, relasi hasMany dan belongsTo, eager loading, dan masalah N+1 query yang diperagakan dengan SQL nyata.',
        date: D, category: C, level: 'Menengah', tags: ['Eloquent', 'migrasi', 'relasi', 'N+1 query', 'eager loading'], cta: 'jasa',
        prereq: ['dasar Laravel', 'SQL dasar'],
        lead: 'Eloquent adalah ORM Laravel: setiap tabel punya model, dan setiap baris menjadi objek. Anda menulis kode PHP yang ekspresif alih-alih SQL mentah. Kemudahan itu menyimpan satu jebakan yang paling sering menyebabkan aplikasi Laravel lambat: masalah N+1 query. Memahaminya adalah pembeda antara aplikasi yang cepat dan yang merayap.',
        body: [
            { objectives: ['membuat tabel dengan migrasi dan memahami manfaat migrasi', 'membuat model dan menulis query dengan Eloquent', 'mendefinisikan relasi satu-ke-banyak dan belongsTo', 'mengenali masalah N+1 dan memperbaikinya dengan eager loading', 'memahami mass assignment dan $fillable'] },
            NOTE_PHP,
            { h2: 'Migrasi: skema basis data sebagai kode' },
            { code: php`<?php
// php artisan make:model Produk -m   (membuat model + migrasi)
// database/migrations/xxxx_create_produk_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('produk', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kategori_id')->constrained('kategori')->cascadeOnDelete();
            $table->string('nama');
            $table->text('deskripsi')->nullable();
            $table->unsignedInteger('harga');
            $table->unsignedInteger('stok')->default(0);
            $table->timestamps();                       // created_at dan updated_at

            $table->index('nama');                      // mempercepat pencarian
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('produk');
    }
};`, lang: 'php', caption: 'php artisan migrate menjalankan migrasi yang belum dijalankan; php artisan migrate:rollback membatalkan batch terakhir. Skema ikut tersimpan di Git sehingga seluruh tim dan server memiliki struktur yang sama.' },
            { h2: 'Model dan query' },
            { code: php`<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Produk extends Model
{
    protected $table = 'produk';                         // nama tabel (Laravel menebak "produks" bila tidak diisi)
    protected $fillable = ['kategori_id', 'nama', 'deskripsi', 'harga', 'stok'];   // yang boleh diisi massal

    public function kategori(): BelongsTo
    {
        return $this->belongsTo(Kategori::class);
    }
}

// pemakaian
$semua   = Produk::all();
$murah   = Produk::where('harga', '<', 50000)->orderBy('harga')->get();
$satu    = Produk::findOrFail(5);                         // 404 bila tidak ada
$baru    = Produk::create(['nama' => 'Kopi', 'harga' => 65000, 'kategori_id' => 1, 'stok' => 10]);
$satu->update(['stok' => 8]);
$satu->delete();`, lang: 'php' },
            { callout: '<b>Mass assignment</b>: <code>Produk::create($request->all())</code> tanpa batasan memungkinkan penyerang menyisipkan kolom yang tidak Anda duga (misalnya <code>is_admin</code>). <code>$fillable</code> mendaftar kolom yang boleh diisi massal. Lebih aman lagi, gunakan <code>$request->validated()</code> yang hanya berisi kolom yang lolos validasi.', kind: 'warn', title: 'Keamanan' },
            { h2: 'Relasi' },
            { table: { head: ['Relasi', 'Di model', 'Contoh'], rows: [['Satu-ke-banyak', 'hasMany / belongsTo', 'Kategori punya banyak Produk; Produk milik satu Kategori'], ['Satu-ke-satu', 'hasOne / belongsTo', 'Pengguna punya satu Profil'], ['Banyak-ke-banyak', 'belongsToMany (tabel pivot)', 'Produk punya banyak Tag; Tag punya banyak Produk'], ['Polimorfik', 'morphMany / morphTo', 'Komentar milik Artikel atau Video']] } },
            { code: php`<?php
class Kategori extends Model
{
    public function produk(): HasMany
    {
        return $this->hasMany(Produk::class);
    }
}

$kategori = Kategori::find(1);
foreach ($kategori->produk as $p) {          // properti dinamis: menjalankan query saat pertama diakses
    echo $p->nama;
}
$jumlah = $kategori->produk()->where('stok', '>', 0)->count();   // method: membangun query lebih lanjut`, lang: 'php' },
            { h2: 'Masalah N+1: diperagakan' },
            `Misalkan halaman menampilkan 100 produk beserta nama kategorinya. Bila kategori diambil <b>satu per satu di dalam perulangan</b>, Anda menjalankan 1 query untuk daftar produk ditambah 100 query untuk kategori: total 101. Berikut peragaan dengan SQL sungguhan (SQLite) yang menghitung jumlah query, setara dengan yang dilakukan Eloquent.`,
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE kategori (id INTEGER PRIMARY KEY, nama TEXT);
CREATE TABLE produk (id INTEGER PRIMARY KEY, kategori_id INTEGER, nama TEXT);
""")
db.executemany("INSERT INTO kategori VALUES (?, ?)", [(i, f"Kategori {i}") for i in range(1, 11)])
db.executemany("INSERT INTO produk VALUES (?, ?, ?)", [(i, (i % 10) + 1, f"Produk {i}") for i in range(1, 101)])

jumlah_query = 0
def q(sql, args=()):
    global jumlah_query
    jumlah_query += 1
    return db.execute(sql, args).fetchall()

# --- N+1: Produk::all() lalu $p->kategori->nama di dalam foreach ---
jumlah_query = 0
produk = q("SELECT id, kategori_id, nama FROM produk")
for pid, kid, nama in produk:
    kategori = q("SELECT nama FROM kategori WHERE id = ?", (kid,))[0][0]        # satu query PER produk!
print("N+1 (lazy loading) :", jumlah_query, "query untuk", len(produk), "produk")

# --- Eager loading: Produk::with('kategori')->get() ---
jumlah_query = 0
produk = q("SELECT id, kategori_id, nama FROM produk")
ids = sorted({kid for _, kid, _ in produk})
kat = dict(q(f"SELECT id, nama FROM kategori WHERE id IN ({','.join('?' * len(ids))})", ids))   # satu query untuk semua kategori
for pid, kid, nama in produk:
    kategori = kat[kid]
print("Eager loading      :", jumlah_query, "query untuk", len(produk), "produk")`, lang: 'python', run: true, caption: 'Tanpa disadari, kode yang tampak bersih di Eloquent bisa menghasilkan ratusan query. Dengan 10.000 produk, N+1 berarti 10.001 query untuk satu halaman.' },
            { code: php`<?php
// Lazy loading (N+1) - HINDARI di perulangan
$produk = Produk::all();
foreach ($produk as $p) {
    echo $p->kategori->nama;              // query baru untuk setiap produk
}

// Eager loading - 2 query saja
$produk = Produk::with('kategori')->get();
foreach ($produk as $p) {
    echo $p->kategori->nama;              // sudah dimuat, tidak ada query tambahan
}

// Mencegah N+1 secara otomatis saat pengembangan (di AppServiceProvider::boot):
// Model::preventLazyLoading(! app()->isProduction());   // melempar galat bila lazy loading terjadi

// Hanya jumlah relasi: withCount menghitung di SQL, bukan memuat semua baris
$kategori = Kategori::withCount('produk')->get();   // $k->produk_count`, lang: 'php', caption: 'Alat bantu: Laravel Debugbar atau Telescope menampilkan jumlah query per halaman; preventLazyLoading membuat N+1 terdeteksi sejak pengembangan.' },
            { h2: 'Praktik query yang sehat' },
            { ul: ['<b>Ambil hanya yang diperlukan</b>: <code>select("id", "nama")</code> dan paginasi (<code>paginate()</code>) alih-alih <code>all()</code> pada tabel besar.', '<b>Indeks</b> pada kolom yang sering dipakai di where, order by, dan kunci asing.', '<b>Pemrosesan besar</b>: <code>chunk()</code> atau <code>lazy()</code> agar tidak memuat jutaan baris ke memori.', '<b>Transaksi</b>: <code>DB::transaction(fn () => ...)</code> untuk beberapa perubahan yang harus berhasil atau gagal bersama.', '<b>Jangan menyisipkan input pengguna ke SQL mentah</b>; gunakan binding parameter (query builder dan Eloquent sudah melakukannya).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Masalah N+1 berarti...', options: ['1 query daftar + N query tambahan per item', 'N kali N query', 'Hanya 1 query'], answer: 0, why: 'Lazy loading relasi di dalam perulangan.' }, { q: 'Solusi standar N+1 di Eloquent?', options: ['Eager loading dengan with()', 'Menambah RAM', 'Menghapus relasi'], answer: 0, why: 'Memuat relasi sekaligus.' }, { q: 'Fungsi $fillable?', options: ['Membatasi kolom yang boleh diisi massal', 'Menentukan tipe kolom', 'Membuat indeks'], answer: 0, why: 'Mencegah mass assignment berbahaya.' }] },
            { exercise: [['Tulis query Eloquent untuk 20 produk termahal beserta kategorinya tanpa N+1.', '<code>Produk::with("kategori")->orderByDesc("harga")->limit(20)->get();</code>'], ['Mengapa migrasi lebih baik daripada mengubah tabel manual di phpMyAdmin?', 'Perubahan skema tercatat di Git, dapat diulang, dan sama di semua lingkungan (lokal, staging, produksi).'], ['Kapan memakai withCount?', 'Saat hanya butuh jumlah relasi; SQL menghitungnya sehingga relasi tidak dimuat ke memori.'], ['Bagaimana mendeteksi N+1 sejak dini?', 'Aktifkan Model::preventLazyLoading di lingkungan non-produksi dan pantau jumlah query dengan Debugbar atau Telescope.']] },
            { summary: ['Migrasi menjaga skema basis data tetap terversi; model Eloquent memetakan tabel ke objek.', 'Relasi: hasMany, belongsTo, belongsToMany, polimorfik.', 'N+1: 1 + N query akibat lazy loading; atasi dengan with() (eager loading).', 'Batasi mass assignment, gunakan indeks, paginasi, dan transaksi.'] },
        ],
        faq: [['Apakah Eloquent lambat dibanding SQL mentah?', 'Ada overhead kecil membuat objek, tetapi masalah nyata hampir selalu query yang berlebihan (N+1) atau tanpa indeks, bukan ORM itu sendiri. Untuk laporan berat, query builder atau SQL mentah dengan binding tetap boleh dipakai.'], ['Apa itu soft delete?', 'Menandai baris dihapus (kolom deleted_at) tanpa menghapusnya secara fisik, memakai trait SoftDeletes.'], ['Apa itu seeder dan factory?', 'Seeder mengisi data awal; factory membuat data palsu untuk pengembangan dan pengujian.']],
        sources: [['Laravel: Eloquent ORM', 'https://laravel.com/docs/eloquent'], ['Laravel: Eloquent Relationships (termasuk eager loading)', 'https://laravel.com/docs/eloquent-relationships'], ['Laravel: Migrations', 'https://laravel.com/docs/migrations'], ['Use The Index, Luke', 'https://use-the-index-luke.com/']],
    },

    {
        slug: 'validasi-form-laravel-form-request-aturan-dan-pesan-error',
        title: 'Validasi Form Laravel: Form Request, Aturan, Pesan Error',
        description: 'Pelajari validasi di Laravel: aturan bawaan, validate() di controller, Form Request, pesan kustom berbahasa Indonesia, validasi unik, dan tampilan error di Blade.',
        date: D, category: C, level: 'Pemula', tags: ['validasi Laravel', 'Form Request', 'validate', 'Blade error', 'keamanan form'], cta: 'jasa',
        prereq: ['dasar Laravel', 'controller dan routing'],
        lead: 'Setiap data dari pengguna harus dianggap tidak dapat dipercaya: bisa salah ketik, bisa kosong, bisa juga sengaja dirancang untuk merusak. Validasi adalah gerbang pertama. Laravel memberi sistem validasi yang ekspresif: satu baris aturan per kolom, pesan galat otomatis, dan pengembalian ke form dengan isian lama.',
        body: [
            { objectives: ['menulis validasi dengan $request->validate dan aturan umum', 'memindahkan aturan ke Form Request', 'menampilkan galat dan mempertahankan isian lama di Blade', 'menyesuaikan pesan, nama atribut, dan bahasa Indonesia', 'memahami validasi unik, kondisional, dan validasi sisi server sebagai kewajiban'] },
            NOTE_PHP,
            { h2: 'Validasi di controller' },
            { code: php`<?php
public function store(Request $request)
{
    $data = $request->validate([
        'nama'        => ['required', 'string', 'min:3', 'max:100'],
        'surel'       => ['required', 'email', 'unique:pengguna,surel'],     // belum dipakai di tabel pengguna
        'umur'        => ['required', 'integer', 'between:17,100'],
        'kota'        => ['nullable', 'string', 'max:50'],
        'setuju'      => ['accepted'],                                        // harus dicentang
        'foto'        => ['nullable', 'image', 'mimes:jpg,png,webp', 'max:2048'],   // KB
    ]);

    Pengguna::create($data);            // $data hanya berisi kolom yang lolos validasi
    return redirect()->route('pengguna.index')->with('sukses', 'Data tersimpan.');
}`, lang: 'php', caption: 'Bila validasi gagal, Laravel otomatis mengalihkan kembali ke halaman sebelumnya dengan galat dan isian lama (untuk permintaan JSON, ia mengembalikan respons 422 dengan daftar galat).' },
            { table: { head: ['Aturan', 'Arti'], rows: [['required / nullable', 'Wajib diisi / boleh kosong'], ['string, integer, numeric, boolean, array', 'Tipe data'], ['min:n, max:n, between:a,b', 'Panjang (string), nilai (angka), ukuran (berkas KB), jumlah (array)'], ['email, url, date, uuid', 'Format'], ['unique:tabel,kolom', 'Belum ada di basis data'], ['exists:tabel,kolom', 'Harus ada di basis data (misalnya kunci asing)'], ['confirmed', 'Harus ada kolom {nama}_confirmation yang sama (kata sandi)'], ['in:a,b,c / Rule::enum()', 'Salah satu nilai tertentu'], ['regex:/pola/', 'Cocok dengan ekspresi reguler']] } },
            { h2: 'Menampilkan galat di Blade' },
            { code: '<form method="POST" action="{{ route(\'pengguna.store\') }}" novalidate>\n    @csrf                                   {{-- token CSRF wajib untuk form POST --}}\n\n    <label for="nama">Nama</label>\n    <input id="nama" name="nama" value="{{ old(\'nama\') }}"   {{-- isian lama saat validasi gagal --}}\n           aria-invalid="{{ $errors->has(\'nama\') ? \'true\' : \'false\' }}">\n    @error(\'nama\')\n        <p role="alert" class="galat">{{ $message }}</p>\n    @enderror\n\n    <label for="surel">Surel</label>\n    <input id="surel" type="email" name="surel" value="{{ old(\'surel\') }}">\n    @error(\'surel\') <p role="alert" class="galat">{{ $message }}</p> @enderror\n\n    <button type="submit">Daftar</button>\n</form>', lang: 'html', caption: '@csrf menambahkan token yang diperiksa middleware; tanpa itu form POST ditolak dengan galat 419. old() mengembalikan isian sebelumnya agar pengguna tidak mengetik ulang semuanya.' },
            { h2: 'Form Request: aturan di kelas sendiri' },
            `Untuk form besar atau aturan yang dipakai ulang, pindahkan validasi ke kelas khusus agar controller tetap tipis.`,
            { code: php`<?php
// php artisan make:request SimpanPenggunaRequest
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SimpanPenggunaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;                          // atau periksa hak akses, mis. $this->user()->can('buat-pengguna')
    }

    public function rules(): array
    {
        $pengguna = $this->route('pengguna'); // null saat membuat baru, objek saat mengubah
        return [
            'nama'  => ['required', 'string', 'min:3', 'max:100'],
            'surel' => ['required', 'email', Rule::unique('pengguna', 'surel')->ignore($pengguna?->id)],
            'peran' => ['required', Rule::in(['admin', 'editor', 'tamu'])],
        ];
    }

    public function messages(): array
    {
        return [
            'nama.required'  => 'Nama wajib diisi.',
            'surel.unique'   => 'Surel ini sudah terdaftar.',
        ];
    }

    public function attributes(): array
    {
        return ['surel' => 'alamat surel'];   // dipakai pada pesan bawaan: "alamat surel wajib diisi"
    }
}

// di controller: validasi berjalan otomatis sebelum method dipanggil
public function store(SimpanPenggunaRequest $request)
{
    Pengguna::create($request->validated());
    return back()->with('sukses', 'Tersimpan.');
}`, lang: 'php', caption: 'Rule::unique(...)->ignore($id) penting saat mengubah data: tanpa ignore, surel milik pengguna itu sendiri dianggap bentrok.' },
            { h2: 'Bahasa Indonesia' },
            { code: 'php artisan lang:publish                 # menerbitkan berkas bahasa ke folder lang/\n# unduh terjemahan komunitas (mis. paket laravel-lang) ke lang/id, lalu di .env:\n# APP_LOCALE=id\n# APP_FALLBACK_LOCALE=en', lang: 'bash', caption: 'Pesan galat bawaan Laravel berbahasa Inggris; terjemahan komunitas atau berkas lang/id/validation.php membuatnya berbahasa Indonesia tanpa mengubah aturan.' },
            { h2: 'Cara kerja di balik layar' },
            `Sistem validasi pada dasarnya mengurai string aturan (<code>"between:17,100"</code>), menjalankan fungsi pemeriksa per kolom, dan mengumpulkan galat. Mini versinya (JavaScript):`,
            { code: js`const aturan = {
    required: v => (v === undefined || v === null || String(v).trim() === '') ? 'wajib diisi' : null,
    email:    v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : 'format tidak valid',
    integer:  v => Number.isInteger(Number(v)) && String(v).trim() !== '' ? null : 'harus bilangan bulat',
    min:      (v, n) => String(v).length >= Number(n) ? null : 'minimal ' + n + ' karakter',
    between:  (v, a, b) => Number(v) >= Number(a) && Number(v) <= Number(b) ? null : 'harus antara ' + a + ' dan ' + b,
};

function validasi(data, skema) {
    const galat = {};
    for (const [kolom, daftar] of Object.entries(skema)) {
        for (const teks of daftar.split('|')) {
            const [nama, params] = teks.split(':');
            const pesan = aturan[nama](data[kolom], ...(params ? params.split(',') : []));
            if (pesan) { (galat[kolom] ??= []).push(kolom + ' ' + pesan); break; }    // berhenti di galat pertama per kolom
        }
    }
    return galat;
}

const skema = { nama: 'required|min:3', surel: 'required|email', umur: 'required|integer|between:17,100' };
console.log(validasi({ nama: 'Al', surel: 'al@x', umur: '15' }, skema));
console.log(validasi({ nama: 'Ani', surel: 'ani@contoh.id', umur: '20' }, skema));`, lang: 'javascript', run: true },
            { callout: 'Validasi di browser (atribut HTML, JavaScript) hanya untuk kenyamanan. <b>Validasi server wajib</b>, karena penyerang dapat mengirim permintaan langsung tanpa melewati form Anda. Dan ingat: validasi bukan pengganti <i>pemeriksaan hak akses</i> (otorisasi): "data ini valid" berbeda dari "pengguna ini boleh melakukannya".', kind: 'warn', title: 'Dua hal berbeda' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Direktif Blade untuk menampilkan isian lama?', options: ['old("nama")', '$request->nama', '@old'], answer: 0, why: 'Mengambil input dari permintaan sebelumnya.' }, { q: 'Mengapa Rule::unique perlu ignore() saat edit?', options: ['Agar data milik sendiri tidak dianggap duplikat', 'Agar lebih cepat', 'Wajib oleh PHP'], answer: 0, why: 'Surel milik pengguna yang sedang diedit sudah ada di tabel.' }, { q: 'Siapa yang wajib memvalidasi data?', options: ['Server', 'Hanya browser', 'Tidak ada'], answer: 0, why: 'Klien bisa dilewati.' }] },
            { exercise: [['Tulis aturan untuk kolom kata sandi: wajib, minimal 8 karakter, dan harus dikonfirmasi.', '<code>"sandi" => ["required", "min:8", "confirmed"]</code> dengan input sandi_confirmation.'], ['Ubah pesan galat unik surel menjadi bahasa Indonesia.', 'Tambahkan <code>"surel.unique" => "Surel ini sudah terdaftar."</code> di method messages() Form Request.'], ['Apa bedanya validate() dan validated()?', 'validate() menjalankan validasi di controller dan mengembalikan data lolos; validated() pada Form Request mengembalikan hanya data yang telah divalidasi.'], ['Mengapa galat 419 muncul saat mengirim form POST?', 'Token CSRF tidak ada atau kedaluwarsa; tambahkan @csrf di form.']] },
            { summary: ['$request->validate([...]) atau Form Request memvalidasi dan mengembalikan hanya data yang lolos.', 'Aturan umum: required, string, email, unique, exists, between, confirmed, image.', 'Blade: @error, $message, old(); sertakan @csrf pada form POST.', 'Pesan dan atribut dapat disesuaikan; validasi server wajib dan berbeda dari otorisasi.'] },
        ],
        faq: [['Bagaimana validasi untuk API (JSON)?', 'Sama; bila gagal, Laravel mengembalikan respons 422 dengan JSON berisi daftar galat per kolom secara otomatis.'], ['Bagaimana membuat aturan kustom?', 'php artisan make:rule untuk kelas aturan, atau gunakan closure pada array aturan.'], ['Apakah ada validasi bersyarat?', 'Ya: required_if, sometimes, dan Rule::requiredIf untuk kolom yang wajib hanya dalam kondisi tertentu.']],
        sources: [['Laravel: Validation', 'https://laravel.com/docs/validation'], ['Laravel: Available Validation Rules', 'https://laravel.com/docs/validation#available-validation-rules'], ['OWASP: Input Validation Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html'], REF_LARAVEL],
    },

    {
        slug: 'rest-api-laravel-resource-controller-api-resource-dan-paginasi',
        title: 'REST API Laravel: Resource Controller, API Resource, Paginasi',
        description: 'Bangun REST API dengan Laravel: resource controller, API Resource untuk JSON, kode status HTTP, paginasi, versi API, dan prinsip desain endpoint.',
        date: D, category: C, level: 'Menengah', tags: ['REST API', 'Laravel API', 'API Resource', 'JSON', 'paginasi'], cta: 'jasa',
        prereq: ['dasar Laravel', 'Eloquent', 'validasi'],
        lead: 'API adalah cara aplikasi berbicara dengan aplikasi lain: aplikasi seluler Flutter, front-end React, atau layanan pihak ketiga. API yang baik konsisten, dapat ditebak, dan jujur lewat kode status. Laravel menyediakan semua komponennya; yang perlu Anda kuasai adalah merancangnya dengan baik.',
        body: [
            { objectives: ['mendefinisikan rute dan resource controller untuk API', 'memakai API Resource untuk mengontrol bentuk JSON', 'memakai kode status HTTP dan format galat yang konsisten', 'menerapkan paginasi, penyaringan, dan pengurutan', 'menerapkan prinsip desain REST dan pembuatan versi'] },
            NOTE_PHP,
            { h2: 'Prinsip REST yang praktis' },
            { table: { head: ['Aksi', 'Metode & URL', 'Status sukses'], rows: [['Daftar produk', 'GET /api/v1/produk', '200'], ['Detail produk', 'GET /api/v1/produk/5', '200'], ['Buat produk', 'POST /api/v1/produk', '201 Created'], ['Ubah penuh / sebagian', 'PUT atau PATCH /api/v1/produk/5', '200'], ['Hapus', 'DELETE /api/v1/produk/5', '204 No Content']] } },
            { ul: ['<b>URL adalah kata benda jamak</b> (produk), metode HTTP adalah kata kerjanya; hindari /ambilProduk atau /hapusProduk.', '<b>Status code berarti</b>: 200/201/204 sukses, 400 permintaan buruk, 401 belum login, 403 dilarang, 404 tidak ada, 422 validasi gagal, 429 terlalu banyak permintaan, 500 galat server.', '<b>Stateless</b>: setiap permintaan membawa semua yang dibutuhkan (token), server tidak menyimpan sesi per klien.', '<b>JSON konsisten</b>: bentuk respons dan galat seragam di seluruh endpoint.'] },
            { h2: 'Menyiapkan API di Laravel' },
            { code: 'php artisan install:api          # membuat routes/api.php dan memasang Laravel Sanctum\nphp artisan make:model Produk -mfc --api\nphp artisan make:resource ProdukResource\nphp artisan make:request SimpanProdukRequest', lang: 'bash', caption: 'Semua rute di routes/api.php otomatis berawalan /api dan tidak memakai sesi/CSRF (cocok untuk klien token).' },
            { code: php`<?php
// routes/api.php
use App\Http\Controllers\Api\ProdukController;

Route::prefix('v1')->group(function () {
    Route::get('produk', [ProdukController::class, 'index']);            // publik
    Route::get('produk/{produk}', [ProdukController::class, 'show']);

    Route::middleware('auth:sanctum')->group(function () {              // butuh token
        Route::post('produk', [ProdukController::class, 'store']);
        Route::put('produk/{produk}', [ProdukController::class, 'update']);
        Route::delete('produk/{produk}', [ProdukController::class, 'destroy']);
    });
});
// atau: Route::apiResource('produk', ProdukController::class);  (lima rute tanpa create/edit)`, lang: 'php' },
            { h2: 'API Resource: bentuk JSON yang Anda kendalikan' },
            `Mengembalikan model langsung (<code>return $produk;</code>) membocorkan setiap kolom basis data dan mengikat klien pada struktur tabel. API Resource adalah lapisan transformasi yang menentukan persis apa yang keluar.`,
            { code: php`<?php
// app/Http/Resources/ProdukResource.php
class ProdukResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'        => $this->id,
            'nama'      => $this->nama,
            'harga'     => $this->harga,
            'tersedia'  => $this->stok > 0,                                  // nilai turunan
            'kategori'  => new KategoriResource($this->whenLoaded('kategori')),   // hanya bila sudah dimuat (hindari N+1)
            'dibuat'    => $this->created_at->toIso8601String(),
        ];
    }
}

// Controller
public function index(Request $request)
{
    $produk = Produk::query()
        ->with('kategori')
        ->when($request->filled('kategori'), fn ($q) => $q->where('kategori_id', $request->integer('kategori')))
        ->when($request->filled('q'), fn ($q) => $q->where('nama', 'like', '%' . $request->string('q') . '%'))
        ->orderBy($request->string('urut', 'nama')->toString())
        ->paginate(15);

    return ProdukResource::collection($produk);              // sertakan meta paginasi otomatis
}

public function store(SimpanProdukRequest $request)
{
    $produk = Produk::create($request->validated());
    return (new ProdukResource($produk))->response()->setStatusCode(201);
}

public function destroy(Produk $produk)
{
    $produk->delete();
    return response()->noContent();                           // 204
}`, lang: 'php', caption: 'Perhatikan: urutan dari input pengguna sebaiknya dibatasi ke daftar kolom yang diizinkan (whitelist) agar tidak dapat dipakai untuk memeriksa kolom atau menyebabkan galat SQL.' },
            { h2: 'Bentuk respons paginasi' },
            { code: js`// Meniru perhitungan paginasi yang dilakukan paginate(): total, halaman, offset
function paginasi(total, perHalaman, halaman) {
    const terakhir = Math.max(1, Math.ceil(total / perHalaman));
    const sekarang = Math.min(Math.max(1, halaman), terakhir);
    const offset = (sekarang - 1) * perHalaman;
    return {
        data: '(baris ' + (total ? offset + 1 : 0) + ' sampai ' + Math.min(offset + perHalaman, total) + ')',
        meta: { current_page: sekarang, last_page: terakhir, per_page: perHalaman, total },
        links: { prev: sekarang > 1 ? '/api/v1/produk?page=' + (sekarang - 1) : null, next: sekarang < terakhir ? '/api/v1/produk?page=' + (sekarang + 1) : null },
    };
}
console.log(JSON.stringify(paginasi(47, 15, 1)));
console.log(JSON.stringify(paginasi(47, 15, 4)));
console.log(JSON.stringify(paginasi(47, 15, 99)));      // halaman di luar rentang dijepit ke halaman terakhir
console.log(JSON.stringify(paginasi(0, 15, 1)));`, lang: 'javascript', run: true, caption: 'Klien (aplikasi Flutter/React) memakai meta dan links untuk memuat halaman berikutnya. Untuk data yang sangat besar atau cepat berubah, paginasi berbasis kursor (cursorPaginate) lebih stabil dan efisien daripada offset.' },
            { h2: 'Format galat yang konsisten' },
            { code: js`const http = require('node:http');

// Server kecil yang mencontohkan kode status dan bentuk galat yang konsisten
const produk = new Map([[1, { id: 1, nama: 'Kopi', harga: 65000 }]]);
const kirim = (res, status, badan) => { res.writeHead(status, { 'Content-Type': 'application/json' }); res.end(badan === undefined ? '' : JSON.stringify(badan)); };

const server = http.createServer((req, res) => {
    const m = req.url.match(/^\/api\/v1\/produk(?:\/(\d+))?$/);
    if (!m) return kirim(res, 404, { pesan: 'Rute tidak ditemukan' });
    const id = m[1] && Number(m[1]);
    if (req.method === 'GET' && !id) return kirim(res, 200, { data: [...produk.values()] });
    if (req.method === 'GET') return produk.has(id) ? kirim(res, 200, { data: produk.get(id) }) : kirim(res, 404, { pesan: 'Produk tidak ditemukan' });
    if (req.method === 'DELETE') return produk.delete(id) ? kirim(res, 204) : kirim(res, 404, { pesan: 'Produk tidak ditemukan' });
    return kirim(res, 405, { pesan: 'Metode tidak diizinkan' });
});

server.listen(0, async () => {
    const dasar = 'http://127.0.0.1:' + server.address().port + '/api/v1/produk';
    for (const [metode, jalur] of [['GET', ''], ['GET', '/1'], ['GET', '/9'], ['DELETE', '/1'], ['DELETE', '/1'], ['PATCH', '/1']]) {
        const r = await fetch(dasar + jalur, { method: metode });
        const teks = await r.text();
        console.log((metode + ' /produk' + jalur).padEnd(18), r.status, teks.slice(0, 60));
    }
    server.close();
});`, lang: 'javascript', run: true, caption: '404 untuk sumber daya yang tak ada, 204 tanpa isi untuk hapus yang berhasil, 405 untuk metode yang tak didukung. Klien dapat bergantung pada kode status, bukan menebak dari teks pesan.' },
            { h2: 'Pembuatan versi dan keamanan API' },
            { ul: ['<b>Versi di URL</b> (/api/v1/...) agar perubahan yang merusak dapat dirilis sebagai v2 tanpa memutus klien lama.', '<b>Autentikasi token</b> (Sanctum atau OAuth lewat Passport), dan <b>otorisasi</b> per sumber daya (policy).', '<b>Pembatasan laju</b> (rate limiting) dengan middleware <code>throttle</code> untuk mencegah penyalahgunaan: respons 429.', '<b>HTTPS saja</b>, dan jangan menaruh token di URL.', '<b>Dokumentasi</b>: OpenAPI/Swagger (misalnya Scribe atau Scramble) agar tim front-end tahu kontraknya.', '<b>CORS</b> dikonfigurasi di config/cors.php untuk asal klien yang sah saja.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Status yang tepat setelah membuat sumber daya baru?', options: ['201 Created', '200 OK', '204 No Content'], answer: 0, why: 'POST yang berhasil membuat sumber daya.' }, { q: 'Fungsi API Resource?', options: ['Mengontrol bentuk JSON yang keluar', 'Membuat tabel', 'Mengamankan server'], answer: 0, why: 'Memisahkan struktur basis data dari kontrak API.' }, { q: 'Status 422 berarti...', options: ['Validasi gagal', 'Tidak ditemukan', 'Galat server'], answer: 0, why: 'Entitas tidak dapat diproses.' }] },
            { exercise: [['Rancang endpoint untuk mengelola komentar pada produk.', 'GET/POST /api/v1/produk/{id}/komentar, DELETE /api/v1/komentar/{id}; rute bersarang untuk koleksi milik induk.'], ['Mengapa mengembalikan model langsung dari controller berisiko?', 'Setiap kolom (termasuk yang sensitif) ikut keluar dan klien terikat pada struktur tabel; gunakan API Resource.'], ['Apa gunanya whenLoaded pada Resource?', 'Menyertakan relasi hanya bila sudah dimuat, sehingga tidak memicu N+1 diam-diam.'], ['Kapan paginasi kursor lebih baik daripada offset?', 'Untuk daftar sangat besar atau yang sering berubah: offset besar lambat dan dapat melewatkan atau menggandakan baris saat data berubah.']] },
            { summary: ['REST: URL kata benda jamak, metode HTTP sebagai aksi, stateless, status code bermakna.', 'apiResource dan API Resource menghasilkan rute CRUD dan JSON yang dikontrol; whenLoaded menghindari N+1.', 'Paginasi, filter, dan urutan dibatasi daftar yang diizinkan; format galat konsisten.', 'Versi API, token (Sanctum), rate limiting, HTTPS, CORS, dan dokumentasi OpenAPI.'] },
        ],
        faq: [['Apa bedanya PUT dan PATCH?', 'PUT mengganti seluruh sumber daya; PATCH mengubah sebagian. Banyak API memakai PATCH untuk pembaruan sebagian.'], ['Haruskah memakai GraphQL?', 'REST cukup untuk sebagian besar kasus; GraphQL berguna saat klien sangat beragam dan membutuhkan bentuk data fleksibel, dengan biaya kompleksitas tambahan.'], ['Bagaimana menguji API?', 'Tes fitur Laravel dengan getJson/postJson dan asersi assertStatus dan assertJsonStructure; secara manual dengan Postman, Insomnia, atau curl.']],
        sources: [['Laravel: Eloquent API Resources', 'https://laravel.com/docs/eloquent-resources'], ['Laravel: Routing (apiResource)', 'https://laravel.com/docs/controllers#api-resource-routes'], ['MDN: HTTP response status codes', 'https://developer.mozilla.org/docs/Web/HTTP/Reference/Status'], ['Microsoft: RESTful web API design', 'https://learn.microsoft.com/azure/architecture/best-practices/api-design']],
    },

    {
        slug: 'autentikasi-laravel-sanctum-session-vs-token-dan-hash-password',
        title: 'Autentikasi Laravel: Session vs Token, Sanctum, dan Hash',
        description: 'Pahami autentikasi di Laravel: perbedaan session dan token, Laravel Sanctum untuk SPA dan API, hashing kata sandi dengan bcrypt atau Argon2, login, logout, dan praktik aman.',
        date: D, category: C, level: 'Menengah', tags: ['autentikasi Laravel', 'Sanctum', 'hash password', 'session', 'token API'], cta: 'jasa',
        prereq: ['dasar Laravel', 'REST API', 'validasi'],
        lead: 'Autentikasi menjawab "siapa Anda?" dan otorisasi menjawab "apa yang boleh Anda lakukan?". Di Laravel keduanya sudah tersedia dengan baik, tetapi Anda tetap perlu memahami pilihan di baliknya: sesi atau token, bagaimana kata sandi disimpan, dan apa yang terjadi saat seseorang login. Kesalahan di sini adalah kesalahan paling mahal.',
        body: [
            { objectives: ['membedakan autentikasi dan otorisasi', 'membedakan autentikasi berbasis sesi dan token serta kapan memakainya', 'memakai Sanctum untuk SPA dan API token', 'memahami hashing kata sandi dan mengapa bcrypt/Argon2 dipakai', 'menerapkan praktik aman: pembatasan percobaan, MFA, dan penyimpanan token'] },
            NOTE_PHP,
            { h2: 'Sesi atau token' },
            { table: { head: ['', 'Sesi (cookie)', 'Token (Bearer)'], rows: [['Cara kerja', 'Server menyimpan sesi; browser menyimpan cookie berisi ID sesi', 'Klien menyimpan token dan mengirimnya di header Authorization'], ['Cocok untuk', 'Aplikasi web biasa (Blade) dan SPA di domain yang sama', 'Aplikasi seluler, layanan lain, klien pihak ketiga'], ['Pencabutan', 'Hapus sesi di server', 'Hapus token di server (bila disimpan) atau tunggu kedaluwarsa'], ['Ancaman utama', 'CSRF (dicegah token CSRF dan SameSite)', 'Token bocor; XSS bila disimpan di tempat yang dapat dibaca JavaScript'], ['Di Laravel', 'Guard web (bawaan)', 'Sanctum token atau Passport (OAuth2)']] } },
            { h2: 'Hash kata sandi: aturan yang tidak boleh dilanggar' },
            { callout: 'Kata sandi <b>tidak boleh</b> disimpan sebagai teks biasa, dienkripsi (yang dapat dibalik), atau di-hash dengan MD5/SHA-1/SHA-256 polos. Gunakan fungsi hash kata sandi yang lambat dan bergaram: <b>bcrypt</b> atau <b>Argon2</b>. Laravel melakukannya lewat <code>Hash::make()</code> dan <code>Hash::check()</code>.', kind: 'warn', title: 'Wajib' },
            { code: php`<?php
use Illuminate\Support\Facades\Hash;

$hash = Hash::make('rahasia-saya');                  // bcrypt bawaan; garam acak otomatis tertanam di hasil
// $2y$12$kQ...  (algoritma, biaya, garam, hash)

Hash::check('rahasia-saya', $hash);                  // true
Hash::check('salah', $hash);                         // false
Hash::needsRehash($hash);                            // true bila biaya/algoritma di konfigurasi sudah dinaikkan

// config/hashing.php atau .env: BCRYPT_ROUNDS=12 ; atau driver 'argon2id'
// Model User sudah memakai cast 'password' => 'hashed' sehingga nilai otomatis di-hash saat diisi.`, lang: 'php' },
            { code: py`import hashlib, hmac, os, time

# Mengapa hash harus LAMBAT: penyerang yang memiliki basis data bocor mencoba tebakan massal.
def hash_cepat(sandi):                                           # buruk: SHA-256 polos
    return hashlib.sha256(sandi.encode()).hexdigest()

def hash_lambat(sandi, garam, putaran=200_000):                  # baik: PBKDF2 (konsep sama dengan bcrypt/Argon2)
    return hashlib.pbkdf2_hmac("sha256", sandi.encode(), garam, putaran).hex()

garam = os.urandom(16)
t0 = time.perf_counter()
for i in range(20_000): hash_cepat("tebakan" + str(i))
cepat = (time.perf_counter() - t0) / 20_000
t0 = time.perf_counter()
for i in range(5): hash_lambat("tebakan" + str(i), garam)
lambat = (time.perf_counter() - t0) / 5

print(f"SHA-256 polos : {cepat * 1e6:8.2f} mikrodetik per tebakan  -> {1 / cepat:>12,.0f} tebakan/detik per inti")
print(f"PBKDF2 lambat : {lambat * 1e6:8.0f} mikrodetik per tebakan  -> {1 / lambat:>12,.0f} tebakan/detik per inti")
print(f"penyerang {lambat / cepat:,.0f}x lebih lambat dengan hash yang tepat")

# garam membuat sandi yang sama menghasilkan hash berbeda
print(hash_lambat("password1", os.urandom(16), 1000) == hash_lambat("password1", os.urandom(16), 1000))`, lang: 'python', run: true, caption: 'Perbedaan ribuan kali lipat itulah yang membuat serangan tebak massal pada basis data bocor menjadi tidak praktis. Bcrypt dan Argon2 bekerja dengan prinsip serupa dan dapat dinaikkan biayanya seiring perangkat keras bertambah cepat.' },
            { h2: 'Memulai cepat: starter kit' },
            { code: '# Laravel 12: pilih starter kit saat laravel new (React, Vue, atau Livewire) untuk login, daftar, reset kata sandi\nlaravel new toko\n\n# Laravel 11 / proyek yang sudah ada: Breeze\ncomposer require laravel/breeze --dev\nphp artisan breeze:install\nphp artisan migrate', lang: 'bash', caption: 'Pakai starter kit alih-alih menulis autentikasi sendiri: ia sudah mencakup hash, throttle login, verifikasi surel, reset kata sandi, dan perlindungan CSRF yang teruji.' },
            { h2: 'Sanctum untuk API' },
            { code: php`<?php
// php artisan install:api  (memasang Sanctum). Model User memakai trait HasApiTokens.
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

// POST /api/login  -> menerbitkan token
Route::post('/login', function (Request $request) {
    $data = $request->validate(['surel' => 'required|email', 'sandi' => 'required']);

    $user = User::where('email', $data['surel'])->first();
    if (! $user || ! Hash::check($data['sandi'], $user->password)) {
        return response()->json(['pesan' => 'Surel atau kata sandi salah.'], 422);   // pesan sama untuk dua kasus
    }

    $token = $user->createToken('aplikasi-seluler', ['produk:baca'])->plainTextToken;
    return ['token' => $token];                  // tampilkan SEKALI; di basis data hanya hash-nya yang tersimpan
})->middleware('throttle:5,1');                  // maksimal 5 percobaan per menit

// Rute terlindungi
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/saya', fn (Request $r) => $r->user());
    Route::post('/logout', function (Request $r) {
        $r->user()->currentAccessToken()->delete();       // cabut token ini
        return response()->noContent();
    });
});

// klien: Authorization: Bearer 12|abcdef...`, lang: 'php', caption: 'Pesan galat yang sama untuk "surel tidak ada" dan "sandi salah" mencegah penyerang memeriksa surel mana yang terdaftar. Token memiliki kemampuan (abilities) agar hak akses dapat dibatasi.' },
            { h3: 'SPA di domain yang sama' },
            `Untuk SPA React/Vue yang satu domain induk dengan API, Sanctum menyediakan autentikasi sesi berbasis cookie (tanpa token yang disimpan di JavaScript): panggil <code>/sanctum/csrf-cookie</code>, lalu kirim kredensial ke endpoint login. Pendekatan ini lebih aman terhadap pencurian token lewat XSS.`,
            { h2: 'Praktik yang aman' },
            { w: 'checklist', title: 'Autentikasi yang aman', items: ['Kata sandi di-hash dengan bcrypt atau Argon2 (Hash::make), tidak pernah disimpan atau dicatat dalam teks biasa.', 'Login dibatasi lajunya (throttle) untuk menghambat tebak massal.', 'Pesan galat login tidak membedakan "surel tidak ada" dan "sandi salah".', 'Sesi diregenerasi setelah login (session()->regenerate()) untuk mencegah session fixation.', 'Cookie sesi bersifat Secure, HttpOnly, dan SameSite; situs berjalan di HTTPS.', 'Token memiliki kedaluwarsa dan kemampuan terbatas; dicabut saat logout atau dicurigai bocor.', 'Tersedia autentikasi dua langkah (2FA) untuk akun penting.', 'Reset kata sandi memakai tautan bertoken sekali pakai dengan masa berlaku singkat.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Fungsi yang tepat menyimpan kata sandi di Laravel?', options: ['Hash::make()', 'md5()', 'encrypt()'], answer: 0, why: 'Hash lambat bergaram, tidak dapat dibalik.' }, { q: 'Untuk aplikasi seluler yang memanggil API, umumnya dipakai...', options: ['Token (Sanctum)', 'Cookie sesi browser', 'Tanpa autentikasi'], answer: 0, why: 'Klien non-browser membawa token di header.' }, { q: 'Mengapa pesan galat login dibuat sama untuk dua kasus?', options: ['Mencegah enumerasi akun', 'Agar singkat', 'Aturan HTTP'], answer: 0, why: 'Penyerang tak dapat mengetahui surel mana yang terdaftar.' }] },
            { exercise: [['Mengapa kata sandi dienkripsi bukan pilihan yang baik dibanding di-hash?', 'Enkripsi dapat dibalik bila kunci bocor; hash satu arah sehingga sandi asli tidak dapat dipulihkan.'], ['Apa itu session fixation dan bagaimana mencegahnya?', 'Penyerang memaksakan ID sesi yang ia ketahui; cegah dengan meregenerasi ID sesi setelah login.'], ['Kapan memilih Sanctum token dibanding sesi untuk SPA?', 'Bila SPA berada di domain berbeda atau klien non-browser; untuk domain yang sama, sesi berbasis cookie lebih aman.'], ['Apa fungsi abilities pada token?', 'Membatasi apa yang dapat dilakukan token (misalnya hanya baca), menerapkan prinsip hak akses minimum.']] },
            { summary: ['Autentikasi: siapa Anda; otorisasi: apa yang boleh Anda lakukan.', 'Sesi cocok untuk web dan SPA satu domain; token (Sanctum) untuk seluler dan klien lain.', 'Hash kata sandi dengan bcrypt/Argon2 (lambat dan bergaram); jangan SHA polos atau enkripsi.', 'Gunakan starter kit, batasi laju login, regenerasi sesi, cookie aman, token berkemampuan terbatas, dan 2FA.'] },
        ],
        faq: [['Apa bedanya Sanctum dan Passport?', 'Sanctum ringan untuk SPA dan token pribadi; Passport mengimplementasikan OAuth2 penuh untuk skenario pihak ketiga yang kompleks.'], ['Bagaimana login dengan Google?', 'Laravel Socialite menyediakan OAuth untuk Google, GitHub, dan lainnya.'], ['Bagaimana menambah verifikasi surel?', 'Implementasikan MustVerifyEmail pada model User dan pakai middleware verified.']],
        sources: [['Laravel: Authentication', 'https://laravel.com/docs/authentication'], ['Laravel: Sanctum', 'https://laravel.com/docs/sanctum'], ['Laravel: Hashing', 'https://laravel.com/docs/hashing'], ['OWASP: Password Storage Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html']],
    },
];
