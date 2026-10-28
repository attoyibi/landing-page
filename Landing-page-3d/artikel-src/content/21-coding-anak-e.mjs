import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding untuk Anak';

export default [
    {
        slug: 'robotik-atau-coding-visual-mana-dulu-untuk-anak',
        title: 'Robotik atau Coding Visual: Mana Dulu untuk Anak?',
        description: 'Perbandingan kelas robotik dan coding visual untuk anak: konsep yang dipelajari, biaya perangkat, usia yang cocok, dan urutan yang masuk akal.',
        date: D, category: C, tags: ['robotik anak', 'coding visual', 'Scratch', 'les robotik', 'coding untuk anak'], cta: 'pixelkode',
        ctaNote: 'PixelKode menggabungkan keduanya secara sederhana: latihan Robo melatih logika memprogram robot di layar, sedangkan Studio melatih kreativitas membuat animasi dan game.',
        lead: 'Robot yang bergerak sungguhan memang memikat. Banyak orang tua lalu bertanya: lebih baik les robotik atau belajar coding di komputer dulu? Jawabannya bergantung pada usia, minat, dan anggaran. Artikel ini membandingkan keduanya dan memberi urutan yang masuk akal untuk kebanyakan anak.',
        body: [
            { h2: 'Sama-sama coding, beda wadah' },
            `Robotik untuk anak pada dasarnya adalah coding yang hasilnya menggerakkan benda fisik: motor, lampu, sensor jarak, atau speaker. Banyak kit robotik untuk anak memakai bahasa blok yang mirip Scratch. Jadi perbedaan utamanya bukan pada konsep pemrograman, melainkan pada <b>wadah</b> hasilnya: layar atau dunia nyata.`,
            { svg: 'versus', label: 'Coding visual vs robotik', left: { title: 'Coding visual (Scratch)', items: ['Cukup laptop dan internet', 'Proyek tak terbatas: cerita, game, musik', 'Bisa latihan setiap hari di rumah', 'Konsep pemrograman lengkap', 'Kurang pengalaman fisik'] }, right: { title: 'Robotik', items: ['Butuh kit atau robot', 'Hasil terlihat di dunia nyata', 'Melatih mekanika dan sensor', 'Sangat memotivasi anak kinestetik', 'Biaya perangkat lebih besar'] } },

            { h2: 'Apa yang dipelajari di masing-masing' },
            { table: { head: ['Aspek', 'Coding visual', 'Robotik'], rows: [
                ['Algoritma dan loop', 'Ya', 'Ya'],
                ['Kondisi dan variabel', 'Ya, mendalam', 'Ya, sering lewat sensor'],
                ['Kreativitas cerita dan seni', 'Sangat kuat', 'Terbatas'],
                ['Mekanika, roda gigi, struktur', 'Tidak', 'Kuat'],
                ['Sensor dan data dunia nyata', 'Terbatas', 'Kuat'],
                ['Latihan mandiri di rumah', 'Mudah', 'Butuh kit di rumah'],
            ] } },
            `Satu hal yang perlu dipahami: robot fisik menambah sumber masalah baru. Program bisa benar, tetapi robot tetap belok miring karena roda licin atau baterai lemah. Bagi anak yang lebih besar, ini pelajaran berharga tentang dunia nyata. Bagi pemula, ini bisa membingungkan: "programku salah atau robotnya?"`,

            { h2: 'Urutan yang masuk akal untuk kebanyakan anak' },
            { svg: 'flow', label: 'Urutan yang disarankan', steps: [{ t: 'Unplugged', d: 'robot manusia, pola' }, { t: 'Coding visual', d: 'logika di layar' }, { t: 'Robot sederhana', d: 'blok mirip Scratch' }, { t: 'Robotik lanjut', d: 'sensor, mekanika' }], caption: 'Logika yang kuat di layar membuat waktu dengan robot lebih produktif.' },
            `Alasannya praktis. Belajar logika di layar lebih murah, bisa dilakukan setiap hari, dan kesalahan langsung terlihat tanpa gangguan fisik. Begitu anak memahami loop, kondisi, dan variabel, ia akan memakai waktu bersama robot untuk hal yang benar-benar baru: sensor, gerakan, dan mekanika.`,
            { callout: 'Pengecualian: anak usia 5-7 tahun yang sangat kinestetik kadang lebih tertarik pada robot lantai sederhana yang diprogram dengan tombol panah. Untuk mereka, robot sederhana bisa menjadi pintu masuk, lalu dilanjutkan ke ScratchJr atau Scratch.', kind: 'info', title: 'Untuk anak yang lebih kecil' },

            { h2: 'Pertimbangan biaya' },
            `Kit robotik pendidikan harganya sangat bervariasi, dari papan mikrokontroler kecil seperti micro:bit sampai set robot bermerek yang jauh lebih mahal. Les robotik biasanya juga menyediakan kit di tempat, sehingga anak tidak bisa berlatih di rumah tanpa membeli sendiri. Coding visual hanya membutuhkan komputer yang mungkin sudah ada di rumah.`,
            { w: 'choose', title: 'Mana yang cocok untuk anak Anda sekarang?', questions: [
                { q: 'Usia anak?', options: [{ t: '5-7 tahun', add: { robotsederhana: 2, visual: 1 } }, { t: '8-11 tahun', add: { visual: 2, robot: 1 } }, { t: '12 tahun ke atas', add: { robot: 2, visual: 1 } }] },
                { q: 'Anak lebih suka ...', options: [{ t: 'Menggambar, bercerita, main game', add: { visual: 3 } }, { t: 'Membongkar mainan, merakit Lego', add: { robot: 2, robotsederhana: 1 } }, { t: 'Belum tahu', add: { visual: 1, robotsederhana: 1 } }] },
                { q: 'Sudah pernah coding di komputer?', options: [{ t: 'Belum', add: { visual: 2, robotsederhana: 1 } }, { t: 'Sudah, lancar memakai loop dan kondisi', add: { robot: 3 } }] },
                { q: 'Anggaran perangkat?', options: [{ t: 'Minimal, pakai laptop yang ada', add: { visual: 2 } }, { t: 'Bisa membeli kit robot', add: { robot: 1, robotsederhana: 1 } }] },
            ], results: {
                visual: { title: 'Mulai dari coding visual', text: 'Bangun logika di Scratch dulu. Setelah lancar, robot akan terasa sebagai tantangan baru yang menyenangkan, bukan sumber kebingungan.' },
                robot: { title: 'Siap mencoba robotik', text: 'Dasar logikanya sudah ada. Robot dengan sensor (jarak, cahaya) akan memperluas wawasannya ke dunia fisik.' },
                robotsederhana: { title: 'Robot lantai sederhana atau ScratchJr', text: 'Untuk anak kecil yang kinestetik, mulai dari robot yang diprogram dengan tombol arah atau aplikasi blok bergambar.' },
            } },

            { h2: 'Latihan logika "robot" di layar' },
            `Sebelum membeli robot, coba latihan robot di layar ini bersama anak. Konsep yang dipakai, yaitu maju, belok, dan urutan, sama dengan memprogram robot fisik pertama:`,
            { w: 'robo', title: 'Latihan memprogram robot', levels: [
                { name: 'Mengambil barang', goal: 'Robo harus mengambil permata 💎 lalu kembali ke bendera.', map: ['#######', '#F...*#', '#####>#', '#######'], max: 8 },
            ] },
            `Kalau anak menikmati latihan seperti ini, ia kemungkinan juga akan menikmati robotik kelak. <a href="${pk('robotik-atau-coding-visual-mana-dulu-untuk-anak')}" target="_blank" rel="noopener">PixelKode</a> berisi 104 level Robo yang melatih logika memprogram robot, dari urutan sampai variabel, sebagai fondasi sebelum anak memegang robot sungguhan.`,
        ],
        faq: [
            ['Lebih baik les robotik atau coding untuk anak SD?', 'Untuk kebanyakan anak 8-11 tahun, coding visual dulu lebih efisien karena murah, bisa dilatih setiap hari, dan konsepnya terpakai saat robotik.'],
            ['Apakah robotik butuh kemampuan coding?', 'Ya. Robot diprogram dengan logika yang sama: urutan, loop, kondisi, dan variabel, sering dengan blok mirip Scratch.'],
            ['Robot apa yang cocok untuk pemula?', 'Papan seperti micro:bit cocok untuk anak SD akhir dan SMP. Untuk anak kecil, robot lantai yang diprogram dengan tombol arah lebih sesuai.'],
            ['Bisakah belajar keduanya sekaligus?', 'Bisa, asalkan jadwalnya tidak membuat anak kelelahan. Konsep yang sama akan saling menguatkan.'],
        ],
        sources: [
            ['micro:bit Educational Foundation', 'https://microbit.org/'],
            ['ScratchJr', 'https://www.scratchjr.org/'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Papert, S. Mindstorms (edisi daring)', 'https://mindstorms.media.mit.edu/'],
        ],
    },

    {
        slug: 'anak-suka-main-game-arahkan-jadi-pembuat-game',
        title: 'Anak Suka Main Game? Arahkan Jadi Pembuat Game',
        description: 'Cara mengubah anak yang suka main game menjadi pembuat game: membedah game favorit, membuat versi mini, dan aturan waktu layar yang adil.',
        date: D, category: C, tags: ['anak suka main game', 'membuat game', 'coding untuk anak', 'screen time', 'Scratch'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, game pertama anak (Tangkap Bintang) dirancang dengan dokumen desain sederhana, diuji untuk mencari bug, lalu dipresentasikan, persis siklus pembuat game sungguhan.',
        lead: 'Melarang game sering berakhir dengan pertengkaran. Membiarkan tanpa batas juga bukan pilihan. Ada jalan tengah yang sering berhasil: memakai rasa suka anak pada game sebagai pintu untuk belajar membuat game. Anak yang tadinya hanya bermain mulai bertanya "bagaimana cara membuatnya?", dan pertanyaan itu adalah awal yang sangat baik.',
        body: [
            { h2: 'Dari pemain menjadi pembuat' },
            `Mitchel Resnick dari MIT sering membedakan anak yang sekadar <b>membaca</b> media digital dengan anak yang juga bisa <b>menulisnya</b>. Bermain game adalah membaca; membuat game adalah menulis. Keduanya boleh, tetapi yang kedua melatih jauh lebih banyak kemampuan: merancang aturan, berhitung, bercerita, menguji, dan memperbaiki.`,
            { svg: 'versus', label: 'Pemain vs pembuat game', left: { title: 'Pemain', items: ['Mengikuti aturan buatan orang lain', 'Tantangan sudah dirancang', 'Senang saat menang', 'Waktu layar pasif-aktif'] }, right: { title: 'Pembuat', items: ['Merancang aturan sendiri', 'Membuat tantangan untuk orang lain', 'Senang saat orang lain menikmati', 'Waktu layar kreatif'] } },

            { h2: 'Langkah 1: bedah game favoritnya' },
            `Ajak anak menjadi "detektif game". Pilih game sederhana yang ia sukai, lalu bahas bersama dengan pertanyaan ini. Anak biasanya sangat antusias karena topiknya miliknya.`,
            { w: 'builder', title: 'Lembar bedah game', desc: 'Isi bersama anak sambil membahas game favoritnya.', fields: [
                { id: 'game', label: 'Nama game', placeholder: 'mis. game lari menghindari rintangan' },
                { id: 'tujuan', label: 'Apa tujuan pemain?', placeholder: 'mis. lari sejauh mungkin' },
                { id: 'kontrol', label: 'Tombol atau gerakan apa yang dipakai?', placeholder: 'mis. geser ke atas untuk lompat' },
                { id: 'aturan', label: 'Aturan menang dan kalah', placeholder: 'mis. kalah kalau menabrak', long: true },
                { id: 'angka', label: 'Angka apa yang berubah di layar?', placeholder: 'mis. jarak, koin, nyawa' },
                { id: 'seru', label: 'Apa yang membuatnya seru?', placeholder: 'mis. makin lama makin cepat', long: true },
            ], template: 'Game: {game}\nTujuan: {tujuan}\nKontrol: {kontrol}\nAturan: {aturan}\nVariabel: {angka}\nYang membuat seru: {seru}' },
            `Perhatikan baris "angka apa yang berubah di layar". Tanpa sadar anak sedang mengidentifikasi <b>variabel</b>. Baris "aturan menang dan kalah" adalah <b>kondisi</b>. Ia sedang belajar konsep pemrograman lewat game yang ia cintai.`,

            { h2: 'Langkah 2: buat versi mini' },
            `Game komersial dibuat tim besar selama bertahun-tahun. Bantu anak menurunkan ekspektasi dengan cara menyenangkan: buat <b>versi mini</b> yang menangkap satu inti keseruannya. Game lari menghindari rintangan bisa disederhanakan menjadi satu tokoh yang melompat saat spasi ditekan dan satu batu yang terus datang.`,
            { blocks: [['event', 'ketika tombol [spasi] ditekan'], ['control', 'ulangi (10)', [['motion', 'ubah y sebesar (12)']]], ['control', 'ulangi (10)', [['motion', 'ubah y sebesar (-12)']]]], caption: 'Inti game lari: tokoh melompat. Ditambah satu rintangan, game mini sudah bisa dimainkan.' },
            { callout: 'Jika anak berkata "aku mau bikin game seperti Minecraft", jangan bilang tidak mungkin. Katakan: "Wah keren. Game besar terdiri dari banyak bagian kecil. Bagian pertama mana yang mau kita buat?" Lalu mulai dari satu bagian, misalnya tokoh yang bisa berjalan dan melompat.', kind: 'good', title: 'Menjaga mimpi besar tetap realistis' },

            { h2: 'Langkah 3: siklus pembuat game' },
            { svg: 'cycle', label: 'Siklus pengembangan game', items: ['Rancang', 'Buat versi kecil', 'Uji dan main', 'Minta orang lain mencoba', 'Perbaiki'], caption: 'Pengembang game profesional bekerja dalam siklus yang sama.' },
            `Bagian "minta orang lain mencoba" (playtesting) sangat berharga. Anak belajar bahwa yang menurutnya mudah ternyata sulit bagi adiknya, atau tombol yang menurutnya jelas ternyata membingungkan. Ini latihan empati: merancang untuk pengguna lain.`,

            { h2: 'Aturan waktu layar yang adil' },
            `Membuat game tetap memakai layar. Bedanya, ini termasuk penggunaan layar yang <b>aktif dan kreatif</b>. American Academy of Pediatrics menyarankan keluarga membuat rencana penggunaan media bersama, yang memperhatikan bukan hanya durasi tetapi juga jenis kegiatan dan waktu tanpa layar. Contoh kesepakatan yang bisa dicoba:`,
            { table: { head: ['Jenis waktu layar', 'Contoh', 'Saran aturan'], rows: [
                ['Membuat (kreatif)', 'Coding, membuat animasi, menggambar digital', 'Didahulukan, dijadwalkan rutin'],
                ['Belajar', 'Latihan sekolah, video edukatif bersama', 'Sesuai kebutuhan'],
                ['Bermain', 'Main game', 'Ada batas waktu yang disepakati'],
                ['Menonton', 'Video hiburan', 'Paling dibatasi, sebaiknya ditemani'],
            ] } },
            { callout: 'Jangan menjadikan coding sebagai "tiket" untuk boleh main game ("coding 30 menit, baru boleh main"). Itu membuat coding terasa seperti hukuman. Biarkan coding berdiri sendiri sebagai kegiatan yang menyenangkan.', kind: 'warn', title: 'Hindari jebakan ini' },

            { h2: 'Platform pembuat game sesuai usia' },
            { table: { head: ['Usia', 'Platform', 'Catatan'], rows: [
                ['5-7', 'ScratchJr', 'Cerita dan game sangat sederhana di tablet'],
                ['8-12', 'Scratch', 'Game 2D lengkap dengan skor, level, dan clone'],
                ['12+', 'Python dengan Pygame, atau mesin game lain', 'Butuh dasar logika yang kuat; periksa batas usia dan fitur sosial tiap platform'],
            ] } },
            `Bila anak sudah menunjukkan minat, beri jalur yang membawanya dari game mini ke game lengkap secara bertahap. <a href="${pk('anak-suka-main-game-arahkan-jadi-pembuat-game')}" target="_blank" rel="noopener">Dua pelajaran pertama PixelKode</a> bisa dicoba gratis; di modul Game, anak merancang, membuat, menguji, dan mempresentasikan game buatannya sendiri.`,
        ],
        faq: [
            ['Apakah anak yang kecanduan game cocok belajar coding?', 'Minat pada game bisa menjadi pintu masuk. Namun bila ada tanda gangguan serius seperti mengabaikan tidur, sekolah, dan makan, konsultasikan dengan profesional.'],
            ['Umur berapa anak bisa membuat game?', 'Game sederhana di ScratchJr bisa sejak 5-7 tahun. Game dengan skor dan level di Scratch nyaman untuk 8 tahun ke atas.'],
            ['Apakah membuat game termasuk screen time?', 'Ya, tetapi termasuk penggunaan layar yang aktif dan kreatif. Tetap atur porsinya dan pastikan ada waktu tanpa layar.'],
            ['Bagaimana jika anak hanya mau main, tidak mau membuat?', 'Mulai dari membedah game favoritnya. Pertanyaan "kenapa game ini seru?" sering memancing rasa ingin tahu.'],
        ],
        sources: [
            ['AAP Family Media Plan (HealthyChildren.org)', 'https://www.healthychildren.org/MediaUsePlan'],
            ['Resnick, M. Lifelong Kindergarten Group, MIT Media Lab', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
            ['WHO: gaming disorder, tanya jawab', 'https://www.who.int/news-room/q-a-detail/gaming-disorder'],
            ['Scratch untuk orang tua', 'https://scratch.mit.edu/parents/'],
        ],
    },

    {
        slug: 'mapel-koding-dan-kecerdasan-artifisial-di-sekolah',
        title: 'Mapel Koding dan AI di Sekolah: Yang Perlu Orang Tua Tahu',
        description: 'Mapel pilihan Koding dan Kecerdasan Artifisial menurut Permendikdasmen 13/2025: mulai kelas berapa, wajib atau tidak, dan peran orang tua.',
        date: D, category: C, tags: ['mapel koding dan AI', 'Koding dan Kecerdasan Artifisial', 'Permendikdasmen 13 2025', 'kurikulum', 'coding untuk anak'], cta: 'pixelkode',
        ctaNote: 'Konsep berpikir komputasional yang menjadi dasar mapel ini (algoritma, pola, kondisi, variabel) dilatih bertahap di PixelKode lewat latihan Robo dan proyek Studio.',
        lead: 'Sejak tahun ajaran 2025/2026, Koding dan Kecerdasan Artifisial (KKA) menjadi mata pelajaran pilihan di sekolah Indonesia. Banyak orang tua bertanya: apakah anak saya wajib ikut, mulai kelas berapa, dan apa yang perlu disiapkan di rumah? Artikel ini merangkum yang sudah jelas dari kebijakan resminya, dan memberi saran praktis yang tidak bergantung pada sekolah.',
        body: [
            { h2: 'Ringkasan kebijakan' },
            { table: { head: ['Pertanyaan', 'Jawaban singkat'], rows: [
                ['Dasar hukumnya?', 'Permendikdasmen Nomor 13 Tahun 2025, perubahan atas aturan kurikulum sebelumnya'],
                ['Mulai kapan?', 'Tahun ajaran 2025/2026, diterapkan bertahap'],
                ['Kelas berapa?', 'Dimulai dari kelas 5 SD/MI, kelas 7 SMP/MTs, dan kelas 10 SMA/SMK/MA'],
                ['Wajib?', 'Tidak. Mata pelajaran pilihan, disesuaikan kesiapan sekolah'],
                ['Kurikulum baru?', 'Bukan. Pemerintah menyebutnya penguatan kurikulum yang ada melalui pendekatan pembelajaran mendalam'],
            ] } },
            `Menteri Pendidikan Dasar dan Menengah Abdul Mu'ti menegaskan bahwa mata pelajaran ini tidak wajib, dan sekolah yang belum punya sarana dan guru yang siap tidak harus menyelenggarakannya. Kementerian juga menyatakan akan mendukung pelatihan guru dan bekerja sama dengan berbagai pihak untuk penerapannya.`,
            { callout: 'Kebijakan pendidikan bisa diperbarui. Untuk detail terbaru, seperti capaian pembelajaran dan jam pelajaran, rujuk situs resmi Kemendikdasmen atau tanyakan langsung ke sekolah anak.', kind: 'warn', title: 'Selalu cek informasi terbaru' },

            { h2: 'Kenapa dimulai dari kelas 5?' },
            `Kelas 5 SD umumnya berusia 10-11 tahun. Pada usia ini sebagian besar anak sudah lancar membaca, mulai mampu berpikir lebih abstrak, dan bisa memakai komputer dengan cukup mandiri. Rentang ini sejalan dengan usia yang dituju alat belajar coding seperti Scratch.`,

            { h2: 'Apa yang kemungkinan dipelajari?' },
            `Materi pasti mengikuti capaian pembelajaran yang ditetapkan kementerian. Secara umum, mata pelajaran koding dan AI di berbagai negara untuk tingkat dasar membahas hal-hal berikut:`,
            { svg: 'layers', label: 'Lapisan materi koding dan AI tingkat dasar', items: [{ t: 'Berpikir komputasional', d: 'dekomposisi, pola, abstraksi, algoritma' }, { t: 'Pemrograman dasar', d: 'urutan, pengulangan, kondisi, variabel (sering memakai blok visual)' }, { t: 'Data', d: 'mengumpulkan, mengelompokkan, membaca pola dari data' }, { t: 'Konsep AI', d: 'mesin belajar dari contoh, contoh AI sehari-hari' }, { t: 'Etika dan keamanan', d: 'privasi, bias, memakai AI secara bertanggung jawab' }], caption: 'Gambaran umum, bukan isi resmi kurikulum. Rujuk dokumen capaian pembelajaran untuk rinciannya.' },

            { h2: 'Jika sekolah anak belum membuka mapel ini' },
            `Karena bersifat pilihan, tidak semua sekolah langsung membukanya. Itu tidak berarti anak tertinggal. Dasar terpenting, yaitu berpikir komputasional, bisa dilatih di rumah dengan cara yang menyenangkan:`,
            { ul: [
                '<b>Permainan tanpa layar</b> seperti robot manusia dan tebak angka.',
                '<b>Scratch</b> untuk membuat animasi dan game sederhana.',
                '<b>Tantangan Bebras</b>, kompetisi berpikir komputasional tahunan yang soalnya tidak butuh pengetahuan pemrograman.',
                '<b>Diskusi AI sehari-hari</b>: kenapa rekomendasi video bisa "tahu" kesukaan kita?',
            ] },

            { h2: 'Jika sekolah sudah membuka mapel ini' },
            { w: 'checklist', title: 'Pertanyaan untuk guru atau sekolah', desc: 'Centang yang sudah Anda ketahui jawabannya.', items: ['Alat atau platform apa yang dipakai di kelas?', 'Apakah anak perlu perangkat di rumah?', 'Bagaimana penilaiannya: proyek, tes, atau portofolio?', 'Apakah ada pekerjaan rumah yang butuh komputer dan internet?', 'Bagaimana sekolah mengatur keamanan saat anak memakai layanan AI?', 'Bagaimana orang tua bisa melihat proyek anak?'] },

            { h2: 'Peran orang tua: mendampingi, bukan mengajar' },
            `Orang tua tidak perlu menguasai coding atau AI untuk mendukung anak. Yang paling membantu adalah rasa ingin tahu dan pertanyaan yang tepat:`,
            { w: 'cards', title: 'Pertanyaan di meja makan', items: [
                { tag: 'Tanyakan', front: '"Tadi di pelajaran koding kamu membuat apa?"', backTag: 'Kenapa', back: 'Menjelaskan karya melatih pemahaman dan rasa bangga.' },
                { tag: 'Tanyakan', front: '"Menurutmu AI itu benar-benar berpikir?"', backTag: 'Kenapa', back: 'Mengajak anak kritis: AI belajar pola dari data, bukan memahami seperti manusia.' },
                { tag: 'Tanyakan', front: '"Kalau AI menjawab salah, bagaimana kita tahu?"', backTag: 'Kenapa', back: 'Melatih kebiasaan memeriksa sumber, keterampilan penting di era AI.' },
                { tag: 'Tanyakan', front: '"Data apa yang tidak boleh kita bagikan ke aplikasi?"', backTag: 'Kenapa', back: 'Menanamkan kesadaran privasi sejak dini.' },
            ] },

            { h2: 'Persiapan yang bermanfaat apa pun kebijakannya' },
            `Terlepas dari mata pelajaran resmi, kemampuan memecah masalah, berpikir runtut, dan memahami cara kerja teknologi akan berguna bagi anak di bidang apa pun. Jika Anda ingin anak memulai dengan jalur terstruktur, <a href="${pk('mapel-koding-dan-kecerdasan-artifisial-di-sekolah', '/')}" target="_blank" rel="noopener">PixelKode</a> menyediakan 32 pelajaran coding visual berbahasa Indonesia untuk usia 8-11 tahun, yang melatih konsep-konsep dasar tersebut sebelum anak masuk ke materi AI.`,
        ],
        faq: [
            ['Apakah mapel Koding dan AI wajib?', 'Tidak. Ini mata pelajaran pilihan, dan sekolah yang belum siap sarana dan gurunya tidak wajib menyelenggarakannya.'],
            ['Mulai kelas berapa mapel Koding dan AI?', 'Diterapkan bertahap mulai kelas 5 SD, kelas 7 SMP, dan kelas 10 SMA/SMK sejak tahun ajaran 2025/2026.'],
            ['Apa dasar hukumnya?', 'Permendikdasmen Nomor 13 Tahun 2025.'],
            ['Apakah anak perlu les coding agar bisa mengikuti?', 'Tidak wajib. Namun latihan berpikir komputasional di rumah, baik lewat permainan maupun Scratch, akan membantu anak lebih percaya diri.'],
        ],
        sources: [
            ['Antara: Permendikdasmen 13/2025, Koding dan AI resmi masuk Kurikulum 2025/2026', 'https://www.antaranews.com/berita/4983541/permendikdasmen-13-2025-koding-dan-ai-resmi-masuk-kurikulum-2025-2026'],
            ['GTK Kemendikdasmen: Permendikdasmen 13/2025 dan pembelajaran mendalam', 'https://gtk.kemendikdasmen.go.id/news/siaran-pers/c034d26f-83b6-4b4b-926c-b572e665e477'],
            ['Puslapdik Kemendikdasmen: Permendikdasmen 13/2025', 'https://puslapdik.kemendikdasmen.go.id/permendikdasmen-no-13-tahun-2025-memperkuat-kurikulum-2013-dan-kurikulum-merdeka/'],
            ['Detik: Koding dan AI berlaku mulai kelas 5 SD', 'https://www.detik.com/bali/berita/d-8026121/koding-dan-ai-masuk-kurikulum-2025-2026-berlaku-mulai-kelas-5-sd'],
        ],
    },

    {
        slug: 'tantangan-bebras-contoh-soal-dan-cara-berlatih',
        title: 'Tantangan Bebras: Contoh Soal dan Cara Anak Berlatih',
        description: 'Kenali Tantangan Bebras, kompetisi berpikir komputasional untuk SD sampai SMA, lengkap dengan contoh soal, pembahasan, dan cara berlatih.',
        date: D, category: C, tags: ['Bebras', 'Tantangan Bebras', 'berpikir komputasional', 'soal logika anak', 'lomba anak'], cta: 'pixelkode',
        ctaNote: 'Banyak soal Bebras tentang urutan, pola, dan aturan, persis yang dilatih di level-level Robo PixelKode. Latihan rutin membuat anak lebih tenang menghadapi soal yang belum pernah dilihat.',
        lead: 'Tantangan Bebras adalah kompetisi berpikir komputasional yang soalnya berupa teka-teki menarik, tanpa perlu bisa memprogram. Di Indonesia, tantangan ini diikuti siswa dari SD sampai SMA. Artikel ini menjelaskan apa itu Bebras, memberi contoh soal bergaya Bebras dengan pembahasannya, dan cara berlatih di rumah.',
        body: [
            { h2: 'Apa itu Bebras?' },
            `Bebras berasal dari Lituania, digagas oleh Profesor Valentina Dagienė pada 2004. "Bebras" berarti berang-berang dalam bahasa Lituania, hewan yang dikenal pekerja keras dan cerdik. Kini Bebras menjadi inisiatif internasional yang diikuti puluhan negara. Indonesia mulai mengikuti Tantangan Bebras pada 2016, dikoordinasikan oleh Tim Olimpiade Komputer Indonesia (TOKI) bersama biro-biro Bebras di berbagai perguruan tinggi, dengan tujuan memperkenalkan berpikir komputasional kepada siswa dan guru.`,
            `Soal Bebras dirancang supaya bisa dikerjakan <b>tanpa pengetahuan pemrograman atau informatika sebelumnya</b>. Yang diuji adalah cara berpikir: menemukan pola, mengikuti aturan, menyusun langkah, dan memilih strategi terbaik. Soal biasanya dibungkus cerita tentang berang-berang yang membuatnya menyenangkan.`,
            { table: { head: ['Kategori di Indonesia', 'Jenjang'], rows: [
                ['Sikecil', 'SD kelas bawah'],
                ['Siaga', 'SD kelas atas'],
                ['Penggalang', 'SMP/MTs'],
                ['Penegak', 'SMA/SMK/MA'],
            ] } },
            { callout: 'Jadwal, kategori, dan cara mendaftar dapat berubah setiap tahun, dan pendaftaran umumnya melalui sekolah. Cek situs resmi Bebras Indonesia untuk informasi terbaru.', kind: 'info', title: 'Pendaftaran' },

            { h2: 'Contoh soal 1: Bendungan berang-berang (urutan)' },
            `<i>Soal berikut dibuat untuk artikel ini dengan gaya Bebras, bukan soal resmi.</i>`,
            `Berang-berang membangun bendungan dari 4 jenis bahan. Aturannya: <b>batu</b> harus paling bawah; <b>ranting</b> di atas batu; <b>daun</b> tidak boleh langsung di atas batu; <b>lumpur</b> paling atas. Bagaimana urutan dari bawah ke atas?`,
            { w: 'quiz', title: 'Jawab soal 1', questions: [
                { q: 'Urutan bahan dari bawah ke atas yang memenuhi semua aturan adalah ...', options: ['Batu, daun, ranting, lumpur', 'Batu, ranting, daun, lumpur', 'Ranting, batu, daun, lumpur', 'Batu, ranting, lumpur, daun'], answer: 1, why: 'Batu di bawah, ranting tepat di atasnya, lumpur paling atas, sehingga daun berada di antara ranting dan lumpur, tidak langsung di atas batu.' },
            ] },

            { h2: 'Contoh soal 2: Robot berang-berang (algoritma)' },
            `Robot berang-berang hanya mengerti perintah maju, belok kiri, dan belok kanan. Ia harus mengambil kayu (💎) lalu menuju bendungan (🏁). Bisakah kamu menemukan program terpendek?`,
            { w: 'robo', title: 'Soal 2: kumpulkan kayu', levels: [
                { name: 'Robot berang-berang', goal: 'Ambil kedua kayu 💎, lalu ke bendungan 🏁.', map: ['#######', '#>.*..#', '####.##', '#F.*.##', '#######'], max: 12 },
            ] },

            { h2: 'Contoh soal 3: Kode warna (pola dan representasi)' },
            `Berang-berang mengirim pesan dengan lampu: merah = 1, biru = 0. Nilai setiap posisi dari kanan adalah 1, 2, 4, 8. Pesan "merah, biru, merah, merah" berarti angka berapa?`,
            { w: 'quiz', title: 'Jawab soal 3', questions: [
                { q: 'Merah, biru, merah, merah (dibaca kiri ke kanan) = ?', options: ['9', '11', '13', '7'], answer: 1, why: 'Dari kiri: 8 (merah) + 0 (biru) + 2 (merah) + 1 (merah) = 11. Ini bilangan biner 1011.' },
            ] },

            { h2: 'Contoh soal 4: Antrean makan (logika)' },
            `Empat berang-berang antre: Ana, Bimo, Cici, Dodo. Ana tidak di paling depan. Bimo tepat di belakang Cici. Dodo di paling belakang. Siapa yang paling depan?`,
            { w: 'quiz', title: 'Jawab soal 4', questions: [
                { q: 'Siapa yang paling depan?', options: ['Ana', 'Bimo', 'Cici', 'Dodo'], answer: 2, why: 'Dodo di posisi 4. Bimo tepat di belakang Cici, jadi pasangan Cici-Bimo menempati posisi 1-2 atau 2-3. Ana tidak di depan, jadi posisi 1 harus Cici, Bimo posisi 2, Ana posisi 3.' },
            ] },

            { h2: 'Strategi mengerjakan soal Bebras' },
            { ol: [
                '<b>Baca cerita sampai habis</b>, lalu garis bawahi aturannya.',
                '<b>Gambar.</b> Coret-coretan di kertas membantu, terutama untuk soal urutan dan peta.',
                '<b>Coba satu kemungkinan</b>, cek dengan semua aturan, lalu perbaiki.',
                '<b>Eliminasi pilihan</b> yang jelas melanggar aturan.',
                '<b>Jangan terpaku.</b> Lewati soal yang terlalu lama, kembali bila ada waktu.',
            ] },

            { h2: 'Cara berlatih di rumah' },
            { ul: [
                '<b>Soal-soal tahun sebelumnya.</b> Bebras Indonesia dan biro-biro Bebras di berbagai kampus menerbitkan kumpulan soal latihan.',
                '<b>Permainan logika</b> seperti sudoku anak, teka-teki silang angka, dan permainan papan strategi.',
                '<b>Coding visual.</b> Membuat program di Scratch melatih pola pikir yang sama: aturan, urutan, dan uji coba.',
                '<b>Bahas, bukan hanya menjawab.</b> Setelah soal selesai, minta anak menjelaskan kenapa jawabannya benar.',
            ] },
            `Bebras paling bermanfaat bila dijadikan pengalaman menyenangkan, bukan beban lomba. Anak yang terbiasa memecahkan teka-teki dan menyusun program akan merasa soal Bebras seperti permainan. Untuk latihan rutin bergaya puzzle, <a href="${pk('tantangan-bebras-contoh-soal-dan-cara-berlatih')}" target="_blank" rel="noopener">level-level Robo di PixelKode</a> bisa dicoba gratis di dua pelajaran pertama.`,
        ],
        faq: [
            ['Apa itu Tantangan Bebras?', 'Kompetisi tahunan berpikir komputasional berupa soal teka-teki yang bisa dikerjakan tanpa pengetahuan pemrograman.'],
            ['Siapa yang boleh ikut Bebras?', 'Siswa SD sampai SMA, dalam kategori Sikecil dan Siaga (SD), Penggalang (SMP), dan Penegak (SMA). Pendaftaran umumnya melalui sekolah.'],
            ['Apakah harus bisa coding untuk ikut Bebras?', 'Tidak. Soal Bebras menguji cara berpikir, bukan kemampuan menulis program.'],
            ['Bagaimana cara berlatih soal Bebras?', 'Kerjakan soal tahun sebelumnya, mainkan permainan logika, dan latih berpikir runtut lewat coding visual.'],
        ],
        sources: [
            ['Bebras Indonesia', 'https://bebras.or.id/'],
            ['Bebras International', 'https://www.bebras.org/'],
            ['Wing, J. M. (2006). Computational Thinking', 'https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf'],
            ['CS Unplugged', 'https://www.csunplugged.org/'],
        ],
    },

    {
        slug: 'mengenalkan-ai-kepada-anak-dengan-aman',
        title: 'Mengenalkan AI kepada Anak: Penjelasan dan Aturan Aman',
        description: 'Cara menjelaskan AI kepada anak SD dengan analogi sederhana, aktivitas mengajari mesin, dan aturan keluarga memakai chatbot dengan aman.',
        date: D, category: C, tags: ['AI untuk anak', 'kecerdasan buatan anak', 'chatbot anak', 'literasi AI', 'keamanan digital anak'], cta: 'pixelkode',
        ctaNote: 'Sebelum memahami AI, anak perlu paham cara komputer menjalankan perintah. PixelKode membangun dasar itu, termasuk proyek "Chatbot Robo" di modul Variabel yang menunjukkan bedanya chatbot berbasis aturan dengan AI.',
        lead: 'Anak-anak kini tumbuh bersama asisten suara, rekomendasi video, filter wajah, dan chatbot. Mereka akan memakai AI, dengan atau tanpa penjelasan dari kita. Lebih baik mereka memahaminya sejak awal: apa itu AI, apa yang bisa dan tidak bisa dilakukannya, dan bagaimana memakainya dengan aman.',
        body: [
            { h2: 'Penjelasan AI untuk anak' },
            { callout: '"AI adalah program komputer yang belajar dari banyak sekali contoh. Kalau diberi ribuan foto kucing, ia belajar mengenali kucing. Tapi AI tidak benar-benar mengerti seperti kita, dan kadang bisa salah dengan sangat percaya diri."', kind: 'info', title: 'Bisa dibacakan ke anak usia 8 tahun ke atas' },
            `Bandingkan dengan program biasa yang dibuat anak di Scratch. Di Scratch, <b>manusia menulis aturannya</b>: "jika menyentuh bintang, tambah skor". Pada AI modern, <b>mesin menemukan polanya sendiri dari contoh</b>. Perbedaan ini bisa diperlihatkan dengan aktivitas sederhana di bawah.`,
            { svg: 'versus', label: 'Program biasa vs AI', left: { title: 'Program biasa', items: ['Manusia menulis aturan', '"Jika berbulu dan mengeong → kucing"', 'Hasilnya bisa ditebak', 'Salah karena aturannya salah'] }, right: { title: 'AI (machine learning)', items: ['Mesin belajar dari contoh', 'Diberi ribuan foto berlabel', 'Menebak dengan peluang', 'Salah karena contohnya kurang atau bias'] } },

            { h2: 'Aktivitas: menjadi mesin yang belajar' },
            `Permainan ini meniru cara AI belajar, tanpa komputer:`,
            { ol: [
                'Siapkan 10 gambar buah dan sayur. Jangan beri tahu aturannya.',
                'Tunjukkan satu per satu dan sebutkan labelnya: "ini buah", "ini sayur".',
                'Setelah 10 contoh, tunjukkan gambar baru dan minta anak menebak.',
                'Diskusikan: "Bagaimana kamu menebaknya? Pola apa yang kamu pakai?"',
                'Tunjukkan contoh sulit, misalnya tomat. Kalau anak salah, bahas bahwa AI juga bisa salah bila contohnya membingungkan.',
            ] },
            `Untuk versi digital, alat gratis seperti <b>Teachable Machine</b> dari Google memungkinkan anak "mengajari" komputer mengenali gerakan tangan atau benda lewat kamera dalam beberapa menit. Ada juga <b>Machine Learning for Kids</b> yang menghubungkan model buatan anak dengan Scratch. Dampingi anak saat memakainya.`,

            { h2: 'AI di sekitar anak' },
            { table: { head: ['Contoh', 'AI melakukan apa', 'Pertanyaan untuk anak'], rows: [
                ['Rekomendasi video', 'Menebak video yang membuat kita terus menonton', '"Kenapa aplikasinya ingin kita menonton lebih lama?"'],
                ['Asisten suara', 'Mengubah suara menjadi teks, lalu menjawab', '"Apa yang ia dengar saat kita tidak memanggilnya?"'],
                ['Filter wajah', 'Mendeteksi posisi mata, hidung, mulut', '"Apakah foto yang diedit selalu menunjukkan kenyataan?"'],
                ['Chatbot', 'Menyusun jawaban kata demi kata dari pola bahasa', '"Bagaimana kita tahu jawabannya benar?"'],
            ] } },

            { h2: 'Aturan keluarga memakai chatbot AI' },
            `Banyak layanan chatbot umum mensyaratkan usia minimal tertentu, sering 13 tahun, dan izin orang tua untuk remaja. Periksa ketentuan setiap layanan sebelum anak memakainya. Untuk anak SD, pemakaian sebaiknya bersama orang tua. UNICEF dalam panduannya tentang AI untuk anak menekankan perlindungan data, keamanan, dan hak anak untuk memahami teknologi yang memengaruhi mereka.`,
            { w: 'checklist', title: 'Kesepakatan keluarga tentang AI', desc: 'Diskusikan dan centang aturan yang disepakati.', items: [
                'Anak di bawah usia minimal layanan memakai chatbot hanya bersama orang tua.',
                'Tidak mengetik nama lengkap, alamat, sekolah, foto, atau kata sandi ke AI.',
                'Jawaban AI untuk tugas sekolah selalu diperiksa dengan buku atau sumber lain.',
                'AI boleh membantu memahami, bukan mengerjakan PR untuk kita.',
                'Gambar atau suara buatan AI tentang orang nyata tidak boleh dibuat untuk mengejek.',
                'Kalau AI menampilkan sesuatu yang membuat tidak nyaman, langsung cerita ke orang tua.',
            ] },

            { h2: 'Tiga hal yang perlu dipahami anak' },
            { w: 'cards', title: 'Ketuk untuk penjelasannya', items: [
                { tag: 'Pahami', front: 'AI bisa salah dengan percaya diri.', backTag: 'Artinya', back: 'Chatbot bisa mengarang fakta yang terdengar benar. Kebiasaan memeriksa jawaban harus dimulai sejak kecil.' },
                { tag: 'Pahami', front: 'AI belajar dari data buatan manusia.', backTag: 'Artinya', back: 'Kalau datanya berat sebelah, AI juga bisa berat sebelah (bias). Contohnya, mengira dokter selalu laki-laki.' },
                { tag: 'Pahami', front: 'Yang diketik ke AI bisa disimpan.', backTag: 'Artinya', back: 'Perlakukan chatbot seperti orang asing yang ramah: sopan, tetapi tidak menceritakan rahasia pribadi.' },
            ] },
            { w: 'quiz', title: 'Kuis AI untuk anak dan orang tua', questions: [
                { q: 'Bagaimana AI belajar mengenali kucing?', options: ['Diberi tahu aturan oleh manusia satu per satu', 'Dari banyak contoh foto kucing', 'AI sudah tahu sejak lahir'], answer: 1, why: 'Machine learning belajar pola dari contoh dalam jumlah besar.' },
                { q: 'Chatbot menjawab bahwa ibu kota Indonesia adalah Bandung. Apa yang sebaiknya dilakukan?', options: ['Percaya, karena AI pintar', 'Periksa di buku atau sumber terpercaya', 'Bertanya ke AI yang sama sampai dia setuju'], answer: 1, why: 'AI bisa salah. Selalu periksa dengan sumber lain.' },
                { q: 'Mana yang aman diketik ke chatbot?', options: ['Alamat rumah', 'Pertanyaan tentang cara kerja pelangi', 'Kata sandi game'], answer: 1, why: 'Pertanyaan umum aman. Data pribadi jangan dibagikan.' },
            ] },

            { h2: 'Fondasi sebelum AI: memahami cara komputer bekerja' },
            `Anak yang pernah membuat program sendiri lebih mudah memahami AI: ia tahu bahwa komputer menjalankan perintah, bahwa program bisa salah, dan bahwa hasil bergantung pada masukan. Karena itu, coding dasar adalah bekal yang baik sebelum belajar AI. Di <a href="${pk('mengenalkan-ai-kepada-anak-dengan-aman', '/')}" target="_blank" rel="noopener">PixelKode</a>, anak membuat "Chatbot Robo" berbasis aturan, lalu bisa membandingkannya dengan chatbot AI: yang satu mengikuti aturan buatannya, yang lain menebak dari pola.`,
        ],
        faq: [
            ['Umur berapa anak boleh memakai ChatGPT atau chatbot lain?', 'Banyak layanan mensyaratkan usia minimal 13 tahun dengan izin orang tua untuk remaja. Periksa ketentuan setiap layanan. Anak lebih kecil sebaiknya memakai bersama orang tua.'],
            ['Bagaimana menjelaskan AI kepada anak SD?', 'AI adalah program yang belajar dari banyak contoh. Ia bisa membantu, tetapi tidak benar-benar mengerti dan bisa salah.'],
            ['Apakah AI berbahaya untuk anak?', 'Risikonya ada pada privasi, konten yang tidak sesuai, dan informasi yang salah. Pendampingan dan aturan keluarga mengurangi risiko itu.'],
            ['Aktivitas AI apa yang aman untuk anak?', 'Permainan klasifikasi tanpa komputer, serta alat edukatif seperti Teachable Machine dan Machine Learning for Kids dengan pendampingan.'],
        ],
        sources: [
            ['UNICEF Innocenti: Guidance on AI and children', 'https://www.unicef.org/innocenti/reports/policy-guidance-ai-children'],
            ['Teachable Machine (Google)', 'https://teachablemachine.withgoogle.com/'],
            ['Machine Learning for Kids', 'https://machinelearningforkids.co.uk/'],
            ['Day of AI (MIT RAISE): kurikulum AI untuk sekolah', 'https://www.dayofai.org/'],
        ],
    },
];
