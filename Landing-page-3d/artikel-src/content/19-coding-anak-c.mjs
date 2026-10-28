import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding untuk Anak';

export default [
    {
        slug: 'membuat-animasi-di-scratch-untuk-pemula',
        title: 'Membuat Animasi di Scratch: Kostum, Tunggu, dan Ulangi',
        description: 'Panduan membuat animasi di Scratch untuk anak: prinsip kostum dan jeda, berjalan, melayang, berbicara, efek, storyboard, dan proyek film pendek pertama.',
        date: D, category: C, tags: ['animasi Scratch', 'tutorial Scratch', 'coding untuk anak', 'kostum Scratch', 'proyek anak'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, anak membuat animasi berjalan di Pelajaran 2 dan film pendek "Misi ke Bulan" di Pelajaran 10, lengkap dengan storyboard sebelum mulai menyusun blok.',
        lead: 'Animasi adalah pintu masuk coding yang paling ramah bagi anak yang suka menggambar dan bercerita. Rahasianya sederhana dan sama dengan film kartun: gambar yang sedikit berbeda ditampilkan bergantian dengan cepat. Artikel ini menjelaskan prinsipnya, blok yang dipakai, dan memandu anak membuat film pendek pertamanya.',
        body: [
            { h2: 'Prinsip animasi: gambar berganti cepat' },
            `Film kartun klasik dibuat dari banyak gambar diam yang ditampilkan berurutan, biasanya belasan sampai dua puluhan gambar per detik. Mata dan otak kita menyambungkan gambar-gambar itu menjadi gerakan. Anak bisa membuktikannya sendiri dengan membuat <b>buku flip</b>: gambar orang lidi di pojok setiap halaman buku tulis dengan posisi kaki sedikit berbeda, lalu balik halamannya dengan cepat.`,
            `Di Scratch, setiap gambar itu disebut <b>kostum</b>. Sprite kucing bawaan punya dua kostum dengan posisi kaki berbeda. Berganti kostum sambil bergerak membuatnya tampak berjalan.`,
            { svg: 'flow', label: 'Resep animasi berjalan', steps: [{ t: 'Kostum berikutnya', d: 'ganti gambar' }, { t: 'Gerak sedikit', d: 'pindah posisi' }, { t: 'Tunggu', d: 'jeda singkat' }, { t: 'Ulangi', d: 'kembali ke langkah 1' }], caption: 'Tiga blok di dalam satu loop sudah cukup untuk membuat tokoh berjalan.' },

            { h2: 'Blok-blok penting untuk animasi' },
            { table: { head: ['Blok', 'Kategori', 'Kegunaan dalam animasi'], rows: [
                ['kostum berikutnya / ganti kostum ke', 'Tampilan', 'Berganti gambar untuk gerakan'],
                ['tunggu ... detik', 'Kontrol', 'Mengatur kecepatan, memberi jeda antaradegan'],
                ['meluncur ... detik ke x: y:', 'Gerakan', 'Bergerak halus ke titik tertentu'],
                ['katakan ... selama ... detik', 'Tampilan', 'Dialog dengan balon kata'],
                ['ubah ukuran sebesar', 'Tampilan', 'Efek mendekat atau menjauh'],
                ['ubah efek [hantu / warna] sebesar', 'Tampilan', 'Muncul perlahan, menghilang, berubah warna'],
                ['ganti latar ke', 'Tampilan (Panggung)', 'Pindah adegan'],
            ] } },

            { h2: 'Empat animasi dasar' },
            { h3: '1. Berjalan' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['motion', 'pergi ke x: (-200) y: (-100)'], ['control', 'ulangi (40)', [['looks', 'kostum berikutnya'], ['motion', 'gerak (10) langkah'], ['control', 'tunggu (0.1) detik']]]], caption: 'Coba ubah "tunggu" menjadi 0.3 lalu 0.03. Mana yang terlihat paling alami?' },
            { h3: '2. Melayang dan berputar' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['motion', 'meluncur (2) detik ke x: (150) y: (120)'], ['control', 'ulangi (36)', [['motion', 'putar ↻ (10) derajat']]], ['motion', 'meluncur (2) detik ke x: (-150) y: (120)']], caption: '"Meluncur" bagus untuk roket, burung, atau kupu-kupu karena gerakannya mulus.' },
            { h3: '3. Muncul perlahan (fade in)' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['looks', 'atur efek [hantu] ke (100)'], ['control', 'ulangi (20)', [['looks', 'ubah efek [hantu] sebesar (-5)'], ['control', 'tunggu (0.05) detik']]]], caption: 'Efek hantu 100 berarti tidak terlihat. Dikurangi bertahap sampai 0, tokoh muncul perlahan seperti di film.' },
            { h3: '4. Berbicara bergantian' },
            `Dialog antar dua tokoh butuh pengaturan waktu: tokoh B harus menunggu sampai tokoh A selesai bicara. Cara paling sederhana adalah memakai "tunggu" dengan durasi yang sama. Cara yang lebih rapi adalah memakai <b>siarkan pesan</b>, yang dibahas di artikel tentang cerita interaktif.`,

            { h2: 'Membuat film pendek: mulai dari storyboard' },
            `Animator profesional di studio besar selalu membuat <b>storyboard</b> sebelum menganimasikan: deretan sketsa kasar setiap adegan. Untuk anak, storyboard mencegah proyek melebar tanpa arah dan melatih perencanaan.`,
            { w: 'builder', title: 'Storyboard film 4 adegan', desc: 'Isi bersama anak. Satu adegan = satu latar dan satu kejadian penting.', fields: [
                { id: 'judul', label: 'Judul film', placeholder: 'mis. Misi ke Bulan' },
                { id: 'a1', label: 'Adegan 1: pembuka (siapa tokohnya, di mana?)', placeholder: 'mis. Roket di bumi, astronot berkata "Ayo berangkat!"', long: true },
                { id: 'a2', label: 'Adegan 2: perjalanan atau masalah', placeholder: 'mis. Roket terbang melewati bintang, ada meteor', long: true },
                { id: 'a3', label: 'Adegan 3: puncak', placeholder: 'mis. Roket menghindari meteor', long: true },
                { id: 'a4', label: 'Adegan 4: penutup', placeholder: 'mis. Mendarat di bulan, mengibarkan bendera', long: true },
            ], template: 'FILM: {judul}\n\n1. {a1}\n2. {a2}\n3. {a3}\n4. {a4}' },
            { callout: 'Batasi film pertama 4 adegan dan maksimal 3 tokoh. Film pendek yang selesai jauh lebih membanggakan daripada film panjang yang tidak pernah rampung.', kind: 'good', title: 'Saran ukuran proyek' },

            { h2: 'Mengatur pergantian adegan' },
            { blocks: [['event', 'ketika 🏁 diklik'], ['looks', 'ganti latar ke [Bumi]'], ['control', 'tunggu (4) detik'], ['looks', 'ganti latar ke [Angkasa]'], ['control', 'tunggu (6) detik'], ['looks', 'ganti latar ke [Bulan]']], caption: 'Skrip di Panggung mengatur urutan adegan. Sprite bisa bereaksi dengan blok "ketika latar berganti ke".' },
            `Untuk setiap sprite, gunakan blok kejadian <i>ketika latar berganti ke ...</i> supaya tokoh muncul, bergerak, atau menghilang sesuai adegan. Dengan cara ini, Panggung menjadi "sutradara" dan sprite menjadi "pemain".`,

            { h2: 'Masalah umum dan solusinya' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Masalah', front: 'Animasi terlalu cepat, terlihat seperti melompat.', backTag: 'Solusi', back: 'Tambahkan atau perbesar "tunggu" di dalam loop. Mulai dari 0.1 detik.' },
                { tag: 'Masalah', front: 'Saat diputar ulang, tokoh mulai dari tempat yang salah.', backTag: 'Solusi', back: 'Atur posisi, ukuran, kostum, dan efek awal tepat di bawah blok bendera hijau.' },
                { tag: 'Masalah', front: 'Tokoh tidak terlihat sama sekali.', backTag: 'Solusi', back: 'Mungkin masih tersembunyi atau efek hantu 100. Tambahkan "tampilkan" dan "hapus efek grafis" di awal.' },
                { tag: 'Masalah', front: 'Dialog bertabrakan, dua tokoh bicara bersamaan.', backTag: 'Solusi', back: 'Hitung waktu dengan "tunggu", atau lebih rapi lagi pakai "siarkan pesan dan tunggu".' },
            ] },

            { h2: 'Yang dipelajari anak lewat animasi' },
            `Di balik film pendek, anak melatih urutan (algoritma), pengulangan, pengaturan waktu, kejadian, dan perencanaan. Ia juga belajar bercerita: tokoh, masalah, dan penyelesaian. Bagi anak yang belum tertarik pada game, animasi sering menjadi jalan masuk terbaik ke coding. Jalur belajar yang menggabungkan keduanya, seperti di <a href="${pk('membuat-animasi-di-scratch-untuk-pemula', '/')}" target="_blank" rel="noopener">PixelKode</a>, memberi anak kesempatan menemukan bentuk karya yang paling ia sukai.`,
        ],
        faq: [
            ['Bagaimana cara membuat tokoh berjalan di Scratch?', 'Gunakan loop berisi "kostum berikutnya", "gerak 10 langkah", dan "tunggu 0.1 detik". Pergantian kostum yang cepat membuat kaki tampak melangkah.'],
            ['Apakah anak bisa menggambar kostum sendiri?', 'Bisa. Tab Kostum di Scratch punya editor gambar. Anak juga bisa mengunggah gambar buatannya yang difoto.'],
            ['Berapa lama membuat film pendek di Scratch?', 'Film 4 adegan biasanya selesai dalam 2-3 sesi masing-masing 45-60 menit, termasuk membuat storyboard.'],
            ['Apa bedanya "gerak" dan "meluncur"?', '"Gerak" memindahkan langsung sejumlah langkah. "Meluncur" berpindah halus ke titik tujuan dalam waktu yang ditentukan.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Scratch: buat proyek baru', 'https://scratch.mit.edu/projects/editor/'],
            ['Brennan & Resnick (2012). Kerangka berpikir komputasional', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
        ],
    },

    {
        slug: 'koordinat-x-y-di-scratch-untuk-anak',
        title: 'Koordinat X dan Y di Scratch: Matematika Terasa Seperti Main',
        description: 'Penjelasan koordinat x dan y di panggung Scratch untuk anak: ukuran panggung, empat kuadran, bilangan negatif, blok pergi ke dan meluncur, serta latihan interaktif.',
        date: D, category: C, tags: ['koordinat Scratch', 'koordinat kartesius', 'matematika anak', 'coding untuk anak', 'bilangan negatif'], cta: 'pixelkode',
        ctaNote: 'Modul Angkasa di PixelKode mengajarkan koordinat lewat "Tur Planet" dan "Rasi Bintang": anak menerbangkan roket ke titik-titik tertentu sambil memahami x, y, dan bilangan negatif.',
        lead: 'Banyak anak baru bertemu koordinat kartesius dan bilangan negatif di kelas atas SD atau SMP, dan sering merasa itu abstrak. Di Scratch, koordinat langsung terlihat: ubah angka x, kucing berpindah ke kanan atau kiri. Artikel ini menjelaskan sistem koordinat panggung Scratch dan cara memanfaatkannya untuk belajar matematika sambil bermain.',
        body: [
            { h2: 'Panggung Scratch adalah bidang koordinat' },
            `Panggung Scratch berukuran <b>480 × 360</b> titik. Titik tengahnya adalah <b>(0, 0)</b>. Nilai <b>x</b> menunjukkan posisi mendatar: dari <b>−240</b> di tepi kiri sampai <b>240</b> di tepi kanan. Nilai <b>y</b> menunjukkan posisi tegak: dari <b>−180</b> di bawah sampai <b>180</b> di atas.`,
            { svgraw: '<svg viewBox="0 0 520 400" role="img" aria-label="Panggung Scratch dengan sumbu x dari -240 sampai 240 dan sumbu y dari -180 sampai 180" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><rect x="20" y="20" width="480" height="360" fill="#fff" stroke="#0f1a33" stroke-width="2"/><rect x="260" y="20" width="240" height="180" fill="#e8f1ff"/><rect x="20" y="20" width="240" height="180" fill="#e4f6cc"/><rect x="20" y="200" width="240" height="180" fill="#fff1d6"/><rect x="260" y="200" width="240" height="180" fill="#ebe2fd"/><line x1="20" y1="200" x2="500" y2="200" stroke="#0f1a33" stroke-width="2"/><line x1="260" y1="20" x2="260" y2="380" stroke="#0f1a33" stroke-width="2"/><text x="380" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#1e5ab2">x positif, y positif</text><text x="140" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#1f7a46">x negatif, y positif</text><text x="140" y="340" text-anchor="middle" font-size="14" font-weight="700" fill="#9a5b00">x negatif, y negatif</text><text x="380" y="340" text-anchor="middle" font-size="14" font-weight="700" fill="#7a3fb4">x positif, y negatif</text><circle cx="260" cy="200" r="6" fill="#b3261e"/><text x="268" y="218" font-size="13" font-weight="700" fill="#b3261e">(0, 0)</text><text x="26" y="194" font-size="12" fill="#0f1a33">−240</text><text x="466" y="194" font-size="12" fill="#0f1a33">240</text><text x="266" y="36" font-size="12" fill="#0f1a33">180</text><text x="266" y="374" font-size="12" fill="#0f1a33">−180</text><circle cx="360" cy="150" r="6" fill="#0f1a33"/><text x="370" y="146" font-size="13" fill="#0f1a33">(100, 50)</text><circle cx="140" cy="280" r="6" fill="#0f1a33"/><text x="150" y="276" font-size="13" fill="#0f1a33">(−120, −80)</text></svg>', caption: 'Empat kuadran panggung Scratch. Titik (100, 50) berarti 100 ke kanan dan 50 ke atas dari tengah.' },
            { callout: '"Angka x itu kanan-kiri, angka y itu atas-bawah. Positif artinya kanan atau atas, negatif artinya kiri atau bawah. Tengah panggung itu nol, nol."', kind: 'info', title: 'Kalimat untuk anak' },

            { h2: 'Bilangan negatif jadi masuk akal' },
            `Bilangan negatif sering membingungkan karena "kurang dari nol" terdengar mustahil. Di panggung Scratch, negatif hanya berarti "di sebelah kiri tengah" atau "di bawah tengah". Analogi lain yang akrab: termometer (suhu di bawah nol) dan lantai basement di mal (B1, B2 di bawah lantai dasar).`,
            `Coba eksperimen ini bersama anak: atur kucing ke x: 0, lalu "ubah x sebesar −50" berkali-kali. Tanyakan sebelum setiap klik: "Sekarang x berapa?" 0, −50, −100, −150. Anak melihat angkanya mengecil dan kucingnya bergeser ke kiri. Dua representasi yang sama, angka dan posisi, saling menguatkan.`,

            { h2: 'Blok koordinat yang perlu dikenal' },
            { table: { head: ['Blok', 'Artinya'], rows: [
                ['pergi ke x: ... y: ...', 'Langsung pindah ke titik tertentu'],
                ['meluncur ... detik ke x: ... y: ...', 'Bergerak halus ke titik tertentu'],
                ['ubah x sebesar ...', 'Geser ke kanan (positif) atau kiri (negatif)'],
                ['ubah y sebesar ...', 'Geser ke atas (positif) atau bawah (negatif)'],
                ['atur x ke ... / atur y ke ...', 'Ubah salah satu koordinat saja'],
                ['posisi x / posisi y', 'Membaca posisi sekarang (untuk dibandingkan)'],
            ] } },
            { blocks: [['event', 'ketika 🏁 diklik'], ['motion', 'pergi ke x: (-200) y: (-150)'], ['motion', 'meluncur (1) detik ke x: (-200) y: (150)'], ['motion', 'meluncur (1) detik ke x: (200) y: (150)'], ['motion', 'meluncur (1) detik ke x: (200) y: (-150)'], ['motion', 'meluncur (1) detik ke x: (-200) y: (-150)']], caption: 'Roket mengelilingi panggung lewat empat pojok. Tantangan: ubah supaya membentuk segitiga.' },

            { h2: 'Latihan: tebak posisinya' },
            { w: 'calc', title: 'Di mana sprite berada?', desc: 'Geser x dan y, lalu lihat penjelasan posisinya. Cocok untuk melatih anak membaca koordinat.', inputs: [
                { id: 'x', label: 'x', value: 100, min: -240, max: 240, step: 10 },
                { id: 'y', label: 'y', value: 50, min: -180, max: 180, step: 10 },
            ], outputs: [
                { label: 'Posisi', expr: "(x === 0 && y === 0) ? 'Tepat di tengah panggung' : ((y > 0 ? 'atas' : y < 0 ? 'bawah' : 'tengah') + ' ' + (x > 0 ? 'kanan' : x < 0 ? 'kiri' : 'tengah'))", fmt: 'text', big: true },
                { label: 'Jarak mendatar dari tengah', expr: 'Math.abs(x)', fmt: 'int', unit: 'langkah' },
                { label: 'Jarak tegak dari tengah', expr: 'Math.abs(y)', fmt: 'int', unit: 'langkah' },
                { label: 'Masih di dalam panggung?', expr: "Math.abs(x) <= 240 && Math.abs(y) <= 180 ? 'Ya' : 'Tidak'", fmt: 'text' },
            ] },
            { w: 'quiz', title: 'Kuis koordinat', questions: [
                { q: 'Sprite di x: −100, y: 0. Di mana posisinya?', options: ['Kanan tengah', 'Kiri tengah', 'Atas tengah'], answer: 1, why: 'x negatif berarti di kiri, y nol berarti sejajar tengah.' },
                { q: 'Sprite di (50, 80) lalu "ubah y sebesar −100". Posisi barunya?', options: ['(50, −20)', '(−50, 80)', '(50, 180)'], answer: 0, why: 'Hanya y yang berubah: 80 − 100 = −20.' },
                { q: 'Kenapa sprite yang di-"pergi ke x: 300" tidak terlihat utuh?', options: ['Karena 300 lebih dari batas kanan 240', 'Karena angka 300 terlalu kecil', 'Karena y belum diisi'], answer: 0, why: 'Tepi kanan panggung adalah x = 240.' },
            ] },

            { h2: 'Permainan koordinat tanpa layar' },
            { ul: [
                '<b>Harta karun di lantai.</b> Tempel lakban membentuk sumbu di lantai. Sembunyikan benda di titik tertentu dan beri "peta" berupa koordinat.',
                '<b>Kapal-kapalan (battleship) di kertas petak.</b> Masing-masing menyembunyikan kapal, lalu bergantian menebak koordinat.',
                '<b>Gambar rahasia.</b> Beri daftar titik untuk dihubungkan. Hasilnya gambar bintang atau rumah.',
            ] },

            { h2: 'Koordinat untuk game' },
            `Hampir semua game memakai koordinat: memeriksa apakah pemain sudah melewati garis finis (jika posisi x > 200), membuat musuh muncul acak di atas (y: 170, x: acak −220 sampai 220), atau membuat tombol yang menyala saat kursor berada di area tertentu. Begitu anak lancar membaca koordinat, ia siap membuat game yang jauh lebih menarik. Di <a href="${pk('koordinat-x-y-di-scratch-untuk-anak', '/')}" target="_blank" rel="noopener">kurikulum PixelKode</a>, koordinat dibahas di modul 2 lalu dipakai lagi di modul 3 untuk gerakan game dan di modul 4 untuk membuat zona di panggung.`,
        ],
        faq: [
            ['Berapa ukuran panggung Scratch?', '480 × 360. Nilai x dari −240 sampai 240, nilai y dari −180 sampai 180, dan titik tengahnya (0, 0).'],
            ['Kelas berapa anak belajar koordinat di sekolah?', 'Koordinat kartesius biasanya dibahas di kelas atas SD atau SMP, tergantung kurikulum. Scratch bisa menjadi pengenalan yang menyenangkan lebih awal.'],
            ['Kenapa koordinat y Scratch ke atas positif, padahal di beberapa program ke bawah?', 'Scratch mengikuti aturan matematika sekolah (y ke atas positif) supaya sejalan dengan pelajaran. Beberapa bahasa pemrograman memakai aturan layar yang berbeda.'],
            ['Bagaimana tahu koordinat sebuah titik di panggung?', 'Arahkan kursor ke panggung; posisi x dan y kursor tampil di bawah panggung pada beberapa versi. Atau seret sprite ke titik itu dan lihat info x, y di bawah panggung.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Papert, S. (1980). Mindstorms: matematika lewat pemrograman (edisi daring)', 'https://mindstorms.media.mit.edu/'],
            ['Scherer dkk. (2019). Meta-analisis transfer belajar pemrograman, termasuk ke matematika', 'https://doi.org/10.1037/edu0000314'],
        ],
    },

    {
        slug: 'siarkan-pesan-scratch-cerita-interaktif',
        title: 'Siarkan Pesan di Scratch: Membuat Cerita Interaktif',
        description: 'Cara memakai blok siarkan pesan (broadcast) di Scratch agar sprite saling berkomunikasi: dialog bergantian, pergantian adegan, cerita bercabang, dan contoh proyek.',
        date: D, category: C, tags: ['broadcast Scratch', 'siarkan pesan', 'cerita interaktif', 'coding untuk anak', 'Scratch'], cta: 'pixelkode',
        ctaNote: 'Pelajaran 9 PixelKode membahas pesan: Robo membuka gerbang warna dengan "kirim pesan", lalu anak membuat cerita dengan dialog yang tertata di Studio.',
        lead: 'Ketika proyek Scratch punya lebih dari satu tokoh, muncul masalah: bagaimana tokoh B tahu kapan tokoh A selesai bicara? Menebak dengan blok "tunggu" mudah meleset. Jawabannya adalah siarkan pesan, cara sprite saling mengirim sinyal. Konsep ini juga memperkenalkan ide penting dalam pemrograman modern: program yang dijalankan oleh kejadian.',
        body: [
            { h2: 'Analogi bel sekolah' },
            `Saat bel istirahat berbunyi, semua kelas di sekolah keluar bersamaan. Bel tidak memanggil kelas satu per satu; ia hanya memberi sinyal, dan setiap kelas yang "mendengar" tahu harus melakukan apa. Begitulah <b>siarkan pesan</b> (broadcast) bekerja. Satu sprite menyiarkan pesan bernama, misalnya "giliranBudi", dan setiap sprite yang punya blok <i>ketika aku menerima giliranBudi</i> langsung bertindak.`,
            { svg: 'flow', label: 'Alur pesan antar sprite', steps: [{ t: 'Sprite A bicara', d: 'katakan Halo!' }, { t: 'A menyiarkan', d: 'pesan "jawab"' }, { t: 'B menerima', d: 'ketika aku menerima jawab' }, { t: 'B bicara', d: 'katakan Hai juga!' }], caption: 'A tidak perlu tahu berapa lama B bicara. B cukup menunggu pesan.' },

            { h2: 'Tiga blok pesan' },
            { table: { head: ['Blok', 'Kategori', 'Fungsi'], rows: [
                ['siarkan [pesan]', 'Kejadian', 'Mengirim sinyal ke semua sprite dan panggung, lalu langsung lanjut'],
                ['siarkan [pesan] dan tunggu', 'Kejadian', 'Mengirim sinyal, lalu menunggu sampai semua penerima selesai'],
                ['ketika aku menerima [pesan]', 'Kejadian', 'Memulai skrip saat pesan diterima'],
            ] } },

            { h2: 'Contoh: dialog dua tokoh' },
            { scripts: [
                [['event', 'ketika 🏁 diklik'], ['looks', 'katakan (Hai, Oyen! Mau ke mana?) selama (2) detik'], ['event', 'siarkan [jawabOyen] dan tunggu'], ['looks', 'katakan (Boleh aku ikut?) selama (2) detik'], ['event', 'siarkan [ayoBerangkat]']],
                [['event', 'ketika aku menerima [jawabOyen]'], ['looks', 'katakan (Aku mau ke taman bermain!) selama (2) detik']],
                [['event', 'ketika aku menerima [ayoBerangkat]'], ['looks', 'katakan (Ayo!) selama (1) detik'], ['motion', 'meluncur (2) detik ke x: (200) y: (-100)']],
            ], caption: 'Kiri: skrip Dina. Tengah dan kanan: skrip Oyen. Dengan "siarkan dan tunggu", Dina baru bicara lagi setelah Oyen selesai menjawab.' },
            `Coba ubah kalimat Oyen menjadi sangat panjang dengan durasi 5 detik. Dina tetap menunggu dengan sabar. Kalau memakai blok "tunggu 2 detik", Dina akan memotong pembicaraan. Inilah keunggulan pesan: <b>waktu diatur oleh kejadian</b>, bukan oleh tebakan.`,

            { h2: 'Contoh: pindah adegan' },
            `Pesan juga cocok untuk mengatur adegan. Panggung menyiarkan "adegan2", lalu setiap sprite memutuskan sendiri: muncul, bersembunyi, atau pindah tempat.`,
            { scripts: [
                [['event', 'ketika aku menerima [adegan2]'], ['looks', 'ganti latar ke [Hutan]']],
                [['event', 'ketika aku menerima [adegan2]'], ['looks', 'tampilkan'], ['motion', 'pergi ke x: (-150) y: (-80)'], ['looks', 'katakan (Gelap sekali di sini...) selama (2) detik']],
                [['event', 'ketika aku menerima [adegan2]'], ['looks', 'sembunyikan']],
            ], caption: 'Kiri: Panggung. Tengah: tokoh yang muncul di hutan. Kanan: tokoh yang hanya ada di adegan 1.' },

            { h2: 'Cerita bercabang: pembaca memilih' },
            `Cerita interaktif menjadi seru bila pembaca bisa memilih. Gabungkan blok <i>tanya</i>, <i>jika maka</i>, dan pesan:`,
            { blocks: [['event', 'ketika aku menerima [persimpangan]'], ['sensing', 'tanya (Ke kiri ke gua, atau ke kanan ke sungai? Ketik kiri/kanan) dan tunggu'], ['control', 'jika {(jawaban) = (kiri)} maka', [['event', 'siarkan [masukGua]']], [['event', 'siarkan [keSungai]']]]], caption: 'Satu pertanyaan membuat dua jalan cerita. Setiap jalan dimulai dengan pesannya sendiri.' },
            { w: 'builder', title: 'Rancang cerita bercabang', desc: 'Isi bersama anak, lalu jadikan daftar pesan yang perlu dibuat di Scratch.', fields: [
                { id: 'awal', label: 'Awal cerita', placeholder: 'mis. Kancil tersesat di hutan', long: true },
                { id: 'pilihan', label: 'Pertanyaan pilihan', placeholder: 'mis. Ikuti suara air atau naik ke bukit?' },
                { id: 'a', label: 'Jika pilihan A', placeholder: 'mis. Bertemu buaya, harus cerdik', long: true },
                { id: 'b', label: 'Jika pilihan B', placeholder: 'mis. Melihat desa dari atas bukit', long: true },
            ], template: 'AWAL: {awal}\nPILIHAN: {pilihan}\n  A → {a}\n  B → {b}\n\nPesan yang dibuat: mulai, pilihan, jalanA, jalanB' },

            { h2: 'Tips memberi nama pesan' },
            { ul: [
                '<b>Nama yang menjelaskan.</b> "giliranDina" lebih jelas daripada "message1".',
                '<b>Satu pesan, satu tujuan.</b> Jangan memakai pesan yang sama untuk dua kejadian berbeda.',
                '<b>Buat daftar.</b> Untuk proyek besar, tulis daftar pesan dan siapa penerimanya di kertas.',
            ] },
            { callout: 'Konsep ini dalam dunia pemrograman profesional disebut event-driven programming. Tombol di aplikasi ponsel, notifikasi, sampai sistem pembayaran daring bekerja dengan pola yang mirip: ada yang mengirim kejadian, ada yang mendengarkan.', kind: 'good', title: 'Hubungan dengan dunia nyata' },

            { h2: 'Bug yang sering muncul' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Bug', front: 'Pesan dikirim tapi tidak ada yang bereaksi.', backTag: 'Solusi', back: 'Periksa ejaan dan pilihan pesan di blok penerima. Pesan "jawab" dan "Jawab" dianggap berbeda bila dibuat terpisah.' },
                { tag: 'Bug', front: 'Dua tokoh bicara bersamaan.', backTag: 'Solusi', back: 'Ganti "siarkan" dengan "siarkan dan tunggu" agar pengirim menunggu penerima selesai.' },
                { tag: 'Bug', front: 'Adegan lama masih terlihat di adegan baru.', backTag: 'Solusi', back: 'Tambahkan "ketika aku menerima adegan2 → sembunyikan" di sprite yang tidak ikut adegan itu.' },
            ] },
            `Cerita interaktif menggabungkan kemampuan menulis, logika, dan coding. Bagi anak yang suka mengarang, ini sering menjadi proyek favorit. Ajak ia memamerkan ceritanya ke keluarga, atau gunakan jalur belajar yang terstruktur seperti <a href="${pk('siarkan-pesan-scratch-cerita-interaktif', '/')}" target="_blank" rel="noopener">PixelKode</a> untuk melanjutkan ke konsep berikutnya.`,
        ],
        faq: [
            ['Apa fungsi blok siarkan di Scratch?', 'Mengirim sinyal bernama ke semua sprite dan panggung. Skrip yang dimulai dengan "ketika aku menerima" pesan itu akan berjalan.'],
            ['Apa beda "siarkan" dan "siarkan dan tunggu"?', '"Siarkan" langsung melanjutkan skrip pengirim. "Siarkan dan tunggu" menunggu sampai semua skrip penerima selesai.'],
            ['Apakah pesan bisa membawa data seperti angka?', 'Blok pesan Scratch hanya mengirim nama pesan. Untuk data, simpan di variabel lalu siarkan pesan agar penerima membaca variabel itu.'],
            ['Berapa pesan yang boleh dibuat?', 'Tidak ada batas praktis untuk proyek anak. Yang penting namanya jelas dan setiap pesan punya tujuan.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Brennan & Resnick (2012). Konsep kejadian dan paralelisme', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Scratch: buat proyek baru', 'https://scratch.mit.edu/projects/editor/'],
        ],
    },

    {
        slug: 'clone-di-scratch-dijelaskan-untuk-anak',
        title: 'Clone di Scratch: Satu Sprite, Banyak Salinan',
        description: 'Penjelasan clone di Scratch untuk anak: analogi cetakan kue, tiga blok clone, contoh hujan meteor dan kembang api, variabel lokal, batas jumlah clone, dan bug umum.',
        date: D, category: C, tags: ['clone Scratch', 'klon Scratch', 'coding untuk anak', 'game Scratch', 'variabel lokal'], cta: 'pixelkode',
        ctaNote: 'Modul Clone di PixelKode (Pelajaran 29-31) membahas cetakan dan salinan, variabel lokal dan global, lalu menutupnya dengan proyek akhir "Hujan Meteor".',
        lead: 'Bayangkan game dengan 30 meteor jatuh. Membuat 30 sprite meteor dengan skrip yang sama akan sangat merepotkan, dan mengubah satu hal berarti mengubah 30 tempat. Clone menyelesaikan masalah ini: satu sprite menjadi cetakan, lalu salinannya dibuat sebanyak yang dibutuhkan selama program berjalan. Konsep ini juga pengantar ke ide penting pemrograman: kelas dan objek.',
        body: [
            { h2: 'Analogi cetakan kue' },
            `Cetakan kue berbentuk bintang dipakai untuk membuat banyak kue. Semua kue punya bentuk yang sama, tetapi masing-masing bisa diberi topping berbeda dan diletakkan di tempat berbeda. Di Scratch, <b>sprite asli adalah cetakannya</b>, dan setiap <b>clone</b> adalah kuenya. Clone mewarisi kostum, ukuran, dan skrip dari sprite asli, tetapi bisa berada di posisi berbeda dan bergerak sendiri-sendiri.`,
            { callout: 'Dalam pemrograman profesional, "cetakan" disebut kelas (class) dan "kue" disebut objek. Anak yang paham clone sudah memegang intuisi pemrograman berorientasi objek.', kind: 'info', title: 'Kaitan dengan pemrograman lanjut' },

            { h2: 'Tiga blok clone' },
            { table: { head: ['Blok', 'Fungsi'], rows: [
                ['buat klon dari [diriku]', 'Membuat salinan baru dari sprite ini (atau sprite lain)'],
                ['ketika aku mulai sebagai klon', 'Skrip yang hanya dijalankan oleh clone saat ia lahir'],
                ['hapus klon ini', 'Menghapus clone, misalnya saat keluar layar atau tertangkap'],
            ] } },
            `Ketiganya ada di kategori <b>Kontrol</b>. Pola yang hampir selalu dipakai: sprite asli disembunyikan dan bertugas membuat clone; setiap clone menampilkan diri, bergerak, lalu menghapus dirinya sendiri.`,

            { h2: 'Contoh 1: hujan meteor' },
            { scripts: [
                [['event', 'ketika 🏁 diklik'], ['looks', 'sembunyikan'], ['control', 'selamanya', [['control', 'buat klon dari [diriku]'], ['control', 'tunggu (acak (0.3) sampai (1)) detik']]]],
                [['control', 'ketika aku mulai sebagai klon'], ['motion', 'pergi ke x: (acak (-220) sampai (220)) y: (180)'], ['looks', 'tampilkan'], ['control', 'ulangi sampai {(posisi y) < (-170)}', [['motion', 'ubah y sebesar (-6)'], ['motion', 'putar ↻ (5) derajat']]], ['control', 'hapus klon ini']],
            ], caption: 'Kiri: sprite asli menjadi pabrik meteor. Kanan: setiap meteor jatuh dari posisi acak, berputar, lalu menghapus diri di bawah.' },
            `Perhatikan bahwa hanya ada <b>satu</b> sprite meteor dengan <b>dua</b> skrip, tetapi di layar bisa ada belasan meteor bersamaan. Ingin semua meteor lebih cepat? Ubah satu angka, −6 menjadi −10. Inilah kekuatan clone.`,

            { h2: 'Contoh 2: kembang api' },
            { scripts: [
                [['event', 'ketika tombol [spasi] ditekan'], ['motion', 'pergi ke x: (0) y: (0)'], ['control', 'ulangi (24)', [['control', 'buat klon dari [diriku]'], ['motion', 'putar ↻ (15) derajat']]]],
                [['control', 'ketika aku mulai sebagai klon'], ['looks', 'tampilkan'], ['looks', 'atur efek [warna] ke (acak (0) sampai (200))'], ['control', 'ulangi (20)', [['motion', 'gerak (6) langkah'], ['looks', 'ubah efek [hantu] sebesar (5)']]], ['control', 'hapus klon ini']],
            ], caption: '24 clone, masing-masing menghadap arah berbeda (15° × 24 = 360°), bergerak keluar sambil memudar.' },

            { h2: 'Variabel lokal: setiap clone punya miliknya sendiri' },
            `Saat membuat variabel, Scratch menawarkan dua pilihan: <b>untuk semua sprite</b> (global) atau <b>untuk sprite ini saja</b> (lokal). Untuk clone, perbedaannya penting. Variabel lokal "kecepatan" membuat setiap meteor bisa punya kecepatannya sendiri, sedangkan variabel global "skor" dibagi bersama oleh semua.`,
            { table: { head: ['Jenis', 'Contoh', 'Dipakai untuk'], rows: [
                ['Global (semua sprite)', 'skor, nyawa, level', 'Nilai yang sama untuk seluruh game'],
                ['Lokal (sprite ini saja)', 'kecepatan, nomor, darah musuh', 'Nilai yang berbeda untuk setiap clone'],
            ] } },
            { blocks: [['control', 'ketika aku mulai sebagai klon'], ['variable', 'atur [kecepatan] ke (acak (3) sampai (9))'], ['looks', 'tampilkan'], ['control', 'ulangi sampai {(posisi y) < (-170)}', [['motion', 'ubah y sebesar ((0) - (kecepatan))']]], ['control', 'hapus klon ini']], caption: 'Dengan variabel lokal "kecepatan", ada meteor yang jatuh pelan dan ada yang cepat.' },

            { h2: 'Batas clone dan kebiasaan yang baik' },
            `Scratch membatasi jumlah clone yang ada bersamaan (300 clone). Bila batas tercapai, blok "buat klon" diabaikan. Kalau game tiba-tiba "berhenti membuat musuh", kemungkinan besar ada clone yang tidak pernah dihapus dan menumpuk di luar layar.`,
            { w: 'checklist', title: 'Daftar periksa proyek clone', desc: 'Centang yang sudah dilakukan. Progres tersimpan di browser ini.', items: ['Sprite asli disembunyikan di awal.', 'Clone menampilkan diri di skrip "ketika aku mulai sebagai klon".', 'Setiap clone punya cara untuk dihapus (keluar layar, tertangkap, atau waktu habis).', 'Ada jeda di loop pembuat clone supaya tidak terlalu banyak.', 'Variabel yang berbeda per clone dibuat "untuk sprite ini saja".'] },

            { h2: 'Bug clone yang sering terjadi' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Bug', front: 'Clone bertambah dua kali lipat dengan cepat, game menjadi lambat.', backTag: 'Solusi', back: 'Blok "buat klon dari diriku" ikut dijalankan clone. Pastikan hanya sprite asli yang membuat clone, misalnya di skrip bendera hijau yang tidak dijalankan clone.' },
                { tag: 'Bug', front: 'Sprite asli ikut jatuh bersama clone.', backTag: 'Solusi', back: 'Sembunyikan sprite asli dan taruh gerakan hanya di skrip "ketika aku mulai sebagai klon".' },
                { tag: 'Bug', front: 'Semua clone punya kecepatan sama padahal sudah acak.', backTag: 'Solusi', back: 'Variabel kecepatan dibuat global. Buat ulang sebagai "untuk sprite ini saja".' },
            ] },
            `Clone biasanya diajarkan di bagian akhir kurikulum coding anak karena menggabungkan semua konsep sebelumnya: loop, kondisi, koordinat, acak, dan variabel. Bila anak sudah sampai di sini, ia siap membuat game yang terasa seperti game sungguhan. Di <a href="${pk('clone-di-scratch-dijelaskan-untuk-anak', '/')}" target="_blank" rel="noopener">PixelKode</a>, clone menjadi modul ke-6 sebelum proyek kelulusan.`,
        ],
        faq: [
            ['Apa itu clone di Scratch?', 'Clone adalah salinan sprite yang dibuat saat program berjalan. Clone mewarisi kostum dan skrip sprite asli, tetapi bisa bergerak sendiri.'],
            ['Berapa batas clone di Scratch?', 'Scratch membatasi 300 clone yang ada bersamaan. Hapus clone yang tidak dipakai agar batas ini tidak tercapai.'],
            ['Apa beda variabel global dan lokal?', 'Global dipakai bersama semua sprite dan clone. Lokal ("untuk sprite ini saja") dimiliki masing-masing sprite dan clone sendiri-sendiri.'],
            ['Kapan anak siap belajar clone?', 'Setelah lancar memakai loop, kondisi, koordinat, dan variabel. Biasanya setelah beberapa bulan belajar rutin.'],
        ],
        sources: [
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Scratch: buat proyek baru', 'https://scratch.mit.edu/projects/editor/'],
            ['Brennan & Resnick (2012). Kerangka berpikir komputasional', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
        ],
    },

    {
        slug: 'ide-proyek-scratch-untuk-anak-sesuai-level',
        title: '30 Ide Proyek Scratch untuk Anak, dari yang Termudah',
        description: 'Daftar 30 ide proyek Scratch untuk anak SD yang disusun berdasarkan tingkat kesulitan dan konsep coding yang dilatih, plus tips memilih proyek dan pemilih ide interaktif.',
        date: D, category: C, tags: ['ide proyek Scratch', 'proyek Scratch anak', 'coding untuk anak', 'game Scratch', 'Scratch'], cta: 'pixelkode',
        ctaNote: 'Bingung memilih proyek berikutnya? PixelKode menyusun 70 proyek Studio berurutan, dari "Halo, Oyen!" sampai "Hujan Meteor", lengkap dengan contoh hasil interaktif di setiap tugas.',
        lead: 'Pertanyaan "aku mau bikin apa?" sering menghentikan anak sebelum mulai. Daftar ini berisi 30 ide proyek Scratch yang disusun dari yang paling mudah sampai menantang, lengkap dengan konsep yang dilatih. Pilih yang sesuai minat dan level anak, lalu biarkan ia memodifikasinya menjadi versinya sendiri.',
        body: [
            { h2: 'Cara memilih proyek yang tepat' },
            `Proyek terbaik memenuhi dua syarat: <b>menarik bagi anak</b> dan <b>sedikit di atas kemampuannya saat ini</b>. Psikolog Lev Vygotsky menyebut wilayah ini <i>zona perkembangan proksimal</i>: tugas yang belum bisa dikerjakan sendiri, tetapi bisa dikerjakan dengan sedikit bantuan. Terlalu mudah membuat bosan; terlalu sulit membuat frustrasi.`,
            { w: 'choose', title: 'Pemilih ide proyek', desc: 'Jawab dua pertanyaan untuk mendapat saran level proyek.', questions: [
                { q: 'Konsep apa yang sudah dikuasai anak?', options: [{ t: 'Baru mengenal Scratch', add: { l1: 3 } }, { t: 'Sudah paham loop dan kejadian (tombol, klik)', add: { l2: 3 } }, { t: 'Sudah paham kondisi dan koordinat', add: { l3: 3 } }, { t: 'Sudah paham variabel, bahkan clone', add: { l4: 3 } }] },
                { q: 'Anak paling suka apa?', options: [{ t: 'Menggambar dan bercerita', add: { l1: 1, l2: 1 } }, { t: 'Main game', add: { l3: 1, l4: 1 } }, { t: 'Musik', add: { l2: 1 } }, { t: 'Matematika dan teka-teki', add: { l3: 1, l4: 1 } }] },
            ], results: {
                l1: { title: 'Mulai dari Level 1', text: 'Proyek pendek dengan hasil langsung terlihat: kartu ucapan, animasi nama, akuarium. Fokus pada rasa berhasil.' },
                l2: { title: 'Coba Level 2', text: 'Proyek interaktif: alat musik, cerita dengan dialog, hewan peliharaan virtual sederhana.' },
                l3: { title: 'Coba Level 3', text: 'Game sederhana dengan aturan: labirin, tangkap benda, kejar-kejaran.' },
                l4: { title: 'Siap Level 4', text: 'Game dengan skor, nyawa, level, dan clone: hujan meteor, kuis bot, platformer sederhana.' },
            } },

            { h2: 'Level 1: proyek pertama (urutan, kejadian dasar)' },
            { table: { head: ['Ide', 'Yang dibuat', 'Konsep'], rows: [
                ['1. Animasi nama', 'Setiap huruf nama bergerak, berputar, atau berubah warna saat diklik', 'kejadian klik, efek'],
                ['2. Kartu ucapan', 'Ucapan ulang tahun dengan musik dan tokoh yang menari', 'urutan, suara'],
                ['3. Akuarium', 'Ikan berenang bolak-balik dan memantul di tepi', 'loop, pantulan'],
                ['4. Perkenalan diri', 'Tokoh menceritakan hobi dan cita-cita anak', 'urutan, katakan'],
                ['5. Hari di kebun binatang', 'Klik hewan, hewan bersuara dan bergerak', 'kejadian klik'],
                ['6. Pemandangan berganti', 'Siang menjadi malam dengan matahari terbenam', 'latar, meluncur'],
                ['7. Robot menari', 'Robot berganti kostum mengikuti ketukan', 'kostum, tunggu, loop'],
            ] } },

            { h2: 'Level 2: interaktif (loop, tombol, pesan)' },
            { table: { head: ['Ide', 'Yang dibuat', 'Konsep'], rows: [
                ['8. Piano mini', 'Tombol keyboard memainkan nada berbeda', 'kejadian tombol, ekstensi Musik'],
                ['9. Drum band', 'Klik alat musik untuk memainkan irama', 'kejadian klik, suara'],
                ['10. Dialog dua tokoh', 'Percakapan yang tertata', 'siarkan pesan'],
                ['11. Komik bergerak', 'Cerita 4 adegan', 'pesan, ganti latar'],
                ['12. Hewan peliharaan virtual', 'Klik makanan, hewan senang', 'kejadian, kostum'],
                ['13. Pelukis spiral', 'Pena menggambar pola spiral warna-warni', 'ekstensi Pena, loop'],
                ['14. Kendalikan roket', 'Roket bergerak dengan tombol panah', 'kejadian tombol, koordinat'],
                ['15. Jam dinding', 'Jarum berputar setiap detik', 'loop, derajat'],
            ] } },

            { h2: 'Level 3: game sederhana (kondisi, koordinat)' },
            { table: { head: ['Ide', 'Yang dibuat', 'Konsep'], rows: [
                ['16. Labirin', 'Gerakkan bola ke finis tanpa menyentuh dinding', 'kondisi menyentuh warna'],
                ['17. Tangkap bintang', 'Tangkap benda yang jatuh', 'acak, kondisi, loop'],
                ['18. Kejar-kejaran', 'Musuh mengejar penunjuk mouse', 'mengarah ke, kondisi'],
                ['19. Pong', 'Bola memantul di antara dua pemukul', 'pantulan, arah'],
                ['20. Lompat rintangan', 'Tokoh melompat menghindari batu', 'koordinat y, kondisi'],
                ['21. Tebak warna', 'Klik warna yang sesuai tulisan', 'kondisi, acak'],
                ['22. Balapan', 'Dua tokoh berlomba, mana yang sampai duluan', 'acak, posisi x'],
            ] } },

            { h2: 'Level 4: game lengkap (variabel, clone)' },
            { table: { head: ['Ide', 'Yang dibuat', 'Konsep'], rows: [
                ['23. Kuis matematika', 'Pertanyaan acak, skor, dan waktu', 'variabel, tanya, operator'],
                ['24. Hujan meteor', 'Hindari meteor yang makin banyak', 'clone, variabel, level'],
                ['25. Chatbot sederhana', 'Robot yang menjawab sesuai kata kunci', 'tanya, kondisi, teks'],
                ['26. Whack-a-mole', 'Pukul tikus yang muncul acak', 'clone, skor, waktu'],
                ['27. Penembak luar angkasa', 'Tembak alien yang turun', 'clone, kondisi'],
                ['28. Platformer 1 level', 'Tokoh melompat di pijakan dengan gravitasi', 'variabel kecepatan, kondisi'],
                ['29. Simulasi tabungan', 'Masukkan uang saku, lihat tabungan bertambah', 'variabel, daftar'],
                ['30. Ensiklopedia hewan', 'Klik hewan untuk membaca fakta dari daftar', 'daftar, pesan'],
            ] } },
            { callout: 'Ide nomor 29 dan 30 menggabungkan coding dengan pelajaran lain. Proyek lintas mata pelajaran seperti ini bisa menjadi tugas sekolah yang berkesan.', kind: 'good', title: 'Untuk guru dan orang tua' },

            { h2: 'Ubah ide orang lain menjadi milik sendiri' },
            `Komunitas Scratch punya budaya <i>remix</i>: mengambil proyek orang lain, lalu mengembangkannya dengan menyebut pembuat aslinya. Remix boleh dan bagus untuk belajar, asalkan anak <b>menambah sesuatu</b>, bukan sekadar menyalin. Pertanyaan pemicu yang berguna:`,
            { ul: ['Bagaimana kalau tokohnya diganti dengan sesuatu yang kamu suka?', 'Bagaimana kalau ada level 2 yang lebih sulit?', 'Bagaimana kalau dimainkan berdua?', 'Aturan apa yang bisa dibalik? Misalnya justru menghindari bintang.'] },

            { h2: 'Dari ide ke karya yang selesai' },
            `Ide sebanyak apa pun tidak berarti bila proyek tidak pernah selesai. Bantu anak dengan tiga kebiasaan: tulis rencana singkat, buat versi paling sederhana dulu yang sudah bisa dimainkan, lalu tambah fitur satu per satu. Jika anak lebih suka jalur yang sudah disusun, <a href="${pk('ide-proyek-scratch-untuk-anak-sesuai-level', '/')}" target="_blank" rel="noopener">PixelKode</a> memberi proyek berurutan dengan contoh hasil interaktif, sehingga anak tahu persis targetnya sebelum mulai menyusun blok.`,
        ],
        faq: [
            ['Proyek Scratch apa yang paling mudah untuk pemula?', 'Animasi nama, kartu ucapan, dan akuarium. Hasilnya langsung terlihat dan hanya butuh beberapa blok.'],
            ['Berapa lama satu proyek Scratch?', 'Proyek level 1 sekitar 30-45 menit. Game level 4 bisa 3-5 sesi.'],
            ['Apakah boleh me-remix proyek orang lain?', 'Boleh. Remix adalah budaya komunitas Scratch, asalkan pembuat asli disebutkan dan anak menambah sesuatu yang baru.'],
            ['Bagaimana jika anak hanya mau membuat game?', 'Tidak masalah. Game melatih semua konsep inti. Pastikan levelnya bertahap agar tidak frustrasi.'],
        ],
        sources: [
            ['Scratch: jelajahi proyek komunitas', 'https://scratch.mit.edu/explore/projects/all'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Brennan & Resnick (2012). Praktik memakai ulang dan me-remix', 'https://scratched.gse.harvard.edu/ct/files/AERA2012.pdf'],
            ['Resnick, M. Lifelong Kindergarten: projects, passion, peers, play', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
        ],
    },
];
