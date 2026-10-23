const D = '2026-10-23';
const C = 'Sistem Informasi';
const py = String.raw;

const REF_ELM = ['Ramez Elmasri dan Shamkant Navathe, Fundamentals of Database Systems (Pearson)', ''];
const REF_SILB = ['Abraham Silberschatz, Henry Korth, S. Sudarshan, Database System Concepts (McGraw-Hill)', ''];
const REF_KENDALL = ['Kenneth E. Kendall dan Julie E. Kendall, Systems Analysis and Design (Pearson)', ''];
const REF_SQLITE = ['SQLite Documentation: SQL As Understood By SQLite', 'https://www.sqlite.org/lang.html'];
const REF_PGDOC = ['PostgreSQL Documentation: SQL Language', 'https://www.postgresql.org/docs/current/sql.html'];

export default [
    {
        slug: 'erd-pemodelan-data-entitas-atribut-relasi-dan-kardinalitas',
        title: 'ERD: Entitas, Atribut, Relasi, dan Kardinalitas',
        description: 'Pelajari ERD: entitas, atribut, kunci, kardinalitas, relasi M:N dengan entitas asosiatif, dan konversi ke tabel relasional, dengan SQL yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['ERD', 'basis data', 'pemodelan data', 'kardinalitas', 'primary key'], cta: 'none',
        prereq: ['analisis kebutuhan'],
        lead: 'Sebelum membuat tabel, kita perlu memahami data apa yang ada dan bagaimana hubungannya. ERD adalah alat standar untuk itu. Diagram yang baik membuat aturan bisnis terlihat: satu dosen mengajar banyak kelas, satu mahasiswa mengambil banyak mata kuliah, dan sebaliknya.',
        body: [
            { objectives: ['mengidentifikasi entitas, atribut, dan kunci dari deskripsi kebutuhan', 'menggambar relasi dengan kardinalitas yang benar', 'menyelesaikan relasi banyak-ke-banyak dengan entitas asosiatif', 'mengubah ERD menjadi skema tabel relasional', 'mengenali kesalahan pemodelan umum'] },
            { h2: 'Unsur ERD' },
            { table: { head: ['Unsur', 'Arti', 'Contoh'], rows: [['Entitas', 'Sesuatu yang datanya perlu disimpan', 'Mahasiswa, Dosen, MataKuliah'], ['Atribut', 'Sifat sebuah entitas', 'nim, nama, tanggal_lahir'], ['Kunci primer (PK)', 'Atribut yang mengidentifikasi satu baris secara unik', 'nim'], ['Kunci asing (FK)', 'Atribut yang merujuk kunci primer entitas lain', 'kode_dosen pada MataKuliah'], ['Relasi', 'Hubungan antar entitas', 'Dosen mengajar MataKuliah'], ['Kardinalitas', 'Jumlah instans yang dapat berhubungan', '1:1, 1:N, M:N']] } },
            { h2: 'Membaca kardinalitas' },
            { svg: 'diagram', w: 640, h: 220, label: 'Tiga jenis kardinalitas', nodes: [{ id: 'a1', x: 70, y: 40, shape: 'rect', w: 100, h: 36, t: 'Dosen' }, { id: 'b1', x: 230, y: 40, shape: 'rect', w: 120, h: 36, t: 'MataKuliah' }, { id: 'a2', x: 410, y: 40, shape: 'rect', w: 100, h: 36, t: 'Negara' }, { id: 'b2', x: 570, y: 40, shape: 'rect', w: 100, h: 36, t: 'IbuKota' }, { id: 'a3', x: 70, y: 150, shape: 'rect', w: 120, h: 36, t: 'Mahasiswa' }, { id: 'b3', x: 280, y: 150, shape: 'rect', w: 120, h: 36, t: 'MataKuliah' }], edges: [{ from: 'a1', to: 'b1', head: 'none', from_label: '1', to_label: 'N', label: 'mengajar' }, { from: 'a2', to: 'b2', head: 'none', from_label: '1', to_label: '1', label: 'beribu kota' }, { from: 'a3', to: 'b3', head: 'none', from_label: 'M', to_label: 'N', label: 'mengambil' }], caption: 'Satu dosen mengajar banyak mata kuliah (1:N). Satu negara memiliki satu ibu kota (1:1). Mahasiswa mengambil banyak mata kuliah dan satu mata kuliah diambil banyak mahasiswa (M:N).' },
            { callout: 'Cara membaca: baca <b>dua arah</b>. "Satu dosen dapat mengajar berapa mata kuliah?" (banyak). "Satu mata kuliah diajar oleh berapa dosen?" (satu, pada kasus ini). Jawabannya menentukan kardinalitas.', kind: 'good', title: 'Teknik membaca' },
            { h2: 'Relasi banyak-ke-banyak harus dipecah' },
            `Basis data relasional tidak dapat menyimpan M:N langsung dengan satu kolom kunci asing. Solusinya: <b>entitas asosiatif</b> (tabel perantara) yang menyimpan pasangan dan atribut milik hubungan itu sendiri, misalnya nilai.`,
            { svg: 'diagram', w: 680, h: 230, label: 'M:N dipecah menjadi dua 1:N', nodes: [{ id: 'M', x: 100, y: 110, shape: 'class', w: 150, h: 90, t: 'Mahasiswa', attrs: ['PK nim', 'nama'], methods: [] }, { id: 'K', x: 340, y: 110, shape: 'class', w: 170, h: 100, t: 'KRS (asosiatif)', attrs: ['PK,FK nim', 'PK,FK kode_mk', 'nilai'], methods: [] }, { id: 'MK', x: 580, y: 110, shape: 'class', w: 150, h: 90, t: 'MataKuliah', attrs: ['PK kode_mk', 'nama', 'sks'], methods: [] }], edges: [{ from: 'M', to: 'K', head: 'none', from_label: '1', to_label: 'N' }, { from: 'MK', to: 'K', head: 'none', from_label: '1', to_label: 'N' }], caption: 'Tabel KRS memiliki kunci primer gabungan (nim, kode_mk) dan menyimpan nilai, atribut yang milik pasangan, bukan milik mahasiswa atau mata kuliah saja.' },
            { h2: 'Dari ERD ke tabel' },
            { table: { head: ['Relasi', 'Aturan konversi'], rows: [['1:N', 'Letakkan kunci primer sisi "1" sebagai kunci asing di tabel sisi "N"'], ['1:1', 'Letakkan kunci asing di salah satu tabel dan beri batas UNIQUE (atau gabungkan tabel)'], ['M:N', 'Buat tabel asosiatif dengan dua kunci asing; gabungannya menjadi kunci primer'], ['Atribut multinilai (mis. nomor telepon)', 'Pindahkan ke tabel tersendiri dengan kunci asing'], ['Atribut turunan (mis. umur dari tanggal lahir)', 'Tidak disimpan; dihitung saat dibutuhkan']] } },
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.execute("PRAGMA foreign_keys = ON")
db.executescript("""
CREATE TABLE mahasiswa (
    nim   TEXT PRIMARY KEY,
    nama  TEXT NOT NULL
);
CREATE TABLE mata_kuliah (
    kode_mk TEXT PRIMARY KEY,
    nama    TEXT NOT NULL,
    sks     INTEGER NOT NULL CHECK (sks BETWEEN 1 AND 6)
);
CREATE TABLE krs (
    nim     TEXT NOT NULL REFERENCES mahasiswa(nim),
    kode_mk TEXT NOT NULL REFERENCES mata_kuliah(kode_mk),
    nilai   TEXT,
    PRIMARY KEY (nim, kode_mk)
);
""")
db.execute("INSERT INTO mahasiswa VALUES ('A01','Ani')")
db.execute("INSERT INTO mata_kuliah VALUES ('SI101','Sistem Informasi',3)")
db.execute("INSERT INTO krs VALUES ('A01','SI101','A')")

for sql in ["INSERT INTO krs VALUES ('A01','SI101','B')",          # pasangan sama dua kali
            "INSERT INTO krs VALUES ('Z99','SI101',NULL)",          # mahasiswa tidak ada
            "INSERT INTO mata_kuliah VALUES ('X1','Salah',9)"]:      # melanggar CHECK
    try:
        db.execute(sql)
    except sqlite3.IntegrityError as e:
        print("ditolak:", e)`, lang: 'python', run: true, caption: 'Kunci primer, kunci asing, dan CHECK membuat basis data sendiri yang menegakkan aturan; aplikasi tidak bisa memasukkan data yang melanggar hubungan.' },
            { h2: 'Kesalahan pemodelan yang sering terjadi' },
            { w: 'checklist', title: 'Periksa ERD Anda', items: ['Setiap entitas memiliki kunci primer yang tidak berubah.', 'Tidak ada relasi M:N yang dibiarkan tanpa entitas asosiatif.', 'Tidak ada atribut turunan atau data yang dapat dihitung ulang.', 'Tidak ada atribut berulang (telepon1, telepon2, telepon3).', 'Nama entitas tunggal dan jelas; nama relasi berupa kata kerja.', 'Setiap kardinalitas telah dikonfirmasi dengan pengguna dalam dua arah.', 'Kunci asing jelas merujuk kunci primer tabel lain.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Relasi mahasiswa mengambil mata kuliah adalah...', options: ['M:N', '1:1', '1:N'], answer: 0, why: 'Dipecah dengan tabel asosiatif (KRS).' }, { q: 'Kunci asing berfungsi untuk...', options: ['Menghubungkan ke kunci primer tabel lain', 'Mengurutkan data', 'Menyimpan sandi'], answer: 0, why: 'Menjaga integritas referensial.' }, { q: 'Atribut umur yang dapat dihitung dari tanggal lahir adalah...', options: ['Atribut turunan, tidak perlu disimpan', 'Kunci primer', 'Entitas'], answer: 0, why: 'Menyimpannya menimbulkan data tidak konsisten.' }] },
            { exercise: [['Rancang ERD untuk toko online dengan Pelanggan, Pesanan, Produk.', 'Pelanggan 1:N Pesanan; Pesanan M:N Produk dipecah dengan ItemPesanan (jumlah, harga_saat_beli).'], ['Mengapa harga_saat_beli disimpan di ItemPesanan, bukan hanya di Produk?', 'Harga produk bisa berubah; pesanan lama harus tetap mencatat harga saat itu.'], ['Apa jenis relasi antara Kendaraan dan Pemilik jika satu kendaraan hanya dimiliki satu orang pada satu waktu tetapi seseorang bisa memiliki banyak kendaraan?', '1:N dari Pemilik ke Kendaraan.'], ['Konversikan relasi 1:N Dosen–MataKuliah ke tabel.', 'Tabel mata_kuliah memiliki kolom kode_dosen sebagai FK ke dosen.']] },
            { summary: ['Entitas, atribut, kunci primer, kunci asing, relasi, kardinalitas.', 'Baca kardinalitas dalam dua arah dan konfirmasi dengan pengguna.', 'M:N dipecah dengan entitas asosiatif yang dapat menyimpan atribut hubungan.', 'Basis data menegakkan aturan lewat PK, FK, UNIQUE, dan CHECK.'] },
        ],
        faq: [['Apa beda notasi Chen dan Crow\'s Foot?', 'Chen memakai belah ketupat untuk relasi dan elips untuk atribut; Crow\'s Foot memakai garis dengan simbol kaki gagak untuk "banyak" dan lebih ringkas, sehingga lebih umum dalam alat modern.'], ['Mengapa tidak memakai nama sebagai kunci primer?', 'Nama dapat sama dan dapat berubah. Gunakan pengenal stabil (NIM, id otomatis).'], ['Apakah ERD sama dengan diagram kelas?', 'Mirip, tetapi ERD memodelkan data persisten, sedangkan diagram kelas memodelkan struktur dan perilaku program.']],
        sources: [REF_ELM, REF_SILB, REF_KENDALL, REF_SQLITE],
    },

    {
        slug: 'normalisasi-basis-data-1nf-2nf-3nf-dan-bcnf-langkah-demi-langkah',
        title: 'Normalisasi Basis Data: 1NF, 2NF, 3NF, dan BCNF',
        description: 'Pelajari normalisasi dari tabel berantakan sampai 3NF dan BCNF langkah demi langkah: anomali, ketergantungan fungsional, dengan contoh tabel dan kode SQL yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['normalisasi', '1NF', '2NF', '3NF', 'BCNF', 'basis data'], cta: 'none',
        prereq: ['ERD dan model relasional'],
        lead: 'Normalisasi adalah proses menata tabel agar data tidak berulang dan tidak menimbulkan kesalahan saat diubah. Alih-alih menghafal aturan, kita mulai dari satu tabel berantakan, melihat apa yang rusak, lalu memperbaikinya selangkah demi selangkah.',
        body: [
            { objectives: ['menjelaskan anomali sisip, ubah, dan hapus akibat redundansi', 'memahami ketergantungan fungsional (A → B)', 'menormalkan tabel dari bentuk tidak normal ke 1NF, 2NF, 3NF', 'menjelaskan BCNF dan kapan denormalisasi dipertimbangkan', 'memverifikasi hasil dekomposisi dengan SQL'] },
            { h2: 'Tabel awal yang bermasalah' },
            `Misalkan sebuah kampus mencatat KRS dalam satu tabel besar:`,
            { table: { head: ['nim', 'nama_mhs', 'kode_mk', 'nama_mk', 'sks', 'dosen', 'nilai'], rows: [['A01', 'Ani', 'SI101', 'Sistem Informasi', '3', 'Dr. Rina', 'A'], ['A01', 'Ani', 'SI102', 'Basis Data', '3', 'Pak Dodi', 'B'], ['A02', 'Budi', 'SI101', 'Sistem Informasi', '3', 'Dr. Rina', 'B'], ['A02', 'Budi', 'SI103', 'Pemrograman', '4', 'Bu Eka', 'A']] } },
            { h3: 'Tiga anomali' },
            { ul: ['<b>Anomali ubah</b>: nama mata kuliah SI101 berubah. Kita harus mengubah di semua baris; bila ada yang terlewat, data tidak konsisten.', '<b>Anomali sisip</b>: mata kuliah baru yang belum diambil siapa pun tidak dapat dicatat, karena nim bagian dari kunci.', '<b>Anomali hapus</b>: bila Budi satu-satunya yang mengambil SI103 lalu KRS-nya dihapus, seluruh informasi mata kuliah itu ikut hilang.'] },
            { h2: 'Ketergantungan fungsional' },
            `A → B dibaca "A menentukan B": untuk setiap nilai A hanya ada satu nilai B. Di sini kunci tabel adalah (nim, kode_mk). Ketergantungan yang berlaku:`,
            { table: { head: ['Ketergantungan', 'Arti', 'Jenis'], rows: [['(nim, kode_mk) → nilai', 'Nilai ditentukan pasangan mahasiswa dan mata kuliah', 'Ketergantungan penuh pada kunci'], ['nim → nama_mhs', 'Nama hanya bergantung pada nim', 'Ketergantungan parsial'], ['kode_mk → nama_mk, sks, dosen', 'Data mata kuliah hanya bergantung pada kode_mk', 'Ketergantungan parsial']] } },
            { h2: 'Bentuk normal pertama (1NF)' },
            `Syarat: setiap sel berisi <b>satu nilai atomik</b> dan tidak ada kelompok berulang. Tabel kita sudah 1NF. Contoh yang melanggar: kolom <code>matkul</code> berisi "SI101, SI102" dalam satu sel; solusinya satu baris per pasangan.`,
            { h2: 'Bentuk normal kedua (2NF)' },
            `Syarat: 1NF dan tidak ada ketergantungan parsial, yaitu atribut non-kunci harus bergantung pada <b>seluruh</b> kunci, bukan sebagian. Atribut <code>nama_mhs</code> hanya bergantung pada nim, dan data mata kuliah hanya pada kode_mk. Pecah menjadi tiga tabel:`,
            { table: { head: ['Tabel', 'Kolom (PK bergaris bawah secara konsep)', 'Isi'], rows: [['mahasiswa', 'nim (PK), nama_mhs', 'A01 Ani; A02 Budi'], ['mata_kuliah', 'kode_mk (PK), nama_mk, sks, dosen', 'SI101..SI103'], ['krs', '(nim, kode_mk) (PK), nilai', 'Empat baris nilai']] } },
            { h2: 'Bentuk normal ketiga (3NF)' },
            `Syarat: 2NF dan tidak ada ketergantungan transitif, yaitu atribut non-kunci tidak boleh bergantung pada atribut non-kunci lain. Misalkan pada <code>mata_kuliah</code> kita juga menyimpan <code>kantor_dosen</code> yang sebenarnya ditentukan oleh <code>dosen</code>: kode_mk → dosen → kantor_dosen. Kantor dosen berulang pada setiap mata kuliahnya.`,
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
-- sebelum 3NF: kantor_dosen bergantung pada dosen (transitif)
CREATE TABLE mk_buruk (kode_mk TEXT PRIMARY KEY, nama_mk TEXT, dosen TEXT, kantor_dosen TEXT);
INSERT INTO mk_buruk VALUES
 ('SI101','Sistem Informasi','Dr. Rina','Gedung A-101'),
 ('SI104','Analisis Sistem','Dr. Rina','Gedung A-101'),
 ('SI102','Basis Data','Pak Dodi','Gedung B-203');

-- sesudah 3NF
CREATE TABLE dosen (id_dosen INTEGER PRIMARY KEY, nama TEXT, kantor TEXT);
CREATE TABLE mata_kuliah (kode_mk TEXT PRIMARY KEY, nama_mk TEXT, id_dosen INTEGER REFERENCES dosen(id_dosen));
INSERT INTO dosen VALUES (1,'Dr. Rina','Gedung A-101'),(2,'Pak Dodi','Gedung B-203');
INSERT INTO mata_kuliah VALUES ('SI101','Sistem Informasi',1),('SI104','Analisis Sistem',1),('SI102','Basis Data',2);
""")

# Anomali ubah: Dr. Rina pindah kantor
db.execute("UPDATE mk_buruk SET kantor_dosen='Gedung C-305' WHERE kode_mk='SI101'")   # SI104 terlewat!
print("sebelum (tidak konsisten):", db.execute("SELECT DISTINCT dosen, kantor_dosen FROM mk_buruk WHERE dosen='Dr. Rina'").fetchall())

db.execute("UPDATE dosen SET kantor='Gedung C-305' WHERE nama='Dr. Rina'")            # satu perubahan cukup
print("sesudah:", db.execute("""SELECT m.kode_mk, d.nama, d.kantor FROM mata_kuliah m JOIN dosen d USING(id_dosen)
                                 WHERE d.nama='Dr. Rina'""").fetchall())`, lang: 'python', run: true, caption: 'Sebelum normalisasi, dua baris untuk dosen yang sama kini menyimpan kantor berbeda. Sesudahnya, kebenaran tersimpan di satu tempat.' },
            { h2: 'BCNF: penegasan yang lebih ketat' },
            `Pada 3NF, tabel boleh masih memiliki penentu (determinan) yang bukan kunci kandidat dalam situasi tertentu. BCNF (Boyce–Codd) mensyaratkan: <b>setiap determinan harus merupakan kunci kandidat</b>. Contoh klasik: tabel (mahasiswa, mata_kuliah, dosen) dengan aturan "setiap dosen hanya mengajar satu mata kuliah". Maka dosen → mata_kuliah, padahal dosen bukan kunci kandidat. Dekomposisi: (dosen, mata_kuliah) dan (mahasiswa, dosen).`,
            { w: 'compare', title: 'Ringkasan bentuk normal', tabs: [{ label: '1NF', html: 'Nilai atomik, tanpa kelompok berulang, ada kunci primer.' }, { label: '2NF', html: '1NF + tiap atribut non-kunci bergantung pada <b>seluruh</b> kunci (hilangkan ketergantungan parsial). Relevan hanya untuk kunci gabungan.' }, { label: '3NF', html: '2NF + tidak ada ketergantungan <b>transitif</b> antar atribut non-kunci.' }, { label: 'BCNF', html: 'Setiap determinan adalah kunci kandidat. Sedikit lebih ketat dari 3NF.' }] },
            { callout: 'Ucapan mnemonik terkenal: setiap atribut non-kunci harus bergantung pada <b>"kunci, seluruh kunci, dan tidak lain selain kunci"</b> (the key, the whole key, and nothing but the key).', kind: 'info', title: 'Cara mengingat' },
            { h2: 'Kapan denormalisasi?' },
            `Normalisasi menjaga konsistensi tetapi menambah JOIN. Pada sistem pelaporan dan analitik dengan data besar yang jarang berubah, orang sengaja <b>denormalisasi</b>: menggabungkan tabel atau menyimpan salinan agar kueri cepat. Lakukan dengan sadar, setelah mengukur, dan jaga konsistensi lewat proses yang jelas. Untuk sistem transaksi (OLTP), mulailah dari 3NF.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Ketergantungan parsial dihilangkan pada bentuk normal...', options: ['Kedua (2NF)', 'Pertama (1NF)', 'Ketiga (3NF)'], answer: 0, why: 'Atribut harus bergantung pada seluruh kunci.' }, { q: 'Kantor dosen yang ditentukan oleh dosen yang ditentukan kode_mk adalah ketergantungan...', options: ['Transitif', 'Parsial', 'Atomik'], answer: 0, why: 'kode_mk → dosen → kantor.' }, { q: 'Tujuan utama normalisasi?', options: ['Mengurangi redundansi dan anomali', 'Mempercepat semua kueri', 'Memperbanyak tabel'], answer: 0, why: 'Data konsisten dan mudah dirawat.' }] },
            { exercise: [['Normalkan tabel pesanan(no_pesanan, tgl, id_pelanggan, nama_pelanggan, kode_produk, nama_produk, harga, jumlah).', 'pelanggan(id_pelanggan, nama); produk(kode_produk, nama, harga); pesanan(no_pesanan, tgl, id_pelanggan); item_pesanan(no_pesanan, kode_produk, jumlah, harga_saat_beli).'], ['Mengapa tabel dengan kunci tunggal otomatis memenuhi 2NF jika sudah 1NF?', 'Ketergantungan parsial hanya mungkin bila kunci terdiri dari lebih dari satu atribut.'], ['Sebutkan satu alasan denormalisasi.', 'Kueri laporan yang sangat sering dengan banyak JOIN pada data besar yang hampir tidak berubah.'], ['Apa anomali hapus?', 'Menghapus satu fakta menghilangkan fakta lain yang tak berkaitan karena tersimpan di baris yang sama.']] },
            { summary: ['Anomali ubah, sisip, dan hapus muncul dari redundansi.', '1NF: atomik; 2NF: tanpa ketergantungan parsial; 3NF: tanpa ketergantungan transitif; BCNF: determinan = kunci kandidat.', 'Dekomposisi harus tidak kehilangan data (lossless) dan sebaiknya mempertahankan ketergantungan.', 'Denormalisasi adalah keputusan sadar untuk performa baca.'] },
        ],
        faq: [['Apakah ada bentuk normal lebih tinggi dari BCNF?', 'Ya: 4NF (ketergantungan multinilai) dan 5NF, namun jarang diperlukan dalam praktik.'], ['Bagaimana mengetahui ketergantungan fungsional?', 'Dari aturan bisnis dan wawancara dengan pengguna ("apakah satu NIM selalu berarti satu nama?"), bukan dari data contoh saja.'], ['Apakah normalisasi berlaku untuk NoSQL?', 'Tidak langsung. Basis data dokumen sering mendorong penyematan data (denormalisasi) demi pola akses, dengan konsekuensi konsistensi yang perlu dikelola.']],
        sources: [REF_ELM, REF_SILB, ['E. F. Codd, A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6), 1970', 'https://dl.acm.org/doi/10.1145/362384.362685'], ['William Kent, A Simple Guide to Five Normal Forms in Relational Database Theory, CACM 26(2), 1983', '']],
    },

    {
        slug: 'sql-dasar-select-where-order-by-insert-update-delete',
        title: 'SQL Dasar: SELECT, WHERE, INSERT, UPDATE, DELETE',
        description: 'Belajar SQL dari nol dengan data nyata yang dijalankan: SELECT, WHERE, ORDER BY, LIMIT, LIKE, NULL, INSERT, UPDATE, DELETE, dan jebakan umum, plus playground interaktif.',
        date: D, category: C, level: 'Pemula', tags: ['SQL', 'SELECT', 'WHERE', 'INSERT', 'UPDATE'], cta: 'none',
        prereq: ['konsep tabel dan baris'],
        lead: 'SQL (Structured Query Language) adalah bahasa untuk bertanya dan mengubah data pada basis data relasional. Bahasanya deklaratif: Anda menyatakan data apa yang diinginkan, bukan bagaimana mengambilnya. Contoh di sini dijalankan sungguhan pada SQLite dengan satu tabel mahasiswa.',
        body: [
            { objectives: ['membaca dan menulis SELECT dengan WHERE, ORDER BY, LIMIT', 'memakai operator perbandingan, AND/OR, IN, BETWEEN, LIKE', 'memahami NULL dan cara memeriksanya dengan IS NULL', 'menambah, mengubah, dan menghapus data dengan INSERT, UPDATE, DELETE', 'menghindari kesalahan fatal: UPDATE atau DELETE tanpa WHERE'] },
            { h2: 'Data latihan' },
            { code: py`import sqlite3

db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE mahasiswa (
    nim TEXT PRIMARY KEY, nama TEXT NOT NULL, jurusan TEXT, angkatan INTEGER, ipk REAL
);
INSERT INTO mahasiswa VALUES
 ('A01','Ani','SI',2023,3.80), ('A02','Budi','TI',2022,3.10), ('A03','Citra','SI',2023,3.55),
 ('A04','Dewi','TI',2024,NULL), ('A05','Eko','SI',2022,2.90), ('A06','Fajar','MI',2024,3.40);
""")
for baris in db.execute("SELECT * FROM mahasiswa"):
    print(baris)`, lang: 'python', run: true },
            { h2: 'SELECT dan WHERE' },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE mahasiswa (nim TEXT PRIMARY KEY, nama TEXT NOT NULL, jurusan TEXT, angkatan INTEGER, ipk REAL);
INSERT INTO mahasiswa VALUES ('A01','Ani','SI',2023,3.80),('A02','Budi','TI',2022,3.10),('A03','Citra','SI',2023,3.55),
 ('A04','Dewi','TI',2024,NULL),('A05','Eko','SI',2022,2.90),('A06','Fajar','MI',2024,3.40);
""")
def q(sql):
    print(">", " ".join(sql.split()))
    for r in db.execute(sql): print("  ", r)

q("SELECT nama, ipk FROM mahasiswa WHERE jurusan = 'SI'")
q("SELECT nama FROM mahasiswa WHERE ipk >= 3.4 AND angkatan >= 2023")
q("SELECT nama FROM mahasiswa WHERE jurusan IN ('TI','MI')")
q("SELECT nama, angkatan FROM mahasiswa WHERE angkatan BETWEEN 2022 AND 2023")
q("SELECT nama FROM mahasiswa WHERE nama LIKE '%i'")          # berakhiran i
q("SELECT nama, ipk FROM mahasiswa ORDER BY ipk DESC LIMIT 3")`, lang: 'python', run: true, caption: 'Perhatikan: pada urutan menurun, NULL (Dewi) diperlakukan sebagai nilai terkecil oleh SQLite dan tidak muncul di tiga teratas.' },
            { w: 'sqlplay', title: 'Bermain dengan query', desc: 'Pilih kolom filter, operator, dan nilai. Lihat SQL yang dihasilkan dan baris yang cocok.', table: 'mahasiswa', cols: ['nim', 'nama', 'jurusan', 'angkatan', 'ipk'], rows: [['A01', 'Ani', 'SI', 2023, 3.8], ['A02', 'Budi', 'TI', 2022, 3.1], ['A03', 'Citra', 'SI', 2023, 3.55], ['A04', 'Dewi', 'TI', 2024, 3.0], ['A05', 'Eko', 'SI', 2022, 2.9], ['A06', 'Fajar', 'MI', 2024, 3.4]] },
            { h2: 'NULL: bukan nol dan bukan kosong' },
            `NULL berarti "tidak diketahui atau tidak ada". Perbandingan apa pun dengan NULL menghasilkan <i>tidak diketahui</i>, bukan benar atau salah.`,
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE m (nama TEXT, ipk REAL);
INSERT INTO m VALUES ('Ani',3.8),('Dewi',NULL),('Eko',2.9);
""")
print("ipk = NULL      :", db.execute("SELECT nama FROM m WHERE ipk = NULL").fetchall())       # selalu kosong!
print("ipk IS NULL     :", db.execute("SELECT nama FROM m WHERE ipk IS NULL").fetchall())
print("ipk != 3.8      :", db.execute("SELECT nama FROM m WHERE ipk != 3.8").fetchall())       # Dewi tidak ikut
print("COALESCE        :", db.execute("SELECT nama, COALESCE(ipk, 0) FROM m").fetchall())
print("rata-rata (NULL diabaikan):", db.execute("SELECT AVG(ipk) FROM m").fetchone())`, lang: 'python', run: true, caption: 'Gunakan IS NULL / IS NOT NULL. Fungsi agregat seperti AVG mengabaikan NULL, yang sering menjadi sumber salah tafsir.' },
            { h2: 'Mengubah data: INSERT, UPDATE, DELETE' },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE m (nim TEXT PRIMARY KEY, nama TEXT, ipk REAL);
INSERT INTO m VALUES ('A01','Ani',3.8),('A02','Budi',3.1),('A03','Citra',3.55);
""")
db.execute("INSERT INTO m (nim, nama, ipk) VALUES ('A04','Dewi',3.0)")
db.execute("UPDATE m SET ipk = 3.2 WHERE nim = 'A02'")
db.execute("DELETE FROM m WHERE nim = 'A03'")
print(db.execute("SELECT * FROM m").fetchall())

cursor = db.execute("UPDATE m SET ipk = 4.0")      # LUPA WHERE: mengubah SEMUA baris
print("baris terubah tanpa WHERE:", cursor.rowcount)
print(db.execute("SELECT * FROM m").fetchall())`, lang: 'python', run: true, caption: 'Kesalahan paling mahal pemula: UPDATE atau DELETE tanpa WHERE mengubah seluruh tabel.' },
            { callout: 'Kebiasaan aman: tulis dulu <code>SELECT ... WHERE ...</code> untuk melihat baris yang akan terkena, baru ubah menjadi UPDATE atau DELETE. Di basis data produksi, jalankan di dalam <b>transaksi</b> (<code>BEGIN</code> ... <code>ROLLBACK</code>/<code>COMMIT</code>) dan pastikan ada cadangan.', kind: 'warn', title: 'Pengaman' },
            { h2: 'Urutan penulisan dan urutan eksekusi' },
            { table: { head: ['Ditulis', 'Dijalankan', 'Fungsi'], rows: [['SELECT', 'ke-5', 'Memilih kolom'], ['FROM', 'ke-1', 'Sumber tabel'], ['WHERE', 'ke-2', 'Menyaring baris'], ['ORDER BY', 'ke-6', 'Mengurutkan'], ['LIMIT', 'ke-7', 'Membatasi jumlah']] }, },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Cara benar mencari baris dengan nilai kosong?', options: ['WHERE ipk IS NULL', 'WHERE ipk = NULL', 'WHERE ipk = 0'], answer: 0, why: 'Perbandingan = dengan NULL tidak pernah benar.' }, { q: 'Apa yang terjadi pada UPDATE tanpa WHERE?', options: ['Semua baris terubah', 'Tidak ada yang terubah', 'Error'], answer: 0, why: 'Tanpa penyaring, seluruh baris menjadi sasaran.' }, { q: 'LIKE \'%i\' mencocokkan...', options: ['Teks yang berakhiran i', 'Teks yang berawalan i', 'Teks yang persis i'], answer: 0, why: '% mewakili nol atau lebih karakter.' }] },
            { exercise: [['Tulis query untuk menampilkan nama mahasiswa SI dengan IPK di atas 3,5 diurutkan dari tertinggi.', 'SELECT nama, ipk FROM mahasiswa WHERE jurusan = \'SI\' AND ipk > 3.5 ORDER BY ipk DESC;'], ['Mengapa WHERE ipk != 3.8 tidak menampilkan mahasiswa dengan ipk NULL?', 'Perbandingan dengan NULL hasilnya tidak diketahui sehingga baris itu tidak lolos filter.'], ['Tulis query untuk menaikkan IPK semua mahasiswa angkatan 2024 sebesar 0,1.', 'UPDATE mahasiswa SET ipk = ipk + 0.1 WHERE angkatan = 2024;'], ['Apa beda DELETE FROM m dan DROP TABLE m?', 'DELETE menghapus baris tetapi tabel tetap ada; DROP TABLE menghapus tabel beserta strukturnya.']] },
            { summary: ['SELECT kolom FROM tabel WHERE kondisi ORDER BY ... LIMIT ...', 'IN, BETWEEN, LIKE, AND/OR untuk kondisi; IS NULL untuk nilai kosong.', 'INSERT, UPDATE, DELETE mengubah data: selalu periksa WHERE dan gunakan transaksi.', 'Fungsi agregat mengabaikan NULL.'] },
        ],
        faq: [['Apa bedanya SQL dan MySQL?', 'SQL adalah bahasa; MySQL, PostgreSQL, SQLite, SQL Server adalah sistem basis data yang mengimplementasikannya dengan sedikit perbedaan dialek.'], ['Apakah SQL peka huruf besar-kecil?', 'Kata kunci tidak; data pada pembandingan teks tergantung pengaturan sistem (collation) dan dialek.'], ['Bagaimana mencegah SQL injection?', 'Jangan menyambung input pengguna ke dalam string SQL. Gunakan parameter terikat (prepared statement).']],
        sources: [REF_SQLITE, REF_PGDOC, ['W3Schools / SQLBolt: latihan SQL interaktif', 'https://sqlbolt.com/'], REF_ELM],
    },

    {
        slug: 'sql-join-group-by-dan-subquery-menggabungkan-dan-merangkum-data',
        title: 'SQL JOIN, GROUP BY, dan Subquery',
        description: 'Kuasai SQL lanjutan dengan data yang dijalankan: INNER, LEFT JOIN, GROUP BY dan HAVING, fungsi agregat, subquery, dan CTE, termasuk jebakan JOIN yang menggandakan baris.',
        date: D, category: C, level: 'Menengah', tags: ['SQL', 'JOIN', 'GROUP BY', 'subquery', 'CTE'], cta: 'none',
        prereq: ['SQL dasar', 'ERD'],
        lead: 'Kekuatan basis data relasional ada pada menggabungkan tabel dan merangkum data. Materi ini memakai tiga tabel (mahasiswa, mata kuliah, KRS) dan memperlihatkan JOIN, agregasi, dan subquery lewat hasil nyata, termasuk jebakan yang membuat angka laporan salah tanpa terasa.',
        body: [
            { objectives: ['membedakan INNER JOIN dan LEFT JOIN serta menjelaskan hasilnya', 'memakai GROUP BY dengan COUNT, SUM, AVG dan menyaring kelompok dengan HAVING', 'menulis subquery dan CTE', 'membedakan WHERE dan HAVING', 'mengenali JOIN yang menggandakan baris dan menghasilkan agregat salah'] },
            { h2: 'Data latihan' },
            { code: py`import sqlite3

def basis_data():
    db = sqlite3.connect(":memory:")
    db.executescript("""
    CREATE TABLE mahasiswa (nim TEXT PRIMARY KEY, nama TEXT, jurusan TEXT);
    CREATE TABLE mata_kuliah (kode TEXT PRIMARY KEY, nama TEXT, sks INTEGER);
    CREATE TABLE krs (nim TEXT, kode TEXT, nilai INTEGER, PRIMARY KEY (nim, kode));
    INSERT INTO mahasiswa VALUES ('A01','Ani','SI'),('A02','Budi','TI'),('A03','Citra','SI'),('A04','Dewi','TI');
    INSERT INTO mata_kuliah VALUES ('K1','Basis Data',3),('K2','Pemrograman',4),('K3','Jaringan',3),('K4','Statistika',2);
    INSERT INTO krs VALUES ('A01','K1',90),('A01','K2',85),('A02','K1',70),('A02','K3',80),('A03','K2',95);
    """)
    return db

db = basis_data()
for t in ["mahasiswa", "mata_kuliah", "krs"]:
    print(t, db.execute(f"SELECT * FROM {t}").fetchall())`, lang: 'python', run: true, caption: 'Perhatikan: Dewi (A04) belum mengambil mata kuliah apa pun, dan Statistika (K4) belum diambil siapa pun.' },
            { h2: 'INNER JOIN vs LEFT JOIN' },
            { svg: 'diagram', w: 600, h: 150, label: 'JOIN', nodes: [{ id: 'a', x: 130, y: 70, shape: 'ellipse', w: 190, h: 90, t: 'Mahasiswa' }, { id: 'b', x: 330, y: 70, shape: 'ellipse', w: 190, h: 90, t: 'KRS' }, { id: 'c', x: 500, y: 70, shape: 'text', w: 180, h: 70, t: 'INNER: hanya irisan. LEFT: seluruh tabel kiri, NULL bila tak ada pasangan.' }], edges: [] },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE mahasiswa (nim TEXT PRIMARY KEY, nama TEXT, jurusan TEXT);
CREATE TABLE mata_kuliah (kode TEXT PRIMARY KEY, nama TEXT, sks INTEGER);
CREATE TABLE krs (nim TEXT, kode TEXT, nilai INTEGER, PRIMARY KEY (nim, kode));
INSERT INTO mahasiswa VALUES ('A01','Ani','SI'),('A02','Budi','TI'),('A03','Citra','SI'),('A04','Dewi','TI');
INSERT INTO mata_kuliah VALUES ('K1','Basis Data',3),('K2','Pemrograman',4),('K3','Jaringan',3),('K4','Statistika',2);
INSERT INTO krs VALUES ('A01','K1',90),('A01','K2',85),('A02','K1',70),('A02','K3',80),('A03','K2',95);
""")
def q(sql):
    print(">", " ".join(sql.split()))
    for r in db.execute(sql): print("  ", r)

q("""SELECT m.nama, mk.nama, k.nilai
     FROM krs k JOIN mahasiswa m ON m.nim = k.nim JOIN mata_kuliah mk ON mk.kode = k.kode
     ORDER BY m.nama, mk.nama""")
q("""SELECT m.nama, k.kode
     FROM mahasiswa m LEFT JOIN krs k ON k.nim = m.nim
     WHERE k.kode IS NULL""")                                  # siapa yang belum mengambil apa pun?`, lang: 'python', run: true, caption: 'Pola "LEFT JOIN ... WHERE kanan IS NULL" menemukan data yang tidak memiliki pasangan: mahasiswa tanpa KRS.' },
            { h2: 'GROUP BY dan agregasi' },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE mahasiswa (nim TEXT PRIMARY KEY, nama TEXT, jurusan TEXT);
CREATE TABLE mata_kuliah (kode TEXT PRIMARY KEY, nama TEXT, sks INTEGER);
CREATE TABLE krs (nim TEXT, kode TEXT, nilai INTEGER, PRIMARY KEY (nim, kode));
INSERT INTO mahasiswa VALUES ('A01','Ani','SI'),('A02','Budi','TI'),('A03','Citra','SI'),('A04','Dewi','TI');
INSERT INTO mata_kuliah VALUES ('K1','Basis Data',3),('K2','Pemrograman',4),('K3','Jaringan',3),('K4','Statistika',2);
INSERT INTO krs VALUES ('A01','K1',90),('A01','K2',85),('A02','K1',70),('A02','K3',80),('A03','K2',95);
""")
def q(sql):
    print(">", " ".join(sql.split()))
    for r in db.execute(sql): print("  ", r)

q("""SELECT m.nama, COUNT(k.kode) AS jml_mk, ROUND(AVG(k.nilai),1) AS rata
     FROM mahasiswa m LEFT JOIN krs k ON k.nim = m.nim
     GROUP BY m.nim, m.nama ORDER BY rata DESC""")
q("""SELECT mk.nama, COUNT(*) AS peserta, MAX(k.nilai) AS tertinggi
     FROM krs k JOIN mata_kuliah mk ON mk.kode = k.kode
     GROUP BY mk.kode, mk.nama
     HAVING COUNT(*) >= 2""")                                  # HAVING menyaring KELOMPOK`, lang: 'python', run: true, caption: 'COUNT(k.kode) menghitung hanya baris yang tidak NULL sehingga Dewi mendapat 0, sedangkan COUNT(*) akan menghitung satu baris untuk Dewi.' },
            { table: { head: ['', 'WHERE', 'HAVING'], rows: [['Menyaring', 'Baris, sebelum pengelompokan', 'Kelompok, sesudah agregasi'], ['Boleh memakai agregat?', 'Tidak', 'Ya'], ['Contoh', 'WHERE jurusan = \'SI\'', 'HAVING COUNT(*) >= 2']] } },
            { h2: 'Subquery dan CTE' },
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE mahasiswa (nim TEXT PRIMARY KEY, nama TEXT, jurusan TEXT);
CREATE TABLE krs (nim TEXT, kode TEXT, nilai INTEGER, PRIMARY KEY (nim, kode));
INSERT INTO mahasiswa VALUES ('A01','Ani','SI'),('A02','Budi','TI'),('A03','Citra','SI'),('A04','Dewi','TI');
INSERT INTO krs VALUES ('A01','K1',90),('A01','K2',85),('A02','K1',70),('A02','K3',80),('A03','K2',95);
""")
def q(sql):
    print(">", " ".join(sql.split()))
    for r in db.execute(sql): print("  ", r)

# subquery: nilai di atas rata-rata seluruh nilai
q("SELECT nim, kode, nilai FROM krs WHERE nilai > (SELECT AVG(nilai) FROM krs)")
# subquery dengan IN: mahasiswa yang punya nilai >= 90
q("SELECT nama FROM mahasiswa WHERE nim IN (SELECT nim FROM krs WHERE nilai >= 90)")
# CTE: langkah bernama agar query mudah dibaca
q("""WITH rata AS (SELECT nim, AVG(nilai) AS r FROM krs GROUP BY nim)
     SELECT m.nama, ROUND(rata.r,1) FROM rata JOIN mahasiswa m USING (nim) WHERE rata.r >= 85""")`, lang: 'python', run: true },
            { h2: 'Jebakan: JOIN yang menggandakan baris' },
            `Bila sebuah tabel digabung dengan tabel lain yang memiliki banyak baris per kunci, nilai pada sisi "satu" ikut berulang. Menjumlahkannya setelah JOIN menghasilkan angka yang terlalu besar tanpa pesan kesalahan.`,
            { code: py`import sqlite3
db = sqlite3.connect(":memory:")
db.executescript("""
CREATE TABLE pesanan (id INTEGER PRIMARY KEY, total INTEGER);
CREATE TABLE item   (pesanan_id INTEGER, produk TEXT);
INSERT INTO pesanan VALUES (1, 100000), (2, 50000);
INSERT INTO item VALUES (1,'A'),(1,'B'),(1,'C'),(2,'A');
""")
print("total benar        :", db.execute("SELECT SUM(total) FROM pesanan").fetchone()[0])
print("SUM setelah JOIN   :", db.execute("SELECT SUM(p.total) FROM pesanan p JOIN item i ON i.pesanan_id = p.id").fetchone()[0], " <- salah (pesanan 1 terhitung 3 kali)")
print("perbaikan          :", db.execute("""SELECT SUM(total) FROM pesanan WHERE id IN (SELECT pesanan_id FROM item)""").fetchone()[0])`, lang: 'python', run: true, caption: 'Selalu periksa jumlah baris sebelum dan sesudah JOIN. Agregasi pada sisi "satu" sebaiknya dilakukan sebelum digabung, atau gunakan subquery/CTE.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mencari mahasiswa yang belum mengambil mata kuliah apa pun paling tepat memakai...', options: ['LEFT JOIN dengan WHERE kanan IS NULL', 'INNER JOIN', 'GROUP BY saja'], answer: 0, why: 'LEFT JOIN mempertahankan baris kiri tanpa pasangan.' }, { q: 'HAVING dipakai untuk...', options: ['Menyaring hasil agregasi', 'Menyaring baris sebelum GROUP BY', 'Mengurutkan'], answer: 0, why: 'WHERE terjadi sebelum pengelompokan; HAVING sesudahnya.' }, { q: 'SUM setelah JOIN satu-ke-banyak dapat menghasilkan angka...', options: ['Terlalu besar karena baris berulang', 'Selalu benar', 'Selalu nol'], answer: 0, why: 'Nilai sisi "satu" dihitung berkali-kali.' }] },
            { exercise: [['Tampilkan jumlah SKS yang diambil setiap mahasiswa (termasuk yang 0).', 'LEFT JOIN krs dan mata_kuliah lalu SUM(COALESCE(sks,0)) dengan GROUP BY mahasiswa.'], ['Tulis query untuk mata kuliah yang belum diambil siapa pun.', 'mata_kuliah LEFT JOIN krs ON kode WHERE krs.nim IS NULL.'], ['Mengapa COUNT(*) dan COUNT(kolom) bisa berbeda?', 'COUNT(*) menghitung semua baris; COUNT(kolom) mengabaikan NULL.'], ['Kapan memilih CTE dibanding subquery?', 'Saat query bertingkat atau hasil antara dipakai lebih dari sekali; CTE membuat langkah bernama dan lebih terbaca.']] },
            { summary: ['INNER JOIN hanya irisan; LEFT JOIN mempertahankan seluruh tabel kiri.', 'GROUP BY dengan COUNT, SUM, AVG; HAVING menyaring kelompok.', 'Subquery dan CTE menyusun kueri bertahap.', 'Waspadai JOIN yang menggandakan baris sebelum menjumlahkan.'] },
        ],
        faq: [['Apa itu index dan kapan perlu?', 'Struktur tambahan (biasanya B-tree) yang mempercepat pencarian dan JOIN pada kolom tertentu, dengan biaya ruang dan kecepatan tulis. Buat pada kolom yang sering difilter atau digabung.'], ['Apa itu FULL OUTER JOIN?', 'Mempertahankan baris dari kedua tabel; tidak semua dialek mendukungnya (SQLite versi lama tidak).'], ['Bagaimana membaca rencana eksekusi?', 'Gunakan EXPLAIN (atau EXPLAIN ANALYZE di PostgreSQL) untuk melihat urutan JOIN dan apakah indeks dipakai.']],
        sources: [REF_SQLITE, REF_PGDOC, REF_ELM, ['Use The Index, Luke: panduan indeks SQL', 'https://use-the-index-luke.com/']],
    },

    {
        slug: 'use-case-diagram-dan-diagram-aktivitas-memodelkan-perilaku-sistem',
        title: 'Use Case dan Diagram Aktivitas: Memodelkan Perilaku Sistem',
        description: 'Pelajari use case diagram dengan include dan extend, skenario use case, dan diagram aktivitas dengan swimlane, dengan studi kasus perpustakaan.',
        date: D, category: C, level: 'Menengah', tags: ['use case', 'diagram aktivitas', 'UML', 'swimlane', 'analisis sistem'], cta: 'none',
        prereq: ['analisis kebutuhan', 'DFD'],
        lead: 'DFD menunjukkan ke mana data bergerak; use case dan diagram aktivitas menunjukkan apa yang dapat dilakukan pengguna dan bagaimana alur kerjanya. Keduanya adalah bahasa komunikasi yang efektif antara analis, pengguna, dan pengembang.',
        body: [
            { objectives: ['mengidentifikasi aktor dan use case dari kebutuhan', 'menggambar use case diagram dengan relasi include dan extend', 'menulis skenario use case (alur utama, alur alternatif)', 'menggambar diagram aktivitas dengan keputusan, paralel, dan swimlane', 'memilih antara DFD, use case, dan diagram aktivitas sesuai tujuan'] },
            { h2: 'Use case diagram' },
            `Use case menyatakan <b>tujuan pengguna</b> yang dilayani sistem (bukan fitur teknis). Aktor adalah peran di luar sistem yang berinteraksi dengannya; satu orang dapat memainkan beberapa aktor.`,
            { svg: 'diagram', w: 720, h: 320, label: 'Use case sistem perpustakaan', nodes: [{ id: 'frame', x: 360, y: 160, shape: 'frame', w: 470, h: 290, t: 'Sistem Perpustakaan' }, { id: 'ang', x: 55, y: 150, shape: 'actor', w: 60, h: 80, t: 'Anggota' }, { id: 'pus', x: 665, y: 150, shape: 'actor', w: 60, h: 80, t: 'Pustakawan' }, { id: 'u1', x: 245, y: 75, shape: 'ellipse', w: 170, h: 46, t: 'Mencari buku' }, { id: 'u2', x: 245, y: 160, shape: 'ellipse', w: 170, h: 46, t: 'Meminjam buku' }, { id: 'u3', x: 245, y: 245, shape: 'ellipse', w: 175, h: 52, t: 'Memperpanjang pinjaman' }, { id: 'u4', x: 475, y: 160, shape: 'ellipse', w: 130, h: 46, t: 'Login' }, { id: 'u5', x: 475, y: 245, shape: 'ellipse', w: 175, h: 52, t: 'Mencatat pengembalian' }, { id: 'u6', x: 475, y: 75, shape: 'ellipse', w: 170, h: 46, t: 'Mengelola koleksi' }], edges: [{ from: 'ang', to: 'u1', head: 'none' }, { from: 'ang', to: 'u2', head: 'none' }, { from: 'ang', to: 'u3', head: 'none' }, { from: 'pus', to: 'u5', head: 'none' }, { from: 'pus', to: 'u6', head: 'none' }, { from: 'u2', to: 'u4', head: 'vee', dashed: true, label: 'include' }], caption: 'Garis antara aktor dan use case adalah asosiasi. Panah putus-putus «include» berarti use case selalu memerlukan use case lain (meminjam selalu memerlukan login).' },
            { table: { head: ['Relasi', 'Makna', 'Contoh'], rows: [['Asosiasi', 'Aktor menjalankan use case', 'Anggota – Meminjam buku'], ['«include»', 'Use case selalu memanggil use case lain (perilaku bersama)', 'Meminjam buku «include» Login'], ['«extend»', 'Perilaku opsional yang menyela dalam kondisi tertentu', 'Meminjam buku ← «extend» ← Membayar denda (bila ada denda)'], ['Generalisasi', 'Aktor atau use case khusus dari yang umum', 'Dosen adalah Anggota']] } },
            { h2: 'Skenario use case' },
            `Diagram hanya daftar; isi sesungguhnya ada pada <b>skenario</b> yang menuliskan langkah-langkah.`,
            { code: 'Use case   : Meminjam buku\nAktor      : Anggota\nPrakondisi : Anggota sudah login\nPascakondisi: Buku tercatat dipinjam, stok berkurang 1\n\nAlur utama:\n1. Anggota memilih buku dari hasil pencarian.\n2. Sistem memeriksa ketersediaan buku.\n3. Sistem memeriksa batas pinjaman anggota.\n4. Sistem mencatat peminjaman dan tanggal jatuh tempo.\n5. Sistem menampilkan bukti pinjam.\n\nAlur alternatif:\n2a. Buku tidak tersedia: sistem menawarkan reservasi. Selesai.\n3a. Batas pinjaman tercapai: sistem menolak dan menjelaskan alasannya. Selesai.\n3b. Anggota memiliki denda: sistem mengarahkan ke use case Membayar denda.', lang: 'text', caption: 'Alur alternatif sering menjadi sumber kebutuhan yang terlewat; tuliskan semuanya sejak awal.' },
            { h2: 'Diagram aktivitas' },
            `Diagram aktivitas menunjukkan alur kerja langkah demi langkah, termasuk keputusan dan kegiatan paralel. Cocok untuk memodelkan proses bisnis dan alur sebuah use case. Dengan <b>swimlane</b>, tiap jalur menunjukkan siapa yang bertanggung jawab.`,
            { svg: 'diagram', w: 700, h: 430, label: 'Aktivitas meminjam buku dengan swimlane', nodes: [{ id: 'la', x: 175, y: 215, shape: 'frame', w: 330, h: 410, t: 'Anggota' }, { id: 'lb', x: 525, y: 215, shape: 'frame', w: 330, h: 410, t: 'Sistem' }, { id: 's', x: 175, y: 45, shape: 'round', w: 90, h: 30, t: 'Mulai' }, { id: 'a1', x: 175, y: 110, shape: 'rect', w: 170, h: 36, t: 'Pilih buku' }, { id: 'b1', x: 525, y: 110, shape: 'rect', w: 170, h: 36, t: 'Cek ketersediaan' }, { id: 'd', x: 525, y: 190, shape: 'diamond', w: 150, h: 60, t: 'Tersedia?' }, { id: 'b2', x: 525, y: 280, shape: 'rect', w: 170, h: 36, t: 'Catat pinjaman' }, { id: 'b3', x: 525, y: 350, shape: 'rect', w: 170, h: 36, t: 'Cetak bukti' }, { id: 'a2', x: 175, y: 250, shape: 'rect', w: 170, h: 36, t: 'Tawarkan reservasi' }, { id: 'e', x: 175, y: 390, shape: 'round', w: 90, h: 30, t: 'Selesai' }], edges: [{ from: 's', to: 'a1' }, { from: 'a1', to: 'b1' }, { from: 'b1', to: 'd' }, { from: 'd', to: 'b2', label: 'ya' }, { from: 'b2', to: 'b3' }, { from: 'd', to: 'a2', label: 'tidak' }, { from: 'b3', to: 'e' }, { from: 'a2', to: 'e' }], caption: 'Percabangan memakai belah ketupat dengan label kondisi pada tiap panah keluar. Swimlane menunjukkan siapa melakukan apa.' },
            { callout: 'Elemen penting lain: <b>fork/join</b> (batang tebal) untuk aktivitas paralel, misalnya "kirim email" dan "perbarui stok" berjalan bersamaan, lalu bergabung kembali; dan <b>node akhir</b> bila alur berakhir.', kind: 'info', title: 'Elemen lanjutan' },
            { h2: 'Memilih diagram yang tepat' },
            { table: { head: ['Pertanyaan', 'Diagram'], rows: [['Siapa memakai sistem dan untuk tujuan apa?', 'Use case diagram'], ['Bagaimana langkah rinci satu tujuan?', 'Skenario use case, diagram aktivitas'], ['Bagaimana data bergerak antar proses?', 'DFD'], ['Bagaimana urutan pesan antar objek?', 'Diagram sekuens'], ['Bagaimana struktur data?', 'ERD atau diagram kelas']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Relasi «include» berarti...', options: ['Use case selalu memanggil use case lain', 'Opsional', 'Pewarisan aktor'], answer: 0, why: 'Perilaku wajib yang dipakai bersama.' }, { q: 'Swimlane menunjukkan...', options: ['Siapa yang bertanggung jawab atas aktivitas', 'Waktu eksekusi', 'Jenis data'], answer: 0, why: 'Setiap jalur milik satu peran atau komponen.' }, { q: 'Alur alternatif pada skenario berguna untuk...', options: ['Menangkap kondisi khusus dan kegagalan', 'Menghiasi dokumen', 'Mengurangi aktor'], answer: 0, why: 'Banyak kebutuhan tersembunyi di sana.' }] },
            { exercise: [['Buat daftar use case untuk sistem pemesanan makanan online dari sudut pandang Pelanggan.', 'Mencari restoran, memesan makanan, membayar, melacak pesanan, memberi ulasan; login sebagai «include» bila perlu.'], ['Tulis alur alternatif untuk use case Membayar ketika saldo tidak cukup.', 'Sistem menampilkan pesan, menawarkan metode pembayaran lain atau top-up, dan pesanan tetap berstatus menunggu pembayaran.'], ['Mengapa use case sebaiknya dinamai dengan kata kerja yang menyatakan tujuan pengguna?', 'Agar fokus pada nilai yang diinginkan pengguna, bukan fitur teknis ("Meminjam buku", bukan "Menyimpan ke tabel").'], ['Gambarkan diagram aktivitas sederhana untuk login dengan kemungkinan sandi salah tiga kali.', 'Mulai → input → validasi → (benar) masuk | (salah) tambah hitung → (hitung = 3) kunci akun | (kurang) kembali ke input.']] },
            { summary: ['Use case: aktor dan tujuan; include untuk wajib, extend untuk opsional.', 'Skenario menuliskan alur utama dan alur alternatif.', 'Diagram aktivitas: alur, keputusan, paralel, swimlane.', 'Pilih diagram sesuai pertanyaan yang ingin dijawab.'] },
        ],
        faq: [['Apa beda aktor dan pengguna?', 'Aktor adalah peran (Anggota), bukan orang tertentu; satu orang dapat berperan sebagai beberapa aktor, dan sistem lain dapat menjadi aktor.'], ['Apakah use case sama dengan user story?', 'Berhubungan tetapi berbeda: use case lebih rinci dan terstruktur; user story singkat dan menjadi bahan percakapan.'], ['Alat gambar apa yang dipakai?', 'draw.io (diagrams.net), Lucidchart, StarUML, atau teks seperti PlantUML dan Mermaid.']],
        sources: [['Object Management Group: UML Specification', 'https://www.omg.org/spec/UML/'], ['Alistair Cockburn, Writing Effective Use Cases (Addison-Wesley, 2000)', ''], REF_KENDALL, ['draw.io (diagrams.net) UML templates', 'https://www.drawio.com/']],
    },
];
