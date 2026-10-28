const D = '2026-10-28';
const C = 'Mata & Kacamata';

export default [
    {
        slug: 'apakah-mata-minus-bisa-sembuh',
        title: 'Apakah Mata Minus Bisa Sembuh? Fakta dan Pilihan Koreksinya',
        description: 'Apakah mata minus bisa sembuh? Kenapa minus terjadi, beda koreksi dan penyembuhan, soal LASIK, cara memperlambat minus anak, dan klaim keliru.',
        date: D, category: C, tags: ['mata minus bisa sembuh', 'miopia', 'mata minus', 'LASIK', 'kacamata'], cta: 'lensara',
        lead: '"Apakah mata minus bisa sembuh?" adalah salah satu pertanyaan paling sering diajukan di optik. Jawaban jujurnya: pada kebanyakan kasus, minus tidak bisa dikembalikan seperti semula dengan latihan atau makanan tertentu. Tetapi minus bisa dikoreksi dengan sangat baik, dan pada anak, kenaikannya bisa diperlambat. Artikel ini menjelaskan kenapa.',
        body: [
            { h2: 'Kenapa mata menjadi minus?' },
            `Pada mata minus (miopia), bayangan benda jauh jatuh di <b>depan</b> retina, bukan tepat di atasnya. Penyebab paling umum adalah <b>bola mata yang tumbuh terlalu panjang</b> ke belakang. Karena masalahnya ada pada ukuran dan bentuk bola mata, minus tidak bisa "dilatih hilang" seperti otot yang lemah.`,
            { svg: 'versus', label: 'Mata normal vs mata minus', left: { title: 'Mata normal', items: ['Panjang bola mata pas', 'Bayangan jatuh tepat di retina', 'Benda jauh terlihat tajam'] }, right: { title: 'Mata minus', items: ['Bola mata terlalu panjang', 'Bayangan jatuh di depan retina', 'Benda jauh terlihat buram'] } },
            `Penelitian memperkirakan jumlah penderita miopia di dunia terus naik. Holden dan rekan (2016) memproyeksikan sekitar separuh penduduk dunia akan mengalami miopia pada 2050, dengan peran besar faktor gaya hidup: berkurangnya waktu di luar ruangan dan meningkatnya aktivitas jarak dekat.`,

            { h2: 'Koreksi bukan berarti sembuh' },
            { table: { head: ['Pilihan', 'Cara kerja', 'Apakah "menyembuhkan"?'], rows: [
                ['Kacamata', 'Lensa minus menggeser fokus ke retina', 'Tidak; mengoreksi selama dipakai'],
                ['Lensa kontak', 'Sama seperti kacamata, menempel di kornea', 'Tidak; mengoreksi selama dipakai'],
                ['Bedah refraktif (LASIK dan sejenisnya)', 'Mengubah bentuk kornea agar fokus tepat di retina', 'Menghilangkan kebutuhan kacamata pada banyak orang, tetapi panjang bola mata tidak berubah'],
                ['Ortho-K (lensa malam)', 'Lensa kaku dipakai saat tidur, membentuk sementara kornea', 'Efeknya sementara, hilang bila dihentikan'],
            ] } },
            { callout: 'Setelah LASIK, penglihatan bisa tajam tanpa kacamata. Namun karena bola mata tetap panjang, risiko kondisi yang berkaitan dengan miopia tinggi (misalnya pada retina) tidak hilang. Pemeriksaan mata rutin tetap penting.', kind: 'info', title: 'Hal yang jarang dijelaskan' },

            { h2: 'Bagaimana dengan anak? Bisa diperlambat' },
            `Pada anak, minus biasanya terus naik selama masa pertumbuhan. Kabar baiknya, kenaikannya bisa diperlambat:`,
            { ul: [
                '<b>Waktu di luar ruangan.</b> Uji klinis di Guangzhou, Tiongkok (He dan rekan, 2015) menambah kelas luar ruangan 40 menit per hari di sekolah. Setelah 3 tahun, kejadian miopia baru lebih rendah (30,4% dibanding 39,5%). Efeknya sedang, tetapi murah dan sehat.',
                '<b>Istirahat dari aktivitas dekat</b>, misalnya aturan 20-20-20 saat membaca atau memakai gawai.',
                '<b>Penanganan oleh dokter mata</b>: tetes atropin dosis rendah, lensa kacamata atau lensa kontak khusus pengendali miopia, atau ortho-K. Pilihan ini harus diresepkan dan dipantau tenaga ahli.',
            ] },

            { h2: 'Klaim yang perlu diwaspadai' },
            { w: 'cards', title: 'Ketuk untuk melihat faktanya', items: [
                { tag: 'Klaim', front: '"Senam mata bisa menghilangkan minus."', backTag: 'Fakta', back: 'Latihan mata bisa membuat mata terasa nyaman, tetapi tidak memendekkan bola mata yang sudah terlalu panjang.' },
                { tag: 'Klaim', front: '"Makan wortel menyembuhkan minus."', backTag: 'Fakta', back: 'Vitamin A penting untuk kesehatan mata, tetapi tidak mengubah minus.' },
                { tag: 'Klaim', front: '"Pakai kacamata membuat minus makin parah."', backTag: 'Fakta', back: 'Kacamata dengan ukuran tepat tidak menyebabkan minus bertambah. Minus bertambah karena bola mata terus tumbuh, terutama pada anak.' },
                { tag: 'Klaim', front: '"Kacamata pinhole menyembuhkan minus."', backTag: 'Fakta', back: 'Lubang kecil memang membuat pandangan sementara lebih tajam, tetapi tidak mengubah mata dan membatasi bidang pandang.' },
            ] },
            { w: 'quiz', title: 'Cek pemahaman', questions: [
                { q: 'Penyebab paling umum mata minus adalah ...', options: ['Otot mata lemah', 'Bola mata terlalu panjang', 'Kurang makan wortel'], answer: 1, why: 'Bola mata yang terlalu panjang membuat bayangan jatuh di depan retina.' },
                { q: 'Apa yang terbukti membantu memperlambat munculnya minus pada anak?', options: ['Lebih banyak waktu di luar ruangan', 'Tidak memakai kacamata', 'Membaca dalam gelap'], answer: 0, why: 'Uji klinis menunjukkan tambahan waktu luar ruangan menurunkan kejadian miopia baru.' },
            ] },
        ],
        faq: [
            ['Apakah mata minus bisa sembuh total?', 'Pada kebanyakan kasus tidak bisa kembali seperti semula secara alami, karena penyebabnya bola mata yang terlalu panjang. Minus bisa dikoreksi dengan kacamata, lensa kontak, atau bedah refraktif.'],
            ['Apakah LASIK menyembuhkan minus?', 'LASIK mengubah bentuk kornea sehingga banyak orang tidak lagi butuh kacamata, tetapi panjang bola mata tidak berubah dan pemeriksaan rutin tetap perlu.'],
            ['Apakah minus anak bisa diperlambat?', 'Bisa. Waktu di luar ruangan, istirahat dari aktivitas dekat, dan penanganan dokter seperti atropin dosis rendah atau lensa khusus dapat memperlambat kenaikannya.'],
            ['Apakah memakai kacamata membuat minus bertambah?', 'Tidak. Kacamata dengan ukuran tepat tidak menyebabkan minus bertambah.'],
        ],
        sources: [
            ['Holden, B. A. dkk. (2016). Global prevalence of myopia and high myopia and temporal trends from 2000 through 2050. Ophthalmology', 'https://doi.org/10.1016/j.ophtha.2016.01.006'],
            ['He, M. dkk. (2015). Effect of time spent outdoors at school on the development of myopia among children in China. JAMA', 'https://doi.org/10.1001/jama.2015.10803'],
            ['WHO: World report on vision (2019)', 'https://www.who.int/publications/i/item/9789241516570'],
            ['Minus anak cepat bertambah: cara memperlambatnya (artikel terkait)', 'https://muchson.web.id/artikel/minus-anak-bertambah-cepat-cara-memperlambat/'],
        ],
    },

    {
        slug: 'mata-minus-berapa-harus-pakai-kacamata',
        title: 'Mata Minus Berapa Harus Pakai Kacamata? Ini Patokannya',
        description: 'Minus 0,25, 0,5, atau 1 harus pakai kacamata? Patokan berdasarkan keluhan, kebutuhan, dan usia, serta kenapa anak perlu perhatian khusus.',
        date: D, category: C, tags: ['minus berapa pakai kacamata', 'mata minus 0.5', 'mata minus', 'kacamata', 'periksa mata'], cta: 'lensara',
        lead: 'Banyak orang bingung setelah diperiksa: "Minus saya cuma 0,5, perlu kacamata atau tidak?" Tidak ada satu angka ajaib yang berlaku untuk semua orang. Keputusan memakai kacamata bergantung pada keluhan, kebutuhan penglihatan sehari-hari, usia, dan rekomendasi pemeriksa mata. Berikut patokannya.',
        body: [
            { h2: 'Membaca angka minus' },
            `Angka minus diukur dalam <b>dioptri (D)</b>. Semakin besar angkanya, semakin dekat titik terjauh yang masih terlihat tajam tanpa kacamata. Secara kasar, titik jauh mata minus bisa diperkirakan dengan 1 dibagi angka minus (dalam meter).`,
            { w: 'calc', title: 'Perkiraan jarak pandang tajam tanpa kacamata', desc: 'Perkiraan optik sederhana untuk mata minus tanpa silinder. Bukan pengganti pemeriksaan.', inputs: [
                { id: 'minus', label: 'Besar minus (dioptri)', value: 1, min: 0.25, max: 8, step: 0.25 },
            ], outputs: [
                { label: 'Benda masih tajam sampai sekitar', expr: '100 / minus', fmt: 'int', unit: 'cm', big: true },
                { label: 'Gambaran', expr: "minus <= 0.75 ? 'Buram ringan pada jarak jauh; sebagian orang belum terganggu.' : (minus <= 2 ? 'Papan tulis, rambu, dan wajah dari jauh mulai buram.' : 'Benda di seberang ruangan sudah buram; kacamata umumnya dibutuhkan untuk banyak kegiatan.')", fmt: 'text' },
            ] },

            { h2: 'Patokan umum' },
            { table: { head: ['Besar minus', 'Umumnya', 'Catatan'], rows: [
                ['0,25-0,50', 'Sering belum perlu dipakai terus', 'Bisa dipakai untuk menyetir malam, menonton, atau bila terasa lelah'],
                ['0,75-1,50', 'Banyak orang mulai butuh untuk jarak jauh', 'Terutama menyetir, papan tulis, presentasi'],
                ['2,00 ke atas', 'Umumnya dipakai untuk sebagian besar kegiatan', 'Tanpa kacamata, banyak kegiatan terganggu'],
            ] } },
            { callout: 'Ini patokan kasar untuk orang dewasa tanpa silinder besar. Keputusan akhir mengikuti hasil pemeriksaan dan saran dokter mata atau refraksionis, terutama bila ada silinder, perbedaan besar antar mata, atau keluhan lain.', kind: 'warn', title: 'Bukan aturan mutlak' },

            { h2: 'Yang lebih penting dari angka: keluhan dan kebutuhan' },
            { w: 'checklist', title: 'Tanda Anda sebaiknya memakai kacamata', desc: 'Centang yang Anda alami.', items: ['Sering menyipitkan mata untuk melihat jauh.', 'Sulit membaca rambu atau plat nomor saat menyetir.', 'Mata cepat lelah atau sakit kepala setelah melihat jauh lama.', 'Silau berlebihan saat menyetir malam.', 'Sulit mengenali wajah dari kejauhan.', 'Pekerjaan menuntut penglihatan jauh yang tajam (pengemudi, guru, presentasi).'] },
            `Untuk <b>mengemudi</b>, ketajaman penglihatan jarak jauh adalah soal keselamatan. Bila minus Anda membuat rambu atau kendaraan di kejauhan kurang jelas, pakailah kacamata saat menyetir walau angkanya kecil.`,

            { h2: 'Anak-anak: jangan menunggu angka besar' },
            `Pada anak, kebutuhan penglihatan jauh sangat berkaitan dengan belajar: membaca papan tulis dan mengikuti pelajaran. Anak juga jarang mengeluh karena tidak tahu bahwa penglihatannya kurang tajam. Ikuti saran dokter mata, karena pada anak ada pertimbangan perkembangan penglihatan dan pengendalian kenaikan minus.`,
            { w: 'checklist', title: 'Tanda anak perlu diperiksa matanya', desc: 'Centang yang terlihat pada anak.', items: ['Duduk sangat dekat dengan TV atau memegang buku terlalu dekat.', 'Sering menyipitkan mata atau memiringkan kepala.', 'Sering menggosok mata.', 'Mengeluh tidak bisa membaca papan tulis.', 'Nilai menurun tanpa sebab jelas.'] },

            { h2: 'Mitos yang sering muncul' },
            { w: 'cards', title: 'Ketuk untuk faktanya', items: [
                { tag: 'Mitos', front: '"Kalau minus kecil dipakai kacamata terus, nanti ketergantungan."', backTag: 'Fakta', back: 'Mata tidak menjadi "manja". Yang terasa adalah perbedaan: dengan kacamata terlihat tajam, tanpa kacamata kembali buram seperti sebelumnya.' },
                { tag: 'Mitos', front: '"Minus 0,5 tidak perlu diperiksa ulang."', backTag: 'Fakta', back: 'Terutama pada anak dan remaja, minus bisa naik. Pemeriksaan berkala membantu memantau perubahan.' },
            ] },
        ],
        faq: [
            ['Minus 0,5 harus pakai kacamata?', 'Tidak selalu. Banyak orang dewasa dengan minus 0,5 belum perlu memakainya terus, tetapi bisa berguna untuk menyetir malam atau bila mata cepat lelah.'],
            ['Minus 1 harus pakai kacamata terus?', 'Banyak orang dengan minus 1 membutuhkan kacamata untuk melihat jauh, seperti menyetir dan membaca papan tulis. Untuk membaca dekat sering tidak perlu.'],
            ['Apakah memakai kacamata membuat ketergantungan?', 'Tidak. Mata tidak menjadi lebih buruk karena kacamata; yang terasa hanyalah perbedaan ketajaman.'],
            ['Seberapa sering periksa mata?', 'Untuk anak dan remaja yang minus, umumnya pemeriksaan berkala setiap 6-12 bulan atau sesuai saran dokter. Orang dewasa bisa lebih jarang bila stabil.'],
        ],
        sources: [
            ['WHO: Blindness and vision impairment (fact sheet)', 'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment'],
            ['WHO: World report on vision (2019)', 'https://www.who.int/publications/i/item/9789241516570'],
            ['Mata minus vs silinder (artikel terkait)', 'https://muchson.web.id/artikel/mata-minus-vs-silinder/'],
            ['Kapan harus ganti kacamata (artikel terkait)', 'https://muchson.web.id/artikel/kapan-harus-ganti-kacamata/'],
        ],
    },

    {
        slug: 'mata-kedutan-penyebab-dan-kapan-ke-dokter',
        title: 'Mata Kedutan: Penyebab Sebenarnya dan Kapan ke Dokter',
        description: 'Penyebab mata kedutan menurut medis, dari kurang tidur sampai kafein, cara meredakannya, dan tanda kedutan yang perlu diperiksakan ke dokter.',
        date: D, category: C, tags: ['mata kedutan', 'kelopak mata berkedut', 'myokymia', 'kesehatan mata', 'mata lelah'], cta: 'lensara',
        lead: 'Kelopak mata tiba-tiba bergetar sendiri, kadang beberapa detik, kadang berulang seharian. Di Indonesia, kedutan mata sering dikaitkan dengan pertanda. Secara medis, kedutan kelopak mata yang paling umum disebut eyelid myokymia, dan hampir selalu tidak berbahaya. Artikel ini menjelaskan penyebab, cara meredakan, dan tanda yang perlu diperiksakan.',
        body: [
            { h2: 'Apa itu kedutan kelopak mata?' },
            `<b>Eyelid myokymia</b> adalah kontraksi kecil berulang pada otot kelopak mata, paling sering kelopak bawah dan pada satu mata. EyeWiki dari American Academy of Ophthalmology menyebutnya bentuk paling umum dari kedutan wajah dan bersifat jinak (benign). Biasanya hilang sendiri dalam hitungan hari sampai beberapa minggu.`,

            { h2: 'Pemicu yang sering' },
            { table: { head: ['Pemicu', 'Yang bisa dilakukan'], rows: [
                ['Kurang tidur dan kelelahan', 'Tidur cukup dan teratur'],
                ['Stres', 'Istirahat, teknik relaksasi, olahraga ringan'],
                ['Kafein berlebihan (kopi, teh, minuman energi)', 'Kurangi beberapa hari dan amati'],
                ['Mata lelah karena layar', 'Aturan 20-20-20, atur jarak dan kecerahan layar'],
                ['Mata kering', 'Berkedip lebih sering, air mata buatan bila dianjurkan'],
                ['Ukuran kacamata tidak sesuai', 'Periksa ulang ukuran kacamata'],
            ] } },
            { w: 'checklist', title: 'Cari pemicu Anda', desc: 'Centang yang terjadi beberapa hari terakhir.', items: ['Tidur kurang dari 7 jam.', 'Minum lebih dari 2-3 gelas kopi atau teh kental per hari.', 'Bekerja di depan layar berjam-jam tanpa jeda.', 'Sedang banyak pikiran atau tekanan.', 'Mata terasa kering atau perih.', 'Kacamata sudah lama tidak diperiksa.'] },

            { h2: 'Cara meredakan' },
            { ol: [
                'Perbaiki tidur beberapa malam berturut-turut.',
                'Kurangi kafein selama beberapa hari.',
                'Istirahatkan mata dari layar: setiap 20 menit, lihat benda sejauh sekitar 6 meter selama 20 detik.',
                'Kompres hangat lembut pada kelopak mata yang tertutup.',
                'Bila mata kering, konsultasikan penggunaan air mata buatan.',
            ] },
            { w: 'timer', title: 'Pewaktu 20-20-20', desc: 'Istirahat mata berkala saat bekerja di depan layar.', phases: [{ label: 'Bekerja', sec: 1200, hint: 'Lanjutkan pekerjaan.' }, { label: 'Lihat jauh', sec: 20, hint: 'Pandang benda sejauh sekitar 6 meter.' }] },

            { h2: 'Kapan harus ke dokter?' },
            `Periksakan ke dokter, terutama dokter mata atau saraf, bila:`,
            { ul: [
                'Kedutan berlangsung lebih dari beberapa minggu tanpa membaik.',
                'Kelopak mata sampai tertutup penuh saat berkedut.',
                'Kedutan menyebar ke bagian wajah lain, seperti pipi atau sudut mulut.',
                'Disertai kelopak mata turun (ptosis), mata merah, bengkak, atau keluar kotoran.',
                'Disertai perubahan penglihatan.',
            ] },
            { callout: 'Kondisi seperti blefarospasme (kedua kelopak menutup tanpa sengaja) atau spasme hemifasial (kedutan menjalar ke separuh wajah) berbeda dari kedutan biasa dan perlu penanganan medis.', kind: 'warn', title: 'Bedakan dengan kondisi lain' },

            { h2: 'Bagaimana dengan mitos kedutan?' },
            `Kepercayaan bahwa kedutan mata kiri atau kanan adalah pertanda akan menangis, mendapat rezeki, atau kedatangan tamu adalah bagian dari budaya, bukan penjelasan medis. Secara ilmiah, kedutan adalah reaksi otot dan saraf terhadap kelelahan, stres, atau iritasi. Kabar baiknya, penyebab ini bisa diatasi dengan istirahat dan kebiasaan sehat.`,
        ],
        faq: [
            ['Apa penyebab mata kedutan?', 'Paling sering karena kurang tidur, stres, kafein berlebihan, mata lelah karena layar, dan mata kering.'],
            ['Apakah mata kedutan berbahaya?', 'Kedutan kelopak mata biasa (myokymia) umumnya jinak dan hilang sendiri. Periksakan bila berlangsung lama, menyebar, atau disertai gejala lain.'],
            ['Berapa lama kedutan mata biasanya berlangsung?', 'Beberapa detik per episode, dan bisa muncul berulang selama beberapa hari sampai beberapa minggu.'],
            ['Kapan kedutan mata perlu ke dokter?', 'Bila lebih dari beberapa minggu, kelopak menutup penuh, menyebar ke wajah, atau disertai kelopak turun, mata merah, atau gangguan penglihatan.'],
        ],
        sources: [
            ['EyeWiki (American Academy of Ophthalmology): Eyelid Myokymia', 'https://eyewiki.aao.org/Eyelid_Myokymia'],
            ['Mata lelah karena layar (artikel terkait)', 'https://muchson.web.id/artikel/mata-lelah-akibat-layar-cara-mengatasi/'],
            ['Mata kering (artikel terkait)', 'https://muchson.web.id/artikel/mata-kering-penyebab-dan-cara-mengatasi/'],
        ],
    },

    {
        slug: 'katarak-gejala-penyebab-dan-penanganan',
        title: 'Katarak: Gejala Awal, Penyebab, dan Penanganannya',
        description: 'Kenali katarak: gejala awal seperti pandangan berkabut dan silau, faktor risiko, kapan perlu operasi, prosesnya, dan perawatan setelahnya.',
        date: D, category: C, tags: ['katarak', 'gejala katarak', 'operasi katarak', 'kesehatan mata', 'lansia'], cta: 'lensara',
        lead: 'Katarak adalah salah satu penyebab utama kebutaan di dunia, termasuk di Indonesia, padahal termasuk kondisi yang paling bisa ditangani. Banyak orang tua menganggap pandangan yang makin berkabut sebagai bagian wajar dari penuaan dan menunda pemeriksaan. Artikel ini membantu mengenali gejalanya dan memahami penanganannya.',
        body: [
            { h2: 'Apa itu katarak?' },
            `Di dalam mata ada <b>lensa alami</b> yang jernih, bertugas memfokuskan cahaya ke retina. Katarak terjadi ketika lensa ini menjadi <b>keruh</b>, sehingga penglihatan tampak berkabut, seperti melihat melalui kaca jendela yang berembun. Menurut WHO, katarak termasuk penyebab utama gangguan penglihatan dan kebutaan secara global.`,
            { svg: 'versus', label: 'Lensa normal vs katarak', left: { title: 'Lensa normal', items: ['Jernih', 'Cahaya fokus tajam di retina', 'Warna terlihat cerah'] }, right: { title: 'Katarak', items: ['Keruh', 'Cahaya terhambur', 'Pandangan berkabut, warna pudar'] } },

            { h2: 'Gejala yang perlu diwaspadai' },
            { w: 'checklist', title: 'Gejala katarak', desc: 'Centang yang dialami Anda atau orang tua Anda.', items: ['Pandangan berkabut atau seperti tertutup asap.', 'Silau berlebihan, terutama lampu kendaraan di malam hari.', 'Lingkaran cahaya (halo) di sekitar lampu.', 'Warna terlihat pudar atau kekuningan.', 'Butuh cahaya lebih terang untuk membaca.', 'Ukuran kacamata sering berubah dalam waktu singkat.', 'Penglihatan ganda pada satu mata.'] },
            { callout: 'Katarak biasanya berkembang perlahan selama bertahun-tahun, sehingga penderitanya sering tidak menyadari seberapa banyak penglihatannya berkurang. Keluarga sering lebih dulu memperhatikan, misalnya orang tua mulai sering tersandung atau kesulitan mengenali wajah.', kind: 'info', title: 'Datang perlahan' },

            { h2: 'Faktor risiko' },
            { table: { head: ['Faktor', 'Keterangan'], rows: [
                ['Usia', 'Penyebab paling umum; risiko meningkat seiring bertambah usia'],
                ['Diabetes', 'Meningkatkan risiko dan bisa mempercepat katarak'],
                ['Merokok', 'Berkaitan dengan risiko katarak yang lebih tinggi'],
                ['Paparan sinar UV jangka panjang', 'Kacamata hitam UV400 dan topi membantu melindungi'],
                ['Pemakaian obat steroid jangka panjang', 'Konsultasikan dengan dokter'],
                ['Cedera mata', 'Dapat memicu katarak di usia berapa pun'],
                ['Bawaan lahir', 'Katarak kongenital pada bayi, perlu penanganan segera'],
            ] } },

            { h2: 'Penanganan: operasi adalah solusi efektif' },
            `Pada tahap awal, kacamata baru atau pencahayaan lebih terang bisa membantu sementara. Namun tidak ada obat tetes atau makanan yang terbukti menjernihkan lensa yang sudah keruh. Bila katarak mulai mengganggu kegiatan sehari-hari, <b>operasi katarak</b> adalah penanganan yang efektif: lensa keruh diangkat dan diganti dengan <b>lensa tanam buatan</b> (intraocular lens, IOL).`,
            { svg: 'flow', label: 'Alur operasi katarak secara umum', steps: [{ t: 'Pemeriksaan', d: 'ukur mata, pilih lensa tanam' }, { t: 'Bius lokal', d: 'umumnya tetes atau suntikan' }, { t: 'Lensa keruh diangkat', d: 'sering dengan fakoemulsifikasi' }, { t: 'Lensa tanam dipasang', d: 'lewat sayatan kecil' }, { t: 'Pemulihan', d: 'tetes mata dan kontrol' }], caption: 'Detail prosedur berbeda tiap pasien dan rumah sakit.' },
            { callout: 'Di Indonesia, operasi katarak dapat ditanggung program JKN sesuai ketentuan dan prosedur rujukan yang berlaku. Tanyakan ke fasilitas kesehatan tingkat pertama Anda.', kind: 'good', title: 'Soal biaya' },

            { h2: 'Setelah operasi' },
            { ul: [
                'Pakai tetes mata sesuai jadwal dari dokter.',
                'Hindari mengucek mata dan melindungi mata dari air kotor dan debu sesuai saran dokter.',
                'Datang kontrol sesuai jadwal.',
                'Segera hubungi dokter bila nyeri hebat, penglihatan menurun mendadak, atau mata sangat merah.',
                'Kacamata baru (misalnya untuk membaca) biasanya diresepkan setelah mata stabil.',
            ] },
        ],
        faq: [
            ['Apa gejala awal katarak?', 'Pandangan berkabut, silau berlebihan terutama malam hari, warna tampak pudar, dan sering perlu mengganti ukuran kacamata.'],
            ['Apakah katarak bisa sembuh tanpa operasi?', 'Tidak ada obat atau makanan yang terbukti menjernihkan lensa yang keruh. Operasi adalah penanganan yang efektif saat katarak mengganggu aktivitas.'],
            ['Apakah operasi katarak berbahaya?', 'Operasi katarak termasuk prosedur yang umum dan umumnya berhasil baik, tetapi seperti semua operasi ada risiko. Diskusikan dengan dokter mata.'],
            ['Bagaimana mencegah katarak?', 'Tidak semua bisa dicegah, tetapi melindungi mata dari UV, tidak merokok, mengendalikan diabetes, dan periksa mata rutin membantu.'],
        ],
        sources: [
            ['WHO: Blindness and vision impairment (fact sheet)', 'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment'],
            ['WHO: World report on vision (2019)', 'https://www.who.int/publications/i/item/9789241516570'],
            ['Kacamata hitam UV400 (artikel terkait)', 'https://muchson.web.id/artikel/kacamata-hitam-uv400-penting-untuk-mata/'],
            ['Tanda bahaya mata yang tidak boleh ditunda (artikel terkait)', 'https://muchson.web.id/artikel/tanda-bahaya-mata-yang-tidak-boleh-ditunda/'],
        ],
    },

    {
        slug: 'mata-juling-pada-anak-penyebab-dan-penanganan',
        title: 'Mata Juling pada Anak: Kenali Sejak Dini dan Tangani Tepat',
        description: 'Mata juling pada anak: tanda yang perlu diwaspadai, kaitannya dengan mata malas, kenapa penanganan dini penting, dan pilihan terapinya.',
        date: D, category: C, tags: ['mata juling anak', 'strabismus', 'mata malas', 'ambliopia', 'kesehatan mata anak'], cta: 'lensara',
        lead: 'Mata anak yang tampak tidak sejajar, satu melihat lurus dan satu melirik ke dalam atau ke luar, sering dianggap akan hilang sendiri seiring bertambah usia. Pada sebagian bayi yang sangat muda, sesekali tidak sejajar memang bisa normal. Tetapi juling yang menetap perlu diperiksa, karena bisa memicu mata malas yang sulit diperbaiki bila terlambat.',
        body: [
            { h2: 'Apa itu juling (strabismus)?' },
            `<b>Strabismus</b> adalah kondisi ketika kedua mata tidak menatap ke arah yang sama. Satu mata bisa mengarah ke dalam (esotropia), ke luar (eksotropia), ke atas, atau ke bawah. Juling bisa terjadi terus-menerus atau hanya sesekali, misalnya saat anak lelah atau melamun.`,
            { table: { head: ['Jenis', 'Arah mata yang menyimpang'], rows: [
                ['Esotropia', 'Ke arah dalam (ke hidung)'],
                ['Eksotropia', 'Ke arah luar'],
                ['Hipertropia', 'Ke atas'],
                ['Hipotropia', 'Ke bawah'],
            ] } },

            { h2: 'Kaitannya dengan mata malas (ambliopia)' },
            `Otak anak masih belajar melihat. Bila kedua mata mengirim gambar yang berbeda karena tidak sejajar, otak bisa "mengabaikan" gambar dari mata yang menyimpang. Lama-kelamaan, penglihatan mata itu tidak berkembang optimal, disebut <b>ambliopia</b> atau mata malas. National Eye Institute di Amerika Serikat mencatat bahwa strabismus dan ambliopia bisa menjadi permanen bila tidak ditangani pada masa kanak-kanak.`,
            { svg: 'flow', label: 'Bagaimana juling bisa menyebabkan mata malas', steps: [{ t: 'Mata tidak sejajar', d: 'dua gambar berbeda' }, { t: 'Otak bingung', d: 'penglihatan ganda' }, { t: 'Otak mengabaikan', d: 'gambar dari satu mata' }, { t: 'Mata malas', d: 'penglihatan tidak berkembang' }] },
            { callout: 'Masa terbaik untuk menangani ambliopia adalah ketika anak masih kecil, saat sistem penglihatan masih berkembang. Semakin dini ditangani, umumnya semakin baik hasilnya.', kind: 'warn', title: 'Waktu sangat menentukan' },

            { h2: 'Tanda yang perlu diwaspadai' },
            { w: 'checklist', title: 'Tanda pada anak', desc: 'Centang yang Anda perhatikan.', items: ['Satu mata tampak melirik ke dalam, luar, atas, atau bawah.', 'Juling tetap terlihat setelah bayi berusia beberapa bulan.', 'Anak sering memiringkan atau memutar kepala saat melihat.', 'Anak menutup atau menyipitkan satu mata di bawah sinar terang.', 'Anak sering menabrak benda atau kesulitan memperkirakan jarak.', 'Di foto dengan lampu kilat, pantulan cahaya di kedua pupil tidak simetris.', 'Ada riwayat juling atau mata malas di keluarga.'] },
            `Bayi baru lahir kadang tampak sesekali tidak sejajar pada bulan-bulan awal. Namun bila juling menetap atau terus terlihat setelah sekitar usia 4 bulan, atau muncul tiba-tiba pada anak yang lebih besar, segera periksakan ke dokter spesialis mata.`,

            { h2: 'Pilihan penanganan' },
            { table: { head: ['Penanganan', 'Untuk apa'], rows: [
                ['Kacamata', 'Mengoreksi minus, plus, atau silinder; pada sebagian jenis juling, kacamata saja bisa meluruskan mata'],
                ['Penutup mata (patching)', 'Menutup mata yang lebih baik agar mata yang lemah terlatih'],
                ['Tetes mata atropin', 'Alternatif patching pada kasus tertentu, membuat mata yang baik sementara buram'],
                ['Latihan ortoptik', 'Pada jenis tertentu, untuk melatih koordinasi kedua mata'],
                ['Operasi otot mata', 'Menyejajarkan posisi mata bila terapi lain tidak cukup'],
            ] } },
            `Penanganan selalu disesuaikan dengan jenis juling, usia anak, dan ada tidaknya ambliopia. Kepatuhan memakai kacamata atau penutup mata di rumah sangat menentukan hasil.`,

            { h2: 'Tips agar anak mau memakai kacamata atau penutup mata' },
            { ul: [
                'Pilih frame yang nyaman dan ringan, biarkan anak ikut memilih warna.',
                'Jadikan kebiasaan rutin, misalnya dipakai saat menggambar atau bermain.',
                'Puji usahanya, bukan hanya hasilnya.',
                'Beri tahu guru agar anak didukung di sekolah.',
                'Hubungi dokter bila anak terus menolak atau mengeluh tidak nyaman.',
            ] },
        ],
        faq: [
            ['Apakah mata juling pada anak bisa hilang sendiri?', 'Pada bayi sangat muda, sesekali tidak sejajar bisa normal. Juling yang menetap atau setelah sekitar usia 4 bulan perlu diperiksa, karena jarang hilang sendiri dan bisa menyebabkan mata malas.'],
            ['Apa hubungan juling dan mata malas?', 'Juling bisa membuat otak mengabaikan gambar dari mata yang menyimpang, sehingga penglihatan mata itu tidak berkembang optimal (ambliopia).'],
            ['Apakah juling harus dioperasi?', 'Tidak selalu. Sebagian bisa ditangani dengan kacamata, penutup mata, atau terapi lain. Operasi dilakukan bila diperlukan.'],
            ['Kapan anak perlu periksa mata pertama kali?', 'Bila ada tanda juling atau keluhan penglihatan, segera periksakan. Pemeriksaan penglihatan sebelum masuk sekolah juga dianjurkan.'],
        ],
        sources: [
            ['National Eye Institute: data studi mata anak terbesar (strabismus dan ambliopia)', 'https://www.nei.nih.gov/about/news-and-events/news/national-institutes-health-releases-data-largest-pediatric-eye-study'],
            ['WHO: World report on vision (2019)', 'https://www.who.int/publications/i/item/9789241516570'],
            ['Memilih kacamata anak yang aman dan nyaman (artikel terkait)', 'https://muchson.web.id/artikel/memilih-kacamata-anak-yang-aman-dan-nyaman/'],
        ],
    },
];
