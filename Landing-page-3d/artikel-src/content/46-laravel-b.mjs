const D = '2026-10-30';
const C = 'Laravel & Backend';
const php = String.raw;
const py = String.raw;
const js = String.raw;

const REF_LARAVEL = ['Laravel Documentation', 'https://laravel.com/docs'];
const NOTE_PHP = { callout: 'Kode PHP/Laravel di artikel ini mengikuti dokumentasi Laravel (versi 11 dan seterusnya, PHP 8.2 atau lebih baru). Bagian "cara kerja di balik layar" dijalankan sungguhan dengan Python atau JavaScript agar konsepnya dapat dibuktikan.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'middleware-dan-policy-laravel-otorisasi-peran-dan-hak-akses',
        title: 'Middleware dan Policy Laravel: Otorisasi dan Hak Akses',
        description: 'Pahami middleware sebagai penyaring permintaan dan policy sebagai aturan otorisasi per model di Laravel, termasuk RBAC dan pencegahan IDOR.',
        date: D, category: C, level: 'Menengah', tags: ['middleware Laravel', 'policy', 'otorisasi', 'RBAC', 'Gate'], cta: 'jasa',
        prereq: ['dasar Laravel', 'autentikasi'],
        lead: 'Autentikasi memastikan siapa penggunanya; otorisasi memutuskan apa yang boleh ia lakukan. Kebocoran data paling sering terjadi bukan karena login jebol, melainkan karena pengguna A bisa membuka data pengguna B hanya dengan mengganti angka di URL. Middleware dan policy di Laravel adalah alat untuk menutup celah itu secara sistematis.',
        body: [
            { objectives: ['menjelaskan middleware sebagai pipa penyaring permintaan', 'membuat dan memasang middleware kustom', 'menulis policy dan memakainya di controller dan Blade', 'membedakan otorisasi berbasis peran dan berbasis kepemilikan', 'mengenali dan mencegah IDOR (akses objek tanpa pemeriksaan)'] },
            NOTE_PHP,
            { h2: 'Middleware: pipa yang dilalui setiap permintaan' },
            { svg: 'flow', label: 'Pipa middleware', steps: [{ t: 'Permintaan', d: 'dari browser atau klien API' }, { t: 'Middleware 1', d: 'mis. throttle (batas laju)' }, { t: 'Middleware 2', d: 'auth: sudah login?' }, { t: 'Middleware 3', d: 'peran: boleh masuk?' }, { t: 'Controller', d: 'logika aplikasi' }], caption: 'Setiap middleware dapat meneruskan permintaan ke tahap berikutnya atau menghentikannya dengan respons (misalnya 401 atau 403). Respons kembali melewati pipa yang sama.' },
            { code: js`// Gagasan inti middleware: rangkaian fungsi, masing-masing memanggil next() atau menghentikan
function jalankan(middleware, penangan, req) {
    let i = 0;
    const next = () => (i < middleware.length ? middleware[i++](req, next) : penangan(req));
    return next();
}

const catat   = (req, next) => { console.log('  [log] ' + req.metode + ' ' + req.url); return next(); };
const auth    = (req, next) => req.pengguna ? next() : '401 Belum login';
const hanyaAdmin = (req, next) => req.pengguna.peran === 'admin' ? next() : '403 Dilarang';
const penangan = req => '200 Panel admin untuk ' + req.pengguna.nama;

for (const req of [
    { metode: 'GET', url: '/admin', pengguna: null },
    { metode: 'GET', url: '/admin', pengguna: { nama: 'Budi', peran: 'tamu' } },
    { metode: 'GET', url: '/admin', pengguna: { nama: 'Ani', peran: 'admin' } },
]) console.log(jalankan([catat, auth, hanyaAdmin], penangan, req));`, lang: 'javascript', run: true, caption: 'Urutan middleware penting: auth harus sebelum pemeriksaan peran, karena yang kedua memakai pengguna yang diperiksa oleh yang pertama.' },
            { h2: 'Middleware kustom di Laravel' },
            { code: php`<?php
// php artisan make:middleware EnsureUserIsAdmin
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! $request->user()?->isAdmin()) {
            abort(403, 'Hanya admin yang boleh mengakses halaman ini.');
        }
        return $next($request);
    }
}

// bootstrap/app.php  (Laravel 11+): daftarkan alias
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias(['admin' => \App\Http\Middleware\EnsureUserIsAdmin::class]);
})

// routes/web.php: pakai
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index']);
});

// middleware dengan parameter: ->middleware('peran:editor,admin')   (parameter diterima setelah $next)`, lang: 'php', caption: 'Bawaan Laravel yang sering dipakai: auth, guest, verified, throttle, signed, can (otorisasi).' },
            { h2: 'Otorisasi per objek: Policy' },
            `Middleware cocok untuk aturan kasar ("hanya admin masuk ke /admin"). Untuk aturan per objek ("pengguna hanya boleh mengubah pesanan <i>miliknya</i>"), gunakan <b>policy</b>: satu kelas per model yang berisi method untuk tiap aksi.`,
            { code: php`<?php
// php artisan make:policy PesananPolicy --model=Pesanan
namespace App\Policies;

use App\Models\Pesanan;
use App\Models\User;

class PesananPolicy
{
    public function before(User $user, string $aksi): ?bool
    {
        if ($user->isAdmin()) return true;      // admin lolos semua; null = lanjut ke pemeriksaan biasa
        return null;
    }

    public function view(User $user, Pesanan $pesanan): bool
    {
        return $pesanan->user_id === $user->id;
    }

    public function update(User $user, Pesanan $pesanan): bool
    {
        return $pesanan->user_id === $user->id && $pesanan->status === 'baru';   // hanya selama masih baru
    }

    public function delete(User $user, Pesanan $pesanan): bool
    {
        return false;                           // pesanan tak boleh dihapus pengguna biasa
    }
}

// Controller
public function update(Request $request, Pesanan $pesanan)
{
    $this->authorize('update', $pesanan);       // 403 otomatis bila policy menolak
    $pesanan->update($request->validated());
    return back();
}

// Blade
// @can('update', $pesanan) <a href="...">Ubah</a> @endcan

// Atau di rute: Route::put('/pesanan/{pesanan}', ...)->can('update', 'pesanan');`, lang: 'php', caption: 'Laravel menemukan PesananPolicy otomatis untuk model Pesanan. Selalu otorisasi di sisi server; menyembunyikan tombol di tampilan saja bukan keamanan.' },
            { h2: 'Bahaya IDOR dan cara mengujinya' },
            { callout: '<b>IDOR (Insecure Direct Object Reference)</b>: aplikasi mengambil objek berdasarkan ID dari URL (<code>/pesanan/105</code>) tanpa memeriksa bahwa ID itu milik pengguna yang sedang login. Penyerang cukup mengganti 105 menjadi 106. Ini salah satu kerentanan paling umum, dan peringkat teratas di daftar OWASP (Broken Access Control).', kind: 'warn', title: 'Kerentanan nomor satu' },
            { code: js`// Peragaan IDOR: tanpa pemeriksaan kepemilikan vs dengan policy
const pesanan = [
    { id: 105, user_id: 1, isi: 'Kopi x2 (milik Ani)' },
    { id: 106, user_id: 2, isi: 'Teh x1 (milik Budi)' },
];
const cari = id => pesanan.find(p => p.id === id);

const rentan = (pengguna, id) => cari(id)?.isi ?? '404';                                   // TIDAK memeriksa pemilik
const aman = (pengguna, id) => {
    const p = cari(id);
    if (!p) return '404';
    return (p.user_id === pengguna.id || pengguna.peran === 'admin') ? p.isi : '403 Dilarang';   // policy: pemilik atau admin
};

const ani = { id: 1, peran: 'pengguna' };
console.log('rentan, Ani membuka #106 :', rentan(ani, 106), ' <- KEBOCORAN DATA');
console.log('aman,   Ani membuka #106 :', aman(ani, 106));
console.log('aman,   Ani membuka #105 :', aman(ani, 105));
console.log('aman,   admin membuka #106:', aman({ id: 9, peran: 'admin' }, 106));`, lang: 'javascript', run: true, caption: 'Tindakan sederhana yang mencegahnya: setiap pengambilan objek berdasarkan input pengguna harus melewati pemeriksaan kepemilikan atau policy. Cara praktis lain: batasi query ke milik pengguna ($user->pesanan()->findOrFail($id)) sehingga objek orang lain memang tidak ditemukan.' },
            { h2: 'Peran dan izin (RBAC)' },
            { code: js`// RBAC: pengguna -> peran -> izin. Pemeriksaan selalu ke IZIN, bukan ke nama peran.
const peranIzin = {
    admin:  ['produk.lihat', 'produk.ubah', 'produk.hapus', 'pengguna.kelola'],
    editor: ['produk.lihat', 'produk.ubah'],
    tamu:   ['produk.lihat'],
};
const bisa = (pengguna, izin) => pengguna.peran.some(p => peranIzin[p]?.includes(izin));

const ani = { nama: 'Ani', peran: ['editor'] };
const budi = { nama: 'Budi', peran: ['tamu'] };
const citra = { nama: 'Citra', peran: ['editor', 'admin'] };      // beberapa peran digabung
for (const u of [ani, budi, citra])
    console.log(u.nama.padEnd(6), ['produk.ubah', 'produk.hapus', 'pengguna.kelola'].map(i => i + '=' + (bisa(u, i) ? 'ya' : 'tidak')).join('  '));`, lang: 'javascript', run: true, caption: 'Memeriksa izin ("boleh menghapus produk?") alih-alih peran ("apakah admin?") membuat aturan mudah diubah tanpa menyisir seluruh kode. Paket seperti spatie/laravel-permission menyediakan ini siap pakai.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Policy di Laravel dipakai untuk...', options: ['Otorisasi per objek/model', 'Mengatur rute', 'Membuat tabel'], answer: 0, why: 'Aturan siapa boleh melakukan aksi pada objek tertentu.' }, { q: 'Mengapa menyembunyikan tombol saja tidak cukup?', options: ['Penyerang dapat memanggil endpoint langsung', 'Tombol lambat', 'Blade melarangnya'], answer: 0, why: 'Otorisasi harus di server.' }, { q: 'IDOR terjadi bila...', options: ['Objek diambil dari ID tanpa memeriksa pemilik', 'Server mati', 'Kata sandi lemah'], answer: 0, why: 'Mengganti ID memberi data orang lain.' }] },
            { exercise: [['Buat middleware yang hanya mengizinkan pengguna ber-peran editor atau admin.', 'Middleware dengan parameter: periksa in_array($user->peran, $peran) dan abort(403) bila tidak.'], ['Tulis aturan policy: komentar hanya dapat dihapus oleh pembuatnya atau admin.', '<code>return $user->id === $komentar->user_id || $user->isAdmin();</code>'], ['Bagaimana mencegah IDOR dengan query yang dibatasi?', '<code>$request->user()->pesanan()->findOrFail($id)</code>: hanya mencari di pesanan milik pengguna.'], ['Apa beda 401 dan 403?', '401: belum terautentikasi (belum login); 403: sudah login tetapi tidak berhak.']] },
            { summary: ['Middleware adalah pipa penyaring permintaan: auth, throttle, peran.', 'Policy mengatur otorisasi per objek; $this->authorize() dan @can memakainya.', 'IDOR/Broken Access Control: selalu periksa kepemilikan atau hak, jangan percaya ID dari klien.', 'RBAC: periksa izin, bukan nama peran; otorisasi selalu di sisi server.'] },
        ],
        faq: [['Apa bedanya Gate dan Policy?', 'Gate adalah closure otorisasi sederhana; Policy mengelompokkan aturan per model. Keduanya memakai mekanisme yang sama (can, authorize).'], ['Di mana mendaftarkan middleware di Laravel 11+?', 'Di bootstrap/app.php melalui withMiddleware; tidak ada lagi Http/Kernel.php.'], ['Apakah perlu paket peran-izin?', 'Untuk peran dan izin dinamis yang disimpan di basis data, spatie/laravel-permission sangat populer; untuk aturan sederhana, policy cukup.']],
        sources: [['Laravel: Middleware', 'https://laravel.com/docs/middleware'], ['Laravel: Authorization', 'https://laravel.com/docs/authorization'], ['OWASP Top 10: A01 Broken Access Control', 'https://owasp.org/Top10/A01_2021-Broken_Access_Control/'], ['spatie/laravel-permission', 'https://spatie.be/docs/laravel-permission']],
    },

    {
        slug: 'queue-job-dan-scheduler-laravel-pekerjaan-latar-belakang',
        title: 'Queue, Job, dan Scheduler Laravel: Pekerjaan Latar Belakang',
        description: 'Pelajari antrean (queue) Laravel: mengapa pekerjaan lambat dipindah ke latar belakang, membuat job, worker, retry dan backoff, job gagal, dan scheduler untuk tugas terjadwal.',
        date: D, category: C, level: 'Menengah', tags: ['Laravel queue', 'job', 'scheduler', 'cron', 'background job'], cta: 'jasa',
        prereq: ['dasar Laravel', 'Eloquent'],
        lead: 'Pengguna menekan tombol "Daftar" lalu menunggu sembilan detik karena server mengirim surel sambutan, membuat PDF, dan memanggil layanan pihak ketiga sebelum merespons. Itu bukan pengalaman yang baik, dan satu layanan yang lambat bisa membuat seluruh permintaan gagal. Solusinya: kerjakan yang lambat di latar belakang lewat antrean, dan respons pengguna seketika.',
        body: [
            { objectives: ['menjelaskan manfaat antrean dan kapan memakainya', 'membuat job, mendispatch, dan menjalankan worker', 'mengatur percobaan ulang, backoff, dan menangani job gagal', 'menulis job yang idempoten dan aman dijalankan ulang', 'memakai scheduler Laravel menggantikan banyak entri cron'] },
            NOTE_PHP,
            { h2: 'Mengapa antrean' },
            { svg: 'diagram', w: 640, h: 190, label: 'Antrean pekerjaan', nodes: [{ id: 'w', x: 80, y: 95, shape: 'rect', w: 110, h: 50, t: 'Permintaan web' }, { id: 'q', x: 300, y: 95, shape: 'store', w: 150, h: 50, t: 'Antrean (DB/Redis)' }, { id: 'k', x: 530, y: 95, shape: 'rect', w: 110, h: 50, t: 'Worker' }, { id: 'r', x: 80, y: 165, shape: 'text', w: 140, h: 20, t: '202/redirect cepat' }], edges: [{ from: 'w', to: 'q', label: 'dispatch(job)' }, { from: 'q', to: 'k', label: 'ambil job' }], caption: 'Permintaan web hanya menaruh job ke antrean lalu selesai. Proses worker terpisah mengambil dan mengerjakannya.' },
            { ul: ['<b>Respons cepat</b>: pengguna tidak menunggu pekerjaan lambat (surel, PDF, gambar, impor).', '<b>Ketahanan</b>: bila layanan luar gagal, job dicoba ulang tanpa menggagalkan permintaan pengguna.', '<b>Pemerataan beban</b>: lonjakan permintaan menumpuk di antrean dan diproses sesuai kapasitas worker.', '<b>Skalabilitas</b>: tambah worker untuk mempercepat pemrosesan.'] },
            { h2: 'Membuat dan mendispatch job' },
            { code: php`<?php
// php artisan make:job KirimSurelSambutan
namespace App\Jobs;

use App\Models\User;
use App\Mail\SambutanMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class KirimSurelSambutan implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 4;                       // maksimal percobaan
    public array $backoff = [10, 60, 300];       // jeda antar percobaan (detik): 10 dtk, 1 mnt, 5 mnt
    public int $timeout = 30;                    // detik

    public function __construct(public User $user) {}    // model diserialisasi hanya sebagai ID

    public function handle(): void
    {
        Mail::to($this->user)->send(new SambutanMail($this->user));
    }

    public function failed(\Throwable $e): void
    {
        // dipanggil setelah semua percobaan habis: catat, beri tahu admin, dsb.
    }
}

// Di controller: dispatch dan LANGSUNG kembali
KirimSurelSambutan::dispatch($user);
KirimSurelSambutan::dispatch($user)->onQueue('surel')->delay(now()->addMinutes(5));
return redirect('/dasbor')->with('sukses', 'Selamat datang! Surel sambutan sedang dikirim.');`, lang: 'php' },
            { code: 'php artisan queue:table && php artisan migrate     # antrean berbasis basis data (bawaan Laravel 11)\nphp artisan queue:work                              # menjalankan worker\nphp artisan queue:work --queue=surel,default        # prioritas antrean\nphp artisan queue:failed                            # daftar job gagal\nphp artisan queue:retry all                         # coba ulang yang gagal\nphp artisan queue:restart                           # muat ulang worker setelah deploy (kode baru)', lang: 'bash', caption: 'Di produksi, worker harus dijaga terus hidup oleh pengawas proses (Supervisor, systemd) atau memakai Laravel Horizon (untuk Redis) yang juga menyediakan dasbor.' },
            { h2: 'Retry, backoff, dan job gagal: peragaan' },
            `Berikut simulasi worker dengan percobaan ulang dan backoff eksponensial, agar perilaku antrean yang andal terlihat jelas.`,
            { code: js`// Simulasi worker antrean: retry dengan backoff dan tabel job gagal
async function pekerjaanTakStabil(job, percobaanKe) {
    // layanan surel "mati" pada dua percobaan pertama untuk job #2, dan selalu mati untuk job #3
    if (job.id === 2 && percobaanKe <= 2) throw new Error('layanan surel timeout');
    if (job.id === 3) throw new Error('alamat surel tidak valid');
    return 'terkirim ke ' + job.penerima;
}

const antrean = [{ id: 1, penerima: 'ani@contoh.id' }, { id: 2, penerima: 'budi@contoh.id' }, { id: 3, penerima: 'salah@' }];
const backoff = [10, 60, 300];                     // detik (disimulasikan, tidak benar-benar menunggu)
const gagal = [];

(async () => {
    for (const job of antrean) {
        let berhasil = false;
        for (let k = 1; k <= 4 && !berhasil; k++) {
            try {
                const hasil = await pekerjaanTakStabil(job, k);
                console.log('job #' + job.id, 'percobaan', k, '-> OK:', hasil);
                berhasil = true;
            } catch (e) {
                const jeda = backoff[k - 1];
                console.log('job #' + job.id, 'percobaan', k, '-> GAGAL:', e.message + (k < 4 ? ' (coba lagi dalam ' + jeda + ' dtk)' : ''));
            }
        }
        if (!berhasil) gagal.push({ id: job.id, alasan: 'melebihi 4 percobaan' });
    }
    console.log('tabel failed_jobs:', JSON.stringify(gagal));
})();`, lang: 'javascript', run: true, caption: 'Job yang gagal sementara pulih sendiri; yang gagal permanen masuk tabel failed_jobs untuk diperiksa manusia. Pengguna tidak pernah menunggu satu pun dari ini.' },
            { h2: 'Menulis job yang aman dijalankan ulang (idempoten)' },
            { callout: 'Antrean menjamin job dijalankan <b>setidaknya sekali</b>, bukan tepat sekali. Job bisa berjalan dua kali (worker mati di tengah, percobaan ulang, timeout). Job yang mengirim surel atau menagih pembayaran harus <b>idempoten</b>: menjalankannya dua kali tidak menimbulkan efek ganda.', kind: 'warn', title: 'Perhatian' },
            { code: js`// Idempoten: periksa "sudah dikerjakan?" sebelum melakukan efek samping
const sudahDikirim = new Set();              // di Laravel: kolom di basis data atau kunci unik
let surelTerkirim = 0;

function kirimSambutan(userId) {
    if (sudahDikirim.has(userId)) return 'dilewati (sudah pernah)';
    surelTerkirim++;                         // efek samping
    sudahDikirim.add(userId);                // tandai SETELAH berhasil (di nyata: dalam transaksi yang sama bila memungkinkan)
    return 'terkirim';
}
console.log(kirimSambutan(7), '|', kirimSambutan(7), '|', kirimSambutan(8));
console.log('total surel:', surelTerkirim, '(bukan 3)');`, lang: 'javascript', run: true },
            { h2: 'Scheduler: pengganti tumpukan entri cron' },
            { code: php`<?php
// routes/console.php  (Laravel 11+)
use Illuminate\Support\Facades\Schedule;

Schedule::command('laporan:harian')->dailyAt('01:30')->timezone('Asia/Jakarta');
Schedule::job(new BersihkanFileSementara)->hourly();
Schedule::call(fn () => DB::table('sesi')->where('kedaluwarsa', '<', now())->delete())->everyFiveMinutes();
Schedule::command('cadangan:jalankan')->weeklyOn(0, '02:00')->onOneServer()->withoutOverlapping();`, lang: 'php' },
            { code: '# Satu-satunya entri cron yang dibutuhkan (di server):\n* * * * * cd /var/www/toko && php artisan schedule:run >> /dev/null 2>&1\n\nphp artisan schedule:list      # melihat jadwal yang terdaftar', lang: 'bash', caption: 'Cron memanggil Laravel setiap menit; Laravel yang memutuskan tugas mana yang jatuh tempo. withoutOverlapping mencegah dua eksekusi bertumpuk; onOneServer mencegah eksekusi ganda pada beberapa server.' },
            { w: 'checklist', title: 'Antrean siap produksi', items: ['Worker dijaga hidup oleh Supervisor/systemd atau Horizon.', 'queue:restart dijalankan pada setiap deploy.', 'Job idempoten dan memiliki tries, backoff, dan timeout yang masuk akal.', 'Job gagal dipantau dan ada pemberitahuan (failed_jobs, Horizon, atau Sentry).', 'Driver antrean sesuai beban (database untuk kecil, Redis/SQS untuk besar).', 'Data besar tidak dimasukkan ke payload job; cukup ID, ambil ulang saat dikerjakan.', 'Scheduler hanya memakai satu entri cron; tugas panjang dijalankan sebagai job.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Manfaat utama antrean?', options: ['Respons cepat dan pekerjaan berat di latar belakang', 'Menghemat basis data', 'Mengganti HTML'], answer: 0, why: 'Pengguna tidak menunggu pekerjaan lambat.' }, { q: 'Job antrean dijamin berjalan...', options: ['Setidaknya sekali', 'Tepat sekali', 'Paling banyak sekali'], answer: 0, why: 'Karena itu job harus idempoten.' }, { q: 'Perintah setelah deploy agar worker memakai kode baru?', options: ['php artisan queue:restart', 'php artisan migrate', 'composer update'], answer: 0, why: 'Worker menyimpan kode di memori.' }] },
            { exercise: [['Job mana yang cocok dipindah ke antrean: simpan data ke basis data, kirim surel, membuat thumbnail, validasi form?', 'Kirim surel dan membuat thumbnail (lambat/eksternal); simpan data dan validasi tetap sinkron karena hasilnya dibutuhkan segera.'], ['Mengapa mengirim model utuh sebagai payload job berisiko?', 'Data bisa basi saat job berjalan; Laravel menyimpan hanya ID (SerializesModels) lalu mengambil ulang model.'], ['Apa fungsi withoutOverlapping pada tugas terjadwal?', 'Mencegah eksekusi baru dimulai bila eksekusi sebelumnya masih berjalan.'], ['Rancang job idempoten untuk "menagih pelanggan bulanan".', 'Gunakan kunci unik per (pelanggan, periode); periksa sebelum menagih dan simpan hasilnya dalam transaksi; kirim kunci idempotensi ke penyedia pembayaran.']] },
            { summary: ['Antrean memindahkan pekerjaan lambat ke latar belakang; respons web tetap cepat.', 'Job: tries, backoff, timeout, failed(); worker dijaga hidup dan di-restart saat deploy.', 'Job dijalankan setidaknya sekali: rancang agar idempoten.', 'Scheduler: satu entri cron, banyak tugas terjadwal dengan penjaga overlap dan satu-server.'] },
        ],
        faq: [['Database atau Redis untuk antrean?', 'Database cukup untuk beban kecil dan paling sederhana; Redis (dengan Horizon) lebih cepat dan kaya fitur untuk beban besar.'], ['Bagaimana job berantai?', 'Dengan Bus::chain([...]) untuk urutan, atau Bus::batch([...]) untuk kelompok dengan callback selesai.'], ['Apakah queue bisa dipakai di shared hosting?', 'Bisa dengan cron yang menjalankan queue:work --stop-when-empty, tetapi kurang ideal; VPS memberi kendali lebih baik.']],
        sources: [['Laravel: Queues', 'https://laravel.com/docs/queues'], ['Laravel: Task Scheduling', 'https://laravel.com/docs/scheduling'], ['Laravel Horizon', 'https://laravel.com/docs/horizon'], ['Stripe: Idempotent requests', 'https://docs.stripe.com/api/idempotent_requests']],
    },

    {
        slug: 'testing-laravel-phpunit-pest-factory-dan-refreshdatabase',
        title: 'Testing Laravel: PHPUnit, Pest, Factory, RefreshDatabase',
        description: 'Panduan menguji aplikasi Laravel: tes fitur dan unit, PHPUnit dan Pest, factory untuk data uji, RefreshDatabase, menguji API dan validasi, mock, serta cara berpikir TDD.',
        date: D, category: C, level: 'Menengah', tags: ['testing Laravel', 'PHPUnit', 'Pest', 'factory', 'TDD'], cta: 'jasa',
        prereq: ['dasar Laravel', 'Eloquent', 'REST API'],
        lead: 'Aplikasi yang tumbuh tanpa tes menjadi aplikasi yang ditakuti: setiap perubahan terasa berisiko. Laravel dibangun dengan pengujian sebagai warga kelas satu: ada basis data uji, factory data palsu, dan helper untuk memanggil rute seolah browser. Dengan sedikit pola, menulis tes menjadi cepat dan menyenangkan.',
        body: [
            { objectives: ['membedakan tes unit dan tes fitur serta kapan memakai masing-masing', 'menulis tes dengan PHPUnit dan Pest', 'memakai factory dan RefreshDatabase untuk data uji yang bersih', 'menguji halaman, form, validasi, API, dan otorisasi', 'menerapkan siklus TDD dan mengelola mock dengan hemat'] },
            NOTE_PHP,
            { h2: 'Tes unit vs tes fitur' },
            { table: { head: ['', 'Tes unit (tests/Unit)', 'Tes fitur (tests/Feature)'], rows: [['Cakupan', 'Satu kelas atau fungsi terpisah', 'Alur lengkap: permintaan HTTP sampai basis data'], ['Basis data', 'Biasanya tidak', 'Ya (basis data uji)'], ['Kecepatan', 'Sangat cepat', 'Lebih lambat tetapi lebih meyakinkan'], ['Contoh', 'Menghitung diskon, memformat harga', 'Login, mendaftar, membuat pesanan, endpoint API'], ['Saran', 'Untuk logika murni', 'Mayoritas tes aplikasi Laravel']] } },
            { h2: 'Menyiapkan lingkungan uji' },
            { code: '# phpunit.xml: gunakan basis data khusus pengujian\n<env name="APP_ENV" value="testing"/>\n<env name="DB_CONNECTION" value="sqlite"/>\n<env name="DB_DATABASE" value=":memory:"/>      <!-- SQLite di memori: cepat dan terisolasi -->\n\nphp artisan test                 # menjalankan semua tes (ringkas dan berwarna)\nphp artisan test --filter=Pesanan\nphp artisan test --parallel      # paralel untuk suite besar', lang: 'bash', caption: 'Jangan pernah menjalankan tes terhadap basis data pengembangan atau produksi; trait RefreshDatabase akan mengosongkannya.' },
            { h2: 'Tes fitur pertama' },
            { code: php`<?php
// tests/Feature/PesananTest.php  (gaya PHPUnit)
namespace Tests\Feature;

use App\Models\Produk;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PesananTest extends TestCase
{
    use RefreshDatabase;                    // skema dimigrasi ulang dan dibersihkan antar tes

    public function test_pengguna_dapat_membuat_pesanan(): void
    {
        // Arrange: siapkan data
        $user = User::factory()->create();
        $produk = Produk::factory()->create(['harga' => 20000, 'stok' => 10]);

        // Act: panggil rute sebagai pengguna yang login
        $respons = $this->actingAs($user)->post('/pesanan', [
            'produk_id' => $produk->id,
            'jumlah'    => 3,
        ]);

        // Assert: periksa hasil
        $respons->assertRedirect('/pesanan');
        $this->assertDatabaseHas('pesanan', ['user_id' => $user->id, 'total' => 60000]);
        $this->assertSame(7, $produk->fresh()->stok);
    }

    public function test_jumlah_melebihi_stok_ditolak(): void
    {
        $user = User::factory()->create();
        $produk = Produk::factory()->create(['stok' => 2]);

        $this->actingAs($user)
            ->post('/pesanan', ['produk_id' => $produk->id, 'jumlah' => 5])
            ->assertSessionHasErrors('jumlah');

        $this->assertDatabaseCount('pesanan', 0);
    }

    public function test_tamu_diarahkan_ke_login(): void
    {
        $this->post('/pesanan', [])->assertRedirect('/login');
    }
}`, lang: 'php', caption: 'Pola Arrange-Act-Assert: siapkan, jalankan, periksa. Nama tes menjelaskan perilaku dalam kalimat biasa sehingga laporan kegagalan terbaca seperti spesifikasi.' },
            { h3: 'Gaya Pest: lebih ringkas' },
            { code: php`<?php
// tests/Feature/PesananTest.php  (Pest)
use App\Models\{Produk, User};

uses(Illuminate\Foundation\Testing\RefreshDatabase::class);

it('membuat pesanan dan mengurangi stok', function () {
    $user = User::factory()->create();
    $produk = Produk::factory()->create(['harga' => 20000, 'stok' => 10]);

    $this->actingAs($user)
        ->post('/pesanan', ['produk_id' => $produk->id, 'jumlah' => 3])
        ->assertRedirect('/pesanan');

    expect($produk->fresh()->stok)->toBe(7);
    $this->assertDatabaseHas('pesanan', ['total' => 60000]);
});

it('menolak jumlah yang melebihi stok', function () {
    $produk = Produk::factory()->create(['stok' => 2]);
    $this->actingAs(User::factory()->create())
        ->post('/pesanan', ['produk_id' => $produk->id, 'jumlah' => 5])
        ->assertSessionHasErrors('jumlah');
});

// tes bertabel: satu logika, banyak data
it('memvalidasi surel', function (string $surel, bool $valid) {
    $r = $this->post('/daftar', ['nama' => 'Ani', 'surel' => $surel, 'sandi' => 'rahasia123', 'sandi_confirmation' => 'rahasia123']);
    $valid ? $r->assertSessionDoesntHaveErrors('surel') : $r->assertSessionHasErrors('surel');
})->with([['ani@contoh.id', true], ['bukan-surel', false], ['', false]]);`, lang: 'php', caption: 'Pest dan PHPUnit sama-sama dijalankan oleh php artisan test dan dapat hidup berdampingan. Pilih yang lebih nyaman bagi tim.' },
            { h2: 'Factory: data uji yang realistis' },
            { code: php`<?php
// database/factories/ProdukFactory.php
class ProdukFactory extends Factory
{
    public function definition(): array
    {
        return [
            'kategori_id' => Kategori::factory(),            // buat kategori otomatis bila tidak diberikan
            'nama'        => fake()->words(2, true),
            'harga'       => fake()->numberBetween(5, 200) * 1000,
            'stok'        => fake()->numberBetween(0, 100),
        ];
    }

    public function habis(): static                              // "state": variasi bernama
    {
        return $this->state(fn () => ['stok' => 0]);
    }
}

Produk::factory()->count(20)->create();
Produk::factory()->habis()->create();
User::factory()->has(Pesanan::factory()->count(3))->create();   // pengguna dengan 3 pesanan`, lang: 'php' },
            { code: js`// Gagasan factory: data yang valid secara bawaan + kemampuan menimpa hanya yang relevan untuk tes
let seq = 0;
const fabrikProduk = (timpa = {}) => ({ id: ++seq, nama: 'Produk ' + seq, harga: 20000, stok: 10, ...timpa });

const biasa = fabrikProduk();
const habis = fabrikProduk({ stok: 0 });
console.log(biasa, habis);

// Tes yang fokus: hanya mengatur data yang penting bagi skenario
function bisaDibeli(produk, jumlah) { return produk.stok >= jumlah && jumlah > 0; }
console.log('stok cukup  ->', bisaDibeli(fabrikProduk({ stok: 5 }), 3));
console.log('stok kurang ->', bisaDibeli(fabrikProduk({ stok: 2 }), 3));
console.log('jumlah nol  ->', bisaDibeli(fabrikProduk(), 0));`, lang: 'javascript', run: true, caption: 'Tes yang baik menunjukkan sekilas data mana yang penting: yang tidak disebut berarti tidak relevan, dan dibiarkan bernilai bawaan factory.' },
            { h2: 'Menguji API' },
            { code: php`<?php
public function test_daftar_produk_terpaginasi(): void
{
    Produk::factory()->count(30)->create();

    $this->getJson('/api/v1/produk')
        ->assertOk()
        ->assertJsonCount(15, 'data')
        ->assertJsonStructure(['data' => [['id', 'nama', 'harga']], 'meta' => ['total'], 'links']);
}

public function test_hanya_pemilik_boleh_mengubah_pesanan(): void
{
    $pesanan = Pesanan::factory()->create();
    $lain = User::factory()->create();

    $this->actingAs($lain, 'sanctum')
        ->putJson('/api/v1/pesanan/' . $pesanan->id, ['catatan' => 'x'])
        ->assertForbidden();                                    // 403
}`, lang: 'php' },
            { h2: 'Mock: sedikit dan hanya di perbatasan' },
            { code: php`<?php
use Illuminate\Support\Facades\{Mail, Queue, Http};
use App\Jobs\KirimSurelSambutan;

public function test_pendaftaran_mendispatch_job_sambutan(): void
{
    Queue::fake();                                    // tidak benar-benar mengantre, hanya mencatat
    $this->post('/daftar', [...]);
    Queue::assertPushed(KirimSurelSambutan::class);
}

public function test_klien_cuaca_menangani_kegagalan_layanan(): void
{
    Http::fake(['api.cuaca.id/*' => Http::response([], 500)]);   // layanan luar tidak dipanggil sungguhan
    $this->assertNull(app(LayananCuaca::class)->suhu('Madiun'));
}`, lang: 'php', caption: 'Fake untuk Mail, Queue, Http, Storage, dan Event adalah bawaan Laravel. Tiru hanya sistem di luar kendali Anda; jangan menirukan kode Anda sendiri sampai tes tidak menguji apa-apa.' },
            { h2: 'TDD: merah, hijau, rapikan' },
            { svg: 'cycle', label: 'Siklus TDD', items: ['Merah: tulis tes untuk perilaku baru (gagal)', 'Hijau: tulis kode paling sederhana agar lulus', 'Rapikan: refaktor dengan tes tetap hijau'], caption: 'Mulai dengan tes untuk bug yang dilaporkan: tulis tes yang mereproduksinya, perbaiki, dan Anda mendapat pencegah regresi gratis.' },
            { w: 'checklist', title: 'Tes yang sehat di proyek Laravel', items: ['Tes memakai basis data terpisah (SQLite memori atau basis uji) dengan RefreshDatabase.', 'Data dibuat dengan factory; tes hanya menyebut data yang relevan.', 'Alur penting diuji: autentikasi, otorisasi, validasi, pembayaran/pemesanan.', 'Layanan eksternal (surel, HTTP, antrean) di-fake, bukan dipanggil sungguhan.', 'Tes berjalan otomatis di CI pada setiap permintaan tarik.', 'Setiap bug yang diperbaiki mendapat satu tes regresi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Trait yang membersihkan basis data antar tes?', options: ['RefreshDatabase', 'WithoutMiddleware', 'Queueable'], answer: 0, why: 'Memigrasi ulang dan mengisolasi tiap tes.' }, { q: 'Kegunaan factory?', options: ['Membuat data uji yang realistis dengan cepat', 'Membuat rute', 'Mengirim surel'], answer: 0, why: 'Dengan nilai bawaan yang valid dan dapat ditimpa.' }, { q: 'Mock sebaiknya dipakai untuk...', options: ['Sistem di luar kendali (HTTP luar, surel)', 'Semua kelas sendiri', 'Tidak pernah'], answer: 0, why: 'Menghindari tes yang rapuh dan tidak bermakna.' }] },
            { exercise: [['Tulis tes: pengguna yang belum login tidak bisa membuka /dasbor.', '<code>$this->get("/dasbor")->assertRedirect("/login");</code>'], ['Mengapa tes sebaiknya tidak bergantung pada urutan eksekusi?', 'Tes yang saling bergantung gagal acak dan sulit dilacak; RefreshDatabase dan factory membuat tiap tes mandiri.'], ['Kapan memilih tes unit dibanding tes fitur?', 'Untuk logika murni tanpa kerangka kerja (perhitungan, pemformatan); tes fitur untuk alur yang melibatkan HTTP dan basis data.'], ['Bagaimana mereproduksi bug "pesanan dengan jumlah 0 lolos" dalam tes?', 'Tulis tes yang mengirim jumlah 0 dan mengharapkan galat validasi; ia gagal dulu (merah), lalu perbaiki validasi.']] },
            { summary: ['Tes fitur menguji alur lengkap; tes unit untuk logika murni; Laravel menyediakan basis data uji dan helper HTTP.', 'PHPUnit dan Pest berjalan lewat php artisan test.', 'Factory dan RefreshDatabase memberi data bersih dan terisolasi; pola Arrange-Act-Assert.', 'Fake hanya untuk layanan eksternal; TDD dan tes regresi menjaga kualitas seiring waktu.'] },
        ],
        faq: [['Pest atau PHPUnit?', 'Pest dibangun di atas PHPUnit dengan sintaks ringkas dan fitur modern; pilih sesuai selera tim, keduanya bisa dicampur.'], ['Bagaimana menguji tampilan Blade?', 'Dengan $this->get(...)->assertSee("teks"); untuk interaksi JavaScript gunakan Laravel Dusk atau Playwright.'], ['Berapa cakupan yang wajar?', 'Fokus pada jalur kritis dan logika bisnis; angka cakupan tinggi tanpa asersi bermakna tidak menjamin kualitas.']],
        sources: [['Laravel: Testing', 'https://laravel.com/docs/testing'], ['Laravel: HTTP Tests', 'https://laravel.com/docs/http-tests'], ['Pest PHP', 'https://pestphp.com/docs/'], ['Laravel: Database Testing', 'https://laravel.com/docs/database-testing']],
    },

    {
        slug: 'caching-dan-performa-laravel-cache-remember-optimize-dan-index',
        title: 'Caching dan Performa Laravel: Cache, Optimize, dan Index',
        description: 'Percepat Laravel: ukur dulu, perbaiki N+1 dan indeks, pakai Cache::remember dengan invalidasi, dan optimasi produksi (optimize, opcache).',
        date: D, category: C, level: 'Menengah', tags: ['cache Laravel', 'performa', 'optimize', 'indeks database', 'Redis'], cta: 'jasa',
        prereq: ['Eloquent', 'N+1 query'],
        lead: 'Aplikasi lambat jarang disebabkan PHP itu sendiri. Hampir selalu penyebabnya adalah terlalu banyak query, query tanpa indeks, atau pekerjaan berulang yang tidak perlu diulang. Urutan kerjanya: ukur, perbaiki query dan indeks, baru kemudian gunakan cache untuk hal yang benar-benar mahal. Cache yang ditambahkan terlalu dini hanya menyembunyikan masalah dan menambah bug basi.',
        body: [
            { objectives: ['mengukur sebelum mengoptimasi (query, waktu respons)', 'memperbaiki N+1 dan menambah indeks yang tepat', 'memakai pola cache-aside dengan Cache::remember dan TTL', 'merancang invalidasi cache agar data tidak basi', 'memakai optimasi produksi: config, route, view cache, dan opcache'] },
            NOTE_PHP,
            { h2: 'Urutan optimasi' },
            { ol: ['<b>Ukur</b>: waktu respons, jumlah query per halaman, query paling lambat (Debugbar, Telescope, log query, APM seperti Sentry atau New Relic).', '<b>Kurangi query</b>: perbaiki N+1 dengan eager loading, ambil kolom seperlunya, paginasi.', '<b>Percepat query</b>: tambah indeks pada kolom where, join, order by.', '<b>Cache</b> hasil yang mahal dan jarang berubah.', '<b>Pindahkan pekerjaan berat ke antrean</b>.', '<b>Optimasi server</b>: opcache, cache konfigurasi, PHP-FPM yang disetel, CDN untuk aset.'] },
            { h2: 'Indeks: perbedaan antara milidetik dan detik' },
            `Tanpa indeks, basis data memindai <b>seluruh tabel</b> untuk menemukan baris. Dengan indeks (pohon B), ia melompat langsung. Peragaan dengan SQLite:`,
            { code: py`import sqlite3, time, random

db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE pesanan (id INTEGER PRIMARY KEY, user_id INTEGER, status TEXT, total INTEGER)")
rng = random.Random(1)
db.executemany("INSERT INTO pesanan (user_id, status, total) VALUES (?, ?, ?)",
               [(rng.randint(1, 50_000), rng.choice(["baru", "bayar", "kirim", "selesai"]), rng.randint(10, 500) * 1000) for _ in range(300_000)])

def ukur(sql, args=(), ulang=30):
    t0 = time.perf_counter()
    for _ in range(ulang): db.execute(sql, args).fetchall()
    return (time.perf_counter() - t0) / ulang * 1000

sql = "SELECT id, total FROM pesanan WHERE user_id = ?"
print("rencana sebelum indeks :", db.execute("EXPLAIN QUERY PLAN " + sql, (777,)).fetchall()[0][3])
sebelum = ukur(sql, (777,))

db.execute("CREATE INDEX idx_pesanan_user ON pesanan (user_id)")
print("rencana sesudah indeks :", db.execute("EXPLAIN QUERY PLAN " + sql, (777,)).fetchall()[0][3])
sesudah = ukur(sql, (777,))

print(f"tanpa indeks: {sebelum:8.3f} ms per query")
print(f"dengan indeks: {sesudah:7.3f} ms per query  ({sebelum / sesudah:,.0f}x lebih cepat)")`, lang: 'python', run: true, caption: 'SCAN artinya memeriksa semua baris; SEARCH ... USING INDEX artinya melompat langsung. Gunakan EXPLAIN (MySQL/PostgreSQL) untuk memeriksa query lambat Anda.' },
            { code: php`<?php
// Migrasi: indeks tunggal, gabungan, dan unik
$table->index('user_id');
$table->index(['status', 'created_at']);       // urutan kolom penting: untuk where status = ? order by created_at
$table->unique('kode');

// Aturan praktis:
//  - kunci asing (user_id, kategori_id) hampir selalu perlu indeks
//  - kolom di where/order by yang sering dipakai pada tabel besar
//  - jangan indeks semuanya: tiap indeks memperlambat penulisan dan memakai ruang`, lang: 'php' },
            { h2: 'Cache-aside dengan Cache::remember' },
            { code: php`<?php
use Illuminate\Support\Facades\Cache;

// Ambil dari cache; bila tidak ada, jalankan closure, simpan 10 menit, lalu kembalikan
$kategori = Cache::remember('kategori:semua', now()->addMinutes(10), function () {
    return Kategori::withCount('produk')->orderBy('nama')->get();
});

// Kunci yang memuat parameter agar tidak bercampur
$halaman = $request->integer('page', 1);
$produk = Cache::remember("produk:terlaris:halaman:{$halaman}", 300, fn () => Produk::terlaris()->paginate(12));

// Invalidasi: hapus saat data berubah (di model observer atau event)
Cache::forget('kategori:semua');

// Tag (driver Redis/Memcached): hapus sekelompok kunci sekaligus
Cache::tags(['produk'])->remember('produk:terlaris', 300, fn () => ...);
Cache::tags(['produk'])->flush();`, lang: 'php', caption: 'Driver cache: file/database (sederhana), Redis atau Memcached (cepat dan mendukung tag). Atur CACHE_STORE di .env.' },
            { code: js`// Pola cache-aside dengan TTL dan invalidasi: peragaan berapa banyak panggilan "mahal" yang dihemat
function buatCache() {
    const simpan = new Map();
    let sekarang = 0, panggilanMahal = 0, hit = 0, miss = 0;
    return {
        maju: ms => { sekarang += ms; },
        remember(kunci, ttl, fn) {
            const e = simpan.get(kunci);
            if (e && e.kedaluwarsa > sekarang) { hit++; return e.nilai; }
            miss++; panggilanMahal++;
            const nilai = fn();
            simpan.set(kunci, { nilai, kedaluwarsa: sekarang + ttl });
            return nilai;
        },
        forget: k => simpan.delete(k),
        statistik: () => ({ hit, miss, panggilanMahal }),
    };
}

const c = buatCache();
let dbKategori = ['Kopi', 'Teh'];
const mahal = () => [...dbKategori];                       // seolah query yang lambat

for (let t = 0; t < 8; t++) { c.remember('kategori', 5000, mahal); c.maju(1000); }    // 8 permintaan, 1 detik apart, TTL 5 detik
console.log('tanpa perubahan data  :', JSON.stringify(c.statistik()), '(8 permintaan -> 2 query, bukan 8)');

dbKategori.push('Gula');                                   // data berubah!
console.log('setelah data berubah  :', JSON.stringify(c.remember('kategori', 5000, mahal)), '<- BASI sampai TTL habis');
c.forget('kategori');                                      // invalidasi eksplisit saat menyimpan data
console.log('setelah invalidasi    :', JSON.stringify(c.remember('kategori', 5000, mahal)));`, lang: 'javascript', run: true, caption: 'Dua cara menjaga cache tidak basi: TTL pendek (toleransi data lama) dan invalidasi eksplisit saat data berubah. Seperti kata pepatah klasik: hal tersulit dalam ilmu komputer adalah penamaan dan invalidasi cache.' },
            { callout: '<b>Jangan menyimpan data khusus pengguna dalam kunci cache umum</b>: misalnya <code>Cache::remember("keranjang", ...)</code> tanpa ID pengguna akan menampilkan keranjang orang lain. Sertakan semua variabel yang memengaruhi hasil (pengguna, bahasa, halaman, filter) di kunci.', kind: 'warn', title: 'Kebocoran lewat cache' },
            { h2: 'Optimasi produksi bawaan Laravel' },
            { code: 'php artisan optimize          # menyimpan cache config, route, event, dan view sekaligus\n# yang dilakukan: config:cache, route:cache, view:cache, event:cache\nphp artisan optimize:clear    # membersihkan semuanya (saat debugging)\n\ncomposer install --no-dev --optimize-autoloader     # tanpa dependensi pengembangan, autoloader dioptimasi\n\n# .env produksi\nAPP_ENV=production\nAPP_DEBUG=false\nLOG_LEVEL=warning', lang: 'bash', caption: 'Setelah php artisan config:cache, fungsi env() di luar berkas config tidak lagi membaca .env: gunakan config("...") di kode aplikasi. Aktifkan juga OPcache di PHP dan simpan sesi/cache di Redis untuk beban tinggi.' },
            { h2: 'Daftar periksa performa' },
            { w: 'checklist', title: 'Sebelum mengatakan "aplikasi ini lambat"', items: ['Saya sudah mengukur jumlah dan waktu query per halaman (Debugbar/Telescope).', 'Tidak ada N+1 (eager loading atau preventLazyLoading aktif).', 'Kolom yang sering dipakai where/join/order by sudah berindeks.', 'Daftar besar dipaginasi; hanya kolom yang diperlukan yang diambil.', 'Hasil mahal yang jarang berubah di-cache dengan kunci lengkap dan invalidasi.', 'Pekerjaan berat dipindah ke antrean.', 'optimize, opcache, dan autoloader teroptimasi dijalankan di produksi.', 'Aset statis disajikan lewat CDN dan dikompresi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Langkah pertama optimasi performa?', options: ['Mengukur', 'Menambah cache', 'Mengganti server'], answer: 0, why: 'Tanpa data, optimasi menebak.' }, { q: 'Indeks mempercepat query karena...', options: ['Menghindari pemindaian seluruh tabel', 'Mengompres data', 'Menambah RAM'], answer: 0, why: 'Struktur pohon memungkinkan pencarian cepat.' }, { q: 'Risiko utama cache adalah...', options: ['Data basi dan kebocoran antar pengguna', 'Terlalu cepat', 'Menambah query'], answer: 0, why: 'Karena itu perlu TTL, invalidasi, dan kunci yang lengkap.' }] },
            { exercise: [['Halaman beranda menampilkan 12 produk dan nama kategori masing-masing; berapa query jika N+1? Berapa dengan eager loading?', 'N+1: 1 + 12 = 13 query. Eager loading: 2 query.'], ['Query WHERE status = ? ORDER BY created_at lambat; indeks seperti apa?', 'Indeks gabungan (status, created_at): kolom filter lebih dulu, lalu kolom pengurutan.'], ['Mengapa env() jangan dipakai di luar berkas config setelah config:cache?', 'Saat config di-cache, .env tidak dibaca lagi sehingga env() mengembalikan null; baca lewat config().'], ['Kapan TTL pendek cukup tanpa invalidasi eksplisit?', 'Bila data boleh sedikit basi (statistik, daftar terlaris) dan lebih penting kesederhanaan.']] },
            { summary: ['Ukur dulu; perbaiki N+1 dan indeks sebelum menambah cache.', 'Cache::remember (cache-aside) dengan TTL dan invalidasi; kunci memuat semua variabel penentu hasil.', 'php artisan optimize, opcache, dan autoloader teroptimasi di produksi; APP_DEBUG=false.', 'Pindahkan pekerjaan berat ke antrean; gunakan Redis dan CDN untuk skala.'] },
        ],
        faq: [['Apa itu Octane?', 'Laravel Octane menjalankan aplikasi di server berkinerja tinggi (FrankenPHP, Swoole, RoadRunner) yang menyimpan aplikasi di memori antar permintaan sehingga jauh lebih cepat, dengan kehati-hatian soal keadaan global.'], ['Redis wajib?', 'Tidak untuk aplikasi kecil; cache file atau database cukup. Redis menjadi pilihan saat butuh kecepatan, tag cache, antrean, dan sesi bersama.'], ['Bagaimana menemukan query paling lambat?', 'Aktifkan slow query log di basis data, gunakan Telescope atau APM, dan periksa EXPLAIN pada query tersebut.']],
        sources: [['Laravel: Cache', 'https://laravel.com/docs/cache'], ['Laravel: Deployment (Optimization)', 'https://laravel.com/docs/deployment#optimization'], ['Use The Index, Luke', 'https://use-the-index-luke.com/'], ['Laravel Octane', 'https://laravel.com/docs/octane']],
    },

    {
        slug: 'keamanan-aplikasi-laravel-csrf-xss-sql-injection-dan-mass-assignment',
        title: 'Keamanan Laravel: CSRF, XSS, SQL Injection, Mass Assignment',
        description: 'Panduan keamanan Laravel: CSRF, XSS, SQL injection, mass assignment, unggahan berkas, dan konfigurasi produksi, dengan demonstrasi serangan.',
        date: D, category: C, level: 'Menengah', tags: ['keamanan Laravel', 'CSRF', 'XSS', 'SQL injection', 'OWASP'], cta: 'jasa',
        prereq: ['dasar Laravel', 'validasi', 'autentikasi'],
        lead: 'Laravel memberi banyak perlindungan secara bawaan, tetapi hanya bila dipakai sebagaimana mestinya. Hampir semua kerentanan di aplikasi Laravel muncul ketika pengembang <i>menghindari</i> mekanisme bawaan: SQL mentah dengan input pengguna, mencetak data tanpa escape, atau mematikan pemeriksaan "sementara". Materi ini memetakan ancaman utama dan cara Laravel menanganinya.',
        body: [
            { objectives: ['menjelaskan CSRF, XSS, dan SQL injection serta cara Laravel mencegahnya', 'mengenali mass assignment dan unggahan berkas berbahaya', 'mengamankan konfigurasi produksi (APP_DEBUG, .env, kunci)', 'menerapkan pembatasan laju, header keamanan, dan HTTPS', 'memakai daftar periksa keamanan sebelum rilis'] },
            NOTE_PHP,
            { h2: 'Peta ancaman (OWASP) dan perlindungan Laravel' },
            { table: { head: ['Ancaman', 'Gambaran', 'Perlindungan bawaan', 'Yang harus Anda jaga'], rows: [['SQL injection', 'Input pengguna menjadi bagian perintah SQL', 'Query builder dan Eloquent memakai binding parameter', 'Jangan menyisipkan input ke whereRaw/DB::raw tanpa binding'], ['XSS', 'Skrip jahat dari input tampil ke pengguna lain', 'Blade {{ }} meloloskan HTML', 'Hati-hati dengan {!! !!}, HTML dari pengguna, dan atribut href javascript:'], ['CSRF', 'Situs lain memicu aksi atas nama pengguna yang login', 'Token @csrf diperiksa middleware', 'Jangan mengecualikan rute dari CSRF tanpa alasan; API token memakai mekanisme lain'], ['Mass assignment', 'Pengguna menyisipkan kolom tak terduga', '$fillable/$guarded', 'Gunakan validated(), bukan all()'], ['Broken access control', 'Mengakses data milik orang lain (IDOR)', 'Policy dan Gate tersedia', 'Memanggil authorize() di setiap aksi'], ['Konfigurasi salah', 'Debug aktif, .env terbuka', '—', 'APP_DEBUG=false, root web di public/']] } },
            { h2: 'SQL injection: diperagakan' },
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE produk (id INTEGER PRIMARY KEY, nama TEXT, harga INTEGER, rahasia TEXT);
INSERT INTO produk VALUES (1,'Kopi',65000,'margin 40%'),(2,'Teh',40000,'margin 35%');
""")

def cari_rentan(kata):                 # setara DB::select("... LIKE '%$kata%'") dengan input mentah
    return db.execute("SELECT id, nama, harga FROM produk WHERE nama LIKE '%" + kata + "%'").fetchall()

def cari_aman(kata):                   # setara Produk::where('nama', 'like', "%$kata%") (binding)
    return db.execute("SELECT id, nama, harga FROM produk WHERE nama LIKE ?", ("%" + kata + "%",)).fetchall()

serangan = "x' UNION SELECT id, rahasia, harga FROM produk --"
print("normal  :", cari_rentan("Ko"))
print("diserang:", cari_rentan(serangan), "<- kolom rahasia bocor!")
print("aman    :", cari_aman(serangan))`, lang: 'python', run: true, caption: 'Pada versi rentan, input penyerang mengubah makna perintah dan mengambil kolom yang seharusnya tersembunyi. Pada versi dengan binding, seluruh input hanyalah data pencarian.' },
            { code: php`<?php
// AMAN: query builder / Eloquent memakai binding otomatis
Produk::where('nama', 'like', '%' . $kata . '%')->get();

// BERBAHAYA
DB::select("SELECT * FROM produk WHERE nama LIKE '%$kata%'");        // JANGAN
Produk::whereRaw("nama LIKE '%$kata%'")->get();                      // JANGAN

// Bila perlu SQL mentah, selalu pakai tanda tanya/binding bernama
Produk::whereRaw('nama LIKE ?', ['%' . $kata . '%'])->get();

// Nama kolom/urutan dari pengguna tidak bisa di-bind: whitelist
$kolom = in_array($request->urut, ['nama', 'harga', 'created_at'], true) ? $request->urut : 'nama';
Produk::orderBy($kolom)->get();`, lang: 'php' },
            { h2: 'XSS: mencetak data dengan aman' },
            { code: '{{-- AMAN: dilolos otomatis --}}\n<p>{{ $komentar->isi }}</p>\n\n{{-- BERBAHAYA: mencetak mentah; hanya untuk HTML yang Anda hasilkan atau sudah dibersihkan --}}\n<p>{!! $komentar->isi !!}</p>\n\n{{-- Bila pengguna boleh memakai HTML (editor kaya), bersihkan dengan pustaka daftar-putih seperti HTMLPurifier\n     atau konversi dari Markdown yang aman sebelum mencetak. --}}\n\n{{-- Hati-hati dengan URL dari pengguna: href="javascript:..." tetap berbahaya walau teks dilolos --}}\n<a href="{{ $profil->situs }}">Situs</a>   {{-- validasi skema: hanya http/https --}}\n\n{{-- Data ke JavaScript: gunakan @json agar aman --}}\n<script>const data = @json($data);</script>', lang: 'html' },
            { h2: 'CSRF: mengapa token diperlukan' },
            { code: py`import hmac, hashlib, secrets

# Gagasan token CSRF: nilai rahasia per sesi yang HANYA diketahui halaman Anda
kunci_server = secrets.token_bytes(32)
def token_untuk(sesi_id): return hmac.new(kunci_server, sesi_id.encode(), hashlib.sha256).hexdigest()

sesi_ani = "sesi-ani-123"
token_ani = token_untuk(sesi_ani)                        # disisipkan ke form lewat @csrf

def terima_transfer(sesi_id, token_kiriman):
    sah = hmac.compare_digest(token_untuk(sesi_id), token_kiriman or "")
    return "diproses" if sah else "419 DITOLAK (token tidak cocok)"

print("form asli situs        :", terima_transfer(sesi_ani, token_ani))
print("situs jahat (tanpa token):", terima_transfer(sesi_ani, None))    # browser Ani mengirim cookie sesi, tetapi token tidak diketahui penyerang
print("situs jahat (token tebakan):", terima_transfer(sesi_ani, "abc123"))`, lang: 'python', run: true, caption: 'Cookie sesi dikirim otomatis oleh browser ke situs mana pun yang memicu permintaan; token CSRF tidak, karena hanya halaman asli yang dapat membacanya. Cookie SameSite=Lax (bawaan Laravel) menambah lapisan perlindungan.' },
            { h2: 'Mass assignment dan unggahan berkas' },
            { code: php`<?php
// Mass assignment: BERBAHAYA
User::create($request->all());           // penyerang menambah is_admin=1 di permintaannya

// AMAN
User::create($request->validated());     // hanya kolom yang divalidasi
// Dan $fillable di model sebagai lapisan kedua.

// Unggahan berkas: validasi jenis dan ukuran, jangan percaya nama atau ekstensi dari klien
$request->validate(['dokumen' => ['required', 'file', 'mimes:pdf,jpg,png', 'max:5120']]);
$path = $request->file('dokumen')->store('dokumen', 'private');   // nama acak dibuat Laravel; simpan di luar public
// Sajikan lewat controller dengan pemeriksaan otorisasi, atau tautan bertanda tangan sementara:
// Storage::temporaryUrl($path, now()->addMinutes(10));`, lang: 'php', caption: 'Jangan menyimpan unggahan pengguna di folder yang dapat dieksekusi server atau memakai nama berkas asli (path traversal, berkas .php).' },
            { h2: 'Konfigurasi produksi' },
            { w: 'checklist', title: 'Sebelum rilis', items: ['APP_DEBUG=false dan APP_ENV=production (debug aktif menampilkan kode, jalur berkas, dan kadang rahasia).', 'Server web mengarah ke public/; .env tidak dapat diunduh.', 'APP_KEY unik dan rahasia; kata sandi basis data kuat dan akun basis data berhak minimum.', 'HTTPS di mana-mana; cookie Secure dan HttpOnly; HSTS diaktifkan.', 'Rate limiting pada login, reset kata sandi, dan API (throttle).', 'composer audit dijalankan dan dependensi diperbarui secara berkala.', 'Log tidak memuat kata sandi, token, atau data pribadi sensitif.', 'Cadangan basis data terenkripsi dan pemulihan pernah diuji.', 'Header keamanan dasar: Content-Security-Policy, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy.'] },
            { callout: 'Keamanan adalah proses, bukan fitur. Ikuti pengumuman keamanan Laravel dan PHP, perbarui versi yang masih didukung (versi lama berhenti menerima perbaikan keamanan), dan jangan pernah mengklaim "aman" tanpa pengujian: tinjauan kode, pemindaian kerentanan, dan uji penetrasi bagi aplikasi yang menyimpan data penting.', kind: 'info', title: 'Pemeliharaan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Direktif Blade yang mencetak tanpa escape (berbahaya)?', options: ['{!! !!}', '{{ }}', '@json'], answer: 0, why: '{!! !!} mencetak mentah.' }, { q: 'Cara mencegah SQL injection?', options: ['Binding parameter (query builder/Eloquent)', 'Menghapus tanda kutip', 'Menyembunyikan tabel'], answer: 0, why: 'Memisahkan perintah dari data.' }, { q: 'Mengapa APP_DEBUG harus false di produksi?', options: ['Halaman galat membocorkan kode dan konfigurasi', 'Lebih cepat saja', 'Aturan PHP'], answer: 0, why: 'Informasi sensitif tampil ke penyerang.' }] },
            { exercise: [['Temukan kerentanan: User::create($request->all()) pada form profil.', 'Mass assignment: penyerang dapat menambah kolom seperti is_admin; pakai $request->validated() dan $fillable.'], ['Mengapa nama kolom orderBy dari pengguna tidak aman walau memakai Eloquent?', 'Nama kolom tidak dapat di-bind; harus divalidasi lewat daftar putih.'], ['Mengapa pesan "surel atau kata sandi salah" lebih baik dari pesan terpisah?', 'Mencegah penyerang mengetahui surel mana yang terdaftar (enumerasi akun).'], ['Apa yang bisa terjadi bila folder unggahan dapat mengeksekusi PHP?', 'Penyerang mengunggah berkas .php berisi kode jahat lalu membukanya (eksekusi kode jarak jauh).']] },
            { summary: ['Laravel melindungi dari SQL injection (binding), XSS (Blade {{ }}), dan CSRF (@csrf) bila mekanismenya dipakai.', 'Waspadai raw SQL, {!! !!}, all() ke create(), unggahan berkas, dan IDOR.', 'Produksi: APP_DEBUG=false, root di public/, HTTPS, throttle, composer audit, header keamanan.', 'Keamanan berkelanjutan: perbarui versi, uji, dan pantau.'] },
        ],
        faq: [['Apakah Laravel aman secara default?', 'Cukup baik untuk ancaman umum jika dipakai sesuai praktik; kerentanan biasanya berasal dari kode aplikasi yang menghindari perlindungan bawaan atau konfigurasi produksi yang salah.'], ['Apa itu Content Security Policy?', 'Header yang membatasi sumber skrip, gaya, dan sumber daya lain yang boleh dimuat halaman, mengurangi dampak XSS.'], ['Bagaimana menguji keamanan?', 'Pemindaian dependensi (composer audit), analisis statis (Larastan/PHPStan), pemindaian dinamis (OWASP ZAP), dan uji penetrasi terotorisasi.']],
        sources: [['Laravel: Security (CSRF, Encryption, Hashing)', 'https://laravel.com/docs/csrf'], ['OWASP Top 10', 'https://owasp.org/www-project-top-ten/'], ['OWASP Cheat Sheet Series', 'https://cheatsheetseries.owasp.org/'], ['Laravel: Eloquent (Mass Assignment)', 'https://laravel.com/docs/eloquent#mass-assignment']],
    },
];
