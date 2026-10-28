const D = '2026-10-28';
const C = 'Teknologi Sehari-hari';

export default [
    {
        slug: 'hp-lemot-penyebab-dan-cara-mengatasi',
        title: 'HP Lemot? 12 Penyebab dan Cara Mengatasinya',
        description: 'Penyebab HP Android dan iPhone lemot, dari memori penuh, aplikasi berat, sampai baterai menua, lengkap dengan langkah perbaikan berurutan dan cara tahu kapan HP memang perlu diganti.',
        date: D, category: C, tags: ['HP lemot', 'cara mengatasi HP lemot', 'Android lemot', 'iPhone lemot', 'tips HP'], cta: 'none',
        lead: 'HP yang tadinya gesit lama-lama terasa berat: aplikasi lambat terbuka, keyboard tersendat, kamera butuh beberapa detik untuk siap. Sebelum membeli HP baru, ada banyak penyebab yang bisa diperbaiki sendiri dalam setengah jam. Artikel ini mengurutkan langkahnya dari yang paling mudah dan paling sering berhasil.',
        body: [
            { h2: 'Kenapa HP makin lama makin lambat?' },
            `HP bekerja dengan tiga sumber daya utama: <b>prosesor</b> (otak yang menghitung), <b>RAM</b> (meja kerja sementara untuk aplikasi yang sedang dipakai), dan <b>penyimpanan</b> (lemari tempat semua berkas). Seiring waktu, aplikasi makin berat, berkas menumpuk, dan baterai menua. Ketiganya membuat HP yang sama terasa lebih lambat.`,
            { svg: 'layers', label: 'Tiga sumber daya HP', items: [{ t: 'Prosesor', d: 'menghitung semua pekerjaan; melambat bila panas' }, { t: 'RAM', d: 'meja kerja aplikasi yang sedang dibuka' }, { t: 'Penyimpanan', d: 'lemari berkas; terlalu penuh membuat semua lambat' }, { t: 'Baterai', d: 'baterai tua bisa membuat sistem menurunkan kinerja' }], caption: 'Masalah di salah satu lapisan bisa membuat seluruh HP terasa lemot.' },

            { h2: 'Diagnosis cepat' },
            { w: 'choose', title: 'HP Anda lemot di bagian mana?', questions: [
                { q: 'Kapan HP terasa paling lambat?', options: [{ t: 'Hampir selalu, di semua aplikasi', add: { storage: 2, update: 1 } }, { t: 'Saat banyak aplikasi terbuka atau main game', add: { ram: 3 } }, { t: 'Saat HP terasa panas', add: { panas: 3 } }, { t: 'Saat baterai mulai rendah', add: { baterai: 3 } }] },
                { q: 'Sisa ruang penyimpanan?', options: [{ t: 'Kurang dari 10%', add: { storage: 3 } }, { t: 'Masih banyak', add: { ram: 1, update: 1 } }, { t: 'Tidak tahu', add: { storage: 1 } }] },
                { q: 'Umur HP?', options: [{ t: 'Kurang dari 2 tahun', add: { update: 1, storage: 1 } }, { t: '2-4 tahun', add: { baterai: 2, storage: 1 } }, { t: 'Lebih dari 4 tahun', add: { baterai: 2, ganti: 2 } }] },
            ], results: {
                storage: { title: 'Kemungkinan besar: penyimpanan penuh', text: 'Kosongkan penyimpanan sampai setidaknya 15-20% kosong. Mulai dari video, foto ganda, dan berkas WhatsApp.' },
                ram: { title: 'Kemungkinan besar: RAM terbebani', text: 'Kurangi aplikasi yang berjalan di latar belakang, nonaktifkan widget dan animasi berlebihan, hapus aplikasi yang jarang dipakai.' },
                panas: { title: 'Kemungkinan besar: kepanasan', text: 'HP menurunkan kecepatan prosesor saat panas untuk melindungi diri. Lepas casing tebal, hindari memakai sambil mengisi daya, dan jauhkan dari sinar matahari.' },
                baterai: { title: 'Kemungkinan besar: baterai menua', text: 'Cek kesehatan baterai. Baterai yang aus bisa membuat HP melambat atau mati mendadak. Ganti baterai di servis resmi.' },
                update: { title: 'Cek pembaruan dan aplikasi', text: 'Perbarui sistem dan aplikasi, lalu periksa aplikasi yang baru dipasang. Aplikasi bermasalah sering menjadi penyebab.' },
                ganti: { title: 'Pertimbangkan perbaikan atau ganti', text: 'HP lama yang tidak lagi mendapat pembaruan sistem juga berisiko dari sisi keamanan.' },
            } },

            { h2: '12 penyebab dan solusinya' },
            { table: { head: ['No', 'Penyebab', 'Solusi'], rows: [
                ['1', 'Penyimpanan hampir penuh', 'Sisakan minimal 15-20% ruang kosong'],
                ['2', 'Berkas WhatsApp menumpuk', 'Atur penyimpanan WhatsApp, matikan unduh otomatis media'],
                ['3', 'Terlalu banyak aplikasi', 'Hapus yang tidak dipakai 3 bulan terakhir'],
                ['4', 'Aplikasi berjalan di latar belakang', 'Batasi aktivitas latar di pengaturan baterai'],
                ['5', 'Widget dan wallpaper bergerak', 'Kurangi widget, pakai wallpaper diam'],
                ['6', 'Sistem belum diperbarui', 'Pasang pembaruan sistem dan aplikasi'],
                ['7', 'HP kepanasan', 'Lepas casing tebal, jangan main game sambil mengisi daya'],
                ['8', 'Baterai menua', 'Cek kesehatan baterai, ganti di servis resmi'],
                ['9', 'Cache aplikasi rusak', 'Hapus cache aplikasi yang bermasalah (Android)'],
                ['10', 'Aplikasi pembersih atau penguat palsu', 'Hapus; banyak yang justru membebani dan penuh iklan'],
                ['11', 'Malware dari APK luar Play Store', 'Hapus aplikasi mencurigakan, aktifkan Play Protect'],
                ['12', 'Perangkat memang sudah tua', 'Reset pabrik setelah backup, atau ganti'],
            ] } },
            { callout: 'Aplikasi "booster", "RAM cleaner", dan "pendingin baterai" umumnya tidak diperlukan di Android modern. Sistem sudah mengelola memori sendiri. Banyak aplikasi semacam ini justru berjalan terus di latar belakang dan menampilkan iklan.', kind: 'warn', title: 'Hindari aplikasi pembersih ajaib' },

            { h2: 'Langkah perbaikan berurutan (30 menit)' },
            { w: 'checklist', title: 'Perbaiki HP lemot', desc: 'Kerjakan dari atas. Progres tersimpan di browser ini.', items: [
                'Mulai ulang (restart) HP.',
                'Cek sisa penyimpanan. Target: minimal 15-20% kosong.',
                'Hapus atau pindahkan video besar ke cloud atau laptop.',
                'Bersihkan media WhatsApp lewat menu Penyimpanan dan data.',
                'Hapus aplikasi yang tidak dipakai 3 bulan terakhir.',
                'Perbarui sistem operasi dan semua aplikasi.',
                'Kurangi widget dan matikan wallpaper bergerak.',
                'Cek kesehatan baterai.',
                'Hapus aplikasi pembersih, booster, atau aplikasi dari sumber tidak resmi.',
                'Bila masih lemot: backup data, lalu reset pabrik.',
            ] },

            { h2: 'Cara cek di Android dan iPhone' },
            { table: { head: ['Yang dicek', 'Android (umumnya)', 'iPhone'], rows: [
                ['Penyimpanan', 'Setelan → Penyimpanan, atau aplikasi Files by Google', 'Pengaturan → Umum → Penyimpanan iPhone'],
                ['Kesehatan baterai', 'Tergantung merek: menu Baterai atau aplikasi bawaan', 'Pengaturan → Baterai → Kesehatan & Pengisian Baterai'],
                ['Pembaruan', 'Setelan → Sistem → Pembaruan sistem', 'Pengaturan → Umum → Pembaruan Perangkat Lunak'],
                ['Aplikasi boros', 'Setelan → Baterai → Penggunaan baterai', 'Pengaturan → Baterai'],
            ] } },
            `Nama menu berbeda-beda antar merek dan versi Android. Gunakan kolom pencarian di pengaturan bila menu tidak ditemukan.`,

            { h2: 'Kapan reset pabrik atau ganti HP?' },
            `<b>Reset pabrik</b> mengembalikan HP ke kondisi awal dan sering sangat efektif, tetapi menghapus semua data. Pastikan backup foto, kontak, dan percakapan WhatsApp sebelumnya. Pertimbangkan <b>ganti HP</b> bila: HP tidak lagi menerima pembaruan keamanan, RAM-nya terlalu kecil untuk aplikasi yang Anda butuhkan, atau biaya perbaikan mendekati harga HP baru.`,
        ],
        faq: [
            ['Apa penyebab HP lemot paling umum?', 'Penyimpanan hampir penuh, terlalu banyak aplikasi di latar belakang, sistem belum diperbarui, kepanasan, dan baterai yang menua.'],
            ['Apakah aplikasi pembersih RAM bisa mempercepat HP?', 'Umumnya tidak. Sistem modern sudah mengelola memori, dan banyak aplikasi pembersih justru membebani dan menampilkan iklan.'],
            ['Berapa ruang penyimpanan yang harus kosong?', 'Sebagai patokan praktis, sisakan sekitar 15-20% ruang kosong agar sistem punya ruang kerja.'],
            ['Apakah reset pabrik aman?', 'Aman bila semua data sudah di-backup, karena reset pabrik menghapus seluruh isi HP.'],
        ],
        sources: [
            ['Google: Kosongkan ruang penyimpanan di perangkat Android', 'https://support.google.com/android/answer/7431795'],
            ['Apple: Cara memeriksa penyimpanan di iPhone dan iPad', 'https://support.apple.com/HT201656'],
            ['Apple: Baterai dan performa iPhone', 'https://support.apple.com/101575'],
            ['Google Play Protect', 'https://support.google.com/googleplay/answer/2812853'],
        ],
    },

    {
        slug: 'memori-hp-penuh-cara-mengosongkan',
        title: 'Memori HP Penuh: Cara Mengosongkan Tanpa Kehilangan Foto',
        description: 'Cara mengosongkan memori HP yang penuh: cari pemakan ruang terbesar, bersihkan WhatsApp, pindahkan foto ke cloud dengan aman, hapus cache, dan kalkulator kebutuhan penyimpanan.',
        date: D, category: C, tags: ['memori HP penuh', 'penyimpanan penuh', 'WhatsApp memori penuh', 'cara mengosongkan HP', 'tips HP'], cta: 'none',
        lead: '"Penyimpanan hampir penuh." Notifikasi ini biasanya muncul di saat yang paling tidak tepat, misalnya ketika hendak memotret momen penting. Banyak orang langsung menghapus foto secara acak. Padahal ada cara yang lebih cerdas: cari dulu apa yang paling banyak memakan ruang, lalu bersihkan dari sana.',
        body: [
            { h2: 'Cari pemakan ruang terbesar dulu' },
            `Menghapus 50 foto mungkin hanya menghemat beberapa ratus MB, sementara satu video 10 menit beresolusi tinggi bisa memakan lebih dari 1 GB. Mulailah dengan melihat rincian penyimpanan di pengaturan HP.`,
            { svg: 'bars', label: 'Contoh perkiraan ukuran berkas', data: [['Foto biasa', 3], ['Pesan suara 1 menit', 0.5], ['Video 1 menit HD', 100], ['Video 1 menit 4K', 350], ['Aplikasi game besar', 3000]], unit: ' MB', caption: 'Angka perkiraan kasar; ukuran sebenarnya bergantung perangkat, kualitas, dan aplikasi. Video dan game adalah pemakan ruang terbesar.' },

            { h2: 'Langkah 1: WhatsApp, si pemakan diam-diam' },
            `WhatsApp menyimpan setiap foto, video, stiker, dan dokumen yang masuk ke grup. Grup keluarga dan grup kantor bisa mengumpulkan beberapa GB tanpa disadari.`,
            { ol: [
                'Buka WhatsApp → <b>Setelan → Penyimpanan dan data → Kelola penyimpanan</b>.',
                'Lihat berkas "Lebih dari 5 MB" dan "Sering diteruskan". Hapus yang tidak perlu.',
                'Pilih grup dengan ukuran terbesar, tinjau, lalu hapus media lama.',
                'Atur <b>Unduh media otomatis</b> agar video tidak terunduh otomatis lewat data seluler maupun Wi-Fi.',
                'Pertimbangkan <b>pesan sementara</b> untuk grup yang ramai.',
            ] },

            { h2: 'Langkah 2: foto dan video ke cloud dengan aman' },
            `Memindahkan foto ke cloud adalah cara efektif, tetapi lakukan dengan urutan yang benar agar tidak kehilangan apa pun:`,
            { ol: [
                'Aktifkan backup di Google Photos, iCloud, atau layanan cloud lain.',
                'Pastikan backup <b>selesai</b> (cek di aplikasi bahwa semua item sudah terunggah).',
                'Periksa beberapa foto acak di versi web layanan tersebut.',
                'Baru gunakan fitur "kosongkan ruang" atau "optimalkan penyimpanan" di HP.',
            ] },
            { callout: 'Jangan mengandalkan satu tempat saja untuk foto berharga. Aturan 3-2-1 menganjurkan 3 salinan, di 2 media berbeda, dengan 1 di lokasi lain. Contoh: di HP, di cloud, dan di hard disk eksternal.', kind: 'warn', title: 'Backup bukan satu salinan' },

            { h2: 'Langkah 3: aplikasi dan cache' },
            { ul: [
                '<b>Hapus aplikasi yang jarang dipakai.</b> Game yang tidak dimainkan lagi biasanya paling besar.',
                '<b>Hapus cache</b> aplikasi media sosial dan peramban di Android (Setelan → Aplikasi → pilih aplikasi → Penyimpanan → Hapus cache). Cache akan terbentuk lagi, jadi ini solusi sementara.',
                '<b>Musik dan video unduhan</b> di aplikasi streaming sering terlupa. Hapus yang sudah tidak didengar atau ditonton.',
                '<b>Folder Unduhan</b> berisi PDF, APK, dan berkas lama yang tidak lagi dibutuhkan.',
            ] },
            { w: 'checklist', title: 'Daftar bersih-bersih penyimpanan', desc: 'Centang yang sudah dikerjakan.', items: ['Melihat rincian penyimpanan di pengaturan.', 'Membersihkan media WhatsApp lebih dari 5 MB.', 'Mematikan unduh otomatis video di WhatsApp.', 'Memastikan backup foto selesai sebelum menghapus.', 'Menghapus video panjang yang sudah di-backup.', 'Menghapus aplikasi dan game yang tidak dipakai.', 'Membersihkan folder Unduhan.', 'Menghapus unduhan musik dan video streaming lama.'] },

            { h2: 'Berapa kapasitas yang sebenarnya Anda butuhkan?' },
            { w: 'calc', title: 'Kalkulator kebutuhan penyimpanan', desc: 'Perkiraan kasar untuk memilih HP berikutnya atau paket cloud.', inputs: [
                { id: 'foto', label: 'Foto per bulan', value: 300, min: 0, max: 3000, step: 50 },
                { id: 'video', label: 'Menit video per bulan', value: 20, min: 0, max: 300, step: 5 },
                { id: 'wa', label: 'Media WhatsApp per bulan (MB)', value: 800, min: 0, max: 5000, step: 100 },
                { id: 'tahun', label: 'Rencana pakai HP (tahun)', value: 3, min: 1, max: 6, step: 1 },
            ], outputs: [
                { label: 'Perkiraan total data selama pemakaian', expr: '(foto * 3 + video * 100 + wa) * 12 * tahun / 1024', fmt: 'num', unit: 'GB', big: true },
                { label: 'Per bulan', expr: '(foto * 3 + video * 100 + wa) / 1024', fmt: 'num', unit: 'GB' },
                { label: 'Catatan', expr: "'Tambahkan sekitar 20-30 GB untuk sistem dan aplikasi. Bila totalnya melebihi kapasitas HP, rutinkan backup ke cloud.'", fmt: 'text' },
            ] },

            { h2: 'Kebiasaan agar memori tidak cepat penuh' },
            { ul: [
                'Matikan unduh otomatis media di aplikasi pesan.',
                'Rekam video dengan resolusi HD, bukan 4K, kecuali benar-benar perlu.',
                'Jadwalkan bersih-bersih sebulan sekali, misalnya setiap tanggal 1.',
                'Aktifkan backup otomatis foto saat terhubung Wi-Fi.',
            ] },
        ],
        faq: [
            ['Kenapa memori HP cepat penuh padahal jarang foto?', 'Biasanya karena media WhatsApp, cache aplikasi, video dari grup, game, dan unduhan streaming.'],
            ['Apakah menghapus cache aman?', 'Aman. Cache adalah berkas sementara dan akan dibuat ulang oleh aplikasi. Data login dan pesan tidak ikut terhapus bila yang dihapus hanya cache.'],
            ['Bagaimana memindahkan foto ke cloud tanpa hilang?', 'Aktifkan backup, pastikan semua foto selesai terunggah dan bisa dibuka di versi web, baru hapus dari HP.'],
            ['Berapa kapasitas HP yang cukup?', 'Tergantung kebiasaan. Hitung dari jumlah foto, video, dan media chat per bulan, lalu tambahkan ruang untuk sistem dan aplikasi.'],
        ],
        sources: [
            ['Google: Kosongkan ruang penyimpanan di perangkat Android', 'https://support.google.com/android/answer/7431795'],
            ['Apple: Cara memeriksa penyimpanan di iPhone dan iPad', 'https://support.apple.com/HT201656'],
            ['WhatsApp Help Center', 'https://faq.whatsapp.com/'],
            ['Cara backup foto dan data: aturan 3-2-1 (artikel terkait)', 'https://muchson.web.id/artikel/cara-backup-foto-dan-data-aturan-3-2-1/'],
        ],
    },

    {
        slug: 'baterai-hp-cepat-habis-penyebab-dan-cara-merawat',
        title: 'Baterai HP Cepat Habis: Penyebab dan Cara Merawatnya',
        description: 'Kenapa baterai HP cepat habis dan cepat rusak, mitos dan fakta mengisi daya semalaman, kebiasaan yang memperpanjang umur baterai lithium-ion, dan kapan baterai perlu diganti.',
        date: D, category: C, tags: ['baterai HP cepat habis', 'merawat baterai HP', 'kesehatan baterai', 'cara charge HP', 'tips HP'], cta: 'none',
        lead: 'Pagi 100%, siang tinggal 20%. Baterai yang cepat habis adalah salah satu keluhan HP paling umum. Sebagian penyebabnya ada di pengaturan dan kebiasaan pemakaian, sebagian lagi karena baterai memang menua. Artikel ini membedakan keduanya dan meluruskan beberapa mitos yang masih beredar.',
        body: [
            { h2: 'Baterai lithium-ion pasti menua' },
            `HP modern memakai baterai lithium-ion. Baterai jenis ini kehilangan kapasitas secara bertahap seiring siklus pengisian dan waktu. Apple, misalnya, menyebut baterai iPhone dirancang untuk mempertahankan sekitar 80% kapasitas awal setelah sejumlah siklus pengisian penuh tertentu (jumlahnya berbeda antar model). Artinya, baterai yang terasa lebih cepat habis setelah dua atau tiga tahun adalah hal yang normal.`,
            { svg: 'scale', label: 'Faktor yang mempercepat penuaan baterai', stops: [[8, 'Suhu sejuk'], [35, 'Mengisi 20-80%'], [60, 'Sering 0% atau 100% lama'], [90, 'Panas tinggi']], caption: 'Panas adalah musuh utama baterai lithium-ion.' },

            { h2: 'Mitos dan fakta' },
            { w: 'cards', title: 'Ketuk untuk melihat faktanya', items: [
                { tag: 'Mitos', front: 'Baterai HP baru harus dicas 8 jam dulu.', backTag: 'Fakta', back: 'Itu berlaku untuk baterai jenis lama. Baterai lithium-ion tidak memerlukan "pengisian perdana" yang panjang.' },
                { tag: 'Mitos', front: 'Biarkan baterai habis sampai 0% sebelum dicas.', backTag: 'Fakta', back: 'Sebaliknya, sering sampai 0% justru membebani baterai lithium-ion. Mengisi sebelum terlalu rendah lebih baik.' },
                { tag: 'Mitos', front: 'Mengisi semalaman pasti merusak baterai.', backTag: 'Fakta', back: 'HP modern menghentikan pengisian saat penuh, dan banyak yang punya fitur pengisian teroptimasi. Yang lebih berbahaya adalah panas berlebih, misalnya mengisi di bawah bantal.' },
                { tag: 'Mitos', front: 'Charger murah sama saja.', backTag: 'Fakta', back: 'Charger tanpa sertifikasi bisa tidak stabil dan berisiko panas berlebih. Pakai charger resmi atau bersertifikat.' },
                { tag: 'Mitos', front: 'Menutup semua aplikasi di latar belakang menghemat baterai.', backTag: 'Fakta', back: 'Sering tidak. Membuka ulang aplikasi dari awal justru bisa butuh daya lebih besar. Yang perlu dibatasi adalah aplikasi yang memang boros di latar belakang.' },
            ] },

            { h2: 'Kenapa baterai cepat habis hari ini?' },
            { table: { head: ['Penyebab', 'Cara mengecek', 'Solusi'], rows: [
                ['Layar terlalu terang', 'Kecerahan maksimal terus', 'Kecerahan otomatis, mode gelap pada layar OLED'],
                ['Sinyal lemah', 'Bar sinyal rendah, sering mencari jaringan', 'Pakai Wi-Fi bila ada, mode pesawat di area tanpa sinyal'],
                ['Aplikasi boros', 'Menu Baterai → penggunaan per aplikasi', 'Batasi aktivitas latar, hapus aplikasi bermasalah'],
                ['GPS dan lokasi', 'Banyak aplikasi meminta lokasi terus', 'Izinkan lokasi hanya saat aplikasi digunakan'],
                ['Kepanasan', 'HP terasa hangat saat tidak dipakai', 'Cek aplikasi bermasalah, lepas casing tebal'],
                ['Baterai menua', 'Kesehatan baterai rendah', 'Ganti baterai'],
            ] } },

            { h2: 'Kebiasaan yang memperpanjang umur baterai' },
            { w: 'checklist', title: 'Kebiasaan sehat baterai', desc: 'Centang yang sudah Anda lakukan.', items: ['Menghindari HP terlalu panas (mobil terjemur, di bawah bantal saat dicas).', 'Tidak sering membiarkan baterai sampai 0%.', 'Mengaktifkan fitur pengisian teroptimasi atau batas pengisian bila tersedia.', 'Memakai charger resmi atau bersertifikat.', 'Tidak bermain game berat sambil mengisi daya.', 'Membatasi izin lokasi dan aktivitas latar aplikasi.', 'Memperbarui sistem secara rutin.'] },
            { callout: 'Banyak HP kini punya pengaturan untuk membatasi pengisian sekitar 80-85% atau "pengisian teroptimasi" yang menunda pengisian penuh sampai menjelang Anda bangun. Cari di menu Baterai dengan kata kunci "lindungi baterai" atau "pengisian".', kind: 'good', title: 'Fitur yang sering terlupa' },

            { h2: 'Hitung kebutuhan power bank' },
            { w: 'calc', title: 'Kalkulator power bank', desc: 'Berapa kali power bank bisa mengisi HP Anda? Efisiensi nyata power bank lebih rendah dari angka di label.', inputs: [
                { id: 'pb', label: 'Kapasitas power bank (mAh)', value: 10000, min: 2000, max: 30000, step: 1000 },
                { id: 'hp', label: 'Kapasitas baterai HP (mAh)', value: 5000, min: 2000, max: 7000, step: 100 },
                { id: 'efisiensi', label: 'Efisiensi (%)', value: 65, min: 50, max: 85, step: 5 },
            ], outputs: [
                { label: 'Perkiraan jumlah pengisian penuh', expr: 'pb * efisiensi / 100 / hp', fmt: 'num', unit: 'kali', big: true },
                { label: 'Kapasitas efektif', expr: 'pb * efisiensi / 100', fmt: 'int', unit: 'mAh' },
            ] },

            { h2: 'Kapan harus ganti baterai?' },
            `Pertimbangkan penggantian baterai bila kesehatan baterai sudah rendah (di iPhone, sistem akan memberi tahu bila kapasitasnya turun signifikan), HP mati mendadak padahal persentase masih ada, atau baterai <b>menggembung</b>. Baterai menggembung harus segera ditangani di servis resmi: berhenti mengisi daya, jangan ditekan atau ditusuk, dan jauhkan dari benda mudah terbakar.`,
        ],
        faq: [
            ['Apakah boleh mengecas HP semalaman?', 'Umumnya aman pada HP modern yang menghentikan pengisian saat penuh, apalagi dengan fitur pengisian teroptimasi. Hindari mengecas di tempat panas atau tertutup.'],
            ['Berapa persen sebaiknya mengecas HP?', 'Kebiasaan menjaga baterai di kisaran sekitar 20-80% membantu memperlambat penuaan, tetapi tidak wajib setiap saat.'],
            ['Kenapa baterai HP cepat panas?', 'Pemakaian berat, sinyal lemah, mengisi sambil bermain game, aplikasi bermasalah, atau baterai yang sudah menua.'],
            ['Apa tanda baterai HP harus diganti?', 'Kesehatan baterai rendah, HP mati mendadak, daya cepat habis drastis, atau baterai menggembung.'],
        ],
        sources: [
            ['Apple: Maximizing Battery Life and Lifespan', 'https://www.apple.com/batteries/maximizing-performance/'],
            ['Apple: Baterai dan performa iPhone', 'https://support.apple.com/101575'],
            ['Battery University: How to Prolong Lithium-based Batteries', 'https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries'],
        ],
    },

    {
        slug: 'laptop-lemot-cara-mempercepat-windows',
        title: 'Laptop Lemot: Cara Mempercepat Windows Tanpa Install Ulang',
        description: 'Langkah mempercepat laptop Windows yang lemot: aplikasi startup, Task Manager, penyimpanan, pembaruan, mode daya, malware, sampai upgrade SSD dan RAM yang paling terasa hasilnya.',
        date: D, category: C, tags: ['laptop lemot', 'mempercepat Windows', 'Windows 11 lambat', 'upgrade SSD', 'tips laptop'], cta: 'none',
        lead: 'Laptop butuh lima menit untuk menyala, browser tersendat, dan kipas berbunyi keras padahal hanya membuka dokumen. Sebelum menyerah dan menginstal ulang Windows, coba langkah-langkah berikut. Banyak laptop kembali gesit hanya dengan merapikan program startup, atau dengan satu upgrade murah: mengganti hard disk dengan SSD.',
        body: [
            { h2: 'Mulai dari Task Manager' },
            `Tekan <b>Ctrl + Shift + Esc</b> untuk membuka Task Manager. Di tab <b>Processes</b>, urutkan berdasarkan CPU, Memory, dan Disk. Bila salah satu sering mendekati 100%, itulah yang menghambat.`,
            { table: { head: ['Yang penuh', 'Artinya', 'Arah solusi'], rows: [
                ['CPU', 'Prosesor sibuk', 'Cari program yang memakan CPU, cek malware, cek suhu'],
                ['Memory (RAM)', 'Meja kerja terlalu penuh', 'Kurangi tab dan program terbuka, pertimbangkan tambah RAM'],
                ['Disk', 'Penyimpanan bekerja keras', 'Sering terjadi pada hard disk (HDD); upgrade ke SSD paling terasa'],
            ] } },

            { h2: 'Langkah perbaikan berurutan' },
            { w: 'checklist', title: 'Percepat laptop Windows', desc: 'Kerjakan dari atas. Progres tersimpan di browser ini.', items: [
                'Restart laptop (bukan hanya Sleep). Pembaruan sering baru selesai setelah restart.',
                'Task Manager → tab Startup apps: nonaktifkan program yang tidak perlu menyala otomatis.',
                'Hapus program yang tidak dipakai lewat Settings → Apps → Installed apps.',
                'Kosongkan penyimpanan: Settings → System → Storage, aktifkan Storage Sense.',
                'Pasang semua pembaruan Windows dan driver.',
                'Pilih mode daya yang lebih bertenaga saat dicolok listrik (Settings → System → Power).',
                'Pindai malware dengan Windows Security (Microsoft Defender).',
                'Kurangi ekstensi browser dan tab yang terbuka.',
                'Bersihkan ventilasi dari debu; laptop panas akan menurunkan kecepatan.',
                'Pertimbangkan upgrade SSD atau RAM.',
            ] },
            { callout: 'Program startup adalah penyebab yang paling sering terlupa. Aplikasi chat, pembaru otomatis, dan aplikasi cloud yang semuanya menyala saat laptop dihidupkan bisa membuat lima menit pertama terasa sangat berat.', kind: 'info', title: 'Penyebab tersembunyi nomor satu' },

            { h2: 'Upgrade yang paling terasa: SSD' },
            `Bila laptop Anda masih memakai hard disk (HDD), mengganti dengan <b>SSD</b> sering memberi peningkatan paling dramatis. SSD tidak punya piringan yang berputar, sehingga waktu menyala, membuka program, dan mencari berkas jauh lebih cepat. Cara mengecek: Task Manager → Performance → Disk, lihat jenisnya (HDD atau SSD).`,
            { svg: 'bars', label: 'Perbandingan kasar kecepatan baca berurutan', data: [['HDD laptop', 100], ['SSD SATA', 500], ['SSD NVMe', 2000]], unit: ' MB/s', caption: 'Angka kasar urutan besarnya. Untuk pemakaian sehari-hari, yang paling terasa adalah waktu akses acak yang jauh lebih cepat pada SSD.' },
            { h3: 'Bagaimana dengan RAM?' },
            `RAM 4 GB terasa sempit untuk Windows modern dengan browser berisi banyak tab. 8 GB nyaman untuk pekerjaan kantor dan kuliah, 16 GB untuk pekerjaan yang lebih berat. Pastikan laptop Anda memang bisa ditambah RAM; sebagian laptop tipis memakai RAM yang disolder dan tidak bisa diupgrade.`,

            { h2: 'Kapan instal ulang?' },
            `Instal ulang (atau fitur <b>Reset this PC</b> di Windows) layak dipertimbangkan bila semua langkah di atas tidak membantu, ada banyak program sisa yang sulit dibersihkan, atau ada indikasi malware yang membandel. Sebelumnya, backup semua data dan pastikan Anda punya kunci lisensi program penting.`,
            { w: 'choose', title: 'Langkah terbaik untuk laptop Anda', questions: [
                { q: 'Jenis penyimpanan laptop?', options: [{ t: 'HDD', add: { ssd: 3 } }, { t: 'SSD', add: { rapikan: 1, ram: 1 } }, { t: 'Tidak tahu', add: { rapikan: 1 } }] },
                { q: 'RAM laptop?', options: [{ t: '4 GB atau kurang', add: { ram: 3 } }, { t: '8 GB', add: { rapikan: 2 } }, { t: '16 GB atau lebih', add: { rapikan: 2, reset: 1 } }] },
                { q: 'Sudah merapikan startup, aplikasi, dan pembaruan?', options: [{ t: 'Belum', add: { rapikan: 3 } }, { t: 'Sudah, tetap lambat', add: { reset: 2, ssd: 1 } }] },
            ], results: {
                ssd: { title: 'Upgrade ke SSD', text: 'Peningkatan paling terasa untuk laptop ber-HDD. Bisa sekaligus memindahkan sistem atau instal bersih.' },
                ram: { title: 'Tambah RAM bila memungkinkan', text: 'Cek apakah slot RAM tersedia. Bila tidak, kurangi tab dan program yang berjalan bersamaan.' },
                rapikan: { title: 'Rapikan dulu', text: 'Startup, aplikasi tidak terpakai, penyimpanan, dan pembaruan. Sering sudah cukup.' },
                reset: { title: 'Pertimbangkan Reset this PC', text: 'Setelah backup data, reset bisa mengembalikan kinerja bila masalahnya ada di perangkat lunak.' },
            } },
        ],
        faq: [
            ['Kenapa laptop Windows lemot saat baru dinyalakan?', 'Biasanya karena banyak program startup, pembaruan yang berjalan di latar, dan penyimpanan HDD yang lambat.'],
            ['Apakah upgrade SSD benar-benar berpengaruh?', 'Untuk laptop yang masih memakai HDD, upgrade ke SSD biasanya peningkatan kecepatan paling terasa.'],
            ['Berapa RAM yang cukup untuk Windows 11?', 'Untuk pemakaian kantor dan kuliah, 8 GB nyaman. 16 GB untuk pekerjaan yang lebih berat seperti desain atau pemrograman.'],
            ['Apakah perlu antivirus tambahan?', 'Windows Security (Microsoft Defender) bawaan sudah memberi perlindungan dasar yang baik bila selalu diperbarui.'],
        ],
        sources: [
            ['Microsoft: Tips to improve PC performance in Windows', 'https://support.microsoft.com/en-us/help/4002019'],
        ],
    },

    {
        slug: 'cara-memilih-laptop-untuk-kuliah-dan-kerja',
        title: 'Cara Memilih Laptop untuk Kuliah dan Kerja (Spesifikasi Jelas)',
        description: 'Panduan memilih laptop sesuai kebutuhan: prosesor, RAM, SSD, layar, baterai, dan bobot dijelaskan sederhana, rekomendasi spesifikasi per jurusan atau pekerjaan, dan daftar cek sebelum membeli.',
        date: D, category: C, tags: ['memilih laptop', 'laptop kuliah', 'spesifikasi laptop', 'laptop kerja', 'tips beli laptop'], cta: 'none',
        lead: 'Brosur laptop penuh angka dan istilah: Core i5, Ryzen 7, 16 GB, 512 GB NVMe, IPS, 60 Hz. Mudah tergoda membeli yang angkanya paling besar, atau sebaliknya membeli yang paling murah lalu menyesal setahun kemudian. Panduan ini membantu Anda membaca spesifikasi dan memilih yang pas dengan kebutuhan nyata.',
        body: [
            { h2: 'Mulai dari kebutuhan, bukan spesifikasi' },
            { w: 'choose', title: 'Profil pemakaian Anda', questions: [
                { q: 'Kegiatan utama?', options: [{ t: 'Dokumen, browsing, kuliah daring', add: { dasar: 3 } }, { t: 'Pemrograman, analisis data', add: { menengah: 3 } }, { t: 'Desain grafis, edit video, game', add: { berat: 3 } }] },
                { q: 'Seberapa sering dibawa bepergian?', options: [{ t: 'Setiap hari', add: { dasar: 1, menengah: 1 } }, { t: 'Jarang, kebanyakan di meja', add: { berat: 1 } }] },
                { q: 'Rencana dipakai berapa lama?', options: [{ t: '2-3 tahun', add: { dasar: 1 } }, { t: '4-5 tahun atau lebih', add: { menengah: 2, berat: 1 } }] },
            ], results: {
                dasar: { title: 'Kebutuhan dasar', text: 'RAM 8 GB, SSD 256-512 GB, prosesor kelas menengah generasi baru, baterai awet, bobot ringan.' },
                menengah: { title: 'Kebutuhan menengah', text: 'RAM 16 GB, SSD 512 GB, prosesor menengah ke atas. Pemrograman dan data sangat terbantu RAM yang cukup.' },
                berat: { title: 'Kebutuhan berat', text: 'RAM 16-32 GB, SSD 1 TB, prosesor kelas atas, kartu grafis terpisah sesuai aplikasi, layar dengan warna akurat.' },
            } },

            { h2: 'Membaca spesifikasi dengan mudah' },
            { table: { head: ['Komponen', 'Analogi', 'Yang perlu diperhatikan'], rows: [
                ['Prosesor (CPU)', 'Kecepatan berpikir', 'Generasi lebih penting dari angka i3/i5/i7 saja. i5 generasi baru bisa lebih cepat dari i7 lama'],
                ['RAM', 'Luas meja kerja', '8 GB minimal nyaman; 16 GB untuk pemrograman dan multitasking'],
                ['Penyimpanan', 'Lemari arsip', 'Wajib SSD. 512 GB pilihan aman untuk 4-5 tahun'],
                ['Kartu grafis (GPU)', 'Tukang gambar khusus', 'Hanya perlu terpisah untuk game, 3D, edit video berat, atau AI lokal'],
                ['Layar', 'Jendela kerja', 'Panel IPS atau OLED, resolusi minimal Full HD, kecerahan cukup'],
                ['Baterai', 'Bekal tenaga', 'Lihat ulasan pemakaian nyata, bukan angka maksimal di brosur'],
                ['Bobot', 'Beban di tas', 'Di bawah 1,5 kg terasa ringan untuk dibawa setiap hari'],
            ] } },
            { callout: 'RAM dan SSD yang disolder tidak bisa ditambah kemudian. Bila laptop memakai RAM solder, lebih baik membeli kapasitas yang cukup untuk 4-5 tahun sejak awal.', kind: 'warn', title: 'Cek apakah bisa diupgrade' },

            { h2: 'Rekomendasi per jurusan atau pekerjaan' },
            { table: { head: ['Kebutuhan', 'RAM', 'SSD', 'Catatan'], rows: [
                ['Sosial, bahasa, hukum, administrasi', '8 GB', '256-512 GB', 'Prioritaskan baterai dan bobot'],
                ['Teknik informatika, sistem informasi', '16 GB', '512 GB', 'Menjalankan editor, browser, database, kadang emulator'],
                ['Statistik dan data', '16 GB', '512 GB', 'Data besar butuh RAM'],
                ['Arsitektur, desain produk', '16-32 GB', '1 TB', 'GPU terpisah sesuai software (CAD, render)'],
                ['Desain grafis dan video', '16-32 GB', '1 TB', 'Layar akurat warna, GPU sesuai software'],
            ] } },

            { h2: 'Hitung biaya per tahun' },
            { w: 'calc', title: 'Biaya laptop per tahun', desc: 'Laptop yang sedikit lebih mahal tetapi awet bisa lebih hemat per tahun.', inputs: [
                { id: 'harga', label: 'Harga laptop (Rp)', value: 9000000, min: 3000000, max: 40000000, step: 500000 },
                { id: 'tahun', label: 'Perkiraan umur pakai (tahun)', value: 4, min: 1, max: 8, step: 1 },
                { id: 'jual', label: 'Perkiraan harga jual kembali (Rp)', value: 2000000, min: 0, max: 15000000, step: 500000 },
            ], outputs: [
                { label: 'Biaya bersih per tahun', expr: '(harga - jual) / tahun', fmt: 'rp', big: true },
                { label: 'Per bulan', expr: '(harga - jual) / tahun / 12', fmt: 'rp' },
            ] },

            { h2: 'Daftar cek sebelum membayar' },
            { w: 'checklist', title: 'Cek di toko atau saat barang tiba', desc: 'Centang yang sudah dicek.', items: ['Spesifikasi sesuai pesanan (cek di Settings → System → About).', 'Tidak ada dead pixel atau bercahaya bocor di layar.', 'Keyboard dan touchpad berfungsi semua.', 'Port USB, audio, dan HDMI berfungsi.', 'Baterai terisi dan terbaca dengan normal.', 'Windows asli dan teraktivasi.', 'Kartu garansi resmi dan nota pembelian disimpan.', 'Kamera dan mikrofon berfungsi untuk kuliah daring.'] },
            `Satu tips terakhir: baca atau tonton beberapa ulasan independen untuk model yang Anda incar, terutama tentang baterai, suhu, dan kualitas layar. Angka di brosur sering diukur dalam kondisi ideal.`,
        ],
        faq: [
            ['Berapa RAM laptop untuk kuliah?', 'Untuk sebagian besar jurusan, 8 GB cukup. Untuk informatika, data, dan desain, 16 GB lebih nyaman.'],
            ['Apakah harus SSD?', 'Ya. SSD membuat laptop menyala dan membuka program jauh lebih cepat dibanding hard disk.'],
            ['Intel atau AMD?', 'Keduanya baik. Bandingkan generasi dan ulasan model spesifik, bukan merek prosesornya saja.'],
            ['Perlukah kartu grafis terpisah?', 'Hanya untuk game, desain 3D, edit video berat, atau beban kerja tertentu. Untuk dokumen dan pemrograman umum tidak wajib.'],
        ],
        sources: [
            ['Microsoft: Windows 11 system requirements', 'https://www.microsoft.com/en-us/windows/windows-11-specifications'],
            ['Microsoft: Tips to improve PC performance in Windows', 'https://support.microsoft.com/en-us/help/4002019'],
        ],
    },

    {
        slug: 'whatsapp-dibajak-cara-mencegah-dan-memulihkan',
        title: 'WhatsApp Dibajak: Cara Mencegah dan Memulihkannya',
        description: 'Modus pembajakan akun WhatsApp yang sering terjadi, langkah darurat saat akun dibajak, cara memulihkan, dan pengaturan keamanan yang mencegahnya terjadi lagi.',
        date: D, category: C, tags: ['WhatsApp dibajak', 'akun WA diretas', 'verifikasi dua langkah WhatsApp', 'kode OTP', 'keamanan HP'], cta: 'none',
        lead: 'Teman Anda tiba-tiba mengirim pesan meminta pinjaman uang, padahal itu bukan dia. Akunnya dibajak. Pembajakan akun WhatsApp sangat sering terjadi di Indonesia, dan hampir selalu berawal dari satu hal: kode verifikasi 6 digit yang diberikan kepada orang lain. Berikut cara mencegah dan memulihkannya.',
        body: [
            { h2: 'Cara pembajak mengambil alih akun' },
            `WhatsApp terikat pada nomor telepon. Saat seseorang memasang WhatsApp dengan nomor Anda di HP lain, WhatsApp mengirim <b>kode verifikasi 6 digit</b> lewat SMS atau telepon ke nomor Anda. Siapa pun yang memegang kode itu bisa memindahkan akun ke HP-nya. Karena itu, hampir semua modus pembajakan berujung pada satu tujuan: membuat Anda menyerahkan kode tersebut.`,
            { svg: 'flow', label: 'Alur pembajakan WhatsApp', steps: [{ t: 'Pelaku daftar', d: 'pakai nomor korban di HP lain' }, { t: 'Kode terkirim', d: 'SMS ke HP korban' }, { t: 'Pelaku membujuk', d: 'mengaku salah kirim, kurir, CS' }, { t: 'Korban memberi kode', d: 'akun berpindah' }, { t: 'Pelaku menipu', d: 'minta uang ke kontak korban' }] },
            { table: { head: ['Modus', 'Kalimat yang sering dipakai'], rows: [
                ['Salah kirim kode', '"Maaf, kode saya terkirim ke nomor Anda, boleh dikirim balik?"'],
                ['Teman dibajak lebih dulu', 'Akun teman yang sudah dibajak meminta "tolong kirim kode yang masuk"'],
                ['Pura-pura kurir atau CS', '"Untuk konfirmasi paket, sebutkan kode yang kami kirim"'],
                ['Undian atau hadiah', '"Selamat Anda menang, verifikasi dengan kode yang masuk"'],
                ['File APK palsu', 'Undangan, tagihan, atau resi berupa file .apk yang bisa membaca SMS'],
            ] } },
            { callout: 'Kode verifikasi WhatsApp tidak pernah perlu diberikan kepada siapa pun, termasuk teman, keluarga, kurir, atau yang mengaku dari WhatsApp. Siapa pun yang memintanya hampir pasti penipu.', kind: 'bad', title: 'Aturan nomor satu' },

            { h2: 'Pencegahan: aktifkan verifikasi dua langkah' },
            `Verifikasi dua langkah menambahkan <b>PIN 6 digit buatan Anda</b>. Meski pelaku berhasil mendapat kode SMS, ia tetap butuh PIN ini untuk masuk.`,
            { ol: [
                'Buka WhatsApp → <b>Setelan → Akun → Verifikasi dua langkah</b>.',
                'Ketuk <b>Aktifkan</b>, lalu buat PIN 6 digit yang tidak mudah ditebak (bukan tanggal lahir).',
                'Masukkan alamat email untuk pemulihan bila lupa PIN. Ketik dengan teliti karena tidak diverifikasi saat itu.',
                'Simpan PIN di tempat aman, misalnya pengelola kata sandi.',
            ] },
            { w: 'checklist', title: 'Pengaturan keamanan WhatsApp', desc: 'Centang yang sudah diaktifkan.', items: ['Verifikasi dua langkah dengan PIN aktif.', 'Email pemulihan sudah ditambahkan.', 'Perangkat tertaut diperiksa (Setelan → Perangkat tertaut) dan yang asing dikeluarkan.', 'Kunci aplikasi dengan sidik jari atau wajah.', 'Foto profil dan info hanya untuk kontak.', 'Tidak memasang APK dari luar Play Store atau App Store.', 'Kunci layar HP memakai PIN atau biometrik.'] },

            { h2: 'Langkah darurat bila akun sudah dibajak' },
            { ol: [
                '<b>Masuk lagi ke WhatsApp dengan nomor Anda</b> di HP Anda dan verifikasi dengan kode SMS. Ini akan mengeluarkan pelaku dari akun, karena satu nomor hanya bisa aktif di satu HP utama.',
                'Bila diminta PIN verifikasi dua langkah yang dibuat pelaku, Anda mungkin harus menunggu masa tunggu tertentu sebelum bisa masuk tanpa PIN. Tetap lakukan langkah berikutnya.',
                '<b>Kabari kontak</b> lewat media sosial, SMS, atau akun lain bahwa WhatsApp Anda dibajak dan jangan mentransfer uang.',
                '<b>Hubungi WhatsApp</b> lewat menu bantuan atau email dukungan untuk melaporkan akun dibajak.',
                '<b>Periksa perangkat tertaut</b> dan keluarkan semua sesi yang tidak dikenal setelah berhasil masuk.',
                '<b>Aktifkan verifikasi dua langkah</b> dengan PIN Anda sendiri.',
                'Bila ada korban yang mentransfer uang, <b>simpan bukti</b> dan laporkan rekening pelaku (lihat artikel tentang melapor penipuan online).',
            ] },
            { callout: 'Pesan yang sudah dikirim pelaku tidak bisa dibatalkan dari HP Anda. Karena itu langkah "kabari kontak" sangat penting dilakukan secepatnya.', kind: 'warn', title: 'Kecepatan adalah kunci' },

            { h2: 'Saat teman meminta uang lewat WhatsApp' },
            { w: 'quiz', title: 'Uji kewaspadaan', questions: [
                { q: 'Kakak Anda mengirim WA: "Dek, tolong transfer Rp2 juta dulu, HP-ku rusak, nanti diganti." Langkah terbaik?', options: ['Langsung transfer', 'Telepon kakak lewat nomor biasa atau tanyakan hal yang hanya ia tahu', 'Balas meminta nomor rekening'], answer: 1, why: 'Verifikasi lewat jalur lain. Penipu yang membajak akun tidak bisa menjawab telepon dengan suara asli.' },
                { q: 'Ada SMS kode WhatsApp padahal Anda tidak sedang mendaftar. Artinya?', options: ['Ada orang mencoba memasang WhatsApp dengan nomor Anda', 'WhatsApp sedang pembaruan', 'Hadiah dari operator'], answer: 0, why: 'Abaikan dan jangan berikan kodenya kepada siapa pun. Pastikan verifikasi dua langkah aktif.' },
            ] },
        ],
        faq: [
            ['Bagaimana cara WhatsApp bisa dibajak?', 'Hampir selalu karena kode verifikasi 6 digit diberikan kepada orang lain, baik lewat bujukan, pura-pura salah kirim, atau aplikasi APK berbahaya yang membaca SMS.'],
            ['Bagaimana memulihkan WhatsApp yang dibajak?', 'Masuk lagi ke WhatsApp dengan nomor Anda dan verifikasi kode SMS, kabari kontak, laporkan ke WhatsApp, lalu aktifkan verifikasi dua langkah.'],
            ['Apa itu verifikasi dua langkah WhatsApp?', 'PIN 6 digit buatan Anda yang diminta saat mendaftarkan nomor di HP baru, sehingga kode SMS saja tidak cukup untuk mengambil alih akun.'],
            ['Apakah pelaku bisa membaca chat lama?', 'Riwayat chat tersimpan di HP Anda dan cadangan Anda. Namun pelaku bisa membaca pesan baru selama menguasai akun, jadi pulihkan secepatnya.'],
        ],
        sources: [
            ['WhatsApp Help Center: keamanan dan verifikasi dua langkah', 'https://faq.whatsapp.com/'],
            ['WhatsApp: fitur keamanan', 'https://www.whatsapp.com/security'],
            ['OJK Indonesia Anti-Scam Centre', 'https://iasc.ojk.go.id/'],
        ],
    },
];
