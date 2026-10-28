const D = '2026-10-28';
const C = 'AI untuk Semua';

export default [
    {
        slug: 'ai-sebagai-tutor-manfaat-dan-batasnya',
        title: 'AI sebagai Tutor: Manfaat dan Batasnya bagi Pelajar',
        description: 'Apa kata penelitian tentang tutor AI: kapan membantu, kapan merugikan, contoh prompt tutor Sokratik, dan aturan agar AI tidak menjadi tongkat penyangga.',
        date: D, category: C, tags: ['AI tutor', 'belajar dengan AI', 'ChatGPT untuk belajar', 'pendidikan', 'AI di sekolah'], cta: 'jasa',
        lead: 'Benjamin Bloom pada 1984 menulis bahwa siswa yang belajar dengan tutor pribadi bisa jauh melampaui siswa di kelas biasa, dan menyebut tantangan menghadirkan manfaat itu untuk semua orang sebagai "masalah 2 sigma". Tutor AI sering dipromosikan sebagai jawabannya. Penelitian terbaru menunjukkan gambaran yang lebih bernuansa: AI bisa membantu belajar, atau justru menghambatnya, tergantung cara dipakai.',
        body: [
            { h2: 'Studi penting: AI tanpa pagar bisa merugikan' },
            `Bastani dan rekan (PNAS, 2025) melakukan eksperimen dengan hampir seribu siswa SMA di Turki pada pelajaran matematika. Ada dua versi GPT-4: <b>GPT Base</b> yang mirip ChatGPT biasa, dan <b>GPT Tutor</b> yang diberi instruksi untuk membimbing, bukan memberi jawaban.`,
            { table: { head: ['Kelompok', 'Saat latihan (dengan AI)', 'Ujian tanpa AI'], rows: [['GPT Base', 'sekitar 48% lebih baik dari kontrol', 'sekitar 17% lebih buruk dari kontrol'], ['GPT Tutor', 'sekitar 127% lebih baik dari kontrol', 'penurunan sebagian besar tercegah'], ['Kontrol (tanpa AI)', 'acuan', 'acuan']] } },
            `Kesimpulan peneliti: siswa memakai AI sebagai <b>tongkat penyangga</b>. Mereka terlihat pintar saat latihan, lalu kesulitan ketika harus mengerjakan sendiri. Pagar pengaman dalam desain tutor sebagian besar mencegah penurunan itu.`,

            { h2: 'Kapan tutor AI membantu' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Membantu', front: 'Menjelaskan ulang konsep dengan cara lain.', backTag: 'Kenapa', back: 'Siswa bisa meminta analogi, contoh lain, atau penjelasan lebih sederhana tanpa malu.' },
                { tag: 'Membantu', front: 'Memberi petunjuk bertahap, bukan jawaban.', backTag: 'Kenapa', back: 'Usaha mengingat dan memecahkan masalah sendiri (desirable difficulty) adalah bagian dari belajar.' },
                { tag: 'Membantu', front: 'Membuat soal latihan dan kuis.', backTag: 'Kenapa', back: 'Latihan mengingat kembali (retrieval practice) termasuk teknik belajar yang paling kuat buktinya.' },
                { tag: 'Merugikan', front: 'Langsung memberi jawaban PR.', backTag: 'Kenapa', back: 'Tugas selesai, belajar tidak terjadi. Nilai ujian mandiri bisa turun.' },
                { tag: 'Merugikan', front: 'Dipercaya tanpa dicek.', backTag: 'Kenapa', back: 'AI bisa salah hitung atau mengarang, dan siswa pemula sulit mendeteksinya.' },
            ] },

            { h2: 'Prompt tutor Sokratik yang bisa dipakai' },
            { w: 'builder', title: 'Buat prompt tutor', desc: 'Isi, salin, lalu tempel di awal percakapan dengan asisten AI.', fields: [
                { id: 'mapel', label: 'Mata pelajaran / topik', placeholder: 'mis. pecahan kelas 5, perulangan Python', value: 'perulangan for di Python' },
                { id: 'level', label: 'Tingkat siswa', placeholder: 'mis. kelas 8, mahasiswa semester 1', value: 'mahasiswa semester 1' },
                { id: 'tujuan', label: 'Tujuan belajar', placeholder: 'apa yang harus bisa dilakukan', long: true, value: 'bisa menulis perulangan untuk menjumlahkan isi list' },
            ], template: 'Kamu adalah tutor yang sabar untuk {level} yang sedang belajar {mapel}.\nTujuan: saya ingin {tujuan}.\n\nAturan:\n1. Jangan memberi jawaban akhir atau kode lengkap, walau saya meminta.\n2. Ajukan satu pertanyaan pada satu waktu untuk menuntun saya berpikir.\n3. Bila saya salah, beri petunjuk kecil, bukan koreksi penuh.\n4. Setelah saya berhasil, minta saya menjelaskan kembali dengan kata-kata sendiri.\n5. Di akhir, beri 2 soal latihan baru tanpa jawaban.\n\nMulai dengan menanyakan apa yang sudah saya pahami.' },

            { h2: 'Aturan sederhana untuk pelajar' },
            { ol: ['<b>Coba dulu 10 menit</b> sebelum bertanya ke AI.', '<b>Minta petunjuk, bukan jawaban.</b>', '<b>Jelaskan balik</b> ke AI dengan kata-kata sendiri, lalu minta dikoreksi.', '<b>Uji diri tanpa AI</b> secara berkala, misalnya kuis mingguan.', '<b>Periksa fakta dan hitungan</b> penting di sumber lain.'] },
            { callout: 'Rasa "saya paham" saat membaca penjelasan AI yang lancar sering menipu. Ukuran sebenarnya: bisakah Anda mengerjakan soal baru tanpa bantuan besok?', kind: 'warn', title: 'Ilusi kefasihan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Dalam studi Bastani dkk., kelompok mana yang hasil ujian mandirinya turun?', options: ['GPT Tutor', 'GPT Base', 'Kontrol'], answer: 1, why: 'GPT Base memberi jawaban dengan mudah, siswa bergantung padanya.' },
                { q: 'Cara memakai AI yang paling mendukung belajar?', options: ['Minta jawaban lengkap', 'Minta petunjuk bertahap dan latihan', 'Salin tanpa membaca'], answer: 1, why: 'Usaha berpikir sendiri adalah tempat belajar terjadi.' },
            ] },
        ],
        faq: [
            ['Apakah anak SD boleh memakai tutor AI?', 'Banyak layanan AI mensyaratkan usia minimal (sering 13 tahun) atau izin orang tua. Untuk anak, pendampingan orang dewasa dan aplikasi yang dirancang untuk pendidikan anak lebih tepat.'],
            ['Apakah AI bisa menggantikan guru?', 'Tidak dalam arti utuh. Guru memotivasi, membaca kondisi siswa, dan membangun hubungan. AI paling berguna sebagai alat bantu latihan dan penjelasan tambahan.'],
            ['AI mana yang paling bagus untuk belajar?', 'Yang penting cara memakainya. Beberapa layanan menyediakan mode belajar atau mode tutor yang sengaja tidak langsung memberi jawaban.'],
        ],
        sources: [
            ['Bastani et al. (2025): Generative AI without guardrails can harm learning, PNAS', 'https://doi.org/10.1073/pnas.2422633122'],
            ['Bloom (1984): The 2 Sigma Problem, Educational Researcher', 'https://doi.org/10.3102/0013189X013006004'],
            ['Active recall: teknik belajar paling efektif (artikel terkait)', 'https://muchson.web.id/artikel/active-recall-teknik-belajar-paling-efektif/'],
        ],
    },

    {
        slug: 'membuat-aturan-pemakaian-ai-di-kelas',
        title: 'Membuat Aturan Pemakaian AI di Kelas: Contoh untuk Guru',
        description: 'Panduan guru dan dosen menyusun aturan AI di kelas: tingkat izin per tugas, contoh teks silabus, cara siswa mengungkapkan pemakaian AI, dan pelanggaran.',
        date: D, category: C, tags: ['kebijakan AI', 'AI di kelas', 'guru', 'dosen', 'integritas akademik'], cta: 'jasa',
        lead: 'Melarang AI sepenuhnya sulit ditegakkan, sementara membebaskannya tanpa arahan membuat siswa bingung apa yang boleh. Siswa sebenarnya ingin aturan yang jelas. Kebijakan yang baik tidak harus panjang: cukup jelas untuk setiap tugas, dijelaskan alasannya, dan konsisten ditegakkan.',
        body: [
            { h2: 'Mulai dari tujuan belajar, bukan dari alatnya' },
            `Pertanyaan kuncinya: <i>keterampilan apa yang ingin dilatih tugas ini?</i> Bila tujuannya menulis argumen sendiri, AI yang menulis draf menghilangkan latihannya. Bila tujuannya menganalisis data, AI yang membantu menulis rumus mungkin tidak masalah.`,

            { h2: 'Skala izin per tugas' },
            { svg: 'scale', label: 'Tingkat izin pemakaian AI', stops: [[10, 'Tanpa AI'], [32, 'AI untuk ide'], [55, 'AI untuk umpan balik'], [78, 'AI sebagai kolaborator'], [95, 'Bebas, wajib dinilai kritis']], caption: 'Diadaptasi dari pendekatan AI Assessment Scale (Perkins, Furze, Roe, MacVaugh). Tetapkan satu tingkat untuk setiap tugas.' },
            { table: { head: ['Tingkat', 'Contoh tugas', 'Yang boleh'], rows: [['1. Tanpa AI', 'Ujian di kelas, refleksi pribadi', 'Tidak ada pemakaian AI'], ['2. Ide', 'Esai argumentatif', 'Brainstorm dan merancang kerangka; tulisan akhir sendiri'], ['3. Umpan balik', 'Laporan praktikum', 'Meminta masukan tata bahasa dan struktur pada draf sendiri'], ['4. Kolaborator', 'Proyek aplikasi, analisis data', 'AI membantu kode atau analisis, siswa menjelaskan dan menguji'], ['5. Bebas', 'Tugas eksplorasi', 'Semua pemakaian, dengan evaluasi kritis atas hasil AI']] } },

            { h2: 'Contoh teks untuk silabus' },
            { code: 'Kebijakan AI mata kuliah ini\n\nAI generatif (ChatGPT, Gemini, Claude, dll.) boleh dipakai sesuai\ntingkat yang tertulis di setiap tugas. Bila tidak tertulis, berlaku\ntingkat 3: AI hanya untuk umpan balik atas tulisan Anda sendiri.\n\nSetiap pemakaian AI wajib diungkapkan di akhir tugas:\n- alat yang dipakai,\n- untuk bagian apa,\n- contoh prompt utama,\n- apa yang Anda ubah dari hasil AI.\n\nAnda tetap bertanggung jawab atas kebenaran isi. Mengumpulkan hasil AI\nsebagai karya sendiri tanpa pengungkapan termasuk pelanggaran\nintegritas akademik.' },

            { h2: 'Mengapa pengungkapan lebih efektif dari deteksi' },
            `Pendeteksi teks AI tidak bisa diandalkan sebagai bukti. OpenAI menghentikan pengklasifikasinya sendiri pada 2023 karena akurasi rendah, dan studi Liang dkk. menemukan pendeteksi sering salah menandai tulisan penutur non-asli bahasa Inggris sebagai buatan AI. Menuduh siswa berdasarkan skor pendeteksi berisiko tidak adil.`,
            { w: 'cards', title: 'Ketuk: cara yang lebih andal', items: [
                { tag: 'Cara', front: 'Minta proses, bukan hanya produk akhir.', backTag: 'Contoh', back: 'Kumpulkan kerangka, draf pertama, dan revisi. Riwayat versi di Google Docs juga membantu.' },
                { tag: 'Cara', front: 'Tambahkan percakapan singkat.', backTag: 'Contoh', back: 'Lima menit tanya jawab tentang tugasnya. Siswa yang menulis sendiri bisa menjelaskan pilihan-pilihannya.' },
                { tag: 'Cara', front: 'Kaitkan tugas dengan konteks lokal atau pengalaman pribadi.', backTag: 'Contoh', back: '"Wawancarai satu pelaku UMKM di sekitar rumahmu dan analisis..." lebih sulit diserahkan ke AI begitu saja.' },
            ] },

            { h2: 'Bila terjadi pelanggaran' },
            { ol: ['Kumpulkan bukti dari proses (bukan hanya skor pendeteksi).', 'Ajak siswa berbicara dan jelaskan tugasnya.', 'Bedakan salah paham aturan dari kecurangan yang disengaja.', 'Untuk pelanggaran pertama yang ringan, jadikan kesempatan belajar: kerjakan ulang dengan pengungkapan yang benar.', 'Ikuti prosedur institusi untuk kasus serius.'] },
            { w: 'checklist', title: 'Checklist kebijakan AI kelas', items: ['Tingkat izin ditulis di setiap tugas.', 'Ada contoh pemakaian yang boleh dan tidak.', 'Format pengungkapan pemakaian AI jelas.', 'Alasan aturan dijelaskan kepada siswa.', 'Tidak mengandalkan pendeteksi AI sebagai satu-satunya bukti.', 'Ada tugas yang menilai proses dan pemahaman lisan.', 'Kebijakan ditinjau ulang setiap semester.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mengapa skor pendeteksi AI tidak layak dijadikan satu-satunya bukti?', options: ['Terlalu mahal', 'Akurasinya terbatas dan bisa bias terhadap penutur non-asli', 'Dilarang pemerintah'], answer: 1, why: 'Kesalahan positif bisa merugikan siswa yang jujur.' },
                { q: 'Langkah pertama menentukan aturan AI untuk sebuah tugas?', options: ['Memilih aplikasi AI', 'Menentukan keterampilan yang ingin dilatih', 'Membeli pendeteksi'], answer: 1, why: 'Aturan mengikuti tujuan belajar.' },
            ] },
        ],
        faq: [
            ['Apakah boleh melarang AI sepenuhnya?', 'Boleh untuk tugas tertentu, misalnya ujian di kelas. Untuk tugas di rumah, larangan total sulit diawasi; lebih efektif merancang tugas yang menilai proses.'],
            ['Bagaimana bila siswa tidak punya akses AI berbayar?', 'Pastikan tugas bisa dikerjakan dengan alat gratis atau tanpa AI sama sekali, agar tidak menimbulkan ketidakadilan.'],
            ['Apakah guru perlu mengungkapkan pemakaian AI juga?', 'Sebaiknya ya, misalnya bila soal atau materi dibantu AI. Ini memberi contoh transparansi kepada siswa.'],
        ],
        sources: [
            ['UNESCO (2023): Guidance for generative AI in education and research', 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research'],
            ['Perkins, Furze, Roe, MacVaugh (2024): The AI Assessment Scale', 'https://doi.org/10.53761/q3azde36'],
            ['Liang et al. (2023): GPT detectors are biased against non-native English writers', 'https://doi.org/10.1016/j.patter.2023.100779'],
            ['AI detector akurat atau tidak (artikel terkait)', 'https://muchson.web.id/artikel/ai-detector-akurat-atau-tidak/'],
        ],
    },

    {
        slug: 'asesmen-autentik-di-era-ai-cara-menilai-tugas',
        title: 'Asesmen Autentik di Era AI: Cara Menilai yang Tetap Bermakna',
        description: 'Merancang asesmen yang tetap mengukur kemampuan saat AI tersedia: tugas autentik, penilaian proses, ujian lisan singkat, portofolio, dan contoh desain ulang.',
        date: D, category: C, tags: ['asesmen autentik', 'penilaian', 'AI dan pendidikan', 'desain tugas', 'evaluasi belajar'], cta: 'jasa',
        lead: 'Tugas "tulis esai 1.000 kata tentang dampak media sosial" kini bisa diselesaikan AI dalam 20 detik. Itu bukan berarti esai tidak lagi berguna, melainkan tanda bahwa produk akhir saja tidak cukup sebagai bukti belajar. Asesmen perlu bergeser untuk melihat proses berpikir, penerapan pada konteks nyata, dan kemampuan menjelaskan.',
        body: [
            { h2: 'Apa itu asesmen autentik?' },
            `Asesmen autentik meminta peserta menerapkan pengetahuan pada tugas yang mirip dunia nyata, dengan audiens, batasan, dan kriteria yang realistis. Grant Wiggins, salah satu tokohnya, menekankan bahwa tugas autentik menuntut penilaian dan inovasi, bukan sekadar mengulang informasi.`,

            { h2: 'Desain ulang tugas: sebelum dan sesudah' },
            { w: 'compare', title: 'Contoh transformasi tugas', tabs: [
                { label: 'Esai umum', html: '<b>Sebelum:</b> "Jelaskan dampak media sosial pada remaja."<br><b>Sesudah:</b> "Kumpulkan data screen time 5 teman sekelas selama seminggu (anonim). Bandingkan dengan dua temuan penelitian. Presentasikan 3 menit kepada adik kelas dengan satu rekomendasi yang realistis."' },
                { label: 'Soal coding', html: '<b>Sebelum:</b> "Buat fungsi bubble sort."<br><b>Sesudah:</b> "Ini kode yang lambat untuk mengurutkan 50.000 data pelanggan. Ukur waktunya, temukan penyebabnya, perbaiki, dan jelaskan hasil pengukuranmu dalam 5 menit sesi tanya jawab."' },
                { label: 'Pelatihan korporat', html: '<b>Sebelum:</b> "Kuis pilihan ganda tentang retensi pelanggan."<br><b>Sesudah:</b> "Analisis data churn tiga bulan dari akun simulasi, tentukan 3 akun berisiko, dan susun rencana tindakan untuk masing-masing. Dinilai dengan rubrik oleh fasilitator."' },
            ] },

            { h2: 'Lima strategi yang tahan terhadap AI' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: '1', front: 'Nilai prosesnya.', backTag: 'Contoh', back: 'Kumpulkan kerangka, draf, catatan revisi, atau commit Git. Beri bobot nilai untuk tahapan, bukan hanya hasil akhir.' },
                { tag: '2', front: 'Konteks lokal dan personal.', backTag: 'Contoh', back: 'Data dari lingkungan sendiri, wawancara nyata, studi kasus organisasi tempat magang.' },
                { tag: '3', front: 'Penjelasan lisan singkat.', backTag: 'Contoh', back: 'Tanya jawab 5 menit: "Kenapa kamu memilih pendekatan ini? Apa yang terjadi bila datanya dua kali lipat?"' },
                { tag: '4', front: 'Evaluasi kritis atas hasil AI.', backTag: 'Contoh', back: 'Berikan jawaban AI yang mengandung kesalahan; tugas siswa menemukan, membuktikan, dan memperbaikinya.' },
                { tag: '5', front: 'Portofolio berkelanjutan.', backTag: 'Contoh', back: 'Kumpulan karya sepanjang semester dengan refleksi perkembangan, sulit dibuat mendadak.' },
            ] },

            { h2: 'Gunakan rubrik yang menilai berpikir' },
            { table: { head: ['Kriteria', 'Berkembang', 'Cakap', 'Mahir'], rows: [['Pemakaian bukti', 'Mengutip tanpa menghubungkan', 'Menghubungkan bukti ke klaim', 'Menimbang bukti yang bertentangan'], ['Penerapan pada konteks', 'Umum, bisa untuk tempat mana pun', 'Spesifik pada kasus', 'Spesifik dan mempertimbangkan batasan nyata'], ['Penjelasan lisan', 'Membaca ulang tulisan', 'Menjelaskan dengan kata sendiri', 'Menjawab pertanyaan "bagaimana jika" dengan tepat'], ['Refleksi pemakaian AI', 'Tidak ada', 'Menyebutkan pemakaian', 'Menilai kelebihan dan kesalahan hasil AI']] } },

            { h2: 'Jangan lupakan asesmen formatif' },
            `Asesmen yang paling berharga sering tidak dinilai sama sekali: kuis singkat tanpa nilai, tiket keluar di akhir pertemuan, atau latihan yang langsung diberi umpan balik. Ketika taruhannya rendah, alasan untuk menyerahkan pekerjaan ke AI juga berkurang.`,
            { callout: 'Asesmen yang dirancang ulang membutuhkan waktu menilai lebih banyak. Mulailah dari satu tugas utama per semester, bukan semua sekaligus.', kind: 'info', title: 'Realistis' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Ciri utama asesmen autentik?', options: ['Pilihan ganda sebanyak mungkin', 'Menerapkan pengetahuan pada tugas yang mirip dunia nyata', 'Tanpa kriteria penilaian'], answer: 1, why: 'Tugas realistis dengan audiens dan batasan nyata.' },
                { q: 'Strategi yang membuat siswa harus menunjukkan pemahamannya sendiri?', options: ['Penjelasan lisan singkat', 'Memperpanjang tenggat', 'Memperbanyak halaman'], answer: 0, why: 'Penjelasan langsung sulit diwakilkan.' },
            ] },
        ],
        faq: [
            ['Apakah ujian tertulis di kelas masih perlu?', 'Masih berguna untuk mengukur kemampuan dasar tanpa bantuan. Gabungkan dengan tugas autentik agar gambaran kemampuan lebih utuh.'],
            ['Bagaimana menilai kelas besar dengan ujian lisan?', 'Ambil sampel acak, atau gunakan presentasi kelompok singkat dan tanya jawab bergiliran. Rekaman video singkat juga bisa menjadi alternatif.'],
            ['Apakah AI boleh dipakai untuk menilai?', 'Sebagai bantuan memberi umpan balik draf, bisa. Keputusan nilai akhir sebaiknya tetap di tangan pengajar.'],
        ],
        sources: [
            ['Wiggins (1990): The Case for Authentic Assessment', 'https://doi.org/10.7275/ffb1-mm19'],
            ['Membuat aturan pemakaian AI di kelas (artikel terkait)', 'https://muchson.web.id/artikel/membuat-aturan-pemakaian-ai-di-kelas/'],
            ['Rubrik penilaian: cara membuat yang adil (artikel terkait)', 'https://muchson.web.id/artikel/rubrik-penilaian-cara-membuat-yang-adil/'],
        ],
    },

    {
        slug: 'ai-untuk-menyusun-materi-pelatihan-korporat',
        title: 'AI untuk Menyusun Materi Pelatihan Korporat',
        description: 'Alur kerja memakai AI untuk merancang pelatihan karyawan: analisis kebutuhan, kerangka modul, studi kasus, kuis, terjemahan, dan kontrol kualitas manusia.',
        date: D, category: C, tags: ['materi pelatihan', 'AI untuk trainer', 'instructional design', 'pelatihan karyawan', 'e-learning'], cta: 'jasa',
        lead: 'Saya menyusun materi, playground interaktif, dan tugas untuk program pelatihan korporat berbahasa Inggris dan Jerman, termasuk modul Customer Success, UX, Green IT, dan Digital Learning. AI mempercepat banyak bagian pekerjaan itu. Tetapi ada bagian yang tidak boleh diserahkan begitu saja, dan di situlah kualitas pelatihan ditentukan.',
        body: [
            { h2: 'Di mana AI paling membantu' },
            { svg: 'flow', label: 'Alur penyusunan modul dengan AI', steps: [{ t: 'Analisis kebutuhan', d: 'manusia + data' }, { t: 'Tujuan belajar', d: 'AI usul, manusia tetapkan' }, { t: 'Kerangka & aktivitas', d: 'AI cepat membuat draf' }, { t: 'Konten & studi kasus', d: 'AI draf, ahli memeriksa' }, { t: 'Uji coba', d: 'peserta nyata' }] },
            { table: { head: ['Tahap', 'Peran AI', 'Peran manusia'], rows: [['Analisis kebutuhan', 'Merangkum hasil survei dan wawancara', 'Menentukan masalah kinerja yang sebenarnya'], ['Tujuan belajar', 'Mengusulkan rumusan terukur', 'Memastikan sesuai kebutuhan bisnis'], ['Kerangka modul', 'Draf urutan dan durasi', 'Menyesuaikan dengan peserta dan waktu nyata'], ['Studi kasus', 'Membuat skenario dan data simulasi', 'Memeriksa realisme dan bias'], ['Kuis dan tugas', 'Membuat banyak variasi soal', 'Memilih, memperbaiki, menguji'], ['Terjemahan', 'Draf cepat', 'Penutur asli memeriksa istilah dan nada']] } },

            { h2: 'Prompt kerangka modul' },
            { w: 'builder', title: 'Pembuat prompt kerangka pelatihan', desc: 'Isi, lalu salin ke asisten AI.', fields: [
                { id: 'topik', label: 'Topik pelatihan', value: 'menangani keluhan pelanggan lewat chat' },
                { id: 'peserta', label: 'Peserta', placeholder: 'peran, pengalaman, jumlah', value: 'agen customer service baru, 0-1 tahun pengalaman, 20 orang' },
                { id: 'masalah', label: 'Masalah kinerja yang ingin diatasi', long: true, value: 'skor kepuasan chat turun, banyak percakapan dieskalasi tanpa perlu' },
                { id: 'durasi', label: 'Durasi', value: '2 sesi x 3 jam, daring' },
                { id: 'bahasa', label: 'Bahasa materi', value: 'Bahasa Indonesia' },
            ], template: 'Kamu instructional designer berpengalaman.\nRancang kerangka pelatihan tentang {topik}.\nPeserta: {peserta}.\nMasalah kinerja: {masalah}.\nDurasi: {durasi}. Bahasa: {bahasa}.\n\nBuat:\n1. 3-5 tujuan belajar terukur (format ABCD).\n2. Urutan sesi dengan durasi tiap bagian, minimal 50% aktivitas praktik.\n3. Satu studi kasus realistis per sesi.\n4. Cara menilai apakah tujuan tercapai (bukan hanya kuis).\n5. Daftar asumsi yang perlu saya pastikan ke klien.\nJangan membuat statistik atau kutipan; tandai [PERLU SUMBER] bila butuh data.' },

            { h2: 'Kontrol kualitas: wajib dilakukan manusia' },
            { w: 'checklist', title: 'Periksa setiap materi dari AI', items: ['Fakta, angka, dan nama regulasi dicek ke sumber asli.', 'Tidak ada kutipan atau studi karangan.', 'Contoh dan nama dalam studi kasus beragam dan tidak stereotip.', 'Istilah sesuai yang dipakai perusahaan klien.', 'Tingkat kesulitan sesuai peserta (uji dengan 2-3 orang).', 'Aktivitas benar-benar melatih tujuan belajar, bukan sekadar menarik.', 'Hak cipta gambar dan materi pihak ketiga aman.', 'Data rahasia klien tidak dimasukkan ke layanan AI tanpa izin.'] },
            { callout: 'Saat memakai AI dengan dokumen internal klien, pastikan sesuai perjanjian kerahasiaan dan kebijakan data mereka. Gunakan layanan dengan perlindungan data bisnis, atau samarkan data sensitif.', kind: 'warn', title: 'Kerahasiaan klien' },

            { h2: 'Membuat playground dan latihan interaktif' },
            `AI juga sangat membantu membuat latihan interaktif: simulasi chat pelanggan, kalkulator kasus bisnis, atau kuis bercabang dalam satu halaman HTML. Pola yang saya pakai: tentukan dulu keputusan apa yang harus dilatih peserta, minta AI membuat prototipe, lalu uji dengan peserta dan perbaiki. Hasil latihan bisa diekspor menjadi dokumen kerja agar peserta membawa pulang sesuatu yang dipakai.`,
            { w: 'cards', title: 'Ketuk untuk ide latihan', items: [
                { tag: 'Customer Success', front: 'Simulasi akun pelanggan berisiko churn.', backTag: 'Latihan', back: 'Peserta membaca data pemakaian, memilih tindakan, dan melihat dampaknya pada skor kesehatan akun.' },
                { tag: 'UX', front: 'Menemukan masalah usability di prototipe.', backTag: 'Latihan', back: 'Peserta menandai pelanggaran heuristik pada layar dan membandingkan dengan temuan pakar.' },
                { tag: 'Green IT', front: 'Kalkulator jejak karbon perangkat kantor.', backTag: 'Latihan', back: 'Peserta mengubah umur pakai laptop dan melihat emisi per tahun berubah.' },
            ] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tahap mana yang paling tidak boleh diserahkan sepenuhnya ke AI?', options: ['Membuat variasi soal', 'Menentukan masalah kinerja yang sebenarnya', 'Draf terjemahan'], answer: 1, why: 'Analisis kebutuhan butuh konteks bisnis dan data nyata.' },
                { q: 'Instruksi "tandai [PERLU SUMBER]" di prompt berguna untuk...', options: ['Mencegah AI mengarang statistik', 'Membuat teks lebih panjang', 'Menerjemahkan'], answer: 0, why: 'Bagian yang butuh data diverifikasi manusia.' },
            ] },
        ],
        faq: [
            ['Berapa banyak waktu yang bisa dihemat?', 'Tergantung jenis materi. Draf awal dan variasi soal biasanya jauh lebih cepat; pemeriksaan kualitas dan uji coba tetap butuh waktu yang sama.'],
            ['Apakah materi buatan AI perlu diungkapkan ke klien?', 'Sebaiknya transparan tentang proses kerja Anda, termasuk bagian yang dibantu AI dan bagaimana kualitasnya dijaga.'],
            ['Bagaimana dengan video pelatihan dan avatar AI?', 'Bisa membantu skala dan bahasa, tetapi pastikan izin pemakaian wajah atau suara, dan periksa apakah peserta tetap merasa terhubung.'],
        ],
        sources: [
            ['Merancang kurikulum pelatihan dengan ADDIE dan Bloom (artikel terkait)', 'https://muchson.web.id/artikel/merancang-kurikulum-pelatihan-addie-dan-taksonomi-bloom/'],
            ['Menulis tujuan pembelajaran terukur ABCD (artikel terkait)', 'https://muchson.web.id/artikel/menulis-tujuan-pembelajaran-terukur-abcd/'],
            ['Merancang e-learning yang tidak membosankan (artikel terkait)', 'https://muchson.web.id/artikel/merancang-e-learning-yang-tidak-membosankan/'],
        ],
    },

    {
        slug: 'literasi-ai-untuk-karyawan-kompetensi-dasar',
        title: 'Literasi AI untuk Karyawan: Kompetensi Dasar yang Dibutuhkan',
        description: 'Apa itu literasi AI di tempat kerja, ketentuan AI literacy dalam EU AI Act, kompetensi dasar yang perlu dilatih, contoh program, dan cara mengukur hasilnya.',
        date: D, category: C, tags: ['literasi AI', 'AI literacy', 'EU AI Act', 'pelatihan karyawan', 'transformasi digital'], cta: 'jasa',
        lead: 'Banyak karyawan sudah memakai AI setiap hari, sebagian tanpa sepengetahuan perusahaan dan tanpa memahami risikonya. Uni Eropa bahkan memasukkan literasi AI ke dalam undang-undang: sejak 2 Februari 2025, Pasal 4 EU AI Act meminta penyedia dan pengguna sistem AI memperhatikan literasi AI staf mereka. Apa sebenarnya yang perlu dikuasai?',
        body: [
            { h2: 'Literasi AI bukan berarti bisa membuat model' },
            `Literasi AI adalah kemampuan memahami apa yang bisa dan tidak bisa dilakukan AI, memakainya secara efektif dan aman, serta menilai hasilnya secara kritis sesuai peran masing-masing. Staf administrasi, manajer, dan developer membutuhkan tingkat yang berbeda.`,
            { svg: 'layers', label: 'Tingkat literasi AI menurut peran', items: [{ t: 'Pembangun', d: 'Developer, data scientist: evaluasi, keamanan, integrasi.' }, { t: 'Pengambil keputusan', d: 'Manajer: memilih kasus pemakaian, risiko, tata kelola.' }, { t: 'Pengguna harian', d: 'Semua karyawan: memakai dengan aman, memeriksa hasil, menjaga data.' }] },

            { h2: 'Tentang EU AI Act Pasal 4' },
            `Versi awal Pasal 4 (berlaku sejak 2 Februari 2025) meminta penyedia dan pengguna (deployer) sistem AI mengambil langkah agar staf memiliki literasi AI yang memadai, disesuaikan dengan pengetahuan, pengalaman, dan konteks pemakaian. Paket <b>Digital Omnibus</b> (Regulation (EU) 2026/1744, berlaku sejak akhir Juli 2026) kemudian melunakkan rumusannya: organisasi diminta mengambil langkah untuk <b>mendukung</b> pengembangan literasi AI, tanpa harus menjamin tingkat tertentu bagi setiap individu, sementara Komisi dan negara anggota membantu terutama UKM.`,
            `Bagi perusahaan Indonesia, ini relevan bila melayani pasar atau klien di Uni Eropa, dan menjadi acuan praktik baik bagi yang lain. Terlepas dari rumusan hukumnya, karyawan yang paham risiko AI tetap mengurangi kesalahan dan kebocoran data.`,
            { callout: 'Ringkasan ini bukan nasihat hukum. Untuk kewajiban perusahaan Anda, konsultasikan dengan penasihat hukum yang memahami regulasi terkait.', kind: 'info', title: 'Catatan' },

            { h2: 'Delapan kompetensi dasar untuk semua karyawan' },
            { w: 'cards', title: 'Ketuk untuk contoh perilaku', items: [
                { tag: '1', front: 'Memahami cara kerja dasar', backTag: 'Perilaku', back: 'Tahu bahwa model bahasa menebak kata berikutnya, sehingga bisa terdengar yakin padahal salah.' },
                { tag: '2', front: 'Menulis permintaan yang jelas', backTag: 'Perilaku', back: 'Memberi konteks, tujuan, format, dan contoh.' },
                { tag: '3', front: 'Memeriksa hasil', backTag: 'Perilaku', back: 'Mengecek angka, nama, kutipan, dan klaim penting sebelum dipakai.' },
                { tag: '4', front: 'Menjaga data', backTag: 'Perilaku', back: 'Tidak memasukkan data pelanggan, rahasia dagang, atau data pribadi ke alat yang tidak disetujui perusahaan.' },
                { tag: '5', front: 'Mengenali bias', backTag: 'Perilaku', back: 'Waspada bila hasil AI menyamaratakan kelompok tertentu, misalnya dalam seleksi kandidat.' },
                { tag: '6', front: 'Transparan', backTag: 'Perilaku', back: 'Mengungkapkan pemakaian AI sesuai kebijakan, terutama dalam dokumen untuk klien.' },
                { tag: '7', front: 'Tahu kapan tidak memakai AI', backTag: 'Perilaku', back: 'Keputusan tentang orang, keuangan besar, atau medis tetap dipegang manusia.' },
                { tag: '8', front: 'Melaporkan masalah', backTag: 'Perilaku', back: 'Tahu ke mana melapor bila AI menghasilkan sesuatu yang salah atau berbahaya.' },
            ] },

            { h2: 'Contoh program pelatihan 4 minggu' },
            { svg: 'timeline', label: 'Program literasi AI', events: [['Minggu 1', 'Dasar dan kebijakan', 'Apa itu AI generatif, kebijakan perusahaan, alat yang disetujui.'], ['Minggu 2', 'Praktik per peran', 'Latihan dengan tugas nyata dari pekerjaan masing-masing.'], ['Minggu 3', 'Risiko', 'Halusinasi, privasi, bias, prompt injection, studi kasus kesalahan.'], ['Minggu 4', 'Proyek kecil', 'Setiap peserta memperbaiki satu alur kerja dan mengukur hasilnya.']] },

            { h2: 'Mengukur hasil, bukan kehadiran' },
            { ul: ['<b>Sebelum dan sesudah:</b> tes praktik singkat, misalnya memeriksa ringkasan AI yang mengandung tiga kesalahan.', '<b>Perilaku kerja:</b> berapa alur kerja yang diperbaiki dan berapa waktu yang dihemat.', '<b>Insiden:</b> jumlah kebocoran data atau kesalahan akibat AI yang dilaporkan.', '<b>Dokumentasi:</b> catatan pelatihan per karyawan untuk kebutuhan kepatuhan.'] },
            { w: 'checklist', title: 'Kesiapan organisasi', items: ['Ada kebijakan pemakaian AI yang tertulis dan mudah dipahami.', 'Ada daftar alat AI yang disetujui beserta aturan datanya.', 'Pelatihan disesuaikan per peran.', 'Ada saluran untuk bertanya dan melaporkan masalah.', 'Ada catatan siapa sudah mengikuti pelatihan.', 'Kebijakan ditinjau berkala karena teknologi berubah cepat.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Sejak kapan ketentuan literasi AI Pasal 4 EU AI Act berlaku?', options: ['2 Februari 2025', '1 Januari 2030', 'Belum berlaku'], answer: 0, why: 'Pasal 4 termasuk ketentuan yang paling awal berlaku; rumusannya kemudian dilunakkan lewat Digital Omnibus 2026.' },
                { q: 'Kompetensi paling dasar untuk semua karyawan?', options: ['Melatih model sendiri', 'Memakai dengan aman dan memeriksa hasilnya', 'Menulis kode Python'], answer: 1, why: 'Literasi AI disesuaikan peran; dasarnya aman dan kritis.' },
            ] },
        ],
        faq: [
            ['Apakah perusahaan kecil perlu program literasi AI?', 'Perlu, dalam skala kecil. Satu kebijakan singkat, satu sesi pelatihan praktik, dan daftar alat yang boleh dipakai sudah sangat membantu.'],
            ['Apakah Indonesia punya aturan serupa?', 'Indonesia memiliki pedoman etika AI dan UU Pelindungan Data Pribadi yang relevan untuk pemakaian AI. Pantau perkembangan regulasi karena terus berubah.'],
            ['Siapa yang sebaiknya melatih?', 'Kombinasi: tim TI dan hukum untuk kebijakan, serta trainer yang bisa menerjemahkannya ke praktik pekerjaan sehari-hari.'],
        ],
        sources: [
            ['EU AI Act, Article 4: AI literacy', 'https://artificialintelligenceact.eu/article/4/'],
            ['European Commission: AI Literacy, Questions and Answers', 'https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers'],
            ['Regulation (EU) 2026/1744 (Digital Omnibus on AI): ringkasan', 'https://www.nicfab.eu/en/posts/digital-omnibus-ai-official-journal/'],
            ['Privasi data saat memakai chatbot AI (artikel terkait)', 'https://muchson.web.id/artikel/privasi-data-saat-memakai-chatbot-ai/'],
        ],
    },
];
