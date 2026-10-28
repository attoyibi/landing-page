import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Pendidikan Anak';

export default [
    {
        slug: 'screen-time-anak-berapa-jam-yang-wajar',
        title: 'Screen Time Anak: Berapa Jam yang Wajar Menurut Usia?',
        description: 'Batas screen time anak menurut WHO, AAP, dan dokter anak, dijelaskan per usia. Lengkap dengan kalkulator waktu harian, tanda berlebihan, dan cara membuat aturan keluarga.',
        date: D, category: C, tags: ['screen time anak', 'batas gadget anak', 'waktu layar anak', 'pola asuh digital', 'kesehatan anak'], cta: 'pixelkode',
        ctaNote: 'Kalau sebagian jatah layar anak ingin diisi kegiatan mencipta, kelas coding seperti PixelKode dirancang 45-60 menit per pelajaran, cukup 2 kali seminggu.',
        lead: '"Berapa lama anak boleh main HP?" adalah salah satu pertanyaan yang paling sering diajukan orang tua. Jawabannya tidak hanya soal jam, tetapi juga usia, jenis kegiatan, dan apa yang tergeser oleh layar. Artikel ini merangkum rekomendasi organisasi kesehatan, lalu membantu Anda menyusun aturan yang realistis untuk keluarga.',
        body: [
            { h2: 'Rekomendasi resmi per usia' },
            `Dua rujukan yang paling sering dipakai adalah pedoman <b>WHO</b> (2019) untuk anak di bawah 5 tahun, dan kebijakan <b>American Academy of Pediatrics (AAP)</b>. Dokter anak di Indonesia, termasuk dari Ikatan Dokter Anak Indonesia (IDAI), umumnya menyampaikan anjuran yang sejalan.`,
            { table: { head: ['Usia', 'Rekomendasi', 'Sumber'], rows: [
                ['Di bawah 1 tahun', 'Tidak dianjurkan screen time', 'WHO 2019'],
                ['1-2 tahun', 'Sebaiknya tidak ada screen time pasif; panggilan video dengan keluarga boleh. Jika dikenalkan di usia 18-24 bulan, pilih konten berkualitas dan tonton bersama', 'WHO 2019, AAP 2016'],
                ['2-5 tahun', 'Maksimal 1 jam per hari, lebih sedikit lebih baik, konten berkualitas dan ditemani', 'WHO 2019, AAP 2016'],
                ['6 tahun ke atas', 'Tidak ada angka tunggal. Batas yang konsisten, dan layar tidak boleh menggeser tidur, aktivitas fisik, dan waktu keluarga', 'AAP 2016'],
            ] } },
            { callout: 'Untuk anak usia sekolah, AAP sengaja tidak memberi angka jam tunggal. Yang dinilai adalah apakah kebutuhan dasar terpenuhi dulu: tidur cukup, bergerak, belajar, dan berinteraksi dengan keluarga. Layar mengisi sisa waktu, bukan sebaliknya.', kind: 'info', title: 'Kenapa anak SD tidak punya angka pasti?' },

            { h2: 'Apa kata penelitian?' },
            `Sebuah studi kohort di Kanada oleh Madigan dan rekan (2019, <i>JAMA Pediatrics</i>) mengikuti hampir 2.500 anak. Anak dengan screen time lebih tinggi pada usia 2 dan 3 tahun cenderung mendapat skor lebih rendah pada tes skrining perkembangan setahun atau dua tahun kemudian. Studi seperti ini menunjukkan <b>hubungan</b>, belum tentu sebab-akibat, tetapi polanya konsisten dengan anjuran membatasi layar di usia dini.`,
            `Untuk anak yang lebih besar, penelitian menunjukkan masalah utama sering bukan layarnya, melainkan <b>apa yang digantikan</b>: tidur yang terpotong, kurang gerak, dan berkurangnya interaksi tatap muka. Itulah kenapa pendekatan "isi kebutuhan dasar dulu" lebih berguna daripada sekadar menghitung menit.`,

            { h2: 'Hitung sisa waktu anak' },
            `Kalkulator ini meniru ide di balik Family Media Plan dari AAP: mulai dari 24 jam, kurangi kebutuhan pokok, lalu lihat berapa sisa waktu yang realistis. Angka awal adalah contoh anak SD.`,
            { w: 'calc', title: 'Kalkulator waktu harian anak', desc: 'Sesuaikan dengan jadwal anak Anda pada hari sekolah.', inputs: [
                { id: 'tidur', label: 'Tidur (jam)', value: 10, min: 8, max: 13, step: 0.5 },
                { id: 'sekolah', label: 'Sekolah dan perjalanan (jam)', value: 7, min: 0, max: 10, step: 0.5 },
                { id: 'makan', label: 'Makan, mandi, ibadah, persiapan (jam)', value: 2.5, min: 1, max: 5, step: 0.5 },
                { id: 'gerak', label: 'Main aktif atau olahraga (jam)', value: 1, min: 0, max: 4, step: 0.5 },
                { id: 'belajar', label: 'PR dan belajar (jam)', value: 1, min: 0, max: 4, step: 0.5 },
                { id: 'keluarga', label: 'Waktu keluarga tanpa layar (jam)', value: 1, min: 0, max: 4, step: 0.5 },
            ], outputs: [
                { label: 'Sisa waktu bebas', expr: '24 - tidur - sekolah - makan - gerak - belajar - keluarga', fmt: 'num', unit: 'jam', big: true },
                { label: 'Jika separuh waktu bebas untuk layar', expr: 'Math.max(0, (24 - tidur - sekolah - makan - gerak - belajar - keluarga) / 2 * 60)', fmt: 'int', unit: 'menit' },
                { label: 'Catatan', expr: "(24 - tidur - sekolah - makan - gerak - belajar - keluarga) < 0 ? 'Jadwal terlalu padat. Kurangi kegiatan, jangan tidurnya.' : 'Sisa waktu bisa dibagi untuk main bebas, membaca, hobi, dan layar.'", fmt: 'text' },
            ] },

            { h2: 'Tidak semua waktu layar sama' },
            `Satu jam menonton video pendek berbeda dengan satu jam membuat animasi atau panggilan video dengan nenek. Gunakan pembagian sederhana ini saat membuat aturan:`,
            { svg: 'scale', label: 'Spektrum kualitas waktu layar', stops: [[5, 'Mencipta: coding, menggambar'], [30, 'Belajar aktif'], [55, 'Video call keluarga'], [75, 'Main game'], [95, 'Menggulir video pendek tanpa henti']], caption: 'Hijau lebih bernilai, merah perlu paling dibatasi. Ini panduan kasar, bukan aturan mutlak.' },

            { h2: 'Tanda waktu layar sudah berlebihan' },
            { w: 'checklist', title: 'Periksa tanda-tanda ini', desc: 'Centang yang terjadi lebih dari sekali dalam seminggu terakhir. Ini bukan diagnosis, hanya bahan refleksi.', items: ['Tidur mundur atau sulit bangun karena gawai.', 'Marah besar saat waktu layar dihentikan.', 'Kehilangan minat pada mainan, teman, atau olahraga yang dulu disukai.', 'PR atau tugas sering terbengkalai.', 'Menyembunyikan penggunaan gawai.', 'Sering mengeluh mata lelah atau sakit kepala.', 'Makan sambil menatap layar hampir setiap waktu makan.'] },
            `Jika banyak yang tercentang, itu sinyal untuk menata ulang aturan, bukan alasan untuk panik. Jika masalahnya berat dan berlangsung lama, misalnya mengganggu sekolah dan tidur selama berbulan-bulan, konsultasikan dengan dokter anak atau psikolog.`,

            { h2: 'Membuat aturan keluarga yang berhasil' },
            { ol: [
                '<b>Libatkan anak.</b> Aturan yang ikut disusun anak lebih mudah dipatuhi.',
                '<b>Zona bebas layar.</b> Misalnya meja makan dan kamar tidur.',
                '<b>Jam malam gawai.</b> Gawai diisi daya di luar kamar, satu jam sebelum tidur.',
                '<b>Prioritas kegiatan mencipta.</b> Waktu layar untuk membuat sesuatu didahulukan daripada menonton.',
                '<b>Orang tua ikut aturan.</b> Anak meniru, bukan mendengar.',
                '<b>Evaluasi rutin.</b> Tinjau aturan setiap beberapa bulan atau setelah liburan.',
            ] },
            { w: 'builder', title: 'Kesepakatan layar keluarga', desc: 'Isi bersama anak, cetak, lalu tempel di kulkas.', fields: [
                { id: 'hari', label: 'Waktu layar hari sekolah', placeholder: 'mis. 1 jam setelah PR selesai' },
                { id: 'libur', label: 'Waktu layar hari libur', placeholder: 'mis. 2 jam, dibagi pagi dan sore' },
                { id: 'zona', label: 'Zona bebas layar', placeholder: 'mis. meja makan, kamar tidur' },
                { id: 'malam', label: 'Jam malam gawai', placeholder: 'mis. 20.00, gawai diisi daya di ruang tengah' },
                { id: 'kreatif', label: 'Kegiatan layar yang didahulukan', placeholder: 'mis. coding, menggambar, membaca e-book' },
            ], template: 'KESEPAKATAN LAYAR KELUARGA KAMI\n- Hari sekolah: {hari}\n- Hari libur: {libur}\n- Zona bebas layar: {zona}\n- Jam malam gawai: {malam}\n- Didahulukan: {kreatif}\n\nDitandatangani bersama oleh seluruh anggota keluarga.' },
            `Waktu layar yang paling bernilai adalah ketika anak menjadi pencipta. Jika Anda ingin mengisi sebagian jatah layar dengan kegiatan seperti itu, coba <a href="${pk('screen-time-anak-berapa-jam-yang-wajar')}" target="_blank" rel="noopener">pelajaran coding gratis di PixelKode</a> yang dirancang sekitar 45 menit per pelajaran.`,
        ],
        faq: [
            ['Berapa jam screen time anak usia 2-5 tahun?', 'WHO dan AAP menganjurkan maksimal 1 jam per hari dengan konten berkualitas dan ditemani orang tua. Lebih sedikit lebih baik.'],
            ['Bolehkah bayi menonton video?', 'WHO tidak menganjurkan screen time untuk bayi di bawah 1 tahun. Panggilan video dengan keluarga umumnya dianggap pengecualian.'],
            ['Berapa screen time yang wajar untuk anak SD?', 'Tidak ada angka tunggal. Pastikan tidur, gerak, belajar, dan waktu keluarga terpenuhi dulu, lalu tetapkan batas yang konsisten.'],
            ['Apakah belajar online dihitung screen time?', 'Ya, tetapi kualitasnya berbeda. Bedakan waktu layar untuk sekolah, mencipta, dan hiburan saat membuat aturan.'],
        ],
        sources: [
            ['WHO (2019). Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age', 'https://www.who.int/publications/i/item/9789241550536'],
            ['AAP Council on Communications and Media (2016). Media and Young Minds. Pediatrics', 'https://doi.org/10.1542/peds.2016-2591'],
            ['AAP (2016). Media Use in School-Aged Children and Adolescents. Pediatrics', 'https://doi.org/10.1542/peds.2016-2592'],
            ['Madigan, S. dkk. (2019). Association between screen time and children\'s performance on a developmental screening test. JAMA Pediatrics', 'https://doi.org/10.1001/jamapediatrics.2018.5056'],
            ['AAP Family Media Plan (HealthyChildren.org)', 'https://www.healthychildren.org/MediaUsePlan'],
        ],
    },

    {
        slug: 'screen-time-aktif-vs-pasif-untuk-anak',
        title: 'Screen Time Aktif vs Pasif: Tidak Semua Waktu Layar Sama',
        description: 'Bedanya screen time aktif dan pasif pada anak, contoh masing-masing, cara menilai kualitas aplikasi atau tontonan, dan strategi menggeser waktu layar menjadi lebih bermakna.',
        date: D, category: C, tags: ['screen time aktif', 'screen time pasif', 'aplikasi edukasi anak', 'pola asuh digital', 'waktu layar'], cta: 'pixelkode',
        ctaNote: 'Coding adalah contoh screen time aktif yang paling jelas: anak merancang, mencoba, salah, dan memperbaiki. Dua pelajaran pertama PixelKode bisa dicoba gratis tanpa daftar.',
        lead: 'Dua anak sama-sama 1 jam di depan tablet. Yang satu menggulir video pendek tanpa henti, yang lain membuat animasi tentang kucingnya. Angka jamnya sama, tetapi pengalamannya sangat berbeda. Memahami beda waktu layar aktif dan pasif membantu orang tua membuat aturan yang lebih adil dan efektif.',
        body: [
            { h2: 'Definisi sederhana' },
            { svg: 'versus', label: 'Screen time pasif vs aktif', left: { title: 'Pasif', items: ['Anak hanya menerima', 'Menonton, menggulir', 'Minim berpikir dan memutuskan', 'Sering tanpa akhir yang jelas', 'Contoh: video pendek otomatis'] }, right: { title: 'Aktif', items: ['Anak berpikir dan berbuat', 'Membuat, memecahkan, berbicara', 'Ada keputusan dan tujuan', 'Punya titik selesai', 'Contoh: coding, menggambar, video call'] } },
            `Pembagian ini tidak hitam-putih. Menonton film dokumenter bersama orang tua lalu mendiskusikannya bisa sangat bernilai. Sebaliknya, game "edukatif" yang hanya meminta anak mengetuk layar demi hadiah bisa sangat pasif. Yang dinilai adalah <b>apa yang dilakukan otak anak</b>, bukan label aplikasinya.`,

            { h2: 'Empat pertanyaan untuk menilai kualitas' },
            `Kathy Hirsh-Pasek dan rekan-rekannya (2015) dalam jurnal <i>Psychological Science in the Public Interest</i> mengusulkan empat pilar pembelajaran yang bisa dipakai menilai aplikasi pendidikan. Saya sederhanakan menjadi empat pertanyaan:`,
            { ol: [
                '<b>Apakah anak aktif berpikir?</b> Bukan sekadar mengetuk, tetapi memutuskan, merencanakan, menebak.',
                '<b>Apakah anak terlibat tanpa terganggu?</b> Aplikasi yang penuh iklan, notifikasi, dan efek berlebihan memecah perhatian.',
                '<b>Apakah bermakna?</b> Isinya terhubung dengan kehidupan dan pengetahuan anak.',
                '<b>Apakah ada interaksi sosial?</b> Dengan orang tua, teman, atau guru, misalnya membahas atau memamerkan hasil.',
            ] },
            { w: 'choose', title: 'Nilai satu aplikasi atau tontonan anak', desc: 'Pikirkan aplikasi yang paling sering dipakai anak, lalu jawab.', questions: [
                { q: 'Selama memakainya, anak lebih banyak ...', options: [{ t: 'Menonton atau menggulir', add: { pasif: 3 } }, { t: 'Mengetuk untuk hadiah atau koin', add: { pasif: 1, sedang: 2 } }, { t: 'Memutuskan, merancang, atau menyelesaikan masalah', add: { aktif: 3 } }] },
                { q: 'Seberapa banyak iklan, notifikasi, atau ajakan membeli?', options: [{ t: 'Banyak', add: { pasif: 2 } }, { t: 'Sedikit', add: { sedang: 2 } }, { t: 'Tidak ada', add: { aktif: 2 } }] },
                { q: 'Apakah ada titik selesai yang jelas?', options: [{ t: 'Tidak, terus berlanjut otomatis', add: { pasif: 3 } }, { t: 'Ada, setelah satu level atau satu proyek', add: { aktif: 2, sedang: 1 } }] },
                { q: 'Setelahnya, apakah anak bercerita atau memamerkan sesuatu?', options: [{ t: 'Jarang', add: { pasif: 1, sedang: 1 } }, { t: 'Sering', add: { aktif: 2 } }] },
            ], results: {
                pasif: { title: 'Cenderung pasif', text: 'Tidak harus dilarang, tetapi batasi durasinya dan dampingi. Pertimbangkan menggantinya sebagian dengan kegiatan yang lebih aktif.' },
                sedang: { title: 'Di tengah-tengah', text: 'Ada unsur aktif, tetapi juga banyak hadiah atau gangguan. Dampingi sesekali dan ajak anak membicarakan apa yang ia pelajari.' },
                aktif: { title: 'Cenderung aktif', text: 'Ini jenis waktu layar yang bernilai. Tetap beri batas, tetapi bisa diprioritaskan dibanding tontonan pasif.' },
            } },

            { h2: 'Contoh waktu layar aktif yang bermakna' },
            { table: { head: ['Kegiatan', 'Yang dilatih', 'Ide memulai'], rows: [
                ['Coding visual', 'Logika, kreativitas, ketekunan', 'Buat kartu ucapan beranimasi di Scratch'],
                ['Menggambar digital', 'Kreativitas, motorik halus', 'Gambar tokoh, lalu animasikan'],
                ['Membuat video atau foto cerita', 'Bercerita, perencanaan', 'Video stop-motion dengan mainan'],
                ['Video call keluarga', 'Bahasa, hubungan sosial', 'Jadwal rutin dengan kakek-nenek'],
                ['E-book interaktif dibaca bersama', 'Literasi', 'Bacakan, lalu tanyakan prediksi cerita'],
                ['Mencari jawaban rasa penasaran', 'Literasi informasi', '"Kenapa langit biru?" dicari bersama'],
            ] } },

            { h2: 'Menggeser, bukan hanya mengurangi' },
            `Melarang tanpa alternatif biasanya memicu konflik. Strategi yang lebih berhasil adalah <b>menggeser</b> komposisinya sedikit demi sedikit. Misalnya, dari 90 menit menonton per hari menjadi 60 menit menonton dan 30 menit membuat sesuatu. Setelah anak menemukan kegiatan kreatif yang ia sukai, pergeseran berikutnya lebih mudah.`,
            { w: 'calc', title: 'Rencana pergeseran waktu layar', desc: 'Lihat perubahan komposisi waktu layar mingguan anak.', inputs: [
                { id: 'total', label: 'Total waktu layar per hari (menit)', value: 90, min: 30, max: 240, step: 10 },
                { id: 'aktif', label: 'Persentase untuk kegiatan aktif', value: 30, min: 0, max: 100, step: 5 },
            ], outputs: [
                { label: 'Menit aktif per minggu', expr: 'total * aktif / 100 * 7', fmt: 'int', unit: 'menit', big: true },
                { label: 'Menit pasif per minggu', expr: 'total * (100 - aktif) / 100 * 7', fmt: 'int', unit: 'menit' },
                { label: 'Setara pelajaran coding 45 menit', expr: 'Math.floor(total * aktif / 100 * 7 / 45)', fmt: 'int', unit: 'pelajaran per minggu' },
            ] },
            { callout: 'Waktu layar aktif tetap waktu layar. Mata tetap butuh istirahat (misalnya aturan 20-20-20), tubuh tetap butuh bergerak, dan tidur tetap prioritas.', kind: 'warn', title: 'Jangan lupa' },

            { h2: 'Peran orang tua: co-viewing dan co-creating' },
            `Menonton bersama (<i>co-viewing</i>) dan membuat bersama (<i>co-creating</i>) mengubah waktu layar pasif menjadi lebih aktif. Pertanyaan sederhana seperti "menurutmu kenapa tokohnya melakukan itu?" atau "bagaimana kalau kita buat versi kita sendiri?" sudah cukup. Untuk kegiatan membuat yang terstruktur, <a href="${pk('screen-time-aktif-vs-pasif-untuk-anak')}" target="_blank" rel="noopener">pelajaran coding PixelKode</a> bisa dicoba bersama anak dalam satu sore.`,
        ],
        faq: [
            ['Apa itu screen time aktif?', 'Waktu layar ketika anak berpikir, memutuskan, dan membuat sesuatu, seperti coding, menggambar digital, atau video call keluarga.'],
            ['Apakah screen time aktif boleh tanpa batas?', 'Tidak. Tetap perlu batas karena tidur, gerak, dan istirahat mata tetap penting.'],
            ['Bagaimana menilai aplikasi edukasi?', 'Tanyakan apakah anak aktif berpikir, tidak terganggu iklan, isinya bermakna, dan ada interaksi sosial.'],
            ['Apakah menonton selalu buruk?', 'Tidak. Menonton konten berkualitas bersama orang tua lalu membahasnya bisa bernilai.'],
        ],
        sources: [
            ['Hirsh-Pasek, K. dkk. (2015). Putting education in "educational" apps. Psychological Science in the Public Interest', 'https://doi.org/10.1177/1529100615569721'],
            ['AAP (2016). Media and Young Minds', 'https://doi.org/10.1542/peds.2016-2591'],
            ['AAP Family Media Plan', 'https://www.healthychildren.org/MediaUsePlan'],
            ['WHO (2019). Pedoman aktivitas fisik, perilaku sedenter, dan tidur anak di bawah 5 tahun', 'https://www.who.int/publications/i/item/9789241550536'],
        ],
    },

    {
        slug: 'anak-kecanduan-gadget-tanda-dan-cara-mengatasi',
        title: 'Anak Kecanduan Gadget? Tanda, Penyebab, dan Cara Mengatasi',
        description: 'Kenali beda anak yang sering main gadget dengan kecanduan, tanda yang perlu diwaspadai, penyebabnya, dan langkah bertahap mengurangi gadget tanpa drama, plus kapan perlu ke ahli.',
        date: D, category: C, tags: ['anak kecanduan gadget', 'kecanduan HP anak', 'gaming disorder', 'pola asuh digital', 'screen time anak'], cta: 'pixelkode',
        ctaNote: 'Salah satu cara mengurangi tontonan pasif adalah memberi anak kegiatan layar yang punya titik selesai. Setiap pelajaran PixelKode selesai dalam satu sesi, ditutup kuis dan cerita singkat ke guru.',
        lead: 'Anak menangis keras saat HP diambil, makan harus sambil menonton, dan tidak tertarik bermain di luar. Banyak orang tua menyebutnya kecanduan gadget. Kadang memang perlu perhatian serius, kadang yang terjadi adalah kebiasaan yang bisa diubah. Artikel ini membantu membedakannya, lalu memberi langkah bertahap yang realistis.',
        body: [
            { h2: 'Kebiasaan berat vs gangguan' },
            `Organisasi Kesehatan Dunia (WHO) memasukkan <b>gaming disorder</b> dalam klasifikasi penyakit ICD-11. Kriterianya ketat: kendali atas bermain game melemah, game makin diprioritaskan di atas kegiatan dan minat lain, dan terus berlanjut meski menimbulkan akibat buruk. Pola ini harus cukup berat sampai mengganggu kehidupan pribadi, keluarga, sosial, atau sekolah, dan biasanya tampak setidaknya selama 12 bulan. WHO juga menegaskan bahwa gangguan ini hanya dialami sebagian kecil orang yang bermain game.`,
            { callout: 'Sebagian besar anak yang "susah lepas dari HP" mengalami kebiasaan berat, bukan gangguan klinis. Kabar baiknya, kebiasaan bisa diubah dengan struktur dan konsistensi. Yang klinis perlu bantuan profesional.', kind: 'info', title: 'Kenapa perbedaan ini penting' },
            { table: { head: ['Kebiasaan berat', 'Perlu perhatian profesional'], rows: [
                ['Rewel saat waktu layar habis, tapi bisa ditenangkan', 'Marah ekstrem atau agresif berulang setiap dibatasi'],
                ['Masih mau bermain, sekolah, dan berteman', 'Menarik diri dari teman, keluarga, dan kegiatan lain'],
                ['Tidur kadang mundur', 'Pola tidur kacau terus-menerus'],
                ['Nilai sekolah masih stabil', 'Prestasi menurun tajam, sering bolos atau menolak sekolah'],
                ['Berlangsung beberapa minggu', 'Berlangsung berbulan-bulan dan makin parah'],
            ] } },

            { h2: 'Kenapa gadget begitu menarik bagi anak?' },
            { ul: [
                '<b>Dirancang untuk menahan perhatian.</b> Video yang berputar otomatis, gulir tanpa akhir, dan hadiah acak membuat sulit berhenti, bahkan bagi orang dewasa.',
                '<b>Tidak ada titik selesai.</b> Buku punya halaman terakhir; banyak aplikasi tidak.',
                '<b>Pelarian dari rasa bosan atau cemas.</b> Gadget menjadi cara cepat mengatur emosi.',
                '<b>Kebutuhan sosial.</b> Teman-temannya ada di game atau grup yang sama.',
                '<b>Contoh di rumah.</b> Anak meniru kebiasaan orang dewasa di sekitarnya.',
            ] },

            { h2: 'Langkah bertahap mengurangi gadget' },
            { svg: 'timeline', label: 'Rencana 4 minggu', events: [['Minggu 1', 'Amati dan catat', 'Kapan, berapa lama, untuk apa'], ['Minggu 2', 'Sepakati aturan', 'Zona dan jam bebas gawai'], ['Minggu 3', 'Siapkan pengganti', 'Kegiatan seru tanpa layar dan layar kreatif'], ['Minggu 4', 'Evaluasi bersama', 'Apa yang berhasil, apa yang diubah']] },
            { ol: [
                '<b>Amati tanpa menghakimi.</b> Catat seminggu: jam berapa, berapa lama, aplikasi apa, dan apa yang terjadi sebelumnya (bosan, lelah, sendirian?).',
                '<b>Mulai dari satu aturan.</b> Misalnya tidak ada gawai di meja makan. Konsisten seminggu, baru tambah aturan lain.',
                '<b>Beri peringatan sebelum berhenti.</b> "Lima menit lagi" membantu transisi. Pewaktu yang terlihat lebih adil daripada "sudah!" mendadak.',
                '<b>Siapkan pengganti yang menarik.</b> Kotak kegiatan berisi lego, buku komik, bahan prakarya, atau permainan papan.',
                '<b>Ubah jenis layar, tidak hanya durasinya.</b> Geser sebagian waktu layar ke kegiatan mencipta.',
                '<b>Jauhkan gawai dari kamar tidur di malam hari.</b> Ini salah satu aturan paling berdampak.',
                '<b>Jadi contoh.</b> Taruh HP Anda juga saat makan dan bermain bersama anak.',
            ] },
            { w: 'timer', title: 'Pewaktu transisi', desc: 'Dipakai sebagai peringatan sebelum waktu layar selesai. Anak bisa melihat waktunya berjalan.', phases: [{ label: 'Masih boleh bermain', sec: 300, hint: 'Selesaikan level atau videonya.' }, { label: 'Waktunya menyimpan dan menutup', sec: 60, hint: 'Simpan permainan, lalu taruh gawai di tempatnya.' }] },

            { h2: 'Kalimat yang membantu saat anak marah' },
            { table: { head: ['Daripada', 'Coba'], rows: [
                ['"Kamu ini kecanduan!"', '"Mama lihat susah sekali berhenti ya. Itu wajar, aplikasinya dibuat supaya kita betah."'],
                ['"Pokoknya tidak boleh!"', '"Kita sudah sepakat 1 jam. Besok boleh lagi sesuai jadwal."'],
                ['Mengambil HP tiba-tiba', '"Lima menit lagi ya, mama pasang pewaktunya."'],
                ['Mengancam hukuman besar', 'Konsekuensi kecil yang sudah disepakati dan dijalankan dengan tenang'],
            ] } },
            { callout: 'Kemarahan anak saat batas diterapkan biasanya mereda dalam beberapa hari jika aturannya konsisten. Yang membuatnya bertahan lama justru aturan yang kadang ditegakkan, kadang tidak.', kind: 'good', title: 'Konsistensi lebih penting dari ketegasan' },

            { h2: 'Kapan perlu bantuan profesional?' },
            { ul: [
                'Penggunaan gawai sudah mengganggu sekolah, tidur, dan hubungan selama berbulan-bulan.',
                'Anak menunjukkan kemarahan ekstrem, menyakiti diri, atau mengancam orang lain saat dibatasi.',
                'Ada tanda kecemasan, depresi, atau perundungan daring di balik penggunaannya.',
                'Upaya keluarga yang konsisten selama beberapa minggu tidak membawa perubahan.',
            ] },
            `Dokter anak, psikolog anak, atau layanan kesehatan jiwa di puskesmas dan rumah sakit bisa menjadi langkah pertama. Mencari bantuan bukan tanda gagal sebagai orang tua.`,

            { h2: 'Ganti konsumsi dengan kreasi' },
            `Salah satu pengganti yang efektif untuk anak yang sangat menyukai game adalah mengajaknya membuat game sendiri. Energi dan minatnya tetap tersalurkan, tetapi dalam bentuk yang melatih logika dan kesabaran. Anak bisa memulai dengan <a href="${pk('anak-kecanduan-gadget-tanda-dan-cara-mengatasi')}" target="_blank" rel="noopener">dua pelajaran coding gratis di PixelKode</a>, yang tiap pelajarannya punya awal dan akhir yang jelas.`,
        ],
        faq: [
            ['Apa tanda anak kecanduan gadget?', 'Sulit berhenti disertai kemarahan ekstrem, mengabaikan sekolah, tidur, teman, dan kegiatan lain, serta berlangsung lama meski menimbulkan masalah.'],
            ['Apakah kecanduan game termasuk penyakit?', 'WHO memasukkan gaming disorder dalam ICD-11 dengan kriteria ketat, biasanya terlihat setidaknya 12 bulan dan mengganggu fungsi sehari-hari.'],
            ['Bagaimana mengurangi gadget tanpa anak mengamuk?', 'Sepakati aturan bersama, beri peringatan sebelum berhenti, siapkan kegiatan pengganti, dan konsisten.'],
            ['Kapan harus ke psikolog?', 'Jika gangguan sudah berbulan-bulan, memengaruhi sekolah dan tidur, atau disertai tanda kecemasan, depresi, atau perilaku membahayakan.'],
        ],
        sources: [
            ['WHO: Addictive behaviours: Gaming disorder (tanya jawab)', 'https://www.who.int/news-room/q-a-detail/gaming-disorder'],
            ['WHO: Gaming disorder, ICD-11 FAQ', 'https://www.who.int/standards/classifications/frequently-asked-questions/gaming-disorder'],
            ['AAP (2016). Media Use in School-Aged Children and Adolescents', 'https://doi.org/10.1542/peds.2016-2592'],
            ['AAP Family Media Plan', 'https://www.healthychildren.org/MediaUsePlan'],
        ],
    },

    {
        slug: 'parental-control-family-link-screen-time-youtube',
        title: 'Parental Control: Family Link, Screen Time iPhone, dan YouTube',
        description: 'Panduan mengatur parental control di HP anak: Google Family Link untuk Android, Screen Time untuk iPhone dan iPad, YouTube Kids, SafeSearch, dan batasnya yang perlu dipahami.',
        date: D, category: C, tags: ['parental control', 'Google Family Link', 'Screen Time iPhone', 'YouTube Kids', 'keamanan anak online'], cta: 'pixelkode',
        ctaNote: 'Saat memilih aplikasi untuk anak, carilah yang tanpa iklan dan tanpa obrolan publik. Di PixelKode, komentar hanya ada di galeri kelas, pendek, dan bisa dihapus guru.',
        lead: 'Parental control membantu orang tua mengatur waktu layar, menyaring konten, dan menyetujui aplikasi yang diunduh anak. Fitur ini bukan pengganti pendampingan, tetapi jaring pengaman yang sangat berguna. Berikut cara mengaturnya di perangkat yang paling umum di rumah Indonesia.',
        body: [
            { h2: 'Apa yang bisa dan tidak bisa dilakukan parental control' },
            { svg: 'versus', label: 'Kemampuan parental control', left: { title: 'Bisa', items: ['Batas waktu harian', 'Jam tidur perangkat', 'Menyetujui unduhan aplikasi', 'Menyaring situs dan pencarian', 'Melihat laporan pemakaian'] }, right: { title: 'Tidak bisa', items: ['Menyaring 100% konten buruk', 'Mengajarkan anak menilai konten', 'Mencegah anak memakai perangkat teman', 'Mengganti percakapan orang tua-anak', 'Selalu tahan dari akal anak yang cerdik'] } },
            { callout: 'Beri tahu anak bahwa parental control dipasang dan kenapa. Pengawasan diam-diam yang ketahuan merusak kepercayaan, dan anak yang merasa dipercaya lebih mungkin bercerita saat menemui masalah di internet.', kind: 'info', title: 'Transparan dengan anak' },

            { h2: 'Android: Google Family Link' },
            `<b>Family Link</b> adalah aplikasi gratis dari Google untuk mengelola akun Google dan perangkat Android anak. Untuk anak di bawah usia minimum akun Google di negaranya, akun anak dibuat dan dikelola orang tua melalui Family Link.`,
            { ol: [
                'Pasang aplikasi <b>Google Family Link</b> di ponsel orang tua.',
                'Buat akun Google untuk anak atau tambahkan akun anak yang sudah ada ke grup keluarga.',
                'Masuk ke akun anak di ponsel anak, lalu ikuti petunjuk untuk menghubungkan pengawasan.',
                'Di aplikasi Family Link orang tua, pilih anak, lalu buka <b>Kontrol</b>.',
                'Atur <b>batas harian</b> dan <b>waktu istirahat</b> (jam tidur perangkat).',
                'Atur <b>persetujuan aplikasi</b> agar unduhan dari Play Store perlu izin Anda.',
                'Atur <b>filter konten</b> untuk Chrome dan pencarian Google.',
            ] },
            `Nama menu bisa berbeda sedikit tergantung versi Android dan aplikasi. Di ponsel anak, pengaturan biasanya ada di <b>Setelan → Digital Wellbeing & kontrol orang tua</b>.`,

            { h2: 'iPhone dan iPad: Screen Time' },
            `Di perangkat Apple, pengaturan dilakukan lewat <b>Screen Time</b> (Durasi Layar) dan <b>Family Sharing</b> (Berbagi Keluarga). Jika anak sudah ada di grup Berbagi Keluarga, Anda bisa mengatur Screen Time anak dari perangkat Anda sendiri.`,
            { ol: [
                'Siapkan <b>Berbagi Keluarga</b> dan tambahkan akun Apple anak.',
                'Di perangkat Anda: buka <b>Pengaturan → Keluarga</b>, pilih nama anak, lalu <b>Durasi Layar</b>.',
                'Atur <b>Waktu Henti</b> (downtime) untuk jam tidur.',
                'Atur <b>Batas App</b> untuk kategori seperti game dan media sosial.',
                'Atur <b>Pembatasan Konten & Privasi</b>: rating usia aplikasi, film, dan situs.',
                'Aktifkan <b>Minta untuk Membeli</b> agar unduhan dan pembelian perlu persetujuan.',
                'Buat <b>kode sandi Durasi Layar</b> yang berbeda dari kode buka perangkat dan tidak diketahui anak.',
            ] },
            `Apple menyarankan memperbarui semua perangkat keluarga ke versi perangkat lunak terbaru agar pengaturan tersinkron dengan baik. Apa pun batas yang dipasang, panggilan ke nomor darurat tetap bisa dilakukan.`,

            { h2: 'YouTube' },
            { table: { head: ['Pilihan', 'Untuk siapa', 'Catatan'], rows: [
                ['YouTube Kids', 'Anak usia prasekolah dan SD awal', 'Aplikasi terpisah dengan konten yang disaring; orang tua bisa memilih tingkat usia dan memblokir video atau saluran'],
                ['Pengalaman diawasi di YouTube', 'Anak yang lebih besar (praremaja)', 'Akses YouTube biasa dengan pengaturan konten yang dipilih orang tua lewat akun yang dikelola'],
                ['Mode Terbatas', 'Perangkat bersama', 'Menyaring sebagian konten dewasa; tidak sempurna'],
            ] } },
            `Matikan <b>putar otomatis</b> (autoplay) di mana pun tersedia. Fitur ini adalah salah satu penyebab utama anak terus menonton lebih lama dari rencana.`,

            { h2: 'Lapisan tambahan' },
            { ul: [
                '<b>SafeSearch Google</b> untuk menyaring hasil pencarian eksplisit.',
                '<b>Pengaturan router atau DNS keluarga</b> yang menyaring situs untuk semua perangkat di rumah. Beberapa penyedia internet juga menawarkan fitur ini.',
                '<b>Akun pengguna terpisah</b> di laptop keluarga, dengan anak memakai akun standar, bukan administrator.',
                '<b>Pengaturan privasi di setiap aplikasi:</b> matikan obrolan dengan orang asing, lokasi, dan profil publik.',
            ] },

            { h2: 'Aturan usia akun di Indonesia' },
            `Indonesia kini punya Peraturan Pemerintah Nomor 17 Tahun 2025 tentang tata kelola sistem elektronik dalam pelindungan anak, yang dikenal sebagai <b>PP Tunas</b>. Aturan ini mewajibkan platform membatasi akun anak sesuai tingkat risiko layanan, termasuk pembatasan bagi anak di bawah 16 tahun pada platform berisiko tinggi, dan persetujuan orang tua untuk anak yang lebih kecil pada layanan berisiko rendah. Penerapannya bertahap dan setiap platform menyesuaikan dengan caranya masing-masing, jadi parental control di rumah tetap penting.`,

            { h2: 'Daftar periksa' },
            { w: 'checklist', title: 'Parental control di rumah', desc: 'Centang yang sudah diatur. Progres tersimpan di browser ini.', items: ['Anak tahu parental control dipasang dan alasannya.', 'Batas waktu harian dan jam tidur perangkat sudah diatur.', 'Unduhan dan pembelian aplikasi perlu persetujuan.', 'Filter konten browser dan pencarian aktif.', 'YouTube Kids atau mode diawasi dipakai sesuai usia.', 'Putar otomatis dimatikan.', 'Obrolan dengan orang asing dimatikan di game dan aplikasi.', 'Kode sandi pengawasan tidak diketahui anak.', 'Pengaturan ditinjau ulang setiap beberapa bulan.'] },
            `Parental control bekerja paling baik bila dipadukan dengan pilihan aplikasi yang memang aman sejak awal: tanpa iklan, tanpa obrolan publik, dan punya tujuan yang jelas. Itu salah satu prinsip yang saya pegang saat membuat <a href="${pk('parental-control-family-link-screen-time-youtube', '/')}" target="_blank" rel="noopener">PixelKode</a>.`,
        ],
        faq: [
            ['Apakah Google Family Link gratis?', 'Ya. Family Link adalah aplikasi gratis dari Google untuk mengelola akun dan perangkat Android anak.'],
            ['Bagaimana mengatur Screen Time anak di iPhone?', 'Tambahkan anak ke Berbagi Keluarga, lalu dari perangkat Anda buka Pengaturan → Keluarga → nama anak → Durasi Layar.'],
            ['Apakah YouTube Kids aman 100%?', 'Tidak ada filter yang sempurna. YouTube Kids menyaring konten, tetapi pendampingan dan pengaturan blokir tetap perlu.'],
            ['Apakah anak boleh tahu ada parental control?', 'Sebaiknya ya. Keterbukaan menjaga kepercayaan dan membuat anak lebih mau bercerita saat ada masalah.'],
        ],
        sources: [
            ['Google: Memulai dengan Family Link', 'https://support.google.com/families/answer/7101025'],
            ['Apple: Use Screen Time to manage your child\'s iPhone or iPad', 'https://support.apple.com/108806'],
            ['YouTube Kids', 'https://www.youtubekids.com/'],
            ['Komdigi: Tunaspedia (PP Tunas)', 'https://djkpm.komdigi.go.id/assets/files/tunaspedia-buku-1.pdf'],
            ['CNBC Indonesia: batas usia anak punya akun media sosial', 'https://www.cnbcindonesia.com/tech/20260204145456-37-708176/ada-batas-usia-anak-punya-tiktok-instagram-di-ri-perhatikan-7-hal-ini'],
        ],
    },

    {
        slug: 'keamanan-internet-untuk-anak-aturan-dan-tanda-bahaya',
        title: 'Keamanan Internet untuk Anak: Aturan Keluarga dan Tanda Bahaya',
        description: 'Panduan keamanan internet untuk anak: data pribadi, orang asing di game, perundungan daring, grooming, penipuan, dan apa yang harus dilakukan bila anak mengalami masalah.',
        date: D, category: C, tags: ['keamanan internet anak', 'cyberbullying', 'grooming online', 'literasi digital', 'pola asuh digital'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode tidak ada iklan dan tidak ada obrolan publik. Interaksi hanya di galeri kelas berupa reaksi dan komentar pendek yang bisa dihapus guru.',
        lead: 'Internet membuka dunia untuk anak, tetapi juga membuka pintu bagi orang asing, perundungan, dan penipuan. Kita tidak bisa mengawasi setiap detik. Yang bisa dilakukan adalah membekali anak dengan aturan yang jelas, membangun kepercayaan agar ia mau bercerita, dan mengenali tanda bahaya sejak dini.',
        body: [
            { h2: 'Lima aturan inti yang mudah diingat anak' },
            { w: 'cards', title: 'Ketuk untuk penjelasan yang bisa disampaikan ke anak', items: [
                { tag: 'Aturan 1', front: 'Rahasia pribadi tetap rahasia.', backTag: 'Artinya', back: 'Nama lengkap, alamat, sekolah, nomor HP, foto berseragam, dan kata sandi tidak dibagikan ke siapa pun di internet.' },
                { tag: 'Aturan 2', front: 'Teman internet tetap orang asing.', backTag: 'Artinya', back: 'Orang yang dikenal dari game atau aplikasi belum tentu seperti yang ia akui. Jangan bertemu tanpa orang tua.' },
                { tag: 'Aturan 3', front: 'Tidak nyaman? Langsung cerita.', backTag: 'Artinya', back: 'Kalau ada pesan, gambar, atau permintaan yang membuat tidak nyaman, ceritakan ke orang tua. Kamu tidak akan dimarahi.' },
                { tag: 'Aturan 4', front: 'Tanya dulu sebelum mengunduh atau membeli.', backTag: 'Artinya', back: 'Termasuk aplikasi, file, dan item di game. Banyak penipuan berawal dari tautan hadiah gratis.' },
                { tag: 'Aturan 5', front: 'Baik di internet sama dengan baik di dunia nyata.', backTag: 'Artinya', back: 'Jangan mengirim pesan yang tidak akan kamu ucapkan langsung. Ejekan di internet juga menyakitkan.' },
            ] },
            { callout: 'Aturan nomor 3 adalah yang paling penting. Banyak anak tidak bercerita karena takut gawainya disita. Sampaikan dengan jelas: "Kalau kamu cerita, kita selesaikan bersama. Gawaimu tidak otomatis diambil."', kind: 'good', title: 'Kunci utama: anak mau bercerita' },

            { h2: 'Risiko utama dan tandanya' },
            { table: { head: ['Risiko', 'Seperti apa', 'Tanda yang bisa terlihat'], rows: [
                ['Perundungan daring (cyberbullying)', 'Ejekan, penyebaran foto memalukan, dikeluarkan dari grup', 'Murung setelah memegang HP, menghindari sekolah, menghapus akun tiba-tiba'],
                ['Grooming', 'Orang dewasa mendekati anak, memberi perhatian atau hadiah, lalu meminta rahasia atau foto', 'Teman baru yang dirahasiakan, hadiah tak jelas asalnya, gawai buru-buru disembunyikan'],
                ['Penipuan', 'Hadiah palsu, top up murah, akun game dicuri', 'Meminta uang atau kode OTP, akun tiba-tiba tidak bisa dibuka'],
                ['Konten tidak pantas', 'Kekerasan, pornografi, tantangan berbahaya', 'Pertanyaan atau istilah baru yang mengkhawatirkan, perubahan perilaku'],
                ['Privasi bocor', 'Lokasi, sekolah, atau rutinitas terlihat publik', 'Ada orang asing yang tahu detail kehidupan anak'],
            ] } },

            { h2: 'Grooming: pola yang perlu dikenali' },
            `Grooming adalah upaya orang dewasa membangun kedekatan dan kepercayaan anak dengan tujuan mengeksploitasi. Polanya sering bertahap, sehingga anak tidak menyadarinya:`,
            { svg: 'flow', label: 'Pola umum grooming daring', steps: [{ t: 'Berteman', d: 'di game atau media sosial' }, { t: 'Memberi perhatian', d: 'pujian, hadiah, item game' }, { t: 'Memisahkan', d: 'pindah ke obrolan pribadi' }, { t: 'Meminta rahasia', d: '"jangan bilang orang tuamu"' }, { t: 'Meminta lebih', d: 'foto, video, bertemu' }], caption: 'Kalimat "jangan bilang siapa-siapa" adalah tanda bahaya besar. Ajarkan anak bahwa rahasia yang membuatnya tidak nyaman harus diceritakan.' },

            { h2: 'Jika anak mengalami masalah' },
            { ol: [
                '<b>Tetap tenang.</b> Reaksi marah bisa membuat anak menyesal bercerita.',
                '<b>Dengarkan dan terima kasihi anak</b> karena berani bercerita.',
                '<b>Simpan bukti.</b> Tangkapan layar pesan, nama akun, tanggal. Jangan membalas pelaku.',
                '<b>Blokir dan laporkan</b> akun tersebut di platformnya.',
                '<b>Hubungi pihak terkait</b>: sekolah jika melibatkan teman sekolah, kepolisian jika ada ancaman atau eksploitasi.',
                '<b>Cari dukungan</b> untuk anak bila ia terlihat sangat terguncang.',
            ] },
            { table: { head: ['Layanan', 'Untuk apa'], rows: [
                ['SAPA 129 (Kementerian PPPA)', 'Pengaduan kekerasan terhadap perempuan dan anak, telepon 129'],
                ['aduankonten.id (Komdigi)', 'Melaporkan konten negatif di internet'],
                ['Kepolisian', 'Ancaman, pemerasan, atau eksploitasi seksual'],
                ['Fitur lapor di aplikasi', 'Akun dan konten yang melanggar aturan platform'],
            ] } },

            { h2: 'Percakapan rutin yang membangun kepercayaan' },
            `Keamanan internet bukan satu kali ceramah. Ia dibangun lewat obrolan kecil yang rutin dan santai. Beberapa pembuka percakapan:`,
            { ul: [
                '"Game apa yang lagi seru di sekolah? Boleh ajarin Papa?"',
                '"Pernah lihat sesuatu di internet yang bikin kamu kaget atau bingung?"',
                '"Kalau temanmu diejek di grup, menurutmu apa yang sebaiknya dilakukan?"',
                '"Siapa saja teman main game-mu? Kamu kenal mereka di dunia nyata?"',
            ] },
            { w: 'quiz', title: 'Kuis keamanan untuk anak', desc: 'Kerjakan bersama anak usia 8 tahun ke atas.', questions: [
                { q: 'Teman baru di game minta foto kamu memakai seragam sekolah. Apa yang dilakukan?', options: ['Kirim saja, dia baik', 'Tidak dikirim dan cerita ke orang tua', 'Kirim foto teman'], answer: 1, why: 'Foto berseragam memperlihatkan sekolahmu. Orang asing tidak perlu tahu itu.' },
                { q: 'Ada pesan: "Klik link ini untuk dapat diamond gratis!"', options: ['Klik cepat sebelum habis', 'Abaikan dan tanya orang tua', 'Bagikan ke teman'], answer: 1, why: 'Hadiah gratis lewat tautan sering penipuan untuk mencuri akun.' },
                { q: 'Seseorang bilang "ini rahasia kita, jangan bilang orang tuamu".', options: ['Simpan rahasianya', 'Cerita ke orang tua', 'Hapus pesannya diam-diam'], answer: 1, why: 'Rahasia yang membuat tidak nyaman harus diceritakan ke orang dewasa yang dipercaya.' },
            ] },

            { h2: 'Pilih ruang digital yang aman sejak awal' },
            `Pencegahan terbaik adalah memilih platform yang dirancang untuk anak: tanpa iklan yang menjebak, tanpa obrolan dengan orang asing, dan dengan moderasi yang jelas. Prinsip ini saya terapkan di <a href="${pk('keamanan-internet-untuk-anak-aturan-dan-tanda-bahaya', '/')}" target="_blank" rel="noopener">PixelKode</a>: anak berkarya dan berbagi hanya di galeri kelasnya, dengan reaksi dan komentar pendek yang bisa dihapus guru.`,
        ],
        faq: [
            ['Apa yang harus diajarkan anak tentang keamanan internet?', 'Jaga data pribadi, anggap teman internet sebagai orang asing, cerita bila tidak nyaman, tanya sebelum mengunduh, dan bersikap baik.'],
            ['Apa tanda anak menjadi korban cyberbullying?', 'Murung setelah memakai gawai, menghindari sekolah atau teman, menghapus akun, dan sulit tidur.'],
            ['Apa itu grooming online?', 'Upaya orang dewasa membangun kedekatan dengan anak secara bertahap untuk tujuan eksploitasi, sering dengan meminta anak merahasiakan hubungan.'],
            ['Ke mana melapor jika anak mengalami kekerasan daring?', 'Simpan bukti, laporkan di platform, hubungi SAPA 129, dan lapor polisi bila ada ancaman atau eksploitasi.'],
        ],
        sources: [
            ['UNICEF: Cyberbullying, apa itu dan cara menghentikannya', 'https://www.unicef.org/end-violence/how-to-stop-cyberbullying'],
            ['Aduan Konten Komdigi', 'https://aduankonten.id/'],
            ['Komdigi: Tunaspedia (PP Tunas tentang pelindungan anak di ruang digital)', 'https://djkpm.komdigi.go.id/assets/files/tunaspedia-buku-1.pdf'],
            ['AAP Family Media Plan', 'https://www.healthychildren.org/MediaUsePlan'],
        ],
    },
];
