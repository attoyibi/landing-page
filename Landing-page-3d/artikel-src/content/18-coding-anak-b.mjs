import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding untuk Anak';

export default [
    {
        slug: 'pengulangan-loop-untuk-anak',
        title: 'Pengulangan (Loop) untuk Anak: Program Pendek, Hasil Panjang',
        description: 'Cara mengajarkan loop kepada anak: contoh sehari-hari, blok ulangi dan selamanya di Scratch, loop bersarang, dan latihan Robo interaktif.',
        date: D, category: C, tags: ['loop', 'pengulangan', 'coding untuk anak', 'Scratch', 'algoritma'], cta: 'pixelkode',
        ctaNote: 'Pelajaran 2 PixelKode khusus membahas pengulangan: 5 level Robo "Pola dan Ulangi", animasi berjalan di Studio, dan tantangan bintang loop di dalam loop.',
        lead: 'Bayangkan menulis "maju 1 langkah" seratus kali. Membosankan, mudah salah hitung, dan susah diubah. Pengulangan atau loop menyelesaikan masalah itu, dan konsep ini sering menjadi momen "aha!" pertama anak dalam belajar coding. Berikut cara menjelaskannya, contoh di Scratch, dan latihan untuk mencoba langsung.',
        body: [
            { h2: 'Loop dalam bahasa anak' },
            { callout: '"Loop artinya mengulang. Kalau ada langkah yang sama dilakukan berkali-kali, kita cukup menulisnya sekali, lalu bilang ke komputer: ulangi sekian kali."', kind: 'info', title: 'Penjelasan satu kalimat' },
            `Anak sudah akrab dengan pengulangan tanpa menyadarinya. Lagu "Pok Ame-Ame" mengulang bagian yang sama. Lompat tali dihitung "satu, dua, tiga, ...". Guru olahraga berkata "lari keliling lapangan 3 kali", bukan "lari keliling, lari keliling, lari keliling". Itu semua loop.`,

            { h2: 'Kenapa loop penting dalam coding?' },
            { svg: 'versus', label: 'Tanpa loop vs dengan loop', left: { title: 'Tanpa loop', items: ['maju', 'maju', 'maju', 'maju', 'maju', 'maju (6 blok)'] }, right: { title: 'Dengan loop', items: ['ulangi 6 kali:', '    maju', '(2 blok)', 'Mau 60 langkah?', 'Cukup ganti angkanya'] } },
            { ul: [
                '<b>Lebih pendek.</b> Program lebih mudah dibaca.',
                '<b>Lebih sedikit salah.</b> Tidak ada risiko kelebihan atau kekurangan satu blok saat menyalin.',
                '<b>Mudah diubah.</b> Ingin 10 kali, bukan 6? Ganti satu angka.',
                '<b>Dasar animasi dan game.</b> Hampir setiap game berjalan di dalam loop yang terus memeriksa tombol dan posisi.',
            ] },

            { h2: 'Tiga jenis loop di Scratch' },
            { table: { head: ['Blok', 'Artinya', 'Contoh pemakaian'], rows: [
                ['<b>ulangi 10</b>', 'Mengulang sejumlah kali yang sudah ditentukan', 'Menggambar persegi: 4 kali gerak lalu putar 90°'],
                ['<b>selamanya</b>', 'Mengulang terus sampai program dihentikan', 'Game: terus memeriksa tombol panah'],
                ['<b>ulangi sampai</b>', 'Mengulang sampai sebuah kondisi terpenuhi', 'Jalan terus sampai menyentuh tepi'],
            ] } },
            { scripts: [
                [['event', 'ketika 🏁 diklik'], ['pen', 'pena turun'], ['control', 'ulangi (4)', [['motion', 'gerak (100) langkah'], ['motion', 'putar ↻ (90) derajat']]]],
                [['event', 'ketika 🏁 diklik'], ['control', 'selamanya', [['motion', 'gerak (5) langkah'], ['motion', 'jika di tepi, pantulkan']]]],
            ], caption: 'Kiri: persegi dengan loop berhitung. Kanan: bola yang memantul selamanya.' },
            `Skrip persegi di kiri adalah latihan klasik. Setelah anak berhasil, tantang: "Bagaimana membuat segitiga? Segi enam?" Anak akan menemukan sendiri bahwa jumlah ulangan dikali besar sudut putar selalu 360. Ini contoh bagus bagaimana coding membuat konsep matematika terasa nyata.`,

            { h2: 'Latihan: temukan polanya, lalu ulangi' },
            `Kunci memakai loop adalah <b>menemukan bagian yang berulang</b>. Di latihan berikut, pilih "ulangi N kali" untuk mengulang seluruh program. Coba dapatkan bintang efisiensi dengan program sependek mungkin.`,
            { w: 'robo', title: 'Pola dan Ulangi', desc: 'Pilih jumlah ulangan dari menu "jalankan 1 kali / ulangi N kali". Program yang kamu susun akan dijalankan sebanyak itu.', repeat: true, levels: [
                { name: 'Lorong panjang', goal: 'Robo harus maju 6 kali. Bisakah dengan 2 blok saja?', map: ['#########', '#>.....F#', '#########'], max: 2 },
                { name: 'Tangga', goal: 'Naiki tangga ke bendera. Cari pola satu anak tangga.', map: ['#######', '#####F#', '####..#', '###..##', '##..###', '#>.####', '#######'], max: 5 },
                { name: 'Permata berjajar', goal: 'Ambil semua permata. Setiap permata berjarak sama.', map: ['#########', '#>*.*.*F#', '#########'], max: 4 },
            ] },
            { callout: 'Di level "Permata berjajar", banyak anak mencoba pola "maju, ambil" lalu bingung karena Robo tidak sampai ke bendera. Coba geser cara pandangnya: kalau polanya "maju, ambil, maju", apakah diulang 3 kali pas sampai bendera? Memilih potongan pola yang tepat adalah bagian penting dari berpikir komputasional.', kind: 'warn', title: 'Tantangan untuk didiskusikan' },

            { h2: 'Loop di dalam loop' },
            `Setelah paham loop tunggal, anak bisa naik ke <b>loop bersarang</b>: loop yang berada di dalam loop lain. Contoh sehari-hari: "Setiap hari (loop luar) dalam seminggu, sikat gigi 2 kali (loop dalam)". Totalnya 7 × 2 = 14 kali.`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['pen', 'pena turun'], ['control', 'ulangi (6)', [['control', 'ulangi (4)', [['motion', 'gerak (60) langkah'], ['motion', 'putar ↻ (90) derajat']]], ['motion', 'putar ↻ (60) derajat']]]], caption: 'Loop dalam menggambar persegi. Loop luar memutar dan mengulang persegi 6 kali, menghasilkan pola bunga.' },
            `Pola bunga seperti ini sangat memuaskan bagi anak karena program pendek menghasilkan gambar yang rumit. Ini juga cara bagus memperkenalkan perkalian: 6 persegi × 4 sisi = 24 garis.`,

            { h2: 'Kesalahan umum saat belajar loop' },
            { w: 'cards', title: 'Ketuk untuk melihat cara membantunya', items: [
                { tag: 'Kesalahan', front: 'Menaruh blok di luar loop padahal harus di dalam (atau sebaliknya).', backTag: 'Bantu dengan', back: 'Tanyakan: "Blok ini mau diulang atau cukup sekali?" Blok persiapan seperti posisi awal biasanya di luar loop.' },
                { tag: 'Kesalahan', front: 'Animasi terlalu cepat sehingga terlihat melompat.', backTag: 'Bantu dengan', back: 'Tambahkan "tunggu 0.1 detik" di dalam loop. Komputer bekerja sangat cepat, mata kita butuh jeda.' },
                { tag: 'Kesalahan', front: 'Memakai "selamanya" lalu program lain tidak jalan.', backTag: 'Bantu dengan', back: 'Blok di bawah "selamanya" tidak akan pernah dijalankan. Pindahkan ke skrip terpisah atau pakai "ulangi sampai".' },
            ] },
            { w: 'quiz', title: 'Cek pemahaman', questions: [
                { q: 'Untuk menggambar segitiga sama sisi dengan loop, berapa derajat sprite harus berputar setiap kali?', options: ['60', '90', '120'], answer: 2, why: '3 kali putar harus berjumlah 360 derajat, jadi 360 ÷ 3 = 120.' },
                { q: 'Loop luar diulang 3 kali, loop dalam 5 kali. Berapa kali blok di loop dalam dijalankan?', options: ['8', '15', '35'], answer: 1, why: '3 × 5 = 15 kali.' },
                { q: 'Blok apa yang cocok untuk game yang terus memeriksa tombol ditekan?', options: ['ulangi 10', 'selamanya', 'tunggu 1 detik'], answer: 1, why: 'Game perlu terus memeriksa selama permainan berjalan.' },
            ] },

            { h2: 'Langkah berikutnya' },
            `Setelah loop, konsep berikutnya biasanya <b>kejadian</b> (program bereaksi ketika tombol ditekan) dan <b>percabangan</b> (jika ... maka ...). Gabungan loop dan percabangan adalah inti dari hampir semua game. Anak bisa mencoba konsep loop di <a href="${pk('pengulangan-loop-untuk-anak')}" target="_blank" rel="noopener">Pelajaran 2 PixelKode yang gratis</a>.`,
        ],
        faq: [
            ['Apa itu loop dalam pemrograman?', 'Loop atau pengulangan adalah perintah untuk menjalankan sekelompok langkah berkali-kali tanpa menulisnya berulang.'],
            ['Apa contoh loop dalam kehidupan sehari-hari?', 'Lari keliling lapangan 3 kali, mengaduk adonan 20 kali, atau lampu lalu lintas yang terus berganti warna.'],
            ['Apa beda blok "ulangi" dan "selamanya" di Scratch?', '"Ulangi" berjalan sejumlah kali tertentu lalu berhenti. "Selamanya" terus berjalan sampai program dihentikan.'],
            ['Kapan anak siap belajar loop bersarang?', 'Setelah ia lancar memakai loop tunggal dan bisa menjelaskan bagian mana yang diulang. Biasanya beberapa sesi setelah mengenal loop.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Brennan & Resnick (2012). Kerangka berpikir komputasional (konsep pengulangan)', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['CS Unplugged', 'https://www.csunplugged.org/'],
            ['Papert, S. (1980). Mindstorms: Children, Computers, and Powerful Ideas', 'https://mindstorms.media.mit.edu/'],
        ],
    },

    {
        slug: 'percabangan-jika-maka-untuk-anak',
        title: 'Percabangan Jika-Maka: Mengajari Anak Logika Keputusan',
        description: 'Mengajarkan percabangan jika-maka kepada anak: contoh sehari-hari, blok jika di Scratch, operator dan, atau, tidak, plus kuis logika.',
        date: D, category: C, tags: ['percabangan', 'if else', 'logika anak', 'coding untuk anak', 'Scratch'], cta: 'pixelkode',
        ctaNote: 'Modul Game di PixelKode memakai percabangan untuk membuat Robo memilih jalan, lalu modul Logika melatih dan, atau, tidak lewat game labirin buatan anak sendiri.',
        lead: 'Program yang hanya berjalan lurus tidak bisa bereaksi. Game baru terasa hidup ketika komputer bisa memutuskan: jika pemain menyentuh bintang, tambah skor; jika menyentuh meteor, kurangi nyawa. Inilah percabangan. Kabar baiknya, anak sudah memakai logika ini setiap hari. Tugas kita tinggal menamainya.',
        body: [
            { h2: 'Percabangan di kehidupan anak' },
            `<b>Percabangan</b> (conditional) adalah perintah yang hanya dijalankan bila suatu kondisi benar. Bentuk dasarnya: <b>jika</b> kondisi, <b>maka</b> lakukan sesuatu. Bentuk lengkapnya menambah <b>jika tidak</b>, yaitu hal lain yang dilakukan bila kondisi salah.`,
            { table: { head: ['Kondisi (jika ...)', 'Maka', 'Jika tidak'], rows: [
                ['Hujan', 'bawa payung', 'pakai topi'],
                ['Lampu merah', 'berhenti', 'jalan'],
                ['PR sudah selesai', 'boleh main', 'kerjakan PR dulu'],
                ['Nilai di atas 75', 'tuntas', 'remedial'],
            ] } },
            `Ajak anak membuat tabel serupa tentang hari-harinya. Kalimat "kalau ..., aku ..." yang ia ucapkan sendiri adalah percabangan. Dari situ, lompatan ke blok coding terasa alami.`,

            { h2: 'Diagram alur keputusan' },
            { svgraw: '<svg viewBox="0 0 560 300" role="img" aria-label="Diagram alur jika hujan bawa payung jika tidak pakai topi" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><defs><marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4a5568"/></marker></defs><rect x="210" y="10" width="140" height="44" rx="22" fill="#fff" stroke="#1e5ab2" stroke-width="2.5"/><text x="280" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1a33">Mulai</text><line x1="280" y1="54" x2="280" y2="82" stroke="#4a5568" stroke-width="2.5" marker-end="url(#a2)"/><path d="M280 86L360 136L280 186L200 136Z" fill="#fff1d6" stroke="#9a5b00" stroke-width="2.5"/><text x="280" y="141" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1a33">Hujan?</text><path d="M200 136H110V200" fill="none" stroke="#4a5568" stroke-width="2.5" marker-end="url(#a2)"/><text x="150" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#1f7a46">ya</text><path d="M360 136H450V200" fill="none" stroke="#4a5568" stroke-width="2.5" marker-end="url(#a2)"/><text x="410" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#b3261e">tidak</text><rect x="40" y="204" width="140" height="48" rx="10" fill="#e4f6cc" stroke="#1f7a46" stroke-width="2.5"/><text x="110" y="233" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">Bawa payung</text><rect x="380" y="204" width="140" height="48" rx="10" fill="#e8f1ff" stroke="#1e5ab2" stroke-width="2.5"/><text x="450" y="233" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">Pakai topi</text><text x="280" y="290" text-anchor="middle" font-size="13" fill="#4a5568">Belah ketupat = pertanyaan dengan jawaban ya atau tidak</text></svg>', caption: 'Diagram alur (flowchart) memakai belah ketupat untuk keputusan. Bentuk ini juga dipakai di pelajaran Informatika sekolah.' },

            { h2: 'Percabangan di Scratch' },
            `Di Scratch, percabangan ada di kategori <b>Kontrol</b>: blok <i>jika ... maka</i> dan <i>jika ... maka ... jika tidak</i>. Kondisinya berbentuk segi enam dan diambil dari kategori Penginderaan (misalnya "menyentuh tepi?") atau Operator (misalnya "skor > 10").`,
            { scripts: [
                [['event', 'ketika 🏁 diklik'], ['control', 'selamanya', [['motion', 'gerak (5) langkah'], ['control', 'jika {menyentuh [Meteor]?} maka', [['looks', 'katakan (Aduh!) selama (1) detik'], ['motion', 'pergi ke x: (-200) y: (0)']]]]]],
                [['event', 'ketika 🏁 diklik'], ['sensing', 'tanya (Berapa 7 × 8?) dan tunggu'], ['control', 'jika {(jawaban) = (56)} maka', [['looks', 'katakan (Benar! 🎉)']], [['looks', 'katakan (Coba lagi ya)']]]],
            ], caption: 'Kiri: kalau menyentuh meteor, kembali ke awal. Kanan: kuis dengan jika-maka-jika tidak.' },
            `Perhatikan skrip kiri: percabangan berada <b>di dalam</b> loop selamanya. Kenapa? Karena komputer harus terus memeriksa apakah sprite menyentuh meteor. Kalau "jika" hanya dijalankan sekali di awal, pemeriksaan itu terjadi sekali saja lalu tidak pernah lagi. Ini kesalahan paling umum pemula, dan memahaminya adalah lompatan besar.`,

            { h2: 'Menggabungkan kondisi: dan, atau, tidak' },
            `Kadang keputusan butuh lebih dari satu syarat. Scratch menyediakan operator <b>dan</b>, <b>atau</b>, dan <b>tidak</b>.`,
            { table: { head: ['Operator', 'Benar jika ...', 'Contoh sehari-hari'], rows: [
                ['<b>dan</b>', 'kedua syarat benar', 'Boleh main game <b>jika</b> PR selesai <b>dan</b> sudah makan'],
                ['<b>atau</b>', 'salah satu syarat benar (atau keduanya)', 'Dapat hadiah <b>jika</b> juara kelas <b>atau</b> rajin membantu'],
                ['<b>tidak</b>', 'syaratnya salah', 'Main di luar <b>jika tidak</b> hujan'],
            ] } },
            { w: 'quiz', title: 'Kuis logika: benar atau salah?', desc: 'Cocok dikerjakan bersama anak kelas 4 ke atas.', questions: [
                { q: 'Rina boleh ikut lomba jika umurnya di bawah 12 DAN sudah mendaftar. Rina 10 tahun tapi belum mendaftar. Boleh ikut?', options: ['Boleh', 'Tidak boleh'], answer: 1, why: '"Dan" butuh kedua syarat benar. Syarat mendaftar belum terpenuhi.' },
                { q: 'Toko memberi diskon jika belanja di atas Rp100.000 ATAU membawa kupon. Dimas belanja Rp50.000 dan membawa kupon. Dapat diskon?', options: ['Dapat', 'Tidak dapat'], answer: 0, why: '"Atau" cukup satu syarat benar. Kuponnya sudah memenuhi.' },
                { q: 'Program: jika TIDAK menyentuh tanah, maka jatuh. Sprite sedang berdiri di tanah. Apa yang terjadi?', options: ['Sprite jatuh', 'Sprite tidak jatuh'], answer: 1, why: 'Sprite menyentuh tanah, jadi "tidak menyentuh tanah" bernilai salah, dan blok jatuh tidak dijalankan.' },
                { q: 'Di game, nyawa berkurang jika menyentuh meteor. Blok "jika" diletakkan di luar loop selamanya. Apa masalahnya?', options: ['Tidak ada masalah', 'Pemeriksaan hanya terjadi sekali di awal permainan'], answer: 1, why: 'Agar terus diperiksa, blok "jika" harus berada di dalam loop.' },
            ] },

            { h2: 'Permainan logika tanpa layar' },
            { ul: [
                '<b>Simon berkata versi jika.</b> "Jika kamu memakai baju merah, angkat tangan. Jika tidak, tepuk tangan."',
                '<b>Sortir kartu.</b> Kumpulkan kartu bergambar binatang. "Jika bisa terbang, taruh di kiri. Jika tidak, di kanan." Lalu tambah syarat: "Jika bisa terbang <i>dan</i> berkaki dua ..."',
                '<b>Pohon tebak-tebakan.</b> Anak memikirkan satu binatang, Anda hanya boleh bertanya ya/tidak. Gambar pertanyaan-pertanyaannya sebagai pohon keputusan.',
            ] },
            { callout: 'Pohon tebak-tebakan adalah versi sederhana dari "pohon keputusan" (decision tree), salah satu metode dasar dalam kecerdasan buatan. Anak sedang belajar ide yang dipakai ilmuwan data.', kind: 'good', title: 'Fakta menarik untuk anak' },

            { h2: 'Dari jika-maka ke game sungguhan' },
            `Hampir setiap aturan game adalah percabangan: jika skor mencapai 10, naik level; jika nyawa habis, game selesai; jika tombol spasi ditekan, lompat. Setelah memahami percabangan dan loop, anak sudah punya dua alat terpenting untuk membuat game sendiri. Di <a href="${pk('percabangan-jika-maka-untuk-anak', '/')}" target="_blank" rel="noopener">PixelKode</a>, konsep ini dilatih dulu dengan Robo yang harus memilih jalan, lalu langsung dipakai di game "Tangkap Bintang" buatan anak.`,
        ],
        faq: [
            ['Apa itu percabangan dalam pemrograman?', 'Percabangan adalah perintah yang menjalankan langkah tertentu hanya jika suatu kondisi benar, dan bisa menjalankan langkah lain jika kondisinya salah.'],
            ['Apa beda "jika maka" dan "jika maka jika tidak"?', '"Jika maka" hanya bertindak saat kondisi benar. "Jika maka jika tidak" juga punya tindakan saat kondisi salah.'],
            ['Kenapa blok "jika" di game saya tidak bekerja?', 'Kemungkinan besar blok itu hanya dijalankan sekali. Masukkan ke dalam loop "selamanya" supaya kondisi diperiksa terus.'],
            ['Umur berapa anak bisa paham operator dan, atau, tidak?', 'Biasanya kelas 3-4 SD bisa memahaminya dengan contoh sehari-hari, terutama lewat permainan sortir kartu.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Brennan & Resnick (2012). Kerangka berpikir komputasional (konsep kondisi dan operator)', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['CS Unplugged', 'https://www.csunplugged.org/'],
            ['Code.org: kurikulum CS Fundamentals', 'https://code.org/'],
        ],
    },

    {
        slug: 'variabel-untuk-anak-belajar-dari-skor-game',
        title: 'Variabel untuk Anak: Belajar dari Skor dan Nyawa di Game',
        description: 'Menjelaskan variabel kepada anak lewat skor, nyawa, dan pewaktu di game Scratch: analogi kotak bernama, kesalahan umum, dan simulasi skor.',
        date: D, category: C, tags: ['variabel', 'coding untuk anak', 'Scratch', 'skor game', 'konsep pemrograman'], cta: 'pixelkode',
        ctaNote: 'Modul Variabel di PixelKode berisi 6 pelajaran: Robo menghitung, tipe data, skor dan nyawa di game Tangkap Bintang, blok berparameter, sampai membuat chatbot.',
        lead: 'Variabel sering dianggap konsep yang sulit, padahal anak sudah memakainya setiap kali bermain: skor, jumlah nyawa, koin yang terkumpul, waktu tersisa. Artikel ini membantu Anda menjelaskan variabel dengan analogi yang melekat, menunjukkan cara memakainya di Scratch, dan memberi latihan untuk dicoba bersama.',
        body: [
            { h2: 'Analogi kotak bernama' },
            { callout: '"Variabel itu seperti kotak yang diberi nama. Di dalam kotak ada angka atau kata. Isinya bisa diganti kapan saja, tapi nama kotaknya tetap."', kind: 'info', title: 'Penjelasan untuk anak' },
            `Ambil beberapa kotak atau gelas plastik, tempel label "skor", "nyawa", dan "nama". Masukkan kertas bertuliskan angka atau kata. Lalu mainkan: "Kamu menangkap bintang! Ambil kertas di kotak skor, tambahkan 1, masukkan lagi." Peragaan fisik ini membuat konsep abstrak menjadi nyata, dan anak ingat bahwa variabel hanya menyimpan <b>satu nilai pada satu waktu</b>.`,

            { h2: 'Variabel di game yang anak kenal' },
            { table: { head: ['Variabel', 'Nilai awal', 'Berubah saat ...', 'Dipakai untuk ...'], rows: [
                ['skor', '0', 'menangkap koin (+1)', 'menampilkan prestasi, naik level'],
                ['nyawa', '3', 'menabrak musuh (−1)', 'game selesai saat 0'],
                ['waktu', '60', 'setiap detik (−1)', 'membatasi permainan'],
                ['level', '1', 'skor mencapai target (+1)', 'menambah kecepatan musuh'],
                ['nama', '(kosong)', 'pemain mengetik namanya', 'menyapa "Halo, Dina!"'],
            ] } },
            `Ajak anak mengamati game favoritnya dan menyebutkan variabel-variabelnya. Pertanyaan "angka apa saja yang berubah di layar?" sudah cukup untuk memulai.`,

            { h2: 'Tiga hal yang selalu dilakukan dengan variabel' },
            { svg: 'flow', label: 'Siklus variabel di game', steps: [{ t: 'Buat', d: 'beri nama, misal skor' }, { t: 'Atur nilai awal', d: 'skor = 0 saat mulai' }, { t: 'Ubah', d: 'skor + 1 saat menangkap' }, { t: 'Periksa', d: 'jika skor = 10, menang' }], caption: 'Lupa langkah 2 adalah kesalahan paling umum: skor game baru melanjutkan skor game lama.' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['variable', 'atur [skor] ke (0)'], ['variable', 'atur [nyawa] ke (3)'], ['control', 'selamanya', [['control', 'jika {menyentuh [Bintang]?} maka', [['variable', 'ubah [skor] sebesar (1)'], ['sound', 'mainkan suara [Ding]']]], ['control', 'jika {menyentuh [Meteor]?} maka', [['variable', 'ubah [nyawa] sebesar (-1)'], ['control', 'tunggu (1) detik']]], ['control', 'jika {(nyawa) = (0)} maka', [['looks', 'katakan (Game selesai!)'], ['control', 'hentikan [semua]']]]]]], caption: 'Skrip pemain di game Tangkap Bintang. Perhatikan blok "atur ke" di awal dan blok "ubah sebesar" di dalam loop.' },
            `Ada detail kecil yang sering membingungkan: <b>"atur ke"</b> mengganti isi kotak dengan nilai baru, sedangkan <b>"ubah sebesar"</b> menambah (atau mengurangi bila angkanya negatif) isi yang sudah ada. Skor 7 lalu "atur skor ke 1" hasilnya 1. Skor 7 lalu "ubah skor sebesar 1" hasilnya 8.`,

            { h2: 'Coba sendiri: simulasi skor' },
            { w: 'calc', title: 'Simulasi skor dan nyawa', desc: 'Geser untuk melihat bagaimana variabel berubah selama satu permainan.', inputs: [
                { id: 'bintang', label: 'Bintang yang ditangkap', value: 12, min: 0, max: 40, step: 1 },
                { id: 'poin', label: 'Poin per bintang', value: 1, min: 1, max: 10, step: 1 },
                { id: 'tabrak', label: 'Menabrak meteor', value: 1, min: 0, max: 5, step: 1 },
                { id: 'awal', label: 'Nyawa awal', value: 3, min: 1, max: 5, step: 1 },
            ], outputs: [
                { label: 'Skor akhir', expr: 'bintang * poin', fmt: 'int', big: true },
                { label: 'Nyawa tersisa', expr: 'Math.max(0, awal - tabrak)', fmt: 'int' },
                { label: 'Status', expr: "awal - tabrak <= 0 ? 'Game selesai' : (bintang * poin >= 20 ? 'Menang! Naik level' : 'Masih bermain')", fmt: 'text' },
            ] },

            { h2: 'Tipe nilai: angka dan teks' },
            `Variabel bisa berisi angka (3, 100, −5) atau teks ("Dina", "halo"). Anak kelas atas SD perlu tahu bedanya karena operasi yang bisa dilakukan berbeda. Angka bisa dijumlahkan; teks bisa disambung. Di Scratch, blok <i>gabung</i> menyambung teks: gabung "Halo, " dengan nama menjadi "Halo, Dina".`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['sensing', 'tanya (Siapa namamu?) dan tunggu'], ['variable', 'atur [nama] ke (jawaban)'], ['looks', 'katakan (gabung (Halo, ) (nama)) selama (2) detik']], caption: 'Variabel teks: menyimpan nama pemain lalu memakainya untuk menyapa.' },

            { h2: 'Kesalahan umum dan cara membantunya' },
            { w: 'cards', title: 'Ketuk untuk melihat solusinya', items: [
                { tag: 'Masalah', front: 'Skor tidak kembali ke 0 saat main lagi.', backTag: 'Solusi', back: 'Tambahkan "atur skor ke 0" tepat di bawah "ketika bendera diklik".' },
                { tag: 'Masalah', front: 'Skor naik puluhan sekaligus saat menyentuh bintang.', backTag: 'Solusi', back: 'Selama sprite menempel, kondisi terus benar. Pindahkan bintang setelah ditangkap, atau tambahkan "tunggu" sebentar.' },
                { tag: 'Masalah', front: 'Nyawa bisa menjadi minus.', backTag: 'Solusi', back: 'Periksa "jika nyawa = 0" atau "jika nyawa < 1" lalu hentikan game.' },
                { tag: 'Masalah', front: 'Variabel bernama "var1", "var2" sehingga bingung.', backTag: 'Solusi', back: 'Biasakan nama yang menjelaskan isinya: skor, nyawa, waktu. Ini kebiasaan programmer profesional.' },
            ] },

            { h2: 'Hubungan dengan matematika sekolah' },
            `Variabel di coding membuka jalan ke aljabar. Ketika kelak anak bertemu "x + 3 = 10", ia sudah punya bayangan bahwa x adalah wadah yang menyimpan nilai. Bedanya, di matematika x biasanya dicari, sedangkan di coding variabel diisi dan diubah. Bila Anda ingin memperkenalkan variabel dengan alur yang bertahap, <a href="${pk('variabel-untuk-anak-belajar-dari-skor-game', '/')}" target="_blank" rel="noopener">kurikulum PixelKode</a> menaruhnya di modul 5, setelah anak nyaman dengan loop, kejadian, koordinat, dan kondisi.`,
        ],
        faq: [
            ['Apa itu variabel untuk anak SD?', 'Variabel adalah kotak bernama yang menyimpan nilai, seperti skor atau nyawa di game. Isinya bisa berubah, namanya tetap.'],
            ['Apa beda "atur ke" dan "ubah sebesar" di Scratch?', '"Atur ke" mengganti nilai dengan nilai baru. "Ubah sebesar" menambah atau mengurangi nilai yang sudah ada.'],
            ['Kenapa skor game anak saya tidak kembali ke nol?', 'Belum ada blok "atur skor ke 0" di awal program, tepat di bawah blok bendera hijau.'],
            ['Apakah variabel sama dengan x di matematika?', 'Mirip, keduanya mewakili nilai dengan sebuah nama. Bedanya, di program variabel bisa berubah berkali-kali selama program berjalan.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Brennan & Resnick (2012). Kerangka berpikir komputasional (konsep data)', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Scherer dkk. (2019). Meta-analisis manfaat belajar pemrograman', 'https://doi.org/10.1037/edu0000314'],
        ],
    },

    {
        slug: 'debugging-untuk-anak-salah-bagian-dari-belajar',
        title: 'Debugging untuk Anak: Salah Itu Bagian dari Belajar',
        description: 'Debugging melatih anak tidak takut salah. Lima langkah mencari bug, kalimat pendamping yang tepat, dan latihan menemukan kesalahan program.',
        date: D, category: C, tags: ['debugging', 'growth mindset', 'coding untuk anak', 'pemecahan masalah', 'pola asuh'], cta: 'pixelkode',
        ctaNote: 'Pelajaran 15 PixelKode, "Testing Game", sepenuhnya tentang berburu bug: Robo dengan program yang sengaja rusak, debugger langkah demi langkah, dan petunjuk bertahap.',
        lead: 'Di sekolah, salah sering berarti nilai berkurang. Di coding, salah adalah kejadian sehari-hari yang bahkan punya nama sendiri: bug. Programmer profesional menghabiskan banyak waktunya untuk mencari dan memperbaiki bug. Bagi anak, ini kesempatan langka untuk belajar bahwa kesalahan bisa diselidiki, dipahami, dan diperbaiki, bukan disembunyikan.',
        body: [
            { h2: 'Apa itu bug dan debugging?' },
            `<b>Bug</b> adalah kesalahan dalam program yang membuat hasilnya tidak sesuai harapan. <b>Debugging</b> adalah proses mencari dan memperbaikinya. Ada cerita terkenal yang bisa Anda bagikan ke anak: pada 1947, tim komputer Harvard Mark II menemukan seekor ngengat terjepit di dalam mesin. Ngengat itu ditempel di buku catatan dengan tulisan "first actual case of bug being found". Buku catatan itu kini menjadi koleksi Smithsonian National Museum of American History. Istilah "bug" untuk gangguan teknis sebenarnya sudah dipakai sebelumnya, tetapi cerita ini membuatnya populer.`,
            { callout: 'Anak yang programnya error tidak sedang gagal. Ia sedang melakukan pekerjaan yang sama dengan programmer di perusahaan teknologi besar: menemukan bug.', kind: 'good', title: 'Ubah cara pandang' },

            { h2: 'Kenapa debugging bagus untuk karakter anak' },
            `Psikolog Carol Dweck dan rekannya meneliti bagaimana cara anak memandang kemampuan memengaruhi caranya menghadapi kesulitan. Dalam studi Mueller dan Dweck (1998), anak yang dipuji karena <b>usahanya</b> cenderung memilih tugas yang lebih menantang dan lebih tekun setelah gagal, dibanding anak yang dipuji karena <b>kepintarannya</b>. Debugging adalah latihan alami untuk pola pikir yang menghargai proses ini: anak berkali-kali mengalami "belum berhasil" yang kemudian menjadi "berhasil" berkat usahanya.`,
            `Debugging juga melatih keterampilan yang sangat praktis: membaca dengan teliti, membuat dugaan, menguji dugaan, dan bersabar. Keempatnya berguna saat mengerjakan soal matematika, mencari kesalahan tulisan, atau memperbaiki sepeda.`,

            { h2: 'Lima langkah debugging yang bisa diajarkan' },
            { svg: 'cycle', label: 'Siklus debugging', items: ['Amati: apa yang terjadi?', 'Bandingkan: apa yang seharusnya?', 'Duga penyebabnya', 'Ubah satu hal', 'Uji lagi'], caption: 'Ulangi siklus ini sampai program berjalan sesuai harapan. Kuncinya: ubah satu hal setiap kali.' },
            { ol: [
                '<b>Amati.</b> Jalankan program dan jelaskan apa yang sebenarnya terjadi. "Kucingnya berjalan, tapi tidak berhenti di pohon."',
                '<b>Bandingkan.</b> Apa yang seharusnya terjadi? "Seharusnya berhenti dan berkata halo."',
                '<b>Duga.</b> Blok mana yang mungkin penyebabnya? Tunjuk dengan jari.',
                '<b>Ubah satu hal.</b> Hanya satu. Kalau mengubah tiga hal sekaligus, kita tidak tahu mana yang berhasil.',
                '<b>Uji lagi.</b> Jalankan. Kalau belum benar, kembali ke langkah 1 dengan informasi baru.',
            ] },
            { h3: 'Teknik bebek karet' },
            `Programmer punya teknik bernama <i>rubber duck debugging</i>: menjelaskan program baris demi baris kepada bebek mainan. Sering kali, saat menjelaskan, kita menemukan sendiri kesalahannya. Untuk anak, ganti bebek dengan boneka kesayangan, atau Anda sendiri yang berperan sebagai "bebek" yang cukup mendengarkan dan mengangguk.`,

            { h2: 'Latihan: temukan bug-nya' },
            `Program di bawah seharusnya membuat kucing berjalan ke kanan 5 kali, berkata "Sampai!", lalu kembali ke awal saat bendera diklik lagi. Tapi ada 2 bug. Bisakah anak Anda menemukannya?`,
            { blocks: [['event', 'ketika 🏁 diklik'], ['control', 'ulangi (5)', [['motion', 'gerak (20) langkah'], ['looks', 'katakan (Sampai!) selama (1) detik']]], ['control', 'tunggu (0.2) detik']], caption: 'Program berisi bug. Coba temukan sebelum membuka kartu di bawah.' },
            { w: 'cards', title: 'Ketuk untuk melihat jawabannya', items: [
                { tag: 'Bug 1', front: 'Kucing berkata "Sampai!" berkali-kali di tengah jalan.', backTag: 'Perbaikan', back: 'Blok "katakan Sampai!" ada di dalam loop. Pindahkan ke bawah loop, dan pindahkan "tunggu 0.2 detik" ke dalam loop supaya langkahnya terlihat.' },
                { tag: 'Bug 2', front: 'Saat bendera diklik lagi, kucing mulai dari posisi terakhir dan lama-lama keluar layar.', backTag: 'Perbaikan', back: 'Tidak ada posisi awal. Tambahkan "pergi ke x: -150 y: 0" tepat di bawah blok bendera.' },
            ] },
            { w: 'robo', title: 'Latihan debugging dengan Robo', desc: 'Coba program ini: maju, maju, belok kiri, maju, maju. Robo akan menabrak. Temukan langkah yang salah dan perbaiki.', levels: [
                { name: 'Program yang salah belok', goal: 'Bendera ada di bawah kanan. Kalau program di atas menabrak, di langkah ke berapa salahnya?', map: ['######', '#>..##', '###.##', '###.##', '###F##', '######'], max: 6 },
            ] },

            { h2: 'Kalimat pendamping yang membantu (dan yang sebaiknya dihindari)' },
            { table: { head: ['Hindari', 'Coba ganti dengan'], rows: [
                ['"Kok salah lagi sih?"', '"Wah, ketemu bug. Ayo kita selidiki."'],
                ['"Sini, Mama saja yang betulkan."', '"Sudah coba apa saja? Blok mana yang kamu curigai?"'],
                ['"Kamu memang pintar!" (setelah berhasil)', '"Kamu sabar mencoba sampai ketemu. Itu keren."'],
                ['"Ini kan gampang."', '"Bagian ini memang tricky. Pelan-pelan ya."'],
                ['"Ya sudah, berhenti dulu kalau tidak bisa."', '"Mau istirahat 5 menit lalu kita lihat lagi dengan mata segar?"'],
            ] } },
            { callout: 'Kalau anak mulai menangis atau marah, berhenti sejenak itu boleh. Frustrasi yang terlalu besar tidak membuat belajar lebih baik. Kembali setelah tenang, dan mulai dari bagian kecil yang pasti bisa ia selesaikan.', kind: 'warn', title: 'Batas yang sehat' },

            { h2: 'Membangun kebiasaan menguji' },
            `Cara terbaik mengurangi bug adalah menguji sedikit demi sedikit. Ajarkan kebiasaan "susun sedikit, jalankan, cek" sejak awal. Anak yang menyusun 30 blok lalu baru menjalankan programnya akan kesulitan menemukan bug. Anak yang menjalankan program setiap 3-4 blok tambahan akan langsung tahu blok mana yang bermasalah.`,
            `Di kelas yang baik, alat bantu juga berperan. <a href="${pk('debugging-untuk-anak-salah-bagian-dari-belajar', '/')}" target="_blank" rel="noopener">PixelKode</a>, misalnya, punya debugger Robo yang menjalankan program langkah demi langkah dan menyorot blok yang sedang berjalan, plus petunjuk bertahap yang tidak langsung membocorkan jawaban. Tujuannya sama dengan semua saran di artikel ini: anak menemukan sendiri, bukan diberi tahu.`,
        ],
        faq: [
            ['Apa arti debugging untuk anak?', 'Debugging adalah mencari dan memperbaiki kesalahan (bug) dalam program sampai hasilnya sesuai harapan.'],
            ['Bagaimana jika anak mudah menyerah saat programnya error?', 'Kecilkan masalahnya, puji usahanya, dan ajarkan langkah debugging yang jelas. Istirahat sejenak juga membantu.'],
            ['Apakah orang tua harus bisa coding untuk membantu debugging?', 'Tidak. Pertanyaan seperti "apa yang seharusnya terjadi?" dan "blok mana yang kamu curigai?" sudah sangat membantu.'],
            ['Kenapa disebut bug?', 'Istilah ini populer setelah tim Harvard Mark II pada 1947 menemukan ngengat di dalam komputer dan menempelkannya di buku catatan.'],
        ],
        sources: [
            ['Mueller, C. M., & Dweck, C. S. (1998). Praise for intelligence can undermine children\'s motivation and performance', 'https://doi.org/10.1037/0022-3514.75.1.33'],
            ['Smithsonian National Museum of American History: Log book with computer bug', 'https://www.si.edu/object/log-book-computer-bug:nmah_334663'],
            ['Brennan & Resnick (2012). Praktik menguji dan memperbaiki (testing and debugging)', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
        ],
    },

    {
        slug: 'membuat-game-pertama-di-scratch-tangkap-bintang',
        title: 'Membuat Game Pertama di Scratch: Tangkap Bintang',
        description: 'Tutorial langkah demi langkah membuat game Tangkap Bintang di Scratch untuk anak: gerakan pemain, bintang jatuh acak, skor, nyawa, dan ide pengembangan.',
        date: D, category: C, tags: ['membuat game Scratch', 'tutorial Scratch', 'game anak', 'coding untuk anak', 'proyek Scratch'], cta: 'pixelkode',
        ctaNote: 'Game Tangkap Bintang di PixelKode dibuat bertahap dalam tiga versi (v1, v2, v3) sepanjang modul Game dan Variabel, dengan pemeriksaan otomatis untuk setiap target.',
        lead: 'Game pertama adalah momen yang sering membuat anak jatuh cinta pada coding. Tutorial ini membimbing langkah demi langkah membuat Tangkap Bintang: pemain bergerak dengan panah, bintang jatuh dari langit, skor bertambah, dan game selesai saat nyawa habis. Cocok untuk anak 8-11 tahun dengan pendampingan, sekitar 60-90 menit.',
        body: [
            { h2: 'Rencanakan dulu sebelum menyusun blok' },
            `Programmer game tidak langsung menyusun kode. Mereka membuat rancangan sederhana. Ajak anak mengisi rancangan ini dulu, di kertas atau di kolom berikut:`,
            { w: 'builder', title: 'Dokumen desain game mini', desc: 'Isi bersama anak, lalu salin dan tempel di catatan proyek Scratch.', fields: [
                { id: 'judul', label: 'Judul game', value: 'Tangkap Bintang' },
                { id: 'pemain', label: 'Siapa tokoh pemain?', placeholder: 'mis. keranjang, kucing, roket' },
                { id: 'tujuan', label: 'Apa tujuan permainan?', value: 'Tangkap bintang sebanyak-banyaknya' },
                { id: 'kontrol', label: 'Tombol apa yang dipakai?', value: 'panah kiri dan kanan' },
                { id: 'kalah', label: 'Kapan game selesai?', value: 'nyawa habis' },
            ], template: 'GAME: {judul}\nPemain: {pemain}\nTujuan: {tujuan}\nKontrol: {kontrol}\nSelesai jika: {kalah}' },
            { svg: 'flow', label: 'Urutan membuat game', steps: [{ t: 'Pemain bergerak', d: 'panah kiri dan kanan' }, { t: 'Bintang jatuh', d: 'dari posisi acak' }, { t: 'Skor', d: 'bertambah saat tertangkap' }, { t: 'Nyawa', d: 'berkurang saat lolos' }, { t: 'Akhir game', d: 'pesan dan berhenti' }], caption: 'Kerjakan satu bagian, uji, baru lanjut ke bagian berikutnya.' },

            { h2: 'Langkah 1: siapkan panggung dan sprite' },
            { ol: [
                'Buka scratch.mit.edu, klik <b>Buat</b>, ubah bahasa ke Indonesia.',
                'Pilih latar: klik ikon latar di kanan bawah, cari "Stars" atau latar langit malam.',
                'Hapus kucing bila tidak dipakai, lalu tambahkan sprite pemain, misalnya "Bowl" (mangkuk) dari pustaka.',
                'Tambahkan sprite <b>Bintang</b> ("Star") dari pustaka.',
                'Buat dua variabel di kategori Variabel: <b>skor</b> dan <b>nyawa</b>, untuk semua sprite.',
            ] },

            { h2: 'Langkah 2: pemain bergerak' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['motion', 'pergi ke x: (0) y: (-140)'], ['variable', 'atur [skor] ke (0)'], ['variable', 'atur [nyawa] ke (3)'], ['control', 'selamanya', [['control', 'jika {tombol [panah kanan] ditekan?} maka', [['motion', 'ubah x sebesar (8)']]], ['control', 'jika {tombol [panah kiri] ditekan?} maka', [['motion', 'ubah x sebesar (-8)']]]]]], caption: 'Skrip pemain. Variabel diatur ulang di sini supaya setiap permainan baru dimulai dari 0.' },
            `Uji sekarang. Tekan bendera hijau lalu panah kiri dan kanan. Pemain bergerak? Bagus. Kalau terlalu lambat atau cepat, ubah angka 8. Kenapa memakai "jika tombol ditekan" di dalam loop, bukan blok "ketika tombol ditekan"? Karena cara ini membuat gerakan lebih halus saat tombol ditahan.`,

            { h2: 'Langkah 3: bintang jatuh dari posisi acak' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['control', 'selamanya', [['motion', 'pergi ke x: (acak (-220) sampai (220)) y: (170)'], ['control', 'ulangi sampai {(posisi y) < (-170)}', [['motion', 'ubah y sebesar (-5)'], ['control', 'jika {menyentuh [Bowl]?} maka', [['variable', 'ubah [skor] sebesar (1)'], ['sound', 'mainkan suara [Collect]'], ['motion', 'pergi ke x: (acak (-220) sampai (220)) y: (170)']]]]], ['variable', 'ubah [nyawa] sebesar (-1)']]]], caption: 'Skrip bintang. Bintang jatuh sampai bawah; kalau tertangkap, skor bertambah dan bintang muncul lagi di atas. Kalau lolos ke bawah, nyawa berkurang.' },
            `Skrip ini memuat hampir semua konsep dasar sekaligus: loop selamanya, loop "ulangi sampai", percabangan, variabel, dan angka acak. Jangan khawatir bila anak belum paham semuanya. Ajak ia membaca skripnya seperti cerita: "Selamanya, bintang pergi ke atas di tempat acak, lalu turun sampai bawah. Kalau di jalan menyentuh mangkuk, skor bertambah."`,
            { callout: 'Angka acak membuat game tidak membosankan karena bintang muncul di tempat berbeda setiap kali. Tanpa acak, pemain cukup diam di satu tempat.', kind: 'info', title: 'Kenapa acak?' },

            { h2: 'Langkah 4: akhir permainan' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['control', 'tunggu sampai {(nyawa) < (1)}'], ['looks', 'katakan (gabung (Game selesai! Skormu: ) (skor))'], ['control', 'hentikan [semua]']], caption: 'Tambahkan skrip ini di sprite pemain. "Tunggu sampai" berjaga terus sampai nyawa habis.' },
            `Uji seluruh game. Ajak anggota keluarga mencoba. Perhatikan reaksi mereka: terlalu mudah? Terlalu sulit? Mengamati orang lain bermain adalah cara terbaik menemukan hal yang perlu diperbaiki. Pengembang game profesional menyebutnya <i>playtesting</i>.`,

            { h2: 'Bug yang sering muncul' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Bug', front: 'Skor bertambah banyak sekaligus saat menangkap satu bintang.', backTag: 'Solusi', back: 'Bintang harus langsung dipindah ke atas setelah tertangkap, seperti di skrip langkah 3. Kalau tidak, ia terus menyentuh mangkuk.' },
                { tag: 'Bug', front: 'Nyawa langsung habis di awal.', backTag: 'Solusi', back: 'Periksa "atur nyawa ke 3" ada di awal, dan blok "ubah nyawa -1" berada di luar loop "ulangi sampai".' },
                { tag: 'Bug', front: 'Bintang tidak terlihat jatuh.', backTag: 'Solusi', back: 'Pastikan sprite bintang ditampilkan (blok "tampilkan") dan ukurannya tidak terlalu kecil.' },
            ] },

            { h2: 'Ide pengembangan untuk anak' },
            `Setelah game dasar jalan, biarkan anak memodifikasinya sesuai idenya sendiri. Di sinilah kreativitas tumbuh.`,
            { w: 'checklist', title: 'Tantangan tambahan (pilih yang disukai)', desc: 'Centang yang sudah berhasil. Progres tersimpan di browser ini.', items: ['Bintang jatuh makin cepat setiap skor bertambah 5.', 'Tambah meteor: menyentuhnya mengurangi nyawa.', 'Musik latar yang berulang selama permainan.', 'Layar judul "Tekan spasi untuk mulai".', 'Bintang emas langka yang bernilai 5 poin.', 'Menyimpan skor tertinggi dengan variabel "rekor".'] },
            `Satu game yang dikembangkan bertahap jauh lebih bermakna dibanding sepuluh game yang disalin dari video. Pendekatan ini yang dipakai di <a href="${pk('membuat-game-pertama-di-scratch-tangkap-bintang', '/')}" target="_blank" rel="noopener">PixelKode</a>: game Tangkap Bintang dibangun dari versi 1 (gerakan) sampai versi 3 (skor, nyawa, waktu) seiring anak mempelajari konsep baru.`,
        ],
        faq: [
            ['Berapa lama membuat game Tangkap Bintang?', 'Sekitar 60-90 menit untuk anak yang sudah mengenal editor Scratch, bisa dibagi menjadi dua sesi.'],
            ['Apakah game ini bisa dimainkan di HP?', 'Game memakai tombol panah, jadi paling nyaman di komputer. Untuk layar sentuh, ganti kontrol dengan "ketika sprite ini diklik" atau mengikuti posisi jari.'],
            ['Kenapa bintang perlu posisi acak?', 'Supaya permainan menantang. Tanpa acak, bintang selalu jatuh di tempat yang sama dan pemain cukup diam.'],
            ['Anak saya ingin membuat game seperti Minecraft. Bisa?', 'Mulai dari game kecil dulu. Game besar adalah gabungan banyak game kecil. Setiap konsep yang dikuasai di Tangkap Bintang akan terpakai.'],
        ],
        sources: [
            ['Scratch: buat proyek baru', 'https://scratch.mit.edu/projects/editor/'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Resnick, M. Lifelong Kindergarten (MIT Media Lab)', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
        ],
    },
];
