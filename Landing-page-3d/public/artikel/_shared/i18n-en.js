/* English text for the interactive widgets (loaded only on /en/articles/ pages, before article.js).
   The widgets build their own interface text in Indonesian; article.js translates it on English pages with this table.
   Text that comes from an article's own content (titles, questions, sample documents) is translated in artikel-src/content-en/, not here.

   pairs     [Indonesian, English]. Whole words only, case-sensitive. Longer entries win, so put full sentences freely.
   patterns  [regular expression source, replacement] for text that contains numbers.
   To translate a new widget: run `npm run a11y -- --lang en --leaks` after translating an article; it lists every Indonesian
   phrase that is still visible, ready to be pasted here. */
window.ARTIKEL_I18N = {
    pairs: [
        // shared frame and controls
        ['Coba sendiri', 'Try it yourself'],
        ['Salin teks', 'Copy text'],
        ['Tersalin ✓', 'Copied ✓'],
        ['Tautan disalin ✓', 'Link copied ✓'],
        ['Tautan disalin', 'Link copied'],
        ['Salin tautan', 'Copy link'],
        ['Putar otomatis', 'Auto-play'],
        ['Jeda', 'Pause'],
        ['Ulang', 'Reset'],

        // quiz
        ['Mantap, pemahaman Anda sudah kuat.', 'Great, your understanding is solid.'],
        ['Lumayan. Baca ulang bagian yang masih meragukan.', 'Not bad. Re-read the parts you are still unsure about.'],
        ['Tidak apa-apa, coba baca ulang dari awal lalu ulangi kuisnya.', "That's okay. Re-read from the start, then retake the quiz."],
        ['Ulangi kuis', 'Retake the quiz'],
        ['Benar.', 'Correct.'],
        ['Belum tepat.', 'Not quite.'],
        ['Pertanyaan berikutnya', 'Next question'],
        ['Lihat hasil', 'See the result'],

        // cards
        ['Mitos', 'Myth'],
        ['Fakta', 'Fact'],

        // chunk
        ['Ukuran potongan', 'Chunk size'],
        ['Tumpang tindih', 'Overlap'],
        ['kata', 'words'],
        ['Terlalu kecil: kalimat terpotong dan konteks hilang.', 'Too small: sentences are cut off and context is lost.'],
        ['Terlalu besar: satu potongan memuat banyak topik, pencarian jadi kurang tajam.', 'Too large: one chunk covers many topics, so the search becomes less precise.'],
        ['Ukuran menengah biasanya jadi titik awal yang masuk akal.', 'A medium size is usually a sensible starting point.'],
        ['Tanpa tumpang tindih, kalimat di perbatasan bisa terpisah dari konteksnya.', 'With no overlap, a sentence at the boundary can be separated from its context.'],

        // minirag
        ['Tanyakan sesuatu tentang dokumen di bawah', 'Ask something about the documents below'],
        ['Jumlah potongan', 'Number of chunks'],
        ['Potongan yang diambil (top-k)', 'Chunks retrieved (top-k)'],
        ['Pertanyaan', 'Question'],
        ['1. Pencarian:', '1. Search:'],
        ['setiap dokumen diberi skor berdasarkan kata penting yang cocok dengan pertanyaan.', 'each document is scored by the important words it shares with the question.'],
        ['skor', 'score'],
        ['✓ diambil', '✓ retrieved'],
        ['2. Prompt yang dikirim ke model bahasa:', '2. Prompt sent to the language model:'],
        ['Jawab hanya berdasarkan dokumen berikut. Jika tidak ada jawabannya, katakan tidak tahu.', 'Answer only from the documents below. If the answer is not there, say you do not know.'],
        ['Tidak ada dokumen yang cocok. Sistem yang baik menjawab "saya tidak menemukan informasinya" daripada mengarang.', 'No document matches. A good system answers "I could not find that information" instead of making something up.'],

        // eyefocus
        ['Panjang bola mata (geser): pendek ← → panjang', 'Eyeball length (slide): short ← → long'],
        ['Panjang bola mata', 'Eyeball length'],
        ['Pakai kacamata', 'Wear glasses'],
        ['Skema cahaya yang masuk ke mata', 'Diagram of light entering the eye'],
        ['lensa kacamata mengatur titik fokus', 'the glasses lens adjusts the focus point'],
        ['Dengan kacamata:', 'With glasses:'],
        ['titik fokus dipindahkan tepat ke retina, gambar jadi tajam.', 'the focus point is moved exactly onto the retina, so the image is sharp.'],
        ['Rabun jauh (miopia / minus):', 'Short-sighted (myopia / minus):'],
        ['bola mata terlalu panjang, fokus jatuh', 'the eyeball is too long, so focus falls'],
        ['di depan', 'in front of'],
        ['Benda jauh jadi buram.', 'Distant objects look blurred.'],
        ['Rabun dekat (hipermetropia / plus):', 'Long-sighted (hyperopia / plus):'],
        ['bola mata terlalu pendek, fokus jatuh', 'the eyeball is too short, so focus falls'],
        ['di belakang', 'behind'],
        ['Mata normal (emetropia):', 'Normal eye (emmetropia):'],
        ['fokus jatuh tepat di retina.', 'focus falls exactly on the retina.'],

        // astig
        ['Arah silinder (derajat)', 'Cylinder axis (degrees)'],
        ['Besar silinder (dioptri)', 'Cylinder power (dioptres)'],
        ['Arah silinder', 'Cylinder axis'],
        ['Besar silinder', 'Cylinder power'],
        ['Simulasi tampilan jam astigmatisme', 'Simulated astigmatism clock dial'],
        ['Tanpa silinder: semua garis sama tajam.', 'No cylinder: all lines are equally sharp.'],
        ['Garis pada arah tertentu tampak lebih kabur dari yang lain. Itulah ciri khas silinder.', 'Lines in one direction look blurrier than the others. That is the typical sign of a cylinder.'],

        // rx
        ['Mata kanan (OD)', 'Right eye (OD)'],
        ['Mata kiri (OS)', 'Left eye (OS)'],
        ['Kanan', 'Right'],
        ['Kiri', 'Left'],
        ['ADD (opsional)', 'ADD (optional)'],
        ['(rabun jauh)', '(short-sighted)'],
        ['(rabun dekat)', '(long-sighted)'],
        ['tanpa minus/plus', 'no minus/plus'],
        ['pada sumbu', 'at axis'],
        [': tambahan untuk membaca dekat (lensa baca/progresif/bifokal).', ': extra power for near reading (reading, progressive or bifocal lenses).'],
        [': jarak antar pupil, dipakai untuk memusatkan lensa pada frame.', ': the distance between the pupils, used to centre the lenses in the frame.'],
        ['Penjelasan umum untuk belajar membaca resep, bukan pengganti pemeriksaan dan saran dokter atau optometris.', 'A general explanation to help you learn to read a prescription, not a substitute for an examination and advice from a doctor or optometrist.'],
    ],
    patterns: [
        ['(\\d+) dari (\\d+) selesai', '$1 of $2 done'],
        ['(\\d+) potongan\\. Setiap warna adalah satu potongan yang disimpan dan dicari terpisah\\.', '$1 chunks. Each colour is one chunk that is stored and searched separately.'],
        ['^silinder ([\\d.,-]+)', 'cylinder $1'],
    ],
};
