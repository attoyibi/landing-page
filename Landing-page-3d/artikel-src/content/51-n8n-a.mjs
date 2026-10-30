const D = '2026-10-30';
const C = 'Otomasi & AI Kerja';
const NOTE_N8N = { callout: 'n8n adalah alat visual; alur kerjanya dibuat di editor n8n, bukan di halaman ini. Contoh kode JavaScript di bawah meniru logika node Code dan dijalankan sungguhan dengan Node.js agar hasilnya dapat dibuktikan. Antarmuka dan nama node dapat berubah antar versi, jadi cocokkan dengan dokumentasi n8n.', kind: 'info', title: 'Tentang contoh' };

export default [
    {
        slug: 'apa-itu-n8n-otomasi-alur-kerja-untuk-pemula',
        title: 'Apa Itu n8n? Otomasi Alur Kerja untuk Pemula',
        description: 'Kenali n8n: platform otomasi alur kerja visual, konsep trigger, node, dan item, perbedaannya dengan Zapier dan Make, serta contoh alur sederhana yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['n8n', 'otomasi', 'workflow', 'no-code', 'low-code'], cta: 'jasa',
        prereq: ['tidak ada; cukup terbiasa memakai aplikasi web'],
        lead: 'Banyak pekerjaan kantor berupa pemindahan data yang membosankan: menyalin pesanan dari formulir ke spreadsheet, mengirim pengingat, merangkum surel. n8n (dibaca "en-eight-en") memungkinkan Anda menyambungkan aplikasi dan membuat alur kerja otomatis lewat kanvas visual, dengan opsi menulis kode saat perlu. Artikel ini menjelaskan konsep dasarnya.',
        body: [
            { objectives: ['menjelaskan apa itu n8n dan masalah yang diselesaikannya', 'memahami trigger, node, koneksi, dan item data', 'membedakan n8n dengan Zapier dan Make', 'memahami cara kerja alur kerja dari trigger hingga hasil', 'mengenali tugas yang cocok dan tidak cocok diotomasi'] },
            NOTE_N8N,
            { h2: 'Apa itu n8n' },
            `n8n adalah platform otomasi alur kerja dengan pendekatan <i>fair-code</i>: kode sumbernya terbuka untuk dibaca dan dapat dijalankan sendiri (self-host), dengan lisensi yang membatasi sebagian penggunaan komersial tertentu. Anda dapat memakainya lewat layanan awan n8n atau memasangnya di server sendiri. Setiap alur kerja (workflow) tersusun dari <b>node</b> yang saling terhubung.`,
            { h2: 'Konsep inti' },
            { table: { head: ['Konsep', 'Arti', 'Contoh'], rows: [['Workflow', 'Satu alur otomasi lengkap', 'Pesanan masuk → catat → beri tahu'], ['Trigger', 'Pemicu yang memulai alur', 'Webhook, jadwal (cron), surel baru, baris baru di sheet'], ['Node', 'Satu langkah/aplikasi', 'Google Sheets, HTTP Request, IF, Code, WhatsApp'], ['Koneksi', 'Garis yang meneruskan data antar node', 'Keluaran satu node menjadi masukan berikutnya'], ['Item', 'Satu unit data (objek JSON) yang mengalir', 'Satu pesanan = satu item; 10 pesanan = 10 item'], ['Credential', 'Kunci/akses ke layanan, disimpan terenkripsi', 'Token Google, API key'], ['Execution', 'Satu kali alur berjalan, lengkap dengan log', 'Bisa dilihat berhasil/gagal dan datanya']] } },
            { svg: 'flow', label: 'Contoh alur kerja', steps: [{ t: 'Trigger: formulir terkirim', d: 'webhook menerima data pendaftar' }, { t: 'Node IF: ponsel valid?', d: 'cabang benar/salah' }, { t: 'Node Google Sheets', d: 'tambah baris pendaftar' }, { t: 'Node WhatsApp/Surel', d: 'kirim konfirmasi' }, { t: 'Node error (cabang salah)', d: 'catat untuk ditinjau' }] },
            { h2: 'Data mengalir sebagai item' },
            `Hal yang paling membantu memahami n8n: setiap node menerima <b>daftar item</b>, bekerja pada tiap item, lalu mengirim daftar item baru. Berikut peragaan logika itu dengan JavaScript, persis seperti isi node Code yang mengubah data pesanan (<code>$input.all()</code> mengembalikan item, tiap item punya properti <code>json</code>).`,
            { code: `// Peragaan: node Code menerima item dan mengembalikan item baru
const masukan = [
  { json: { nama: 'Ani',  produk: 'Kopi', jumlah: 2, harga: 20000, ponsel: '0812-3456-7890' } },
  { json: { nama: 'Budi', produk: 'Teh',  jumlah: 1, harga: 15000, ponsel: '12345' } },
  { json: { nama: 'Citra', produk: 'Kopi', jumlah: 3, harga: 20000, ponsel: '+62 813 9999 0000' } },
];

const keluaran = masukan.map(({ json }) => ({
  json: {
    ...json,
    total: json.jumlah * json.harga,
    ponselBersih: json.ponsel.replace(/[^\\d+]/g, '').replace(/^\\+?62/, '0'),
  },
}));

// node IF: pisahkan ponsel valid dan tidak valid
const valid = keluaran.filter(i => /^08\\d{8,11}$/.test(i.json.ponselBersih));
const tidak = keluaran.filter(i => !/^08\\d{8,11}$/.test(i.json.ponselBersih));

console.log('cabang BENAR (dikirim ke Sheets/WhatsApp):');
valid.forEach(i => console.log(' ', i.json.nama, i.json.total, i.json.ponselBersih));
console.log('cabang SALAH (dicatat untuk ditinjau):');
tidak.forEach(i => console.log(' ', i.json.nama, 'ponsel:', i.json.ponsel));`, lang: 'javascript', run: true, caption: 'Tiga item masuk, dua lolos cabang BENAR dan satu masuk cabang SALAH. Begitu pula alur n8n: data JSON bergerak dari node ke node, bercabang, dan bergabung kembali.' },
            { h2: 'n8n, Zapier, dan Make' },
            { table: { head: ['Aspek', 'n8n', 'Zapier', 'Make'], rows: [['Model', 'Self-host atau awan; fair-code', 'Layanan awan', 'Layanan awan'], ['Antarmuka', 'Kanvas node, bisa kode (JS/Python)', 'Daftar langkah linier, sederhana', 'Kanvas visual dengan modul'], ['Fleksibilitas', 'Tinggi: percabangan, loop, kode, HTTP bebas', 'Sedang; paling mudah dimulai', 'Tinggi untuk alur visual kompleks'], ['Kontrol data', 'Dapat di server sendiri', 'Data lewat layanan mereka', 'Data lewat layanan mereka'], ['Biaya', 'Self-host tanpa biaya lisensi dasar (bayar server); awan berbayar', 'Per tugas; bisa mahal saat volume naik', 'Per operasi; menengah'], ['Kurva belajar', 'Menengah', 'Rendah', 'Menengah']] } },
            { callout: 'Tidak ada yang selalu terbaik. Zapier cocok untuk otomasi cepat tanpa kerepotan teknis; n8n unggul bila Anda butuh kontrol, volume besar, atau data yang harus tetap di server Anda. Harga dan fitur berubah; periksa halaman resmi masing-masing sebelum memutuskan.', kind: 'info', title: 'Memilih' },
            { h2: 'Apa yang cocok diotomasi' },
            { ul: ['<b>Cocok</b>: tugas berulang dengan aturan jelas, bervolume, dan lintas aplikasi: pencatatan pesanan, notifikasi, laporan berkala, sinkronisasi data, pembersihan data.', '<b>Hati-hati</b>: keputusan yang butuh penilaian manusia (tinjau dulu sebelum kirim), tindakan tak dapat dibatalkan (hapus, bayar), dan proses yang belum Anda pahami (otomasi proses buruk hanya mempercepat kekacauan).', '<b>Aturan praktis</b>: lakukan manual sampai paham, tulis langkahnya, baru otomasi; selalu sediakan penanganan galat dan pemberitahuan kegagalan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa yang memulai workflow n8n?', options: ['Trigger', 'Credential', 'Execution'], answer: 0, why: 'Trigger adalah pemicu.' }, { q: 'Satu unit data yang mengalir antar node disebut...', options: ['Item', 'Folder', 'Skema'], answer: 0, why: 'Daftar item berformat JSON.' }, { q: 'Keunggulan utama self-host?', options: ['Data tetap di server sendiri', 'Selalu gratis sepenuhnya', 'Tanpa perawatan'], answer: 0, why: 'Server dan perawatan menjadi tanggung jawab Anda.' }] },
            { exercise: [['Sebutkan tiga pemicu (trigger) yang umum.', 'Webhook, jadwal (cron/interval), dan peristiwa aplikasi (surel baru, baris baru di Google Sheets).'], ['Mengapa penting ada cabang untuk data tidak valid?', 'Agar data buruk tidak merusak langkah berikutnya dan dapat ditinjau manusia, bukan hilang diam-diam.'], ['Kapan memilih Zapier daripada n8n?', 'Saat butuh otomasi sederhana yang cepat tanpa mengelola server, dengan volume kecil.'], ['Proses apa yang sebaiknya tidak diotomasi penuh?', 'Yang berisiko tinggi atau butuh penilaian: pembayaran, penghapusan, keputusan sensitif; setidaknya tambahkan langkah persetujuan manusia.']] },
            { summary: ['n8n merangkai aplikasi lewat workflow: trigger → node → hasil.', 'Data mengalir sebagai item JSON; node bekerja per item.', 'Self-host memberi kontrol data; Zapier/Make lebih mudah dimulai.', 'Otomasi proses yang sudah dipahami, dengan penanganan galat dan persetujuan manusia untuk tindakan berisiko.'] },
        ],
        faq: [['Apakah n8n gratis?', 'Edisi Community dapat dipasang sendiri tanpa biaya lisensi dasar (Anda menanggung server); layanan awan n8n berbayar. Lisensi fair-code punya batasan tertentu untuk penggunaan komersial, baca ketentuannya.'], ['Perlu bisa coding?', 'Tidak untuk alur dasar; sedikit JavaScript berguna untuk transformasi data.'], ['Apakah aman untuk data pelanggan?', 'Aman bila dikonfigurasi benar: HTTPS, akses terbatas, backup, dan pengelolaan credential yang baik.']],
        sources: [['n8n Documentation', 'https://docs.n8n.io/'], ['n8n: Key concepts', 'https://docs.n8n.io/workflows/'], ['n8n: Sustainable Use License', 'https://docs.n8n.io/sustainable-use-license/'], ['n8n Community', 'https://community.n8n.io/']],
    },

    {
        slug: 'install-n8n-self-host-docker-compose-dan-reverse-proxy',
        title: 'Install n8n Self-Host: Docker Compose dan HTTPS',
        description: 'Pasang n8n di server sendiri dengan Docker Compose: volume data, PostgreSQL, reverse proxy HTTPS, backup, keamanan, dan pemeriksa konfigurasi yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['n8n', 'Docker', 'self-host', 'reverse proxy', 'VPS'], cta: 'jasa',
        prereq: ['dasar Linux/terminal', 'Docker dasar'],
        lead: 'Menjalankan n8n sendiri memberi kontrol penuh atas data dan biaya, tetapi juga membuat Anda bertanggung jawab atas pembaruan, backup, dan keamanan. Panduan ini menyusun pemasangan yang rapi dengan Docker Compose, basis data PostgreSQL, dan HTTPS, plus daftar periksa agar tidak ada yang terlewat.',
        body: [
            { objectives: ['menjalankan n8n dengan Docker Compose dan volume persisten', 'mengatur variabel lingkungan penting (host, protokol, zona waktu, kunci enkripsi)', 'memakai PostgreSQL untuk produksi', 'menaruh n8n di belakang reverse proxy dengan HTTPS', 'menyusun strategi backup dan pembaruan'] },
            NOTE_N8N,
            { callout: 'Nama variabel lingkungan dan versi image dapat berubah. Rujuk dokumentasi resmi "Hosting n8n" untuk versi terbaru dan <b>kunci versi image</b> (jangan memakai tag latest tanpa pengujian) agar pembaruan tidak mengejutkan.', kind: 'warn', title: 'Periksa versi' },
            { h2: 'Arsitektur' },
            { svg: 'flow', label: 'Susunan layanan', steps: [{ t: 'Pengguna / webhook eksternal', d: 'mengakses https://n8n.contoh.id' }, { t: 'Reverse proxy (Caddy/Nginx/Traefik)', d: 'mengakhiri TLS, sertifikat otomatis' }, { t: 'Kontainer n8n', d: 'editor, webhook, eksekutor' }, { t: 'PostgreSQL', d: 'workflow, credential terenkripsi, riwayat eksekusi' }, { t: 'Volume + backup', d: 'dump basis data dan folder data' }] },
            { h2: 'docker-compose.yml' },
            { code: `services:
  postgres:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: \${DB_PASSWORD}
      POSTGRES_DB: n8n
    volumes:
      - db_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      retries: 5

  n8n:
    image: docker.n8n.io/n8nio/n8n:1.XX.X     # kunci ke versi tertentu yang sudah Anda uji
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n
      DB_POSTGRESDB_PASSWORD: \${DB_PASSWORD}
      N8N_HOST: n8n.contoh.id
      N8N_PROTOCOL: https
      WEBHOOK_URL: https://n8n.contoh.id/
      GENERIC_TIMEZONE: Asia/Jakarta
      TZ: Asia/Jakarta
      N8N_ENCRYPTION_KEY: \${N8N_ENCRYPTION_KEY}   # WAJIB dicadangkan: tanpa ini credential tidak bisa didekripsi
      EXECUTIONS_DATA_PRUNE: "true"
      EXECUTIONS_DATA_MAX_AGE: "336"               # jam; hapus riwayat lama agar basis data tidak membengkak
    volumes:
      - n8n_data:/home/node/.n8n
    ports:
      - "127.0.0.1:5678:5678"                      # hanya lokal; akses publik lewat reverse proxy

volumes:
  db_data:
  n8n_data:`, lang: 'bash', caption: 'Port hanya dibuka ke 127.0.0.1 sehingga publik tidak dapat menjangkau n8n langsung tanpa HTTPS. Rahasia ada di berkas .env yang tidak di-commit.' },
            { code: `# .env  (izin 600, jangan di-commit)
DB_PASSWORD=ganti-dengan-sandi-acak-panjang
N8N_ENCRYPTION_KEY=ganti-dengan-string-acak-32-karakter-atau-lebih

# membuat nilai acak:  openssl rand -hex 32`, lang: 'bash' },
            { h2: 'HTTPS dengan reverse proxy' },
            { code: `# Caddyfile (sertifikat Let's Encrypt otomatis)
n8n.contoh.id {
    reverse_proxy 127.0.0.1:5678
}`, lang: 'bash', caption: 'Caddy mengurus sertifikat dan pembaruannya otomatis. Dengan Nginx, gunakan certbot dan pastikan header Upgrade/Connection diteruskan agar editor (WebSocket) berfungsi.' },
            { code: 'docker compose pull\ndocker compose up -d\ndocker compose logs -f n8n', lang: 'bash' },
            { h2: 'Pemeriksa konfigurasi (peragaan)' },
            `Kesalahan konfigurasi sering baru ketahuan setelah webhook gagal. Berikut skrip kecil yang memeriksa daftar variabel penting, seperti yang bisa Anda jalankan sebelum <code>docker compose up</code>.`,
            { code: `const env = {
  DB_TYPE: 'postgresdb',
  N8N_HOST: 'n8n.contoh.id',
  N8N_PROTOCOL: 'http',                       // salah: webhook akan dibuat dengan http
  WEBHOOK_URL: 'https://n8n.contoh.id/',
  GENERIC_TIMEZONE: '',
  N8N_ENCRYPTION_KEY: 'pendek',               // terlalu pendek
};

const masalah = [];
if (env.N8N_PROTOCOL !== 'https') masalah.push('N8N_PROTOCOL sebaiknya https (di belakang reverse proxy HTTPS)');
if (!env.WEBHOOK_URL || !env.WEBHOOK_URL.startsWith('https://')) masalah.push('WEBHOOK_URL harus berupa URL https publik');
if (!env.GENERIC_TIMEZONE) masalah.push('GENERIC_TIMEZONE kosong: jadwal (cron) memakai zona waktu yang salah');
if (!env.N8N_ENCRYPTION_KEY || env.N8N_ENCRYPTION_KEY.length < 24) masalah.push('N8N_ENCRYPTION_KEY kurang kuat (minimal 24 karakter acak) dan harus dicadangkan');
if (env.DB_TYPE !== 'postgresdb') masalah.push('Produksi sebaiknya PostgreSQL, bukan SQLite bawaan');

console.log(masalah.length ? masalah.map(m => '- ' + m).join('\\n') : 'Konfigurasi tampak baik');`, lang: 'javascript', run: true, caption: 'Pemeriksaan sederhana seperti ini dapat dimasukkan ke skrip penyebaran. Kesalahan WEBHOOK_URL adalah penyebab paling umum webhook memakai alamat lokal yang tidak bisa dijangkau.' },
            { h2: 'Backup dan pembaruan' },
            { ul: ['<b>Backup harian</b>: <code>docker compose exec -T postgres pg_dump -U n8n n8n | gzip &gt; backup-$(date +%F).sql.gz</code>, salin ke penyimpanan terpisah (S3/Drive/server lain) dan <b>uji pemulihan</b> secara berkala.', '<b>Cadangkan N8N_ENCRYPTION_KEY</b>: tanpanya, backup basis data tidak berguna karena credential tak bisa didekripsi.', '<b>Ekspor workflow</b> ke JSON dan simpan di Git untuk riwayat dan peninjauan.', '<b>Pembaruan</b>: baca catatan rilis, backup dulu, ubah tag versi, <code>docker compose pull &amp;&amp; docker compose up -d</code>; uji di instans staging untuk alur kritis.', '<b>Pantau</b>: kapasitas disk, memori, dan eksekusi gagal; pasang uptime monitor pada /healthz.'] },
            { h2: 'Keamanan dasar' },
            { ul: ['Buat akun pemilik dengan sandi kuat dan aktifkan 2FA bila tersedia.', 'Batasi akses jaringan: firewall hanya membuka 80/443; SSH dengan kunci.', 'Webhook publik: gunakan autentikasi (header token, basic auth) atau tanda tangan, dan validasi isi.', 'Gunakan credential n8n, bukan menaruh kunci di dalam node atau kode.', 'Perbarui secara berkala; kerentanan ditemukan dari waktu ke waktu pada semua perangkat lunak.', 'Pisahkan lingkungan uji dan produksi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa risiko kehilangan N8N_ENCRYPTION_KEY?', options: ['Credential tersimpan tidak dapat didekripsi', 'Port berubah', 'Alur menjadi lambat'], answer: 0, why: 'Cadangkan kunci bersama basis data.' }, { q: 'Mengapa port diikat ke 127.0.0.1?', options: ['Publik tidak bisa mengakses tanpa melalui HTTPS proxy', 'Lebih cepat', 'Wajib oleh Docker'], answer: 0, why: 'Mengurangi permukaan serangan.' }, { q: 'Fungsi WEBHOOK_URL?', options: ['Alamat publik yang dipakai untuk URL webhook', 'Alamat basis data', 'Nama pengguna'], answer: 0, why: 'Tanpa itu URL webhook bisa menunjuk alamat internal.' }] },
            { exercise: [['Mengapa mengunci versi image lebih baik daripada latest?', 'Pembaruan terjadi atas kendali Anda setelah diuji, bukan tiba-tiba saat pull.'], ['Apa saja yang perlu dibackup?', 'Dump PostgreSQL, volume .n8n, berkas .env (terutama kunci enkripsi), dan ekspor workflow.'], ['Mengapa pangkas riwayat eksekusi?', 'Riwayat menumpuk dan membesarkan basis data; set EXECUTIONS_DATA_PRUNE dan masa simpan.'], ['Bagaimana mengamankan webhook publik?', 'Header token atau basic auth, validasi payload, dan pembatasan laju di reverse proxy.']] },
            { summary: ['Docker Compose: n8n + PostgreSQL + volume, rahasia di .env.', 'Reverse proxy (Caddy/Nginx) mengakhiri HTTPS; port n8n tidak dibuka publik.', 'Set N8N_HOST, N8N_PROTOCOL, WEBHOOK_URL, GENERIC_TIMEZONE, dan kunci enkripsi.', 'Backup basis data + kunci, uji pemulihan, kunci versi, pantau, dan amankan webhook.'] },
        ],
        faq: [['Berapa spesifikasi server minimal?', 'Untuk beban ringan, 1-2 vCPU dan 2 GB RAM cukup; tambah sesuai jumlah dan berat workflow.'], ['SQLite atau PostgreSQL?', 'SQLite bawaan cukup untuk uji coba; PostgreSQL disarankan untuk produksi.'], ['Bagaimana skala untuk volume besar?', 'n8n punya mode antrean (queue mode) dengan Redis dan worker terpisah; lihat dokumentasi scaling.']],
        sources: [['n8n: Docker Compose', 'https://docs.n8n.io/hosting/installation/server-setups/docker-compose/'], ['n8n: Configuration', 'https://docs.n8n.io/hosting/configuration/'], ['Caddy reverse_proxy', 'https://caddyserver.com/docs/caddyfile/directives/reverse_proxy'], ['Docker Compose', 'https://docs.docker.com/compose/']],
    },

    {
        slug: 'webhook-n8n-menerima-data-dari-form-dan-aplikasi-lain',
        title: 'Webhook n8n: Menerima Data dari Form dan Aplikasi',
        description: 'Belajar webhook n8n: URL uji dan produksi, membaca body, autentikasi, respons, validasi, dan idempotensi, dengan simulasi penerima webhook yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['n8n', 'webhook', 'API', 'HTTP', 'otomasi'], cta: 'jasa',
        prereq: ['dasar n8n', 'JSON dan HTTP dasar'],
        lead: 'Webhook adalah cara aplikasi lain "mengetuk pintu" n8n: begitu ada kejadian (formulir terkirim, pembayaran berhasil, commit baru), aplikasi itu mengirim permintaan HTTP ke alamat n8n dan alur kerja langsung berjalan. Tidak perlu polling berulang. Ini pemicu paling serbaguna, dan paling sering salah diamankan.',
        body: [
            { objectives: ['membuat node Webhook dan memahami URL uji vs produksi', 'membaca body, query, header, dan parameter dari permintaan', 'mengamankan webhook dengan token atau tanda tangan', 'mengatur respons ke pengirim', 'merancang penerima yang tahan duplikasi (idempotensi)'] },
            NOTE_N8N,
            { h2: 'Cara kerja' },
            { svg: 'flow', label: 'Siklus webhook', steps: [{ t: 'Kejadian di aplikasi pengirim', d: 'formulir dikirim / pembayaran berhasil' }, { t: 'HTTP POST ke URL webhook n8n', d: 'berisi JSON' }, { t: 'Node Webhook memicu workflow', d: 'body, headers, query tersedia sebagai item' }, { t: 'Langkah berikutnya berjalan', d: 'validasi, simpan, beri tahu' }, { t: 'Respons dikirim balik', d: 'langsung, atau setelah alur selesai' }] },
            { h2: 'URL uji dan produksi' },
            { table: { head: ['', 'Test URL', 'Production URL'], rows: [['Bentuk', '.../webhook-test/jalur', '.../webhook/jalur'], ['Kapan aktif', 'Hanya saat Anda menekan "Listen for test event"', 'Selama workflow diaktifkan (Active)'], ['Data', 'Tampil di editor untuk dirancang', 'Tercatat di Executions'], ['Pakai untuk', 'Mengembangkan dan mengamati bentuk data', 'Dipasang di aplikasi pengirim']] } },
            { callout: 'Kesalahan klasik: memasang <b>Test URL</b> di aplikasi pengirim lalu heran mengapa webhook tidak masuk setelah workflow aktif. Setelah selesai merancang, ganti ke <b>Production URL</b> dan aktifkan workflow.', kind: 'warn', title: 'Jebakan' },
            { h2: 'Mencoba dengan curl' },
            { code: `curl -X POST "https://n8n.contoh.id/webhook/pendaftaran" \\
  -H "Content-Type: application/json" \\
  -H "X-Token: rahasia-panjang" \\
  -d '{"nama":"Ani","surel":"ani@contoh.id","ponsel":"0812-3456-7890","kursus":"React Dasar"}'`, lang: 'bash', caption: 'Di workflow, data tersedia sebagai {{ $json.body.nama }}, header sebagai {{ $json.headers["x-token"] }}, dan query string sebagai {{ $json.query.sumber }}.' },
            { h2: 'Simulasi penerima webhook' },
            `Berikut peniruan logika yang seharusnya ada di workflow: cek token, validasi isi, tolak duplikat, lalu balas dengan kode HTTP yang tepat. Perhatikan urutan pemeriksaannya.`,
            { code: `const TOKEN = 'rahasia-panjang';
const sudahDiproses = new Set();                       // di n8n: simpan di basis data/Data Table/Redis

function validasi(b) {
  const galat = [];
  if (!b || typeof b !== 'object') return ['body kosong'];
  if (!b.nama || b.nama.trim().length < 2) galat.push('nama wajib');
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(b.surel || '')) galat.push('surel tidak valid');
  if (!b.idPesanan) galat.push('idPesanan wajib (untuk idempotensi)');
  return galat;
}

function tangani(req) {
  if (req.headers['x-token'] !== TOKEN) return { status: 401, body: { galat: 'tidak berwenang' } };
  const galat = validasi(req.body);
  if (galat.length) return { status: 422, body: { galat } };
  if (sudahDiproses.has(req.body.idPesanan)) return { status: 200, body: { pesan: 'duplikat diabaikan' } };
  sudahDiproses.add(req.body.idPesanan);
  return { status: 200, body: { pesan: 'diterima', nama: req.body.nama } };
}

const kasus = [
  ['tanpa token',        { headers: {}, body: { nama: 'Ani', surel: 'a@x.id', idPesanan: 1 } }],
  ['body tidak valid',   { headers: { 'x-token': TOKEN }, body: { nama: 'A', surel: 'bukan-surel' } }],
  ['pertama kali',       { headers: { 'x-token': TOKEN }, body: { nama: 'Ani', surel: 'ani@contoh.id', idPesanan: 101 } }],
  ['kiriman ulang',      { headers: { 'x-token': TOKEN }, body: { nama: 'Ani', surel: 'ani@contoh.id', idPesanan: 101 } }],
];
for (const [nama, req] of kasus) console.log(nama.padEnd(18), JSON.stringify(tangani(req)));`, lang: 'javascript', run: true, caption: '401 untuk tidak berwenang, 422 untuk data tidak valid, 200 untuk sukses (termasuk duplikat yang diabaikan). Pengirim webhook sering mengirim ulang bila tidak menerima 2xx, sehingga idempotensi (idPesanan) mencegah pemrosesan ganda.' },
            { h2: 'Rancangan di n8n' },
            { ol: ['Node <b>Webhook</b>: metode POST, jalur "pendaftaran", autentikasi Header Auth (credential), respons "Using Respond to Webhook Node".', 'Node <b>IF</b> / <b>Code</b>: validasi isi; cabang salah menuju Respond 422.', 'Node <b>Data Table / basis data</b>: cek apakah idPesanan sudah ada; jika ya, Respond 200 "duplikat".', 'Node kerja: tambah ke Google Sheets, kirim konfirmasi, dsb.', 'Node <b>Respond to Webhook</b>: balas cepat (JSON ringkas) agar pengirim tidak kehabisan waktu; pekerjaan berat dapat dilanjutkan setelah respons.'] },
            { h2: 'Praktik baik' },
            { ul: ['<b>Autentikasi</b>: header token, basic auth, atau verifikasi tanda tangan HMAC (banyak layanan seperti Stripe/GitHub menandatangani isi).', '<b>Validasi</b> semua masukan; jangan percaya data dari luar.', '<b>Balas cepat</b>: sebagian pengirim menganggap gagal jika respons lebih dari beberapa detik.', '<b>Idempotensi</b>: simpan ID kejadian yang sudah diproses.', '<b>Jangan menaruh rahasia di URL</b> (tercatat di log); pakai header.', '<b>Batasi laju</b> di reverse proxy dan batasi ukuran body.', '<b>Pantau</b> eksekusi gagal dan kirim peringatan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Webhook yang tersambung ke aplikasi sungguhan memakai...', options: ['Production URL dan workflow aktif', 'Test URL', 'Alamat apa saja'], answer: 0, why: 'Test URL hanya aktif saat mendengarkan di editor.' }, { q: 'Kode HTTP untuk data tidak valid yang umum?', options: ['422 (atau 400)', '200', '500'], answer: 0, why: '4xx menandakan kesalahan pengirim.' }, { q: 'Apa itu idempotensi?', options: ['Pemrosesan ulang kejadian yang sama tidak menimbulkan efek ganda', 'Kecepatan respons', 'Enkripsi'], answer: 0, why: 'Pengirim sering mencoba ulang.' }] },
            { exercise: [['Mengapa token sebaiknya di header, bukan di query?', 'URL tercatat di log proxy dan riwayat; header tidak ikut tercatat secara bawaan.'], ['Apa yang terjadi jika webhook tidak membalas 2xx?', 'Banyak pengirim mencoba ulang; tanpa idempotensi pemrosesan bisa ganda.'], ['Bagaimana membaca nama dari body di n8n?', 'Ekspresi {{ $json.body.nama }} pada node berikutnya.'], ['Kapan memakai Respond to Webhook?', 'Saat ingin mengontrol isi dan kode status respons, misalnya 422 untuk validasi gagal.']] },
            { summary: ['Webhook memicu workflow dari kejadian di aplikasi lain.', 'Pakai Production URL dengan workflow aktif; Test URL hanya untuk merancang.', 'Amankan dengan token/HMAC, validasi isi, balas cepat dengan kode status tepat.', 'Idempotensi mencegah pemrosesan ganda saat pengirim mencoba ulang.'] },
        ],
        faq: [['Bagaimana menguji webhook dari internet saat n8n di komputer lokal?', 'Pakai terowongan (ngrok, Cloudflare Tunnel) atau n8n tunnel untuk pengembangan; jangan untuk produksi.'], ['Bisakah webhook menerima berkas?', 'Bisa (multipart/form-data) dengan opsi binary di node Webhook; batasi ukuran.'], ['Berapa batas ukuran payload?', 'Ada batas bawaan yang dapat diatur lewat variabel lingkungan; cek dokumentasi untuk nilai terkini.']],
        sources: [['n8n: Webhook node', 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/'], ['n8n: Respond to Webhook', 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook/'], ['MDN: HTTP status codes', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'], ['Stripe: Webhook signatures', 'https://docs.stripe.com/webhooks#verify-events']],
    },

    {
        slug: 'n8n-google-sheets-otomasi-pencatatan-dan-laporan-otomatis',
        title: 'n8n dan Google Sheets: Pencatatan dan Laporan Otomatis',
        description: 'Otomasi Google Sheets dengan n8n: tambah dan perbarui baris, deduplikasi, laporan harian terjadwal, dengan logika agregasi yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['n8n', 'Google Sheets', 'laporan otomatis', 'otomasi', 'spreadsheet'], cta: 'jasa',
        prereq: ['dasar n8n', 'akun Google'],
        lead: 'Google Sheets adalah "basis data" yang paling akrab bagi banyak usaha kecil: pesanan, stok, absensi, daftar peserta. Menggabungkannya dengan n8n mengubah spreadsheet pasif menjadi sistem yang mencatat sendiri, menghitung sendiri, dan melaporkan sendiri setiap pagi.',
        body: [
            { objectives: ['menyambungkan n8n ke Google Sheets dengan credential yang benar', 'memakai operasi Append, Get Row(s), Update, dan Append or Update', 'memetakan kolom dan menjaga struktur sheet yang rapi', 'menghindari duplikat dengan kolom kunci', 'membuat laporan ringkasan terjadwal'] },
            NOTE_N8N,
            { h2: 'Menyambungkan' },
            { ul: ['Di n8n tambahkan credential <b>Google Sheets OAuth2</b> (ikuti panduan: buat proyek di Google Cloud, aktifkan Google Sheets API, buat OAuth client, izinkan redirect URL n8n Anda) atau gunakan <b>Service Account</b> dan bagikan sheet ke surel akun layanan itu.', 'Beri akses minimum yang diperlukan: bila hanya membaca, pakai akses baca saja.', 'Pilih dokumen dan sheet dari daftar; n8n membaca baris header sebagai nama kolom.'] },
            { h2: 'Operasi utama' },
            { table: { head: ['Operasi', 'Fungsi', 'Contoh pemakaian'], rows: [['Append Row', 'Menambah baris di akhir', 'Mencatat pesanan baru'], ['Get Row(s)', 'Membaca baris, bisa dengan filter', 'Mengambil pesanan hari ini'], ['Update Row', 'Mengubah baris berdasarkan kolom pencocok', 'Mengubah status menjadi "Dikirim"'], ['Append or Update', 'Perbarui jika kunci ada, tambah jika belum', 'Mencegah duplikat peserta'], ['Delete Rows', 'Menghapus baris/kolom', 'Hati-hati; sering lebih aman menandai "arsip"']] } },
            { callout: 'Rancang sheet seperti tabel basis data: <b>satu baris header</b> di baris 1, satu kolom <b>ID unik</b>, tanpa sel digabung, tanpa baris kosong di tengah, dan satu jenis data per kolom. Sheet yang rapi membuat otomasi andal; sheet "cantik" untuk dicetak membuatnya rapuh.', kind: 'good', title: 'Struktur sheet' },
            { h2: 'Pemetaan kolom dan deduplikasi' },
            { code: `// Pemetaan di node Google Sheets (mode "Map Each Column Manually"):
//   Tanggal   <- {{ $now.setZone('Asia/Jakarta').toFormat('yyyy-MM-dd HH:mm') }}
//   IdPesanan <- {{ $json.body.idPesanan }}
//   Nama      <- {{ $json.body.nama }}
//   Total     <- {{ $json.body.jumlah * $json.body.harga }}
//   Status    <- Baru
// Operasi "Append or Update Row" dengan kolom pencocok = IdPesanan
//   -> kiriman ulang pesanan yang sama memperbarui baris, bukan menambah baris baru.`, lang: 'javascript' },
            { h2: 'Laporan harian: agregasi data' },
            `Alur populer: setiap pukul 07.00 baca pesanan kemarin, hitung ringkasan, kirim ke WhatsApp atau surel. Logika agregasinya dapat ditulis di node Code. Berikut peragaan dengan data contoh:`,
            { code: `const baris = [
  { tanggal: '2026-10-29', idPesanan: 'A1', produk: 'Kopi', jumlah: 2, harga: 20000, status: 'Selesai' },
  { tanggal: '2026-10-29', idPesanan: 'A2', produk: 'Teh',  jumlah: 1, harga: 15000, status: 'Selesai' },
  { tanggal: '2026-10-29', idPesanan: 'A3', produk: 'Kopi', jumlah: 3, harga: 20000, status: 'Batal' },
  { tanggal: '2026-10-29', idPesanan: 'A4', produk: 'Kopi', jumlah: 1, harga: 20000, status: 'Selesai' },
  { tanggal: '2026-10-28', idPesanan: 'A0', produk: 'Teh',  jumlah: 5, harga: 15000, status: 'Selesai' },
  { tanggal: '2026-10-29', idPesanan: 'A2', produk: 'Teh',  jumlah: 1, harga: 15000, status: 'Selesai' },   // duplikat
];

const kemarin = '2026-10-29';
const unik = [...new Map(baris.map(b => [b.idPesanan, b])).values()];          // buang duplikat per IdPesanan
const hariIni = unik.filter(b => b.tanggal === kemarin && b.status === 'Selesai');

const perProduk = {};
for (const b of hariIni) {
  perProduk[b.produk] ??= { jumlah: 0, omzet: 0 };
  perProduk[b.produk].jumlah += b.jumlah;
  perProduk[b.produk].omzet += b.jumlah * b.harga;
}
const totalOmzet = Object.values(perProduk).reduce((s, p) => s + p.omzet, 0);
const rupiah = n => 'Rp' + n.toLocaleString('id-ID');

let pesan = \`Laporan \${kemarin}\\nPesanan selesai: \${hariIni.length}\\n\`;
for (const [produk, p] of Object.entries(perProduk)) pesan += \`- \${produk}: \${p.jumlah} pcs, \${rupiah(p.omzet)}\\n\`;
pesan += \`Total omzet: \${rupiah(totalOmzet)}\`;
console.log(pesan);`, lang: 'javascript', run: true, caption: 'Pesanan batal dan duplikat tidak dihitung; hanya tanggal kemarin yang dilaporkan. Teks ini kemudian diteruskan ke node WhatsApp/Surel.' },
            { svg: 'flow', label: 'Alur laporan harian', steps: [{ t: 'Trigger Jadwal 07:00', d: 'zona waktu Asia/Jakarta' }, { t: 'Google Sheets: Get Row(s)', d: 'filter tanggal kemarin' }, { t: 'Code: agregasi', d: 'buang duplikat, jumlahkan' }, { t: 'IF: ada pesanan?', d: 'jika kosong kirim "tidak ada pesanan"' }, { t: 'Kirim ke WhatsApp/Surel', d: 'ringkasan teks' }] },
            { h2: 'Tips dan batas' },
            { ul: ['<b>Batas API</b>: Google membatasi jumlah permintaan per menit; hindari membaca sheet berulang di loop. Ambil sekali, olah di memori.', '<b>Sheet besar</b>: di atas puluhan ribu baris pertimbangkan basis data sungguhan (PostgreSQL, Supabase, Airtable).', '<b>Konkurensi</b>: dua eksekusi yang menulis bersamaan dapat berebut; gunakan Append or Update dan ID unik.', '<b>Format tanggal</b>: simpan sebagai teks ISO (yyyy-MM-dd) agar perbandingan tidak bergantung pada pengaturan lokal.', '<b>Pengaman</b>: jangan memberi otomasi akses ke sheet yang berisi data yang tidak diperlukan; salin data yang perlu ke sheet khusus.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Operasi yang mencegah duplikat peserta?', options: ['Append or Update dengan kolom pencocok', 'Append Row saja', 'Delete Rows'], answer: 0, why: 'Memperbarui bila kunci sudah ada.' }, { q: 'Struktur sheet yang disarankan?', options: ['Header di baris 1, ID unik, tanpa sel digabung', 'Sel digabung agar cantik', 'Banyak tabel dalam satu sheet'], answer: 0, why: 'Rapi seperti tabel basis data.' }, { q: 'Mengapa agregasi dilakukan di node Code?', options: ['Sekali baca lalu olah di memori, hemat permintaan API', 'Lebih indah', 'Wajib'], answer: 0, why: 'Menghindari batas API.' }] },
            { exercise: [['Tambahkan hitung jumlah pesanan batal ke laporan.', 'Filter status === "Batal" pada tanggal yang sama dan sertakan hitungannya di pesan.'], ['Mengapa format tanggal ISO?', 'Urutan dan perbandingan teks sama dengan urutan waktu, bebas dari pengaturan lokal.'], ['Bagaimana mengirim laporan bila tidak ada pesanan?', 'Node IF cek panjang data; cabang kosong mengirim "Tidak ada pesanan kemarin" agar pengguna tahu otomasi tetap berjalan.'], ['Kapan sebaiknya beralih dari Sheets?', 'Saat data besar, banyak penulis bersamaan, atau butuh relasi dan transaksi.']] },
            { summary: ['Sambungkan lewat OAuth2 atau Service Account dengan akses minimum.', 'Sheet rapi: header, ID unik, satu jenis data per kolom.', 'Append or Update mencegah duplikat; ambil data sekali lalu agregasi di Code.', 'Jadwalkan laporan, tangani kasus kosong, dan sadari batas API serta ukuran data.'] },
        ],
        faq: [['Apakah bisa memicu workflow saat baris baru muncul?', 'Ya: node Google Sheets Trigger (polling) memeriksa baris baru secara berkala.'], ['Bagaimana bila nama kolom diubah?', 'Pemetaan akan rusak; ubah nama kolom hati-hati dan perbarui node, atau gunakan versi sheet terpisah untuk perubahan.'], ['Alternatif tanpa Google?', 'Excel Online, Airtable, NocoDB, atau basis data PostgreSQL/MySQL.']],
        sources: [['n8n: Google Sheets node', 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/'], ['n8n: Schedule Trigger', 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/'], ['Google Sheets API', 'https://developers.google.com/sheets/api'], ['n8n: Code node', 'https://docs.n8n.io/code/code-node/']],
    },

    {
        slug: 'whatsapp-otomatis-dengan-n8n-notifikasi-dan-chatbot-sederhana',
        title: 'WhatsApp Otomatis dengan n8n: Notifikasi dan Chatbot',
        description: 'Membangun notifikasi dan chatbot WhatsApp dengan n8n lewat WhatsApp Business Cloud API: template pesan, jendela 24 jam, webhook masuk, routing perintah, opt-in, dan kebijakan.',
        date: D, category: C, level: 'Menengah', tags: ['n8n', 'WhatsApp', 'chatbot', 'WhatsApp Business API', 'notifikasi'], cta: 'jasa',
        prereq: ['webhook n8n', 'akun Meta Business'],
        lead: 'Pelanggan Indonesia hidup di WhatsApp. Mengirim konfirmasi pesanan, pengingat kelas, atau menjawab pertanyaan umum secara otomatis sangat berharga, tetapi WhatsApp punya aturan ketat tentang siapa yang boleh dikirimi pesan dan kapan. Mengabaikan aturan itu membuat nomor Anda diblokir. Artikel ini menjelaskan jalur resmi dan cara merancang alurnya.',
        body: [
            { objectives: ['membedakan WhatsApp Business App, Cloud API, dan cara tidak resmi', 'memahami template pesan, jendela layanan 24 jam, dan opt-in', 'menerima pesan masuk lewat webhook dan merutekannya', 'membuat chatbot perintah sederhana dengan handoff ke manusia', 'mengenali risiko kebijakan dan privasi'] },
            NOTE_N8N,
            { callout: 'Gunakan jalur <b>resmi</b>: WhatsApp Business Platform (Cloud API) dari Meta, langsung atau lewat penyedia resmi. Pustaka tidak resmi yang mengendalikan WhatsApp Web melanggar ketentuan layanan dan nomor dapat diblokir permanen. Harga, kategori percakapan, dan aturan berubah; baca dokumentasi Meta terbaru.', kind: 'warn', title: 'Pilih jalur resmi' },
            { h2: 'Jalur yang tersedia' },
            { table: { head: ['Jalur', 'Cocok untuk', 'Catatan'], rows: [['WhatsApp Business App', 'Usaha kecil, balas manual', 'Gratis; pesan otomatis terbatas (salam, jawaban cepat)'], ['WhatsApp Cloud API (Meta)', 'Otomasi, notifikasi, chatbot', 'Perlu akun Meta Business, nomor, verifikasi; berbayar per percakapan/pesan sesuai kategori'], ['Penyedia resmi (BSP)', 'Butuh dukungan, kotak masuk tim', 'Biaya tambahan; mengelola API untuk Anda'], ['Pustaka tidak resmi', 'Tidak disarankan', 'Melanggar ketentuan; risiko blokir']] } },
            { h2: 'Aturan inti' },
            { ul: ['<b>Opt-in</b>: kirim hanya ke orang yang setuju dihubungi lewat WhatsApp (catat kapan dan dari mana).', '<b>Jendela layanan 24 jam</b>: setelah pengguna mengirim pesan, Anda boleh membalas bebas selama 24 jam.', '<b>Di luar 24 jam</b>: hanya <b>pesan template</b> yang sudah disetujui Meta (utilitas seperti konfirmasi pesanan, otentikasi, pemasaran).', '<b>Template</b> dengan variabel: "Halo {{1}}, pesanan {{2}} sudah dikirim."; diajukan dan ditinjau lebih dulu.', '<b>Opt-out</b>: sediakan cara berhenti (balas BERHENTI) dan patuhi segera.', '<b>Pemasaran</b> dikenai batas dan biaya lebih tinggi; kualitas rendah (banyak laporan/blokir) menurunkan batas kirim.'] },
            { h2: 'Mengirim notifikasi' },
            { code: `# Cloud API: kirim pesan template (n8n: node HTTP Request atau node WhatsApp Business Cloud)
curl -X POST "https://graph.facebook.com/v21.0/<PHONE_NUMBER_ID>/messages" \\
  -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" \\
  -d '{
    "messaging_product": "whatsapp",
    "to": "6281234567890",
    "type": "template",
    "template": {
      "name": "konfirmasi_pesanan",
      "language": { "code": "id" },
      "components": [{ "type": "body", "parameters": [
        { "type": "text", "text": "Ani" }, { "type": "text", "text": "A1042" } ] }]
    }
  }'`, lang: 'bash', caption: 'Nomor tujuan memakai format internasional tanpa tanda plus atau nol di depan (62812...). Nama template dan versi API mengikuti dokumentasi Meta saat ini.' },
            { h2: 'Menerima pesan masuk' },
            `Meta mengirim pesan masuk ke webhook n8n Anda (daftarkan URL produksi dan token verifikasi di dasbor aplikasi Meta). Anda lalu merutekan isi pesan ke jawaban yang tepat. Peragaan logika routing dan jendela 24 jam:`,
            { code: `const JAM24 = 24 * 3600 * 1000;

function normalisasiNomor(n) {
  const d = String(n).replace(/[^\\d]/g, '');
  return d.startsWith('0') ? '62' + d.slice(1) : d;
}

function rute(teks) {
  const t = teks.trim().toLowerCase();
  if (/^(halo|hai|menu|bantuan)\\b/.test(t)) return { jawab: 'Halo! Ketik: HARGA, JADWAL, STATUS <no-pesanan>, atau ADMIN untuk bicara dengan staf.' };
  if (t === 'harga')  return { jawab: 'Kursus React Dasar: Rp750.000. Kursus Flutter: Rp900.000.' };
  if (t === 'jadwal') return { jawab: 'Kelas dimulai setiap awal bulan. Balas DAFTAR untuk mendaftar.' };
  const m = t.match(/^status\\s+([a-z0-9-]+)$/);
  if (m) return { jawab: \`Mencari pesanan \${m[1].toUpperCase()}...\`, aksi: 'cariPesanan', arg: m[1] };
  if (t === 'admin')  return { aksi: 'handoff', jawab: 'Baik, staf kami akan segera membalas.' };
  if (t === 'berhenti') return { aksi: 'optout', jawab: 'Anda tidak akan menerima pesan lagi. Terima kasih.' };
  return { jawab: 'Maaf, saya belum paham. Ketik MENU untuk melihat pilihan.' };
}

function bolehBalasBebas(waktuPesanTerakhirPengguna, sekarang) {
  return sekarang - waktuPesanTerakhirPengguna <= JAM24;   // di luar itu wajib template
}

const sekarang = Date.parse('2026-10-30T10:00:00Z');
console.log(normalisasiNomor('0812-3456-7890'), normalisasiNomor('+62 813 9999 0000'));
for (const p of ['Halo', 'harga', 'status a1042', 'ADMIN', 'blablabla', 'berhenti']) {
  console.log(p.padEnd(14), '->', JSON.stringify(rute(p)));
}
console.log('bebas dibalas (2 jam lalu)  :', bolehBalasBebas(sekarang - 2 * 3600e3, sekarang));
console.log('bebas dibalas (30 jam lalu) :', bolehBalasBebas(sekarang - 30 * 3600e3, sekarang));`, lang: 'javascript', run: true, caption: 'Chatbot perintah (kata kunci) lebih dapat diprediksi dan murah dibanding model bahasa. Perintah ADMIN memberi jalan keluar ke manusia; BERHENTI memenuhi hak opt-out.' },
            { svg: 'flow', label: 'Alur chatbot', steps: [{ t: 'Webhook: pesan masuk dari Meta', d: 'verifikasi token dan tanda tangan' }, { t: 'Switch: rutekan teks', d: 'menu / harga / status / admin / berhenti' }, { t: 'Cari data bila perlu', d: 'status pesanan dari Sheets/basis data' }, { t: 'Kirim balasan', d: 'teks (dalam 24 jam) atau template' }, { t: 'Catat percakapan', d: 'untuk tinjauan dan handoff ke staf' }] },
            { h2: 'Menambahkan AI' },
            { ul: ['Untuk pertanyaan bebas, panggil model bahasa (node AI Agent) dengan konteks FAQ/produk Anda; batasi agar hanya menjawab dari dasar pengetahuan Anda.', 'Selalu sediakan <b>handoff ke manusia</b> dan jangan biarkan AI membuat janji (harga, jadwal) di luar data yang diberikan.', 'Beri tahu pengguna bahwa mereka berbicara dengan asisten otomatis.', 'Catat dan tinjau percakapan untuk memperbaiki jawaban; hindari mengirim data pribadi sensitif ke model tanpa kebutuhan.'] },
            { h2: 'Privasi dan etika' },
            { ul: ['Nomor ponsel adalah data pribadi; patuhi UU Pelindungan Data Pribadi: tujuan jelas, persetujuan, keamanan, dan hak hapus.', 'Jangan membeli daftar nomor atau mengirim pesan massal tanpa persetujuan.', 'Simpan token di credential n8n; batasi siapa yang dapat melihat riwayat eksekusi karena memuat isi pesan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Di luar 24 jam sejak pesan pengguna, Anda hanya boleh mengirim...', options: ['Pesan template yang disetujui', 'Teks bebas', 'Apa saja'], answer: 0, why: 'Template harus disetujui Meta.' }, { q: 'Mengapa tidak memakai pustaka tidak resmi?', options: ['Melanggar ketentuan dan berisiko blokir', 'Terlalu cepat', 'Tidak ada pustaka'], answer: 0, why: 'Gunakan Cloud API resmi.' }, { q: 'Fitur wajib pada chatbot yang baik?', options: ['Handoff ke manusia dan opt-out', 'Tanpa batas pesan', 'Hanya bahasa Inggris'], answer: 0, why: 'Pengguna harus bisa keluar dan bertemu staf.' }] },
            { exercise: [['Ubah nomor 0813-1111-2222 menjadi format Cloud API.', '6281311112222.'], ['Pesan konfirmasi pesanan dikirim 3 hari setelah pelanggan terakhir membalas. Boleh bebas?', 'Tidak; di luar 24 jam harus pesan template utilitas yang disetujui.'], ['Tambahkan perintah "ALAMAT" ke router.', 'Tambah cabang t === "alamat" yang membalas alamat dan jam buka.'], ['Apa risiko mengirim pemasaran ke daftar tanpa opt-in?', 'Laporan spam, kualitas nomor turun, batas kirim dikurangi, dan pelanggaran hukum pelindungan data.']] },
            { summary: ['Gunakan WhatsApp Business Cloud API resmi, bukan cara tidak resmi.', 'Jendela 24 jam untuk balasan bebas; di luarnya pakai template yang disetujui; wajib opt-in dan opt-out.', 'Webhook masuk → rutekan → balas; handoff ke manusia selalu tersedia.', 'AI boleh membantu bila dibatasi pada data Anda; jaga privasi dan kebijakan.'] },
        ],
        faq: [['Berapa biaya WhatsApp API?', 'Berbayar berdasarkan kategori pesan dan negara; ada ketentuan gratis tertentu. Biaya berubah, cek daftar harga Meta terbaru.'], ['Bisa memakai nomor yang sudah dipakai di aplikasi biasa?', 'Nomor yang didaftarkan ke Cloud API umumnya tidak dapat dipakai bersamaan di aplikasi biasa kecuali fitur koeksistensi yang disediakan Meta; cek dokumentasi.'], ['Alternatif WhatsApp?', 'Telegram Bot (lebih longgar, gratis) atau surel/SMS untuk notifikasi.']],
        sources: [['WhatsApp Business Platform', 'https://developers.facebook.com/docs/whatsapp/cloud-api'], ['WhatsApp: Message templates', 'https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates'], ['n8n: WhatsApp Business Cloud node', 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/'], ['UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi', 'https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022']],
    },
];
