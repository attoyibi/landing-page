const D = '2026-10-28';
const C = 'UX & Produk';

export default [
    {
        slug: 'metrik-ux-framework-heart-google',
        title: 'Metrik UX dengan Framework HEART dari Google',
        description: 'Mengukur pengalaman pengguna dengan framework HEART: Happiness, Engagement, Adoption, Retention, Task success, metode Goals-Signals-Metrics, dan contoh.',
        date: D, category: C, tags: ['metrik UX', 'HEART framework', 'product analytics', 'UX research', 'KPI produk'], cta: 'jasa',
        lead: 'Tim produk sering mengukur yang mudah diukur, seperti jumlah klik dan kunjungan halaman, lalu kesulitan menjawab pertanyaan penting: apakah pengalaman pengguna membaik? Kerry Rodden dan rekannya di Google memperkenalkan framework HEART (2010) untuk memilih metrik yang benar-benar mencerminkan kualitas pengalaman.',
        body: [
            { h2: 'Lima kategori HEART' },
            { w: 'cards', title: 'Ketuk untuk contoh metrik', items: [
                { tag: 'H', front: 'Happiness: sikap dan kepuasan', backTag: 'Contoh', back: 'Skor kepuasan dalam aplikasi, NPS, kemudahan yang dirasakan (survei singkat).' },
                { tag: 'E', front: 'Engagement: tingkat keterlibatan', backTag: 'Contoh', back: 'Jumlah sesi belajar per minggu per pengguna aktif, jumlah latihan yang dikerjakan.' },
                { tag: 'A', front: 'Adoption: pengguna baru memakai fitur', backTag: 'Contoh', back: 'Persentase pengguna baru yang menyelesaikan pelajaran pertama dalam 7 hari.' },
                { tag: 'R', front: 'Retention: pengguna kembali', backTag: 'Contoh', back: 'Persentase pengguna yang masih aktif di minggu ke-4.' },
                { tag: 'T', front: 'Task success: tugas berhasil diselesaikan', backTag: 'Contoh', back: 'Tingkat keberhasilan checkout, waktu menyelesaikan pendaftaran, tingkat error.' },
            ] },
            `Tidak semua kategori harus dipakai untuk setiap fitur. Pilih yang relevan dengan tujuan fitur itu.`,

            { h2: 'Goals, Signals, Metrics' },
            `Kesalahan umum adalah langsung memilih metrik. HEART dipasangkan dengan proses tiga langkah:`,
            { svg: 'flow', label: 'Dari tujuan ke metrik', steps: [{ t: 'Goal', d: 'apa yang ingin dicapai?' }, { t: 'Signal', d: 'perilaku apa yang menunjukkan berhasil?' }, { t: 'Metric', d: 'angka apa yang bisa dilacak?' }] },
            { table: { head: ['Kategori', 'Goal', 'Signal', 'Metric'], rows: [['Adoption', 'Orang tua baru segera mencoba kelas', 'Anak menyelesaikan pelajaran pertama', '% akun baru yang selesai pelajaran 1 dalam 7 hari'], ['Engagement', 'Anak belajar rutin', 'Membuka pelajaran beberapa kali seminggu', 'Rata-rata hari aktif per minggu'], ['Retention', 'Belajar berlanjut', 'Masih belajar setelah sebulan', '% aktif di minggu ke-4 (kohort)'], ['Task success', 'Pendaftaran mudah', 'Selesai mendaftar tanpa bantuan', '% yang mulai dan menyelesaikan pendaftaran'], ['Happiness', 'Orang tua merasa anaknya belajar', 'Menilai positif laporan kemajuan', 'Skor kepuasan 1-5 setelah laporan mingguan']] } },

            { h2: 'Hati-hati dengan metrik yang menyesatkan' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Jebakan', front: 'Waktu di aplikasi naik.', backTag: 'Bisa berarti', back: 'Pengguna lebih terlibat, atau pengguna kesulitan menemukan sesuatu. Gabungkan dengan task success.' },
                { tag: 'Jebakan', front: 'Total pengguna terdaftar naik.', backTag: 'Bisa berarti', back: 'Metrik kumulatif hampir selalu naik. Lihat pengguna aktif dan retensi.' },
                { tag: 'Jebakan', front: 'Jumlah klik pada fitur baru tinggi.', backTag: 'Bisa berarti', back: 'Rasa penasaran sesaat. Lihat apakah dipakai lagi minggu berikutnya.' },
            ] },
            { callout: 'Gabungkan data kuantitatif (apa yang terjadi) dengan riset kualitatif (mengapa terjadi). Angka retensi turun memberi tahu ada masalah; wawancara pengguna memberi tahu apa masalahnya.', kind: 'info', title: 'Angka dan cerita' },
            { w: 'checklist', title: 'Rencana metrik untuk satu fitur', items: ['Tujuan fitur ditulis dalam satu kalimat.', 'Dipilih 2-3 kategori HEART yang relevan.', 'Setiap kategori punya goal, signal, dan metric.', 'Event analitik yang dibutuhkan sudah dipasang sebelum rilis.', 'Ada angka dasar (baseline) sebelum perubahan.', 'Ada jadwal meninjau hasil dan rencana riset kualitatif.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: '% pengguna yang masih aktif di minggu ke-4 termasuk kategori...', options: ['Adoption', 'Retention', 'Happiness'], answer: 1, why: 'Mengukur pengguna yang kembali.' },
                { q: 'Langkah pertama dalam Goals-Signals-Metrics?', options: ['Memilih dashboard', 'Menentukan tujuan', 'Menghitung rata-rata'], answer: 1, why: 'Metrik mengikuti tujuan.' },
            ] },
        ],
        faq: [
            ['Apakah HEART hanya untuk perusahaan besar?', 'Tidak. Startup kecil bisa memakai satu atau dua kategori dengan alat analitik gratis dan survei singkat.'],
            ['Alat apa untuk melacak metrik?', 'Google Analytics, Mixpanel, Amplitude, PostHog (ada versi open source), atau tabel event di database sendiri.'],
            ['Apa hubungannya dengan NPS?', 'NPS bisa menjadi salah satu metrik kategori Happiness, tetapi sebaiknya tidak menjadi satu-satunya ukuran pengalaman.'],
        ],
        sources: [
            ['Rodden, Hutchinson, Fu (2010): Measuring the User Experience on a Large Scale, CHI', 'https://doi.org/10.1145/1753326.1753687'],
            ['Analisis kohort retensi (artikel terkait)', 'https://muchson.web.id/artikel/analisis-kohort-untuk-retensi-pengguna/'],
            ['Net Promoter Score (artikel terkait)', 'https://muchson.web.id/artikel/net-promoter-score-nps-cara-menghitung/'],
        ],
    },

    {
        slug: 'ab-testing-untuk-pemula-cara-dan-jebakannya',
        title: 'A/B Testing untuk Pemula: Cara dan Jebakannya',
        description: 'Panduan A/B testing: menyusun hipotesis, memilih metrik, kalkulator jumlah sampel, durasi tes, membaca hasil, dan jebakan mengintip hasil terlalu dini.',
        date: D, category: C, tags: ['A/B testing', 'eksperimen produk', 'konversi', 'statistik', 'optimasi'], cta: 'jasa',
        lead: 'Daripada berdebat versi tombol mana yang lebih baik, tunjukkan dua versi kepada pengguna secara acak dan lihat mana yang lebih berhasil. Itulah A/B testing. Kedengarannya sederhana, tetapi banyak tes menghasilkan kesimpulan yang salah karena sampel terlalu kecil atau dihentikan terlalu cepat.',
        body: [
            { h2: 'Cara kerjanya' },
            { svg: 'flow', label: 'Alur A/B test', steps: [{ t: 'Hipotesis', d: 'mengapa B lebih baik?' }, { t: 'Acak pengguna', d: '50% A, 50% B' }, { t: 'Kumpulkan data', d: 'sampai sampel cukup' }, { t: 'Analisis', d: 'beda nyata atau kebetulan?' }, { t: 'Putuskan', d: 'pakai, ulangi, atau buang' }] },

            { h2: 'Menulis hipotesis' },
            { code: 'Karena [data/temuan]: 40% pengguna meninggalkan form pendaftaran di kolom tanggal lahir,\nkami percaya [perubahan]: menghapus kolom tanggal lahir dari langkah pertama\nakan [dampak]: menaikkan tingkat penyelesaian pendaftaran,\nyang diukur dengan [metrik]: % pengunjung halaman daftar yang menyelesaikan pendaftaran.' },

            { h2: 'Berapa sampel yang dibutuhkan?' },
            `Perubahan kecil butuh sampel besar untuk dibedakan dari kebetulan. Rumus praktis (kekuatan uji 80%, signifikansi 5%) yang dikenal sebagai aturan Lehr: sampel per varian ≈ 16 × p(1−p) / δ², dengan p tingkat konversi dasar dan δ selisih absolut yang ingin dideteksi.`,
            { w: 'calc', title: 'Kalkulator sampel A/B test', desc: 'Perkiraan kasar. Untuk keputusan penting, gunakan kalkulator statistik yang lengkap.', inputs: [{ id: 'p', label: 'Konversi saat ini', value: 5, min: 0.5, max: 60, step: 0.5, unit: '%' }, { id: 'u', label: 'Kenaikan relatif yang ingin dideteksi', value: 20, min: 2, max: 100, step: 1, unit: '%' }, { id: 'v', label: 'Pengunjung per hari (total)', value: 1000, min: 50, max: 100000, step: 50 }], outputs: [{ label: 'Sampel per varian', expr: '16 * (p/100) * (1 - p/100) / pow((p/100) * (u/100), 2)', fmt: 'int', unit: 'pengunjung', big: true }, { label: 'Perkiraan durasi (2 varian)', expr: 'ceil(2 * 16 * (p/100) * (1 - p/100) / pow((p/100) * (u/100), 2) / v)', fmt: 'int', unit: 'hari', note: 'Jalankan minimal satu sampai dua minggu penuh agar mencakup pola hari kerja dan akhir pekan.' }] },
            { callout: 'Bila kalkulator menunjukkan Anda butuh 6 bulan, A/B test mungkin bukan alat yang tepat untuk perubahan ini. Pakai riset kualitatif, atau uji perubahan yang lebih besar.', kind: 'info', title: 'Trafik kecil?' },

            { h2: 'Jebakan yang paling sering' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Jebakan', front: 'Mengintip hasil setiap hari dan berhenti saat terlihat menang.', backTag: 'Kenapa salah', back: 'Peluang menemukan "kemenangan" palsu naik drastis. Tentukan sampel dan durasi di awal, atau pakai metode sequential testing yang dirancang untuk itu.' },
                { tag: 'Jebakan', front: 'Mengukur terlalu banyak metrik lalu memilih yang signifikan.', backTag: 'Kenapa salah', back: 'Dengan 20 metrik, satu kemungkinan akan "signifikan" secara kebetulan. Tentukan satu metrik utama.' },
                { tag: 'Jebakan', front: 'Pengacakan tidak benar.', backTag: 'Kenapa salah', back: 'Bila varian B hanya tampil di jam malam atau di Android, perbedaannya bukan karena desain.' },
                { tag: 'Jebakan', front: 'Efek kebaruan (novelty).', backTag: 'Kenapa salah', back: 'Pengguna lama mengklik desain baru karena penasaran. Jalankan cukup lama dan lihat pengguna baru terpisah.' },
                { tag: 'Jebakan', front: 'Mengabaikan metrik pengaman.', backTag: 'Kenapa salah', back: 'Konversi naik tetapi refund dan keluhan juga naik. Pantau metrik pengaman (guardrail).' },
            ] },

            { h2: 'Membaca hasil' },
            { ul: ['Lihat <b>selisih dan rentang kepercayaannya</b>, bukan hanya "signifikan atau tidak".', 'Hasil "tidak signifikan" bukan berarti kedua versi sama, bisa jadi sampel kurang.', 'Pertimbangkan biaya: perubahan kecil yang mahal dirawat mungkin tidak layak walau menang tipis.', 'Catat setiap tes, termasuk yang gagal, agar tim belajar.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mengapa tidak boleh menghentikan tes begitu hasil terlihat menang?', options: ['Melanggar privasi', 'Meningkatkan risiko kesimpulan palsu', 'Server terbebani'], answer: 1, why: 'Mengintip berulang menaikkan peluang false positive.' },
                { q: 'Untuk mendeteksi kenaikan yang lebih kecil, sampel yang dibutuhkan...', options: ['Lebih kecil', 'Lebih besar', 'Sama'], answer: 1, why: 'Sampel berbanding terbalik dengan kuadrat selisih.' },
            ] },
        ],
        faq: [
            ['Alat apa untuk A/B test?', 'Fitur eksperimen di PostHog, Optimizely, VWO, Statsig, GrowthBook (open source), atau implementasi sendiri dengan feature flag dan analisis di database.'],
            ['Apakah A/B test etis?', 'Umumnya ya untuk perubahan desain biasa. Untuk perubahan yang bisa merugikan pengguna (harga, informasi kesehatan), pertimbangkan etika dan transparansi lebih hati-hati.'],
            ['Bisakah menguji lebih dari dua versi?', 'Bisa (A/B/n), tetapi setiap varian tambahan membutuhkan lebih banyak sampel dan koreksi statistik.'],
        ],
        sources: [
            ['Kohavi, Tang, Xu: Trustworthy Online Controlled Experiments (Cambridge University Press)', 'https://experimentguide.com/'],
            ['Evan Miller: How Not To Run an A/B Test', 'https://www.evanmiller.org/how-not-to-run-an-ab-test.html'],
            ['Evan Miller: Sample Size Calculator', 'https://www.evanmiller.org/ab-testing/sample-size.html'],
        ],
    },

    {
        slug: 'design-system-untuk-tim-kecil',
        title: 'Design System untuk Tim Kecil: Mulai dari Mana?',
        description: 'Membangun design system sederhana untuk tim kecil: design tokens, komponen inti, dokumentasi, sinkron Figma dan kode, dan kapan cukup memakai library.',
        date: D, category: C, tags: ['design system', 'design tokens', 'komponen UI', 'Figma', 'frontend'], cta: 'jasa',
        lead: 'Tanpa design system, tim kecil cepat menghasilkan tujuh warna biru yang sedikit berbeda, lima gaya tombol, dan jarak yang tidak konsisten. Setiap layar baru dimulai dari nol. Design system tidak harus sebesar Material Design milik Google; versi kecil yang konsisten sudah menghemat banyak waktu desainer dan developer.',
        body: [
            { h2: 'Apa isi design system' },
            { svg: 'layers', label: 'Lapisan design system', items: [{ t: 'Pola dan panduan', d: 'Formulir, tabel, pesan error, nada tulisan.' }, { t: 'Komponen', d: 'Tombol, input, kartu, modal, dengan status dan variannya.' }, { t: 'Design tokens', d: 'Warna, tipografi, jarak, radius, bayangan sebagai variabel bernama.' }, { t: 'Prinsip', d: 'Nilai desain produk: jelas, inklusif, efisien.' }] },

            { h2: 'Mulai dari design tokens' },
            `Token adalah keputusan desain yang diberi nama. Alih-alih menulis <code>#1e5ab2</code> di seratus tempat, semua memakai <code>--warna-utama</code>. Ganti di satu tempat, berubah di mana-mana, termasuk untuk mode gelap.`,
            { code: ':root {\n  /* primitif */\n  --biru-600: #1e5ab2;\n  --abu-900: #0f1a33;\n  --abu-50: #f5f7fb;\n\n  /* semantik: makna, bukan warna */\n  --warna-utama: var(--biru-600);\n  --teks: var(--abu-900);\n  --latar: var(--abu-50);\n\n  /* jarak berbasis kelipatan 4 */\n  --ruang-1: 4px;  --ruang-2: 8px;  --ruang-3: 12px;\n  --ruang-4: 16px; --ruang-6: 24px; --ruang-8: 32px;\n\n  --radius: 8px;\n  --font-badan: 16px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root { --teks: #e8edf7; --latar: #0f1a33; }\n}' },

            { h2: 'Komponen inti yang dibuat lebih dulu' },
            { ol: ['Tombol (utama, sekunder, bahaya; status normal, hover, fokus, nonaktif, memuat).', 'Input teks dengan label, bantuan, dan pesan error.', 'Pilihan: checkbox, radio, select.', 'Kartu dan daftar.', 'Modal atau dialog.', 'Notifikasi (toast) dan banner.', 'Navigasi.'] },
            { callout: 'Status fokus keyboard sering dilupakan dan dihapus karena "jelek". Tanpa itu, pengguna keyboard tidak tahu posisi mereka di halaman. Rancang status fokus yang jelas dan indah.', kind: 'warn', title: 'Jangan hapus focus ring' },

            { h2: 'Atomic design sebagai cara berpikir' },
            `Brad Frost mengusulkan analogi kimia: <b>atom</b> (label, input, tombol) membentuk <b>molekul</b> (kolom pencarian), membentuk <b>organisme</b> (header), lalu <b>template</b> dan <b>halaman</b>. Gunanya untuk menyadari bahwa halaman dibangun dari bagian-bagian yang bisa dipakai ulang.`,

            { h2: 'Bangun sendiri atau pakai yang ada?' },
            { w: 'choose', title: 'Pilih pendekatan', questions: [
                { q: 'Seberapa unik identitas visual produk Anda?', options: [{ t: 'Cukup umum, yang penting rapi', add: { lib: 3 } }, { t: 'Sangat khas dan penting untuk brand', add: { own: 3 } }] },
                { q: 'Berapa desainer dan developer frontend?', options: [{ t: '1-3 orang', add: { lib: 2 } }, { t: 'Lebih dari 5, beberapa produk', add: { own: 2 } }] },
                { q: 'Kebutuhan aksesibilitas?', options: [{ t: 'Tinggi, tetapi tidak ada ahli di tim', add: { lib: 2 } }, { t: 'Ada ahli aksesibilitas', add: { own: 1 } }] },
            ], results: { lib: { title: 'Mulai dari library yang ada', text: 'Pakai library komponen yang sudah teruji aksesibilitasnya (misalnya Radix, shadcn/ui, Vuetify, Angular Material), lalu sesuaikan dengan token warna dan tipografi Anda.' }, own: { title: 'Bangun design system sendiri', text: 'Mulai dari token dan 5-7 komponen inti, dokumentasikan, dan tetapkan pemilik. Tetap pertimbangkan library tanpa gaya (headless) untuk perilaku yang rumit.' } } },

            { h2: 'Menjaga desain dan kode tetap sinkron' },
            { ul: ['Satu sumber token: variabel Figma diekspor ke CSS atau JSON (format Design Tokens W3C Community Group).', 'Komponen di kode dan di Figma memakai nama yang sama.', 'Dokumentasi dengan contoh hidup, misalnya Storybook.', 'Proses perubahan: siapa yang boleh menambah komponen, dan bagaimana mengumumkannya.'] },
            { w: 'checklist', title: 'Design system minimal dalam sebulan', items: ['Palet warna semantik dengan kontras teruji.', 'Skala tipografi 4-6 ukuran.', 'Skala jarak berbasis 4 atau 8.', 'Token di CSS variables dan Figma variables.', 'Tombol, input, kartu, modal dengan semua status.', 'Halaman dokumentasi singkat dengan contoh pemakaian.', 'Satu orang pemilik design system.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mengapa token semantik (--warna-utama) lebih baik dari langsung memakai kode warna?', options: ['Lebih pendek', 'Perubahan dan mode gelap cukup diatur di satu tempat', 'Wajib di CSS'], answer: 1, why: 'Makna terpisah dari nilai warnanya.' },
                { q: 'Dalam atomic design, tombol termasuk...', options: ['Atom', 'Organisme', 'Template'], answer: 0, why: 'Unit terkecil yang bermakna.' },
            ] },
        ],
        faq: [
            ['Kapan tim butuh design system?', 'Begitu ada lebih dari satu desainer atau developer yang membuat layar, atau ketika produk mulai terlihat tidak konsisten.'],
            ['Apakah Tailwind CSS sudah design system?', 'Tailwind menyediakan skala token dan utilitas, yang bisa menjadi dasar design system. Anda tetap perlu komponen, pola, dan dokumentasi.'],
            ['Bagaimana mengukur keberhasilannya?', 'Waktu membuat layar baru, jumlah komponen yang dipakai ulang, dan berkurangnya bug tampilan yang tidak konsisten.'],
        ],
        sources: [
            ['Brad Frost: Atomic Design', 'https://atomicdesign.bradfrost.com/'],
            ['Design Tokens Community Group (W3C)', 'https://www.designtokens.org/'],
            ['Material Design 3', 'https://m3.material.io/'],
        ],
    },

    {
        slug: 'wawancara-pengguna-cara-bertanya-yang-benar',
        title: 'Wawancara Pengguna: Cara Bertanya yang Benar',
        description: 'Wawancara pengguna yang menghasilkan wawasan nyata: prinsip The Mom Test, bertanya tentang masa lalu bukan pendapat, contoh panduan, dan merangkum temuan.',
        date: D, category: C, tags: ['wawancara pengguna', 'user interview', 'The Mom Test', 'riset pengguna', 'validasi ide'], cta: 'jasa',
        lead: '"Apakah Anda akan memakai aplikasi ini?" Hampir semua orang akan menjawab ya, karena sopan. Lalu produk diluncurkan dan tidak ada yang memakainya. Rob Fitzpatrick menulis The Mom Test berdasarkan pengamatan sederhana: bahkan ibu Anda sendiri akan berbohong untuk menyenangkan Anda, bila Anda menanyakan hal yang salah.',
        body: [
            { h2: 'Tiga aturan The Mom Test' },
            { w: 'cards', title: 'Ketuk tiap aturan', items: [
                { tag: '1', front: 'Bicarakan kehidupan mereka, bukan ide Anda.', backTag: 'Contoh', back: 'Bukan "Bagus tidak ide aplikasi les coding ini?", melainkan "Bagaimana anak Anda menghabiskan waktu sepulang sekolah?"' },
                { tag: '2', front: 'Tanyakan hal spesifik di masa lalu, bukan pendapat tentang masa depan.', backTag: 'Contoh', back: 'Bukan "Apakah Anda mau membayar?", melainkan "Kapan terakhir kali Anda membayar kursus untuk anak? Bagaimana memilihnya?"' },
                { tag: '3', front: 'Lebih banyak mendengar, lebih sedikit bicara.', backTag: 'Contoh', back: 'Biarkan jeda. Orang sering menambahkan hal penting setelah diam beberapa detik.' },
            ] },

            { h2: 'Pertanyaan buruk dan perbaikannya' },
            { table: { head: ['Buruk', 'Masalahnya', 'Lebih baik'], rows: [['"Apakah Anda akan memakai fitur X?"', 'Prediksi masa depan, mudah dijawab ya', '"Ceritakan terakhir kali Anda mengalami masalah [Y]."'], ['"Berapa yang mau Anda bayar?"', 'Angka khayalan', '"Saat ini Anda memakai apa untuk itu? Berapa biayanya?"'], ['"Apakah ini membingungkan?"', 'Menggiring', '"Bagaimana Anda biasanya melakukannya?"'], ['"Anda suka desainnya?"', 'Pujian tidak berguna', '"Apa yang Anda lakukan setelah melihat halaman ini?"']] } },

            { h2: 'Contoh panduan wawancara 30 menit' },
            { code: 'PEMBUKA (3 menit)\n- Terima kasih, tujuan wawancara, izin merekam.\n- "Tidak ada jawaban benar atau salah. Kami ingin belajar dari pengalaman Anda."\n\nKONTEKS (7 menit)\n- Ceritakan sedikit tentang keseharian Anda / pekerjaan Anda.\n- Bagaimana [aktivitas terkait] biasanya terjadi?\n\nPENGALAMAN SPESIFIK (15 menit)\n- Kapan terakhir kali Anda [mengalami masalah]? Ceritakan dari awal.\n- Apa yang Anda lakukan untuk mengatasinya?\n- Apa yang paling menyebalkan dari cara itu?\n- Apa yang sudah Anda coba? Kenapa berhenti?\n\nPENUTUP (5 menit)\n- Ada hal lain yang menurut Anda penting dan belum saya tanyakan?\n- Siapa lagi yang sebaiknya saya ajak bicara?' },

            { h2: 'Teknik menggali' },
            { ul: ['<b>"Ceritakan lebih lanjut tentang itu."</b> Pertanyaan sederhana yang paling berguna.', '<b>"Mengapa itu penting bagi Anda?"</b> Menggali motivasi di balik permintaan fitur.', '<b>"Bisa tunjukkan?"</b> Minta mereka memperlihatkan cara melakukannya sekarang.', '<b>Ulangi kata-kata mereka</b> untuk memastikan pemahaman, bukan menafsirkan dengan kata Anda.'] },
            { callout: 'Ketika seseorang meminta fitur ("Tambahkan ekspor ke Excel"), jangan langsung mencatat sebagai kebutuhan. Tanyakan apa yang ingin mereka lakukan dengan hasil ekspor itu. Kebutuhan sebenarnya bisa berbeda.', kind: 'info', title: 'Permintaan fitur bukan kebutuhan' },

            { h2: 'Merangkum temuan' },
            { ol: ['Tulis catatan segera setelah wawancara, selagi ingat.', 'Pisahkan <b>fakta</b> (yang dilakukan), <b>kutipan</b>, dan <b>tafsiran</b> Anda.', 'Setelah 5-8 wawancara, kelompokkan temuan yang mirip (affinity mapping).', 'Cari pola yang muncul di banyak orang, bukan cerita paling dramatis.', 'Bagikan ke tim dengan kutipan asli sebagai bukti.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pertanyaan mana yang paling sesuai The Mom Test?', options: ['"Apakah Anda akan membeli ini?"', '"Kapan terakhir kali Anda menghadapi masalah ini, dan apa yang Anda lakukan?"', '"Bagus kan idenya?"'], answer: 1, why: 'Fakta spesifik masa lalu lebih jujur daripada prediksi.' },
                { q: 'Ketika pengguna meminta fitur tertentu, sebaiknya...', options: ['Langsung dibuat', 'Gali tujuan di balik permintaan itu', 'Diabaikan'], answer: 1, why: 'Kebutuhan sebenarnya bisa berbeda dari solusi yang diminta.' },
            ] },
        ],
        faq: [
            ['Berapa orang yang perlu diwawancarai?', 'Untuk satu segmen pengguna, 5-8 wawancara sering sudah memunculkan pola utama. Lanjutkan sampai tidak ada temuan baru yang berarti.'],
            ['Bagaimana mencari peserta?', 'Dari pelanggan yang ada, komunitas, media sosial, atau rekomendasi peserta sebelumnya. Hindari hanya mewawancarai teman dan keluarga.'],
            ['Bolehkah AI merangkum transkrip?', 'Boleh untuk mempercepat, dengan izin peserta dan perhatian pada privasi. Tetap baca transkrip penting secara langsung, karena nuansa sering hilang dalam ringkasan.'],
        ],
        sources: [
            ['Rob Fitzpatrick: The Mom Test', 'https://www.momtestbook.com/'],
            ['Nielsen Norman Group: User Interviews 101', 'https://www.nngroup.com/articles/user-interviews/'],
            ['User persona (artikel terkait)', 'https://muchson.web.id/artikel/user-persona-cara-membuat-yang-berguna/'],
        ],
    },

    {
        slug: 'onboarding-produk-yang-membuat-pengguna-bertahan',
        title: 'Onboarding Produk yang Membuat Pengguna Bertahan',
        description: 'Merancang onboarding aplikasi yang membawa pengguna ke nilai pertama secepatnya: momen aha, time to value, pola efektif, dan metrik untuk mengukurnya.',
        date: D, category: C, tags: ['onboarding', 'user onboarding', 'retensi', 'time to value', 'product design'], cta: 'jasa',
        lead: 'Banyak pengguna memutuskan dalam beberapa menit pertama apakah sebuah aplikasi layak dipakai lagi. Onboarding yang baik bukan tur tujuh langkah yang menjelaskan setiap tombol, melainkan jalan tercepat menuju saat pengguna berpikir: "Oh, ini berguna untuk saya."',
        body: [
            { h2: 'Tujuan onboarding: nilai pertama, secepatnya' },
            `Dalam Customer Success dikenal istilah <b>time to value</b>: waktu dari mendaftar sampai pengguna merasakan manfaat nyata. Semakin pendek, semakin besar peluang mereka kembali.`,
            { table: { head: ['Produk', 'Nilai pertama (momen aha)'], rows: [['Aplikasi belajar coding anak', 'Anak menjalankan program pertama yang menggerakkan karakter'], ['Aplikasi kasir UMKM', 'Mencatat transaksi pertama dan melihat laporan hari itu'], ['Alat desain', 'Menyelesaikan dan mengunduh satu desain'], ['Aplikasi catatan keuangan', 'Melihat ke mana uang bulan ini pergi']] } },

            { h2: 'Mengapa tur panjang sering gagal' },
            `Tur produk di awal yang menunjuk tombol satu per satu mengganggu pengguna yang ingin segera mulai, dan isinya cepat terlupa karena belum ada konteks. Bantuan yang muncul <b>pada saat dibutuhkan</b> (kontekstual) umumnya lebih efektif.`,
            { svg: 'versus', label: 'Dua pendekatan', left: { title: 'Tur di depan', items: ['Menjelaskan semua di awal', 'Pengguna menekan "lewati"', 'Cepat terlupa'] }, right: { title: 'Bantuan kontekstual', items: ['Muncul saat fitur relevan dipakai', 'Belajar sambil melakukan', 'Lebih diingat'] } },

            { h2: 'Pola onboarding yang efektif' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Pola', front: 'Langsung melakukan', backTag: 'Contoh', back: 'Pelajaran coding pertama bisa dimulai tanpa daftar; akun diminta setelah anak menyelesaikan satu tantangan.' },
                { tag: 'Pola', front: 'Data contoh', backTag: 'Contoh', back: 'Dashboard baru diisi data contoh agar pengguna langsung melihat seperti apa hasilnya, dengan tombol "ganti dengan data saya".' },
                { tag: 'Pola', front: 'Daftar langkah awal', backTag: 'Contoh', back: '"3 langkah untuk mulai: tambahkan produk, catat penjualan, lihat laporan." Dengan tanda centang.' },
                { tag: 'Pola', front: 'Personalisasi ringan', backTag: 'Contoh', back: 'Satu pertanyaan "Anda ingin belajar untuk apa?" lalu menyesuaikan pelajaran pertama.' },
                { tag: 'Pola', front: 'Keadaan kosong yang membimbing', backTag: 'Contoh', back: 'Layar kosong berisi ajakan tindakan pertama, bukan "belum ada data".' },
                { tag: 'Pola', front: 'Email/notifikasi tindak lanjut', backTag: 'Contoh', back: 'Pengingat yang relevan bila pengguna berhenti di tengah langkah awal, bukan promo umum.' },
            ] },

            { h2: 'Kurangi gesekan sebelum nilai' },
            { ul: ['Minta data seminimal mungkin di pendaftaran. Sisanya diminta saat dibutuhkan.', 'Izinkan masuk dengan akun Google atau nomor HP bila sesuai.', 'Tunda permintaan izin notifikasi sampai pengguna paham manfaatnya.', 'Hilangkan langkah verifikasi yang tidak perlu sebelum mencoba.'] },
            { w: 'calc', title: 'Dampak memperbaiki aktivasi', desc: 'Perkiraan sederhana: pengguna yang mencapai nilai pertama lebih mungkin bertahan.', inputs: [{ id: 'd', label: 'Pendaftar per bulan', value: 1000, min: 50, max: 100000, step: 50 }, { id: 'a1', label: 'Aktivasi sekarang', value: 30, min: 1, max: 100, step: 1, unit: '%' }, { id: 'a2', label: 'Aktivasi setelah perbaikan', value: 40, min: 1, max: 100, step: 1, unit: '%' }, { id: 'r', label: 'Bertahan bulan berikutnya (dari yang teraktivasi)', value: 50, min: 1, max: 100, step: 1, unit: '%' }], outputs: [{ label: 'Tambahan pengguna yang bertahan per bulan', expr: 'd * (a2 - a1) / 100 * r / 100', fmt: 'int', unit: 'pengguna', big: true, note: 'Asumsi sederhana: pengguna yang tidak teraktivasi hampir tidak bertahan. Ukur angka nyata produk Anda.' }] },

            { h2: 'Mengukur onboarding' },
            { ul: ['<b>Tingkat aktivasi:</b> % pendaftar yang mencapai momen aha dalam periode tertentu.', '<b>Time to value:</b> median waktu dari daftar sampai momen aha.', '<b>Corong per langkah:</b> di langkah mana pengguna paling banyak berhenti.', '<b>Retensi kohort:</b> bandingkan pengguna yang teraktivasi dan tidak.'] },
            { w: 'checklist', title: 'Audit onboarding Anda', items: ['Momen aha produk sudah didefinisikan dan diukur.', 'Pengguna bisa merasakan nilai dalam kunjungan pertama.', 'Pendaftaran hanya meminta data yang benar-benar perlu.', 'Bantuan muncul kontekstual, bukan tur panjang di awal.', 'Keadaan kosong membimbing ke tindakan pertama.', 'Ada tindak lanjut untuk yang berhenti di tengah.', 'Corong onboarding dipantau tiap minggu.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tujuan utama onboarding?', options: ['Menjelaskan semua fitur', 'Membawa pengguna ke nilai pertama secepatnya', 'Mengumpulkan data sebanyak mungkin'], answer: 1, why: 'Nilai pertama mendorong pengguna kembali.' },
                { q: 'Kapan sebaiknya meminta izin notifikasi?', options: ['Saat aplikasi pertama dibuka', 'Setelah pengguna memahami manfaatnya', 'Tidak pernah'], answer: 1, why: 'Permintaan yang relevan lebih sering disetujui.' },
            ] },
        ],
        faq: [
            ['Berapa langkah onboarding yang ideal?', 'Sesedikit mungkin untuk mencapai nilai pertama. Ukur di mana pengguna berhenti, lalu pangkas atau tunda langkah itu.'],
            ['Apakah onboarding B2B berbeda?', 'Ya. Sering melibatkan beberapa orang, integrasi data, dan pelatihan. Customer Success biasanya mendampingi dengan rencana onboarding dan target nilai yang disepakati.'],
            ['Apakah video tutorial membantu?', 'Video pendek yang relevan bisa membantu untuk tugas rumit. Jangan jadikan syarat sebelum pengguna bisa mencoba.'],
        ],
        sources: [
            ['Nielsen Norman Group: Mobile-App Onboarding, An Analysis of Components and Techniques', 'https://www.nngroup.com/articles/mobile-app-onboarding/'],
            ['Onboarding pelanggan B2B dan time to value (artikel terkait)', 'https://muchson.web.id/artikel/onboarding-pelanggan-b2b-dan-time-to-value/'],
            ['UX writing dan microcopy (artikel terkait)', 'https://muchson.web.id/artikel/ux-writing-dan-microcopy-yang-membantu/'],
        ],
    },
];
