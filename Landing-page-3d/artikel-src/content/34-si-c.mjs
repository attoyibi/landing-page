const D = '2026-10-23';
const C = 'Sistem Informasi';
const py = String.raw;

const REF_LAUDON = ['Kenneth C. Laudon dan Jane P. Laudon, Management Information Systems: Managing the Digital Firm (Pearson)', ''];
const REF_STAIR = ['Ralph M. Stair dan George W. Reynolds, Principles of Information Systems (Cengage)', ''];
const REF_KIMBALL = ['Ralph Kimball dan Margy Ross, The Data Warehouse Toolkit (Wiley, edisi ke-3)', ''];
const REF_PMBOK = ['Project Management Institute, A Guide to the Project Management Body of Knowledge (PMBOK Guide)', 'https://www.pmi.org/pmbok-guide-standards'];
const REF_NIST = ['NIST Cybersecurity Framework', 'https://www.nist.gov/cyberframework'];
const REF_OWASP = ['OWASP Top 10', 'https://owasp.org/www-project-top-ten/'];

export default [
    {
        slug: 'arsitektur-sistem-informasi-client-server-3-tier-cloud-dan-microservices',
        title: 'Arsitektur Sistem Informasi: Client-Server, 3-Tier, Cloud',
        description: 'Pahami arsitektur sistem informasi: mainframe, client-server, 3-tier, web, cloud (IaaS, PaaS, SaaS), monolit vs microservices, serta trade-off skalabilitas, ketersediaan, dan biaya.',
        date: D, category: C, level: 'Menengah', tags: ['arsitektur sistem', 'client-server', 'three-tier', 'cloud computing', 'microservices'], cta: 'none',
        prereq: ['konsep sistem informasi', 'jaringan dasar'],
        lead: 'Arsitektur menjawab pertanyaan: bagaimana bagian-bagian sistem disusun dan saling berkomunikasi? Pilihan arsitektur memengaruhi biaya, kecepatan, keamanan, dan kemudahan perubahan selama bertahun-tahun, jauh lebih besar daripada pilihan bahasa pemrograman.',
        body: [
            { objectives: ['menggambarkan evolusi arsitektur dari mainframe ke cloud', 'menjelaskan pola client-server dan arsitektur tiga lapis', 'membedakan IaaS, PaaS, dan SaaS serta model penerapan cloud', 'membandingkan monolit dan microservices', 'menilai skalabilitas vertikal dan horizontal serta ketersediaan'] },
            { h2: 'Evolusi singkat' },
            { svg: 'timeline', label: 'Evolusi arsitektur', events: [['1960–80an', 'Mainframe', 'Satu komputer pusat, terminal bodoh'], ['1980–90an', 'Client-server', 'Klien di PC, basis data di server'], ['1990–2000an', 'Web dan tiga lapis', 'Browser sebagai klien tipis, server aplikasi'], ['2006–kini', 'Cloud', 'Sumber daya disewa sesuai pemakaian'], ['2010–kini', 'Microservices dan kontainer', 'Layanan kecil mandiri, diorkestrasi otomatis']] },
            { h2: 'Client-server dan arsitektur tiga lapis' },
            { svg: 'diagram', w: 680, h: 190, label: 'Arsitektur tiga lapis', nodes: [{ id: 'c', x: 90, y: 90, shape: 'rect', w: 140, h: 64, t: 'Presentasi: browser atau aplikasi seluler' }, { id: 'a', x: 340, y: 90, shape: 'rect', w: 160, h: 64, t: 'Logika bisnis: server aplikasi, API' }, { id: 'd', x: 590, y: 90, shape: 'store', w: 140, h: 50, t: 'Data: basis data' }], edges: [{ from: 'c', to: 'a', label: 'HTTP/HTTPS', head: 'arrow', tail: 'arrow' }, { from: 'a', to: 'd', label: 'SQL', head: 'arrow', tail: 'arrow' }], caption: 'Memisahkan presentasi, logika, dan data memungkinkan masing-masing diganti atau diskalakan sendiri-sendiri.' },
            { table: { head: ['Lapisan', 'Tanggung jawab', 'Contoh teknologi'], rows: [['Presentasi', 'Tampilan dan interaksi pengguna', 'HTML/CSS/JavaScript, React, Flutter'], ['Logika bisnis', 'Aturan dan proses (validasi, perhitungan)', 'Laravel, Spring Boot, Node.js'], ['Data', 'Penyimpanan dan pengambilan data', 'PostgreSQL, MySQL, MongoDB']] } },
            { callout: 'Aturan emas: <b>jangan menaruh aturan bisnis di klien</b>. Validasi di browser hanya kenyamanan pengguna; pengguna jahat dapat melewatinya. Server selalu memvalidasi ulang.', kind: 'warn', title: 'Keamanan' },
            { h2: 'Cloud computing' },
            `NIST mendefinisikan cloud sebagai model akses jaringan sesuai permintaan ke sumber daya komputasi bersama yang dapat disediakan dan dilepas dengan cepat. Ciri pentingnya: layanan mandiri sesuai permintaan, akses lewat jaringan, penyatuan sumber daya, elastisitas cepat, dan pemakaian yang terukur.`,
            { table: { head: ['Model layanan', 'Anda mengelola', 'Penyedia mengelola', 'Contoh'], rows: [['IaaS', 'OS, runtime, aplikasi, data', 'Server, jaringan, penyimpanan fisik', 'Mesin virtual AWS EC2, Google Compute Engine'], ['PaaS', 'Aplikasi dan data', 'OS, runtime, infrastruktur', 'Cloudflare Workers, Heroku, Vercel, Google App Engine'], ['SaaS', 'Konfigurasi dan data pengguna', 'Hampir semuanya', 'Gmail, Google Workspace, Microsoft 365, Moodle Cloud']] } },
            { w: 'compare', title: 'Model penerapan', tabs: [{ label: 'Publik', html: 'Dimiliki dan dikelola penyedia, dipakai banyak pelanggan. Biaya awal rendah, elastis. Pertimbangkan lokasi data dan kepatuhan.' }, { label: 'Privat', html: 'Infrastruktur khusus satu organisasi, di tempat atau dihosting. Kendali tinggi, biaya dan pengelolaan lebih besar.' }, { label: 'Hibrida', html: 'Gabungan privat dan publik, misalnya data sensitif di privat dan beban puncak di publik.' }] },
            { h2: 'Monolit atau microservices' },
            { svg: 'versus', label: 'Monolit vs microservices', left: { title: 'Monolit', items: ['Satu aplikasi, satu basis kode', 'Sederhana dibangun dan diuji', 'Skala sebagai satu kesatuan', 'Perubahan kecil mengharuskan rilis ulang semuanya'] }, right: { title: 'Microservices', items: ['Banyak layanan kecil mandiri', 'Skala dan rilis per layanan', 'Kompleks: jaringan, data terpisah', 'Perlu otomasi dan pemantauan matang'] } },
            { callout: 'Banyak organisasi memulai dengan <b>monolit modular</b> dan memecahnya menjadi layanan hanya ketika ada alasan nyata (tim besar, bagian dengan beban sangat berbeda). Microservices memindahkan kompleksitas dari kode ke operasi; bila tim kecil, harganya sering terlalu mahal.', kind: 'info', title: 'Saran praktis' },
            { h2: 'Skalabilitas dan ketersediaan' },
            { table: { head: ['Pendekatan', 'Arti', 'Kelebihan', 'Keterbatasan'], rows: [['Vertikal (scale up)', 'Menambah CPU/RAM pada satu mesin', 'Sederhana, tanpa ubah aplikasi', 'Ada batas, satu titik kegagalan'], ['Horizontal (scale out)', 'Menambah banyak mesin di belakang penyeimbang beban', 'Hampir tanpa batas, tahan gagal', 'Aplikasi harus dirancang tanpa keadaan lokal (stateless)']] } },
            { code: py`# Ketersediaan: berapa lama boleh mati dalam setahun?
menit_setahun = 365 * 24 * 60
for target in [99.0, 99.5, 99.9, 99.95, 99.99]:
    mati = menit_setahun * (1 - target / 100)
    print(f"{target:>6}% -> boleh mati sekitar {mati:7.0f} menit/tahun ({mati/60:5.1f} jam)")

# Komponen berantai: ketersediaan total = hasil kali
komponen = [0.999, 0.999, 0.9995]      # web, aplikasi, basis data
total = 1
for k in komponen: total *= k
print(f"tiga komponen berantai: {total*100:.3f}%  (lebih rendah dari komponen terlemah)")

# dua server paralel (salah satu cukup)
tunggal = 0.99
paralel = 1 - (1 - tunggal) ** 2
print(f"satu server 99% -> dua server paralel: {paralel*100:.2f}%")`, lang: 'python', run: true, caption: 'Target "sembilan" terlihat kecil tetapi mahal: 99,99% hanya mengizinkan sekitar 53 menit mati per tahun. Redundansi menaikkan ketersediaan, rantai komponen menurunkannya.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Aplikasi Anda saja yang dikelola, platform dan OS oleh penyedia. Ini model...', options: ['PaaS', 'IaaS', 'SaaS'], answer: 0, why: 'Penyedia mengelola infrastruktur dan runtime.' }, { q: 'Scale out berarti...', options: ['Menambah jumlah mesin', 'Menambah RAM mesin yang sama', 'Mengganti basis data'], answer: 0, why: 'Skala horizontal.' }, { q: 'Mengapa validasi di server tetap perlu walau klien sudah memvalidasi?', options: ['Klien dapat dilewati', 'Server lebih cepat', 'Aturan Tailwind'], answer: 0, why: 'Hanya server yang dapat dipercaya.' }] },
            { exercise: [['Gambarkan arsitektur tiga lapis untuk aplikasi KRS kampus.', 'Browser (presentasi) → server aplikasi dengan API KRS (logika) → basis data akademik (data).'], ['Sebutkan satu keuntungan dan satu kerugian cloud publik bagi UMKM.', 'Untung: tanpa investasi awal besar; rugi: ketergantungan penyedia dan biaya yang bisa membengkak bila tidak dipantau.'], ['Mengapa aplikasi stateless memudahkan scale out?', 'Permintaan dapat dilayani server mana pun karena tidak bergantung pada data sesi yang tersimpan di server tertentu.'], ['Hitung ketersediaan dua komponen berantai masing-masing 99,5%.', '0,995 × 0,995 ≈ 99,0%.']] },
            { summary: ['Arsitektur berevolusi dari mainframe ke client-server, tiga lapis, cloud, dan microservices.', 'Tiga lapis memisahkan presentasi, logika, dan data; aturan bisnis ada di server.', 'IaaS, PaaS, SaaS membedakan pembagian tanggung jawab dengan penyedia cloud.', 'Monolit sederhana; microservices fleksibel tetapi menuntut operasi matang.', 'Redundansi menaikkan ketersediaan; komponen berantai menurunkannya.'] },
        ],
        faq: [['Apa itu serverless?', 'Model PaaS tempat kode dijalankan per kejadian dan ditagih per pemakaian tanpa mengelola server, misalnya Cloudflare Workers atau AWS Lambda.'], ['Apa itu kontainer?', 'Paket aplikasi beserta dependensinya yang berjalan terisolasi (Docker); diorkestrasi oleh Kubernetes.'], ['Apa bedanya skalabilitas dan performa?', 'Performa adalah kecepatan pada beban tertentu; skalabilitas adalah kemampuan mempertahankan performa saat beban bertambah.']],
        sources: [['NIST SP 800-145: The NIST Definition of Cloud Computing', 'https://csrc.nist.gov/pubs/sp/800/145/final'], ['Martin Fowler: Microservices', 'https://martinfowler.com/articles/microservices.html'], REF_LAUDON, ['Martin Kleppmann, Designing Data-Intensive Applications (O\'Reilly, 2017)', '']],
    },

    {
        slug: 'keamanan-sistem-informasi-cia-triad-ancaman-dan-kontrol',
        title: 'Keamanan Sistem Informasi: CIA Triad, Ancaman, dan Kontrol',
        description: 'Pelajari dasar keamanan informasi: CIA triad, ancaman dan kerentanan, serangan umum (phishing, SQL injection, XSS), autentikasi, enkripsi, prinsip least privilege, dan pertahanan berlapis.',
        date: D, category: C, level: 'Menengah', tags: ['keamanan informasi', 'CIA triad', 'SQL injection', 'autentikasi', 'OWASP'], cta: 'none',
        prereq: ['konsep SI', 'arsitektur SI'],
        lead: 'Keamanan bukan produk yang dipasang di akhir, melainkan sifat yang dirancang sejak awal. Materi ini memberi kerangka berpikir (CIA triad, ancaman, kerentanan, kontrol) lalu memperagakan dua kelemahan paling klasik, SQL injection dan penyimpanan kata sandi, dengan kode yang dijalankan.',
        body: [
            { objectives: ['menjelaskan kerahasiaan, integritas, dan ketersediaan (CIA)', 'membedakan aset, ancaman, kerentanan, risiko, dan kontrol', 'memperagakan SQL injection dan pencegahannya dengan kueri berparameter', 'menjelaskan penyimpanan kata sandi yang aman (hash + salt)', 'menerapkan least privilege, pertahanan berlapis, dan autentikasi multifaktor'] },
            { h2: 'CIA triad' },
            { w: 'cards', title: 'Tiga tujuan keamanan informasi (ketuk kartu)', items: [{ tag: 'Confidentiality', front: 'Kerahasiaan', backTag: 'Arti', back: 'Hanya pihak berwenang yang dapat membaca. Kontrol: autentikasi, otorisasi, enkripsi. Pelanggaran: kebocoran data pelanggan.' }, { tag: 'Integrity', front: 'Integritas', backTag: 'Arti', back: 'Data tidak berubah tanpa izin dan dapat dipercaya. Kontrol: hash, tanda tangan digital, log audit. Pelanggaran: nilai diubah oleh peretas.' }, { tag: 'Availability', front: 'Ketersediaan', backTag: 'Arti', back: 'Sistem dan data dapat diakses saat dibutuhkan. Kontrol: redundansi, cadangan, perlindungan DDoS. Pelanggaran: ransomware mengunci data.' }] },
            { h2: 'Istilah yang sering tertukar' },
            { table: { head: ['Istilah', 'Arti', 'Contoh'], rows: [['Aset', 'Sesuatu yang berharga', 'Basis data pelanggan'], ['Ancaman', 'Penyebab potensial kerugian', 'Penyerang, malware, bencana, kesalahan manusia'], ['Kerentanan', 'Kelemahan yang dapat dimanfaatkan', 'Perangkat lunak belum di-patch, kata sandi lemah'], ['Risiko', 'Kemungkinan × dampak ancaman memanfaatkan kerentanan', 'Peluang kebocoran data dikali kerugiannya'], ['Kontrol', 'Tindakan mengurangi risiko', 'Firewall, pelatihan, MFA, cadangan']] } },
            { h2: 'Demo 1: SQL injection' },
            `SQL injection terjadi ketika masukan pengguna disambung langsung ke kueri sehingga dapat mengubah makna kueri. Kelemahan ini konsisten berada dalam daftar risiko teratas OWASP selama bertahun-tahun.`,
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE pengguna (nama TEXT, sandi TEXT, peran TEXT);
INSERT INTO pengguna VALUES ('ani','rahasia123','mahasiswa'),('admin','sangat-rahasia','admin');
""")

def login_rentan(nama, sandi):
    sql = f"SELECT nama, peran FROM pengguna WHERE nama = '{nama}' AND sandi = '{sandi}'"     # menyambung string: BERBAHAYA
    return db.execute(sql).fetchall()

def login_aman(nama, sandi):
    return db.execute("SELECT nama, peran FROM pengguna WHERE nama = ? AND sandi = ?", (nama, sandi)).fetchall()   # kueri berparameter

print("normal           :", login_rentan("ani", "rahasia123"))
print("salah sandi      :", login_rentan("ani", "salah"))
serangan = "' OR '1'='1"
print("injection        :", login_rentan("admin", serangan))      # masuk sebagai admin TANPA sandi
print("aman, diserang   :", login_aman("admin", serangan))
print("aman, sah        :", login_aman("ani", "rahasia123"))`, lang: 'python', run: true, caption: 'Pada versi rentan, teks "OR 1=1" menjadi bagian dari perintah SQL sehingga kondisi sandi selalu benar. Pada kueri berparameter, masukan hanya dianggap data, bukan kode.' },
            { callout: 'Pencegahan utama: <b>kueri berparameter (prepared statement)</b>, validasi dan pembersihan masukan sebagai lapisan tambahan, akun basis data dengan hak minimum, dan pesan kesalahan yang tidak membocorkan struktur basis data.', kind: 'good', title: 'Pertahanan' },
            { h2: 'Demo 2: menyimpan kata sandi' },
            { code: py`import hashlib, hmac, os

def hash_tanpa_garam(sandi):
    return hashlib.sha256(sandi.encode()).hexdigest()

# dua pengguna dengan sandi sama menghasilkan hash sama -> mudah ditebak bila bocor
print("tanpa garam:", hash_tanpa_garam("password1")[:16], hash_tanpa_garam("password1")[:16])

def buat_hash(sandi):
    garam = os.urandom(16)                                                    # acak per pengguna
    h = hashlib.pbkdf2_hmac("sha256", sandi.encode(), garam, 200_000)         # lambat disengaja
    return garam.hex() + ":" + h.hex()

def cocok(sandi, tersimpan):
    garam_hex, h_hex = tersimpan.split(":")
    h = hashlib.pbkdf2_hmac("sha256", sandi.encode(), bytes.fromhex(garam_hex), 200_000)
    return hmac.compare_digest(h.hex(), h_hex)                                 # perbandingan waktu-tetap

a, b = buat_hash("password1"), buat_hash("password1")
print("dengan garam: dua hash sama?", a == b)
print("verifikasi benar:", cocok("password1", a), " salah:", cocok("salah", a))`, lang: 'python', run: true, caption: 'Pakai fungsi hash khusus kata sandi yang lambat dan bergaram (bcrypt, scrypt, Argon2, atau PBKDF2). Jangan pernah menyimpan kata sandi apa adanya atau dengan SHA-256 polos.' },
            { w: 'password', title: 'Seberapa kuat kata sandi?', desc: 'Ketik kata sandi uji (jangan yang asli) dan lihat estimasi entropinya.' },
            { h2: 'Kontrol berlapis' },
            { svg: 'layers', label: 'Pertahanan berlapis', items: [{ t: 'Kebijakan dan manusia', d: 'pelatihan, kesadaran phishing, kebijakan akses' }, { t: 'Perimeter dan jaringan', d: 'firewall, segmentasi, VPN, pemantauan' }, { t: 'Host dan aplikasi', d: 'patch, antivirus/EDR, validasi masukan, autentikasi' }, { t: 'Data', d: 'enkripsi, cadangan, kontrol akses, log audit' }], caption: 'Defense in depth: bila satu lapisan jebol, lapisan lain masih melindungi.' },
            { table: { head: ['Prinsip', 'Penjelasan'], rows: [['Least privilege', 'Beri hak akses sekecil mungkin yang diperlukan untuk tugas'], ['Pemisahan tugas', 'Orang yang membuat transaksi berbeda dari yang menyetujuinya'], ['Autentikasi multifaktor (MFA)', 'Sesuatu yang diketahui (sandi) + dimiliki (ponsel/kunci) + adalah (biometrik)'], ['Gagal aman', 'Saat error, sistem menolak akses, bukan membukanya'], ['Jangan percaya masukan', 'Semua data dari luar harus divalidasi']] } },
            { h2: 'Ancaman umum' },
            { ul: ['<b>Phishing</b> dan rekayasa sosial: menipu manusia, vektor serangan paling sering berhasil.', '<b>Malware dan ransomware</b>: kode jahat; cadangan terpisah (offline) adalah pertahanan terpenting.', '<b>XSS (cross-site scripting)</b>: skrip jahat disisipkan ke halaman yang dilihat pengguna lain; cegah dengan meloloskan (escape) keluaran.', '<b>DDoS</b>: membanjiri layanan sehingga tidak tersedia.', '<b>Ancaman orang dalam</b>: akses sah yang disalahgunakan atau kecerobohan.', '<b>Rantai pasok</b>: kerentanan pada pustaka atau penyedia yang Anda pakai.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pelanggaran integritas adalah...', options: ['Data diubah tanpa izin', 'Data dibaca pihak tak berwenang', 'Sistem tak bisa diakses'], answer: 0, why: 'Integritas menjaga keaslian data.' }, { q: 'Cara utama mencegah SQL injection?', options: ['Kueri berparameter', 'Menyembunyikan tabel', 'Memperpanjang sandi'], answer: 0, why: 'Memisahkan kode dari data.' }, { q: 'Mengapa kata sandi di-hash dengan garam?', options: ['Agar hash yang sama tidak mengungkap sandi yang sama dan serangan tabel pelangi gagal', 'Agar lebih pendek', 'Agar dapat didekripsi'], answer: 0, why: 'Garam acak per pengguna.' }] },
            { exercise: [['Identifikasi aset, ancaman, kerentanan, dan kontrol: "Laptop dosen berisi data nilai dicuri karena tidak dienkripsi."', 'Aset: data nilai; ancaman: pencurian; kerentanan: tidak dienkripsi; kontrol: enkripsi disk, kebijakan penyimpanan.'], ['Mengapa MFA mengurangi dampak kebocoran kata sandi?', 'Penyerang yang memiliki sandi tetap butuh faktor kedua yang dimiliki pengguna.'], ['Beri contoh penerapan least privilege di sistem akademik.', 'Mahasiswa hanya melihat nilainya sendiri; dosen hanya mengisi nilai kelasnya; admin tidak memakai akun super untuk pekerjaan harian.'], ['Apa bedanya enkripsi dan hashing?', 'Enkripsi dapat dibalik dengan kunci; hashing satu arah dan dipakai untuk verifikasi.']] },
            { summary: ['CIA: kerahasiaan, integritas, ketersediaan.', 'Risiko = ancaman memanfaatkan kerentanan pada aset; kontrol menguranginya.', 'SQL injection dicegah dengan kueri berparameter; kata sandi disimpan dengan hash lambat bergaram.', 'Pertahanan berlapis, least privilege, dan MFA adalah prinsip dasar.'] },
        ],
        faq: [['Apa itu zero trust?', 'Pendekatan yang tidak mempercayai pengguna atau perangkat hanya karena berada di jaringan internal; setiap permintaan diverifikasi.'], ['Apakah antivirus cukup?', 'Tidak. Ia hanya satu lapisan; pembaruan, MFA, cadangan, dan kesadaran pengguna sama pentingnya.'], ['Dari mana belajar lebih lanjut?', 'OWASP Top 10, NIST Cybersecurity Framework, dan latihan legal seperti OWASP Juice Shop atau platform CTF.']],
        sources: [REF_OWASP, REF_NIST, ['Dokumentasi Python: hashlib (pbkdf2_hmac)', 'https://docs.python.org/3/library/hashlib.html'], ['OWASP Password Storage Cheat Sheet', 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html']],
    },

    {
        slug: 'manajemen-proyek-sistem-informasi-wbs-critical-path-dan-gantt',
        title: 'Manajemen Proyek SI: WBS, Critical Path, dan Gantt',
        description: 'Belajar mengelola proyek sistem informasi: ruang lingkup, WBS, estimasi, jaringan kerja, critical path method (CPM), float, Gantt, risiko, dengan perhitungan CPM yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['manajemen proyek', 'WBS', 'critical path', 'Gantt', 'estimasi'], cta: 'none',
        prereq: ['SDLC'],
        lead: 'Proyek perangkat lunak terkenal terlambat dan melebihi anggaran. Manajemen proyek tidak menjamin sukses, tetapi memberi alat untuk melihat masalah lebih awal: apa yang harus dikerjakan, urutannya, siapa yang mengerjakan, dan jalur mana yang tidak boleh terlambat sedikit pun.',
        body: [
            { objectives: ['mendefinisikan proyek, ruang lingkup, dan segitiga batasan', 'menyusun WBS (work breakdown structure)', 'menghitung critical path method: ES, EF, LS, LF, dan float', 'membaca bagan Gantt', 'mengidentifikasi dan menilai risiko proyek'] },
            { h2: 'Proyek dan batasannya' },
            `Proyek adalah upaya sementara untuk menghasilkan produk atau layanan unik, dengan awal dan akhir yang jelas. Tiga batasan utama saling bertukar: <b>ruang lingkup, waktu, dan biaya</b>, dengan <b>mutu</b> di pusatnya. Mengubah salah satu hampir selalu memengaruhi yang lain.`,
            { svg: 'diagram', w: 520, h: 230, label: 'Segitiga batasan proyek', nodes: [{ id: 'a', x: 260, y: 35, shape: 'rect', w: 140, h: 36, t: 'Ruang lingkup' }, { id: 'b', x: 90, y: 180, shape: 'rect', w: 100, h: 36, t: 'Waktu' }, { id: 'c', x: 430, y: 180, shape: 'rect', w: 100, h: 36, t: 'Biaya' }, { id: 'q', x: 260, y: 125, shape: 'circle', w: 80, h: 80, t: 'Mutu' }], edges: [{ from: 'a', to: 'b', head: 'none' }, { from: 'b', to: 'c', head: 'none' }, { from: 'c', to: 'a', head: 'none' }], caption: 'Menambah fitur (lingkup) tanpa menambah waktu atau biaya akan menurunkan mutu.' },
            { h2: 'WBS: memecah pekerjaan' },
            `WBS memecah hasil akhir proyek menjadi paket kerja yang cukup kecil untuk diperkirakan dan ditugaskan. Aturan 100%: WBS harus mencakup seluruh pekerjaan, tidak lebih dan tidak kurang.`,
            { code: '1. Sistem Akademik Kampus\n   1.1 Analisis\n       1.1.1 Wawancara pemangku kepentingan\n       1.1.2 Dokumen kebutuhan\n   1.2 Perancangan\n       1.2.1 Rancangan basis data\n       1.2.2 Rancangan antarmuka\n   1.3 Pembangunan\n       1.3.1 Modul KRS\n       1.3.2 Modul nilai\n   1.4 Pengujian dan penerapan\n       1.4.1 Uji sistem dan UAT\n       1.4.2 Pelatihan dan migrasi data', lang: 'text' },
            { h2: 'Critical Path Method (CPM)' },
            `CPM mencari rangkaian kegiatan terpanjang yang menentukan durasi minimum proyek. Kegiatan di jalur ini disebut <b>kritis</b>: bila terlambat sehari, proyek terlambat sehari. Kegiatan lain memiliki <b>float</b> (kelonggaran).`,
            { table: { head: ['Istilah', 'Rumus', 'Arti'], rows: [['ES (earliest start)', 'max(EF semua pendahulu)', 'Paling awal kegiatan dapat mulai'], ['EF (earliest finish)', 'ES + durasi', 'Paling awal selesai'], ['LF (latest finish)', 'min(LS semua penerus)', 'Paling lambat selesai tanpa menunda proyek'], ['LS (latest start)', 'LF − durasi', 'Paling lambat mulai'], ['Float (slack)', 'LS − ES', 'Kelonggaran; 0 berarti kritis']] } },
            { code: py`# Kegiatan: nama -> (durasi hari, [pendahulu])
kegiatan = {
    "A Analisis":        (5, []),
    "B Desain DB":       (4, ["A Analisis"]),
    "C Desain UI":       (3, ["A Analisis"]),
    "D Modul data":      (8, ["B Desain DB"]),
    "E Modul tampilan":  (6, ["C Desain UI"]),
    "F Integrasi":       (4, ["D Modul data", "E Modul tampilan"]),
    "G Pengujian":       (5, ["F Integrasi"]),
}

# forward pass
ES, EF = {}, {}
for k in kegiatan:                      # urutan dibuat sudah topologis
    dur, pend = kegiatan[k]
    ES[k] = max((EF[p] for p in pend), default=0)
    EF[k] = ES[k] + dur
durasi_proyek = max(EF.values())

# backward pass
LF, LS = {}, {}
penerus = {k: [j for j, (_, p) in kegiatan.items() if k in p] for k in kegiatan}
for k in reversed(list(kegiatan)):
    dur = kegiatan[k][0]
    LF[k] = min((LS[s] for s in penerus[k]), default=durasi_proyek)
    LS[k] = LF[k] - dur

print(f"{'kegiatan':<18}{'dur':>4}{'ES':>4}{'EF':>4}{'LS':>4}{'LF':>4}{'float':>6}")
for k, (dur, _) in kegiatan.items():
    fl = LS[k] - ES[k]
    print(f"{k:<18}{dur:>4}{ES[k]:>4}{EF[k]:>4}{LS[k]:>4}{LF[k]:>4}{fl:>6}{'   <- kritis' if fl == 0 else ''}")
print("durasi proyek:", durasi_proyek, "hari")
print("jalur kritis:", " -> ".join(k.split()[0] for k in kegiatan if LS[k] == ES[k]))`, lang: 'python', run: true, caption: 'Jalur A–B–D–F–G (5+4+8+4+5 = 26 hari) adalah yang terpanjang. Jalur desain UI dan modul tampilan memiliki float 3 hari.' },
            { svg: 'diagram', w: 680, h: 230, label: 'Jaringan kegiatan', nodes: [{ id: 'A', x: 60, y: 115, shape: 'rect', w: 90, h: 40, t: 'A (5)' }, { id: 'B', x: 200, y: 55, shape: 'rect', w: 90, h: 40, t: 'B (4)', fill: '#fde8e8' }, { id: 'C', x: 200, y: 175, shape: 'rect', w: 90, h: 40, t: 'C (3)' }, { id: 'D', x: 350, y: 55, shape: 'rect', w: 90, h: 40, t: 'D (8)', fill: '#fde8e8' }, { id: 'E', x: 350, y: 175, shape: 'rect', w: 90, h: 40, t: 'E (6)' }, { id: 'F', x: 500, y: 115, shape: 'rect', w: 90, h: 40, t: 'F (4)', fill: '#fde8e8' }, { id: 'G', x: 630, y: 115, shape: 'rect', w: 90, h: 40, t: 'G (5)', fill: '#fde8e8' }], edges: [{ from: 'A', to: 'B' }, { from: 'A', to: 'C' }, { from: 'B', to: 'D' }, { from: 'C', to: 'E' }, { from: 'D', to: 'F' }, { from: 'E', to: 'F' }, { from: 'F', to: 'G' }], caption: 'Kotak merah muda adalah jalur kritis. Kegiatan C dan E boleh bergeser tanpa menunda proyek, sampai batas float-nya.' },
            { h2: 'Bagan Gantt' },
            `Gantt menampilkan kegiatan sebagai batang pada sumbu waktu. Ia mudah dibaca oleh pemangku kepentingan, tetapi tidak sebaik jaringan kegiatan dalam memperlihatkan ketergantungan.`,
            { code: py`ES = {"A":0,"B":5,"C":5,"D":9,"E":8,"F":17,"G":21}
EF = {"A":5,"B":9,"C":8,"D":17,"E":14,"F":21,"G":26}
nama = {"A":"Analisis","B":"Desain DB","C":"Desain UI","D":"Modul data","E":"Modul tampilan","F":"Integrasi","G":"Pengujian"}
print(" " * 16 + "".join(str(i % 10) for i in range(27)))
for k in ES:
    print(f"{nama[k]:<16}" + " " * ES[k] + "#" * (EF[k] - ES[k]))`, lang: 'python', run: true, caption: 'Satu karakter = satu hari. Batang yang saling bersambung pada baris A, B, D, F, G membentuk jalur kritis.' },
            { h2: 'Mengelola risiko' },
            { table: { head: ['Risiko', 'Peluang', 'Dampak', 'Respons'], rows: [['Kebutuhan berubah di tengah jalan', 'Tinggi', 'Tinggi', 'Rilis bertahap, kontrol perubahan, backlog berprioritas'], ['Anggota kunci keluar', 'Sedang', 'Tinggi', 'Dokumentasi, pasangan kerja, penyebaran pengetahuan'], ['Estimasi terlalu optimis', 'Tinggi', 'Sedang', 'Estimasi tiga titik, cadangan waktu (buffer)'], ['Integrasi dengan sistem lama sulit', 'Sedang', 'Tinggi', 'Uji integrasi lebih awal (spike)']] } },
            { callout: 'Estimasi tiga titik: <code>E = (O + 4M + P) / 6</code> dengan O optimis, M paling mungkin, P pesimis (PERT). Contoh O=4, M=6, P=14 menghasilkan E = (4 + 24 + 14)/6 = 7 hari: lebih besar dari angka "paling mungkin" karena pesimis lebih jauh dari optimis.', kind: 'info', title: 'Estimasi PERT' },
            { w: 'calc', title: 'Hitung estimasi PERT', desc: 'Masukkan tiga estimasi untuk satu kegiatan.', inputs: [{ id: 'o', label: 'Optimis', value: 4, min: 1, max: 60, step: 1, unit: 'hari' }, { id: 'm', label: 'Paling mungkin', value: 6, min: 1, max: 60, step: 1, unit: 'hari' }, { id: 'p', label: 'Pesimis', value: 14, min: 1, max: 90, step: 1, unit: 'hari' }], outputs: [{ label: 'Estimasi PERT', expr: '(o + 4*m + p) / 6', fmt: 'num', unit: 'hari', big: true }, { label: 'Simpangan baku', expr: '(p - o) / 6', fmt: 'num', unit: 'hari' }] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Float kegiatan kritis adalah...', options: ['0', 'Selalu positif', 'Tak terhingga'], answer: 0, why: 'Tidak ada kelonggaran.' }, { q: 'Jalur kritis adalah...', options: ['Jalur terpanjang yang menentukan durasi proyek', 'Jalur terpendek', 'Jalur termahal'], answer: 0, why: 'Menentukan waktu minimum penyelesaian.' }, { q: 'Aturan 100% pada WBS berarti...', options: ['Seluruh lingkup pekerjaan tercakup', 'Semua kegiatan harus selesai hari yang sama', 'Biaya 100 persen'], answer: 0, why: 'Tidak ada pekerjaan di luar WBS.' }] },
            { exercise: [['Jika kegiatan C (desain UI) bertambah 2 hari menjadi 5 hari, apakah durasi proyek berubah?', 'Tidak: float C dan E adalah 3 hari, sehingga tambahan 2 hari masih tertampung. Durasi tetap 26 hari dan float tersisa 1 hari; bila bertambah 3 hari, jalur ini menjadi kritis juga.'], ['Jika modul data (D) bertambah 3 hari?', 'D kritis sehingga proyek bertambah 3 hari menjadi 29 hari.'], ['Mengapa menambah orang pada proyek terlambat tidak selalu mempercepat?', 'Tambahan komunikasi dan waktu pelatihan; pekerjaan yang saling bergantung tidak dapat diparalelkan (hukum Brooks).'], ['Susun WBS tingkat dua untuk proyek aplikasi kasir.', 'Analisis, desain, pembangunan (produk, transaksi, laporan), pengujian, penerapan dan pelatihan, manajemen proyek.']] },
            { summary: ['Proyek dibatasi lingkup, waktu, dan biaya; ketiganya saling bertukar dengan mutu.', 'WBS memecah pekerjaan hingga paket yang dapat diestimasi.', 'CPM: forward dan backward pass; float nol berarti kegiatan kritis.', 'Gantt memudahkan komunikasi; risiko dikelola dengan peluang, dampak, dan respons.', 'Estimasi PERT memperhitungkan ketidakpastian.'] },
        ],
        faq: [['Apa beda CPM dan PERT?', 'CPM memakai durasi tunggal dan menekankan jalur kritis; PERT memakai estimasi tiga titik untuk durasi probabilistik. Praktiknya sering digabung.'], ['Apa alat yang dipakai?', 'Microsoft Project, Jira, Trello, GanttProject (sumber terbuka), atau lembar kerja sederhana.'], ['Bagaimana dengan proyek Agile?', 'Perencanaan dilakukan per sprint dengan kecepatan tim (velocity); CPM kurang dipakai tetapi tetap berguna untuk ketergantungan lintas tim.']],
        sources: [REF_PMBOK, ['Frederick Brooks, The Mythical Man-Month (Addison-Wesley, 1975)', ''], ['Kathy Schwalbe, Information Technology Project Management (Cengage)', ''], REF_STAIR],
    },

    {
        slug: 'pemodelan-proses-bisnis-bpmn-notasi-dan-contoh',
        title: 'Pemodelan Proses Bisnis dengan BPMN: Notasi dan Contoh',
        description: 'Pelajari BPMN, notasi standar proses bisnis: event, aktivitas, gateway, pool dan lane, aliran pesan, dengan contoh proses pengadaan dan pemetaan AS-IS ke TO-BE.',
        date: D, category: C, level: 'Menengah', tags: ['BPMN', 'proses bisnis', 'AS-IS TO-BE', 'gateway', 'swimlane'], cta: 'none',
        prereq: ['diagram aktivitas', 'DFD'],
        lead: 'Sebelum mengotomasi sebuah proses, kita harus memahaminya. Banyak proyek SI mengotomasi proses yang buruk dan hasilnya adalah proses buruk yang lebih cepat. BPMN (Business Process Model and Notation) adalah standar OMG untuk menggambarkan proses sehingga bisnis dan teknologi memiliki bahasa gambar yang sama.',
        body: [
            { objectives: ['membedakan proses bisnis dari fungsi dan prosedur', 'membaca dan menggambar elemen inti BPMN: event, activity, gateway, sequence flow', 'memakai pool, lane, dan message flow', 'memodelkan AS-IS dan TO-BE, serta mengidentifikasi pemborosan', 'menerapkan praktik penamaan dan kerapian model'] },
            { h2: 'Elemen inti' },
            { table: { head: ['Elemen', 'Bentuk', 'Fungsi', 'Contoh'], rows: [['Event awal', 'Lingkaran tipis', 'Memulai proses', 'Permintaan diterima'], ['Event akhir', 'Lingkaran tebal', 'Mengakhiri alur', 'Pesanan selesai'], ['Task (aktivitas)', 'Persegi bersudut bulat', 'Pekerjaan yang dilakukan', 'Periksa stok'], ['Gateway', 'Belah ketupat', 'Percabangan atau penggabungan alur', 'Stok cukup?'], ['Sequence flow', 'Panah solid', 'Urutan dalam satu pool', 'Antar aktivitas'], ['Message flow', 'Panah putus-putus', 'Pesan antar pool (organisasi)', 'Pemesanan ke pemasok']] } },
            { svg: 'diagram', w: 700, h: 190, label: 'Proses persetujuan cuti', nodes: [{ id: 's', x: 40, y: 95, shape: 'circle', w: 34, h: 34, t: '' }, { id: 't1', x: 150, y: 95, shape: 'round', w: 120, h: 50, t: 'Ajukan cuti' }, { id: 't2', x: 300, y: 95, shape: 'round', w: 120, h: 50, t: 'Tinjau pengajuan' }, { id: 'g', x: 440, y: 95, shape: 'diamond', w: 90, h: 70, t: 'Setuju?' }, { id: 't3', x: 570, y: 45, shape: 'round', w: 120, h: 44, t: 'Catat di sistem' }, { id: 't4', x: 570, y: 150, shape: 'round', w: 120, h: 44, t: 'Beri alasan penolakan' }, { id: 'e', x: 670, y: 95, shape: 'circle', w: 34, h: 34, t: '' }], edges: [{ from: 's', to: 't1' }, { from: 't1', to: 't2' }, { from: 't2', to: 'g' }, { from: 'g', to: 't3', label: 'ya' }, { from: 'g', to: 't4', label: 'tidak' }, { from: 't3', to: 'e' }, { from: 't4', to: 'e' }], caption: 'Gateway eksklusif (XOR): tepat satu jalur diambil. Gateway paralel (AND) memulai semua jalur sekaligus; gateway inklusif (OR) mengambil satu atau lebih.' },
            { h2: 'Pool dan lane' },
            `<b>Pool</b> mewakili satu peserta (organisasi), <b>lane</b> membagi pool menjadi peran atau unit di dalamnya. Komunikasi antar pool memakai <i>message flow</i> (garis putus-putus), tidak boleh memakai sequence flow.`,
            { svg: 'diagram', w: 700, h: 300, label: 'Pool dan lane', nodes: [{ id: 'p1', x: 350, y: 85, shape: 'frame', w: 660, h: 140, t: 'Pool: Perusahaan (lane: Staf pembelian)' }, { id: 'p2', x: 350, y: 240, shape: 'frame', w: 660, h: 100, t: 'Pool: Pemasok' }, { id: 'a', x: 130, y: 100, shape: 'round', w: 130, h: 44, t: 'Buat pesanan' }, { id: 'b', x: 330, y: 100, shape: 'round', w: 130, h: 44, t: 'Kirim pesanan' }, { id: 'c', x: 540, y: 100, shape: 'round', w: 130, h: 44, t: 'Terima barang' }, { id: 'd', x: 330, y: 250, shape: 'round', w: 130, h: 44, t: 'Proses pesanan' }, { id: 'e', x: 540, y: 250, shape: 'round', w: 130, h: 44, t: 'Kirim barang' }], edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd', dashed: true, label: 'pesan' }, { from: 'd', to: 'e' }, { from: 'e', to: 'c', dashed: true, label: 'barang' }], caption: 'Alur di dalam pool memakai garis solid; pertukaran antar organisasi memakai garis putus-putus.' },
            { h2: 'AS-IS dan TO-BE' },
            { w: 'compare', title: 'Dua potret proses', tabs: [{ label: 'AS-IS', html: 'Proses sekarang seperti sebenarnya terjadi (bukan seperti di buku prosedur). Tujuan: menemukan <b>pemborosan</b>: menunggu, pengulangan input, persetujuan berlapis tanpa nilai, serah terima berlebihan, kesalahan yang diperbaiki berulang.' }, { label: 'TO-BE', html: 'Proses yang diinginkan setelah perbaikan dan otomasi. Hilangkan langkah tak bernilai, paralelkan yang bisa, otomasi yang berulang, dan tentukan pemilik serta ukuran kinerja tiap langkah.' }] },
            { table: { head: ['Pemborosan pada AS-IS', 'Perbaikan pada TO-BE'], rows: [['Formulir kertas disalin ulang ke sistem', 'Formulir digital langsung masuk basis data'], ['Tiga tingkat persetujuan untuk nilai kecil', 'Persetujuan berjenjang berdasarkan nilai'], ['Menunggu surat tercetak ditandatangani', 'Tanda tangan elektronik'], ['Pemeriksaan stok dilakukan manual setiap pesanan', 'Cek stok otomatis pada sistem']] } },
            { h2: 'Praktik pemodelan yang baik' },
            { w: 'checklist', title: 'Periksa model BPMN Anda', items: ['Setiap proses memiliki tepat satu (atau jelas) event awal dan setidaknya satu event akhir.', 'Task diberi nama kata kerja + objek ("Periksa stok"), bukan kata benda.', 'Gateway pembagi diberi pertanyaan, dan setiap jalur keluar diberi label.', 'Gateway pembagi dan penggabung berpasangan dan sejenis.', 'Tidak ada sequence flow yang menyeberangi batas pool.', 'Model mudah dibaca dalam satu layar; subproses dipakai untuk merinci.', 'Model sudah diverifikasi bersama orang yang menjalankan proses sehari-hari.'] },
            { callout: 'BPMN dapat <b>dieksekusi</b> oleh mesin proses (Camunda, Flowable, Bonita) bila model dilengkapi detail teknis. Namun tujuan utama bagi kebanyakan tim adalah komunikasi dan analisis, bukan eksekusi.', kind: 'info', title: 'Catatan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Garis putus-putus antar pool adalah...', options: ['Message flow', 'Sequence flow', 'Association'], answer: 0, why: 'Menyatakan pesan antar peserta.' }, { q: 'Belah ketupat pada BPMN adalah...', options: ['Gateway', 'Event', 'Task'], answer: 0, why: 'Titik keputusan atau penggabungan alur.' }, { q: 'Tujuan memodelkan AS-IS?', options: ['Memahami proses nyata dan menemukan pemborosan', 'Menghias dokumen', 'Mengganti sistem'], answer: 0, why: 'Dasar perbaikan.' }] },
            { exercise: [['Modelkan proses "pendaftaran mahasiswa baru online" dari sudut pandang calon mahasiswa dan panitia.', 'Dua lane: calon mahasiswa (isi formulir, unggah berkas, bayar) dan panitia (verifikasi berkas, gateway lengkap?, umumkan hasil).'], ['Kapan memakai gateway paralel?', 'Saat beberapa kegiatan dapat dikerjakan bersamaan, misalnya cek kredit dan cek stok.'], ['Apa perbedaan BPMN dan diagram alir biasa?', 'BPMN punya standar simbol yang kaya (event, pool, pesan, subproses) sehingga lebih tepat untuk proses lintas pihak.'], ['Identifikasi dua pemborosan pada: "Staf menulis laporan di kertas lalu mengetik ulang ke Excel dan mengirim lewat surel".', 'Entri ganda (tulis dua kali) dan penanganan berulang yang rawan kesalahan.']] },
            { summary: ['BPMN: event, task, gateway, sequence flow, message flow, pool dan lane.', 'AS-IS memetakan proses nyata; TO-BE merancang proses yang diperbaiki.', 'Beri nama kata kerja, label jalur gateway, dan jaga model tetap terbaca.', 'Memperbaiki proses sebelum mengotomasi lebih bernilai daripada mengotomasi proses buruk.'] },
        ],
        faq: [['Apa bedanya BPMN dengan diagram aktivitas UML?', 'Keduanya memodelkan alur. BPMN dirancang untuk proses bisnis lintas organisasi dengan notasi yang lebih kaya; UML aktivitas lebih umum dan dekat ke desain perangkat lunak.'], ['Alat apa yang dipakai?', 'Camunda Modeler, bpmn.io, draw.io, Bizagi Modeler.'], ['Apa itu BPM dan BPR?', 'BPM adalah pengelolaan proses secara berkelanjutan; BPR (reengineering) adalah perancangan ulang radikal proses.']],
        sources: [['Object Management Group: BPMN 2.0 Specification', 'https://www.omg.org/spec/BPMN/'], ['bpmn.io: pemodel BPMN sumber terbuka', 'https://bpmn.io/'], ['Marlon Dumas et al., Fundamentals of Business Process Management (Springer)', ''], REF_LAUDON],
    },

    {
        slug: 'business-intelligence-data-warehouse-etl-dan-olap',
        title: 'Business Intelligence: Data Warehouse, ETL, dan OLAP',
        description: 'Pahami business intelligence: perbedaan OLTP dan OLAP, data warehouse, star schema, proses ETL, kubus OLAP, dan dasbor, dengan contoh star schema yang dijalankan dengan SQL.',
        date: D, category: C, level: 'Menengah', tags: ['business intelligence', 'data warehouse', 'ETL', 'OLAP', 'star schema'], cta: 'none',
        prereq: ['SQL dasar', 'jenis-jenis SI'],
        lead: 'Basis data operasional dirancang untuk mencatat transaksi dengan cepat, bukan untuk menjawab pertanyaan seperti "bagaimana tren penjualan per wilayah selama tiga tahun?". Business intelligence (BI) memakai gudang data dan model khusus agar pertanyaan analitik dijawab cepat dan konsisten.',
        body: [
            { objectives: ['membedakan OLTP dan OLAP', 'menjelaskan gudang data dan bagaimana data mengalir lewat ETL', 'membuat star schema dengan tabel fakta dan dimensi', 'melakukan operasi OLAP: slice, dice, roll-up, drill-down', 'menjelaskan dasbor dan KPI yang baik'] },
            { h2: 'OLTP vs OLAP' },
            { table: { head: ['Aspek', 'OLTP (operasional)', 'OLAP (analitik)'], rows: [['Tujuan', 'Mencatat transaksi harian', 'Menganalisis tren dan pola'], ['Operasi', 'Banyak INSERT/UPDATE kecil', 'Kueri besar yang membaca banyak baris'], ['Desain', 'Ternormalisasi (3NF)', 'Berdimensi (star schema), sengaja denormalisasi'], ['Data', 'Terkini', 'Historis, terintegrasi dari banyak sumber'], ['Pengguna', 'Staf operasional', 'Manajer, analis']] } },
            { h2: 'Arsitektur data warehouse' },
            { svg: 'flow', label: 'Alur BI', steps: [{ t: 'Sumber', d: 'ERP, kasir, CRM, berkas, API' }, { t: 'ETL', d: 'Extract, Transform, Load' }, { t: 'Data warehouse', d: 'data terpadu berdimensi' }, { t: 'Analitik', d: 'OLAP, laporan, dasbor, model prediksi' }], caption: 'ELT (muat dulu, ubah di gudang) makin umum pada gudang data cloud.' },
            { table: { head: ['Tahap ETL', 'Pekerjaan', 'Contoh'], rows: [['Extract', 'Mengambil data dari sumber', 'Menarik transaksi kemarin dari basis data kasir'], ['Transform', 'Membersihkan, menyeragamkan, menghitung', 'Menyeragamkan "Jkt"/"Jakarta"; membuang duplikat; menghitung margin'], ['Load', 'Memuat ke gudang data', 'Menambah baris fakta dan memperbarui dimensi']] } },
            { callout: 'Sekitar sebagian besar usaha proyek BI dihabiskan untuk <b>kualitas dan integrasi data</b>, bukan untuk grafik. Dasbor secantik apa pun menyesatkan bila data dasarnya tidak konsisten.', kind: 'warn', title: 'Realita' },
            { h2: 'Star schema' },
            { svg: 'diagram', w: 680, h: 300, label: 'Star schema penjualan', nodes: [{ id: 'f', x: 340, y: 150, shape: 'class', w: 180, h: 110, t: 'fakta_penjualan', attrs: ['id_waktu (FK)', 'id_produk (FK)', 'id_toko (FK)', 'jumlah', 'pendapatan'], methods: [] }, { id: 'w', x: 100, y: 60, shape: 'class', w: 140, h: 80, t: 'dim_waktu', attrs: ['id_waktu', 'tanggal', 'bulan', 'tahun'], methods: [] }, { id: 'p', x: 580, y: 60, shape: 'class', w: 140, h: 80, t: 'dim_produk', attrs: ['id_produk', 'nama', 'kategori'], methods: [] }, { id: 't', x: 340, y: 265, shape: 'class', w: 150, h: 50, t: 'dim_toko', attrs: ['id_toko', 'kota'], methods: [] }], edges: [{ from: 'w', to: 'f', head: 'none' }, { from: 'p', to: 'f', head: 'none' }, { from: 't', to: 'f', head: 'none' }], caption: 'Tabel fakta berisi ukuran numerik (jumlah, pendapatan); tabel dimensi memberi konteks (kapan, apa, di mana).' },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE dim_waktu  (id_waktu INTEGER PRIMARY KEY, tanggal TEXT, bulan TEXT, tahun INTEGER);
CREATE TABLE dim_produk (id_produk INTEGER PRIMARY KEY, nama TEXT, kategori TEXT);
CREATE TABLE dim_toko   (id_toko INTEGER PRIMARY KEY, kota TEXT);
CREATE TABLE fakta_penjualan (id_waktu INT, id_produk INT, id_toko INT, jumlah INT, pendapatan INT);

INSERT INTO dim_waktu VALUES (1,'2025-01-15','Jan',2025),(2,'2025-02-10','Feb',2025),(3,'2026-01-20','Jan',2026),(4,'2026-02-18','Feb',2026);
INSERT INTO dim_produk VALUES (1,'Kopi','Minuman'),(2,'Teh','Minuman'),(3,'Roti','Makanan');
INSERT INTO dim_toko VALUES (1,'Madiun'),(2,'Surabaya');
INSERT INTO fakta_penjualan VALUES
 (1,1,1,100,2000000),(1,3,1,50,600000),(2,2,2,80,1200000),(2,1,2,120,2400000),
 (3,1,1,140,2800000),(3,3,2,70,840000),(4,2,1,90,1350000),(4,1,2,160,3200000);
""")
def q(sql):
    print(">", " ".join(sql.split()))
    for r in db.execute(sql): print("  ", r)

# roll-up: pendapatan per tahun
q("SELECT w.tahun, SUM(f.pendapatan) FROM fakta_penjualan f JOIN dim_waktu w USING(id_waktu) GROUP BY w.tahun")
# drill-down: per tahun dan kategori
q("""SELECT w.tahun, p.kategori, SUM(f.pendapatan) FROM fakta_penjualan f
     JOIN dim_waktu w USING(id_waktu) JOIN dim_produk p USING(id_produk) GROUP BY w.tahun, p.kategori""")
# slice: hanya Surabaya
q("""SELECT p.nama, SUM(f.jumlah) FROM fakta_penjualan f JOIN dim_produk p USING(id_produk)
     JOIN dim_toko t USING(id_toko) WHERE t.kota = 'Surabaya' GROUP BY p.nama ORDER BY 2 DESC""")`, lang: 'python', run: true, caption: 'Pertanyaan analitik menjadi pola yang sama: JOIN fakta ke dimensi, kelompokkan menurut atribut dimensi, jumlahkan ukuran.' },
            { w: 'cards', title: 'Operasi OLAP (ketuk kartu)', items: [{ tag: 'Roll-up', front: 'Naik tingkat ringkasan', backTag: 'Contoh', back: 'Dari penjualan per bulan menjadi per tahun.' }, { tag: 'Drill-down', front: 'Turun ke rincian', backTag: 'Contoh', back: 'Dari penjualan per tahun menjadi per kategori, lalu per produk.' }, { tag: 'Slice', front: 'Mengiris satu nilai dimensi', backTag: 'Contoh', back: 'Hanya data toko Surabaya.' }, { tag: 'Dice', front: 'Memilih sub-kubus dari beberapa dimensi', backTag: 'Contoh', back: 'Tahun 2026, kategori Minuman, toko Madiun atau Surabaya.' }, { tag: 'Pivot', front: 'Memutar sumbu tampilan', backTag: 'Contoh', back: 'Menukar baris (produk) dan kolom (bulan).' }] },
            { h2: 'Dasbor dan KPI yang baik' },
            { ul: ['Mulailah dari <b>pertanyaan keputusan</b>, bukan dari data yang tersedia.', 'Pilih sedikit KPI yang dapat ditindaklanjuti; hindari "metrik kesombongan" yang naik terus tetapi tidak mengubah keputusan.', 'Tampilkan konteks: bandingkan dengan target, periode sebelumnya, atau tolok ukur.', 'Gunakan grafik yang tepat (garis untuk tren, batang untuk perbandingan) dan hindari hiasan.', 'Definisikan setiap metrik di satu tempat ("laba" berarti apa?) agar semua orang membaca angka yang sama.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tabel fakta berisi...', options: ['Ukuran numerik dan kunci asing ke dimensi', 'Hanya teks deskriptif', 'Data pengguna'], answer: 0, why: 'Dimensi memberi konteks.' }, { q: 'Roll-up berarti...', options: ['Meringkas ke tingkat lebih tinggi', 'Memfilter satu nilai', 'Menghapus data'], answer: 0, why: 'Misalnya bulan menjadi tahun.' }, { q: 'Tahap ETL yang membersihkan dan menyeragamkan data?', options: ['Transform', 'Extract', 'Load'], answer: 0, why: 'Transform mengubah data ke bentuk yang konsisten.' }] },
            { exercise: [['Rancang star schema untuk analisis absensi karyawan.', 'Fakta: absensi (jumlah_hari_hadir, jam_lembur); dimensi: karyawan, waktu, unit kerja.'], ['Mengapa gudang data didenormalisasi sedangkan OLTP dinormalisasi?', 'OLTP mengutamakan konsistensi tulis; gudang mengutamakan kecepatan baca analitik dan kesederhanaan JOIN.'], ['Beri contoh masalah kualitas data yang harus ditangani pada Transform.', 'Format tanggal berbeda, duplikat pelanggan, nilai kosong, satuan berbeda.'], ['Apa itu data lake dibanding data warehouse?', 'Data lake menyimpan data mentah dalam berbagai format dengan skema dibaca saat dipakai; warehouse menyimpan data terstruktur yang sudah dimodelkan.']] },
            { summary: ['OLTP untuk transaksi, OLAP untuk analisis.', 'ETL memindahkan data dari sumber ke gudang data dan membersihkannya.', 'Star schema: tabel fakta dikelilingi tabel dimensi.', 'OLAP: roll-up, drill-down, slice, dice, pivot.', 'Dasbor yang baik menjawab pertanyaan keputusan dengan KPI yang jelas.'] },
        ],
        faq: [['Apa alat BI yang populer?', 'Power BI, Tableau, Looker Studio, Metabase (sumber terbuka), dan Apache Superset.'], ['Apa itu data mart?', 'Subset gudang data untuk satu unit atau subjek, misalnya pemasaran.'], ['Apa hubungan BI dengan machine learning?', 'BI menjelaskan apa yang terjadi (deskriptif); ML dapat memprediksi apa yang akan terjadi, sering memakai data dari gudang yang sama.']],
        sources: [REF_KIMBALL, ['Inmon, Building the Data Warehouse (Wiley)', ''], ['Metabase: Learn (BI sumber terbuka)', 'https://www.metabase.com/learn/'], REF_LAUDON],
    },
];
