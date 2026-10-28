const D = '2026-10-28';
const C = 'Desain Pembelajaran';

export default [
    {
        slug: 'rubrik-penilaian-cara-membuat-yang-adil',
        title: 'Rubrik Penilaian: Cara Membuat yang Adil dan Jelas',
        description: 'Cara membuat rubrik penilaian analitik dan holistik dengan contoh: menentukan kriteria, menulis deskriptor tiap level, kalibrasi, dan memakainya untuk belajar.',
        date: D, category: C, tags: ['rubrik penilaian', 'asesmen', 'penilaian tugas', 'desain pembelajaran', 'guru'], cta: 'jasa',
        lead: 'Dua pengajar menilai tugas yang sama, satu memberi 85 dan yang lain 70. Peserta bingung, dan wajar saja. Rubrik yang baik membuat penilaian lebih konsisten, membuat harapan jelas sejak awal, dan bisa dipakai peserta untuk menilai karyanya sendiri sebelum dikumpulkan.',
        body: [
            { h2: 'Dua jenis rubrik' },
            { svg: 'versus', label: 'Analitik dan holistik', left: { title: 'Analitik', items: ['Beberapa kriteria dinilai terpisah', 'Umpan balik rinci per aspek', 'Lebih lama dipakai'] }, right: { title: 'Holistik', items: ['Satu penilaian keseluruhan', 'Cepat untuk banyak tugas', 'Umpan balik kurang rinci'] } },

            { h2: 'Langkah membuat rubrik analitik' },
            { ol: ['<b>Mulai dari tujuan pembelajaran.</b> Setiap kriteria harus terkait tujuan.', '<b>Pilih 3-5 kriteria</b> yang paling penting. Lebih dari itu membuat penilaian lambat dan peserta bingung.', '<b>Tentukan 3-4 level</b>, misalnya Berkembang, Cakap, Mahir.', '<b>Tulis deskriptor</b> yang menggambarkan hal yang terlihat di karya, bukan kata sifat kabur.', '<b>Uji dengan contoh karya nyata</b> dan perbaiki deskriptor yang membingungkan.'] },

            { h2: 'Deskriptor: konkret, bukan kata sifat' },
            { table: { head: ['Kabur', 'Konkret'], rows: [['"Kode cukup rapi"', '"Nama variabel menjelaskan isinya; tidak ada fungsi lebih dari 30 baris"'], ['"Analisis baik"', '"Setiap rekomendasi didukung minimal satu angka dari data"'], ['"Presentasi menarik"', '"Menjawab pertanyaan audiens dengan merujuk data; tidak membaca slide"']] } },

            { h2: 'Contoh rubrik: proyek aplikasi web sederhana' },
            { table: { head: ['Kriteria', 'Berkembang (1)', 'Cakap (2)', 'Mahir (3)'], rows: [
                ['Fungsi', 'Fitur utama berjalan sebagian; ada error saat dipakai normal', 'Semua fitur utama berjalan pada pemakaian normal', 'Semua fitur berjalan, termasuk menangani input kosong dan error jaringan'],
                ['Kualitas kode', 'Nama tidak jelas, banyak duplikasi', 'Nama jelas, sebagian logika dipisah ke fungsi', 'Struktur rapi, ada tes untuk logika utama'],
                ['Desain antarmuka', 'Sulit dipakai, tidak berjalan di ponsel', 'Mudah dipakai di desktop dan ponsel', 'Juga memenuhi kontras dan navigasi keyboard'],
                ['Penjelasan', 'Tidak bisa menjelaskan bagian kode sendiri', 'Menjelaskan alur utama', 'Menjelaskan alasan desain dan alternatif yang dipertimbangkan'],
            ] } },
            { w: 'calc', title: 'Hitung nilai dari rubrik berbobot', desc: 'Masukkan level (1-3) tiap kriteria dan bobotnya.', inputs: [
                { id: 'f', label: 'Fungsi (level)', value: 3, min: 1, max: 3, step: 1 },
                { id: 'k', label: 'Kualitas kode (level)', value: 2, min: 1, max: 3, step: 1 },
                { id: 'u', label: 'Desain antarmuka (level)', value: 2, min: 1, max: 3, step: 1 },
                { id: 'p', label: 'Penjelasan (level)', value: 3, min: 1, max: 3, step: 1 },
                { id: 'bf', label: 'Bobot fungsi', value: 35, min: 0, max: 100, step: 5, unit: '%' },
                { id: 'bk', label: 'Bobot kode', value: 25, min: 0, max: 100, step: 5, unit: '%' },
                { id: 'bu', label: 'Bobot antarmuka', value: 20, min: 0, max: 100, step: 5, unit: '%' },
                { id: 'bp', label: 'Bobot penjelasan', value: 20, min: 0, max: 100, step: 5, unit: '%' },
            ], outputs: [
                { label: 'Nilai akhir (skala 100)', expr: '(bf + bk + bu + bp) > 0 ? (f * bf + k * bk + u * bu + p * bp) / 3 / (bf + bk + bu + bp) * 100 : 0', fmt: 'num', big: true },
                { label: 'Total bobot', expr: 'bf + bk + bu + bp', fmt: 'int', unit: '%', note: 'Pastikan total bobot 100%.' },
            ] },

            { h2: 'Membuat rubrik lebih adil' },
            { ul: ['<b>Bagikan rubrik sebelum tugas dimulai</b>, bukan setelah dinilai.', '<b>Sertakan contoh karya</b> untuk setiap level bila memungkinkan.', '<b>Kalibrasi antar penilai:</b> beberapa penilai menilai 3-5 karya yang sama, lalu diskusikan perbedaannya.', '<b>Nilai tanpa melihat nama</b> bila memungkinkan, untuk mengurangi bias.', '<b>Hindari kriteria yang tumpang tindih</b> sehingga satu kesalahan dihukum dua kali.'] },
            { callout: 'Minta peserta menilai draf mereka sendiri dengan rubrik sebelum mengumpulkan. Ini salah satu cara termudah meningkatkan kualitas tugas dan mengurangi protes nilai.', kind: 'info', title: 'Rubrik sebagai alat belajar' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Deskriptor mana yang paling jelas?', options: ['"Sangat baik"', '"Setiap klaim didukung data dari minimal satu sumber"', '"Menarik"'], answer: 1, why: 'Bisa diperiksa langsung pada karya.' },
                { q: 'Kapan rubrik sebaiknya dibagikan?', options: ['Setelah penilaian', 'Sebelum tugas dimulai', 'Tidak perlu dibagikan'], answer: 1, why: 'Peserta tahu harapannya sejak awal.' },
            ] },
        ],
        faq: [
            ['Berapa level yang ideal?', 'Tiga sampai empat level biasanya cukup. Terlalu banyak level membuat perbedaan antar level sulit dijelaskan.'],
            ['Bolehkah AI membantu membuat rubrik?', 'Boleh untuk draf awal. Tetap periksa apakah kriteria sesuai tujuan dan deskriptor konkret, lalu uji dengan karya nyata.'],
            ['Apakah rubrik membuat penilaian kaku?', 'Tidak harus. Sediakan kolom komentar untuk hal yang tidak tercakup, dan perbarui rubrik setiap kali menemukan kasus baru.'],
        ],
        sources: [
            ['Brookhart (2018): Appropriate Criteria, Key to Effective Rubrics, Frontiers in Education', 'https://doi.org/10.3389/feduc.2018.00022'],
            ['Jonsson dan Svingby (2007): The use of scoring rubrics, reliability, validity and educational consequences', 'https://doi.org/10.1016/j.edurev.2007.05.002'],
            ['Menulis tujuan pembelajaran terukur ABCD (artikel terkait)', 'https://muchson.web.id/artikel/menulis-tujuan-pembelajaran-terukur-abcd/'],
        ],
    },

    {
        slug: 'asesmen-formatif-vs-sumatif-bedanya',
        title: 'Asesmen Formatif vs Sumatif: Beda dan Contohnya',
        description: 'Perbedaan asesmen formatif dan sumatif dengan contoh kelas dan pelatihan: tujuan, waktu, teknik cepat seperti tiket keluar, dan memakai hasilnya.',
        date: D, category: C, tags: ['asesmen formatif', 'asesmen sumatif', 'penilaian', 'evaluasi belajar', 'strategi mengajar'], cta: 'jasa',
        lead: 'Robert Stake memberi analogi yang terkenal: ketika juru masak mencicipi sup, itu asesmen formatif; ketika tamu mencicipi sup, itu asesmen sumatif. Yang pertama untuk memperbaiki selagi masih bisa, yang kedua untuk menilai hasil akhir. Keduanya penting, tetapi yang pertama sering dilupakan.',
        body: [
            { h2: 'Perbedaan inti' },
            { table: { head: ['Aspek', 'Formatif', 'Sumatif'], rows: [['Tujuan', 'Memperbaiki belajar dan mengajar', 'Menyimpulkan pencapaian'], ['Waktu', 'Selama proses', 'Di akhir unit atau program'], ['Taruhan', 'Rendah, sering tanpa nilai', 'Tinggi, masuk rapor atau sertifikat'], ['Siapa yang memakai hasil', 'Pengajar dan peserta, segera', 'Lembaga, orang tua, atasan'], ['Contoh', 'Kuis singkat, tiket keluar, draf dengan komentar', 'Ujian akhir, proyek akhir, sertifikasi']] } },
            `Satu alat bisa menjadi formatif atau sumatif tergantung <b>cara hasilnya dipakai</b>. Kuis yang hasilnya dipakai untuk menyesuaikan pelajaran besok adalah formatif.`,

            { h2: 'Mengapa formatif begitu penting' },
            `Ulasan klasik Black dan Wiliam (1998), "Inside the Black Box", merangkum banyak penelitian dan menyimpulkan bahwa memperkuat praktik asesmen formatif menghasilkan peningkatan belajar yang berarti, terutama bagi peserta yang tertinggal. Kuncinya bukan kuisnya, tetapi tindakan setelahnya.`,
            { svg: 'cycle', label: 'Siklus asesmen formatif', items: ['Ajukan tugas atau pertanyaan', 'Lihat bukti pemahaman', 'Beri umpan balik', 'Sesuaikan pengajaran', 'Peserta memperbaiki'] },

            { h2: 'Delapan teknik formatif yang cepat' },
            { w: 'cards', title: 'Ketuk untuk cara memakainya', items: [
                { tag: '2 menit', front: 'Tiket keluar', backTag: 'Cara', back: 'Satu pertanyaan di akhir sesi: "Tulis satu query yang menampilkan pelanggan tanpa pesanan." Baca semua jawaban sebelum sesi berikutnya.' },
                { tag: '1 menit', front: 'Kartu jawaban serentak', backTag: 'Cara', back: 'Semua peserta mengangkat kartu A/B/C/D bersamaan, atau memakai polling. Pengajar langsung melihat sebaran.' },
                { tag: '3 menit', front: 'Muddiest point', backTag: 'Cara', back: '"Bagian mana yang paling membingungkan hari ini?" Kelompokkan jawaban untuk dibahas.' },
                { tag: '5 menit', front: 'Think-pair-share', backTag: 'Cara', back: 'Pikirkan sendiri, diskusikan berpasangan, lalu beberapa pasangan berbagi.' },
                { tag: 'Kode', front: 'Tes otomatis', backTag: 'Cara', back: 'Latihan coding dengan tes yang memberi hasil langsung; pengajar melihat soal mana yang paling banyak gagal.' },
                { tag: 'Tulisan', front: 'Komentar pada draf', backTag: 'Cara', back: 'Komentar tanpa nilai pada draf, peserta merevisi sebelum versi final.' },
                { tag: 'Diri', front: 'Penilaian diri dengan rubrik', backTag: 'Cara', back: 'Peserta menandai level mereka sendiri dan memberi bukti.' },
                { tag: 'Teman', front: 'Penilaian sejawat', backTag: 'Cara', back: 'Pertukaran karya dengan panduan "dua hal kuat, satu saran".' },
            ] },

            { h2: 'Merancang soal formatif yang bermakna' },
            `Soal formatif terbaik memunculkan <b>miskonsepsi</b>. Pilihan jawaban yang salah dirancang dari kesalahan umum, sehingga jawaban peserta memberi tahu di mana kesalahpahamannya.`,
            { code: 'Soal: range(1, 5) menghasilkan...\na) 1, 2, 3, 4, 5   ← mengira batas akhir ikut\nb) 1, 2, 3, 4      ← benar\nc) 0, 1, 2, 3, 4   ← mengira selalu mulai dari 0\nd) 5               ← mengira range satu angka\n\nBila banyak yang memilih (a), bahas batas akhir range.\nBila banyak yang memilih (c), bahas parameter mulai.' },

            { h2: 'Sumatif yang baik juga penting' },
            { ul: ['Selaraskan dengan tujuan pembelajaran (constructive alignment).', 'Ukur kemampuan menerapkan, bukan hanya mengingat.', 'Umumkan format dan kriteria sejak awal.', 'Gabungkan beberapa bentuk bukti, bukan satu ujian saja.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kuis yang hasilnya dipakai untuk mengubah rencana sesi berikutnya adalah asesmen...', options: ['Formatif', 'Sumatif'], answer: 0, why: 'Dipakai untuk memperbaiki proses.' },
                { q: 'Menurut analogi Stake, tamu yang mencicipi sup adalah...', options: ['Formatif', 'Sumatif'], answer: 1, why: 'Menilai hasil akhir.' },
                { q: 'Pilihan jawaban salah yang baik dalam soal formatif sebaiknya...', options: ['Asal dibuat', 'Berasal dari miskonsepsi umum', 'Selalu konyol'], answer: 1, why: 'Agar jawaban mengungkap kesalahpahaman.' },
            ] },
        ],
        faq: [
            ['Apakah asesmen formatif harus diberi nilai?', 'Tidak harus. Banyak praktik formatif terbaik justru tanpa nilai, agar peserta berani salah dan fokus pada perbaikan.'],
            ['Berapa sering asesmen formatif dilakukan?', 'Sebaiknya di setiap sesi, dalam bentuk ringan. Satu tiket keluar per pertemuan sudah sangat membantu.'],
            ['Bagaimana di pelatihan korporat?', 'Pakai polling, studi kasus singkat dengan diskusi, atau simulasi dengan umpan balik di tengah program, bukan hanya tes akhir.'],
        ],
        sources: [
            ['Black dan Wiliam (1998): Assessment and Classroom Learning, Assessment in Education', 'https://doi.org/10.1080/0969595980050102'],
            ['Rubrik penilaian (artikel terkait)', 'https://muchson.web.id/artikel/rubrik-penilaian-cara-membuat-yang-adil/'],
            ['Active recall (artikel terkait)', 'https://muchson.web.id/artikel/active-recall-teknik-belajar-paling-efektif/'],
        ],
    },

    {
        slug: 'membuat-soal-pilihan-ganda-yang-baik',
        title: 'Membuat Soal Pilihan Ganda yang Baik: Panduan dan Contoh',
        description: 'Menulis soal pilihan ganda yang mengukur pemahaman, bukan hafalan: struktur stem, pengecoh dari miskonsepsi, kesalahan umum, dan analisis butir sederhana.',
        date: D, category: C, tags: ['soal pilihan ganda', 'membuat soal', 'asesmen', 'evaluasi', 'HOTS'], cta: 'jasa',
        lead: 'Soal pilihan ganda sering dianggap hanya bisa menguji hafalan. Padahal soal yang dirancang dengan baik bisa menguji penerapan, analisis, bahkan evaluasi. Masalahnya ada pada cara menulis: soal yang buruk bisa ditebak tanpa memahami materi, atau justru menjebak peserta yang sebenarnya paham.',
        body: [
            { h2: 'Anatomi soal' },
            { code: 'STEM (pokok soal):\n  Sebuah toko memiliki 200 pelanggan aktif di awal bulan. Selama bulan itu,\n  10 pelanggan berhenti dan 30 pelanggan baru bergabung.\n  Berapa churn rate bulan itu?\n\nPILIHAN:\n  a) 5%       ← kunci\n  b) 4,5%     ← pengecoh: membagi dengan 220 (memasukkan pelanggan baru)\n  c) 10%      ← pengecoh: salah memakai 20 sebagai pembagi\n  d) 15%      ← pengecoh: menjumlah 10 + 30 lalu dibagi lain' },
            `Setiap pengecoh di contoh ini berasal dari kesalahan yang memang sering dilakukan, sehingga pilihan peserta memberi informasi diagnostik.`,

            { h2: 'Aturan menulis stem' },
            { ul: ['Stem harus bisa dijawab <b>tanpa melihat pilihan</b>. Bila tidak, stem terlalu kabur.', 'Satu masalah per soal.', 'Hindari kalimat negatif. Bila terpaksa, tebalkan: "manakah yang <b>BUKAN</b>...".', 'Masukkan kata yang berulang di setiap pilihan ke dalam stem.', 'Gunakan skenario untuk menguji penerapan.'] },

            { h2: 'Aturan menulis pilihan' },
            { w: 'cards', title: 'Ketuk: kesalahan umum dan perbaikannya', items: [
                { tag: 'Kesalahan', front: 'Kunci jawaban paling panjang dan paling rinci.', backTag: 'Perbaikan', back: 'Samakan panjang dan tingkat kerincian semua pilihan.' },
                { tag: 'Kesalahan', front: 'Pengecoh yang konyol sehingga mudah dicoret.', backTag: 'Perbaikan', back: 'Pakai kesalahan umum peserta atau jawaban yang "hampir benar".' },
                { tag: 'Kesalahan', front: '"Semua jawaban benar" atau "semua salah".', backTag: 'Perbaikan', back: 'Hindari. Peserta cukup tahu dua pilihan benar untuk menebak "semua benar".' },
                { tag: 'Kesalahan', front: 'Petunjuk tata bahasa yang membocorkan kunci.', backTag: 'Perbaikan', back: 'Pastikan semua pilihan cocok secara tata bahasa dengan stem.' },
                { tag: 'Kesalahan', front: 'Kunci selalu di posisi B atau C.', backTag: 'Perbaikan', back: 'Acak posisi kunci, atau urutkan pilihan angka dari kecil ke besar.' },
                { tag: 'Kesalahan', front: 'Kata mutlak seperti "selalu" dan "tidak pernah" hanya di pengecoh.', backTag: 'Perbaikan', back: 'Peserta yang cerdik akan mencoret pilihan berisi kata mutlak. Seimbangkan.' },
            ] },
            `Penelitian Rodriguez (2005) menunjukkan <b>tiga pilihan</b> (satu kunci dan dua pengecoh yang baik) sering sama efektifnya dengan empat atau lima pilihan, dan lebih cepat ditulis serta dikerjakan. Dua pengecoh yang masuk akal lebih baik daripada empat yang asal-asalan.`,

            { h2: 'Menguji tingkat berpikir lebih tinggi' },
            { table: { head: ['Tingkat', 'Pola stem', 'Contoh'], rows: [['Mengingat', '"Apa kepanjangan..."', 'Apa kepanjangan NPS?'], ['Menerapkan', '"Diberikan data..., berapa..."', 'Hitung NPS dari 50 promotor, 30 pasif, 20 detraktor.'], ['Menganalisis', '"Apa penyebab paling mungkin..."', 'Query ini lambat pada 1 juta baris. Penyebab paling mungkin?'], ['Mengevaluasi', '"Tindakan terbaik adalah..."', 'Pelanggan memberi skor 3 dan kontraknya habis bulan depan. Langkah pertama terbaik?']] } },

            { h2: 'Analisis butir sederhana setelah ujian' },
            { w: 'calc', title: 'Indeks kesukaran dan daya beda', desc: 'Bagi peserta menjadi kelompok atas dan bawah (misalnya 27% nilai tertinggi dan terendah).', inputs: [
                { id: 'na', label: 'Jumlah peserta kelompok atas', value: 20, min: 1, max: 500, step: 1 },
                { id: 'ba', label: 'Yang menjawab benar di kelompok atas', value: 17, min: 0, max: 500, step: 1 },
                { id: 'bb', label: 'Yang menjawab benar di kelompok bawah', value: 8, min: 0, max: 500, step: 1 },
            ], outputs: [
                { label: 'Indeks kesukaran (p)', expr: '(ba + bb) / (2 * na)', fmt: 'num', note: 'Mendekati 1 = mudah, mendekati 0 = sulit. Banyak pengembang soal menargetkan sekitar 0,3-0,8.' },
                { label: 'Daya beda (D)', expr: '(ba - bb) / na', fmt: 'num', big: true, note: 'D di atas sekitar 0,3 umumnya baik. D mendekati 0 atau negatif berarti soal tidak membedakan peserta yang paham, perlu diperiksa.' },
            ] },
            { callout: 'Soal dengan daya beda negatif (kelompok bawah lebih banyak benar daripada kelompok atas) hampir selalu bermasalah: kunci salah, stem ambigu, atau pengecoh yang ternyata juga benar.', kind: 'warn', title: 'Tanda bahaya' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tanda stem yang baik?', options: ['Bisa dijawab tanpa melihat pilihan', 'Sangat panjang', 'Memakai kata negatif ganda'], answer: 0, why: 'Stem harus mengandung masalah yang lengkap.' },
                { q: 'Sumber pengecoh terbaik?', options: ['Jawaban lucu', 'Miskonsepsi atau kesalahan umum peserta', 'Pilihan acak'], answer: 1, why: 'Pengecoh yang masuk akal membuat soal bermakna dan diagnostik.' },
            ] },
        ],
        faq: [
            ['Berapa pilihan jawaban yang ideal?', 'Tiga sampai empat. Yang penting setiap pengecoh masuk akal; pengecoh yang tidak pernah dipilih siapa pun sebaiknya diganti atau dihapus.'],
            ['Bolehkah AI membuat soal pilihan ganda?', 'Bisa membantu membuat draf dan variasi. Periksa kebenaran kunci, keaslian pengecoh, dan kesesuaian dengan tujuan, karena AI kadang membuat dua pilihan yang sama-sama benar.'],
            ['Apakah soal pilihan ganda cukup untuk ujian akhir?', 'Untuk keterampilan seperti menulis, coding, atau presentasi, lengkapi dengan tugas kinerja yang dinilai dengan rubrik.'],
        ],
        sources: [
            ['Haladyna, Downing, Rodriguez (2002): A Review of Multiple-Choice Item-Writing Guidelines', 'https://doi.org/10.1207/S15324818AME1503_5'],
            ['Rodriguez (2005): Three Options Are Optimal for Multiple-Choice Items', 'https://doi.org/10.1111/j.1745-3992.2005.00006.x'],
            ['Vanderbilt Center for Teaching: Writing Good Multiple Choice Test Questions', 'https://cft.vanderbilt.edu/guides-sub-pages/writing-good-multiple-choice-test-questions/'],
        ],
    },

    {
        slug: 'umpan-balik-yang-efektif-untuk-peserta-belajar',
        title: 'Umpan Balik yang Efektif untuk Peserta Belajar',
        description: 'Memberi umpan balik yang membantu belajar berdasarkan model Hattie dan Timperley: tiga pertanyaan, empat tingkat, contoh kalimat, dan waktu yang tepat.',
        date: D, category: C, tags: ['umpan balik', 'feedback', 'Hattie', 'mengajar', 'coaching'], cta: 'jasa',
        lead: 'Umpan balik termasuk faktor yang paling kuat memengaruhi belajar, tetapi juga yang paling bervariasi. Kluger dan DeNisi (1996) menemukan bahwa dalam sekitar sepertiga kasus, umpan balik justru menurunkan kinerja. Bedanya terletak pada apa yang dikomentari dan bagaimana caranya.',
        body: [
            { h2: 'Tiga pertanyaan umpan balik' },
            `Hattie dan Timperley (2007) merumuskan bahwa umpan balik yang efektif menjawab tiga pertanyaan:`,
            { svg: 'flow', label: 'Tiga pertanyaan', steps: [{ t: 'Ke mana saya menuju?', d: 'feed up: tujuan dan kriteria' }, { t: 'Bagaimana kemajuan saya?', d: 'feed back: posisi sekarang' }, { t: 'Apa langkah berikutnya?', d: 'feed forward: tindakan perbaikan' }] },

            { h2: 'Empat tingkat umpan balik' },
            { w: 'cards', title: 'Ketuk untuk contoh dan efektivitasnya', items: [
                { tag: 'Tugas', front: 'Tentang benar atau salahnya hasil.', backTag: 'Contoh', back: '"Hasil churn kamu 4,5%, seharusnya 5% karena pembaginya pelanggan di awal bulan." Berguna, terutama untuk pemula.' },
                { tag: 'Proses', front: 'Tentang cara mengerjakan.', backTag: 'Contoh', back: '"Coba tulis dulu rumusnya sebelum memasukkan angka, supaya kamu bisa cek pembaginya." Sangat efektif untuk pemahaman mendalam.' },
                { tag: 'Regulasi diri', front: 'Tentang memantau diri sendiri.', backTag: 'Contoh', back: '"Bagaimana cara kamu memeriksa apakah jawabanmu masuk akal?" Membangun kemandirian.' },
                { tag: 'Pribadi', front: 'Tentang orangnya.', backTag: 'Contoh', back: '"Kamu pintar!" Terasa menyenangkan, tetapi paling sedikit membantu belajar karena tidak memberi informasi tindakan.' },
            ] },

            { h2: 'Contoh perbaikan kalimat' },
            { table: { head: ['Kurang membantu', 'Lebih membantu'], rows: [['"Bagus."', '"Pemisahan validasi ke fungsi tersendiri membuat kodemu mudah dites. Pertahankan pola ini."'], ['"Kurang rapi."', '"Tiga fungsi di file ini lebih dari 50 baris. Pilih satu dan pecah menjadi bagian dengan nama yang jelas."'], ['"Presentasinya perlu ditingkatkan."', '"Slide 4 berisi 9 poin. Coba sisakan satu pesan utama dan pindahkan data ke grafik."'], ['"Nilai 70."', '"Analisismu kuat di bagian data. Untuk naik ke level Mahir, tambahkan alasan untuk setiap rekomendasi."']] } },

            { h2: 'Waktu dan jumlah' },
            { ul: ['<b>Segera</b> untuk keterampilan dasar dan kesalahan prosedur, sebelum kesalahan menjadi kebiasaan.', '<b>Sedikit tertunda</b> bisa lebih baik untuk tugas kompleks, memberi ruang peserta berpikir dulu.', '<b>Sedikit tapi tepat:</b> dua atau tiga poin terpenting lebih berguna daripada 20 coretan merah.', '<b>Beri kesempatan menindaklanjuti.</b> Umpan balik tanpa kesempatan revisi sering tidak dibaca.'] },
            { callout: 'Penelitian Butler (1988) menemukan bahwa ketika komentar diberikan bersama nilai angka, siswa cenderung hanya melihat nilainya. Pertimbangkan memberi komentar dulu, nilai belakangan.', kind: 'info', title: 'Komentar dulu, nilai kemudian' },

            { h2: 'Umpan balik dalam pelatihan orang dewasa' },
            `Model sederhana yang sering saya pakai dalam role play pelatihan: <b>amati, dampak, saran</b>. "Saat pelanggan menyebut kecewa, kamu langsung menjelaskan kebijakan (amati). Pelanggan terdengar makin kesal (dampak). Coba akui perasaannya dulu dalam satu kalimat sebelum menjelaskan (saran)."`,
            { w: 'builder', title: 'Susun umpan balik', desc: 'Isi tiga bagian; kalimat tersusun otomatis.', fields: [
                { id: 'amati', label: 'Yang saya amati (fakta, bukan penilaian)', value: 'di slide 3 kamu membaca teks kata per kata' },
                { id: 'dampak', label: 'Dampaknya', value: 'beberapa peserta mulai melihat ponsel' },
                { id: 'saran', label: 'Saran langkah berikutnya', value: 'sisakan kata kunci di slide dan jelaskan dengan kalimatmu sendiri' },
            ], template: 'Saya perhatikan {amati}. Dampaknya, {dampak}. Untuk berikutnya, coba {saran}. Bagaimana menurutmu?' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tingkat umpan balik yang paling sedikit membantu belajar?', options: ['Proses', 'Regulasi diri', 'Pribadi ("kamu pintar")'], answer: 2, why: 'Tidak memberi informasi tentang apa yang harus dilakukan.' },
                { q: 'Pertanyaan "feed forward" adalah...', options: ['Ke mana saya menuju?', 'Bagaimana kemajuan saya?', 'Apa langkah berikutnya?'], answer: 2, why: 'Feed forward mengarah ke tindakan perbaikan.' },
            ] },
        ],
        faq: [
            ['Bagaimana memberi umpan balik kepada atasan atau peserta senior?', 'Gunakan pola yang sama berbasis fakta dan dampak, minta izin dulu ("boleh saya beri satu masukan?"), dan fokus pada tujuan bersama.'],
            ['Apakah umpan balik positif perlu?', 'Perlu, asal spesifik. Menyebut apa yang sudah berhasil membantu peserta mengulangi perilaku yang baik.'],
            ['Bagaimana dengan umpan balik otomatis di e-learning?', 'Sangat berguna untuk tugas dan proses. Rancang pesan untuk setiap jawaban salah yang umum, bukan hanya "salah, coba lagi".'],
        ],
        sources: [
            ['Hattie dan Timperley (2007): The Power of Feedback, Review of Educational Research', 'https://doi.org/10.3102/003465430298487'],
            ['Kluger dan DeNisi (1996): The effects of feedback interventions on performance, Psychological Bulletin', 'https://doi.org/10.1037/0033-2909.119.2.254'],
            ['Butler (1988): Enhancing and undermining intrinsic motivation, British Journal of Educational Psychology', 'https://doi.org/10.1111/j.2044-8279.1988.tb00874.x'],
        ],
    },

    {
        slug: 'evaluasi-pelatihan-model-kirkpatrick',
        title: 'Evaluasi Pelatihan Model Kirkpatrick: 4 Level dan Contohnya',
        description: 'Mengevaluasi pelatihan dengan model Kirkpatrick: reaksi, pembelajaran, perilaku, hasil, contoh indikator, alat ukur, dan memulai dari hasil bisnis.',
        date: D, category: C, tags: ['Kirkpatrick', 'evaluasi pelatihan', 'L&D', 'ROI pelatihan', 'training evaluation'], cta: 'jasa',
        lead: 'Banyak program pelatihan hanya dievaluasi dengan satu formulir di akhir: "Seberapa puas Anda dengan pelatihan ini?" Skornya tinggi, semua senang, tetapi tidak ada yang tahu apakah pekerjaan benar-benar berubah. Model Kirkpatrick, diperkenalkan Donald Kirkpatrick pada 1959, memberi kerangka empat level untuk menjawab pertanyaan yang lebih penting.',
        body: [
            { h2: 'Empat level' },
            { svg: 'layers', label: 'Model Kirkpatrick', items: [{ t: 'Level 4: Hasil', d: 'Dampak ke organisasi: churn turun, penjualan naik, error berkurang.' }, { t: 'Level 3: Perilaku', d: 'Apakah peserta menerapkan di pekerjaan?' }, { t: 'Level 2: Pembelajaran', d: 'Apakah pengetahuan dan keterampilan bertambah?' }, { t: 'Level 1: Reaksi', d: 'Apakah peserta merasa pelatihan relevan dan bermanfaat?' }], caption: 'Semakin ke atas, semakin bermakna bagi organisasi dan semakin sulit diukur.' },

            { h2: 'Contoh: pelatihan Customer Success' },
            { table: { head: ['Level', 'Pertanyaan', 'Alat ukur', 'Waktu'], rows: [['1 Reaksi', 'Apakah materi relevan dengan pekerjaan saya?', 'Survei singkat 3-5 pertanyaan', 'Akhir sesi'], ['2 Pembelajaran', 'Bisakah peserta mengidentifikasi akun berisiko dari data?', 'Tes kasus sebelum dan sesudah', 'Awal dan akhir program'], ['3 Perilaku', 'Apakah akun berisiko dihubungi dalam 48 jam?', 'Data CRM, observasi atasan', '30-90 hari setelah'], ['4 Hasil', 'Apakah churn bulanan turun?', 'Data churn dibanding periode sebelum dan tim pembanding', '3-6 bulan setelah']] } },

            { h2: 'Mulai dari atas saat merancang' },
            `Versi terbaru dari keluarga Kirkpatrick (New World Kirkpatrick Model) menekankan: <b>rancang dari Level 4 turun</b>, evaluasi dari Level 1 naik. Tanyakan dulu hasil bisnis apa yang diharapkan, perilaku apa yang menghasilkannya, pengetahuan apa yang dibutuhkan untuk perilaku itu, baru rancang pelatihannya.`,
            { svg: 'flow', label: 'Arah perencanaan', steps: [{ t: 'Hasil bisnis', d: 'churn turun 10%' }, { t: 'Perilaku kunci', d: 'tindak lanjut 48 jam' }, { t: 'Pembelajaran', d: 'membaca sinyal risiko' }, { t: 'Reaksi', d: 'relevan dan praktis' }] },

            { h2: 'Mengapa Level 3 sering gagal' },
            `Peserta bisa lulus tes dan tetap tidak berubah di pekerjaan. Penyebab umum bukan pelatihannya, melainkan lingkungan kerja:`,
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Penghambat', front: 'Atasan tidak tahu isi pelatihan.', backTag: 'Solusi', back: 'Libatkan atasan sejak awal: briefing singkat dan panduan coaching setelah pelatihan.' },
                { tag: 'Penghambat', front: 'Sistem kerja tidak mendukung.', backTag: 'Solusi', back: 'Bila CRM tidak menampilkan sinyal risiko, peserta sulit menerapkan. Perbaiki alatnya bersamaan.' },
                { tag: 'Penghambat', front: 'Tidak ada pengingat setelah pelatihan.', backTag: 'Solusi', back: 'Pengingat mingguan, sesi tindak lanjut singkat, dan papan kemajuan tim.' },
                { tag: 'Penghambat', front: 'Insentif bertentangan.', backTag: 'Solusi', back: 'Bila tim hanya dinilai dari jumlah tiket ditutup, mereka tidak punya waktu untuk tindak lanjut proaktif.' },
            ] },

            { h2: 'Contoh survei Level 1 yang lebih berguna' },
            { code: '1. Seberapa relevan materi ini dengan pekerjaan Anda minggu depan? (1-5)\n2. Seberapa yakin Anda bisa menerapkan [keterampilan X]? (1-5)\n3. Apa satu hal yang akan Anda coba dalam 7 hari ke depan?\n4. Apa yang mungkin menghambat Anda menerapkannya?\n5. Satu saran untuk perbaikan program.' },
            `Pertanyaan 3 dan 4 memberi data yang jauh lebih berguna daripada "apakah ruangannya nyaman".`,
            { w: 'checklist', title: 'Rencana evaluasi program Anda', items: ['Hasil bisnis (Level 4) disepakati dengan pemilik program.', 'Perilaku kunci (Level 3) ditulis dan bisa diamati.', 'Ada tes sebelum dan sesudah (Level 2).', 'Survei reaksi menanyakan relevansi dan rencana penerapan.', 'Atasan peserta dilibatkan.', 'Jadwal pengukuran 30-90 hari setelah pelatihan.', 'Ada data pembanding (periode sebelumnya atau tim lain).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Data CRM tentang kecepatan tindak lanjut akun berisiko mengukur level...', options: ['1', '2', '3'], answer: 2, why: 'Perilaku di pekerjaan.' },
                { q: 'Urutan yang disarankan saat merancang program?', options: ['Dari Level 1 ke 4', 'Dari Level 4 turun ke 1', 'Hanya Level 1'], answer: 1, why: 'Mulai dari hasil yang diinginkan.' },
            ] },
        ],
        faq: [
            ['Apa itu Level 5 atau ROI?', 'Jack Phillips menambahkan level ROI: membandingkan nilai uang dari hasil dengan biaya pelatihan. Berguna untuk program besar, tetapi perlu cara memisahkan dampak pelatihan dari faktor lain.'],
            ['Apakah semua pelatihan perlu dievaluasi sampai Level 4?', 'Tidak. Program kecil cukup Level 1-2. Program strategis dan mahal layak diukur sampai Level 3-4.'],
            ['Bagaimana memisahkan dampak pelatihan dari faktor lain?', 'Bandingkan dengan kelompok yang belum dilatih, periode sebelumnya, atau tanyakan peserta dan atasan seberapa besar perubahan disebabkan pelatihan.'],
        ],
        sources: [
            ['Kirkpatrick Partners: The Kirkpatrick Model', 'https://www.kirkpatrickpartners.com/the-kirkpatrick-model/'],
            ['Merancang kurikulum pelatihan ADDIE dan Bloom (artikel terkait)', 'https://muchson.web.id/artikel/merancang-kurikulum-pelatihan-addie-dan-taksonomi-bloom/'],
            ['Churn rate: cara menghitung dan menurunkan (artikel terkait)', 'https://muchson.web.id/artikel/churn-rate-cara-menghitung-dan-menurunkan/'],
        ],
    },
];
