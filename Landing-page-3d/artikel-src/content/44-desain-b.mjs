const D = '2026-10-28';
const C = 'Desain Pembelajaran';

export default [
    {
        slug: 'merancang-e-learning-yang-tidak-membosankan',
        title: 'Merancang E-Learning yang Tidak Membosankan',
        description: 'Kenapa banyak e-learning membosankan dan cara memperbaikinya: dari klik-lanjut ke skenario, latihan bermakna, umpan balik, dan playground interaktif.',
        date: D, category: C, tags: ['e-learning', 'desain e-learning', 'pembelajaran digital', 'pelatihan online', 'interaktivitas'], cta: 'jasa',
        lead: 'Banyak e-learning korporat berpola sama: slide berisi teks, tombol "lanjut", lalu kuis pilihan ganda di akhir. Peserta mengklik secepat mungkin agar cepat selesai. Masalahnya bukan medium digital, melainkan desain yang memperlakukan peserta sebagai pembaca, bukan pelaku. Berikut cara mengubahnya, berdasarkan pengalaman saya membangun playground interaktif untuk program pelatihan.',
        body: [
            { h2: 'Gejala e-learning yang membosankan' },
            { ul: ['Interaksi hanya "klik lanjut" atau membuka tab berisi teks.', 'Kuis menguji hafalan definisi, bukan keputusan kerja.', 'Tidak ada konsekuensi: jawaban salah langsung diberi tahu benarnya.', 'Satu jalur untuk semua peserta, baik pemula maupun yang sudah mahir.', 'Diukur dari tingkat penyelesaian, bukan perubahan kerja.'] },

            { h2: 'Prinsip 1: mulai dari keputusan, bukan informasi' },
            `Tanyakan: <i>keputusan apa yang harus diambil peserta dalam pekerjaannya?</i> Lalu buat latihan berupa situasi yang memaksa mereka mengambil keputusan itu. Cathy Moore menyebut pendekatan ini "action mapping": dari tujuan bisnis, ke tindakan yang dibutuhkan, ke latihan realistis, baru kemudian informasi secukupnya.`,
            { svg: 'flow', label: 'Action mapping disederhanakan', steps: [{ t: 'Tujuan bisnis', d: 'churn turun 10%' }, { t: 'Tindakan kerja', d: 'hubungi akun berisiko dalam 48 jam' }, { t: 'Latihan', d: 'skenario memilih akun & pesan' }, { t: 'Informasi minimum', d: 'hanya yang dibutuhkan latihan' }] },

            { h2: 'Prinsip 2: skenario dengan konsekuensi' },
            { w: 'compare', title: 'Kuis biasa vs skenario', tabs: [
                { label: 'Kuis biasa', html: '<b>Pertanyaan:</b> Apa kepanjangan NPS?<br>a) Net Promoter Score b) New Product Sales c) Net Profit Share<br><br>Menguji hafalan. Peserta bisa menjawab benar tanpa tahu cara memakainya.' },
                { label: 'Skenario', html: '<b>Situasi:</b> Pelanggan B2B memberi skor NPS 4 dan menulis "laporan sering terlambat". Kontraknya habis 6 minggu lagi. Apa langkah pertamamu?<br>a) Kirim email promo fitur baru<br>b) Telepon untuk memahami masalah laporan dan sepakati perbaikan<br>c) Tunggu sampai mendekati perpanjangan<br><br>Setiap pilihan membawa ke kelanjutan cerita yang berbeda, dan umpan baliknya menjelaskan dampak.' },
            ] },

            { h2: 'Prinsip 3: playground, bukan sekadar halaman' },
            `Untuk keterampilan digital, cara terbaik belajar adalah melakukan di lingkungan yang aman. Playground bisa berupa simulasi dashboard, editor kode di browser, kalkulator kasus bisnis, atau papan tempel ide. Peserta boleh salah tanpa merusak sistem sungguhan.`,
            { w: 'cards', title: 'Ketuk untuk contoh playground', items: [
                { tag: 'Coding', front: 'Editor Python di browser dengan tes otomatis.', backTag: 'Manfaat', back: 'Umpan balik instan: tes merah atau hijau, tanpa menunggu pengajar.' },
                { tag: 'UX', front: 'Prototipe yang harus diperbaiki peserta.', backTag: 'Manfaat', back: 'Peserta menandai masalah usability dan membandingkan dengan temuan pakar.' },
                { tag: 'Bisnis', front: 'Kalkulator retensi pelanggan.', backTag: 'Manfaat', back: 'Ubah angka churn dan lihat dampaknya ke pendapatan tahunan.' },
                { tag: 'Dokumen kerja', front: 'Hasil latihan bisa diekspor.', backTag: 'Manfaat', back: 'Peserta membawa pulang rencana tindakan atau analisis yang langsung dipakai di pekerjaan.' },
            ] },

            { h2: 'Prinsip 4: umpan balik yang mengajar' },
            `"Salah, jawaban yang benar B" tidak mengajarkan apa pun. Umpan balik yang baik menjelaskan <b>mengapa</b>, menunjukkan <b>konsekuensi</b>, dan memberi kesempatan <b>mencoba lagi</b>.`,
            { code: 'Kurang:  "Salah. Jawaban yang benar adalah B."\n\nLebih baik: "Email promo saat pelanggan sedang kecewa sering dianggap\n           tidak peduli. Dalam data tim kita, akun seperti ini lebih\n           sering tidak memperpanjang. Coba pilih langkah yang lebih dulu\n           menyelesaikan keluhannya."' },

            { h2: 'Prinsip 5: hormati waktu dan kemampuan peserta' },
            { ul: ['Izinkan peserta yang sudah mahir mengikuti tes awal dan melewati bagian yang sudah dikuasai.', 'Pecah modul menjadi bagian 5-10 menit.', 'Tampilkan perkiraan durasi di setiap bagian.', 'Pastikan berjalan di ponsel bila peserta belajar di sela kerja.', 'Ikuti prinsip aksesibilitas: kontras, teks alternatif, subtitle, navigasi keyboard.'] },
            { w: 'checklist', title: 'Audit modul e-learning Anda', items: ['Ada tujuan berupa tindakan kerja, bukan "memahami".', 'Minimal setengah interaksi meminta peserta mengambil keputusan.', 'Umpan balik menjelaskan alasan dan konsekuensi.', 'Ada skenario berdasarkan kasus nyata organisasi.', 'Peserta mahir bisa melewati bagian yang dikuasai.', 'Bagian berdurasi pendek dan jelas.', 'Diukur dampaknya ke pekerjaan, tidak hanya penyelesaian.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pertanyaan pertama dalam action mapping?', options: ['Slide apa yang dibutuhkan?', 'Tujuan bisnis apa yang ingin dicapai?', 'Warna tema apa?'], answer: 1, why: 'Desain dimulai dari tujuan bisnis yang terukur.' },
                { q: 'Ciri umpan balik yang mengajar?', options: ['Hanya menyebut jawaban benar', 'Menjelaskan alasan dan konsekuensi, lalu memberi kesempatan mencoba lagi', 'Menampilkan skor saja'], answer: 1, why: 'Peserta belajar dari memahami kesalahan.' },
            ] },
        ],
        faq: [
            ['Alat apa untuk membuat e-learning interaktif?', 'Articulate Storyline/Rise, iSpring, Adobe Captivate, H5P (gratis dan terbuka), atau halaman web buatan sendiri dengan HTML dan JavaScript untuk kebutuhan yang lebih khusus.'],
            ['Apakah gamifikasi menyelesaikan masalah e-learning membosankan?', 'Poin dan lencana bisa membantu motivasi awal, tetapi tidak menggantikan latihan yang bermakna. Gamifikasi paling berhasil bila mekaniknya melatih keterampilan yang dituju.'],
            ['Berapa lama idealnya satu modul?', 'Tergantung tujuan. Pecah menjadi bagian pendek yang masing-masing punya satu tujuan dan satu latihan.'],
        ],
        sources: [
            ['Cathy Moore: Action Mapping', 'https://blog.cathy-moore.com/action-mapping-a-visual-approach-to-training-design/'],
            ['H5P: create, share and reuse interactive HTML5 content', 'https://h5p.org/'],
            ['Gamifikasi pembelajaran (artikel terkait)', 'https://muchson.web.id/artikel/gamifikasi-pembelajaran-cara-membuatnya-efektif/'],
        ],
    },

    {
        slug: 'blended-learning-model-dan-contohnya',
        title: 'Blended Learning: Model, Contoh, dan Cara Merancangnya',
        description: 'Apa itu blended learning, empat model populer, contoh untuk sekolah dan pelatihan korporat, serta cara membagi kegiatan daring dan tatap muka.',
        date: D, category: C, tags: ['blended learning', 'pembelajaran campuran', 'hybrid learning', 'pembelajaran daring', 'desain kurikulum'], cta: 'jasa',
        lead: 'Blended learning bukan sekadar "sebagian online, sebagian offline". Yang membuatnya efektif adalah keputusan sadar: kegiatan apa yang paling baik dilakukan sendiri secara daring, dan kegiatan apa yang membutuhkan waktu bersama. Bila salah membagi, Anda mendapat kelemahan dua dunia sekaligus.',
        body: [
            { h2: 'Apa kata penelitian?' },
            `Meta-analisis Departemen Pendidikan Amerika Serikat (Means dkk., 2010) menemukan kondisi pembelajaran daring rata-rata sedikit lebih baik daripada tatap muka, dan perbedaannya lebih besar pada pembelajaran campuran. Para peneliti memberi catatan penting: kelompok blended sering mendapat waktu belajar dan elemen pembelajaran tambahan, sehingga keunggulannya tidak bisa dianggap karena medianya semata. Pelajarannya: <b>desain</b> yang membuat perbedaan.`,

            { h2: 'Prinsip pembagian' },
            { svg: 'versus', label: 'Mana yang daring, mana yang bersama', left: { title: 'Daring mandiri', items: ['Menonton penjelasan konsep (bisa diulang)', 'Membaca dan latihan dasar', 'Kuis dengan umpan balik otomatis', 'Tempo sesuai kemampuan masing-masing'] }, right: { title: 'Bersama (tatap muka / live)', items: ['Diskusi kasus dan perdebatan', 'Latihan dengan umpan balik pengajar', 'Role play dan kerja kelompok', 'Mengatasi kebingungan yang sama'] } },

            { h2: 'Empat model populer' },
            `Christensen Institute mengelompokkan blended learning ke beberapa model:`,
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Rotation', front: 'Peserta berotasi antar stasiun atau mode sesuai jadwal.', backTag: 'Contoh', back: 'Station rotation di kelas: 20 menit di laptop, 20 menit kelompok kecil dengan guru, 20 menit proyek. Termasuk flipped classroom.' },
                { tag: 'Flex', front: 'Materi utama daring, pengajar hadir untuk membantu sesuai kebutuhan.', backTag: 'Contoh', back: 'Bootcamp coding: peserta mengerjakan modul sendiri di ruang belajar, mentor berkeliling dan membuka sesi kecil.' },
                { tag: 'A la carte', front: 'Satu atau beberapa mata pelajaran sepenuhnya daring, sisanya tatap muka.', backTag: 'Contoh', back: 'Sekolah menawarkan kelas pemrograman lanjutan secara daring karena tidak punya guru khusus.' },
                { tag: 'Enriched virtual', front: 'Sebagian besar daring, dengan sesi tatap muka wajib berkala.', backTag: 'Contoh', back: 'Program pelatihan korporat: modul daring mingguan plus satu lokakarya bersama tiap bulan.' },
            ] },

            { h2: 'Contoh desain: program 4 minggu untuk tim customer success' },
            { svg: 'timeline', label: 'Satu minggu dalam program', events: [['Senin', 'Daring mandiri (45 menit)', 'Video pendek konsep + kuis + latihan kalkulator churn.'], ['Rabu', 'Live session (90 menit)', 'Bahas kesalahan umum dari kuis, role play telepon pelanggan.'], ['Kamis-Jumat', 'Praktik di pekerjaan', 'Terapkan satu teknik pada akun nyata, catat hasilnya.'], ['Jumat', 'Refleksi (15 menit)', 'Tulis singkat apa yang berhasil dan tidak di forum.']] },
            { callout: 'Gunakan hasil kuis daring sebelum sesi live untuk menentukan apa yang dibahas. Bila 70% peserta salah di soal yang sama, itu agenda pertama sesi bersama.', kind: 'info', title: 'Hubungkan kedua dunia' },

            { h2: 'Kesalahan umum' },
            { ul: ['<b>Mengulang materi yang sama</b> di sesi live, sehingga peserta yang sudah belajar daring merasa membuang waktu.', '<b>Bagian daring terlalu panjang</b> sehingga tidak dikerjakan.', '<b>Tidak ada akuntabilitas:</b> sesi live mengasumsikan semua sudah belajar daring, padahal tidak.', '<b>Teknologi rumit:</b> peserta harus masuk ke empat platform berbeda.'] },
            { w: 'checklist', title: 'Rancang program blended Anda', items: ['Setiap kegiatan diberi alasan mengapa daring atau bersama.', 'Bagian daring pendek dan berakhir dengan latihan.', 'Data dari bagian daring dipakai untuk merancang sesi bersama.', 'Sesi bersama fokus pada praktik dan diskusi.', 'Ada tugas penerapan di pekerjaan atau kehidupan nyata.', 'Platform sesedikit mungkin dan mudah diakses dari ponsel.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kegiatan yang paling cocok untuk sesi bersama?', options: ['Menonton video konsep', 'Role play dan diskusi kasus dengan umpan balik', 'Membaca teks panjang'], answer: 1, why: 'Waktu bersama berharga untuk interaksi.' },
                { q: 'Flipped classroom termasuk model...', options: ['Rotation', 'A la carte', 'Flex'], answer: 0, why: 'Peserta berotasi antara belajar daring di rumah dan kegiatan di kelas.' },
            ] },
        ],
        faq: [
            ['Apa beda blended learning dan hybrid learning?', 'Istilahnya sering tumpang tindih. Hybrid kadang berarti sebagian peserta hadir fisik dan sebagian daring di sesi yang sama; blended menekankan perpaduan belajar mandiri daring dan kegiatan bersama.'],
            ['Apakah cocok untuk anak SD?', 'Bisa, dengan porsi daring yang pendek dan pendampingan orang dewasa. Station rotation di kelas sering lebih cocok daripada tugas daring di rumah.'],
            ['Platform apa yang dibutuhkan?', 'Cukup satu LMS sederhana atau Google Classroom untuk materi dan kuis, plus alat konferensi video bila sesi bersama dilakukan secara live.'],
        ],
        sources: [
            ['Means et al. (2010): Evaluation of Evidence-Based Practices in Online Learning, U.S. Department of Education', 'https://www.sri.com/publication/education-learning-pubs/digital-learning-pubs/evaluation-of-evidence-based-practices-in-online-learning-a-meta-analysis-and-review-of-online-learning-studies/'],
            ['Blended Learning Universe (Christensen Institute): Models', 'https://www.blendedlearning.org/models/'],
            ['Flipped classroom: cara menerapkan (artikel terkait)', 'https://muchson.web.id/artikel/flipped-classroom-cara-menerapkan-di-kelas/'],
        ],
    },

    {
        slug: 'flipped-classroom-cara-menerapkan-di-kelas',
        title: 'Flipped Classroom: Cara Menerapkan agar Benar-Benar Berhasil',
        description: 'Panduan flipped classroom untuk guru, dosen, dan trainer: bukti penelitian, contoh alur satu pertemuan, cara memastikan peserta siap, dan kesalahan umum.',
        date: D, category: C, tags: ['flipped classroom', 'kelas terbalik', 'pembelajaran aktif', 'metode mengajar', 'blended learning'], cta: 'jasa',
        lead: 'Dalam kelas tradisional, penjelasan terjadi di kelas dan latihan di rumah, padahal saat latihanlah peserta paling butuh bantuan. Flipped classroom membalik urutannya: penjelasan dipelajari sebelum kelas, dan waktu bersama dipakai untuk latihan, diskusi, dan memecahkan masalah.',
        body: [
            { h2: 'Apa yang dibalik' },
            { svg: 'versus', label: 'Kelas tradisional dan kelas terbalik', left: { title: 'Tradisional', items: ['Di kelas: mendengar penjelasan', 'Di rumah: mengerjakan latihan sendirian', 'Bantuan tidak ada saat paling dibutuhkan'] }, right: { title: 'Terbalik', items: ['Sebelum kelas: video/bacaan pendek + kuis', 'Di kelas: latihan, diskusi, proyek', 'Pengajar membantu saat peserta kesulitan'] } },

            { h2: 'Apakah berhasil?' },
            `Meta-analisis Strelan, Osborn, dan Palmer (2020) terhadap 198 studi dengan lebih dari 33 ribu siswa menemukan flipped classroom rata-rata memberi efek positif terhadap prestasi dibanding kelas tradisional, di berbagai disiplin dan jenjang. Efeknya lebih besar ketika waktu di kelas benar-benar diisi pembelajaran aktif dan ada kuis untuk memastikan persiapan. Ini sejalan dengan meta-analisis Freeman dkk. (2014) bahwa di kelas sains dan teknik, mahasiswa di kelas ceramah sekitar 1,5 kali lebih mungkin gagal dibanding kelas dengan pembelajaran aktif.`,

            { h2: 'Contoh satu pertemuan: SQL JOIN' },
            { table: { head: ['Waktu', 'Kegiatan'], rows: [['H-2', 'Video 7 menit tentang INNER dan LEFT JOIN + 4 soal kuis daring.'], ['H-1', 'Pengajar melihat hasil kuis: 60% salah soal "baris tanpa pasangan".'], ['Kelas 0-10 menit', 'Bahas satu soal yang paling banyak salah, dengan diagram.'], ['10-50 menit', 'Latihan berpasangan: 6 soal bertingkat di database simulasi toko.'], ['50-75 menit', 'Tantangan kelompok: jawab 3 pertanyaan "manajer" dari data.'], ['75-90 menit', 'Tiap kelompok menjelaskan satu query; tiket keluar individu.']] } },

            { h2: 'Masalah terbesar: peserta tidak menyiapkan diri' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Masalah', front: 'Video terlalu panjang.', backTag: 'Solusi', back: 'Potong menjadi 5-10 menit per konsep. Lebih baik dua video pendek daripada satu yang panjang.' },
                { tag: 'Masalah', front: 'Tidak ada alasan untuk menonton.', backTag: 'Solusi', back: 'Kuis singkat bernilai kecil sebelum kelas, dan kegiatan kelas yang memang membutuhkan materi itu.' },
                { tag: 'Masalah', front: 'Peserta yang tidak menyiapkan diri tertinggal total.', backTag: 'Solusi', back: 'Sediakan 10 menit pertama untuk "mengejar" di pojok kelas, atau ringkasan satu halaman.' },
                { tag: 'Masalah', front: 'Pengajar mengulang seluruh materi di kelas.', backTag: 'Solusi', back: 'Hanya bahas yang terbukti sulit dari hasil kuis. Mengulang semua menghukum yang sudah belajar.' },
            ] },

            { h2: 'Membuat materi pra-kelas' },
            { ul: ['Satu konsep per video, dengan tujuan disebut di awal.', 'Tunjukkan contoh, bukan hanya teori.', 'Sisipkan pertanyaan di tengah video atau tepat setelahnya.', 'Tidak perlu produksi mahal: rekaman layar dengan suara jelas sudah cukup.', 'Sediakan alternatif teks bagi yang tidak bisa memutar video (kuota, aksesibilitas).'] },
            { w: 'checklist', title: 'Siap mencoba flipped classroom?', items: ['Saya punya satu topik yang biasanya butuh banyak latihan.', 'Materi pra-kelas maksimal 15-20 menit total.', 'Ada kuis pendek sebelum kelas.', 'Kegiatan kelas membutuhkan materi pra-kelas.', 'Saya memakai hasil kuis untuk merencanakan kelas.', 'Ada rencana untuk peserta yang belum menyiapkan diri.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Inti flipped classroom adalah...', options: ['Kelas tanpa pengajar', 'Penjelasan sebelum kelas, latihan aktif di kelas', 'Semua serba video'], answer: 1, why: 'Waktu bersama dipakai untuk bagian yang butuh bantuan.' },
                { q: 'Cara terbaik mendorong peserta menyiapkan diri?', options: ['Video 60 menit', 'Kuis singkat dan kegiatan kelas yang membutuhkan materi itu', 'Mengulang semua materi di kelas'], answer: 1, why: 'Ada alasan dan manfaat nyata untuk menyiapkan diri.' },
            ] },
        ],
        faq: [
            ['Apakah flipped classroom cocok untuk semua topik?', 'Paling cocok untuk topik yang butuh latihan dan penerapan. Untuk topik yang sangat baru dan abstrak, penjelasan langsung dengan interaksi di kelas kadang tetap lebih baik.'],
            ['Bagaimana dengan siswa yang tidak punya internet di rumah?', 'Sediakan materi yang bisa diunduh di sekolah, versi cetak, atau waktu menonton di perpustakaan sekolah.'],
            ['Apakah harus membuat video sendiri?', 'Tidak wajib. Video berkualitas dari sumber terbuka boleh dipakai, asalkan sesuai tujuan dan diberi kuis pendamping.'],
        ],
        sources: [
            ['Strelan, Osborn, Palmer (2020): The flipped classroom, a meta-analysis, Educational Research Review', 'https://doi.org/10.1016/j.edurev.2020.100314'],
            ['Freeman et al. (2014): Active learning increases student performance in science, engineering, and mathematics, PNAS', 'https://doi.org/10.1073/pnas.1319030111'],
            ['Video pembelajaran yang efektif (artikel terkait)', 'https://muchson.web.id/artikel/video-pembelajaran-yang-efektif-durasi-dan-struktur/'],
        ],
    },

    {
        slug: 'memilih-lms-moodle-google-classroom-dan-lainnya',
        title: 'Memilih LMS: Moodle, Google Classroom, dan Lainnya',
        description: 'Panduan memilih LMS untuk sekolah, kampus, kursus online, dan perusahaan: fitur penting, perbandingan Moodle, Google Classroom, Canvas, dan biaya.',
        date: D, category: C, tags: ['LMS', 'Moodle', 'Google Classroom', 'platform e-learning', 'pembelajaran daring'], cta: 'jasa',
        lead: 'Memilih LMS sering dimulai dari daftar fitur yang panjang. Padahal pertanyaan yang lebih penting adalah: siapa penggunanya, siapa yang akan mengelolanya, dan apa yang benar-benar dibutuhkan dalam enam bulan pertama? LMS yang paling lengkap belum tentu yang paling dipakai.',
        body: [
            { h2: 'Fungsi inti sebuah LMS' },
            { ul: ['Menyimpan dan mengatur materi per kursus atau kelas.', 'Tugas, kuis, dan penilaian.', 'Mendaftarkan peserta dan peran (pengajar, siswa, admin).', 'Melacak kemajuan dan laporan.', 'Komunikasi: pengumuman, forum, pesan.', 'Integrasi: video, rapat daring, standar seperti SCORM, xAPI, atau LTI.'] },

            { h2: 'Perbandingan pilihan populer' },
            { table: { head: ['Platform', 'Cocok untuk', 'Kelebihan', 'Perhatikan'], rows: [
                ['<b>Google Classroom</b>', 'Sekolah, guru perorangan', 'Sangat mudah, menyatu dengan Google Workspace', 'Fitur laporan dan kustomisasi terbatas'],
                ['<b>Moodle</b>', 'Kampus, sekolah, lembaga pelatihan', 'Open source, sangat lengkap, banyak plugin', 'Butuh server dan admin yang paham'],
                ['<b>Canvas</b>', 'Universitas', 'Antarmuka modern, integrasi kuat', 'Biaya lisensi untuk institusi'],
                ['<b>Platform kursus</b> (Teachable, Thinkific, Kajabi)', 'Menjual kursus online', 'Pembayaran dan halaman penjualan bawaan', 'Biaya bulanan, kurang cocok untuk kelas formal'],
                ['<b>LMS korporat</b> (Docebo, TalentLMS, dan lainnya)', 'Pelatihan karyawan', 'Laporan kepatuhan, integrasi HR', 'Biaya per pengguna'],
                ['<b>Buatan sendiri</b>', 'Kebutuhan sangat khusus', 'Sesuai persis kebutuhan', 'Biaya pengembangan dan perawatan jangka panjang'],
            ] } },

            { h2: 'Pilih berdasarkan situasi Anda' },
            { w: 'choose', title: 'Jawab tiga pertanyaan', questions: [
                { q: 'Siapa Anda?', options: [{ t: 'Guru atau sekolah', add: { gc: 3, moodle: 1 } }, { t: 'Kampus atau lembaga pelatihan besar', add: { moodle: 3 } }, { t: 'Kreator yang menjual kursus', add: { kursus: 3 } }, { t: 'HR atau L&D perusahaan', add: { korporat: 3 } }] },
                { q: 'Siapa yang mengelola teknisnya?', options: [{ t: 'Tidak ada tim TI', add: { gc: 2, kursus: 2, korporat: 1 } }, { t: 'Ada tim TI atau vendor', add: { moodle: 2 } }] },
                { q: 'Kebutuhan laporan?', options: [{ t: 'Cukup nilai tugas', add: { gc: 2 } }, { t: 'Laporan lengkap, sertifikat, kepatuhan', add: { moodle: 1, korporat: 2 } }, { t: 'Penjualan dan pembayaran', add: { kursus: 2 } }] },
            ], results: { gc: { title: 'Google Classroom atau sejenisnya', text: 'Mulai dari yang paling sederhana. Fokus pada kualitas materi dan tugas. Pindah ke LMS lebih lengkap bila memang kebutuhan bertambah.' }, moodle: { title: 'Moodle layak dipertimbangkan', text: 'Fleksibel dan tanpa lisensi, cocok untuk institusi. Siapkan hosting yang andal, admin, dan pelatihan pengajar. Layanan Moodle terkelola bisa mengurangi beban teknis.' }, kursus: { title: 'Platform kursus online', text: 'Utamakan kemudahan pembayaran, halaman penjualan, dan pengalaman peserta di ponsel. Hitung biaya bulanan terhadap jumlah peserta.' }, korporat: { title: 'LMS korporat', text: 'Utamakan laporan, integrasi dengan sistem HR, single sign-on, dan dukungan vendor. Minta uji coba dengan satu program nyata.' } } },

            { h2: 'Kriteria yang sering terlupakan' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Kriteria', front: 'Pengalaman di ponsel', backTag: 'Kenapa', back: 'Banyak peserta di Indonesia belajar terutama dari ponsel. Uji dengan ponsel kelas menengah dan koneksi biasa.' },
                { tag: 'Kriteria', front: 'Ekspor data', backTag: 'Kenapa', back: 'Pastikan nilai, peserta, dan materi bisa diekspor bila suatu saat pindah platform.' },
                { tag: 'Kriteria', front: 'Aksesibilitas', backTag: 'Kenapa', back: 'Dukungan pembaca layar, navigasi keyboard, dan subtitle penting bagi semua peserta.' },
                { tag: 'Kriteria', front: 'Lokasi dan perlindungan data', backTag: 'Kenapa', back: 'Data siswa dan karyawan termasuk data pribadi. Periksa kebijakan vendor sesuai UU Pelindungan Data Pribadi.' },
                { tag: 'Kriteria', front: 'Biaya total', backTag: 'Kenapa', back: 'Termasuk hosting, plugin, waktu admin, pelatihan, dan biaya per pengguna saat peserta bertambah.' },
            ] },
            { callout: 'Lakukan uji coba dengan satu kelas atau satu program nyata selama 4-6 minggu sebelum memutuskan untuk seluruh organisasi. Catat keluhan pengajar dan peserta.', kind: 'info', title: 'Uji dulu' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kelebihan utama Moodle?', options: ['Tanpa server', 'Open source dan sangat fleksibel', 'Paling sederhana'], answer: 1, why: 'Fleksibel, tetapi butuh pengelolaan.' },
                { q: 'Mengapa kemampuan ekspor data penting?', options: ['Agar lebih cepat', 'Agar tidak terkunci di satu vendor', 'Agar tampilan lebih bagus'], answer: 1, why: 'Data Anda harus bisa dibawa pindah.' },
            ] },
        ],
        faq: [
            ['Apa itu SCORM dan xAPI?', 'Standar agar modul e-learning bisa dipakai di berbagai LMS. SCORM lebih lama dan sangat umum; xAPI bisa mencatat kegiatan belajar di luar LMS juga.'],
            ['Apakah LMS gratis cukup untuk lembaga kursus kecil?', 'Sering cukup. Yang penting materi tertata, ada kuis, dan peserta mudah mengakses. Tambah fitur ketika benar-benar dibutuhkan.'],
            ['Perlukah membangun LMS sendiri?', 'Jarang. Membangun sendiri layak bila kebutuhan sangat khusus, misalnya playground interaktif yang tidak bisa dibuat di LMS umum. Alternatifnya, bangun komponen khusus lalu sematkan di LMS.'],
        ],
        sources: [
            ['Moodle: About Moodle (dokumentasi resmi)', 'https://docs.moodle.org/en/About_Moodle'],
            ['Google for Education: Google Classroom', 'https://edu.google.com/workspace-for-education/classroom/'],
            ['1EdTech: Learning Tools Interoperability (LTI)', 'https://www.1edtech.org/standards/lti'],
        ],
    },

    {
        slug: 'video-pembelajaran-yang-efektif-durasi-dan-struktur',
        title: 'Video Pembelajaran yang Efektif: Durasi dan Struktur',
        description: 'Membuat video pembelajaran yang ditonton sampai habis: temuan 6,9 juta sesi video edX, durasi ideal, struktur lima bagian, peralatan, dan aksesibilitas.',
        date: D, category: C, tags: ['video pembelajaran', 'membuat video belajar', 'e-learning', 'konten edukasi', 'microlearning'], cta: 'jasa',
        lead: 'Video yang Anda rekam satu jam dengan susah payah mungkin hanya ditonton beberapa menit. Bukan karena peserta malas, tetapi karena cara orang menonton video pembelajaran berbeda dengan cara kita duduk di kelas. Data dari jutaan sesi menonton memberi petunjuk yang jelas.',
        body: [
            { h2: 'Temuan dari 6,9 juta sesi menonton' },
            `Guo, Kim, dan Rubin (2014) menganalisis 6,9 juta sesi menonton video dari empat kursus di platform edX. Beberapa temuan utama:`,
            { ul: ['<b>Video pendek jauh lebih menarik.</b> Ringkasan studi ini menunjukkan waktu menonton median mencapai puncak sekitar 6 menit, berapa pun panjang videonya. Untuk video 12-40 menit, rata-rata penonton hanya menonton sebagian kecil.', '<b>Gaya santai lebih menarik</b> daripada rekaman kuliah formal di ruang kelas besar.', '<b>Tulisan tangan atau gambar langsung</b> (gaya Khan Academy) lebih menarik daripada slide statis.', '<b>Bicara cepat dengan antusias</b> lebih menarik daripada lambat dan datar.', '<b>Video tutorial</b> sering ditonton ulang dan dilompati, jadi harus mudah dinavigasi.'] },
            { svg: 'bars', label: 'Perkiraan porsi video yang ditonton (median) menurut durasi', unit: '%', data: [['< 6 menit', 100], ['9-12 menit', 50], ['12-40 menit', 20]], caption: 'Dibulatkan dari ringkasan studi Guo, Kim, Rubin (2014) oleh University of Virginia: median porsi yang ditonton mendekati 100% untuk video di bawah 6 menit, sekitar 50% untuk 9-12 menit, dan sekitar 20% untuk 12-40 menit.' },

            { h2: 'Struktur lima bagian untuk satu video' },
            { svg: 'flow', label: 'Kerangka video 5-7 menit', steps: [{ t: 'Kait (15 detik)', d: 'masalah atau pertanyaan' }, { t: 'Tujuan (10 detik)', d: '"setelah ini kamu bisa..."' }, { t: 'Inti (3-5 menit)', d: 'satu konsep, contoh konkret' }, { t: 'Cek (30 detik)', d: 'pertanyaan untuk dijawab' }, { t: 'Langkah berikutnya', d: 'latihan atau video lanjutan' }] },
            { callout: 'Satu video, satu konsep. Bila naskah Anda butuh kata "selanjutnya kita bahas topik lain", itu tanda harus dipecah menjadi dua video.', kind: 'info', title: 'Aturan emas' },

            { h2: 'Gaya bicara yang membantu' },
            { ul: ['Gunakan bahasa percakapan dan sapa penonton langsung: "kamu" atau "Anda".', 'Tunjukkan, jangan hanya bicara: layar, gambar, demo nyata.', 'Sorot bagian yang sedang dibahas (kursor, lingkaran, zoom).', 'Hindari membacakan slide. Teks di layar cukup kata kunci.', 'Wajah di awal membangun koneksi; sisanya boleh fokus ke materi.'] },

            { h2: 'Peralatan: cukup sederhana' },
            { table: { head: ['Prioritas', 'Rekomendasi', 'Alasan'], rows: [['1. Suara', 'Mikrofon clip-on atau USB sederhana, ruangan tidak bergema', 'Penonton memaafkan gambar biasa, tetapi tidak suara buruk'], ['2. Layar', 'Perekam layar (OBS gratis, atau bawaan sistem)', 'Sebagian besar video teknis adalah rekaman layar'], ['3. Cahaya', 'Hadap jendela atau lampu di depan', 'Wajah terlihat jelas'], ['4. Kamera', 'Kamera ponsel atau webcam sudah cukup', 'Paling tidak penting dibanding tiga hal di atas']] } },

            { h2: 'Aksesibilitas dan kuota' },
            { ul: ['Sediakan subtitle; manfaatnya juga untuk yang menonton tanpa suara di tempat umum.', 'Sediakan ringkasan teks atau transkrip.', 'Kompres video dan sediakan resolusi rendah untuk peserta dengan kuota terbatas.', 'Pastikan teks di layar cukup besar dibaca dari ponsel.'] },
            { w: 'checklist', title: 'Sebelum mengunggah video', items: ['Durasi di bawah 10 menit, idealnya sekitar 6.', 'Satu konsep utama saja.', 'Ada kait di 15 detik pertama.', 'Suara jelas tanpa gema.', 'Bagian yang dibahas disorot.', 'Ada pertanyaan atau latihan setelah video.', 'Subtitle tersedia.', 'Teks terbaca di layar ponsel.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Menurut studi Guo dkk., bagian produksi mana yang paling penting dijaga?', options: ['Durasi pendek dan gaya yang hidup', 'Studio mahal', 'Kamera 4K'], answer: 0, why: 'Durasi dan gaya penyampaian lebih menentukan keterlibatan.' },
                { q: 'Prioritas peralatan pertama?', options: ['Kamera', 'Mikrofon / kualitas suara', 'Lampu warna-warni'], answer: 1, why: 'Suara buruk membuat penonton cepat pergi.' },
            ] },
        ],
        faq: [
            ['Bagaimana bila materinya memang panjang?', 'Pecah menjadi seri video pendek dengan judul jelas, misalnya "Bagian 1 dari 5", dan beri latihan di antara bagian.'],
            ['Perlukah menyunting video dengan rapi?', 'Potong bagian salah dan jeda panjang. Tidak perlu efek berlebihan; kejelasan lebih penting dari kemewahan.'],
            ['Apakah boleh memakai avatar atau suara AI?', 'Boleh untuk skala dan bahasa, tetapi uji dengan peserta. Pastikan pelafalan istilah benar dan beri tahu bahwa suara dibuat AI bila diperlukan.'],
        ],
        sources: [
            ['Guo, Kim, Rubin (2014): How video production affects student engagement, L@S', 'https://doi.org/10.1145/2556325.2566239'],
            ['University of Virginia: Considerations for creating instructional videos', 'https://teaching.virginia.edu/collections/considerations-for-creating-instructional-videos/412'],
            ['Prinsip multimedia Mayer (artikel terkait)', 'https://muchson.web.id/artikel/prinsip-multimedia-mayer-untuk-materi-digital/'],
        ],
    },
];
