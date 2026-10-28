const D = '2026-10-28';
const C = 'UX & Produk';

export default [
    {
        slug: 'usability-testing-dengan-5-pengguna-cara-melakukan',
        title: 'Usability Testing dengan 5 Pengguna: Cara Melakukannya',
        description: 'Usability testing murah dan cepat: kenapa 5 pengguna sering cukup, kalkulator penemuan masalah, menyusun tugas, metode think-aloud, dan mencatat temuan.',
        date: D, category: C, tags: ['usability testing', 'uji pengguna', 'UX research', 'think aloud', 'Nielsen'], cta: 'jasa',
        lead: 'Tim produk sering berdebat berjam-jam tentang tombol mana yang lebih jelas. Satu sesi uji dengan pengguna sungguhan biasanya menyelesaikan perdebatan itu dalam 20 menit. Usability testing tidak harus mahal atau formal; yang penting dilakukan, dan dilakukan berulang.',
        body: [
            { h2: 'Mengapa lima pengguna?' },
            `Jakob Nielsen dan Tom Landauer (1993) memodelkan bahwa setiap peserta uji menemukan sebagian masalah usability, dan peserta berikutnya semakin banyak menemukan masalah yang sama. Dengan perkiraan satu pengguna menemukan sekitar 31% masalah, lima pengguna menemukan sekitar 85%. Nielsen kemudian menyarankan: lebih baik tiga putaran uji dengan lima orang daripada satu putaran dengan lima belas orang.`,
            { w: 'calc', title: 'Berapa persen masalah yang ditemukan?', desc: 'Rumus Nielsen-Landauer: 1 - (1 - L)ⁿ, dengan L = porsi masalah yang ditemukan satu pengguna.', inputs: [{ id: 'n', label: 'Jumlah pengguna', value: 5, min: 1, max: 20, step: 1 }, { id: 'l', label: 'Porsi masalah per pengguna (L)', value: 31, min: 5, max: 60, step: 1, unit: '%' }], outputs: [{ label: 'Perkiraan masalah yang ditemukan', expr: '(1 - pow(1 - l / 100, n)) * 100', fmt: 'pct', big: true, note: 'Nilai L berbeda antar produk dan tugas. Untuk produk dengan beberapa kelompok pengguna yang sangat berbeda, uji 3-5 orang per kelompok.' }] },
            { callout: 'Angka "5 pengguna" berlaku untuk uji kualitatif yang mencari masalah. Untuk mengukur angka (misalnya waktu penyelesaian atau tingkat keberhasilan) dengan yakin, dibutuhkan peserta jauh lebih banyak.', kind: 'warn', title: 'Batasannya' },

            { h2: 'Langkah melakukan uji' },
            { svg: 'flow', label: 'Satu putaran uji', steps: [{ t: 'Tentukan tujuan', d: 'apa yang ingin diketahui?' }, { t: 'Rekrut 5 orang', d: 'mirip pengguna target' }, { t: 'Tulis 3-5 tugas', d: 'skenario realistis' }, { t: 'Sesi 30-45 menit', d: 'think-aloud, amati' }, { t: 'Rangkum & perbaiki', d: 'lalu uji lagi' }] },

            { h2: 'Menulis tugas yang baik' },
            { table: { head: ['Kurang baik', 'Lebih baik'], rows: [['"Klik menu Pengiriman lalu pilih alamat."', '"Anda pindah rumah minggu lalu. Pastikan pesanan berikutnya dikirim ke alamat baru."'], ['"Coba fitur filter."', '"Cari frame kacamata titanium di bawah Rp500.000 yang cocok untuk wajah bulat."'], ['"Apakah halaman ini mudah dipakai?"', '"Daftarkan anak Anda untuk kelas coding percobaan hari Sabtu."']] } },
            `Tugas yang baik menggambarkan <b>tujuan</b> pengguna, bukan langkah di antarmuka, dan tidak memakai kata yang sama dengan label tombol.`,

            { h2: 'Metode think-aloud' },
            `Minta peserta menyuarakan apa yang mereka pikirkan sambil mengerjakan tugas. Tugas Anda: diam, mengamati, dan mencatat.`,
            { code: 'Pembuka sesi:\n"Terima kasih sudah datang. Yang kami uji adalah aplikasinya, bukan Anda.\nTidak ada jawaban salah. Sambil mencoba, tolong ucapkan apa yang Anda pikirkan,\nmisalnya apa yang Anda cari atau apa yang membingungkan.\nSaya mungkin tidak menjawab pertanyaan selama tugas, karena kami ingin melihat\nbagaimana aplikasi ini dipakai tanpa bantuan."\n\nPertanyaan netral bila peserta diam:\n- "Apa yang sedang Anda pikirkan?"\n- "Apa yang Anda harapkan terjadi?"\n- "Apa yang Anda cari di layar ini?"' },
            { w: 'cards', title: 'Ketuk: kesalahan moderator', items: [
                { tag: 'Kesalahan', front: 'Membantu saat peserta kesulitan.', backTag: 'Lebih baik', back: 'Tunggu. Kesulitan itu adalah temuannya. Bantu hanya bila peserta benar-benar buntu, lalu catat.' },
                { tag: 'Kesalahan', front: 'Bertanya "mudah kan?"', backTag: 'Lebih baik', back: 'Pertanyaan menggiring. Tanya "bagaimana pengalaman Anda dengan tugas tadi?"' },
                { tag: 'Kesalahan', front: 'Membela desain.', backTag: 'Lebih baik', back: 'Ucapkan terima kasih dan catat. Diskusi desain dilakukan setelah sesi.' },
                { tag: 'Kesalahan', front: 'Hanya mencatat pendapat.', backTag: 'Lebih baik', back: 'Utamakan perilaku: di mana mereka mengklik, ragu, atau gagal. Orang sering mengatakan mudah padahal gagal.' },
            ] },

            { h2: 'Merangkum temuan' },
            { table: { head: ['Temuan', 'Berapa peserta', 'Tingkat', 'Saran'], rows: [['Tidak menemukan tombol ubah alamat', '4 dari 5', 'Kritis', 'Pindahkan ke halaman checkout'], ['Bingung istilah "PD"', '3 dari 5', 'Sedang', 'Tambahkan penjelasan singkat dan tautan cara mengukur'], ['Foto produk terlalu kecil di ponsel', '2 dari 5', 'Rendah', 'Izinkan perbesar dengan cubit']] } },
            { w: 'checklist', title: 'Persiapan uji minggu ini', items: ['Satu tujuan uji yang jelas.', '5 peserta yang mirip pengguna target, bukan rekan tim.', '3-5 tugas berbasis skenario.', 'Prototipe atau aplikasi siap, termasuk data contoh.', 'Izin merekam layar dan suara.', 'Satu orang moderator, satu orang pencatat.', 'Waktu untuk merangkum di hari yang sama.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Menurut model Nielsen-Landauer, 5 pengguna menemukan sekitar...', options: ['50% masalah', '85% masalah', '100% masalah'], answer: 1, why: 'Dengan L sekitar 31%, 1 - 0,69⁵ ≈ 85%.' },
                { q: 'Tugas uji yang baik...', options: ['Menyebut nama tombol yang harus diklik', 'Menggambarkan tujuan pengguna dalam skenario', 'Bertanya apakah desainnya bagus'], answer: 1, why: 'Agar terlihat apakah pengguna menemukan jalannya sendiri.' },
            ] },
        ],
        faq: [
            ['Apakah bisa dilakukan jarak jauh?', 'Bisa. Gunakan panggilan video dengan berbagi layar. Uji jarak jauh tanpa moderator juga tersedia lewat layanan khusus, tetapi kehilangan kesempatan bertanya langsung.'],
            ['Perlukah memberi imbalan peserta?', 'Sebaiknya ya, misalnya voucher atau pulsa yang wajar. Ini menghargai waktu mereka dan mempermudah perekrutan.'],
            ['Kapan sebaiknya uji dilakukan?', 'Sejak awal, bahkan dengan sketsa kertas atau prototipe sederhana. Semakin awal masalah ditemukan, semakin murah memperbaikinya.'],
        ],
        sources: [
            ['Nielsen Norman Group: Why You Only Need to Test with 5 Users', 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'],
            ['Nielsen dan Landauer (1993): A mathematical model of the finding of usability problems, INTERCHI', 'https://doi.org/10.1145/169059.169166'],
            ['Nielsen Norman Group: Thinking Aloud, the #1 Usability Tool', 'https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/'],
        ],
    },

    {
        slug: 'sepuluh-heuristik-usability-nielsen-dengan-contoh',
        title: '10 Heuristik Usability Nielsen dengan Contoh Nyata',
        description: 'Sepuluh heuristik usability Jakob Nielsen dengan contoh aplikasi sehari-hari, cara melakukan evaluasi heuristik, skala keparahan, dan latihan soal.',
        date: D, category: C, tags: ['heuristik Nielsen', 'usability', 'evaluasi heuristik', 'UX design', 'UI'], cta: 'jasa',
        lead: 'Jakob Nielsen merumuskan sepuluh prinsip umum desain antarmuka pada 1994. Lebih dari tiga dekade kemudian, prinsip-prinsip ini masih menjadi alat pertama untuk memeriksa sebuah layar sebelum diuji ke pengguna. Mereka disebut heuristik karena berupa aturan praktis, bukan aturan pasti.',
        body: [
            { h2: 'Sepuluh heuristik' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: '1', front: 'Visibilitas status sistem', backTag: 'Contoh', back: 'Aplikasi ojek menampilkan posisi pengemudi dan perkiraan tiba. Tombol bayar berubah menjadi "Memproses..." sehingga tidak ditekan dua kali.' },
                { tag: '2', front: 'Kesesuaian dengan dunia nyata', backTag: 'Contoh', back: 'Memakai istilah "Saldo" dan "Riwayat transaksi", bukan "Ledger" atau "Log". Ikon keranjang untuk belanja.' },
                { tag: '3', front: 'Kendali dan kebebasan pengguna', backTag: 'Contoh', back: 'Tombol "Batalkan kirim" beberapa detik setelah mengirim email; mudah keluar dari alur yang salah.' },
                { tag: '4', front: 'Konsistensi dan standar', backTag: 'Contoh', back: 'Tombol utama selalu di posisi dan warna yang sama; ikon pencarian tetap kaca pembesar seperti aplikasi lain.' },
                { tag: '5', front: 'Pencegahan kesalahan', backTag: 'Contoh', back: 'Kolom tanggal memakai pemilih kalender, bukan teks bebas. Konfirmasi sebelum menghapus data penting.' },
                { tag: '6', front: 'Mengenali lebih baik daripada mengingat', backTag: 'Contoh', back: 'Menampilkan pencarian terakhir dan alamat tersimpan, sehingga pengguna tidak perlu mengetik ulang.' },
                { tag: '7', front: 'Fleksibilitas dan efisiensi', backTag: 'Contoh', back: 'Pintasan keyboard untuk pengguna mahir, "beli lagi" untuk pesanan rutin.' },
                { tag: '8', front: 'Desain estetis dan minimalis', backTag: 'Contoh', back: 'Layar checkout hanya berisi yang dibutuhkan untuk membayar, tanpa promo yang mengalihkan.' },
                { tag: '9', front: 'Bantu mengenali, mendiagnosis, dan memulihkan kesalahan', backTag: 'Contoh', back: '"Nomor HP harus diawali 08 dan berisi 10-13 angka" lebih membantu daripada "Input tidak valid".' },
                { tag: '10', front: 'Bantuan dan dokumentasi', backTag: 'Contoh', back: 'Penjelasan singkat di dekat istilah sulit, misalnya ikon (i) di samping "PD" saat memesan kacamata.' },
            ] },

            { h2: 'Cara melakukan evaluasi heuristik' },
            { ol: ['Pilih 3-5 evaluator. Satu orang hanya menemukan sebagian masalah.', 'Masing-masing memeriksa layar <b>sendiri-sendiri</b> dulu, dua kali: sekali untuk alur, sekali untuk detail.', 'Catat setiap masalah, heuristik yang dilanggar, dan lokasinya.', 'Gabungkan temuan, hilangkan duplikat, lalu beri tingkat keparahan.', 'Prioritaskan perbaikan dan validasi dengan uji pengguna.'] },
            { table: { head: ['Skala', 'Arti'], rows: [['0', 'Bukan masalah usability'], ['1', 'Kosmetik, perbaiki bila ada waktu'], ['2', 'Kecil, prioritas rendah'], ['3', 'Besar, prioritas tinggi'], ['4', 'Katastrofik, wajib diperbaiki sebelum rilis']] } },

            { h2: 'Latihan: temukan pelanggarannya' },
            { w: 'quiz', title: 'Heuristik mana yang dilanggar?', questions: [
                { q: 'Setelah menekan "Kirim", tidak ada tanda apa pun selama 6 detik. Pengguna menekan lagi dan pesanan dobel.', options: ['Visibilitas status sistem', 'Bantuan dan dokumentasi', 'Estetis minimalis'], answer: 0, why: 'Tidak ada umpan balik bahwa sistem sedang memproses.' },
                { q: 'Pesan error: "Error 0x80070057".', options: ['Konsistensi', 'Bantu mengenali dan memulihkan kesalahan', 'Fleksibilitas'], answer: 1, why: 'Pesan tidak menjelaskan masalah dan cara memperbaikinya.' },
                { q: 'Formulir meminta pengguna mengetik ulang nomor rekening yang ditampilkan di halaman sebelumnya.', options: ['Mengenali daripada mengingat', 'Konsistensi', 'Pencegahan kesalahan'], answer: 0, why: 'Pengguna dipaksa mengingat informasi yang bisa ditampilkan.' },
                { q: 'Tombol "Simpan" berwarna hijau di satu halaman dan abu-abu kecil di pojok di halaman lain.', options: ['Konsistensi dan standar', 'Dunia nyata', 'Kendali pengguna'], answer: 0, why: 'Pola yang sama harus terlihat dan berperilaku sama.' },
            ] },
            { callout: 'Evaluasi heuristik cepat dan murah, tetapi tidak menggantikan uji dengan pengguna. Pakar bisa melewatkan masalah yang nyata dan menandai masalah yang ternyata tidak mengganggu pengguna.', kind: 'info', title: 'Pelengkap, bukan pengganti' },
            { w: 'checklist', title: 'Periksa satu layar aplikasi Anda', items: ['Ada umpan balik untuk setiap tindakan penting.', 'Istilah dipahami pengguna awam.', 'Ada cara mudah membatalkan atau kembali.', 'Pola tombol dan ikon konsisten.', 'Kesalahan umum dicegah lewat desain input.', 'Informasi yang dibutuhkan terlihat, tidak harus diingat.', 'Tidak ada elemen yang mengalihkan dari tugas utama.', 'Pesan error menjelaskan cara memperbaiki.'] },
        ],
        faq: [
            ['Apakah heuristik ini masih relevan untuk aplikasi mobile dan AI?', 'Ya. Prinsipnya umum. Untuk aplikasi AI, visibilitas status (sedang berpikir, sumber jawaban) dan kendali pengguna (mengedit, membatalkan) menjadi semakin penting.'],
            ['Berapa lama evaluasi heuristik?', 'Untuk satu alur kecil, 1-2 jam per evaluator, ditambah satu sesi untuk menggabungkan temuan.'],
            ['Apakah ada heuristik lain?', 'Ada, misalnya prinsip Shneiderman (Eight Golden Rules) dan pedoman platform seperti Material Design dan Apple Human Interface Guidelines.'],
        ],
        sources: [
            ['Nielsen Norman Group: 10 Usability Heuristics for User Interface Design', 'https://www.nngroup.com/articles/ten-usability-heuristics/'],
            ['Nielsen Norman Group: How to Conduct a Heuristic Evaluation', 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/'],
            ['Usability testing dengan 5 pengguna (artikel terkait)', 'https://muchson.web.id/artikel/usability-testing-dengan-5-pengguna-cara-melakukan/'],
        ],
    },

    {
        slug: 'user-persona-cara-membuat-yang-berguna',
        title: 'User Persona: Cara Membuat yang Benar-Benar Berguna',
        description: 'Membuat user persona berbasis riset, bukan karangan: data yang dibutuhkan, isi yang penting, contoh persona kursus coding anak, dan memakainya dalam keputusan.',
        date: D, category: C, tags: ['user persona', 'UX research', 'desain produk', 'target pengguna', 'empati pengguna'], cta: 'jasa',
        lead: 'Banyak persona berakhir sebagai poster lucu di dinding: foto stok, nama, hobi, dan kutipan karangan. Tidak ada yang memakainya untuk memutuskan apa pun. Persona yang berguna dibangun dari riset nyata dan menjawab satu pertanyaan: kalau kita membuat fitur ini, apakah orang ini akan terbantu?',
        body: [
            { h2: 'Persona adalah ringkasan pola, bukan individu' },
            `Persona merangkum pola tujuan, perilaku, dan hambatan dari sekelompok pengguna yang diwawancarai atau diamati. Nama dan foto hanya alat bantu mengingat. Bila tidak ada data di baliknya, itu bukan persona, melainkan asumsi tim yang diberi wajah.`,
            { svg: 'flow', label: 'Dari riset ke persona', steps: [{ t: 'Wawancara 8-15 orang', d: 'dan data pemakaian' }, { t: 'Catat perilaku & tujuan', d: 'per orang' }, { t: 'Kelompokkan pola', d: 'kesamaan tujuan/hambatan' }, { t: 'Tulis 2-4 persona', d: 'satu per pola utama' }, { t: 'Pakai & perbarui', d: 'dalam keputusan nyata' }] },

            { h2: 'Isi persona yang penting' },
            { table: { head: ['Bagian', 'Penting?', 'Alasan'], rows: [['Tujuan yang ingin dicapai', 'Sangat', 'Inti keputusan fitur'], ['Hambatan dan frustrasi saat ini', 'Sangat', 'Sumber peluang perbaikan'], ['Konteks pemakaian (perangkat, waktu, tempat)', 'Sangat', 'Menentukan desain: ponsel di angkot vs laptop di kantor'], ['Perilaku saat ini dan alat yang dipakai', 'Penting', 'Apa yang harus kita kalahkan atau lengkapi'], ['Kutipan nyata dari wawancara', 'Penting', 'Membangun empati yang jujur'], ['Usia, pekerjaan', 'Secukupnya', 'Konteks, tetapi jarang menentukan desain'], ['Hobi, makanan favorit, zodiak', 'Tidak', 'Biasanya tidak relevan']] } },

            { h2: 'Contoh: persona untuk kelas coding anak' },
            { w: 'compare', title: 'Dua persona dari riset orang tua', tabs: [
                { label: 'Ibu Rina', html: '<b>Orang tua bekerja, anak 9 tahun.</b><br><b>Tujuan:</b> anak memakai waktu layar untuk hal yang bermanfaat, tanpa ia harus mendampingi terus.<br><b>Hambatan:</b> tidak paham coding, takut salah memilih kursus, waktu terbatas di malam hari.<br><b>Konteks:</b> mendaftar dari ponsel saat istirahat siang; anak belajar di laptop keluarga.<br><b>Kutipan:</b> "Saya cuma mau tahu anak saya beneran belajar, bukan cuma main."<br><b>Implikasi desain:</b> laporan kemajuan singkat untuk orang tua, uji coba gratis tanpa daftar rumit.' },
                { label: 'Pak Dimas', html: '<b>Guru SD yang ingin mengajar coding.</b><br><b>Tujuan:</b> punya materi siap pakai untuk ekstrakurikuler.<br><b>Hambatan:</b> belum pernah mengajar coding, lab komputer terbatas dan internet lambat.<br><b>Konteks:</b> kelas 25 siswa, satu jam per minggu.<br><b>Kutipan:</b> "Saya perlu tahu minggu ini ngajar apa, langkah demi langkah."<br><b>Implikasi desain:</b> rencana pelajaran per pertemuan, mode yang tetap jalan dengan koneksi lambat.' },
            ] },

            { h2: 'Memakai persona dalam keputusan' },
            { ul: ['Di setiap usulan fitur, tanyakan: <b>persona mana yang terbantu, dan masalah apa yang diselesaikan?</b>', 'Gunakan persona untuk menyusun skenario usability test.', 'Pilih <b>persona utama</b>; desain yang mencoba memuaskan semua orang sering tidak memuaskan siapa pun.', 'Perbarui persona setiap kali riset baru menunjukkan pola berbeda.'] },
            { callout: 'Persona bisa memperkuat stereotip bila dibuat dari asumsi. Pastikan data riset mencakup pengguna yang beragam, termasuk pengguna dengan disabilitas dan pengguna di daerah dengan koneksi terbatas.', kind: 'warn', title: 'Hati-hati stereotip' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Dasar persona yang baik adalah...', options: ['Imajinasi tim', 'Pola dari riset pengguna nyata', 'Foto stok yang menarik'], answer: 1, why: 'Tanpa data, persona hanya asumsi.' },
                { q: 'Bagian persona yang paling menentukan keputusan desain?', options: ['Hobi', 'Tujuan, hambatan, dan konteks pemakaian', 'Zodiak'], answer: 1, why: 'Inilah yang memengaruhi kebutuhan fitur.' },
            ] },
        ],
        faq: [
            ['Berapa persona yang ideal?', 'Biasanya 2-4. Lebih dari itu sulit diingat dan dipakai tim.'],
            ['Bolehkah AI membuat persona?', 'AI bisa membantu merangkum transkrip wawancara menjadi pola. Persona yang dibuat AI tanpa data riset hanyalah karangan yang terdengar meyakinkan.'],
            ['Apa bedanya persona dan jobs-to-be-done?', 'Persona fokus pada siapa pengguna; jobs-to-be-done fokus pada pekerjaan yang ingin diselesaikan pengguna. Keduanya bisa dipakai bersama.'],
        ],
        sources: [
            ['Nielsen Norman Group: Personas Make Users Memorable for Product Team Members', 'https://www.nngroup.com/articles/persona/'],
            ['Wawancara pengguna: cara bertanya yang benar (artikel terkait)', 'https://muchson.web.id/artikel/wawancara-pengguna-cara-bertanya-yang-benar/'],
            ['Customer journey map (artikel terkait)', 'https://muchson.web.id/artikel/customer-journey-map-cara-membuat/'],
        ],
    },

    {
        slug: 'customer-journey-map-cara-membuat',
        title: 'Customer Journey Map: Cara Membuat dan Memakainya',
        description: 'Membuat customer journey map langkah demi langkah: tahapan, tindakan, pikiran, emosi, titik sentuh, peluang perbaikan, contoh, dan template yang bisa diisi.',
        date: D, category: C, tags: ['customer journey map', 'UX', 'pengalaman pelanggan', 'service design', 'CX'], cta: 'jasa',
        lead: 'Pelanggan tidak mengalami produk Anda per fitur, melainkan sebagai perjalanan: melihat iklan, membandingkan, mendaftar, menunggu, memakai, menghubungi CS, lalu memutuskan kembali atau tidak. Journey map menggambar perjalanan itu dari sudut pandang pelanggan, sehingga tim bisa melihat di mana pengalaman runtuh.',
        body: [
            { h2: 'Bagian-bagian journey map' },
            { svg: 'layers', label: 'Lapisan sebuah journey map', items: [{ t: 'Peluang', d: 'Ide perbaikan untuk setiap titik masalah.' }, { t: 'Emosi', d: 'Garis naik-turun: senang, ragu, kesal.' }, { t: 'Pikiran dan pertanyaan', d: '"Ukurannya pas tidak, ya?"' }, { t: 'Tindakan dan titik sentuh', d: 'Apa yang dilakukan, di kanal apa.' }, { t: 'Tahapan', d: 'Sadar, membandingkan, membeli, menunggu, memakai.' }, { t: 'Persona dan skenario', d: 'Siapa, dan tujuan apa.' }] },

            { h2: 'Contoh: membeli kacamata secara online' },
            { table: { head: ['Tahap', 'Tindakan', 'Pikiran', 'Emosi', 'Peluang'], rows: [
                ['Sadar', 'Melihat promo di Instagram', '"Murah, tapi bisa dipercaya?"', 'Penasaran', 'Tampilkan ulasan dan alamat toko fisik'],
                ['Membandingkan', 'Melihat katalog, membaca ukuran frame', '"52-18-140 itu apa?"', 'Bingung', 'Penjelasan ukuran frame dengan gambar'],
                ['Memesan', 'Mengisi resep dan PD', '"Saya tidak tahu PD saya."', 'Cemas', 'Panduan mengukur PD dan opsi chat'],
                ['Menunggu', 'Menunggu 5 hari tanpa kabar', '"Pesanan saya sampai mana?"', 'Kesal', 'Notifikasi status setiap tahap'],
                ['Memakai', 'Mencoba kacamata baru', '"Kok agak pusing?"', 'Ragu', 'Info masa adaptasi dan garansi penyesuaian'],
            ] } },
            { svg: 'bars', label: 'Ilustrasi kurva emosi pelanggan (skala 1-5)', data: [['Sadar', 3], ['Membandingkan', 2], ['Memesan', 2], ['Menunggu', 1], ['Memakai', 3]], caption: 'Ilustrasi dari contoh di atas. Titik terendah (menunggu tanpa kabar) adalah prioritas perbaikan pertama.' },

            { h2: 'Langkah membuat' },
            { ol: ['<b>Pilih satu persona dan satu skenario.</b> Satu peta untuk semua pelanggan akan terlalu kabur.', '<b>Kumpulkan data:</b> wawancara, ulasan, tiket CS, data analitik, rekaman uji pengguna.', '<b>Susun tahapan</b> dari sudut pandang pelanggan, bukan struktur departemen.', '<b>Isi tindakan, pikiran, dan emosi</b> berdasarkan bukti.', '<b>Tandai titik masalah</b> dan beri prioritas.', '<b>Tulis peluang</b> dan tentukan pemilik tindakan.'] },
            { w: 'builder', title: 'Template satu tahap journey', desc: 'Isi untuk setiap tahap, lalu gabungkan menjadi tabel.', fields: [
                { id: 'tahap', label: 'Tahap', value: 'Menunggu pesanan' },
                { id: 'tindakan', label: 'Tindakan pelanggan', value: 'Membuka aplikasi untuk cek status' },
                { id: 'titik', label: 'Titik sentuh', value: 'Aplikasi, WhatsApp CS' },
                { id: 'pikiran', label: 'Pikiran', value: 'Kenapa belum dikirim?' },
                { id: 'emosi', label: 'Emosi (1-5)', value: '1' },
                { id: 'bukti', label: 'Bukti', value: '32% tiket CS bulan lalu tentang status pesanan' },
                { id: 'peluang', label: 'Peluang', value: 'Notifikasi otomatis di setiap perubahan status' },
            ], template: 'TAHAP: {tahap}\nTindakan: {tindakan}\nTitik sentuh: {titik}\nPikiran: "{pikiran}"\nEmosi: {emosi}/5\nBukti: {bukti}\nPeluang: {peluang}' },
            { callout: 'Journey map yang digantung di dinding tanpa pemilik tindakan tidak mengubah apa pun. Setiap peluang prioritas harus punya orang yang bertanggung jawab dan tenggat.', kind: 'warn', title: 'Dari peta ke tindakan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Sudut pandang journey map adalah...', options: ['Struktur departemen perusahaan', 'Pengalaman pelanggan', 'Arsitektur sistem'], answer: 1, why: 'Peta mengikuti perjalanan pelanggan.' },
                { q: 'Dari mana isi emosi dan pikiran sebaiknya berasal?', options: ['Tebakan tim', 'Bukti riset: wawancara, tiket CS, uji pengguna', 'AI'], answer: 1, why: 'Tanpa bukti, peta hanya asumsi.' },
            ] },
        ],
        faq: [
            ['Apa bedanya journey map dan service blueprint?', 'Journey map fokus pada pengalaman pelanggan. Service blueprint menambahkan apa yang terjadi di belakang layar: tim, sistem, dan proses yang mendukung setiap tahap.'],
            ['Alat apa yang dipakai?', 'Papan tulis dan kertas tempel, Miro, FigJam, atau spreadsheet. Alatnya tidak penting dibanding datanya.'],
            ['Seberapa sering diperbarui?', 'Setiap kali ada perubahan besar pada produk atau layanan, atau minimal setahun sekali.'],
        ],
        sources: [
            ['Nielsen Norman Group: Journey Mapping 101', 'https://www.nngroup.com/articles/journey-mapping-101/'],
            ['Nielsen Norman Group: Service Blueprints, Definition', 'https://www.nngroup.com/articles/service-blueprints-definition/'],
            ['User persona (artikel terkait)', 'https://muchson.web.id/artikel/user-persona-cara-membuat-yang-berguna/'],
        ],
    },

    {
        slug: 'wireframe-mockup-prototype-bedanya',
        title: 'Wireframe, Mockup, dan Prototype: Apa Bedanya?',
        description: 'Perbedaan wireframe, mockup, dan prototype dalam desain UI/UX: tujuan, tingkat detail, alat, kapan memakai masing-masing, dan alur dari sketsa ke uji.',
        date: D, category: C, tags: ['wireframe', 'mockup', 'prototype', 'UI design', 'Figma'], cta: 'jasa',
        lead: 'Klien meminta "desain" dan tim bingung: apakah sketsa kotak-kotak, tampilan berwarna lengkap, atau sesuatu yang bisa diklik? Ketiga istilah ini sering dipakai bergantian, padahal masing-masing punya tujuan berbeda. Memilih yang tepat menghemat waktu dan mencegah perdebatan warna di tahap yang salah.',
        body: [
            { h2: 'Tiga tingkat kesetiaan (fidelity)' },
            { table: { head: ['Aspek', 'Wireframe', 'Mockup', 'Prototype'], rows: [['Tujuan', 'Struktur dan tata letak', 'Tampilan visual', 'Interaksi dan alur'], ['Detail', 'Kotak abu-abu, teks contoh', 'Warna, tipografi, gambar asli', 'Bisa diklik, berpindah layar'], ['Waktu buat', 'Menit sampai jam', 'Jam sampai hari', 'Jam sampai minggu'], ['Diskusi yang tepat', '"Informasi apa yang perlu ada?"', '"Apakah sesuai brand?"', '"Apakah pengguna bisa menyelesaikan tugas?"'], ['Alat', 'Kertas, Balsamiq, Figma', 'Figma, Sketch', 'Figma, ProtoPie, kode HTML']] } },

            { h2: 'Mengapa urutannya penting' },
            `Menunjukkan desain berwarna lengkap terlalu awal membuat diskusi tersangkut di warna dan foto, padahal struktur halamannya belum tepat. Wireframe yang sengaja "jelek" mengundang masukan tentang hal yang lebih mendasar.`,
            { svg: 'flow', label: 'Alur yang umum', steps: [{ t: 'Sketsa kertas', d: '10 ide dalam 10 menit' }, { t: 'Wireframe', d: 'struktur dan alur' }, { t: 'Prototype low-fi', d: 'uji alur dengan pengguna' }, { t: 'Mockup', d: 'gaya visual' }, { t: 'Prototype hi-fi', d: 'uji detail, serahkan ke developer' }] },

            { h2: 'Kapan memakai yang mana' },
            { w: 'cards', title: 'Ketuk untuk rekomendasi', items: [
                { tag: 'Situasi', front: 'Masih mencari ide alur pendaftaran.', backTag: 'Pakai', back: 'Sketsa kertas atau wireframe cepat. Buat beberapa alternatif.' },
                { tag: 'Situasi', front: 'Ingin tahu apakah pengguna menemukan menu riwayat.', backTag: 'Pakai', back: 'Prototype yang bisa diklik, walau masih abu-abu.' },
                { tag: 'Situasi', front: 'Klien ingin melihat kesan brand.', backTag: 'Pakai', back: 'Mockup beberapa layar kunci.' },
                { tag: 'Situasi', front: 'Menguji animasi atau interaksi rumit (geser, tarik).', backTag: 'Pakai', back: 'Prototype hi-fi atau prototipe kode.' },
            ] },

            { h2: 'Prototype dengan kode' },
            `Untuk interaksi yang kompleks, data nyata, atau perilaku AI, prototipe di Figma sering terbatas. Prototipe HTML/JavaScript sederhana, kini lebih cepat dibuat dengan bantuan AI, memungkinkan pengguna mencoba dengan data dan perilaku yang lebih realistis. Tantangannya: jangan sampai tim menganggapnya kode siap produksi.`,
            { callout: 'Beri label jelas pada setiap artefak: "Wireframe, bukan desain final" atau "Prototipe untuk uji, data palsu". Ini mencegah salah paham dengan klien dan pemangku kepentingan.', kind: 'info', title: 'Kelola ekspektasi' },
            { w: 'checklist', title: 'Sebelum menunjukkan desain', items: ['Saya tahu pertanyaan apa yang ingin dijawab.', 'Tingkat detail sesuai pertanyaan itu.', 'Artefak diberi label yang jelas.', 'Ada skenario tugas bila akan diuji.', 'Konten realistis, bukan lorem ipsum, untuk bagian yang penting.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Untuk menguji apakah pengguna bisa menyelesaikan alur checkout, yang paling tepat adalah...', options: ['Mockup statis', 'Prototype yang bisa diklik', 'Moodboard'], answer: 1, why: 'Alur hanya bisa diuji bila bisa dijalani.' },
                { q: 'Mengapa wireframe sengaja dibuat sederhana?', options: ['Malas', 'Agar diskusi fokus pada struktur, bukan warna', 'Agar murah dicetak'], answer: 1, why: 'Detail visual mengalihkan diskusi tahap awal.' },
            ] },
        ],
        faq: [
            ['Apakah selalu harus melewati ketiga tahap?', 'Tidak. Untuk perubahan kecil pada produk yang sudah punya design system, tim sering langsung ke mockup atau prototipe.'],
            ['Apa itu design handoff?', 'Proses menyerahkan desain ke developer, termasuk ukuran, warna, status komponen, dan perilaku. Figma Dev Mode dan design system memudahkannya.'],
            ['Apakah developer perlu belajar wireframe?', 'Sangat membantu. Developer yang bisa membuat sketsa cepat lebih mudah berdiskusi dengan desainer dan klien.'],
        ],
        sources: [
            ['Nielsen Norman Group: UX Prototypes, Low Fidelity vs. High Fidelity', 'https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/'],
            ['Figma Help Center: Guide to prototyping in Figma', 'https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma'],
            ['Apa itu UI/UX design (artikel terkait)', 'https://muchson.web.id/artikel/apa-itu-ui-ux-design-bedanya/'],
        ],
    },
];
