const D = '2026-10-28';
const C = 'Green IT';

export default [
    {
        slug: 'konsumsi-energi-ai-seberapa-besar-dan-cara-menyikapinya',
        title: 'Konsumsi Energi AI: Seberapa Besar dan Cara Menyikapinya',
        description: 'Data konsumsi listrik pusat data dan AI dari IEA, energi per prompt menurut laporan Google, mengapa angka berbeda, dan cara memakai AI lebih hemat.',
        date: D, category: C, tags: ['energi AI', 'pusat data', 'IEA', 'jejak karbon AI', 'Green IT'], cta: 'jasa',
        lead: 'Setiap kali AI booming, muncul dua cerita yang bertolak belakang: "AI akan menghabiskan listrik dunia" dan "satu prompt hanya seperti menyalakan lampu sebentar". Keduanya ada benarnya, tergantung skala yang dilihat. Data dari IEA dan laporan teknis penyedia AI membantu kita melihat gambaran yang lebih jernih.',
        body: [
            { h2: 'Gambaran besar: pusat data dunia' },
            `Laporan IEA "Energy and AI" (2025) memperkirakan pusat data memakai sekitar <b>415 TWh</b> listrik pada 2024, atau sekitar <b>1,5%</b> konsumsi listrik dunia, dengan pertumbuhan sekitar 12% per tahun sejak 2017. Dalam skenario dasar IEA, angka ini lebih dari dua kali lipat menjadi sekitar <b>945 TWh</b> pada 2030, dengan AI sebagai pendorong utama.`,
            { svg: 'bars', label: 'Konsumsi listrik pusat data dunia (skenario dasar IEA)', unit: ' TWh', data: [['2024', 415], ['2030 (proyeksi)', 945]], caption: 'Sumber: IEA, Energy and AI (2025). Proyeksi memiliki rentang ketidakpastian yang lebar antar skenario.' },
            `Secara global 1,5% terdengar kecil, tetapi konsumsi ini terkonsentrasi di lokasi tertentu. Di beberapa daerah, pusat data baru menekan jaringan listrik lokal dan kebutuhan air pendingin.`,

            { h2: 'Skala kecil: satu prompt' },
            `Google pada Agustus 2025 menerbitkan metodologi pengukuran untuk layanan Gemini: prompt teks median di aplikasi Gemini (Mei 2025) diperkirakan memakai sekitar <b>0,24 Wh</b> energi, menghasilkan sekitar <b>0,03 g CO₂e</b>, dan memakai sekitar <b>0,26 mL</b> air. Google mencatat angka ini belum diverifikasi pihak independen dan tidak mewakili semua jenis prompt.`,
            { w: 'calc', title: 'Perkiraan energi pemakaian AI Anda', desc: 'Memakai angka median Google sebagai titik awal. Prompt panjang, gambar, video, dan model penalaran bisa jauh lebih besar.', inputs: [{ id: 'p', label: 'Prompt per hari', value: 30, min: 1, max: 1000, step: 1 }, { id: 'wh', label: 'Energi per prompt', value: 0.24, min: 0.05, max: 20, step: 0.01, unit: 'Wh' }], outputs: [{ label: 'Energi per tahun', expr: 'p * wh * 365 / 1000', fmt: 'num', unit: 'kWh', big: true, note: 'Sebagai pembanding, kulkas rumah tangga umumnya memakai ratusan kWh per tahun. Untuk individu, dampak AI teks relatif kecil; untuk perusahaan yang menjalankan jutaan permintaan otomatis, dampaknya menjadi besar.' }] },

            { h2: 'Mengapa angkanya berbeda-beda' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Batas ukur', front: 'Apa yang dihitung?', backTag: 'Pengaruh', back: 'Hanya chip AI, atau juga CPU, mesin cadangan yang menganggur, dan pendinginan? Google melaporkan metode sempit memberi angka sekitar 2,4 kali lebih kecil daripada metode menyeluruh mereka.' },
                { tag: 'Model', front: 'Model kecil vs besar, penalaran vs biasa.', backTag: 'Pengaruh', back: 'Model penalaran yang "berpikir" panjang dan pembuatan gambar atau video memakai energi jauh lebih banyak per permintaan.' },
                { tag: 'Pelatihan vs pemakaian', front: 'Melatih model vs menjawab prompt.', backTag: 'Pengaruh', back: 'Pelatihan memakan energi besar sekali di awal; pemakaian sehari-hari oleh jutaan orang terus berjalan dan akhirnya bisa lebih besar totalnya.' },
                { tag: 'Listrik', front: 'Sumber listrik pusat data.', backTag: 'Pengaruh', back: 'Energi yang sama menghasilkan emisi sangat berbeda di jaringan batu bara dan jaringan energi terbarukan.' },
            ] },

            { h2: 'Memakai AI dengan lebih hemat' },
            { ul: ['<b>Pilih model sesuai tugas.</b> Tugas sederhana tidak butuh model terbesar atau mode penalaran panjang.', '<b>Tulis prompt yang jelas</b> agar tidak perlu bolak-balik berkali-kali.', '<b>Untuk aplikasi:</b> cache jawaban yang berulang, batasi panjang output, dan gunakan batch untuk pekerjaan tidak mendesak.', '<b>Jangan otomatiskan yang tidak perlu:</b> agen yang memanggil model ribuan kali per jam untuk tugas tidak penting tetap memakan energi.', '<b>Pertimbangkan manfaatnya:</b> AI yang menghemat perjalanan, kertas, atau pekerjaan berulang bisa memberi efek bersih positif.'] },
            { callout: 'Banyak angka viral tentang "AI menghabiskan air sebotol per email" berasal dari asumsi lama atau perhitungan kasar. Periksa sumber, tahun, dan batas pengukurannya sebelum membagikan.', kind: 'warn', title: 'Hati-hati angka viral' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Menurut IEA, porsi pusat data terhadap konsumsi listrik dunia 2024 sekitar...', options: ['1,5%', '15%', '50%'], answer: 0, why: 'Sekitar 415 TWh atau 1,5%.' },
                { q: 'Cara aplikasi mengurangi energi pemakaian AI?', options: ['Selalu memakai model terbesar', 'Cache jawaban berulang dan memilih model sesuai tugas', 'Menambah panjang output'], answer: 1, why: 'Lebih sedikit dan lebih kecil komputasi untuk hasil yang sama.' },
            ] },
        ],
        faq: [
            ['Apakah memakai chatbot AI buruk bagi lingkungan?', 'Untuk pemakaian pribadi teks biasa, dampaknya kecil dibanding aktivitas sehari-hari lain seperti transportasi. Yang perlu diperhatikan adalah pemakaian dalam skala besar dan otomatis, terutama gambar dan video.'],
            ['Apakah perusahaan AI memakai energi terbarukan?', 'Banyak yang membeli energi terbarukan dan berinvestasi pada sumber baru, tetapi pertumbuhan permintaan juga mendorong pemakaian sumber fosil di beberapa tempat. Baca laporan keberlanjutan mereka dengan kritis.'],
            ['Bagaimana dengan air?', 'Pusat data memakai air untuk pendinginan, tergantung desain dan iklim. Metrik WUE (Water Usage Effectiveness) dipakai untuk mengukurnya.'],
        ],
        sources: [
            ['IEA (2025): Energy and AI, Executive Summary', 'https://www.iea.org/reports/energy-and-ai/executive-summary'],
            ['Google Cloud Blog (2025): Measuring the environmental impact of AI inference', 'https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/'],
            ['Google (2025): Measuring the environmental impact of delivering AI at Google Scale (arXiv)', 'https://arxiv.org/abs/2508.15734'],
        ],
    },

    {
        slug: 'website-ramah-lingkungan-cara-mengurangi-emisi',
        title: 'Website Ramah Lingkungan: Cara Mengurangi Emisi Situs',
        description: 'Membuat website lebih ringan dan ramah lingkungan: ukuran halaman menurut HTTP Archive, gambar, font, JavaScript, cache, hosting hijau, dan alat ukur.',
        date: D, category: C, tags: ['website hijau', 'sustainable web design', 'performa web', 'Green IT', 'web development'], cta: 'jasa',
        lead: 'Halaman web makin berat dari tahun ke tahun. Menurut Web Almanac 2024 dari HTTP Archive, halaman mobile median sudah sekitar 2,3 MB. Setiap byte harus disimpan, dikirim melalui jaringan, dan diproses perangkat pengguna. Website yang lebih ringan memakai lebih sedikit energi, lebih cepat dibuka, dan lebih ramah bagi pengguna dengan kuota terbatas.',
        body: [
            { h2: 'Tiga manfaat sekaligus' },
            { svg: 'versus', label: 'Website berat dan ringan', left: { title: 'Berat', items: ['Lambat di jaringan seluler', 'Menghabiskan kuota pengguna', 'Lebih banyak energi di server, jaringan, dan perangkat'] }, right: { title: 'Ringan', items: ['Cepat dibuka, SEO lebih baik', 'Ramah kuota', 'Jejak energi lebih kecil'] } },

            { h2: 'Di mana beratnya berasal' },
            { table: { head: ['Komponen', 'Masalah umum', 'Perbaikan'], rows: [['Gambar', 'Foto 4000 px untuk tampilan 800 px; format JPEG/PNG lama', 'Ukuran sesuai tampilan, WebP/AVIF, srcset, lazy loading'], ['JavaScript', 'Library besar untuk fitur kecil, banyak skrip pihak ketiga', 'Kurangi dependensi, code splitting, hapus skrip yang tidak dipakai'], ['Font', 'Banyak varian ketebalan dan bahasa', 'Font sistem atau subset, format WOFF2, batasi varian'], ['Video', 'Autoplay video latar', 'Hapus autoplay, gunakan poster gambar, muat saat diminta'], ['Pihak ketiga', 'Puluhan tag pelacak dan widget', 'Audit dan hapus yang tidak dipakai']] } },

            { h2: 'Perkirakan dampak halaman Anda' },
            { w: 'calc', title: 'Data yang dikirim per bulan', desc: 'Perkiraan kasar jumlah data; bandingkan sebelum dan sesudah optimasi.', inputs: [{ id: 'mb', label: 'Ukuran halaman', value: 2.3, min: 0.1, max: 20, step: 0.1, unit: 'MB' }, { id: 'kunj', label: 'Tampilan halaman per bulan', value: 50000, min: 100, max: 10000000, step: 100 }, { id: 'cache', label: 'Porsi kunjungan ulang yang memakai cache', value: 30, min: 0, max: 90, step: 5, unit: '%' }, { id: 'baru', label: 'Ukuran setelah optimasi', value: 0.9, min: 0.05, max: 20, step: 0.05, unit: 'MB' }], outputs: [{ label: 'Data per bulan sekarang', expr: 'mb * kunj * (1 - cache / 100) / 1024', fmt: 'num', unit: 'GB' }, { label: 'Data per bulan setelah optimasi', expr: 'baru * kunj * (1 - cache / 100) / 1024', fmt: 'num', unit: 'GB', big: true, note: 'Untuk perkiraan emisi, gunakan alat seperti Website Carbon Calculator atau model Sustainable Web Design yang memakai faktor energi per GB.' }] },

            { h2: 'Langkah teknis yang paling berpengaruh' },
            { w: 'cards', title: 'Ketuk untuk contoh kode', items: [
                { tag: 'Gambar', front: 'Gambar responsif dan lazy loading.', backTag: 'Kode', back: '<img src="foto-800.webp" srcset="foto-400.webp 400w, foto-800.webp 800w" sizes="(max-width: 600px) 400px, 800px" loading="lazy" width="800" height="533" alt="...">' },
                { tag: 'Cache', front: 'Cache aset statis lama.', backTag: 'Kode', back: 'Cache-Control: public, max-age=31536000, immutable untuk file yang namanya berisi hash versi.' },
                { tag: 'Kompresi', front: 'Kompres teks.', backTag: 'Kode', back: 'Aktifkan Brotli atau gzip di server/CDN untuk HTML, CSS, JS, dan JSON.' },
                { tag: 'Render', front: 'Halaman statis bila memungkinkan.', backTag: 'Kode', back: 'Situs blog dan profil bisa di-render statis (seperti artikel di situs ini), sehingga server tidak menghitung ulang setiap kunjungan.' },
            ] },
            { callout: 'Mode gelap dan warna bukan prioritas utama. Pengurangan data (gambar, video, JavaScript) hampir selalu jauh lebih berpengaruh.', kind: 'info', title: 'Prioritaskan yang besar' },

            { h2: 'Hosting yang lebih hijau' },
            `Pilih penyedia hosting yang transparan tentang sumber energinya. The Green Web Foundation menyediakan direktori dan alat untuk memeriksa apakah sebuah domain dihosting oleh penyedia yang terverifikasi memakai energi hijau.`,
            { w: 'checklist', title: 'Checklist website ringan', items: ['Ukuran halaman utama diukur (DevTools / PageSpeed Insights).', 'Gambar sudah WebP/AVIF dan sesuai ukuran tampilan.', 'Lazy loading untuk gambar di bawah layar pertama.', 'Skrip pihak ketiga diaudit; yang tidak perlu dihapus.', 'Font dibatasi dan berformat WOFF2.', 'Cache dan kompresi aktif.', 'Tidak ada video autoplay yang tidak perlu.', 'Hosting dengan informasi energi yang transparan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Langkah yang biasanya paling mengurangi ukuran halaman?', options: ['Mengganti warna latar', 'Mengoptimalkan gambar dan mengurangi JavaScript', 'Menghapus spasi di HTML'], answer: 1, why: 'Gambar dan skrip mendominasi ukuran halaman.' },
                { q: 'Atribut untuk menunda pemuatan gambar di bawah layar?', options: ['async', 'loading="lazy"', 'defer'], answer: 1, why: 'loading="lazy" pada elemen img.' },
            ] },
        ],
        faq: [
            ['Apakah website ringan berarti tampilannya membosankan?', 'Tidak. Desain yang baik bisa tetap kaya visual dengan aset yang dioptimalkan, ilustrasi SVG, dan CSS modern.'],
            ['Seberapa akurat kalkulator emisi website?', 'Hasilnya perkiraan berdasarkan model dan asumsi rata-rata. Gunakan untuk membandingkan sebelum-sesudah, bukan sebagai angka mutlak.'],
            ['Apakah ini juga membantu SEO?', 'Ya. Kecepatan halaman dan Core Web Vitals termasuk sinyal pengalaman halaman yang diperhatikan mesin pencari.'],
        ],
        sources: [
            ['HTTP Archive Web Almanac 2024: Page Weight', 'https://almanac.httparchive.org/en/2024/page-weight'],
            ['Sustainable Web Design', 'https://sustainablewebdesign.org/'],
            ['The Green Web Foundation', 'https://www.thegreenwebfoundation.org/'],
            ['Website Carbon Calculator', 'https://www.websitecarbon.com/'],
        ],
    },

    {
        slug: 'memperpanjang-umur-laptop-dan-hp-langkah-green-it',
        title: 'Memperpanjang Umur Laptop dan HP: Langkah Green IT Terbesar',
        description: 'Mengapa memakai perangkat lebih lama adalah langkah Green IT paling berpengaruh: kalkulator emisi, perawatan baterai, upgrade murah, dan kapan mengganti.',
        date: D, category: C, tags: ['umur perangkat', 'perawatan laptop', 'Green IT', 'baterai HP', 'hak memperbaiki'], cta: 'jasa',
        lead: 'Untuk sebagian besar ponsel dan laptop, jejak karbon terbesar sudah terjadi sebelum perangkat sampai di tangan Anda: saat bahan ditambang, chip dibuat, dan perangkat dirakit. Karena itu, langkah paling efektif yang bisa dilakukan individu dan kantor sering kali bukan membeli perangkat "hijau" terbaru, melainkan memakai perangkat yang ada lebih lama.',
        body: [
            { h2: 'Membagi emisi produksi dengan tahun pemakaian' },
            `Bila emisi pembuatan sebuah laptop dibagi dengan berapa tahun ia dipakai, setiap tahun tambahan menurunkan emisi per tahun secara nyata.`,
            { w: 'calc', title: 'Emisi per tahun pemakaian', desc: 'Isi perkiraan dari laporan lingkungan produk (Product Environmental Report) perangkat Anda.', inputs: [{ id: 'prod', label: 'Emisi produksi perangkat', value: 250, min: 10, max: 1500, step: 10, unit: 'kg CO₂e' }, { id: 'pakai', label: 'Emisi listrik per tahun pemakaian', value: 20, min: 0, max: 300, step: 1, unit: 'kg CO₂e' }, { id: 't1', label: 'Umur pakai sekarang', value: 3, min: 1, max: 10, step: 1, unit: 'tahun' }, { id: 't2', label: 'Umur pakai bila diperpanjang', value: 5, min: 1, max: 12, step: 1, unit: 'tahun' }], outputs: [{ label: 'Emisi per tahun (umur sekarang)', expr: 'prod / t1 + pakai', fmt: 'num', unit: 'kg CO₂e' }, { label: 'Emisi per tahun (diperpanjang)', expr: 'prod / t2 + pakai', fmt: 'num', unit: 'kg CO₂e', big: true }, { label: 'Penurunan', expr: '(1 - (prod / t2 + pakai) / (prod / t1 + pakai)) * 100', fmt: 'pct' }] },
            `Angka bawaan hanyalah contoh. Banyak produsen besar menerbitkan laporan lingkungan per model yang mencantumkan jejak karbon dan porsinya dari produksi dan pemakaian.`,

            { h2: 'Perawatan yang paling berpengaruh' },
            { w: 'cards', title: 'Ketuk untuk tips', items: [
                { tag: 'Baterai', front: 'Hindari panas dan pengisian ekstrem.', backTag: 'Tips', back: 'Panas adalah musuh utama baterai litium. Jangan mengisi di bawah bantal atau di dalam mobil panas. Aktifkan fitur pengisian teroptimasi atau batas pengisian bila tersedia.' },
                { tag: 'Penyimpanan', front: 'Sisakan ruang kosong.', backTag: 'Tips', back: 'Penyimpanan yang hampir penuh membuat perangkat terasa lambat. Pindahkan foto ke cadangan, hapus aplikasi yang tidak dipakai.' },
                { tag: 'Kebersihan', front: 'Bersihkan ventilasi laptop.', backTag: 'Tips', back: 'Debu menyumbat pendingin, membuat kipas berisik dan performa turun karena panas.' },
                { tag: 'Pelindung', front: 'Casing dan pelindung layar.', backTag: 'Tips', back: 'Murah dibanding mengganti layar, dan mencegah perangkat pensiun dini karena jatuh.' },
                { tag: 'Software', front: 'Perbarui sistem dan ringankan aplikasi.', backTag: 'Tips', back: 'Pembaruan keamanan penting. Untuk perangkat lama, versi ringan aplikasi atau versi web bisa membantu.' },
            ] },

            { h2: 'Upgrade murah sebelum mengganti' },
            { table: { head: ['Gejala', 'Upgrade', 'Perkiraan dampak'], rows: [['Laptop lama lambat menyala dan membuka aplikasi', 'Ganti HDD ke SSD', 'Sering terasa seperti laptop baru untuk kerja kantor'], ['Banyak tab membuat macet', 'Tambah RAM (bila bisa)', 'Multitasking lebih lancar'], ['Baterai cepat habis', 'Ganti baterai', 'Umur pakai bertambah beberapa tahun'], ['Ponsel penuh', 'Kartu memori atau cadangan cloud', 'Ruang kosong kembali']] } },

            { h2: 'Kapan memang sebaiknya mengganti' },
            { ul: ['Tidak lagi mendapat pembaruan keamanan dan dipakai untuk data penting (perbankan, data pelanggan).', 'Biaya perbaikan mendekati harga perangkat pengganti yang setara.', 'Kebutuhan kerja benar-benar tidak terpenuhi lagi.', 'Saat mengganti, pertimbangkan perangkat rekondisi berkualitas, dan pastikan perangkat lama dipakai ulang atau didaur ulang resmi.'] },
            { callout: 'Saat membeli, perhatikan berapa lama produsen menjanjikan pembaruan sistem dan keamanan, ketersediaan suku cadang, dan kemudahan perbaikan. Ini sama pentingnya dengan spesifikasi.', kind: 'info', title: 'Belanja dengan umur panjang' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Upgrade yang paling sering menghidupkan kembali laptop lama untuk kerja kantor?', options: ['Mengganti wallpaper', 'Mengganti HDD ke SSD', 'Menambah stiker'], answer: 1, why: 'SSD jauh lebih cepat daripada hard disk mekanis.' },
                { q: 'Musuh utama baterai litium?', options: ['Dingin ringan', 'Panas', 'Wi-Fi'], answer: 1, why: 'Panas mempercepat penurunan kapasitas baterai.' },
            ] },
        ],
        faq: [
            ['Apakah perangkat rekondisi aman?', 'Dari penjual tepercaya dengan garansi, umumnya aman dan jauh lebih murah. Periksa kondisi baterai dan dukungan pembaruan sistem.'],
            ['Berapa lama idealnya laptop kantor dipakai?', 'Banyak organisasi mengganti setiap 3-4 tahun karena kebiasaan. Dengan perawatan dan SSD, banyak laptop masih layak 5-6 tahun untuk pekerjaan kantor umum.'],
            ['Apa itu hak memperbaiki (right to repair)?', 'Gerakan dan regulasi di beberapa negara agar konsumen dan bengkel independen bisa mendapatkan suku cadang, alat, dan informasi perbaikan.'],
        ],
        sources: [
            ['Apple: Product Environmental Reports', 'https://www.apple.com/environment/'],
            ['Sampah elektronik: cara mengelola (artikel terkait)', 'https://muchson.web.id/artikel/sampah-elektronik-e-waste-cara-mengelola/'],
            ['Laptop lemot: cara mempercepat (artikel terkait)', 'https://muchson.web.id/artikel/laptop-lemot-cara-mempercepat-windows/'],
        ],
    },

    {
        slug: 'cloud-dan-keberlanjutan-memilih-region-dan-ukuran-server',
        title: 'Cloud dan Keberlanjutan: Memilih Region dan Ukuran Server',
        description: 'Mengurangi jejak karbon cloud: intensitas karbon per region, rightsizing, autoscaling, mematikan sumber daya menganggur, dan carbon-aware computing.',
        date: D, category: C, tags: ['cloud sustainability', 'green cloud', 'carbon aware', 'FinOps', 'Green IT'], cta: 'jasa',
        lead: 'Memindahkan server ke cloud sering lebih efisien daripada ruang server kantor, karena pusat data besar memiliki pendinginan dan utilisasi yang lebih baik. Tetapi cloud juga mudah diboroskan: server besar yang menganggur, lingkungan uji yang lupa dimatikan, dan data yang disimpan selamanya. Kabar baiknya, langkah yang menghemat emisi biasanya juga menghemat tagihan.',
        body: [
            { h2: 'Empat tuas di cloud' },
            { svg: 'layers', label: 'Dari yang paling mudah', items: [{ t: '1. Matikan yang menganggur', d: 'Server, IP, disk, dan lingkungan uji yang tidak dipakai.' }, { t: '2. Rightsizing', d: 'Ukuran instance sesuai pemakaian nyata, bukan perkiraan terburuk.' }, { t: '3. Autoscaling & serverless', d: 'Kapasitas mengikuti beban; nol saat tidak ada permintaan.' }, { t: '4. Region & waktu', d: 'Region dengan listrik lebih bersih; pekerjaan fleksibel saat karbon rendah.' }] },

            { h2: 'Intensitas karbon berbeda per region' },
            `Jaringan listrik setiap negara memiliki campuran sumber yang berbeda: batu bara, gas, hidro, surya, angin, nuklir. Satu jam komputasi yang sama bisa menghasilkan emisi beberapa kali lipat berbeda tergantung region. Beberapa penyedia, misalnya Google Cloud, mempublikasikan data karbon per region, dan layanan seperti Electricity Maps menampilkan intensitas karbon jaringan secara hampir real-time.`,
            { callout: 'Region yang lebih hijau tidak selalu tepat: data pribadi warga Indonesia mungkin perlu memenuhi ketentuan lokasi dan pelindungan data, dan latensi bagi pengguna juga penting. Seimbangkan dengan kebutuhan hukum dan performa.', kind: 'warn', title: 'Pertimbangkan aturan data dan latensi' },

            { h2: 'Rightsizing: contoh perhitungan' },
            { w: 'calc', title: 'Server yang terlalu besar', desc: 'Perkiraan penghematan dari menurunkan ukuran instance yang utilisasinya rendah.', inputs: [{ id: 'n', label: 'Jumlah server', value: 10, min: 1, max: 1000, step: 1 }, { id: 'biaya', label: 'Biaya per server per bulan', value: 2000000, min: 100000, max: 50000000, step: 100000, unit: 'Rp' }, { id: 'cpu', label: 'Rata-rata utilisasi CPU', value: 12, min: 1, max: 100, step: 1, unit: '%' }], outputs: [{ label: 'Perkiraan penghematan bila turun satu ukuran (sekitar separuh harga)', expr: 'cpu < 40 ? n * biaya * 0.5 : 0', fmt: 'rp', big: true, note: 'Bila utilisasi rata-rata jauh di bawah 40%, instance setengah ukuran sering masih cukup. Uji dengan beban puncak sebelum menerapkan di produksi.' }] },

            { h2: 'Carbon-aware computing' },
            `Pekerjaan yang tidak harus segera selesai, seperti backup, render video, pelatihan model, atau pemrosesan laporan malam, bisa digeser ke jam atau region ketika intensitas karbon listrik lebih rendah. Green Software Foundation mengembangkan Carbon Aware SDK untuk membantu menjadwalkan beban kerja seperti ini.`,
            { code: '# Ide sederhana (pseudo-code): jadwalkan job fleksibel\nintensitas = ambil_intensitas_karbon(region="...", jam_berikutnya=12)\njam_terbaik = min(intensitas, key=lambda x: x.gram_per_kwh)\njadwalkan(job="render-laporan-bulanan", pada=jam_terbaik.waktu)' },

            { h2: 'Data juga punya jejak' },
            { ul: ['Atur kebijakan siklus hidup: pindahkan data lama ke kelas penyimpanan arsip, hapus yang tidak diperlukan.', 'Hapus snapshot dan cadangan yang sudah kedaluwarsa sesuai kebijakan retensi.', 'Kompres log dan batasi masa simpannya.', 'Hindari menyalin dataset besar berulang kali antar region.'] },
            { w: 'checklist', title: 'Audit cloud bulanan', items: ['Daftar sumber daya tanpa pemilik atau tag sudah ditinjau.', 'Instance dengan CPU rata-rata < 20% sudah dievaluasi untuk diperkecil.', 'Lingkungan dev/staging mati di luar jam kerja.', 'Disk dan IP yang tidak terpasang dihapus.', 'Kebijakan siklus hidup penyimpanan aktif.', 'Dasbor emisi atau biaya karbon penyedia dipantau.', 'Job fleksibel dijadwalkan dengan mempertimbangkan karbon.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Langkah cloud yang paling mudah dan cepat berdampak?', options: ['Pindah region', 'Mematikan sumber daya yang menganggur', 'Menulis ulang aplikasi'], answer: 1, why: 'Tidak ada risiko, langsung menghemat biaya dan energi.' },
                { q: 'Pekerjaan yang paling cocok digeser ke jam rendah karbon?', options: ['Pembayaran pelanggan real-time', 'Backup dan render laporan malam', 'Login pengguna'], answer: 1, why: 'Pekerjaan fleksibel tidak terganggu bila ditunda beberapa jam.' },
            ] },
        ],
        faq: [
            ['Apakah cloud selalu lebih hijau dari server sendiri?', 'Sering kali lebih efisien karena PUE dan utilisasi lebih baik, tetapi tergantung cara memakainya. Cloud yang diboroskan tetap boros.'],
            ['Bagaimana melihat emisi akun cloud saya?', 'Penyedia besar menyediakan alat seperti Google Cloud Carbon Footprint, AWS Customer Carbon Footprint Tool, dan Microsoft Emissions Impact Dashboard. Metodologinya berbeda-beda, jadi bandingkan dengan hati-hati.'],
            ['Apa itu FinOps dan hubungannya?', 'FinOps adalah praktik mengelola biaya cloud bersama antara tim teknik dan keuangan. Banyak langkahnya sama dengan langkah mengurangi emisi.'],
        ],
        sources: [
            ['Google Cloud: Carbon free energy for Google Cloud regions', 'https://cloud.google.com/sustainability/region-carbon'],
            ['Electricity Maps: live carbon intensity', 'https://app.electricitymaps.com/'],
            ['Green Software Foundation: Carbon Aware SDK', 'https://github.com/Green-Software-Foundation/carbon-aware-sdk'],
        ],
    },

    {
        slug: 'kebijakan-green-it-di-kantor-checklist',
        title: 'Kebijakan Green IT di Kantor: Checklist Siap Pakai',
        description: 'Menyusun kebijakan Green IT untuk kantor dan UMKM: pengadaan, umur pakai, hemat daya, cetak, cloud, sampah elektronik, peran karyawan, dan mengukur kemajuan.',
        date: D, category: C, tags: ['kebijakan Green IT', 'kantor hijau', 'keberlanjutan perusahaan', 'pengadaan IT', 'ESG'], cta: 'jasa',
        lead: 'Banyak perusahaan punya target keberlanjutan di laporan tahunan, tetapi tidak punya aturan sederhana untuk hal sehari-hari: berapa lama laptop dipakai, ke mana perangkat lama dibawa, atau kapan server uji dimatikan. Kebijakan Green IT yang baik itu pendek, praktis, dan diukur. Berikut kerangka yang bisa Anda sesuaikan.',
        body: [
            { h2: 'Tujuh area kebijakan' },
            { w: 'cards', title: 'Ketuk untuk contoh aturan', items: [
                { tag: '1', front: 'Pengadaan', backTag: 'Contoh aturan', back: 'Perangkat baru dipilih dengan mempertimbangkan dukungan pembaruan minimal 5 tahun, kemudahan perbaikan, dan label efisiensi energi. Spesifikasi sesuai kebutuhan peran.' },
                { tag: '2', front: 'Umur pakai', backTag: 'Contoh aturan', back: 'Laptop dipakai minimal 5 tahun kecuali tidak memenuhi kebutuhan atau keamanan; upgrade SSD/RAM dan ganti baterai dilakukan sebelum penggantian.' },
                { tag: '3', front: 'Hemat daya', backTag: 'Contoh aturan', back: 'Pengaturan tidur otomatis di semua perangkat; monitor dan printer mati di luar jam kerja.' },
                { tag: '4', front: 'Pencetakan', backTag: 'Contoh aturan', back: 'Cetak dua sisi sebagai default; tanda tangan dan persetujuan digital untuk dokumen internal.' },
                { tag: '5', front: 'Cloud dan data', backTag: 'Contoh aturan', back: 'Setiap sumber daya cloud wajib memiliki tag pemilik; lingkungan uji mati otomatis di malam hari; data ditinjau sesuai kebijakan retensi.' },
                { tag: '6', front: 'Akhir masa pakai', backTag: 'Contoh aturan', back: 'Data dihapus aman, perangkat didonasikan atau dijual ulang bila layak; sisanya diserahkan ke pengelola limbah elektronik berizin.' },
                { tag: '7', front: 'Rapat dan perjalanan', backTag: 'Contoh aturan', back: 'Rapat daring sebagai pilihan utama untuk koordinasi rutin; perjalanan untuk pertemuan yang benar-benar membutuhkan tatap muka.' },
            ] },

            { h2: 'Mulai dari inventaris' },
            `Anda tidak bisa memperbaiki yang tidak diketahui. Buat daftar perangkat dan layanan: jenis, tanggal beli, pemilik, kondisi, dan perkiraan konsumsi energi. Spreadsheet sederhana sudah cukup untuk kantor kecil.`,
            { table: { head: ['Perangkat', 'Jumlah', 'Rata-rata umur', 'Tindakan'], rows: [['Laptop', '40', '4,2 tahun', '12 unit kandidat upgrade SSD'], ['PC desktop', '15', '6 tahun', 'Evaluasi: ganti atau konsolidasi'], ['Printer', '6', '5 tahun', 'Konsolidasi ke 3 printer bersama'], ['Server lokal', '2', '7 tahun', 'Pertimbangkan migrasi ke cloud']] } },

            { h2: 'Ukur kemajuan' },
            { w: 'calc', title: 'Penghematan listrik dari mode tidur otomatis', desc: 'Perkiraan untuk perangkat yang sebelumnya menyala semalaman.', inputs: [{ id: 'unit', label: 'Jumlah PC/monitor', value: 30, min: 1, max: 5000, step: 1 }, { id: 'watt', label: 'Daya saat menyala menganggur', value: 60, min: 5, max: 300, step: 5, unit: 'W' }, { id: 'jam', label: 'Jam menganggur per hari yang bisa dihemat', value: 14, min: 1, max: 24, step: 1 }, { id: 'tarif', label: 'Tarif listrik', value: 1450, min: 500, max: 3000, step: 50, unit: 'Rp/kWh' }], outputs: [{ label: 'Hemat energi per tahun', expr: 'unit * watt * jam * 365 / 1000', fmt: 'int', unit: 'kWh', big: true }, { label: 'Hemat biaya per tahun', expr: 'unit * watt * jam * 365 / 1000 * tarif', fmt: 'rp', note: 'Angka contoh. Ukur daya perangkat Anda dengan alat ukur listrik untuk hasil yang lebih tepat; sesuaikan tarif dengan golongan pelanggan.' }] },
            { ul: ['Rata-rata umur pakai perangkat.', 'Persentase perangkat yang dipakai ulang atau didaur ulang resmi.', 'Konsumsi listrik kantor per karyawan.', 'Jumlah halaman cetak per karyawan per bulan.', 'Biaya dan emisi cloud per bulan.'] },

            { h2: 'Libatkan karyawan' },
            { ul: ['Jelaskan alasannya dengan data, bukan hanya larangan.', 'Tunjuk "duta hijau" di setiap tim.', 'Rayakan pencapaian: misalnya "tahun ini 25 laptop diperpanjang umurnya dengan SSD".', 'Masukkan Green IT dalam orientasi karyawan baru.'] },
            { callout: 'Mulai dari 3-5 aturan dengan dampak terbesar, ukur selama 3 bulan, lalu tambah. Kebijakan 40 halaman yang tidak dibaca tidak mengubah apa pun.', kind: 'info', title: 'Sederhana dulu' },
            { w: 'checklist', title: 'Rencana 90 hari', items: ['Inventaris perangkat dan layanan cloud selesai.', 'Mode tidur otomatis aktif di semua perangkat.', 'Kebijakan umur pakai dan upgrade disetujui manajemen.', 'Mitra pengelola limbah elektronik berizin dipilih.', 'Tag pemilik wajib untuk sumber daya cloud.', 'Metrik awal dicatat sebagai pembanding.', 'Satu sesi sosialisasi untuk seluruh karyawan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Langkah pertama menyusun kebijakan Green IT?', options: ['Membeli perangkat baru yang hemat energi', 'Inventaris perangkat dan layanan', 'Mencetak poster'], answer: 1, why: 'Tanpa data, tidak tahu prioritas.' },
                { q: 'Aturan umur pakai yang baik biasanya...', options: ['Mengganti semua laptop tiap 2 tahun', 'Memperpanjang dengan upgrade sebelum mengganti', 'Tidak pernah mengganti'], answer: 1, why: 'Upgrade murah memperpanjang umur tanpa mengorbankan kebutuhan kerja.' },
            ] },
        ],
        faq: [
            ['Apakah UMKM perlu kebijakan tertulis?', 'Satu halaman sederhana sudah cukup: aturan hemat daya, umur pakai, dan cara membuang perangkat. Yang penting dijalankan.'],
            ['Bagaimana kaitannya dengan pelaporan ESG?', 'Data inventaris, energi, dan sampah elektronik dari kebijakan Green IT bisa menjadi bagian pelaporan keberlanjutan perusahaan, termasuk emisi lingkup 2 dan sebagian lingkup 3.'],
            ['Siapa yang sebaiknya memimpin?', 'Kolaborasi tim IT, bagian umum/pengadaan, dan manajemen. Satu orang penanggung jawab membantu kebijakan tidak terlupakan.'],
        ],
        sources: [
            ['ITU dan UNITAR: The Global E-waste Monitor 2024', 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/'],
            ['Green IT adalah (artikel terkait)', 'https://muchson.web.id/artikel/green-it-adalah-teknologi-yang-ramah-lingkungan/'],
            ['Cloud dan keberlanjutan (artikel terkait)', 'https://muchson.web.id/artikel/cloud-dan-keberlanjutan-memilih-region-dan-ukuran-server/'],
        ],
    },
];
