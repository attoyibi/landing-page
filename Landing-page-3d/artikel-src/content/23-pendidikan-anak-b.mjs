import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Pendidikan Anak';

export default [
    {
        slug: 'cara-mengajari-anak-membaca-tahapan-dan-permainan',
        title: 'Cara Mengajari Anak Membaca: Tahapan dan Permainan di Rumah',
        description: 'Tahapan anak belajar membaca dalam bahasa Indonesia, permainan kesadaran bunyi di rumah, kesalahan umum, dan tanda perlu bantuan ahli.',
        date: D, category: C, tags: ['cara mengajari anak membaca', 'belajar membaca', 'calistung', 'literasi anak', 'anak TK'], cta: 'pixelkode',
        ctaNote: 'Lancar membaca kalimat pendek adalah salah satu tanda anak siap belajar coding dengan blok berteks. Setelah itu, membaca instruksi di PixelKode juga menjadi latihan membaca yang menyenangkan.',
        lead: 'Melihat anak membaca kata pertamanya adalah momen yang membahagiakan. Namun prosesnya sering membuat orang tua cemas: kapan harus mulai, metode apa yang benar, dan kenapa anak tetangga sudah lancar sementara anak saya belum? Artikel ini menjelaskan tahapan belajar membaca, permainan yang terbukti membantu, dan kapan perlu mencari bantuan.',
        body: [
            { h2: 'Tidak perlu terburu-buru' },
            `Sejak tahun ajaran 2023/2024, Kemendikbudristek melalui kebijakan Transisi PAUD ke SD yang Menyenangkan meminta sekolah <b>tidak lagi memakai tes calistung</b> (membaca, menulis, berhitung) sebagai syarat masuk SD. Membaca diajarkan di SD, bukan menjadi syarat untuk masuk. Ini kabar baik: orang tua bisa fokus membangun fondasi yang menyenangkan, bukan mengejar target.`,
            `Usia anak mulai lancar membaca sangat bervariasi. Membandingkan dengan anak lain biasanya hanya menambah tekanan. Yang lebih penting adalah anak menyukai buku dan berkembang dari tahap ke tahap.`,

            { h2: 'Tahapan belajar membaca' },
            { svg: 'layers', label: 'Tahapan membaca', items: [{ t: '1. Suka buku dan cerita', d: 'dibacakan, melihat gambar, membalik halaman' }, { t: '2. Kesadaran bunyi', d: 'mendengar rima, suku kata, bunyi awal kata' }, { t: '3. Mengenal huruf dan bunyinya', d: '"b" berbunyi /b/, bukan hanya nama "be"' }, { t: '4. Menggabungkan bunyi', d: 'ba + ju = baju' }, { t: '5. Membaca lancar', d: 'kata dan kalimat tanpa mengeja satu per satu' }, { t: '6. Memahami bacaan', d: 'menceritakan ulang, menjawab "kenapa"' }], caption: 'Tahapan saling bertumpang tindih. Jangan lompati tahap 1 dan 2; keduanya fondasi.' },
            `Bahasa Indonesia punya keuntungan besar: cara menulis dan membacanya sangat konsisten. Huruf "a" hampir selalu berbunyi /a/. Karena itu, banyak anak Indonesia bisa maju cukup cepat setelah memahami hubungan huruf dan bunyi, terutama lewat <b>suku kata</b> (ba-bi-bu-be-bo).`,

            { h2: 'Kesadaran bunyi: tahap yang sering dilewatkan' },
            `Sebelum mengenal huruf, anak perlu bisa "mendengar" bagian-bagian kata. Panel ahli membaca di Amerika Serikat (National Reading Panel, 2000) menyimpulkan bahwa latihan kesadaran fonemik dan fonik yang sistematis membantu anak belajar membaca. Permainan berikut melatihnya tanpa buku sama sekali:`,
            { ul: [
                '<b>Tepuk suku kata.</b> "Ku-cing" dua tepukan, "ku-pu-ku-pu" empat tepukan.',
                '<b>Tebak bunyi awal.</b> "Benda apa di dapur yang bunyinya diawali /p/?" Piring, panci, pisau.',
                '<b>Rima.</b> "Topi, kopi, ... apa lagi yang berakhiran -opi?"',
                '<b>Gabung bunyi.</b> Anda mengucapkan "bu ... ku", anak menebak "buku".',
                '<b>Pisah bunyi.</b> Kebalikannya: "sapu" dipisah menjadi "sa ... pu".',
            ] },

            { h2: 'Permainan membaca di rumah' },
            { table: { head: ['Permainan', 'Tahap', 'Cara'], rows: [
                ['Berburu huruf', '3', 'Cari huruf "m" di bungkus makanan, papan nama toko, dan kemasan'],
                ['Kartu suku kata', '4', 'Kartu "ba", "ju", "bu", "ku". Gabungkan menjadi kata sungguhan dan kata lucu'],
                ['Label rumah', '4-5', 'Tempel tulisan "pintu", "meja", "kursi" pada bendanya'],
                ['Daftar belanja', '5', 'Anak membacakan daftar belanja di pasar atau minimarket'],
                ['Pesan rahasia', '5-6', 'Selipkan pesan pendek di kotak bekal: "Ayo habiskan nasimu!"'],
                ['Ceritakan ulang', '6', 'Setelah membaca, anak menceritakan dengan kata-katanya sendiri'],
            ] } },
            { w: 'checklist', title: 'Rutinitas membaca seminggu', desc: 'Centang setiap hari yang sudah dilakukan. Progres tersimpan di browser ini.', items: ['Senin: membacakan buku 15 menit sebelum tidur', 'Selasa: permainan tepuk suku kata', 'Rabu: berburu huruf di luar rumah', 'Kamis: kartu suku kata 10 menit', 'Jumat: anak "membaca" gambar buku dan bercerita', 'Sabtu: ke perpustakaan atau tukar buku dengan teman', 'Minggu: anak membacakan sesuatu untuk anggota keluarga'] },

            { h2: 'Kesalahan yang sering terjadi' },
            { w: 'cards', title: 'Ketuk untuk perbaikannya', items: [
                { tag: 'Kesalahan', front: 'Mengajarkan nama huruf ("be", "ce") tanpa bunyinya.', backTag: 'Perbaikan', back: 'Saat membaca, yang dipakai adalah bunyi. "B" berbunyi /b/, sehingga b + a = /ba/.' },
                { tag: 'Kesalahan', front: 'Sesi panjang sampai anak menangis.', backTag: 'Perbaikan', back: 'Sesi 10-15 menit yang menyenangkan lebih efektif daripada satu jam yang menegangkan.' },
                { tag: 'Kesalahan', front: 'Langsung mengoreksi setiap kesalahan.', backTag: 'Perbaikan', back: 'Beri waktu anak memperbaiki sendiri. Kalau masih salah, bacakan pelan lalu minta ia mengulang.' },
                { tag: 'Kesalahan', front: 'Berhenti membacakan buku setelah anak bisa membaca.', backTag: 'Perbaikan', back: 'Teruskan. Buku yang dibacakan bisa lebih sulit dari yang bisa dibaca sendiri, sehingga kosakata terus bertambah.' },
            ] },

            { h2: 'Membaca adalah memahami' },
            `Anak yang bisa mengucapkan kata-kata belum tentu memahami isinya. Setelah anak lancar, geser fokus ke pemahaman dengan pertanyaan sederhana: "Siapa tokohnya? Apa masalahnya? Menurutmu kenapa dia melakukan itu? Kalau kamu jadi dia, apa yang kamu lakukan?" Pertanyaan "kenapa" dan "bagaimana jika" melatih anak berpikir di balik teks.`,
            { callout: 'Indonesia termasuk negara dengan skor membaca rendah pada asesmen internasional PISA. Kebiasaan membaca dan berdiskusi tentang bacaan di rumah adalah salah satu cara paling sederhana untuk membantu anak.', kind: 'info', title: 'Konteks yang lebih luas' },

            { h2: 'Kapan perlu mencari bantuan?' },
            `Konsultasikan dengan guru, dokter anak, atau psikolog jika anak usia SD kelas 2 ke atas masih sangat kesulitan menghubungkan huruf dengan bunyi meski sudah berlatih rutin, sering tertukar huruf secara terus-menerus disertai kesulitan lain, atau sangat menghindari kegiatan membaca. Pemeriksaan penglihatan dan pendengaran juga penting, karena masalah mata atau telinga bisa terlihat seperti kesulitan membaca.`,
            `Setelah anak lancar membaca kalimat pendek, dunia baru terbuka, termasuk coding dengan blok berteks. Membaca instruksi, memahami tujuan, lalu menyusun langkah adalah latihan literasi yang menyenangkan. Anak bisa mencobanya di <a href="${pk('cara-mengajari-anak-membaca-tahapan-dan-permainan')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a>.`,
        ],
        faq: [
            ['Usia berapa anak sebaiknya bisa membaca?', 'Bervariasi. Banyak anak mulai lancar di kelas 1-2 SD. Fondasi seperti suka buku dan kesadaran bunyi bisa dibangun sejak prasekolah.'],
            ['Apakah tes calistung masih jadi syarat masuk SD?', 'Sejak tahun ajaran 2023/2024, kebijakan Transisi PAUD ke SD meminta sekolah tidak memakai tes calistung dalam penerimaan siswa baru SD.'],
            ['Metode apa yang paling efektif untuk mengajari membaca?', 'Pendekatan yang mengajarkan hubungan huruf dan bunyi secara sistematis, didukung permainan kesadaran bunyi dan kebiasaan dibacakan buku.'],
            ['Anak saya sering tertukar b dan d. Apakah disleksia?', 'Tertukar b dan d umum pada pembaca pemula. Jika berlangsung lama disertai kesulitan membaca yang menetap, konsultasikan dengan profesional.'],
        ],
        sources: [
            ['National Reading Panel (2000). Teaching Children to Read', 'https://www.nichd.nih.gov/publications/pubs/nrp/pages/smallbook.aspx'],
            ['Kemendikbudristek: Merdeka Belajar Episode 24, Transisi PAUD ke SD yang Menyenangkan', 'https://merdekabelajar.kemdikbud.go.id/upload/file/266_1680082988.pdf'],
            ['AAP (2014). Literacy Promotion: An Essential Component of Primary Care Pediatric Practice', 'https://doi.org/10.1542/peds.2014-1384'],
            ['OECD: PISA 2022 Results, catatan negara Indonesia', 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/indonesia_c2e1ae0e-en.html'],
        ],
    },

    {
        slug: 'anak-susah-fokus-belajar-penyebab-dan-cara-membantu',
        title: 'Anak Susah Fokus Belajar: Penyebab dan Cara Membantunya',
        description: 'Kenapa anak susah fokus belajar: penyebab umum dari tidur sampai tugas terlalu besar, strategi praktis, pewaktu belajar, dan kapan konsultasi.',
        date: D, category: C, tags: ['anak susah fokus', 'konsentrasi anak', 'cara belajar anak', 'ADHD', 'fungsi eksekutif'], cta: 'pixelkode',
        ctaNote: 'Pelajaran di PixelKode dipecah menjadi tugas-tugas pendek (materi, Robo, Studio, kuis) dengan target yang jelas, sehingga anak tahu persis apa yang harus diselesaikan berikutnya.',
        lead: 'Duduk lima menit, lalu bangun mengambil minum. Kembali, lalu meraut pensil. Lalu bertanya hal lain. Orang tua yang mendampingi anak belajar pasti akrab dengan pemandangan ini. Kabar baiknya, kebanyakan masalah fokus punya penyebab yang bisa diperbaiki. Artikel ini membahas penyebab umum, strategi yang bisa langsung dicoba, dan kapan perlu konsultasi.',
        body: [
            { h2: 'Fokus adalah kemampuan yang berkembang' },
            `Kemampuan memusatkan perhatian termasuk dalam <b>fungsi eksekutif</b>, yaitu kemampuan otak untuk merencanakan, mengingat instruksi, menahan dorongan, dan berpindah tugas. Menurut Center on the Developing Child di Harvard University, kemampuan ini tidak dibawa sejak lahir dalam bentuk jadi, tetapi berkembang pesat di masa kanak-kanak dan terus matang sampai dewasa muda. Artinya, anak SD memang belum bisa fokus selama orang dewasa, dan fokus bisa dilatih.`,

            { h2: 'Cari penyebabnya dulu' },
            { w: 'choose', title: 'Apa yang paling mungkin mengganggu fokus anak?', desc: 'Jawab berdasarkan pengamatan seminggu terakhir.', questions: [
                { q: 'Jam berapa anak tidur di malam sekolah?', options: [{ t: 'Sebelum pukul 21.00, bangun segar', add: { lain: 1 } }, { t: 'Sering lewat pukul 21.30 atau sulit dibangunkan', add: { tidur: 3 } }] },
                { q: 'Di mana anak biasanya belajar?', options: [{ t: 'Tempat tenang dengan meja', add: { lain: 1 } }, { t: 'Dekat TV, adik bermain, atau HP di sebelahnya', add: { lingkungan: 3 } }] },
                { q: 'Seperti apa tugasnya?', options: [{ t: 'Pendek dan jelas', add: { lain: 1 } }, { t: 'Panjang, banyak, dan anak bingung mulai dari mana', add: { tugas: 3 } }] },
                { q: 'Apakah anak juga sulit fokus di tempat lain, misalnya saat bermain atau di kelas menurut guru?', options: [{ t: 'Tidak, hanya saat belajar di rumah', add: { tugas: 1, lingkungan: 1 } }, { t: 'Ya, hampir di semua situasi selama berbulan-bulan', add: { konsultasi: 3 } }] },
            ], results: {
                tidur: { title: 'Mulai dari tidur', text: 'Kurang tidur sangat memengaruhi perhatian. Anak usia 6-12 tahun dianjurkan tidur 9-12 jam. Majukan jam tidur dan jauhkan gawai dari kamar.' },
                lingkungan: { title: 'Rapikan lingkungan belajar', text: 'Singkirkan gangguan: TV mati, HP di ruangan lain, meja rapi hanya berisi yang dibutuhkan.' },
                tugas: { title: 'Pecah tugasnya', text: 'Tugas besar membuat kewalahan. Bagi menjadi bagian kecil dengan target yang jelas dan jeda singkat.' },
                konsultasi: { title: 'Pertimbangkan konsultasi', text: 'Kesulitan fokus yang menetap di berbagai situasi selama berbulan-bulan sebaiknya dibicarakan dengan dokter anak atau psikolog.' },
                lain: { title: 'Kondisi dasar sudah baik', text: 'Coba strategi di bawah, terutama memecah tugas dan memakai pewaktu.' },
            } },

            { h2: 'Penyebab umum dan perbaikannya' },
            { table: { head: ['Penyebab', 'Perbaikan'], rows: [
                ['Kurang tidur', 'Jam tidur tetap; anak 6-12 tahun butuh 9-12 jam'],
                ['Lapar atau haus', 'Camilan sehat dan air sebelum belajar'],
                ['Lingkungan ramai', 'Tempat tetap yang tenang; TV dan gawai menjauh'],
                ['Tugas terlalu besar', 'Pecah menjadi langkah kecil yang bisa dicentang'],
                ['Tidak paham materinya', 'Cek pemahaman dulu; anak yang bingung sering terlihat "tidak fokus"'],
                ['Terlalu lama duduk', 'Selingi gerak singkat setiap 15-25 menit'],
                ['Lelah karena jadwal padat', 'Kurangi les atau kegiatan; anak juga butuh waktu bebas'],
            ] } },

            { h2: 'Strategi yang bisa langsung dicoba' },
            { h3: '1. Sesi pendek dengan pewaktu' },
            `Daripada "belajar sampai selesai", pakai sesi pendek dengan pewaktu yang terlihat. Untuk anak kelas bawah SD, 10-15 menit sudah cukup; kelas atas bisa 20-25 menit. Setelah itu istirahat 5 menit untuk bergerak.`,
            { w: 'timer', title: 'Pewaktu belajar anak', desc: 'Satu putaran: belajar, lalu istirahat bergerak. Ulangi 2-3 kali.', phases: [{ label: 'Fokus belajar', sec: 900, hint: 'Kerjakan satu bagian saja.' }, { label: 'Istirahat bergerak', sec: 300, hint: 'Lompat-lompat, minum, atau peregangan. Jangan pegang HP.' }] },
            { h3: '2. Daftar tugas yang bisa dicentang' },
            `Tulis pekerjaan malam ini dalam 3-5 langkah kecil di kertas. "PR Matematika" menjadi "soal 1-5", "soal 6-10", "periksa jawaban". Mencentang memberi rasa berhasil yang memotivasi.`,
            { h3: '3. Mulai dari yang paling mudah' },
            `Tugas pertama yang mudah membangun momentum. Setelah "mesin panas", tugas yang lebih sulit terasa lebih ringan.`,
            { h3: '4. Gerak sebelum belajar' },
            `Bermain di luar atau bersepeda sebelum belajar sering membuat anak lebih tenang saat duduk. Banyak penelitian mengaitkan aktivitas fisik dengan fungsi eksekutif yang lebih baik pada anak.`,
            { h3: '5. Katakan, lalu lakukan' },
            `Minta anak mengulang instruksi dengan kata-katanya sendiri sebelum mulai: "Jadi aku harus ...". Ini memastikan ia paham dan melatih memori kerja.`,

            { h2: 'Latih fokus lewat permainan' },
            `Fungsi eksekutif bisa dilatih lewat kegiatan yang menyenangkan. Harvard Center on the Developing Child menyebut contoh seperti permainan aturan (Simon berkata, lampu merah-lampu hijau), permainan memori, teka-teki, dan kegiatan yang butuh perencanaan seperti memasak bersama atau membangun proyek. Coding juga termasuk: anak harus mengingat tujuan, merencanakan langkah, menahan diri untuk tidak asal mencoba, dan memperbaiki saat salah.`,
            { w: 'robo', title: 'Latihan fokus: rencanakan dulu, baru jalankan', desc: 'Tantangan: susun seluruh program sebelum menekan Jalankan, tanpa mencoba-coba. Ini melatih perencanaan dan memori kerja.', levels: [
                { name: 'Labirin kecil', goal: 'Ambil permata, lalu ke bendera. Rencanakan semua langkah dulu!', map: ['#######', '#>..#F#', '###.#.#', '###*..#', '#######'], max: 12 },
            ] },

            { h2: 'Kapan perlu konsultasi?' },
            `ADHD (Attention-Deficit/Hyperactivity Disorder) adalah kondisi perkembangan saraf yang memengaruhi perhatian, aktivitas, dan kendali dorongan. Diagnosisnya hanya bisa ditegakkan oleh profesional setelah evaluasi menyeluruh, dan pedoman klinis American Academy of Pediatrics menekankan bahwa gejala harus terlihat di lebih dari satu lingkungan (misalnya rumah dan sekolah) serta mengganggu fungsi sehari-hari. Pertimbangkan konsultasi bila:`,
            { ul: [
                'Kesulitan fokus, sangat gelisah, atau sangat impulsif terjadi di rumah <b>dan</b> di sekolah.',
                'Berlangsung berbulan-bulan dan tidak membaik dengan perbaikan tidur dan rutinitas.',
                'Mengganggu prestasi, pertemanan, atau keselamatan anak.',
                'Guru juga menyampaikan kekhawatiran yang sama.',
            ] },
            { callout: 'Banyak anak aktif dan mudah teralihkan tanpa memiliki ADHD. Sebaliknya, anak yang tampak tenang tetapi sering melamun juga bisa mengalami kesulitan perhatian. Jangan mendiagnosis sendiri; amati, catat, lalu diskusikan dengan profesional.', kind: 'warn', title: 'Hindari label sendiri' },
            `Anak yang sulit fokus pada lembar soal kadang justru sangat fokus pada kegiatan yang punya tujuan jelas dan umpan balik cepat. Coding termasuk kegiatan seperti itu: setiap langkah langsung terlihat hasilnya. Coba bersama anak lewat <a href="${pk('anak-susah-fokus-belajar-penyebab-dan-cara-membantu')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a> dan amati bagaimana ia bekerja.`,
        ],
        faq: [
            ['Berapa lama anak SD bisa fokus belajar?', 'Bervariasi, tetapi sesi 10-15 menit untuk kelas bawah dan 20-25 menit untuk kelas atas, diselingi istirahat, umumnya efektif.'],
            ['Apa penyebab anak susah fokus?', 'Yang paling umum: kurang tidur, lingkungan ramai, tugas terlalu besar, belum paham materi, dan lelah. Sebagian kecil karena kondisi seperti ADHD.'],
            ['Apakah anak yang susah fokus pasti ADHD?', 'Tidak. Diagnosis ADHD butuh evaluasi profesional dan gejala yang menetap di berbagai lingkungan.'],
            ['Permainan apa yang melatih fokus anak?', 'Permainan aturan seperti Simon berkata, permainan memori, teka-teki, memasak bersama, dan proyek seperti coding atau merakit.'],
        ],
        sources: [
            ['Harvard Center on the Developing Child: Executive Function & Self-Regulation', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['Wolraich, M. L. dkk. (2019). Clinical Practice Guideline for ADHD. Pediatrics', 'https://doi.org/10.1542/peds.2019-2528'],
            ['Paruthi, S. dkk. (2016). Recommended amount of sleep for pediatric populations. Journal of Clinical Sleep Medicine', 'https://doi.org/10.5664/jcsm.5866'],
            ['Diamond, A., & Lee, K. (2011). Interventions shown to aid executive function development in children 4 to 12 years old. Science', 'https://doi.org/10.1126/science.1204529'],
        ],
    },

    {
        slug: 'growth-mindset-pada-anak-cara-memuji-yang-benar',
        title: 'Growth Mindset pada Anak: Cara Memuji yang Benar',
        description: 'Apa itu growth mindset, kenapa pujian kamu pintar bisa berbalik arah, apa kata riset terbaru, dan kalimat pujian yang lebih membantu.',
        date: D, category: C, tags: ['growth mindset', 'cara memuji anak', 'motivasi belajar anak', 'Carol Dweck', 'pola asuh'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, bintang efisiensi dan petunjuk bertahap dirancang untuk menghargai proses: anak didorong mencoba lagi dengan cara lebih baik, bukan sekadar benar atau salah.',
        lead: '"Wah, kamu pintar sekali!" terdengar seperti pujian yang sempurna. Penelitian psikologi menunjukkan pujian seperti ini, bila terlalu sering, justru bisa membuat sebagian anak takut mencoba hal sulit. Artikel ini menjelaskan konsep growth mindset, apa kata riset (termasuk batas-batasnya), dan cara memuji yang lebih membantu.',
        body: [
            { h2: 'Dua cara memandang kemampuan' },
            `Psikolog Carol Dweck dari Stanford University membedakan dua pola pandang. Dengan <b>fixed mindset</b> (pola pikir tetap), seseorang menganggap kecerdasan sebagai bawaan yang tidak berubah: "aku memang tidak bisa matematika". Dengan <b>growth mindset</b> (pola pikir bertumbuh), kemampuan dipandang bisa berkembang lewat usaha, strategi yang tepat, dan bantuan: "aku <i>belum</i> bisa matematika".`,
            { svg: 'versus', label: 'Fixed mindset vs growth mindset', left: { title: 'Fixed mindset', items: ['"Aku memang bodoh di sini"', 'Menghindari tantangan', 'Menyerah saat sulit', 'Kritik terasa menyerang', 'Iri pada keberhasilan orang lain'] }, right: { title: 'Growth mindset', items: ['"Aku belum bisa"', 'Mencari tantangan', 'Tekun dan mencoba strategi lain', 'Kritik adalah masukan', 'Belajar dari keberhasilan orang lain'] } },

            { h2: 'Eksperimen pujian yang terkenal' },
            `Dalam studi Mueller dan Dweck (1998), anak-anak mengerjakan soal, lalu dipuji dengan dua cara berbeda: "kamu pasti pintar" atau "kamu pasti berusaha keras". Setelah itu mereka diberi soal yang sangat sulit sampai gagal. Anak yang dipuji karena <b>kepintarannya</b> cenderung kehilangan minat, menilai diri lebih buruk, dan pada soal berikutnya kinerjanya menurun. Anak yang dipuji karena <b>usahanya</b> lebih tekun dan lebih memilih tugas yang menantang.`,
            `Logikanya: kalau aku dipuji karena pintar, maka gagal berarti aku tidak pintar. Lebih aman tidak mencoba yang sulit. Kalau aku dipuji karena usaha, gagal hanya berarti aku perlu berusaha atau mencoba cara lain.`,

            { h2: 'Yang dikatakan riset terbaru (dengan jujur)' },
            `Growth mindset sempat dipromosikan seolah obat ajaib pendidikan. Riset yang lebih besar memberi gambaran yang lebih seimbang:`,
            { ul: [
                '<b>Sisk dan rekan (2018)</b>, dalam dua meta-analisis di <i>Psychological Science</i>, menemukan hubungan mindset dengan prestasi akademik secara umum lemah, dan efek program intervensi mindset rata-rata kecil.',
                '<b>Yeager dan rekan (2019)</b>, dalam studi nasional di Amerika Serikat yang dimuat di <i>Nature</i>, menemukan intervensi singkat growth mindset meningkatkan nilai terutama pada siswa berprestasi rendah, dan efeknya lebih kuat di sekolah yang lingkungannya mendukung.',
            ] },
            { callout: 'Growth mindset bukan mantra yang cukup diucapkan. Yang berdampak adalah lingkungan sehari-hari: pujian yang tepat, tantangan yang sesuai, kesempatan memperbaiki, dan orang dewasa yang memperlakukan kesalahan sebagai bagian dari belajar.', kind: 'info', title: 'Kesimpulan yang seimbang' },

            { h2: 'Cara memuji yang lebih membantu' },
            `Pujian proses menyebut <b>apa yang anak lakukan</b>: usaha, strategi, ketekunan, perbaikan. Tetapi hati-hati dengan "growth mindset palsu", yaitu memuji usaha padahal anak tidak berkembang. Kalau usaha tidak membuahkan hasil, bantu anak mencari strategi lain.`,
            { table: { head: ['Daripada', 'Coba katakan'], rows: [
                ['"Kamu pintar!"', '"Kamu mencoba beberapa cara sampai ketemu. Itu strategi yang bagus."'],
                ['"Kamu berbakat menggambar."', '"Lihat detail di sayap kupu-kupunya. Kamu teliti sekali."'],
                ['"Ini gampang kok."', '"Ini memang menantang. Bagian mana yang mau kita coba dulu?"'],
                ['"Tidak apa-apa, kamu memang tidak bakat matematika."', '"Kamu belum bisa bagian ini. Ayo cari cara yang lain."'],
                ['"Bagus, nilaimu 100!"', '"Kamu rajin mengulang latihan minggu ini, dan hasilnya terlihat."'],
                ['"Kamu sudah berusaha" (padahal tidak ada kemajuan)', '"Cara ini belum berhasil. Mau coba strategi lain, atau minta petunjuk?"'],
            ] } },
            { w: 'quiz', title: 'Latihan: pujian mana yang lebih membangun?', questions: [
                { q: 'Anak berhasil menyelesaikan puzzle 100 keping setelah dua hari.', options: ['"Kamu jenius!"', '"Kamu tidak menyerah walau dua hari. Strategimu memulai dari pinggir juga cerdik."'], answer: 1, why: 'Menyebut ketekunan dan strategi membuat anak tahu apa yang bisa diulang lain kali.' },
                { q: 'Program coding anak akhirnya berjalan setelah beberapa kali error.', options: ['"Kamu memang berbakat jadi programmer."', '"Kamu menemukan bug-nya satu per satu. Itu cara kerja programmer sungguhan."'], answer: 1, why: 'Memuji proses debugging menormalkan kesalahan sebagai bagian dari belajar.' },
                { q: 'Anak menangis karena nilai ulangannya jelek.', options: ['"Sudahlah, memang kamu bukan anak pintar matematika."', '"Sedih ya. Ayo lihat soal mana yang salah, lalu kita cari bagian yang belum dipahami."'], answer: 1, why: 'Mengakui perasaan, lalu mengarahkan ke langkah perbaikan.' },
            ] },

            { h2: 'Kekuatan kata "belum"' },
            `Satu kata kecil bisa mengubah cara anak memandang dirinya. "Aku tidak bisa berenang" terdengar final. "Aku <b>belum</b> bisa berenang" membuka kemungkinan. Biasakan menambahkan "belum" setiap kali anak berkata tidak bisa. Lama-lama anak akan mengucapkannya sendiri.`,

            { h2: 'Menciptakan lingkungan growth mindset di rumah' },
            { w: 'checklist', title: 'Kebiasaan keluarga', desc: 'Centang yang sudah rutin dilakukan.', items: ['Orang tua menceritakan kesalahannya sendiri dan apa yang dipelajari.', 'Di meja makan, setiap orang menyebut satu hal sulit yang dicoba hari ini.', 'Kesalahan anak disambut dengan "ayo kita cari tahu", bukan marah.', 'Pujian menyebut usaha, strategi, atau perbaikan yang spesifik.', 'Anak diberi tantangan yang sedikit di atas kemampuannya.', 'Ada kesempatan memperbaiki pekerjaan, bukan hanya dinilai sekali.'] },
            `Kegiatan yang memberi kesempatan gagal lalu memperbaiki dalam waktu singkat sangat cocok untuk melatih pola pikir ini. Coding salah satunya: program salah, anak mencari bug, mencoba lagi, berhasil. Siklus ini terjadi puluhan kali dalam satu pelajaran. Lihat sendiri bagaimana anak menghadapinya di <a href="${pk('growth-mindset-pada-anak-cara-memuji-yang-benar')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a>.`,
        ],
        faq: [
            ['Apa itu growth mindset?', 'Keyakinan bahwa kemampuan bisa berkembang lewat usaha, strategi yang tepat, dan bantuan, bukan bawaan yang tetap.'],
            ['Apakah salah memuji anak pintar?', 'Tidak salah sesekali, tetapi bila terlalu sering bisa membuat sebagian anak takut gagal. Pujian yang menyebut usaha dan strategi lebih membantu.'],
            ['Apakah growth mindset terbukti secara ilmiah?', 'Ada bukti, tetapi efeknya lebih kecil dari klaim populer. Efeknya lebih terasa bila didukung lingkungan sehari-hari yang konsisten.'],
            ['Bagaimana menanggapi anak yang berkata "aku bodoh"?', 'Akui perasaannya, lalu ubah kalimatnya: "Kamu belum bisa bagian ini. Ayo kita cari bagian mana yang membingungkan."'],
        ],
        sources: [
            ['Mueller, C. M., & Dweck, C. S. (1998). Praise for intelligence can undermine children\'s motivation and performance', 'https://doi.org/10.1037/0022-3514.75.1.33'],
            ['Sisk, V. F. dkk. (2018). To what extent and under which circumstances are growth mind-sets important to academic achievement? Psychological Science', 'https://doi.org/10.1177/0956797617739704'],
            ['Yeager, D. S. dkk. (2019). A national experiment reveals where a growth mindset improves achievement. Nature', 'https://doi.org/10.1038/s41586-019-1466-y'],
        ],
    },

    {
        slug: 'cara-memotivasi-anak-belajar-tanpa-memaksa',
        title: 'Cara Memotivasi Anak Belajar Tanpa Memaksa',
        description: 'Kenapa hadiah dan ancaman tidak bertahan lama, tiga kebutuhan dasar motivasi menurut riset, dan cara praktis membuat anak mau belajar.',
        date: D, category: C, tags: ['memotivasi anak belajar', 'motivasi intrinsik', 'anak malas belajar', 'pola asuh', 'self-determination theory'], cta: 'pixelkode',
        ctaNote: 'PixelKode memakai prinsip yang sama: anak memilih proyek di Laboratorium (otonomi), mendapat pemeriksaan otomatis dan bintang (kompetensi), dan memamerkan karya di galeri kelas (keterhubungan).',
        lead: '"Kalau nilaimu bagus, nanti dibelikan mainan." "Kalau tidak belajar, HP disita." Hampir semua orang tua pernah memakai cara ini, dan sering berhasil sebentar. Masalahnya, begitu hadiah atau ancaman hilang, semangat belajarnya ikut hilang. Psikologi motivasi menawarkan cara yang lebih tahan lama.',
        body: [
            { h2: 'Dua jenis motivasi' },
            { svg: 'versus', label: 'Motivasi ekstrinsik vs intrinsik', left: { title: 'Ekstrinsik (dari luar)', items: ['Demi hadiah atau menghindari hukuman', 'Cepat bekerja', 'Berhenti saat hadiah hilang', 'Bisa menggeser minat asli', 'Contoh: belajar demi uang jajan'] }, right: { title: 'Intrinsik (dari dalam)', items: ['Karena menarik atau bermakna', 'Butuh waktu tumbuh', 'Bertahan lama', 'Mendorong belajar lebih dalam', 'Contoh: membaca karena suka ceritanya'] } },
            `Motivasi ekstrinsik tidak selalu buruk. Gaji memotivasi orang dewasa bekerja. Namun untuk belajar, penelitian menunjukkan pentingnya menjaga agar motivasi dari dalam tidak tergerus.`,

            { h2: 'Saat hadiah justru merugikan' },
            `Meta-analisis Deci, Koestner, dan Ryan (1999) di <i>Psychological Bulletin</i> merangkum 128 eksperimen. Temuannya: hadiah nyata yang dijanjikan sebelumnya untuk mengerjakan kegiatan yang <b>sebenarnya sudah menarik</b> cenderung menurunkan motivasi intrinsik. Anak yang tadinya menggambar karena senang, setelah diberi hadiah untuk menggambar, bisa kehilangan minat saat hadiahnya berhenti. Sebaliknya, umpan balik positif yang tulus (pujian yang informatif) cenderung meningkatkan motivasi intrinsik.`,
            { table: { head: ['Jenis penghargaan', 'Efek pada motivasi intrinsik'], rows: [
                ['Hadiah barang yang dijanjikan untuk kegiatan yang sudah disukai', 'Cenderung menurunkan'],
                ['Pujian tulus yang menyebut apa yang dilakukan dengan baik', 'Cenderung meningkatkan'],
                ['Hadiah kejutan yang tidak dijanjikan', 'Umumnya tidak merugikan'],
                ['Ancaman dan hukuman', 'Cenderung menurunkan, menambah tekanan'],
            ] } },

            { h2: 'Tiga kebutuhan dasar menurut Self-Determination Theory' },
            `Edward Deci dan Richard Ryan mengembangkan <b>Self-Determination Theory</b>, yang menyatakan motivasi intrinsik tumbuh ketika tiga kebutuhan psikologis terpenuhi:`,
            { svg: 'cycle', label: 'Tiga kebutuhan motivasi', items: ['Otonomi: punya pilihan', 'Kompetensi: merasa mampu', 'Keterhubungan: merasa didukung'], caption: 'Ketiganya saling menguatkan. Lemah di satu bagian, motivasi ikut melemah.' },
            { h3: '1. Otonomi: beri pilihan' },
            `Anak yang punya kendali lebih bersemangat. Pilihannya tidak harus besar: "Mau mengerjakan PR Matematika atau Bahasa dulu?", "Mau belajar di meja atau di lantai?", "Proyek tentang hewan apa yang mau kamu buat?" Pilihan dalam batas yang Anda tetapkan tetap memberi rasa memiliki.`,
            { h3: '2. Kompetensi: tantangan yang pas' },
            `Anak termotivasi saat merasa mampu dan berkembang. Tugas yang terlalu mudah membosankan; terlalu sulit membuat putus asa. Pecah tugas, rayakan kemajuan kecil, dan tunjukkan perkembangannya: "Bulan lalu kamu butuh 20 menit, sekarang 12 menit."`,
            { h3: '3. Keterhubungan: belajar bersama' },
            `Anak lebih semangat bila merasa didukung orang yang ia sayangi. Duduk menemani tanpa mengambil alih, menunjukkan minat pada apa yang ia pelajari, dan memberi kesempatan anak mengajari Anda, semuanya memperkuat keterhubungan.`,

            { h2: 'Cek suasana belajar di rumah' },
            { w: 'choose', title: 'Kebutuhan mana yang paling perlu diperkuat?', questions: [
                { q: 'Seberapa sering anak punya pilihan dalam urusan belajarnya?', options: [{ t: 'Hampir tidak pernah, semua sudah diatur', add: { otonomi: 3 } }, { t: 'Kadang', add: { otonomi: 1 } }, { t: 'Sering, dalam batas yang jelas', add: { baik: 2 } }] },
                { q: 'Bagaimana anak menilai kemampuannya sendiri?', options: [{ t: 'Sering bilang "aku tidak bisa"', add: { kompetensi: 3 } }, { t: 'Campur', add: { kompetensi: 1 } }, { t: 'Percaya diri mencoba', add: { baik: 2 } }] },
                { q: 'Saat belajar, orang tua biasanya ...', options: [{ t: 'Sibuk sendiri, hanya mengecek hasil', add: { keterhubungan: 3 } }, { t: 'Mengawasi sambil menegur', add: { keterhubungan: 2, otonomi: 1 } }, { t: 'Menemani dan tertarik pada yang dipelajari', add: { baik: 2 } }] },
            ], results: {
                otonomi: { title: 'Perkuat otonomi', text: 'Beri lebih banyak pilihan kecil: urutan tugas, tempat belajar, atau topik proyek.' },
                kompetensi: { title: 'Perkuat rasa mampu', text: 'Pecah tugas menjadi kecil, mulai dari yang bisa, dan tunjukkan kemajuan dari waktu ke waktu.' },
                keterhubungan: { title: 'Perkuat keterhubungan', text: 'Temani tanpa mengambil alih. Tanyakan apa yang dipelajari dengan rasa ingin tahu, bukan interogasi.' },
                baik: { title: 'Fondasinya sudah baik', text: 'Pertahankan. Tambahkan proyek yang berasal dari minat anak sendiri.' },
            } },

            { h2: 'Kalau tetap ingin memakai hadiah' },
            { ul: [
                '<b>Untuk kegiatan yang membosankan tapi perlu</b>, misalnya menghafal perkalian, sistem poin bisa membantu memulai. Hentikan bertahap setelah kebiasaan terbentuk.',
                '<b>Hadiahkan pengalaman</b>, bukan barang: memilih menu makan malam, jalan-jalan ke perpustakaan, waktu bermain bersama.',
                '<b>Hindari membayar untuk hal yang sudah disukai</b>, seperti membaca buku favorit.',
                '<b>Rayakan proses</b>: "Kamu konsisten belajar 5 hari minggu ini" lebih baik daripada "nilai 100 dapat hadiah".',
            ] },
            { callout: 'Minat sering lahir dari rasa mampu. Anak jarang "suka matematika" sebelum merasa bisa matematika. Jadi kalau anak belum termotivasi, fokuslah membangun pengalaman berhasil yang kecil-kecil.', kind: 'good', title: 'Motivasi sering datang setelah bisa' },

            { h2: 'Cari jalan masuk lewat minat' },
            `Anak yang "malas belajar" sering sangat bersemangat pada hal lain: game, binatang, sepak bola, menggambar. Gunakan minat itu sebagai jembatan. Anak yang suka game bisa belajar logika dan matematika lewat membuat game sendiri. Coba bersama anak lewat <a href="${pk('cara-memotivasi-anak-belajar-tanpa-memaksa')}" target="_blank" rel="noopener">dua pelajaran gratis PixelKode</a>, lalu perhatikan apakah ia ingin melanjutkan tanpa disuruh. Itu tanda motivasi dari dalam.`,
        ],
        faq: [
            ['Bagaimana memotivasi anak yang malas belajar?', 'Penuhi tiga kebutuhan dasar: beri pilihan, buat tugas yang pas dengan kemampuannya, dan temani dengan hangat. Gunakan minatnya sebagai jembatan.'],
            ['Apakah memberi hadiah untuk belajar itu salah?', 'Tidak selalu. Untuk tugas yang membosankan, hadiah bisa membantu memulai. Hindari hadiah barang untuk kegiatan yang sudah disukai anak.'],
            ['Apa itu motivasi intrinsik?', 'Dorongan melakukan sesuatu karena menarik, menyenangkan, atau bermakna bagi diri sendiri, bukan demi hadiah atau menghindari hukuman.'],
            ['Kenapa ancaman tidak efektif jangka panjang?', 'Ancaman membuat anak belajar demi menghindari hukuman, sehingga semangatnya hilang saat ancaman tidak ada, dan bisa menambah kecemasan.'],
        ],
        sources: [
            ['Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. Psychological Bulletin', 'https://doi.org/10.1037/0033-2909.125.6.627'],
            ['Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation. American Psychologist', 'https://doi.org/10.1037/0003-066X.55.1.68'],
            ['Center for Self-Determination Theory', 'https://selfdeterminationtheory.org/'],
        ],
    },

    {
        slug: 'cara-mengajarkan-matematika-yang-menyenangkan',
        title: 'Cara Mengajarkan Matematika yang Menyenangkan untuk Anak',
        description: 'Strategi mengajarkan matematika di rumah: benda, gambar, lalu simbol; permainan angka harian; dan cara agar rasa cemas tidak menular.',
        date: D, category: C, tags: ['mengajarkan matematika anak', 'matematika menyenangkan', 'anak tidak suka matematika', 'kecemasan matematika', 'belajar di rumah'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, matematika muncul alami: koordinat untuk memindahkan roket, derajat untuk menggambar bintang, dan variabel untuk skor game. Anak memakai angka karena butuh, bukan karena disuruh.',
        lead: 'Banyak anak dan orang dewasa merasa matematika menakutkan. Padahal di usia SD, matematika bisa terasa seperti teka-teki dan permainan. Kuncinya ada pada urutan mengajar yang tepat, banyak bermain dengan angka, dan menjaga agar rasa cemas tidak menular dari orang tua ke anak.',
        body: [
            { h2: 'Konteks: kenapa ini penting' },
            `Hasil PISA 2022 dari OECD menunjukkan skor matematika siswa Indonesia usia 15 tahun berada jauh di bawah rata-rata negara OECD, dan sebagian besar siswa belum mencapai tingkat kemampuan dasar. Fondasi yang kuat di SD, terutama pemahaman makna bilangan (bukan sekadar hafalan), adalah salah satu kunci memperbaikinya.`,

            { h2: 'Urutan emas: benda, gambar, simbol' },
            `Pendekatan <b>konkret-gambar-abstrak</b> (sering disebut CPA: Concrete, Pictorial, Abstract), yang dipakai luas di pengajaran matematika Singapura, mengikuti cara anak memahami konsep baru. Panduan Education Endowment Foundation di Inggris juga menyarankan pemakaian benda manipulatif dan representasi visual untuk membangun pemahaman sebelum simbol.`,
            { svg: 'flow', label: 'Urutan konkret, gambar, abstrak', steps: [{ t: 'Konkret', d: 'pegang benda: kelereng, sendok' }, { t: 'Gambar', d: 'gambar bulatan, batang' }, { t: 'Abstrak', d: 'tulis angka: 3 × 4 = 12' }], caption: 'Contoh perkalian 3 × 4: tiga piring berisi masing-masing empat kelereng, lalu digambar, baru ditulis sebagai simbol.' },
            `Kesalahan yang sering terjadi adalah langsung melompat ke simbol. Anak yang menghafal "3 × 4 = 12" tanpa pernah melihat tiga kelompok berisi empat benda akan kesulitan saat bertemu soal cerita atau pembagian.`,

            { h2: 'Matematika di kehidupan sehari-hari' },
            { table: { head: ['Kegiatan', 'Konsep', 'Pertanyaan yang bisa diajukan'], rows: [
                ['Belanja di warung', 'penjumlahan, kembalian', '"Kalau bayar Rp20.000, kembaliannya berapa?"'],
                ['Memasak', 'pecahan, takaran', '"Resep untuk 4 orang, kita bertiga. Gulanya berapa?"'],
                ['Memotong kue atau pizza', 'pecahan', '"Mana yang lebih besar, 1/4 atau 1/3 bagian?"'],
                ['Perjalanan', 'waktu, jarak', '"Berangkat 07.15, sampai 07.50. Berapa menit di jalan?"'],
                ['Menabung', 'perkalian, rencana', '"Rp5.000 seminggu, berapa minggu sampai Rp60.000?"'],
                ['Bermain dadu', 'penjumlahan cepat, peluang', '"Angka berapa yang paling sering muncul dari dua dadu?"'],
            ] } },

            { h2: 'Permainan angka 10 menit' },
            { ul: [
                '<b>Tebak angka.</b> Anda memikirkan angka 1-100, anak menebak dengan petunjuk lebih besar atau lebih kecil. Melatih urutan bilangan dan strategi.',
                '<b>Target 10.</b> Ambil kartu angka acak, cari pasangan yang jumlahnya 10.',
                '<b>Belanja-belanjaan.</b> Beri label harga pada mainan, anak menjadi kasir.',
                '<b>Pola tepuk.</b> Tepuk di setiap kelipatan 3: satu, dua, TEPUK, empat, lima, TEPUK.',
                '<b>Perkiraan.</b> "Menurutmu ada berapa butir beras di sendok ini?" Lalu hitung bersama.',
            ] },
            { w: 'quiz', title: 'Kuis cerita untuk anak kelas 3-5', questions: [
                { q: 'Rina punya 3 kotak pensil, masing-masing berisi 6 pensil. Ia memberikan 4 pensil ke adiknya. Berapa sisa pensil Rina?', options: ['14', '18', '22'], answer: 0, why: '3 × 6 = 18, lalu 18 − 4 = 14.' },
                { q: 'Pizza dipotong 8 sama besar. Budi makan 2 potong, Ani makan 3 potong. Berapa bagian yang tersisa?', options: ['3/8', '5/8', '2/8'], answer: 0, why: '2 + 3 = 5 potong dimakan, sisa 8 − 5 = 3 potong, yaitu 3/8.' },
                { q: 'Roket di layar ada di x = −50 lalu bergerak 120 langkah ke kanan. Di mana posisinya sekarang?', options: ['x = 70', 'x = 170', 'x = −170'], answer: 0, why: '−50 + 120 = 70. Bilangan negatif jadi mudah dibayangkan dengan posisi di layar.' },
            ] },

            { h2: 'Hati-hati: kecemasan matematika bisa menular' },
            `Penelitian Maloney dan rekan (2015) di <i>Psychological Science</i> menemukan bahwa anak dari orang tua yang cemas terhadap matematika belajar lebih sedikit sepanjang tahun ajaran, <b>terutama bila orang tua itu sering membantu PR matematika</b>. Bukan berarti orang tua yang cemas harus menjauh, tetapi cara bicara perlu dijaga.`,
            { table: { head: ['Hindari', 'Ganti dengan'], rows: [
                ['"Mama juga dulu tidak bisa matematika."', '"Mama juga dulu kesulitan bagian ini. Ayo kita cari caranya bersama."'],
                ['"Matematika memang susah."', '"Ini teka-teki. Kita pecahkan pelan-pelan."'],
                ['"Masa begini saja tidak bisa?"', '"Coba jelaskan cara berpikirmu. Di mana mulai bingung?"'],
                ['Memberi jawaban langsung', 'Bertanya: "Apa yang sudah kamu tahu dari soal ini?"'],
            ] } },
            { callout: 'Saat membantu PR matematika, fokus pada proses berpikir anak, bukan kecepatan. Minta ia menjelaskan caranya. Kalau Anda ragu dengan materinya, katakan dengan jujur dan cari tahu bersama, atau tanyakan ke guru.', kind: 'good', title: 'Untuk orang tua yang tidak percaya diri' },

            { h2: 'Menghafal tetap perlu, tapi setelah paham' },
            `Fakta dasar seperti penjumlahan sampai 20 dan perkalian 1-10 memang perlu otomatis supaya pikiran anak bebas untuk soal yang lebih rumit. Urutannya: pahami dulu maknanya dengan benda dan gambar, lalu latih sedikit-sedikit setiap hari. Lima menit sehari lebih efektif daripada satu jam di akhir pekan.`,
            { w: 'calc', title: 'Kalkulator latihan perkalian', desc: 'Berapa lama sampai fakta perkalian dikuasai dengan latihan singkat harian?', inputs: [
                { id: 'fakta', label: 'Fakta yang ingin dikuasai', value: 36, min: 10, max: 100, step: 1 },
                { id: 'baru', label: 'Fakta baru per hari', value: 3, min: 1, max: 10, step: 1 },
                { id: 'menit', label: 'Menit latihan per hari', value: 5, min: 3, max: 20, step: 1 },
            ], outputs: [
                { label: 'Perkiraan selesai', expr: 'Math.ceil(fakta / baru)', fmt: 'int', unit: 'hari', big: true },
                { label: 'Total waktu latihan', expr: 'Math.ceil(fakta / baru) * menit', fmt: 'int', unit: 'menit' },
            ], },

            { h2: 'Matematika lewat coding' },
            `Coding memberi anak alasan nyata untuk memakai matematika: koordinat untuk memindahkan tokoh, derajat untuk menggambar bentuk (360 ÷ 5 = 72° untuk segi lima), bilangan negatif untuk bergerak ke kiri, dan variabel untuk skor. Seymour Papert, pelopor coding untuk anak, menyebut lingkungan seperti ini sebagai "Mathland", tempat matematika dipelajari seperti bahasa di negeri asalnya. Anak bisa mencoba versi modernnya di <a href="${pk('cara-mengajarkan-matematika-yang-menyenangkan')}" target="_blank" rel="noopener">pelajaran gratis PixelKode</a>.`,
        ],
        faq: [
            ['Bagaimana membuat anak suka matematika?', 'Mulai dari benda nyata dan permainan, kaitkan dengan kehidupan sehari-hari, rayakan proses berpikir, dan jaga agar orang tua tidak menularkan rasa cemas.'],
            ['Apa itu metode konkret, gambar, abstrak?', 'Urutan mengajar dari benda nyata, ke gambar atau diagram, baru ke simbol angka, supaya anak memahami makna sebelum menghafal.'],
            ['Apakah anak perlu menghafal perkalian?', 'Ya, setelah memahami maknanya. Latihan singkat harian lebih efektif daripada sesi panjang yang jarang.'],
            ['Saya tidak percaya diri dengan matematika. Bagaimana membantu anak?', 'Fokus pada pertanyaan dan proses, hindari kalimat negatif tentang matematika, dan jujur bila perlu mencari tahu bersama atau bertanya ke guru.'],
        ],
        sources: [
            ['OECD: PISA 2022 Results, catatan negara Indonesia', 'https://www.oecd.org/en/publications/pisa-2022-results-volume-i-and-ii-country-notes_ed6fbcc5-en/indonesia_c2e1ae0e-en.html'],
            ['Maloney, E. A. dkk. (2015). Intergenerational effects of parents\' math anxiety on children\'s math achievement and anxiety. Psychological Science', 'https://doi.org/10.1177/0956797615592630'],
            ['Education Endowment Foundation: Improving Mathematics in Key Stages 2 and 3', 'https://dera.ioe.ac.uk/30457/1/KS2_KS3_Maths_Guidance_2017.pdf'],
            ['Papert, S. (1980). Mindstorms (edisi daring)', 'https://mindstorms.media.mit.edu/'],
        ],
    },
];
