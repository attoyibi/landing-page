const D = '2026-10-28';
const C = 'Desain Pembelajaran';

export default [
    {
        slug: 'mengajar-pemrograman-untuk-pemula-strategi-terbukti',
        title: 'Mengajar Pemrograman untuk Pemula: Strategi yang Terbukti',
        description: 'Strategi mengajar coding untuk pemula yang didukung penelitian: PRIMM, Parsons problems, worked example, live coding, dan cara menangani error pertama.',
        date: D, category: C, tags: ['mengajar pemrograman', 'PRIMM', 'Parsons problems', 'pendidikan informatika', 'guru coding'], cta: 'jasa',
        lead: 'Saya membuat situs Latihan Python untuk mata kuliah pemrograman, tempat mahasiswa menulis dan menjalankan kode di browser lalu naik level dengan menyelesaikan tantangan. Dari pengalaman itu dan dari penelitian pendidikan komputasi, satu pelajaran paling jelas: pemula tidak belajar coding dengan langsung disuruh menulis program dari halaman kosong.',
        body: [
            { h2: 'Mengapa pemrograman sulit bagi pemula' },
            { ul: ['Sintaks yang tidak memaafkan: satu titik dua yang hilang menghentikan segalanya.', 'Konsep abstrak: variabel, alur kontrol, dan keadaan program tidak terlihat.', 'Beban kognitif tinggi: harus memikirkan masalah, sintaks, dan alat sekaligus.', 'Pesan error yang menakutkan dan dalam bahasa Inggris.'] },

            { h2: 'Strategi 1: PRIMM, baca dulu baru tulis' },
            `PRIMM dikembangkan Sue Sentance dan rekan untuk sekolah. Evaluasi di 13 sekolah dengan 493 siswa usia 11-14 menunjukkan siswa PRIMM mendapat hasil tes lebih baik daripada kelompok kontrol.`,
            { svg: 'flow', label: 'Lima tahap PRIMM', steps: [{ t: 'Predict', d: 'tebak keluarannya' }, { t: 'Run', d: 'jalankan, cek tebakan' }, { t: 'Investigate', d: 'telusuri baris demi baris' }, { t: 'Modify', d: 'ubah sedikit' }, { t: 'Make', d: 'buat versi sendiri' }] },
            { code: '# PREDICT: apa yang dicetak program ini? Tulis tebakanmu dulu.\ntotal = 0\nfor n in [4, 7, 1]:\n    total = total + n\n    print(total)\n\n# INVESTIGATE: berapa nilai total setelah putaran kedua?\n# MODIFY: ubah agar hanya menjumlah angka yang lebih dari 3.\n# MAKE: tulis program yang menghitung rata-rata nilai.' },

            { h2: 'Strategi 2: Parsons problems' },
            `Potongan kode yang benar diacak; peserta menyusunnya dalam urutan yang tepat. Ini memisahkan latihan <b>logika dan urutan</b> dari beban mengetik sintaks. Penelitian Ericson dan rekan (2017) menemukan mahasiswa menyelesaikan Parsons problems jauh lebih cepat daripada menulis atau memperbaiki kode yang setara, dengan hasil belajar yang serupa.`,
            { code: 'Susun baris berikut agar program mencetak angka genap dari 1-10:\n\n    print(i)\nfor i in range(1, 11):\n        if i % 2 == 0:\n\n(Perhatikan juga indentasinya!)' },

            { h2: 'Strategi 3: worked example dan fading' },
            `Tunjukkan contoh lengkap dengan penjelasan setiap langkah, lalu kurangi bantuan bertahap: contoh lengkap, contoh dengan bagian kosong, soal mirip, soal baru. Ini sejalan dengan teori beban kognitif: pemula belajar lebih efisien dari contoh daripada dari mencoba-coba tanpa arah.`,

            { h2: 'Strategi 4: live coding, termasuk membuat kesalahan' },
            `Mengetik kode di depan kelas, bukan menampilkan kode jadi, memperlihatkan proses berpikir: menulis sedikit, menjalankan, membaca error, memperbaiki. Membuat kesalahan secara wajar di depan peserta mengajarkan bahwa error adalah bagian normal dari pemrograman.`,
            { w: 'cards', title: 'Ketuk untuk tips live coding', items: [
                { tag: 'Tips', front: 'Pelan dan perbesar huruf.', backTag: 'Kenapa', back: 'Peserta di belakang dan di ponsel perlu bisa membaca. Ukuran 18-24 pt di editor.' },
                { tag: 'Tips', front: 'Ucapkan apa yang dipikirkan.', backTag: 'Kenapa', back: '"Saya akan cek dulu tipe datanya karena input() selalu menghasilkan teks."' },
                { tag: 'Tips', front: 'Tanya prediksi sebelum menjalankan.', backTag: 'Kenapa', back: '"Menurut kalian, apa yang keluar?" Membuat semua peserta berpikir, bukan menonton.' },
                { tag: 'Tips', front: 'Biarkan error terjadi.', backTag: 'Kenapa', back: 'Tunjukkan cara membaca pesan error dari baris terakhir dan nomor barisnya.' },
            ] },

            { h2: 'Strategi 5: umpan balik otomatis' },
            `Tes otomatis yang langsung berjalan saat peserta menekan "jalankan" memberi umpan balik dalam hitungan detik. Rancang pesan untuk kesalahan umum: "Hasilmu 10, seharusnya 12. Apakah angka terakhir di list ikut terjumlah?" jauh lebih membantu daripada "Test failed".`,
            { callout: 'Pemula sering mengira error berarti mereka "tidak berbakat". Normalisasikan: tampilkan statistik bahwa hampir semua orang mengalami error yang sama di latihan itu.', kind: 'info', title: 'Error itu normal' },
            { w: 'checklist', title: 'Rancang satu pertemuan coding', items: ['Mulai dengan membaca dan memprediksi kode, bukan menulis dari nol.', 'Satu konsep baru per pertemuan.', 'Live coding dengan kesalahan yang wajar.', 'Satu Parsons problem sebelum latihan menulis.', 'Latihan bertingkat dengan tes otomatis.', 'Pasangkan peserta (pair programming) untuk latihan sulit.', 'Tiket keluar: satu soal prediksi atau modifikasi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tahap pertama PRIMM?', options: ['Make', 'Predict', 'Run'], answer: 1, why: 'Peserta menebak keluaran sebelum menjalankan.' },
                { q: 'Keunggulan Parsons problems?', options: ['Melatih logika tanpa beban mengetik sintaks', 'Menggantikan semua latihan menulis', 'Tidak perlu berpikir'], answer: 0, why: 'Fokus pada urutan dan struktur.' },
            ] },
        ],
        faq: [
            ['Bahasa apa yang terbaik untuk pemula?', 'Python sering dipilih karena sintaksnya sederhana. Untuk anak, bahasa blok seperti Scratch menghilangkan masalah sintaks sama sekali.'],
            ['Bolehkah pemula memakai AI saat belajar coding?', 'Dengan batasan. Minta AI menjelaskan error atau memberi petunjuk, bukan menulis seluruh solusi. Latihan tanpa AI tetap perlu untuk membangun dasar.'],
            ['Berapa lama sampai peserta bisa membuat program sendiri?', 'Program kecil yang berguna biasanya bisa dibuat setelah beberapa minggu latihan rutin. Yang penting latihan sering, pendek, dengan umpan balik cepat.'],
        ],
        sources: [
            ['Sentance, Waite, Kallia (2019): Teaching computer programming with PRIMM, Computer Science Education', 'https://doi.org/10.1080/08993408.2019.1608781'],
            ['Ericson, Margulieux, Rick (2017): Solving Parsons problems versus fixing and writing code, Koli Calling', 'https://doi.org/10.1145/3141880.3141895'],
            ['Raspberry Pi Foundation: PRIMM pedagogy quick read', 'https://static.raspberrypi.org/files/curriculum/quickreads/11-Pedagogy_Summary_PRIMM_V4_2023.pdf'],
        ],
    },

    {
        slug: 'pair-programming-di-kelas-dan-tim',
        title: 'Pair Programming di Kelas dan Tim: Cara Melakukannya',
        description: 'Menerapkan pair programming di kelas dan tim: peran driver dan navigator, bukti penelitian, rotasi, pairing jarak jauh, dan mengatasi pasangan yang timpang.',
        date: D, category: C, tags: ['pair programming', 'kolaborasi', 'mengajar coding', 'tim developer', 'remote pairing'], cta: 'jasa',
        lead: 'Dua orang, satu komputer, satu masalah. Kedengarannya boros, tetapi pair programming berulang kali terbukti membantu, terutama dalam pendidikan. Studi di University of California, Santa Cruz menemukan mahasiswa yang berpasangan lebih mungkin bertahan di mata kuliah pemrograman sampai ujian akhir dan lebih percaya diri dengan solusinya.',
        body: [
            { h2: 'Dua peran yang bergantian' },
            { svg: 'versus', label: 'Driver dan navigator', left: { title: 'Driver', items: ['Memegang keyboard', 'Fokus pada baris yang sedang ditulis', 'Menyuarakan apa yang dilakukan'] }, right: { title: 'Navigator', items: ['Melihat gambaran besar', 'Memeriksa kesalahan dan kasus tepi', 'Memikirkan langkah berikutnya'] } },
            `Kuncinya adalah <b>bergantian</b>, misalnya setiap 15-25 menit atau setiap selesai satu tes. Tanpa pergantian, satu orang bekerja dan satu orang menonton.`,
            { w: 'timer', title: 'Pewaktu rotasi pairing', desc: 'Bergantian peran saat waktu habis.', phases: [{ label: 'Pasangan A menjadi driver', sec: 900, hint: 'B menjadi navigator: perhatikan gambaran besar.' }, { label: 'Pasangan B menjadi driver', sec: 900, hint: 'A menjadi navigator.' }] },

            { h2: 'Apa kata penelitian' },
            { ul: ['<b>McDowell dkk. (2006)</b> di UC Santa Cruz: mahasiswa yang berpasangan lebih mungkin bertahan sampai ujian akhir, lebih menikmati tugas, dan lebih percaya diri; kesenjangan kepercayaan diri antara mahasiswa perempuan dan laki-laki mengecil. Ujian tetap dikerjakan sendiri, dan nilai ujian mereka tidak lebih rendah.', '<b>Di industri</b>, hasilnya lebih bervariasi: pairing cenderung menghasilkan lebih sedikit cacat dan berbagi pengetahuan lebih baik, dengan biaya waktu tambahan. Paling bermanfaat untuk tugas rumit dan anggota baru.'] },

            { h2: 'Menerapkan di kelas' },
            { ol: ['<b>Jelaskan perannya</b> di awal dan tempel di layar.', '<b>Pasangkan dengan sengaja:</b> kemampuan yang tidak terlalu jauh berbeda biasanya berjalan lebih baik.', '<b>Ganti pasangan</b> setiap beberapa minggu agar semua belajar bekerja dengan orang berbeda.', '<b>Nilai individu tetap ada</b> lewat kuis atau ujian mandiri.', '<b>Minta refleksi singkat:</b> "Apa yang dipelajari dari pasanganmu hari ini?"'] },

            { h2: 'Masalah umum dan solusinya' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Masalah', front: 'Satu orang mendominasi.', backTag: 'Solusi', back: 'Pewaktu rotasi yang tegas. Navigator boleh bicara, tetapi hanya driver yang mengetik.' },
                { tag: 'Masalah', front: 'Kemampuan sangat timpang.', backTag: 'Solusi', back: 'Yang lebih mahir menjadi navigator lebih sering dan dilarang mengambil keyboard; ia membimbing lewat pertanyaan.' },
                { tag: 'Masalah', front: 'Pasangan tidak cocok secara pribadi.', backTag: 'Solusi', back: 'Rotasi berkala, dan sediakan jalur bagi peserta untuk menyampaikan masalah secara pribadi.' },
                { tag: 'Masalah', front: 'Peserta introvert merasa lelah.', backTag: 'Solusi', back: 'Batasi sesi pairing (misalnya maksimal 2 jam), selingi kerja mandiri.' },
            ] },

            { h2: 'Pairing jarak jauh' },
            { ul: ['Gunakan alat berbagi editor seperti VS Code Live Share, atau berbagi layar dengan kontrol jarak jauh.', 'Kamera menyala membantu membaca ekspresi pasangan.', 'Lebih sering bertanya "masih bersama?" karena isyarat nonverbal berkurang.', 'Untuk tim, pola "mob programming" (seluruh tim, satu driver bergiliran) berguna untuk masalah sulit.'] },
            { h2: 'Bagaimana dengan pairing bersama AI?' },
            `Asisten coding AI bisa menjadi "navigator" yang selalu ada: menyarankan kode, menjelaskan error. Tetapi AI tidak menggantikan manfaat sosial pairing: belajar cara berpikir orang lain, membangun kepercayaan diri, dan pengetahuan bersama di tim. Untuk pemula, pairing dengan manusia tetap lebih disarankan, dengan AI sebagai alat yang dipakai bersama.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tugas utama navigator?', options: ['Mengetik secepat mungkin', 'Melihat gambaran besar dan memeriksa kesalahan', 'Menonton saja'], answer: 1, why: 'Navigator berpikir strategis dan meninjau.' },
                { q: 'Kunci agar pairing adil?', options: ['Rotasi peran secara teratur', 'Selalu yang mahir menjadi driver', 'Tanpa aturan'], answer: 0, why: 'Bergantian memastikan keduanya aktif.' },
            ] },
        ],
        faq: [
            ['Apakah pairing membuat pekerjaan dua kali lebih lama?', 'Tidak dua kali. Waktu total biasanya bertambah, tetapi sering diimbangi lebih sedikit bug dan lebih sedikit waktu review serta debugging belakangan.'],
            ['Bagaimana menilai tugas yang dikerjakan berpasangan?', 'Beri nilai yang sama untuk tugas pasangan, dan pastikan ada komponen penilaian individu seperti kuis atau ujian.'],
            ['Apakah cocok untuk anak?', 'Ya, dengan peran yang dijelaskan sederhana: "pilot" memegang mouse, "co-pilot" membaca instruksi dan memeriksa. Rotasi lebih sering karena rentang perhatian lebih pendek.'],
        ],
        sources: [
            ['McDowell, Werner, Bullock, Fernald (2006): Pair programming improves student retention, confidence, and program quality, CACM', 'https://doi.org/10.1145/1145287.1145293'],
            ['Martin Fowler: On Pair Programming (Böckeler dan Siessegger)', 'https://martinfowler.com/articles/on-pair-programming.html'],
            ['VS Code Live Share', 'https://visualstudio.microsoft.com/services/live-share/'],
        ],
    },

    {
        slug: 'project-based-learning-langkah-merancang-proyek',
        title: 'Project-Based Learning: Cara Merancang Proyek Bermakna',
        description: 'Merancang project-based learning: beda proyek biasa dan PBL, tujuh elemen Gold Standard, contoh proyek coding, penilaian proses, dan penyebab proyek gagal.',
        date: D, category: C, tags: ['project based learning', 'PjBL', 'pembelajaran berbasis proyek', 'kurikulum', 'desain pembelajaran'], cta: 'jasa',
        lead: 'Membuat poster di akhir bab sering disebut "proyek", padahal itu hanya hidangan penutup setelah pelajaran utama. Dalam project-based learning, proyeknya adalah pelajaran utama: peserta belajar karena harus menyelesaikan masalah nyata, bukan menyelesaikan masalah untuk membuktikan sudah belajar.',
        body: [
            { h2: 'Proyek biasa vs project-based learning' },
            { svg: 'versus', label: 'Hidangan penutup vs hidangan utama', left: { title: 'Proyek di akhir', items: ['Setelah materi selesai', 'Menunjukkan apa yang sudah diajarkan', 'Hasil sering seragam'] }, right: { title: 'Project-based learning', items: ['Proyek adalah inti pembelajaran', 'Materi dipelajari karena dibutuhkan proyek', 'Hasil beragam, ada audiens nyata'] } },

            { h2: 'Tujuh elemen desain Gold Standard (PBLWorks)' },
            { w: 'cards', title: 'Ketuk tiap elemen', items: [
                { tag: '1', front: 'Masalah atau pertanyaan yang menantang', backTag: 'Contoh', back: '"Bagaimana UMKM di sekitar kita bisa menerima pesanan online tanpa biaya bulanan?"' },
                { tag: '2', front: 'Penyelidikan berkelanjutan', backTag: 'Contoh', back: 'Wawancara pemilik usaha, riset alat, membuat prototipe, mengulang.' },
                { tag: '3', front: 'Autentisitas', backTag: 'Contoh', back: 'Pengguna dan kebutuhan nyata, alat yang dipakai di dunia kerja.' },
                { tag: '4', front: 'Suara dan pilihan peserta', backTag: 'Contoh', back: 'Kelompok memilih usaha mana dan fitur apa yang dibangun.' },
                { tag: '5', front: 'Refleksi', backTag: 'Contoh', back: 'Jurnal mingguan: apa yang berhasil, apa yang macet.' },
                { tag: '6', front: 'Kritik dan revisi', backTag: 'Contoh', back: 'Review sejawat dan umpan balik pengguna sebelum versi akhir.' },
                { tag: '7', front: 'Produk publik', backTag: 'Contoh', back: 'Demo kepada pemilik usaha, atau aplikasi yang benar-benar dipakai.' },
            ] },

            { h2: 'Langkah merancang' },
            { ol: ['<b>Mulai dari tujuan belajar</b> yang wajib dicapai, lalu cari masalah nyata yang membutuhkan tujuan itu.', '<b>Rumuskan pertanyaan pendorong</b> yang terbuka tetapi bisa dikerjakan.', '<b>Tentukan produk dan audiens:</b> siapa yang akan melihat hasilnya?', '<b>Rencanakan tonggak (milestone)</b> dengan pemeriksaan di tiap tahap.', '<b>Siapkan "pelajaran tepat waktu"</b>: materi singkat diberikan saat dibutuhkan proyek.', '<b>Rancang penilaian</b> untuk proses dan produk, individu dan kelompok.'] },

            { h2: 'Contoh: proyek 6 minggu kelas pengembangan web' },
            { svg: 'timeline', label: 'Tonggak proyek', events: [['Minggu 1', 'Masalah dan pengguna', 'Wawancara 2 pelaku UMKM, tulis kebutuhan.'], ['Minggu 2', 'Rancangan', 'Wireframe dan alur, review sejawat.'], ['Minggu 3-4', 'Membangun', 'Pelajaran singkat HTML/CSS/JS sesuai kebutuhan; stand-up singkat tiap pertemuan.'], ['Minggu 5', 'Uji dengan pengguna', 'Pemilik usaha mencoba, catat masalah, revisi.'], ['Minggu 6', 'Demo publik', 'Presentasi ke pemilik usaha dan refleksi individu.']] },

            { h2: 'Menilai proyek kelompok dengan adil' },
            { ul: ['Gabungkan nilai kelompok (produk) dan nilai individu (kuis konsep, refleksi, kontribusi).', 'Gunakan rubrik untuk proses: perencanaan, kolaborasi, revisi berdasarkan umpan balik.', 'Minta penilaian sejawat anonim tentang kontribusi anggota.', 'Lihat riwayat commit atau dokumen bersama sebagai bukti kontribusi.'] },
            { callout: 'Proyek gagal biasanya bukan karena idenya, tetapi karena tidak ada tonggak antara. Tanpa pemeriksaan berkala, masalah baru ketahuan di minggu terakhir.', kind: 'warn', title: 'Tonggak itu wajib' },
            { w: 'checklist', title: 'Periksa rancangan proyek Anda', items: ['Tujuan belajar wajib tercakup dalam proyek.', 'Pertanyaan pendorong terbuka dan relevan bagi peserta.', 'Ada audiens nyata untuk produk akhir.', 'Ada tonggak dengan umpan balik di setiap tahap.', 'Materi diberikan tepat saat dibutuhkan.', 'Ada penilaian individu, bukan hanya kelompok.', 'Ada waktu untuk revisi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Ciri utama project-based learning?', options: ['Proyek di akhir sebagai bonus', 'Proyek menjadi inti dan alasan belajar materi', 'Tanpa penilaian'], answer: 1, why: 'Materi dipelajari karena dibutuhkan proyek.' },
                { q: 'Cara mencegah anggota kelompok yang tidak berkontribusi?', options: ['Hanya nilai kelompok', 'Gabungkan penilaian individu dan bukti kontribusi', 'Membiarkannya'], answer: 1, why: 'Akuntabilitas individu menjaga keadilan.' },
            ] },
        ],
        faq: [
            ['Apakah PBL cocok untuk materi dasar?', 'Bisa, dengan proyek kecil dan banyak dukungan. Untuk dasar yang benar-benar baru, kombinasikan dengan penjelasan langsung dan latihan terstruktur.'],
            ['Apa bedanya project-based dan problem-based learning?', 'Mirip. Problem-based biasanya fokus pada analisis dan solusi masalah (sering di kedokteran), project-based menekankan menghasilkan produk.'],
            ['Bagaimana bila waktu terbatas?', 'Mulai dengan proyek mini 1-2 minggu dengan satu tonggak tengah. Lebih baik proyek kecil yang tuntas daripada proyek besar yang terburu-buru.'],
        ],
        sources: [
            ['PBLWorks: Gold Standard PBL, Essential Project Design Elements', 'https://www.pblworks.org/what-is-pbl/gold-standard-project-design'],
            ['Kokotsaki, Menzies, Wiggins (2016): Project-based learning, a review of the literature, Improving Schools', 'https://doi.org/10.1177/1365480216659733'],
            ['Rubrik penilaian (artikel terkait)', 'https://muchson.web.id/artikel/rubrik-penilaian-cara-membuat-yang-adil/'],
        ],
    },

    {
        slug: 'andragogi-cara-mengajar-orang-dewasa',
        title: 'Andragogi: Cara Mengajar Orang Dewasa yang Berhasil',
        description: 'Prinsip andragogi Malcolm Knowles untuk trainer: enam asumsi belajar orang dewasa, penerapan di pelatihan kerja, menangani peserta skeptis, dan rancangan sesi.',
        date: D, category: C, tags: ['andragogi', 'mengajar orang dewasa', 'trainer', 'pelatihan korporat', 'Malcolm Knowles'], cta: 'jasa',
        lead: 'Peserta pelatihan korporat datang dengan pengalaman bertahun-tahun, tenggat pekerjaan yang menunggu, dan pertanyaan di kepala: "apa gunanya ini untuk saya?" Mengajar mereka seperti mengajar siswa sekolah hampir pasti gagal. Malcolm Knowles mempopulerkan istilah andragogi untuk menggambarkan cara orang dewasa belajar.',
        body: [
            { h2: 'Enam asumsi andragogi' },
            { w: 'cards', title: 'Ketuk untuk penerapan di pelatihan', items: [
                { tag: '1', front: 'Perlu tahu alasannya', backTag: 'Terapkan', back: 'Buka sesi dengan masalah nyata mereka dan dampaknya, sebelum teori apa pun.' },
                { tag: '2', front: 'Konsep diri mandiri', backTag: 'Terapkan', back: 'Beri pilihan: urutan topik, studi kasus mana, atau cara menunjukkan pemahaman.' },
                { tag: '3', front: 'Pengalaman adalah sumber belajar', backTag: 'Terapkan', back: 'Minta peserta berbagi kasus. Pengalaman mereka sering lebih kaya dari contoh di slide.' },
                { tag: '4', front: 'Siap belajar ketika dibutuhkan', backTag: 'Terapkan', back: 'Jadwalkan pelatihan dekat dengan saat keterampilan itu dipakai, misalnya sebelum peluncuran sistem baru.' },
                { tag: '5', front: 'Berorientasi masalah', backTag: 'Terapkan', back: 'Susun materi berdasarkan tugas kerja ("cara menangani akun berisiko"), bukan berdasarkan bab teori.' },
                { tag: '6', front: 'Motivasi dari dalam', backTag: 'Terapkan', back: 'Hubungkan dengan kemudahan kerja, kompetensi, dan pengakuan, bukan hanya kewajiban sertifikat.' },
            ] },
            { callout: 'Andragogi lebih tepat dipandang sebagai seperangkat asumsi yang berguna, bukan hukum yang membedakan anak dan dewasa secara mutlak. Banyak prinsipnya juga membantu siswa remaja.', kind: 'info', title: 'Catatan' },

            { h2: 'Rancangan sesi 3 jam untuk orang dewasa' },
            { table: { head: ['Waktu', 'Kegiatan', 'Prinsip'], rows: [['0-15', 'Masalah nyata: data keluhan bulan lalu dari tim mereka sendiri', 'Perlu tahu alasan'], ['15-35', 'Peserta berbagi kasus tersulit dalam kelompok kecil', 'Pengalaman'], ['35-60', 'Kerangka singkat + contoh', 'Berorientasi masalah'], ['60-120', 'Latihan: role play kasus mereka sendiri dengan umpan balik', 'Pengalaman, masalah nyata'], ['120-150', 'Peserta memilih satu alat untuk dicoba dan merencanakan penerapan', 'Mandiri'], ['150-180', 'Komitmen tindakan dan cara tindak lanjut', 'Siap belajar, motivasi']] } },

            { h2: 'Menghadapi peserta yang skeptis' },
            { ul: ['<b>Akui pengalaman mereka:</b> "Anda mungkin sudah menangani ratusan keluhan. Bagian mana yang paling sering membuat frustrasi?"', '<b>Tunjukkan bukti dari konteks mereka</b>, bukan dari perusahaan lain di negara lain.', '<b>Undang mereka menjadi kontributor:</b> minta mereka berbagi praktik terbaik.', '<b>Jangan berdebat soal teori;</b> uji bersama dalam latihan singkat.'] },

            { h2: 'Kesalahan umum trainer' },
            { w: 'checklist', title: 'Hindari ini', items: ['Membuka dengan profil perusahaan dan teori 30 menit.', 'Menganggap peserta tidak tahu apa-apa.', 'Studi kasus yang tidak mirip pekerjaan mereka.', 'Tidak memberi waktu untuk praktik.', 'Mengabaikan pertanyaan "bagaimana menerapkannya di sistem kami?"', 'Tidak ada tindak lanjut setelah pelatihan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Cara membuka sesi yang paling sesuai andragogi?', options: ['Sejarah teori', 'Masalah nyata peserta dan dampaknya', 'Aturan kelas'], answer: 1, why: 'Orang dewasa perlu tahu alasan belajar.' },
                { q: 'Materi pelatihan kerja sebaiknya disusun berdasarkan...', options: ['Bab buku teks', 'Tugas dan masalah kerja', 'Abjad'], answer: 1, why: 'Orang dewasa berorientasi masalah.' },
            ] },
        ],
        faq: [
            ['Apa bedanya pedagogi dan andragogi?', 'Pedagogi secara harfiah tentang mengajar anak dengan pengajar sebagai pusat; andragogi menekankan kemandirian, pengalaman, dan relevansi. Dalam praktik, keduanya berada dalam satu spektrum.'],
            ['Bagaimana bila peserta sangat beragam pengalamannya?', 'Manfaatkan keragaman: pasangkan yang berpengalaman dengan yang baru, dan sediakan tantangan tambahan bagi yang sudah mahir.'],
            ['Apakah e-learning cocok untuk orang dewasa?', 'Cocok bila singkat, relevan dengan tugas kerja, dan memberi kendali kepada peserta untuk melewati bagian yang sudah dikuasai.'],
        ],
        sources: [
            ['Merriam (2001): Andragogy and Self-Directed Learning, Pillars of Adult Learning Theory', 'https://doi.org/10.1002/ace.3'],
            ['Evaluasi pelatihan model Kirkpatrick (artikel terkait)', 'https://muchson.web.id/artikel/evaluasi-pelatihan-model-kirkpatrick/'],
            ['Merancang e-learning yang tidak membosankan (artikel terkait)', 'https://muchson.web.id/artikel/merancang-e-learning-yang-tidak-membosankan/'],
        ],
    },

    {
        slug: 'membuat-playground-interaktif-untuk-materi-belajar',
        title: 'Membuat Playground Interaktif untuk Materi Belajar',
        description: 'Membuat playground belajar interaktif berbasis web: keputusan yang dilatih, prototipe cepat dengan HTML dan AI, umpan balik, ekspor hasil, dan hosting gratis.',
        date: D, category: C, tags: ['playground interaktif', 'materi interaktif', 'e-learning', 'HTML', 'edtech'], cta: 'jasa',
        lead: 'Untuk program pelatihan yang saya bantu kembangkan, setiap hari kursus memiliki satu playground: halaman web interaktif tempat peserta mencoba konsep hari itu, mengambil keputusan, melihat akibatnya, lalu mengekspor hasil kerjanya. Playground tidak harus rumit. Yang penting ia melatih keputusan yang tepat.',
        body: [
            { h2: 'Apa itu playground belajar?' },
            `Playground adalah lingkungan aman untuk mencoba. Berbeda dengan slide yang dibaca atau video yang ditonton, playground meminta peserta <b>melakukan</b> sesuatu dan memberi umpan balik dari tindakan itu. Contohnya: kalkulator kasus bisnis, simulasi percakapan, editor kode, peta keputusan, atau kanvas yang bisa diisi.`,
            { svg: 'flow', label: 'Siklus di dalam playground', steps: [{ t: 'Situasi', d: 'data atau kasus' }, { t: 'Keputusan', d: 'peserta memilih / mengisi' }, { t: 'Akibat', d: 'angka, grafik, cerita berubah' }, { t: 'Refleksi', d: 'kenapa hasilnya begitu?' }, { t: 'Ekspor', d: 'dokumen kerja dibawa pulang' }] },

            { h2: 'Langkah 1: tentukan keputusan yang dilatih' },
            `Jangan mulai dari teknologi. Mulai dari pertanyaan: <i>keputusan apa yang harus bisa diambil peserta setelah hari ini?</i>`,
            { table: { head: ['Topik', 'Keputusan yang dilatih', 'Bentuk playground'], rows: [['Retensi pelanggan', 'Akun mana yang dihubungi lebih dulu', 'Dashboard 20 akun simulasi dengan skor kesehatan'], ['Green IT', 'Kapan mengganti perangkat', 'Kalkulator emisi umur pakai'], ['UX gamification', 'Mekanik mana yang mendorong perilaku yang diinginkan', 'Pembangun loop gamifikasi dengan umpan balik'], ['Pemrograman', 'Bagaimana memperbaiki kode yang salah', 'Editor dengan tes otomatis']] } },

            { h2: 'Langkah 2: prototipe cepat' },
            `Satu file HTML dengan sedikit JavaScript sering sudah cukup. Asisten AI sangat membantu membuat versi pertama dalam hitungan menit; tugas Anda adalah memastikan logika dan isi kasusnya benar.`,
            { code: '<!-- kerangka playground kalkulator sederhana -->\n<label>Pelanggan awal bulan <input id="awal" type="number" value="200"></label>\n<label>Pelanggan berhenti <input id="henti" type="number" value="10"></label>\n<p>Churn: <b id="hasil"></b></p>\n<p id="saran"></p>\n<script>\n  const hitung = () => {\n    const churn = henti.valueAsNumber / awal.valueAsNumber * 100;\n    hasil.textContent = churn.toFixed(1) + "%";\n    saran.textContent = churn > 5\n      ? "Di atas target tim. Akun mana yang perlu dihubungi minggu ini?"\n      : "Dalam target. Apa yang membuat bulan ini berhasil?";\n  };\n  document.querySelectorAll("input").forEach(i => i.oninput = hitung);\n  hitung();\n</script>' },
            { callout: 'Perhatikan bahwa umpan balik di contoh ini berupa pertanyaan yang mendorong refleksi, bukan hanya angka. Ini yang membedakan playground dari kalkulator biasa.', kind: 'info', title: 'Umpan balik yang mengajar' },

            { h2: 'Langkah 3: hasil kerja yang bisa dibawa pulang' },
            `Peserta lebih menghargai latihan bila hasilnya berguna setelah kelas. Tambahkan tombol untuk mengekspor ringkasan keputusan menjadi teks, PDF, atau dokumen, yang bisa dikumpulkan sebagai tugas atau dipakai di pekerjaan.`,
            { code: "// ekspor ringkasan sebagai file teks\nfunction unduh() {\n  const isi = `Rencana tindakan\\nChurn: ${hasil.textContent}\\nAkun prioritas: ${pilihan.join(', ')}`;\n  const a = document.createElement('a');\n  a.href = URL.createObjectURL(new Blob([isi], { type: 'text/plain' }));\n  a.download = 'rencana-tindakan.txt';\n  a.click();\n}" },

            { h2: 'Langkah 4: uji dengan peserta sungguhan' },
            { ul: ['Minta 2-3 orang mencoba tanpa penjelasan. Di mana mereka bingung?', 'Apakah mereka benar-benar mengambil keputusan, atau hanya mengklik?', 'Apakah berjalan baik di ponsel dan di laptop kantor dengan browser lama?', 'Periksa aksesibilitas: label input, kontras, navigasi keyboard.'] },

            { h2: 'Hosting dan perawatan' },
            { w: 'cards', title: 'Ketuk untuk pilihan', items: [
                { tag: 'Gratis', front: 'GitHub Pages, Netlify, Vercel, Cloudflare Pages', backTag: 'Cocok', back: 'Halaman statis HTML/JS. Satu repositori per hari kursus memudahkan pembaruan dan riwayat versi.' },
                { tag: 'LMS', front: 'Sematkan di LMS lewat iframe atau paket SCORM', backTag: 'Cocok', back: 'Bila organisasi butuh pelacakan penyelesaian di LMS.' },
                { tag: 'Data', front: 'Tanpa server dulu', backTag: 'Cocok', back: 'Simpan progres di browser peserta (localStorage). Hindari mengumpulkan data pribadi bila tidak perlu.' },
            ] },
            { w: 'checklist', title: 'Checklist playground siap dipakai', items: ['Keputusan yang dilatih jelas dan terkait tujuan hari itu.', 'Ada situasi atau data yang realistis.', 'Umpan balik menjelaskan akibat dan mendorong refleksi.', 'Ada hasil kerja yang bisa diekspor.', 'Diuji dengan peserta sungguhan.', 'Berjalan di ponsel dan aksesibel.', 'Kode disimpan di repositori dengan riwayat versi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Langkah pertama membuat playground?', options: ['Memilih framework JavaScript', 'Menentukan keputusan yang ingin dilatih', 'Membeli domain'], answer: 1, why: 'Tujuan belajar menentukan bentuknya.' },
                { q: 'Apa yang membedakan playground dari kalkulator biasa?', options: ['Warna yang menarik', 'Umpan balik yang mendorong refleksi dan konteks kasus', 'Lebih banyak angka'], answer: 1, why: 'Playground dirancang untuk belajar, bukan hanya menghitung.' },
            ] },
        ],
        faq: [
            ['Apakah harus bisa coding untuk membuat playground?', 'Dasar HTML dan JavaScript sangat membantu. Dengan bantuan AI, banyak trainer kini bisa membuat prototipe sendiri, lalu meminta developer merapikannya bila perlu. Alat tanpa kode seperti H5P juga pilihan.'],
            ['Berapa lama membuat satu playground?', 'Prototipe sederhana bisa dibuat dalam beberapa jam. Waktu terbesar justru untuk merancang kasus yang realistis dan menguji dengan peserta.'],
            ['Bagaimana memastikan playground tetap berfungsi bertahun-tahun?', 'Gunakan HTML, CSS, dan JavaScript standar dengan sedikit dependensi, simpan di repositori, dan hindari layanan pihak ketiga yang bisa berhenti.'],
        ],
        sources: [
            ['MDN Web Docs: Getting started with the web', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started'],
            ['H5P: interactive content', 'https://h5p.org/'],
            ['Merancang e-learning yang tidak membosankan (artikel terkait)', 'https://muchson.web.id/artikel/merancang-e-learning-yang-tidak-membosankan/'],
        ],
    },
];
