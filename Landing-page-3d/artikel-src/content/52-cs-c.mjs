const D = '2026-10-28';
const C = 'Customer Success';

export default [
    {
        slug: 'voice-of-customer-mengumpulkan-dan-memakai-masukan',
        title: 'Voice of Customer: Mengumpulkan dan Memakai Masukan',
        description: 'Membangun program voice of customer: sumber masukan, mengelompokkan dan memberi bobot, menyampaikan ke tim produk dengan data, dan menutup lingkaran.',
        date: D, category: C, tags: ['voice of customer', 'umpan balik pelanggan', 'product feedback', 'customer success', 'riset pelanggan'], cta: 'jasa',
        lead: 'Masukan pelanggan tersebar di mana-mana: tiket support, chat WhatsApp, komentar survei, catatan rapat CSM, ulasan di toko aplikasi. Tanpa sistem, masukan itu hilang, atau hanya suara paling keras yang didengar. Program voice of customer (VoC) mengumpulkan semuanya menjadi bukti yang bisa dipakai untuk keputusan.',
        body: [
            { h2: 'Sumber masukan' },
            { table: { head: ['Sumber', 'Kelebihan', 'Perhatikan'], rows: [['Tiket dan chat support', 'Volume besar, masalah nyata', 'Cenderung negatif'], ['Komentar survei (NPS, CSAT)', 'Terukur dan berkala', 'Tingkat respons'], ['Catatan CSM dan QBR', 'Konteks bisnis yang dalam', 'Bias akun besar'], ['Wawancara pengguna', 'Alasan "mengapa"', 'Sedikit orang'], ['Ulasan publik', 'Suara yang jujur', 'Bisa ekstrem'], ['Data pemakaian', 'Perilaku nyata', 'Tidak menjelaskan alasan']] } },

            { h2: 'Dari masukan mentah ke wawasan' },
            { svg: 'flow', label: 'Proses VoC', steps: [{ t: 'Kumpulkan', d: 'satu tempat, satu format' }, { t: 'Tandai', d: 'tema, produk, segmen' }, { t: 'Beri bobot', d: 'frekuensi × nilai akun × dampak' }, { t: 'Sampaikan', d: 'laporan ke tim produk' }, { t: 'Tutup lingkaran', d: 'kabari pelanggan' }] },
            `Catat masalah yang dialami, bukan hanya solusi yang diminta. "Butuh ekspor Excel" bisa jadi masalah sebenarnya adalah "laporan untuk atasan butuh 2 jam disusun manual".`,

            { h2: 'Memberi bobot dengan adil' },
            { w: 'calc', title: 'Skor prioritas sederhana', desc: 'Untuk membandingkan beberapa tema masukan.', inputs: [{ id: 'jml', label: 'Jumlah pelanggan yang menyebut', value: 18, min: 1, max: 1000, step: 1 }, { id: 'mrr', label: 'Total pendapatan bulanan akun-akun itu', value: 12000000, min: 0, max: 1000000000, step: 500000, unit: 'Rp' }, { id: 'dampak', label: 'Dampak ke churn atau adopsi (1-5)', value: 4, min: 1, max: 5, step: 1 }], outputs: [{ label: 'Skor prioritas', expr: 'jml * dampak + mrr / 1000000 * dampak', fmt: 'int', big: true, note: 'Rumus contoh yang menggabungkan jumlah suara dan nilai akun. Sesuaikan dengan bisnis Anda, yang penting konsisten dan transparan.' }] },
            { callout: 'Hindari "suara paling keras menang". Satu pelanggan besar yang sering mengeluh tidak selalu mewakili kebutuhan banyak pelanggan lain. Data membantu diskusi tetap adil.', kind: 'warn', title: 'Bias suara keras' },

            { h2: 'Laporan bulanan untuk tim produk' },
            { code: 'VOICE OF CUSTOMER, Oktober 2026\n\nTop 3 tema\n1. Laporan harian sulit diekspor (18 akun, Rp12 juta MRR, 4 akun berisiko)\n   Kutipan: "Tiap Senin saya butuh 2 jam menyalin data ke Excel untuk direksi."\n2. Notifikasi stok terlambat (11 akun)\n3. Onboarding karyawan baru di cabang memakan waktu (9 akun)\n\nTren: tema 1 naik dari 9 akun bulan lalu.\nPermintaan tindakan: diskusi solusi tema 1 di sprint planning berikutnya.' },

            { h2: 'Menutup lingkaran' },
            `Kabari pelanggan ketika masukan mereka ditindaklanjuti, walau jawabannya "belum bisa sekarang". Pesan sederhana seperti "Fitur ekspor yang Bapak minta sudah tersedia mulai hari ini" membuat pelanggan merasa didengar dan mendorong mereka memberi masukan lagi.`,
            { w: 'checklist', title: 'Program VoC minimal', items: ['Semua masukan dikumpulkan di satu tempat (spreadsheet, CRM, atau alat khusus).', 'Ada daftar tema yang konsisten untuk penandaan.', 'Masalah dicatat, bukan hanya permintaan fitur.', 'Ada skor prioritas yang disepakati.', 'Laporan bulanan ke tim produk.', 'Pelanggan dikabari saat masukan ditindaklanjuti.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Yang sebaiknya dicatat dari permintaan "tambahkan ekspor Excel"?', options: ['Hanya nama fitur', 'Masalah di baliknya, misalnya laporan butuh 2 jam disusun manual', 'Tidak perlu dicatat'], answer: 1, why: 'Masalah membuka lebih banyak pilihan solusi.' },
                { q: 'Mengapa menutup lingkaran penting?', options: ['Formalitas', 'Pelanggan merasa didengar dan mau memberi masukan lagi', 'Menghemat biaya'], answer: 1, why: 'Kepercayaan tumbuh bila masukan berbuah tindakan.' },
            ] },
        ],
        faq: [
            ['Siapa pemilik program VoC?', 'Sering tim customer success atau customer experience, bekerja erat dengan product manager. Yang penting ada satu pemilik yang jelas.'],
            ['Bolehkah memakai AI untuk mengelompokkan masukan?', 'Sangat membantu untuk ribuan komentar. Periksa sampel hasilnya secara manual, dan perhatikan privasi data pelanggan.'],
            ['Bagaimana bila tim produk tidak menindaklanjuti?', 'Bawa data dampak bisnis (akun berisiko, pendapatan terdampak), dan sepakati proses tinjauan rutin bersama.'],
        ],
        sources: [
            ['Griffin dan Hauser (1993): The Voice of the Customer, Marketing Science', 'https://doi.org/10.1287/mksc.12.1.1'],
            ['Wawancara pengguna (artikel terkait)', 'https://muchson.web.id/artikel/wawancara-pengguna-cara-bertanya-yang-benar/'],
            ['Net Promoter Score (artikel terkait)', 'https://muchson.web.id/artikel/net-promoter-score-nps-cara-menghitung/'],
            ['QBR (artikel terkait)', 'https://muchson.web.id/artikel/qbr-quarterly-business-review-cara-menjalankan/'],
        ],
    },

    {
        slug: 'net-revenue-retention-dan-ekspansi-tanpa-memaksa',
        title: 'Net Revenue Retention dan Ekspansi Tanpa Memaksa',
        description: 'Menghitung net dan gross revenue retention dengan kalkulator, mengapa NRR di atas 100% berharga, dan mendorong ekspansi yang lahir dari nilai, bukan tekanan.',
        date: D, category: C, tags: ['net revenue retention', 'NRR', 'upsell', 'ekspansi pelanggan', 'SaaS metrics'], cta: 'jasa',
        lead: 'Bayangkan bisnis yang tetap tumbuh walau tidak mendapat satu pun pelanggan baru tahun ini. Itu terjadi bila pelanggan lama tumbuh lebih besar daripada pendapatan yang hilang dari pelanggan yang berhenti. Metrik yang mengukurnya disebut net revenue retention.',
        body: [
            { h2: 'Rumus NRR dan GRR' },
            { code: 'NRR = (MRR awal + ekspansi − kontraksi − churn) ÷ MRR awal × 100%\nGRR = (MRR awal − kontraksi − churn) ÷ MRR awal × 100%\n\n(hanya dari pelanggan yang sudah ada di awal periode;\n pelanggan baru tidak dihitung)' },
            { w: 'calc', title: 'Kalkulator NRR dan GRR', desc: 'Dalam juta rupiah per bulan (MRR), untuk kohort pelanggan di awal tahun.', inputs: [{ id: 'awal', label: 'MRR awal periode', value: 100, min: 1, max: 100000, step: 1, unit: 'juta' }, { id: 'eks', label: 'Ekspansi (upgrade, tambahan pengguna)', value: 18, min: 0, max: 100000, step: 1, unit: 'juta' }, { id: 'kon', label: 'Kontraksi (turun paket)', value: 4, min: 0, max: 100000, step: 1, unit: 'juta' }, { id: 'hilang', label: 'Churn (pelanggan berhenti)', value: 8, min: 0, max: 100000, step: 1, unit: 'juta' }], outputs: [{ label: 'Net revenue retention', expr: '(awal + eks - kon - hilang) / awal * 100', fmt: 'pct', big: true }, { label: 'Gross revenue retention', expr: '(awal - kon - hilang) / awal * 100', fmt: 'pct', note: 'GRR tidak bisa lebih dari 100%. GRR menunjukkan seberapa bocor ember Anda; NRR menunjukkan apakah ember tetap terisi dari dalam.' }] },

            { h2: 'Mengapa NRR di atas 100% berharga' },
            `Dengan NRR 110%, pendapatan dari pelanggan yang ada tumbuh 10% per tahun dengan sendirinya. Pelanggan baru menjadi pertumbuhan tambahan, bukan sekadar menutup lubang. Banyak perusahaan SaaS publik melaporkan NRR sebagai indikator kesehatan, dan angka yang konsisten di atas 100% biasanya dianggap kuat, terutama di segmen pelanggan bisnis.`,

            { h2: 'Ekspansi yang sehat lahir dari nilai' },
            { w: 'cards', title: 'Ketuk: sinyal ekspansi yang wajar', items: [
                { tag: 'Sinyal', front: 'Pelanggan mendekati batas paket (pengguna, kuota).', backTag: 'Tindakan', back: 'Beri tahu lebih awal dengan data pemakaian, tawarkan pilihan yang sesuai, bukan menunggu mereka terkena batas.' },
                { tag: 'Sinyal', front: 'Tim lain di perusahaan pelanggan ingin ikut memakai.', backTag: 'Tindakan', back: 'Champion yang puas adalah jalan terbaik; bantu mereka mempresentasikan hasil ke tim lain.' },
                { tag: 'Sinyal', front: 'Tujuan awal tercapai, pelanggan punya tujuan baru.', backTag: 'Tindakan', back: 'Diskusikan di QBR; ekspansi menjadi bagian rencana bersama.' },
                { tag: 'Bukan sinyal', front: 'Target kuartal tim sales belum tercapai.', backTag: 'Akibat', back: 'Ekspansi yang dipaksa sering berujung kontraksi atau churn di periode berikutnya.' },
            ] },
            { callout: 'Turun paket (kontraksi) bukan selalu kegagalan. Membantu pelanggan memilih paket yang tepat saat mereka kebesaran sering mencegah churn total dan menjaga kepercayaan.', kind: 'info', title: 'Kontraksi yang menyelamatkan' },

            { h2: 'Pembagian peran CS dan sales' },
            `Banyak organisasi membagi: CSM menjaga adopsi, kesehatan, dan mengidentifikasi peluang; account executive menangani negosiasi komersial ekspansi besar. Pembagian ini menjaga CSM tetap dipercaya sebagai penasihat, bukan penjual.`,
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'MRR awal 200, ekspansi 30, kontraksi 10, churn 20. NRR?', options: ['100%', '90%', '115%'], answer: 0, why: '(200 + 30 − 10 − 20) ÷ 200 = 100%.' },
                { q: 'Pada contoh yang sama, GRR?', options: ['85%', '100%', '90%'], answer: 0, why: '(200 − 10 − 20) ÷ 200 = 85%.' },
            ] },
        ],
        faq: [
            ['Apakah pelanggan baru dihitung dalam NRR?', 'Tidak. NRR hanya melihat kohort pelanggan yang sudah ada di awal periode.'],
            ['NRR atau GRR yang lebih penting?', 'Keduanya. GRR tinggi berarti jarang kehilangan pendapatan; NRR tinggi berarti pelanggan tumbuh. NRR tinggi dengan GRR rendah bisa menyembunyikan masalah churn.'],
            ['Apakah NRR relevan untuk bisnis non-SaaS?', 'Konsepnya bisa dipakai untuk bisnis dengan pelanggan berulang, misalnya distributor B2B, dengan menghitung pendapatan dari pelanggan tahun lalu.'],
        ],
        sources: [
            ['Reichheld dan Sasser (1990): Zero Defections (ringkasan Bain)', 'https://www.bain.com/insights/zero-defections-quality-comes-to-services-harvard-business-review-hbr/'],
            ['Churn rate (artikel terkait)', 'https://muchson.web.id/artikel/churn-rate-cara-menghitung-dan-menurunkan/'],
            ['Customer lifetime value (artikel terkait)', 'https://muchson.web.id/artikel/customer-lifetime-value-clv-cara-menghitung/'],
            ['QBR (artikel terkait)', 'https://muchson.web.id/artikel/qbr-quarterly-business-review-cara-menjalankan/'],
        ],
    },

    {
        slug: 'playbook-customer-success-cara-menyusun',
        title: 'Playbook Customer Success: Cara Menyusun dan Memakainya',
        description: 'Menyusun playbook customer success: pemicu, langkah, pemilik, template pesan, contoh playbook akun berisiko dan onboarding, serta mengukur keberhasilannya.',
        date: D, category: C, tags: ['playbook customer success', 'SOP', 'customer success', 'proses tim', 'retensi'], cta: 'jasa',
        lead: 'Tanpa playbook, setiap CSM menangani situasi yang sama dengan cara berbeda, dan kualitas layanan bergantung pada siapa yang kebetulan memegang akun. Playbook adalah resep yang bisa diulang: ketika situasi X terjadi, lakukan langkah-langkah ini, dengan pesan dan alat yang sudah disiapkan.',
        body: [
            { h2: 'Struktur sebuah playbook' },
            { table: { head: ['Bagian', 'Isi'], rows: [['Nama', 'Mis. "Penyelamatan akun berisiko"'], ['Pemicu', 'Kondisi yang mengaktifkan, sebisa mungkin otomatis'], ['Tujuan', 'Hasil yang diinginkan dan batas waktu'], ['Langkah', 'Urutan tindakan dengan pemilik dan tenggat'], ['Template', 'Email, pesan, agenda panggilan'], ['Kriteria selesai', 'Kapan playbook dianggap berhasil atau ditutup'], ['Metrik', 'Bagaimana efektivitasnya diukur']] } },

            { h2: 'Contoh: playbook akun berisiko' },
            { svg: 'timeline', label: 'Playbook penyelamatan akun', events: [['Pemicu', 'Health score turun di bawah 50 atau pemakaian turun 40% dalam 30 hari', 'Tugas otomatis dibuat untuk CSM.'], ['Hari 1', 'Analisis', 'CSM memeriksa data pemakaian, tiket, dan catatan terakhir.'], ['Hari 2', 'Kontak champion', 'Panggilan 20 menit: apa yang berubah?'], ['Hari 5', 'Rencana pemulihan', 'Sepakati masalah utama dan target 30 hari bersama pelanggan.'], ['Hari 30', 'Evaluasi', 'Skor membaik? Tutup playbook. Tidak? Eskalasi ke manajer dan sponsor eksekutif.']] },
            { code: 'Template pesan (Hari 2):\n\nHalo Pak Andi,\nSaya lihat pemakaian laporan harian di tim Bapak turun beberapa minggu\nterakhir. Bisa jadi ada perubahan di tim atau ada kendala di sistem kami.\nBoleh saya minta waktu 20 menit minggu ini untuk memastikan semuanya\nberjalan sesuai tujuan Bapak? Pilihan: Rabu 10.00 atau Kamis 14.00.\n\nSalam,\nRina, Customer Success' },

            { h2: 'Playbook lain yang umum' },
            { w: 'cards', title: 'Ketuk untuk pemicunya', items: [
                { tag: 'Onboarding', front: 'Pelanggan baru menandatangani kontrak.', backTag: 'Pemicu', back: 'Kontrak aktif di CRM. Langkah: kickoff, rencana sukses, tonggak 30-60-90.' },
                { tag: 'Champion pergi', front: 'Kontak utama keluar dari perusahaan pelanggan.', backTag: 'Pemicu', back: 'Email terpental atau kabar dari pelanggan. Langkah: cari champion baru, perkenalan ulang nilai produk.' },
                { tag: 'Perpanjangan', front: 'Kontrak berakhir dalam 90 hari.', backTag: 'Pemicu', back: 'Tanggal di CRM. Langkah: tinjau nilai, identifikasi risiko, siapkan proposal.' },
                { tag: 'Detraktor', front: 'NPS 0-6.', backTag: 'Pemicu', back: 'Hasil survei. Langkah: hubungi dalam 48 jam, catat masalah, tindak lanjut.' },
                { tag: 'Advokasi', front: 'NPS 9-10 dan health score hijau.', backTag: 'Pemicu', back: 'Langkah: ucapan terima kasih, tawaran studi kasus atau referensi.' },
            ] },

            { h2: 'Prinsip menulis playbook' },
            { ul: ['Mulai dari 3-5 situasi paling sering atau paling berdampak, bukan 30 sekaligus.', 'Pemicu otomatis bila memungkinkan, agar tidak bergantung ingatan.', 'Langkah cukup jelas untuk CSM baru, tetapi memberi ruang penilaian.', 'Tinjau tiap kuartal: langkah mana yang tidak pernah dipakai atau tidak berhasil?'] },
            { callout: 'Playbook adalah pedoman, bukan naskah kaku. Pelanggan bisa merasakan bila mereka diperlakukan seperti nomor tiket. Gunakan template sebagai titik awal, lalu personalkan.', kind: 'info', title: 'Tetap manusiawi' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Bagian playbook yang menentukan kapan playbook dimulai?', options: ['Template', 'Pemicu', 'Metrik'], answer: 1, why: 'Pemicu mengaktifkan playbook.' },
                { q: 'Berapa playbook yang sebaiknya dibuat di awal?', options: ['Sebanyak mungkin', '3-5 situasi paling sering atau berdampak', 'Satu untuk semua situasi'], answer: 1, why: 'Fokus pada yang paling bernilai dulu.' },
            ] },
        ],
        faq: [
            ['Di mana menyimpan playbook?', 'Di dokumen tim yang mudah dicari, dan idealnya terhubung dengan CRM atau platform customer success sehingga tugas dibuat otomatis.'],
            ['Bagaimana mengukur keberhasilan playbook?', 'Bandingkan hasil akun yang menjalani playbook dengan sebelumnya: persentase akun berisiko yang pulih, waktu sampai nilai pertama, atau tingkat perpanjangan.'],
            ['Apakah playbook cocok untuk tim kecil?', 'Justru sangat membantu, karena pengetahuan tidak hanya tersimpan di kepala satu orang dan anggota baru cepat produktif.'],
        ],
        sources: [
            ['Reichheld dan Sasser (1990): Zero Defections (ringkasan Bain)', 'https://www.bain.com/insights/zero-defections-quality-comes-to-services-harvard-business-review-hbr/'],
            ['Customer health score (artikel terkait)', 'https://muchson.web.id/artikel/customer-health-score-cara-membuat/'],
            ['Onboarding pelanggan B2B (artikel terkait)', 'https://muchson.web.id/artikel/onboarding-pelanggan-b2b-dan-time-to-value/'],
            ['n8n untuk otomasi pemicu (artikel terkait)', 'https://muchson.web.id/artikel/n8n-otomasi-workflow-untuk-pemula/'],
        ],
    },

    {
        slug: 'analisis-kohort-untuk-retensi-pengguna',
        title: 'Analisis Kohort untuk Memahami Retensi Pengguna',
        description: 'Membuat dan membaca tabel kohort retensi: mengelompokkan pengguna per bulan bergabung, membaca kurva retensi, contoh SQL, dan menilai dampak perbaikan.',
        date: D, category: C, tags: ['analisis kohort', 'cohort analysis', 'retensi', 'product analytics', 'SQL'], cta: 'jasa',
        lead: 'Angka "pengguna aktif bulan ini" bisa naik walau produk memburuk, asalkan pemasaran mendatangkan banyak pengguna baru. Analisis kohort memisahkan pengguna berdasarkan kapan mereka bergabung, sehingga Anda bisa melihat apakah pengguna yang datang belakangan bertahan lebih baik atau lebih buruk dari yang lama.',
        body: [
            { h2: 'Apa itu kohort' },
            `Kohort adalah kelompok pengguna yang berbagi titik awal yang sama, biasanya bulan pendaftaran. Tabel kohort menunjukkan persentase dari tiap kelompok yang masih aktif setelah 1, 2, 3 bulan, dan seterusnya.`,
            { table: { head: ['Kohort', 'Bulan 0', 'Bulan 1', 'Bulan 2', 'Bulan 3'], rows: [['Juni', '100%', '42%', '30%', '26%'], ['Juli', '100%', '45%', '33%', '29%'], ['Agustus (onboarding baru)', '100%', '58%', '46%', ''], ['September', '100%', '61%', '', '']] } },
            `Cara membaca: baca <b>ke samping</b> untuk melihat penurunan satu kohort dari waktu ke waktu, dan <b>ke bawah</b> pada kolom yang sama untuk membandingkan kohort. Di contoh ini, setelah onboarding baru di Agustus, retensi bulan 1 naik dari sekitar 45% ke 58-61%.`,

            { h2: 'Bentuk kurva retensi' },
            { svg: 'bars', label: 'Contoh kurva retensi kohort Juli', unit: '%', data: [['Bulan 0', 100], ['Bulan 1', 45], ['Bulan 2', 33], ['Bulan 3', 29], ['Bulan 4', 27], ['Bulan 5', 26]], caption: 'Kurva yang mendatar (di sini sekitar 26%) menandakan ada kelompok pengguna yang menemukan nilai jangka panjang. Kurva yang terus turun ke nol adalah tanda bahaya.' },
            { callout: 'Penurunan terbesar biasanya terjadi di periode pertama. Karena itu perbaikan onboarding sering memberi dampak retensi paling besar.', kind: 'info', title: 'Bulan pertama menentukan' },

            { h2: 'Membuat tabel kohort dengan SQL' },
            { code: "-- PostgreSQL: retensi bulanan berdasarkan bulan daftar\nWITH pengguna AS (\n  SELECT id, date_trunc('month', dibuat_pada) AS kohort\n  FROM users\n),\naktivitas AS (\n  SELECT DISTINCT user_id, date_trunc('month', waktu) AS bulan\n  FROM events\n)\nSELECT\n  p.kohort,\n  (EXTRACT(YEAR FROM age(a.bulan, p.kohort)) * 12\n   + EXTRACT(MONTH FROM age(a.bulan, p.kohort)))::int AS bulan_ke,\n  COUNT(DISTINCT a.user_id) AS aktif\nFROM pengguna p\nJOIN aktivitas a ON a.user_id = p.id AND a.bulan >= p.kohort\nGROUP BY 1, 2\nORDER BY 1, 2;\n-- bagi 'aktif' dengan jumlah pengguna di bulan_ke = 0 untuk mendapat persentase" },

            { h2: 'Definisi "aktif" menentukan hasil' },
            { w: 'cards', title: 'Ketuk untuk contoh definisi yang baik', items: [
                { tag: 'Lemah', front: 'Aktif = membuka aplikasi.', backTag: 'Lebih baik', back: 'Aktif = melakukan tindakan bernilai, misalnya menyelesaikan satu pelajaran atau mencatat satu transaksi.' },
                { tag: 'Lemah', front: 'Periode harian untuk produk yang dipakai bulanan.', backTag: 'Lebih baik', back: 'Sesuaikan periode dengan frekuensi pemakaian alami produk: harian, mingguan, atau bulanan.' },
            ] },

            { h2: 'Memakai kohort untuk keputusan' },
            { ul: ['Menilai dampak perubahan: apakah kohort setelah perubahan bertahan lebih baik?', 'Membandingkan kanal akuisisi: pengguna dari iklan vs rekomendasi.', 'Membandingkan segmen: paket, wilayah, jenis perangkat.', 'Memproyeksikan pendapatan dan CLV dengan lebih realistis.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Membandingkan kolom "Bulan 1" dari atas ke bawah menunjukkan...', options: ['Penurunan satu kohort dari waktu ke waktu', 'Apakah kohort yang lebih baru bertahan lebih baik di bulan pertama', 'Total pengguna'], answer: 1, why: 'Kolom yang sama membandingkan kohort berbeda pada usia yang sama.' },
                { q: 'Kurva retensi yang mendatar berarti...', options: ['Produk gagal', 'Ada kelompok pengguna yang menemukan nilai jangka panjang', 'Data salah'], answer: 1, why: 'Sebagian pengguna terus bertahan.' },
            ] },
        ],
        faq: [
            ['Alat apa untuk analisis kohort?', 'Mixpanel, Amplitude, PostHog, dan Google Analytics punya laporan kohort. Spreadsheet dan SQL juga cukup untuk memulai.'],
            ['Berapa pengguna minimal per kohort?', 'Semakin kecil kohort, semakin besar fluktuasi acak. Untuk kohort kecil, gunakan periode lebih panjang (per kuartal) atau gabungkan beberapa bulan.'],
            ['Apa bedanya retensi pengguna dan retensi pendapatan?', 'Retensi pengguna menghitung orang; retensi pendapatan menghitung uang. Keduanya bisa berbeda arah bila pelanggan besar dan kecil berperilaku berbeda.'],
        ],
        sources: [
            ['PostgreSQL Docs: Date/Time Functions (date_trunc, age)', 'https://www.postgresql.org/docs/current/functions-datetime.html'],
            ['Metrik UX dengan framework HEART (artikel terkait)', 'https://muchson.web.id/artikel/metrik-ux-framework-heart-google/'],
            ['Churn rate (artikel terkait)', 'https://muchson.web.id/artikel/churn-rate-cara-menghitung-dan-menurunkan/'],
        ],
    },

    {
        slug: 'sinyal-pelanggan-akan-berhenti-dan-cara-mencegahnya',
        title: 'Sinyal Pelanggan Akan Berhenti dan Cara Mencegahnya',
        description: 'Tanda awal pelanggan akan churn dari data pemakaian, dukungan, hubungan, dan pembayaran, cara menyusun peringatan dini, latihan, dan tindakan pencegahan.',
        date: D, category: C, tags: ['churn prevention', 'sinyal churn', 'customer success', 'retensi', 'peringatan dini'], cta: 'jasa',
        lead: 'Pelanggan jarang berhenti secara tiba-tiba. Biasanya ada jejak berminggu-minggu sebelumnya: login yang makin jarang, tiket yang tidak terjawab memuaskan, champion yang tidak lagi membalas email. Tim yang belajar membaca jejak ini punya waktu untuk bertindak sebelum terlambat.',
        body: [
            { h2: 'Empat kelompok sinyal' },
            { svg: 'matrix', x: 'Mudah dilacak otomatis', y: 'Kuat memprediksi churn', label: 'Peta sinyal churn (contoh umum)', quads: [{ t: 'Hubungan', d: 'Champion pergi, sponsor tidak hadir QBR' }, { t: 'Pemakaian', d: 'Login dan tindakan inti turun tajam' }, { t: 'Sikap', d: 'Nada email berubah, keluhan di rapat' }, { t: 'Dukungan & pembayaran', d: 'Tiket kritis berulang, pembayaran terlambat' }], caption: 'Posisi tiap sinyal berbeda antar produk. Validasi dengan data churn Anda sendiri.' },

            { h2: 'Sinyal dan tindakan' },
            { table: { head: ['Sinyal', 'Kemungkinan arti', 'Tindakan'], rows: [['Pemakaian fitur inti turun 30-50% dalam sebulan', 'Kehilangan nilai, pindah alat, atau perubahan tim', 'Hubungi champion, tawarkan sesi ulang'], ['Hanya admin yang login', 'Pengguna akhir tidak mengadopsi', 'Pelatihan per peran, panduan singkat'], ['Champion keluar dari perusahaan', 'Hubungan hilang, risiko tinggi', 'Cari champion baru, perkenalan ulang nilai'], ['Tiket kritis yang sama berulang', 'Frustrasi menumpuk', 'Eskalasi ke produk, beri kabar perkembangan'], ['Meminta ekspor seluruh data', 'Bisa bersiap pindah', 'Tanyakan kebutuhannya dengan wajar, cek kepuasan'], ['Pembayaran terlambat atau kartu gagal', 'Masalah anggaran atau teknis', 'Pengingat ramah, opsi pembayaran lain'], ['Tidak hadir di QBR / tidak membalas', 'Prioritas bergeser', 'Kontak jalur lain, sponsor eksekutif']] } },

            { h2: 'Latihan: baca sinyal' },
            { w: 'choose', title: 'Akun mana yang paling berisiko?', questions: [
                { q: 'Akun A: login turun 15%, NPS 8, champion aktif. Akun B: login stabil, tetapi champion baru saja resign dan kontrak habis 2 bulan lagi. Akun C: login naik, 3 tiket minor.', options: [{ t: 'Akun A', add: { a: 3 } }, { t: 'Akun B', add: { b: 3 } }, { t: 'Akun C', add: { c: 3 } }] },
            ], results: { a: { title: 'Akun A perlu dipantau, tetapi bukan yang paling berisiko', text: 'Penurunan 15% bisa musiman dan hubungan masih baik. Akun B lebih berbahaya: champion hilang menjelang perpanjangan adalah salah satu sinyal terkuat.' }, b: { title: 'Tepat, akun B paling berisiko', text: 'Kehilangan champion menjelang perpanjangan berarti tidak ada lagi orang di dalam yang membela produk Anda. Segera cari kontak baru dan tunjukkan nilai kepada pengambil keputusan.' }, c: { title: 'Akun C tampak sehat', text: 'Pemakaian naik dan tiket minor menunjukkan pelanggan aktif memakai produk. Akun B jauh lebih berisiko karena champion pergi menjelang perpanjangan.' } } },

            { h2: 'Membangun sistem peringatan dini' },
            { ol: ['Kumpulkan data akun yang churn 12 bulan terakhir.', 'Lihat sinyal apa yang muncul 30-90 hari sebelum mereka berhenti.', 'Bandingkan dengan akun yang bertahan untuk memastikan sinyalnya membedakan.', 'Pasang peringatan otomatis untuk sinyal terkuat.', 'Hubungkan setiap peringatan dengan playbook tindakan.', 'Tinjau tiap kuartal: peringatan mana yang sering salah (false alarm)?'] },
            { callout: 'Exit interview dengan pelanggan yang sudah berhenti adalah sumber pembelajaran yang sering dilewatkan. Tanyakan dengan rendah hati: kapan Anda mulai mempertimbangkan berhenti, dan apa yang bisa kami lakukan berbeda?', kind: 'info', title: 'Belajar dari yang pergi' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Cara memastikan sebuah sinyal benar-benar memprediksi churn?', options: ['Percaya intuisi', 'Bandingkan kemunculannya pada akun yang churn dan yang bertahan', 'Tanya pesaing'], answer: 1, why: 'Sinyal yang baik membedakan kedua kelompok.' },
                { q: 'Setiap peringatan otomatis sebaiknya terhubung dengan...', options: ['Playbook tindakan', 'Laporan tahunan', 'Tidak ada'], answer: 0, why: 'Peringatan tanpa tindakan tidak mengubah hasil.' },
            ] },
        ],
        faq: [
            ['Apakah semua churn bisa dicegah?', 'Tidak. Perusahaan pelanggan bisa bangkrut, diakuisisi, atau berubah strategi. Fokus pada churn yang bisa dicegah: kurang nilai, onboarding gagal, masalah layanan.'],
            ['Apakah perlu model machine learning?', 'Tidak untuk memulai. Aturan sederhana dari beberapa sinyal kuat sering sudah sangat membantu dan mudah dijelaskan.'],
            ['Bagaimana dengan pelanggan kecil yang banyak?', 'Gunakan peringatan otomatis dan pesan otomatis yang dipersonalisasi, sementara CSM fokus pada akun bernilai tinggi.'],
        ],
        sources: [
            ['Gupta et al. (2006): Modeling Customer Lifetime Value, Journal of Service Research', 'https://doi.org/10.1177/1094670506293810'],
            ['Customer health score (artikel terkait)', 'https://muchson.web.id/artikel/customer-health-score-cara-membuat/'],
            ['Playbook customer success (artikel terkait)', 'https://muchson.web.id/artikel/playbook-customer-success-cara-menyusun/'],
            ['Analisis kohort (artikel terkait)', 'https://muchson.web.id/artikel/analisis-kohort-untuk-retensi-pengguna/'],
        ],
    },
];
