const D = '2026-10-28';
const C = 'Belajar & Produktivitas';

export default [
    {
        slug: 'teknik-feynman-belajar-dengan-menjelaskan',
        title: 'Teknik Feynman: Belajar dengan Menjelaskan Sederhana',
        description: 'Cara memakai teknik Feynman untuk memahami materi sulit: 4 langkah, contoh nyata, kenapa menjelaskan ulang efektif menurut riset, dan pembuat lembar latihan.',
        date: D, category: C, tags: ['teknik Feynman', 'cara belajar efektif', 'memahami materi', 'self-explanation', 'belajar'], cta: 'none',
        lead: 'Fisikawan peraih Nobel Richard Feynman dikenal mampu menjelaskan konsep rumit dengan bahasa sederhana. Dari gaya belajarnya, lahir teknik yang kini populer: jelaskan sebuah konsep seolah kepada anak kecil, temukan bagian yang macet, lalu pelajari ulang. Sederhana, tetapi sangat efektif untuk mengubah hafalan menjadi pemahaman.',
        body: [
            { h2: 'Empat langkah teknik Feynman' },
            { svg: 'cycle', label: 'Siklus teknik Feynman', items: ['Pilih konsep', 'Jelaskan sederhana', 'Temukan celah', 'Sederhanakan lagi'], caption: 'Ulangi sampai penjelasan Anda lancar tanpa melihat catatan.' },
            { ol: [
                '<b>Pilih konsep.</b> Tulis judulnya di bagian atas kertas, misalnya "inflasi" atau "rekursi".',
                '<b>Jelaskan dengan bahasa sederhana</b>, seolah kepada anak SMP. Tanpa istilah teknis yang tidak dijelaskan. Gunakan contoh dan analogi.',
                '<b>Temukan celah.</b> Bagian di mana Anda macet, ragu, atau terpaksa memakai istilah rumit adalah bagian yang belum benar-benar dipahami. Kembali ke sumber dan pelajari bagian itu.',
                '<b>Sederhanakan dan rapikan.</b> Tulis ulang penjelasannya lebih ringkas, dengan satu analogi yang kuat.',
            ] },

            { h2: 'Kenapa menjelaskan membuat kita paham?' },
            `Penelitian psikologi pendidikan menyebut efek ini <b>self-explanation</b> (menjelaskan pada diri sendiri). Studi klasik Chi dan rekan (1994) menemukan siswa yang diminta menjelaskan setiap kalimat teks biologi kepada diri sendiri memahami materi lebih dalam dibanding yang hanya membaca dua kali. Tinjauan besar Dunlosky dan rekan (2013) juga menilai self-explanation dan <i>elaborative interrogation</i> (bertanya "kenapa?") sebagai teknik yang cukup menjanjikan.`,
            { callout: 'Ada ilusi yang sering menipu: merasa paham karena materinya terasa akrab saat dibaca ulang. Menjelaskan tanpa melihat catatan memecah ilusi ini dengan cepat.', kind: 'info', title: 'Ilusi kefasihan' },

            { h2: 'Contoh: menjelaskan inflasi' },
            { table: { head: ['Versi', 'Penjelasan'], rows: [
                ['Hafalan', '"Inflasi adalah kenaikan tingkat harga umum secara terus-menerus."'],
                ['Feynman', '"Dulu Rp10.000 cukup untuk dua porsi bakso. Sekarang hanya cukup satu. Uangnya sama, tapi barang yang bisa dibeli lebih sedikit. Itu inflasi: harga-harga naik secara umum, sehingga nilai uang kita turun."'],
                ['Celah yang ditemukan', '"Kenapa harga naik? Saya tidak bisa menjelaskan." → pelajari penyebab inflasi (permintaan naik, biaya produksi naik, jumlah uang beredar)'],
            ] } },

            { h2: 'Buat lembar Feynman Anda' },
            { w: 'builder', title: 'Lembar teknik Feynman', desc: 'Isi tanpa melihat catatan dulu, lalu periksa.', fields: [
                { id: 'konsep', label: 'Konsep yang dipelajari', placeholder: 'mis. rekursi' },
                { id: 'jelas', label: 'Penjelasan untuk anak SMP', long: true },
                { id: 'analogi', label: 'Analogi atau contoh', placeholder: 'mis. boneka matryoshka yang berisi boneka lebih kecil' },
                { id: 'celah', label: 'Bagian yang membuat saya ragu', long: true },
                { id: 'sumber', label: 'Sumber untuk menutup celah', placeholder: 'mis. bab 4 buku, video kuliah minggu 3' },
            ], template: 'KONSEP: {konsep}\n\nPenjelasan sederhana:\n{jelas}\n\nAnalogi: {analogi}\n\nCelah: {celah}\nPelajari ulang dari: {sumber}' },

            { h2: 'Variasi agar lebih efektif' },
            { ul: [
                '<b>Jelaskan ke orang sungguhan:</b> teman, adik, atau orang tua. Pertanyaan mereka menemukan celah yang tidak Anda sadari.',
                '<b>Rekam suara</b> saat menjelaskan, lalu dengarkan kembali.',
                '<b>Gabungkan dengan latihan soal:</b> penjelasan yang lancar harus terbukti saat mengerjakan soal.',
                '<b>Minta AI berperan sebagai murid yang kritis:</b> jelaskan konsep, lalu minta AI mengajukan pertanyaan yang menguji pemahaman Anda, bukan menjelaskan untuk Anda.',
            ] },
            { w: 'checklist', title: 'Tanda Anda sudah paham', desc: 'Centang yang bisa Anda lakukan untuk konsep yang dipelajari.', items: ['Menjelaskan tanpa melihat catatan.', 'Memberi contoh sendiri, bukan contoh dari buku.', 'Menjelaskan kenapa, bukan hanya apa.', 'Menghubungkan dengan konsep lain.', 'Menjawab pertanyaan tak terduga tentang konsep itu.'] },
        ],
        faq: [
            ['Apa itu teknik Feynman?', 'Cara belajar dengan menjelaskan konsep dalam bahasa sederhana, menemukan bagian yang belum dipahami, mempelajarinya ulang, lalu menyederhanakan penjelasannya.'],
            ['Apakah teknik Feynman terbukti efektif?', 'Teknik ini sejalan dengan riset tentang self-explanation dan elaborative interrogation, yang menunjukkan menjelaskan dan bertanya "kenapa" membantu pemahaman.'],
            ['Cocok untuk pelajaran apa?', 'Hampir semua konsep: sains, ekonomi, pemrograman, sejarah. Untuk hafalan murni seperti kosakata, gabungkan dengan latihan mengingat.'],
            ['Berapa lama setiap sesi?', 'Sekitar 15-30 menit per konsep sudah cukup, terutama bila diulang beberapa hari kemudian.'],
        ],
        sources: [
            ['Chi, M. T. H. dkk. (1994). Eliciting self-explanations improves understanding. Cognitive Science', 'https://doi.org/10.1207/s15516709cog1803_3'],
            ['Dunlosky, J. dkk. (2013). Improving students\' learning with effective learning techniques', 'https://doi.org/10.1177/1529100612453266'],
            ['Active recall (artikel terkait)', 'https://muchson.web.id/artikel/active-recall-teknik-belajar-paling-efektif/'],
        ],
    },

    {
        slug: 'cara-mencatat-efektif-metode-cornell',
        title: 'Cara Mencatat Efektif dengan Metode Cornell (Plus Template)',
        description: 'Panduan metode catatan Cornell: membagi halaman, mencatat saat kuliah, membuat pertanyaan isyarat, merangkum, dan mengulang catatan.',
        date: D, category: C, tags: ['metode Cornell', 'cara mencatat', 'catatan kuliah', 'teknik belajar', 'produktivitas'], cta: 'none',
        lead: 'Banyak mahasiswa mencatat rajin, tetapi catatannya jarang dibuka lagi, atau saat dibuka terasa seperti salinan slide. Metode Cornell, yang dikembangkan Walter Pauk dari Cornell University, mengubah catatan menjadi alat belajar: setiap halaman sudah dirancang untuk diuji ulang.',
        body: [
            { h2: 'Membagi halaman' },
            { svgraw: '<svg viewBox="0 0 520 360" role="img" aria-label="Tata letak halaman catatan Cornell" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><rect x="10" y="10" width="500" height="340" rx="8" fill="#fff" stroke="#0f1a33" stroke-width="2"/><line x1="10" y1="50" x2="510" y2="50" stroke="#0f1a33" stroke-width="1.5"/><text x="24" y="36" font-size="14" font-weight="700" fill="#0f1a33">Judul, tanggal, mata kuliah</text><line x1="160" y1="50" x2="160" y2="270" stroke="#1e5ab2" stroke-width="2"/><rect x="11" y="51" width="148" height="218" fill="#e8f1ff"/><text x="85" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="#1e5ab2">Kolom isyarat</text><text x="85" y="162" text-anchor="middle" font-size="12" fill="#4a5568">pertanyaan, kata kunci</text><text x="85" y="180" text-anchor="middle" font-size="12" fill="#4a5568">(diisi setelah kelas)</text><text x="335" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="#1f7a46">Kolom catatan</text><text x="335" y="162" text-anchor="middle" font-size="12" fill="#4a5568">poin penting, contoh, diagram</text><text x="335" y="180" text-anchor="middle" font-size="12" fill="#4a5568">(diisi selama kelas)</text><line x1="10" y1="270" x2="510" y2="270" stroke="#9a5b00" stroke-width="2"/><rect x="11" y="271" width="498" height="78" fill="#fff1d6"/><text x="260" y="305" text-anchor="middle" font-size="15" font-weight="700" fill="#9a5b00">Ringkasan</text><text x="260" y="327" text-anchor="middle" font-size="12" fill="#4a5568">3-4 kalimat dengan kata-kata sendiri</text></svg>', caption: 'Kolom isyarat sekitar sepertiga lebar halaman, area ringkasan di bagian bawah.' },

            { h2: 'Lima langkah (5R)' },
            { table: { head: ['Langkah', 'Kapan', 'Yang dilakukan'], rows: [
                ['<b>Record</b> (catat)', 'Selama kelas', 'Tulis poin penting di kolom catatan dengan singkatan. Jangan menyalin semua slide.'],
                ['<b>Reduce</b> (ringkas)', 'Hari yang sama', 'Ubah catatan menjadi pertanyaan atau kata kunci di kolom isyarat.'],
                ['<b>Recite</b> (ucapkan)', 'Saat mengulang', 'Tutup kolom catatan, jawab pertanyaan di kolom isyarat dengan suara.'],
                ['<b>Reflect</b> (renungkan)', 'Setelah mengulang', 'Hubungkan dengan materi lain dan pengalaman. Tulis ringkasan di bawah.'],
                ['<b>Review</b> (ulang)', 'Berkala', 'Ulangi recite setiap minggu, terutama menjelang ujian.'],
            ] } },
            { callout: 'Langkah "recite" adalah inti kekuatan metode ini: menutup catatan lalu menjawab pertanyaan sama dengan latihan mengingat (retrieval practice), salah satu teknik belajar dengan bukti paling kuat.', kind: 'good', title: 'Kenapa metode ini berhasil' },

            { h2: 'Contoh isi halaman' },
            { table: { head: ['Kolom isyarat', 'Kolom catatan'], rows: [
                ['Apa itu fotosintesis?', 'Proses tumbuhan membuat glukosa dari CO₂ + air dengan energi cahaya; menghasilkan O₂.'],
                ['Di mana terjadi?', 'Kloroplas, terutama di sel daun (klorofil menyerap cahaya).'],
                ['Dua tahap?', '1) Reaksi terang: di membran tilakoid, menghasilkan ATP dan NADPH. 2) Siklus Calvin: di stroma, membentuk glukosa.'],
                ['Kenapa penting bagi manusia?', 'Sumber O₂ dan dasar rantai makanan.'],
            ] } },
            `Ringkasan: <i>Fotosintesis mengubah energi cahaya menjadi energi kimia (glukosa) di kloroplas lewat dua tahap, dan menghasilkan oksigen yang kita hirup.</i>`,

            { h2: 'Catatan digital atau tulisan tangan?' },
            `Studi Mueller dan Oppenheimer (2014) menemukan mahasiswa yang mencatat dengan laptop cenderung menyalin kata demi kata, dan pada soal konseptual hasilnya lebih rendah dibanding yang mencatat dengan tangan. Studi replikasi berikutnya memberi hasil yang lebih beragam. Pelajaran praktisnya: alatnya tidak sepenting caranya. Apa pun alatnya, <b>tulis dengan kata-kata sendiri</b>, jangan menyalin.`,

            { h2: 'Template untuk dicetak atau disalin' },
            { w: 'builder', title: 'Template Cornell', desc: 'Isi bagian atas, salin, dan tempel ke aplikasi catatan Anda.', fields: [
                { id: 'matkul', label: 'Mata kuliah', placeholder: 'mis. Biologi Umum' },
                { id: 'topik', label: 'Topik', placeholder: 'mis. Fotosintesis' },
                { id: 'tgl', label: 'Tanggal', placeholder: 'mis. 28/10/2026' },
            ], template: '{matkul} · {topik} · {tgl}\n\n| ISYARAT (setelah kelas) | CATATAN (selama kelas) |\n|---|---|\n| Pertanyaan 1? | ... |\n| Pertanyaan 2? | ... |\n| Pertanyaan 3? | ... |\n\nRINGKASAN (3-4 kalimat):\n...' },
            { w: 'checklist', title: 'Rutinitas mingguan', desc: 'Centang yang sudah dilakukan minggu ini.', items: ['Mengisi kolom isyarat di hari yang sama dengan kuliah.', 'Menulis ringkasan dengan kata-kata sendiri.', 'Recite: menutup catatan dan menjawab pertanyaan.', 'Mengulang catatan minggu lalu.', 'Menandai pertanyaan yang masih salah untuk ditanyakan.'] },
        ],
        faq: [
            ['Apa itu metode Cornell?', 'Sistem mencatat yang membagi halaman menjadi kolom catatan, kolom isyarat untuk pertanyaan, dan area ringkasan, sehingga catatan mudah dipakai untuk menguji diri.'],
            ['Siapa yang menciptakan metode Cornell?', 'Walter Pauk dari Cornell University, yang mempopulerkannya dalam buku How to Study in College.'],
            ['Apakah metode Cornell bisa dipakai di laptop atau tablet?', 'Bisa. Buat tabel dua kolom dan bagian ringkasan. Kuncinya menulis dengan kata sendiri dan rutin menguji diri.'],
            ['Kapan mengisi kolom isyarat?', 'Sebaiknya di hari yang sama setelah kelas, selagi materi masih segar.'],
        ],
        sources: [
            ['Cornell University Learning Strategies Center: The Cornell Note Taking System', 'https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/'],
            ['Mueller, P. A., & Oppenheimer, D. M. (2014). The pen is mightier than the keyboard. Psychological Science', 'https://doi.org/10.1177/0956797614524581'],
            ['Roediger & Karpicke (2006). Test-enhanced learning', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x'],
        ],
    },

    {
        slug: 'mind-map-cara-membuat-dan-kapan-efektif',
        title: 'Mind Map: Cara Membuat dan Kapan Benar-Benar Efektif',
        description: 'Cara membuat mind map yang membantu belajar dan berpikir, apa kata riset tentang efektivitasnya, dan kapan sebaiknya memakai alat lain.',
        date: D, category: C, tags: ['mind map', 'peta pikiran', 'teknik belajar', 'brainstorming', 'produktivitas'], cta: 'none',
        lead: 'Mind map atau peta pikiran adalah diagram yang menaruh satu ide di tengah lalu bercabang ke ide-ide terkait. Teknik ini populer untuk belajar, merencanakan, dan brainstorming. Tetapi seperti alat lain, mind map efektif untuk tugas tertentu dan kurang cocok untuk tugas lain.',
        body: [
            { h2: 'Struktur mind map' },
            { svgraw: '<svg viewBox="0 0 600 340" role="img" aria-label="Contoh mind map topik ekosistem" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><g stroke-width="3" fill="none"><path d="M300 170 C 220 120 200 90 140 70" stroke="#1e5ab2"/><path d="M300 170 C 380 120 400 90 460 70" stroke="#1f7a46"/><path d="M300 170 C 220 220 200 250 140 270" stroke="#9a5b00"/><path d="M300 170 C 380 220 400 250 460 270" stroke="#7a3fb4"/></g><g stroke-width="2" fill="none" stroke="#4a5568"><path d="M140 70 L60 40"/><path d="M140 70 L60 100"/><path d="M460 70 L540 40"/><path d="M460 70 L540 100"/><path d="M140 270 L60 240"/><path d="M140 270 L60 300"/><path d="M460 270 L540 240"/><path d="M460 270 L540 300"/></g><ellipse cx="300" cy="170" rx="80" ry="34" fill="#0f1a33"/><text x="300" y="176" text-anchor="middle" font-size="17" font-weight="700" fill="#fff">Ekosistem</text><g font-size="14" font-weight="700" text-anchor="middle"><rect x="85" y="55" width="110" height="30" rx="15" fill="#e8f1ff"/><text x="140" y="75" fill="#1e5ab2">Komponen</text><rect x="405" y="55" width="110" height="30" rx="15" fill="#e4f6cc"/><text x="460" y="75" fill="#1f7a46">Rantai makanan</text><rect x="85" y="255" width="110" height="30" rx="15" fill="#fff1d6"/><text x="140" y="275" fill="#9a5b00">Jenis</text><rect x="405" y="255" width="110" height="30" rx="15" fill="#ebe2fd"/><text x="460" y="275" fill="#7a3fb4">Gangguan</text></g><g font-size="12" fill="#0f1a33" text-anchor="middle"><text x="50" y="35">Biotik</text><text x="50" y="115">Abiotik</text><text x="550" y="35">Produsen</text><text x="550" y="115">Konsumen</text><text x="50" y="235">Darat</text><text x="50" y="315">Perairan</text><text x="550" y="235">Polusi</text><text x="550" y="315">Deforestasi</text></g></svg>', caption: 'Satu topik di tengah, cabang utama sebagai subtopik, ranting untuk detail.' },
            { ol: [
                '<b>Topik utama di tengah</b>, sebaiknya satu atau dua kata.',
                '<b>Cabang utama</b> untuk subtopik. Biasanya 3-7 cabang.',
                '<b>Ranting</b> untuk detail, contoh, dan istilah.',
                '<b>Kata kunci, bukan kalimat panjang.</b>',
                '<b>Warna atau ikon</b> untuk membedakan cabang.',
                '<b>Garis penghubung</b> antar cabang bila ada hubungan silang.',
            ] },

            { h2: 'Apa kata riset?' },
            `Farrand, Hussain, dan Hennessy (2002) menguji mind map pada mahasiswa kedokteran dan menemukan peningkatan ingatan jangka panjang atas informasi faktual dibanding metode belajar pilihan mahasiswa sendiri, walau sebagian peserta kurang termotivasi memakai teknik baru itu. Penelitian lain tentang <b>concept map</b> (peta konsep, kerabat mind map yang menekankan label hubungan) juga menunjukkan manfaat, terutama bila pelajar membuatnya sendiri, bukan sekadar membaca peta buatan orang lain.`,
            { callout: 'Manfaat terbesar datang dari proses membuat: memilih kata kunci, mengelompokkan, dan memikirkan hubungan. Menyalin mind map orang lain jauh kurang bermanfaat.', kind: 'info', title: 'Prosesnya yang penting' },

            { h2: 'Kapan mind map efektif, kapan tidak' },
            { table: { head: ['Efektif untuk', 'Kurang efektif untuk'], rows: [
                ['Brainstorming ide', 'Urutan langkah yang ketat (pakai flowchart)'],
                ['Melihat gambaran besar satu bab', 'Perbandingan banyak atribut (pakai tabel)'],
                ['Merencanakan esai atau proyek', 'Menghafal definisi rinci (pakai kartu hafalan)'],
                ['Menghubungkan konsep antar materi', 'Data angka (pakai grafik)'],
            ] } },

            { h2: 'Gabungkan dengan latihan mengingat' },
            `Cara memaksimalkan mind map untuk belajar: setelah membuat, tutup mind map itu, lalu coba gambar ulang dari ingatan di kertas kosong. Bandingkan dengan aslinya dan tambahkan yang terlupa dengan warna lain. Ini menggabungkan kekuatan visual mind map dengan latihan mengingat.`,
            { w: 'timer', title: 'Sesi mind map + recall', desc: 'Satu putaran latihan.', phases: [{ label: 'Buat mind map dari materi', sec: 900, hint: 'Kata kunci saja, 3-7 cabang utama.' }, { label: 'Istirahat', sec: 300, hint: 'Jauhkan mind map dari pandangan.' }, { label: 'Gambar ulang dari ingatan', sec: 600, hint: 'Kertas kosong, tanpa melihat aslinya.' }, { label: 'Bandingkan dan lengkapi', sec: 300, hint: 'Tandai bagian yang terlupa dengan warna lain.' }] },

            { h2: 'Alat membuat mind map' },
            { ul: ['<b>Kertas dan pensil warna:</b> paling fleksibel dan bagus untuk ingatan.', '<b>Aplikasi mind map</b> atau papan tulis digital: mudah diubah dan dibagikan.', '<b>Fitur diagram di aplikasi catatan</b> untuk mind map sederhana.'] },
        ],
        faq: [
            ['Apa itu mind map?', 'Diagram yang menaruh satu topik di tengah lalu bercabang ke subtopik dan detail, memakai kata kunci, warna, dan garis.'],
            ['Apakah mind map efektif untuk belajar?', 'Ada bukti manfaat, terutama bila dibuat sendiri dan digabung dengan latihan mengingat. Untuk hafalan rinci, kartu hafalan sering lebih efektif.'],
            ['Apa beda mind map dan concept map?', 'Mind map berpusat pada satu topik dan bercabang. Concept map bisa punya banyak pusat dan menekankan label hubungan antar konsep.'],
            ['Berapa cabang utama yang ideal?', 'Umumnya 3-7 cabang agar tetap mudah dibaca dan diingat.'],
        ],
        sources: [
            ['Farrand, P., Hussain, F., & Hennessy, E. (2002). The efficacy of the mind map study technique. Medical Education', 'https://doi.org/10.1046/j.1365-2923.2002.01205.x'],
            ['Nesbit, J. C., & Adesope, O. O. (2006). Learning with concept and knowledge maps: A meta-analysis. Review of Educational Research', 'https://doi.org/10.3102/00346543076003413'],
            ['Contoh algoritma, flowchart, dan pseudocode (artikel terkait)', 'https://muchson.web.id/artikel/contoh-algoritma-flowchart-dan-pseudocode/'],
        ],
    },

    {
        slug: 'cara-mengatasi-malas-dan-prokrastinasi',
        title: 'Cara Mengatasi Malas dan Prokrastinasi Menurut Riset',
        description: 'Kenapa kita menunda pekerjaan menurut riset, dan strategi yang terbukti: rencana jika-maka, memecah tugas, aturan 5 menit, dan atur lingkungan.',
        date: D, category: C, tags: ['prokrastinasi', 'mengatasi malas', 'menunda pekerjaan', 'produktivitas', 'kebiasaan'], cta: 'none',
        lead: 'Tugas sudah jelas, tenggat semakin dekat, tetapi tangan malah membuka media sosial. Prokrastinasi bukan sekadar malas atau kurang disiplin. Riset psikologi menunjukkan ia lebih berkaitan dengan cara kita mengelola emosi tidak nyaman dan cara tugas dirancang. Kabar baiknya, ada strategi yang terbukti membantu.',
        body: [
            { h2: 'Kenapa kita menunda?' },
            `Piers Steel (2007) dalam meta-analisis besar di <i>Psychological Bulletin</i> merangkum penelitian prokrastinasi dan merumuskan faktor-faktor yang membuat kita menunda. Secara sederhana: motivasi naik bila kita <b>yakin bisa</b> dan tugasnya <b>terasa bernilai</b>, dan turun bila kita <b>mudah teralihkan</b> dan <b>hasilnya terasa jauh</b> di masa depan.`,
            { svg: 'matrix', label: 'Faktor prokrastinasi', x: 'Nilai tugas terasa', y: 'Keyakinan bisa', quads: [{ t: 'Yakin, tapi terasa tidak penting', d: 'Hubungkan dengan tujuan pribadi' }, { t: 'Zona produktif', d: 'Yakin dan merasa bernilai' }, { t: 'Zona paling rawan menunda', d: 'Tidak yakin dan tidak bermakna' }, { t: 'Bernilai, tapi tidak yakin', d: 'Pecah tugas, mulai dari yang bisa' }] },
            { callout: 'Riset prokrastinasi juga menyoroti peran emosi: kita sering menunda untuk menghindari rasa cemas, bosan, atau takut gagal yang muncul saat memikirkan tugas. Menunda memberi lega sesaat, lalu rasa bersalah datang belakangan.', kind: 'info', title: 'Masalah emosi, bukan hanya waktu' },

            { h2: 'Strategi yang terbukti membantu' },
            { h3: '1. Rumus "jika-maka" (implementation intention)' },
            `Peter Gollwitzer meneliti rencana berbentuk <b>"Jika situasi X terjadi, maka saya melakukan Y"</b>. Meta-analisis Gollwitzer dan Sheeran (2006) menemukan rencana spesifik seperti ini meningkatkan pencapaian tujuan dengan efek yang cukup besar dibanding sekadar niat. Contoh: "Jika selesai makan malam, maka saya membuka laptop dan menulis 200 kata."`,
            { w: 'builder', title: 'Buat rencana jika-maka', desc: 'Rencana yang spesifik soal waktu, tempat, dan tindakan pertama.', fields: [
                { id: 'tugas', label: 'Tugas yang sering ditunda', placeholder: 'mis. menulis bab 2 skripsi' },
                { id: 'jika', label: 'Jika (waktu atau pemicu)', placeholder: 'mis. pukul 19.30 setelah salat Isya' },
                { id: 'di', label: 'Di mana', placeholder: 'mis. meja belajar, HP di ruang tengah' },
                { id: 'maka', label: 'Maka saya (langkah pertama yang sangat kecil)', placeholder: 'mis. membuka dokumen dan menulis 3 kalimat' },
                { id: 'hambatan', label: 'Jika tergoda membuka HP, maka saya ...', placeholder: 'mis. menulis godaannya di kertas dan kembali menulis' },
            ], template: 'RENCANA: {tugas}\nJika {jika}, di {di}, maka saya {maka}.\nJika tergoda membuka HP, maka saya {hambatan}.' },
            { h3: '2. Pecah sampai langkah pertama terasa mudah' },
            `"Kerjakan skripsi" terlalu besar dan samar. "Buka dokumen, tulis judul subbab 2.1" jelas dan kecil. Langkah pertama yang mudah mengurangi rasa enggan untuk memulai.`,
            { h3: '3. Aturan 2 menit dan "5 menit saja"' },
            `Bila sesuatu bisa selesai dalam 2 menit, kerjakan sekarang. Untuk tugas besar, janjikan pada diri sendiri hanya 5 menit. Seringkali, setelah mulai, rasa enggan menghilang dan Anda melanjutkan.`,
            { h3: '4. Atur lingkungan, bukan hanya tekad' },
            `Menjauhkan HP ke ruangan lain, menutup tab yang tidak perlu, dan memakai pemblokir situs jauh lebih andal daripada mengandalkan kemauan. Penelitian Ward dan rekan (2017) bahkan menemukan keberadaan smartphone di meja saja, walau tidak dipakai, berkaitan dengan kapasitas kognitif yang lebih rendah.`,
            { h3: '5. Maafkan diri sendiri' },
            `Studi pada mahasiswa (Wohl, Pychyl, dan Bennett, 2010) menemukan mereka yang memaafkan diri sendiri setelah menunda belajar untuk ujian pertama cenderung lebih sedikit menunda untuk ujian berikutnya. Menyalahkan diri berlebihan justru menambah emosi negatif yang memicu penundaan.`,

            { h2: 'Mulai sekarang: 5 menit' },
            { w: 'timer', title: 'Pewaktu "5 menit saja"', desc: 'Pilih satu tugas yang Anda tunda. Kerjakan hanya 5 menit. Setelah itu boleh berhenti, atau lanjut bila ingin.', phases: [{ label: 'Kerjakan langkah pertama', sec: 300, hint: 'Hanya langkah terkecil. Jangan pikirkan sisanya.' }] },
            { w: 'checklist', title: 'Daftar anti-menunda', desc: 'Centang yang sudah Anda siapkan.', items: ['Tugas dipecah menjadi langkah pertama yang sangat kecil.', 'Ada rencana jika-maka dengan waktu dan tempat.', 'HP berada di ruangan lain atau mode fokus aktif.', 'Tab dan aplikasi yang tidak perlu ditutup.', 'Ada tenggat kecil buatan sendiri sebelum tenggat sebenarnya.', 'Ada teman atau rekan yang tahu target Anda hari ini.'] },
        ],
        faq: [
            ['Apa penyebab prokrastinasi?', 'Kombinasi rendahnya keyakinan bisa menyelesaikan, tugas terasa tidak bernilai, mudah teralihkan, hasil yang terasa jauh, dan keinginan menghindari emosi tidak nyaman.'],
            ['Apakah prokrastinasi sama dengan malas?', 'Tidak selalu. Orang yang menunda sering tetap sibuk dan merasa bersalah. Masalahnya sering pada pengelolaan emosi dan rancangan tugas.'],
            ['Apa itu implementation intention?', 'Rencana spesifik berbentuk "jika situasi X, maka saya melakukan Y", yang terbukti membantu menjalankan niat.'],
            ['Kapan prokrastinasi perlu bantuan profesional?', 'Bila sangat mengganggu studi, pekerjaan, atau disertai kecemasan dan suasana hati yang buruk berkepanjangan, konsultasikan dengan psikolog.'],
        ],
        sources: [
            ['Steel, P. (2007). The nature of procrastination: A meta-analytic and theoretical review. Psychological Bulletin', 'https://doi.org/10.1037/0033-2909.133.1.65'],
            ['Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis', 'https://doi.org/10.1016/S0065-2601(06)38002-1'],
            ['Ward, A. F. dkk. (2017). Brain Drain: The mere presence of one\'s own smartphone reduces available cognitive capacity', 'https://doi.org/10.1086/691462'],
            ['Wohl, M. J. A., Pychyl, T. A., & Bennett, S. H. (2010). I forgive myself, now I can study', 'https://doi.org/10.1016/j.paid.2010.01.029'],
        ],
    },

    {
        slug: 'cara-belajar-efektif-menjelang-ujian',
        title: 'Cara Belajar Efektif Menjelang Ujian: Jadwal 2 Minggu',
        description: 'Strategi belajar menjelang ujian yang didukung riset: latihan soal, belajar berjarak, mencampur topik, tidur cukup, dan jadwal 2 minggu.',
        date: D, category: C, tags: ['cara belajar efektif', 'belajar untuk ujian', 'UTBK', 'jadwal belajar', 'teknik belajar'], cta: 'none',
        lead: 'Membaca ulang buku dan menstabilo halaman adalah cara belajar paling populer menjelang ujian, sekaligus salah satu yang paling tidak efektif menurut riset. Artikel ini merangkum strategi yang terbukti bekerja, lalu menyusunnya menjadi jadwal dua minggu yang realistis, cocok untuk ujian sekolah, UTBK, maupun ujian kuliah.',
        body: [
            { h2: 'Yang terbukti efektif dan yang tidak' },
            `Tinjauan Dunlosky dan rekan (2013) menilai sepuluh teknik belajar populer berdasarkan bukti penelitian:`,
            { svg: 'bars', label: 'Penilaian kegunaan teknik belajar (Dunlosky dkk., 2013)', data: [['Latihan soal', 3], ['Belajar berjarak', 3], ['Mencampur topik', 2], ['Menjelaskan sendiri', 2], ['Merangkum', 1], ['Menstabilo', 1], ['Membaca ulang', 1]], max: 3, caption: '3 = kegunaan tinggi, 2 = sedang, 1 = rendah. Disederhanakan dari tinjauan aslinya.' },
            { table: { head: ['Teknik', 'Kenapa efektif / tidak'], rows: [
                ['<b>Latihan soal</b> (practice testing)', 'Mengingat kembali memperkuat ingatan dan menunjukkan bagian yang belum dikuasai'],
                ['<b>Belajar berjarak</b> (distributed practice)', 'Mengulang beberapa kali dengan jeda hari lebih tahan lama dari belajar sekaligus'],
                ['Mencampur topik (interleaving)', 'Melatih memilih strategi yang tepat, seperti di ujian sebenarnya'],
                ['Membaca ulang dan menstabilo', 'Terasa produktif karena materi tampak akrab, tetapi sedikit melatih mengingat'],
            ] } },

            { h2: 'Jadwal 2 minggu' },
            { svg: 'timeline', label: 'Jadwal belajar dua minggu', events: [['Hari 1', 'Petakan materi', 'Daftar topik, nilai keyakinan 1-5'], ['Hari 2-6', 'Putaran pertama', 'Pelajari + langsung latihan soal per topik'], ['Hari 7', 'Ujian simulasi 1', 'Kondisi seperti ujian, catat yang salah'], ['Hari 8-11', 'Perbaiki kelemahan', 'Fokus topik nilai rendah, campur topik'], ['Hari 12', 'Ujian simulasi 2', 'Bandingkan dengan simulasi 1'], ['Hari 13', 'Ulang ringan', 'Kartu hafalan, rumus, kesalahan berulang'], ['Hari 14', 'Istirahat', 'Ulang singkat, tidur cukup']] },
            { w: 'calc', title: 'Bagi waktu per topik', desc: 'Berapa sesi yang bisa diberikan untuk setiap topik?', inputs: [
                { id: 'topik', label: 'Jumlah topik', value: 12, min: 3, max: 40, step: 1 },
                { id: 'hari', label: 'Hari tersedia', value: 14, min: 3, max: 60, step: 1 },
                { id: 'sesi', label: 'Sesi 45 menit per hari', value: 3, min: 1, max: 8, step: 1 },
            ], outputs: [
                { label: 'Rata-rata sesi per topik', expr: 'hari * sesi / topik', fmt: 'num', unit: 'sesi', big: true },
                { label: 'Total jam belajar', expr: 'hari * sesi * 0.75', fmt: 'num', unit: 'jam' },
                { label: 'Catatan', expr: "hari * sesi / topik < 2 ? 'Waktu sempit. Prioritaskan topik dengan bobot terbesar dan nilai keyakinan terendah.' : 'Cukup untuk minimal dua putaran per topik. Jangan lupa ujian simulasi.'", fmt: 'text' },
            ] },

            { h2: 'Cara latihan soal yang benar' },
            { ol: [
                'Kerjakan soal <b>tanpa melihat catatan</b>.',
                'Periksa jawaban dan <b>catat kesalahan</b> di "buku kesalahan": soal, jawaban salah, penyebab, cara benar.',
                'Ulang soal yang salah 2-3 hari kemudian.',
                'Campur topik pada sesi latihan, jangan selalu satu bab sekaligus.',
            ] },
            { callout: 'Buku kesalahan adalah salah satu alat paling berharga menjelang ujian. Kesalahan yang sama cenderung berulang, dan buku ini membuat Anda menghadapi pola kesalahan sendiri.', kind: 'good', title: 'Buku kesalahan' },

            { h2: 'Jangan korbankan tidur' },
            `Tidur berperan penting dalam menyimpan ingatan. Begadang semalam sebelum ujian memang menambah jam belajar, tetapi mengurangi kemampuan mengingat dan berpikir jernih keesokan harinya. Remaja 13-18 tahun dianjurkan tidur 8-10 jam, dan orang dewasa minimal 7 jam.`,

            { h2: 'Hari H' },
            { w: 'checklist', title: 'Persiapan hari ujian', desc: 'Centang yang sudah siap.', items: ['Kartu ujian, alat tulis, dan dokumen disiapkan malam sebelumnya.', 'Tidur cukup.', 'Sarapan dan air minum.', 'Berangkat lebih awal.', 'Baca semua petunjuk soal sebelum mulai.', 'Kerjakan yang mudah dulu, tandai yang sulit.', 'Sisakan waktu untuk memeriksa ulang.'] },
            { w: 'quiz', title: 'Uji pemahaman', questions: [
                { q: 'Mana cara belajar paling efektif?', options: ['Membaca ulang buku tiga kali', 'Mengerjakan soal tanpa melihat catatan lalu memeriksa', 'Menstabilo semua kalimat penting'], answer: 1, why: 'Latihan mengingat (practice testing) termasuk teknik dengan bukti paling kuat.' },
                { q: 'Belajar 6 jam untuk satu topik sebaiknya ...', options: ['Sekaligus dalam satu hari', 'Dibagi 3 hari masing-masing 2 jam', 'Semua di malam sebelum ujian'], answer: 1, why: 'Belajar berjarak menghasilkan ingatan lebih tahan lama.' },
            ] },
        ],
        faq: [
            ['Cara belajar apa yang paling efektif untuk ujian?', 'Latihan soal tanpa melihat catatan dan belajar berjarak (mengulang dalam beberapa hari) memiliki bukti paling kuat.'],
            ['Apakah membaca ulang buku efektif?', 'Kurang efektif bila dipakai sendirian, karena hanya membuat materi terasa akrab tanpa melatih mengingat.'],
            ['Berapa lama belajar sehari menjelang ujian?', 'Tergantung kondisi, tetapi sesi 25-50 menit dengan jeda dan total beberapa jam per hari lebih efektif daripada maraton tanpa istirahat.'],
            ['Apakah begadang sebelum ujian membantu?', 'Umumnya tidak. Tidur cukup membantu menyimpan materi dan berpikir jernih saat ujian.'],
        ],
        sources: [
            ['Dunlosky, J. dkk. (2013). Improving students\' learning with effective learning techniques', 'https://doi.org/10.1177/1529100612453266'],
            ['Cepeda, N. J. dkk. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin', 'https://doi.org/10.1037/0033-2909.132.3.354'],
            ['Paruthi, S. dkk. (2016). Rekomendasi jumlah tidur', 'https://doi.org/10.5664/jcsm.5866'],
            ['Spaced repetition (artikel terkait)', 'https://muchson.web.id/artikel/spaced-repetition-cara-belajar-tahan-lama/'],
        ],
    },

    {
        slug: 'kecanduan-hp-cara-fokus-kembali-saat-bekerja',
        title: 'Kecanduan HP Saat Bekerja? Cara Mengembalikan Fokus',
        description: 'Kenapa HP sangat mengganggu fokus menurut riset, biaya tersembunyi interupsi, dan langkah praktis: mode fokus, notifikasi, dan kerja mendalam.',
        date: D, category: C, tags: ['kecanduan HP', 'fokus kerja', 'deep work', 'notifikasi', 'produktivitas'], cta: 'none',
        lead: 'Niatnya hanya mengecek satu pesan, tahu-tahu 20 menit berlalu di media sosial. Kembali ke pekerjaan pun terasa berat. Ini bukan semata soal lemah kemauan. HP dan aplikasinya dirancang untuk menarik perhatian, dan otak kita membayar mahal setiap kali beralih tugas. Kabar baiknya, beberapa perubahan pengaturan dan kebiasaan bisa mengembalikan fokus.',
        body: [
            { h2: 'Biaya tersembunyi dari interupsi' },
            `Gloria Mark dan rekan (2008) dari University of California, Irvine, meneliti pekerja yang diinterupsi. Mereka menemukan orang cenderung bekerja lebih cepat setelah diinterupsi untuk mengejar ketertinggalan, tetapi dengan harga yang lebih mahal: tingkat stres, frustrasi, dan beban kerja yang dirasakan lebih tinggi. Selain itu, saat beralih dari satu tugas ke tugas lain, sebagian perhatian kita masih tertinggal di tugas sebelumnya, sehingga fokus tidak langsung pulih.`,
            `Bahkan tanpa notifikasi, HP tetap mengganggu. Eksperimen Ward dan rekan (2017) menemukan peserta yang HP-nya berada di meja (walau dalam keadaan diam) memiliki kapasitas kognitif yang tersedia lebih rendah dibanding peserta yang HP-nya diletakkan di ruangan lain.`,
            { callout: 'Bukan hanya membuka HP yang mengganggu. Menahan diri untuk tidak membukanya juga memakai energi mental. Menjauhkan HP secara fisik lebih efektif daripada sekadar bertekad.', kind: 'info', title: 'Pelajaran utama' },

            { h2: 'Ukur dulu' },
            `Periksa laporan waktu layar di HP (Digital Wellbeing di Android, Durasi Layar di iPhone). Perhatikan dua angka: total waktu layar dan jumlah membuka kunci (pickups) per hari.`,
            { w: 'calc', title: 'Hitung waktu yang hilang', desc: 'Perkiraan kasar biaya beralih fokus karena membuka HP saat bekerja.', inputs: [
                { id: 'cek', label: 'Membuka HP saat jam kerja per hari', value: 40, min: 0, max: 150, step: 5 },
                { id: 'menit', label: 'Rata-rata menit per membuka HP', value: 2, min: 0.5, max: 10, step: 0.5 },
                { id: 'pulih', label: 'Menit untuk kembali fokus setelahnya', value: 3, min: 0, max: 15, step: 1 },
            ], outputs: [
                { label: 'Waktu hilang per hari', expr: 'cek * (menit + pulih) / 60', fmt: 'num', unit: 'jam', big: true },
                { label: 'Per minggu (5 hari kerja)', expr: 'cek * (menit + pulih) / 60 * 5', fmt: 'num', unit: 'jam' },
            ] },

            { h2: 'Langkah praktis' },
            { h3: '1. Rapikan notifikasi' },
            { ul: ['Matikan notifikasi semua aplikasi kecuali yang benar-benar penting (telepon, pesan dari orang tertentu, kalender).', 'Matikan "lencana" angka merah di ikon aplikasi media sosial.', 'Ubah grup WhatsApp yang ramai menjadi senyap.'] },
            { h3: '2. Mode fokus' },
            `Android punya <b>Mode Fokus</b> di Digital Wellbeing, iPhone punya <b>Fokus</b>. Atur mode kerja yang hanya mengizinkan kontak dan aplikasi tertentu, dan jadwalkan otomatis pada jam kerja.`,
            { h3: '3. Blok kerja mendalam' },
            `Jadwalkan 1-2 blok 60-90 menit setiap hari untuk pekerjaan yang butuh konsentrasi tinggi. Selama blok ini: HP di ruangan lain atau di laci, email dan chat ditutup.`,
            { w: 'timer', title: 'Blok kerja mendalam', desc: 'Satu blok fokus lalu jeda. Ulangi bila perlu.', phases: [{ label: 'Kerja mendalam', sec: 3000, hint: 'Satu tugas saja. HP di ruangan lain.' }, { label: 'Jeda', sec: 600, hint: 'Boleh cek pesan, minum, berjalan sebentar.' }] },
            { h3: '4. Buat HP kurang menarik' },
            { ul: ['Pindahkan aplikasi media sosial dari layar utama ke folder.', 'Keluar (logout) dari aplikasi yang paling menyita waktu, sehingga butuh usaha untuk membukanya.', 'Gunakan mode layar abu-abu (grayscale) pada jam kerja bila tersedia.', 'Isi daya HP di luar kamar tidur.'] },

            { h2: 'Daftar periksa' },
            { w: 'checklist', title: 'Pengaturan fokus', desc: 'Centang yang sudah diterapkan.', items: ['Notifikasi non-penting dimatikan.', 'Mode fokus terjadwal pada jam kerja.', 'Ada 1-2 blok kerja mendalam di kalender.', 'HP di ruangan lain saat blok kerja mendalam.', 'Aplikasi media sosial tidak di layar utama.', 'Waktu cek pesan dikumpulkan di jam tertentu.', 'HP diisi daya di luar kamar tidur.'] },
        ],
        faq: [
            ['Kenapa sulit fokus karena HP?', 'Notifikasi dan aplikasi dirancang menarik perhatian, dan setiap kali beralih tugas otak butuh waktu untuk kembali fokus. Bahkan keberadaan HP di meja bisa menguras perhatian.'],
            ['Bagaimana cara mengurangi main HP saat bekerja?', 'Matikan notifikasi tidak penting, pakai mode fokus, jauhkan HP secara fisik saat bekerja, dan jadwalkan waktu khusus untuk mengecek pesan.'],
            ['Apa itu deep work?', 'Istilah dari Cal Newport untuk kerja dengan konsentrasi penuh tanpa gangguan pada tugas yang menuntut kemampuan berpikir tinggi.'],
            ['Apakah mode layar abu-abu membantu?', 'Bagi sebagian orang, menghilangkan warna membuat aplikasi terasa kurang menarik dan membantu mengurangi pemakaian iseng.'],
        ],
        sources: [
            ['Mark, G., Gudith, D., & Klocke, U. (2008). The cost of interrupted work: More speed and stress. CHI', 'https://doi.org/10.1145/1357054.1357072'],
            ['Ward, A. F. dkk. (2017). Brain Drain. Journal of the Association for Consumer Research', 'https://doi.org/10.1086/691462'],
            ['Teknik Pomodoro (artikel terkait)', 'https://muchson.web.id/artikel/teknik-pomodoro-cara-fokus-dan-pewaktunya/'],
        ],
    },

    {
        slug: 'time-blocking-cara-mengatur-jadwal-harian',
        title: 'Time Blocking: Cara Mengatur Jadwal Harian agar Selesai',
        description: 'Cara menerapkan time blocking: memetakan tugas ke blok kalender, memperkirakan waktu dengan jujur, blok cadangan, dan contoh jadwal.',
        date: D, category: C, tags: ['time blocking', 'manajemen waktu', 'jadwal harian', 'produktivitas', 'perencanaan'], cta: 'none',
        lead: 'Daftar tugas panjang tidak memberi tahu kapan setiap tugas dikerjakan. Akibatnya, hari habis untuk membalas pesan dan rapat, sementara pekerjaan penting tertunda. Time blocking mengubah daftar tugas menjadi jadwal: setiap pekerjaan mendapat blok waktu di kalender, seperti janji temu dengan diri sendiri.',
        body: [
            { h2: 'Apa itu time blocking?' },
            `<b>Time blocking</b> adalah membagi hari menjadi blok-blok waktu, masing-masing untuk satu jenis pekerjaan. Bedanya dengan daftar tugas: daftar tugas menjawab "apa", time blocking menjawab "apa dan kapan".`,
            { table: { head: ['Jam', 'Blok'], rows: [
                ['08.00-08.30', 'Rencanakan hari, cek email singkat'],
                ['08.30-10.30', '<b>Kerja mendalam:</b> laporan kuartal'],
                ['10.30-11.00', 'Balas pesan dan email (batch)'],
                ['11.00-12.00', 'Rapat tim'],
                ['13.00-14.30', '<b>Kerja mendalam:</b> desain presentasi'],
                ['14.30-15.00', 'Blok cadangan'],
                ['15.00-16.30', 'Tugas ringan: administrasi, telepon'],
                ['16.30-17.00', 'Tutup hari: tinjau, rencanakan besok'],
            ] } },

            { h2: 'Langkah membuat jadwal' },
            { ol: [
                '<b>Daftar tugas</b> hari itu atau minggu itu.',
                '<b>Pilih 1-3 tugas terpenting</b> (bisa memakai matriks Eisenhower).',
                '<b>Taruh tugas terpenting di jam energi terbaik Anda</b>, biasanya pagi bagi banyak orang.',
                '<b>Kelompokkan tugas sejenis</b>: semua email di satu blok, semua telepon di satu blok.',
                '<b>Sisipkan blok cadangan</b> untuk hal tak terduga.',
                '<b>Tinjau di akhir hari</b> dan sesuaikan jadwal besok.',
            ] },

            { h2: 'Jebakan: perkiraan waktu yang terlalu optimis' },
            `Psikolog menyebutnya <b>planning fallacy</b>: kita cenderung meremehkan berapa lama sebuah tugas akan selesai, bahkan ketika pengalaman sebelumnya menunjukkan tugas serupa memakan waktu lebih lama. Buehler, Griffin, dan Ross (1994) menemukan mahasiswa secara konsisten terlalu optimis memperkirakan waktu menyelesaikan tugas akademiknya.`,
            { w: 'calc', title: 'Koreksi perkiraan waktu', desc: 'Kalikan perkiraan awal dengan faktor koreksi dari pengalaman Anda.', inputs: [
                { id: 'kira', label: 'Perkiraan awal (menit)', value: 60, min: 10, max: 480, step: 10 },
                { id: 'faktor', label: 'Faktor koreksi (biasanya 1,3-1,5)', value: 1.5, min: 1, max: 3, step: 0.1 },
            ], outputs: [
                { label: 'Blok yang sebaiknya dijadwalkan', expr: 'kira * faktor', fmt: 'int', unit: 'menit', big: true },
            ] },
            { callout: 'Catat perkiraan dan waktu sebenarnya selama seminggu. Dari situ Anda tahu faktor koreksi pribadi Anda, yang jauh lebih akurat dari tebakan.', kind: 'good', title: 'Kalibrasi diri' },

            { h2: 'Variasi time blocking' },
            { table: { head: ['Variasi', 'Cara', 'Cocok untuk'], rows: [
                ['Task batching', 'Mengelompokkan tugas sejenis dalam satu blok', 'Email, pesan, administrasi'],
                ['Day theming', 'Satu hari untuk satu tema (Senin rapat, Selasa produksi)', 'Peran dengan banyak jenis pekerjaan'],
                ['Timeboxing', 'Batas waktu tetap untuk tugas, berhenti saat waktu habis', 'Tugas yang cenderung melebar'],
            ] } },

            { h2: 'Buat jadwal Anda' },
            { w: 'builder', title: 'Rencana blok hari ini', desc: 'Isi, salin, lalu pindahkan ke kalender.', fields: [
                { id: 'mit', label: 'Satu tugas terpenting hari ini', placeholder: 'mis. menyelesaikan draf proposal' },
                { id: 'blok1', label: 'Blok kerja mendalam (jam)', placeholder: 'mis. 08.30-10.30' },
                { id: 'batch', label: 'Blok membalas pesan dan email', placeholder: 'mis. 10.30-11.00 dan 15.30-16.00' },
                { id: 'cadangan', label: 'Blok cadangan', placeholder: 'mis. 14.30-15.00' },
                { id: 'tutup', label: 'Tutup hari', placeholder: 'mis. 16.45-17.00' },
            ], template: 'RENCANA HARI INI\nTugas terpenting: {mit}\n- Kerja mendalam: {blok1}\n- Pesan dan email: {batch}\n- Cadangan: {cadangan}\n- Tutup hari: {tutup}' },
            { w: 'checklist', title: 'Kebiasaan time blocking', desc: 'Centang yang sudah dilakukan.', items: ['Jadwal besok dibuat sebelum pulang kerja.', 'Tugas terpenting di jam energi terbaik.', 'Ada blok cadangan setiap hari.', 'Pesan dan email dikumpulkan di blok tertentu.', 'Perkiraan waktu dikoreksi dengan faktor pribadi.', 'Jadwal ditinjau dan disesuaikan saat ada perubahan, bukan ditinggalkan.'] },
        ],
        faq: [
            ['Apa itu time blocking?', 'Teknik mengatur jadwal dengan memberi setiap tugas blok waktu khusus di kalender, sehingga jelas apa yang dikerjakan dan kapan.'],
            ['Bagaimana jika jadwal berantakan karena hal mendadak?', 'Sediakan blok cadangan, dan saat jadwal berubah, susun ulang sisa hari daripada meninggalkan rencana sepenuhnya.'],
            ['Berapa panjang blok yang ideal?', 'Untuk kerja mendalam, 60-120 menit. Untuk tugas ringan, 15-30 menit yang dikelompokkan.'],
            ['Apa bedanya dengan Pomodoro?', 'Pomodoro mengatur ritme kerja dan jeda pendek. Time blocking mengatur tugas apa di jam berapa. Keduanya bisa digabung.'],
        ],
        sources: [
            ['Buehler, R., Griffin, D., & Ross, M. (1994). Exploring the "planning fallacy". Journal of Personality and Social Psychology', 'https://doi.org/10.1037/0022-3514.67.3.366'],
            ['Matriks Eisenhower (artikel terkait)', 'https://muchson.web.id/artikel/matriks-eisenhower-cara-menentukan-prioritas/'],
            ['Teknik Pomodoro (artikel terkait)', 'https://muchson.web.id/artikel/teknik-pomodoro-cara-fokus-dan-pewaktunya/'],
        ],
    },

    {
        slug: 'membaca-cepat-mitos-dan-cara-membaca-efektif',
        title: 'Membaca Cepat: Mitos, Fakta, dan Cara Membaca Lebih Efektif',
        description: 'Benarkah bisa membaca ribuan kata per menit tanpa kehilangan pemahaman? Fakta riset speed reading dan strategi membaca yang lebih efektif.',
        date: D, category: C, tags: ['membaca cepat', 'speed reading', 'cara membaca efektif', 'literasi', 'belajar'], cta: 'none',
        lead: 'Kursus membaca cepat sering menjanjikan kemampuan membaca ribuan kata per menit dengan pemahaman penuh. Klaim ini menarik di tengah banjir informasi. Tetapi riset psikologi membaca memberi gambaran yang berbeda. Kabar baiknya, ada cara yang lebih realistis untuk membaca lebih banyak dan lebih paham.',
        body: [
            { h2: 'Apa kata riset?' },
            `Keith Rayner dan rekan (2016) meninjau penelitian tentang membaca dan teknik speed reading dalam jurnal <i>Psychological Science in the Public Interest</i>. Kesimpulan utamanya: ada <b>pertukaran antara kecepatan dan pemahaman</b>. Saat membaca jauh lebih cepat dari kecepatan normal, pemahaman cenderung turun. Pembaca dewasa yang mahir umumnya membaca sekitar 200-400 kata per menit untuk teks biasa.`,
            { w: 'cards', title: 'Ketuk untuk melihat faktanya', items: [
                { tag: 'Klaim', front: '"Berhenti membaca dalam hati (subvokalisasi) akan melipatgandakan kecepatan."', backTag: 'Fakta', back: 'Suara dalam hati tampaknya membantu pemahaman. Menekannya cenderung menurunkan pemahaman, terutama untuk teks sulit.' },
                { tag: 'Klaim', front: '"Mata bisa menangkap satu baris penuh sekaligus."', backTag: 'Fakta', back: 'Area penglihatan tajam (fovea) terbatas. Kita hanya bisa mengenali sedikit huruf di sekitar titik fiksasi.' },
                { tag: 'Klaim', front: '"Aplikasi yang menampilkan satu kata sekaligus di tengah layar membuat membaca lebih cepat tanpa rugi."', backTag: 'Fakta', back: 'Cara ini menghilangkan kemampuan kembali membaca ulang bagian yang belum jelas, yang ternyata penting untuk pemahaman.' },
                { tag: 'Klaim', front: '"Membaca cepat sama dengan skimming."', backTag: 'Fakta', back: 'Skimming berguna untuk mendapat gambaran umum, tetapi bukan membaca dengan pemahaman penuh. Keduanya punya tujuan berbeda.' },
            ] },
            { callout: 'Rayner dan rekan menyimpulkan cara paling andal untuk menjadi pembaca yang lebih cepat dan efektif adalah banyak membaca, sehingga kosakata dan pengetahuan latar bertambah. Semakin banyak yang Anda tahu, semakin cepat Anda memahami teks baru.', kind: 'good', title: 'Rahasia sebenarnya' },

            { h2: 'Ukur kecepatan baca Anda' },
            { w: 'calc', title: 'Kalkulator kecepatan baca', desc: 'Baca teks yang belum pernah Anda baca dengan kecepatan nyaman, catat waktu dan jumlah katanya.', inputs: [
                { id: 'kata', label: 'Jumlah kata yang dibaca', value: 800, min: 100, max: 5000, step: 50 },
                { id: 'menit', label: 'Waktu (menit)', value: 4, min: 0.5, max: 30, step: 0.5 },
                { id: 'buku', label: 'Panjang buku (kata) untuk perkiraan', value: 70000, min: 10000, max: 300000, step: 5000 },
            ], outputs: [
                { label: 'Kecepatan baca', expr: 'kata / menit', fmt: 'int', unit: 'kata/menit', big: true },
                { label: 'Perkiraan waktu membaca buku', expr: 'buku / (kata / menit) / 60', fmt: 'num', unit: 'jam' },
                { label: 'Bila membaca 20 menit sehari, selesai dalam', expr: 'buku / (kata / menit) / 20', fmt: 'int', unit: 'hari' },
            ] },

            { h2: 'Strategi membaca efektif' },
            { h3: 'Sesuaikan cara membaca dengan tujuan' },
            { table: { head: ['Tujuan', 'Cara membaca'], rows: [
                ['Mencari informasi tertentu', 'Scanning: cari kata kunci, angka, atau judul bagian'],
                ['Menentukan apakah layak dibaca', 'Skimming: judul, pendahuluan, subjudul, kesimpulan'],
                ['Memahami dan mengingat', 'Membaca penuh dengan kecepatan nyaman, lalu menguji diri'],
                ['Mengevaluasi argumen', 'Membaca lambat, mencatat klaim dan bukti'],
            ] } },
            { h3: 'Metode SQ3R untuk buku teks' },
            { svg: 'flow', label: 'Metode SQ3R', steps: [{ t: 'Survey', d: 'lihat struktur bab' }, { t: 'Question', d: 'ubah subjudul jadi pertanyaan' }, { t: 'Read', d: 'baca untuk menjawab' }, { t: 'Recite', d: 'jawab tanpa melihat' }, { t: 'Review', d: 'ulang beberapa hari kemudian' }] },
            { h3: 'Untuk dokumen kerja' },
            { ul: ['Baca ringkasan eksekutif dan kesimpulan dulu.', 'Tentukan pertanyaan yang ingin dijawab sebelum membaca.', 'Tandai keputusan, angka, dan tenggat.', 'Untuk dokumen sangat panjang, AI bisa membantu membuat ringkasan awal, tetapi baca bagian pentingnya langsung untuk memastikan.'] },
            { w: 'checklist', title: 'Kebiasaan pembaca yang efektif', desc: 'Centang yang sudah Anda lakukan.', items: ['Membaca setiap hari, walau 15-20 menit.', 'Menentukan tujuan sebelum membaca.', 'Memilih cara membaca sesuai tujuan.', 'Menguji diri setelah membaca bab penting.', 'Mencatat kata baru dan mencari artinya.', 'Membaca beragam topik untuk memperluas pengetahuan latar.'] },
        ],
        faq: [
            ['Apakah speed reading benar-benar bisa?', 'Membaca sangat cepat bisa dilakukan, tetapi riset menunjukkan pemahaman cenderung turun. Ada pertukaran antara kecepatan dan pemahaman.'],
            ['Berapa kecepatan membaca normal?', 'Pembaca dewasa yang mahir umumnya membaca sekitar 200-400 kata per menit untuk teks biasa.'],
            ['Bagaimana cara membaca lebih cepat tanpa kehilangan pemahaman?', 'Perbanyak membaca untuk menambah kosakata dan pengetahuan latar, serta sesuaikan cara membaca dengan tujuan.'],
            ['Apa itu SQ3R?', 'Metode membaca buku teks: Survey, Question, Read, Recite, Review, yang menggabungkan pemahaman dengan latihan mengingat.'],
        ],
        sources: [
            ['Rayner, K. dkk. (2016). So much to read, so little time: How do we read, and can speed reading help? Psychological Science in the Public Interest', 'https://doi.org/10.1177/1529100615623267'],
            ['Dunlosky, J. dkk. (2013). Improving students\' learning with effective learning techniques', 'https://doi.org/10.1177/1529100612453266'],
            ['AI untuk riset dan membaca dokumen panjang (artikel terkait)', 'https://muchson.web.id/artikel/ai-untuk-riset-dan-membaca-dokumen-panjang/'],
        ],
    },
];
