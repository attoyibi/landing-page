import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Pendidikan Anak';

export default [
    {
        slug: 'gaya-belajar-visual-auditori-kinestetik-mitos',
        title: 'Gaya Belajar Visual, Auditori, Kinestetik: Mitos atau Fakta?',
        description: 'Benarkah anak belajar lebih baik bila diajar sesuai gaya belajarnya? Ini kata riset, kenapa mitosnya bertahan, dan strategi yang terbukti.',
        date: D, category: C, tags: ['gaya belajar', 'visual auditori kinestetik', 'mitos pendidikan', 'cara belajar efektif', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Pelajaran di PixelKode sengaja menggabungkan banyak cara: gambar dan contoh interaktif, latihan Robo yang melibatkan gerak, dan proyek yang dibuat sendiri. Bukan karena gaya belajar, melainkan karena konsepnya memang paling jelas lewat cara itu.',
        lead: '"Anak saya tipe visual, jadi harus belajar pakai gambar." Kalimat ini sangat populer di kalangan orang tua dan guru. Banyak tes gaya belajar beredar di internet. Masalahnya, penelitian yang dirancang untuk mengujinya tidak menemukan bukti yang kuat. Artikel ini menjelaskan apa yang sebenarnya diketahui ilmu pendidikan, dan apa yang lebih layak menjadi fokus.',
        body: [
            { h2: 'Apa klaimnya?' },
            `Teori gaya belajar (sering disingkat VAK: visual, auditori, kinestetik) mengatakan setiap anak punya satu cara belajar terbaik, dan ia akan belajar lebih baik bila materi disampaikan sesuai gaya itu. Anak visual dengan gambar, anak auditori dengan mendengar, anak kinestetik dengan bergerak.`,
            `Bagian pertama terdengar masuk akal: anak memang punya <b>preferensi</b>. Ada yang lebih suka menggambar, ada yang suka bercerita. Yang dipersoalkan adalah bagian kedua: apakah mencocokkan cara mengajar dengan preferensi itu membuat anak <b>benar-benar belajar lebih baik</b>?`,

            { h2: 'Apa kata penelitian?' },
            `Pada 2008, Harold Pashler dan rekan-rekannya menerbitkan tinjauan di jurnal <i>Psychological Science in the Public Interest</i>. Mereka menjelaskan bahwa untuk membuktikan teori ini, dibutuhkan desain penelitian tertentu: anak dikelompokkan berdasarkan gaya belajarnya, lalu masing-masing diajar dengan beberapa cara, dan hasilnya harus menunjukkan bahwa setiap kelompok belajar paling baik dengan caranya sendiri. Setelah meninjau literatur, mereka menyimpulkan bahwa penelitian dengan desain yang tepat sangat sedikit, dan yang ada tidak mendukung teori ini.`,
            { callout: 'Kesimpulan para peneliti bukan "semua anak sama", melainkan: belum ada bukti yang memadai bahwa mencocokkan pengajaran dengan gaya belajar meningkatkan hasil belajar. Sumber daya pendidikan lebih baik dipakai untuk strategi yang terbukti.', kind: 'info', title: 'Nuansa yang penting' },

            { h2: 'Kenapa mitos ini bertahan?' },
            { ul: [
                '<b>Terasa benar.</b> Kita memang punya preferensi, jadi teori ini cocok dengan pengalaman.',
                '<b>Memberi harapan sederhana.</b> Satu label untuk menjelaskan kesulitan belajar terasa melegakan.',
                '<b>Tes gaya belajar mudah dibuat dan dijual.</b> Hasilnya menarik untuk dibagikan.',
                '<b>Sebagian benar dalam bentuk lain.</b> Materi tertentu memang paling baik disajikan dengan cara tertentu, misalnya peta dengan gambar dan musik dengan mendengar. Itu soal materinya, bukan soal anaknya.',
            ] },

            { h2: 'Bahaya label gaya belajar' },
            { w: 'cards', title: 'Ketuk untuk melihat masalahnya', items: [
                { tag: 'Label', front: '"Dia anak kinestetik, jadi tidak bisa duduk membaca."', backTag: 'Masalahnya', back: 'Label menjadi alasan untuk tidak melatih keterampilan penting. Semua anak perlu belajar membaca, mendengar, dan melakukan.' },
                { tag: 'Label', front: '"Saya visual, jadi tidak cocok belajar dari podcast."', backTag: 'Masalahnya', back: 'Membatasi pilihan belajar tanpa dasar. Banyak hal paling baik dipelajari dengan kombinasi cara.' },
                { tag: 'Label', front: '"Nilainya jelek karena gurunya tidak mengajar sesuai gayanya."', backTag: 'Masalahnya', back: 'Mengalihkan perhatian dari penyebab yang lebih mungkin: kurang latihan, kurang tidur, atau materi prasyarat belum dikuasai.' },
            ] },

            { h2: 'Yang terbukti efektif untuk semua anak' },
            `Tinjauan besar oleh John Dunlosky dan rekan (2013) menilai sepuluh teknik belajar populer. Dua teknik mendapat nilai tertinggi dan berlaku luas untuk berbagai usia dan materi:`,
            { table: { head: ['Strategi', 'Artinya', 'Contoh untuk anak'], rows: [
                ['<b>Latihan mengingat</b> (practice testing)', 'Menguji diri, bukan hanya membaca ulang', 'Tutup buku, lalu ceritakan isinya; kuis kecil buatan sendiri'],
                ['<b>Belajar berjarak</b> (distributed practice)', 'Mengulang sedikit-sedikit di hari berbeda', '10 menit perkalian setiap hari, bukan 1 jam sekali seminggu'],
                ['Gabungan kata dan gambar (dual coding)', 'Penjelasan lisan atau tulisan didampingi diagram', 'Menggambar siklus air sambil menjelaskannya'],
                ['Contoh konkret', 'Konsep abstrak diberi contoh nyata', 'Pecahan dengan potongan kue'],
                ['Menjelaskan dengan kata sendiri', 'Anak mengajari orang lain', 'Anak menjelaskan PR kepada adik atau boneka'],
            ] } },
            `Perhatikan bahwa "gabungan kata dan gambar" berbeda dari gaya belajar visual. Ini bukan soal anak tertentu yang visual, melainkan <b>semua anak</b> cenderung terbantu bila penjelasan verbal didukung visual yang relevan.`,
            { w: 'quiz', title: 'Mitos atau fakta?', questions: [
                { q: 'Anak "auditori" akan gagal jika belajar dengan membaca.', options: ['Fakta', 'Mitos'], answer: 1, why: 'Tidak ada bukti kuat untuk klaim ini. Semua anak perlu berlatih membaca.' },
                { q: 'Menguji diri sendiri (misalnya dengan kartu soal) membantu ingatan lebih tahan lama daripada membaca ulang.', options: ['Fakta', 'Mitos'], answer: 0, why: 'Latihan mengingat termasuk teknik dengan bukti paling kuat.' },
                { q: 'Penjelasan yang memadukan kata dan diagram membantu banyak anak memahami konsep.', options: ['Fakta', 'Mitos'], answer: 0, why: 'Ini prinsip dual coding yang berlaku umum, bukan hanya untuk anak "visual".' },
            ] },

            { h2: 'Jadi, apa yang perlu diperhatikan orang tua?' },
            { ol: [
                '<b>Perhatikan minat, bukan label.</b> Minat anak pada menggambar atau musik adalah pintu masuk, bukan batasan.',
                '<b>Pilih cara sesuai materi.</b> Geometri dengan gambar dan benda, bahasa dengan mendengar dan berbicara, olahraga dengan bergerak.',
                '<b>Pakai banyak jalur.</b> Lihat, dengar, lakukan, jelaskan. Kombinasi memperkuat ingatan.',
                '<b>Fokus pada strategi yang terbukti:</b> latihan mengingat dan belajar berjarak.',
            ] },
            `Coding adalah contoh kegiatan yang secara alami memadukan banyak jalur: membaca instruksi, melihat hasil, menyusun dengan tangan, dan menjelaskan karya. Anak tidak perlu "tipe" tertentu untuk menikmatinya. Coba bersama lewat <a href="${pk('gaya-belajar-visual-auditori-kinestetik-mitos')}" target="_blank" rel="noopener">dua pelajaran gratis PixelKode</a>.`,
        ],
        faq: [
            ['Apakah gaya belajar visual, auditori, kinestetik itu nyata?', 'Anak memang punya preferensi, tetapi penelitian tidak menemukan bukti kuat bahwa mengajar sesuai gaya itu meningkatkan hasil belajar.'],
            ['Apakah tes gaya belajar berguna?', 'Bisa menjadi bahan obrolan tentang minat, tetapi sebaiknya tidak dipakai untuk membatasi cara anak belajar.'],
            ['Strategi belajar apa yang terbukti efektif?', 'Latihan mengingat (menguji diri) dan belajar berjarak mendapat dukungan bukti paling kuat, ditambah penjelasan dengan kata dan gambar serta contoh konkret.'],
            ['Anak saya lebih suka bergerak. Bagaimana?', 'Manfaatkan gerak untuk materi yang cocok dan sebagai jeda, tetapi tetap latih membaca dan mendengar dengan sesi pendek.'],
        ],
        sources: [
            ['Pashler, H. dkk. (2008). Learning styles: Concepts and evidence. Psychological Science in the Public Interest', 'https://doi.org/10.1111/j.1539-6053.2009.01038.x'],
            ['Dunlosky, J. dkk. (2013). Improving students\' learning with effective learning techniques. Psychological Science in the Public Interest', 'https://doi.org/10.1177/1529100612453266'],
            ['Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x'],
        ],
    },

    {
        slug: 'pentingnya-bermain-untuk-perkembangan-anak',
        title: 'Pentingnya Bermain untuk Perkembangan Anak',
        description: 'Kenapa bermain adalah cara utama anak belajar menurut dokter anak: manfaatnya untuk otak, bahasa, dan sosial, jenis-jenis bermain, dan cara memberinya ruang.',
        date: D, category: C, tags: ['pentingnya bermain', 'bermain anak', 'tumbuh kembang anak', 'belajar sambil bermain', 'pola asuh'], cta: 'pixelkode',
        ctaNote: 'Prinsip "belajar sambil bermain" juga menjadi dasar PixelKode: anak menyusun blok, mencoba, salah, dan mencoba lagi seperti bermain, lalu memamerkan karyanya di galeri kelas.',
        lead: 'Di tengah les, PR, dan target akademik, waktu bermain anak sering dianggap kurang penting. Padahal American Academy of Pediatrics menyebut bermain bukan kegiatan sepele, melainkan cara utama anak belajar dan membangun otaknya. Artikel ini menjelaskan apa yang terjadi saat anak bermain, jenis-jenis bermain, dan cara melindunginya.',
        body: [
            { h2: 'Bermain adalah pekerjaan anak' },
            `Dalam laporan klinis "The Power of Play" (2018), American Academy of Pediatrics (AAP) menjelaskan bahwa bermain mendukung perkembangan otak, kemampuan bahasa, keterampilan sosial dan emosional, fungsi eksekutif, serta mengurangi stres. Laporan itu bahkan menganjurkan dokter anak "meresepkan" bermain dalam kunjungan rutin.`,
            `Bermain yang dimaksud bukan sekadar hiburan. Ciri-cirinya: <b>dilakukan karena ingin</b> (bukan karena disuruh), <b>menyenangkan</b>, <b>aktif</b>, sering melibatkan <b>imajinasi</b>, dan anak bebas mencoba tanpa takut salah.`,

            { h2: 'Apa yang dilatih saat anak bermain?' },
            { table: { head: ['Saat anak ...', 'Ia sedang melatih ...'], rows: [
                ['Bermain peran jadi penjual dan pembeli', 'Bahasa, berhitung, empati, aturan sosial'],
                ['Menyusun balok setinggi mungkin', 'Pemecahan masalah, keseimbangan, ketekunan'],
                ['Main petak umpet', 'Pengendalian diri, perencanaan, aturan'],
                ['Bermain di luar, memanjat, berlari', 'Motorik, kekuatan, menilai risiko'],
                ['Membuat dunia khayalan dengan teman', 'Kreativitas, negosiasi, kerja sama'],
                ['Bermain papan atau kartu', 'Strategi, menunggu giliran, menerima kalah'],
            ] } },
            { callout: 'Permainan dengan aturan, seperti petak umpet atau "lampu merah, lampu hijau", sangat baik untuk fungsi eksekutif: anak harus mengingat aturan, menahan dorongan, dan menyesuaikan diri saat aturan berubah.', kind: 'good', title: 'Bermain melatih kendali diri' },

            { h2: 'Jenis-jenis bermain' },
            { svg: 'layers', label: 'Jenis bermain', items: [{ t: 'Bermain bebas', d: 'anak memimpin, tanpa tujuan dari orang dewasa' }, { t: 'Bermain terbimbing', d: 'orang dewasa menyiapkan, anak tetap memimpin' }, { t: 'Bermain fisik di luar', d: 'berlari, memanjat, bersepeda' }, { t: 'Bermain peran dan khayalan', d: 'pura-pura menjadi dokter, astronot, penjual' }, { t: 'Bermain konstruksi', d: 'balok, lego, kardus, dan juga membuat karya digital' }], caption: 'Semua jenis bermanfaat. Yang paling sering terkikis adalah bermain bebas dan bermain di luar.' },
            `<b>Bermain terbimbing</b> menarik untuk orang tua. Penelitian Weisberg, Hirsh-Pasek, dan rekan menggambarkannya sebagai jalan tengah antara bermain bebas dan pelajaran langsung: orang dewasa menyiapkan lingkungan dan tujuan belajar, tetapi anak yang memimpin eksplorasi. Contohnya menyiapkan timbangan dan berbagai benda, lalu bertanya "mana yang lebih berat menurutmu?" tanpa memberi jawabannya.`,

            { h2: 'Ancaman bagi waktu bermain' },
            { ul: [
                '<b>Jadwal terlalu padat.</b> Sekolah, les, dan PR tidak menyisakan waktu bebas.',
                '<b>Layar menggantikan bermain.</b> Terutama tontonan pasif.',
                '<b>Kekhawatiran berlebihan.</b> Anak jarang dibiarkan bermain di luar.',
                '<b>Anggapan bermain = tidak produktif.</b> Padahal justru di sanalah banyak keterampilan tumbuh.',
            ] },

            { h2: 'Cek waktu bermain anak' },
            { w: 'calc', title: 'Berapa jam anak bermain bebas dalam seminggu?', desc: 'Hitung waktu bermain bebas (bukan les, bukan PR, bukan layar pasif).', inputs: [
                { id: 'harian', label: 'Rata-rata bermain bebas di hari sekolah (menit)', value: 45, min: 0, max: 240, step: 15 },
                { id: 'libur', label: 'Bermain bebas di hari libur (menit per hari)', value: 120, min: 0, max: 480, step: 15 },
                { id: 'luar', label: 'Dari total itu, persentase di luar ruangan', value: 30, min: 0, max: 100, step: 5 },
            ], outputs: [
                { label: 'Total bermain bebas per minggu', expr: '(harian * 5 + libur * 2) / 60', fmt: 'num', unit: 'jam', big: true },
                { label: 'Bermain di luar per minggu', expr: '(harian * 5 + libur * 2) * luar / 100 / 60', fmt: 'num', unit: 'jam' },
                { label: 'Catatan', expr: "(harian * 5 + libur * 2) / 60 < 7 ? 'Kurang dari 1 jam per hari. Pertimbangkan mengurangi jadwal terstruktur.' : 'Ruang bermainnya cukup. Pertahankan, terutama bermain di luar.'", fmt: 'text' },
            ] },

            { h2: 'Cara memberi ruang bermain' },
            { ol: [
                '<b>Jadwalkan waktu kosong.</b> Kedengarannya aneh, tetapi blok waktu tanpa agenda memberi ruang bermain bebas.',
                '<b>Sediakan bahan terbuka.</b> Kardus, balok, kertas, kain, tanah liat. Benda yang bisa menjadi apa saja memancing imajinasi.',
                '<b>Biarkan bosan sebentar.</b> Rasa bosan sering menjadi awal ide bermain yang kreatif.',
                '<b>Ikut bermain tanpa memimpin.</b> Biarkan anak menentukan aturan dan ceritanya.',
                '<b>Ke luar rumah.</b> Taman, halaman, lapangan. Bermain di luar melatih tubuh dan memberi pengalaman yang tidak ada di dalam ruangan.',
            ] },

            { h2: 'Bermain dan belajar bisa menyatu' },
            `Belajar terbaik bagi anak sering terasa seperti bermain: ada pilihan, tantangan, dan kesempatan mencoba tanpa takut salah. Mitchel Resnick dari MIT, pencipta Scratch, menyebut empat unsur kreativitas: <i>projects, passion, peers, play</i>. Coding yang baik untuk anak dirancang dengan semangat yang sama. Coba lihat sendiri lewat <a href="${pk('pentingnya-bermain-untuk-perkembangan-anak')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a>, lalu tetap sisakan waktu bermain di luar layar.`,
        ],
        faq: [
            ['Kenapa bermain penting untuk anak?', 'Bermain mendukung perkembangan otak, bahasa, sosial-emosional, dan fungsi eksekutif, serta membantu mengelola stres.'],
            ['Berapa lama anak sebaiknya bermain setiap hari?', 'Tidak ada angka pasti, tetapi pastikan ada waktu bermain bebas setiap hari, termasuk aktivitas fisik di luar.'],
            ['Apakah main game termasuk bermain?', 'Bisa, tetapi tidak menggantikan bermain fisik, sosial, dan imajinatif di dunia nyata. Seimbangkan keduanya.'],
            ['Apa itu bermain terbimbing?', 'Orang dewasa menyiapkan lingkungan dan tujuan belajar, tetapi anak yang memimpin eksplorasi.'],
        ],
        sources: [
            ['Yogman, M. dkk. (2018). The Power of Play: A Pediatric Role in Enhancing Development in Young Children. Pediatrics', 'https://doi.org/10.1542/peds.2018-2058'],
            ['Weisberg, D. S. dkk. (2016). Guided play: Principles and practices. Current Directions in Psychological Science', 'https://doi.org/10.1177/0963721416645512'],
            ['Harvard Center on the Developing Child: Executive Function', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['WHO (2019). Pedoman aktivitas fisik dan tidur anak di bawah 5 tahun', 'https://www.who.int/publications/i/item/9789241550536'],
        ],
    },

    {
        slug: 'melatih-problem-solving-dan-berpikir-kritis-anak',
        title: 'Melatih Problem Solving dan Berpikir Kritis pada Anak',
        description: 'Cara melatih anak memecahkan masalah dan berpikir kritis: 4 langkah Polya, pertanyaan pemicu, kegiatan sehari-hari, dan latihan interaktif.',
        date: D, category: C, tags: ['problem solving anak', 'berpikir kritis', 'keterampilan abad 21', 'pendidikan anak', 'logika anak'], cta: 'pixelkode',
        ctaNote: 'Setiap level Robo di PixelKode adalah latihan problem solving kecil: pahami peta, rencanakan rute, jalankan, lalu periksa. Petunjuk bertahap membantu tanpa membocorkan jawaban.',
        lead: 'Kita ingin anak bisa menyelesaikan masalahnya sendiri: soal matematika yang sulit, mainan yang rusak, atau konflik dengan teman. Kemampuan ini tidak muncul begitu saja. Ia dilatih lewat pengalaman kecil sehari-hari, ketika orang dewasa menahan diri untuk tidak langsung memberi jawaban.',
        body: [
            { h2: 'Problem solving dan berpikir kritis: bedanya' },
            `<b>Problem solving</b> adalah kemampuan menemukan jalan dari keadaan sekarang ke tujuan yang diinginkan. <b>Berpikir kritis</b> adalah kemampuan menilai informasi dan argumen: apakah ini benar, apa buktinya, adakah penjelasan lain? Keduanya saling membutuhkan. Untuk memecahkan masalah, anak perlu menilai ide-idenya; untuk menilai informasi, anak perlu menyelidiki seperti memecahkan teka-teki.`,

            { h2: 'Empat langkah Polya untuk anak' },
            `Matematikawan George Pólya dalam bukunya <i>How to Solve It</i> (1945) merumuskan empat langkah memecahkan masalah. Langkah ini masih dipakai luas sampai sekarang dan mudah disederhanakan untuk anak:`,
            { svg: 'flow', label: 'Empat langkah Polya', steps: [{ t: 'Pahami', d: 'apa yang ditanya? apa yang diketahui?' }, { t: 'Rencanakan', d: 'cara apa yang bisa dicoba?' }, { t: 'Lakukan', d: 'jalankan rencana dengan teliti' }, { t: 'Periksa', d: 'masuk akal? ada cara lain?' }], caption: 'Tempel di dinding meja belajar anak. Langkah 1 dan 4 paling sering dilewati.' },
            { table: { head: ['Langkah', 'Pertanyaan untuk anak'], rows: [
                ['1. Pahami', '"Ceritakan soalnya dengan kata-katamu sendiri." "Apa yang dicari?"'],
                ['2. Rencanakan', '"Pernah ketemu soal yang mirip?" "Bisa digambar?" "Mulai dari bagian mana?"'],
                ['3. Lakukan', '"Coba jalankan rencanamu. Kalau macet, di langkah ke berapa?"'],
                ['4. Periksa', '"Jawabannya masuk akal?" "Bisa dicek dengan cara lain?"'],
            ] } },

            { h2: 'Strategi yang bisa diajarkan' },
            { ul: [
                '<b>Gambar masalahnya.</b> Soal cerita jauh lebih mudah setelah digambar.',
                '<b>Coba yang lebih kecil dulu.</b> Kalau 100 terlalu besar, coba dengan 10.',
                '<b>Cari pola.</b> Kerjakan beberapa contoh, lihat apa yang berulang.',
                '<b>Bekerja mundur.</b> Mulai dari tujuan, lalu tanya "sebelum itu apa?"',
                '<b>Coba, salah, perbaiki.</b> Tebakan yang diuji lalu diperbaiki adalah strategi sah.',
            ] },
            { w: 'robo', title: 'Latihan: bekerja mundur', desc: 'Strategi "bekerja mundur": lihat bendera, lalu tanyakan dari kotak mana Robo harus datang. Telusuri mundur sampai ke Robo, baru susun programnya.', levels: [
                { name: 'Jalan berliku', goal: 'Bawa Robo ke bendera. Coba telusuri jalannya dari bendera ke belakang.', map: ['########', '#>.#...#', '##.#.#.#', '##...#F#', '########'], max: 16 },
            ] },

            { h2: 'Berpikir kritis: pertanyaan yang ampuh' },
            `Berpikir kritis bisa dilatih lewat obrolan sehari-hari, terutama saat anak menyampaikan sesuatu yang ia dengar atau lihat:`,
            { w: 'cards', title: 'Ketuk untuk melihat tujuan pertanyaannya', items: [
                { tag: 'Tanya', front: '"Dari mana kamu tahu itu?"', backTag: 'Melatih', back: 'Memikirkan sumber informasi.' },
                { tag: 'Tanya', front: '"Apa buktinya?"', backTag: 'Melatih', back: 'Membedakan pendapat dari fakta.' },
                { tag: 'Tanya', front: '"Mungkin tidak ada penjelasan lain?"', backTag: 'Melatih', back: 'Tidak terpaku pada satu kemungkinan.' },
                { tag: 'Tanya', front: '"Kalau kita lihat dari sisi temanmu, bagaimana?"', backTag: 'Melatih', back: 'Memahami sudut pandang lain.' },
                { tag: 'Tanya', front: '"Bagaimana kita bisa mengujinya?"', backTag: 'Melatih', back: 'Berpikir seperti ilmuwan: dugaan diuji, bukan langsung dipercaya.' },
            ] },
            { w: 'quiz', title: 'Latihan berpikir kritis untuk anak kelas 4-6', questions: [
                { q: 'Iklan berkata: "9 dari 10 anak suka permen ini!" Pertanyaan apa yang paling kritis?', options: ['Rasanya apa?', 'Siapa yang ditanya, dan berapa banyak anak?', 'Warnanya bagus tidak?'], answer: 1, why: 'Klaim angka perlu dicek: mungkin hanya 10 anak yang ditanya, dan dipilih oleh pembuat permen.' },
                { q: 'Temanmu bilang, "Kalau makan es, pasti batuk." Cara terbaik menanggapinya?', options: ['Langsung percaya', 'Bertanya: selalu? Ada yang makan es tapi tidak batuk?', 'Tidak pernah makan es lagi'], answer: 1, why: 'Mencari contoh yang berlawanan adalah cara menguji klaim "pasti".' },
                { q: 'Pesan berantai di grup WhatsApp bilang sekolah libur besok. Apa yang dilakukan?', options: ['Langsung tidak masuk sekolah', 'Cek ke guru atau pengumuman resmi sekolah', 'Teruskan ke semua teman'], answer: 1, why: 'Informasi penting dicek ke sumber resminya sebelum dipercaya atau dibagikan.' },
            ] },

            { h2: 'Peran orang tua: menahan diri' },
            `Godaan terbesar orang tua adalah langsung memberi jawaban, karena lebih cepat dan anak berhenti merengek. Tetapi setiap kali kita menyelesaikan masalah untuk anak, ia kehilangan kesempatan berlatih. Coba urutan bantuan bertahap ini:`,
            { ol: [
                '<b>Tunggu.</b> Beri waktu beberapa menit sebelum menawarkan bantuan.',
                '<b>Tanya.</b> "Sudah coba apa saja?"',
                '<b>Beri petunjuk kecil.</b> "Coba lihat lagi kalimat kedua soalnya."',
                '<b>Beri petunjuk lebih jelas.</b> "Bagaimana kalau digambar dulu?"',
                '<b>Contohkan sebagian.</b> Kerjakan langkah pertama bersama, biarkan anak melanjutkan.',
            ] },
            { callout: 'Bantuan bertahap seperti ini sering disebut scaffolding: dukungan yang dikurangi sedikit demi sedikit seiring anak makin mampu, seperti perancah bangunan yang dilepas setelah gedungnya berdiri.', kind: 'info', title: 'Istilah yang perlu diketahui' },

            { h2: 'Kegiatan sehari-hari yang melatih problem solving' },
            { ul: [
                '<b>Merencanakan acara keluarga</b> dengan anggaran tertentu.',
                '<b>Memperbaiki benda</b> sederhana bersama: mainan, sepeda, rak.',
                '<b>Memasak dengan resep</b>, termasuk menyesuaikan takaran.',
                '<b>Permainan strategi</b> seperti catur, congklak, dan permainan papan.',
                '<b>Coding dan teka-teki logika</b>, di mana umpan baliknya langsung terlihat.',
            ] },
            `Coding sangat efektif untuk melatih problem solving karena komputer memberi umpan balik jujur dan cepat: program berhasil atau tidak, dan anak bisa langsung mencoba lagi. <a href="${pk('melatih-problem-solving-dan-berpikir-kritis-anak')}" target="_blank" rel="noopener">Latihan Robo di PixelKode</a> dirancang mengikuti langkah Polya, lengkap dengan petunjuk bertahap seperti scaffolding di atas.`,
        ],
        faq: [
            ['Bagaimana melatih problem solving pada anak?', 'Ajarkan langkah pahami, rencanakan, lakukan, periksa; beri waktu mencoba sendiri; dan bantu dengan pertanyaan, bukan jawaban.'],
            ['Apa bedanya problem solving dan berpikir kritis?', 'Problem solving menemukan jalan menuju tujuan; berpikir kritis menilai informasi dan argumen. Keduanya saling melengkapi.'],
            ['Usia berapa anak bisa diajari berpikir kritis?', 'Sejak prasekolah lewat pertanyaan sederhana seperti "kenapa menurutmu?". Kompleksitasnya bertambah seiring usia.'],
            ['Apakah memberi jawaban langsung itu salah?', 'Tidak selalu, tetapi coba dulu bantuan bertahap. Anak yang menemukan jawaban sendiri lebih memahami dan mengingatnya.'],
        ],
        sources: [
            ['Pólya, G. (1945). How to Solve It. Princeton University Press', 'https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it'],
            ['Harvard Center on the Developing Child: Executive Function', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['Wing, J. M. (2006). Computational Thinking', 'https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf'],
            ['OECD: PISA 2022 Results (termasuk berpikir kreatif dan pemecahan masalah)', 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/indonesia_c2e1ae0e-en.html'],
        ],
    },

    {
        slug: 'jadwal-belajar-anak-sd-di-rumah',
        title: 'Jadwal Belajar Anak SD di Rumah: Contoh dan Cara Membuatnya',
        description: 'Cara menyusun jadwal belajar anak SD yang realistis: durasi per kelas, contoh jadwal harian dan mingguan, prinsip belajar berjarak, dan pembuat jadwal.',
        date: D, category: C, tags: ['jadwal belajar anak SD', 'rutinitas anak', 'belajar di rumah', 'cara belajar efektif', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Kalau ingin menambah kegiatan coding di jadwal, PixelKode menyarankan 2 pelajaran per minggu, 45-60 menit. Dengan ritme itu, 32 pelajaran selesai sekitar 4 bulan.',
        lead: 'Jadwal belajar yang baik membuat sore hari lebih tenang: anak tahu kapan belajar, kapan bermain, dan orang tua tidak perlu terus-menerus mengingatkan. Kuncinya bukan jadwal yang padat, melainkan jadwal yang realistis, konsisten, dan menyisakan ruang untuk istirahat.',
        body: [
            { h2: 'Prinsip jadwal yang berhasil' },
            { ul: [
                '<b>Pendek dan rutin lebih baik dari panjang dan jarang.</b> Riset tentang belajar berjarak (spacing) menunjukkan latihan yang dibagi ke beberapa hari menghasilkan ingatan lebih tahan lama.',
                '<b>Waktu yang sama setiap hari.</b> Rutinitas mengurangi tawar-menawar.',
                '<b>Setelah istirahat, bukan langsung pulang sekolah.</b> Anak butuh makan, mandi, dan bermain sebentar.',
                '<b>Tidur tidak dikorbankan.</b> Anak 6-12 tahun dianjurkan tidur 9-12 jam.',
                '<b>Libatkan anak menyusunnya.</b> Jadwal yang ikut dibuat anak lebih dipatuhi.',
            ] },

            { h2: 'Berapa lama belajar di rumah?' },
            `Tidak ada aturan baku, dan kebutuhan setiap anak berbeda. Patokan umum yang dipakai banyak sekolah adalah sekitar 10 menit per jenjang kelas untuk pekerjaan rumah (kelas 1 sekitar 10 menit, kelas 6 sekitar 60 menit). Tinjauan penelitian Cooper dan rekan (2006) juga menemukan hubungan PR dengan prestasi lebih lemah di SD dibanding SMP dan SMA, sehingga untuk anak SD, kualitas dan kebiasaan lebih penting daripada durasi panjang.`,
            { table: { head: ['Kelas', 'Belajar terfokus (patokan)', 'Format'], rows: [
                ['1-2', '10-20 menit', '1 sesi pendek, lebih banyak membaca bersama dan bermain angka'],
                ['3-4', '20-40 menit', '2 sesi dengan jeda gerak'],
                ['5-6', '40-60 menit', '2-3 sesi dengan jeda'],
            ] } },
            { callout: 'Angka di atas untuk belajar akademik, tidak termasuk membaca buku untuk kesenangan, bermain, atau hobi seperti coding dan musik.', kind: 'info', title: 'Yang tidak dihitung' },

            { h2: 'Contoh jadwal harian anak kelas 4' },
            { table: { head: ['Jam', 'Kegiatan'], rows: [
                ['13.00-14.00', 'Pulang, makan siang, istirahat'],
                ['14.00-15.30', 'Bermain bebas atau tidur siang'],
                ['15.30-16.00', 'Mandi dan camilan'],
                ['16.00-16.20', 'Belajar sesi 1: PR atau latihan'],
                ['16.20-16.30', 'Jeda gerak'],
                ['16.30-16.50', 'Belajar sesi 2: mengulang materi atau membaca'],
                ['16.50-18.00', 'Main di luar, hobi, atau kegiatan keluarga'],
                ['18.00-19.30', 'Makan malam, ibadah, waktu keluarga'],
                ['19.30-20.00', 'Persiapan esok hari dan membaca buku'],
                ['20.00', 'Waktu tidur (gawai di luar kamar)'],
            ] } },

            { h2: 'Jadwal mingguan: variasi kegiatan' },
            { table: { head: ['Hari', 'Akademik', 'Kegiatan tambahan'], rows: [
                ['Senin', 'PR + ulang materi hari ini', 'Membaca bersama'],
                ['Selasa', 'PR + latihan perkalian 10 menit', 'Coding atau proyek kreatif 45 menit'],
                ['Rabu', 'PR + ulang materi', 'Olahraga atau ekskul'],
                ['Kamis', 'PR + latihan menulis', 'Coding atau proyek kreatif 45 menit'],
                ['Jumat', 'Ringan: ulang seminggu dengan kuis kecil', 'Bebas'],
                ['Sabtu', 'Opsional 20 menit', 'Ke luar rumah, perpustakaan, bermain'],
                ['Minggu', 'Persiapan pekan depan 15 menit', 'Istirahat dan keluarga'],
            ] } },

            { h2: 'Buat jadwal anak Anda' },
            { w: 'builder', title: 'Pembuat jadwal belajar', desc: 'Isi bersama anak, lalu cetak dan tempel di dekat meja belajar.', fields: [
                { id: 'nama', label: 'Nama anak', placeholder: 'mis. Dina' },
                { id: 'mulai', label: 'Jam mulai belajar', placeholder: 'mis. 16.00' },
                { id: 's1', label: 'Sesi 1 (apa dan berapa lama)', placeholder: 'mis. PR, 20 menit' },
                { id: 'jeda', label: 'Kegiatan jeda', placeholder: 'mis. lompat tali 10 menit' },
                { id: 's2', label: 'Sesi 2 (apa dan berapa lama)', placeholder: 'mis. membaca, 20 menit' },
                { id: 'hobi', label: 'Hobi atau proyek minggu ini', placeholder: 'mis. coding Selasa dan Kamis' },
                { id: 'tidur', label: 'Jam tidur', placeholder: 'mis. 20.00' },
            ], template: 'JADWAL BELAJAR {nama}\n\n{mulai}  Sesi 1: {s1}\n        Jeda: {jeda}\n        Sesi 2: {s2}\n\nHobi/proyek: {hobi}\nTidur pukul {tidur}. Gawai diisi daya di luar kamar.' },

            { h2: 'Ulangi sedikit, tapi sering' },
            `Salah satu temuan paling kuat dalam ilmu belajar adalah <b>efek berjarak</b> (spacing effect): mengulang materi beberapa kali dengan jeda beberapa hari jauh lebih efektif daripada belajar banyak sekaligus menjelang ulangan. Praktiknya untuk anak SD: setiap hari sisihkan 5-10 menit untuk mengulang materi kemarin dan minggu lalu dengan pertanyaan singkat, bukan membaca ulang.`,
            { w: 'checklist', title: 'Kebiasaan mengulang harian', desc: 'Centang setiap hari yang sudah dilakukan. Progres tersimpan di browser ini.', items: ['Senin: tanya 3 hal yang dipelajari hari ini', 'Selasa: kuis kecil dari materi minggu lalu', 'Rabu: anak menjelaskan satu konsep ke orang tua', 'Kamis: latihan soal 10 menit tanpa melihat buku', 'Jumat: kuis gabungan materi seminggu'] },

            { h2: 'Saat jadwal tidak berjalan' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Masalah', front: 'Anak selalu menunda dan tawar-menawar.', backTag: 'Coba', back: 'Pakai pewaktu dan "mulai 5 menit saja". Setelah mulai, anak biasanya melanjutkan.' },
                { tag: 'Masalah', front: 'Jadwal terlalu padat, anak kelelahan.', backTag: 'Coba', back: 'Kurangi les atau kegiatan. Waktu bebas dan tidur adalah bagian dari jadwal yang sehat.' },
                { tag: 'Masalah', front: 'Hari tertentu selalu kacau.', backTag: 'Coba', back: 'Jadikan hari itu "ringan" dengan target minimal yang pasti tercapai.' },
            ] },
            `Jadwal yang baik juga memberi tempat bagi kegiatan yang anak cintai. Bila anak tertarik pada coding, dua sesi 45 menit per minggu sudah cukup untuk berkembang pesat. <a href="${pk('jadwal-belajar-anak-sd-di-rumah')}" target="_blank" rel="noopener">Coba pelajaran pertama PixelKode</a> untuk melihat apakah cocok masuk jadwal anak.`,
        ],
        faq: [
            ['Berapa lama anak SD sebaiknya belajar di rumah?', 'Patokan umum sekitar 10 menit per jenjang kelas untuk pekerjaan akademik, dibagi menjadi sesi pendek dengan jeda.'],
            ['Kapan waktu terbaik belajar setelah sekolah?', 'Setelah anak makan, istirahat, dan bermain sebentar, biasanya sore hari, bukan menjelang tidur.'],
            ['Apakah anak SD perlu les tambahan?', 'Tergantung kebutuhan. Pastikan les tidak menghabiskan waktu bermain dan tidur yang juga penting untuk perkembangan.'],
            ['Bagaimana agar anak konsisten mengikuti jadwal?', 'Libatkan anak menyusunnya, pakai waktu yang sama setiap hari, mulai dari sesi pendek, dan tinjau bersama setiap beberapa minggu.'],
        ],
        sources: [
            ['Cooper, H., Robinson, J. C., & Patall, E. A. (2006). Does homework improve academic achievement? Review of Educational Research', 'https://doi.org/10.3102/00346543076001001'],
            ['Dunlosky, J. dkk. (2013). Improving students\' learning with effective learning techniques', 'https://doi.org/10.1177/1529100612453266'],
            ['Paruthi, S. dkk. (2016). Recommended amount of sleep for pediatric populations', 'https://doi.org/10.5664/jcsm.5866'],
        ],
    },

    {
        slug: 'cara-membantu-pr-anak-tanpa-mengerjakannya',
        title: 'Cara Membantu PR Anak Tanpa Mengerjakannya',
        description: 'Cara membantu PR anak yang benar menurut riset: kapan membantu, kalimat saat anak macet, mengatasi drama PR, dan tangga kemandirian.',
        date: D, category: C, tags: ['membantu PR anak', 'pekerjaan rumah', 'pendampingan belajar', 'pola asuh', 'anak SD'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, petunjuk muncul bertahap saat anak macet dan pemeriksaan otomatis menunjukkan target mana yang sudah tercapai. Orang tua cukup menemani, tidak perlu menjadi guru coding.',
        lead: 'Jam tujuh malam, PR belum selesai, anak menangis, orang tua frustrasi, dan akhirnya PR dikerjakan orang tua. Skenario ini sangat umum. Penelitian menunjukkan cara orang tua terlibat dalam PR lebih penting daripada seberapa banyak. Berikut cara membantu yang benar-benar membuat anak belajar.',
        body: [
            { h2: 'Apa kata riset tentang keterlibatan orang tua' },
            `Tinjauan penelitian oleh Patall, Cooper, dan Robinson (2008) menemukan bahwa keterlibatan orang tua dalam PR punya efek yang beragam: membantu bila berbentuk dukungan terhadap kemandirian anak, tetapi bisa merugikan bila berbentuk kontrol dan campur tangan berlebihan. Panduan Education Endowment Foundation (EEF) di Inggris menyimpulkan hal serupa: orang tua sebaiknya <b>mengetahui</b> PR anak dan <b>mendukung</b> anak mengerjakannya, misalnya membantu membuat rutinitas, merencanakan, dan mengatur waktu, daripada terlibat langsung mengerjakan tugasnya.`,
            { svg: 'versus', label: 'Keterlibatan yang membantu vs merugikan', left: { title: 'Membantu', items: ['Menyiapkan tempat dan waktu', 'Bertanya untuk memancing berpikir', 'Membantu merencanakan', 'Memuji usaha dan strategi', 'Menghubungi guru bila perlu'] }, right: { title: 'Merugikan', items: ['Mengerjakan untuk anak', 'Mengoreksi setiap kesalahan langsung', 'Marah dan menekan', 'Mengajarkan cara berbeda dari guru tanpa bertanya', 'Memaksa sampai larut malam'] } },

            { h2: 'Lima peran orang tua yang paling berdampak' },
            { ol: [
                '<b>Penata panggung.</b> Tempat tenang, alat lengkap, waktu yang sama setiap hari.',
                '<b>Perencana bersama.</b> "PR hari ini apa saja? Mana yang dikerjakan dulu?"',
                '<b>Penanya.</b> Pertanyaan yang membuat anak berpikir, bukan jawaban.',
                '<b>Penyemangat.</b> Mengakui usaha dan rasa frustrasinya.',
                '<b>Penghubung dengan guru.</b> Memberi tahu guru bila PR terlalu sulit atau terlalu lama.',
            ] },

            { h2: 'Kalimat ajaib saat anak macet' },
            { table: { head: ['Situasi', 'Coba katakan'], rows: [
                ['Anak bilang "aku tidak bisa"', '"Bagian mana yang sudah kamu pahami? Kita mulai dari situ."'],
                ['Anak minta jawabannya', '"Apa yang diminta soal ini? Coba bacakan dengan suaramu."'],
                ['Anak salah', '"Coba periksa lagi nomor 3. Ada yang perlu dicek?" (tanpa menunjuk letak salahnya)'],
                ['Anak frustrasi', '"Ini memang sulit. Mau istirahat 5 menit dulu?"'],
                ['Anak berhasil', '"Kamu tadi membaca ulang soalnya dan menemukan kesalahannya sendiri. Itu cara yang bagus."'],
            ] } },
            { callout: 'Kesalahan di PR adalah informasi berharga bagi guru: menunjukkan bagian mana yang belum dipahami. PR yang sempurna karena dikoreksi orang tua menyembunyikan informasi itu.', kind: 'warn', title: 'Biarkan sebagian kesalahan sampai ke guru' },

            { h2: 'Mengatasi drama PR' },
            { w: 'choose', title: 'Apa sumber drama PR di rumah Anda?', questions: [
                { q: 'Kapan drama paling sering terjadi?', options: [{ t: 'Saat harus mulai', add: { mulai: 3 } }, { t: 'Di tengah, saat ketemu soal sulit', add: { sulit: 3 } }, { t: 'Malam hari, anak sudah lelah', add: { lelah: 3 } }] },
                { q: 'Berapa lama PR biasanya selesai?', options: [{ t: 'Sebentar, kalau sudah mulai', add: { mulai: 2 } }, { t: 'Sangat lama, jauh melebihi perkiraan', add: { sulit: 2, guru: 2 } }, { t: 'Tergantung kondisi anak', add: { lelah: 2 } }] },
                { q: 'Apakah anak paham materinya?', options: [{ t: 'Paham, tapi malas', add: { mulai: 2 } }, { t: 'Sering tidak paham', add: { guru: 3, sulit: 1 } }] },
            ], results: {
                mulai: { title: 'Masalah memulai', text: 'Gunakan rutinitas waktu tetap dan teknik "5 menit saja". Pecah PR menjadi langkah kecil yang bisa dicentang.' },
                sulit: { title: 'Macet di soal sulit', text: 'Ajarkan strategi: baca ulang, gambar, kerjakan yang mudah dulu, tandai yang sulit untuk ditanyakan ke guru.' },
                lelah: { title: 'Anak kelelahan', text: 'Majukan waktu PR, pastikan anak sudah makan dan istirahat, dan jangan memaksa sampai larut malam.' },
                guru: { title: 'Bicarakan dengan guru', text: 'Bila anak sering tidak paham atau PR selalu sangat lama, guru perlu tahu supaya bisa membantu di kelas.' },
            } },

            { h2: 'Bila Anda tidak paham materinya' },
            `Kurikulum dan cara mengerjakan soal sekarang bisa berbeda dari zaman orang tua sekolah. Itu wajar. Yang bisa dilakukan:`,
            { ul: [
                '<b>Jujur.</b> "Mama juga tidak yakin. Ayo lihat contoh di buku catatanmu."',
                '<b>Minta anak mengajari Anda.</b> Menjelaskan adalah cara belajar yang sangat kuat.',
                '<b>Hindari mengajarkan cara lain</b> yang bertentangan dengan cara guru, karena bisa membingungkan. Tanyakan cara yang diajarkan di kelas.',
                '<b>Hubungi guru</b> untuk meminta penjelasan atau contoh.',
            ] },
            { callout: 'Penelitian tentang kecemasan matematika menunjukkan anak dari orang tua yang cemas matematika belajar lebih sedikit, terutama bila orang tua sering membantu PR matematika. Jaga kalimat Anda tetap positif tentang pelajaran yang sedang dikerjakan.', kind: 'info', title: 'Hati-hati menularkan rasa cemas' },

            { h2: 'Dari PR ke kemandirian' },
            `Tujuan jangka panjang adalah anak mengerjakan PR secara mandiri. Kurangi keterlibatan secara bertahap: dari duduk menemani, menjadi berada di ruangan yang sama, lalu hanya mengecek di akhir. Rayakan setiap langkah kemandirian.`,
            { w: 'checklist', title: 'Tangga kemandirian PR', desc: 'Centang tahap yang sudah dicapai anak.', items: ['Anak tahu PR apa saja hari ini tanpa diingatkan.', 'Anak menyiapkan alat sendiri.', 'Anak mulai mengerjakan pada waktu yang disepakati.', 'Anak mencoba sendiri sebelum bertanya.', 'Anak memeriksa pekerjaannya sebelum selesai.', 'Anak memasukkan PR ke tas sendiri.'] },
            `Kemampuan bekerja mandiri, mencoba dulu sebelum bertanya, dan memeriksa hasil sendiri juga dilatih lewat kegiatan seperti coding, di mana program yang salah bisa diperbaiki tanpa menunggu orang lain. <a href="${pk('cara-membantu-pr-anak-tanpa-mengerjakannya')}" target="_blank" rel="noopener">PixelKode</a> dirancang agar anak bisa belajar sendiri dengan petunjuk bertahap, sementara orang tua cukup menemani dan bertanya.`,
        ],
        faq: [
            ['Apakah orang tua harus membantu PR anak?', 'Orang tua sebaiknya mengetahui dan mendukung, misalnya membuat rutinitas dan bertanya untuk memancing berpikir, bukan mengerjakan tugasnya.'],
            ['Bagaimana jika anak menangis saat mengerjakan PR?', 'Akui perasaannya, beri jeda singkat, pecah tugasnya menjadi kecil, dan bicarakan dengan guru bila sering terjadi.'],
            ['Perlukah mengoreksi semua kesalahan PR anak?', 'Tidak. Minta anak memeriksa sendiri. Sebagian kesalahan yang sampai ke guru membantu guru tahu bagian yang belum dipahami.'],
            ['Saya tidak paham materi PR anak. Apa yang harus dilakukan?', 'Jujur, minta anak menjelaskan cara yang diajarkan guru, lihat contoh di buku, dan hubungi guru bila perlu.'],
        ],
        sources: [
            ['Patall, E. A., Cooper, H., & Robinson, J. C. (2008). Parent involvement in homework: A research synthesis. Review of Educational Research', 'https://doi.org/10.3102/0034654308325185'],
            ['Education Endowment Foundation: Working with Parents to Support Children\'s Learning', 'https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/supporting-parents'],
            ['Cooper, H. dkk. (2006). Does homework improve academic achievement?', 'https://doi.org/10.3102/00346543076001001'],
            ['Maloney, E. A. dkk. (2015). Intergenerational effects of parents\' math anxiety', 'https://doi.org/10.1177/0956797615592630'],
        ],
    },
];
