const D = '2026-10-28';
const C = 'Teknologi Sehari-hari';

export default [
    {
        slug: 'akun-google-gmail-diretas-cara-memulihkan',
        title: 'Akun Google atau Gmail Diretas: Cara Memulihkan dan Mengamankan',
        description: 'Tanda akun Google atau Gmail diretas, langkah darurat memulihkan lewat jalur resmi Google, memeriksa perangkat dan aplikasi pihak ketiga, serta pengaturan agar tidak terulang.',
        date: D, category: C, tags: ['akun Google diretas', 'Gmail diretas', 'pemulihan akun Google', 'keamanan akun', '2FA'], cta: 'none',
        lead: 'Akun Google adalah kunci banyak hal: Gmail, foto, kontak, YouTube, Drive, bahkan login ke aplikasi lain. Bila akun ini diambil alih, dampaknya bisa luas. Artikel ini menjelaskan tanda-tanda akun diretas, langkah pemulihan lewat jalur resmi, dan pengaturan yang membuatnya jauh lebih sulit terulang.',
        body: [
            { h2: 'Tanda akun Google diretas' },
            { w: 'checklist', title: 'Periksa tanda-tanda ini', desc: 'Satu tanda saja sudah cukup alasan untuk segera memeriksa akun.', items: ['Notifikasi "login baru" dari perangkat atau lokasi yang tidak dikenal.', 'Kata sandi tiba-tiba tidak bisa dipakai.', 'Ada email terkirim yang tidak pernah Anda kirim.', 'Email pemulihan atau nomor HP pemulihan berubah.', 'Muncul aturan penerusan (forwarding) email ke alamat asing.', 'Ada aplikasi pihak ketiga baru yang punya akses ke akun.', 'Teman menerima pesan aneh atau tautan mencurigakan dari Anda.'] },

            { h2: 'Bila masih bisa masuk' },
            { ol: [
                'Buka <b>myaccount.google.com → Keamanan</b>, lalu jalankan <b>Pemeriksaan Keamanan</b> (Security Checkup).',
                '<b>Ganti kata sandi</b> dengan yang baru, panjang, dan belum pernah dipakai di tempat lain.',
                'Di <b>Perangkat Anda</b>, keluarkan perangkat yang tidak dikenal.',
                'Periksa <b>email dan nomor pemulihan</b>. Pastikan milik Anda.',
                'Di Gmail, periksa <b>Setelan → Penerusan</b> dan <b>Filter</b>. Hapus yang tidak Anda buat.',
                'Periksa <b>aplikasi pihak ketiga</b> yang punya akses ke akun, cabut yang tidak dikenal.',
                'Aktifkan <b>Verifikasi 2 Langkah</b> atau <b>passkey</b>.',
            ] },
            { callout: 'Peretas sering membuat aturan penerusan email diam-diam, sehingga mereka tetap menerima salinan email Anda (termasuk kode reset akun lain) setelah kata sandi diganti. Selalu periksa bagian ini.', kind: 'warn', title: 'Yang sering terlewat' },

            { h2: 'Bila tidak bisa masuk' },
            `Gunakan halaman pemulihan resmi Google di <b>accounts.google.com/signin/recovery</b>. Google akan menanyakan beberapa hal untuk memastikan Anda pemiliknya. Tips agar berhasil:`,
            { ul: [
                'Lakukan dari <b>perangkat dan lokasi yang biasa</b> Anda pakai, misalnya HP atau laptop di rumah.',
                'Jawab sebanyak mungkin pertanyaan; tebakan terdekat lebih baik daripada melewati.',
                'Gunakan kata sandi lama terakhir yang Anda ingat bila diminta.',
                'Periksa email dan nomor pemulihan untuk kode verifikasi.',
            ] },
            { callout: 'Google menyatakan tidak bekerja sama dengan layanan pihak ketiga yang menawarkan pemulihan akun berbayar. Nomor "CS Google" di media sosial atau iklan hampir pasti penipuan.', kind: 'bad', title: 'Waspada jasa pemulihan palsu' },

            { h2: 'Setelah pulih: amankan akun lain' },
            `Akun Google sering menjadi pintu ke akun lain. Setelah pulih:`,
            { ul: [
                'Ganti kata sandi akun lain yang memakai kata sandi sama.',
                'Periksa akun bank, e-wallet, dan media sosial yang terhubung ke email tersebut.',
                'Beri tahu kontak bila ada email penipuan yang terkirim dari akun Anda.',
                'Pertimbangkan pengelola kata sandi agar setiap akun punya kata sandi unik.',
            ] },

            { h2: 'Pencegahan: lapisan keamanan' },
            { svg: 'layers', label: 'Lapisan keamanan akun Google', items: [{ t: 'Kata sandi unik dan panjang', d: 'tidak dipakai di tempat lain' }, { t: 'Verifikasi 2 Langkah', d: 'perintah Google di HP atau aplikasi autentikator' }, { t: 'Passkey', d: 'login dengan sidik jari atau wajah, tahan phishing' }, { t: 'Info pemulihan terbaru', d: 'email dan nomor HP aktif' }, { t: 'Waspada phishing', d: 'tidak memasukkan kata sandi dari tautan email' }] },
            { w: 'quiz', title: 'Uji kewaspadaan', questions: [
                { q: 'Email "dari Google" berkata akun Anda akan dihapus kecuali login lewat tautan di email. Apa yang dilakukan?', options: ['Klik tautan dan login', 'Abaikan tautan, buka myaccount.google.com langsung dari browser', 'Balas email meminta penjelasan'], answer: 1, why: 'Selalu buka situs resmi dengan mengetik alamatnya sendiri, bukan lewat tautan di email.' },
                { q: 'Metode masuk mana yang paling tahan phishing?', options: ['Kode SMS', 'Passkey', 'Pertanyaan keamanan'], answer: 1, why: 'Passkey terikat ke situs asli, sehingga tidak bisa dipakai di situs palsu.' },
            ] },
        ],
        faq: [
            ['Bagaimana cara memulihkan akun Google yang diretas?', 'Gunakan halaman pemulihan resmi Google dari perangkat dan lokasi yang biasa Anda pakai, lalu ganti kata sandi dan periksa pengaturan keamanan.'],
            ['Apakah bisa menelepon Google untuk memulihkan akun?', 'Google tidak menyediakan pemulihan akun lewat telepon untuk akun pribadi. Hati-hati dengan nomor "CS Google" palsu.'],
            ['Apa yang diperiksa setelah akun kembali?', 'Perangkat yang login, email dan nomor pemulihan, penerusan dan filter Gmail, serta aplikasi pihak ketiga.'],
            ['Apa itu passkey?', 'Cara masuk tanpa kata sandi memakai sidik jari, wajah, atau PIN perangkat, yang lebih tahan terhadap phishing.'],
        ],
        sources: [
            ['Google: How to recover your Google Account or Gmail', 'https://support.google.com/accounts/answer/7682439'],
            ['Google: Secure a hacked or compromised Google Account', 'https://support.google.com/accounts/answer/6294825'],
            ['Google: Pemeriksaan Keamanan', 'https://myaccount.google.com/security-checkup'],
            ['FIDO Alliance: Passkeys', 'https://fidoalliance.org/passkeys/'],
        ],
    },

    {
        slug: 'data-pribadi-bocor-langkah-yang-harus-dilakukan',
        title: 'Data Pribadi Bocor: Langkah yang Harus Dilakukan',
        description: 'Apa yang harus dilakukan saat data pribadi bocor: cek apakah email Anda ada di kebocoran, prioritas akun yang diamankan, waspada penipuan lanjutan, dan hak Anda menurut UU PDP.',
        date: D, category: C, tags: ['data bocor', 'kebocoran data', 'UU PDP', 'perlindungan data pribadi', 'keamanan akun'], cta: 'none',
        lead: 'Berita kebocoran data muncul berkali-kali: nama, NIK, nomor HP, email, bahkan alamat. Kita tidak bisa menarik kembali data yang sudah bocor. Yang bisa dilakukan adalah memperkecil dampaknya: mengamankan akun penting dan mewaspadai penipuan yang memanfaatkan data itu.',
        body: [
            { h2: 'Kenapa data bocor berbahaya?' },
            `Data bocor jarang dipakai sendirian. Penipu menggabungkannya untuk membuat penipuan terdengar meyakinkan: "Bapak Budi, nasabah bank X dengan NIK 35xx, akun Anda akan diblokir..." Data yang tepat membuat korban percaya. Kebocoran kata sandi lebih berbahaya lagi karena bisa langsung dipakai mencoba masuk ke akun lain (<i>credential stuffing</i>).`,
            { table: { head: ['Data yang bocor', 'Risiko utama'], rows: [
                ['Email dan kata sandi', 'Akun diambil alih, terutama bila kata sandi dipakai ulang'],
                ['Nomor HP', 'Spam, telepon penipuan, upaya mengambil alih WhatsApp'],
                ['NIK dan KK', 'Penyalahgunaan identitas, misalnya pendaftaran layanan tanpa izin'],
                ['Alamat dan tanggal lahir', 'Penipuan yang terdengar meyakinkan'],
                ['Data rekening atau kartu', 'Transaksi tidak sah'],
            ] } },

            { h2: 'Cek apakah email Anda pernah bocor' },
            `Situs <b>Have I Been Pwned</b> (haveibeenpwned.com), dikelola peneliti keamanan Troy Hunt, mengumpulkan data kebocoran publik. Masukkan email Anda untuk melihat kebocoran mana yang memuatnya. Beberapa pengelola kata sandi dan peramban juga punya fitur pemeriksaan kata sandi yang bocor.`,
            { callout: 'Hasil "tidak ditemukan" tidak menjamin data Anda aman, karena tidak semua kebocoran terdata. Tetap terapkan langkah pencegahan.', kind: 'info', title: 'Catatan' },

            { h2: 'Langkah prioritas' },
            { w: 'checklist', title: 'Rencana aksi setelah kebocoran', desc: 'Kerjakan dari atas. Progres tersimpan di browser ini.', items: [
                'Ganti kata sandi email utama dan aktifkan verifikasi 2 langkah.',
                'Ganti kata sandi akun bank, e-wallet, dan marketplace; aktifkan 2FA.',
                'Ganti kata sandi akun lain yang memakai kata sandi sama.',
                'Aktifkan verifikasi dua langkah WhatsApp.',
                'Periksa mutasi rekening dan riwayat transaksi e-wallet.',
                'Waspadai telepon, SMS, dan email yang menyebut data pribadi Anda.',
                'Jangan pernah memberi kode OTP kepada siapa pun.',
                'Pertimbangkan pengelola kata sandi untuk kata sandi unik di setiap akun.',
            ] },

            { h2: 'Waspada penipuan lanjutan' },
            { svg: 'flow', label: 'Pola penipuan memanfaatkan data bocor', steps: [{ t: 'Kontak awal', d: 'menyebut nama, NIK, atau bank' }, { t: 'Membangun panik', d: 'akun diblokir, tagihan, hadiah' }, { t: 'Meminta aksi', d: 'klik tautan, pasang aplikasi' }, { t: 'Meminta OTP', d: 'atau data kartu' }], caption: 'Penipu terdengar meyakinkan karena memegang data asli Anda. Lembaga resmi tidak meminta OTP atau PIN.' },

            { h2: 'Hak Anda menurut UU PDP' },
            `Indonesia memiliki <b>Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</b>. Undang-undang ini mengatur hak subjek data (Anda) dan kewajiban pengendali data (perusahaan atau lembaga yang menyimpan data). Di antaranya, pengendali data wajib menjaga keamanan data dan memberi pemberitahuan bila terjadi kegagalan pelindungan data pribadi. Sebagai subjek data, Anda punya hak antara lain mendapat informasi tentang pemrosesan data, mengakses dan memperbaiki data, serta menuntut ganti rugi atas pelanggaran sesuai ketentuan.`,
            { callout: 'Bila Anda menerima pemberitahuan kebocoran dari sebuah layanan, baca isinya dengan teliti: data apa yang bocor, kapan, dan langkah apa yang disarankan. Simpan pemberitahuan itu sebagai bukti.', kind: 'good', title: 'Simpan buktinya' },

            { h2: 'Kebiasaan untuk mengurangi dampak kebocoran berikutnya' },
            { ul: [
                '<b>Kata sandi unik di setiap akun.</b> Satu kebocoran tidak membuka akun lain.',
                '<b>Bagikan data seperlunya.</b> Jangan unggah foto KTP sembarangan; beri tanda air bila harus mengirim.',
                '<b>Pisahkan email</b> untuk akun penting dan untuk pendaftaran promo.',
                '<b>Hapus akun lama</b> yang tidak dipakai lagi.',
            ] },
        ],
        faq: [
            ['Bagaimana cara mengecek apakah data saya bocor?', 'Untuk email, periksa di haveibeenpwned.com atau fitur pemeriksaan kata sandi di pengelola kata sandi dan peramban.'],
            ['Apa yang pertama dilakukan saat data bocor?', 'Ganti kata sandi email utama dan akun keuangan, aktifkan verifikasi dua langkah, lalu waspadai penipuan yang memakai data Anda.'],
            ['Apakah NIK yang bocor bisa disalahgunakan?', 'Bisa dipakai untuk penipuan yang meyakinkan atau pendaftaran layanan tanpa izin. Waspadai kontak yang menyebut NIK Anda dan jangan beri OTP.'],
            ['Apa itu UU PDP?', 'Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi yang mengatur hak pemilik data dan kewajiban pihak yang memproses data.'],
        ],
        sources: [
            ['UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (JDIH BPK)', 'https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022'],
            ['Have I Been Pwned', 'https://haveibeenpwned.com/'],
            ['OJK Indonesia Anti-Scam Centre', 'https://iasc.ojk.go.id/'],
        ],
    },

    {
        slug: 'tertipu-online-langkah-darurat-dan-cara-melapor',
        title: 'Tertipu Online? Langkah Darurat dan Cara Melapor',
        description: 'Langkah darurat setelah tertipu transfer atau belanja online: hubungi bank, lapor ke Indonesia Anti-Scam Centre OJK, CekRekening.id, polisi, dan cara menyimpan bukti yang benar.',
        date: D, category: C, tags: ['tertipu online', 'lapor penipuan', 'IASC OJK', 'cek rekening penipu', 'penipuan transfer'], cta: 'none',
        lead: 'Sudah transfer, barang tidak datang, dan nomor penjual tidak bisa dihubungi. Rasa panik dan malu sering membuat korban diam. Padahal dalam kasus penipuan transfer, kecepatan melapor sangat menentukan: semakin cepat rekening pelaku diblokir, semakin besar peluang dana tertahan.',
        body: [
            { h2: 'Langkah darurat dalam jam pertama' },
            { svg: 'timeline', label: 'Urutan langkah darurat', events: [['Menit 0', 'Berhenti berkomunikasi', 'Jangan transfer lagi, jangan beri OTP'], ['Menit 10', 'Hubungi bank Anda', 'Minta pemblokiran rekening tujuan'], ['Jam 1', 'Lapor ke IASC', 'iasc.ojk.go.id, lampirkan bukti'], ['Hari 1', 'Laporkan rekening dan nomor', 'CekRekening.id, platform, operator'], ['Hari 1-3', 'Lapor polisi', 'Bawa bukti lengkap']] },
            { ol: [
                '<b>Hentikan komunikasi</b> dengan pelaku. Jangan tergoda "biaya tambahan agar uang kembali" karena itu penipuan lanjutan.',
                '<b>Hubungi bank atau penyedia e-wallet Anda</b> lewat nomor resmi di kartu atau aplikasi. Jelaskan bahwa Anda korban penipuan dan minta rekening tujuan ditindaklanjuti.',
                '<b>Laporkan ke Indonesia Anti-Scam Centre (IASC)</b> milik OJK di iasc.ojk.go.id. IASC dibentuk untuk mempercepat penanganan penipuan di sektor keuangan, termasuk pemblokiran rekening.',
                '<b>Laporkan rekening pelaku</b> di CekRekening.id agar orang lain bisa mengecek sebelum transfer.',
                '<b>Lapor ke polisi</b> dengan membawa bukti.',
            ] },
            { callout: 'IASC menerima laporan hanya melalui situs resminya. OJK pernah memperingatkan adanya situs palsu yang mengatasnamakan IASC. Verifikasi lewat kontak OJK 157 bila ragu.', kind: 'warn', title: 'Hati-hati situs palsu' },

            { h2: 'Bukti yang perlu disimpan' },
            { w: 'checklist', title: 'Kumpulkan bukti', desc: 'Simpan semuanya dalam satu folder sebelum melapor.', items: ['Bukti transfer (struk atau tangkapan layar dengan nomor referensi).', 'Nomor rekening, nama bank, dan nama pemilik rekening tujuan.', 'Tangkapan layar percakapan lengkap, termasuk nomor atau akun pelaku.', 'Tautan iklan, toko, atau profil media sosial pelaku.', 'Tanggal dan jam kejadian.', 'Kronologi singkat dalam tulisan.'] },
            { w: 'builder', title: 'Kerangka kronologi', desc: 'Kronologi yang rapi mempercepat proses laporan.', fields: [
                { id: 'tgl', label: 'Tanggal dan jam', placeholder: 'mis. 12 Oktober 2026, 14.20' },
                { id: 'awal', label: 'Bagaimana kontak bermula', placeholder: 'mis. melihat iklan HP murah di media sosial', long: true },
                { id: 'janji', label: 'Apa yang dijanjikan pelaku', placeholder: 'mis. HP dikirim setelah transfer', long: true },
                { id: 'transfer', label: 'Transfer yang dilakukan', placeholder: 'mis. Rp3.200.000 ke rekening Bank X a.n. ...' },
                { id: 'akhir', label: 'Apa yang terjadi setelahnya', placeholder: 'mis. nomor diblokir, barang tidak dikirim', long: true },
            ], template: 'KRONOLOGI PENIPUAN\nWaktu: {tgl}\n1. Awal kontak: {awal}\n2. Janji pelaku: {janji}\n3. Transfer: {transfer}\n4. Setelahnya: {akhir}\nBukti terlampir: bukti transfer, tangkapan layar percakapan, profil pelaku.' },

            { h2: 'Ke mana melapor, untuk apa' },
            { table: { head: ['Tujuan', 'Untuk'], rows: [
                ['Bank atau e-wallet Anda', 'Penanganan transaksi dan permintaan blokir rekening tujuan'],
                ['IASC OJK (iasc.ojk.go.id)', 'Penanganan penipuan sektor keuangan secara terpadu'],
                ['Kontak OJK 157', 'Informasi dan verifikasi layanan OJK'],
                ['CekRekening.id (Komdigi)', 'Melaporkan dan mengecek rekening yang terindikasi penipuan'],
                ['Kepolisian', 'Laporan pidana; bisa di kantor polisi terdekat'],
                ['Platform (marketplace, media sosial)', 'Melaporkan akun atau toko pelaku'],
            ] } },

            { h2: 'Mencegah lain kali' },
            { w: 'quiz', title: 'Cek sebelum transfer', questions: [
                { q: 'Penjual di media sosial menawarkan HP baru separuh harga, minta transfer langsung ke rekening pribadi. Tanda bahaya terbesar?', options: ['Harganya terlalu murah dan pembayaran di luar sistem marketplace', 'Fotonya bagus', 'Penjualnya ramah'], answer: 0, why: 'Harga jauh di bawah pasar dan transaksi di luar sistem yang punya perlindungan pembeli adalah pola penipuan yang sangat umum.' },
                { q: 'Sebelum transfer ke rekening orang yang belum dikenal, sebaiknya ...', options: ['Cek rekening di CekRekening.id dan pakai rekening bersama atau sistem pembayaran marketplace', 'Langsung transfer agar tidak kehabisan', 'Minta foto KTP penjual saja'], answer: 0, why: 'Foto KTP mudah dipalsukan. Pembayaran lewat sistem yang punya perlindungan jauh lebih aman.' },
            ] },
            { callout: 'Rasa malu membuat banyak korban tidak melapor. Padahal laporan Anda membantu pemblokiran rekening pelaku dan mencegah korban berikutnya. Penipu modern sangat terlatih; siapa pun bisa menjadi korban.', kind: 'good', title: 'Melapor itu penting' },
        ],
        faq: [
            ['Apa yang harus dilakukan pertama kali setelah tertipu transfer?', 'Hentikan komunikasi dengan pelaku, segera hubungi bank Anda lewat nomor resmi, lalu laporkan ke Indonesia Anti-Scam Centre OJK.'],
            ['Apa itu IASC OJK?', 'Indonesia Anti-Scam Centre, pusat penanganan penipuan sektor keuangan yang dikoordinasikan OJK. Laporan disampaikan lewat iasc.ojk.go.id.'],
            ['Apakah uang bisa kembali?', 'Tidak selalu, tetapi peluangnya lebih besar bila rekening pelaku cepat diblokir sebelum dana dipindahkan. Karena itu kecepatan melapor penting.'],
            ['Bagaimana mengecek rekening penipu?', 'Gunakan CekRekening.id untuk melihat apakah rekening pernah dilaporkan. Hasil bersih tidak menjamin aman, tetap waspada.'],
        ],
        sources: [
            ['OJK: Indonesia Anti-Scam Centre (IASC)', 'https://iasc.ojk.go.id/'],
            ['OJK: soft launching IASC oleh Satgas PASTI', 'https://ojk.go.id/id/berita-dan-kegiatan/info-terkini/Pages/Tingkatkan-Pelindungan-Konsumen-Satgas-PASTI-Lakukan-Soft-Launching-IASC.aspx'],
            ['CekRekening.id (Komdigi)', 'https://cekrekening.id/'],
            ['JDIH Komdigi: infografis CekRekening.id', 'https://jdih.komdigi.go.id/infografis/view/57'],
        ],
    },

    {
        slug: 'cara-cek-imei-hp-terdaftar-resmi',
        title: 'Cara Cek IMEI HP Terdaftar Resmi dan Kenapa Penting',
        description: 'Apa itu IMEI, cara melihat nomor IMEI di HP, cara mengecek status pendaftarannya lewat layanan resmi terbaru, aturan HP dari luar negeri, dan tips membeli HP bekas.',
        date: D, category: C, tags: ['cek IMEI', 'IMEI terdaftar', 'IMEI Kemenperin', 'IMEI Bea Cukai', 'beli HP bekas'], cta: 'none',
        lead: 'Sejak 15 September 2020, ponsel dengan IMEI yang tidak terdaftar di Indonesia diblokir dari jaringan seluler. Artinya HP masih menyala, tetapi tidak bisa menelepon atau memakai data seluler dengan kartu operator Indonesia. Bila Anda membeli HP, terutama bekas atau dari luar negeri, memeriksa IMEI adalah langkah wajib.',
        body: [
            { h2: 'Apa itu IMEI?' },
            `<b>IMEI</b> (International Mobile Equipment Identity) adalah nomor 15 digit yang menjadi identitas unik setiap perangkat seluler, seperti nomor rangka pada kendaraan. HP dengan dua slot SIM biasanya punya dua IMEI. Pemerintah memakai IMEI untuk memastikan perangkat yang beredar adalah perangkat resmi, sekaligus menekan peredaran ponsel ilegal.`,

            { h2: 'Cara melihat nomor IMEI' },
            { ul: [
                '<b>Ketik *#06#</b> di aplikasi telepon. Nomor IMEI langsung muncul.',
                '<b>Pengaturan HP</b>: biasanya di Tentang ponsel (Android) atau Pengaturan → Umum → Mengenai (iPhone).',
                '<b>Dus atau kotak HP</b>: tercetak pada stiker.',
                '<b>Laci SIM</b> pada beberapa model.',
            ] },
            { callout: 'Cocokkan IMEI di layar (*#06#) dengan IMEI di dus. Bila berbeda, HP mungkin bukan pasangan dusnya, atau pernah diperbaiki dengan komponen lain. Tanyakan ke penjual.', kind: 'warn', title: 'Tips saat membeli' },

            { h2: 'Cara mengecek status pendaftaran IMEI' },
            `Dulu masyarakat bisa mengecek di situs Kementerian Perindustrian (imei.kemenperin.go.id). Pemberitaan pada 2025 menyebut layanan cek publik di situs itu tidak lagi tersedia, dan masyarakat diarahkan ke layanan cek IMEI di situs <b>Bea Cukai</b>. Karena layanan bisa berubah, gunakan langkah umum berikut dan selalu pastikan alamat situsnya resmi (berakhiran .go.id):`,
            { ol: [
                'Siapkan nomor IMEI 15 digit dari *#06#.',
                'Buka layanan cek IMEI resmi pemerintah (saat ini melalui situs Bea Cukai di beacukai.go.id).',
                'Masukkan nomor IMEI dan ikuti verifikasi.',
                'Baca hasilnya: terdaftar atau tidak terdaftar.',
            ] },
            { callout: 'Jangan mengecek IMEI di situs atau aplikasi pihak ketiga yang meminta data pribadi atau pembayaran. Layanan cek IMEI pemerintah tidak memungut biaya.', kind: 'bad', title: 'Hindari situs abal-abal' },

            { h2: 'HP dari luar negeri' },
            `HP yang dibeli atau dibawa dari luar negeri perlu didaftarkan IMEI-nya agar bisa dipakai dengan kartu operator Indonesia. Pendaftaran dilakukan melalui prosedur Bea Cukai, baik saat kedatangan di bandara maupun secara daring sesuai ketentuan yang berlaku, dan bisa dikenakan bea masuk serta pajak tergantung nilai barang. Aturan rinci dapat berubah, jadi periksa situs Bea Cukai sebelum bepergian.`,

            { h2: 'Daftar cek membeli HP bekas' },
            { w: 'checklist', title: 'Sebelum membayar HP bekas', desc: 'Centang yang sudah dicek.', items: ['IMEI di *#06# sama dengan IMEI di dus.', 'Status IMEI terdaftar di layanan resmi.', 'Uji telepon dan data seluler dengan kartu SIM Anda sendiri.', 'Akun Google atau Apple ID pemilik lama sudah dikeluarkan (tidak terkunci FRP atau Activation Lock).', 'Kesehatan baterai, kamera, speaker, mikrofon, dan layar diperiksa.', 'Ada nota atau bukti pembelian dari penjual.', 'Transaksi dilakukan di tempat aman atau lewat sistem yang punya perlindungan pembeli.'] },
            { w: 'quiz', title: 'Cek pemahaman', questions: [
                { q: 'HP dengan IMEI tidak terdaftar ...', options: ['Tidak bisa menyala sama sekali', 'Tetap menyala tetapi tidak bisa memakai jaringan seluler operator Indonesia', 'Bisa dipakai normal'], answer: 1, why: 'Pemblokiran IMEI menyasar akses jaringan seluler. Wi-Fi umumnya tetap bisa dipakai.' },
                { q: 'Cara tercepat melihat IMEI di HP?', options: ['Mengetik *#06# di aplikasi telepon', 'Membuka aplikasi kamera', 'Menelepon operator'], answer: 0, why: 'Kode *#06# menampilkan IMEI di hampir semua ponsel.' },
            ] },
        ],
        faq: [
            ['Bagaimana cara cek IMEI HP?', 'Ketik *#06# untuk melihat nomornya, lalu cek statusnya di layanan cek IMEI resmi pemerintah. Pemberitaan terbaru mengarahkan ke situs Bea Cukai.'],
            ['Apakah imei.kemenperin.go.id masih bisa dipakai?', 'Pemberitaan 2025 menyebut layanan cek publik di situs Kemenperin tidak lagi tersedia dan diarahkan ke situs Bea Cukai. Selalu cek informasi resmi terbaru.'],
            ['Apa akibat IMEI tidak terdaftar?', 'Perangkat tidak bisa memakai jaringan seluler operator Indonesia, walau masih bisa menyala dan memakai Wi-Fi.'],
            ['Bagaimana mendaftarkan IMEI HP dari luar negeri?', 'Melalui prosedur Bea Cukai sesuai ketentuan yang berlaku, dengan kemungkinan bea dan pajak tergantung nilai barang.'],
        ],
        sources: [
            ['Kompas TV: cara cek IMEI HP terdaftar atau tidak', 'https://www.kompas.tv/info-publik/618240/cara-cek-imei-hp-terdaftar-atau-tidak-di-kemenperin'],
            ['Direktorat Jenderal Bea dan Cukai', 'https://www.beacukai.go.id/'],
            ['CNBC Indonesia: blokir IMEI dan cara cek', 'https://www.cnbcindonesia.com/tech/20200213052041-37-137475/blokir-imei-mulai-diujicobakan-cek-hp-di-kemenperingoid'],
        ],
    },

    {
        slug: 'qris-cara-kerja-dan-tips-aman-membayar',
        title: 'QRIS: Cara Kerja, Keuntungan, dan Tips Aman Membayar',
        description: 'Apa itu QRIS dan bagaimana cara kerjanya, kenapa satu kode QR bisa dibayar dari banyak aplikasi, modus penipuan QR palsu, dan langkah aman sebelum menekan tombol bayar.',
        date: D, category: C, tags: ['QRIS', 'pembayaran QR', 'dompet digital', 'penipuan QRIS', 'Bank Indonesia'], cta: 'none',
        lead: 'Dari warung kopi sampai kotak amal masjid, kode QRIS kini ada di mana-mana. Cukup pindai, masukkan nominal, bayar. Tapi kemudahan ini juga dimanfaatkan penipu, misalnya dengan menempel stiker QR palsu di atas QR asli. Artikel ini menjelaskan cara kerja QRIS dan kebiasaan sederhana agar pembayaran tetap aman.',
        body: [
            { h2: 'Apa itu QRIS?' },
            `<b>QRIS</b> (Quick Response Code Indonesian Standard, dibaca "kris") adalah standar kode QR nasional untuk pembayaran yang diluncurkan Bank Indonesia bersama Asosiasi Sistem Pembayaran Indonesia (ASPI) pada 17 Agustus 2019, dan berlaku secara nasional mulai 1 Januari 2020. Sebelum ada QRIS, pedagang harus memajang banyak kode QR dari berbagai aplikasi. Dengan QRIS, satu kode bisa dibayar dari aplikasi bank atau dompet digital mana pun yang sudah mendukung QRIS.`,
            { svg: 'flow', label: 'Cara kerja pembayaran QRIS', steps: [{ t: 'Pindai QR', d: 'dengan aplikasi bank atau e-wallet' }, { t: 'Cek nama merchant', d: 'muncul di layar sebelum bayar' }, { t: 'Masukkan nominal', d: 'untuk QR statis' }, { t: 'Konfirmasi PIN', d: 'atau biometrik' }, { t: 'Dana diteruskan', d: 'ke akun merchant' }], caption: 'Kode QR hanya berisi data tujuan pembayaran. Uang tidak berpindah sampai Anda mengonfirmasi.' },

            { h2: 'QR statis dan QR dinamis' },
            { table: { head: ['Jenis', 'Seperti apa', 'Nominal'], rows: [
                ['Statis', 'Dicetak dan ditempel di meja kasir', 'Pembeli mengetik sendiri'],
                ['Dinamis', 'Muncul di layar mesin kasir atau aplikasi, berubah tiap transaksi', 'Sudah terisi otomatis'],
            ] } },

            { h2: 'Modus penipuan yang perlu diwaspadai' },
            { w: 'cards', title: 'Ketuk untuk melihat cara menghindarinya', items: [
                { tag: 'Modus', front: 'Stiker QR palsu ditempel menutupi QR asli di toko atau kotak amal.', backTag: 'Cara aman', back: 'Selalu baca nama merchant di layar sebelum membayar. Bila nama tidak sesuai, jangan lanjutkan dan beri tahu pemilik.' },
                { tag: 'Modus', front: 'QR dikirim lewat chat untuk "verifikasi" atau "menerima hadiah".', backTag: 'Cara aman', back: 'Memindai QR pembayaran berarti Anda yang membayar, bukan menerima. Hadiah tidak perlu dibayar.' },
                { tag: 'Modus', front: 'Kode QR yang membuka tautan situs, bukan aplikasi pembayaran.', backTag: 'Cara aman', back: 'QRIS dipindai dari aplikasi bank atau e-wallet, bukan dari kamera biasa yang membuka situs. Jangan masukkan data login di situs dari QR.' },
                { tag: 'Modus', front: 'Pembeli palsu menunjukkan bukti bayar editan.', backTag: 'Cara aman (untuk pedagang)', back: 'Cek notifikasi masuk di aplikasi atau mutasi rekening, jangan hanya melihat layar HP pembeli.' },
            ] },
            { callout: 'Kebiasaan paling penting: setelah memindai, berhenti sejenak dan baca nama penerima di layar. Pastikan cocok dengan nama toko sebelum menekan bayar.', kind: 'good', title: 'Satu detik yang menyelamatkan' },

            { h2: 'Untuk pedagang dan UMKM' },
            { w: 'checklist', title: 'Kebiasaan aman pedagang', desc: 'Centang yang sudah diterapkan.', items: ['Periksa stiker QRIS di toko setiap hari; pastikan tidak ditempel stiker lain.', 'Laminasi atau pasang QR di tempat yang terlihat kasir.', 'Selalu cek notifikasi dana masuk di aplikasi, bukan layar pembeli.', 'Aktifkan notifikasi transaksi masuk.', 'Jangan membagikan PIN atau OTP akun merchant.', 'Simpan riwayat transaksi untuk pembukuan.'] },

            { h2: 'Hitung keuntungan memakai QRIS untuk usaha' },
            { w: 'calc', title: 'Waktu kasir yang dihemat', desc: 'Perkiraan kasar waktu yang dihemat dari tidak perlu menghitung uang kembalian.', inputs: [
                { id: 'trx', label: 'Transaksi per hari', value: 80, min: 10, max: 500, step: 10 },
                { id: 'persen', label: 'Persentase yang bayar pakai QRIS', value: 40, min: 0, max: 100, step: 5 },
                { id: 'detik', label: 'Detik yang dihemat per transaksi', value: 20, min: 5, max: 60, step: 5 },
            ], outputs: [
                { label: 'Waktu dihemat per bulan', expr: 'trx * persen / 100 * detik * 30 / 3600', fmt: 'num', unit: 'jam', big: true },
                { label: 'Transaksi tanpa uang tunai per bulan', expr: 'trx * persen / 100 * 30', fmt: 'int', unit: 'transaksi' },
            ] },
            `Selain waktu, QRIS mengurangi risiko uang palsu dan memudahkan pencatatan. Biaya layanan (MDR) untuk pedagang mengikuti ketentuan Bank Indonesia yang bisa berbeda menurut jenis usaha dan nilai transaksi, jadi tanyakan ke penyedia QRIS Anda.`,
        ],
        faq: [
            ['Apa itu QRIS?', 'Standar kode QR nasional untuk pembayaran dari Bank Indonesia dan ASPI, sehingga satu kode bisa dibayar dari berbagai aplikasi bank dan dompet digital.'],
            ['Kapan QRIS mulai berlaku?', 'Diluncurkan 17 Agustus 2019 dan berlaku secara nasional mulai 1 Januari 2020.'],
            ['Bagaimana menghindari penipuan QR palsu?', 'Selalu periksa nama merchant yang muncul di layar sebelum membayar, dan jangan memindai QR yang dikirim orang tak dikenal untuk "hadiah".'],
            ['Apakah pembeli dikenai biaya saat bayar QRIS?', 'Umumnya biaya layanan dibebankan kepada pedagang sesuai ketentuan, bukan kepada pembeli. Pedagang tidak boleh sembarangan membebankannya, cek ketentuan terbaru.'],
        ],
        sources: [
            ['Bank Indonesia', 'https://www.bi.go.id/'],
            ['UKM Indonesia: QRIS, satu QR code untuk semua pembayaran', 'https://ukmindonesia.id/baca-deskripsi-posts/qris-satu-qr-code-untuk-semua-pembayaran'],
            ['Kontan: QRIS resmi meluncur', 'https://keuangan.kontan.co.id/news/qris-resmi-meluncur-ini-biaya-transaksi-yang-harus-ditanggung-merchant'],
            ['OJK Indonesia Anti-Scam Centre', 'https://iasc.ojk.go.id/'],
        ],
    },

    {
        slug: 'hp-disadap-atau-kena-virus-tanda-dan-cara-cek',
        title: 'HP Disadap atau Kena Virus? Tanda dan Cara Mengeceknya',
        description: 'Tanda HP terkena malware atau aplikasi penyadap (stalkerware), cara memeriksa di Android dan iPhone, langkah membersihkan dengan aman, dan cara mencegahnya, tanpa panik berlebihan.',
        date: D, category: C, tags: ['HP disadap', 'HP kena virus', 'stalkerware', 'malware Android', 'keamanan HP'], cta: 'none',
        lead: 'Baterai cepat panas, iklan muncul di mana-mana, atau seseorang seolah tahu isi chat Anda. Wajar bila mulai curiga HP disadap atau terkena virus. Banyak gejala sebenarnya punya penyebab biasa, tetapi ada tanda-tanda yang memang perlu ditanggapi serius. Artikel ini membantu membedakannya dan memberi langkah pemeriksaan yang aman.',
        body: [
            { h2: 'Jenis ancaman yang umum' },
            { table: { head: ['Jenis', 'Apa yang dilakukan', 'Biasanya masuk lewat'], rows: [
                ['Adware', 'Menampilkan iklan berlebihan, membuka situs sendiri', 'Aplikasi gratis tidak resmi, APK modifikasi'],
                ['Trojan dan pencuri data', 'Mencuri SMS, OTP, data login', 'File APK lewat chat (undangan, resi, tagihan palsu)'],
                ['Stalkerware', 'Memantau lokasi, chat, dan aktivitas korban diam-diam', 'Dipasang orang yang pernah memegang HP Anda'],
                ['Phishing', 'Mencuri kata sandi lewat situs palsu', 'Tautan di SMS, email, chat'],
            ] } },

            { h2: 'Tanda-tanda yang perlu dicurigai' },
            { w: 'checklist', title: 'Periksa gejala', desc: 'Gejala tunggal sering punya penyebab biasa. Beberapa gejala bersamaan perlu ditindaklanjuti.', items: ['Iklan muncul di luar aplikasi, bahkan di layar utama.', 'Ada aplikasi asing yang tidak pernah Anda pasang, kadang tanpa ikon.', 'Aplikasi meminta izin aksesibilitas atau admin perangkat tanpa alasan jelas.', 'SMS atau OTP masuk yang tidak Anda minta, atau OTP hilang.', 'Pengaturan keamanan berubah sendiri.', 'Ada orang yang tahu informasi dari chat atau lokasi Anda tanpa Anda beri tahu.', 'Kuota data dan baterai terkuras jauh di atas biasanya tanpa penjelasan.'] },
            { callout: 'Baterai boros dan HP panas paling sering disebabkan baterai menua, sinyal lemah, atau aplikasi biasa yang bermasalah, bukan penyadap. Lihat gejala lain sebelum menyimpulkan.', kind: 'info', title: 'Jangan langsung panik' },

            { h2: 'Cara memeriksa di Android' },
            { ol: [
                '<b>Periksa daftar aplikasi</b> di Setelan → Aplikasi. Cari nama asing, aplikasi tanpa ikon, atau nama generik seperti "System Service" yang bukan bawaan.',
                '<b>Periksa izin aksesibilitas</b> (Setelan → Aksesibilitas). Malware sering meminta izin ini untuk membaca layar.',
                '<b>Periksa aplikasi admin perangkat</b> (cari "admin perangkat" di pengaturan).',
                '<b>Jalankan Google Play Protect</b> dari aplikasi Play Store → profil → Play Protect → Pindai.',
                '<b>Periksa izin khusus</b>: membaca SMS, notifikasi, dan menampilkan di atas aplikasi lain.',
            ] },
            { h2: 'Cara memeriksa di iPhone' },
            { ol: [
                '<b>Perbarui iOS</b> ke versi terbaru.',
                'Gunakan <b>Pemeriksaan Keamanan</b> (Safety Check) di Pengaturan → Privasi & Keamanan untuk meninjau siapa yang punya akses ke lokasi dan data Anda, serta perangkat yang masuk ke Apple ID.',
                '<b>Periksa profil konfigurasi</b> di Pengaturan → Umum → VPN & Manajemen Perangkat. Hapus profil yang tidak dikenal (kecuali milik kantor atau sekolah).',
                '<b>Ganti kata sandi Apple ID</b> dan periksa perangkat yang terhubung.',
            ] },

            { h2: 'Jika curiga ada stalkerware' },
            `Stalkerware sering dipasang oleh orang dekat yang pernah memegang HP korban, dan bisa berkaitan dengan kekerasan dalam hubungan. Koalisi Coalition Against Stalkerware menyarankan berhati-hati: <b>menghapus aplikasi penyadap bisa memberi tahu pelaku</b> bahwa Anda menyadarinya. Bila keselamatan Anda dipertaruhkan, susun rencana keamanan dulu, gunakan perangkat lain yang aman untuk mencari bantuan, dan hubungi layanan pendampingan.`,
            { callout: 'Bila Anda merasa diawasi oleh pasangan atau orang dekat dan merasa tidak aman, hubungi SAPA 129 (Kementerian PPPA) atau layanan pendampingan korban kekerasan terdekat dari perangkat yang aman.', kind: 'warn', title: 'Keselamatan lebih dulu' },

            { h2: 'Membersihkan HP dengan aman' },
            { w: 'checklist', title: 'Langkah pembersihan', desc: 'Untuk malware umum (bukan kasus stalkerware yang melibatkan risiko keselamatan).', items: [
                'Cabut izin aksesibilitas dan admin perangkat dari aplikasi mencurigakan.',
                'Hapus aplikasi mencurigakan.',
                'Jalankan Play Protect atau perbarui iOS.',
                'Ganti kata sandi akun penting dari perangkat lain yang aman.',
                'Aktifkan verifikasi dua langkah di email, bank, dan WhatsApp.',
                'Bila gejala tetap ada: backup data penting (foto, kontak), lalu reset pabrik.',
                'Setelah reset, pasang ulang aplikasi hanya dari toko resmi.',
            ] },

            { h2: 'Pencegahan' },
            { ul: [
                '<b>Jangan memasang APK</b> yang dikirim lewat chat, apa pun alasannya (undangan, resi, tagihan, foto).',
                '<b>Pasang aplikasi dari toko resmi</b> dan perhatikan izin yang diminta.',
                '<b>Kunci layar</b> dengan PIN atau biometrik, dan jangan bagikan PIN kepada orang lain.',
                '<b>Perbarui sistem</b> secara rutin.',
                '<b>Jangan meminjamkan HP tanpa pengawasan</b> kepada orang yang tidak Anda percaya sepenuhnya.',
            ] },
        ],
        faq: [
            ['Apa tanda HP disadap?', 'Aplikasi asing, izin aksesibilitas yang tidak Anda berikan, pengaturan keamanan berubah, dan orang lain tahu informasi pribadi yang tidak Anda bagikan.'],
            ['Apakah HP panas berarti disadap?', 'Belum tentu. Paling sering karena baterai menua, sinyal lemah, atau aplikasi bermasalah. Lihat gejala lain.'],
            ['Bagaimana menghapus virus di HP Android?', 'Cabut izin khusus aplikasi mencurigakan, hapus aplikasinya, jalankan Play Protect, ganti kata sandi, dan reset pabrik bila perlu.'],
            ['Apakah iPhone bisa kena virus?', 'Lebih jarang, tetapi bisa terkena phishing, profil konfigurasi berbahaya, atau pengambilalihan Apple ID. Perbarui iOS dan gunakan Pemeriksaan Keamanan.'],
        ],
        sources: [
            ['Google Play Protect', 'https://support.google.com/googleplay/answer/2812853'],
            ['Apple: Panduan Keselamatan Pribadi (Personal Safety User Guide)', 'https://support.apple.com/guide/personal-safety/welcome/web'],
            ['Coalition Against Stalkerware', 'https://stopstalkerware.org/'],
            ['Penipuan file APK di WhatsApp (artikel terkait)', 'https://muchson.web.id/artikel/penipuan-file-apk-di-whatsapp-modus-dan-pencegahan/'],
        ],
    },
];
