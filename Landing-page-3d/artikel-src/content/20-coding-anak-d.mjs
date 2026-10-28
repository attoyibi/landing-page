import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding untuk Anak';

export default [
    {
        slug: 'coding-tanpa-komputer-permainan-unplugged-di-rumah',
        title: 'Coding Tanpa Komputer: 10 Permainan Unplugged di Rumah',
        description: '10 permainan coding tanpa komputer untuk anak 4-11 tahun: robot manusia, kartu biner, tebak angka, kode rahasia, dan lainnya.',
        date: D, category: C, tags: ['coding unplugged', 'coding tanpa komputer', 'permainan edukatif', 'berpikir komputasional', 'kegiatan anak di rumah'], cta: 'pixelkode',
        ctaNote: 'Setelah anak lancar dengan permainan "robot manusia", ia siap memberi perintah ke Robo sungguhan di Pelajaran 1 PixelKode, gratis dan langsung di browser.',
        lead: 'Anak tidak harus duduk di depan layar untuk mulai belajar coding. Konsep inti seperti algoritma, pola, dan logika bisa dilatih dengan kertas, kartu, dan badan sendiri. Pendekatan ini disebut computer science unplugged, dikembangkan antara lain oleh peneliti di University of Canterbury, Selandia Baru. Berikut 10 permainan yang bisa langsung dimainkan di rumah.',
        body: [
            { h2: 'Kenapa permainan tanpa layar efektif?' },
            `Proyek <b>CS Unplugged</b> sejak 1990-an menunjukkan bahwa ide-ide ilmu komputer bisa diajarkan lewat permainan fisik, teka-teki, dan cerita. Keunggulannya bagi keluarga Indonesia: tidak butuh perangkat mahal, tidak menambah waktu layar, cocok untuk anak yang belum lancar membaca, dan melibatkan gerak tubuh yang membantu anak kecil memahami konsep abstrak.`,
            { callout: 'Permainan unplugged bukan pengganti coding di komputer, melainkan jembatannya. Anak yang sudah memahami "algoritma" lewat permainan biasanya lebih cepat paham saat bertemu blok Scratch.', kind: 'info', title: 'Posisi yang tepat' },

            { h2: 'Permainan untuk usia 4-7 tahun' },
            { h3: '1. Robot manusia (algoritma)' },
            `Orang tua menjadi "robot" yang hanya mengerti perintah: <b>maju</b>, <b>belok kiri</b>, <b>belok kanan</b>. Anak memberi perintah untuk menuntun robot ke kulkas. Robot harus patuh persis, termasuk menabrak meja bila perintahnya salah. Tukar peran setelah beberapa ronde.`,
            { h3: '2. Kartu panah di lantai (program)' },
            `Buat kartu bergambar panah ↑ ← → dari kertas. Tentukan start dan tujuan di lantai berubin. Anak menyusun kartu dulu, baru robot (boneka atau saudara) berjalan mengikuti kartu. Bedanya dengan permainan 1: program disusun <b>sebelum</b> dijalankan, persis seperti di komputer.`,
            { h3: '3. Pola manik-manik (pengenalan pola)' },
            `Susun manik-manik atau kancing dengan pola merah-biru-biru-merah-biru-biru. Minta anak meneruskan, lalu menjelaskan aturannya. Naikkan tingkat kesulitan dengan pola dua aturan (warna dan ukuran).`,
            { h3: '4. Instruksi menggambar (presisi)' },
            `Anak menggambar bentuk sederhana tanpa memperlihatkannya, lalu memberi instruksi lisan kepada Anda untuk menggambar ulang. Bandingkan hasilnya. Biasanya lucu dan sangat berbeda, dan itu pelajaran tentang betapa pentingnya instruksi yang jelas.`,
            { h3: '5. Sortir mainan (klasifikasi dan kondisi)' },
            `"Jika mainan berwarna merah, taruh di keranjang A. Jika tidak, di keranjang B." Lalu tambah aturan: "Jika merah <i>dan</i> beroda ..." Anak sedang berlatih percabangan dan operator logika.`,

            { h2: 'Permainan untuk usia 8-11 tahun' },
            { h3: '6. Bilangan biner dengan jari atau kartu (representasi data)' },
            `Siapkan 5 kartu bertuliskan 16, 8, 4, 2, 1 (kiri ke kanan). Kartu menghadap ke atas berarti 1, tertutup berarti 0. Minta anak membuat angka 13 (8 + 4 + 1 → 01101). Ini cara komputer menyimpan angka. Aktivitas "binary numbers" ini salah satu yang paling terkenal dari CS Unplugged.`,
            { w: 'binary', title: 'Coba bit di layar', desc: 'Versi digital permainan kartu biner. Ketuk kotak untuk membalik bit.' },
            { h3: '7. Tebak angka 1-100 (algoritma pencarian)' },
            `Anda memikirkan angka, anak menebak, Anda menjawab "lebih besar" atau "lebih kecil". Hitung jumlah tebakan. Setelah beberapa ronde, ajak anak menemukan strategi terbaik: selalu menebak di tengah. Dengan strategi ini, angka 1-100 selalu ketemu dalam paling banyak 7 tebakan. Itu pencarian biner, algoritma yang dipakai komputer untuk mencari data dengan cepat.`,
            { h3: '8. Kode rahasia (enkripsi sederhana)' },
            `Buat sandi geser: setiap huruf diganti huruf yang 3 tempat sesudahnya (A→D, B→E). Kirim pesan rahasia di kotak bekal anak. Ini sandi Caesar, bentuk enkripsi tertua yang dikenal, dan pintu masuk menarik ke konsep keamanan data.`,
            { h3: '9. Pengurutan dengan timbangan (algoritma sortir)' },
            `Siapkan 6 botol berisi air dengan isi berbeda dan satu timbangan sederhana (gantungan baju dengan dua kantong). Anak hanya boleh membandingkan dua botol sekaligus. Bagaimana mengurutkan dari yang teringan? Anak akan menemukan sendiri strategi seperti bubble sort atau selection sort.`,
            { h3: '10. Debugging resep (mencari kesalahan)' },
            `Tulis resep membuat roti selai dengan kesalahan sengaja: langkah tertukar atau terlewat. Anak menjadi "detektif bug" yang menemukan dan memperbaikinya.`,

            { h2: 'Ringkasan: permainan dan konsepnya' },
            { table: { head: ['No', 'Permainan', 'Usia', 'Konsep', 'Bahan'], rows: [
                ['1', 'Robot manusia', '4+', 'Algoritma, urutan', 'Tidak ada'],
                ['2', 'Kartu panah', '5+', 'Program, perencanaan', 'Kertas'],
                ['3', 'Pola manik-manik', '4+', 'Pola', 'Manik, kancing'],
                ['4', 'Instruksi menggambar', '6+', 'Presisi instruksi', 'Kertas, pensil'],
                ['5', 'Sortir mainan', '4+', 'Kondisi, logika', 'Mainan, keranjang'],
                ['6', 'Kartu biner', '8+', 'Representasi data', '5 kartu'],
                ['7', 'Tebak angka', '7+', 'Pencarian biner', 'Tidak ada'],
                ['8', 'Kode rahasia', '8+', 'Enkripsi', 'Kertas'],
                ['9', 'Sortir botol', '8+', 'Algoritma sortir', 'Botol, gantungan'],
                ['10', 'Debugging resep', '7+', 'Debugging', 'Kertas'],
            ] } },
            { w: 'checklist', title: 'Tantangan 10 permainan', desc: 'Centang yang sudah dimainkan bersama anak. Progres tersimpan di browser ini.', items: ['Robot manusia', 'Kartu panah di lantai', 'Pola manik-manik', 'Instruksi menggambar', 'Sortir mainan', 'Kartu biner', 'Tebak angka 1-100', 'Kode rahasia', 'Sortir botol dengan timbangan', 'Debugging resep'] },

            { h2: 'Tips agar permainan berhasil' },
            { ul: [
                '<b>Durasi pendek.</b> 15-20 menit untuk anak di bawah 7 tahun.',
                '<b>Rayakan bug.</b> Saat robot menabrak, tertawa bersama dan cari langkah yang salah.',
                '<b>Tukar peran.</b> Anak juga harus merasakan menjadi "komputer" yang patuh.',
                '<b>Hubungkan dengan istilah.</b> Setelah bermain, sebutkan namanya: "Tadi kamu membuat algoritma."',
            ] },

            { h2: 'Dari lantai ke layar' },
            `Permainan robot manusia dan kartu panah punya pasangan digital yang sangat dekat: latihan robot di grid. Anak menyusun perintah maju, belok kiri, dan belok kanan, lalu melihat robot menjalankannya. Coba bersama anak setelah ia lancar bermain di lantai:`,
            { w: 'robo', title: 'Robot manusia versi layar', levels: [
                { name: 'Ke dapur', goal: 'Bawa Robo ke bendera 🏁 dengan perintah seperti permainan di lantai.', map: ['######', '#>..##', '###.##', '###F##', '######'], max: 5 },
            ] },
            `Kalau anak menikmatinya, <a href="${pk('coding-tanpa-komputer-permainan-unplugged-di-rumah')}" target="_blank" rel="noopener">Pelajaran 1 dan 2 PixelKode</a> bisa dicoba gratis: Robo melanjutkan petualangannya di 10 level, lalu anak mulai membuat animasi di Studio.`,
        ],
        faq: [
            ['Apa itu coding unplugged?', 'Kegiatan belajar konsep ilmu komputer tanpa komputer, memakai permainan, kartu, teka-teki, dan gerak tubuh.'],
            ['Usia berapa bisa mulai permainan unplugged?', 'Sejak 4 tahun untuk permainan sederhana seperti robot manusia, pola, dan sortir.'],
            ['Apakah unplugged cukup untuk belajar coding?', 'Unplugged sangat baik untuk dasar berpikir. Untuk membuat karya digital, anak tetap perlu berlatih di komputer.'],
            ['Di mana mencari aktivitas unplugged lain?', 'Situs CS Unplugged menyediakan banyak aktivitas gratis lengkap dengan panduan guru.'],
        ],
        sources: [
            ['CS Unplugged (University of Canterbury)', 'https://www.csunplugged.org/'],
            ['Bell, T., & Vahrenhold, J. (2018). CS Unplugged: How Is It Used, and Does It Work?', 'https://doi.org/10.1007/978-3-319-98355-4_29'],
            ['Code.org: pelajaran unplugged untuk sekolah dasar', 'https://code.org/'],
            ['Bebras Indonesia', 'https://bebras.or.id/'],
        ],
    },

    {
        slug: 'urutan-belajar-coding-anak-scratchjr-scratch-python',
        title: 'Urutan Belajar Coding Anak: ScratchJr, Scratch, lalu Python',
        description: 'Peta jalan belajar coding anak dari usia 5 tahun: ScratchJr, Scratch, Python, sampai proyek nyata, lengkap dengan tanda kapan naik tahap.',
        date: D, category: C, tags: ['roadmap coding anak', 'ScratchJr', 'Scratch', 'Python untuk anak', 'belajar coding anak'], cta: 'pixelkode',
        ctaNote: 'PixelKode mengisi tahap Scratch (8-11 tahun) dengan 32 pelajaran berurutan. Setelah lulus, proyek anak tetap bisa dibuka di Scratch dan dilanjutkan ke tahap berikutnya.',
        lead: 'Orang tua sering bertanya: setelah Scratch, lalu apa? Haruskah langsung Python? Bagaimana dengan robotik dan pembuatan aplikasi? Artikel ini menyusun peta jalan yang realistis dari usia 5 tahun sampai remaja, lengkap dengan tanda kapan anak siap naik tahap.',
        body: [
            { h2: 'Peta jalan dalam satu gambar' },
            { svg: 'layers', label: 'Tahapan belajar coding anak', items: [{ t: 'Tahap 0: unplugged (4-6 th)', d: 'permainan urutan, pola, robot manusia' }, { t: 'Tahap 1: ScratchJr (5-7 th)', d: 'blok bergambar di tablet, cerita sederhana' }, { t: 'Tahap 2: Scratch (8-12 th)', d: 'animasi, game, variabel, clone' }, { t: 'Tahap 3: Python (11-14 th)', d: 'teks pertama: kuis, turtle, game kecil' }, { t: 'Tahap 4: proyek nyata (13+ th)', d: 'web, data, aplikasi, AI dasar' }], caption: 'Usia hanya patokan kasar. Kesiapan anak lebih menentukan daripada umurnya.' },

            { h2: 'Tahap 1: ScratchJr (usia 5-7)' },
            `ScratchJr dikembangkan oleh DevTech Research Group di Tufts University bersama Lifelong Kindergarten Group MIT, untuk anak 5-7 tahun. Bloknya berupa ikon tanpa banyak teks, disusun dari kiri ke kanan. Anak bisa membuat cerita: kucing berjalan ke pohon, berkata "halo", lalu melompat. ScratchJr gratis di tablet.`,
            { ul: ['<b>Yang dipelajari:</b> urutan, kejadian sederhana (sentuh untuk mulai), pengulangan dasar.', '<b>Tanda siap naik:</b> sudah lancar membaca kalimat pendek dan mulai merasa ScratchJr "terlalu sederhana".'] },

            { h2: 'Tahap 2: Scratch (usia 8-12)' },
            `Scratch adalah tahap terpanjang dan paling penting. Di sinilah hampir semua konsep pemrograman dasar dikuasai dengan cara yang menyenangkan. Supaya tidak berputar di tempat, bagi tahap ini menjadi tiga level:`,
            { table: { head: ['Level', 'Konsep', 'Contoh proyek'], rows: [
                ['Pemula', 'urutan, loop, kejadian, kostum', 'animasi nama, kartu ucapan, akuarium'],
                ['Menengah', 'koordinat, kondisi, pesan, acak', 'labirin, tangkap bintang, cerita bercabang'],
                ['Lanjut', 'variabel, operator logika, prosedur, clone, daftar', 'kuis dengan skor, hujan meteor, chatbot'],
            ] } },
            { ul: ['<b>Tanda siap naik ke Python:</b> lancar memakai variabel dan kondisi, pernah membuat game dengan skor dan level, bisa menjelaskan programnya, dan mulai bertanya "bagaimana cara membuat aplikasi sungguhan?"'] },
            { callout: 'Kesalahan paling umum: pindah ke Python terlalu cepat karena terdengar lebih "serius". Anak yang belum memahami variabel dan kondisi di Scratch akan kesulitan dua kali di Python: konsepnya dan aturan penulisannya.', kind: 'warn', title: 'Jangan terburu-buru' },

            { h2: 'Tahap 3: Python (usia 11-14)' },
            `Python sering direkomendasikan sebagai bahasa teks pertama karena aturannya relatif sederhana dan mudah dibaca. Bandingkan program yang sama di Scratch dan Python:`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['sensing', 'tanya (Siapa namamu?) dan tunggu'], ['control', 'ulangi (3)', [['looks', 'katakan (gabung (Halo, ) (jawaban)) selama (1) detik']]]], caption: 'Versi Scratch.' },
            { code: 'nama = input("Siapa namamu? ")\nfor i in range(3):\n    print("Halo, " + nama)' },
            `Konsepnya identik: input, pengulangan, menyambung teks. Yang baru hanyalah cara menulisnya. Inilah kenapa anak dengan dasar Scratch yang kuat biasanya cepat beradaptasi. Modul <code>turtle</code> bawaan Python juga memungkinkan menggambar seperti ekstensi Pena di Scratch, jadi transisinya terasa akrab.`,

            { h2: 'Tahap 4: proyek nyata (13 tahun ke atas)' },
            `Setelah dasar Python, arah bisa disesuaikan minat: <b>web</b> (HTML, CSS, JavaScript) untuk yang suka desain, <b>data</b> untuk yang suka angka dan sains, <b>game</b> dengan pustaka seperti Pygame, atau <b>robotik</b> dan perangkat seperti micro:bit. Di tahap ini, proyek yang memecahkan masalah nyata (misalnya situs untuk ekskul atau pencatat tabungan) memberi motivasi paling besar.`,

            { h2: 'Bagaimana dengan robotik?' },
            `Robotik dan coding visual bukan pilihan yang saling meniadakan. Banyak kit robotik untuk anak memakai bahasa blok yang mirip Scratch. Robotik menambah pengalaman fisik, tetapi butuh perangkat yang biayanya lebih besar. Dasar logika yang kuat dari Scratch membuat anak lebih cepat memahami pemrograman robot.`,

            { h2: 'Berapa lama setiap tahap?' },
            { w: 'calc', title: 'Perkiraan durasi tahap Scratch', desc: 'Perkiraan kasar berdasarkan jumlah pelajaran dan frekuensi belajar. Setiap anak berbeda.', inputs: [
                { id: 'pelajaran', label: 'Jumlah pelajaran dalam kurikulum', value: 32, min: 10, max: 60, step: 1 },
                { id: 'perminggu', label: 'Pelajaran per minggu', value: 2, min: 1, max: 5, step: 1 },
            ], outputs: [
                { label: 'Perkiraan selesai', expr: 'pelajaran / perminggu', fmt: 'int', unit: 'minggu', big: true },
                { label: 'Setara', expr: 'pelajaran / perminggu / 4.3', fmt: 'num', unit: 'bulan' },
            ] },
            `Dengan 2 pelajaran per minggu, kurikulum Scratch berisi 32 pelajaran selesai sekitar 4 bulan. Ditambah waktu untuk proyek bebas, tahap Scratch yang sehat biasanya berlangsung 6 bulan sampai 2 tahun, tergantung usia mulai.`,

            { h2: 'Prinsip yang berlaku di semua tahap' },
            { ul: [
                '<b>Membuat lebih penting daripada menonton.</b> Satu jam berkarya lebih berharga dari tiga jam menonton tutorial.',
                '<b>Proyek yang anak pedulikan.</b> Minat adalah bahan bakar terbaik.',
                '<b>Pamerkan karya.</b> Menjelaskan proyek ke orang lain mengunci pemahaman.',
                '<b>Konsistensi.</b> Dua sesi pendek per minggu lebih baik daripada satu maraton per bulan.',
            ] },
            `Untuk tahap Scratch, <a href="${pk('urutan-belajar-coding-anak-scratchjr-scratch-python', '/')}" target="_blank" rel="noopener">PixelKode</a> menyusun ketiga level di atas menjadi 7 modul, dan karena Studio-nya identik dengan Scratch 3, anak tidak perlu belajar ulang saat melanjutkan di Scratch atau beralih ke Python.`,
        ],
        faq: [
            ['Apakah anak harus mulai dari ScratchJr?', 'Tidak wajib. ScratchJr cocok untuk 5-7 tahun. Anak 8 tahun yang lancar membaca bisa langsung ke Scratch.'],
            ['Kapan anak siap belajar Python?', 'Saat lancar memakai variabel dan kondisi di Scratch, pernah menyelesaikan game dengan skor, dan nyaman mengetik. Biasanya sekitar 11-13 tahun.'],
            ['Apakah Python terlalu sulit untuk anak?', 'Tidak, bila dasar logikanya sudah kuat. Mulai dengan proyek kecil seperti kuis atau menggambar dengan turtle.'],
            ['Bahasa apa setelah Python?', 'Tergantung minat: JavaScript untuk web, Python lanjut untuk data dan AI, atau C++ untuk olimpiade informatika.'],
        ],
        sources: [
            ['ScratchJr (Tufts University dan MIT Media Lab)', 'https://www.scratchjr.org/'],
            ['Scratch, situs resmi', 'https://scratch.mit.edu/'],
            ['Python: dokumentasi modul turtle', 'https://docs.python.org/3/library/turtle.html'],
            ['micro:bit Educational Foundation', 'https://microbit.org/'],
        ],
    },

    {
        slug: 'kapan-anak-siap-pindah-dari-scratch-ke-python',
        title: 'Kapan Anak Siap Pindah dari Scratch ke Python?',
        description: 'Tanda anak siap beralih dari Scratch ke Python, tes kesiapan, perbandingan blok dan kode teks, serta rencana transisi empat minggu.',
        date: D, category: C, tags: ['Scratch ke Python', 'Python untuk anak', 'belajar coding anak', 'transisi coding', 'Scratch'], cta: 'pixelkode',
        ctaNote: 'Belum siap ke Python? Pastikan dasar Scratch-nya kuat dulu. PixelKode menutup semua konsep yang dibutuhkan sebelum Python: variabel, operator logika, prosedur berparameter, dan clone.',
        lead: 'Ada anak yang pindah ke Python terlalu cepat lalu kehilangan semangat karena terus bertemu pesan error. Ada juga yang bertahun-tahun di Scratch sampai bosan. Artikel ini membantu Anda membaca tanda kesiapan anak, lalu memberi rencana transisi bertahap supaya peralihannya mulus.',
        body: [
            { h2: 'Kenapa transisi ini terasa berat' },
            `Di Scratch, blok hanya bisa dipasang di tempat yang benar. Salah ketik mustahil karena tidak ada yang diketik. Di Python, satu titik dua yang terlupa atau spasi yang tidak rata menghasilkan pesan error. Peneliti pendidikan komputer menyebut ini <b>beban sintaks</b>: anak harus memikirkan logika <i>dan</i> aturan penulisan sekaligus. Karena itu, logika sebaiknya sudah kuat sebelum aturan penulisan ditambahkan.`,

            { h2: 'Tes kesiapan' },
            { w: 'choose', title: 'Apakah anak siap ke Python?', desc: 'Jawab berdasarkan apa yang sudah benar-benar bisa dilakukan anak sendiri.', questions: [
                { q: 'Bisakah anak membuat game dengan skor dan nyawa tanpa mengikuti tutorial?', options: [{ t: 'Belum', add: { belum: 3 } }, { t: 'Dengan sedikit bantuan', add: { hampir: 2 } }, { t: 'Ya, sendiri', add: { siap: 3 } }] },
                { q: 'Apakah anak memakai blok "jika ... maka ... jika tidak" dan operator dan/atau?', options: [{ t: 'Jarang', add: { belum: 2 } }, { t: 'Kadang', add: { hampir: 2 } }, { t: 'Sering, dengan tepat', add: { siap: 2 } }] },
                { q: 'Bagaimana kemampuan mengetik anak?', options: [{ t: 'Masih mencari huruf satu per satu', add: { belum: 1, hampir: 1 } }, { t: 'Cukup lancar', add: { siap: 2 } }] },
                { q: 'Bagaimana reaksi anak saat programnya salah?', options: [{ t: 'Cepat frustrasi', add: { belum: 2 } }, { t: 'Mencoba memperbaiki sendiri dulu', add: { siap: 2, hampir: 1 } }] },
                { q: 'Apakah anak sendiri tertarik "menulis kode seperti programmer"?', options: [{ t: 'Belum', add: { belum: 1 } }, { t: 'Ya, sering bertanya', add: { siap: 2, hampir: 1 } }] },
            ], results: {
                belum: { title: 'Lanjutkan Scratch dulu', text: 'Perkuat variabel, kondisi, dan debugging lewat proyek game yang menantang. Kesiapan ini biasanya datang dalam beberapa bulan.' },
                hampir: { title: 'Hampir siap', text: 'Selesaikan 1-2 proyek Scratch tanpa tutorial, latih mengetik 10 menit sehari, lalu coba Python dengan proyek yang sangat kecil.' },
                siap: { title: 'Siap mencoba Python', text: 'Mulai dengan rencana 4 minggu di bawah. Tetap izinkan anak kembali ke Scratch untuk proyek kreatif.' },
            } },

            { h2: 'Konsep yang sama, tampilan berbeda' },
            `Kabar baiknya, hampir semua konsep Scratch punya pasangan langsung di Python. Tunjukkan tabel ini ke anak supaya ia sadar sudah menguasai banyak hal:`,
            { table: { head: ['Scratch', 'Python'], rows: [
                ['katakan (Halo!)', '<code>print("Halo!")</code>'],
                ['tanya (Siapa namamu?) dan tunggu', '<code>nama = input("Siapa namamu? ")</code>'],
                ['atur [skor] ke (0)', '<code>skor = 0</code>'],
                ['ubah [skor] sebesar (1)', '<code>skor = skor + 1</code> atau <code>skor += 1</code>'],
                ['ulangi (10)', '<code>for i in range(10):</code>'],
                ['ulangi sampai {kondisi}', '<code>while not kondisi:</code>'],
                ['jika {kondisi} maka / jika tidak', '<code>if kondisi:</code> / <code>else:</code>'],
                ['acak (1) sampai (10)', '<code>random.randint(1, 10)</code>'],
                ['definisikan blok saya', '<code>def blok_saya():</code>'],
                ['daftar', '<code>list</code>, misalnya <code>[1, 2, 3]</code>'],
            ] } },

            { h2: 'Rencana transisi 4 minggu' },
            { svg: 'timeline', label: 'Rencana transisi Scratch ke Python', events: [['Minggu 1', 'print, input, variabel', 'Program menyapa dan kalkulator umur'], ['Minggu 2', 'if dan else', 'Kuis 5 soal dengan skor'], ['Minggu 3', 'for dan while', 'Tebak angka dengan petunjuk lebih besar/kecil'], ['Minggu 4', 'turtle dan fungsi', 'Menggambar bintang dan pola bunga']] },
            `Proyek tebak angka di minggu ketiga adalah klasik yang sangat cocok, karena anak mungkin sudah membuat versi Scratch-nya. Bandingkan kedua versi bersama anak:`,
            { code: 'import random\n\nangka = random.randint(1, 100)\ntebakan = 0\n\nwhile tebakan != angka:\n    tebakan = int(input("Tebak angka 1-100: "))\n    if tebakan < angka:\n        print("Lebih besar!")\n    elif tebakan > angka:\n        print("Lebih kecil!")\n\nprint("Benar! Angkanya", angka)' },
            { callout: 'Saat muncul error, bacakan pesannya bersama anak. Python biasanya menyebut nomor baris dan jenis kesalahan, misalnya SyntaxError atau NameError. Belajar membaca pesan error adalah keterampilan, bukan tanda gagal.', kind: 'good', title: 'Menghadapi pesan error' },

            { h2: 'Di mana menulis Python?' },
            { ul: [
                '<b>Thonny</b>: editor gratis yang dirancang untuk pemula, sudah termasuk Python.',
                '<b>IDLE</b>: editor bawaan saat memasang Python dari python.org.',
                '<b>Editor daring</b>: berguna bila tidak bisa memasang aplikasi, tetapi perhatikan kebijakan akun dan iklannya untuk anak.',
            ] },

            { h2: 'Tetap boleh kembali ke Scratch' },
            `Pindah ke Python bukan berarti meninggalkan Scratch. Banyak programmer cilik memakai Scratch untuk animasi dan prototipe game, dan Python untuk hal lain. Yang penting anak terus berkarya. Jika anak belum siap, fokuskan dulu pada proyek Scratch yang menantang. <a href="${pk('kapan-anak-siap-pindah-dari-scratch-ke-python', '/')}" target="_blank" rel="noopener">Kurikulum PixelKode</a> menutup tahap ini dengan proyek akhir yang memakai semua konsep yang dibutuhkan sebelum Python.`,
        ],
        faq: [
            ['Umur berapa anak bisa belajar Python?', 'Umumnya sekitar 11-13 tahun, tetapi yang lebih menentukan adalah penguasaan konsep di Scratch dan kemampuan mengetik.'],
            ['Apakah harus menguasai semua Scratch dulu?', 'Tidak semua, tetapi variabel, kondisi, dan loop sebaiknya sudah lancar, termasuk memperbaiki bug sendiri.'],
            ['Editor Python apa yang cocok untuk anak?', 'Thonny dirancang untuk pemula dan gratis. IDLE bawaan Python juga cukup.'],
            ['Bagaimana jika anak frustrasi dengan error?', 'Kecilkan programnya, baca pesan error bersama, dan izinkan kembali ke Scratch sambil berlatih Python sedikit-sedikit.'],
        ],
        sources: [
            ['Python.org: unduh Python dan dokumentasi', 'https://www.python.org/'],
            ['Thonny: Python IDE untuk pemula', 'https://thonny.org/'],
            ['Python: modul turtle', 'https://docs.python.org/3/library/turtle.html'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
        ],
    },

    {
        slug: 'cara-memilih-kursus-coding-anak',
        title: 'Cara Memilih Kursus Coding Anak: 12 Pertanyaan Sebelum Bayar',
        description: 'Panduan jujur memilih kursus coding anak: 12 pertanyaan untuk penyelenggara, tanda bahaya janji berlebihan, dan cara menilai kelas percobaan.',
        date: D, category: C, tags: ['kursus coding anak', 'les coding anak', 'memilih kursus', 'coding untuk anak', 'kelas coding online'], cta: 'pixelkode',
        ctaNote: 'Saya juga penyelenggara kursus (PixelKode), jadi silakan uji kelas saya dengan 12 pertanyaan yang sama. Kurikulum lengkapnya terbuka di halaman depan, dan dua pelajaran pertama bisa dicoba tanpa mendaftar.',
        lead: 'Kursus coding anak kini banyak sekali, dengan harga dan janji yang sangat beragam. Sebagai orang yang membuat kursus coding anak sendiri, saya ingin memberi panduan yang jujur: pertanyaan yang sebaiknya Anda ajukan ke penyelenggara mana pun, termasuk ke saya, sebelum membayar.',
        body: [
            { h2: 'Mulai dari tujuan, bukan dari brosur' },
            `Sebelum membandingkan kursus, tentukan dulu apa yang Anda harapkan. Tujuan yang berbeda membutuhkan kursus yang berbeda:`,
            { table: { head: ['Tujuan orang tua', 'Yang perlu dicari'], rows: [
                ['Anak mengenal coding dan senang', 'Kelas percobaan, proyek kreatif, suasana santai'],
                ['Anak berpikir lebih logis', 'Kurikulum berurutan, latihan logika, pemeriksaan hasil'],
                ['Anak siap lomba atau olimpiade', 'Latihan soal algoritma, pembina berpengalaman lomba'],
                ['Mendukung mapel Koding dan AI di sekolah', 'Materi yang sejalan dengan konsep berpikir komputasional'],
            ] } },

            { h2: '12 pertanyaan untuk penyelenggara' },
            { h3: 'Tentang kurikulum' },
            { ol: [
                '<b>Boleh saya lihat daftar seluruh pelajarannya?</b> Kursus yang serius bisa menunjukkan urutan materi dari awal sampai akhir.',
                '<b>Konsep apa yang dikuasai anak setelah 3 bulan?</b> Jawaban yang baik menyebut konsep (loop, kondisi, variabel), bukan hanya "membuat game".',
                '<b>Bagaimana kalau anak lebih cepat atau lebih lambat?</b> Apakah ada tugas tambahan atau pengulangan?',
                '<b>Alat apa yang dipakai, dan apakah hasilnya bisa dibawa pulang?</b> Proyek yang terkunci di platform tertentu tidak bisa dilanjutkan bila berhenti berlangganan.',
            ] },
            { h3: 'Tentang pengajaran' },
            { ol: [
                '<b>Berapa jumlah anak per guru?</b> Untuk anak SD, kelompok kecil (sekitar 4-8 anak) memungkinkan guru memperhatikan setiap anak.',
                '<b>Apakah proyek anak diperiksa dan diberi komentar?</b> Umpan balik spesifik adalah bagian terpenting dari belajar.',
                '<b>Bagaimana guru menangani anak yang macet?</b> Jawaban terbaik: memberi petunjuk bertahap, bukan langsung mengerjakan.',
                '<b>Apa latar belakang pengajarnya?</b> Pahami pengalaman mengajar anak, bukan hanya pengalaman pemrograman.',
            ] },
            { h3: 'Tentang biaya dan komitmen' },
            { ol: [
                '<b>Berapa biaya per jam belajar sebenarnya?</b> Hitung total biaya dibagi jam tatap muka atau jam belajar.',
                '<b>Apakah ada biaya tambahan?</b> Pendaftaran, modul, perangkat, sertifikat.',
                '<b>Apakah diperpanjang otomatis, dan bagaimana cara berhenti?</b> Pastikan Anda bisa berhenti tanpa denda yang tidak masuk akal.',
                '<b>Apakah ada kelas percobaan?</b> Lihat langsung sebelum berkomitmen.',
            ] },
            { w: 'checklist', title: 'Daftar periksa kursus coding', desc: 'Centang yang terpenuhi untuk kursus yang sedang Anda pertimbangkan. Progres tersimpan di browser ini.', items: ['Kurikulum lengkap bisa dilihat sebelum membayar.', 'Konsep yang dipelajari disebut dengan jelas.', 'Ada kelas atau pelajaran percobaan.', 'Kelompok kecil atau ada pendampingan individual.', 'Proyek anak diperiksa dan diberi komentar.', 'Proyek bisa disimpan atau dibuka di luar platform.', 'Biaya total dan cara berhenti dijelaskan terbuka.', 'Tidak ada janji berlebihan tentang hasil.', 'Ada laporan perkembangan untuk orang tua.', 'Lingkungan aman: tanpa iklan dan tanpa obrolan dengan orang asing.'] },

            { h2: 'Tanda bahaya: janji yang terlalu indah' },
            { w: 'cards', title: 'Ketuk untuk melihat kenapa ini tanda bahaya', items: [
                { tag: 'Janji', front: '"Anak dijamin bisa membuat aplikasi dalam 1 bulan."', backTag: 'Kenapa waspada', back: 'Biasanya berarti anak menyalin langkah tanpa paham. Hasilnya terlihat bagus, tetapi pemahamannya tipis.' },
                { tag: 'Janji', front: '"Coding membuat IQ anak naik."', backTag: 'Kenapa waspada', back: 'Riset menunjukkan manfaat berukuran sedang pada beberapa kemampuan berpikir, bukan lonjakan IQ.' },
                { tag: 'Janji', front: '"Harga promo hanya hari ini, bayar 12 bulan di muka."', backTag: 'Kenapa waspada', back: 'Tekanan waktu membuat Anda tidak sempat membandingkan. Kursus yang baik tidak takut Anda berpikir dulu.' },
                { tag: 'Janji', front: '"Anak 6 tahun langsung belajar Python."', backTag: 'Kenapa waspada', back: 'Untuk sebagian besar anak 6 tahun, bahasa teks belum sesuai perkembangan. Blok visual lebih tepat.' },
            ] },

            { h2: 'Cara menilai kelas percobaan' },
            `Saat mengikuti kelas atau pelajaran percobaan, perhatikan anak, bukan hanya materi:`,
            { ul: [
                '<b>Siapa yang memegang mouse?</b> Anak harus mencoba sendiri, bukan menonton guru.',
                '<b>Apakah anak bisa menjelaskan yang ia buat?</b> Tanyakan setelah kelas: "Tadi kamu membuat apa? Bagaimana caranya?"',
                '<b>Bagaimana suasana saat anak salah?</b> Guru yang baik membuat bug terasa normal.',
                '<b>Apakah anak ingin kembali?</b> Antusiasme setelah kelas pertama adalah indikator penting.',
            ] },

            { h2: 'Belajar mandiri, kelas dengan guru, atau gabungan?' },
            { table: { head: ['Pilihan', 'Kelebihan', 'Cocok untuk'], rows: [
                ['Mandiri dengan platform terstruktur', 'Fleksibel, biaya rendah', 'Anak mandiri, orang tua bisa menemani'],
                ['Kelas kelompok dengan guru', 'Umpan balik, teman belajar, jadwal teratur', 'Anak yang butuh struktur dan motivasi sosial'],
                ['Les privat', 'Perhatian penuh, tempo sesuai anak', 'Kebutuhan khusus atau target tertentu'],
                ['Ekskul sekolah', 'Mudah diakses, bersama teman', 'Pengenalan awal, biaya terjangkau'],
            ] } },

            { h2: 'Transparansi dari saya' },
            `Karena saya membuat <a href="${pk('cara-memilih-kursus-coding-anak', '/')}" target="_blank" rel="noopener">PixelKode</a>, saya mencoba menjawab pertanyaan di atas secara terbuka: daftar 32 pelajarannya bisa dilihat di halaman depan; dua pelajaran pertama bisa dicoba tanpa mendaftar; proyek Studio bisa diunduh sebagai berkas Scratch .sb3; paket kelas bersama guru dibatasi maksimal 6 anak; dan paket berbayar tidak diperpanjang otomatis. Gunakan daftar periksa yang sama untuk membandingkannya dengan pilihan lain. Keputusan terbaik adalah yang cocok untuk anak Anda.`,
        ],
        faq: [
            ['Berapa umur yang tepat untuk kursus coding?', 'Untuk kelas Scratch, sekitar 8 tahun ke atas atau saat anak lancar membaca. Untuk usia lebih muda, cari kelas berbasis permainan atau ScratchJr.'],
            ['Kursus coding online atau offline lebih baik?', 'Keduanya bisa efektif. Yang lebih menentukan adalah ukuran kelompok, umpan balik guru, dan kurikulum yang berurutan.'],
            ['Berapa lama sampai terlihat hasilnya?', 'Dalam 1-2 bulan biasanya anak sudah bisa membuat animasi dan game sederhana sendiri bila belajar rutin 2 kali seminggu.'],
            ['Apa yang ditanyakan saat kelas percobaan?', 'Tanyakan daftar pelajaran, jumlah anak per guru, cara memberi umpan balik, biaya total, dan cara berhenti.'],
        ],
        sources: [
            ['Scherer dkk. (2019). Meta-analisis manfaat belajar pemrograman (efek bergantung cara mengajar)', 'https://doi.org/10.1037/edu0000314'],
            ['Scratch untuk orang tua', 'https://scratch.mit.edu/parents/'],
            ['Antara: Koding dan AI masuk Kurikulum 2025/2026', 'https://www.antaranews.com/berita/4983541/permendikdasmen-13-2025-koding-dan-ai-resmi-masuk-kurikulum-2025-2026'],
        ],
    },

    {
        slug: 'kursus-coding-anak-online-atau-offline',
        title: 'Kursus Coding Anak Online atau Offline? Plus Hitung Biayanya',
        description: 'Kursus coding anak online atau offline? Kelebihan masing-masing, syarat kelas online efektif, dan kalkulator biaya per jam belajar.',
        date: D, category: C, tags: ['kursus coding online', 'les coding anak', 'biaya kursus coding', 'belajar online anak', 'coding untuk anak'], cta: 'pixelkode',
        ctaNote: 'Paket Kelas Bersama Guru di PixelKode berupa 4 sesi online 90 menit per bulan, maksimal 6 anak, dengan proyek yang diperiksa guru. Masukkan angkanya ke kalkulator di atas untuk membandingkan.',
        lead: 'Setelah pandemi, kursus coding online menjadi pilihan umum, tetapi banyak orang tua masih ragu: apakah anak bisa fokus di depan laptop, dan apakah hasilnya setara dengan kelas tatap muka? Artikel ini membandingkan keduanya secara jujur dan memberi kalkulator untuk menghitung biaya per jam belajar.',
        body: [
            { h2: 'Perbandingan singkat' },
            { svg: 'versus', label: 'Kursus online vs offline', left: { title: 'Online', items: ['Tanpa waktu perjalanan', 'Pilihan guru lebih luas', 'Anak belajar di perangkatnya sendiri', 'Butuh internet stabil', 'Butuh pendampingan di awal'] }, right: { title: 'Offline', items: ['Interaksi langsung dengan teman', 'Guru bisa melihat layar anak langsung', 'Struktur dan suasana kelas', 'Waktu dan biaya perjalanan', 'Pilihan tempat terbatas'] } },
            `Untuk coding khususnya, kelas online punya keunggulan yang sering terlewat: anak belajar di <b>komputer yang akan ia pakai sehari-hari</b>, sehingga proyeknya tersimpan dan bisa dilanjutkan setelah kelas. Di kelas offline, anak kadang memakai komputer tempat kursus dan proyeknya tertinggal.`,

            { h2: 'Syarat agar kelas online efektif' },
            { w: 'checklist', title: 'Persiapan kelas online di rumah', desc: 'Centang yang sudah siap. Progres tersimpan di browser ini.', items: ['Laptop atau komputer, bukan ponsel.', 'Mouse, karena menyeret blok dengan touchpad melelahkan bagi anak.', 'Internet yang cukup stabil untuk video dan berbagi layar.', 'Headset dengan mikrofon agar suara jelas.', 'Tempat tenang dengan meja, jauh dari TV.', 'Orang tua mendampingi di 2-3 sesi pertama untuk masalah teknis.', 'Jadwal tetap, misalnya Selasa dan Kamis pukul 16.00.'] },
            { callout: 'Kelas online untuk anak SD paling efektif bila kelompoknya kecil, guru sering meminta anak berbagi layar, dan sesi diselingi tugas mandiri. Kelas berisi puluhan anak dengan kamera mati cenderung berubah menjadi tontonan.', kind: 'warn', title: 'Ukuran kelas penting' },

            { h2: 'Bagaimana dengan rentang fokus anak?' },
            `Kemampuan anak mempertahankan perhatian berkembang seiring usia. Karena itu, kelas yang baik untuk anak SD, baik online maupun offline, memecah waktu menjadi bagian pendek: penjelasan singkat, praktik, berbagi hasil, lalu tantangan. Sesi 60-90 menit masih efektif asalkan anak lebih banyak <b>mengerjakan</b> daripada <b>mendengarkan</b>.`,
            { svg: 'bars', label: 'Contoh pembagian sesi 90 menit', data: [['Pemanasan dan ulasan', 10], ['Konsep baru (demo)', 15], ['Latihan terbimbing', 25], ['Proyek mandiri', 25], ['Pamer karya, refleksi', 15]], unit: ' menit', max: 30, caption: 'Lebih dari separuh waktu adalah anak mengerjakan sendiri.' },

            { h2: 'Hitung biaya per jam' },
            `Harga bulanan sulit dibandingkan karena jumlah dan panjang sesi berbeda-beda. Ubah semuanya menjadi <b>biaya per jam belajar</b>, lalu pertimbangkan juga biaya tersembunyi seperti transportasi.`,
            { w: 'calc', title: 'Kalkulator biaya kursus coding', desc: 'Masukkan angka dari brosur kursus. Contoh awal memakai paket kelas online 4 sesi per bulan.', inputs: [
                { id: 'biaya', label: 'Biaya per bulan (Rp)', value: 349000, min: 50000, max: 2500000, step: 1000 },
                { id: 'sesi', label: 'Jumlah sesi per bulan', value: 4, min: 1, max: 16, step: 1 },
                { id: 'menit', label: 'Durasi per sesi (menit)', value: 90, min: 30, max: 180, step: 15 },
                { id: 'ongkos', label: 'Ongkos perjalanan per sesi (Rp, 0 jika online)', value: 0, min: 0, max: 100000, step: 1000 },
            ], outputs: [
                { label: 'Biaya per jam belajar', expr: '(biaya + ongkos * sesi) / (sesi * menit / 60)', fmt: 'rp', big: true },
                { label: 'Total jam belajar per bulan', expr: 'sesi * menit / 60', fmt: 'num', unit: 'jam' },
                { label: 'Total biaya per bulan termasuk perjalanan', expr: 'biaya + ongkos * sesi', fmt: 'rp' },
            ] },
            { callout: 'Biaya per jam hanyalah satu sisi. Kelas yang lebih murah tetapi berisi 30 anak bisa jauh lebih kecil manfaatnya daripada kelas sedikit lebih mahal dengan 6 anak dan umpan balik dari guru.', kind: 'info', title: 'Jangan hanya melihat angka' },

            { h2: 'Kapan memilih offline?' },
            { ul: [
                'Anak sangat kecil (di bawah 7 tahun) dan belum mandiri memakai komputer.',
                'Anak butuh suasana sosial untuk termotivasi.',
                'Rumah tidak punya perangkat atau internet yang memadai.',
                'Programnya melibatkan perangkat fisik seperti kit robotik.',
            ] },
            { h2: 'Kapan memilih online?' },
            { ul: [
                'Anak sudah lancar memakai laptop dan mouse.',
                'Waktu atau biaya perjalanan menjadi beban.',
                'Pilihan kursus berkualitas di kota Anda terbatas.',
                'Anda ingin anak menyimpan dan melanjutkan proyek di komputernya sendiri.',
            ] },

            { h2: 'Model gabungan' },
            `Banyak keluarga memilih model gabungan: platform belajar mandiri untuk latihan harian, ditambah sesi bersama guru untuk umpan balik. Model ini yang saya pakai di <a href="${pk('kursus-coding-anak-online-atau-offline', '/harga')}" target="_blank" rel="noopener">PixelKode</a>: paket Mandiri untuk belajar sendiri dengan pemeriksaan otomatis, dan paket Kelas Bersama Guru yang menambah sesi online kelompok kecil, pemeriksaan proyek, dan rapor bulanan.`,
        ],
        faq: [
            ['Apakah kursus coding online efektif untuk anak SD?', 'Efektif bila kelompok kecil, anak aktif mengerjakan, dan ada umpan balik guru. Pendampingan orang tua di awal sangat membantu.'],
            ['Perangkat apa yang dibutuhkan untuk kelas online?', 'Laptop atau komputer, mouse, internet stabil, dan headset. Ponsel tidak cocok untuk membuat proyek coding.'],
            ['Berapa biaya wajar kursus coding anak?', 'Sangat bervariasi. Bandingkan dengan menghitung biaya per jam belajar dan perhatikan ukuran kelas serta umpan balik.'],
            ['Berapa kali seminggu idealnya?', 'Untuk anak SD, 1-2 kali seminggu dengan durasi 60-90 menit sudah baik, ditambah latihan mandiri singkat.'],
        ],
        sources: [
            ['Harvard Center on the Developing Child: fungsi eksekutif dan perhatian', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['Scratch untuk orang tua', 'https://scratch.mit.edu/parents/'],
            ['Scherer dkk. (2019). Meta-analisis belajar pemrograman', 'https://doi.org/10.1037/edu0000314'],
        ],
    },
];
