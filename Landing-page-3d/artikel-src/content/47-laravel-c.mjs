const D = '2026-10-30';
const C = 'Laravel & Backend';
const php = String.raw;
const jsx = String.raw;
const py = String.raw;
const js = String.raw;

const REF_LARAVEL = ['Laravel Documentation', 'https://laravel.com/docs'];
const NOTE_PHP = { callout: 'Kode PHP/Laravel di artikel ini mengikuti dokumentasi Laravel (versi 11 dan seterusnya, PHP 8.2 atau lebih baru). Bagian "cara kerja di balik layar" dijalankan sungguhan dengan Python atau JavaScript agar konsepnya dapat dibuktikan.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'tutorial-crud-laravel-lengkap-dari-migrasi-sampai-tampilan',
        title: 'Tutorial CRUD Laravel Lengkap: Migrasi sampai Tampilan',
        description: 'Tutorial CRUD Laravel dari nol: migrasi, model, resource controller, Form Request, view Blade, pesan sukses, paginasi, dan pencarian.',
        date: D, category: C, level: 'Pemula', tags: ['CRUD Laravel', 'tutorial Laravel', 'resource controller', 'Blade', 'Eloquent'], cta: 'jasa',
        prereq: ['dasar Laravel (routing, controller, Blade)', 'Eloquent dasar'],
        lead: 'CRUD (Create, Read, Update, Delete) adalah tulang punggung hampir semua aplikasi bisnis. Menguasai satu CRUD yang rapi di Laravel berarti Anda sudah dapat membangun sebagian besar halaman administrasi. Tutorial ini membangunnya dari awal dengan praktik yang benar: validasi, pesan, paginasi, pencarian, dan keamanan dasar.',
        body: [
            { objectives: ['membangun CRUD lengkap untuk satu entitas (produk)', 'memakai resource controller dan route model binding', 'memisahkan validasi dengan Form Request', 'menampilkan daftar dengan pencarian dan paginasi', 'menerapkan pesan flash, konfirmasi hapus, dan perlindungan CSRF'] },
            NOTE_PHP,
            { h2: 'Gambaran: tujuh rute standar' },
            { table: { head: ['Aksi', 'Metode & URL', 'Method controller', 'Nama rute'], rows: [['Daftar', 'GET /produk', 'index', 'produk.index'], ['Form baru', 'GET /produk/create', 'create', 'produk.create'], ['Simpan', 'POST /produk', 'store', 'produk.store'], ['Detail', 'GET /produk/{produk}', 'show', 'produk.show'], ['Form ubah', 'GET /produk/{produk}/edit', 'edit', 'produk.edit'], ['Perbarui', 'PUT/PATCH /produk/{produk}', 'update', 'produk.update'], ['Hapus', 'DELETE /produk/{produk}', 'destroy', 'produk.destroy']] } },
            { h2: 'Langkah 1: model, migrasi, dan factory' },
            { code: 'php artisan make:model Produk -mfr      # model + migrasi + factory + resource controller\nphp artisan make:request ProdukRequest', lang: 'bash' },
            { code: php`<?php
// database/migrations/xxxx_create_produk_table.php (bagian up)
Schema::create('produk', function (Blueprint $table) {
    $table->id();
    $table->string('kode', 20)->unique();
    $table->string('nama');
    $table->text('deskripsi')->nullable();
    $table->unsignedInteger('harga');
    $table->unsignedInteger('stok')->default(0);
    $table->timestamps();
    $table->index('nama');
});

// app/Models/Produk.php
class Produk extends Model
{
    use HasFactory;
    protected $table = 'produk';
    protected $fillable = ['kode', 'nama', 'deskripsi', 'harga', 'stok'];
}

// database/factories/ProdukFactory.php
public function definition(): array
{
    return [
        'kode'  => strtoupper(fake()->unique()->bothify('PRD-###??')),
        'nama'  => fake()->words(2, true),
        'harga' => fake()->numberBetween(5, 300) * 1000,
        'stok'  => fake()->numberBetween(0, 100),
    ];
}

// database/seeders/DatabaseSeeder.php  ->  Produk::factory()->count(40)->create();
// php artisan migrate --seed`, lang: 'php' },
            { h2: 'Langkah 2: rute dan Form Request' },
            { code: php`<?php
// routes/web.php
Route::resource('produk', ProdukController::class);

// app/Http/Requests/ProdukRequest.php (dipakai untuk store DAN update)
class ProdukRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        $produk = $this->route('produk');          // null saat membuat baru
        return [
            'kode'      => ['required', 'string', 'max:20', Rule::unique('produk', 'kode')->ignore($produk)],
            'nama'      => ['required', 'string', 'min:3', 'max:255'],
            'deskripsi' => ['nullable', 'string', 'max:2000'],
            'harga'     => ['required', 'integer', 'min:0'],
            'stok'      => ['required', 'integer', 'min:0'],
        ];
    }

    public function messages(): array
    {
        return ['kode.unique' => 'Kode produk sudah dipakai.'];
    }
}`, lang: 'php' },
            { h2: 'Langkah 3: controller' },
            { code: php`<?php
class ProdukController extends Controller
{
    public function index(Request $request)
    {
        $produk = Produk::query()
            ->when($request->filled('q'), fn ($q) => $q->where(function ($q) use ($request) {
                $kata = '%' . $request->string('q') . '%';
                $q->where('nama', 'like', $kata)->orWhere('kode', 'like', $kata);
            }))
            ->latest()
            ->paginate(10)
            ->withQueryString();                      // pertahankan ?q= saat pindah halaman

        return view('produk.index', compact('produk'));
    }

    public function create()
    {
        return view('produk.form', ['produk' => new Produk()]);
    }

    public function store(ProdukRequest $request)
    {
        Produk::create($request->validated());
        return redirect()->route('produk.index')->with('sukses', 'Produk berhasil ditambahkan.');
    }

    public function show(Produk $produk)
    {
        return view('produk.show', compact('produk'));
    }

    public function edit(Produk $produk)
    {
        return view('produk.form', compact('produk'));
    }

    public function update(ProdukRequest $request, Produk $produk)
    {
        $produk->update($request->validated());
        return redirect()->route('produk.index')->with('sukses', 'Produk berhasil diperbarui.');
    }

    public function destroy(Produk $produk)
    {
        $produk->delete();
        return redirect()->route('produk.index')->with('sukses', 'Produk dihapus.');
    }
}`, lang: 'php', caption: 'Pola Post/Redirect/Get: setelah menyimpan, selalu redirect. Bila langsung menampilkan view, memuat ulang halaman akan mengirim ulang form dan menggandakan data.' },
            { h2: 'Langkah 4: tampilan' },
            { code: '{{-- resources/views/produk/index.blade.php --}}\n@extends(\'layouts.app\')\n@section(\'isi\')\n<h1>Produk</h1>\n\n@if (session(\'sukses\'))\n    <p role="status" class="info">{{ session(\'sukses\') }}</p>\n@endif\n\n<form method="GET" action="{{ route(\'produk.index\') }}">\n    <input type="search" name="q" value="{{ request(\'q\') }}" placeholder="Cari nama atau kode" aria-label="Cari produk">\n    <button>Cari</button>\n    <a href="{{ route(\'produk.create\') }}">Tambah produk</a>\n</form>\n\n<table>\n    <thead><tr><th>Kode</th><th>Nama</th><th>Harga</th><th>Stok</th><th>Aksi</th></tr></thead>\n    <tbody>\n    @forelse ($produk as $p)\n        <tr>\n            <td>{{ $p->kode }}</td>\n            <td><a href="{{ route(\'produk.show\', $p) }}">{{ $p->nama }}</a></td>\n            <td>Rp{{ number_format($p->harga, 0, \',\', \'.\') }}</td>\n            <td>{{ $p->stok }}</td>\n            <td>\n                <a href="{{ route(\'produk.edit\', $p) }}">Ubah</a>\n                <form method="POST" action="{{ route(\'produk.destroy\', $p) }}" style="display:inline"\n                      onsubmit="return confirm(\'Hapus {{ $p->nama }}?\')">\n                    @csrf @method(\'DELETE\')\n                    <button type="submit">Hapus</button>\n                </form>\n            </td>\n        </tr>\n    @empty\n        <tr><td colspan="5">Tidak ada produk.</td></tr>\n    @endforelse\n    </tbody>\n</table>\n\n{{ $produk->links() }}\n@endsection', lang: 'html', caption: 'Penghapusan memakai form dengan @method("DELETE") karena browser hanya mengirim GET dan POST. Jangan menghapus lewat tautan GET: perayap atau prefetch dapat tanpa sengaja menghapus data.' },
            { code: '{{-- resources/views/produk/form.blade.php: dipakai bersama untuk tambah dan ubah --}}\n@extends(\'layouts.app\')\n@section(\'isi\')\n<h1>{{ $produk->exists ? \'Ubah\' : \'Tambah\' }} Produk</h1>\n\n<form method="POST" action="{{ $produk->exists ? route(\'produk.update\', $produk) : route(\'produk.store\') }}">\n    @csrf\n    @if ($produk->exists) @method(\'PUT\') @endif\n\n    @foreach ([\'kode\' => \'Kode\', \'nama\' => \'Nama\', \'harga\' => \'Harga\', \'stok\' => \'Stok\'] as $kolom => $label)\n        <div>\n            <label for="{{ $kolom }}">{{ $label }}</label>\n            <input id="{{ $kolom }}" name="{{ $kolom }}" value="{{ old($kolom, $produk->$kolom) }}"\n                   @error($kolom) aria-invalid="true" @enderror>\n            @error($kolom) <p role="alert">{{ $message }}</p> @enderror\n        </div>\n    @endforeach\n\n    <label for="deskripsi">Deskripsi</label>\n    <textarea id="deskripsi" name="deskripsi">{{ old(\'deskripsi\', $produk->deskripsi) }}</textarea>\n\n    <button type="submit">Simpan</button>\n</form>\n@endsection', lang: 'html', caption: 'old($kolom, $produk->$kolom): isian lama (setelah gagal validasi) diutamakan, jika tidak ada pakai nilai dari basis data. Satu form melayani dua aksi.' },
            { h2: 'Mengapa urutan pencarian seperti itu: peragaan paginasi dan pencarian' },
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE produk (id INTEGER PRIMARY KEY, kode TEXT, nama TEXT)")
db.executemany("INSERT INTO produk (kode, nama) VALUES (?, ?)",
               [(f"PRD-{i:03d}", n) for i, n in enumerate(["Kopi Gayo", "Kopi Toraja", "Teh Hijau", "Teh Hitam", "Gula Aren", "Kopi Arabika"] * 8, 1)])

def halaman(q, nomor, per=10):
    kata = f"%{q}%"
    total = db.execute("SELECT COUNT(*) FROM produk WHERE nama LIKE ? OR kode LIKE ?", (kata, kata)).fetchone()[0]
    baris = db.execute("SELECT kode, nama FROM produk WHERE nama LIKE ? OR kode LIKE ? ORDER BY id DESC LIMIT ? OFFSET ?",
                       (kata, kata, per, (nomor - 1) * per)).fetchall()
    return total, baris

for q, n in [("", 1), ("Kopi", 1), ("Kopi", 3), ("xyz", 1)]:
    total, baris = halaman(q, n)
    print(f"q={q!r:7} halaman {n}: total {total:>2}, tampil {len(baris)} baris", [b[0] for b in baris[:3]])`, lang: 'python', run: true, caption: 'Pencarian dan paginasi di Laravel menghasilkan dua query seperti ini: COUNT untuk total halaman dan SELECT dengan LIMIT/OFFSET untuk halaman aktif. Pengelompokan OR dalam kurung penting agar filter lain tidak bocor.' },
            { h2: 'Tes cepat untuk CRUD' },
            { code: php`<?php
public function test_crud_produk(): void
{
    $user = User::factory()->create();
    $this->actingAs($user);

    $this->post('/produk', ['kode' => 'PRD-1', 'nama' => 'Kopi', 'harga' => 20000, 'stok' => 5])
         ->assertRedirect('/produk');
    $this->assertDatabaseHas('produk', ['kode' => 'PRD-1']);

    $produk = Produk::first();
    $this->put('/produk/' . $produk->id, ['kode' => 'PRD-1', 'nama' => 'Kopi Gayo', 'harga' => 25000, 'stok' => 5]);
    $this->assertDatabaseHas('produk', ['nama' => 'Kopi Gayo']);

    $this->delete('/produk/' . $produk->id);
    $this->assertDatabaseMissing('produk', ['id' => $produk->id]);
}`, lang: 'php' },
            { w: 'checklist', title: 'CRUD yang rapi', items: ['Validasi di Form Request; hanya validated() yang disimpan.', 'Setelah simpan/ubah/hapus selalu redirect (Post/Redirect/Get) dengan pesan flash.', 'Hapus lewat DELETE dengan @csrf dan @method, bukan tautan GET.', 'Daftar dipaginasi; pencarian memakai withQueryString.', 'Hanya pengguna berhak yang boleh mengubah/menghapus (middleware auth, policy).', 'Kolom pencarian dan filter berindeks bila tabel besar.', 'Ada tes untuk alur tambah, ubah, hapus, dan kasus validasi gagal.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa redirect setelah store()?', options: ['Mencegah pengiriman ulang form saat halaman dimuat ulang', 'Agar lebih cepat', 'Wajib oleh HTTP'], answer: 0, why: 'Pola Post/Redirect/Get.' }, { q: 'Cara browser mengirim DELETE dari form HTML?', options: ['POST dengan @method("DELETE")', 'Langsung method="DELETE"', 'Tautan <a>'], answer: 0, why: 'HTML hanya mendukung GET dan POST.' }, { q: 'Fungsi withQueryString() pada paginasi?', options: ['Mempertahankan parameter pencarian di tautan halaman', 'Menyimpan query ke basis data', 'Mempercepat query'], answer: 0, why: 'Agar ?q=kopi tidak hilang saat pindah halaman.' }] },
            { exercise: [['Tambahkan kolom "kategori" ke CRUD dengan pilihan dropdown dari tabel kategori.', 'Migrasi kategori_id (foreignId), relasi belongsTo, aturan exists:kategori,id, dan <select> berisi kategori di form.'], ['Mengapa tombol hapus sebaiknya memakai konfirmasi?', 'Hapus tidak dapat dibatalkan; konfirmasi (atau soft delete) mencegah kesalahan klik.'], ['Bagaimana menambah urutan berdasarkan harga lewat query string dengan aman?', 'Ambil ?urut hanya bila termasuk daftar kolom yang diizinkan, lalu orderBy kolom itu.'], ['Apa gunanya route model binding pada show(Produk $produk)?', 'Laravel mengambil model dari id di URL dan memberi 404 otomatis bila tidak ada.']] },
            { summary: ['CRUD = tujuh rute resource, satu controller, satu Form Request, dan dua view (daftar dan form).', 'Gunakan validated(), redirect dengan pesan flash, DELETE dengan @csrf dan @method.', 'Paginasi dan pencarian: withQueryString dan pengelompokan kondisi OR.', 'Lengkapi dengan otorisasi dan tes.'] },
        ],
        faq: [['Apakah ada alat yang membuat CRUD otomatis?', 'Ya: Filament, Laravel Nova, dan Backpack membangun panel admin CRUD dengan cepat. Memahami CRUD manual tetap penting sebagai dasar.'], ['Bagaimana dengan upload gambar produk?', 'Tambahkan input file, validasi image dan ukuran, simpan dengan store(), dan simpan path di kolom; hapus berkas lama saat diganti.'], ['Kapan memakai soft delete?', 'Saat data harus dapat dipulihkan atau dibutuhkan untuk audit; gunakan trait SoftDeletes dan kolom deleted_at.']],
        sources: [['Laravel: Controllers (Resource Controllers)', 'https://laravel.com/docs/controllers#resource-controllers'], ['Laravel: Pagination', 'https://laravel.com/docs/pagination'], ['Laravel: Form Request Validation', 'https://laravel.com/docs/validation#form-request-validation'], REF_LARAVEL],
    },

    {
        slug: 'relasi-eloquent-one-to-many-many-to-many-dan-polymorphic',
        title: 'Relasi Eloquent: One-to-Many, Many-to-Many, Polymorphic',
        description: 'Pelajari relasi Eloquent: hasMany, belongsToMany dengan pivot, hasManyThrough, dan polymorphic, lengkap dengan skema SQL dan peragaan join.',
        date: D, category: C, level: 'Menengah', tags: ['relasi Eloquent', 'many-to-many', 'polymorphic', 'pivot', 'hasManyThrough'], cta: 'jasa',
        prereq: ['Eloquent dasar', 'SQL JOIN'],
        lead: 'Data di dunia nyata saling terhubung: pengguna punya pesanan, pesanan punya banyak produk, produk punya banyak tag, komentar bisa milik artikel atau video. Eloquent memetakan hubungan itu menjadi method yang terbaca seperti kalimat. Namun di balik setiap method ada skema tabel dan SQL tertentu; memahaminya membuat Anda merancang basis data dengan benar sejak awal.',
        body: [
            { objectives: ['memilih jenis relasi yang tepat dari deskripsi kebutuhan', 'merancang skema (kunci asing dan tabel pivot) untuk setiap relasi', 'menulis method relasi dan memakainya (termasuk attach/sync pada pivot)', 'memahami hasManyThrough dan relasi polimorfik', 'menjaga performa dengan eager loading dan withCount'] },
            NOTE_PHP,
            { h2: 'Peta relasi' },
            { table: { head: ['Hubungan', 'Skema', 'Method', 'Contoh'], rows: [['Satu-ke-satu', 'profil.user_id (unik)', 'hasOne / belongsTo', 'User ↔ Profil'], ['Satu-ke-banyak', 'pesanan.user_id', 'hasMany / belongsTo', 'User → banyak Pesanan'], ['Banyak-ke-banyak', 'tabel pivot dengan dua kunci asing', 'belongsToMany', 'Produk ↔ Tag'], ['Has-many-through', 'melalui tabel perantara', 'hasManyThrough', 'Negara → Pengguna → Pesanan'], ['Polimorfik', 'commentable_id + commentable_type', 'morphMany / morphTo', 'Komentar → Artikel atau Video']] } },
            { h2: 'Satu-ke-banyak dan satu-ke-satu' },
            { code: php`<?php
class User extends Model
{
    public function pesanan(): HasMany   { return $this->hasMany(Pesanan::class); }
    public function profil(): HasOne     { return $this->hasOne(Profil::class); }
}
class Pesanan extends Model
{
    public function user(): BelongsTo    { return $this->belongsTo(User::class); }
}

$user->pesanan;                              // koleksi Pesanan (properti: menjalankan query sekali, lalu di-cache pada objek)
$user->pesanan()->where('status', 'baru')->get();    // method: kembalikan builder untuk query lanjutan
$user->pesanan()->create(['total' => 50000]);        // kunci asing diisi otomatis
User::has('pesanan', '>=', 3)->get();                // pengguna dengan minimal 3 pesanan
User::whereDoesntHave('pesanan')->get();             // pengguna yang belum pernah memesan`, lang: 'php' },
            { h2: 'Banyak-ke-banyak dengan tabel pivot' },
            `Satu produk bisa memiliki banyak tag, dan satu tag dipakai banyak produk. Relasi ini tidak bisa dinyatakan dengan satu kunci asing; dibutuhkan tabel perantara (pivot) yang menyimpan pasangan.`,
            { code: php`<?php
// migrasi pivot: konvensi nama = dua nama tabel tunggal berurut abjad: produk_tag
Schema::create('produk_tag', function (Blueprint $table) {
    $table->foreignId('produk_id')->constrained('produk')->cascadeOnDelete();
    $table->foreignId('tag_id')->constrained('tag')->cascadeOnDelete();
    $table->primary(['produk_id', 'tag_id']);              // mencegah pasangan ganda
    $table->timestamps();                                  // bila pakai ->withTimestamps()
});

class Produk extends Model
{
    public function tag(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'produk_tag')->withTimestamps();
    }
}
class Tag extends Model
{
    public function produk(): BelongsToMany { return $this->belongsToMany(Produk::class, 'produk_tag'); }
}

$produk->tag()->attach([1, 2]);                // tambah pasangan
$produk->tag()->detach(2);                     // lepas
$produk->tag()->sync([1, 3, 4]);               // jadikan PERSIS sama dengan daftar ini (tambah/hapus seperlunya)
$produk->tag()->toggle([3, 5]);                // balik: ada -> lepas, tidak ada -> tambah
Produk::whereHas('tag', fn ($q) => $q->where('nama', 'organik'))->get();`, lang: 'php', caption: 'sync() sangat berguna untuk form kotak centang: kirim daftar ID terpilih dan Laravel menghitung selisihnya.' },
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE produk (id INTEGER PRIMARY KEY, nama TEXT);
CREATE TABLE tag (id INTEGER PRIMARY KEY, nama TEXT);
CREATE TABLE produk_tag (produk_id INT, tag_id INT, PRIMARY KEY (produk_id, tag_id));
INSERT INTO produk VALUES (1,'Kopi Gayo'),(2,'Teh Hijau'),(3,'Gula Aren');
INSERT INTO tag VALUES (1,'organik'),(2,'lokal'),(3,'diskon');
INSERT INTO produk_tag VALUES (1,1),(1,2),(2,1),(3,2),(3,3);
""")
q = lambda s, a=(): db.execute(s, a).fetchall()

# $produk->tag  (belongsToMany): JOIN lewat pivot
print("tag milik Kopi Gayo:", q("SELECT t.nama FROM tag t JOIN produk_tag pt ON pt.tag_id = t.id WHERE pt.produk_id = 1"))
# Produk::whereHas('tag', nama = 'organik')
print("produk bertag organik:", q("SELECT p.nama FROM produk p WHERE EXISTS (SELECT 1 FROM produk_tag pt JOIN tag t ON t.id = pt.tag_id WHERE pt.produk_id = p.id AND t.nama = 'organik')"))
# withCount('tag')
print("jumlah tag per produk:", q("SELECT p.nama, (SELECT COUNT(*) FROM produk_tag pt WHERE pt.produk_id = p.id) FROM produk p"))

# sync([1,3]) untuk produk 1: hitung selisih
ada = {r[0] for r in q("SELECT tag_id FROM produk_tag WHERE produk_id = 1")}
target = {1, 3}
print("sync -> hapus:", sorted(ada - target), "tambah:", sorted(target - ada))

# kunci primer gabungan mencegah ganda
try: db.execute("INSERT INTO produk_tag VALUES (1,1)")
except sqlite3.IntegrityError as e: print("pasangan ganda ditolak:", e)`, lang: 'python', run: true, caption: 'Setiap method relasi Eloquent adalah JOIN atau subquery yang sudah Anda kenal. Memahami SQL-nya membantu merancang indeks dan mendeteksi query yang tidak efisien.' },
            { h2: 'Has-many-through dan polimorfik' },
            { code: php`<?php
// Negara -> Pengguna -> Pesanan : ambil semua pesanan sebuah negara tanpa join manual
class Negara extends Model
{
    public function pesanan(): HasManyThrough
    {
        return $this->hasManyThrough(Pesanan::class, User::class);   // melalui users.negara_id dan pesanan.user_id
    }
}

// Polimorfik: Komentar dapat milik Artikel atau Video
// migrasi: $table->morphs('commentable');   -> commentable_id, commentable_type (+ indeks)
class Komentar extends Model
{
    public function commentable(): MorphTo { return $this->morphTo(); }
}
class Artikel extends Model
{
    public function komentar(): MorphMany { return $this->morphMany(Komentar::class, 'commentable'); }
}
class Video extends Model
{
    public function komentar(): MorphMany { return $this->morphMany(Komentar::class, 'commentable'); }
}

$artikel->komentar()->create(['isi' => 'Bagus!']);
$komentar->commentable;      // Artikel atau Video, sesuai commentable_type

// Disarankan: pemetaan alias agar kolom tipe tidak berisi nama kelas PHP lengkap
// Relation::enforceMorphMap(['artikel' => Artikel::class, 'video' => Video::class]);`, lang: 'php', caption: 'Polimorfik menghemat tabel tetapi tidak dapat memakai kunci asing sungguhan di basis data (karena tabel tujuan bervariasi); integritas dijaga oleh aplikasi. Bila hanya dua atau tiga tipe, tabel terpisah kadang lebih sederhana.' },
            { h2: 'Menjaga performa relasi' },
            { code: php`<?php
// N+1 pada relasi bersarang
$pesanan = Pesanan::with(['user', 'item.produk'])->latest()->paginate(20);   // 4 query, berapa pun jumlah baris

// Hanya hitungan atau agregat, tanpa memuat relasi
$kategori = Kategori::withCount('produk')->withSum('produk', 'stok')->get();

// Muat relasi hanya bila diperlukan, setelah koleksi ada
$pesanan->load('user');                          // lazy eager loading
$produk->loadMissing('tag');

// Batasi kolom pada relasi: 'user:id,nama' (sertakan kunci yang diperlukan)
Pesanan::with('user:id,nama')->get();

// Mencegah N+1 secara otomatis di non-produksi:
// Model::preventLazyLoading(! app()->isProduction());`, lang: 'php' },
            { w: 'choose', title: 'Relasi apa yang tepat?', questions: [{ q: 'Satu pengguna memiliki banyak alamat; setiap alamat hanya milik satu pengguna.', options: [{ t: 'hasMany / belongsTo', add: { a: 3 } }, { t: 'belongsToMany', add: { b: 3 } }, { t: 'morphMany', add: { c: 3 } }] }, { q: 'Satu siswa mengikuti banyak kelas; satu kelas diikuti banyak siswa.', options: [{ t: 'hasMany / belongsTo', add: { a: 3 } }, { t: 'belongsToMany (pivot)', add: { b: 3 } }, { t: 'morphMany', add: { c: 3 } }] }, { q: 'Komentar bisa ditulis pada artikel, produk, atau video.', options: [{ t: 'hasMany / belongsTo', add: { a: 3 } }, { t: 'belongsToMany', add: { b: 3 } }, { t: 'morphTo / morphMany', add: { c: 3 } }] }], results: { a: { title: 'Condong ke satu-ke-banyak', text: 'Jawaban Anda banyak memilih hasMany/belongsTo. Pastikan banyak-ke-banyak memakai pivot, bukan kunci asing tunggal.' }, b: { title: 'Condong ke banyak-ke-banyak', text: 'Anda sudah terbiasa dengan pivot. Periksa lagi kapan cukup satu-ke-banyak, dan kapan polimorfik lebih ringkas.' }, c: { title: 'Condong ke polimorfik', text: 'Jawaban Anda banyak memilih relasi polimorfik. Ingat bahwa kasus dua tipe sering lebih sederhana dengan dua tabel terpisah.' } } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Banyak-ke-banyak memerlukan...', options: ['Tabel pivot', 'Satu kunci asing', 'Kolom JSON'], answer: 0, why: 'Menyimpan pasangan kedua ID.' }, { q: 'sync([1,3]) pada pivot akan...', options: ['Membuat pivot persis berisi 1 dan 3', 'Menambah 1 dan 3 saja', 'Menghapus semuanya'], answer: 0, why: 'Menambah dan melepas seperlunya.' }, { q: 'Kekurangan relasi polimorfik?', options: ['Tidak bisa memakai kunci asing basis data sungguhan', 'Terlalu lambat', 'Tidak didukung'], answer: 0, why: 'Integritas dijaga aplikasi.' }] },
            { exercise: [['Rancang skema untuk "dokter melayani banyak pasien dan pasien dilayani banyak dokter" dengan tanggal kunjungan.', 'Tabel pivot kunjungan (dokter_id, pasien_id, tanggal) dengan belongsToMany dan withPivot("tanggal").'], ['Tulis query: produk yang memiliki tag "diskon" dan tag "lokal" sekaligus.', 'whereHas("tag", ...) dua kali berantai, atau whereHas dengan whereIn dan having count; contoh: Produk::whereHas("tag", fn($q)=>$q->where("nama","diskon"))->whereHas("tag", fn($q)=>$q->where("nama","lokal"))'], ['Mengapa pivot diberi kunci primer gabungan?', 'Mencegah pasangan yang sama tercatat dua kali dan mempercepat pencarian.'], ['Bagaimana menghitung jumlah pesanan setiap pengguna tanpa N+1?', 'User::withCount("pesanan")->get() dan baca $user->pesanan_count.']] },
            { summary: ['Pilih relasi dari bentuk datanya: 1-1, 1-N, M-N (pivot), through, polimorfik.', 'Setiap relasi punya skema kunci asing yang jelas; pivot butuh dua kunci asing dan kunci primer gabungan.', 'attach, detach, sync, toggle mengelola pivot; whereHas dan withCount untuk query relasi.', 'Eager loading (with) dan preventLazyLoading menjaga performa.'] },
        ],
        faq: [['Mengapa nama tabel pivot harus berurut abjad?', 'Itu konvensi Laravel (produk_tag); Anda bebas memakai nama lain bila menyebutkannya sebagai argumen kedua belongsToMany.'], ['Bagaimana menyimpan atribut tambahan pada pivot?', 'Tambah kolom di pivot, gunakan withPivot("kolom") di relasi, dan pakai $model->pivot->kolom; atau buat model pivot kustom dengan using().'], ['Kapan membuat model untuk pivot?', 'Bila pivot punya logika atau relasi sendiri (misalnya ItemPesanan dengan harga dan jumlah); itu sering menunjukkan bahwa pivot sebenarnya entitas tersendiri.']],
        sources: [['Laravel: Eloquent Relationships', 'https://laravel.com/docs/eloquent-relationships'], ['Laravel: Polymorphic Relationships', 'https://laravel.com/docs/eloquent-relationships#polymorphic-relationships'], ['SQLite: Query Language', 'https://www.sqlite.org/lang.html'], ['Use The Index, Luke: Joins', 'https://use-the-index-luke.com/sql/join']],
    },

    {
        slug: 'deploy-laravel-ke-vps-nginx-php-fpm-dan-konfigurasi-produksi',
        title: 'Deploy Laravel ke VPS: Nginx, PHP-FPM, dan Produksi',
        description: 'Deploy Laravel ke VPS: Nginx, PHP-FPM, izin berkas, .env produksi, migrasi, HTTPS Certbot, worker antrean, dan alur rilis yang aman.',
        date: D, category: C, level: 'Menengah', tags: ['deploy Laravel', 'VPS', 'Nginx', 'PHP-FPM', 'produksi'], cta: 'jasa',
        prereq: ['dasar Laravel', 'command line Linux', 'Git'],
        lead: 'Aplikasi yang berjalan baik di laptop belum tentu selamat di internet. Deploy adalah titik temu antara kode, server, dan keamanan, dan di sanalah banyak proyek tersandung: halaman putih, galat izin, atau lebih buruk, .env yang terbuka. Panduan ini membawa Anda melalui deploy yang benar ke VPS Ubuntu dengan Nginx dan PHP-FPM, plus alur rilis yang dapat diulang.',
        body: [
            { objectives: ['menyiapkan server: PHP, Nginx, basis data, dan pengguna khusus', 'mengonfigurasi Nginx yang mengarah ke public/ dengan aman', 'mengatur izin berkas dan .env produksi', 'menjalankan migrasi, optimasi, worker antrean, dan scheduler', 'memasang HTTPS dan menyusun alur rilis yang dapat diulang'] },
            NOTE_PHP,
            { callout: 'Perintah di bawah memodifikasi server nyata. Cobalah dulu di VPS percobaan atau mesin virtual, jangan di server produksi yang sedang dipakai. Nama domain, jalur, dan versi PHP adalah contoh; sesuaikan dengan lingkungan Anda.', kind: 'warn', title: 'Hati-hati' },
            { h2: 'Pilihan hosting' },
            { table: { head: ['Pilihan', 'Kendali', 'Upaya', 'Cocok untuk'], rows: [['Shared hosting (cPanel)', 'Rendah', 'Rendah', 'Proyek kecil; sering terkendala akses SSH, antrean, versi PHP'], ['VPS (DigitalOcean, Vultr, Hetzner, IDCloudHost, Biznet Gio, dll.)', 'Tinggi', 'Sedang', 'Kebanyakan aplikasi Laravel; Anda mengelola server'], ['Platform terkelola (Laravel Forge/Cloud, Ploi)', 'Tinggi', 'Rendah', 'Tim yang ingin fokus ke aplikasi; biaya langganan'], ['Kontainer (Docker, Kubernetes)', 'Sangat tinggi', 'Tinggi', 'Skala besar dan tim dengan DevOps']] } },
            { h2: 'Langkah 1: siapkan server (Ubuntu LTS)' },
            { code: '# Masuk sebagai root pertama kali, lalu buat pengguna biasa dan kunci SSH\nadduser deploy && usermod -aG sudo deploy\n\n# Firewall: hanya SSH, HTTP, HTTPS\nufw allow OpenSSH && ufw allow "Nginx Full" && ufw enable\n\n# Paket yang dibutuhkan (versi PHP sesuai kebutuhan Laravel Anda, mis. 8.3)\napt update && apt install -y nginx git unzip \\\n  php8.3-fpm php8.3-cli php8.3-mysql php8.3-mbstring php8.3-xml php8.3-curl php8.3-zip php8.3-bcmath php8.3-intl \\\n  mysql-server redis-server supervisor\n\n# Composer\ncurl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer', lang: 'bash', caption: 'Nonaktifkan login SSH dengan kata sandi dan root setelah kunci SSH berfungsi. Perbarui server secara berkala.' },
            { h2: 'Langkah 2: ambil kode dan siapkan aplikasi' },
            { code: 'cd /var/www\nsudo mkdir toko && sudo chown deploy:deploy toko\ngit clone git@github.com:akun/toko.git toko && cd toko\n\ncomposer install --no-dev --optimize-autoloader\ncp .env.example .env && nano .env        # isi nilai produksi (lihat di bawah)\nphp artisan key:generate\nphp artisan migrate --force             # --force wajib di produksi\nphp artisan storage:link\nphp artisan optimize                    # cache config, route, view, event\n\n# Izin: web server hanya perlu menulis ke storage dan bootstrap/cache\nsudo chown -R deploy:www-data storage bootstrap/cache\nsudo chmod -R ug+rwX storage bootstrap/cache', lang: 'bash' },
            { code: '# .env produksi (contoh)\nAPP_NAME="Toko"\nAPP_ENV=production\nAPP_DEBUG=false                       # WAJIB false\nAPP_URL=https://toko.contoh.id\n\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_DATABASE=toko\nDB_USERNAME=toko_app                  # akun khusus dengan hak terbatas, bukan root\nDB_PASSWORD=kata-sandi-acak-yang-panjang\n\nCACHE_STORE=redis\nSESSION_DRIVER=redis\nQUEUE_CONNECTION=redis\nSESSION_SECURE_COOKIE=true\nLOG_LEVEL=warning', lang: 'bash' },
            { h2: 'Langkah 3: Nginx' },
            { code: 'server {\n    listen 80;\n    server_name toko.contoh.id;\n    root /var/www/toko/public;          # PENTING: public/, bukan akar proyek\n\n    add_header X-Content-Type-Options "nosniff";\n    add_header X-Frame-Options "SAMEORIGIN";\n    add_header Referrer-Policy "strict-origin-when-cross-origin";\n\n    index index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;   # semua rute dilayani Laravel\n    }\n\n    location ~ \\.php$ {\n        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;\n        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n\n    location ~ /\\.(?!well-known).* {      # blokir berkas tersembunyi (.env, .git)\n        deny all;\n    }\n\n    client_max_body_size 10M;             # batas unggahan\n}\n\n# Aktifkan:\n# sudo ln -s /etc/nginx/sites-available/toko /etc/nginx/sites-enabled/\n# sudo nginx -t && sudo systemctl reload nginx', lang: 'text', caption: 'Blok location untuk berkas tersembunyi adalah jaring pengaman tambahan; pertahanan utamanya tetap root yang mengarah ke public/.' },
            { h2: 'Langkah 4: HTTPS' },
            { code: 'sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx -d toko.contoh.id          # sertifikat gratis Let\'s Encrypt + pembaruan otomatis\nsudo systemctl status certbot.timer             # pastikan pembaruan terjadwal aktif', lang: 'bash' },
            { h2: 'Langkah 5: worker, scheduler, dan Supervisor' },
            { code: '# /etc/supervisor/conf.d/toko-worker.conf\n[program:toko-worker]\ncommand=php /var/www/toko/artisan queue:work --sleep=3 --tries=3 --max-time=3600\nuser=deploy\nautostart=true\nautorestart=true\nnumprocs=2\nprocess_name=%(program_name)s_%(process_num)02d\nredirect_stderr=true\nstdout_logfile=/var/log/toko-worker.log\nstopwaitsecs=3600\n\n# sudo supervisorctl reread && sudo supervisorctl update && sudo supervisorctl start "toko-worker:*"\n\n# crontab -u deploy -e  : scheduler Laravel\n* * * * * cd /var/www/toko && php artisan schedule:run >> /dev/null 2>&1', lang: 'text' },
            { h2: 'Alur rilis yang dapat diulang' },
            `Menyalin berkas secara manual atau mengedit di server rawan salah. Tulis langkah rilis sebagai skrip agar setiap rilis identik dan dapat ditinjau.`,
            { code: '#!/usr/bin/env bash\nset -euo pipefail\ncd /var/www/toko\n\nphp artisan down --retry=60              # mode pemeliharaan sebentar\ngit pull --ff-only origin main\ncomposer install --no-dev --optimize-autoloader --no-interaction\nnpm ci && npm run build                  # bila ada aset front-end (atau bangun di CI dan unggah hasilnya)\nphp artisan migrate --force\nphp artisan optimize\nphp artisan queue:restart                # worker memuat kode baru\nsudo systemctl reload php8.3-fpm         # menyegarkan OPcache\nphp artisan up\necho "Rilis selesai: $(git rev-parse --short HEAD)"', lang: 'bash', caption: 'Untuk nol downtime, gunakan strategi rilis berdampingan (folder releases + symlink "current", seperti Envoyer, Deployer, atau GitHub Actions + rsync) sehingga versi baru disiapkan penuh lalu dialihkan seketika.' },
            { code: js`// Gagasan rilis atomik: siapkan folder rilis baru, lalu pindahkan tautan "current" dalam satu langkah
const rilis = ['2026-10-28_a1b2c3', '2026-10-29_d4e5f6'];
let current = rilis[1];
console.log('current ->', current);

const baru = '2026-10-30_0789ab';
rilis.push(baru);                                     // 1. unggah & bangun di folder baru (pengguna tetap memakai versi lama)
console.log('menyiapkan', baru, '... current tetap ->', current);
const sebelumnya = current;
current = baru;                                       // 2. satu operasi atomik: ln -sfn releases/baru current
console.log('beralih   : current ->', current);

const sehat = false;                                  // 3. bila pemeriksaan kesehatan gagal, kembali dalam sekejap
if (!sehat) { current = sebelumnya; console.log('rollback  : current ->', current); }
console.log('simpan hanya beberapa rilis terakhir:', rilis.slice(-3));`, lang: 'javascript', run: true, caption: 'Rollback menjadi ganti tautan, bukan pemulihan darurat. Migrasi basis data tetap perlu dirancang kompatibel mundur (tambah kolom dulu, hapus belakangan).' },
            { w: 'checklist', title: 'Daftar periksa deploy', items: ['Root Nginx mengarah ke public/; berkas .env dan .git tidak dapat diakses publik (uji lewat browser).', 'APP_DEBUG=false, APP_ENV=production, APP_KEY terisi, kata sandi basis data kuat dan akun terbatas.', 'HTTPS aktif dengan pembaruan otomatis; cookie sesi Secure.', 'Izin: hanya storage dan bootstrap/cache yang dapat ditulis; berkas lain tidak dimiliki www-data.', 'Migrasi dijalankan dengan --force; cadangan basis data otomatis dan pemulihan diuji.', 'Worker dijaga Supervisor; scheduler ada di cron; queue:restart pada setiap rilis.', 'Log dipantau dan diputar (logrotate); pelaporan galat (Sentry) aktif.', 'Firewall aktif, SSH dengan kunci, pembaruan keamanan otomatis, dan pemantauan ketersediaan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Akar dokumen Nginx untuk Laravel harus...', options: ['Folder public/', 'Akar proyek', '/var/www'], answer: 0, why: 'Menjaga .env dan kode tidak terbuka.' }, { q: 'Perintah migrasi di produksi memerlukan flag...', options: ['--force', '--seed', '--debug'], answer: 0, why: 'Laravel meminta konfirmasi di produksi.' }, { q: 'Mengapa php artisan queue:restart dijalankan setelah rilis?', options: ['Worker menyimpan kode lama di memori', 'Menghapus antrean', 'Mempercepat PHP'], answer: 0, why: 'Worker perlu dimuat ulang untuk memakai kode baru.' }] },
            { exercise: [['Halaman menampilkan 500 dan log menyebut "Permission denied" pada storage/logs. Apa penyebab dan perbaikannya?', 'Pengguna PHP-FPM tidak dapat menulis ke storage; atur kepemilikan/izin (chown deploy:www-data, chmod ug+rwX) pada storage dan bootstrap/cache.'], ['Mengapa APP_DEBUG=true di produksi berbahaya?', 'Halaman galat menampilkan kode, variabel lingkungan, dan jalur sehingga membantu penyerang.'], ['Apa keuntungan rilis berdampingan dengan symlink?', 'Versi baru disiapkan lengkap dulu lalu dialihkan atomik; rollback cukup mengembalikan tautan.'], ['Bagaimana memastikan .env tidak dapat diunduh?', 'Root web ke public/, blokir dotfile di Nginx, dan uji dengan membuka /.env dari luar (harus 403/404).']] },
            { summary: ['VPS + Nginx + PHP-FPM memberi kendali penuh; amankan dengan pengguna khusus, firewall, dan kunci SSH.', 'Root web ke public/, .env produksi dengan APP_DEBUG=false, izin minimal, HTTPS via Certbot.', 'Migrasi --force, php artisan optimize, Supervisor untuk worker, cron untuk scheduler.', 'Skrip rilis yang dapat diulang atau rilis atomik membuat deploy aman dan dapat di-rollback.'] },
        ],
        faq: [['Apakah wajib memakai Docker?', 'Tidak. Docker membantu konsistensi lingkungan, tetapi VPS tradisional tetap sah untuk banyak aplikasi.'], ['Bagaimana CI/CD sederhana?', 'GitHub Actions menjalankan tes lalu masuk SSH ke server untuk menjalankan skrip rilis, atau memakai Deployer/Envoyer.'], ['Bagaimana dengan Laravel di shared hosting?', 'Bisa dengan menaruh isi public/ di public_html dan sisanya di atas akar dokumen, tetapi batasan SSH, versi PHP, dan antrean membuatnya kurang ideal untuk aplikasi serius.']],
        sources: [['Laravel: Deployment', 'https://laravel.com/docs/deployment'], ['Nginx: Beginner\'s Guide', 'https://nginx.org/en/docs/beginners_guide.html'], ['Let\'s Encrypt / Certbot', 'https://certbot.eff.org/'], ['Supervisor Documentation', 'https://supervisord.org/']],
    },

    {
        slug: 'struktur-proyek-laravel-yang-rapi-service-action-dan-clean-code',
        title: 'Struktur Proyek Laravel yang Rapi: Service, Action, Clean Code',
        description: 'Tata proyek Laravel agar tetap rapi: controller tipis, kelas Action dan Service, DTO, kapan repository berlebihan, dan prinsip clean code.',
        date: D, category: C, level: 'Lanjut', tags: ['clean code', 'struktur proyek Laravel', 'service class', 'arsitektur', 'refactoring'], cta: 'jasa',
        prereq: ['CRUD Laravel', 'Eloquent', 'dasar PBO dan SOLID'],
        lead: 'Laravel memudahkan memulai, dan itulah jebakannya: semua logika menumpuk di controller sampai satu method memiliki 200 baris dan tidak ada yang berani menyentuhnya. Struktur yang baik bukan soal pola yang rumit, melainkan menaruh setiap hal di tempat yang masuk akal, dan menambah lapisan hanya ketika rasa sakitnya nyata.',
        body: [
            { objectives: ['mengenali tanda "controller gemuk" dan model gemuk', 'memindahkan logika ke kelas Action atau Service yang fokus', 'memakai DTO atau array terstruktur untuk membawa data antar lapisan', 'memutuskan kapan lapisan tambahan (repository) bermanfaat atau berlebihan', 'menerapkan penamaan, ukuran fungsi, dan pengujian yang menjaga kode tetap bersih'] },
            NOTE_PHP,
            { h2: 'Gejala: controller gemuk' },
            { code: php`<?php
// Semua dalam satu method: validasi, stok, pembayaran, email, log, hitungan...
public function store(Request $request)
{
    $request->validate([...]);
    $total = 0;
    foreach ($request->items as $i) {
        $p = Produk::find($i['id']);
        if ($p->stok < $i['jumlah']) return back()->withErrors('Stok kurang');
        $total += $p->harga * $i['jumlah'];
        $p->decrement('stok', $i['jumlah']);
    }
    if ($request->kupon === 'HEMAT10') $total *= 0.9;
    $pesanan = Pesanan::create(['user_id' => auth()->id(), 'total' => $total]);
    // ... 80 baris lagi: item, pembayaran, surel, notifikasi, log
    return redirect('/pesanan/' . $pesanan->id);
}`, lang: 'php', caption: 'Sulit diuji (harus lewat HTTP), sulit dipakai ulang (bagaimana bila pesanan dibuat dari API atau perintah artisan?), dan sulit dibaca.' },
            { h2: 'Tanggung jawab tiap lapisan' },
            { table: { head: ['Lapisan', 'Tanggung jawab', 'Jangan'], rows: [['Route', 'Memetakan URL ke controller + middleware', 'Berisi logika'], ['Controller', 'Menerjemahkan HTTP ke pemanggilan logika dan hasilnya ke respons', 'Berisi aturan bisnis atau query rumit'], ['Form Request', 'Validasi dan otorisasi masukan', 'Menyimpan data'], ['Action / Service', 'Satu use case bisnis (membuat pesanan)', 'Mengetahui tentang HTTP (Request, session)'], ['Model', 'Relasi, scope query, aturan yang melekat pada data', 'Menjadi tempat semua logika'], ['Resource / View', 'Format keluaran', 'Query ke basis data']] } },
            { h2: 'Kelas Action: satu use case, satu kelas' },
            { code: php`<?php
// app/Actions/BuatPesanan.php
namespace App\Actions;

class BuatPesanan
{
    public function __construct(private HitungTotal $hitung) {}

    /** @param array<int, array{produk_id:int, jumlah:int}> $item */
    public function jalankan(User $user, array $item, ?string $kupon = null): Pesanan
    {
        return DB::transaction(function () use ($user, $item, $kupon) {
            $produk = Produk::whereIn('id', array_column($item, 'produk_id'))->lockForUpdate()->get()->keyBy('id');

            foreach ($item as $i) {
                if ($produk[$i['produk_id']]->stok < $i['jumlah']) {
                    throw new StokTidakCukup($produk[$i['produk_id']]);          // pengecualian domain, bukan respons HTTP
                }
            }

            $pesanan = $user->pesanan()->create(['total' => $this->hitung->total($produk, $item, $kupon)]);
            foreach ($item as $i) {
                $pesanan->item()->create($i + ['harga' => $produk[$i['produk_id']]->harga]);
                $produk[$i['produk_id']]->decrement('stok', $i['jumlah']);
            }
            PesananDibuat::dispatch($pesanan);                                   // surel, notifikasi via listener/antrean
            return $pesanan;
        });
    }
}

// Controller menjadi tipis
public function store(BuatPesananRequest $request, BuatPesanan $buat)
{
    try {
        $pesanan = $buat->jalankan($request->user(), $request->validated('item'), $request->validated('kupon'));
    } catch (StokTidakCukup $e) {
        return back()->withErrors(['item' => $e->getMessage()]);
    }
    return redirect()->route('pesanan.show', $pesanan);
}`, lang: 'php', caption: 'Action yang sama dapat dipanggil dari controller web, API, perintah artisan, job antrean, dan tes, tanpa Request. Transaksi dan lockForUpdate menjaga stok tetap benar saat dua pembeli bersamaan.' },
            { code: js`// Mengapa transaksi dan penguncian penting: dua pembeli terakhir stok bersamaan
function simulasi(denganKunci) {
    let stok = 1;
    const hasil = [];
    // tanpa kunci: dua permintaan sama-sama membaca stok=1 sebelum ada yang menulis
    const baca = () => stok;
    if (!denganKunci) {
        const a = baca(), b = baca();                      // dua proses membaca nilai yang sama
        if (a >= 1) { stok = stok - 1; hasil.push('pembeli A berhasil'); }
        if (b >= 1) { stok = stok - 1; hasil.push('pembeli B berhasil'); }
    } else {
        for (const nama of ['A', 'B']) {                   // dengan kunci: diproses berurutan, pemeriksaan dan pengurangan satu kesatuan
            if (stok >= 1) { stok -= 1; hasil.push('pembeli ' + nama + ' berhasil'); } else hasil.push('pembeli ' + nama + ' ditolak (stok habis)');
        }
    }
    return { stok, hasil };
}
console.log('tanpa kunci  :', JSON.stringify(simulasi(false)), ' <- stok negatif (oversell)');
console.log('dengan kunci :', JSON.stringify(simulasi(true)));`, lang: 'javascript', run: true },
            { h2: 'Service, DTO, dan repository: secukupnya' },
            { ul: ['<b>Service</b> cocok untuk kumpulan operasi terkait satu domain (PembayaranService dengan beberapa metode) atau pembungkus API eksternal; jangan menjadikannya tempat sampah "PesananService" dengan 40 method.', '<b>DTO</b> (data transfer object) berupa kelas readonly kecil menggantikan array tak terstruktur antar lapisan sehingga tipe dan bentuk datanya jelas: <code>final readonly class DataPesanan { public function __construct(public int $userId, public array $item, public ?string $kupon = null) {} }</code>', '<b>Repository</b> yang hanya membungkus Eloquent ("getAll, find, save") sering berlebihan: Eloquent sudah merupakan abstraksi. Pertimbangkan hanya bila Anda benar-benar butuh mengganti sumber data atau menyembunyikan query rumit di belakang antarmuka.', '<b>Scope query</b> di model untuk potongan query yang dipakai ulang: <code>scopeAktif</code>, <code>scopeTerlaris</code>.', '<b>Enum</b> PHP untuk status dan jenis, menggantikan string ajaib: <code>enum StatusPesanan: string { case Baru = "baru"; case Dibayar = "dibayar"; }</code>'] },
            { callout: 'Aturan praktis: <b>jangan menambah lapisan karena takut, tambahkan karena sakit</b>. Mulai dengan controller + Form Request + model. Saat sebuah method controller mulai melebihi ~20 baris atau logikanya dibutuhkan di tempat kedua, ekstrak ke Action. Struktur yang diperumit sejak hari pertama sama buruknya dengan yang tidak terstruktur sama sekali.', kind: 'good', title: 'Pragmatis' },
            { h2: 'Prinsip kode bersih yang berlaku di mana pun' },
            { table: { head: ['Prinsip', 'Praktik'], rows: [['Nama yang menjelaskan maksud', 'hitungTotalDenganDiskon() bukan proses(); $jumlahPesananAktif bukan $n'], ['Fungsi kecil, satu tugas', 'Bila butuh kata "dan" untuk menjelaskan fungsi, pecah'], ['Kembali lebih awal (guard clause)', 'Tangani kasus tidak sah di awal, kurangi percabangan bersarang'], ['Hindari angka dan string ajaib', 'Konstanta, enum, atau konfigurasi bernama'], ['Komentar menjelaskan "mengapa"', 'Kode menjelaskan "apa"; komentar untuk alasan yang tidak jelas dari kode'], ['Tes sebagai jaring pengaman', 'Refaktor dengan tes hijau; tes Action murah dan cepat'], ['Jangan ulang diri sendiri (DRY), tetapi jangan abstraksi dini', 'Tunggu pengulangan ketiga sebelum mengabstraksi']] } },
            { code: php`<?php
// Sebelum: percabangan bersarang
function harga(Pesanan $p) {
    if ($p->aktif) {
        if ($p->user->anggota) {
            if ($p->total > 500000) { return $p->total * 0.85; }
            else { return $p->total * 0.95; }
        } else { return $p->total; }
    } else { return 0; }
}

// Sesudah: guard clause + enum + nama jelas
function hargaAkhir(Pesanan $p): int
{
    if (! $p->aktif) return 0;
    if (! $p->user->anggota) return $p->total;

    $faktor = $p->total >= self::AMBANG_DISKON_BESAR ? 0.85 : 0.95;
    return (int) round($p->total * $faktor);
}`, lang: 'php' },
            { w: 'checklist', title: 'Tanda struktur proyek sehat', items: ['Controller rata-rata kurang dari 10–15 baris per method.', 'Logika bisnis berada di Action/Service/model, bukan di controller atau Blade.', 'Use case dapat dipanggil dari web, API, artisan, dan tes tanpa Request.', 'Operasi yang mengubah beberapa tabel berada dalam transaksi.', 'Status dan jenis memakai enum, bukan string ajaib.', 'Ada tes untuk Action dan alur penting.', 'Penamaan konsisten dan struktur folder dapat dijelaskan dalam satu menit kepada anggota baru.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tanda perlu mengekstrak ke kelas Action?', options: ['Method controller panjang atau logikanya dibutuhkan di tempat lain', 'Controller terlalu pendek', 'Memakai Blade'], answer: 0, why: 'Memudahkan penggunaan ulang dan pengujian.' }, { q: 'Mengapa Action sebaiknya tidak menerima Request?', options: ['Agar bisa dipakai dari konteks non-HTTP', 'Request lambat', 'Dilarang Laravel'], answer: 0, why: 'Memisahkan logika bisnis dari HTTP.' }, { q: 'Repository yang hanya membungkus Eloquent biasanya...', options: ['Berlebihan', 'Wajib', 'Lebih cepat'], answer: 0, why: 'Eloquent sudah menjadi abstraksi.' }] },
            { exercise: [['Ekstrak logika "membatalkan pesanan" menjadi Action: apa masukan dan keluarannya?', 'Masukan: Pesanan dan alasan (mungkin User); keluaran: pesanan yang diperbarui; efek: status, pengembalian stok, event dalam satu transaksi.'], ['Mengapa lockForUpdate penting pada pengurangan stok?', 'Mencegah dua transaksi bersamaan membaca stok yang sama dan sama-sama menguranginya (oversell).'], ['Refaktor if bersarang dengan guard clause: apa manfaatnya?', 'Alur utama menjadi lurus dan mudah dibaca; kasus gagal ditangani di awal.'], ['Kapan memperkenalkan DTO?', 'Saat array asosiatif antar lapisan mulai membingungkan bentuk dan tipenya.']] },
            { summary: ['Controller tipis; logika bisnis ke Action/Service/model; Form Request untuk masukan.', 'Action satu use case, tanpa HTTP, memakai transaksi dan penguncian bila perlu.', 'Tambahkan lapisan hanya saat rasa sakitnya nyata; waspadai repository dan service yang berlebihan.', 'Penamaan jelas, fungsi kecil, guard clause, enum, dan tes menjaga kode bersih.'] },
        ],
        faq: [['Apakah harus mengikuti Domain-Driven Design?', 'Tidak. Untuk aplikasi besar dan kompleks, pemisahan domain membantu, tetapi sebagian besar aplikasi cukup dengan struktur Laravel standar plus Action.'], ['Di mana menaruh kelas Action?', 'Konvensi umum: app/Actions; beberapa tim memakai app/Services atau app/Domain/<Fitur>. Pilih satu dan konsisten.'], ['Bagaimana memulai merefaktor kode lama?', 'Tulis tes karakterisasi untuk perilaku yang ada, lalu ekstrak sedikit demi sedikit dengan tes tetap hijau.']],
        sources: [['Laravel: Service Container (injeksi dependensi)', 'https://laravel.com/docs/container'], ['Laravel: Database Transactions', 'https://laravel.com/docs/database#database-transactions'], ['Robert C. Martin, Clean Code (Prentice Hall, 2008)', ''], ['Martin Fowler: Refactoring', 'https://martinfowler.com/books/refactoring.html']],
    },

    {
        slug: 'laravel-sebagai-backend-api-untuk-react-flutter-cors-dan-token',
        title: 'Laravel sebagai Backend API untuk React dan Flutter',
        description: 'Laravel sebagai backend React dan Flutter: kontrak API, autentikasi token atau cookie, CORS, penanganan galat, unggah berkas, dan versi API.',
        date: D, category: C, level: 'Menengah', tags: ['Laravel API', 'backend React', 'backend Flutter', 'CORS', 'Sanctum'], cta: 'jasa',
        prereq: ['REST API Laravel', 'autentikasi Sanctum', 'dasar React atau Flutter'],
        lead: 'Banyak proyek modern memisahkan front-end dan backend: antarmuka dibangun dengan React atau Flutter, sementara Laravel menyediakan data dan aturan bisnis lewat API. Pemisahan ini memberi fleksibilitas (satu API untuk web dan seluler), tetapi menuntut disiplin pada kontrak API, autentikasi, CORS, dan penanganan galat agar kedua sisi tidak saling menyulitkan.',
        body: [
            { objectives: ['merancang kontrak API yang stabil dan konsisten untuk klien web dan seluler', 'memilih autentikasi yang tepat: sesi cookie (SPA) atau token (seluler)', 'mengonfigurasi CORS dengan benar dan memahami apa yang sebenarnya dilindungi', 'menangani galat, validasi, dan paginasi secara seragam di sisi klien', 'mengelola unggah berkas, versi API, dan dokumentasi untuk tim front-end'] },
            NOTE_PHP,
            { h2: 'Arsitektur' },
            { svg: 'diagram', w: 660, h: 230, label: 'Satu backend, banyak klien', nodes: [{ id: 'r', x: 100, y: 50, shape: 'rect', w: 130, h: 44, t: 'React (web)' }, { id: 'f', x: 100, y: 120, shape: 'rect', w: 130, h: 44, t: 'Flutter (seluler)' }, { id: 'x', x: 100, y: 190, shape: 'rect', w: 130, h: 44, t: 'Pihak ketiga' }, { id: 'a', x: 360, y: 120, shape: 'rect', w: 150, h: 60, t: 'Laravel API (/api/v1)' }, { id: 'd', x: 580, y: 120, shape: 'store', w: 130, h: 50, t: 'Basis data' }], edges: [{ from: 'r', to: 'a', label: 'JSON/HTTPS' }, { from: 'f', to: 'a', label: 'JSON/HTTPS' }, { from: 'x', to: 'a' }, { from: 'a', to: 'd' }], caption: 'Semua klien memakai kontrak yang sama; aturan bisnis dan keamanan hanya berada di backend.' },
            { callout: 'Prinsip utama: <b>backend tidak pernah mempercayai klien</b>. Semua validasi, otorisasi, dan perhitungan penting (harga, diskon, stok) dilakukan di server. Klien React/Flutter hanyalah tampilan yang dapat dimodifikasi siapa pun.', kind: 'warn', title: 'Aturan emas' },
            { h2: 'Autentikasi: pilih sesuai klien' },
            { table: { head: ['Klien', 'Pilihan', 'Catatan'], rows: [['React SPA di domain induk yang sama (app.contoh.id dan api.contoh.id)', 'Sanctum sesi (cookie)', 'Tanpa menyimpan token di JavaScript; perlu CORS dengan credentials dan konfigurasi domain/stateful'], ['React di domain berbeda, atau aplikasi pihak ketiga', 'Token Bearer', 'Simpan token dengan hati-hati; pertimbangkan masa berlaku pendek dan refresh'], ['Flutter / aplikasi seluler', 'Token Bearer (Sanctum)', 'Simpan di penyimpanan aman (flutter_secure_storage: Keychain/Keystore), bukan SharedPreferences biasa'], ['Server ke server', 'Token dengan kemampuan terbatas atau OAuth client credentials', 'Pisahkan dari token pengguna']] } },
            { code: php`<?php
// Login mengembalikan token + data pengguna
Route::post('/v1/masuk', function (LoginRequest $request) {
    $user = User::where('email', $request->email)->first();
    if (! $user || ! Hash::check($request->password, $user->password)) {
        return response()->json(['pesan' => 'Surel atau kata sandi salah.'], 422);
    }
    $token = $user->createToken($request->input('perangkat', 'klien'), ['*'], now()->addDays(30))->plainTextToken;
    return ['token' => $token, 'pengguna' => new PenggunaResource($user)];
})->middleware('throttle:5,1');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/v1/saya', fn (Request $r) => new PenggunaResource($r->user()));
    Route::post('/v1/keluar', fn (Request $r) => tap(response()->noContent(), fn () => $r->user()->currentAccessToken()->delete()));
});`, lang: 'php' },
            { h2: 'CORS: apa yang dilindungi dan apa yang tidak' },
            { code: php`<?php
// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['https://app.contoh.id', 'http://localhost:5173'],   // asal yang sah; jangan '*' bila memakai credentials
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 600,
    'supports_credentials' => false,       // true hanya untuk SPA berbasis cookie sesi
];`, lang: 'php', caption: 'Untuk SPA dengan cookie sesi Sanctum, supports_credentials=true dan origin harus eksplisit.' },
            { callout: '<b>CORS adalah aturan browser, bukan perlindungan server.</b> Ia hanya mencegah <i>halaman web</i> dari asal lain membaca respons API Anda lewat browser pengguna. Ia sama sekali tidak menghentikan aplikasi seluler, curl, atau skrip penyerang. Karena itu otorisasi tetap wajib di server; jangan menganggap CORS sebagai autentikasi. Dan galat CORS di konsol browser tidak muncul di Flutter (bukan browser).', kind: 'info', title: 'Salah paham umum' },
            { code: js`// Peragaan logika pemeriksaan CORS: dilakukan BROWSER berdasarkan header dari server
function responsServer(asalPermintaan) {
    const diizinkan = ['https://app.contoh.id', 'http://localhost:5173'];
    const header = diizinkan.includes(asalPermintaan) ? { 'Access-Control-Allow-Origin': asalPermintaan } : {};
    return { status: 200, header, badan: '{"data":"rahasia"}' };
}
function browserMembaca(asalHalaman) {
    const r = responsServer(asalHalaman);
    const izin = r.header['Access-Control-Allow-Origin'];
    return izin === asalHalaman ? 'JavaScript halaman BOLEH membaca: ' + r.badan : 'DIBLOKIR browser (server tetap sudah memproses permintaan!)';
}
console.log('halaman app.contoh.id   ->', browserMembaca('https://app.contoh.id'));
console.log('halaman situs-jahat.id  ->', browserMembaca('https://situs-jahat.id'));
console.log('curl / Flutter          -> tidak ada pemeriksaan CORS: server harus mengandalkan autentikasi dan otorisasi');`, lang: 'javascript', run: true },
            { h2: 'Kontrak API yang konsisten' },
            { code: 'Sukses (satu objek)       200   { "data": { ... } }\nSukses (daftar)           200   { "data": [ ... ], "meta": { "current_page": 1, "last_page": 4, "total": 47 }, "links": { ... } }\nDibuat                    201   { "data": { ... } }\nTanpa isi                 204\nValidasi gagal            422   { "pesan": "Data tidak valid.", "galat": { "surel": ["Format surel salah."] } }\nBelum login               401   { "pesan": "Tidak terautentikasi." }\nDilarang                  403   { "pesan": "Anda tidak berhak." }\nTidak ditemukan           404   { "pesan": "Data tidak ditemukan." }\nTerlalu banyak permintaan 429   { "pesan": "Coba lagi nanti." }  + header Retry-After\nGalat server              500   { "pesan": "Terjadi kesalahan." }  (tanpa detail internal)', lang: 'text', caption: 'Satu bentuk galat yang seragam membuat klien React dan Flutter cukup menulis satu penangan galat. Di Laravel atur format ini di bootstrap/app.php (withExceptions) agar semua galat API berformat sama.' },
            { code: jsx`// React: pembungkus fetch yang menangani kontrak di atas sekali saja
export async function api(jalur, { method = 'GET', body, token } = {}) {
    const r = await fetch(import.meta.env.VITE_API_URL + '/api/v1' + jalur, {
        method,
        headers: {
            Accept: 'application/json',                    // PENTING: tanpa ini Laravel dapat mengalihkan (302) alih-alih JSON
            ...(body && { 'Content-Type': 'application/json' }),
            ...(token && { Authorization: 'Bearer ' + token }),
        },
        body: body && JSON.stringify(body),
    });
    if (r.status === 204) return null;
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw Object.assign(new Error(data.pesan ?? 'Terjadi kesalahan'), { status: r.status, galat: data.galat });
    return data;
}`, lang: 'jsx', caption: 'Header Accept: application/json penting: tanpa itu Laravel menganggap permintaan sebagai halaman web dan dapat mengalihkan ke halaman login atau mengembalikan HTML saat galat.' },
            { code: 'import \'dart:convert\';\nimport \'package:http/http.dart\' as http;\n\nclass ApiException implements Exception {\n  final int status; final String pesan; final Map<String, dynamic>? galat;\n  ApiException(this.status, this.pesan, [this.galat]);\n}\n\nclass ApiKlien {\n  ApiKlien(this.dasar, {this.token});\n  final String dasar; String? token;\n\n  Future<dynamic> panggil(String jalur, {String metode = \'GET\', Map<String, dynamic>? body}) async {\n    final uri = Uri.parse(\'$dasar/api/v1$jalur\');\n    final header = {\n      \'Accept\': \'application/json\',\n      if (body != null) \'Content-Type\': \'application/json\',\n      if (token != null) \'Authorization\': \'Bearer $token\',\n    };\n    final req = http.Request(metode, uri)..headers.addAll(header);\n    if (body != null) req.body = jsonEncode(body);\n    final r = await http.Response.fromStream(await req.send());\n    if (r.statusCode == 204) return null;\n    final data = r.body.isEmpty ? {} : jsonDecode(r.body);\n    if (r.statusCode >= 400) throw ApiException(r.statusCode, data[\'pesan\'] ?? \'Terjadi kesalahan\', data[\'galat\']);\n    return data;\n  }\n}', lang: 'dart', caption: 'Pola yang sama di Dart: satu kelas klien yang menambahkan header dan mengubah status galat menjadi pengecualian bertipe. (Sketsa konsep; sesuaikan dengan versi paket http dan gaya kode proyek Anda.)' },
            { h2: 'Unggah berkas dan hal praktis lain' },
            { ul: ['<b>Unggah</b>: kirim sebagai <code>multipart/form-data</code>; validasi <code>image</code>, <code>mimes</code>, dan <code>max</code> di server; simpan di storage dan kembalikan URL (tanda tangan sementara untuk berkas privat).', '<b>Versi API</b> di URL (/api/v1) dan kebijakan deprecation: klien seluler lama tetap berjalan di toko aplikasi berbulan-bulan, jadi jangan pernah merusak versi yang masih dipakai.', '<b>Paginasi</b> di semua daftar; klien seluler memuat bertahap (infinite scroll) dengan meta/links.', '<b>Waktu</b>: kirim dalam ISO 8601 UTC dan biarkan klien memformat sesuai zona waktu pengguna.', '<b>Uang</b>: kirim sebagai bilangan bulat satuan terkecil (rupiah penuh atau sen) atau string desimal, jangan float.', '<b>Dokumentasi</b>: OpenAPI (Scribe atau Scramble menghasilkannya dari kode) agar tim front-end dan seluler dapat bekerja paralel, bahkan sebelum backend selesai (dengan server tiruan).', '<b>Pembatasan laju dan pemantauan</b>: throttle per pengguna dan IP; catat ID permintaan untuk melacak galat dari laporan pengguna.'] },
            { w: 'checklist', title: 'Backend API siap dipakai klien', items: ['Kontrak sukses dan galat seragam; kode status bermakna.', 'Autentikasi sesuai klien (cookie untuk SPA satu domain, token untuk seluler) dan token dapat dicabut.', 'CORS hanya mengizinkan asal yang sah; tidak dianggap sebagai keamanan.', 'Semua endpoint divalidasi dan diotorisasi di server (policy).', 'Daftar dipaginasi; uang dan waktu dalam format yang tidak ambigu.', 'Versi API dan dokumentasi OpenAPI tersedia.', 'HTTPS di mana-mana; throttle dan pemantauan aktif.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'CORS melindungi dari...', options: ['Halaman web asal lain membaca respons lewat browser', 'Semua serangan', 'Aplikasi seluler'], answer: 0, why: 'Hanya perilaku browser; server tetap harus mengautentikasi.' }, { q: 'Header yang membuat Laravel selalu membalas JSON untuk galat?', options: ['Accept: application/json', 'Content-Length', 'Origin'], answer: 0, why: 'Tanpa itu Laravel dapat mengalihkan atau mengembalikan HTML.' }, { q: 'Tempat aman menyimpan token di Flutter?', options: ['flutter_secure_storage', 'SharedPreferences biasa', 'Variabel global'], answer: 0, why: 'Memakai Keychain/Keystore.' }] },
            { exercise: [['Mengapa aplikasi Flutter tidak mengalami galat CORS padahal React mengalami?', 'CORS hanya diterapkan oleh browser; Flutter (bukan browser) tidak memeriksanya.'], ['Apa risiko menyimpan token di localStorage pada SPA?', 'Skrip yang berhasil disuntikkan (XSS) dapat membacanya; pertimbangkan cookie HttpOnly lewat Sanctum sesi, atau token berumur pendek.'], ['Mengapa harga tidak boleh dikirim dari klien saat membuat pesanan?', 'Klien dapat dimanipulasi; kirim hanya ID produk dan jumlah, dan hitung harga di server.'], ['Mengapa API versi lama tetap dipertahankan untuk aplikasi seluler?', 'Pengguna tidak langsung memperbarui aplikasi; merusak versi lama membuat aplikasi mereka berhenti bekerja.']] },
            { summary: ['Satu backend Laravel melayani banyak klien lewat kontrak JSON yang konsisten.', 'Autentikasi: cookie Sanctum untuk SPA satu domain, token Bearer untuk seluler dan pihak ketiga.', 'CORS = aturan browser; bukan pengganti autentikasi dan otorisasi di server.', 'Format galat seragam, header Accept JSON, paginasi, versi API, dokumentasi OpenAPI.'] },
        ],
        faq: [['Bagaimana dengan Inertia.js?', 'Inertia memungkinkan memakai React/Vue sebagai tampilan Laravel tanpa membangun API terpisah: routing dan controller tetap di Laravel. Cocok bila hanya ada satu klien web.'], ['Bagaimana push notification untuk Flutter?', 'Gunakan Firebase Cloud Messaging; simpan token perangkat di backend dan kirim dari antrean Laravel lewat paket FCM.'], ['Bagaimana pengujian lintas tim?', 'Gunakan kontrak OpenAPI dan server tiruan, serta tes kontrak sehingga perubahan backend yang merusak terdeteksi sebelum merugikan klien.']],
        sources: [['Laravel: Sanctum (SPA Authentication dan API Tokens)', 'https://laravel.com/docs/sanctum'], ['MDN: Cross-Origin Resource Sharing (CORS)', 'https://developer.mozilla.org/docs/Web/HTTP/CORS'], ['Laravel: Routing (CORS)', 'https://laravel.com/docs/routing#cors'], ['OpenAPI Specification', 'https://spec.openapis.org/oas/latest.html']],
    },
];
