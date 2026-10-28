const D = '2026-10-28';
const C = 'Rekayasa Software';

export default [
    {
        slug: 'postgresql-untuk-pemula-instal-dan-query-pertama',
        title: 'PostgreSQL untuk Pemula: Instal sampai Query Pertama',
        description: 'Mulai belajar PostgreSQL: kenapa banyak dipakai developer, cara instal atau pakai Docker, perintah psql, membuat tabel, tipe data penting, dan query pertama.',
        date: D, category: C, tags: ['PostgreSQL', 'belajar database', 'psql', 'SQL', 'Postgres pemula'], cta: 'jasa',
        lead: 'PostgreSQL adalah database relasional open source yang sudah dikembangkan lebih dari 35 tahun. Dalam Stack Overflow Developer Survey 2025, PostgreSQL menjadi database yang paling banyak dipakai responden, sekitar 55%. Kalau Anda hanya sempat belajar satu database, ini pilihan yang aman.',
        body: [
            { h2: 'Kenapa PostgreSQL?' },
            { ul: ['<b>Gratis dan terbuka</b>, tanpa lisensi berbayar untuk fitur inti.', '<b>Patuh standar SQL</b> dan transaksi yang andal (ACID).', '<b>Tipe data kaya:</b> JSONB, array, rentang waktu, UUID, hingga data geografis lewat PostGIS.', '<b>Ekstensi:</b> pgvector untuk pencarian AI, pg_trgm untuk pencarian teks mirip.', '<b>Didukung di mana-mana:</b> Supabase, Neon, AWS RDS, Google Cloud SQL, Railway.'] },

            { h2: 'Cara tercepat menjalankannya' },
            { w: 'compare', title: 'Pilih cara instal', tabs: [
                { label: 'Docker', html: '<pre><code>docker run --name pg -e POSTGRES_PASSWORD=rahasia \\\n  -p 5432:5432 -d postgres:17\n\ndocker exec -it pg psql -U postgres</code></pre>Paling bersih: tidak mengotori sistem, mudah dihapus.' },
                { label: 'Windows/macOS', html: 'Unduh installer dari postgresql.org/download. Paket ini menyertakan <b>psql</b> (baris perintah) dan bisa ditambah <b>pgAdmin</b> (tampilan grafis).' },
                { label: 'Cloud gratis', html: 'Buat proyek di Supabase atau Neon, salin connection string, lalu sambungkan dengan psql, DBeaver, atau langsung dari kode.' },
            ] },

            { h2: 'Perintah psql yang sering dipakai' },
            { table: { head: ['Perintah', 'Fungsi'], rows: [['<code>\\l</code>', 'Daftar database'], ['<code>\\c tokodb</code>', 'Pindah ke database tokodb'], ['<code>\\dt</code>', 'Daftar tabel'], ['<code>\\d produk</code>', 'Struktur tabel produk'], ['<code>\\x</code>', 'Tampilan hasil vertikal (enak untuk baris lebar)'], ['<code>\\q</code>', 'Keluar']] } },

            { h2: 'Membuat database dan tabel pertama' },
            { code: "CREATE DATABASE tokodb;\n\\c tokodb\n\nCREATE TABLE produk (\n  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nama        TEXT NOT NULL,\n  harga       INTEGER NOT NULL CHECK (harga >= 0),  -- rupiah, bilangan bulat\n  stok        INTEGER NOT NULL DEFAULT 0,\n  atribut     JSONB,\n  dibuat_pada TIMESTAMPTZ NOT NULL DEFAULT now()\n);\n\nINSERT INTO produk (nama, harga, stok, atribut) VALUES\n  ('Frame Titanium', 450000, 12, '{\"warna\": \"hitam\"}'),\n  ('Lensa Blue Light', 300000, 40, '{\"indeks\": 1.56}'),\n  ('Kain Microfiber', 15000, 200, NULL);\n\nSELECT nama, harga FROM produk WHERE harga < 400000 ORDER BY harga;" },

            { h2: 'Tipe data yang perlu Anda kenal' },
            { w: 'cards', title: 'Ketuk untuk kapan memakainya', items: [
                { tag: 'Tipe', front: 'TEXT vs VARCHAR(n)', backTag: 'Kapan', back: 'Di PostgreSQL keduanya sama cepat. Pakai TEXT, dan tambah CHECK bila perlu batas panjang.' },
                { tag: 'Tipe', front: 'INTEGER / BIGINT / NUMERIC', backTag: 'Kapan', back: 'Uang rupiah: INTEGER atau BIGINT. Butuh desimal pasti (kurs, pajak): NUMERIC(12,2). Hindari REAL/FLOAT untuk uang.' },
                { tag: 'Tipe', front: 'TIMESTAMPTZ', backTag: 'Kapan', back: 'Hampir selalu pilih ini untuk waktu. Disimpan dalam UTC dan ditampilkan sesuai zona waktu sesi.' },
                { tag: 'Tipe', front: 'JSONB', backTag: 'Kapan', back: 'Atribut yang bervariasi antar baris. Bisa diindeks dan dicari. Jangan jadikan pengganti semua kolom.' },
                { tag: 'Tipe', front: 'UUID', backTag: 'Kapan', back: 'Id yang tidak mudah ditebak atau dibuat di banyak tempat. PostgreSQL 13+ punya gen_random_uuid().' },
            ] },

            { h2: 'Mencari di dalam JSONB' },
            { code: "SELECT nama FROM produk WHERE atribut->>'warna' = 'hitam';\n\n-- index agar pencarian JSONB cepat\nCREATE INDEX idx_produk_atribut ON produk USING GIN (atribut);" },

            { h2: 'Menghubungkan dari kode' },
            { code: "// Node.js dengan pg\nimport pg from 'pg';\nconst pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });\nconst { rows } = await pool.query(\n  'SELECT nama, harga FROM produk WHERE harga < $1', [400000]\n);" },
            { callout: 'Selalu kirim nilai lewat parameter ($1, $2) seperti contoh di atas, bukan menggabungkan string. Ini mencegah SQL injection.', kind: 'warn', title: 'Pakai parameter' },
            { w: 'checklist', title: 'Langkah belajar berikutnya', items: ['Membuat tabel dengan PRIMARY KEY dan FOREIGN KEY.', 'JOIN dua atau tiga tabel.', 'GROUP BY dengan COUNT, SUM, AVG.', 'Membuat INDEX dan membaca EXPLAIN ANALYZE.', 'Transaksi BEGIN, COMMIT, ROLLBACK.', 'Backup dengan pg_dump dan restore.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tipe yang paling tepat untuk waktu pembuatan pesanan?', options: ['TEXT', 'TIMESTAMPTZ', 'INTEGER'], answer: 1, why: 'TIMESTAMPTZ menyimpan waktu lengkap dengan zona waktu.' },
                { q: 'Perintah psql untuk melihat struktur tabel produk?', options: ['\\dt produk', '\\d produk', 'SHOW produk'], answer: 1, why: '\\d nama_tabel menampilkan kolom, tipe, dan index.' },
            ] },
        ],
        faq: [
            ['PostgreSQL atau MySQL untuk pemula?', 'Keduanya bagus. PostgreSQL unggul pada fitur lanjutan dan kepatuhan standar; MySQL sangat umum di hosting murah. Konsep SQL-nya hampir sama.'],
            ['Apakah PostgreSQL cocok untuk Laravel?', 'Ya. Laravel mendukung PostgreSQL bawaan; cukup ubah DB_CONNECTION=pgsql di file .env.'],
            ['Aplikasi GUI apa yang enak dipakai?', 'pgAdmin (resmi), DBeaver (gratis, multi-database), atau TablePlus.'],
        ],
        sources: [
            ['PostgreSQL Tutorial (dokumentasi resmi)', 'https://www.postgresql.org/docs/current/tutorial.html'],
            ['PostgreSQL: Data Types', 'https://www.postgresql.org/docs/current/datatype.html'],
            ['Stack Overflow Developer Survey 2025: Technology', 'https://survey.stackoverflow.co/2025/technology'],
        ],
    },

    {
        slug: 'normalisasi-database-1nf-2nf-3nf-dengan-contoh',
        title: 'Normalisasi Database 1NF, 2NF, 3NF dengan Contoh',
        description: 'Normalisasi database dengan satu contoh tabel nyata yang dipecah bertahap: 1NF, 2NF, 3NF, anomali data, dan kapan denormalisasi justru tepat.',
        date: D, category: C, tags: ['normalisasi database', '1NF 2NF 3NF', 'desain database', 'ERD', 'basis data'], cta: 'jasa',
        lead: 'Normalisasi sering diajarkan sebagai deretan definisi yang membingungkan. Padahal idenya sederhana: simpan setiap fakta di satu tempat saja, supaya data tidak saling bertentangan. Kita akan memperbaiki satu tabel berantakan sampai rapi.',
        body: [
            { h2: 'Tabel awal yang bermasalah' },
            `Sebuah kursus mencatat pendaftaran di satu spreadsheet:`,
            { table: { head: ['id_daftar', 'nama_siswa', 'hp_siswa', 'kelas', 'pengajar', 'hp_pengajar'], rows: [['1', 'Ani', '0812..., 0857...', 'Python Dasar, Web', 'Muchson', '0813...'], ['2', 'Budi', '0819...', 'Python Dasar', 'Muchson', '0813...'], ['3', 'Citra', '0821...', 'Scratch Anak', 'Rina', '0877...']] } },

            { h2: 'Tiga anomali yang muncul' },
            { w: 'cards', title: 'Ketuk untuk contohnya', items: [
                { tag: 'Anomali update', front: 'Nomor HP pengajar berganti.', backTag: 'Akibat', back: 'Harus diubah di banyak baris. Bila satu terlewat, data saling bertentangan.' },
                { tag: 'Anomali insert', front: 'Ada kelas baru tapi belum ada siswa.', backTag: 'Akibat', back: 'Tidak bisa dicatat karena setiap baris harus berisi siswa.' },
                { tag: 'Anomali delete', front: 'Citra keluar, barisnya dihapus.', backTag: 'Akibat', back: 'Informasi bahwa Rina mengajar Scratch Anak ikut hilang.' },
            ] },

            { h2: '1NF: satu sel, satu nilai' },
            `Bentuk normal pertama mensyaratkan setiap kolom berisi nilai <b>atomik</b> (tidak ada daftar dalam satu sel) dan tiap baris bisa diidentifikasi unik. Kolom <code>hp_siswa</code> dan <code>kelas</code> milik Ani berisi dua nilai, jadi melanggar.`,
            { table: { head: ['nama_siswa', 'kelas', 'pengajar', 'hp_pengajar'], rows: [['Ani', 'Python Dasar', 'Muchson', '0813...'], ['Ani', 'Web', 'Muchson', '0813...'], ['Budi', 'Python Dasar', 'Muchson', '0813...'], ['Citra', 'Scratch Anak', 'Rina', '0877...']] } },
            `Nomor HP siswa yang lebih dari satu dipindah ke tabel tersendiri (<code>hp_siswa</code>: id_siswa, nomor).`,

            { h2: '2NF: semua kolom bergantung pada kunci utuh' },
            `Misalkan kunci tabel di atas adalah gabungan (siswa, kelas). Kolom <code>pengajar</code> hanya bergantung pada <b>kelas</b>, bukan pada siswa. Ini ketergantungan parsial. Solusinya: pisahkan.`,
            { code: 'siswa(id_siswa PK, nama)\nkelas(id_kelas PK, nama_kelas, id_pengajar)\npendaftaran(id_siswa FK, id_kelas FK, tanggal_daftar)   -- PK gabungan' },

            { h2: '3NF: tidak ada ketergantungan transitif' },
            `Di tabel kelas, <code>hp_pengajar</code> bergantung pada pengajar, bukan pada kelas. Ketergantungan "kelas → pengajar → hp" disebut transitif. Pindahkan data pengajar ke tabelnya sendiri.`,
            { code: "CREATE TABLE pengajar (\n  id_pengajar SERIAL PRIMARY KEY,\n  nama TEXT NOT NULL,\n  hp   TEXT\n);\nCREATE TABLE kelas (\n  id_kelas SERIAL PRIMARY KEY,\n  nama_kelas TEXT NOT NULL,\n  id_pengajar INT REFERENCES pengajar(id_pengajar)\n);\nCREATE TABLE siswa (\n  id_siswa SERIAL PRIMARY KEY,\n  nama TEXT NOT NULL\n);\nCREATE TABLE pendaftaran (\n  id_siswa INT REFERENCES siswa(id_siswa),\n  id_kelas INT REFERENCES kelas(id_kelas),\n  tanggal_daftar DATE DEFAULT current_date,\n  PRIMARY KEY (id_siswa, id_kelas)\n);" },
            { svg: 'layers', label: 'Ringkasan tiga bentuk normal', items: [{ t: '3NF', d: 'Kolom bukan kunci tidak bergantung pada kolom bukan kunci lain.' }, { t: '2NF', d: 'Semua kolom bergantung pada seluruh kunci, bukan sebagian.' }, { t: '1NF', d: 'Nilai atomik, tidak ada daftar dalam satu sel, baris unik.' }], caption: 'Setiap tingkat memenuhi syarat tingkat di bawahnya.' },
            `Sekarang nomor HP Muchson cukup diubah di <b>satu</b> baris, kelas baru bisa dibuat tanpa siswa, dan menghapus pendaftaran Citra tidak menghapus informasi pengajar.`,

            { h2: 'Kapan denormalisasi justru tepat?' },
            { ul: ['<b>Laporan dan analitik</b> yang membaca jutaan baris: tabel ringkasan atau materialized view lebih cepat.', '<b>Snapshot historis:</b> harga di tabel pesanan harus disalin dari tabel produk, karena harga produk bisa berubah setelah transaksi.', '<b>Kebutuhan baca yang sangat tinggi</b> dengan cache atau kolom hitungan (misalnya jumlah_komentar).'] },
            { callout: 'Mulailah dari desain ternormalisasi (biasanya 3NF). Denormalisasi adalah keputusan sadar berdasarkan pengukuran, bukan titik awal.', kind: 'info', title: 'Aturan praktis' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Sel berisi "Python, Web, Scratch" melanggar...', options: ['1NF', '2NF', '3NF'], answer: 0, why: 'Satu sel harus berisi satu nilai.' },
                { q: 'kelas → pengajar → hp_pengajar adalah contoh ketergantungan...', options: ['Parsial', 'Transitif', 'Atomik'], answer: 1, why: 'hp bergantung pada kelas melalui pengajar.' },
                { q: 'Kenapa harga disalin ke tabel pesanan?', options: ['Kesalahan desain', 'Agar riwayat transaksi tidak berubah saat harga produk naik', 'Agar 3NF'], answer: 1, why: 'Ini denormalisasi yang disengaja untuk menyimpan fakta pada saat transaksi.' },
            ] },
        ],
        faq: [
            ['Apakah perlu sampai BCNF atau 4NF?', 'Untuk sebagian besar aplikasi bisnis, 3NF sudah cukup. BCNF dan bentuk lebih tinggi relevan pada kasus ketergantungan yang lebih rumit.'],
            ['Apakah normalisasi membuat query lebih lambat?', 'Butuh JOIN lebih banyak, tetapi dengan index yang tepat JOIN di database relasional sangat cepat. Masalah performa biasanya datang dari index yang hilang.'],
            ['Bagaimana menggambar rancangannya?', 'Gunakan ERD (Entity Relationship Diagram) dengan alat seperti dbdiagram.io atau draw.io.'],
        ],
        sources: [
            ['E. F. Codd (1970): A Relational Model of Data for Large Shared Data Banks', 'https://doi.org/10.1145/362384.362685'],
            ['PostgreSQL Docs: Constraints (primary key dan foreign key)', 'https://www.postgresql.org/docs/current/ddl-constraints.html'],
            ['Database SQL vs NoSQL (artikel terkait)', 'https://muchson.web.id/artikel/database-sql-vs-nosql-bedanya/'],
        ],
    },

    {
        slug: 'index-database-kenapa-query-lambat',
        title: 'Index Database: Kenapa Query Lambat dan Cara Mempercepat',
        description: 'Cara kerja index database dengan analogi buku, kapan index membantu atau merugikan, index gabungan, membaca EXPLAIN ANALYZE, dan memperbaiki query.',
        date: D, category: C, tags: ['index database', 'query lambat', 'EXPLAIN ANALYZE', 'optimasi SQL', 'PostgreSQL'], cta: 'jasa',
        lead: 'Aplikasi yang tadinya cepat tiba-tiba lambat setelah datanya mencapai ratusan ribu baris. Dalam banyak kasus, penyebabnya satu: database terpaksa membaca seluruh tabel karena tidak ada index yang cocok. Menambahkan satu baris CREATE INDEX bisa mengubah waktu query dari detik menjadi milidetik.',
        body: [
            { h2: 'Analogi: indeks di belakang buku' },
            `Mencari kata "fotosintesis" di buku biologi 500 halaman tanpa indeks berarti membaca halaman demi halaman. Dengan indeks di belakang buku, Anda langsung tahu: halaman 212. Index database bekerja sama: struktur terpisah yang tersusun urut dan menunjuk ke lokasi baris.`,
            { svg: 'versus', label: 'Tanpa dan dengan index', left: { title: 'Sequential scan', items: ['Baca semua baris', 'Waktu tumbuh sebanding jumlah data: O(n)', 'Wajar untuk tabel kecil'] }, right: { title: 'Index scan (B-tree)', items: ['Langsung ke baris yang cocok', 'Waktu tumbuh sangat lambat: O(log n)', 'Butuh ruang dan perawatan'] } },
            { w: 'calc', title: 'Berapa langkah pencarian?', desc: 'Perkiraan jumlah perbandingan: tanpa index (rata-rata separuh tabel) vs pencarian berurutan seperti B-tree (sekitar log₂ n).', inputs: [{ id: 'n', label: 'Jumlah baris', value: 1000000, min: 1000, max: 100000000, step: 1000 }], outputs: [{ label: 'Tanpa index (rata-rata)', expr: 'n / 2', fmt: 'num', unit: ' baris dibaca' }, { label: 'Dengan pencarian terurut', expr: 'ceil(log2(n))', fmt: 'num', unit: ' langkah', big: true, note: 'B-tree sungguhan lebih efisien lagi karena satu simpulnya menampung banyak kunci.' }] },

            { h2: 'Membuat index' },
            { code: "-- query yang sering dipakai\nSELECT * FROM pesanan WHERE email_pelanggan = 'ani@contoh.id';\n\n-- index untuk kolom di WHERE\nCREATE INDEX idx_pesanan_email ON pesanan (email_pelanggan);\n\n-- di produksi PostgreSQL, hindari mengunci tabel saat membuat index\nCREATE INDEX CONCURRENTLY idx_pesanan_email ON pesanan (email_pelanggan);" },

            { h2: 'Membaca EXPLAIN ANALYZE' },
            { code: "EXPLAIN ANALYZE\nSELECT * FROM pesanan WHERE email_pelanggan = 'ani@contoh.id';\n\n-- Sebelum index:\nSeq Scan on pesanan  (actual time=0.02..412.3 rows=3 loops=1)\n  Filter: (email_pelanggan = 'ani@contoh.id')\n  Rows Removed by Filter: 1999997\n\n-- Sesudah index:\nIndex Scan using idx_pesanan_email on pesanan  (actual time=0.03..0.05 rows=3)" },
            { ul: ['<b>Seq Scan</b> pada tabel besar dengan banyak "Rows Removed by Filter" adalah tanda index mungkin dibutuhkan.', '<b>actual time</b> menunjukkan waktu nyata dalam milidetik.', 'Bandingkan <b>rows</b> perkiraan dan aktual; selisih jauh bisa berarti statistik usang (jalankan ANALYZE).'] },

            { h2: 'Index gabungan dan urutan kolom' },
            `Index pada <code>(status, dibuat_pada)</code> membantu query yang memfilter <code>status</code>, atau <code>status</code> dan <code>dibuat_pada</code> bersama. Ia kurang membantu query yang hanya memfilter <code>dibuat_pada</code>. Seperti buku telepon yang urut nama belakang lalu nama depan: mudah mencari "Santoso, Budi", sulit mencari semua "Budi".`,
            { code: "CREATE INDEX idx_pesanan_status_tanggal ON pesanan (status, dibuat_pada DESC);\n\n-- terbantu\nSELECT * FROM pesanan WHERE status = 'baru' ORDER BY dibuat_pada DESC LIMIT 20;" },

            { h2: 'Kapan index tidak membantu atau malah merugikan' },
            { w: 'cards', title: 'Ketuk untuk penjelasannya', items: [
                { tag: 'Kasus', front: 'WHERE lower(email) = ... padahal index pada email.', backTag: 'Kenapa', back: 'Fungsi pada kolom membuat index biasa tidak terpakai. Buat expression index: CREATE INDEX ON t (lower(email)).' },
                { tag: 'Kasus', front: "WHERE nama LIKE '%sari%'", backTag: 'Kenapa', back: 'Wildcard di depan tidak bisa memakai B-tree. Pakai index trigram (pg_trgm) atau full-text search.' },
                { tag: 'Kasus', front: 'Kolom jenis_kelamin dengan dua nilai.', backTag: 'Kenapa', back: 'Selektivitas rendah; database sering memilih seq scan karena separuh tabel tetap harus dibaca.' },
                { tag: 'Kasus', front: 'Tabel log yang ditulis ribuan kali per detik dengan 10 index.', backTag: 'Kenapa', back: 'Setiap INSERT juga memperbarui semua index. Terlalu banyak index memperlambat penulisan.' },
            ] },

            { h2: 'Langkah memperbaiki query lambat' },
            { ol: ['Temukan query paling lambat atau paling sering (pg_stat_statements, slow query log).', 'Jalankan EXPLAIN ANALYZE dengan parameter nyata.', 'Cari Seq Scan besar, sort mahal, atau loop bersarang dengan banyak baris.', 'Tambahkan index yang sesuai pola WHERE, JOIN, dan ORDER BY.', 'Ukur lagi. Hapus index yang tidak pernah dipakai.', 'Periksa juga masalah N+1 di kode aplikasi (ORM memanggil query di dalam loop).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Index pada (kota, tanggal) paling membantu untuk...', options: ["WHERE tanggal = '2026-10-01'", "WHERE kota = 'Malang' AND tanggal > '2026-10-01'", 'Semua query tabel itu'], answer: 1, why: 'Kolom paling kiri index harus dipakai dalam filter.' },
                { q: 'Kekurangan menambah banyak index adalah...', options: ['SELECT jadi lambat', 'INSERT/UPDATE jadi lebih lambat dan butuh ruang', 'Data hilang'], answer: 1, why: 'Setiap penulisan harus memperbarui setiap index.' },
            ] },
        ],
        faq: [
            ['Apakah primary key otomatis ber-index?', 'Ya, di PostgreSQL dan MySQL primary key dan kolom UNIQUE otomatis memiliki index.'],
            ['Apakah foreign key otomatis ber-index?', 'Di PostgreSQL tidak. Index kolom foreign key yang sering dipakai JOIN atau ON DELETE, karena sering kali dibutuhkan.'],
            ['Berapa banyak index yang wajar?', 'Tidak ada angka pasti. Buat index untuk pola query nyata, lalu pantau index yang tidak pernah dipakai (pg_stat_user_indexes).'],
        ],
        sources: [
            ['PostgreSQL Docs: Indexes', 'https://www.postgresql.org/docs/current/indexes.html'],
            ['PostgreSQL Docs: Using EXPLAIN', 'https://www.postgresql.org/docs/current/using-explain.html'],
            ['Use The Index, Luke! (Markus Winand)', 'https://use-the-index-luke.com/'],
        ],
    },

    {
        slug: 'sql-join-inner-left-right-dijelaskan',
        title: 'SQL JOIN Dijelaskan: INNER, LEFT, RIGHT, FULL',
        description: 'SQL JOIN dengan contoh tabel siswa dan kelas: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, self join, kesalahan umum duplikasi baris, dan latihan soal.',
        date: D, category: C, tags: ['SQL JOIN', 'LEFT JOIN', 'INNER JOIN', 'belajar SQL', 'query database'], cta: 'jasa',
        lead: 'Data yang dinormalisasi tersebar di banyak tabel. JOIN adalah cara menyatukannya kembali saat dibutuhkan. Begitu paham JOIN, Anda bisa menjawab pertanyaan seperti "siswa mana yang belum ikut kelas apa pun?" dengan satu query.',
        body: [
            { h2: 'Dua tabel contoh' },
            { table: { head: ['siswa.id', 'siswa.nama', 'siswa.kelas_id'], rows: [['1', 'Ani', '10'], ['2', 'Budi', '20'], ['3', 'Citra', 'NULL'], ['4', 'Dodi', '10']] } },
            { table: { head: ['kelas.id', 'kelas.nama'], rows: [['10', 'Python Dasar'], ['20', 'Web Dasar'], ['30', 'Data Science']] } },
            `Perhatikan: Citra belum punya kelas, dan kelas Data Science belum punya siswa.`,

            { h2: 'INNER JOIN: hanya yang punya pasangan' },
            { code: 'SELECT s.nama, k.nama AS kelas\nFROM siswa s\nINNER JOIN kelas k ON k.id = s.kelas_id;' },
            { table: { head: ['nama', 'kelas'], rows: [['Ani', 'Python Dasar'], ['Budi', 'Web Dasar'], ['Dodi', 'Python Dasar']] } },
            `Citra dan Data Science tidak muncul karena tidak punya pasangan.`,

            { h2: 'LEFT JOIN: semua dari tabel kiri' },
            { code: 'SELECT s.nama, k.nama AS kelas\nFROM siswa s\nLEFT JOIN kelas k ON k.id = s.kelas_id;' },
            { table: { head: ['nama', 'kelas'], rows: [['Ani', 'Python Dasar'], ['Budi', 'Web Dasar'], ['Citra', 'NULL'], ['Dodi', 'Python Dasar']] } },
            { h3: 'Pola penting: mencari yang tidak punya pasangan' },
            { code: '-- siswa yang belum ikut kelas\nSELECT s.nama\nFROM siswa s\nLEFT JOIN kelas k ON k.id = s.kelas_id\nWHERE k.id IS NULL;   -- hasil: Citra' },

            { h2: 'RIGHT JOIN dan FULL OUTER JOIN' },
            { w: 'compare', title: 'Hasil masing-masing', tabs: [
                { label: 'RIGHT JOIN', html: 'Semua baris dari tabel <b>kanan</b> (kelas), siswa diisi NULL bila tidak ada.<br>Ani-Python, Dodi-Python, Budi-Web, <b>NULL-Data Science</b>.<br>Dalam praktik, banyak orang menukar urutan tabel dan memakai LEFT JOIN agar lebih mudah dibaca.' },
                { label: 'FULL OUTER JOIN', html: 'Semua baris dari <b>kedua</b> tabel.<br>Ani-Python, Budi-Web, <b>Citra-NULL</b>, Dodi-Python, <b>NULL-Data Science</b>.<br>Berguna untuk membandingkan dua daftar dan mencari yang tidak cocok di kedua sisi. MySQL tidak mendukung FULL JOIN secara langsung.' },
            ] },
            { svg: 'matrix', x: 'Ambil yang tidak berpasangan dari kanan', y: 'Ambil yang tidak berpasangan dari kiri', label: 'Peta jenis JOIN', quads: [{ t: 'LEFT JOIN', d: 'Kiri lengkap' }, { t: 'FULL OUTER', d: 'Keduanya lengkap' }, { t: 'INNER JOIN', d: 'Hanya pasangan' }, { t: 'RIGHT JOIN', d: 'Kanan lengkap' }] },

            { h2: 'Menggabungkan JOIN dengan GROUP BY' },
            { code: '-- jumlah siswa per kelas, termasuk kelas kosong\nSELECT k.nama, COUNT(s.id) AS jumlah_siswa\nFROM kelas k\nLEFT JOIN siswa s ON s.kelas_id = k.id\nGROUP BY k.nama\nORDER BY jumlah_siswa DESC;\n-- Python Dasar 2, Web Dasar 1, Data Science 0' },
            { callout: 'Gunakan COUNT(s.id), bukan COUNT(*). Pada kelas kosong, LEFT JOIN menghasilkan satu baris berisi NULL, sehingga COUNT(*) akan menghitung 1.', kind: 'warn', title: 'Jebakan COUNT' },

            { h2: 'Kesalahan umum' },
            { ul: ['<b>Lupa kondisi ON</b> sehingga terjadi perkalian kartesius: 1.000 × 1.000 = 1 juta baris.', '<b>Baris berlipat</b> saat menggabungkan dua relasi satu-ke-banyak sekaligus (misalnya pesanan dengan item dan pembayaran). Agregasi dulu di subquery.', '<b>Filter tabel kanan di WHERE</b> pada LEFT JOIN, yang diam-diam mengubahnya menjadi INNER JOIN. Pindahkan kondisi itu ke ON.'] },
            { code: "-- Salah: LEFT JOIN berubah jadi INNER\nSELECT s.nama, k.nama FROM siswa s\nLEFT JOIN kelas k ON k.id = s.kelas_id\nWHERE k.nama = 'Python Dasar';\n\n-- Benar bila ingin tetap menampilkan semua siswa\nSELECT s.nama, k.nama FROM siswa s\nLEFT JOIN kelas k ON k.id = s.kelas_id AND k.nama = 'Python Dasar';" },
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'Query untuk kelas yang belum punya siswa?', options: ['kelas INNER JOIN siswa', 'kelas LEFT JOIN siswa ... WHERE s.id IS NULL', 'siswa LEFT JOIN kelas'], answer: 1, why: 'Ambil semua kelas, lalu saring yang pasangannya kosong.' },
                { q: 'Berapa baris hasil INNER JOIN pada contoh di atas?', options: ['3', '4', '5'], answer: 0, why: 'Ani, Budi, dan Dodi punya kelas.' },
                { q: 'Hasil COUNT(*) untuk Data Science pada LEFT JOIN + GROUP BY?', options: ['0', '1', 'NULL'], answer: 1, why: 'Ada satu baris berisi NULL, dan COUNT(*) menghitung baris.' },
            ] },
        ],
        faq: [
            ['Apakah JOIN sama dengan INNER JOIN?', 'Ya, menulis JOIN saja berarti INNER JOIN.'],
            ['JOIN atau subquery, mana lebih cepat?', 'Optimizer database modern sering mengubah keduanya menjadi rencana yang mirip. Pilih yang paling mudah dibaca, lalu ukur dengan EXPLAIN bila perlu.'],
            ['Apa itu self join?', 'Menggabungkan tabel dengan dirinya sendiri, misalnya tabel karyawan dengan kolom atasan_id yang menunjuk karyawan lain.'],
        ],
        sources: [
            ['PostgreSQL Tutorial: Joins Between Tables', 'https://www.postgresql.org/docs/current/tutorial-join.html'],
            ['SQL dasar SELECT, WHERE, ORDER BY (artikel terkait)', 'https://muchson.web.id/artikel/sql-dasar-untuk-pemula-select-where-order-by/'],
        ],
    },

    {
        slug: 'transaksi-database-dan-acid-dijelaskan',
        title: 'Transaksi Database dan ACID: Agar Data Tidak Kacau',
        description: 'Transaksi database dan ACID dengan contoh saldo dan stok: BEGIN, COMMIT, ROLLBACK, race condition, tingkat isolasi, serta pemakaian di Laravel dan Node.',
        date: D, category: C, tags: ['transaksi database', 'ACID', 'race condition', 'ROLLBACK', 'konsistensi data'], cta: 'jasa',
        lead: 'Bayangkan aplikasi memotong saldo Ani, lalu server mati sebelum saldo Budi ditambah. Uang hilang. Atau dua pembeli menekan "Beli" bersamaan untuk stok terakhir, dan keduanya berhasil. Transaksi database ada untuk mencegah kekacauan seperti ini.',
        body: [
            { h2: 'Transaksi: semua atau tidak sama sekali' },
            { code: "BEGIN;\nUPDATE rekening SET saldo = saldo - 100000 WHERE id = 'ani';\nUPDATE rekening SET saldo = saldo + 100000 WHERE id = 'budi';\nCOMMIT;   -- kedua perubahan tersimpan bersama\n\n-- bila ada error di tengah:\nROLLBACK; -- semua perubahan sejak BEGIN dibatalkan" },

            { h2: 'Empat sifat ACID' },
            { w: 'cards', title: 'Ketuk untuk artinya', items: [
                { tag: 'A', front: 'Atomicity', backTag: 'Arti', back: 'Semua langkah berhasil, atau semuanya dibatalkan. Tidak ada setengah jalan.' },
                { tag: 'C', front: 'Consistency', backTag: 'Arti', back: 'Data selalu memenuhi aturan (constraint): saldo tidak negatif, foreign key valid.' },
                { tag: 'I', front: 'Isolation', backTag: 'Arti', back: 'Transaksi yang berjalan bersamaan tidak saling mengganggu seolah berjalan bergantian.' },
                { tag: 'D', front: 'Durability', backTag: 'Arti', back: 'Setelah COMMIT, data tetap ada walau server mati sesaat kemudian.' },
            ] },

            { h2: 'Race condition: musuh yang tidak terlihat saat uji coba' },
            `Di laptop developer, satu orang mengklik satu kali. Di produksi, ratusan permintaan datang bersamaan. Pola "baca, hitung di aplikasi, tulis" rentan:`,
            { code: "// Rentan: dua permintaan bisa membaca stok = 1 bersamaan\nconst { stok } = await db.query('SELECT stok FROM produk WHERE id = $1', [id]);\nif (stok > 0) {\n  await db.query('UPDATE produk SET stok = $1 WHERE id = $2', [stok - 1, id]);\n}" },
            { svg: 'timeline', label: 'Dua pembeli, satu stok', events: [['09:00:00.001', 'A membaca stok = 1', ''], ['09:00:00.002', 'B membaca stok = 1', ''], ['09:00:00.003', 'A menulis stok = 0', 'A berhasil membeli.'], ['09:00:00.004', 'B menulis stok = 0', 'B juga "berhasil". Barang terjual dua kali.']] },
            { h3: 'Solusi 1: biarkan database yang menghitung' },
            { code: "UPDATE produk SET stok = stok - 1\nWHERE id = $1 AND stok > 0\nRETURNING stok;\n-- bila tidak ada baris yang kembali, stok sudah habis" },
            { h3: 'Solusi 2: kunci baris di dalam transaksi' },
            { code: "BEGIN;\nSELECT stok FROM produk WHERE id = $1 FOR UPDATE;  -- transaksi lain menunggu\n-- periksa dan proses pembayaran, buat pesanan...\nUPDATE produk SET stok = stok - 1 WHERE id = $1;\nINSERT INTO pesanan (...) VALUES (...);\nCOMMIT;" },
            { callout: 'Tambahkan juga constraint di database, misalnya CHECK (stok >= 0) dan CHECK (saldo >= 0). Constraint adalah penjaga terakhir bila ada bug di kode aplikasi.', kind: 'info', title: 'Pertahanan berlapis' },

            { h2: 'Tingkat isolasi' },
            { table: { head: ['Tingkat', 'Mencegah', 'Catatan'], rows: [['Read Committed', 'Membaca data yang belum di-commit', 'Default PostgreSQL. Cukup untuk sebagian besar kasus bila dipadu UPDATE atomik atau FOR UPDATE.'], ['Repeatable Read', '+ pembacaan ulang yang berubah di tengah transaksi', 'Default MySQL InnoDB.'], ['Serializable', 'Semua anomali konkurensi', 'Paling ketat; aplikasi harus siap mengulang transaksi yang gagal.']] } },

            { h2: 'Di framework' },
            { w: 'compare', title: 'Contoh kode', tabs: [
                { label: 'Laravel', html: '<pre><code>DB::transaction(function () use ($id) {\n    $produk = Produk::lockForUpdate()->findOrFail($id);\n    abort_if($produk-&gt;stok &lt; 1, 409, "Stok habis");\n    $produk-&gt;decrement("stok");\n    Pesanan::create([...]);\n});</code></pre>Bila terjadi exception, Laravel otomatis melakukan rollback.' },
                { label: 'Node (pg)', html: '<pre><code>const client = await pool.connect();\ntry {\n  await client.query("BEGIN");\n  // ... query-query\n  await client.query("COMMIT");\n} catch (e) {\n  await client.query("ROLLBACK");\n  throw e;\n} finally {\n  client.release();\n}</code></pre>' },
            ] },
            { h2: 'Hal yang tidak boleh dilakukan di dalam transaksi' },
            { ul: ['Memanggil API eksternal yang lambat (payment gateway, email) sambil memegang kunci. Lakukan sebelum atau sesudah, atau pakai antrean.', 'Transaksi yang terbuka berlama-lama, misalnya menunggu input pengguna.', 'Lupa ROLLBACK pada jalur error sehingga koneksi tertahan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Sifat ACID yang menjamin "semua atau tidak sama sekali"?', options: ['Atomicity', 'Durability', 'Isolation'], answer: 0, why: 'Atomicity mencegah perubahan setengah jalan.' },
                { q: 'Cara paling sederhana mencegah stok minus saat pembelian bersamaan?', options: ['Cek stok di frontend', 'UPDATE ... SET stok = stok - 1 WHERE stok > 0', 'Menambah server'], answer: 1, why: 'Database memeriksa dan mengubah dalam satu langkah atomik.' },
            ] },
        ],
        faq: [
            ['Apakah NoSQL mendukung transaksi?', 'Banyak yang sekarang mendukung, misalnya MongoDB (multi-document transactions) dan Firestore. Cakupan dan batasannya berbeda dari database relasional.'],
            ['Apa itu deadlock?', 'Dua transaksi saling menunggu kunci yang dipegang yang lain. Database akan membatalkan salah satunya; aplikasi sebaiknya mengulang. Mengunci baris dengan urutan yang konsisten mengurangi risikonya.'],
            ['Bagaimana dengan transaksi lintas layanan (microservices)?', 'Biasanya memakai pola saga: rangkaian langkah lokal dengan langkah kompensasi bila ada yang gagal.'],
        ],
        sources: [
            ['PostgreSQL Docs: Transactions (tutorial)', 'https://www.postgresql.org/docs/current/tutorial-transactions.html'],
            ['PostgreSQL Docs: Transaction Isolation', 'https://www.postgresql.org/docs/current/transaction-iso.html'],
            ['Laravel Docs: Database Transactions', 'https://laravel.com/docs/database#database-transactions'],
        ],
    },
];
