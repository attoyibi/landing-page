const D = '2026-10-28';
const C = 'Coding & Algoritma';

export default [
    {
        slug: 'perulangan-for-dan-while-python',
        title: 'Perulangan For dan While di Python: Contoh dan Latihan',
        description: 'Belajar perulangan for dan while di Python dengan contoh nyata: range, loop list, break, continue, loop bersarang, kesalahan umum, dan soal latihan dengan pembahasan.',
        date: D, category: C, tags: ['perulangan Python', 'for loop Python', 'while loop', 'belajar Python', 'Python dasar'], cta: 'jasa',
        lead: 'Perulangan adalah salah satu alat paling kuat dalam pemrograman: satu blok kode bisa dijalankan ratusan atau jutaan kali. Python punya dua jenis perulangan utama, for dan while. Artikel ini menjelaskan kapan memakai masing-masing, lengkap dengan contoh yang bisa langsung dicoba.',
        body: [
            { h2: 'For: mengulang untuk setiap item' },
            `<code>for</code> dipakai ketika kita tahu apa yang akan diulang: setiap angka dalam rentang, setiap item dalam list, setiap huruf dalam teks.`,
            { code: 'for i in range(5):\n    print("Ulangan ke-", i)\n# 0, 1, 2, 3, 4  (range berhenti SEBELUM 5)\n\nfor i in range(1, 11, 2):\n    print(i)\n# 1, 3, 5, 7, 9  (mulai 1, sebelum 11, lompat 2)\n\nbelanja = ["beras", "telur", "minyak"]\nfor barang in belanja:\n    print("- " + barang)' },
            { table: { head: ['Bentuk range', 'Menghasilkan'], rows: [
                ['<code>range(5)</code>', '0, 1, 2, 3, 4'],
                ['<code>range(2, 6)</code>', '2, 3, 4, 5'],
                ['<code>range(10, 0, -2)</code>', '10, 8, 6, 4, 2'],
            ] } },
            { h3: 'enumerate: butuh nomor urut' },
            { code: 'peserta = ["Ani", "Budi", "Cici"]\nfor nomor, nama in enumerate(peserta, start=1):\n    print(f"{nomor}. {nama}")' },

            { h2: 'While: mengulang selama kondisi benar' },
            `<code>while</code> dipakai ketika kita tidak tahu berapa kali harus mengulang, hanya tahu kapan harus berhenti.`,
            { code: 'saldo = 100000\nhari = 0\nwhile saldo >= 15000:\n    saldo -= 15000        # jajan harian\n    hari += 1\nprint(f"Uang cukup untuk {hari} hari, sisa {saldo}")' },
            { code: '# meminta input sampai valid\nwhile True:\n    umur = input("Umur: ")\n    if umur.isdigit():\n        break\n    print("Masukkan angka ya.")\nprint("Terima kasih")' },
            { callout: 'Pastikan sesuatu di dalam while mengubah kondisi, misalnya saldo berkurang. Kalau tidak, program berjalan selamanya (infinite loop). Tekan Ctrl + C di terminal untuk menghentikannya.', kind: 'warn', title: 'Awas loop tanpa akhir' },

            { h2: 'For atau while?' },
            { svg: 'versus', label: 'Kapan memakai for dan while', left: { title: 'for', items: ['Jumlah ulangan diketahui', 'Mengolah setiap item list', 'Rentang angka tertentu', 'Lebih aman dari loop tanpa akhir'] }, right: { title: 'while', items: ['Berhenti saat kondisi tercapai', 'Menunggu input valid', 'Simulasi sampai target', 'Perlu hati-hati mengubah kondisi'] } },

            { h2: 'break dan continue' },
            { code: 'nilai = [80, 92, 45, 77, 100]\n\nfor n in nilai:\n    if n < 50:\n        print("Ada yang remedial, berhenti memeriksa")\n        break          # keluar dari loop\n    print("Lulus:", n)\n\nfor n in nilai:\n    if n < 75:\n        continue       # lewati, lanjut ke item berikutnya\n    print("Di atas KKM:", n)' },

            { h2: 'Perulangan bersarang' },
            { code: 'for baris in range(1, 6):\n    for kolom in range(1, 6):\n        print(f"{baris * kolom:3}", end="")\n    print()\n# Tabel perkalian 5 x 5' },

            { h2: 'Kesalahan umum' },
            { w: 'cards', title: 'Ketuk untuk perbaikannya', items: [
                { tag: 'Kesalahan', front: 'Mengira range(1, 10) sampai 10.', backTag: 'Perbaikan', back: 'range berhenti sebelum angka akhir. Untuk 1 sampai 10, pakai range(1, 11).' },
                { tag: 'Kesalahan', front: 'Lupa titik dua atau indentasi setelah for/while.', backTag: 'Perbaikan', back: 'Python memakai indentasi (biasanya 4 spasi) untuk menandai isi loop.' },
                { tag: 'Kesalahan', front: 'Mengubah list sambil di-loop.', backTag: 'Perbaikan', back: 'Buat list baru, misalnya dengan list comprehension, daripada menghapus item saat iterasi.' },
                { tag: 'Kesalahan', front: 'While tanpa perubahan kondisi.', backTag: 'Perbaikan', back: 'Pastikan ada baris yang membuat kondisi akhirnya salah, atau pakai break.' },
            ] },

            { h2: 'Latihan' },
            { w: 'quiz', title: 'Tebak keluarannya', questions: [
                { q: 'Berapa kali "halo" dicetak? <code>for i in range(3, 8): print("halo")</code>', options: ['5', '8', '3'], answer: 0, why: 'range(3, 8) menghasilkan 3, 4, 5, 6, 7: lima angka.' },
                { q: 'Nilai total? <code>total = 0; for i in range(1, 5): total += i</code>', options: ['10', '15', '4'], answer: 0, why: '1 + 2 + 3 + 4 = 10.' },
                { q: 'Apa yang terjadi? <code>x = 1; while x > 0: x += 1</code>', options: ['Berhenti setelah 1 kali', 'Loop tanpa akhir', 'Error sintaks'], answer: 1, why: 'x terus bertambah sehingga x > 0 selalu benar.' },
            ] },
            { w: 'checklist', title: 'Soal latihan mandiri', desc: 'Centang yang sudah berhasil Anda kerjakan.', items: ['Cetak bilangan genap dari 2 sampai 50.', 'Hitung jumlah digit sebuah angka dengan while.', 'Cari nilai tertinggi dalam list tanpa memakai max().', 'Program tebak angka dengan petunjuk lebih besar atau kecil.', 'Cetak segitiga bintang setinggi n baris.'] },
        ],
        faq: [
            ['Apa beda for dan while di Python?', 'for mengulang untuk setiap item dalam urutan atau rentang. while mengulang selama kondisi bernilai benar.'],
            ['Kenapa range(1, 10) tidak sampai 10?', 'range berhenti sebelum angka akhir. Gunakan range(1, 11) untuk mendapatkan 1 sampai 10.'],
            ['Bagaimana menghentikan loop di tengah?', 'Gunakan break untuk keluar, atau continue untuk melewati satu putaran dan lanjut ke berikutnya.'],
            ['Bagaimana menghentikan program yang loop tanpa akhir?', 'Tekan Ctrl + C di terminal, lalu perbaiki kondisi loop-nya.'],
        ],
        sources: [
            ['Python: More Control Flow Tools (tutorial resmi)', 'https://docs.python.org/3/tutorial/controlflow.html'],
            ['Python: fungsi bawaan range dan enumerate', 'https://docs.python.org/3/library/functions.html'],
            ['Roadmap belajar Python dari nol (artikel terkait)', 'https://muchson.web.id/artikel/roadmap-belajar-python-dari-nol/'],
        ],
    },

    {
        slug: 'percabangan-if-elif-else-python',
        title: 'Percabangan If, Elif, Else di Python dengan Contoh',
        description: 'Panduan percabangan Python: if, elif, else, operator perbandingan dan logika, kondisi bersarang, match-case, kesalahan umum, dan soal latihan nilai, diskon, dan tahun kabisat.',
        date: D, category: C, tags: ['if else Python', 'percabangan Python', 'elif', 'Python dasar', 'belajar Python'], cta: 'jasa',
        lead: 'Program menjadi pintar ketika bisa memilih: memberi diskon bila belanja cukup banyak, menampilkan pesan berbeda untuk nilai yang berbeda, atau menolak kata sandi yang terlalu pendek. Semua itu memakai percabangan. Di Python, percabangan ditulis dengan if, elif, dan else.',
        body: [
            { h2: 'Bentuk dasar' },
            { code: 'nilai = 82\n\nif nilai >= 85:\n    print("A")\nelif nilai >= 70:\n    print("B")\nelif nilai >= 55:\n    print("C")\nelse:\n    print("Perlu remedial")' },
            `Python memeriksa kondisi dari atas ke bawah dan menjalankan blok <b>pertama</b> yang benar, lalu melewati sisanya. Karena itu urutan kondisi penting: periksa batas tertinggi dulu.`,
            { callout: 'Bila urutannya dibalik (cek >= 55 dulu), nilai 82 akan masuk "C" karena kondisi pertama yang benar langsung dipakai. Ini kesalahan klasik.', kind: 'warn', title: 'Urutan menentukan hasil' },

            { h2: 'Operator perbandingan dan logika' },
            { table: { head: ['Operator', 'Arti', 'Contoh'], rows: [
                ['<code>==</code>', 'sama dengan', '<code>status == "lunas"</code>'],
                ['<code>!=</code>', 'tidak sama dengan', '<code>kota != "Malang"</code>'],
                ['<code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>', 'perbandingan', '<code>umur &gt;= 17</code>'],
                ['<code>and</code>', 'keduanya benar', '<code>umur &gt;= 17 and punya_ktp</code>'],
                ['<code>or</code>', 'salah satu benar', '<code>member or belanja &gt; 500000</code>'],
                ['<code>not</code>', 'kebalikan', '<code>not sudah_bayar</code>'],
                ['<code>in</code>', 'termasuk dalam', '<code>"@" in email</code>'],
            ] } },
            { code: 'belanja = 320000\nmember = True\n\nif belanja >= 500000 or (member and belanja >= 300000):\n    diskon = 0.1\nelse:\n    diskon = 0\nprint(f"Bayar: {belanja * (1 - diskon):,.0f}")' },
            { code: '# Python bisa merangkai perbandingan\nsuhu = 26\nif 20 <= suhu <= 30:\n    print("Suhu nyaman")' },

            { h2: 'Kondisi bersarang' },
            { code: 'punya_tiket = True\numur = 15\n\nif punya_tiket:\n    if umur >= 13:\n        print("Silakan masuk")\n    else:\n        print("Harus didampingi orang dewasa")\nelse:\n    print("Beli tiket dulu")' },
            `Kondisi bersarang boleh, tetapi bila lebih dari dua tingkat, kode sulit dibaca. Pertimbangkan menggabungkan dengan <code>and</code> atau memakai "keluar lebih awal" di dalam fungsi.`,

            { h2: 'Ekspresi kondisi satu baris' },
            { code: 'status = "lulus" if nilai >= 75 else "remedial"' },

            { h2: 'match-case (Python 3.10 ke atas)' },
            { code: 'perintah = "maju"\nmatch perintah:\n    case "maju":\n        print("Robot bergerak maju")\n    case "kiri" | "kanan":\n        print("Robot berbelok")\n    case _:\n        print("Perintah tidak dikenal")' },

            { h2: 'Contoh lengkap: tahun kabisat' },
            `Aturan kabisat kalender Gregorian: habis dibagi 4, kecuali habis dibagi 100, tetapi tetap kabisat bila habis dibagi 400.`,
            { code: 'def kabisat(tahun):\n    return tahun % 4 == 0 and (tahun % 100 != 0 or tahun % 400 == 0)\n\nfor t in [1900, 2000, 2024, 2026]:\n    print(t, kabisat(t))\n# 1900 False, 2000 True, 2024 True, 2026 False' },

            { h2: 'Kesalahan umum' },
            { w: 'cards', title: 'Ketuk untuk perbaikannya', items: [
                { tag: 'Kesalahan', front: 'Memakai = untuk membandingkan: if x = 5', backTag: 'Perbaikan', back: '= untuk mengisi nilai, == untuk membandingkan.' },
                { tag: 'Kesalahan', front: 'Membandingkan input dengan angka: input("Umur: ") >= 17', backTag: 'Perbaikan', back: 'input() menghasilkan teks. Ubah dulu: int(input("Umur: ")).' },
                { tag: 'Kesalahan', front: 'if x == 1 or 2:', backTag: 'Perbaikan', back: 'Tulis lengkap: if x == 1 or x == 2, atau if x in (1, 2).' },
                { tag: 'Kesalahan', front: 'Indentasi tidak rata.', backTag: 'Perbaikan', back: 'Gunakan 4 spasi secara konsisten. Editor seperti VS Code membantu merapikannya.' },
            ] },
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'Nilai 70 dengan kode: if n >= 85: A; elif n >= 70: B; else: C. Hasilnya?', options: ['A', 'B', 'C'], answer: 1, why: '70 tidak >= 85, tetapi >= 70, jadi B.' },
                { q: '<code>not (5 > 3 and 2 > 4)</code> bernilai?', options: ['True', 'False'], answer: 0, why: '5 > 3 benar, 2 > 4 salah, sehingga and bernilai salah. not salah = benar.' },
                { q: 'Apakah 2100 tahun kabisat?', options: ['Ya', 'Tidak'], answer: 1, why: 'Habis dibagi 100 tetapi tidak habis dibagi 400.' },
            ] },
        ],
        faq: [
            ['Apa beda if, elif, dan else?', 'if memeriksa kondisi pertama, elif memeriksa kondisi tambahan bila sebelumnya salah, dan else dijalankan bila semua kondisi salah.'],
            ['Kenapa harus pakai == bukan =?', 'Tanda = mengisi nilai ke variabel, sedangkan == membandingkan dua nilai.'],
            ['Apakah Python punya switch-case?', 'Sejak Python 3.10 tersedia match-case yang fungsinya mirip, bahkan lebih kuat.'],
            ['Bagaimana memeriksa beberapa nilai sekaligus?', 'Gunakan operator in, misalnya if hari in ("Sabtu", "Minggu").'],
        ],
        sources: [
            ['Python: More Control Flow Tools (if, match)', 'https://docs.python.org/3/tutorial/controlflow.html'],
            ['PEP 636: Structural Pattern Matching Tutorial', 'https://peps.python.org/pep-0636/'],
            ['Percabangan jika-maka untuk anak (artikel terkait)', 'https://muchson.web.id/artikel/percabangan-jika-maka-untuk-anak/'],
        ],
    },

    {
        slug: 'database-sql-vs-nosql-bedanya',
        title: 'Database SQL vs NoSQL: Bedanya dan Kapan Memakainya',
        description: 'Beda database relasional (SQL) dan NoSQL dengan contoh tabel dan dokumen, kelebihan masing-masing, jenis-jenis NoSQL, dan panduan memilih untuk proyek Anda.',
        date: D, category: C, tags: ['SQL vs NoSQL', 'database', 'MySQL', 'MongoDB', 'PostgreSQL'], cta: 'jasa',
        lead: 'Hampir setiap aplikasi menyimpan data: akun pengguna, pesanan, pesan, atau nilai siswa. Pilihan database memengaruhi cara data disimpan, dicari, dan dijaga konsistensinya. Dua kelompok besar yang sering dibandingkan adalah database relasional (SQL) dan NoSQL.',
        body: [
            { h2: 'Database relasional (SQL)' },
            `Database relasional menyimpan data dalam <b>tabel</b> berisi baris dan kolom, seperti spreadsheet yang saling terhubung. Struktur (skema) ditentukan di awal, dan hubungan antar tabel dibuat dengan kunci. Data diakses dengan bahasa <b>SQL</b>. Contoh: PostgreSQL, MySQL, MariaDB, SQLite, SQL Server.`,
            { table: { head: ['id', 'nama', 'kota'], rows: [['1', 'Ani', 'Malang'], ['2', 'Budi', 'Madiun']] } },
            { table: { head: ['id_pesanan', 'id_pelanggan', 'total'], rows: [['101', '1', '250000'], ['102', '1', '80000'], ['103', '2', '120000']] } },
            { code: 'SELECT p.nama, SUM(o.total) AS belanja\nFROM pelanggan p\nJOIN pesanan o ON o.id_pelanggan = p.id\nGROUP BY p.nama;' },

            { h2: 'NoSQL' },
            `NoSQL adalah istilah payung untuk database yang <b>tidak</b> memakai model tabel relasional. Bentuknya beragam:`,
            { table: { head: ['Jenis', 'Cara menyimpan', 'Contoh', 'Cocok untuk'], rows: [
                ['Dokumen', 'Dokumen mirip JSON', 'MongoDB, Firestore', 'Data yang strukturnya bervariasi, katalog produk'],
                ['Key-value', 'Pasangan kunci dan nilai', 'Redis', 'Cache, sesi login, penghitung'],
                ['Kolom lebar', 'Kolom yang dikelompokkan', 'Cassandra', 'Data sangat besar, banyak penulisan'],
                ['Graf', 'Simpul dan hubungan', 'Neo4j', 'Jejaring sosial, rekomendasi'],
            ] } },
            { code: '{\n  "_id": 1,\n  "nama": "Ani",\n  "kota": "Malang",\n  "pesanan": [\n    { "id": 101, "total": 250000 },\n    { "id": 102, "total": 80000 }\n  ]\n}' },
            `Pada database dokumen, pesanan bisa disimpan langsung di dalam dokumen pelanggan. Membaca data pelanggan beserta pesanannya cukup satu kali ambil, tetapi memperbarui data yang tersebar di banyak dokumen bisa lebih rumit.`,

            { h2: 'Perbandingan' },
            { table: { head: ['Aspek', 'SQL (relasional)', 'NoSQL'], rows: [
                ['Struktur', 'Skema tetap, tabel', 'Fleksibel, beragam model'],
                ['Hubungan data', 'Kuat, dengan JOIN', 'Sering disatukan dalam dokumen atau dikelola aplikasi'],
                ['Konsistensi transaksi', 'Kuat (ACID) sebagai bawaan', 'Bervariasi; banyak yang kini mendukung transaksi'],
                ['Skala', 'Umumnya ditingkatkan dengan server lebih kuat, bisa juga dibagi', 'Banyak yang dirancang untuk dibagi ke banyak server'],
                ['Contoh pemakaian', 'Keuangan, pesanan, inventaris, nilai siswa', 'Cache, katalog fleksibel, log, data real-time'],
            ] } },
            { callout: 'ACID (Atomicity, Consistency, Isolation, Durability) menjamin transaksi, misalnya transfer uang, terjadi seluruhnya atau tidak sama sekali. Untuk data keuangan, jaminan ini sangat penting.', kind: 'info', title: 'Apa itu ACID?' },

            { h2: 'Bagaimana memilih?' },
            { w: 'choose', title: 'Database untuk proyek Anda', questions: [
                { q: 'Seperti apa data Anda?', options: [{ t: 'Terstruktur jelas: pengguna, produk, pesanan yang saling terkait', add: { sql: 3 } }, { t: 'Strukturnya berbeda-beda antar item', add: { doc: 3 } }, { t: 'Pasangan sederhana untuk akses sangat cepat', add: { kv: 3 } }] },
                { q: 'Seberapa penting konsistensi transaksi?', options: [{ t: 'Sangat penting (uang, stok)', add: { sql: 3 } }, { t: 'Cukup, sedikit terlambat tidak masalah', add: { doc: 1, kv: 1 } }] },
                { q: 'Pengalaman tim?', options: [{ t: 'Paham SQL', add: { sql: 2 } }, { t: 'Lebih nyaman dengan JSON di JavaScript', add: { doc: 2 } }] },
            ], results: {
                sql: { title: 'Mulai dengan database relasional', text: 'PostgreSQL atau MySQL. Untuk proyek kecil dan belajar, SQLite sangat praktis.' },
                doc: { title: 'Database dokumen bisa cocok', text: 'MongoDB atau Firestore. Rancang struktur dokumen sesuai cara data dibaca.' },
                kv: { title: 'Key-value sebagai pelengkap', text: 'Redis sering dipakai berdampingan dengan database utama untuk cache dan sesi.' },
            } },
            `Banyak aplikasi nyata memakai keduanya: database relasional sebagai sumber kebenaran utama, ditambah Redis untuk cache atau database dokumen untuk bagian tertentu. Untuk sebagian besar proyek pemula dan bisnis kecil, database relasional adalah pilihan awal yang aman.`,
        ],
        faq: [
            ['Apa beda SQL dan NoSQL?', 'SQL (relasional) menyimpan data dalam tabel dengan skema tetap dan hubungan antar tabel. NoSQL memakai model lain seperti dokumen, key-value, atau graf dengan struktur lebih fleksibel.'],
            ['Mana yang lebih cepat?', 'Tergantung pola penggunaan. Masing-masing unggul untuk jenis pekerjaan tertentu; desain data yang baik lebih menentukan.'],
            ['Database apa untuk pemula?', 'SQLite untuk belajar, lalu PostgreSQL atau MySQL untuk aplikasi web.'],
            ['Apakah MongoDB tidak bisa transaksi?', 'MongoDB modern mendukung transaksi multi-dokumen, tetapi desain dan perilakunya berbeda dari database relasional.'],
        ],
        sources: [
            ['PostgreSQL Documentation', 'https://www.postgresql.org/docs/'],
            ['MongoDB: What is NoSQL?', 'https://www.mongodb.com/resources/basics/databases/nosql-explained'],
            ['SQL dasar untuk pemula (artikel terkait)', 'https://muchson.web.id/artikel/sql-dasar-untuk-pemula-select-where-order-by/'],
        ],
    },

    {
        slug: 'cloud-computing-untuk-pemula-iaas-paas-saas',
        title: 'Cloud Computing untuk Pemula: IaaS, PaaS, dan SaaS',
        description: 'Apa itu cloud computing menurut definisi NIST, beda IaaS, PaaS, dan SaaS dengan analogi pizza, contoh layanan, kelebihan dan risiko, serta cara mulai belajar cloud.',
        date: D, category: C, tags: ['cloud computing', 'IaaS PaaS SaaS', 'AWS', 'Google Cloud', 'belajar cloud'], cta: 'jasa',
        lead: 'Menyimpan foto di Google Photos, rapat lewat Zoom, dan aplikasi startup yang berjalan di AWS: semuanya memakai cloud computing. Istilahnya sering terdengar, tetapi jarang dijelaskan dengan jelas. Artikel ini menguraikan definisinya, jenis layanannya, dan kenapa banyak perusahaan beralih ke cloud.',
        body: [
            { h2: 'Definisi singkat' },
            `Institut standar Amerika Serikat, NIST, dalam publikasi SP 800-145 mendefinisikan cloud computing sebagai model yang memungkinkan akses jaringan sesuai kebutuhan ke kumpulan sumber daya komputasi bersama (server, penyimpanan, aplikasi, layanan) yang bisa disediakan dan dilepas dengan cepat, dengan upaya pengelolaan minimal. NIST menyebut lima ciri utamanya:`,
            { ul: [
                '<b>Layanan mandiri sesuai kebutuhan:</b> pengguna menambah server tanpa menelepon penyedia.',
                '<b>Akses jaringan luas:</b> bisa diakses lewat internet dari berbagai perangkat.',
                '<b>Sumber daya bersama:</b> banyak pelanggan memakai infrastruktur yang sama secara terpisah.',
                '<b>Elastis:</b> kapasitas bisa naik turun dengan cepat.',
                '<b>Terukur:</b> pemakaian diukur, sering dibayar sesuai pemakaian.',
            ] },

            { h2: 'IaaS, PaaS, SaaS dengan analogi pizza' },
            { svg: 'layers', label: 'Model layanan cloud', items: [{ t: 'Di dapur sendiri (on-premise)', d: 'beli oven, bahan, masak, sajikan sendiri' }, { t: 'IaaS: sewa dapur', d: 'Anda masak sendiri di dapur sewaan' }, { t: 'PaaS: pesan pizza antar', d: 'pizza dimasak, Anda tinggal menyiapkan meja' }, { t: 'SaaS: makan di restoran', d: 'semua disiapkan, Anda tinggal makan' }], caption: 'Makin ke bawah, makin sedikit yang Anda urus sendiri.' },
            { table: { head: ['Model', 'Yang disediakan penyedia', 'Yang Anda kelola', 'Contoh'], rows: [
                ['IaaS', 'Server virtual, jaringan, penyimpanan', 'Sistem operasi, runtime, aplikasi, data', 'AWS EC2, Google Compute Engine, Azure VM'],
                ['PaaS', 'Infrastruktur + platform menjalankan aplikasi', 'Kode aplikasi dan data', 'Google App Engine, Heroku, Cloudflare Workers'],
                ['SaaS', 'Aplikasi siap pakai', 'Data dan pengaturan akun', 'Gmail, Google Workspace, Microsoft 365, Zoom'],
            ] } },

            { h2: 'Model penerapan' },
            { table: { head: ['Model', 'Penjelasan'], rows: [
                ['Public cloud', 'Infrastruktur milik penyedia, dipakai banyak pelanggan'],
                ['Private cloud', 'Dipakai satu organisasi, bisa di pusat data sendiri'],
                ['Hybrid cloud', 'Gabungan, misalnya data sensitif di private dan aplikasi web di public'],
            ] } },

            { h2: 'Kelebihan dan risiko' },
            { svg: 'versus', label: 'Kelebihan dan risiko cloud', left: { title: 'Kelebihan', items: ['Tanpa modal besar di awal', 'Skala naik turun cepat', 'Infrastruktur global', 'Banyak layanan siap pakai'] }, right: { title: 'Risiko', items: ['Tagihan membengkak bila tidak dipantau', 'Salah konfigurasi keamanan', 'Ketergantungan pada satu penyedia', 'Aturan lokasi data'] } },
            { callout: 'Salah satu penyebab kebocoran data di cloud bukan karena cloud-nya diretas, melainkan konfigurasi yang keliru, misalnya penyimpanan berkas yang tidak sengaja dibuat publik. Prinsip tanggung jawab bersama: penyedia mengamankan infrastruktur, pelanggan mengamankan konfigurasi dan data.', kind: 'warn', title: 'Tanggung jawab bersama' },

            { h2: 'Hitung: server sendiri atau cloud?' },
            { w: 'calc', title: 'Perbandingan biaya kasar 3 tahun', desc: 'Perkiraan sederhana. Biaya nyata cloud bergantung pada pemakaian, dan biaya server sendiri termasuk listrik dan perawatan.', inputs: [
                { id: 'server', label: 'Harga server sendiri (Rp)', value: 40000000, min: 5000000, max: 200000000, step: 1000000 },
                { id: 'rawat', label: 'Listrik dan perawatan per bulan (Rp)', value: 800000, min: 0, max: 10000000, step: 100000 },
                { id: 'cloud', label: 'Biaya cloud setara per bulan (Rp)', value: 1500000, min: 100000, max: 20000000, step: 100000 },
            ], outputs: [
                { label: 'Server sendiri 3 tahun', expr: 'server + rawat * 36', fmt: 'rp', big: true },
                { label: 'Cloud 3 tahun', expr: 'cloud * 36', fmt: 'rp' },
                { label: 'Selisih', expr: 'server + rawat * 36 - cloud * 36', fmt: 'rp', note: 'Positif berarti cloud lebih murah dalam asumsi ini.' },
            ] },

            { h2: 'Cara mulai belajar cloud' },
            { ol: [
                'Pahami dasar Linux, jaringan (IP, DNS, HTTP), dan satu bahasa pemrograman.',
                'Pilih satu penyedia (AWS, Google Cloud, atau Azure) dan manfaatkan paket gratisnya untuk latihan.',
                'Deploy aplikasi sederhana: situs statis, lalu aplikasi dengan database.',
                '<b>Selalu pasang peringatan anggaran</b> (budget alert) agar tidak kaget dengan tagihan.',
                'Pelajari keamanan dasar: akses minimal, kunci yang aman, enkripsi.',
                'Pertimbangkan sertifikasi tingkat dasar dari penyedia sebagai target belajar.',
            ] },
        ],
        faq: [
            ['Apa itu cloud computing?', 'Model penyediaan sumber daya komputasi seperti server dan penyimpanan lewat internet sesuai kebutuhan, biasanya dibayar sesuai pemakaian.'],
            ['Apa beda IaaS, PaaS, dan SaaS?', 'IaaS menyediakan infrastruktur, PaaS menyediakan platform menjalankan aplikasi, SaaS menyediakan aplikasi siap pakai.'],
            ['Apakah Google Drive termasuk cloud?', 'Ya, termasuk SaaS untuk penyimpanan dan kolaborasi dokumen.'],
            ['Apakah cloud selalu lebih murah?', 'Tidak selalu. Untuk beban yang stabil dan besar, server sendiri bisa lebih murah. Cloud unggul untuk fleksibilitas dan skala.'],
        ],
        sources: [
            ['NIST SP 800-145: The NIST Definition of Cloud Computing', 'https://csrc.nist.gov/pubs/sp/800/145/final'],
            ['AWS: What is cloud computing?', 'https://aws.amazon.com/what-is-cloud-computing/'],
            ['Docker untuk pemula (artikel terkait)', 'https://muchson.web.id/artikel/docker-untuk-pemula-container-dijelaskan/'],
        ],
    },

    {
        slug: 'python-untuk-analisis-data-pandas-pemula',
        title: 'Python untuk Analisis Data: Pandas untuk Pemula',
        description: 'Belajar analisis data dengan Python dan pandas: membaca Excel dan CSV, memilih dan menyaring data, mengelompokkan, membersihkan data kotor, dan membuat ringkasan laporan.',
        date: D, category: C, tags: ['pandas', 'analisis data Python', 'data analyst', 'Python Excel', 'belajar data'], cta: 'jasa',
        lead: 'Jika pekerjaan Anda melibatkan Excel berulang setiap minggu, menggabungkan file, menyaring baris, membuat ringkasan, Python dengan pustaka pandas bisa menghemat banyak jam. Sekali skrip dibuat, laporan berikutnya cukup dijalankan ulang. Artikel ini memandu langkah pertamanya dengan contoh data penjualan.',
        body: [
            { h2: 'Persiapan' },
            { code: 'pip install pandas openpyxl\n# openpyxl dibutuhkan untuk membaca dan menulis berkas .xlsx' },
            `Bila tidak ingin memasang apa pun, Anda bisa mencoba di layanan notebook daring seperti Google Colab.`,

            { h2: 'Membaca data' },
            { code: 'import pandas as pd\n\ndf = pd.read_excel("penjualan.xlsx")   # atau pd.read_csv("penjualan.csv")\n\nprint(df.head())        # 5 baris pertama\nprint(df.shape)         # (jumlah baris, jumlah kolom)\ndf.info()               # tipe data dan nilai kosong per kolom' },
            `Misalkan datanya berisi kolom: <code>tanggal</code>, <code>cabang</code>, <code>produk</code>, <code>qty</code>, <code>harga</code>.`,

            { h2: 'Memilih dan menyaring' },
            { code: '# kolom tertentu\ndf[["produk", "qty"]]\n\n# baris dengan syarat\ndf[df["cabang"] == "Malang"]\ndf[(df["qty"] >= 10) & (df["cabang"] != "Madiun")]\n\n# kolom baru\ndf["omzet"] = df["qty"] * df["harga"]' },
            { callout: 'Di pandas, gabungan syarat memakai & (dan) serta | (atau), dan setiap syarat dibungkus tanda kurung. Kata and/or Python biasa tidak bekerja di sini.', kind: 'warn', title: 'Jebakan umum' },

            { h2: 'Mengelompokkan dan meringkas' },
            { code: 'ringkas = (\n    df.groupby("cabang")\n      .agg(total_omzet=("omzet", "sum"),\n           transaksi=("omzet", "count"),\n           rata_qty=("qty", "mean"))\n      .sort_values("total_omzet", ascending=False)\n)\nprint(ringkas)\n\n# tabel pivot: cabang x produk\npivot = df.pivot_table(index="cabang", columns="produk", values="omzet", aggfunc="sum", fill_value=0)' },

            { h2: 'Membersihkan data kotor' },
            { table: { head: ['Masalah', 'Solusi pandas'], rows: [
                ['Nilai kosong', '<code>df.dropna()</code> atau <code>df["qty"].fillna(0)</code>'],
                ['Baris ganda', '<code>df.drop_duplicates()</code>'],
                ['Spasi dan huruf tidak seragam', '<code>df["cabang"].str.strip().str.title()</code>'],
                ['Tanggal terbaca sebagai teks', '<code>pd.to_datetime(df["tanggal"], dayfirst=True)</code>'],
                ['Angka berformat "Rp1.250.000"', '<code>df["harga"].str.replace(r"[^0-9]", "", regex=True).astype(int)</code>'],
            ] } },

            { h2: 'Menyimpan laporan' },
            { code: 'with pd.ExcelWriter("laporan_mingguan.xlsx") as w:\n    ringkas.to_excel(w, sheet_name="Per cabang")\n    pivot.to_excel(w, sheet_name="Cabang x produk")\nprint("Laporan selesai")' },

            { h2: 'Seberapa banyak waktu yang dihemat?' },
            { w: 'calc', title: 'Hitung penghematan otomasi', desc: 'Bandingkan waktu membuat laporan manual dengan membuat skrip sekali lalu menjalankannya.', inputs: [
                { id: 'manual', label: 'Menit membuat laporan manual', value: 90, min: 10, max: 480, step: 10 },
                { id: 'frek', label: 'Laporan per bulan', value: 4, min: 1, max: 30, step: 1 },
                { id: 'buat', label: 'Jam membuat skrip pertama kali', value: 6, min: 1, max: 40, step: 1 },
            ], outputs: [
                { label: 'Jam dihemat dalam 1 tahun', expr: 'manual * frek * 12 / 60 - buat', fmt: 'num', unit: 'jam', big: true },
                { label: 'Balik modal setelah', expr: 'buat * 60 / manual', fmt: 'num', unit: 'laporan' },
            ] },

            { h2: 'Langkah berikutnya' },
            { w: 'checklist', title: 'Peta belajar data', desc: 'Centang yang sudah dikuasai.', items: ['Membaca CSV dan Excel dengan pandas.', 'Menyaring, membuat kolom baru, dan mengurutkan.', 'groupby dan pivot_table.', 'Membersihkan data kotor.', 'Membuat grafik dengan matplotlib atau langsung dari pandas.', 'Menggabungkan beberapa tabel dengan merge.', 'Dasar SQL untuk mengambil data dari database.', 'Statistik dasar: rata-rata, median, sebaran.'] },
        ],
        faq: [
            ['Apa itu pandas?', 'Pustaka Python untuk mengolah data tabel, mirip Excel tetapi bisa diotomatiskan dengan kode.'],
            ['Apakah pandas bisa membaca file Excel?', 'Bisa, dengan pd.read_excel. Pasang juga pustaka openpyxl untuk berkas .xlsx.'],
            ['Perlu belajar Python dasar dulu?', 'Ya, minimal variabel, list, dan fungsi. Setelah itu pandas bisa dipelajari sambil mengolah data nyata.'],
            ['Pandas atau Excel?', 'Excel bagus untuk eksplorasi cepat. Pandas unggul untuk tugas berulang, data besar, dan proses yang perlu dicatat dan diulang.'],
        ],
        sources: [
            ['pandas: Getting started', 'https://pandas.pydata.org/docs/getting_started/index.html'],
            ['pandas: User Guide', 'https://pandas.pydata.org/docs/user_guide/index.html'],
            ['AI untuk Excel dan Google Sheets (artikel terkait)', 'https://muchson.web.id/artikel/ai-untuk-excel-dan-google-sheets-rumus/'],
        ],
    },

    {
        slug: 'apa-itu-ui-ux-design-bedanya',
        title: 'Apa Itu UI/UX Design? Bedanya, Proses, dan Prinsipnya',
        description: 'Beda UI dan UX design dengan contoh nyata, proses kerja desainer UX, 10 heuristik usability Nielsen, alat yang dipakai, dan cara mulai belajar UI/UX dari nol.',
        date: D, category: C, tags: ['UI UX', 'UX design', 'UI design', 'usability', 'karier desain'], cta: 'jasa',
        lead: 'Pernah memakai aplikasi yang tampilannya cantik tetapi membingungkan? Atau aplikasi sederhana yang terasa sangat mudah? Itulah beda UI dan UX. Profesi UI/UX designer kini banyak dicari, tetapi istilahnya sering disalahpahami. Artikel ini menjelaskan keduanya dan cara memulai.',
        body: [
            { h2: 'UI dan UX: beda yang sederhana' },
            { svg: 'versus', label: 'UI vs UX', left: { title: 'UI (User Interface)', items: ['Tampilan yang dilihat dan disentuh', 'Warna, tipografi, tombol, ikon', 'Konsistensi visual', 'Pertanyaan: apakah terlihat jelas dan menarik?'] }, right: { title: 'UX (User Experience)', items: ['Pengalaman keseluruhan memakai produk', 'Alur, kemudahan, kebutuhan pengguna', 'Riset dan pengujian', 'Pertanyaan: apakah mudah dan menyelesaikan masalah?'] } },
            `Analogi: UX adalah denah rumah yang memastikan dapur dekat ruang makan dan kamar mandi mudah dicapai. UI adalah cat, lampu, dan perabotnya. Rumah yang cantik dengan denah buruk tetap tidak nyaman ditinggali.`,

            { h2: 'Proses kerja UX' },
            { svg: 'flow', label: 'Proses desain UX', steps: [{ t: 'Riset', d: 'wawancara, observasi pengguna' }, { t: 'Definisikan', d: 'masalah dan persona' }, { t: 'Ideasi', d: 'alur dan sketsa' }, { t: 'Prototipe', d: 'wireframe dan mockup' }, { t: 'Uji', d: 'usability testing' }], caption: 'Proses ini berulang. Hasil uji sering membawa kembali ke riset atau ideasi.' },
            `Dalam usability testing, Anda meminta beberapa pengguna menyelesaikan tugas nyata (misalnya membeli tiket) sambil mengamati di mana mereka bingung. Nielsen Norman Group, lembaga riset UX terkemuka, terkenal dengan temuan bahwa menguji dengan sekitar lima pengguna sudah bisa mengungkap sebagian besar masalah usability yang umum dalam satu putaran pengujian kualitatif.`,

            { h2: '10 heuristik usability Jakob Nielsen' },
            `Heuristik ini dipakai luas untuk menilai antarmuka. Coba nilai aplikasi yang sering Anda pakai:`,
            { table: { head: ['No', 'Heuristik', 'Contoh'], rows: [
                ['1', 'Tampilkan status sistem', 'Indikator "mengunggah 60%"'],
                ['2', 'Cocok dengan dunia nyata', 'Ikon keranjang untuk belanja, istilah yang dipahami pengguna'],
                ['3', 'Kendali dan kebebasan pengguna', 'Tombol batal dan undo'],
                ['4', 'Konsistensi dan standar', 'Tombol utama selalu warna dan posisi sama'],
                ['5', 'Cegah kesalahan', 'Konfirmasi sebelum menghapus'],
                ['6', 'Kenali, jangan mengingat', 'Riwayat pencarian terlihat'],
                ['7', 'Fleksibel dan efisien', 'Pintasan untuk pengguna mahir'],
                ['8', 'Estetis dan minimalis', 'Hanya informasi yang relevan'],
                ['9', 'Bantu mengenali dan memulihkan kesalahan', '"Format email salah, contoh: nama@contoh.id"'],
                ['10', 'Bantuan dan dokumentasi', 'Panduan singkat yang mudah dicari'],
            ] } },
            { w: 'checklist', title: 'Audit cepat aplikasi favorit Anda', desc: 'Centang heuristik yang sudah dipenuhi aplikasi pilihan Anda.', items: ['Status sistem selalu terlihat.', 'Bahasa dan ikon mudah dipahami.', 'Ada cara membatalkan atau kembali.', 'Desain konsisten antar halaman.', 'Kesalahan dicegah sebelum terjadi.', 'Pesan error jelas dan memberi solusi.'] },

            { h2: 'Aksesibilitas: bagian dari UX yang baik' },
            `Desain yang baik bisa dipakai sebanyak mungkin orang, termasuk penyandang disabilitas, pengguna lansia, atau orang yang memakai HP di bawah terik matahari. Pedoman WCAG dari W3C, misalnya, menyarankan kontras teks normal minimal 4,5:1.`,
            { w: 'contrast', title: 'Uji kontras warna', desc: 'Coba kombinasi warna tombol dan teks untuk desain Anda.', fg: '#ffffff', bg: '#1e5ab2' },

            { h2: 'Alat yang dipakai' },
            { table: { head: ['Kebutuhan', 'Alat umum'], rows: [
                ['Desain dan prototipe', 'Figma (paling umum), Penpot (open source)'],
                ['Riset dan catatan', 'Formulir survei, dokumen wawancara, papan kolaborasi'],
                ['Uji usability', 'Prototipe yang bisa diklik + rekaman layar dengan izin peserta'],
            ] } },

            { h2: 'Cara mulai belajar' },
            { ol: [
                'Pelajari prinsip dasar: hierarki visual, tipografi, warna, jarak, dan heuristik usability.',
                'Kuasai satu alat desain, misalnya Figma.',
                'Desain ulang aplikasi yang Anda anggap membingungkan, lalu tulis alasannya.',
                'Lakukan uji kecil dengan 3-5 orang dan perbaiki desain berdasarkan temuan.',
                'Kumpulkan 2-3 studi kasus lengkap (masalah, proses, hasil) di portofolio.',
            ] },
        ],
        faq: [
            ['Apa beda UI dan UX?', 'UI adalah tampilan visual yang dilihat dan disentuh. UX adalah pengalaman keseluruhan, termasuk alur dan kemudahan menyelesaikan tujuan.'],
            ['Apakah UI/UX designer harus bisa coding?', 'Tidak wajib, tetapi memahami dasar HTML dan CSS membantu berkomunikasi dengan developer.'],
            ['Alat apa untuk belajar UI/UX?', 'Figma adalah alat yang paling umum dan punya paket gratis untuk belajar.'],
            ['Apa itu heuristik usability?', 'Sepuluh prinsip umum dari Jakob Nielsen untuk menilai kemudahan penggunaan antarmuka.'],
        ],
        sources: [
            ['Nielsen Norman Group: 10 Usability Heuristics for User Interface Design', 'https://www.nngroup.com/articles/ten-usability-heuristics/'],
            ['Nielsen Norman Group: Why You Only Need to Test with 5 Users', 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'],
            ['W3C: Web Content Accessibility Guidelines (WCAG) Overview', 'https://www.w3.org/WAI/standards-guidelines/wcag/'],
            ['Desain aksesibel untuk pembelajaran digital (artikel terkait)', 'https://muchson.web.id/artikel/desain-aksesibel-untuk-pembelajaran-digital-wcag/'],
        ],
    },
];
