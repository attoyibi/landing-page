const D = '2026-10-28';
const C = 'AI untuk Semua';

export default [
    {
        slug: 'ai-machine-learning-deep-learning-bedanya',
        title: 'AI, Machine Learning, dan Deep Learning: Apa Bedanya?',
        description: 'Penjelasan sederhana beda AI, machine learning, deep learning, dan AI generatif dengan analogi, contoh sehari-hari, diagram lapisan, dan kuis untuk menguji pemahaman.',
        date: D, category: C, tags: ['AI', 'machine learning', 'deep learning', 'AI generatif', 'kecerdasan buatan'], cta: 'jasa',
        lead: 'Istilah AI, machine learning, deep learning, dan AI generatif sering dipakai bergantian, bahkan di berita dan iklan. Padahal keempatnya punya hubungan yang jelas, seperti boneka matryoshka yang saling memuat. Memahaminya membantu Anda menilai klaim produk dan berita teknologi dengan lebih jernih.',
        body: [
            { h2: 'Hubungannya dalam satu gambar' },
            { svg: 'layers', label: 'Hubungan AI, machine learning, deep learning, dan AI generatif', items: [{ t: 'Kecerdasan Buatan (AI)', d: 'semua teknik membuat mesin melakukan tugas yang butuh kecerdasan' }, { t: 'Machine Learning', d: 'mesin belajar pola dari data, bukan diprogram aturan satu per satu' }, { t: 'Deep Learning', d: 'machine learning dengan jaringan saraf tiruan berlapis-lapis' }, { t: 'AI Generatif', d: 'model (sering berbasis deep learning) yang membuat teks, gambar, suara baru' }], caption: 'Setiap lapisan adalah bagian dari lapisan di atasnya.' },

            { h2: 'AI: payung besarnya' },
            `<b>Kecerdasan buatan</b> (AI) adalah bidang luas yang bertujuan membuat mesin melakukan tugas yang biasanya membutuhkan kecerdasan manusia: mengenali gambar, memahami bahasa, bermain catur, mengambil keputusan. Tidak semua AI belajar dari data. Program catur lama, misalnya, bekerja dengan aturan dan pencarian langkah yang ditulis manusia. Itu tetap disebut AI.`,

            { h2: 'Machine learning: belajar dari contoh' },
            `<b>Machine learning</b> adalah cara membuat AI dengan memberi mesin banyak contoh, lalu membiarkannya menemukan pola sendiri. Daripada menulis aturan "email yang mengandung kata X adalah spam", kita memberi ribuan email berlabel spam dan bukan spam, lalu algoritma mempelajari ciri-cirinya.`,
            { svg: 'versus', label: 'Pemrograman biasa vs machine learning', left: { title: 'Pemrograman biasa', items: ['Masukan: data + aturan', 'Keluaran: jawaban', 'Manusia menulis aturan', 'Cocok untuk aturan yang jelas'] }, right: { title: 'Machine learning', items: ['Masukan: data + jawaban', 'Keluaran: aturan (model)', 'Mesin menemukan pola', 'Cocok untuk pola yang rumit'] } },
            { table: { head: ['Jenis machine learning', 'Cara belajar', 'Contoh'], rows: [
                ['Supervised (dengan label)', 'Belajar dari contoh yang sudah diberi jawaban', 'Filter spam, prediksi harga rumah'],
                ['Unsupervised (tanpa label)', 'Mencari kelompok atau pola sendiri', 'Mengelompokkan pelanggan berdasarkan kebiasaan belanja'],
                ['Reinforcement (penguatan)', 'Belajar dari hadiah dan hukuman setelah mencoba', 'AI bermain game, robot belajar berjalan'],
            ] } },

            { h2: 'Deep learning: jaringan saraf berlapis' },
            `<b>Deep learning</b> adalah bagian dari machine learning yang memakai <b>jaringan saraf tiruan</b> dengan banyak lapisan. Setiap lapisan mempelajari ciri yang makin kompleks. Pada pengenalan wajah, lapisan awal mengenali garis dan tepi, lapisan tengah mengenali mata dan hidung, lapisan akhir mengenali wajah utuh.`,
            `Deep learning melonjak populer sekitar 2012, ketika jaringan saraf bernama AlexNet memenangkan kompetisi pengenalan gambar ImageNet dengan selisih besar. Kombinasi data yang melimpah dan kartu grafis (GPU) yang kuat membuat pendekatan ini praktis.`,
            { callout: 'Deep learning butuh data dan daya komputasi yang jauh lebih besar daripada machine learning klasik. Untuk banyak masalah bisnis dengan data tabel sederhana, metode machine learning klasik masih sering lebih tepat dan lebih mudah dijelaskan.', kind: 'info', title: 'Tidak selalu yang paling canggih' },

            { h2: 'AI generatif: membuat konten baru' },
            `<b>AI generatif</b> adalah model yang menghasilkan konten baru: teks (ChatGPT, Claude, Gemini), gambar, musik, atau video. Model bahasa besar (LLM) dilatih menebak kata berikutnya dari teks dalam jumlah sangat besar, lalu disempurnakan agar bisa mengikuti instruksi. Banyak model ini dibangun di atas arsitektur <b>Transformer</b>, yang diperkenalkan dalam makalah "Attention Is All You Need" (2017).`,

            { h2: 'Contoh di sekitar Anda' },
            { table: { head: ['Contoh', 'Termasuk', 'Kenapa'], rows: [
                ['Filter spam email', 'Machine learning', 'Belajar dari contoh email berlabel'],
                ['Rekomendasi video', 'Machine learning (sering deep learning)', 'Belajar dari riwayat tontonan jutaan orang'],
                ['Buka kunci HP dengan wajah', 'Deep learning', 'Jaringan saraf mengenali ciri wajah'],
                ['Chatbot yang menulis email', 'AI generatif', 'Membuat teks baru'],
                ['Lawan komputer di game papan klasik', 'AI (belum tentu machine learning)', 'Bisa memakai aturan dan pencarian langkah'],
            ] } },

            { h2: 'Uji pemahaman' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pernyataan mana yang benar?', options: ['Semua AI adalah deep learning', 'Semua deep learning adalah machine learning', 'Machine learning lebih luas dari AI'], answer: 1, why: 'Deep learning adalah bagian dari machine learning, yang merupakan bagian dari AI.' },
                { q: 'Aplikasi memberi label "spam" setelah belajar dari 10.000 email berlabel. Ini contoh?', options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning'], answer: 0, why: 'Belajar dari contoh yang sudah diberi jawaban adalah supervised learning.' },
                { q: 'Chatbot yang menulis puisi baru termasuk?', options: ['AI generatif', 'Filter berbasis aturan', 'Database'], answer: 0, why: 'Ia menghasilkan konten baru.' },
            ] },
            `Memahami lapisan-lapisan ini membantu Anda menilai klaim produk. "Didukung AI" bisa berarti apa saja, dari aturan sederhana sampai model deep learning raksasa. Pertanyaan yang lebih berguna: <i>data apa yang dipakai, seberapa akurat, dan apa risikonya bila salah?</i>`,
        ],
        faq: [
            ['Apa beda AI dan machine learning?', 'AI adalah bidang luas membuat mesin cerdas. Machine learning adalah salah satu cara membuat AI, yaitu dengan belajar pola dari data.'],
            ['Apa beda machine learning dan deep learning?', 'Deep learning adalah bagian dari machine learning yang memakai jaringan saraf tiruan berlapis-lapis, biasanya membutuhkan lebih banyak data dan komputasi.'],
            ['ChatGPT termasuk jenis apa?', 'AI generatif berbasis model bahasa besar, yang dibangun dengan deep learning (arsitektur Transformer).'],
            ['Apakah semua AI belajar dari data?', 'Tidak. Ada AI berbasis aturan dan pencarian yang ditulis manusia, seperti program catur klasik.'],
        ],
        sources: [
            ['Google: Machine Learning Crash Course', 'https://developers.google.com/machine-learning/crash-course'],
            ['Vaswani dkk. (2017). Attention Is All You Need', 'https://arxiv.org/abs/1706.03762'],
            ['Elements of AI (University of Helsinki)', 'https://www.elementsofai.com/'],
            ['Apa itu AI? (artikel terkait)', 'https://muchson.web.id/artikel/apa-itu-ai-kecerdasan-buatan-untuk-pemula/'],
        ],
    },

    {
        slug: 'ai-detector-akurat-atau-tidak',
        title: 'AI Detector Akurat atau Tidak? Fakta Pendeteksi Tulisan AI',
        description: 'Seberapa akurat pendeteksi tulisan AI? Fakta riset tentang salah deteksi, bias terhadap penulis non-native, kenapa OpenAI menutup detektornya, dan cara menilai karya yang lebih adil.',
        date: D, category: C, tags: ['AI detector', 'deteksi tulisan AI', 'ChatGPT', 'integritas akademik', 'Turnitin'], cta: 'jasa',
        lead: 'Mahasiswa panik karena esai yang ditulisnya sendiri dinilai "90% AI". Guru bingung harus percaya hasil detektor atau tidak. Pendeteksi tulisan AI kini banyak dipakai, tetapi bukti menunjukkan alat ini jauh dari sempurna. Artikel ini merangkum faktanya dan menawarkan cara yang lebih adil untuk menilai keaslian tulisan.',
        body: [
            { h2: 'Bagaimana AI detector bekerja?' },
            `Kebanyakan pendeteksi mengukur seberapa "mudah ditebak" sebuah teks. Model bahasa cenderung memilih kata yang paling mungkin, sehingga teks buatan AI sering punya <b>perplexity</b> (tingkat kejutan) rendah dan variasi kalimat yang seragam. Detektor menganggap teks yang sangat mudah ditebak sebagai kemungkinan buatan AI.`,
            `Masalahnya, tulisan manusia juga bisa mudah ditebak: tulisan yang sangat formal, ringkasan teknis, atau tulisan dari orang yang menulis dalam bahasa kedua dengan kosakata terbatas.`,

            { h2: 'Apa kata bukti?' },
            { ul: [
                '<b>OpenAI menutup detektornya sendiri.</b> OpenAI meluncurkan AI Classifier pada Januari 2023. Dalam uji mereka, alat itu hanya mengenali 26% teks buatan AI sebagai "kemungkinan AI", dan salah menandai 9% teks manusia sebagai buatan AI. Pada 20 Juli 2023, OpenAI menghentikannya karena akurasinya rendah.',
                '<b>Bias terhadap penulis non-native.</b> Studi Liang dan rekan dari Stanford (2023, jurnal <i>Patterns</i>) menguji tujuh detektor. Esai siswa kelas 8 AS dinilai hampir sempurna sebagai tulisan manusia, tetapi rata-rata lebih dari separuh (sekitar 61%) esai TOEFL dari penulis non-native salah dicap sebagai buatan AI.',
                '<b>Mudah dikelabui.</b> Studi yang sama menunjukkan bahwa meminta AI menulis ulang dengan kosakata lebih beragam bisa menurunkan deteksi, sehingga orang yang berniat curang bisa lolos sementara orang jujur bisa tertuduh.',
            ] },
            { callout: 'Bagi pelajar Indonesia yang menulis dalam bahasa Inggris, temuan bias ini sangat relevan. Hasil detektor yang tinggi bukan bukti bahwa tulisan dibuat AI.', kind: 'warn', title: 'Relevan untuk kita' },

            { h2: 'Kenapa salah deteksi berbahaya' },
            { svg: 'matrix', label: 'Empat kemungkinan hasil detektor', x: 'Sebenarnya ditulis AI', y: 'Detektor bilang AI', quads: [{ t: 'Benar positif', d: 'AI terdeteksi dengan benar' }, { t: 'Salah positif', d: 'Tulisan manusia dituduh AI: merugikan orang jujur' }, { t: 'Salah negatif', d: 'Tulisan AI lolos' }, { t: 'Benar negatif', d: 'Tulisan manusia dinilai manusia' }] },
            `Dalam pendidikan, <b>salah positif</b> paling berbahaya karena menuduh orang yang tidak bersalah. Satu tuduhan bisa berdampak pada nilai, beasiswa, dan reputasi. Karena itu, banyak universitas dan pembuat alat sendiri menyarankan agar skor detektor <b>tidak dijadikan satu-satunya bukti</b>.`,

            { h2: 'Bila tulisan Anda dituduh buatan AI' },
            { w: 'checklist', title: 'Bukti proses menulis', desc: 'Kebiasaan ini melindungi Anda bila suatu saat dituduh.', items: ['Menulis di Google Docs atau Word dengan riwayat versi aktif.', 'Menyimpan kerangka, catatan, dan draf awal.', 'Menyimpan sumber bacaan dan kutipan yang dipakai.', 'Bisa menjelaskan isi dan alasan pilihan kata secara lisan.', 'Mencatat bila memakai AI untuk bantuan tertentu (misalnya memeriksa tata bahasa), sesuai aturan kelas.'] },
            { ol: [
                '<b>Tetap tenang</b> dan minta penjelasan dasar penilaiannya.',
                '<b>Tunjukkan riwayat versi</b> dokumen dan draf-draf awal.',
                '<b>Tawarkan menjelaskan isinya</b> secara lisan atau menulis ulang bagian tertentu di depan dosen atau guru.',
                '<b>Rujuk kebijakan kampus</b> tentang penggunaan alat deteksi dan prosedur banding.',
            ] },

            { h2: 'Untuk guru dan dosen: cara menilai yang lebih adil' },
            { w: 'cards', title: 'Ketuk untuk melihat alasannya', items: [
                { tag: 'Praktik', front: 'Nilai proses, bukan hanya produk akhir.', backTag: 'Kenapa', back: 'Kerangka, draf, dan refleksi sulit dipalsukan dan menunjukkan pemahaman.' },
                { tag: 'Praktik', front: 'Tambahkan komponen lisan singkat.', backTag: 'Kenapa', back: 'Mahasiswa yang menulis sendiri bisa menjelaskan pilihan dan argumennya.' },
                { tag: 'Praktik', front: 'Tugas yang terkait pengalaman atau data lokal.', backTag: 'Kenapa', back: 'AI umum kesulitan menulis tentang pengamatan pribadi atau data yang dikumpulkan sendiri.' },
                { tag: 'Praktik', front: 'Buat aturan AI yang jelas di awal.', backTag: 'Kenapa', back: 'Kapan AI boleh dipakai dan bagaimana mencatatnya, sehingga mahasiswa tidak menebak-nebak.' },
            ] },
            `Pendeteksi AI mungkin membaik di masa depan, dan beberapa penyedia mengembangkan penanda (watermark) atau metode asal-usul konten. Namun untuk saat ini, penilaian manusia yang memahami proses belajar tetap jauh lebih dapat diandalkan.`,
        ],
        faq: [
            ['Apakah AI detector akurat?', 'Tidak cukup akurat untuk dijadikan bukti tunggal. Riset menunjukkan salah deteksi cukup sering, terutama pada tulisan penutur non-native.'],
            ['Kenapa tulisan saya dianggap AI padahal menulis sendiri?', 'Detektor sering menandai tulisan yang formal, ringkas, atau memakai kosakata terbatas, yang juga umum pada tulisan manusia.'],
            ['Apakah OpenAI punya alat deteksi tulisan AI?', 'OpenAI pernah merilis AI Classifier pada Januari 2023, lalu menghentikannya pada Juli 2023 karena akurasinya rendah.'],
            ['Bagaimana membuktikan tulisan buatan sendiri?', 'Simpan riwayat versi dokumen, draf, catatan, dan sumber, serta siap menjelaskan isi tulisan secara lisan.'],
        ],
        sources: [
            ['OpenAI: New AI classifier for indicating AI-written text (dengan catatan penghentian)', 'https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/'],
            ['Liang, W. dkk. (2023). GPT detectors are biased against non-native English writers (arXiv)', 'https://arxiv.org/abs/2304.02819'],
            ['Stanford HAI: AI-Detectors Biased Against Non-Native English Writers', 'https://hai.stanford.edu/news/ai-detectors-biased-against-non-native-english-writers'],
            ['Memakai AI untuk tugas kuliah secara etis (artikel terkait)', 'https://muchson.web.id/artikel/memakai-ai-untuk-tugas-kuliah-secara-etis/'],
        ],
    },

    {
        slug: 'ai-untuk-guru-modul-ajar-soal-dan-umpan-balik',
        title: 'AI untuk Guru: Modul Ajar, Soal, dan Umpan Balik',
        description: 'Cara guru memakai AI untuk menyusun modul ajar, membuat soal berlevel, memberi umpan balik, dan menyesuaikan materi, lengkap dengan contoh prompt, batasan, dan etika yang perlu dijaga.',
        date: D, category: C, tags: ['AI untuk guru', 'modul ajar AI', 'membuat soal dengan AI', 'ChatGPT untuk guru', 'pembelajaran mendalam'], cta: 'jasa',
        lead: 'Guru Indonesia menghabiskan banyak waktu di luar kelas: menyusun modul ajar, membuat soal, menilai, dan menulis laporan. AI generatif bisa menghemat sebagian besar waktu itu, asalkan dipakai sebagai asisten yang diperiksa, bukan pengganti penilaian profesional guru. Artikel ini memberi contoh prompt yang siap pakai dan batasan yang perlu dijaga.',
        body: [
            { h2: 'Di mana AI paling membantu guru' },
            { table: { head: ['Tugas', 'Bantuan AI', 'Yang tetap dikerjakan guru'], rows: [
                ['Menyusun modul ajar', 'Kerangka tujuan, langkah kegiatan, asesmen', 'Menyesuaikan dengan murid dan konteks sekolah'],
                ['Membuat soal', 'Variasi soal berlevel, kunci jawaban, pengecoh', 'Memeriksa kebenaran dan kesesuaian'],
                ['Diferensiasi', 'Versi materi lebih sederhana atau lebih menantang', 'Menentukan siapa butuh versi apa'],
                ['Umpan balik', 'Draf komentar berdasarkan rubrik', 'Personalisasi dan keputusan nilai'],
                ['Komunikasi', 'Draf surat ke orang tua, pengumuman', 'Nada, fakta, dan kerahasiaan'],
            ] } },

            { h2: 'Rumus prompt untuk guru' },
            `Prompt yang baik memberi AI peran, konteks, tugas, format, dan batasan. Contoh untuk modul ajar:`,
            { w: 'builder', title: 'Pembuat prompt modul ajar', desc: 'Isi kolom, lalu salin prompt-nya ke asisten AI pilihan Anda.', fields: [
                { id: 'mapel', label: 'Mata pelajaran dan kelas', value: 'IPAS kelas 5 SD' },
                { id: 'topik', label: 'Topik', value: 'siklus air' },
                { id: 'waktu', label: 'Alokasi waktu', value: '2 x 35 menit' },
                { id: 'murid', label: 'Karakteristik murid', placeholder: 'mis. 28 murid, sebagian belum lancar membaca, suka kegiatan praktik', long: true },
                { id: 'alat', label: 'Sarana yang tersedia', placeholder: 'mis. papan tulis, gelas plastik, air, tanpa proyektor' },
            ], template: 'Kamu adalah perancang pembelajaran untuk sekolah dasar di Indonesia.\nBuatkan modul ajar {mapel} tentang {topik}, alokasi {waktu}.\nKarakteristik murid: {murid}\nSarana: {alat}\n\nSertakan:\n1. Tujuan pembelajaran yang terukur\n2. Pemantik (pertanyaan pembuka)\n3. Langkah kegiatan dengan durasi, utamakan kegiatan praktik\n4. Diferensiasi untuk murid yang butuh dukungan dan yang siap tantangan\n5. Asesmen formatif sederhana\n\nGunakan bahasa Indonesia yang jelas. Jangan mengarang data atau kutipan; tandai bagian yang perlu saya periksa.' },

            { h2: 'Membuat soal berlevel' },
            `AI sangat membantu membuat variasi soal sesuai tingkat berpikir, misalnya mengikuti Taksonomi Bloom: mengingat, memahami, menerapkan, menganalisis, mengevaluasi, mencipta.`,
            { code: 'Buat 6 soal pilihan ganda tentang pecahan untuk kelas 4 SD:\n- 2 soal mengingat, 2 soal menerapkan, 2 soal menganalisis (soal cerita)\n- Setiap soal 4 pilihan, satu jawaban benar\n- Pengecoh berasal dari kesalahan umum murid (sebutkan kesalahan apa)\n- Sertakan kunci dan pembahasan singkat\n- Gunakan konteks sehari-hari di Indonesia (pasar, kue, uang rupiah)' },
            { callout: 'Selalu kerjakan sendiri soal buatan AI sebelum dipakai. AI kadang membuat soal dengan dua jawaban benar, kunci yang salah, atau angka yang tidak masuk akal.', kind: 'bad', title: 'Wajib diperiksa' },

            { h2: 'Umpan balik berdasarkan rubrik' },
            `Untuk tugas menulis, AI bisa membantu menyusun draf umpan balik berdasarkan rubrik yang Anda berikan. Prinsip penting: <b>hapus nama dan identitas murid</b> sebelum menempelkan tulisannya, dan perlakukan hasil AI sebagai draf yang Anda sunting.`,
            { code: 'Berikut rubrik menulis teks deskripsi (skor 1-4) untuk aspek: struktur, detail, kosakata, ejaan.\n[tempel rubrik]\nBerikut tulisan murid (tanpa nama):\n[tempel tulisan]\nBerikan: 2 kekuatan spesifik dengan kutipan, 2 saran perbaikan yang bisa langsung dilakukan, dan 1 pertanyaan untuk memancing murid merevisi. Gunakan bahasa yang hangat untuk anak kelas 5.' },

            { h2: 'Batasan dan etika' },
            { w: 'checklist', title: 'Prinsip memakai AI di sekolah', desc: 'Centang yang sudah Anda terapkan.', items: ['Tidak memasukkan data pribadi murid (nama, nilai, kondisi keluarga) ke layanan AI umum.', 'Memeriksa kebenaran fakta, soal, dan kunci jawaban.', 'Mengikuti ketentuan usia layanan AI dan kebijakan sekolah sebelum murid memakainya.', 'Transparan kepada murid kapan AI boleh dan tidak boleh dipakai.', 'Keputusan nilai tetap di tangan guru.', 'Menyesuaikan hasil dengan konteks lokal dan nilai sekolah.'] },
            `UNESCO dalam panduan AI generatif untuk pendidikan (2023) menekankan perlindungan data, validasi konten, dan peran manusia, serta mengusulkan agar negara mempertimbangkan batas usia minimal 13 tahun untuk pemakaian AI generatif di kelas. Prinsip-prinsip ini sejalan dengan pendekatan pembelajaran mendalam yang mendorong pemahaman, bukan sekadar menyelesaikan tugas.`,

            { h2: 'Hitung waktu yang bisa dihemat' },
            { w: 'calc', title: 'Penghematan waktu guru', desc: 'Perkiraan kasar. Tetap sisihkan waktu untuk memeriksa hasil AI.', inputs: [
                { id: 'modul', label: 'Jam menyusun modul dan soal per minggu', value: 6, min: 1, max: 20, step: 1 },
                { id: 'hemat', label: 'Perkiraan waktu yang dihemat (%)', value: 35, min: 0, max: 70, step: 5 },
                { id: 'periksa', label: 'Jam tambahan untuk memeriksa hasil AI', value: 1, min: 0, max: 5, step: 0.5 },
            ], outputs: [
                { label: 'Jam bersih dihemat per minggu', expr: 'Math.max(0, modul * hemat / 100 - periksa)', fmt: 'num', unit: 'jam', big: true },
                { label: 'Per semester (18 minggu)', expr: 'Math.max(0, modul * hemat / 100 - periksa) * 18', fmt: 'num', unit: 'jam' },
            ] },
        ],
        faq: [
            ['Bolehkah guru memakai ChatGPT untuk membuat modul ajar?', 'Boleh sebagai asisten, dengan memeriksa kebenaran isi dan menyesuaikannya dengan murid serta kebijakan sekolah.'],
            ['Apakah aman memasukkan data murid ke AI?', 'Sebaiknya tidak. Hapus nama dan identitas murid sebelum menempelkan tulisan atau data ke layanan AI umum.'],
            ['Bagaimana membuat soal berkualitas dengan AI?', 'Beri jenjang, topik, level berpikir, format, dan konteks lokal, minta pengecoh dari kesalahan umum, lalu kerjakan sendiri soalnya untuk memeriksa.'],
            ['Apakah murid SD boleh memakai AI generatif?', 'Banyak layanan mensyaratkan usia minimal 13 tahun, dan UNESCO mengusulkan batas serupa untuk pemakaian di kelas. Untuk murid SD, pemakaian sebaiknya dipandu guru.'],
        ],
        sources: [
            ['UN News: UNESCO calls for regulations on AI use in schools (2023)', 'https://news.un.org/en/node/1140477'],
            ['GTK Kemendikdasmen: Permendikdasmen 13/2025 dan pembelajaran mendalam', 'https://gtk.kemendikdasmen.go.id/news/siaran-pers/c034d26f-83b6-4b4b-926c-b572e665e477'],
            ['Cara menulis prompt yang baik (artikel terkait)', 'https://muchson.web.id/artikel/prompt-engineering-dasar-cara-menulis-prompt-yang-baik/'],
            ['Merancang kurikulum dengan ADDIE dan Bloom (artikel terkait)', 'https://muchson.web.id/artikel/merancang-kurikulum-pelatihan-addie-dan-taksonomi-bloom/'],
        ],
    },

    {
        slug: 'cara-belajar-bahasa-inggris-dengan-ai',
        title: 'Cara Belajar Bahasa Inggris dengan AI: 8 Latihan Efektif',
        description: 'Delapan cara memakai AI untuk belajar bahasa Inggris secara efektif: percakapan, koreksi tulisan, kosakata dengan spaced repetition, latihan wawancara, dan prompt siap pakai sesuai level CEFR.',
        date: D, category: C, tags: ['belajar bahasa Inggris', 'AI untuk belajar', 'ChatGPT bahasa Inggris', 'speaking practice', 'CEFR'], cta: 'jasa',
        lead: 'Banyak orang Indonesia bisa membaca bahasa Inggris, tetapi kaku saat berbicara dan menulis karena jarang punya teman latihan. Chatbot AI bisa menjadi partner latihan yang sabar, tersedia kapan saja, dan tidak menghakimi. Kuncinya adalah memakai AI untuk berlatih secara aktif, bukan untuk menerjemahkan semuanya.',
        body: [
            { h2: 'Tentukan level Anda dulu' },
            `Kerangka <b>CEFR</b> (Common European Framework of Reference for Languages) dari Dewan Eropa membagi kemampuan bahasa menjadi enam level, dari A1 (pemula) sampai C2 (mahir). Menyebut level di prompt membuat AI menyesuaikan kosakata dan kecepatan.`,
            { table: { head: ['Level', 'Gambaran singkat'], rows: [
                ['A1-A2', 'Kalimat sederhana tentang diri sendiri dan kebutuhan sehari-hari'],
                ['B1', 'Bisa bercerita tentang pengalaman dan menangani situasi umum saat bepergian'],
                ['B2', 'Bisa berdiskusi tentang topik umum dan pekerjaan dengan cukup lancar'],
                ['C1-C2', 'Lancar dan fleksibel untuk akademik dan profesional'],
            ] } },

            { h2: '8 latihan dengan AI' },
            { h3: '1. Percakapan dengan peran' },
            { code: 'Let\'s practice English. My level is B1.\nYou are a hotel receptionist and I am a guest checking in.\nKeep your replies short (1-2 sentences) and ask me questions.\nAfter every 3 of my messages, list my grammar mistakes with corrections in a short table.' },
            { h3: '2. Koreksi tulisan yang mengajar' },
            `Jangan minta AI "perbaiki tulisan saya" saja, karena Anda tidak belajar apa-apa. Minta penjelasan kesalahannya:`,
            { code: 'Here is my paragraph. Do not rewrite it fully.\n1) Underline each mistake and explain the rule briefly in simple English.\n2) Then give me a corrected version.\n3) Give me 3 similar sentences to practice the same rule.\n\n[tulisan Anda]' },
            { h3: '3. Kosakata dengan konteks' },
            `Minta 10 kata yang relevan dengan pekerjaan atau minat Anda, masing-masing dengan contoh kalimat. Masukkan ke aplikasi kartu hafalan dan ulang dengan jadwal berjarak (spaced repetition). Kosakata yang diulang dengan jeda bertahap jauh lebih melekat daripada dihafal sekaligus.`,
            { h3: '4. Latihan wawancara kerja' },
            { code: 'Act as an interviewer for a junior web developer position at an international company.\nAsk me one question at a time. After each answer, rate it (1-5) for clarity and grammar, and suggest a better phrasing.' },
            { h3: '5. Menjelaskan ulang (teknik Feynman)' },
            `Baca artikel berbahasa Inggris, lalu jelaskan isinya ke AI dengan kata-kata Anda sendiri. Minta AI menilai apakah penjelasan Anda akurat dan memperbaiki bahasanya.`,
            { h3: '6. Latihan berbicara' },
            `Banyak aplikasi chatbot kini punya mode suara. Pakai untuk berlatih pengucapan dan kelancaran. Minta AI memberi tahu bila kalimat Anda terdengar kaku dan menawarkan versi yang lebih natural.`,
            { h3: '7. Membaca bertingkat' },
            `Tempel artikel yang menarik bagi Anda, lalu minta AI menyederhanakannya ke level B1 lengkap dengan daftar kosakata sulit. Setelah paham, baca versi aslinya.`,
            { h3: '8. Kuis harian' },
            `Minta 5 soal setiap hari tentang tata bahasa yang sering Anda salahkan. Menguji diri sendiri (retrieval practice) terbukti lebih efektif daripada membaca ulang.`,

            { h2: 'Jadwal latihan 20 menit sehari' },
            { w: 'timer', title: 'Sesi latihan harian', desc: 'Satu sesi singkat yang konsisten lebih baik daripada maraton seminggu sekali.', phases: [{ label: 'Kosakata (kartu hafalan)', sec: 300, hint: 'Ulang kartu yang jatuh tempo hari ini.' }, { label: 'Percakapan dengan AI', sec: 600, hint: 'Pakai skenario peran, minta koreksi di akhir.' }, { label: 'Tulis 5 kalimat dan minta koreksi', sec: 300, hint: 'Tentang kegiatan hari ini.' }] },

            { h2: 'Hal yang perlu diwaspadai' },
            { w: 'cards', title: 'Ketuk untuk melihat solusinya', items: [
                { tag: 'Jebakan', front: 'Menerjemahkan semuanya dengan AI.', backTag: 'Solusi', back: 'Coba tulis sendiri dulu, baru minta koreksi. Terjemahan instan membuat Anda tidak berlatih.' },
                { tag: 'Jebakan', front: 'Percaya semua koreksi AI.', backTag: 'Solusi', back: 'AI kadang salah, terutama untuk nuansa dan ungkapan. Cek kamus untuk hal penting.' },
                { tag: 'Jebakan', front: 'Hanya membaca, tidak berbicara.', backTag: 'Solusi', back: 'Pakai mode suara atau baca jawaban Anda keras-keras.' },
                { tag: 'Jebakan', front: 'Tidak ada target.', backTag: 'Solusi', back: 'Tentukan target konkret: wawancara kerja, IELTS, presentasi. Latihan jadi terarah.' },
            ] },
        ],
        faq: [
            ['Apakah AI efektif untuk belajar bahasa Inggris?', 'Efektif sebagai partner latihan percakapan dan pemberi umpan balik, terutama bila Anda aktif menulis dan berbicara, bukan sekadar menerjemahkan.'],
            ['Prompt apa yang bagus untuk latihan speaking?', 'Sebutkan level Anda, beri AI peran dalam skenario, minta jawaban pendek dan pertanyaan balik, serta koreksi berkala.'],
            ['Berapa lama latihan per hari?', 'Sekitar 15-30 menit setiap hari dengan konsisten lebih efektif daripada sesi panjang yang jarang.'],
            ['Apakah koreksi AI selalu benar?', 'Tidak selalu. Untuk hal penting seperti dokumen resmi, periksa dengan kamus atau penutur yang mahir.'],
        ],
        sources: [
            ['Council of Europe: Common European Framework of Reference for Languages (CEFR)', 'https://www.coe.int/en/web/common-european-framework-reference-languages'],
            ['Roediger & Karpicke (2006). Test-enhanced learning', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x'],
            ['Spaced repetition (artikel terkait)', 'https://muchson.web.id/artikel/spaced-repetition-cara-belajar-tahan-lama/'],
        ],
    },

    {
        slug: 'ai-untuk-membuat-cv-dan-surat-lamaran',
        title: 'AI untuk Membuat CV dan Surat Lamaran yang Tetap Jujur',
        description: 'Cara memakai AI untuk menyusun CV dan surat lamaran: menggali pencapaian, menyesuaikan dengan lowongan, prompt siap pakai, dan batasan agar tidak terdengar generik atau mengarang.',
        date: D, category: C, tags: ['CV dengan AI', 'surat lamaran kerja', 'ChatGPT CV', 'melamar kerja', 'karier'], cta: 'jasa',
        lead: 'Recruiter kini sering menerima surat lamaran yang terdengar mirip satu sama lain: "I am writing to express my keen interest..." Tanda khas teks AI yang tidak disunting. AI bisa sangat membantu menyusun CV dan surat lamaran, tetapi hanya bila dipakai untuk menggali dan merapikan cerita Anda sendiri, bukan mengarang yang baru.',
        body: [
            { h2: 'Peran AI yang tepat' },
            { svg: 'versus', label: 'Pemakaian AI yang tepat vs keliru', left: { title: 'Tepat', items: ['Menggali pencapaian lewat pertanyaan', 'Menyesuaikan kata kunci dengan lowongan', 'Merapikan kalimat dan struktur', 'Memeriksa ejaan dan konsistensi'] }, right: { title: 'Keliru', items: ['Mengarang pengalaman atau angka', 'Memakai teks generik tanpa disunting', 'Menyalin seluruh deskripsi lowongan', 'Mengirim tanpa membaca ulang'] } },

            { h2: 'Langkah 1: gali pencapaian dengan wawancara' },
            `Bagian tersulit CV adalah menuliskan dampak, bukan tugas. Biarkan AI mewawancarai Anda:`,
            { code: 'Kamu adalah konsultan karier. Wawancarai saya untuk menggali pencapaian di pekerjaan terakhir saya sebagai [posisi].\nTanyakan satu pertanyaan setiap kali, fokus pada: masalah yang saya selesaikan, angka atau hasil, alat yang saya pakai, dan dampaknya bagi tim atau pelanggan.\nSetelah 6 pertanyaan, rangkum menjadi 4 poin CV dengan format: kata kerja + apa yang dilakukan + hasil.\nJangan menambahkan angka yang tidak saya sebutkan.' },
            { callout: 'Kalimat "jangan menambahkan angka yang tidak saya sebutkan" sangat penting. AI cenderung mempercantik dengan angka karangan, dan angka palsu di CV bisa merusak kepercayaan saat wawancara.', kind: 'warn', title: 'Jaga kejujuran' },

            { h2: 'Langkah 2: sesuaikan dengan lowongan' },
            { w: 'builder', title: 'Prompt penyesuaian CV', desc: 'Tempel deskripsi lowongan dan poin CV Anda.', fields: [
                { id: 'posisi', label: 'Posisi yang dilamar', placeholder: 'mis. Digital Marketing Specialist' },
                { id: 'lowongan', label: 'Deskripsi lowongan (tempel)', long: true },
                { id: 'cv', label: 'Poin pengalaman Anda saat ini', long: true },
            ], template: 'Saya melamar posisi {posisi}.\nDeskripsi lowongan:\n{lowongan}\n\nPoin pengalaman saya:\n{cv}\n\nTugas:\n1. Daftar 8 kata kunci dan keterampilan terpenting dari lowongan.\n2. Tandai mana yang sudah tercermin di poin saya, mana yang belum.\n3. Sarankan perbaikan kalimat poin saya agar memakai istilah lowongan SECARA JUJUR (hanya bila memang sesuai pengalaman saya).\n4. Jangan menambahkan pengalaman atau angka baru.' },

            { h2: 'Langkah 3: surat lamaran yang tidak generik' },
            `Surat lamaran yang menarik menjawab tiga hal: kenapa perusahaan ini, kenapa Anda cocok (dengan bukti), dan apa yang akan Anda bawa. Beri AI bahan yang spesifik:`,
            { ul: [
                'Satu hal spesifik tentang perusahaan yang membuat Anda tertarik (produk, nilai, proyek terbaru).',
                'Satu cerita pencapaian yang paling relevan dengan posisi.',
                'Gaya bahasa yang diinginkan: formal, semi-formal, bahasa Indonesia atau Inggris.',
                'Batas panjang, misalnya 250 kata.',
            ] },
            { table: { head: ['Frasa generik (hindari)', 'Ganti dengan sesuatu yang spesifik'], rows: [
                ['"Saya adalah pekerja keras dan cepat belajar."', '"Dalam 3 bulan saya mempelajari Google Analytics dan menyusun laporan mingguan untuk tim."'],
                ['"Saya sangat tertarik dengan perusahaan Anda."', '"Fitur cicilan tanpa kartu kredit yang baru diluncurkan menarik bagi saya karena..."'],
                ['"Saya yakin bisa memberi kontribusi."', '"Pengalaman saya mengelola 5 akun media sosial UMKM relevan untuk..."'],
            ] } },

            { h2: 'Langkah 4: periksa sebelum mengirim' },
            { w: 'checklist', title: 'Daftar periksa akhir', desc: 'Centang sebelum mengirim lamaran.', items: ['Semua angka dan pengalaman benar dan bisa Anda jelaskan di wawancara.', 'Tidak ada frasa generik khas AI yang belum disunting.', 'Nama perusahaan dan posisi benar (bukan sisa lamaran lain).', 'Format CV sederhana dan ramah ATS.', 'Dibaca keras-keras: terdengar seperti Anda, bukan robot.', 'Data pribadi sensitif (NIK, alamat lengkap) tidak dimasukkan ke AI.'] },
            `Recruiter sering menanyakan detail dari CV saat wawancara. Apa pun yang ditulis dengan bantuan AI harus bisa Anda ceritakan dengan lancar dan jujur. Di situlah perbedaan antara CV yang dibantu AI dan CV yang ditulis oleh AI.`,
        ],
        faq: [
            ['Bolehkah membuat CV dengan ChatGPT?', 'Boleh sebagai alat bantu menggali, menyusun, dan merapikan, selama isinya jujur dan Anda sunting sendiri.'],
            ['Apakah recruiter bisa tahu surat lamaran buatan AI?', 'Teks generik khas AI mudah dikenali. Yang lebih penting, isi yang tidak spesifik membuat lamaran kurang meyakinkan.'],
            ['Bagaimana agar CV dari AI tidak generik?', 'Beri AI cerita, angka, dan konteks nyata Anda, lalu sunting hasilnya agar sesuai gaya bicara Anda.'],
            ['Apakah aman memasukkan data pribadi ke AI?', 'Hindari memasukkan NIK, alamat lengkap, dan data sensitif. Nama posisi dan pengalaman kerja umumnya cukup.'],
        ],
        sources: [
            ['CV ramah ATS (artikel terkait)', 'https://muchson.web.id/artikel/cv-ramah-ats-cara-membuat-cv-yang-lolos-seleksi-awal/'],
            ['Privasi data saat memakai chatbot AI (artikel terkait)', 'https://muchson.web.id/artikel/privasi-data-saat-memakai-chatbot-ai/'],
            ['Halusinasi AI: kenapa AI mengarang (artikel terkait)', 'https://muchson.web.id/artikel/halusinasi-ai-kenapa-ai-mengarang-jawaban/'],
        ],
    },

    {
        slug: 'belajar-ai-dari-nol-roadmap-untuk-pemula',
        title: 'Belajar AI dari Nol: Roadmap untuk Pemula (Juga Non-IT)',
        description: 'Peta jalan belajar AI dari nol untuk pemula, termasuk yang bukan lulusan IT: tiga jalur (pengguna cerdas, pembuat solusi, engineer), urutan materi, sumber gratis, dan proyek latihan.',
        date: D, category: C, tags: ['belajar AI', 'roadmap AI', 'belajar machine learning', 'kursus AI gratis', 'karier AI'], cta: 'jasa',
        lead: 'Ingin belajar AI tetapi bingung mulai dari mana? Sebagian roadmap langsung menyarankan kalkulus dan aljabar linear, yang membuat banyak orang mundur. Padahal tidak semua orang perlu menjadi peneliti AI. Artikel ini membagi jalur belajar AI menjadi tiga, sesuai tujuan Anda, lengkap dengan urutan materi dan sumber gratis.',
        body: [
            { h2: 'Pilih jalur sesuai tujuan' },
            { w: 'choose', title: 'Jalur mana yang cocok untuk Anda?', questions: [
                { q: 'Apa tujuan utama Anda?', options: [{ t: 'Bekerja lebih produktif dengan AI di pekerjaan saat ini', add: { pengguna: 3 } }, { t: 'Membuat otomasi atau aplikasi AI untuk bisnis', add: { pembuat: 3 } }, { t: 'Berkarier sebagai data scientist atau ML engineer', add: { engineer: 3 } }] },
                { q: 'Pengalaman pemrograman?', options: [{ t: 'Belum pernah', add: { pengguna: 2, pembuat: 1 } }, { t: 'Sedikit, pernah belajar dasar', add: { pembuat: 2 } }, { t: 'Lancar setidaknya satu bahasa', add: { engineer: 2, pembuat: 1 } }] },
                { q: 'Waktu belajar per minggu?', options: [{ t: '1-3 jam', add: { pengguna: 2 } }, { t: '4-8 jam', add: { pembuat: 2 } }, { t: 'Lebih dari 8 jam', add: { engineer: 2 } }] },
            ], results: {
                pengguna: { title: 'Jalur 1: pengguna cerdas', text: 'Pahami cara kerja dan batas AI, kuasai prompt, privasi, dan pemakaian di pekerjaan Anda. Bisa dicapai dalam beberapa minggu.' },
                pembuat: { title: 'Jalur 2: pembuat solusi', text: 'Pelajari otomasi (misalnya n8n), API model AI, RAG, dan sedikit Python. Target: membangun alat AI untuk tim atau usaha.' },
                engineer: { title: 'Jalur 3: AI/ML engineer', text: 'Python, matematika dasar, machine learning klasik, deep learning, dan praktik rekayasa. Butuh berbulan-bulan sampai tahunan dengan proyek nyata.' },
            } },

            { h2: 'Jalur 1: pengguna cerdas (semua profesi)' },
            { ol: [
                '<b>Konsep dasar:</b> apa itu AI, machine learning, LLM, dan batasannya (halusinasi, bias).',
                '<b>Menulis prompt:</b> peran, konteks, tugas, format, batasan.',
                '<b>Privasi dan etika:</b> data apa yang tidak boleh dimasukkan.',
                '<b>Terapkan di pekerjaan:</b> email, rapat, riset, spreadsheet, presentasi.',
                '<b>Evaluasi:</b> cek fakta, bandingkan hasil, ukur waktu yang dihemat.',
            ] },
            `Kursus gratis seperti <b>Elements of AI</b> dari University of Helsinki dirancang untuk orang tanpa latar belakang teknis dan sangat cocok untuk jalur ini.`,

            { h2: 'Jalur 2: pembuat solusi' },
            { svg: 'flow', label: 'Urutan jalur pembuat solusi', steps: [{ t: 'Dasar Python', d: 'variabel, loop, fungsi, JSON' }, { t: 'API model AI', d: 'mengirim prompt lewat kode' }, { t: 'Otomasi', d: 'n8n atau sejenisnya' }, { t: 'RAG', d: 'AI menjawab dari dokumen' }, { t: 'Agent dan alat', d: 'AI memanggil fungsi' }] },
            `Proyek latihan yang baik: chatbot tanya jawab dari dokumen SOP kantor, otomasi ringkasan email harian, atau asisten yang mengisi spreadsheet dari formulir. Proyek nyata kecil jauh lebih bermakna daripada menonton puluhan jam video.`,

            { h2: 'Jalur 3: AI/ML engineer' },
            { table: { head: ['Tahap', 'Materi', 'Perkiraan'], rows: [
                ['1. Pemrograman', 'Python, Git, struktur data dasar', '2-3 bulan'],
                ['2. Data', 'pandas, visualisasi, SQL, statistik dasar', '2-3 bulan'],
                ['3. Matematika secukupnya', 'aljabar linear, kalkulus dasar, peluang', 'berjalan paralel'],
                ['4. Machine learning klasik', 'regresi, klasifikasi, evaluasi model (scikit-learn)', '2-3 bulan'],
                ['5. Deep learning', 'jaringan saraf, PyTorch, CNN, Transformer', '3-4 bulan'],
                ['6. Rekayasa dan produksi', 'API, deployment, pemantauan, MLOps dasar', 'berkelanjutan'],
            ] } },
            { callout: 'Perkiraan waktu di atas untuk belajar konsisten sekitar 8-10 jam per minggu. Setiap tahap sebaiknya ditutup dengan satu proyek yang bisa ditunjukkan di portofolio.', kind: 'info', title: 'Catatan waktu' },

            { h2: 'Sumber belajar gratis yang tepercaya' },
            { table: { head: ['Sumber', 'Cocok untuk'], rows: [
                ['Elements of AI (University of Helsinki)', 'Jalur 1, tanpa coding'],
                ['Google Machine Learning Crash Course', 'Jalur 2-3, pengantar ML dengan latihan'],
                ['Dokumentasi resmi Python dan pandas', 'Dasar pemrograman dan data'],
                ['fast.ai: Practical Deep Learning for Coders', 'Jalur 3, deep learning praktis'],
                ['Dokumentasi API penyedia model AI', 'Jalur 2, membangun aplikasi'],
            ] } },

            { h2: 'Hitung rencana belajar' },
            { w: 'calc', title: 'Rencana waktu belajar', desc: 'Perkiraan kasar berdasarkan total jam belajar yang dibutuhkan.', inputs: [
                { id: 'target', label: 'Total jam yang dibutuhkan (jalur 1 ≈ 30, jalur 2 ≈ 150, jalur 3 ≈ 600)', value: 150, min: 20, max: 1000, step: 10 },
                { id: 'jam', label: 'Jam belajar per minggu', value: 6, min: 1, max: 30, step: 1 },
            ], outputs: [
                { label: 'Perkiraan selesai', expr: 'target / jam', fmt: 'int', unit: 'minggu', big: true },
                { label: 'Setara', expr: 'target / jam / 4.3', fmt: 'num', unit: 'bulan' },
            ] },
            `Apa pun jalurnya, prinsipnya sama: belajar sambil membuat. Satu alat AI kecil yang benar-benar dipakai rekan kerja Anda lebih berharga daripada sertifikat yang tidak pernah diterapkan.`,
        ],
        faq: [
            ['Bisakah belajar AI tanpa latar belakang IT?', 'Bisa. Untuk menjadi pengguna cerdas dan pembuat solusi sederhana, tidak perlu gelar IT. Untuk ML engineer, perlu belajar pemrograman dan matematika dasar.'],
            ['Harus pintar matematika untuk belajar AI?', 'Untuk memakai dan membangun solusi AI, matematika tingkat dasar cukup. Untuk riset dan rekayasa model, perlu aljabar linear, kalkulus, dan peluang.'],
            ['Bahasa pemrograman apa untuk AI?', 'Python adalah pilihan paling umum karena ekosistem pustakanya luas.'],
            ['Berapa lama belajar AI sampai bisa bekerja?', 'Untuk peran teknis seperti ML engineer, umumnya butuh berbulan-bulan sampai lebih dari setahun belajar konsisten dengan proyek nyata.'],
        ],
        sources: [
            ['Elements of AI (University of Helsinki)', 'https://www.elementsofai.com/'],
            ['Google: Machine Learning Crash Course', 'https://developers.google.com/machine-learning/crash-course'],
            ['fast.ai: Practical Deep Learning for Coders', 'https://course.fast.ai/'],
            ['Roadmap belajar Python dari nol (artikel terkait)', 'https://muchson.web.id/artikel/roadmap-belajar-python-dari-nol/'],
        ],
    },
];
