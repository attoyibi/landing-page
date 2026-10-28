const D = '2026-10-28';
const C = 'UX & Produk';

export default [
    {
        slug: 'hukum-ux-fitts-hick-jakob-dan-lainnya',
        title: 'Hukum-Hukum UX: Fitts, Hick, Jakob, dan Lainnya',
        description: 'Prinsip psikologi di balik desain antarmuka (laws of UX): Fitts, Hick, Jakob, Doherty, Tesler, efek posisi berurutan, dengan contoh dan batasannya.',
        date: D, category: C, tags: ['laws of UX', 'Fitts law', 'Hick law', 'psikologi desain', 'UI design'], cta: 'jasa',
        lead: 'Banyak keputusan desain yang terasa seperti selera sebenarnya punya dasar penelitian psikologi dan interaksi manusia-komputer. Jon Yablonski mengumpulkannya dalam situs Laws of UX. Berikut beberapa yang paling sering berguna, lengkap dengan cara menerapkan dan batasannya.',
        body: [
            { h2: 'Hukum Fitts: besar dan dekat lebih mudah dijangkau' },
            `Paul Fitts (1954) menunjukkan bahwa waktu untuk menjangkau target bergantung pada jarak dan ukurannya: target yang lebih besar dan lebih dekat lebih cepat dicapai.`,
            { w: 'calc', title: 'Indeks kesulitan Fitts', desc: 'ID = log₂(jarak / lebar + 1). Semakin tinggi, semakin sulit dan lama dijangkau.', inputs: [{ id: 'j', label: 'Jarak ke tombol', value: 300, min: 10, max: 1500, step: 10, unit: 'px' }, { id: 'w', label: 'Lebar tombol', value: 44, min: 8, max: 300, step: 2, unit: 'px' }], outputs: [{ label: 'Indeks kesulitan', expr: 'log2(j / w + 1)', fmt: 'num', unit: 'bit', big: true, note: 'Coba perbesar tombol dari 24 px ke 48 px dan lihat nilainya turun. Pedoman WCAG 2.2 menyarankan target sentuh minimal 24×24 piksel CSS; banyak pedoman platform memakai sekitar 44-48.' }] },
            { ul: ['Tombol utama dibuat besar dan berada di area yang mudah dijangkau jempol.', 'Tombol berbahaya (hapus) dijauhkan dari tombol yang sering ditekan.', 'Tepi dan sudut layar desktop mudah dijangkau karena kursor berhenti di sana.'] },

            { h2: 'Hukum Hick: makin banyak pilihan, makin lama memutuskan' },
            `Hick (1952) dan Hyman (1953) menemukan waktu reaksi naik secara logaritmik seiring jumlah pilihan. Dalam desain: kurangi pilihan pada keputusan penting, kelompokkan menu, dan tampilkan opsi lanjutan secara bertahap.`,
            { callout: 'Hukum Hick berlaku paling jelas untuk pilihan sederhana yang sudah dikenal. Untuk menu panjang yang tersusun rapi (misalnya urut abjad), pengguna memindai dan mencari, sehingga efeknya berbeda. Jangan memakainya untuk membenarkan menyembunyikan fitur penting.', kind: 'info', title: 'Batasan' },

            { h2: 'Hukum Jakob: pengguna membawa kebiasaan dari situs lain' },
            `Jakob Nielsen: pengguna menghabiskan sebagian besar waktunya di situs lain, sehingga mereka berharap situs Anda bekerja seperti yang sudah mereka kenal. Keranjang di kanan atas, logo kembali ke beranda, tarik ke bawah untuk menyegarkan. Berinovasi boleh, tetapi di tempat yang memberi nilai, bukan pada pola dasar.`,

            { h2: 'Prinsip lain yang sering dipakai' },
            { w: 'cards', title: 'Ketuk untuk penerapan', items: [
                { tag: 'Doherty threshold', front: 'Produktivitas naik ketika sistem merespons di bawah sekitar 400 ms.', backTag: 'Terapkan', back: 'Tampilkan umpan balik instan (skeleton, status) bila proses lebih lama, dan optimalkan respons tindakan yang sering.' },
                { tag: 'Hukum Tesler', front: 'Setiap sistem punya kerumitan yang tidak bisa dihilangkan, hanya dipindahkan.', backTag: 'Terapkan', back: 'Pindahkan kerumitan dari pengguna ke sistem: isi otomatis alamat dari kode pos, tebak format tanggal.' },
                { tag: 'Efek posisi berurutan', front: 'Orang cenderung mengingat item pertama dan terakhir dalam daftar.', backTag: 'Terapkan', back: 'Letakkan menu terpenting di awal dan akhir navigasi.' },
                { tag: 'Efek Von Restorff', front: 'Hal yang berbeda dari sekitarnya lebih diingat.', backTag: 'Terapkan', back: 'Satu tombol utama dengan warna menonjol, bukan lima tombol yang semuanya menonjol.' },
                { tag: 'Efek Zeigarnik', front: 'Tugas yang belum selesai lebih diingat.', backTag: 'Terapkan', back: 'Indikator kemajuan profil "70% lengkap" mendorong penyelesaian, asal tidak manipulatif.' },
                { tag: 'Aesthetic-usability effect', front: 'Desain yang indah dianggap lebih mudah dipakai.', backTag: 'Terapkan', back: 'Estetika membantu kesan pertama, tetapi bisa menutupi masalah usability saat uji. Tetap amati perilaku, bukan hanya pendapat.' },
            ] },

            { h2: 'Bagaimana dengan "7 ± 2"?' },
            `Angka Miller (1956) sering disalahgunakan untuk aturan "menu maksimal 7 item". Miller berbicara tentang kapasitas memori jangka pendek untuk informasi yang harus diingat, bukan jumlah item yang boleh terlihat di layar. Menu yang terlihat tidak perlu diingat. Pelajarannya yang tepat: <b>potong informasi menjadi kelompok bermakna</b>, misalnya nomor HP ditulis 0812-3456-7890.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Memperbesar tombol "Bayar" dan menaruhnya di bawah layar ponsel menerapkan...', options: ['Hukum Fitts', 'Hukum Tesler', 'Efek Zeigarnik'], answer: 0, why: 'Target lebih besar dan lebih mudah dijangkau.' },
                { q: 'Mengapa sebaiknya tidak membuat navigasi situs yang benar-benar unik?', options: ['Hukum Jakob: pengguna berharap pola yang sudah dikenal', 'Hukum Hick', 'Doherty threshold'], answer: 0, why: 'Pengguna membawa ekspektasi dari situs lain.' },
                { q: 'Aturan "menu maksimal 7 item" dari Miller...', options: ['Tepat', 'Salah tafsir; Miller berbicara tentang memori, bukan item yang terlihat', 'Wajib menurut WCAG'], answer: 1, why: 'Item yang terlihat tidak perlu diingat.' },
            ] },
        ],
        faq: [
            ['Apakah hukum-hukum ini mutlak?', 'Tidak. Sebagian berasal dari eksperimen laboratorium dengan kondisi tertentu. Gunakan sebagai pedoman, lalu validasi dengan uji pengguna.'],
            ['Di mana bisa mempelajari lebih lanjut?', 'Situs Laws of UX karya Jon Yablonski merangkumnya dengan rujukan penelitian aslinya.'],
            ['Berapa ukuran target sentuh yang aman?', 'WCAG 2.2 menetapkan minimal 24×24 piksel CSS untuk level AA, dengan pengecualian tertentu. Apple dan Google menyarankan ukuran lebih besar, sekitar 44-48.'],
        ],
        sources: [
            ['Laws of UX (Jon Yablonski)', 'https://lawsofux.com/'],
            ['Fitts (1954): The information capacity of the human motor system', 'https://doi.org/10.1037/h0055392'],
            ['W3C WCAG 2.2: Understanding Target Size (Minimum)', 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html'],
        ],
    },

    {
        slug: 'desain-inklusif-merancang-untuk-semua-orang',
        title: 'Desain Inklusif: Merancang Produk untuk Semua Orang',
        description: 'Prinsip desain inklusif dengan spektrum persona permanen, sementara, dan situasional, contoh di aplikasi, bedanya dengan aksesibilitas, dan checklist tim.',
        date: D, category: C, tags: ['desain inklusif', 'inclusive design', 'aksesibilitas', 'UX', 'disabilitas'], cta: 'jasa',
        lead: 'Menurut WHO, sekitar 1,3 miliar orang atau 1 dari 6 penduduk dunia mengalami disabilitas yang signifikan. Tetapi desain inklusif bukan hanya tentang disabilitas permanen. Siapa pun bisa mengalami keterbatasan: tangan patah, menggendong bayi, berada di bawah terik matahari, atau memakai koneksi lambat di daerah. Merancang untuk keterbatasan ini membuat produk lebih baik bagi semua orang.',
        body: [
            { h2: 'Spektrum persona' },
            `Toolkit Inclusive Design dari Microsoft memperkenalkan cara pandang yang membantu: satu kebutuhan bisa muncul secara permanen, sementara, atau situasional.`,
            { table: { head: ['Kemampuan', 'Permanen', 'Sementara', 'Situasional'], rows: [['Menyentuh', 'Satu lengan', 'Lengan cedera', 'Menggendong bayi'], ['Melihat', 'Tunanetra', 'Katarak, mata diperiksa', 'Silau matahari di layar'], ['Mendengar', 'Tuli', 'Infeksi telinga', 'Di kereta yang bising'], ['Berbicara', 'Gangguan bicara', 'Radang tenggorokan', 'Aksen berat, tempat sunyi']] } },
            `Desain untuk satu lengan permanen (misalnya bisa dipakai dengan satu tangan) juga membantu jutaan orang yang sedang menggendong anak atau berpegangan di angkutan umum.`,

            { h2: 'Tiga prinsip Microsoft Inclusive Design' },
            { w: 'cards', title: 'Ketuk tiap prinsip', items: [
                { tag: '1', front: 'Kenali pengucilan (exclusion).', backTag: 'Artinya', back: 'Pengucilan terjadi saat kita merancang dengan asumsi sendiri. Tanyakan: siapa yang tidak bisa memakai ini?' },
                { tag: '2', front: 'Belajar dari keragaman.', backTag: 'Artinya', back: 'Libatkan orang dengan kebutuhan berbeda sejak awal riset, bukan hanya di uji akhir.' },
                { tag: '3', front: 'Selesaikan untuk satu, perluas ke banyak.', backTag: 'Artinya', back: 'Subtitle dibuat untuk tunarungu, kini dipakai jutaan orang yang menonton tanpa suara.' },
            ] },

            { h2: 'Desain inklusif vs aksesibilitas' },
            { svg: 'versus', label: 'Dua hal yang saling melengkapi', left: { title: 'Aksesibilitas', items: ['Hasil yang bisa diukur', 'Standar seperti WCAG', 'Bisa diaudit: kontras, label, keyboard'] }, right: { title: 'Desain inklusif', items: ['Proses dan cara berpikir', 'Melibatkan beragam pengguna', 'Mencakup bahasa, budaya, ekonomi, perangkat'] } },

            { h2: 'Contoh penerapan di produk Indonesia' },
            { ul: ['<b>Koneksi dan perangkat:</b> aplikasi tetap berguna di ponsel RAM kecil dan jaringan 3G; ada mode hemat data.', '<b>Bahasa:</b> istilah sederhana, hindari jargon dan singkatan Inggris yang tidak perlu.', '<b>Literasi digital:</b> alur yang tidak mengandalkan ikon tanpa label.', '<b>Satu tangan:</b> tombol utama di area jempol.', '<b>Penglihatan:</b> teks bisa diperbesar tanpa merusak tata letak, kontras cukup.', '<b>Pembayaran:</b> pilihan selain kartu kredit, seperti transfer bank, QRIS, dan e-wallet.', '<b>Nama dan identitas:</b> formulir yang menerima nama satu kata, umum di Indonesia.'] },
            { callout: 'Banyak formulir menolak pengguna yang hanya memiliki satu nama karena kolom "nama belakang" wajib. Ini contoh pengucilan yang lahir dari asumsi perancangnya.', kind: 'warn', title: 'Contoh pengucilan sehari-hari' },
            { w: 'checklist', title: 'Checklist tim produk', items: ['Riset melibatkan pengguna dengan kebutuhan beragam.', 'Diuji dengan pembaca layar (TalkBack/VoiceOver) minimal untuk alur utama.', 'Semua fungsi bisa dipakai dengan keyboard.', 'Teks bisa diperbesar 200% tanpa terpotong.', 'Video punya subtitle.', 'Diuji di ponsel kelas bawah dan koneksi lambat.', 'Formulir menerima variasi nama, alamat, dan nomor telepon.', 'Ada lebih dari satu cara menyelesaikan tugas penting.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Orang yang menggendong bayi dan memakai ponsel dengan satu tangan adalah contoh keterbatasan...', options: ['Permanen', 'Sementara', 'Situasional'], answer: 2, why: 'Keterbatasan karena situasi saat itu.' },
                { q: 'Prinsip "selesaikan untuk satu, perluas ke banyak" contohnya...', options: ['Subtitle yang kini dipakai banyak orang', 'Menambah warna', 'Menghapus fitur'], answer: 0, why: 'Solusi untuk satu kebutuhan bermanfaat luas.' },
            ] },
        ],
        faq: [
            ['Apakah desain inklusif mahal?', 'Jauh lebih murah bila dilakukan sejak awal. Memperbaiki aksesibilitas setelah produk jadi biasanya jauh lebih mahal.'],
            ['Apakah ada kewajiban hukum di Indonesia?', 'UU Penyandang Disabilitas (UU 8/2016) menegaskan hak atas aksesibilitas, termasuk informasi dan komunikasi. Di banyak negara lain, aksesibilitas digital sudah menjadi syarat hukum untuk layanan tertentu.'],
            ['Bagaimana memulainya di tim kecil?', 'Mulai dari alur paling penting: uji dengan pembaca layar, keyboard, dan teks diperbesar. Perbaiki temuan terbesar dulu.'],
        ],
        sources: [
            ['Microsoft Inclusive Design', 'https://inclusive.microsoft.design/'],
            ['WHO Fact sheet: Disability', 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health'],
            ['Desain aksesibel untuk pembelajaran digital WCAG (artikel terkait)', 'https://muchson.web.id/artikel/desain-aksesibel-untuk-pembelajaran-digital-wcag/'],
        ],
    },

    {
        slug: 'voice-user-interface-merancang-interaksi-suara',
        title: 'Voice User Interface: Merancang Interaksi Suara',
        description: 'Dasar merancang voice user interface: beda dengan antarmuka layar, menulis dialog, menangani salah dengar, konfirmasi, kepribadian, dan menguji dengan pengguna.',
        date: D, category: C, tags: ['voice user interface', 'VUI', 'asisten suara', 'conversation design', 'UX'], cta: 'jasa',
        lead: 'Di layar, pengguna bisa melihat semua pilihan sekaligus. Dalam percakapan suara, semuanya berurutan dan hilang begitu diucapkan. Merancang antarmuka suara bukan sekadar mengubah teks menjadi suara, melainkan merancang percakapan yang terasa wajar, singkat, dan memaafkan kesalahan.',
        body: [
            { h2: 'Apa yang berbeda dari antarmuka layar' },
            { svg: 'versus', label: 'Layar dan suara', left: { title: 'Layar', items: ['Banyak pilihan terlihat sekaligus', 'Pengguna mengatur tempo sendiri', 'Mudah kembali dan membaca ulang'] }, right: { title: 'Suara', items: ['Informasi berurutan, cepat hilang', 'Beban ingatan lebih tinggi', 'Kesalahan pengenalan ucapan bisa terjadi'] } },

            { h2: 'Prinsip menulis dialog' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Singkat', front: 'Satu informasi utama per giliran.', backTag: 'Contoh', back: '"Pesanan Anda tiba besok antara jam 10 dan 12." Bukan paragraf status lengkap.' },
                { tag: 'Tanpa menu panjang', front: 'Hindari "Tekan atau ucapkan satu untuk..." yang panjang.', backTag: 'Contoh', back: '"Mau cek pesanan, ubah alamat, atau bicara dengan admin?" Maksimal tiga pilihan.' },
                { tag: 'Bahasa lisan', front: 'Tulis seperti orang bicara, bukan seperti teks.', backTag: 'Contoh', back: '"Oke, sudah saya catat" terdengar wajar; "Permintaan Anda telah berhasil diproses" terdengar seperti robot.' },
                { tag: 'Beri arah', front: 'Akhiri giliran dengan jelas apa yang bisa dilakukan berikutnya.', backTag: 'Contoh', back: '"Ada lagi yang bisa saya bantu?" atau langsung menutup bila tugas sudah selesai.' },
            ] },

            { h2: 'Menangani kesalahan' },
            `Pengenalan ucapan bisa salah, terutama dengan aksen, kebisingan, campuran bahasa, dan nama lokal. Rancang jalur pemulihan sejak awal.`,
            { table: { head: ['Situasi', 'Respons yang buruk', 'Respons yang lebih baik'], rows: [['Tidak terdengar', '"Maaf, saya tidak mengerti." (diulang terus)', 'Pertama: "Maaf, bisa diulang?" Kedua: beri contoh, "Misalnya, ucapkan cek pesanan."'], ['Tidak yakin', 'Langsung menjalankan', '"Maksud Anda Madiun, Jawa Timur?"'], ['Gagal berkali-kali', 'Mengulang tanpa akhir', 'Tawarkan jalur lain: kirim tautan, atau sambungkan ke manusia']] } },

            { h2: 'Konfirmasi: kapan perlu' },
            { ul: ['<b>Konfirmasi eksplisit</b> untuk tindakan berisiko atau mahal: "Transfer 500 ribu ke Budi. Benar?"', '<b>Konfirmasi implisit</b> untuk tindakan ringan: "Oke, alarm jam 6 pagi." Pengguna bisa mengoreksi bila salah.', 'Jangan mengonfirmasi segala hal; itu membuat percakapan lambat dan melelahkan.'] },

            { h2: 'Kepribadian dan konsistensi' },
            `Asisten suara selalu punya kesan kepribadian, disengaja atau tidak. Tentukan nada (ramah, ringkas, sopan) dan pertahankan di semua dialog. Untuk konteks Indonesia, perhatikan sapaan (Kak, Bapak/Ibu, Anda) yang sesuai pengguna.`,
            { h2: 'Menguji tanpa membangun dulu' },
            `Metode "Wizard of Oz": satu orang berperan sebagai sistem dan membacakan dialog dari naskah, sementara peserta berbicara seolah dengan mesin. Cara murah ini cepat menunjukkan bagian dialog yang membingungkan sebelum ada kode.`,
            { w: 'checklist', title: 'Periksa naskah dialog Anda', items: ['Setiap giliran singkat dengan satu informasi utama.', 'Pilihan maksimal tiga.', 'Ada respons untuk tidak terdengar, tidak yakin, dan gagal berulang.', 'Tindakan berisiko dikonfirmasi eksplisit.', 'Ada jalan keluar ke manusia atau kanal lain.', 'Diuji dengan dibacakan keras-keras dan dengan peserta.', 'Mencakup aksen dan nama lokal dalam data uji.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mengapa menu suara sebaiknya maksimal sekitar tiga pilihan?', options: ['Batas teknis', 'Pengguna harus mengingat pilihan yang sudah diucapkan', 'Agar lebih murah'], answer: 1, why: 'Informasi suara berurutan dan cepat hilang.' },
                { q: 'Transfer uang sebaiknya memakai konfirmasi...', options: ['Implisit', 'Eksplisit', 'Tanpa konfirmasi'], answer: 1, why: 'Tindakan berisiko perlu persetujuan jelas.' },
            ] },
        ],
        faq: [
            ['Apakah AI generatif mengubah desain suara?', 'Ya. Model bahasa membuat percakapan lebih fleksibel, tetapi prinsip singkat, konfirmasi, dan jalur pemulihan tetap penting, ditambah risiko jawaban yang mengarang.'],
            ['Bagaimana dengan campuran bahasa Indonesia dan Inggris?', 'Uji pengenalan ucapan dengan kalimat campuran yang memang dipakai pengguna, dan siapkan sinonim untuk istilah yang sering diucapkan berbeda.'],
            ['Apakah antarmuka suara inklusif?', 'Sangat membantu pengguna tunanetra dan yang tangannya sedang sibuk, tetapi menyulitkan pengguna tuli atau dengan gangguan bicara. Sediakan alternatif teks.'],
        ],
        sources: [
            ['Amazon Alexa: Design an Engaging Voice User Interface', 'https://developer.amazon.com/en-US/docs/alexa/workshops/build-an-engaging-skill/design-vui/index.html'],
            ['Amazon Alexa Design Guide (blog pengumuman)', 'https://developer.amazon.com/blogs/alexa/post/ea99c8a1-36fa-4778-bbc3-56a6cee6e3b9/announcing-the-amazon-alexa-voice-design-guide'],
            ['Chatbot AI layanan pelanggan (artikel terkait)', 'https://muchson.web.id/artikel/chatbot-ai-layanan-pelanggan-yang-tidak-mengecewakan/'],
        ],
    },

    {
        slug: 'dark-pattern-desain-menipu-dan-cara-menghindarinya',
        title: 'Dark Pattern: Desain yang Menipu dan Cara Menghindarinya',
        description: 'Kenali dark pattern di aplikasi dan toko online: jenisnya, contoh nyata, temuan riset 11 ribu situs belanja, aturan hukum, dan alternatif desain yang jujur.',
        date: D, category: C, tags: ['dark pattern', 'deceptive design', 'etika desain', 'UX', 'perlindungan konsumen'], cta: 'jasa',
        lead: 'Pernah berlangganan percobaan gratis lalu kesulitan membatalkannya? Atau melihat tulisan "tinggal 1 lagi!" yang tidak pernah berubah? Itu contoh dark pattern, istilah yang dicetuskan desainer Harry Brignull pada 2010 untuk desain yang sengaja menggiring pengguna melakukan sesuatu yang tidak mereka inginkan.',
        body: [
            { h2: 'Seberapa umum?' },
            `Mathur dan rekan dari Princeton (2019) memindai sekitar 53 ribu halaman produk dari sekitar 11 ribu situs belanja. Mereka menemukan 1.818 contoh dark pattern di 1.254 situs (sekitar 11%), dan situs yang lebih populer justru lebih sering memakainya. Mereka juga menemukan pihak ketiga yang menjual dark pattern sebagai layanan siap pasang.`,

            { h2: 'Jenis yang paling sering ditemui' },
            { w: 'cards', title: 'Ketuk untuk contoh dan alternatif jujur', items: [
                { tag: 'Urgensi palsu', front: 'Penghitung waktu mundur yang reset saat halaman dimuat ulang.', backTag: 'Alternatif', back: 'Tampilkan batas waktu promo yang nyata dan sama untuk semua orang.' },
                { tag: 'Kelangkaan palsu', front: '"Tinggal 2!" yang tidak berubah berhari-hari.', backTag: 'Alternatif', back: 'Tampilkan stok sebenarnya, atau jangan tampilkan sama sekali.' },
                { tag: 'Sulit membatalkan', front: 'Daftar dua klik, membatalkan harus menelepon pada jam kerja.', backTag: 'Alternatif', back: 'Pembatalan semudah pendaftaran, dari tempat yang sama.' },
                { tag: 'Biaya tersembunyi', front: 'Biaya layanan baru muncul di langkah terakhir checkout.', backTag: 'Alternatif', back: 'Tampilkan total harga sejak awal.' },
                { tag: 'Confirmshaming', front: '"Tidak, saya tidak suka hemat."', backTag: 'Alternatif', back: '"Tidak, terima kasih." Netral dan menghormati.' },
                { tag: 'Pilihan yang sudah dicentang', front: 'Asuransi atau newsletter otomatis tercentang.', backTag: 'Alternatif', back: 'Biarkan pengguna memilih sendiri secara aktif.' },
                { tag: 'Penyamaran iklan', front: 'Tombol "Unduh" palsu yang ternyata iklan.', backTag: 'Alternatif', back: 'Iklan diberi label jelas dan dibedakan secara visual.' },
                { tag: 'Nagging', front: 'Pop-up minta izin notifikasi setiap kali membuka aplikasi.', backTag: 'Alternatif', back: 'Tanya sekali pada saat yang relevan, hormati jawaban "tidak".' },
            ] },

            { h2: 'Mengapa merugikan bisnis juga' },
            { ul: ['Konversi jangka pendek naik, tetapi kepercayaan dan retensi turun.', 'Pelanggan yang merasa tertipu meninggalkan ulasan buruk dan bercerita ke orang lain.', 'Biaya layanan pelanggan naik karena keluhan dan permintaan refund.', 'Risiko hukum dan sanksi regulator.'] },

            { h2: 'Regulasi yang mulai tegas' },
            `Komisi Perdagangan Federal AS (FTC) menerbitkan laporan "Bringing Dark Patterns to Light" (2022) dan menindak beberapa perusahaan. Di Uni Eropa, Digital Services Act melarang platform online merancang antarmuka yang menipu atau memanipulasi pengguna. Di Indonesia, prinsip perlindungan konsumen dalam UU Perlindungan Konsumen dan UU Pelindungan Data Pribadi (terkait persetujuan pemrosesan data) relevan untuk praktik seperti biaya tersembunyi dan persetujuan yang tidak sah.`,
            { callout: 'Tes sederhana: apakah Anda nyaman bila pengguna tahu persis mengapa desain ini dibuat seperti itu? Bila jawabannya tidak, kemungkinan besar itu dark pattern.', kind: 'info', title: 'Tes kejujuran' },
            { w: 'checklist', title: 'Audit produk Anda', items: ['Total harga terlihat sebelum langkah terakhir.', 'Membatalkan langganan semudah mendaftar.', 'Tidak ada pilihan tambahan yang tercentang otomatis.', 'Stok dan batas waktu yang ditampilkan nyata.', 'Teks penolakan netral, tidak mempermalukan.', 'Iklan dan konten bersponsor diberi label.', 'Permintaan izin (notifikasi, lokasi) muncul saat relevan dan tidak berulang setelah ditolak.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: '"Tidak, saya lebih suka membayar mahal" sebagai tombol penolakan adalah contoh...', options: ['Confirmshaming', 'Biaya tersembunyi', 'Nagging'], answer: 0, why: 'Membuat pengguna merasa bersalah saat menolak.' },
                { q: 'Menurut Mathur dkk. (2019), situs yang lebih populer...', options: ['Lebih jarang memakai dark pattern', 'Lebih sering memakai dark pattern', 'Tidak berbeda'], answer: 1, why: 'Temuan mereka menunjukkan korelasi dengan popularitas.' },
            ] },
        ],
        faq: [
            ['Apakah semua teknik persuasi termasuk dark pattern?', 'Tidak. Menyorot manfaat, memberi rekomendasi yang relevan, atau pengingat keranjang yang jujur adalah persuasi yang sah. Dark pattern menipu, menyembunyikan, atau memaksa.'],
            ['Bagaimana bila atasan meminta dark pattern?', 'Ajukan data: risiko keluhan, refund, ulasan buruk, dan hukum. Tawarkan alternatif jujur yang bisa diuji dengan A/B test.'],
            ['Di mana melihat contoh lebih banyak?', 'Situs deceptive.design karya Harry Brignull mengumpulkan jenis dan contoh nyata.'],
        ],
        sources: [
            ['Mathur et al. (2019): Dark Patterns at Scale, Findings from a Crawl of 11K Shopping Websites', 'https://arxiv.org/abs/1907.07032'],
            ['Deceptive Design (Harry Brignull)', 'https://www.deceptive.design/'],
            ['FTC (2022): Bringing Dark Patterns to Light', 'https://www.ftc.gov/reports/bringing-dark-patterns-light'],
        ],
    },

    {
        slug: 'ux-writing-dan-microcopy-yang-membantu',
        title: 'UX Writing dan Microcopy: Kata-Kata yang Membantu Pengguna',
        description: 'Menulis microcopy yang jelas untuk tombol, pesan error, formulir, keadaan kosong, dan notifikasi, dengan contoh sebelum-sesudah dan panduan nada.',
        date: D, category: C, tags: ['UX writing', 'microcopy', 'pesan error', 'konten produk', 'copywriting UI'], cta: 'jasa',
        lead: 'Satu kata di tombol bisa menentukan apakah pengguna melanjutkan atau ragu. Pesan error yang jelas bisa mengubah frustrasi menjadi masalah yang selesai dalam lima detik. UX writing adalah merancang kata-kata di dalam produk agar pengguna tahu apa yang terjadi dan apa yang harus dilakukan.',
        body: [
            { h2: 'Prinsip dasar' },
            { ul: ['<b>Jelas</b> lebih penting daripada kreatif.', '<b>Ringkas:</b> pengguna memindai, bukan membaca.', '<b>Berguna:</b> setiap kata membantu pengguna bertindak.', '<b>Konsisten:</b> satu istilah untuk satu hal di seluruh produk.', '<b>Manusiawi:</b> nada yang sopan dan hangat, sesuai situasi.'] },

            { h2: 'Tombol: sebut tindakannya' },
            { table: { head: ['Kurang jelas', 'Lebih jelas'], rows: [['OK', 'Simpan alamat'], ['Kirim', 'Kirim pesanan'], ['Ya / Tidak (pada "Hapus file?")', 'Hapus file / Batal'], ['Klik di sini', 'Lihat cara mengukur PD'], ['Submit', 'Daftar kelas']] } },
            `Tombol yang menyebut tindakan bisa dipahami tanpa membaca kalimat pertanyaannya, dan juga lebih jelas bagi pengguna pembaca layar.`,

            { h2: 'Pesan error: apa yang salah dan cara memperbaikinya' },
            { w: 'cards', title: 'Ketuk untuk versi yang lebih baik', items: [
                { tag: 'Sebelum', front: '"Input tidak valid."', backTag: 'Sesudah', back: '"Nomor HP harus diawali 08 dan terdiri dari 10-13 angka."' },
                { tag: 'Sebelum', front: '"Error 500. Terjadi kesalahan."', backTag: 'Sesudah', back: '"Pesanan belum tersimpan karena gangguan di server kami. Coba lagi dalam beberapa menit. Isian Anda tidak hilang."' },
                { tag: 'Sebelum', front: '"Password salah!!!"', backTag: 'Sesudah', back: '"Email atau password tidak cocok. Lupa password?"' },
                { tag: 'Sebelum', front: '"Anda gagal mengunggah file."', backTag: 'Sesudah', back: '"File terlalu besar (12 MB). Maksimal 5 MB. Coba kompres atau pilih file lain."' },
            ] },
            { callout: 'Jangan salahkan pengguna ("Anda salah memasukkan..."). Fokus pada masalah dan solusinya. Letakkan pesan error dekat kolom yang bermasalah, bukan hanya di atas halaman.', kind: 'info', title: 'Nada pesan error' },

            { h2: 'Keadaan kosong (empty state)' },
            `Layar kosong adalah peluang membimbing. "Belum ada data" tidak membantu.`,
            { code: 'Kurang:  Belum ada kelas.\n\nLebih baik:\n  Belum ada kelas yang diikuti\n  Mulai dari kelas gratis "Scratch untuk Pemula", 2 pelajaran, 30 menit.\n  [Lihat kelas gratis]' },

            { h2: 'Formulir' },
            { ul: ['Label di atas kolom, bukan hanya placeholder yang hilang saat mengetik.', 'Jelaskan format sebelum pengguna salah: "Contoh: 0812 3456 7890".', 'Tandai kolom opsional, bukan hanya yang wajib.', 'Jelaskan alasan meminta data sensitif: "Nomor HP untuk info pengiriman, tidak untuk promosi."'] },

            { h2: 'Nada yang menyesuaikan situasi' },
            { table: { head: ['Situasi', 'Nada', 'Contoh'], rows: [['Berhasil', 'Hangat, singkat', '"Pesanan diterima. Kami kabari saat dikirim."'], ['Error', 'Tenang, membantu', '"Pembayaran belum berhasil. Saldo Anda tidak terpotong."'], ['Hal sensitif (kesehatan, uang)', 'Serius, jelas', '"Hasil ini bukan diagnosis. Konsultasikan dengan dokter mata."'], ['Onboarding', 'Menyemangati', '"Satu langkah lagi untuk mulai belajar."']] } },

            { h2: 'Membuat panduan istilah' },
            { w: 'builder', title: 'Glosarium produk', desc: 'Satu istilah untuk satu hal. Tambahkan ke dokumen tim.', fields: [
                { id: 'istilah', label: 'Istilah yang dipakai', value: 'Masuk' },
                { id: 'hindari', label: 'Istilah yang dihindari', value: 'Login, Sign in, Log masuk' },
                { id: 'arti', label: 'Arti', value: 'Proses pengguna mengakses akunnya' },
                { id: 'contoh', label: 'Contoh pemakaian', value: 'Masuk dengan email' },
            ], template: 'Istilah: {istilah}\nHindari: {hindari}\nArti: {arti}\nContoh: "{contoh}"' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Label tombol terbaik pada dialog "Hapus foto ini?"', options: ['Ya / Tidak', 'OK / Batal', 'Hapus foto / Batal'], answer: 2, why: 'Tombol menyebut tindakannya.' },
                { q: 'Pesan error yang baik berisi...', options: ['Kode error saja', 'Apa masalahnya dan cara memperbaikinya', 'Kesalahan pengguna'], answer: 1, why: 'Pengguna perlu tahu langkah berikutnya.' },
            ] },
        ],
        faq: [
            ['Siapa yang seharusnya menulis microcopy?', 'Idealnya UX writer atau content designer yang bekerja sama dengan desainer sejak awal. Di tim kecil, desainer atau product manager dengan panduan nada yang jelas.'],
            ['Bahasa Indonesia baku atau santai?', 'Sesuaikan dengan pengguna dan brand, lalu konsisten. Untuk layanan keuangan dan kesehatan, nada yang lebih formal dan jelas biasanya lebih dipercaya.'],
            ['Bolehkah AI membantu menulis microcopy?', 'Boleh untuk membuat alternatif. Pilih dan uji dengan pengguna, dan pastikan sesuai glosarium serta nada produk.'],
        ],
        sources: [
            ['Nielsen Norman Group: Error-Message Guidelines', 'https://www.nngroup.com/articles/error-message-guidelines/'],
            ['Mailchimp Content Style Guide', 'https://styleguide.mailchimp.com/'],
            ['10 heuristik usability Nielsen (artikel terkait)', 'https://muchson.web.id/artikel/sepuluh-heuristik-usability-nielsen-dengan-contoh/'],
        ],
    },
];
