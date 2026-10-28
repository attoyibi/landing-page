import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Pendidikan Anak';

export default [
    {
        slug: 'manfaat-membacakan-buku-untuk-anak-dan-caranya',
        title: 'Manfaat Membacakan Buku untuk Anak dan Cara Melakukannya',
        description: 'Kenapa membacakan buku penting untuk bahasa anak, teknik dialogic reading (PEER dan CROWD), memilih buku sesuai usia, dan rutinitasnya.',
        date: D, category: C, tags: ['membacakan buku', 'read aloud', 'literasi anak', 'dialogic reading', 'minat baca anak'], cta: 'pixelkode',
        ctaNote: 'Anak yang terbiasa dibacakan cerita sering suka membuat cerita sendiri. Di PixelKode, cerita itu bisa dihidupkan menjadi animasi dan cerita interaktif di Studio.',
        lead: 'Membacakan buku adalah salah satu kegiatan paling sederhana dan paling bermanfaat yang bisa dilakukan orang tua. Tidak butuh biaya besar, tidak butuh keahlian khusus, dan manfaatnya terasa bertahun-tahun. Artikel ini menjelaskan kenapa, lalu memberi teknik agar sesi membaca bersama jauh lebih efektif daripada sekadar membaca teks keras-keras.',
        body: [
            { h2: 'Kenapa membacakan buku sangat penting' },
            `American Academy of Pediatrics (AAP) dalam pernyataan kebijakannya tahun 2014 menganjurkan dokter anak mendorong orang tua membacakan buku untuk anak <b>sejak bayi</b>. Alasannya: membaca bersama memperkaya kosakata, membangun keterampilan bahasa yang menjadi fondasi membaca, dan memperkuat hubungan orang tua-anak.`,
            { table: { head: ['Manfaat', 'Penjelasan'], rows: [
                ['Kosakata lebih kaya', 'Bahasa buku memuat kata-kata yang jarang muncul di percakapan sehari-hari'],
                ['Fondasi membaca', 'Anak mengenal bunyi, rima, struktur cerita, dan arah membaca'],
                ['Pemahaman', 'Anak belajar mengikuti alur, menebak, dan menghubungkan sebab-akibat'],
                ['Kedekatan', 'Waktu tenang bersama yang menenangkan dan menyenangkan'],
                ['Minat baca', 'Anak mengasosiasikan buku dengan hal yang hangat dan menyenangkan'],
            ] } },
            { callout: 'Teruskan membacakan buku walau anak sudah bisa membaca sendiri. Buku yang dibacakan bisa lebih sulit dari kemampuan baca anak, sehingga kosakata dan pemahamannya terus bertambah.', kind: 'good', title: 'Jangan berhenti terlalu cepat' },

            { h2: 'Dialogic reading: membaca sambil bercakap' },
            `Grover Whitehurst dan rekan (1988) meneliti teknik <b>dialogic reading</b>, yaitu membaca bersama sambil mengajak anak aktif bercakap. Dalam penelitian mereka, anak yang dibacakan dengan cara ini menunjukkan kemampuan bahasa ekspresif yang lebih baik dibanding kelompok yang dibacakan seperti biasa. Intinya, anak berubah dari pendengar menjadi pencerita.`,
            { h3: 'Urutan PEER' },
            { svg: 'flow', label: 'Urutan PEER', steps: [{ t: 'Prompt', d: 'ajukan pertanyaan' }, { t: 'Evaluate', d: 'tanggapi jawabannya' }, { t: 'Expand', d: 'tambahkan informasi' }, { t: 'Repeat', d: 'anak mengulang' }], caption: 'Contoh: "Itu apa?" "Kucing!" "Ya, kucing oranye yang sedang tidur." "Kucing oranye tidur!"' },
            { h3: 'Lima jenis pertanyaan CROWD' },
            { table: { head: ['Jenis', 'Contoh'], rows: [
                ['<b>C</b>ompletion (melengkapi)', '"Kancil berlari ke ..." (anak melanjutkan)'],
                ['<b>R</b>ecall (mengingat)', '"Tadi siapa saja yang membantu kancil?"'],
                ['<b>O</b>pen-ended (terbuka)', '"Ceritakan apa yang terjadi di gambar ini."'],
                ['<b>W</b>h- (apa, siapa, kenapa)', '"Kenapa buaya marah?"'],
                ['<b>D</b>istancing (menghubungkan)', '"Kamu pernah merasa takut seperti kancil?"'],
            ] } },

            { h2: 'Memilih buku sesuai usia' },
            { table: { head: ['Usia', 'Jenis buku', 'Tips'], rows: [
                ['0-1 tahun', 'Buku kain atau karton tebal, gambar kontras', 'Tunjuk dan namai gambar'],
                ['1-3 tahun', 'Buku gambar sederhana, rima, dan pengulangan', 'Biarkan anak membalik halaman dan menunjuk'],
                ['3-5 tahun', 'Cerita bergambar dengan alur', 'Gunakan pertanyaan CROWD'],
                ['6-8 tahun', 'Cerita lebih panjang, buku seri, cerita rakyat', 'Bergantian membaca halaman'],
                ['9-12 tahun', 'Novel anak, buku pengetahuan, komik bermutu', 'Diskusikan tokoh dan pilihan mereka'],
            ] } },

            { h2: 'Rutinitas 15 menit' },
            { w: 'timer', title: 'Sesi membaca bersama', desc: 'Pakai sebagai pengingat struktur sesi. Boleh lebih lama kalau anak masih ingin.', phases: [{ label: 'Lihat sampul dan tebak ceritanya', sec: 120, hint: '"Menurutmu buku ini tentang apa?"' }, { label: 'Membaca sambil bercakap', sec: 600, hint: 'Pakai pertanyaan CROWD sesekali, jangan setiap halaman.' }, { label: 'Ceritakan ulang dan hubungkan', sec: 180, hint: '"Bagian mana yang paling kamu suka? Kenapa?"' }] },
            { w: 'checklist', title: 'Kebiasaan membaca keluarga', desc: 'Centang yang sudah rutin.', items: ['Ada waktu membaca bersama setiap hari, walau 10 menit.', 'Buku mudah dijangkau anak di rumah.', 'Anak boleh memilih buku sendiri.', 'Kunjungan ke perpustakaan atau tukar buku dengan teman.', 'Orang tua juga terlihat membaca.', 'Ada sesi di mana anak yang membacakan untuk orang tua atau adik.'] },

            { h2: 'Dari mendengar cerita ke membuat cerita' },
            `Anak yang sering dibacakan cerita biasanya mulai ingin membuat ceritanya sendiri. Dorong itu: tulis cerita bersama, gambar komik, atau rekam anak bercerita. Bagi anak usia SD, cerita juga bisa dihidupkan dengan coding: tokoh berbicara, berpindah adegan, dan pembaca bisa memilih jalan cerita. Anak bisa mencobanya di <a href="${pk('manfaat-membacakan-buku-untuk-anak-dan-caranya')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a>.`,
        ],
        faq: [
            ['Sejak usia berapa anak dibacakan buku?', 'Sejak bayi. AAP menganjurkan membacakan buku sejak bayi untuk mendukung perkembangan bahasa.'],
            ['Berapa lama membacakan buku setiap hari?', 'Sekitar 10-20 menit setiap hari sudah bermakna. Konsistensi lebih penting dari durasi.'],
            ['Apa itu dialogic reading?', 'Teknik membaca bersama sambil mengajak anak aktif bercakap lewat pertanyaan, tanggapan, dan perluasan, sehingga anak menjadi pencerita.'],
            ['Apakah tetap perlu dibacakan setelah anak bisa membaca?', 'Ya. Buku yang dibacakan bisa lebih sulit dari kemampuan baca anak, sehingga kosakata dan pemahamannya terus bertambah.'],
        ],
        sources: [
            ['AAP (2014). Literacy Promotion: An Essential Component of Primary Care Pediatric Practice. Pediatrics', 'https://doi.org/10.1542/peds.2014-1384'],
            ['Whitehurst, G. J. dkk. (1988). Accelerating language development through picture book reading. Developmental Psychology', 'https://doi.org/10.1037/0012-1649.24.4.552'],
            ['Reach Out and Read', 'https://reachoutandread.org/'],
        ],
    },

    {
        slug: 'kegiatan-liburan-sekolah-anak-yang-mendidik',
        title: 'Kegiatan Liburan Sekolah Anak yang Mendidik dan Seru',
        description: 'Ide kegiatan liburan sekolah yang mendidik untuk anak SD: proyek, membaca, gerak, keterampilan hidup, dan jadwal liburan yang seimbang.',
        date: D, category: C, tags: ['kegiatan liburan anak', 'liburan sekolah', 'kegiatan anak di rumah', 'proyek anak', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Liburan adalah waktu yang pas untuk mencoba coding tanpa tekanan sekolah. Dua pelajaran pertama PixelKode gratis dan bisa langsung dimulai di browser.',
        lead: 'Liburan sekolah sering berakhir dengan dua kemungkinan: anak seharian di depan layar, atau orang tua kehabisan ide. Liburan yang baik tidak harus mahal atau penuh les. Yang dibutuhkan adalah ritme yang seimbang: istirahat, bergerak, membaca, dan satu atau dua proyek yang membuat anak bangga.',
        body: [
            { h2: 'Prinsip liburan yang seimbang' },
            { svg: 'layers', label: 'Unsur liburan seimbang', items: [{ t: 'Istirahat dan bermain bebas', d: 'tanpa agenda, termasuk boleh bosan' }, { t: 'Bergerak', d: 'WHO menganjurkan anak 5-17 tahun aktif rata-rata 60 menit per hari' }, { t: 'Membaca', d: 'buku yang dipilih anak sendiri' }, { t: 'Proyek', d: 'satu karya yang selesai dan bisa dipamerkan' }, { t: 'Keterampilan hidup', d: 'memasak, berbelanja, merawat tanaman' }], caption: 'Tidak semua harus ada setiap hari. Cukup terwakili dalam seminggu.' },
            { callout: 'Libur panjang tanpa membaca sama sekali bisa membuat sebagian anak "berkarat". Kabar baiknya, cukup membaca buku pilihan sendiri secara rutin untuk menjaga kebiasaan. Tidak perlu les tambahan.', kind: 'info', title: 'Tentang lupa pelajaran saat libur' },

            { h2: 'Ide kegiatan berdasarkan jenis' },
            { h3: 'Proyek (pilih satu untuk seluruh liburan)' },
            { ul: [
                '<b>Membuat game atau animasi</b> dengan coding, lalu dimainkan keluarga di akhir liburan.',
                '<b>Membuat komik atau buku cerita</b> 8 halaman, lalu dicetak atau difotokopi.',
                '<b>Kebun mini</b>: tanam kangkung, cabai, atau kacang hijau, lalu catat pertumbuhannya.',
                '<b>Dokumenter keluarga</b>: wawancara kakek-nenek tentang masa kecil mereka.',
                '<b>Kota kardus</b> dengan jalan, rumah, dan sekolah dari barang bekas.',
            ] },
            { h3: 'Keterampilan hidup' },
            { ul: ['Memasak satu menu sederhana sendiri dengan pengawasan.', 'Menyusun daftar belanja dan menghitung anggaran.', 'Mencuci dan melipat baju sendiri.', 'Merencanakan rute perjalanan dengan peta.'] },
            { h3: 'Gerak dan alam' },
            { ul: ['Bersepeda pagi, berenang, atau main bola.', 'Jelajah taman atau sawah sambil mencatat hewan dan tumbuhan.', 'Permainan tradisional: engklek, gobak sodor, petak umpet.'] },
            { h3: 'Belajar yang tidak terasa belajar' },
            { ul: ['Kunjungan museum, perpustakaan, atau pusat sains.', 'Tantangan membaca: 5 buku selama liburan.', 'Eksperimen dapur: gunung berapi soda kue, telur mengapung di air garam.'] },

            { h2: 'Contoh jadwal mingguan liburan' },
            { table: { head: ['Hari', 'Pagi', 'Siang', 'Sore'], rows: [
                ['Senin', 'Bersepeda', 'Proyek 45 menit', 'Bebas'],
                ['Selasa', 'Membantu masak', 'Membaca', 'Main di luar'],
                ['Rabu', 'Berenang', 'Proyek 45 menit', 'Bebas'],
                ['Kamis', 'Ke perpustakaan', 'Membaca', 'Permainan tradisional'],
                ['Jumat', 'Berkebun', 'Proyek 45 menit', 'Pameran mini proyek minggu ini'],
                ['Sabtu-Minggu', 'Acara keluarga', 'Bebas', 'Bebas'],
            ] } },
            { w: 'builder', title: 'Rencana liburan anak', desc: 'Isi bersama anak di awal liburan.', fields: [
                { id: 'proyek', label: 'Proyek utama liburan ini', placeholder: 'mis. membuat game tangkap bintang' },
                { id: 'buku', label: 'Target buku yang dibaca', placeholder: 'mis. 5 buku' },
                { id: 'gerak', label: 'Kegiatan gerak favorit', placeholder: 'mis. bersepeda dan berenang' },
                { id: 'skill', label: 'Keterampilan hidup yang dipelajari', placeholder: 'mis. memasak nasi goreng' },
                { id: 'layar', label: 'Kesepakatan waktu layar', placeholder: 'mis. 1 jam hiburan + waktu untuk proyek' },
            ], template: 'RENCANA LIBURAN\nProyek: {proyek}\nMembaca: {buku}\nGerak: {gerak}\nKeterampilan baru: {skill}\nWaktu layar: {layar}\n\nPameran proyek di akhir liburan!' },

            { h2: 'Mengatur waktu layar saat liburan' },
            `Saat liburan, waktu luang bertambah dan waktu layar mudah membengkak. Kesepakatan sederhana membantu: tentukan jatah hiburan harian, dan pisahkan waktu layar untuk proyek kreatif (coding, menggambar digital) dari waktu menonton. Pastikan aktivitas fisik dan tidur tetap terjaga.`,
            { w: 'calc', title: 'Hitung proyek liburan', desc: 'Berapa yang bisa dicapai dengan sesi proyek rutin?', inputs: [
                { id: 'minggu', label: 'Lama liburan (minggu)', value: 3, min: 1, max: 8, step: 1 },
                { id: 'sesi', label: 'Sesi proyek per minggu', value: 3, min: 1, max: 7, step: 1 },
                { id: 'menit', label: 'Menit per sesi', value: 45, min: 15, max: 90, step: 15 },
            ], outputs: [
                { label: 'Total waktu proyek', expr: 'minggu * sesi * menit / 60', fmt: 'num', unit: 'jam', big: true },
                { label: 'Setara pelajaran coding 45 menit', expr: 'Math.floor(minggu * sesi * menit / 45)', fmt: 'int', unit: 'pelajaran' },
            ] },
            `Dengan 3 sesi per minggu selama 3 minggu, anak bisa menyelesaikan sekitar 9 pelajaran coding, cukup untuk membuat animasi, cerita interaktif, dan game pertamanya. Liburan adalah waktu yang pas untuk memulai karena tidak ada tekanan PR. Coba mulai dari <a href="${pk('kegiatan-liburan-sekolah-anak-yang-mendidik')}" target="_blank" rel="noopener">dua pelajaran gratis PixelKode</a>.`,
            { callout: 'Akhiri liburan dengan "pameran": anak memamerkan proyeknya ke keluarga. Momen ini memberi rasa bangga dan menutup liburan dengan cerita yang berkesan.', kind: 'good', title: 'Penutup yang berkesan' },
        ],
        faq: [
            ['Apa kegiatan liburan yang mendidik untuk anak SD?', 'Proyek seperti membuat game, komik, atau kebun mini; membaca buku pilihan; bergerak di luar; dan belajar keterampilan hidup seperti memasak.'],
            ['Perlukah les selama liburan?', 'Tidak wajib. Membaca rutin dan satu proyek yang bermakna biasanya cukup menjaga kebiasaan belajar tanpa membuat anak jenuh.'],
            ['Bagaimana mengatur screen time saat liburan?', 'Sepakati jatah hiburan harian, pisahkan waktu layar untuk proyek kreatif, dan pastikan gerak serta tidur tetap cukup.'],
            ['Berapa lama anak sebaiknya bergerak setiap hari?', 'WHO menganjurkan anak 5-17 tahun melakukan aktivitas fisik sedang hingga berat rata-rata 60 menit per hari.'],
        ],
        sources: [
            ['WHO (2020). Guidelines on physical activity and sedentary behaviour', 'https://www.who.int/publications/i/item/9789240015128'],
            ['AAP Family Media Plan', 'https://www.healthychildren.org/MediaUsePlan'],
            ['Yogman, M. dkk. (2018). The Power of Play. Pediatrics', 'https://doi.org/10.1542/peds.2018-2058'],
        ],
    },

    {
        slug: 'memilih-les-dan-ekstrakurikuler-anak',
        title: 'Memilih Les dan Ekstrakurikuler Anak agar Tidak Kelelahan',
        description: 'Cara memilih les dan ekstrakurikuler anak, menjaga keseimbangan kegiatan, tanda jadwal terlalu padat, dan kalkulator jam kegiatan mingguan.',
        date: D, category: C, tags: ['memilih les anak', 'ekstrakurikuler', 'jadwal anak padat', 'kursus anak', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Jika coding masuk daftar pilihan, PixelKode bisa dijalankan dari rumah 2 kali seminggu, sehingga tidak menambah waktu perjalanan ke jadwal anak yang sudah padat.',
        lead: 'Les matematika, les bahasa Inggris, renang, piano, robotik, mengaji, ditambah ekstrakurikuler di sekolah. Niatnya baik: memberi anak kesempatan sebanyak mungkin. Namun jadwal yang terlalu padat bisa membuat anak lelah, kehilangan waktu bermain, dan justru menurunkan semangat belajar. Berikut cara memilih dengan bijak.',
        body: [
            { h2: 'Mulai dari pertanyaan "kenapa"' },
            `Sebelum mendaftarkan anak ke les atau kegiatan baru, jawab tiga pertanyaan:`,
            { ol: [
                '<b>Untuk apa?</b> Mengejar ketertinggalan, mengembangkan minat, atau karena teman-temannya ikut?',
                '<b>Siapa yang ingin?</b> Anak sendiri, atau terutama orang tua?',
                '<b>Apa yang dikorbankan?</b> Waktu bermain, tidur, atau waktu keluarga?',
            ] },
            { callout: 'AAP dalam laporan The Power of Play mengingatkan bahwa jadwal anak yang terlalu terstruktur bisa menggeser waktu bermain bebas, padahal bermain penting untuk perkembangan sosial, emosional, dan kemampuan mengatur diri.', kind: 'warn', title: 'Bermain juga kegiatan penting' },

            { h2: 'Jaga keseimbangan ranah' },
            { table: { head: ['Ranah', 'Contoh', 'Manfaat utama'], rows: [
                ['Gerak', 'Renang, sepak bola, bela diri, tari', 'Kesehatan, koordinasi, kerja sama tim'],
                ['Seni', 'Musik, menggambar, teater', 'Ekspresi, kesabaran, kreativitas'],
                ['Akademik', 'Les mata pelajaran', 'Menutup celah materi'],
                ['Teknologi', 'Coding, robotik', 'Logika, pemecahan masalah, berkarya digital'],
                ['Spiritual dan sosial', 'Mengaji, sekolah minggu, pramuka', 'Nilai, kebersamaan'],
            ] } },
            `Untuk anak SD, satu atau dua kegiatan di luar sekolah biasanya sudah cukup, idealnya dari ranah berbeda. Satu kegiatan gerak dan satu kegiatan minat (seni atau teknologi) adalah kombinasi yang seimbang.`,

            { h2: 'Hitung beban mingguan anak' },
            { w: 'calc', title: 'Kalkulator jam kegiatan anak', desc: 'Termasuk waktu perjalanan. Angka awal adalah contoh anak SD dengan dua les.', inputs: [
                { id: 'sekolah', label: 'Jam sekolah per minggu', value: 35, min: 20, max: 50, step: 1 },
                { id: 'les', label: 'Jam les dan kegiatan per minggu', value: 4, min: 0, max: 20, step: 0.5 },
                { id: 'jalan', label: 'Jam perjalanan ke les per minggu', value: 2, min: 0, max: 10, step: 0.5 },
                { id: 'pr', label: 'Jam PR per minggu', value: 4, min: 0, max: 15, step: 0.5 },
            ], outputs: [
                { label: 'Total jam terjadwal per minggu', expr: 'sekolah + les + jalan + pr', fmt: 'num', unit: 'jam', big: true },
                { label: 'Rata-rata per hari sekolah', expr: '(sekolah + les + jalan + pr) / 5', fmt: 'num', unit: 'jam' },
                { label: 'Catatan', expr: "(sekolah + les + jalan + pr) / 5 > 10 ? 'Sangat padat. Pertimbangkan mengurangi satu kegiatan.' : ((sekolah + les + jalan + pr) / 5 > 8.5 ? 'Cukup padat. Pastikan tidur dan bermain bebas tetap cukup.' : 'Masih menyisakan ruang untuk bermain dan istirahat.')", fmt: 'text' },
            ] },

            { h2: 'Tanda jadwal terlalu padat' },
            { w: 'checklist', title: 'Periksa tanda kelelahan', desc: 'Centang yang terjadi dalam beberapa minggu terakhir.', items: ['Anak sering mengeluh lelah atau sakit kepala.', 'Tidur makin malam karena PR menumpuk setelah les.', 'Anak tidak punya waktu bermain bebas di hari sekolah.', 'Kehilangan semangat pada kegiatan yang dulu disukai.', 'Lebih mudah marah atau menangis.', 'Nilai sekolah justru menurun.'] },

            { h2: 'Memilih tempat les yang baik' },
            { ul: [
                '<b>Coba dulu.</b> Ikut kelas percobaan dan perhatikan reaksi anak setelahnya.',
                '<b>Ukuran kelompok.</b> Kelompok kecil memungkinkan perhatian dan umpan balik.',
                '<b>Cara mengajar.</b> Anak aktif mengerjakan, bukan hanya mendengarkan.',
                '<b>Transparansi.</b> Materi, biaya, dan cara berhenti jelas.',
                '<b>Jarak dan waktu.</b> Waktu perjalanan adalah biaya tersembunyi yang besar.',
            ] },

            { h2: 'Kapan berhenti?' },
            `Berhenti dari les tidak selalu berarti gagal. Bila setelah memberi waktu yang cukup (misalnya satu semester) anak tetap sangat tidak menikmati kegiatan itu, dan tidak ada alasan kuat untuk melanjutkan, berhenti dan mencoba hal lain adalah keputusan yang sehat. Ajak anak merefleksikan: apa yang ia pelajari, dan kenapa ia ingin berhenti.`,
            `Bila coding termasuk pilihan, kelas daring dari rumah dapat menghemat waktu perjalanan. <a href="${pk('memilih-les-dan-ekstrakurikuler-anak', '/')}" target="_blank" rel="noopener">PixelKode</a> menyarankan dua pelajaran 45-60 menit per minggu, dan paket berbayarnya tidak diperpanjang otomatis sehingga mudah dihentikan bila tidak cocok.`,
        ],
        faq: [
            ['Berapa banyak les yang ideal untuk anak SD?', 'Umumnya satu atau dua kegiatan di luar sekolah, dari ranah berbeda, sudah cukup dan tetap menyisakan waktu bermain serta istirahat.'],
            ['Bagaimana tahu anak kelelahan karena les?', 'Perhatikan keluhan lelah, tidur yang makin malam, hilangnya semangat, mudah marah, dan nilai yang menurun.'],
            ['Apakah anak boleh berhenti les?', 'Boleh, setelah memberi waktu yang cukup dan merefleksikan alasannya bersama anak. Berhenti untuk mencoba hal lain bisa jadi keputusan sehat.'],
            ['Les apa yang paling penting?', 'Tergantung kebutuhan dan minat anak. Keseimbangan antara gerak, minat, dan akademik lebih penting daripada jenis les tertentu.'],
        ],
        sources: [
            ['Yogman, M. dkk. (2018). The Power of Play. Pediatrics', 'https://doi.org/10.1542/peds.2018-2058'],
            ['Paruthi, S. dkk. (2016). Rekomendasi jumlah tidur anak (AASM)', 'https://doi.org/10.5664/jcsm.5866'],
            ['WHO (2020). Guidelines on physical activity and sedentary behaviour', 'https://www.who.int/publications/i/item/9789240015128'],
        ],
    },

    {
        slug: 'fungsi-eksekutif-anak-kemampuan-mengatur-diri',
        title: 'Fungsi Eksekutif Anak: Kendali Diri yang Bisa Dilatih',
        description: 'Fungsi eksekutif adalah pusat kendali otak: memori kerja, kendali diri, dan fleksibilitas berpikir. Pahami perkembangannya dan cara melatihnya.',
        date: D, category: C, tags: ['fungsi eksekutif', 'executive function', 'regulasi diri anak', 'perkembangan otak anak', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Coding melatih ketiga komponen fungsi eksekutif sekaligus: mengingat tujuan program (memori kerja), tidak asal klik (kendali diri), dan mencoba strategi lain saat buntu (fleksibilitas).',
        lead: 'Kenapa ada anak yang bisa mengingat tiga instruksi sekaligus, menunggu giliran dengan sabar, dan beralih rencana saat keadaan berubah, sementara anak lain kesulitan? Jawabannya sering terletak pada fungsi eksekutif. Kabar baiknya, kemampuan ini bukan bakat tetap. Ia berkembang dan bisa dilatih lewat kegiatan sehari-hari.',
        body: [
            { h2: 'Apa itu fungsi eksekutif?' },
            `Center on the Developing Child di Harvard University menggambarkan fungsi eksekutif seperti <b>sistem pengatur lalu lintas di bandara</b>: otak harus mengelola banyak informasi, memprioritaskan, menahan yang tidak penting, dan menyesuaikan rencana. Ada tiga komponen inti:`,
            { svg: 'cycle', label: 'Tiga komponen fungsi eksekutif', items: ['Memori kerja', 'Kendali diri', 'Fleksibilitas berpikir'], caption: 'Ketiganya bekerja bersama dalam hampir setiap tugas belajar.' },
            { table: { head: ['Komponen', 'Artinya', 'Contoh pada anak'], rows: [
                ['<b>Memori kerja</b>', 'Menyimpan dan mengolah informasi dalam pikiran sesaat', 'Mengingat instruksi "ambil tas, pakai sepatu, tunggu di depan"'],
                ['<b>Kendali diri</b> (inhibitory control)', 'Menahan dorongan dan fokus meski ada gangguan', 'Tidak langsung menjawab sebelum soal selesai dibaca'],
                ['<b>Fleksibilitas berpikir</b>', 'Beralih cara pandang atau strategi', 'Mencoba cara lain saat cara pertama tidak berhasil'],
            ] } },

            { h2: 'Kenapa penting?' },
            `Fungsi eksekutif berkaitan dengan kesiapan sekolah, kemampuan belajar, dan hubungan sosial. Diamond dan Lee (2011) di jurnal <i>Science</i> meninjau berbagai program dan menyimpulkan fungsi eksekutif anak usia 4-12 tahun bisa ditingkatkan, dan anak yang awalnya paling lemah sering mendapat manfaat terbesar. Mereka juga mencatat bahwa latihan perlu terus menantang dan dilakukan berulang, dan bahwa kegiatan seperti permainan, seni, dan olahraga yang dirancang baik bisa ikut melatihnya.`,

            { h2: 'Perkembangan sesuai usia' },
            { svg: 'timeline', label: 'Perkembangan fungsi eksekutif', events: [['3-5 th', 'Lonjakan pesat', 'Mulai bisa mengikuti aturan permainan sederhana'], ['6-8 th', 'Makin terampil', 'Bisa mengingat beberapa instruksi dan menunggu giliran'], ['9-12 th', 'Lebih mandiri', 'Mulai bisa merencanakan tugas dan mengatur waktu dengan bantuan'], ['Remaja', 'Masih berkembang', 'Pematangan berlanjut sampai dewasa muda']] },
            { callout: 'Karena fungsi eksekutif terus berkembang sampai dewasa muda, wajar bila anak SD masih butuh bantuan mengatur jadwal, mengingat tugas, dan mengelola emosi. Bantuan yang dikurangi bertahap adalah cara terbaik melatihnya.', kind: 'info', title: 'Ekspektasi yang realistis' },

            { h2: 'Latihan lewat permainan sehari-hari' },
            { w: 'cards', title: 'Ketuk untuk melihat komponen yang dilatih', items: [
                { tag: 'Permainan', front: 'Simon berkata ("Simon berkata pegang hidung")', backTag: 'Melatih', back: 'Kendali diri: hanya bergerak saat ada kata "Simon berkata".' },
                { tag: 'Permainan', front: 'Lampu merah, lampu hijau, lalu aturan dibalik', backTag: 'Melatih', back: 'Kendali diri dan fleksibilitas: merah jadi jalan, hijau jadi berhenti.' },
                { tag: 'Permainan', front: 'Pergi ke pasar ("Aku ke pasar membeli apel, buku, ...")', backTag: 'Melatih', back: 'Memori kerja: mengingat daftar yang terus bertambah.' },
                { tag: 'Permainan', front: 'Memasak dengan resep', backTag: 'Melatih', back: 'Perencanaan, memori kerja, dan urutan langkah.' },
                { tag: 'Permainan', front: 'Kartu memori (mencari pasangan)', backTag: 'Melatih', back: 'Memori kerja visual.' },
                { tag: 'Permainan', front: 'Coding dan teka-teki logika', backTag: 'Melatih', back: 'Ketiganya: mengingat tujuan, menahan diri untuk tidak asal mencoba, mengubah strategi saat buntu.' },
            ] },
            { w: 'robo', title: 'Latihan memori kerja', desc: 'Pelajari petanya selama 10 detik, lalu susun seluruh programnya tanpa menjalankan dulu. Setelah itu baru tekan Jalankan.', levels: [
                { name: 'Ingat jalannya', goal: 'Ambil dua permata, lalu ke bendera. Rencanakan seluruh langkah di kepala dulu.', map: ['#######', '#>*..##', '####.##', '#F.*.##', '#######'], max: 12 },
            ] },

            { h2: 'Dukungan di rumah' },
            { ul: [
                '<b>Rutinitas yang dapat diprediksi</b> mengurangi beban memori kerja anak.',
                '<b>Daftar periksa bergambar</b> untuk pagi hari atau persiapan sekolah.',
                '<b>Instruksi pendek</b>, satu atau dua langkah sekaligus untuk anak kecil.',
                '<b>Beri waktu transisi</b>, misalnya "lima menit lagi kita berangkat".',
                '<b>Tidur dan gerak cukup</b>, keduanya berpengaruh besar pada fungsi eksekutif.',
                '<b>Kurangi bantuan bertahap</b> seiring anak makin mampu.',
            ] },
            { w: 'checklist', title: 'Daftar pagi anak (contoh)', desc: 'Buat versi bergambar untuk anak dan tempel di pintu kamar.', items: ['Bangun dan rapikan tempat tidur', 'Mandi dan sikat gigi', 'Pakai seragam', 'Sarapan', 'Cek isi tas dengan daftar pelajaran', 'Pakai sepatu, pamit'] },
            `Kegiatan yang menantang, menyenangkan, dan diulang adalah kunci melatih fungsi eksekutif. Coding memenuhi ketiganya: setiap level menuntut perencanaan, menahan diri, dan berganti strategi. Anak bisa mencobanya lewat <a href="${pk('fungsi-eksekutif-anak-kemampuan-mengatur-diri')}" target="_blank" rel="noopener">latihan Robo gratis di PixelKode</a>.`,
        ],
        faq: [
            ['Apa itu fungsi eksekutif pada anak?', 'Kemampuan otak untuk mengatur diri: menyimpan informasi sesaat (memori kerja), menahan dorongan (kendali diri), dan beralih strategi (fleksibilitas berpikir).'],
            ['Apakah fungsi eksekutif bisa dilatih?', 'Ya. Penelitian menunjukkan kegiatan yang menantang dan berulang, termasuk permainan, seni, dan olahraga, dapat meningkatkannya.'],
            ['Permainan apa yang melatih fungsi eksekutif?', 'Simon berkata, lampu merah-lampu hijau dengan aturan dibalik, permainan memori, memasak dengan resep, dan teka-teki atau coding.'],
            ['Kapan fungsi eksekutif matang?', 'Berkembang pesat di usia prasekolah, terus meningkat di masa sekolah, dan pematangannya berlanjut sampai dewasa muda.'],
        ],
        sources: [
            ['Harvard Center on the Developing Child: Executive Function & Self-Regulation', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['Diamond, A., & Lee, K. (2011). Interventions shown to aid executive function development in children 4 to 12 years old. Science', 'https://doi.org/10.1126/science.1204529'],
            ['Paruthi, S. dkk. (2016). Rekomendasi jumlah tidur anak', 'https://doi.org/10.5664/jcsm.5866'],
        ],
    },

    {
        slug: 'hasil-pisa-indonesia-apa-artinya-untuk-orang-tua',
        title: 'Hasil PISA Indonesia: Apa Artinya bagi Orang Tua di Rumah',
        description: 'Penjelasan sederhana hasil PISA 2022 Indonesia, apa yang sebenarnya diukur PISA, dan langkah praktis orang tua di rumah untuk membantu anak bernalar.',
        date: D, category: C, tags: ['PISA Indonesia', 'kualitas pendidikan', 'literasi numerasi', 'pendidikan anak', 'peran orang tua'], cta: 'pixelkode',
        ctaNote: 'Soal PISA menekankan penalaran dan pemecahan masalah, bukan hafalan. Coding melatih cara berpikir itu dengan cara yang disukai anak. Coba dua pelajaran gratis PixelKode.',
        lead: 'Setiap kali hasil PISA diumumkan, berita pendidikan Indonesia ramai. Skor yang rendah sering dibahas, tetapi jarang dijelaskan apa artinya bagi keluarga. Artikel ini menjelaskan apa itu PISA, apa yang ditunjukkan hasil terakhirnya, dan langkah sederhana yang bisa dilakukan orang tua tanpa menunggu perubahan kebijakan.',
        body: [
            { h2: 'Apa itu PISA?' },
            `PISA (Programme for International Student Assessment) adalah asesmen internasional yang diselenggarakan OECD setiap beberapa tahun untuk siswa berusia 15 tahun. PISA tidak menguji hafalan kurikulum, melainkan kemampuan <b>memakai pengetahuan</b> untuk memecahkan masalah sehari-hari dalam tiga ranah: matematika, membaca, dan sains.`,
            { callout: 'Contoh gaya soal PISA: membandingkan dua paket data seluler untuk menentukan mana yang lebih hemat sesuai kebutuhan, atau menilai apakah sebuah klaim di artikel didukung data. Kemampuannya: membaca informasi, menalar, dan mengambil keputusan.', kind: 'info', title: 'Bukan soal hafalan' },

            { h2: 'Hasil PISA 2022 Indonesia dalam angka sederhana' },
            `Catatan negara OECD untuk Indonesia menyebut hasil 2022 di ketiga ranah turun dibanding 2018, dan berada di antara yang terendah yang pernah diukur PISA untuk Indonesia. Cara paling mudah memahaminya adalah melihat persentase siswa yang mencapai <b>Level 2</b>, tingkat kemampuan dasar yang dianggap minimum untuk berpartisipasi penuh dalam kehidupan modern.`,
            { svg: 'bars', label: 'Siswa yang mencapai minimal Level 2 (PISA 2022)', data: [['Mat. Indonesia', 18], ['Mat. rata-rata OECD', 69], ['Baca Indonesia', 25], ['Baca rata-rata OECD', 74]], unit: '%', max: 100, caption: 'Sumber: OECD, PISA 2022 Results, catatan negara Indonesia.' },
            `Artinya, sekitar 8 dari 10 siswa Indonesia usia 15 tahun belum mencapai kemampuan dasar matematika, misalnya menafsirkan dan mengenali bagaimana situasi sederhana bisa dinyatakan secara matematis. Di membaca, sekitar 3 dari 4 siswa belum mencapai tingkat dasar, seperti menemukan gagasan utama teks berukuran sedang.`,
            `Pemerintah juga mencatat bahwa pengukuran berlangsung tidak lama setelah pandemi, dan peringkat relatif Indonesia sedikit naik dibanding 2018 karena banyak negara juga mengalami penurunan. Namun bagi orang tua, angka kemampuan dasar di atas adalah pesan yang paling penting.`,

            { h2: 'Apa artinya bagi keluarga?' },
            `Hasil PISA tidak menilai anak Anda secara pribadi, dan banyak faktornya berada di tingkat sistem. Tetapi ada pola yang konsisten dari riset pendidikan: kebiasaan di rumah ikut memengaruhi kemampuan membaca dan bernalar. Berikut yang bisa dilakukan, disusun dari yang paling mudah:`,
            { table: { head: ['Ranah', 'Kebiasaan di rumah', 'Usaha'], rows: [
                ['Membaca', 'Membaca bersama 15 menit sehari dan membahas isinya', 'Rendah'],
                ['Membaca', 'Bertanya "apa gagasan utamanya?" dan "apa buktinya?"', 'Rendah'],
                ['Matematika', 'Melibatkan anak dalam belanja, memasak, dan merencanakan anggaran', 'Rendah'],
                ['Matematika', 'Bertanya "bagaimana kamu tahu?" saat anak menjawab soal', 'Rendah'],
                ['Sains', 'Melakukan eksperimen dapur dan menebak hasil sebelum mencoba', 'Sedang'],
                ['Penalaran', 'Permainan logika, teka-teki, dan coding', 'Sedang'],
            ] } },

            { h2: 'Latihan bergaya PISA untuk anak SD' },
            { w: 'quiz', title: 'Coba bersama anak kelas 5-6', questions: [
                { q: 'Paket A: 10 GB seharga Rp50.000. Paket B: 25 GB seharga Rp100.000. Mana yang lebih murah per GB?', options: ['Paket A', 'Paket B', 'Sama saja'], answer: 1, why: 'A: Rp5.000 per GB. B: Rp4.000 per GB. Paket B lebih murah per GB, tetapi hanya hemat bila kuotanya memang terpakai.' },
                { q: 'Sebuah iklan: "Penjualan naik 200%!" Penjualan bulan lalu 2 unit. Berapa penjualan bulan ini?', options: ['200 unit', '6 unit', '4 unit'], answer: 1, why: 'Naik 200% dari 2 berarti bertambah 4, jadi 6 unit. Persentase besar bisa berasal dari angka yang kecil.' },
                { q: 'Grafik menunjukkan suhu naik setiap jam dari pukul 06.00 sampai 12.00. Kesimpulan mana yang didukung data?', options: ['Suhu akan terus naik sampai malam', 'Suhu naik selama pagi sampai siang', 'Besok pasti lebih panas'], answer: 1, why: 'Data hanya mendukung kesimpulan untuk rentang waktu yang diukur.' },
            ] },

            { h2: 'Bernalar lewat coding' },
            `PISA juga mulai menilai berpikir kreatif dan pemecahan masalah. Coding adalah salah satu kegiatan yang melatih kemampuan ini secara langsung: anak membaca tujuan, menyusun langkah, menguji, lalu memperbaiki. Konsep matematika seperti koordinat, sudut, dan bilangan negatif juga hadir secara alami. Di Indonesia, pemerintah bahkan menambahkan mata pelajaran pilihan Koding dan Kecerdasan Artifisial mulai 2025/2026.`,
            `Anda tidak perlu menunggu sekolah. Coba bersama anak lewat <a href="${pk('hasil-pisa-indonesia-apa-artinya-untuk-orang-tua')}" target="_blank" rel="noopener">dua pelajaran gratis PixelKode</a>, lalu lanjutkan kebiasaan membaca dan bernalar di rumah. Perubahan besar sering dimulai dari kebiasaan kecil yang konsisten.`,
        ],
        faq: [
            ['Apa itu PISA?', 'Asesmen internasional oleh OECD untuk siswa 15 tahun yang mengukur kemampuan memakai matematika, membaca, dan sains untuk memecahkan masalah sehari-hari.'],
            ['Bagaimana hasil PISA Indonesia 2022?', 'Menurut OECD, sekitar 18% siswa mencapai minimal Level 2 di matematika (rata-rata OECD 69%) dan 25% di membaca (rata-rata OECD 74%).'],
            ['Apakah hasil PISA mencerminkan anak saya?', 'Tidak secara pribadi. PISA menggambarkan kondisi sistem pendidikan. Namun kebiasaan di rumah tetap berpengaruh pada kemampuan anak.'],
            ['Apa yang bisa dilakukan orang tua?', 'Membaca bersama dan membahas isinya, melibatkan anak dalam matematika sehari-hari, bertanya "bagaimana kamu tahu?", dan memberi kegiatan bernalar seperti teka-teki dan coding.'],
        ],
        sources: [
            ['OECD: PISA 2022 Results (Volume I and II), catatan negara Indonesia', 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/indonesia_c2e1ae0e-en.html'],
            ['Antara: Koding dan AI masuk Kurikulum 2025/2026', 'https://www.antaranews.com/berita/4983541/permendikdasmen-13-2025-koding-dan-ai-resmi-masuk-kurikulum-2025-2026'],
            ['AAP (2014). Literacy Promotion', 'https://doi.org/10.1542/peds.2014-1384'],
        ],
    },
];
