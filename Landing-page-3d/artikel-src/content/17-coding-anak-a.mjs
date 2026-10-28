import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding untuk Anak';

export default [
    {
        slug: 'coding-untuk-anak-manfaat-dan-usia-mulai',
        title: 'Coding untuk Anak: Manfaat Nyata dan Usia Tepat Mulai',
        description: 'Apa manfaat coding untuk anak menurut riset, usia yang pas untuk mulai, tanda anak siap, dan cara memulai di rumah tanpa memaksa. Lengkap dengan tes kesiapan.',
        date: D, category: C, tags: ['coding untuk anak', 'belajar coding anak', 'Scratch', 'berpikir komputasional', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Kalau tes kesiapan di atas menyarankan Scratch, Pelajaran 1 PixelKode adalah titik mulai yang pas: Robo belajar urutan langkah, lalu anak membuat animasi pertamanya.',
        lead: 'Banyak orang tua mendengar bahwa anak "harus belajar coding", lalu bingung: apakah anak saya terlalu kecil, apakah ia harus jago matematika, dan apa sebenarnya yang didapat? Artikel ini menjawabnya dengan jujur, berdasarkan riset, dan diakhiri tes singkat untuk menentukan titik mulai yang cocok bagi anak Anda.',
        body: [
            { h2: 'Coding untuk anak itu sebenarnya apa?' },
            `Coding adalah menulis perintah yang dijalankan komputer. Untuk anak usia SD, perintah itu hampir tidak pernah berupa baris teks rumit seperti di film. Anak menyusun <b>blok bergambar</b> yang saling mengunci seperti puzzle: "ketika bendera hijau diklik", "gerak 10 langkah", "ulangi 4 kali". Hasilnya bisa dilihat langsung: kucing berjalan, roket terbang, skor bertambah.`,
            `Analogi yang paling membantu: coding mirip <b>menulis</b>. Kita mengajari anak menulis bukan supaya semuanya menjadi wartawan, tetapi supaya mereka bisa menyusun pikiran dan mengungkapkan ide. Coding melakukan hal yang sama untuk dunia digital. Anak berpindah dari sekadar <i>memakai</i> aplikasi menjadi <i>membuat</i> sesuatu dengan komputer.`,
            { callout: 'Tujuan coding untuk anak usia 7 sampai 11 tahun bukan menjadi programmer. Tujuannya melatih cara berpikir runtut, berani mencoba, dan mencipta. Kalau kelak ia menjadi programmer, itu bonus.', kind: 'info', title: 'Ekspektasi yang sehat' },

            { h2: 'Manfaat yang didukung riset (dan yang dilebih-lebihkan)' },
            `Jeannette Wing, ilmuwan komputer dari Carnegie Mellon, mempopulerkan istilah <b>computational thinking</b> atau berpikir komputasional pada 2006. Ia berpendapat cara berpikir ini sama pentingnya dengan membaca, menulis, dan berhitung: memecah masalah besar, mengenali pola, mengabaikan detail yang tidak penting, lalu menyusun langkah penyelesaian. Coding adalah salah satu cara paling konkret untuk melatihnya, karena komputer langsung menunjukkan apakah langkah kita benar.`,
            `Bukti terbaik sejauh ini datang dari meta-analisis Scherer, Siddiq, dan Sánchez Viveros (2019) di <i>Journal of Educational Psychology</i>, yang merangkum 105 penelitian. Hasilnya: anak dan remaja yang belajar pemrograman tidak hanya lebih baik dalam pemrograman, tetapi juga menunjukkan peningkatan berukuran <b>sedang</b> pada kemampuan lain seperti berpikir kreatif, matematika, metakognisi (kesadaran tentang cara berpikir sendiri), dan penalaran. Efek terbesar tetap pada kemampuan yang dekat dengan coding itu sendiri.`,
            { table: { head: ['Manfaat', 'Seberapa kuat buktinya', 'Seperti apa di rumah'], rows: [
                ['Memecah masalah menjadi langkah kecil', 'Kuat, inti dari berpikir komputasional', 'Anak bisa menjelaskan "pertama ..., lalu ..., kalau ... maka ..."'],
                ['Ketekunan saat gagal', 'Sedang, terlihat konsisten di kelas yang membiasakan debugging', 'Anak tidak langsung menyerah saat programnya salah'],
                ['Kreativitas dan ekspresi', 'Sedang, terutama di lingkungan proyek terbuka seperti Scratch', 'Anak membuat cerita, kartu ucapan, atau game versinya sendiri'],
                ['Nilai matematika naik', 'Ada, tetapi efeknya lebih kecil dan bergantung cara mengajar', 'Paham koordinat, sudut, dan bilangan negatif lewat gerakan sprite'],
                ['"Anak jadi jenius"', 'Tidak ada bukti', 'Hati-hati dengan janji berlebihan di iklan kursus'],
            ] } },
            `Perhatikan baris terakhir. Riset yang sama juga menunjukkan hasilnya sangat bergantung pada <b>cara mengajar</b>. Anak yang hanya menyalin kode dari video tanpa memahami kenapa, mendapat manfaat jauh lebih sedikit dibanding anak yang diajak merancang, mencoba, salah, lalu memperbaiki.`,

            { h2: 'Usia berapa sebaiknya mulai?' },
            `Tidak ada usia ajaib. Yang menentukan adalah kesiapan anak dan bentuk kegiatannya. Panduan berikut disusun dari rentang usia yang dipakai pembuat alat-alatnya sendiri: ScratchJr dirancang MIT dan Tufts University untuk anak 5 sampai 7 tahun, sedangkan Scratch umumnya dipakai anak 8 tahun ke atas.`,
            { svg: 'timeline', label: 'Tahapan belajar coding menurut usia', events: [['4-6 th', 'Coding tanpa layar', 'Permainan urutan, pola, dan "robot manusia" di rumah'], ['5-7 th', 'ScratchJr', 'Blok bergambar tanpa banyak teks, di tablet'], ['8-11 th', 'Scratch', 'Animasi, cerita, dan game dengan blok berteks'], ['11-13 th', 'Scratch lanjut', 'Variabel, clone, proyek besar, mulai kenal Python'], ['13+ th', 'Bahasa teks', 'Python atau JavaScript untuk proyek sungguhan']] },
            `Tiga tanda praktis bahwa anak siap memakai Scratch: ia sudah <b>lancar membaca kalimat pendek</b> (blok Scratch berisi teks), bisa memakai <b>mouse atau touchpad</b> untuk menyeret, dan bisa fokus sekitar 20 sampai 30 menit pada satu kegiatan. Anak 7 tahun yang memenuhi ketiganya bisa mulai dengan didampingi. Anak 10 tahun yang belum lancar membaca lebih baik memulai dari permainan tanpa layar dulu.`,
            { w: 'choose', title: 'Tes kesiapan: anak Anda sebaiknya mulai dari mana?', desc: 'Jawab berdasarkan kondisi anak hari ini, bukan harapan. Hasilnya saran titik mulai, bukan label.', questions: [
                { q: 'Berapa usia anak?', options: [{ t: 'Di bawah 6 tahun', add: { unplugged: 3 } }, { t: '6-7 tahun', add: { unplugged: 1, scratchjr: 2 } }, { t: '8-11 tahun', add: { scratch: 3 } }, { t: '12 tahun ke atas', add: { scratch: 1, python: 2 } }] },
                { q: 'Bagaimana kemampuan membacanya?', options: [{ t: 'Belum lancar', add: { unplugged: 2, scratchjr: 2 } }, { t: 'Lancar membaca kalimat pendek', add: { scratch: 2 } }, { t: 'Lancar membaca teks panjang dan instruksi', add: { scratch: 1, python: 2 } }] },
                { q: 'Perangkat apa yang tersedia?', options: [{ t: 'Belum ada, atau hanya ponsel', add: { unplugged: 3 } }, { t: 'Tablet', add: { scratchjr: 3 } }, { t: 'Laptop atau komputer', add: { scratch: 2, python: 1 } }] },
                { q: 'Pernah membuat sesuatu dengan Scratch atau sejenisnya?', options: [{ t: 'Belum pernah', add: { unplugged: 1, scratchjr: 1, scratch: 1 } }, { t: 'Pernah sedikit', add: { scratch: 2 } }, { t: 'Sering, sudah membuat game sendiri', add: { python: 3 } }] },
            ], results: {
                unplugged: { title: 'Mulai dari coding tanpa layar', text: 'Permainan urutan langkah, pola, dan "robot manusia" melatih dasar yang sama tanpa layar. Setelah anak lancar membaca atau ada tablet, lanjut ke ScratchJr.' },
                scratchjr: { title: 'Mulai dari ScratchJr', text: 'Aplikasi gratis dari MIT dan Tufts untuk usia 5-7 tahun. Blok bergambar, cocok untuk anak yang belum lancar membaca. Dampingi 15-20 menit per sesi.' },
                scratch: { title: 'Mulai dari Scratch', text: 'Anak siap memakai blok berteks untuk membuat animasi dan game. Kelas atau kurikulum berurutan membantu supaya ia tidak hanya menyalin tutorial.' },
                python: { title: 'Siap mencoba bahasa teks', text: 'Tetap selesaikan beberapa proyek Scratch yang menantang (variabel, clone), lalu mulai Python dengan proyek kecil seperti kuis atau tebak angka.' },
            } },

            { h2: 'Mitos yang sering membuat orang tua ragu' },
            { w: 'cards', title: 'Ketuk kartu untuk melihat faktanya', items: [
                { tag: 'Mitos', front: '"Anak saya tidak suka matematika, jadi tidak cocok coding."', backTag: 'Fakta', back: 'Coding blok untuk pemula lebih banyak soal urutan dan logika daripada hitungan. Banyak anak justru mulai menyukai angka setelah melihat koordinat menggerakkan sprite.' },
                { tag: 'Mitos', front: '"Coding hanya menambah jam main layar."', backTag: 'Fakta', back: 'Layar untuk mencipta berbeda dengan layar untuk menonton. Tetap batasi durasinya, tetapi coding termasuk waktu layar aktif yang bernilai.' },
                { tag: 'Mitos', front: '"Harus pakai laptop mahal."', backTag: 'Fakta', back: 'Scratch berjalan di browser laptop biasa atau Chromebook. Untuk usia 5-7 tahun, ScratchJr cukup di tablet.' },
                { tag: 'Mitos', front: '"Orang tua harus bisa coding dulu."', backTag: 'Fakta', back: 'Peran orang tua adalah menemani, bertanya, dan mengapresiasi. Pertanyaan "bagaimana caranya Oyen bisa berjalan?" lebih berharga daripada menjawab untuk anak.' },
            ] },

            { h2: 'Cara memulai di rumah: rencana dua minggu' },
            `Anda tidak perlu langsung membeli kursus. Coba rencana ringan ini untuk melihat apakah anak tertarik. Kuncinya: sesi pendek, selesai dengan rasa berhasil, dan anak yang memegang mouse.`,
            { ol: [
                '<b>Sesi 1 (tanpa layar, 20 menit).</b> Main "robot manusia": anak memberi perintah maju, belok kiri, belok kanan untuk membawa Anda ke dapur. Kalau Anda menabrak kursi, itu bug. Tertawakan bersama, lalu perbaiki perintahnya.',
                '<b>Sesi 2 (30 menit).</b> Coba latihan Robo di bawah atau di situs Scratch: buat sprite berjalan dan berkata "Halo".',
                '<b>Sesi 3 (30 menit).</b> Kenalkan blok <i>ulangi</i>. Tanyakan: "Bisakah programnya dibuat lebih pendek?"',
                '<b>Sesi 4 (45 menit).</b> Proyek bebas: kartu ucapan ulang tahun untuk saudara. Biarkan anak memilih latar dan tokohnya.',
                '<b>Penutup.</b> Minta anak memamerkan karyanya ke anggota keluarga lain. Menjelaskan karya sendiri adalah bagian penting dari belajar.',
            ] },
            { w: 'robo', title: 'Latihan pertama: bantu Robo sampai di bendera', desc: 'Ini cuplikan latihan algoritma yang biasa dipakai di kelas coding anak. Ketuk perintah untuk menyusun program, lalu tekan Jalankan.', levels: [
                { name: 'Lurus saja', goal: 'Bawa Robo ke bendera 🏁.', map: ['######', '#>..F#', '######'], max: 3 },
                { name: 'Ada belokan', goal: 'Robo menghadap ke kanan. Benderanya di bawah.', map: ['#####', '#>.##', '##.##', '##F##', '#####'], max: 4 },
            ] },
            { callout: 'Kalau anak minta "satu level lagi", itu tanda bagus. Kalau ia bosan setelah 10 menit, coba format lain (cerita, game, kartu ucapan) sebelum menyimpulkan ia tidak suka coding.', kind: 'good', title: 'Membaca minat anak' },

            { h2: 'Kapan perlu kelas atau kursus?' },
            `Belajar mandiri dari tutorial video cocok untuk eksplorasi awal. Masalahnya, setelah beberapa minggu banyak anak berhenti di tahap "menyalin": mereka bisa mengikuti video, tetapi bingung saat diminta membuat ide sendiri. Di titik ini kurikulum yang <b>berurutan</b> (setiap konsep dibangun di atas konsep sebelumnya), latihan bertahap, dan umpan balik dari guru membuat perbedaan besar.`,
            `Sebagai gambaran, di <a href="${pk('coding-untuk-anak-manfaat-dan-usia-mulai', '/')}" target="_blank" rel="noopener">PixelKode</a>, kelas yang saya kembangkan untuk anak 8 sampai 11 tahun, setiap pelajaran mengikuti pola yang sama: materi singkat bergambar, latihan Robo untuk melatih logika, proyek di Studio yang blok-bloknya sama dengan Scratch, lalu kuis kilat. Pola seperti ini, apa pun kursus yang Anda pilih, adalah yang perlu dicari: ada latihan logika, ada proyek kreatif, dan ada pemeriksaan hasil.`,
        ],
        faq: [
            ['Usia berapa anak bisa mulai belajar coding?', 'Permainan logika tanpa layar bisa sejak 4-5 tahun. ScratchJr dirancang untuk 5-7 tahun. Scratch nyaman dipakai anak 8 tahun ke atas yang sudah lancar membaca.'],
            ['Apakah coding membuat anak pintar matematika?', 'Riset menunjukkan efek positif berukuran sedang pada beberapa kemampuan berpikir, termasuk matematika, terutama bila anak diajak merancang dan memperbaiki program sendiri. Efeknya bukan sihir dan bergantung cara mengajar.'],
            ['Berapa lama anak sebaiknya belajar coding per minggu?', 'Untuk anak SD, 2 sesi per minggu masing-masing 45-60 menit sudah cukup. Konsistensi lebih penting daripada durasi panjang sekali-sekali.'],
            ['Apakah anak perempuan juga cocok belajar coding?', 'Tentu. Minat anak dipengaruhi contoh dan proyek yang ditawarkan. Proyek cerita, animasi, dan seni sering menjadi pintu masuk yang menarik bagi siapa pun.'],
            ['Perlu laptop khusus?', 'Tidak. Laptop atau Chromebook biasa dengan browser modern cukup untuk Scratch. Mouse membuat menyeret blok lebih nyaman bagi anak.'],
        ],
        sources: [
            ['Wing, J. M. (2006). Computational Thinking. Communications of the ACM', 'https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf'],
            ['Scherer, Siddiq, & Sánchez Viveros (2019). The cognitive benefits of learning computer programming: A meta-analysis of transfer effects', 'https://doi.org/10.1037/edu0000314'],
            ['ScratchJr, MIT Media Lab dan Tufts University (usia 5-7 tahun)', 'https://www.scratchjr.org/'],
            ['Scratch untuk orang tua (situs resmi)', 'https://scratch.mit.edu/parents/'],
            ['Lifelong Kindergarten Group, MIT Media Lab', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
        ],
    },

    {
        slug: 'scratch-adalah-panduan-lengkap-orang-tua',
        title: 'Scratch Adalah: Panduan Lengkap untuk Orang Tua',
        description: 'Scratch adalah bahasa pemrograman blok gratis dari MIT. Pahami cara kerjanya, apa yang dipelajari anak, keamanannya, dan cara mendampinginya.',
        date: D, category: C, tags: ['Scratch', 'Scratch adalah', 'coding untuk anak', 'MIT', 'pemrograman blok'], cta: 'pixelkode',
        ctaNote: 'Studio di PixelKode sengaja dibuat sama dengan editor Scratch 3, termasuk nama dan warna bloknya. Proyek anak bisa diunduh sebagai .sb3 dan dibuka di Scratch kapan saja.',
        lead: 'Kalau anak Anda pernah pulang sekolah bercerita tentang "kucing oranye yang bisa diprogram", besar kemungkinan itu Scratch. Panduan ini menjelaskan apa itu Scratch, kenapa dipakai jutaan sekolah, apa yang sebenarnya dipelajari anak di dalamnya, dan bagaimana Anda bisa mendampingi meski belum pernah coding sama sekali.',
        body: [
            { h2: 'Scratch dalam satu paragraf' },
            `<b>Scratch</b> adalah bahasa pemrograman visual dan komunitas daring yang dikembangkan oleh kelompok Lifelong Kindergarten di MIT Media Lab, dan kini dikelola Scratch Foundation, sebuah yayasan nirlaba. Scratch gratis, tanpa iklan, dan tersedia dalam puluhan bahasa termasuk Bahasa Indonesia. Alih-alih mengetik kode, anak <b>menyeret dan menyusun blok</b> berwarna untuk membuat cerita interaktif, animasi, permainan, dan musik. Versi yang dipakai sekarang adalah Scratch 3.`,
            `Scratch memakai prinsip yang dirumuskan Mitchel Resnick, kepala kelompok tersebut: alat belajar yang baik punya <b>lantai rendah</b> (mudah dimulai), <b>langit-langit tinggi</b> (bisa dipakai untuk proyek rumit), dan <b>dinding lebar</b> (mendukung banyak jenis proyek, dari seni sampai sains). Itulah kenapa anak 8 tahun dan mahasiswa sama-sama bisa memakainya.`,

            { h2: 'Mengenal layar Scratch' },
            { svg: 'layers', label: 'Bagian utama editor Scratch', items: [{ t: 'Palet blok (kiri)', d: 'Kategori berwarna: Gerakan, Tampilan, Suara, Kejadian, Kontrol, dan lainnya' }, { t: 'Area skrip (tengah)', d: 'Tempat blok disusun menjadi program' }, { t: 'Panggung (kanan atas)', d: 'Tempat hasil program terlihat, dengan bendera hijau dan tombol stop' }, { t: 'Daftar sprite (kanan bawah)', d: 'Tokoh dan benda di proyek, plus latar panggung' }], caption: 'Empat bagian ini cukup untuk memahami 90% kegiatan anak di Scratch.' },
            `Setiap tokoh di Scratch disebut <b>sprite</b>. Sprite bawaan adalah kucing oranye. Setiap sprite punya <b>skrip</b> (tumpukan blok) sendiri, <b>kostum</b> (gambar yang bisa berganti untuk membuat animasi), dan <b>suara</b>. Panggung juga bisa punya skrip dan latar.`,
            { h3: 'Warna blok menunjukkan jenisnya' },
            { table: { head: ['Kategori', 'Warna', 'Contoh blok', 'Untuk apa'], rows: [
                ['Gerakan', 'Biru', 'gerak 10 langkah, putar 15 derajat', 'Memindahkan dan memutar sprite'],
                ['Tampilan', 'Ungu', 'katakan Halo!, ganti kostum', 'Bicara, berganti gambar, efek'],
                ['Suara', 'Merah muda', 'mainkan suara Meong', 'Suara dan musik'],
                ['Kejadian', 'Kuning', 'ketika bendera diklik', 'Memulai program saat sesuatu terjadi'],
                ['Kontrol', 'Oranye', 'ulangi, jika ... maka, tunggu', 'Mengatur alur: pengulangan dan keputusan'],
                ['Penginderaan', 'Biru muda', 'menyentuh tepi?', 'Memeriksa keadaan, misalnya tabrakan'],
                ['Operator', 'Hijau', '+, acak 1 sampai 10', 'Hitungan dan perbandingan'],
                ['Variabel', 'Oranye tua', 'ubah skor sebesar 1', 'Menyimpan nilai seperti skor dan nyawa'],
            ] } },
            { h3: 'Contoh skrip pertama' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['looks', 'katakan (Halo!) selama (2) detik'], ['control', 'ulangi (10)', [['motion', 'gerak (10) langkah'], ['looks', 'kostum berikutnya'], ['control', 'tunggu (0.2) detik']]]], caption: 'Kucing menyapa, lalu berjalan 10 kali sambil berganti kostum. Pergantian kostum yang cepat membuatnya tampak melangkah.' },
            `Skrip di atas sudah memuat tiga konsep inti pemrograman: <b>kejadian</b> (program mulai saat bendera diklik), <b>urutan</b> (blok dijalankan dari atas ke bawah), dan <b>pengulangan</b>. Konsep yang sama ada di bahasa profesional seperti Python dan JavaScript, hanya ditulis dengan teks.`,

            { h2: 'Apa yang sebenarnya dipelajari anak?' },
            `Karen Brennan dan Mitchel Resnick (2012) memetakan pembelajaran di Scratch menjadi tiga lapis. Kerangka ini berguna untuk orang tua karena menjelaskan kenapa "hanya membuat game" sebenarnya kaya pelajaran.`,
            { svg: 'layers', label: 'Tiga dimensi berpikir komputasional di Scratch', items: [{ t: 'Konsep', d: 'urutan, pengulangan, kejadian, kondisi, operator, data, paralelisme' }, { t: 'Praktik', d: 'mencoba bertahap, menguji dan memperbaiki, memakai ulang, memecah masalah' }, { t: 'Perspektif', d: 'mengekspresikan diri, terhubung dengan orang lain, mempertanyakan teknologi' }], caption: 'Disarikan dari Brennan & Resnick (2012), kerangka berpikir komputasional untuk Scratch.' },
            `Lapisan <b>praktik</b> sering terlupakan padahal paling berharga. Anak belajar membuat sebagian kecil, mencobanya, menemukan yang salah, lalu memperbaikinya. Kebiasaan ini berguna jauh di luar komputer: saat mengerjakan soal cerita, menyusun presentasi, bahkan membereskan kamar.`,

            { h2: 'Apakah Scratch aman untuk anak?' },
            `Scratch punya situs komunitas tempat proyek bisa dibagikan, dikomentari, dan di-<i>remix</i> (disalin lalu dikembangkan dengan tetap menyebut pembuat aslinya). Scratch Foundation menerapkan pedoman komunitas dan moderasi, serta tidak menampilkan iklan. Beberapa hal tetap perlu orang tua ketahui:`,
            { ul: [
                '<b>Akun tidak wajib.</b> Anak bisa langsung membuat proyek di scratch.mit.edu tanpa akun. Akun hanya diperlukan untuk menyimpan proyek secara daring dan berbagi.',
                '<b>Fitur komentar ada.</b> Untuk anak yang lebih kecil, buat proyek di aplikasi Scratch offline atau tanpa membagikannya, sehingga tidak ada interaksi dengan orang asing.',
                '<b>Ajarkan aturan privasi.</b> Jangan memakai nama lengkap, nama sekolah, foto wajah, atau alamat di proyek maupun profil.',
                '<b>Ada fitur laporkan.</b> Konten atau komentar yang tidak pantas bisa dilaporkan ke moderator.',
            ] },
            { callout: 'Untuk anak di bawah 10 tahun, dampingi saat membuka bagian komunitas. Ajak ia melihat proyek-proyek bagus bersama, lalu diskusikan: "Menurutmu bagaimana cara membuatnya?"', kind: 'warn', title: 'Saran pendampingan' },

            { h2: 'Cara mendampingi tanpa harus bisa coding' },
            `Anda tidak perlu menguasai Scratch untuk menjadi pendamping yang hebat. Yang dibutuhkan anak adalah penonton yang penasaran. Gunakan pertanyaan terbuka berikut, satu atau dua saja per sesi:`,
            { w: 'cards', title: 'Pertanyaan pendamping (ketuk untuk melihat tujuannya)', items: [
                { tag: 'Tanyakan', front: '"Ceritakan, proyekmu tentang apa?"', backTag: 'Tujuan', back: 'Melatih anak menjelaskan ide dan rancangannya dengan kata-kata.' },
                { tag: 'Tanyakan', front: '"Bagian mana yang paling susah dibuat?"', backTag: 'Tujuan', back: 'Mengakui usaha, bukan hanya hasil. Anak belajar bahwa kesulitan itu wajar.' },
                { tag: 'Tanyakan', front: '"Apa yang terjadi kalau angka ini diganti?"', backTag: 'Tujuan', back: 'Mendorong eksperimen kecil dan rasa ingin tahu.' },
                { tag: 'Tanyakan', front: '"Kalau ada waktu lagi, mau ditambah apa?"', backTag: 'Tujuan', back: 'Melatih perencanaan dan membuat anak ingin kembali berkarya.' },
            ] },
            `Hindari mengambil alih mouse. Godaan untuk "membantu sebentar" memang besar, tetapi setiap kali orang dewasa mengambil alih, anak kehilangan kesempatan menemukan jawabannya sendiri. Kalau anak macet, tanyakan "sudah coba apa saja?" dan "blok mana yang menurutmu salah?"`,

            { h2: 'Belajar Scratch sendiri atau ikut kelas?' },
            `Scratch menyediakan tutorial resmi yang bagus di menu <i>Tutorial</i>. Untuk anak yang mandiri dan suka bereksplorasi, itu sudah cukup sebagai awal. Tantangan muncul ketika anak ingin naik level: konsep seperti variabel, koordinat, clone, dan logika game butuh urutan belajar yang jelas. Tanpa urutan, anak sering melompat dari tutorial ke tutorial tanpa benar-benar memahami.`,
            `Itulah alasan saya membuat <a href="${pk('scratch-adalah-panduan-lengkap-orang-tua', '/')}" target="_blank" rel="noopener">PixelKode</a>: 32 pelajaran berurutan dari algoritma sampai clone, dengan Studio yang sama persis dengan Scratch 3. Karena bloknya sama, apa pun yang dipelajari anak langsung terpakai di Scratch asli, dan proyeknya bisa dibuka di sana. Bagi orang tua, yang terpenting bukan alatnya, melainkan anak terus berkarya dengan pemahaman yang bertambah.`,
        ],
        faq: [
            ['Apakah Scratch gratis?', 'Ya. Scratch gratis, tanpa iklan, dan dikelola Scratch Foundation, organisasi nirlaba.'],
            ['Scratch untuk usia berapa?', 'Scratch umumnya dipakai anak 8 tahun ke atas, tetapi juga dipakai remaja dan orang dewasa. Untuk 5-7 tahun tersedia ScratchJr.'],
            ['Apakah Scratch bisa berbahasa Indonesia?', 'Bisa. Pilih bahasa di ikon bola dunia pada menu editor. Nama blok akan berubah, misalnya "ketika bendera diklik" dan "gerak 10 langkah".'],
            ['Apakah Scratch bisa dipakai tanpa internet?', 'Bisa, dengan aplikasi Scratch yang diunduh dari halaman unduh resmi. Proyek disimpan sebagai berkas .sb3 di komputer.'],
            ['Apa bedanya Scratch dengan game biasa?', 'Di game biasa anak bermain mengikuti aturan buatan orang lain. Di Scratch anak membuat aturan dan dunianya sendiri.'],
        ],
        sources: [
            ['Scratch, situs resmi', 'https://scratch.mit.edu/'],
            ['Scratch untuk orang tua', 'https://scratch.mit.edu/parents/'],
            ['Brennan, K., & Resnick, M. (2012). New frameworks for studying and assessing the development of computational thinking', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Scratch Foundation', 'https://www.scratchfoundation.org/'],
            ['Pedoman Komunitas Scratch', 'https://scratch.mit.edu/community_guidelines'],
        ],
    },

    {
        slug: 'cara-memakai-scratch-online-offline-dan-akun',
        title: 'Cara Memakai Scratch: Online, Offline, dan Membuat Akun',
        description: 'Cara memakai Scratch langkah demi langkah: langsung di browser, akun yang aman untuk anak, aplikasi offline, menyimpan .sb3, dan solusi masalah umum.',
        date: D, category: C, tags: ['cara memakai Scratch', 'Scratch offline', 'akun Scratch', 'Scratch 3', 'coding untuk anak'], cta: 'pixelkode',
        ctaNote: 'Proyek Studio di PixelKode bisa diunduh sebagai berkas .sb3, lalu dibuka di Scratch lewat menu Berkas → Muat dari komputermu, persis seperti cara di artikel ini.',
        lead: 'Scratch bisa dipakai dengan tiga cara: langsung di browser tanpa akun, di browser dengan akun, atau lewat aplikasi offline. Masing-masing punya kelebihan. Artikel ini memandu Anda memilih dan menyiapkannya dalam 10 menit, termasuk pengaturan yang aman untuk anak.',
        body: [
            { h2: 'Pilih cara yang cocok' },
            { table: { head: ['Cara', 'Butuh internet', 'Butuh akun', 'Penyimpanan', 'Cocok untuk'], rows: [
                ['Browser tanpa akun', 'Ya', 'Tidak', 'Unduh ke komputer (.sb3)', 'Coba-coba, anak kecil, komputer bersama'],
                ['Browser dengan akun', 'Ya', 'Ya', 'Otomatis di awan', 'Anak yang rutin berkarya dan ingin berbagi'],
                ['Aplikasi offline', 'Hanya saat mengunduh', 'Tidak', 'Berkas .sb3 di komputer', 'Internet tidak stabil, sekolah, tanpa komunitas'],
            ] } },

            { h2: 'Cara 1: langsung di browser, tanpa akun' },
            { ol: [
                'Buka <b>scratch.mit.edu</b> di Chrome, Edge, Firefox, atau Safari versi terbaru.',
                'Klik <b>Buat</b> (Create) di menu atas. Editor terbuka dengan sprite kucing.',
                'Ubah bahasa: klik ikon <b>bola dunia</b> di kiri atas, pilih <b>Bahasa Indonesia</b>.',
                'Berkarya. Saat selesai, klik <b>Berkas → Simpan ke komputermu</b>. Berkas berakhiran <code>.sb3</code> akan terunduh.',
                'Untuk melanjutkan lain kali: <b>Berkas → Muat dari komputermu</b>, pilih berkas .sb3 tadi.',
            ] },
            { callout: 'Tanpa akun, proyek tidak tersimpan otomatis. Kalau tab tertutup sebelum disimpan, karya hilang. Biasakan anak menyimpan setiap 10-15 menit.', kind: 'warn', title: 'Jangan lupa menyimpan' },

            { h2: 'Cara 2: membuat akun yang aman untuk anak' },
            `Akun membuat proyek tersimpan otomatis di awan dan bisa dibuka dari komputer mana pun. Saat mendaftar, Scratch menanyakan tanggal lahir dan, untuk anak di bawah umur, meminta alamat email orang tua atau wali untuk konfirmasi akun. Tips aman:`,
            { ul: [
                '<b>Nama pengguna tanpa identitas asli.</b> Hindari nama lengkap, tanggal lahir, nama sekolah, atau kota. Contoh yang baik: <code>RoketBiru2026</code>.',
                '<b>Email orang tua.</b> Pakai email Anda supaya pemberitahuan masuk ke Anda.',
                '<b>Kata sandi dicatat orang tua.</b> Anak yang lupa kata sandi sering membuat akun baru dan kehilangan karya lamanya.',
                '<b>Bicarakan aturan berbagi.</b> Proyek baru bersifat pribadi sampai tombol <i>Bagikan</i> ditekan. Sepakati bahwa anak bertanya dulu sebelum membagikan.',
            ] },
            { w: 'checklist', title: 'Daftar periksa akun Scratch anak', desc: 'Centang yang sudah dilakukan. Progres tersimpan di browser ini.', items: ['Nama pengguna tidak memuat nama asli atau sekolah.', 'Akun dikonfirmasi lewat email orang tua.', 'Kata sandi dicatat orang tua di tempat aman.', 'Foto profil bukan foto wajah anak.', 'Anak tahu cara melaporkan komentar yang tidak sopan.', 'Ada kesepakatan: tanya dulu sebelum membagikan proyek.'] },

            { h2: 'Cara 3: aplikasi Scratch offline' },
            `Aplikasi Scratch dapat diunduh gratis dari halaman <b>scratch.mit.edu/download</b>. Halaman itu mencantumkan sistem operasi yang didukung beserta petunjuk pemasangannya, termasuk Windows dan macOS. Setelah terpasang, aplikasi berjalan tanpa internet dan menyimpan proyek sebagai berkas .sb3, sama seperti versi browser.`,
            `Aplikasi offline sangat cocok untuk sekolah dengan internet terbatas, atau untuk orang tua yang ingin anak berkarya tanpa akses ke komunitas daring. Proyek .sb3 dari aplikasi tetap bisa diunggah ke situs Scratch nanti bila anak sudah punya akun.`,
            { callout: 'Unduh hanya dari scratch.mit.edu/download. Hindari situs pihak ketiga yang menawarkan "Scratch versi lengkap" atau "Scratch mod", karena bisa berisi perangkat lunak berbahaya.', kind: 'bad', title: 'Hati-hati situs unduhan palsu' },

            { h2: 'Membuat proyek pertama dalam 5 menit' },
            `Supaya anak langsung merasa berhasil, mulai dengan proyek yang hasilnya terlihat dalam satu menit. Susun blok berikut di sprite kucing:`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['motion', 'pergi ke x: (-150) y: (0)'], ['looks', 'katakan (Halo, aku Oyen!) selama (2) detik'], ['control', 'ulangi (20)', [['motion', 'gerak (15) langkah'], ['looks', 'kostum berikutnya'], ['control', 'tunggu (0.1) detik']]], ['looks', 'katakan (Sampai!)']], caption: 'Blok "pergi ke x: y:" memastikan kucing selalu mulai dari tempat yang sama setiap kali program dijalankan.' },
            `Setelah berhasil, ajak anak mengubah satu hal: angka langkah, jumlah ulangan, atau kalimatnya. Eksperimen kecil seperti ini adalah cara terbaik memahami fungsi setiap blok.`,

            { h2: 'Masalah yang sering terjadi dan solusinya' },
            { w: 'cards', title: 'Ketuk kartu untuk solusinya', items: [
                { tag: 'Masalah', front: 'Sprite hilang dari panggung.', backTag: 'Solusi', back: 'Sprite mungkin keluar layar. Klik sprite di daftar, lalu isi x: 0 dan y: 0 di info sprite. Tambahkan blok "pergi ke x: y:" di awal skrip.' },
                { tag: 'Masalah', front: 'Program berjalan sekali lalu tidak mau lagi.', backTag: 'Solusi', back: 'Posisi akhir tidak dikembalikan. Atur posisi, arah, dan kostum awal di bawah blok bendera hijau.' },
                { tag: 'Masalah', front: 'Proyek kemarin hilang.', backTag: 'Solusi', back: 'Tanpa akun, proyek hanya ada di berkas .sb3 yang diunduh. Cek folder Unduhan. Dengan akun, buka menu "Barang Saya".' },
                { tag: 'Masalah', front: 'Editor lambat atau patah-patah.', backTag: 'Solusi', back: 'Tutup tab lain, pakai browser terbaru, dan kurangi efek grafis atau clone yang terlalu banyak.' },
                { tag: 'Masalah', front: 'Bahasa kembali ke Inggris.', backTag: 'Solusi', back: 'Pilih Bahasa Indonesia lagi lewat ikon bola dunia. Dengan akun, pilihan ini lebih konsisten tersimpan.' },
            ] },

            { h2: 'Langkah berikutnya' },
            `Setelah anak nyaman dengan editor, langkah logis berikutnya adalah memahami konsep satu per satu: urutan, pengulangan, kejadian, koordinat, kondisi, lalu variabel. Anda bisa memakai tutorial resmi Scratch atau kurikulum berurutan seperti <a href="${pk('cara-memakai-scratch-online-offline-dan-akun')}" target="_blank" rel="noopener">2 pelajaran gratis di PixelKode</a>, yang bisa dicoba tanpa daftar dan hasilnya bisa diunduh ke Scratch.`,
        ],
        faq: [
            ['Apakah Scratch harus diinstal?', 'Tidak. Scratch bisa langsung dipakai di browser lewat scratch.mit.edu. Aplikasi offline hanya diperlukan bila ingin bekerja tanpa internet.'],
            ['Berkas .sb3 itu apa?', 'Format berkas proyek Scratch 3. Isinya skrip, sprite, kostum, dan suara. Berkas ini bisa dibuka lagi di Scratch versi browser maupun aplikasi.'],
            ['Apakah anak di bawah 13 tahun boleh membuat akun Scratch?', 'Boleh. Scratch meminta email orang tua atau wali untuk mengonfirmasi akun anak.'],
            ['Bisakah Scratch dipakai di HP?', 'Editor Scratch dirancang untuk layar lebar dengan mouse atau sentuhan di tablet. Di ponsel kecil sangat tidak nyaman. Untuk anak 5-7 tahun di tablet, pertimbangkan ScratchJr.'],
        ],
        sources: [
            ['Scratch, buat proyek baru', 'https://scratch.mit.edu/projects/editor/'],
            ['Halaman unduh aplikasi Scratch', 'https://scratch.mit.edu/download'],
            ['Scratch untuk orang tua', 'https://scratch.mit.edu/parents/'],
            ['Pedoman Komunitas Scratch', 'https://scratch.mit.edu/community_guidelines'],
        ],
    },

    {
        slug: 'berpikir-komputasional-untuk-anak-4-pilar',
        title: 'Berpikir Komputasional untuk Anak: 4 Pilar dan Contohnya',
        description: 'Empat pilar berpikir komputasional (dekomposisi, pola, abstraksi, algoritma) dijelaskan lewat contoh sehari-hari, latihan Robo, dan kuis.',
        date: D, category: C, tags: ['berpikir komputasional', 'computational thinking', 'coding untuk anak', 'Kurikulum Merdeka', 'logika anak'], cta: 'pixelkode',
        ctaNote: 'Latihan Robo di PixelKode dirancang khusus untuk melatih keempat pilar ini: memecah rute, menemukan pola langkah, lalu meringkasnya dengan blok ulangi dan blok buatan sendiri.',
        lead: 'Istilah berpikir komputasional kini muncul di kurikulum sekolah, brosur kursus, sampai soal lomba. Kedengarannya teknis, padahal anak Anda mungkin sudah melakukannya saat menyusun Lego atau merencanakan rute bersepeda. Artikel ini menjelaskan empat pilarnya dengan contoh dari dapur, kamar, dan game, plus cara melatihnya di rumah.',
        body: [
            { h2: 'Definisi singkat yang mudah diingat' },
            `<b>Berpikir komputasional</b> (computational thinking) adalah cara memecahkan masalah dengan menyusunnya sedemikian rupa sehingga solusinya bisa dijalankan, baik oleh komputer, robot, maupun manusia. Jeannette Wing mempopulerkan istilah ini pada 2006 dan menegaskan bahwa ini adalah cara berpikir manusia, <b>bukan</b> cara agar manusia berpikir seperti komputer.`,
            `Di Indonesia, berpikir komputasional menjadi bagian dari mata pelajaran Informatika, dan sejak tahun ajaran 2025/2026 pemerintah menambahkan mata pelajaran pilihan Koding dan Kecerdasan Artifisial yang dimulai dari kelas 5 SD. Jadi memahami konsep ini membantu Anda mendampingi pelajaran sekolah anak juga.`,
            { svg: 'cycle', label: 'Empat pilar berpikir komputasional', items: ['Dekomposisi', 'Pengenalan pola', 'Abstraksi', 'Algoritma'], caption: 'Keempat pilar saling menguatkan. Dalam praktik, anak bolak-balik di antaranya.' },

            { h2: 'Pilar 1: Dekomposisi, memecah masalah besar' },
            `Dekomposisi adalah memecah masalah besar menjadi bagian kecil yang lebih mudah. "Bereskan kamarmu" terasa berat bagi anak 8 tahun. "Masukkan semua mainan ke kotak, lalu buku ke rak, lalu baju kotor ke keranjang" terasa bisa dikerjakan.`,
            { table: { head: ['Masalah besar', 'Dipecah menjadi'], rows: [
                ['Membuat game tangkap bintang', 'Gerakan pemain, bintang jatuh, cek tangkapan, skor, akhir permainan'],
                ['Menyiapkan bekal sekolah', 'Pilih menu, siapkan wadah, isi makanan, isi minuman, masukkan ke tas'],
                ['Menulis cerita', 'Tokoh, latar, masalah, puncak, penyelesaian'],
            ] } },
            { callout: 'Saat anak berkata "aku tidak bisa", ajak ia bertanya: "Bagian terkecil mana yang bisa kukerjakan dulu?" Ini dekomposisi dalam bentuk paling sederhana.', kind: 'good', title: 'Kalimat yang bisa dipakai di rumah' },

            { h2: 'Pilar 2: Pengenalan pola' },
            `Pengenalan pola adalah melihat kesamaan atau keteraturan. Kalau anak sadar bahwa rute ke bendera adalah "maju, maju, belok kanan" yang diulang tiga kali, ia tidak perlu menulis sembilan perintah. Cukup satu pola dan blok <i>ulangi</i>.`,
            `Pola ada di mana-mana: motif batik, irama lagu, urutan hari, perkalian 5 yang selalu berakhir 0 atau 5. Anak yang terbiasa mencari pola lebih cepat memahami matematika karena banyak konsep matematika pada dasarnya adalah pola.`,
            { w: 'robo', title: 'Temukan polanya', desc: 'Rute ini punya pola yang berulang. Coba selesaikan dengan program sependek mungkin memakai pilihan "ulangi".', repeat: true, levels: [
                { name: 'Tangga', goal: 'Robo naik tangga ke bendera. Lihat pola langkahnya.', map: ['#######', '#####F#', '####..#', '###..##', '##..###', '#>.####', '#######'], max: 5 },
            ] },
            `Petunjuk: Robo menghadap ke kanan. Satu anak tangga = maju, belok kiri, maju, belok kanan. Polanya diulang. Program terpendek memakai 4 blok perintah plus 1 blok ulangi.`,

            { h2: 'Pilar 3: Abstraksi, fokus pada yang penting' },
            `Abstraksi adalah mengabaikan detail yang tidak relevan supaya fokus pada inti masalah. Peta kereta MRT adalah contoh abstraksi yang hebat: jaraknya tidak akurat dan belokannya disederhanakan, tetapi informasi yang penting (urutan stasiun dan tempat transit) sangat jelas.`,
            `Dalam game, abstraksi muncul ketika anak sadar bahwa yang penting dari "bintang" hanyalah posisi dan apakah ia menyentuh pemain. Warna, bentuk, dan kilaunya tidak memengaruhi logika. Di level lebih tinggi, abstraksi diwujudkan dengan membuat <b>blok sendiri</b> (prosedur): satu blok "lompat" yang di dalamnya berisi banyak langkah.`,
            { blocks: [['my', 'definisikan lompat'], ['control', 'ulangi (10)', [['motion', 'ubah y sebesar (8)']]], ['control', 'ulangi (10)', [['motion', 'ubah y sebesar (-8)']]]], caption: 'Abstraksi: delapan baris disembunyikan di balik satu nama blok "lompat". Skrip utama cukup memanggil "lompat".' },

            { h2: 'Pilar 4: Algoritma, langkah yang jelas dan berurutan' },
            `Algoritma adalah urutan langkah yang jelas untuk menyelesaikan tugas. Kata kuncinya <b>jelas</b>: setiap langkah tidak boleh ditafsirkan ganda. Coba minta anak menulis algoritma membuat roti selai, lalu Anda ikuti persis seperti tertulis. Kalau tertulis "oleskan selai ke roti" tanpa "buka tutup toples", Anda bisa berpura-pura bingung. Anak akan tertawa sekaligus paham kenapa komputer butuh perintah yang tepat.`,
            { svg: 'flow', label: 'Algoritma menyeberang jalan', steps: [{ t: 'Berhenti di tepi', d: 'di zebra cross' }, { t: 'Lihat kanan', d: 'ada kendaraan?' }, { t: 'Lihat kiri', d: 'ada kendaraan?' }, { t: 'Lihat kanan lagi', d: 'pastikan aman' }, { t: 'Menyeberang', d: 'jalan, jangan lari' }], caption: 'Algoritma sehari-hari. Diskusikan dengan anak: langkah mana yang kalau ditukar urutannya menjadi berbahaya?' },

            { h2: 'Latihan berpikir komputasional di rumah' },
            `Tidak semua latihan harus di depan layar. Pilih satu dari daftar ini per minggu:`,
            { ul: [
                '<b>Robot manusia</b> (algoritma): anak memberi perintah langkah demi langkah untuk menuntun Anda ke suatu benda.',
                '<b>Resep terbalik</b> (dekomposisi): ambil kue kesukaan, minta anak menebak bahan dan langkah membuatnya.',
                '<b>Pola manik-manik</b> (pola): buat gelang dengan pola warna, minta anak meneruskannya dan menjelaskan aturannya.',
                '<b>Peta rumah</b> (abstraksi): gambar denah rumah hanya dengan kotak dan garis. Apa saja yang perlu digambar dan apa yang boleh diabaikan?',
                '<b>Tebak angka</b> (algoritma pencarian): Anda memikirkan angka 1-100, anak menebak dan Anda menjawab "lebih besar" atau "lebih kecil". Strategi terbaik adalah selalu menebak di tengah.',
            ] },
            { w: 'quiz', title: 'Kuis singkat untuk orang tua', questions: [
                { q: 'Anak membagi pekerjaan rumah "membuat poster" menjadi: mencari gambar, menulis judul, menempel, mewarnai. Ini contoh pilar apa?', options: ['Pengenalan pola', 'Dekomposisi', 'Abstraksi'], answer: 1, why: 'Memecah tugas besar menjadi bagian kecil adalah dekomposisi.' },
                { q: 'Anak sadar bahwa lagu "Balonku" punya bagian yang berulang dan memakainya untuk menghafal. Ini contoh?', options: ['Pengenalan pola', 'Algoritma', 'Dekomposisi'], answer: 0, why: 'Menemukan bagian yang berulang adalah pengenalan pola.' },
                { q: 'Peta jalur angkot yang hanya menampilkan nama halte dan urutannya adalah contoh?', options: ['Algoritma', 'Abstraksi', 'Debugging'], answer: 1, why: 'Detail yang tidak penting dihilangkan supaya informasi inti jelas.' },
                { q: 'Kenapa resep masakan bisa disebut algoritma?', options: ['Karena ada bahan makanan', 'Karena berisi langkah yang jelas dan berurutan untuk mencapai hasil', 'Karena ditulis di kertas'], answer: 1, why: 'Algoritma adalah urutan langkah yang jelas untuk menyelesaikan tugas.' },
            ] },

            { h2: 'Dari pilar ke proyek nyata' },
            `Keempat pilar paling kuat dilatih bersama dalam proyek. Membuat game sederhana memaksa anak memecah masalah, mencari pola gerakan, menyederhanakan, lalu menyusun langkah. Inilah yang membuat proyek coding bernilai: semua pilar dipakai sekaligus, dalam konteks yang anak pedulikan.`,
            `Kalau ingin jalur yang sudah tersusun, <a href="${pk('berpikir-komputasional-untuk-anak-4-pilar', '/')}" target="_blank" rel="noopener">kurikulum PixelKode</a> membangun keempat pilar ini secara bertahap: modul Perkenalan untuk algoritma dan pola, modul Game untuk dekomposisi dan prosedur, sampai modul Variabel dan Clone untuk abstraksi yang lebih tinggi.`,
        ],
        faq: [
            ['Apakah berpikir komputasional sama dengan coding?', 'Tidak. Coding adalah salah satu cara melatih dan menerapkan berpikir komputasional. Berpikir komputasional bisa dilatih tanpa komputer.'],
            ['Sejak usia berapa berpikir komputasional bisa dilatih?', 'Sejak usia prasekolah lewat permainan urutan, pola, dan sortir. Kompleksitasnya ditambah seiring usia.'],
            ['Apakah berpikir komputasional ada di kurikulum sekolah Indonesia?', 'Ya. Berpikir komputasional adalah bagian dari Informatika, dan mata pelajaran pilihan Koding dan Kecerdasan Artifisial berlaku bertahap mulai 2025/2026.'],
            ['Bagaimana tahu anak sudah berkembang?', 'Perhatikan cara ia menjelaskan solusi. Anak yang berkembang bisa berkata "pertama aku ..., lalu ..., karena polanya ...".'],
        ],
        sources: [
            ['Wing, J. M. (2006). Computational Thinking. Communications of the ACM', 'https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf'],
            ['Brennan & Resnick (2012). New frameworks for studying and assessing computational thinking', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Antara: Permendikdasmen 13/2025, Koding dan AI masuk Kurikulum 2025/2026', 'https://www.antaranews.com/berita/4983541/permendikdasmen-13-2025-koding-dan-ai-resmi-masuk-kurikulum-2025-2026'],
            ['CS Unplugged: aktivitas ilmu komputer tanpa komputer', 'https://www.csunplugged.org/'],
            ['Bebras Indonesia: tantangan berpikir komputasional', 'https://bebras.or.id/'],
        ],
    },

    {
        slug: 'algoritma-untuk-anak-penjelasan-dan-latihan',
        title: 'Algoritma untuk Anak: Penjelasan Sederhana dan Latihan',
        description: 'Cara menjelaskan algoritma kepada anak SD dengan contoh sehari-hari, kesalahan umum, dan latihan Robo bertingkat yang bisa langsung dicoba.',
        date: D, category: C, tags: ['algoritma untuk anak', 'pengertian algoritma', 'coding untuk anak', 'logika anak', 'latihan algoritma'], cta: 'pixelkode',
        ctaNote: 'Latihan di artikel ini adalah cuplikan dari Pelajaran 1 PixelKode. Versi lengkapnya punya 5 level bertahap, petunjuk bertingkat saat anak macet, dan pemeriksaan otomatis.',
        lead: 'Algoritma terdengar seperti kata untuk ilmuwan, padahal setiap pagi anak Anda menjalankan beberapa algoritma: bangun, mandi, sikat gigi, memakai seragam. Artikel ini menunjukkan cara menjelaskan algoritma dengan bahasa anak, kesalahan yang paling sering terjadi, dan latihan bertingkat bersama Robo yang bisa langsung dimainkan.',
        body: [
            { h2: 'Penjelasan untuk anak dalam tiga kalimat' },
            { callout: '"Algoritma adalah urutan langkah untuk menyelesaikan sesuatu. Kalau urutannya benar, hasilnya benar. Komputer sangat patuh: ia menjalankan langkah persis seperti yang kita tulis, tidak lebih dan tidak kurang."', kind: 'info', title: 'Bisa dibacakan langsung ke anak' },
            `Kalimat terakhir itu kunci. Manusia bisa menebak maksud kita. Kalau kita bilang "ambilkan gelas", orang lain tahu harus berjalan ke dapur dulu. Komputer tidak. Ia hanya melakukan yang tertulis. Pemahaman inilah yang membuat anak mulai berpikir teliti.`,

            { h2: 'Contoh algoritma sehari-hari' },
            { svg: 'flow', label: 'Algoritma menyikat gigi', steps: [{ t: 'Ambil sikat', d: 'dan pasta gigi' }, { t: 'Beri pasta', d: 'sebesar biji jagung' }, { t: 'Sikat gigi', d: 'atas, bawah, dalam' }, { t: 'Berkumur', d: 'buang airnya' }, { t: 'Cuci sikat', d: 'simpan di tempatnya' }], caption: 'Tanyakan ke anak: apa yang terjadi kalau langkah 3 dan 4 ditukar?' },
            `Ajak anak menukar urutan dengan sengaja. "Berkumur dulu, baru sikat gigi" hasilnya mulut penuh busa. "Pakai sepatu dulu, baru kaus kaki" hasilnya lucu. Lewat contoh konyol, anak paham bahwa <b>urutan menentukan hasil</b>.`,
            { table: { head: ['Kegiatan', 'Contoh langkah yang sering terlewat', 'Pelajaran'], rows: [
                ['Membuat teh manis', 'Merebus air, atau mengaduk', 'Langkah yang "sudah jelas" bagi kita tetap harus ditulis'],
                ['Berangkat sekolah', 'Mengunci pintu', 'Algoritma yang baik memikirkan akhir tugas'],
                ['Main petak umpet', 'Menghitung sampai berapa', 'Langkah butuh angka atau batas yang jelas'],
            ] } },

            { h2: 'Tiga ciri algoritma yang baik' },
            { ul: [
                '<b>Jelas.</b> Setiap langkah hanya punya satu arti. "Belok" kurang jelas; "belok kanan" jelas.',
                '<b>Berurutan.</b> Langkah dijalankan dari atas ke bawah, satu per satu.',
                '<b>Selesai.</b> Algoritma punya akhir. Kalau tidak pernah selesai, ada yang salah, kecuali memang dirancang berulang terus seperti lampu lalu lintas.',
            ] },
            `Untuk anak kelas atas SD, tambahkan ciri keempat: <b>efisien</b>. Dua algoritma bisa sama-sama benar, tetapi yang satu lebih pendek. Di kelas coding, ini sering dihadiahi "bintang efisiensi".`,

            { h2: 'Latihan bertingkat bersama Robo' },
            `Robo hanya mengerti tiga perintah: <b>maju 1 langkah</b>, <b>belok kiri</b>, dan <b>belok kanan</b>. Belok artinya berputar di tempat, Robo tidak pindah kotak. Di level tertentu ada permata 💎 yang harus diambil dengan perintah <b>ambil permata</b> sambil berdiri di atasnya.`,
            { w: 'robo', title: 'Latihan algoritma: 4 level', desc: 'Tips untuk orang tua: biarkan anak menghitung kotak dengan jarinya di layar. Itu strategi yang bagus, bukan curang.', levels: [
                { name: 'Langkah pertama', goal: 'Bawa Robo ke bendera 🏁.', map: ['#####', '#>.F#', '#####'], max: 2 },
                { name: 'Belokan', goal: 'Robo menghadap kanan, bendera di bawah. Kapan Robo harus belok?', map: ['#####', '#>.##', '##.##', '##F##', '#####'], max: 4 },
                { name: 'Permata pertama', goal: 'Ambil permata 💎, lalu pergi ke bendera.', map: ['######', '#>*.F#', '######'], max: 4 },
                { name: 'Zig-zag', goal: 'Ambil kedua permata. Jalannya berkelok!', map: ['#######', '#>*####', '##.*###', '###.F##', '#######'], max: 11 },
            ] },
            { callout: 'Kalau Robo menabrak dinding, jangan langsung memberi jawaban. Tanyakan: "Di langkah ke berapa Robo mulai salah jalan?" Menemukan langkah yang salah adalah keterampilan debugging, dan itu sama pentingnya dengan menyusun langkah yang benar.', kind: 'good', title: 'Saat anak salah' },

            { h2: 'Kesalahan yang paling sering terjadi' },
            { w: 'cards', title: 'Ketuk untuk melihat cara membantunya', items: [
                { tag: 'Kesalahan', front: 'Bingung kiri dan kanan dari sudut pandang Robo.', backTag: 'Bantu dengan', back: 'Minta anak berdiri dan menghadap arah yang sama dengan Robo, lalu memutar badannya sendiri. Perspektif tubuh membantu.' },
                { tag: 'Kesalahan', front: 'Mengira belok sekaligus maju.', backTag: 'Bantu dengan', back: 'Mainkan robot manusia: "belok kanan" artinya hanya berputar di tempat. Untuk pindah harus "maju".' },
                { tag: 'Kesalahan', front: 'Menyusun semua langkah sekaligus lalu bingung saat gagal.', backTag: 'Bantu dengan', back: 'Ajarkan membangun bertahap: susun 2-3 langkah, jalankan, cek, lalu tambah. Programmer profesional juga bekerja seperti ini.' },
                { tag: 'Kesalahan', front: 'Lupa perintah "ambil" atau mengambil di kotak yang salah.', backTag: 'Bantu dengan', back: 'Ucapkan keras-keras setiap langkah: "maju, sekarang aku di atas permata, ambil".' },
            ] },

            { h2: 'Dari algoritma ke program' },
            `Algoritma adalah rencananya, <b>program</b> adalah algoritma yang ditulis dalam bahasa yang dimengerti komputer. Di Scratch, algoritma "sapa lalu berjalan" ditulis dengan blok seperti ini:`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['looks', 'katakan (Halo!) selama (2) detik'], ['motion', 'gerak (100) langkah'], ['looks', 'katakan (Aku sampai!)']], caption: 'Tiga langkah algoritma menjadi tiga blok. Komputer menjalankannya dari atas ke bawah.' },
            `Setelah paham algoritma linear (lurus tanpa cabang), anak siap ke konsep berikutnya: <b>pengulangan</b> untuk langkah yang sama, lalu <b>percabangan</b> untuk memilih langkah berdasarkan keadaan. Urutan inilah yang dipakai hampir semua kurikulum coding anak, termasuk <a href="${pk('algoritma-untuk-anak-penjelasan-dan-latihan')}" target="_blank" rel="noopener">pelajaran gratis di PixelKode</a> yang bisa dicoba anak tanpa mendaftar.`,
        ],
        faq: [
            ['Apa pengertian algoritma untuk anak SD?', 'Algoritma adalah urutan langkah yang jelas untuk menyelesaikan sesuatu, misalnya langkah menyikat gigi atau resep membuat teh.'],
            ['Apa contoh algoritma dalam kehidupan sehari-hari?', 'Resep masakan, petunjuk merakit mainan, langkah menyeberang jalan, dan rutinitas pagi sebelum sekolah.'],
            ['Apa bedanya algoritma dan program?', 'Algoritma adalah rencana langkahnya. Program adalah algoritma yang ditulis dalam bahasa yang dimengerti komputer, seperti blok Scratch atau Python.'],
            ['Bagaimana jika anak terus salah?', 'Kecilkan langkahnya. Minta anak menjalankan program setelah 2-3 blok saja, lalu tambah sedikit demi sedikit.'],
        ],
        sources: [
            ['CS Unplugged: aktivitas algoritma tanpa komputer', 'https://www.csunplugged.org/'],
            ['Code.org: kurikulum ilmu komputer untuk sekolah dasar', 'https://code.org/'],
            ['Wing, J. M. (2006). Computational Thinking', 'https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
        ],
    },
];
