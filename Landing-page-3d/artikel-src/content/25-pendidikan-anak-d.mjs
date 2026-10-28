import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Pendidikan Anak';

export default [
    {
        slug: 'literasi-digital-untuk-anak-4-pilar',
        title: 'Literasi Digital untuk Anak: 4 Pilar dan Cara Melatihnya',
        description: 'Empat pilar literasi digital untuk anak (cakap, etika, budaya, aman digital), cara mengenali hoaks, dan latihannya sesuai usia.',
        date: D, category: C, tags: ['literasi digital anak', 'hoaks', 'etika digital', 'keamanan digital', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Bagian "cakap digital" paling kuat dilatih dengan membuat sesuatu. Anak yang pernah membuat program sendiri lebih paham bahwa aplikasi dibuat manusia dengan aturan tertentu.',
        lead: 'Anak-anak sekarang sering disebut "digital native" karena lahir di era ponsel pintar. Tetapi lancar memakai aplikasi tidak sama dengan cakap digital. Banyak anak bisa mengunggah video dalam hitungan detik, tetapi belum bisa membedakan berita palsu, menjaga data pribadi, atau memahami bahwa aplikasi dirancang untuk menahan perhatian mereka.',
        body: [
            { h2: 'Empat pilar literasi digital' },
            `Program literasi digital nasional di Indonesia memakai kerangka empat pilar. Kerangka ini berguna untuk orang tua sebagai daftar keterampilan yang perlu dilatih anak:`,
            { svg: 'layers', label: 'Empat pilar literasi digital', items: [{ t: 'Cakap digital', d: 'memakai perangkat dan aplikasi dengan tepat, mencari informasi, membuat konten' }, { t: 'Etika digital', d: 'sopan, menghargai orang lain, tidak menyebar kebencian' }, { t: 'Budaya digital', d: 'nilai dan identitas diri tetap terbawa di ruang digital' }, { t: 'Aman digital', d: 'melindungi data pribadi, kata sandi, dan diri dari penipuan' }], caption: 'Keempatnya saling terkait. Anak yang cakap tetapi tidak etis atau tidak aman belum benar-benar literat digital.' },

            { h2: 'Pilar 1: cakap digital' },
            `Cakap digital bukan hanya bisa membuka aplikasi. Untuk anak SD, keterampilan pentingnya antara lain:`,
            { ul: [
                '<b>Mencari informasi dengan kata kunci yang tepat</b>, lalu memilih sumber yang tepercaya.',
                '<b>Mengelola berkas</b>: menyimpan, memberi nama, menemukan lagi.',
                '<b>Membuat, bukan hanya mengonsumsi</b>: menulis, menggambar, membuat presentasi, coding.',
                '<b>Memahami cara kerja teknologi</b>: aplikasi dibuat manusia, punya aturan, dan bisa salah.',
            ] },
            { callout: 'Anak yang pernah membuat program sendiri lebih mudah memahami bahwa setiap aplikasi adalah buatan manusia dengan tujuan tertentu, termasuk tujuan membuat penggunanya betah berlama-lama. Pemahaman ini adalah inti literasi digital.', kind: 'good', title: 'Dari pemakai menjadi pembuat' },

            { h2: 'Pilar 2 dan 3: etika dan budaya digital' },
            { table: { head: ['Situasi', 'Pertanyaan untuk anak'], rows: [
                ['Ingin mengunggah foto teman', '"Sudah minta izin temanmu?"'],
                ['Ingin berkomentar di video', '"Apakah kamu akan mengatakannya langsung di depan orangnya?"'],
                ['Memakai gambar dari internet untuk tugas', '"Siapa pembuatnya? Sudah disebutkan sumbernya?"'],
                ['Ikut ramai di grup kelas', '"Apakah ini membuat orang lain sedih atau malu?"'],
            ] } },

            { h2: 'Pilar 4: aman digital' },
            { w: 'checklist', title: 'Keterampilan aman digital anak', desc: 'Centang yang sudah dikuasai anak.', items: ['Tahu data pribadi apa saja yang tidak boleh dibagikan.', 'Bisa membuat kata sandi yang tidak mudah ditebak dan tidak membagikannya.', 'Tidak mengklik tautan hadiah atau undian yang mencurigakan.', 'Tahu cara memblokir dan melaporkan akun.', 'Bercerita ke orang tua saat melihat hal yang membuat tidak nyaman.', 'Tidak memberi tahu kode OTP kepada siapa pun.'] },

            { h2: 'Mengenali hoaks: latihan untuk anak' },
            `Hoaks menyebar cepat di grup percakapan keluarga dan sekolah. Ajarkan anak "rem darurat" sebelum percaya atau membagikan:`,
            { svg: 'flow', label: 'Langkah cek sebelum percaya', steps: [{ t: 'Berhenti', d: 'jangan langsung bagikan' }, { t: 'Cek sumber', d: 'siapa yang menulis?' }, { t: 'Cek tanggal', d: 'berita lama atau baru?' }, { t: 'Bandingkan', d: 'ada di sumber lain?' }, { t: 'Tanya', d: 'orang tua atau guru' }], caption: 'Lima langkah ini bisa dilatih dengan pesan berantai yang masuk ke grup keluarga.' },
            { w: 'quiz', title: 'Latihan mendeteksi hoaks', desc: 'Kerjakan bersama anak kelas 4 ke atas.', questions: [
                { q: 'Pesan: "BAGIKAN KE 10 ORANG atau HP-mu akan rusak!!!" Ini ...', options: ['Pesan penting', 'Hampir pasti hoaks berantai', 'Peringatan dari pabrik HP'], answer: 1, why: 'Ancaman, huruf kapital, dan perintah membagikan adalah ciri khas pesan berantai palsu.' },
                { q: 'Foto banjir besar dikirim dengan judul "Banjir di kota kita hari ini". Bagaimana mengeceknya?', options: ['Langsung percaya karena ada fotonya', 'Cek apakah foto itu pernah muncul sebelumnya dan cek berita resmi', 'Kirim ke semua teman'], answer: 1, why: 'Foto lama sering dipakai ulang dengan keterangan baru. Pencarian gambar dan berita resmi membantu mengecek.' },
                { q: 'Sumber mana yang paling tepercaya untuk info libur sekolah?', options: ['Pesan berantai di grup', 'Pengumuman resmi sekolah atau dinas pendidikan', 'Komentar di media sosial'], answer: 1, why: 'Informasi resmi datang dari lembaga yang berwenang.' },
            ] },
            `Situs cek fakta seperti <b>turnbackhoax.id</b> dan <b>cekfakta.com</b> bisa dipakai bersama anak yang lebih besar untuk melihat bagaimana sebuah klaim diperiksa.`,

            { h2: 'Literasi digital sesuai usia' },
            { table: { head: ['Usia', 'Fokus'], rows: [
                ['5-7', 'Layar ditemani orang tua, kenal istilah "informasi pribadi", cerita bila takut'],
                ['8-10', 'Mencari informasi dengan kata kunci, kata sandi, mengenali iklan, membuat karya digital sederhana'],
                ['11-12', 'Cek fakta, jejak digital, etika berkomentar, mengenali manipulasi, privasi pengaturan aplikasi'],
            ] } },
            `Dari keempat pilar, cakap digital paling efektif dilatih dengan berkarya. Saat anak membuat animasi atau game sendiri, ia belajar bahwa teknologi bisa dikendalikan, bukan hanya dikonsumsi. <a href="${pk('literasi-digital-untuk-anak-4-pilar')}" target="_blank" rel="noopener">PixelKode</a> menyediakan ruang berkarya itu dalam lingkungan tanpa iklan dan tanpa obrolan dengan orang asing.`,
        ],
        faq: [
            ['Apa itu literasi digital untuk anak?', 'Kemampuan memakai teknologi dengan cakap, beretika, sesuai nilai budaya, dan aman, termasuk menilai informasi dan melindungi data pribadi.'],
            ['Apa saja empat pilar literasi digital?', 'Cakap digital, etika digital, budaya digital, dan aman digital.'],
            ['Bagaimana mengajarkan anak mengenali hoaks?', 'Latih langkah berhenti, cek sumber, cek tanggal, bandingkan dengan sumber lain, dan tanya orang dewasa sebelum membagikan.'],
            ['Usia berapa mulai belajar literasi digital?', 'Sejak anak mulai memakai layar, dengan materi yang disesuaikan usia.'],
        ],
        sources: [
            ['NU Online: pilar literasi digital (cakap, etika, budaya, aman digital)', 'https://www.nu.or.id/nasional/pentingnya-memahami-pilar-literasi-digital-agar-terhindar-dari-kejahatan-siber-JdgTu'],
            ['Komdigi: Tunaspedia, panduan pelindungan anak di ruang digital', 'https://djkpm.komdigi.go.id/assets/files/tunaspedia-buku-1.pdf'],
            ['TurnBackHoax (Mafindo)', 'https://turnbackhoax.id/'],
            ['CekFakta.com', 'https://cekfakta.com/'],
            ['UNICEF: Cyberbullying, apa itu dan cara menghentikannya', 'https://www.unicef.org/end-violence/how-to-stop-cyberbullying'],
        ],
    },

    {
        slug: 'kebutuhan-tidur-anak-sesuai-usia-dan-pengaruhnya',
        title: 'Kebutuhan Tidur Anak Sesuai Usia dan Pengaruhnya',
        description: 'Berapa jam tidur yang dibutuhkan anak menurut usia, kenapa tidur penting untuk belajar, tanda kurang tidur, dan kalkulator jam tidur.',
        date: D, category: C, tags: ['kebutuhan tidur anak', 'jam tidur anak', 'kesehatan anak', 'rutinitas tidur', 'belajar anak'], cta: 'pixelkode',
        ctaNote: 'Coding dan kegiatan layar lain sebaiknya selesai setidaknya satu jam sebelum tidur. Jadwalkan pelajaran PixelKode di sore hari, bukan menjelang tidur.',
        lead: 'Saat anak sulit fokus, mudah marah, atau nilai menurun, kita sering mencari penyebab yang rumit. Padahal salah satu penyebab paling umum sangat sederhana: kurang tidur. Tidur bukan waktu kosong; di sanalah otak anak menyimpan apa yang dipelajarinya hari itu.',
        body: [
            { h2: 'Berapa jam tidur yang dibutuhkan?' },
            `Rekomendasi berikut berasal dari American Academy of Sleep Medicine (2016), yang didukung American Academy of Pediatrics, dan sejalan dengan pedoman WHO (2019) untuk balita. Angkanya adalah total tidur dalam 24 jam, termasuk tidur siang.`,
            { table: { head: ['Usia', 'Tidur per 24 jam'], rows: [
                ['4-12 bulan', '12-16 jam (termasuk tidur siang)'],
                ['1-2 tahun', '11-14 jam (termasuk tidur siang)'],
                ['3-5 tahun', '10-13 jam (termasuk tidur siang)'],
                ['6-12 tahun', '9-12 jam'],
                ['13-18 tahun', '8-10 jam'],
            ] } },
            { svg: 'bars', label: 'Kebutuhan tidur minimum per usia', data: [['1-2 tahun', 11], ['3-5 tahun', 10], ['6-12 tahun', 9], ['13-18 tahun', 8], ['Dewasa', 7]], unit: ' jam', caption: 'Batas bawah rekomendasi. Banyak anak usia sekolah membutuhkan lebih dari angka ini.' },

            { h2: 'Kenapa tidur penting untuk belajar?' },
            `Saat tidur, otak memproses dan memperkuat ingatan dari pengalaman siang hari, sebuah proses yang disebut <b>konsolidasi memori</b>. Pernyataan konsensus American Academy of Sleep Medicine menyebut tidur yang cukup secara teratur berkaitan dengan perhatian, perilaku, belajar, memori, pengaturan emosi, dan kesehatan fisik yang lebih baik. Kurang tidur sebaliknya berkaitan dengan masalah perhatian, perilaku, dan belajar.`,
            { callout: 'Begadang belajar untuk ulangan esok hari sering justru merugikan: waktu tidur yang dibutuhkan untuk menyimpan materi malah berkurang. Belajar berjarak beberapa hari sebelumnya dan tidur cukup di malam terakhir adalah kombinasi yang lebih baik.', kind: 'warn', title: 'Mitos begadang sebelum ulangan' },

            { h2: 'Hitung jam tidur anak' },
            { w: 'calc', title: 'Kalkulator jam tidur', desc: 'Masukkan jam bangun anak dan kebutuhan tidurnya. Hasilnya jam tidur paling lambat.', inputs: [
                { id: 'bangun', label: 'Jam bangun (misal 5.5 = 05.30)', value: 5.5, min: 4, max: 9, step: 0.25 },
                { id: 'butuh', label: 'Kebutuhan tidur (jam)', value: 10, min: 8, max: 13, step: 0.5 },
                { id: 'tertidur', label: 'Waktu sampai benar-benar tertidur (menit)', value: 20, min: 0, max: 60, step: 5 },
            ], outputs: [
                { label: 'Masuk kamar paling lambat pukul', expr: "(function(){ var t = (bangun - butuh - tertidur/60 + 24) % 24; var h = Math.floor(t), m = Math.round((t - h) * 60); if (m === 60) { h = (h + 1) % 24; m = 0; } return (h < 10 ? '0' : '') + h + '.' + (m < 10 ? '0' : '') + m; })()", fmt: 'text', big: true },
                { label: 'Gawai berhenti dipakai sekitar pukul', expr: "(function(){ var t = (bangun - butuh - tertidur/60 - 1 + 24) % 24; var h = Math.floor(t), m = Math.round((t - h) * 60); if (m === 60) { h = (h + 1) % 24; m = 0; } return (h < 10 ? '0' : '') + h + '.' + (m < 10 ? '0' : '') + m; })()", fmt: 'text' },
            ] },

            { h2: 'Tanda anak kurang tidur' },
            { w: 'checklist', title: 'Periksa tanda kurang tidur', desc: 'Centang yang sering terjadi. Ini bukan diagnosis.', items: ['Sangat sulit dibangunkan di pagi hari.', 'Tertidur di mobil atau di kelas pada siang hari.', 'Mudah marah, menangis, atau rewel menjelang sore.', 'Sulit fokus dan sering lupa.', 'Tidur jauh lebih lama di akhir pekan untuk "membayar utang".', 'Mendengkur keras atau sering terbangun di malam hari.'] },
            `Mendengkur keras yang rutin, jeda napas saat tidur, atau sering terbangun perlu diperiksakan ke dokter, karena bisa menandakan gangguan tidur yang memengaruhi konsentrasi dan perilaku anak.`,

            { h2: 'Membangun rutinitas tidur' },
            { ol: [
                '<b>Jam tidur dan bangun yang sama</b>, termasuk akhir pekan (selisih kecil boleh).',
                '<b>Rutinitas pengantar tidur</b> yang sama setiap malam: mandi, sikat gigi, membaca buku, lampu redup.',
                '<b>Gawai keluar kamar.</b> AAP menganjurkan tidak ada layar sekitar satu jam sebelum tidur dan gawai tidak diisi daya di kamar tidur anak.',
                '<b>Kamar gelap, sejuk, dan tenang.</b>',
                '<b>Hindari minuman berkafein</b> seperti teh dan kopi di sore dan malam hari.',
                '<b>Bergerak di siang hari.</b> Anak yang aktif di siang hari umumnya lebih mudah tertidur.',
            ] },
            { w: 'timer', title: 'Pewaktu menjelang tidur', desc: 'Pakai sebagai penanda rutinitas: waktu tenang, lalu lampu dimatikan.', phases: [{ label: 'Rapikan dan siap-siap', sec: 600, hint: 'Gawai diisi daya di luar kamar, sikat gigi, ganti baju.' }, { label: 'Membaca bersama', sec: 900, hint: 'Lampu redup, buku cerita.' }, { label: 'Lampu dimatikan', sec: 60, hint: 'Selamat tidur.' }] },

            { h2: 'Tidur dan jadwal kegiatan' },
            `Jadwal les dan kegiatan yang padat sering menggeser jam tidur. Saat menyusun jadwal, mulailah dari jam tidur, lalu hitung mundur. Kegiatan yang tidak muat sebaiknya dikurangi, bukan tidurnya. Ini berlaku juga untuk kegiatan yang bermanfaat seperti coding: jadwalkan di sore hari. Pelajaran <a href="${pk('kebutuhan-tidur-anak-sesuai-usia-dan-pengaruhnya')}" target="_blank" rel="noopener">PixelKode</a> dirancang sekitar 45 menit sehingga mudah diletakkan setelah istirahat siang.`,
        ],
        faq: [
            ['Berapa jam tidur anak SD?', 'Anak usia 6-12 tahun dianjurkan tidur 9-12 jam per malam.'],
            ['Berapa jam tidur anak TK?', 'Anak 3-5 tahun dianjurkan tidur 10-13 jam per 24 jam, termasuk tidur siang.'],
            ['Apakah HP sebelum tidur mengganggu tidur anak?', 'Ya, layar sebelum tidur bisa menunda waktu tidur dan menurunkan kualitasnya. Hentikan layar sekitar satu jam sebelum tidur dan simpan gawai di luar kamar.'],
            ['Kapan perlu ke dokter soal tidur anak?', 'Bila anak mendengkur keras rutin, ada jeda napas saat tidur, sering terbangun, atau sangat mengantuk di siang hari meski jam tidurnya cukup.'],
        ],
        sources: [
            ['Paruthi, S. dkk. (2016). Recommended amount of sleep for pediatric populations: AASM consensus statement. Journal of Clinical Sleep Medicine', 'https://doi.org/10.5664/jcsm.5866'],
            ['WHO (2019). Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age', 'https://www.who.int/publications/i/item/9789241550536'],
            ['AAP (2016). Media Use in School-Aged Children and Adolescents', 'https://doi.org/10.1542/peds.2016-2592'],
        ],
    },

    {
        slug: 'anak-mudah-frustrasi-saat-gagal-cara-mendampingi',
        title: 'Anak Mudah Frustrasi saat Gagal? Cara Mendampinginya',
        description: 'Kenapa anak mudah marah atau menyerah saat gagal, tiga langkah mendampingi emosinya, dan cara membangun toleransi frustrasi di rumah.',
        date: D, category: C, tags: ['anak mudah frustrasi', 'emosi anak', 'anak mudah menyerah', 'regulasi emosi', 'pola asuh'], cta: 'pixelkode',
        ctaNote: 'Di PixelKode, "gagal" terjadi dalam skala kecil dan aman: Robo menabrak dinding, anak memperbaiki satu blok, lalu mencoba lagi. Petunjuk bertahap mencegah anak macet terlalu lama.',
        lead: 'Puzzle dilempar, gambar dirobek, atau tangis meledak karena kalah main ular tangga. Anak yang mudah frustrasi bisa membuat orang tua bingung harus tegas atau menghibur. Kabar baiknya, kemampuan menghadapi kegagalan bisa dilatih. Kuncinya ada pada cara kita mendampingi emosi anak di saat-saat itu.',
        body: [
            { h2: 'Kenapa anak mudah frustrasi?' },
            `Frustrasi muncul ketika ada jarak antara apa yang diinginkan anak dan apa yang bisa ia lakukan. Bagi anak, jarak ini sering terasa besar, karena kemampuan mengatur emosi (bagian dari fungsi eksekutif) masih berkembang. Menurut Center on the Developing Child di Harvard, kemampuan seperti menahan dorongan dan mengelola reaksi berkembang bertahap sepanjang masa kanak-kanak, dan sangat dipengaruhi oleh dukungan orang dewasa di sekitarnya.`,
            { ul: [
                '<b>Harapan terlalu tinggi:</b> ingin langsung bisa seperti kakak atau video yang ditonton.',
                '<b>Lelah, lapar, atau kurang tidur:</b> ambang frustrasi turun drastis.',
                '<b>Jarang mengalami gagal yang aman:</b> selalu dibantu atau dibiarkan menang.',
                '<b>Takut mengecewakan:</b> merasa harga dirinya ditentukan oleh hasil.',
            ] },

            { h2: 'Tiga langkah saat frustrasi meledak' },
            { svg: 'flow', label: 'Langkah mendampingi frustrasi', steps: [{ t: 'Tenangkan', d: 'tubuh dulu, bukan ceramah' }, { t: 'Namai', d: '"Kamu kesal karena..."' }, { t: 'Cari jalan', d: 'setelah tenang, baru solusi' }], caption: 'Urutan ini penting. Anak yang sedang meledak belum bisa diajak berpikir.' },
            { h3: '1. Tenangkan dulu' },
            `Saat emosi memuncak, nasihat tidak akan masuk. Turunkan nada suara, dekati, tawarkan pelukan atau tarik napas bersama. Bagi sebagian anak, menjauh sebentar dari benda yang membuatnya kesal sudah sangat membantu.`,
            { h3: '2. Namai perasaannya' },
            `Menamai emosi membantu anak memahami yang ia rasakan. "Kamu kesal ya, menaranya roboh terus padahal sudah hati-hati." Kalimat ini tidak menyetujui perilaku melempar, tetapi mengakui perasaannya. Banyak praktisi pengasuhan menyebut prinsip ini "namai untuk menjinakkan".`,
            { h3: '3. Cari jalan bersama' },
            `Setelah tenang, ajak anak mencari langkah berikutnya: "Mau coba lagi dengan cara lain, istirahat dulu, atau minta bantuan untuk satu bagian?" Memberi pilihan mengembalikan rasa kendali.`,

            { h2: 'Kalimat yang membantu dan yang memperburuk' },
            { table: { head: ['Memperburuk', 'Membantu'], rows: [
                ['"Begitu saja nangis."', '"Kamu kecewa sekali ya. Itu wajar."'],
                ['"Sini, Papa saja yang kerjakan."', '"Mau Papa bantu satu bagian, atau mau coba dulu?"'],
                ['"Kalau marah begitu, tidak usah main lagi."', '"Kita istirahat dulu. Nanti kita coba lagi saat sudah tenang."'],
                ['"Kakakmu saja bisa."', '"Kemarin kamu juga belum bisa naik sepeda, sekarang bisa. Ini juga begitu."'],
            ] } },

            { h2: 'Membangun toleransi frustrasi' },
            `Toleransi frustrasi tumbuh lewat pengalaman <b>gagal yang aman</b>: kegagalan kecil yang tidak membuat malu, diikuti keberhasilan setelah berusaha. Beberapa cara memperbanyak pengalaman ini:`,
            { ul: [
                '<b>Pilih tantangan yang pas.</b> Sedikit di atas kemampuan anak, bukan jauh di atasnya.',
                '<b>Main permainan dengan menang-kalah</b>, dan jangan selalu mengalah. Anak perlu belajar kalah di lingkungan yang aman.',
                '<b>Ceritakan kegagalan Anda.</b> "Tadi kue Mama gosong. Besok Mama kecilkan apinya."',
                '<b>Rayakan perbaikan</b>, bukan hanya keberhasilan akhir.',
                '<b>Pecah tugas besar.</b> Kegagalan pada tugas kecil lebih mudah ditoleransi.',
            ] },
            { w: 'robo', title: 'Latihan gagal yang aman', desc: 'Program pertama hampir pasti salah, dan itu memang bagian dari permainannya. Robo menabrak? Perbaiki satu blok, lalu jalankan lagi. Perhatikan bagaimana anak menghadapinya.', levels: [
                { name: 'Coba lagi', goal: 'Bawa Robo ke bendera. Jalannya berbelok beberapa kali.', map: ['#######', '#>..###', '###.###', '###...#', '#####F#', '#######'], max: 10 },
            ] },

            { h2: 'Kapan perlu bantuan profesional?' },
            `Ledakan emosi adalah bagian normal tumbuh kembang. Pertimbangkan berkonsultasi dengan psikolog anak bila ledakan sangat sering dan intens dibanding anak seusianya, membahayakan diri atau orang lain, berlangsung berbulan-bulan tanpa membaik, atau mengganggu sekolah dan pertemanan secara serius.`,
            { callout: 'Anak belajar mengatur emosi dengan meniru orang dewasa. Saat Anda sendiri kesal karena kemacetan atau pekerjaan, ucapkan dengan tenang: "Papa kesal, Papa tarik napas dulu." Anak melihat contoh langsung.', kind: 'good', title: 'Jadilah contoh' },
            `Kegiatan dengan umpan balik cepat dan kesempatan mencoba ulang tanpa batas adalah tempat latihan yang baik untuk toleransi frustrasi. Coding adalah salah satunya: setiap bug adalah kegagalan kecil yang bisa langsung diperbaiki. <a href="${pk('anak-mudah-frustrasi-saat-gagal-cara-mendampingi')}" target="_blank" rel="noopener">PixelKode</a> menambahkan petunjuk bertahap supaya anak tidak macet terlalu lama sampai menyerah.`,
        ],
        faq: [
            ['Kenapa anak mudah marah saat gagal?', 'Kemampuan mengatur emosi masih berkembang, ditambah faktor seperti lelah, harapan terlalu tinggi, dan jarang mengalami kegagalan yang aman.'],
            ['Apakah sebaiknya selalu mengalah saat bermain dengan anak?', 'Tidak. Anak perlu belajar kalah di lingkungan yang aman dan penuh dukungan.'],
            ['Bagaimana menenangkan anak yang frustrasi?', 'Tenangkan tubuhnya dulu, namai perasaannya, lalu setelah tenang ajak mencari jalan keluar dengan memberi pilihan.'],
            ['Kapan frustrasi anak perlu ditangani psikolog?', 'Bila ledakan sangat sering dan intens, membahayakan, berlangsung lama, atau mengganggu sekolah dan pertemanan.'],
        ],
        sources: [
            ['Harvard Center on the Developing Child: Executive Function & Self-Regulation', 'https://developingchild.harvard.edu/science/key-concepts/executive-function/'],
            ['Mueller & Dweck (1998). Pujian dan motivasi setelah gagal', 'https://doi.org/10.1037/0022-3514.75.1.33'],
            ['Yogman, M. dkk. (2018). The Power of Play. Pediatrics', 'https://doi.org/10.1542/peds.2018-2058'],
        ],
    },

    {
        slug: 'mengenali-bakat-dan-minat-anak',
        title: 'Mengenali Bakat dan Minat Anak: Cara yang Masuk Akal',
        description: 'Cara mengenali bakat dan minat anak tanpa label terburu-buru: tahap perkembangan minat, hati-hati dengan tes bakat, dan jurnal pengamatan.',
        date: D, category: C, tags: ['bakat anak', 'minat anak', 'mengenali potensi anak', 'tes bakat', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'Coding cocok sebagai salah satu "pintu" yang dicoba anak: ada yang tertarik pada game, ada yang pada cerita, ada yang pada seni. Dua pelajaran gratis PixelKode cukup untuk melihat minat awalnya.',
        lead: 'Orang tua ingin tahu sejak dini: anak saya berbakat apa? Banyak tes bakat menjanjikan jawaban cepat. Penelitian tentang perkembangan minat memberi gambaran yang berbeda: minat dan kemampuan tumbuh dari pengalaman, dan sering baru terlihat jelas setelah anak mencoba banyak hal dengan sungguh-sungguh.',
        body: [
            { h2: 'Bakat dan minat: dua hal berbeda' },
            { svg: 'matrix', label: 'Bakat dan minat', x: 'Kemampuan saat ini', y: 'Minat', quads: [{ t: 'Minat tinggi, belum mahir', d: 'Lahan subur: beri kesempatan latihan' }, { t: 'Minat tinggi, mahir', d: 'Kembangkan lebih dalam, beri tantangan' }, { t: 'Minat rendah, belum mahir', d: 'Belum tentu tidak berbakat; mungkin belum pernah benar-benar mencoba' }, { t: 'Minat rendah, mahir', d: 'Hargai, tapi jangan dipaksakan menjadi jalan hidup' }] },
            `Banyak orang tua fokus mencari <b>bakat</b>, padahal untuk anak SD, <b>minat</b> seringkali menjadi petunjuk yang lebih berguna. Minat mendorong latihan, dan latihan membangun kemampuan. Anak yang sangat berminat pada sesuatu biasanya akan berlatih lebih banyak tanpa disuruh.`,

            { h2: 'Bagaimana minat tumbuh' },
            `Psikolog pendidikan Suzanne Hidi dan K. Ann Renninger (2006) menggambarkan perkembangan minat dalam empat tahap:`,
            { table: { head: ['Tahap', 'Seperti apa', 'Peran orang tua'], rows: [
                ['1. Minat sesaat terpicu', 'Anak tertarik saat melihat sesuatu yang baru dan menarik', 'Sediakan banyak pengalaman baru'],
                ['2. Minat sesaat bertahan', 'Anak terus tertarik selama kegiatan berlangsung', 'Buat kegiatan bermakna dan sedikit menantang'],
                ['3. Minat pribadi yang muncul', 'Anak kembali ke topik itu atas kemauannya sendiri', 'Beri waktu, bahan, dan kesempatan bertanya'],
                ['4. Minat pribadi yang matang', 'Anak bertahan saat sulit dan mencari tahu lebih dalam', 'Hubungkan dengan mentor, komunitas, atau kursus'],
            ] } },
            { callout: 'Minat jarang muncul dalam bentuk jadi. Ia biasanya dipicu oleh pengalaman, lalu tumbuh bila didukung. Itulah kenapa mencoba banyak hal di masa SD sangat berharga.', kind: 'info', title: 'Pelajaran utama' },

            { h2: 'Hati-hati dengan tes bakat' },
            `Tes bakat dan tes "kecerdasan majemuk" populer di kalangan orang tua. Beberapa memang dirancang dengan baik, tetapi banyak yang dijual tanpa dasar ilmiah yang kuat, termasuk tes sidik jari. Untuk anak SD, hasil tes apa pun sebaiknya diperlakukan sebagai <b>salah satu informasi</b>, bukan vonis. Minat dan kemampuan anak bisa berubah banyak dalam beberapa tahun.`,
            { w: 'cards', title: 'Ketuk untuk melihat risikonya', items: [
                { tag: 'Risiko', front: 'Label terlalu dini: "Dia memang tidak berbakat musik."', backTag: 'Akibat', back: 'Anak berhenti mencoba sebelum benar-benar tahu kemampuannya.' },
                { tag: 'Risiko', front: 'Fokus pada satu bidang terlalu awal.', backTag: 'Akibat', back: 'Anak kehilangan kesempatan menemukan minat lain, dan bisa jenuh.' },
                { tag: 'Risiko', front: 'Menganggap hasil tes sebagai takdir.', backTag: 'Akibat', back: 'Mengabaikan peran latihan, dukungan, dan pengalaman.' },
            ] },

            { h2: 'Jurnal pengamatan orang tua' },
            `Cara paling andal mengenali minat adalah mengamati anak dalam waktu yang cukup lama. Catat sebulan, lalu cari polanya:`,
            { w: 'builder', title: 'Jurnal minat anak', desc: 'Isi seminggu sekali selama sebulan, lalu bandingkan.', fields: [
                { id: 'pilih', label: 'Saat waktu bebas, apa yang dipilih anak?', long: true },
                { id: 'lupa', label: 'Kegiatan apa yang membuatnya lupa waktu?', long: true },
                { id: 'tanya', label: 'Topik apa yang paling sering ia tanyakan?' },
                { id: 'sulit', label: 'Saat sulit, kegiatan apa yang tetap ia lanjutkan?' },
                { id: 'cerita', label: 'Apa yang ia ceritakan dengan antusias?' },
            ], template: 'JURNAL MINAT (minggu ke-...)\n- Pilihan waktu bebas: {pilih}\n- Lupa waktu saat: {lupa}\n- Sering bertanya tentang: {tanya}\n- Tetap lanjut walau sulit: {sulit}\n- Bercerita antusias tentang: {cerita}' },
            `Pertanyaan keempat, "kegiatan apa yang tetap ia lanjutkan saat sulit", paling penting. Ketekunan saat sulit adalah tanda minat yang mulai matang.`,

            { h2: 'Berikan banyak pintu untuk dicoba' },
            { table: { head: ['Ranah', 'Contoh pintu'], rows: [
                ['Seni', 'Menggambar, musik, tari, teater'],
                ['Gerak', 'Renang, sepak bola, bela diri, panjat'],
                ['Sains dan alam', 'Berkebun, mengamati serangga, eksperimen dapur'],
                ['Bahasa', 'Menulis cerita, membaca, berdebat'],
                ['Teknologi', 'Coding, merakit, robotik, desain digital'],
                ['Sosial', 'Pramuka, kegiatan relawan, organisasi kelas'],
            ] } },
            `Coding menarik sebagai pintu karena memadukan beberapa ranah: seni (animasi), bahasa (cerita interaktif), logika (game), dan sains (simulasi). Anak yang mencobanya bisa menemukan bagian mana yang paling ia sukai. Dua pelajaran <a href="${pk('mengenali-bakat-dan-minat-anak')}" target="_blank" rel="noopener">gratis di PixelKode</a> bisa menjadi salah satu pintu yang dicoba, lalu amati dengan jurnal di atas.`,
        ],
        faq: [
            ['Bagaimana cara mengetahui bakat anak?', 'Beri banyak pengalaman, amati kegiatan yang dipilih dan ditekuni anak dalam waktu lama, terutama yang tetap dilanjutkan saat sulit.'],
            ['Apakah tes bakat anak akurat?', 'Kualitasnya beragam dan sebagian tidak berdasar ilmiah. Perlakukan hasilnya sebagai salah satu informasi, bukan vonis.'],
            ['Usia berapa bakat anak terlihat?', 'Tidak ada usia pasti. Minat dan kemampuan berkembang dari pengalaman dan latihan, dan bisa berubah selama masa sekolah.'],
            ['Perlukah anak fokus pada satu bidang sejak SD?', 'Umumnya lebih baik mencoba beragam kegiatan dulu. Spesialisasi bisa datang belakangan saat minat anak sudah matang.'],
        ],
        sources: [
            ['Hidi, S., & Renninger, K. A. (2006). The four-phase model of interest development. Educational Psychologist', 'https://doi.org/10.1207/s15326985ep4102_4'],
            ['Ryan & Deci (2000). Self-determination theory and intrinsic motivation', 'https://doi.org/10.1037/0003-066X.55.1.68'],
            ['Resnick, M. Lifelong Kindergarten Group, MIT Media Lab', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
        ],
    },

    {
        slug: 'menumbuhkan-kreativitas-anak-4p-projects-passion-peers-play',
        title: 'Menumbuhkan Kreativitas Anak: 4P dari MIT',
        description: 'Cara menumbuhkan kreativitas anak dengan kerangka 4P dari pencipta Scratch: projects, passion, peers, play, plus contoh kegiatan di rumah.',
        date: D, category: C, tags: ['kreativitas anak', 'menumbuhkan kreativitas', 'Mitchel Resnick', 'Scratch', 'pendidikan anak'], cta: 'pixelkode',
        ctaNote: 'PixelKode memakai keempat P: proyek di setiap pelajaran, Laboratorium untuk proyek bebas sesuai minat, galeri kelas untuk berbagi dengan teman, dan suasana bermain yang membuat salah terasa biasa.',
        lead: 'Kreativitas sering dianggap bakat bawaan: ada anak yang kreatif, ada yang tidak. Mitchel Resnick, profesor di MIT Media Lab dan pemimpin tim yang menciptakan Scratch, berpendapat lain. Menurutnya, kreativitas bisa ditumbuhkan, dan ia merangkum caranya dalam empat P: projects, passion, peers, dan play.',
        body: [
            { h2: 'Belajar seperti di TK, sepanjang hidup' },
            `Dalam bukunya <i>Lifelong Kindergarten</i> (2017), Resnick memperhatikan bahwa anak TK belajar dengan cara yang sangat kreatif: membayangkan sesuatu, membuatnya dengan balok atau krayon, memainkannya, membagikannya ke teman, lalu merenungkan dan mendapat ide baru. Ia menyebutnya <b>spiral belajar kreatif</b>. Sayangnya, semakin tinggi jenjang sekolah, semakin sedikit ruang untuk spiral ini.`,
            { svg: 'cycle', label: 'Spiral belajar kreatif', items: ['Bayangkan', 'Buat', 'Mainkan', 'Bagikan', 'Renungkan'], caption: 'Setiap putaran menghasilkan ide baru untuk putaran berikutnya. Kerangka ini menjadi dasar desain Scratch.' },

            { h2: 'Empat P untuk menumbuhkan kreativitas' },
            { h3: '1. Projects: membuat sesuatu yang nyata' },
            `Anak belajar paling dalam ketika mengerjakan proyek yang bermakna: membangun rumah kardus, membuat komik, merancang game. Proyek memberi alasan untuk belajar keterampilan baru. Anak yang ingin membuat game punya alasan kuat untuk memahami koordinat.`,
            { h3: '2. Passion: berangkat dari minat' },
            `Anak bekerja lebih lama dan lebih tekun pada hal yang ia pedulikan. Proyek tentang kucing peliharaannya, tim sepak bola favoritnya, atau dinosaurus akan jauh lebih menarik daripada tugas yang ditentukan sepenuhnya oleh orang dewasa.`,
            { h3: '3. Peers: berkarya bersama teman' },
            `Kreativitas tumbuh dalam interaksi: berbagi ide, memberi masukan, saling meniru lalu mengembangkan. Komunitas Scratch dibangun dengan prinsip ini, termasuk budaya remix yang menghargai pembuat asli.`,
            { h3: '4. Play: bermain dan bereksperimen' },
            `Bermain di sini berarti sikap: berani mencoba, bereksperimen, mengambil risiko, dan menguji batas. Bukan sekadar bersenang-senang, tetapi kesediaan untuk "coba saja, lihat apa yang terjadi".`,

            { h2: 'Ubah kegiatan biasa menjadi kreatif' },
            { table: { head: ['Kegiatan biasa', 'Versi kreatif'], rows: [
                ['Mewarnai gambar yang sudah jadi', 'Menggambar tokoh sendiri lalu membuat ceritanya'],
                ['Mengikuti tutorial langkah demi langkah', 'Ikuti tutorial, lalu ubah tiga hal menjadi versimu'],
                ['Membaca buku', 'Membaca, lalu menulis akhir cerita yang berbeda'],
                ['Menyusun lego sesuai instruksi', 'Setelah jadi, bongkar dan buat sesuatu yang belum ada di kotaknya'],
                ['Main game', 'Merancang level atau aturan baru untuk game itu'],
            ] } },
            { callout: 'Pertanyaan "bagaimana kalau ...?" adalah mesin kreativitas. "Bagaimana kalau kucingnya bisa terbang?", "Bagaimana kalau gamenya dimainkan terbalik?" Ajukan pertanyaan seperti ini sesering mungkin.', kind: 'good', title: 'Pertanyaan pemicu' },

            { h2: 'Kebiasaan yang diam-diam mematikan kreativitas' },
            { w: 'cards', title: 'Ketuk untuk melihat penggantinya', items: [
                { tag: 'Hindari', front: 'Selalu menunjukkan "cara yang benar" sebelum anak mencoba.', backTag: 'Ganti dengan', back: 'Biarkan anak mencoba dulu, lalu diskusikan.' },
                { tag: 'Hindari', front: 'Memuji hanya hasil yang rapi dan mirip contoh.', backTag: 'Ganti dengan', back: 'Puji ide yang orisinal, keberanian mencoba, dan proses eksperimennya.' },
                { tag: 'Hindari', front: 'Jadwal penuh tanpa waktu kosong.', backTag: 'Ganti dengan', back: 'Sisakan waktu tanpa agenda. Rasa bosan sering melahirkan ide.' },
                { tag: 'Hindari', front: 'Membereskan "kekacauan" kreatif terlalu cepat.', backTag: 'Ganti dengan', back: 'Sediakan sudut berkarya yang boleh berantakan sementara.' },
            ] },

            { h2: 'Proyek kreatif akhir pekan' },
            { w: 'choose', title: 'Pilih proyek sesuai minat anak', questions: [
                { q: 'Anak paling suka ...', options: [{ t: 'Bercerita dan berimajinasi', add: { cerita: 3 } }, { t: 'Membangun dan merakit', add: { bangun: 3 } }, { t: 'Bermain game', add: { game: 3 } }, { t: 'Musik dan bunyi', add: { musik: 3 } }] },
                { q: 'Lebih suka dengan atau tanpa layar?', options: [{ t: 'Tanpa layar', add: { bangun: 1, cerita: 1 } }, { t: 'Boleh dengan layar', add: { game: 1, musik: 1, cerita: 1 } }] },
            ], results: {
                cerita: { title: 'Buku komik atau cerita interaktif', text: 'Buat komik 4 panel di kertas, atau cerita interaktif di Scratch dengan dialog dan pilihan jalan cerita.' },
                bangun: { title: 'Kota kardus', text: 'Bangun kota dari kardus bekas: rumah, jalan, jembatan. Tambahkan aturan: kota harus punya taman dan sekolah.' },
                game: { title: 'Game buatan sendiri', text: 'Rancang game papan dari kertas, atau game digital sederhana di Scratch. Uji ke anggota keluarga.' },
                musik: { title: 'Alat musik daur ulang', text: 'Buat alat musik dari botol dan karet, atau piano mini di Scratch yang dimainkan dengan keyboard.' },
            } },
            `Scratch lahir dari kerangka 4P ini, dan coding dengan Scratch adalah salah satu cara paling lengkap untuk menjalankan spiral belajar kreatif: membayangkan, membuat, memainkan, membagikan, dan merenungkan. <a href="${pk('menumbuhkan-kreativitas-anak-4p-projects-passion-peers-play', '/')}" target="_blank" rel="noopener">PixelKode</a> membawa prinsip yang sama ke kelas berbahasa Indonesia, dengan proyek di setiap pelajaran dan galeri untuk berbagi karya dengan teman sekelas.`,
        ],
        faq: [
            ['Apakah kreativitas bisa dilatih?', 'Ya. Kreativitas tumbuh lewat proyek bermakna, minat, interaksi dengan teman, dan sikap bermain yang berani bereksperimen.'],
            ['Apa itu 4P kreativitas?', 'Projects, passion, peers, dan play: empat prinsip dari Mitchel Resnick (MIT Media Lab) untuk menumbuhkan kreativitas.'],
            ['Apa itu spiral belajar kreatif?', 'Siklus bayangkan, buat, mainkan, bagikan, renungkan, yang berulang dan menghasilkan ide baru di setiap putaran.'],
            ['Apa kegiatan kreatif untuk anak di rumah?', 'Komik buatan sendiri, kota kardus, game papan rancangan sendiri, alat musik daur ulang, dan proyek coding seperti animasi atau game.'],
        ],
        sources: [
            ['Resnick, M. (2017). Lifelong Kindergarten: Cultivating Creativity through Projects, Passion, Peers, and Play. MIT Press', 'https://mitpressbookstore.mit.edu/book/9780262536134'],
            ['Lifelong Kindergarten Group, MIT Media Lab', 'https://www.media.mit.edu/groups/lifelong-kindergarten/overview/'],
            ['Scratch untuk pendidik', 'https://scratch.mit.edu/educators'],
            ['Yogman, M. dkk. (2018). The Power of Play. Pediatrics', 'https://doi.org/10.1542/peds.2018-2058'],
        ],
    },
];
