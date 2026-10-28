const D = '2026-10-28';
const C = 'Karier & Freelance';

export default [
    {
        slug: 'profil-linkedin-yang-menarik-recruiter',
        title: 'Profil LinkedIn yang Menarik Recruiter: Panduan Lengkap',
        description: 'Cara membuat profil LinkedIn yang ditemukan recruiter: foto, headline, about, pengalaman berbasis hasil, keahlian, dan kebiasaan aktif.',
        date: D, category: C, tags: ['LinkedIn', 'profil LinkedIn', 'personal branding', 'mencari kerja', 'recruiter'], cta: 'jasa',
        lead: 'Banyak recruiter memakai LinkedIn untuk mencari kandidat, bukan hanya menerima lamaran. Profil yang lengkap dan jelas membuat Anda ditemukan dalam pencarian dan dihubungi lebih dulu. Panduan ini membahas setiap bagian profil dari sudut pandang orang yang membacanya: recruiter yang sibuk.',
        body: [
            { h2: 'Cara recruiter membaca profil' },
            `Recruiter biasanya mencari dengan kata kunci (jabatan, keahlian, lokasi), lalu memindai hasil dengan cepat. Yang terlihat pertama: <b>foto, nama, headline, dan lokasi</b>. Bila menarik, mereka membuka profil dan membaca <b>About</b> serta <b>pengalaman terakhir</b>.`,
            { svg: 'flow', label: 'Perjalanan recruiter ke profil Anda', steps: [{ t: 'Pencarian', d: 'kata kunci jabatan dan keahlian' }, { t: 'Hasil pencarian', d: 'foto, headline, lokasi' }, { t: 'Buka profil', d: 'About dan pengalaman' }, { t: 'Hubungi', d: 'pesan atau InMail' }] },

            { h2: 'Bagian demi bagian' },
            { h3: 'Foto dan banner' },
            `Foto wajah jelas, pencahayaan baik, latar sederhana, ekspresi ramah. Banner bisa dipakai untuk pesan singkat atau visual yang relevan dengan bidang Anda.`,
            { h3: 'Headline: bukan hanya jabatan' },
            { table: { head: ['Lemah', 'Lebih kuat'], rows: [
                ['"Mahasiswa"', '"Mahasiswa Informatika · Frontend (React) · Mencari magang 2027"'],
                ['"Staff Admin"', '"Admin Keuangan · Excel, rekonsiliasi bank · Membantu UMKM rapi pembukuan"'],
                ['"Freelancer"', '"Desainer UI/UX untuk aplikasi edukasi · Figma · 20+ proyek"'],
            ] } },
            { w: 'builder', title: 'Pembuat headline', desc: 'Gabungkan peran, keahlian utama, dan nilai yang Anda berikan.', fields: [
                { id: 'peran', label: 'Peran atau target peran', placeholder: 'mis. Data Analyst' },
                { id: 'skill', label: '2-3 keahlian utama', placeholder: 'mis. SQL, Python, Looker Studio' },
                { id: 'nilai', label: 'Nilai atau fokus Anda', placeholder: 'mis. membantu tim penjualan mengambil keputusan dari data' },
            ], template: '{peran} · {skill} · {nilai}' },
            { h3: 'About: cerita singkat Anda' },
            `Tulis 3-5 paragraf pendek: siapa Anda dan apa yang Anda kerjakan, keahlian dan bukti hasil, apa yang sedang dicari, dan cara menghubungi. Gunakan kata kunci bidang Anda secara alami agar mudah ditemukan.`,
            { h3: 'Pengalaman: hasil, bukan daftar tugas' },
            `Sama seperti CV, tulis poin dengan pola <b>kata kerja + apa yang dilakukan + hasil</b>. "Membangun dasbor penjualan mingguan yang dipakai 5 kepala cabang" lebih kuat dari "bertanggung jawab atas laporan".`,
            { h3: 'Keahlian, rekomendasi, dan unggulan (Featured)' },
            { ul: ['Pilih keahlian yang relevan dengan target pekerjaan, letakkan yang terpenting di atas.', 'Minta rekomendasi singkat dari atasan, dosen, atau klien yang menyebut hal spesifik.', 'Gunakan bagian Featured untuk portofolio, artikel, atau proyek terbaik.'] },

            { h2: 'Daftar periksa profil' },
            { w: 'checklist', title: 'Profil LinkedIn', desc: 'Centang yang sudah lengkap.', items: ['Foto wajah jelas dan profesional.', 'Headline memuat peran, keahlian, dan nilai.', 'Lokasi diisi (penting untuk pencarian recruiter).', 'About 3-5 paragraf dengan kata kunci bidang.', 'Pengalaman ditulis berbasis hasil.', 'Minimal 5 keahlian relevan.', 'Ada portofolio atau proyek di Featured.', 'URL profil disederhanakan (misalnya linkedin.com/in/nama-anda).', 'Fitur "Open to Work" diatur sesuai kebutuhan (publik atau hanya recruiter).'] },

            { h2: 'Aktif tanpa harus menjadi influencer' },
            `Profil yang aktif lebih mudah ditemukan dan diingat. Tidak perlu memposting setiap hari. Cukup kebiasaan kecil:`,
            { ul: [
                'Komentar yang bermakna di unggahan orang di bidang Anda (bukan sekadar "mantap").',
                'Satu unggahan per minggu atau dua minggu: pelajaran dari proyek, ringkasan buku, atau hasil belajar.',
                'Personalisasi pesan saat mengirim permintaan koneksi.',
            ] },
            { callout: 'Menulis tentang apa yang sedang Anda pelajari adalah cara yang jujur dan efektif membangun reputasi, terutama bagi lulusan baru yang belum punya banyak pengalaman kerja.', kind: 'good', title: 'Untuk lulusan baru' },
        ],
        faq: [
            ['Apa isi headline LinkedIn yang baik?', 'Peran atau target peran, 2-3 keahlian utama, dan nilai yang Anda berikan, bukan hanya nama jabatan.'],
            ['Apakah perlu foto profil di LinkedIn?', 'Ya. Foto wajah yang jelas membuat profil terlihat lengkap dan lebih dipercaya.'],
            ['Apakah fitur Open to Work merugikan?', 'Tidak selalu. Anda bisa memilih agar hanya terlihat oleh recruiter, bukan publik.'],
            ['Seberapa sering harus memposting?', 'Tidak harus sering. Satu unggahan bermakna per minggu atau dua minggu sudah cukup membangun kehadiran.'],
        ],
        sources: [
            ['LinkedIn Help Center', 'https://www.linkedin.com/help/linkedin'],
            ['CV ramah ATS (artikel terkait)', 'https://muchson.web.id/artikel/cv-ramah-ats-cara-membuat-cv-yang-lolos-seleksi-awal/'],
            ['Portofolio developer yang dilirik recruiter (artikel terkait)', 'https://muchson.web.id/artikel/portofolio-developer-yang-dilirik-recruiter/'],
        ],
    },

    {
        slug: 'skill-digital-yang-paling-dicari-dan-cara-mempelajarinya',
        title: 'Skill Digital yang Paling Dicari dan Cara Mempelajarinya',
        description: 'Skill yang paling cepat tumbuh menurut Future of Jobs Report 2025 WEF, skill digital per profesi, dan rencana belajar 90 hari.',
        date: D, category: C, tags: ['skill digital', 'skill yang dicari', 'Future of Jobs', 'upskilling', 'karier'], cta: 'jasa',
        lead: 'Dunia kerja berubah cepat. Menurut Future of Jobs Report 2025 dari World Economic Forum, pemberi kerja memperkirakan 39% keterampilan inti pekerja akan berubah pada 2030. Artikel ini merangkum keterampilan yang paling cepat tumbuh dan cara mempelajarinya tanpa harus berhenti bekerja.',
        body: [
            { h2: 'Yang dikatakan Future of Jobs Report 2025' },
            `Laporan WEF 2025 disusun dari survei lebih dari 1.000 pemberi kerja besar di 55 negara. Tiga keterampilan dengan pertumbuhan tercepat adalah:`,
            { svg: 'layers', label: 'Keterampilan yang paling cepat tumbuh (WEF 2025)', items: [{ t: '1. AI dan big data', d: 'memakai, mengelola, dan memahami data serta AI' }, { t: '2. Jaringan dan keamanan siber', d: 'melindungi sistem dan data' }, { t: '3. Literasi teknologi', d: 'memahami dan memakai teknologi dengan cakap' }, { t: 'Juga naik: berpikir kreatif', d: 'serta ketangguhan, fleksibilitas, dan rasa ingin tahu' }] },
            { callout: 'Perhatikan bahwa keterampilan manusiawi seperti berpikir kreatif, ketangguhan, dan rasa ingin tahu juga termasuk yang paling meningkat kebutuhannya. Skill digital paling bernilai bila dipadukan dengan kemampuan ini.', kind: 'info', title: 'Bukan hanya teknis' },

            { h2: 'Skill digital untuk berbagai profesi' },
            { table: { head: ['Profesi', 'Skill digital yang berdampak besar'], rows: [
                ['Administrasi dan keuangan', 'Spreadsheet lanjutan, otomasi sederhana, visualisasi data'],
                ['Pemasaran dan penjualan', 'Analitik digital, iklan digital, CRM, memakai AI untuk konten'],
                ['Guru dan pelatih', 'Desain pembelajaran digital, AI untuk materi, aksesibilitas'],
                ['Kesehatan', 'Sistem informasi kesehatan, keamanan data pasien'],
                ['UMKM', 'Toko daring, pembayaran digital, pencatatan keuangan digital, konten media sosial'],
                ['IT', 'Cloud, keamanan siber, data, AI engineering'],
            ] } },

            { h2: 'Pilih skill pertama Anda' },
            { w: 'choose', title: 'Skill mana yang paling tepat dipelajari dulu?', questions: [
                { q: 'Pekerjaan Anda sehari-hari paling banyak ...', options: [{ t: 'Mengolah angka dan laporan', add: { data: 3 } }, { t: 'Membuat konten dan berkomunikasi', add: { ai: 2, marketing: 2 } }, { t: 'Mengelola sistem atau perangkat', add: { security: 3 } }, { t: 'Mengajar atau melatih', add: { ai: 2 } }] },
                { q: 'Masalah terbesar di pekerjaan Anda?', options: [{ t: 'Pekerjaan berulang yang memakan waktu', add: { data: 2, ai: 1 } }, { t: 'Sulit menjangkau pelanggan', add: { marketing: 3 } }, { t: 'Khawatir data atau akun bocor', add: { security: 2 } }] },
            ], results: {
                data: { title: 'Analisis data dan otomasi', text: 'Mulai dari spreadsheet lanjutan (pivot, lookup), lalu dasar SQL atau Python untuk mengotomatiskan laporan.' },
                ai: { title: 'Memakai AI secara efektif dan aman', text: 'Kuasai prompt, verifikasi hasil, privasi data, dan terapkan pada tugas nyata Anda.' },
                marketing: { title: 'Pemasaran digital dan analitik', text: 'Pelajari analitik situs dan media sosial, iklan digital, dan eksperimen konten berbasis data.' },
                security: { title: 'Dasar keamanan siber', text: 'Pahami ancaman umum, keamanan akun, jaringan dasar, lalu pertimbangkan sertifikasi tingkat pemula.' },
            } },

            { h2: 'Rencana belajar 90 hari' },
            { svg: 'timeline', label: 'Rencana belajar 90 hari', events: [['Hari 1-30', 'Dasar', 'Ikuti satu kursus terstruktur, 30-45 menit per hari'], ['Hari 31-60', 'Terapkan', 'Satu proyek kecil yang menyelesaikan masalah nyata di pekerjaan'], ['Hari 61-90', 'Tunjukkan', 'Dokumentasikan hasil, bagikan di portofolio atau LinkedIn']] },
            { w: 'calc', title: 'Hitung investasi waktu belajar', inputs: [
                { id: 'menit', label: 'Menit belajar per hari', value: 40, min: 10, max: 180, step: 5 },
                { id: 'hari', label: 'Hari belajar per minggu', value: 5, min: 1, max: 7, step: 1 },
                { id: 'minggu', label: 'Jumlah minggu', value: 13, min: 4, max: 52, step: 1 },
            ], outputs: [
                { label: 'Total jam belajar', expr: 'menit * hari * minggu / 60', fmt: 'num', unit: 'jam', big: true },
            ] },
            { callout: 'Proyek nyata di tempat kerja adalah bukti terbaik. "Saya mengotomatiskan laporan mingguan sehingga hemat 3 jam" jauh lebih meyakinkan daripada sertifikat saja.', kind: 'good', title: 'Bukti mengalahkan sertifikat' },
            { w: 'checklist', title: 'Kebiasaan belajar berkelanjutan', desc: 'Centang yang sudah Anda jalankan.', items: ['Ada satu skill fokus untuk 3 bulan ini.', 'Ada jadwal belajar tetap di kalender.', 'Ada proyek nyata untuk menerapkan skill.', 'Hasil belajar dicatat atau dibagikan.', 'Ada teman atau mentor untuk berdiskusi.'] },
        ],
        faq: [
            ['Skill apa yang paling dicari ke depan?', 'Menurut Future of Jobs Report 2025 WEF, yang paling cepat tumbuh adalah AI dan big data, jaringan dan keamanan siber, serta literasi teknologi, diikuti berpikir kreatif.'],
            ['Apakah harus kuliah lagi untuk upskilling?', 'Tidak harus. Kursus daring terstruktur, proyek nyata, dan sertifikasi tertentu sering cukup untuk banyak skill digital.'],
            ['Berapa lama menguasai skill digital baru?', 'Dasar sebuah skill biasanya bisa dikuasai dalam beberapa bulan belajar rutin, lalu diperdalam lewat proyek.'],
            ['Skill non-teknis apa yang penting?', 'Berpikir kreatif, ketangguhan, fleksibilitas, rasa ingin tahu, dan kemampuan belajar sepanjang hayat.'],
        ],
        sources: [
            ['World Economic Forum: The Future of Jobs Report 2025', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'],
            ['Belajar AI dari nol (artikel terkait)', 'https://muchson.web.id/artikel/belajar-ai-dari-nol-roadmap-untuk-pemula/'],
            ['Apakah AI akan menggantikan pekerjaan saya (artikel terkait)', 'https://muchson.web.id/artikel/apakah-ai-akan-menggantikan-pekerjaan-saya/'],
        ],
    },

    {
        slug: 'cara-negosiasi-gaji-saat-tawaran-kerja',
        title: 'Cara Negosiasi Gaji saat Tawaran Kerja (Dengan Skrip)',
        description: 'Langkah negosiasi gaji yang profesional: riset kisaran pasar, efek tawaran pertama, skrip kalimat, komponen selain gaji, dan kesalahan umum.',
        date: D, category: C, tags: ['negosiasi gaji', 'tawaran kerja', 'ekspektasi gaji', 'karier', 'wawancara kerja'], cta: 'jasa',
        lead: 'Banyak orang menerima tawaran gaji pertama karena takut terlihat serakah atau takut tawaran dibatalkan. Padahal negosiasi yang sopan dan berbasis data adalah hal wajar di banyak perusahaan. Selisih kecil di awal bisa berlipat selama bertahun-tahun karena kenaikan gaji sering dihitung dari angka awal.',
        body: [
            { h2: 'Kenapa negosiasi penting' },
            { w: 'calc', title: 'Dampak jangka panjang selisih gaji awal', desc: 'Kenaikan tahunan biasanya berupa persentase dari gaji saat ini, sehingga selisih awal ikut bertambah.', inputs: [
                { id: 'gaji', label: 'Tawaran gaji per bulan (Rp)', value: 7000000, min: 2000000, max: 50000000, step: 250000 },
                { id: 'tambah', label: 'Tambahan hasil negosiasi (%)', value: 8, min: 1, max: 30, step: 1 },
                { id: 'naik', label: 'Kenaikan tahunan rata-rata (%)', value: 6, min: 0, max: 20, step: 1 },
                { id: 'tahun', label: 'Lama bekerja (tahun)', value: 5, min: 1, max: 15, step: 1 },
            ], outputs: [
                { label: 'Tambahan total selama masa kerja', expr: 'gaji * tambah / 100 * 12 * (naik === 0 ? tahun : (Math.pow(1 + naik / 100, tahun) - 1) / (naik / 100))', fmt: 'rp', big: true },
                { label: 'Tambahan per bulan di tahun pertama', expr: 'gaji * tambah / 100', fmt: 'rp' },
            ] },

            { h2: 'Langkah 1: riset kisaran pasar' },
            { ul: [
                'Lihat lowongan sejenis yang mencantumkan gaji.',
                'Gunakan survei gaji dari situs lowongan kerja dan perusahaan rekrutmen.',
                'Tanyakan ke rekan seprofesi atau komunitas, dengan menghormati privasi.',
                'Pertimbangkan kota, ukuran perusahaan, industri, dan tingkat pengalaman.',
            ] },
            `Hasilnya adalah tiga angka: <b>batas bawah</b> (angka minimal yang Anda terima), <b>target</b> (angka yang realistis dan Anda harapkan), dan <b>angka pembuka</b> (sedikit di atas target).`,

            { h2: 'Langkah 2: pahami efek tawaran pertama' },
            `Penelitian Galinsky dan Mussweiler (2001) menunjukkan tawaran pertama dalam negosiasi cenderung menjadi "jangkar" yang menarik hasil akhir ke arahnya. Implikasinya: bila Anda sudah punya data pasar yang baik, menyebut angka berdasar data dapat membantu menjangkar diskusi. Bila belum yakin dengan kisaran perusahaan, Anda bisa lebih dulu menanyakan kisaran anggaran untuk posisi itu.`,
            { callout: 'Angka pembuka harus bisa dibela dengan alasan: data pasar, pengalaman, dan nilai yang Anda bawa. Angka yang jauh di atas pasar tanpa alasan justru merusak kredibilitas.', kind: 'warn', title: 'Berani, tapi berdasar' },

            { h2: 'Langkah 3: skrip yang bisa dipakai' },
            { table: { head: ['Situasi', 'Contoh kalimat'], rows: [
                ['Ditanya ekspektasi di awal', '"Berdasarkan riset saya untuk posisi serupa di Malang dengan pengalaman 3 tahun, kisarannya Rp8-9,5 juta. Saya terbuka mendiskusikan sesuai total paket."'],
                ['Menerima tawaran di bawah target', '"Terima kasih atas tawarannya, saya antusias dengan peran ini. Mengingat pengalaman saya di X dan kisaran pasar, apakah memungkinkan di angka Rp9 juta?"'],
                ['Perusahaan bilang anggaran terbatas', '"Saya memahami. Apakah ada ruang di komponen lain, misalnya tunjangan, hari kerja jarak jauh, atau peninjauan gaji setelah 6 bulan?"'],
                ['Butuh waktu berpikir', '"Boleh saya mengonfirmasi dalam dua hari kerja?"'],
            ] } },
            { w: 'builder', title: 'Siapkan skrip Anda', fields: [
                { id: 'posisi', label: 'Posisi', placeholder: 'mis. UI/UX Designer' },
                { id: 'data', label: 'Dasar data pasar', placeholder: 'mis. 5 lowongan serupa di Surabaya: Rp7-9 juta' },
                { id: 'nilai', label: 'Nilai yang Anda bawa', placeholder: 'mis. pengalaman mendesain 2 aplikasi dengan 50 ribu pengguna' },
                { id: 'angka', label: 'Angka yang diajukan', placeholder: 'mis. Rp8,5 juta' },
            ], template: 'Terima kasih atas tawarannya untuk posisi {posisi}. Saya sangat tertarik bergabung.\nBerdasarkan {data}, serta {nilai}, saya berharap kompensasinya bisa di angka {angka}.\nApakah hal ini memungkinkan? Saya juga terbuka mendiskusikan komponen paket lainnya.' },

            { h2: 'Yang bisa dinegosiasikan selain gaji pokok' },
            { ul: ['Tunjangan (transportasi, makan, internet, kesehatan).', 'Fleksibilitas kerja jarak jauh atau jam kerja.', 'Anggaran pelatihan dan sertifikasi.', 'Tanggal mulai kerja.', 'Peninjauan gaji lebih awal, misalnya setelah masa percobaan.', 'Cuti tambahan.'] },

            { h2: 'Kesalahan yang dihindari' },
            { w: 'cards', title: 'Ketuk untuk penjelasannya', items: [
                { tag: 'Hindari', front: 'Berbohong tentang tawaran lain.', backTag: 'Kenapa', back: 'Mudah ketahuan dan merusak kepercayaan sejak awal.' },
                { tag: 'Hindari', front: 'Alasan pribadi: "cicilan saya banyak".', backTag: 'Kenapa', back: 'Negosiasi sebaiknya berdasar nilai dan pasar, bukan kebutuhan pribadi.' },
                { tag: 'Hindari', front: 'Menerima secara lisan lalu menegosiasi ulang.', backTag: 'Kenapa', back: 'Negosiasikan sebelum menyatakan menerima, dan minta tawaran tertulis.' },
                { tag: 'Hindari', front: 'Nada menuntut atau mengancam.', backTag: 'Kenapa', back: 'Nada kolaboratif ("bagaimana kita bisa sampai ke angka ini") lebih efektif.' },
            ] },
        ],
        faq: [
            ['Apakah boleh menegosiasikan gaji fresh graduate?', 'Boleh, dengan sopan dan berbasis data. Ruangnya mungkin lebih kecil, tetapi komponen lain seperti pelatihan atau tanggal mulai juga bisa dibicarakan.'],
            ['Kapan waktu terbaik negosiasi gaji?', 'Setelah menerima tawaran resmi dan sebelum menyatakan menerima.'],
            ['Bagaimana menjawab pertanyaan ekspektasi gaji?', 'Sebutkan kisaran berdasarkan riset pasar, pengalaman, dan nilai yang Anda bawa, serta tunjukkan keterbukaan pada total paket.'],
            ['Apakah tawaran bisa dibatalkan karena negosiasi?', 'Jarang terjadi bila negosiasi dilakukan dengan sopan dan masuk akal. Risiko lebih besar bila tuntutan jauh di atas pasar atau disampaikan dengan nada mengancam.'],
        ],
        sources: [
            ['Galinsky, A. D., & Mussweiler, T. (2001). First offers as anchors. Journal of Personality and Social Psychology', 'https://doi.org/10.1037/0022-3514.81.4.657'],
            ['Persiapan wawancara kerja developer (artikel terkait)', 'https://muchson.web.id/artikel/persiapan-wawancara-kerja-developer-pertanyaan-umum/'],
        ],
    },

    {
        slug: 'surat-lamaran-kerja-yang-baik-dan-contohnya',
        title: 'Surat Lamaran Kerja yang Baik: Struktur dan Contohnya',
        description: 'Cara menulis surat lamaran kerja yang dibaca recruiter: struktur empat paragraf, contoh bahasa Indonesia, versi email, dan pembuat surat.',
        date: D, category: C, tags: ['surat lamaran kerja', 'cover letter', 'contoh surat lamaran', 'melamar kerja', 'karier'], cta: 'jasa',
        lead: 'Surat lamaran kerja sering diperlakukan sebagai formalitas: disalin dari templat, diganti nama perusahaannya, lalu dikirim. Recruiter bisa merasakannya. Surat lamaran yang baik singkat, spesifik, dan menjawab satu pertanyaan: kenapa Anda cocok untuk posisi ini di perusahaan ini?',
        body: [
            { h2: 'Struktur empat paragraf' },
            { svg: 'layers', label: 'Struktur surat lamaran', items: [{ t: 'Pembuka', d: 'posisi yang dilamar dan sumber info, plus kalimat yang menarik' }, { t: 'Kecocokan', d: '2-3 bukti pengalaman atau keahlian yang relevan' }, { t: 'Kenapa perusahaan ini', d: 'hal spesifik yang menarik dan nilai yang Anda bawa' }, { t: 'Penutup', d: 'ajakan wawancara dan terima kasih' }], caption: 'Idealnya tidak lebih dari satu halaman, sekitar 250-400 kata.' },

            { h2: 'Contoh surat lamaran (bahasa Indonesia)' },
            { html: '<div class="callout"><p><b>Hal: Lamaran Posisi Admin Media Sosial</b></p><p>Yth. Tim Rekrutmen PT Kopi Nusantara,</p><p>Saya ingin melamar posisi Admin Media Sosial yang diumumkan di situs karier perusahaan pada 20 Oktober 2026. Selama dua tahun terakhir saya mengelola akun Instagram tiga UMKM kuliner di Malang, dan salah satunya tumbuh dari 1.200 menjadi 9.800 pengikut dalam setahun.</p><p>Dalam pekerjaan tersebut, saya menyusun kalender konten bulanan, memotret dan menyunting foto produk, serta membaca data insight untuk menentukan jam unggah terbaik. Saya juga terbiasa membalas pesan pelanggan dengan cepat dan ramah, yang membantu meningkatkan pesanan lewat DM.</p><p>Saya tertarik pada PT Kopi Nusantara karena komitmennya bekerja langsung dengan petani kopi lokal. Saya ingin membantu menyampaikan cerita para petani itu kepada pelanggan muda lewat konten yang jujur dan menarik.</p><p>Bersama surat ini saya lampirkan CV dan tautan portofolio. Saya berharap dapat berdiskusi lebih lanjut dalam wawancara. Terima kasih atas waktu dan perhatian Bapak/Ibu.</p><p>Hormat saya,<br>Dina Pratiwi<br>0812-xxxx-xxxx · dina@contoh.id</p></div>' },
            { callout: 'Perhatikan: ada angka nyata (1.200 menjadi 9.800 pengikut), keahlian spesifik, dan alasan memilih perusahaan yang tidak bisa disalin ke lamaran lain.', kind: 'good', title: 'Kenapa contoh ini kuat' },

            { h2: 'Versi email singkat' },
            `Banyak lowongan meminta lamaran lewat email. Di sini, isi email bisa berupa versi singkat surat lamaran:`,
            { code: 'Subjek: Lamaran Admin Media Sosial - Dina Pratiwi\n\nYth. Tim Rekrutmen PT Kopi Nusantara,\n\nSaya melamar posisi Admin Media Sosial. Selama 2 tahun saya mengelola akun Instagram 3 UMKM kuliner, salah satunya tumbuh dari 1.200 menjadi 9.800 pengikut dalam setahun.\n\nCV dan portofolio terlampir. Saya berharap dapat berdiskusi lebih lanjut.\n\nTerima kasih,\nDina Pratiwi\n0812-xxxx-xxxx' },
            { ul: ['Subjek jelas: posisi dan nama.', 'Lampiran dalam PDF dengan nama berkas rapi, misalnya <code>CV_Dina_Pratiwi.pdf</code>.', 'Gunakan alamat email yang profesional.', 'Kirim dari email sendiri, bukan email kantor tempat bekerja sekarang.'] },

            { h2: 'Buat surat lamaran Anda' },
            { w: 'builder', title: 'Pembuat surat lamaran', desc: 'Isi dengan data nyata Anda. Hasilnya draf yang tetap perlu Anda sunting.', fields: [
                { id: 'posisi', label: 'Posisi yang dilamar', placeholder: 'mis. Staf Administrasi Keuangan' },
                { id: 'perusahaan', label: 'Nama perusahaan', placeholder: 'mis. PT Maju Bersama' },
                { id: 'sumber', label: 'Sumber info lowongan', placeholder: 'mis. LinkedIn, 15 Oktober 2026' },
                { id: 'bukti', label: 'Satu pencapaian paling relevan', placeholder: 'mis. merapikan rekonsiliasi bank sehingga selisih kas tercatat dalam 1 hari, bukan 1 minggu', long: true },
                { id: 'skill', label: 'Keahlian yang dibutuhkan lowongan dan Anda kuasai', placeholder: 'mis. Excel (pivot, VLOOKUP), aplikasi akuntansi, ketelitian' },
                { id: 'kenapa', label: 'Kenapa perusahaan ini', placeholder: 'mis. ekspansi ke 5 kota baru tahun ini', long: true },
                { id: 'nama', label: 'Nama Anda' },
            ], template: 'Yth. Tim Rekrutmen {perusahaan},\n\nSaya ingin melamar posisi {posisi} yang saya temukan di {sumber}. {bukti}\n\nSaya menguasai {skill}, yang menurut saya relevan dengan kebutuhan posisi ini.\n\nSaya tertarik bergabung dengan {perusahaan} karena {kenapa}. Saya ingin berkontribusi dalam pertumbuhan tersebut.\n\nBersama surat ini saya lampirkan CV. Saya berharap dapat berdiskusi lebih lanjut. Terima kasih atas perhatian Bapak/Ibu.\n\nHormat saya,\n{nama}' },

            { h2: 'Daftar periksa sebelum mengirim' },
            { w: 'checklist', title: 'Cek akhir', desc: 'Centang sebelum mengirim.', items: ['Nama perusahaan dan posisi benar.', 'Ada minimal satu pencapaian spesifik.', 'Ada alasan memilih perusahaan yang spesifik.', 'Tidak lebih dari satu halaman.', 'Tidak ada salah ketik (baca keras-keras).', 'Kontak lengkap dan benar.', 'Lampiran PDF dengan nama berkas rapi.'] },
        ],
        faq: [
            ['Apa isi surat lamaran kerja yang baik?', 'Posisi yang dilamar, bukti pengalaman atau keahlian yang relevan, alasan memilih perusahaan, dan ajakan wawancara.'],
            ['Berapa panjang surat lamaran?', 'Satu halaman, sekitar 250-400 kata. Untuk email, versi yang lebih ringkas.'],
            ['Apakah surat lamaran masih dibaca?', 'Tidak semua recruiter membacanya, tetapi bagi yang membaca, surat yang spesifik bisa membedakan Anda dari pelamar lain.'],
            ['Bolehkah memakai templat?', 'Boleh sebagai kerangka, tetapi isi harus disesuaikan dengan pengalaman Anda dan perusahaan yang dilamar.'],
        ],
        sources: [
            ['AI untuk membuat CV dan surat lamaran (artikel terkait)', 'https://muchson.web.id/artikel/ai-untuk-membuat-cv-dan-surat-lamaran/'],
            ['CV ramah ATS (artikel terkait)', 'https://muchson.web.id/artikel/cv-ramah-ats-cara-membuat-cv-yang-lolos-seleksi-awal/'],
        ],
    },

    {
        slug: 'kerja-remote-untuk-perusahaan-luar-negeri',
        title: 'Kerja Remote untuk Perusahaan Luar Negeri dari Indonesia',
        description: 'Panduan kerja remote untuk perusahaan luar negeri dari Indonesia: jenis peran, zona waktu, pembayaran, pajak, dan cara menghindari penipuan.',
        date: D, category: C, tags: ['kerja remote', 'remote work luar negeri', 'freelance internasional', 'gaji dolar', 'karier'], cta: 'jasa',
        lead: 'Bekerja dari Indonesia untuk perusahaan di Singapura, Australia, Eropa, atau Amerika kini semakin umum, terutama di bidang teknologi, desain, pemasaran digital, dan dukungan pelanggan. Peluangnya nyata, tetapi persaingannya global dan ada hal praktis yang perlu disiapkan: zona waktu, pembayaran, pajak, dan kewaspadaan terhadap lowongan palsu.',
        body: [
            { h2: 'Bentuk kerja remote internasional' },
            { table: { head: ['Bentuk', 'Penjelasan', 'Catatan'], rows: [
                ['Kontraktor atau freelancer', 'Anda bekerja sebagai penyedia jasa mandiri', 'Paling umum; urus pajak dan jaminan sendiri'],
                ['Lewat Employer of Record (EOR)', 'Perusahaan perantara mempekerjakan Anda secara lokal atas nama klien luar negeri', 'Biasanya ada fasilitas sesuai aturan lokal'],
                ['Proyek di platform freelance', 'Proyek per pekerjaan lewat marketplace', 'Cocok untuk membangun reputasi awal'],
            ] } },

            { h2: 'Bidang yang paling banyak membuka peluang' },
            { ul: ['Pengembangan perangkat lunak (frontend, backend, mobile).', 'Desain UI/UX dan grafis.', 'Pemasaran digital, penulisan konten, SEO.', 'Data dan analitik.', 'Dukungan pelanggan dan asisten virtual.', 'Penerjemahan dan pelokalan.'] },

            { h2: 'Persiapan agar dilirik' },
            { w: 'checklist', title: 'Kesiapan remote internasional', desc: 'Centang yang sudah siap.', items: ['Bahasa Inggris tertulis yang jelas untuk komunikasi asinkron.', 'Portofolio berbahasa Inggris dengan studi kasus.', 'Profil LinkedIn berbahasa Inggris.', 'Internet stabil dan cadangan (misalnya paket data).', 'Perangkat kerja yang memadai dan cadangan listrik bila perlu.', 'Pengalaman memakai alat kolaborasi (Slack, Notion, Git, Figma, dan sejenisnya).', 'Rekening atau layanan untuk menerima pembayaran internasional.'] },
            { callout: 'Kemampuan komunikasi asinkron sangat dihargai: menulis update yang jelas, mendokumentasikan pekerjaan, dan bertanya dengan konteks lengkap. Ini sering lebih menentukan daripada kemampuan teknis semata.', kind: 'good', title: 'Skill yang sering terlupa' },

            { h2: 'Mengelola beda zona waktu' },
            { w: 'calc', title: 'Jam kerja bersama (overlap)', desc: 'Hitung berapa jam kerja Anda yang bersamaan dengan tim. Masukkan selisih jam tim terhadap WIB (negatif bila lebih lambat).', inputs: [
                { id: 'selisih', label: 'Selisih zona waktu tim terhadap WIB (jam)', value: 1, min: -12, max: 12, step: 1 },
                { id: 'mulai', label: 'Jam mulai kerja tim (waktu lokal tim)', value: 9, min: 5, max: 14, step: 1 },
                { id: 'saya', label: 'Jam mulai kerja Anda (WIB)', value: 8, min: 5, max: 14, step: 1 },
            ], outputs: [
                { label: 'Tim mulai bekerja pukul (WIB)', expr: "String(((mulai - selisih) % 24 + 24) % 24).padStart(2, '0') + '.00'", fmt: 'text', big: true },
                { label: 'Jam kerja bersamaan (dari 8 jam)', expr: 'Math.max(0, Math.min(saya + 8, ((mulai - selisih) % 24 + 24) % 24 + 8) - Math.max(saya, ((mulai - selisih) % 24 + 24) % 24))', fmt: 'int', unit: 'jam' },
            ] },
            `Contoh: tim di Singapura (WIB+1) mulai pukul 09.00 waktu Singapura, yaitu 08.00 WIB, hampir sejalan. Tim di Eropa Tengah bisa 5-6 jam di belakang WIB, sehingga sering bekerja sore sampai malam WIB. Sepakati jam overlap tetap untuk rapat dan biarkan sisa waktu untuk kerja asinkron.`,

            { h2: 'Menerima pembayaran' },
            `Pilihan umum adalah transfer bank internasional atau layanan transfer uang daring. Bandingkan <b>biaya transfer, kurs yang dipakai, dan kecepatan</b>. Selisih kurs kecil bisa berarti besar untuk pembayaran rutin. Pastikan layanan yang dipakai berizin dan sesuai ketentuan yang berlaku di Indonesia.`,

            { h2: 'Pajak' },
            `Wajib pajak orang pribadi dalam negeri di Indonesia pada prinsipnya dikenai pajak atas penghasilan dari seluruh dunia, termasuk dari klien luar negeri. Simpan kontrak, faktur, dan bukti penerimaan dana, lalu laporkan di SPT Tahunan. Aturan dan skema yang berlaku bisa berbeda tergantung status Anda (pekerja bebas, usaha, atau melalui perusahaan), jadi konsultasikan dengan konsultan pajak atau kantor pajak.`,

            { h2: 'Waspada lowongan remote palsu' },
            { w: 'cards', title: 'Ketuk untuk melihat tandanya', items: [
                { tag: 'Tanda bahaya', front: 'Diminta membayar biaya pelatihan, alat, atau "deposit".', backTag: 'Kenapa', back: 'Pemberi kerja yang sah membayar Anda, bukan sebaliknya.' },
                { tag: 'Tanda bahaya', front: 'Wawancara hanya lewat chat, langsung diterima.', backTag: 'Kenapa', back: 'Proses rekrutmen nyata biasanya melibatkan wawancara video dan tahap seleksi.' },
                { tag: 'Tanda bahaya', front: 'Gaji sangat tinggi untuk pekerjaan sederhana seperti "like video".', backTag: 'Kenapa', back: 'Ini pola penipuan tugas yang marak, berujung meminta Anda menyetor uang.' },
                { tag: 'Tanda bahaya', front: 'Diminta data rekening dan KTP sebelum ada kontrak.', backTag: 'Kenapa', back: 'Data bisa disalahgunakan. Berikan setelah ada kontrak resmi dan verifikasi perusahaan.' },
            ] },
        ],
        faq: [
            ['Bisakah bekerja remote untuk perusahaan luar negeri dari Indonesia?', 'Bisa, biasanya sebagai kontraktor atau lewat Employer of Record, terutama di bidang teknologi, desain, pemasaran digital, dan dukungan pelanggan.'],
            ['Apakah penghasilan dari luar negeri kena pajak?', 'Wajib pajak dalam negeri pada prinsipnya dikenai pajak atas penghasilan dari seluruh dunia. Konsultasikan dengan konsultan pajak untuk skema yang sesuai.'],
            ['Bagaimana menerima gaji dari luar negeri?', 'Melalui transfer bank internasional atau layanan transfer uang berizin. Bandingkan biaya dan kurs.'],
            ['Bagaimana mengenali lowongan remote palsu?', 'Waspadai permintaan bayar di muka, proses seleksi yang terlalu mudah, gaji tidak masuk akal, dan permintaan data pribadi sebelum kontrak.'],
        ],
        sources: [
            ['Direktorat Jenderal Pajak', 'https://www.pajak.go.id/'],
            ['OJK Indonesia Anti-Scam Centre', 'https://iasc.ojk.go.id/'],
            ['Freelance pertama: cara mendapat klien (artikel terkait)', 'https://muchson.web.id/artikel/freelance-pertama-cara-mendapat-klien-dan-menentukan-harga/'],
        ],
    },

    {
        slug: 'karier-cyber-security-untuk-pemula',
        title: 'Karier Cyber Security untuk Pemula: Peran, Skill, dan Jalur',
        description: 'Memulai karier keamanan siber: peran yang tersedia, skill dasar, tempat latihan legal, sertifikasi pemula, dan rencana belajar 6 bulan.',
        date: D, category: C, tags: ['cyber security', 'keamanan siber', 'karier IT', 'ethical hacking', 'sertifikasi keamanan'], cta: 'jasa',
        lead: 'Keamanan siber termasuk keterampilan yang paling cepat tumbuh menurut Future of Jobs Report 2025 WEF. Bagi banyak pemula, bidang ini terdengar identik dengan hacker di film. Kenyataannya jauh lebih beragam: ada yang memantau serangan, mengaudit sistem, menyusun kebijakan, sampai mendidik pengguna. Artikel ini memetakan jalurnya.',
        body: [
            { h2: 'Peran-peran di keamanan siber' },
            { table: { head: ['Peran', 'Pekerjaan sehari-hari', 'Cocok untuk yang suka'], rows: [
                ['SOC analyst', 'Memantau peringatan keamanan, menyelidiki aktivitas mencurigakan', 'Detail, investigasi'],
                ['Penetration tester', 'Menguji keamanan sistem dengan izin, mencari celah', 'Memecahkan teka-teki teknis'],
                ['Incident responder', 'Menangani serangan yang sedang terjadi dan pemulihan', 'Bekerja di bawah tekanan'],
                ['Security engineer', 'Merancang dan membangun sistem yang aman', 'Membangun dan mengotomatiskan'],
                ['GRC (tata kelola, risiko, kepatuhan)', 'Kebijakan, audit, kepatuhan regulasi seperti UU PDP', 'Dokumen, regulasi, komunikasi'],
                ['Security awareness', 'Melatih karyawan mengenali phishing dan praktik aman', 'Mengajar dan komunikasi'],
            ] } },
            `Kerangka NICE dari NIST di Amerika Serikat memetakan puluhan peran kerja keamanan siber beserta pengetahuan dan keterampilannya. Ini sumber yang baik untuk melihat betapa luasnya bidang ini.`,

            { h2: 'Fondasi yang perlu dikuasai' },
            { svg: 'layers', label: 'Fondasi keamanan siber', items: [{ t: 'Jaringan', d: 'IP, DNS, HTTP/HTTPS, port, firewall' }, { t: 'Sistem operasi', d: 'Linux (baris perintah) dan Windows' }, { t: 'Dasar pemrograman', d: 'Python atau Bash untuk otomasi' }, { t: 'Konsep keamanan', d: 'kerahasiaan, integritas, ketersediaan; autentikasi; kriptografi dasar' }, { t: 'Ancaman umum', d: 'phishing, malware, OWASP Top 10 untuk aplikasi web' }] },
            { callout: 'Banyak orang ingin langsung belajar "hacking". Tanpa pemahaman jaringan dan sistem operasi, alat-alat keamanan hanya akan menjadi tombol yang tidak dipahami. Fondasi membuat kemajuan berikutnya jauh lebih cepat.', kind: 'info', title: 'Jangan lompati fondasi' },

            { h2: 'Etika dan hukum: wajib dipahami sejak awal' },
            `Menguji keamanan sistem milik orang lain <b>tanpa izin tertulis</b> adalah pelanggaran hukum, termasuk di Indonesia menurut Undang-Undang Informasi dan Transaksi Elektronik. Berlatihlah hanya di lingkungan yang memang disediakan untuk latihan, di laboratorium milik sendiri, atau dalam program yang mengizinkan pengujian (bug bounty dengan aturan jelas).`,
            { table: { head: ['Tempat latihan legal', 'Keterangan'], rows: [
                ['Platform lab daring', 'Mesin latihan yang sengaja dibuat rentan, misalnya TryHackMe atau Hack The Box'],
                ['Lab sendiri', 'Mesin virtual di laptop Anda, termasuk aplikasi latihan seperti OWASP Juice Shop'],
                ['Kompetisi CTF', 'Capture The Flag, banyak diadakan kampus dan komunitas'],
                ['Program bug bounty', 'Pengujian dengan izin dan aturan cakupan yang jelas'],
            ] } },

            { h2: 'Rencana belajar 6 bulan' },
            { svg: 'timeline', label: 'Rencana 6 bulan', events: [['Bulan 1', 'Jaringan dasar', 'Model TCP/IP, subnet, DNS, HTTP'], ['Bulan 2', 'Linux dan scripting', 'Baris perintah, izin berkas, Bash, Python dasar'], ['Bulan 3', 'Konsep keamanan', 'Autentikasi, kriptografi dasar, ancaman umum'], ['Bulan 4', 'Keamanan web', 'OWASP Top 10, latihan di Juice Shop'], ['Bulan 5', 'Pertahanan dan log', 'Membaca log, dasar SIEM, latihan SOC'], ['Bulan 6', 'Portofolio dan sertifikasi', 'Tulisan pembahasan lab, sertifikasi tingkat pemula']] },
            { w: 'checklist', title: 'Bukti kemampuan untuk portofolio', desc: 'Centang yang sudah Anda miliki.', items: ['Catatan pembahasan (write-up) beberapa lab latihan.', 'Proyek otomasi kecil, misalnya skrip pemeriksa konfigurasi.', 'Lab rumah yang terdokumentasi.', 'Partisipasi CTF.', 'Sertifikasi tingkat pemula yang relevan.', 'Tulisan edukasi keamanan untuk publik (misalnya cara mengenali phishing).'] },

            { h2: 'Sertifikasi tingkat pemula' },
            `Sertifikasi bukan syarat mutlak, tetapi membantu lolos penyaringan awal. Beberapa yang sering disebut untuk pemula antara lain ISC2 Certified in Cybersecurity (CC) dan CompTIA Security+. Di Indonesia, juga tersedia skema sertifikasi kompetensi keamanan informasi melalui lembaga sertifikasi profesi. Pilih berdasarkan peran yang dituju dan permintaan di lowongan yang Anda incar.`,
        ],
        faq: [
            ['Apakah harus jago coding untuk masuk cyber security?', 'Tidak harus jago, tetapi dasar scripting seperti Python atau Bash sangat membantu, terutama untuk otomasi dan analisis.'],
            ['Peran cyber security apa yang cocok untuk pemula?', 'SOC analyst tingkat awal sering menjadi pintu masuk, begitu juga peran dukungan IT dengan tanggung jawab keamanan.'],
            ['Apakah belajar hacking itu legal?', 'Belajar legal bila dilakukan di lingkungan latihan atau sistem milik sendiri. Menguji sistem orang lain tanpa izin adalah pelanggaran hukum.'],
            ['Sertifikasi apa untuk pemula?', 'Beberapa yang sering disebut: ISC2 Certified in Cybersecurity dan CompTIA Security+. Sesuaikan dengan peran yang dituju.'],
        ],
        sources: [
            ['NIST: NICE Framework Resource Center', 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center'],
            ['OWASP Top Ten', 'https://owasp.org/www-project-top-ten/'],
            ['OWASP Juice Shop', 'https://owasp.org/www-project-juice-shop/'],
            ['Badan Siber dan Sandi Negara (BSSN)', 'https://www.bssn.go.id/'],
            ['World Economic Forum: The Future of Jobs Report 2025', 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'],
        ],
    },
];
