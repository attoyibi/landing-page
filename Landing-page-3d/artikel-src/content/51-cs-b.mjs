const D = '2026-10-28';
const C = 'Customer Success';

export default [
    {
        slug: 'onboarding-pelanggan-b2b-dan-time-to-value',
        title: 'Onboarding Pelanggan B2B dan Time to Value',
        description: 'Merancang onboarding pelanggan B2B: kickoff, rencana sukses bersama, tonggak 30-60-90 hari, peran champion, time to value, dan tanda mulai melenceng.',
        date: D, category: C, tags: ['customer onboarding', 'time to value', 'B2B', 'customer success', 'implementasi software'], cta: 'jasa',
        lead: 'Kontrak sudah ditandatangani, tim sales merayakan. Bagi customer success, pekerjaan sesungguhnya baru dimulai. Banyak pelanggan B2B yang akhirnya berhenti sebenarnya sudah "hilang" di 90 hari pertama: implementasi berlarut, pengguna tidak dilatih, dan nilai yang dijanjikan tidak pernah terasa.',
        body: [
            { h2: 'Time to value: metrik terpenting di awal' },
            `<b>Time to value</b> adalah waktu dari kontrak sampai pelanggan merasakan hasil nyata yang mereka beli. Bedakan dengan "selesai instalasi". Sistem yang sudah terpasang tetapi belum dipakai belum memberi nilai.`,
            { svg: 'timeline', label: 'Contoh tonggak onboarding software kasir untuk jaringan toko', events: [['Hari 0', 'Kickoff', 'Tujuan bisnis, tim, dan rencana disepakati.'], ['Hari 14', 'Data siap', 'Produk dan harga diimpor; satu toko percontohan.'], ['Hari 30', 'Nilai pertama', 'Toko percontohan memakai kasir penuh selama seminggu; laporan harian dipakai manajer.'], ['Hari 60', 'Perluasan', 'Semua toko memakai; admin pelanggan bisa mandiri.'], ['Hari 90', 'Tinjauan', 'Bandingkan target awal dengan hasil; rencana kuartal berikutnya.']] },

            { h2: 'Rapat kickoff: lima hal yang harus keluar' },
            { ol: ['<b>Tujuan bisnis terukur</b>: "Menutup kas harian 30 menit lebih cepat", bukan "memakai sistem baru".', '<b>Definisi sukses 90 hari</b> yang disetujui kedua pihak.', '<b>Tim dan peran</b>: siapa sponsor eksekutif, siapa champion harian, siapa admin teknis.', '<b>Rencana dan tonggak</b> dengan tanggal.', '<b>Risiko yang diketahui</b>: data berantakan, periode sibuk, tim yang menolak perubahan.'] },

            { h2: 'Rencana sukses bersama (mutual success plan)' },
            { w: 'builder', title: 'Template rencana sukses', desc: 'Isi bersama pelanggan di kickoff, lalu bagikan ke kedua tim.', fields: [
                { id: 'pelanggan', label: 'Nama pelanggan', value: 'PT Toko Contoh' },
                { id: 'tujuan', label: 'Tujuan bisnis', long: true, value: 'Laporan penjualan harian semua cabang tersedia otomatis pukul 22.00' },
                { id: 'ukuran', label: 'Ukuran sukses 90 hari', value: '5 cabang memakai kasir penuh, laporan dipakai di rapat mingguan' },
                { id: 'sponsor', label: 'Sponsor dan champion', value: 'Ibu Sari (direktur operasional), Pak Andi (supervisor)' },
                { id: 'tonggak', label: 'Tonggak', long: true, value: 'H14 data siap; H30 cabang pertama; H60 semua cabang; H90 tinjauan' },
                { id: 'risiko', label: 'Risiko dan antisipasi', long: true, value: 'Harga produk tidak seragam antar cabang → bersihkan data di minggu 1' },
            ], template: 'RENCANA SUKSES: {pelanggan}\n\nTujuan bisnis: {tujuan}\nUkuran sukses 90 hari: {ukuran}\nSponsor & champion: {sponsor}\nTonggak: {tonggak}\nRisiko: {risiko}' },

            { h2: 'Tanda onboarding melenceng' },
            { w: 'cards', title: 'Ketuk untuk tindakan', items: [
                { tag: 'Tanda', front: 'Tonggak data mundur dua kali.', backTag: 'Tindakan', back: 'Eskalasi ke sponsor eksekutif dengan dampaknya terhadap tujuan. Tawarkan bantuan teknis tambahan.' },
                { tag: 'Tanda', front: 'Hanya admin yang login; pengguna akhir belum.', backTag: 'Tindakan', back: 'Jadwalkan pelatihan pendek per peran, dan kirim panduan satu halaman.' },
                { tag: 'Tanda', front: 'Champion tidak membalas seminggu.', backTag: 'Tindakan', back: 'Hubungi kontak kedua yang sudah disepakati; cari tahu apakah prioritas mereka berubah.' },
                { tag: 'Tanda', front: 'Pelanggan masih memakai cara lama berdampingan.', backTag: 'Tindakan', back: 'Sepakati tanggal "cara lama dimatikan" dan siapkan pendampingan di hari itu.' },
            ] },
            { callout: 'Serah terima dari sales ke customer success sering menjadi titik bocor. Pastikan janji yang dibuat saat penjualan tercatat, sehingga tim onboarding tahu ekspektasi pelanggan sejak hari pertama.', kind: 'warn', title: 'Serah terima sales ke CS' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Time to value diukur sampai...', options: ['Kontrak ditandatangani', 'Software terpasang', 'Pelanggan merasakan hasil nyata yang dibeli'], answer: 2, why: 'Instalasi belum berarti nilai.' },
                { q: 'Tujuan kickoff yang paling baik?', options: ['"Memakai sistem baru"', '"Menutup kas harian 30 menit lebih cepat di semua cabang"', '"Puas"'], answer: 1, why: 'Terukur dan terkait bisnis pelanggan.' },
            ] },
        ],
        faq: [
            ['Berapa lama onboarding B2B yang wajar?', 'Sangat bervariasi: beberapa hari untuk alat sederhana, beberapa bulan untuk sistem perusahaan. Yang penting tonggak nilai pertama secepat mungkin.'],
            ['Siapa yang memimpin onboarding?', 'Biasanya CSM atau onboarding specialist, bekerja dengan tim teknis atau implementasi, dengan sponsor dari pihak pelanggan.'],
            ['Bagaimana bila pelanggan kecil dan banyak?', 'Gunakan onboarding terstandar: email berurutan, webinar kelompok, video singkat, dan sesi tanya jawab bersama, ditambah sentuhan personal untuk akun bernilai tinggi.'],
        ],
        sources: [
            ['Amy Gallo (2014): The Value of Keeping the Right Customers, Harvard Business Review', 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers'],
            ['Onboarding produk yang membuat pengguna bertahan (artikel terkait)', 'https://muchson.web.id/artikel/onboarding-produk-yang-membuat-pengguna-bertahan/'],
            ['Customer health score (artikel terkait)', 'https://muchson.web.id/artikel/customer-health-score-cara-membuat/'],
            ['Customer success adalah (artikel terkait)', 'https://muchson.web.id/artikel/customer-success-adalah-bedanya-dengan-customer-service/'],
        ],
    },

    {
        slug: 'qbr-quarterly-business-review-cara-menjalankan',
        title: 'QBR (Quarterly Business Review): Cara Menjalankannya',
        description: 'Menjalankan quarterly business review dengan pelanggan: tujuan, siapa diundang, agenda 45 menit, data yang ditampilkan, dan kesalahan yang membuatnya hambar.',
        date: D, category: C, tags: ['QBR', 'quarterly business review', 'customer success', 'akun B2B', 'presentasi klien'], cta: 'jasa',
        lead: 'QBR yang buruk adalah demo fitur 60 menit yang membuat eksekutif pelanggan memeriksa ponsel. QBR yang baik adalah percakapan bisnis: apa yang sudah dicapai bersama, apa yang menghambat, dan apa rencana kuartal depan. Pelanggan meninggalkan rapat dengan bukti nilai yang bisa mereka bawa ke atasan mereka.',
        body: [
            { h2: 'Tujuan QBR' },
            { ul: ['Menunjukkan <b>nilai yang sudah dicapai</b> dengan data, terkait tujuan bisnis pelanggan.', 'Menyelaraskan <b>prioritas kuartal berikutnya</b>.', 'Membangun hubungan dengan <b>pengambil keputusan</b>, bukan hanya pengguna harian.', 'Menangkap risiko sebelum menjadi masalah perpanjangan.'] },

            { h2: 'Siapa yang diundang' },
            { table: { head: ['Pihak pelanggan', 'Pihak Anda'], rows: [['Sponsor eksekutif (pengambil keputusan)', 'CSM (pemimpin rapat)'], ['Champion / pengguna utama', 'Manajer CS atau eksekutif bila akun strategis'], ['Admin teknis (bila perlu)', 'Ahli produk untuk topik tertentu']] } },

            { h2: 'Agenda 45 menit' },
            { svg: 'timeline', label: 'Struktur QBR', events: [['5 menit', 'Tujuan dan ringkasan', 'Kembali ke tujuan bisnis yang disepakati.'], ['10 menit', 'Hasil kuartal ini', 'Data: apa yang membaik, angka sebelum-sesudah.'], ['10 menit', 'Tantangan', 'Hambatan dari sisi pelanggan dan sisi kami, secara jujur.'], ['15 menit', 'Rencana kuartal depan', 'Prioritas, target, siapa melakukan apa.'], ['5 menit', 'Ringkasan tindakan', 'Daftar tindakan dengan pemilik dan tanggal.']] },

            { h2: 'Data yang ditampilkan' },
            { w: 'compare', title: 'Slide biasa vs slide bernilai', tabs: [
                { label: 'Kurang bernilai', html: '"Jumlah login: 4.320. Tiket support: 23. Fitur baru: ekspor PDF, mode gelap, dan integrasi API."<br><br>Angka aktivitas tanpa makna bisnis, ditambah iklan fitur.' },
                { label: 'Bernilai', html: '"Tujuan Anda: menutup kas harian lebih cepat. Rata-rata waktu tutup kas turun dari 75 menit ke 40 menit di 5 cabang, sekitar 145 jam kerja per bulan. Dua cabang masih memakai cara manual; usulan: pelatihan ulang minggu ke-2 bulan depan."<br><br>Terkait tujuan, berupa hasil, dan ada tindakan.' },
            ] },
            { callout: 'Kirim draf data ke champion beberapa hari sebelum QBR. Champion tidak suka terkejut di depan atasannya, dan mereka bisa membantu menambahkan konteks.', kind: 'info', title: 'Tidak ada kejutan' },

            { h2: 'Kesalahan umum' },
            { w: 'checklist', title: 'Hindari ini', items: ['Membuka dengan profil perusahaan Anda.', 'Demo fitur panjang tanpa diminta.', 'Angka aktivitas tanpa kaitan ke tujuan.', 'Menyembunyikan masalah yang semua orang tahu.', 'Tidak ada tindakan dan pemilik di akhir rapat.', 'Mengubah QBR menjadi presentasi penjualan.', 'Tidak mengirim ringkasan tertulis setelahnya.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Fokus utama QBR?', options: ['Demo fitur baru', 'Nilai bisnis yang dicapai dan rencana ke depan', 'Negosiasi harga'], answer: 1, why: 'QBR adalah percakapan bisnis.' },
                { q: 'Mengapa draf data dikirim ke champion sebelum QBR?', options: ['Formalitas', 'Agar tidak ada kejutan dan konteks bisa ditambahkan', 'Agar rapat dibatalkan'], answer: 1, why: 'Melindungi hubungan dengan champion.' },
            ] },
        ],
        faq: [
            ['Apakah semua pelanggan perlu QBR?', 'Tidak. QBR penuh untuk akun bernilai tinggi atau strategis. Akun kecil cukup ringkasan kuartalan otomatis lewat email atau webinar kelompok.'],
            ['Bagaimana bila tidak ada hasil bagus untuk ditampilkan?', 'Akui dengan jujur, jelaskan penyebab, dan bawa rencana perbaikan konkret. Menyembunyikan masalah jauh lebih merusak kepercayaan.'],
            ['Apakah harus tiap kuartal?', 'Sesuaikan dengan siklus bisnis pelanggan. Beberapa memilih tinjauan setengah tahunan atau sebelum periode perencanaan anggaran mereka.'],
        ],
        sources: [
            ['Amy Gallo (2014): The Value of Keeping the Right Customers, Harvard Business Review', 'https://hbr.org/2014/10/the-value-of-keeping-the-right-customers'],
            ['Onboarding pelanggan B2B (artikel terkait)', 'https://muchson.web.id/artikel/onboarding-pelanggan-b2b-dan-time-to-value/'],
            ['AI untuk presentasi (artikel terkait)', 'https://muchson.web.id/artikel/ai-untuk-presentasi-dari-ide-ke-slide/'],
            ['Net revenue retention dan ekspansi (artikel terkait)', 'https://muchson.web.id/artikel/net-revenue-retention-dan-ekspansi-tanpa-memaksa/'],
        ],
    },

    {
        slug: 'menangani-pelanggan-marah-langkah-dan-contoh-kalimat',
        title: 'Menangani Pelanggan Marah: Langkah dan Contoh Kalimat',
        description: 'Menangani keluhan dan pelanggan marah lewat chat, telepon, atau tatap muka: model HEARD, contoh kalimat empati, yang tidak boleh diucapkan, dan riset terkait.',
        date: D, category: C, tags: ['menangani keluhan', 'pelanggan marah', 'customer service', 'komunikasi', 'service recovery'], cta: 'jasa',
        lead: 'Pelanggan yang marah biasanya tidak marah kepada Anda secara pribadi; mereka marah kepada situasinya. Cara menanggapi dalam lima menit pertama sering menentukan apakah mereka pergi dan bercerita buruk kepada orang lain, atau justru menjadi pelanggan setia karena merasa didengar.',
        body: [
            { h2: 'Model HEARD' },
            `Salah satu kerangka yang populer di dunia layanan adalah HEARD:`,
            { svg: 'flow', label: 'Lima langkah HEARD', steps: [{ t: 'Hear', d: 'dengarkan sampai selesai' }, { t: 'Empathize', d: 'akui perasaannya' }, { t: 'Apologize', d: 'minta maaf dengan tulus' }, { t: 'Resolve', d: 'selesaikan atau beri jalan' }, { t: 'Diagnose', d: 'cari akar masalah di internal' }] },

            { h2: 'Contoh kalimat' },
            { table: { head: ['Langkah', 'Contoh kalimat'], rows: [['Mendengar', '"Silakan ceritakan dari awal, saya catat supaya tidak ada yang terlewat."'], ['Empati', '"Wajar sekali Ibu kesal, kacamata yang dijanjikan hari Senin sampai sekarang belum datang."'], ['Maaf', '"Mohon maaf, ini kesalahan kami dalam memperbarui status pesanan."'], ['Menyelesaikan', '"Saya sudah cek ke lab: lensa selesai besok pukul 14.00. Kami antar langsung ke rumah tanpa biaya. Apakah itu membantu?"'], ['Tindak lanjut', '"Besok jam 3 saya kabari lagi lewat WhatsApp untuk memastikan sudah diterima."']] } },

            { h2: 'Kalimat yang memperburuk' },
            { w: 'cards', title: 'Ketuk untuk alternatifnya', items: [
                { tag: 'Hindari', front: '"Tenang dulu, Pak."', backTag: 'Lebih baik', back: '"Saya mengerti ini membuat Bapak kesal. Saya bantu sekarang."' },
                { tag: 'Hindari', front: '"Itu bukan bagian saya."', backTag: 'Lebih baik', back: '"Saya hubungkan ke tim yang tepat dan saya pastikan Bapak tidak perlu menjelaskan ulang."' },
                { tag: 'Hindari', front: '"Sesuai kebijakan, kami tidak bisa..."', backTag: 'Lebih baik', back: '"Yang bisa saya lakukan sekarang adalah..." Fokus pada apa yang bisa dilakukan.' },
                { tag: 'Hindari', front: '"Belum pernah ada yang mengeluh begitu."', backTag: 'Lebih baik', back: '"Terima kasih sudah memberi tahu, ini membantu kami memperbaiki proses."' },
                { tag: 'Hindari', front: '"Mohon maaf atas ketidaknyamanannya." (template)', backTag: 'Lebih baik', back: 'Sebut masalahnya secara spesifik agar permintaan maaf terasa tulus.' },
            ] },

            { h2: 'Lewat chat dan media sosial' },
            { ul: ['Balas cepat walau belum ada solusi: "Saya sedang cek, 10 menit lagi saya kabari."', 'Pindahkan ke kanal privat untuk data pribadi, tetapi tetap jawab secara publik bahwa Anda menanganinya.', 'Jangan berdebat di kolom komentar.', 'Tulis dengan kalimat pendek dan sopan; huruf kapital semua terbaca seperti berteriak.'] },

            { h2: 'Service recovery paradox: benarkah keluhan bisa menjadi peluang?' },
            `Gagasannya: pelanggan yang masalahnya diselesaikan dengan sangat baik bisa lebih puas daripada yang tidak pernah bermasalah. Meta-analisis de Matos dan rekan (2007) menemukan efek positif pada kepuasan, tetapi tidak pada niat membeli ulang atau loyalitas yang lebih dalam. Artinya: penanganan yang baik sangat penting, tetapi <b>mencegah masalah tetap lebih baik</b> daripada berharap memulihkannya.`,
            { callout: 'Setelah menyelesaikan keluhan, jalankan langkah terakhir (diagnosis): kenapa ini terjadi, dan apa yang diubah agar tidak terulang. Tanpa itu, tim akan menangani keluhan yang sama setiap minggu.', kind: 'info', title: 'Jangan lewatkan langkah terakhir' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Langkah pertama menangani pelanggan marah?', options: ['Menjelaskan kebijakan', 'Mendengarkan sampai selesai', 'Menawarkan diskon'], answer: 1, why: 'Pelanggan perlu merasa didengar.' },
                { q: 'Menurut meta-analisis de Matos dkk., service recovery yang baik...', options: ['Selalu membuat pelanggan lebih loyal', 'Meningkatkan kepuasan, tetapi tidak menggantikan pencegahan masalah', 'Tidak berpengaruh'], answer: 1, why: 'Efeknya positif pada kepuasan, tidak sekuat itu pada loyalitas.' },
            ] },
        ],
        faq: [
            ['Bagaimana bila pelanggan kasar atau mengancam?', 'Tetapkan batas dengan sopan: "Saya ingin membantu, tetapi saya perlu kita bicara tanpa kata-kata kasar." Bila berlanjut atau mengancam, ikuti prosedur eskalasi dan keselamatan perusahaan.'],
            ['Kapan memberi kompensasi?', 'Ketika kesalahan jelas dari pihak Anda dan menimbulkan kerugian nyata. Kompensasi yang sesuai dan cepat lebih efektif daripada yang besar tetapi lambat.'],
            ['Bagaimana menjaga mental tim yang sering menerima keluhan?', 'Jeda setelah percakapan berat, dukungan dari atasan, rotasi tugas, dan budaya yang tidak menyalahkan agen atas masalah sistem.'],
        ],
        sources: [
            ['de Matos, Henrique, Rossi (2007): Service Recovery Paradox, A Meta-Analysis, Journal of Service Research', 'https://doi.org/10.1177/1094670507303012'],
            ['Chatbot AI layanan pelanggan (artikel terkait)', 'https://muchson.web.id/artikel/chatbot-ai-layanan-pelanggan-yang-tidak-mengecewakan/'],
            ['Umpan balik yang efektif (artikel terkait)', 'https://muchson.web.id/artikel/umpan-balik-yang-efektif-untuk-peserta-belajar/'],
        ],
    },

    {
        slug: 'retensi-pelanggan-untuk-umkm-strategi-sederhana',
        title: 'Retensi Pelanggan untuk UMKM: Strategi Sederhana',
        description: 'Strategi retensi pelanggan untuk UMKM dan toko lokal: mencatat pelanggan, pengingat tepat waktu, loyalitas sederhana, layanan purnajual, dan cara mengukurnya.',
        date: D, category: C, tags: ['retensi pelanggan', 'UMKM', 'pelanggan setia', 'program loyalitas', 'bisnis lokal'], cta: 'jasa',
        lead: 'Sebagai pemilik toko optik di Madiun, saya merasakan sendiri bahwa pelanggan yang kembali dan membawa keluarganya adalah tulang punggung usaha. Prinsip customer success yang dipakai perusahaan software ternyata sangat cocok untuk UMKM, asalkan diterapkan dengan alat yang sederhana.',
        body: [
            { h2: 'Mengapa retensi penting untuk usaha kecil' },
            { ul: ['Mendapat pelanggan baru butuh iklan, promo, dan waktu; pelanggan lama sudah percaya.', 'Pelanggan setia cenderung membeli lebih banyak seiring waktu dan merekomendasikan kepada orang lain.', 'Rekomendasi dari mulut ke mulut adalah pemasaran paling murah dan paling dipercaya di lingkungan lokal.'] },

            { h2: 'Langkah 1: catat pelanggan Anda' },
            `Tanpa data, tidak ada retensi yang terencana. Cukup spreadsheet atau buku catatan dengan kolom berikut:`,
            { table: { head: ['Kolom', 'Contoh', 'Untuk apa'], rows: [['Nama dan nomor WhatsApp', 'Bu Sari, 0812...', 'Menghubungi'], ['Tanggal pembelian terakhir', '12 Maret 2026', 'Pengingat waktu kembali'], ['Apa yang dibeli', 'Frame titanium, lensa 1.67', 'Saran yang relevan'], ['Catatan khusus', 'Minus anak naik cepat', 'Perhatian personal'], ['Izin dihubungi', 'Ya', 'Menghormati privasi']] } },
            { callout: 'Minta izin sebelum menyimpan dan memakai nomor pelanggan untuk pengingat atau promo, dan beri cara mudah untuk berhenti. Ini sesuai prinsip UU Pelindungan Data Pribadi dan menjaga kepercayaan.', kind: 'warn', title: 'Izin dan privasi' },

            { h2: 'Langkah 2: hubungi pada saat yang tepat' },
            { w: 'cards', title: 'Ketuk untuk contoh pesan', items: [
                { tag: 'Setelah beli', front: '3-7 hari setelah pembelian', backTag: 'Pesan', back: '"Halo Bu Sari, bagaimana kacamata barunya? Kalau masih terasa pusing atau kurang pas, mampir saja, kami setel gratis."' },
                { tag: 'Rutin', front: 'Saat waktu servis atau penggantian', backTag: 'Pesan', back: '"Sudah setahun sejak pemeriksaan mata terakhir. Untuk anak yang minusnya bertambah, pemeriksaan rutin sangat dianjurkan. Mau kami jadwalkan?"' },
                { tag: 'Kembali', front: 'Pelanggan lama tidak datang', backTag: 'Pesan', back: '"Lama tidak jumpa, Pak. Ada pembersih lensa gratis untuk pelanggan lama minggu ini."' },
            ] },
            `Pesan yang membantu (perawatan, pengingat kesehatan) diterima jauh lebih baik daripada promo yang dikirim massal setiap hari.`,

            { h2: 'Langkah 3: program loyalitas yang sederhana' },
            { ul: ['<b>Kartu stempel:</b> pembersihan atau servis kelima gratis.', '<b>Bonus rekomendasi:</b> pelanggan dan teman yang dirujuk sama-sama mendapat potongan.', '<b>Perlakuan khusus:</b> prioritas antrean atau layanan rumah untuk pelanggan setia lanjut usia.', 'Hindari program rumit dengan poin yang sulit dipahami.'] },

            { h2: 'Langkah 4: layanan setelah pembelian' },
            `Bagi banyak UMKM, momen setelah pembelian adalah tempat loyalitas dibentuk: garansi yang dihormati tanpa berbelit, setel ulang gratis, dan respons cepat saat ada masalah. Inilah "customer success" versi toko.`,

            { h2: 'Langkah 5: ukur pelanggan yang kembali' },
            { w: 'calc', title: 'Tingkat pelanggan kembali', desc: 'Ukur per tahun atau per periode yang sesuai siklus usaha Anda.', inputs: [{ id: 'tot', label: 'Pelanggan unik tahun lalu', value: 400, min: 1, max: 100000, step: 1 }, { id: 'kem', label: 'Dari mereka, yang membeli lagi tahun ini', value: 120, min: 0, max: 100000, step: 1 }, { id: 'nilai', label: 'Rata-rata belanja per kunjungan', value: 600000, min: 10000, max: 20000000, step: 10000, unit: 'Rp' }], outputs: [{ label: 'Tingkat pelanggan kembali', expr: 'tot > 0 ? kem / tot * 100 : 0', fmt: 'pct', big: true }, { label: 'Pendapatan dari tambahan 10% pelanggan kembali', expr: 'tot * 0.10 * nilai', fmt: 'rp', note: 'Gambaran nilai bila 10% pelanggan lagi berhasil diajak kembali.' }] },
            { w: 'checklist', title: 'Mulai bulan ini', items: ['Buat daftar pelanggan dengan izin dihubungi.', 'Kirim pesan tindak lanjut 3-7 hari setelah pembelian.', 'Tentukan satu pengingat rutin yang relevan dengan usaha Anda.', 'Buat program rekomendasi sederhana.', 'Catat alasan pelanggan yang komplain atau tidak kembali.', 'Hitung tingkat pelanggan kembali setiap kuartal.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pesan yang paling mungkin diterima baik oleh pelanggan?', options: ['Promo massal setiap hari', 'Pengingat yang relevan dan membantu', 'Pesan tanpa nama'], answer: 1, why: 'Relevan dan bermanfaat bagi pelanggan.' },
                { q: 'Sebelum mengirim pengingat lewat WhatsApp, Anda perlu...', options: ['Izin pelanggan', 'Membeli aplikasi mahal', 'Tidak perlu apa pun'], answer: 0, why: 'Menghormati privasi dan aturan pelindungan data.' },
            ] },
        ],
        faq: [
            ['Alat apa yang dibutuhkan?', 'Spreadsheet dan WhatsApp Business (fitur label dan pesan cepat) sudah cukup. Bila pelanggan banyak, aplikasi kasir dengan data pelanggan atau CRM sederhana membantu.'],
            ['Bagaimana bila pelanggan merasa terganggu?', 'Kirim lebih jarang dan lebih relevan, dan hormati permintaan berhenti. Satu pesan bermanfaat per beberapa bulan lebih baik dari promo mingguan.'],
            ['Apakah diskon besar meningkatkan loyalitas?', 'Diskon menarik pembeli sesaat, tetapi loyalitas lebih banyak dibangun oleh layanan, kepercayaan, dan kemudahan.'],
        ],
        sources: [
            ['Reichheld dan Sasser (1990): Zero Defections (ringkasan Bain)', 'https://www.bain.com/insights/zero-defections-quality-comes-to-services-harvard-business-review-hbr/'],
            ['Customer lifetime value (artikel terkait)', 'https://muchson.web.id/artikel/customer-lifetime-value-clv-cara-menghitung/'],
            ['AI untuk UMKM (artikel terkait)', 'https://muchson.web.id/artikel/ai-untuk-umkm-6-pekerjaan-yang-bisa-dihemat/'],
        ],
    },

    {
        slug: 'csat-dan-ces-mengukur-kepuasan-dan-kemudahan',
        title: 'CSAT dan CES: Mengukur Kepuasan dan Kemudahan Pelanggan',
        description: 'Beda CSAT, CES, dan NPS, cara menghitung dan kapan memakainya, serta temuan riset bahwa mengurangi usaha pelanggan lebih efektif daripada membuat kagum.',
        date: D, category: C, tags: ['CSAT', 'customer effort score', 'kepuasan pelanggan', 'survei pelanggan', 'customer experience'], cta: 'jasa',
        lead: 'Banyak perusahaan berlomba "membuat pelanggan kagum" dengan kejutan dan layanan ekstra. Penelitian yang dipublikasikan di Harvard Business Review (2010) menunjukkan hal yang lebih sederhana sering lebih berpengaruh terhadap loyalitas: membuat urusan pelanggan mudah. Di sinilah CES melengkapi CSAT dan NPS.',
        body: [
            { h2: 'Tiga metrik, tiga pertanyaan' },
            { table: { head: ['Metrik', 'Pertanyaan', 'Mengukur', 'Kapan'], rows: [['<b>CSAT</b>', '"Seberapa puas Anda dengan [interaksi ini]?" (1-5)', 'Kepuasan sesaat', 'Setelah interaksi atau transaksi'], ['<b>CES</b>', '"[Perusahaan] memudahkan saya menyelesaikan masalah." (setuju 1-7)', 'Kemudahan / usaha', 'Setelah support, onboarding, checkout'], ['<b>NPS</b>', '"Seberapa mungkin Anda merekomendasikan?" (0-10)', 'Hubungan keseluruhan', 'Berkala, misalnya per kuartal']] } },

            { h2: 'Menghitung CSAT' },
            { w: 'calc', title: 'Kalkulator CSAT', desc: 'CSAT umumnya = persentase responden yang memilih 4 atau 5 pada skala 1-5.', inputs: [{ id: 's5', label: 'Jawaban 5 (sangat puas)', value: 40, min: 0, max: 10000, step: 1 }, { id: 's4', label: 'Jawaban 4 (puas)', value: 30, min: 0, max: 10000, step: 1 }, { id: 's3', label: 'Jawaban 3', value: 15, min: 0, max: 10000, step: 1 }, { id: 's12', label: 'Jawaban 1-2', value: 15, min: 0, max: 10000, step: 1 }], outputs: [{ label: 'CSAT', expr: '(s5 + s4 + s3 + s12) > 0 ? (s5 + s4) / (s5 + s4 + s3 + s12) * 100 : 0', fmt: 'pct', big: true }, { label: 'Rata-rata skor (perkiraan, 1-2 dihitung 1,5)', expr: '(s5 + s4 + s3 + s12) > 0 ? (5 * s5 + 4 * s4 + 3 * s3 + 1.5 * s12) / (s5 + s4 + s3 + s12) : 0', fmt: 'num' }] },

            { h2: 'Temuan penting tentang usaha pelanggan' },
            `Dixon, Freeman, dan Toman ("Stop Trying to Delight Your Customers", HBR 2010) melaporkan riset CEB terhadap puluhan ribu pelanggan: dari pelanggan yang mengalami interaksi layanan yang <b>membutuhkan usaha besar</b>, sekitar 96% menjadi lebih tidak loyal, dibanding sekitar 9% pada pelanggan dengan interaksi yang mudah. Melampaui harapan ternyata tidak banyak menambah loyalitas, sedangkan usaha yang berlebihan sangat merusaknya.`,
            { svg: 'bars', label: 'Pelanggan yang menjadi lebih tidak loyal', unit: '%', data: [['Interaksi butuh usaha besar', 96], ['Interaksi mudah', 9]], caption: 'Angka dari Dixon, Freeman, Toman (2010), HBR.' },

            { h2: 'Sumber usaha yang paling sering' },
            { w: 'cards', title: 'Ketuk untuk perbaikannya', items: [
                { tag: 'Usaha', front: 'Harus menghubungi berkali-kali untuk masalah yang sama.', backTag: 'Perbaiki', back: 'Ukur first contact resolution; beri wewenang agen menyelesaikan di kontak pertama.' },
                { tag: 'Usaha', front: 'Dioper dan mengulang cerita.', backTag: 'Perbaiki', back: 'Catatan kasus dibagikan antar tim; serah terima dengan ringkasan.' },
                { tag: 'Usaha', front: 'Pindah kanal (chat → email → telepon).', backTag: 'Perbaiki', back: 'Selesaikan di kanal yang dipilih pelanggan bila memungkinkan.' },
                { tag: 'Usaha', front: 'Mencari informasi sendiri dan tidak menemukan.', backTag: 'Perbaiki', back: 'Pusat bantuan dengan jawaban jelas untuk pertanyaan paling sering, berdasarkan data tiket.' },
            ] },

            { h2: 'Tips menyusun survei' },
            { ul: ['Satu sampai tiga pertanyaan, selalu dengan satu pertanyaan terbuka "mengapa".', 'Kirim segera setelah interaksi, saat masih diingat.', 'Jangan minta pelanggan memberi nilai sempurna; itu merusak data.', 'Pantau tingkat respons; hasil dari 5% responden mungkin tidak mewakili.', 'Tindak lanjuti skor rendah secepatnya.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Metrik yang paling tepat setelah pelanggan menyelesaikan proses pengembalian barang?', options: ['NPS tahunan', 'CES', 'Jumlah follower'], answer: 1, why: 'Mengukur seberapa mudah proses itu.' },
                { q: 'Menurut Dixon dkk. (2010), yang lebih berpengaruh terhadap loyalitas adalah...', options: ['Membuat pelanggan kagum dengan kejutan', 'Mengurangi usaha pelanggan', 'Diskon besar'], answer: 1, why: 'Usaha besar sangat merusak loyalitas.' },
            ] },
        ],
        faq: [
            ['Mana yang paling penting: CSAT, CES, atau NPS?', 'Ketiganya mengukur hal berbeda. Pakai CSAT dan CES untuk momen interaksi, NPS untuk hubungan menyeluruh, dan bandingkan dengan perilaku nyata seperti retensi.'],
            ['Skala berapa untuk CES?', 'Versi yang banyak dipakai adalah pernyataan setuju-tidak setuju 1-7. Yang penting konsisten dari waktu ke waktu.'],
            ['Apakah survei setelah setiap interaksi berlebihan?', 'Bisa membuat lelah. Batasi frekuensi per pelanggan, misalnya maksimal satu survei per beberapa minggu.'],
        ],
        sources: [
            ['Dixon, Freeman, Toman (2010): Stop Trying to Delight Your Customers, Harvard Business Review', 'https://hbr.org/2010/07/stop-trying-to-delight-your-customers'],
            ['Net Promoter Score (artikel terkait)', 'https://muchson.web.id/artikel/net-promoter-score-nps-cara-menghitung/'],
            ['Menangani pelanggan marah (artikel terkait)', 'https://muchson.web.id/artikel/menangani-pelanggan-marah-langkah-dan-contoh-kalimat/'],
        ],
    },
];
