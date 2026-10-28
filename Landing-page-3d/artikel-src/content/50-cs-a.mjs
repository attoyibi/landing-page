const D = '2026-10-28';
const C = 'Customer Success';

export default [
    {
        slug: 'customer-success-adalah-bedanya-dengan-customer-service',
        title: 'Customer Success Adalah: Bedanya dengan Customer Service',
        description: 'Apa itu customer success, bedanya dengan customer service, tugas harian CSM, metrik utama, dan mengapa peran ini penting untuk bisnis berlangganan.',
        date: D, category: C, tags: ['customer success', 'customer service', 'CSM', 'retensi pelanggan', 'SaaS'], cta: 'jasa',
        lead: 'Customer service menjawab ketika pelanggan menghubungi. Customer success menghubungi pelanggan sebelum mereka punya alasan untuk pergi. Perbedaan sederhana ini mengubah cara perusahaan menjaga pendapatan, terutama bisnis berlangganan yang hidup dari perpanjangan kontrak bulan demi bulan.',
        body: [
            { h2: 'Reaktif vs proaktif' },
            { svg: 'versus', label: 'Customer service dan customer success', left: { title: 'Customer service', items: ['Reaktif: menunggu tiket atau chat', 'Menyelesaikan masalah saat itu', 'Diukur: waktu respons, CSAT, tiket selesai', 'Fokus: satu interaksi'] }, right: { title: 'Customer success', items: ['Proaktif: menghubungi lebih dulu', 'Memastikan pelanggan mencapai tujuannya', 'Diukur: retensi, NRR, health score', 'Fokus: hubungan jangka panjang'] } },
            `Keduanya saling membutuhkan. Tim service yang hebat menyelesaikan masalah dengan cepat; tim success memastikan masalah yang sama tidak terus berulang dan pelanggan mendapat nilai dari produk.`,

            { h2: 'Mengapa bisnis berlangganan membutuhkannya' },
            `Dalam model langganan, biaya mendapatkan pelanggan sering baru tertutup setelah beberapa bulan. Pelanggan yang berhenti di bulan ketiga bisa berarti kerugian. Reichheld dan Sasser dalam "Zero Defections" (Harvard Business Review, 1990) menunjukkan betapa besarnya pengaruh mengurangi pelanggan yang pergi terhadap laba, karena pelanggan lama cenderung membeli lebih banyak dan lebih murah dilayani.`,
            { w: 'calc', title: 'Berapa lama biaya akuisisi kembali?', desc: 'Payback period sederhana.', inputs: [{ id: 'cac', label: 'Biaya mendapatkan satu pelanggan (CAC)', value: 1500000, min: 50000, max: 50000000, step: 50000, unit: 'Rp' }, { id: 'arpu', label: 'Pendapatan per pelanggan per bulan', value: 300000, min: 10000, max: 10000000, step: 10000, unit: 'Rp' }, { id: 'gm', label: 'Margin kotor', value: 70, min: 5, max: 100, step: 1, unit: '%' }], outputs: [{ label: 'Bulan sampai biaya akuisisi kembali', expr: 'cac / (arpu * gm / 100)', fmt: 'num', unit: 'bulan', big: true, note: 'Pelanggan yang berhenti sebelum angka ini tercapai membuat bisnis merugi pada pelanggan itu.' }] },

            { h2: 'Apa yang dikerjakan Customer Success Manager (CSM)' },
            { w: 'cards', title: 'Ketuk tiap tugas', items: [
                { tag: 'Onboarding', front: 'Membawa pelanggan baru ke nilai pertama.', backTag: 'Contoh', back: 'Rencana 30 hari: integrasi data, pelatihan admin, target pemakaian pertama.' },
                { tag: 'Pemantauan', front: 'Mengawasi kesehatan akun.', backTag: 'Contoh', back: 'Pemakaian turun 40%? Hubungi sebelum perpanjangan, cari tahu penyebabnya.' },
                { tag: 'Adopsi', front: 'Membantu pelanggan memakai fitur yang relevan.', backTag: 'Contoh', back: 'Pelanggan memakai laporan manual; tunjukkan laporan otomatis yang menghemat 3 jam per minggu.' },
                { tag: 'Tinjauan bisnis', front: 'Menunjukkan nilai yang sudah dicapai.', backTag: 'Contoh', back: 'QBR dengan data: target tercapai, rencana kuartal berikutnya.' },
                { tag: 'Perpanjangan & ekspansi', front: 'Menjaga kontrak dan peluang tumbuh.', backTag: 'Contoh', back: 'Tim pelanggan bertambah; diskusikan tambahan pengguna yang memang dibutuhkan.' },
                { tag: 'Suara pelanggan', front: 'Membawa masukan ke tim produk.', backTag: 'Contoh', back: 'Ringkasan bulanan: lima hambatan terbesar pelanggan dan dampaknya ke churn.' },
            ] },

            { h2: 'Metrik yang biasa dipakai' },
            { table: { head: ['Metrik', 'Mengukur'], rows: [['Gross revenue retention (GRR)', 'Pendapatan yang dipertahankan tanpa ekspansi'], ['Net revenue retention (NRR)', 'Pendapatan dipertahankan termasuk ekspansi'], ['Logo churn', 'Persentase pelanggan yang berhenti'], ['Customer health score', 'Gabungan sinyal risiko dan kesehatan'], ['Time to value', 'Waktu sampai pelanggan merasakan manfaat'], ['NPS / CSAT', 'Sikap dan kepuasan pelanggan']] } },
            { callout: 'Customer success bukan tim penjualan yang berganti nama. Bila CSM hanya dikejar target upsell, pelanggan akan merasakannya dan kepercayaan turun. Ekspansi sebaiknya hasil dari nilai yang terbukti.', kind: 'warn', title: 'Bukan sales terselubung' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Ciri utama customer success?', options: ['Menunggu tiket masuk', 'Proaktif memastikan pelanggan mencapai tujuannya', 'Hanya menjual produk tambahan'], answer: 1, why: 'Fokus pada hasil pelanggan jangka panjang.' },
                { q: 'Metrik yang mencakup ekspansi pendapatan dari pelanggan lama?', options: ['GRR', 'NRR', 'CSAT'], answer: 1, why: 'NRR menghitung retensi plus ekspansi.' },
            ] },
        ],
        faq: [
            ['Apakah UMKM butuh tim customer success?', 'Tidak harus tim khusus. Prinsipnya bisa diterapkan pemilik atau admin: hubungi pelanggan setia, tanyakan hasil, dan tindak lanjuti sebelum mereka pergi.'],
            ['Keterampilan apa yang dibutuhkan CSM?', 'Komunikasi, empati, kemampuan membaca data, pemahaman produk, manajemen proyek, dan kemampuan menghubungkan fitur dengan tujuan bisnis pelanggan.'],
            ['Apakah customer success hanya untuk SaaS?', 'Paling umum di SaaS, tetapi prinsipnya dipakai di layanan berlangganan lain, kursus, keanggotaan, hingga B2B tradisional.'],
        ],
        sources: [
            ['Reichheld dan Sasser (1990): Zero Defections, Quality Comes to Services, HBR (ringkasan Bain)', 'https://www.bain.com/insights/zero-defections-quality-comes-to-services-harvard-business-review-hbr/'],
            ['Churn rate: cara menghitung dan menurunkan (artikel terkait)', 'https://muchson.web.id/artikel/churn-rate-cara-menghitung-dan-menurunkan/'],
            ['Customer health score (artikel terkait)', 'https://muchson.web.id/artikel/customer-health-score-cara-membuat/'],
        ],
    },

    {
        slug: 'churn-rate-cara-menghitung-dan-menurunkan',
        title: 'Churn Rate: Cara Menghitung dan Menurunkannya',
        description: 'Cara menghitung churn rate pelanggan dan pendapatan, mengubah churn bulanan ke tahunan dengan kalkulator, penyebab umum, dan strategi menurunkannya.',
        date: D, category: C, tags: ['churn rate', 'retensi pelanggan', 'customer success', 'SaaS metrics', 'bisnis langganan'], cta: 'jasa',
        lead: 'Churn adalah ember bocor dalam bisnis. Anda bisa terus menuang pelanggan baru dari atas, tetapi bila lubang di bawah besar, ember tidak pernah penuh. Menghitung churn dengan benar adalah langkah pertama untuk menambal lubangnya.',
        body: [
            { h2: 'Rumus dasar' },
            { code: 'Customer churn rate (bulanan) =\n  pelanggan yang berhenti selama bulan itu\n  ÷ pelanggan di AWAL bulan\n  × 100%\n\nContoh: awal bulan 200 pelanggan, 10 berhenti, 30 baru bergabung.\nChurn = 10 / 200 = 5%   (pelanggan baru TIDAK dimasukkan ke pembagi)' },
            { callout: 'Kesalahan paling umum: memasukkan pelanggan baru ke pembagi, sehingga churn terlihat lebih kecil dari kenyataan.', kind: 'warn', title: 'Jebakan rumus' },

            { h2: 'Churn bulanan menumpuk menjadi besar' },
            { w: 'calc', title: 'Dari bulanan ke tahunan', desc: 'Churn bulanan yang terlihat kecil bisa berarti kehilangan banyak pelanggan dalam setahun.', inputs: [{ id: 'm', label: 'Churn bulanan', value: 5, min: 0.5, max: 30, step: 0.5, unit: '%' }, { id: 'n', label: 'Pelanggan awal', value: 1000, min: 10, max: 100000, step: 10 }], outputs: [{ label: 'Churn tahunan (tanpa pelanggan baru)', expr: '(1 - pow(1 - m / 100, 12)) * 100', fmt: 'pct', big: true }, { label: 'Pelanggan tersisa setelah 12 bulan', expr: 'n * pow(1 - m / 100, 12)', fmt: 'int' }, { label: 'Rata-rata umur pelanggan', expr: '100 / m', fmt: 'num', unit: 'bulan', note: 'Perkiraan kasar: 1 ÷ churn bulanan.' }] },
            `Churn 5% per bulan terdengar kecil, tetapi berarti sekitar 46% pelanggan hilang dalam setahun bila tidak ada yang baru.`,

            { h2: 'Churn pelanggan vs churn pendapatan' },
            { table: { head: ['Jenis', 'Rumus', 'Kapan penting'], rows: [['Logo/customer churn', 'Pelanggan berhenti ÷ pelanggan awal', 'Jumlah pelanggan relatif seragam'], ['Gross revenue churn', '(MRR hilang dari berhenti + turun paket) ÷ MRR awal', 'Pelanggan beragam ukurannya'], ['Net revenue churn', '(MRR hilang − ekspansi) ÷ MRR awal', 'Ada upsell; bisa negatif bila ekspansi lebih besar']] } },
            `Kehilangan 10 pelanggan kecil dan kehilangan 1 pelanggan korporat besar bisa memiliki dampak pendapatan yang sangat berbeda. Pantau keduanya.`,

            { h2: 'Mengapa pelanggan berhenti' },
            { w: 'cards', title: 'Ketuk untuk tindakan pencegahan', items: [
                { tag: 'Penyebab', front: 'Tidak pernah merasakan nilai (onboarding gagal).', backTag: 'Cegah', back: 'Definisikan momen nilai pertama dan dampingi sampai tercapai.' },
                { tag: 'Penyebab', front: 'Kontak utama (champion) pindah kerja.', backTag: 'Cegah', back: 'Bangun hubungan dengan beberapa orang di akun pelanggan.' },
                { tag: 'Penyebab', front: 'Masalah yang berulang tanpa solusi.', backTag: 'Cegah', back: 'Lacak tiket berulang per akun dan eskalasi ke tim produk.' },
                { tag: 'Penyebab', front: 'Harga terasa tidak sebanding.', backTag: 'Cegah', back: 'Tunjukkan nilai dengan data rutin, sesuaikan paket bila memang kebesaran.' },
                { tag: 'Penyebab', front: 'Kegagalan pembayaran (involuntary churn).', backTag: 'Cegah', back: 'Pengingat sebelum kartu kedaluwarsa, coba ulang pembayaran otomatis, beberapa metode bayar.' },
            ] },

            { h2: 'Strategi menurunkan churn' },
            { ol: ['<b>Ukur dengan benar</b> dan pisahkan churn sukarela dan karena gagal bayar.', '<b>Wawancarai pelanggan yang pergi</b> (exit interview) untuk menemukan pola.', '<b>Bangun health score</b> agar risiko terlihat lebih awal.', '<b>Perbaiki onboarding</b>, karena banyak churn berakar di bulan pertama.', '<b>Analisis kohort</b> untuk melihat apakah pelanggan baru lebih bertahan dari yang lama setelah perbaikan.'] },
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'Awal bulan 400 pelanggan, 20 berhenti, 50 baru. Churn?', options: ['5%', '4,4%', '17,5%'], answer: 0, why: '20 ÷ 400 = 5%. Pelanggan baru tidak masuk pembagi.' },
                { q: 'Net revenue churn bisa negatif bila...', options: ['Tidak ada pelanggan', 'Ekspansi dari pelanggan lama lebih besar dari pendapatan yang hilang', 'Harga turun'], answer: 1, why: 'Pelanggan yang tersisa tumbuh lebih besar dari yang hilang.' },
            ] },
        ],
        faq: [
            ['Berapa churn yang normal?', 'Sangat tergantung industri, harga, dan segmen. Produk untuk perusahaan besar biasanya memiliki churn lebih rendah daripada aplikasi konsumen murah. Bandingkan dengan diri sendiri dari waktu ke waktu.'],
            ['Bagaimana menghitung churn untuk kontrak tahunan?', 'Hitung per periode perpanjangan: dari pelanggan yang jatuh tempo, berapa persen yang tidak memperpanjang.'],
            ['Apakah pelanggan yang pause dihitung churn?', 'Tentukan definisi sejak awal dan konsisten. Banyak tim memisahkan pause dari churn agar datanya tidak membingungkan.'],
        ],
        sources: [
            ['Reichheld dan Sasser (1990): Zero Defections (ringkasan Bain)', 'https://www.bain.com/insights/zero-defections-quality-comes-to-services-harvard-business-review-hbr/'],
            ['Analisis kohort untuk retensi (artikel terkait)', 'https://muchson.web.id/artikel/analisis-kohort-untuk-retensi-pengguna/'],
            ['Sinyal pelanggan akan pergi (artikel terkait)', 'https://muchson.web.id/artikel/sinyal-pelanggan-akan-berhenti-dan-cara-mencegahnya/'],
        ],
    },

    {
        slug: 'net-promoter-score-nps-cara-menghitung',
        title: 'Net Promoter Score (NPS): Cara Menghitung dan Memakainya',
        description: 'Cara menghitung NPS dengan kalkulator, arti promotor, pasif, dan detraktor, pertanyaan lanjutan, menutup lingkaran umpan balik, dan kritik terhadap NPS.',
        date: D, category: C, tags: ['NPS', 'Net Promoter Score', 'kepuasan pelanggan', 'survei pelanggan', 'customer success'], cta: 'jasa',
        lead: 'Frederick Reichheld memperkenalkan Net Promoter Score di Harvard Business Review pada 2003 dengan satu pertanyaan: seberapa besar kemungkinan Anda merekomendasikan kami kepada teman atau kolega? NPS menjadi salah satu metrik pelanggan paling populer di dunia. Kekuatannya ada pada kesederhanaan, dan kelemahannya juga.',
        body: [
            { h2: 'Cara menghitung' },
            { svg: 'scale', label: 'Skala 0-10 dan tiga kelompok', stops: [[15, 'Detraktor 0-6'], [72, 'Pasif 7-8'], [92, 'Promotor 9-10']], caption: 'NPS = % promotor − % detraktor. Pasif tidak dihitung langsung, tetapi menurunkan persentase keduanya.' },
            { w: 'calc', title: 'Kalkulator NPS', inputs: [{ id: 'pr', label: 'Jumlah promotor (9-10)', value: 60, min: 0, max: 10000, step: 1 }, { id: 'pa', label: 'Jumlah pasif (7-8)', value: 25, min: 0, max: 10000, step: 1 }, { id: 'de', label: 'Jumlah detraktor (0-6)', value: 15, min: 0, max: 10000, step: 1 }], outputs: [{ label: 'NPS', expr: '(pr + pa + de) > 0 ? (pr - de) / (pr + pa + de) * 100 : 0', fmt: 'num', big: true, note: 'Rentang -100 sampai +100.' }, { label: 'Persentase promotor', expr: '(pr + pa + de) > 0 ? pr / (pr + pa + de) * 100 : 0', fmt: 'pct' }, { label: 'Persentase detraktor', expr: '(pr + pa + de) > 0 ? de / (pr + pa + de) * 100 : 0', fmt: 'pct' }] },

            { h2: 'Pertanyaan lanjutan lebih berharga dari angkanya' },
            `Angka NPS memberi tahu <i>seberapa</i>; komentar memberi tahu <i>mengapa</i>. Selalu tambahkan satu pertanyaan terbuka.`,
            { code: '1. Seberapa besar kemungkinan Anda merekomendasikan [produk] kepada teman\n   atau kolega? (0-10)\n\n2. Apa alasan utama Anda memberi nilai tersebut?\n\n(opsional) 3. Apa satu hal yang paling bisa kami perbaiki?' },

            { h2: 'Menutup lingkaran (close the loop)' },
            { w: 'cards', title: 'Ketuk untuk tindak lanjut tiap kelompok', items: [
                { tag: 'Detraktor', front: 'Skor 0-6', backTag: 'Tindak lanjut', back: 'Hubungi dalam 48 jam, dengarkan, selesaikan masalah yang bisa diselesaikan, dan catat penyebab berulang.' },
                { tag: 'Pasif', front: 'Skor 7-8', backTag: 'Tindak lanjut', back: 'Cari tahu apa yang kurang untuk menjadi luar biasa. Mereka paling mudah pindah ke pesaing.' },
                { tag: 'Promotor', front: 'Skor 9-10', backTag: 'Tindak lanjut', back: 'Ucapkan terima kasih, minta ulasan atau testimoni bila sesuai, ajak program referral.' },
            ] },
            { callout: 'Mengirim survei NPS lalu tidak melakukan apa pun membuat pelanggan merasa tidak didengar. Lebih baik survei lebih jarang tetapi selalu ditindaklanjuti.', kind: 'warn', title: 'Survei tanpa tindakan' },

            { h2: 'Kritik terhadap NPS' },
            { ul: ['Satu pertanyaan tentang <b>niat</b> merekomendasikan, bukan perilaku nyata.', 'Pengelompokan 0-6 sebagai detraktor tidak cocok untuk semua budaya; di beberapa budaya, orang jarang memberi nilai ekstrem.', 'Dua NPS yang sama bisa berasal dari sebaran yang sangat berbeda.', 'Mudah dimanipulasi bila karyawan meminta pelanggan memberi nilai 10.', 'Penelitian akademis menemukan NPS tidak selalu memprediksi pertumbuhan lebih baik dari metrik kepuasan lain.'] },
            `Pakai NPS sebagai salah satu sinyal, bersama data perilaku seperti retensi dan pemakaian.`,
            { w: 'quiz', title: 'Latihan', questions: [
                { q: '100 responden: 50 promotor, 30 pasif, 20 detraktor. NPS?', options: ['30', '50', '80'], answer: 0, why: '50% − 20% = 30.' },
                { q: 'Skor 7 termasuk kelompok...', options: ['Detraktor', 'Pasif', 'Promotor'], answer: 1, why: 'Pasif adalah 7-8.' },
            ] },
        ],
        faq: [
            ['Berapa NPS yang bagus?', 'Tergantung industri dan negara. Angka positif berarti promotor lebih banyak dari detraktor. Bandingkan dengan tren Anda sendiri dan pesaing di industri yang sama.'],
            ['Kapan mengirim survei NPS?', 'Relationship NPS dikirim berkala (misalnya per kuartal). Transactional NPS dikirim setelah momen tertentu, seperti selesai onboarding atau setelah tiket ditutup.'],
            ['Apakah NPS cocok untuk B2B?', 'Bisa, tetapi tanyakan beberapa orang di akun yang sama: pengambil keputusan dan pengguna harian sering punya pendapat berbeda.'],
        ],
        sources: [
            ['Reichheld (2003): The One Number You Need to Grow, Harvard Business Review', 'https://hbr.org/2003/12/the-one-number-you-need-to-grow'],
            ['Keiningham et al. (2007): A Longitudinal Examination of Net Promoter and Firm Revenue Growth, Journal of Marketing', 'https://doi.org/10.1509/jmkg.71.3.039'],
            ['CSAT dan CES (artikel terkait)', 'https://muchson.web.id/artikel/csat-dan-ces-mengukur-kepuasan-dan-kemudahan/'],
        ],
    },

    {
        slug: 'customer-health-score-cara-membuat',
        title: 'Customer Health Score: Cara Membuat dan Memakainya',
        description: 'Membangun customer health score untuk mendeteksi akun berisiko: memilih indikator, memberi bobot, kalkulator skor, validasi data churn, dan tindak lanjut.',
        date: D, category: C, tags: ['customer health score', 'customer success', 'churn', 'retensi', 'dashboard pelanggan'], cta: 'jasa',
        lead: 'Customer Success Manager yang memegang 80 akun tidak bisa menelepon semuanya setiap minggu. Health score adalah cara merangkum banyak sinyal menjadi satu indikator: akun mana yang sehat, mana yang perlu perhatian, dan mana yang dalam bahaya. Ini salah satu latihan inti di modul Retention Lab yang saya ajarkan.',
        body: [
            { h2: 'Sinyal yang biasa dipakai' },
            { table: { head: ['Kategori', 'Contoh indikator'], rows: [['Pemakaian', 'Login aktif per minggu, fitur inti dipakai, jumlah pengguna aktif dibanding lisensi'], ['Hasil', 'Target pelanggan tercapai, ROI yang dilaporkan'], ['Hubungan', 'Ada champion aktif, kehadiran di QBR, respons email'], ['Dukungan', 'Jumlah tiket, tiket kritis terbuka, sentimen tiket'], ['Sikap', 'NPS atau CSAT terakhir'], ['Komersial', 'Pembayaran tepat waktu, mendekati tanggal perpanjangan']] } },

            { h2: 'Membangun skor sederhana' },
            { ol: ['Pilih 4-6 indikator yang tersedia datanya dan masuk akal terkait churn.', 'Ubah setiap indikator ke skala 0-100.', 'Beri bobot sesuai pentingnya.', 'Jumlahkan menjadi skor 0-100 dan tentukan ambang warna.', 'Validasi: apakah akun yang dulu churn memang punya skor rendah beberapa bulan sebelumnya?'] },
            { w: 'calc', title: 'Kalkulator health score', desc: 'Isi nilai tiap indikator (0-100) untuk satu akun.', inputs: [
                { id: 'pakai', label: 'Pemakaian (0-100)', value: 45, min: 0, max: 100, step: 5 },
                { id: 'adopsi', label: 'Adopsi fitur inti (0-100)', value: 60, min: 0, max: 100, step: 5 },
                { id: 'relasi', label: 'Hubungan / champion (0-100)', value: 80, min: 0, max: 100, step: 5 },
                { id: 'tiket', label: 'Dukungan, tanpa masalah besar (0-100)', value: 40, min: 0, max: 100, step: 5 },
                { id: 'sikap', label: 'NPS/CSAT terakhir dinormalkan (0-100)', value: 70, min: 0, max: 100, step: 5 },
            ], outputs: [
                { label: 'Health score (bobot 30/20/20/15/15)', expr: 'pakai * 0.3 + adopsi * 0.2 + relasi * 0.2 + tiket * 0.15 + sikap * 0.15', fmt: 'int', big: true },
                { label: 'Kategori', expr: '(pakai * 0.3 + adopsi * 0.2 + relasi * 0.2 + tiket * 0.15 + sikap * 0.15) >= 70 ? "Hijau: sehat" : ((pakai * 0.3 + adopsi * 0.2 + relasi * 0.2 + tiket * 0.15 + sikap * 0.15) >= 50 ? "Kuning: perlu perhatian" : "Merah: berisiko")', fmt: 'text', note: 'Ambang dan bobot ini contoh. Sesuaikan dengan data churn produk Anda.' },
            ] },

            { h2: 'Tindak lanjut tiap warna' },
            { w: 'cards', title: 'Ketuk tiap kategori', items: [
                { tag: 'Hijau', front: 'Skor 70 ke atas', backTag: 'Tindakan', back: 'Pertahankan ritme kontak, cari peluang referensi atau studi kasus, dan ekspansi bila ada kebutuhan nyata.' },
                { tag: 'Kuning', front: 'Skor 50-69', backTag: 'Tindakan', back: 'Cari indikator yang paling rendah. Pemakaian turun? Jadwalkan sesi pelatihan ulang dengan pengguna.' },
                { tag: 'Merah', front: 'Skor di bawah 50', backTag: 'Tindakan', back: 'Rencana penyelamatan: hubungi pengambil keputusan, sepakati masalah utama dan target 30 hari, libatkan manajer bila perlu.' },
            ] },

            { h2: 'Kesalahan umum' },
            { ul: ['<b>Terlalu banyak indikator</b> sehingga tidak ada yang tahu kenapa skor berubah.', '<b>Bobot berdasarkan perasaan</b> tanpa pernah dicek dengan data churn sebelumnya.', '<b>Skor dilihat tetapi tidak ada tindakan</b> yang disepakati per kategori.', '<b>Mengabaikan konteks:</b> pemakaian turun saat libur akhir tahun adalah hal biasa.', '<b>Hanya data kuantitatif:</b> tambahkan penilaian CSM (sentimen) sebagai satu indikator.'] },
            { callout: 'Tren lebih penting dari angka sesaat. Akun dengan skor 72 yang turun dari 90 dalam sebulan mungkin lebih mengkhawatirkan daripada akun yang stabil di 60.', kind: 'info', title: 'Perhatikan arah' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Cara memvalidasi health score?', options: ['Bertanya ke manajer', 'Melihat apakah akun yang dulu churn memang punya skor rendah sebelumnya', 'Tidak perlu'], answer: 1, why: 'Skor yang baik memprediksi risiko nyata.' },
                { q: 'Akun dengan skor turun tajam dalam sebulan sebaiknya...', options: ['Diabaikan karena masih hijau', 'Diperiksa penyebab penurunannya', 'Langsung ditawari upsell'], answer: 1, why: 'Arah perubahan adalah sinyal penting.' },
            ] },
        ],
        faq: [
            ['Apakah perlu software khusus?', 'Tidak untuk memulai. Spreadsheet dengan data dari aplikasi dan CRM sudah cukup. Platform customer success membantu saat jumlah akun dan sumber data bertambah.'],
            ['Seberapa sering skor diperbarui?', 'Mingguan cukup untuk sebagian besar bisnis B2B. Untuk produk konsumen dengan banyak pengguna, bisa harian dan otomatis.'],
            ['Bisakah memakai machine learning?', 'Bisa bila data churn historis cukup banyak. Mulailah dengan skor sederhana yang mudah dijelaskan, lalu bandingkan.'],
        ],
        sources: [
            ['Amy Gallo (2014): The Value of Keeping the Right Customers, Harvard Business Review', 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers'],
            ['Customer success adalah (artikel terkait)', 'https://muchson.web.id/artikel/customer-success-adalah-bedanya-dengan-customer-service/'],
            ['Sinyal pelanggan akan pergi (artikel terkait)', 'https://muchson.web.id/artikel/sinyal-pelanggan-akan-berhenti-dan-cara-mencegahnya/'],
            ['Metrik UX dengan framework HEART (artikel terkait)', 'https://muchson.web.id/artikel/metrik-ux-framework-heart-google/'],
        ],
    },

    {
        slug: 'customer-lifetime-value-clv-cara-menghitung',
        title: 'Customer Lifetime Value (CLV): Cara Menghitungnya',
        description: 'Cara menghitung customer lifetime value dengan kalkulator, rasio LTV terhadap CAC, contoh bisnis langganan dan toko, serta cara menaikkan CLV.',
        date: D, category: C, tags: ['customer lifetime value', 'CLV', 'LTV CAC', 'retensi', 'metrik bisnis'], cta: 'jasa',
        lead: 'Berapa sebenarnya nilai satu pelanggan bagi bisnis Anda? Bukan hanya transaksi pertamanya, tetapi seluruh pembelian selama ia menjadi pelanggan. Customer lifetime value membantu menjawab pertanyaan penting: berapa yang boleh dikeluarkan untuk mendapatkan pelanggan baru, dan seberapa berharga mempertahankan yang lama.',
        body: [
            { h2: 'Rumus sederhana untuk bisnis langganan' },
            { code: 'CLV ≈ (pendapatan rata-rata per pelanggan per bulan × margin kotor)\n      ÷ churn bulanan\n\nContoh: Rp300.000 × 70% ÷ 4% = Rp5.250.000' },
            { w: 'calc', title: 'Kalkulator CLV dan rasio LTV:CAC', inputs: [
                { id: 'arpu', label: 'Pendapatan per pelanggan per bulan', value: 300000, min: 10000, max: 20000000, step: 10000, unit: 'Rp' },
                { id: 'gm', label: 'Margin kotor', value: 70, min: 5, max: 100, step: 1, unit: '%' },
                { id: 'ch', label: 'Churn bulanan', value: 4, min: 0.5, max: 30, step: 0.5, unit: '%' },
                { id: 'cac', label: 'Biaya akuisisi per pelanggan (CAC)', value: 1500000, min: 10000, max: 50000000, step: 50000, unit: 'Rp' },
            ], outputs: [
                { label: 'Customer lifetime value', expr: 'arpu * gm / 100 / (ch / 100)', fmt: 'rp', big: true },
                { label: 'Rasio LTV : CAC', expr: '(arpu * gm / 100 / (ch / 100)) / cac', fmt: 'num', unit: ': 1', note: 'Banyak investor dan praktisi SaaS memakai sekitar 3:1 sebagai patokan sehat. Di bawah 1:1 berarti setiap pelanggan baru merugikan.' },
                { label: 'Rata-rata umur pelanggan', expr: '100 / ch', fmt: 'num', unit: 'bulan' },
            ] },
            `Coba turunkan churn dari 4% ke 3% di kalkulator: CLV naik sekitar sepertiga tanpa mengubah harga sedikit pun. Itulah alasan retensi begitu penting.`,

            { h2: 'Untuk toko dan bisnis non-langganan' },
            { code: 'CLV ≈ nilai rata-rata per transaksi\n      × jumlah transaksi per tahun\n      × lama rata-rata menjadi pelanggan (tahun)\n      × margin kotor\n\nContoh optik: Rp800.000 × 1 kali/tahun × 4 tahun × 50% = Rp1.600.000' },
            `Untuk toko kacamata, pelanggan yang puas biasanya kembali saat resepnya berubah atau ingin frame kedua, dan merekomendasikan keluarganya. Nilai rekomendasi ini tidak masuk rumus sederhana, tetapi sangat nyata.`,

            { h2: 'Cara menaikkan CLV' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Retensi', front: 'Turunkan churn.', backTag: 'Contoh', back: 'Onboarding yang lebih baik dan health score untuk mendeteksi risiko lebih awal.' },
                { tag: 'Frekuensi', front: 'Pelanggan membeli lebih sering.', backTag: 'Contoh', back: 'Pengingat pemeriksaan mata tahunan, paket perawatan rutin.' },
                { tag: 'Nilai', front: 'Pelanggan memilih paket yang lebih cocok.', backTag: 'Contoh', back: 'Rekomendasi lensa sesuai kebutuhan nyata, bukan upsell paksa.' },
                { tag: 'Margin', front: 'Biaya layanan per pelanggan turun.', backTag: 'Contoh', back: 'Pusat bantuan mandiri untuk pertanyaan umum, sehingga tim fokus pada kasus bernilai.' },
            ] },
            { callout: 'CLV adalah perkiraan, bukan kepastian. Rumus sederhana mengasumsikan churn konstan. Untuk keputusan besar, hitung CLV per segmen dan per kohort.', kind: 'info', title: 'Batasan rumus' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Bila churn turun dari 5% ke 2,5%, CLV (rumus sederhana) menjadi...', options: ['Setengahnya', 'Dua kali lipat', 'Tidak berubah'], answer: 1, why: 'CLV berbanding terbalik dengan churn.' },
                { q: 'Rasio LTV:CAC 0,8 berarti...', options: ['Sangat sehat', 'Biaya mendapatkan pelanggan lebih besar dari nilainya', 'Netral'], answer: 1, why: 'Setiap pelanggan baru membuat rugi.' },
            ] },
        ],
        faq: [
            ['Apakah memakai pendapatan atau laba?', 'Sebaiknya laba kotor (pendapatan × margin), karena pendapatan saja melebih-lebihkan nilai pelanggan.'],
            ['Bagaimana bila bisnis masih baru dan belum ada data churn?', 'Gunakan perkiraan konservatif, lalu perbarui setiap bulan saat data nyata terkumpul.'],
            ['Apa bedanya CLV dan LTV?', 'Istilah yang sama; keduanya merujuk nilai pelanggan sepanjang hubungannya dengan bisnis.'],
        ],
        sources: [
            ['Gupta et al. (2006): Modeling Customer Lifetime Value, Journal of Service Research', 'https://doi.org/10.1177/1094670506293810'],
            ['Churn rate (artikel terkait)', 'https://muchson.web.id/artikel/churn-rate-cara-menghitung-dan-menurunkan/'],
            ['Retensi pelanggan untuk UMKM (artikel terkait)', 'https://muchson.web.id/artikel/retensi-pelanggan-untuk-umkm-strategi-sederhana/'],
        ],
    },
];
