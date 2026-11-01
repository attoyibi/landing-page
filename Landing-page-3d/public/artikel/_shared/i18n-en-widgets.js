/* English text for the widgets used by the algorithm, data-structure and tool articles.
   Loaded after i18n-en.js (same format: pairs = whole-word phrases, patterns = regular expressions with numbers).
   Patterns run first, then pairs, so a pattern may leave an Indonesian word that a pair translates afterwards. */
(function () {
    const I = window.ARTIKEL_I18N;
    if (!I) return;
    const pairs = [
        // frame size decoder
        ['Lebar lensa', 'Lens width'],
        ['Jembatan', 'Bridge'],
        ['Tangkai', 'Temple'],
        ['Kode', 'Code'],
        [': lebar lensa', ': lens width'],
        [', jembatan hidung', ', bridge'],
        [', panjang tangkai', ', temple length'],
        // shared controls
        ['Langkah berikutnya ▶', 'Next step ▶'],
        ['Langkah ▶', 'Step ▶'],
        ['◀ Mundur', '◀ Back'],
        ['Maju ▶', 'Next ▶'],
        ['Acak ulang', 'Shuffle again'],
        ['Atur ulang', 'Reset'],
        ['Mulai', 'Start'],
        ['Lanjut', 'Resume'],
        ['Langkah', 'Step'],
        ['langkah', 'steps'],
        ['dari', 'of'],
        ['Nilai', 'Value'],
        ['Kata', 'Word'],
        ['(kosong)', '(empty)'],
        ['kosong', 'empty'],
        ['Simpan', 'Store'],
        ['Cari', 'Find'],
        ['Hapus', 'Delete'],
        ['Kosongkan', 'Clear'],
        ['Dikosongkan.', 'Cleared.'],
        ['Fokus', 'Focus'],
        ['Istirahat', 'Break'],
        ['Urutkan', 'Sort'],
        ['Ulangi dari awal', 'Start over'],
        ['Ulangi', 'Start over'],

        // sorting (compare, sort)
        ['Susunan awal.', 'Initial order.'],
        ['Salin sisa bagian kiri.', 'Copy the rest of the left part.'],
        ['Salin sisa bagian kanan.', 'Copy the rest of the right part.'],
        ['Urutannya terbalik, jadi ditukar.', 'They are in the wrong order, so they are swapped.'],
        ['Pindahkan yang terkecil ke depan.', 'Move the smallest to the front.'],
        ['Geser ke kiri sampai tepat posisinya.', 'Shift left until it is in the right place.'],
        ['Selesai, semua sudah berurutan.', 'Done, everything is in order.'],
        ['Batang yang sedang diurutkan', 'Bars being sorted'],

        // search
        ['Angka yang dicari (data sudah terurut)', 'Number to find (data is already sorted)'],
        ['Angka yang dicari', 'Number to find'],
        ['Mencari', 'Searching for'],
        ['pencarian biner', 'binary search'],
        ['pencarian linear', 'linear search'],
        ['Jumlah pengecekan untuk angka ini: linear', 'Number of checks for this number: linear'],
        ['Biner', 'Binary'],
        ['biner', 'binary'],

        // bigo
        ['Ukuran data', 'Data size'],
        ['< 1 detik', '< 1 second'],
        ['lebih lama dari umur peradaban', 'longer than the age of civilisation'],
        ['Jumlah data (n):', 'Number of data items (n):'],
        ['Anggap satu operasi butuh 1 mikrodetik (sekitar kecepatan program sederhana).', 'Assume one operation takes 1 microsecond (roughly the speed of a simple program).'],
        ['operasi', 'operations'],
        ['detik', 'seconds'],
        ['menit', 'minutes'],
        ['jam', 'hours'],
        ['hari', 'days'],
        ['tahun', 'years'],

        // stack / queue
        ['Tumpukan (stack)', 'Stack'],
        ['Antrean (queue)', 'Queue'],
        ['Tambah (push)', 'Add (push)'],
        ['Masuk antrean', 'Enqueue'],
        ['Ambil (keluarkan)', 'Take out (pop)'],
        ['dasar tumpukan ↑ yang paling atas keluar dulu (LIFO)', 'bottom of the stack ↑ the top item comes out first (LIFO)'],
        ['Yang masuk paling awal keluar paling awal (FIFO)', 'First in, first out (FIFO)'],
        ['keluar ←', 'out ←'],
        ['← masuk', '← in'],
        ['Yang keluar:', 'Taken out:'],
        ['Kosong, tidak ada yang bisa diambil.', 'It is empty, so there is nothing to take out.'],

        // recursion
        ['Nilai n', 'Value of n'],
        ['Hitung bilangan Fibonacci ke-n', 'Compute the n-th Fibonacci number'],
        ['Rekursi biasa:', 'Plain recursion:'],
        ['pemanggilan fungsi', 'function calls'],

        // bfs grid
        ['Jalur terpendek:', 'Shortest path:'],
        ['(kotak oranye)', '(orange cells)'],
        ['Dijelajahi', 'Explored'],
        ['kotak diperiksa (biru muda).', 'cells checked (light blue).'],
        ['kotak', 'cells'],
        ['Tidak ada jalur. Dinding menutup semua jalan.', 'No path. Walls block every way.'],
        ['Menjelajah...', 'Exploring...'],
        ['Jelajahi semua', 'Explore all'],
        ['Hijau = mulai, merah = tujuan. Ketuk kotak untuk menaruh atau menghapus dinding.', 'Green = start, red = goal. Tap a cell to place or remove a wall.'],

        // hash table
        ['ketik kata, mis. apel', 'type a word, e.g. apple'],
        ['Rumus: jumlah kode huruf', 'Formula: sum of the letter codes of'],
        ['Terjadi', 'A'],
        ['tabrakan', 'collision'],
        [': laci itu sudah terisi, jadi kata ditaruh berderet.', ' occurred: that slot is already taken, so the word is chained.'],
        ['Ketemu di laci', 'Found in slot'],
        ['tanpa membuka laci lain.', 'without opening any other slot.'],
        ['Laci', 'Slot'],
        ['laci', 'slot'],

        // binary
        ['Ketuk kotak untuk membalik bit 0 dan 1. Angka di bawah tiap bit adalah nilainya jika menyala.', 'Tap a box to flip bits between 0 and 1. The number under each bit is its value when it is on.'],
        ['(biner)', '(binary)'],

        // colour contrast
        ['Warna teks', 'Text colour'],
        ['Warna latar', 'Background colour'],
        ['Teks biasa (AA 4,5)', 'Normal text (AA 4.5)'],
        ['Teks besar (AA 3)', 'Large text (AA 3)'],
        ['Contoh teks besar', 'Large text sample'],
        ['Contoh teks biasa untuk dibaca.', 'Normal text sample for reading.'],
        ['Teks', 'Text'],
        ['Latar', 'Background'],

        // password strength
        ['Coba ketik contoh kata sandi (jangan yang asli)', 'Try typing a sample password (not a real one)'],
        ['Contoh kata sandi', 'Sample password'],
        ['Ketik sesuatu untuk melihat perkiraannya. Tidak ada yang dikirim ke mana pun.', 'Type something to see the estimate. Nothing is sent anywhere.'],
        ['kurang dari 1 detik', 'less than 1 second'],
        ['ribuan tahun atau lebih', 'thousands of years or more'],
        ['langsung ketemu karena pola umum', 'found immediately because it is a common pattern'],
        ['Sangat lemah', 'Very weak'],
        ['Sangat kuat', 'Very strong'],
        ['Lemah', 'Weak'],
        ['Sedang', 'Fair'],
        ['Kuat', 'Strong'],

        // next token
        ['Kalimat selesai. Model tidak punya kelanjutan lagi untuk kata ini.', 'The sentence is finished. The model has no further continuation for this word.'],
        ['Kata berikutnya dan peluangnya. Ketuk untuk memilih sendiri:', 'Next words and their probabilities. Tap to choose one yourself:'],
        ['Pilih acak sesuai peluang', 'Pick at random by probability'],

        // regex
        ['Pola regex', 'Regex pattern'],
        ['Teks yang diuji', 'Text under test'],
        ['Teks uji', 'Test text'],
        ['Pola belum valid:', 'The pattern is not valid yet:'],

        // sql playground
        ['(tanpa filter)', '(no filter)'],
        ['Kolom filter', 'Filter column'],
        ['mengandung (LIKE)', 'contains (LIKE)'],
        ['(tanpa urutan)', '(no ordering)'],
        ['naik (ASC)', 'ascending (ASC)'],
        ['turun (DESC)', 'descending (DESC)'],
        ['Arah', 'Direction'],
        ['Urutkan (ORDER BY)', 'Sort (ORDER BY)'],

        // tracer
        ['Kode program', 'Program code'],
        ['Variabel global', 'Global variables'],
        ['(belum ada variabel)', '(no variables yet)'],
        ['Memori', 'Memory'],
        ['Keluaran (print)', 'Output (print)'],
        ['(belum ada)', '(none yet)'],
        ['Program selesai.', 'The program has finished.'],
        [': akan menjalankan baris', ': about to run line'],

        // truth table
        ['Ekspresi (variabel p, q, r, s)', 'Expression (variables p, q, r, s)'],
        ['Ekspresi logika', 'Logical expression'],
        ['Gunakan variabel satu huruf (p, q, r), dan, or, not, tanda kurung.', 'Use single-letter variables (p, q, r), and, or, not, and parentheses.'],
        ['Maksimal 4 variabel.', 'At most 4 variables.'],
        ['Ekspresi belum valid.', 'The expression is not valid yet.'],

        // nested loops
        ['Baris luar', 'The outer loop'],
        ['eksekusi badan perulangan.', 'executions of the loop body.'],
        ['Eksekusi ke-', 'Execution #'],
        ['Perulangan dalam selesai penuh dulu sebelum', 'The inner loop finishes completely before'],
        ['bertambah.', 'increases.'],

        // slicing
        ['Awal, akhir, dan langkah harus bilangan bulat; langkah tidak boleh 0.', 'Start, end and step must be integers; the step cannot be 0.'],
        ['Akhir (tidak termasuk)', 'End (not included)'],
        ['Awal', 'Start'],
        ['Akhir', 'End'],

        // linked list
        ['Sisip di depan (head)', 'Insert at the front (head)'],
        [': buat node baru, arahkan ke head lama, lalu head menunjuk node baru.', ': create a new node, point it at the old head, then make head point at the new node.'],
        [', tak peduli panjang list.', ', no matter how long the list is.'],
        ['Sisip di belakang dengan pointer tail', 'Insert at the back with a tail pointer'],
        [': tail.next diarahkan ke node baru.', ': tail.next is pointed at the new node.'],
        ['Sisip di belakang tanpa tail', 'Insert at the back without a tail'],
        [': harus menelusuri dari head sampai node terakhir:', ': you must walk from head to the last node:'],
        ['Sisip di depan', 'Insert at the front'],
        ['Sisip di belakang', 'Insert at the back'],
        ['Hapus nilai', 'Delete value'],
        ['Cari nilai', 'Find value'],
        [': telusuri sampai node sebelumnya (', ': walk to the previous node ('],
        ['), lalu sambungkan ke node sesudahnya. Pencarian O(n), pengaitan ulang O(1).', '), then link it to the node after. Searching is O(n), relinking is O(1).'],
        ['Simpan pointer tail (sisip belakang jadi O(1))', 'Keep a tail pointer (inserting at the back becomes O(1))'],
        ['Coba sisip dan cari. Perhatikan jumlah langkah penelusuran pada tiap operasi.', 'Try inserting and searching. Notice the number of traversal steps in each operation.'],
        ['Linked list tidak bisa melompat ke indeks, tidak seperti array: akses O(n).', 'A linked list cannot jump to an index like an array can: access is O(n).'],

        // binary search tree
        ['Pohon masih kosong. Sisipkan nilai.', 'The tree is still empty. Insert a value.'],
        ['Jumlah node:', 'Number of nodes:'],
        ['tinggi pohon:', 'tree height:'],
        ['Sisipkan', 'Insert'],
        ['Isi contoh', 'Fill with example'],
        ['Isi menaik (buruk)', 'Fill ascending (bad)'],
        ['Pohon seimbang.', 'A balanced tree.'],
        ['Sisipan terurut membuat pohon melengkung menjadi "linked list": tinggi = jumlah node, pencarian O(n).', 'Inserting in order bends the tree into a "linked list": height = number of nodes, searching is O(n).'],
        ['In-order (kiri, akar, kanan)', 'In-order (left, root, right)'],
        ['Pre-order (akar, kiri, kanan)', 'Pre-order (root, left, right)'],
        ['Post-order (kiri, kanan, akar)', 'Post-order (left, right, root)'],
        ['Per tingkat (BFS)', 'By level (BFS)'],
        ['. Perhatikan: hasil in-order BST selalu terurut menaik.', '. Notice: the in-order result of a BST is always in ascending order.'],
        ['Pohon contoh.', 'Example tree.'],
        ['Coba sisip nilai atau jalankan penelusuran.', 'Try inserting a value or running a traversal.'],
        ['Nilai tidak valid atau sudah ada (BST ini tidak menyimpan duplikat).', 'The value is invalid or already present (this BST does not store duplicates).'],
        ['Pohon biner pencarian', 'Binary search tree'],

        // graph search
        ['BFS (antrean)', 'BFS (queue)'],
        ['DFS (tumpukan)', 'DFS (stack)'],
        ['Antrean (depan → belakang)', 'Queue (front → back)'],
        ['Tumpukan (dasar → puncak)', 'Stack (bottom → top)'],
        ['Urutan kunjungan:', 'Visiting order:'],
        ['depan antrean', 'front of the queue'],
        ['puncak tumpukan', 'top of the stack'],
        ['antrean', 'queue'],
        ['tumpukan', 'stack'],
        ['Graf yang dijelajahi', 'Graph being explored'],

        // tower of hanoi
        ['Jumlah cakram', 'Number of discs'],
        ['· langkah minimum', '· minimum steps'],
        ['Menara Hanoi', 'Tower of Hanoi'],
        ['A (asal)', 'A (source)'],
        ['B (bantu)', 'B (spare)'],
        ['C (tujuan)', 'C (target)'],

        // timer
        ['Pomodoro', 'Pomodoro'],
    ];

    const patterns = [
        // sorting steps
        ['Gabung bagian \\[(\\d+)\\.\\.(\\d+)\\]: bandingkan kiri (\\S+) dan kanan (\\S+), ambil (\\S+)\\.', 'Merge section [$1..$2]: compare left $3 and right $4, take $5.'],
        ['Bagian \\[(\\d+)\\.\\.(\\d+)\\] sudah terurut\\.', 'Section [$1..$2] is now sorted.'],
        ['Pilih pivot (\\S+) \\(elemen terakhir bagian \\[(\\d+)\\.\\.(\\d+)\\]\\)\\.', 'Choose pivot $1 (the last element of section [$2..$3]).'],
        ['Bandingkan (\\S+) dengan pivot (\\S+)\\.', 'Compare $1 with pivot $2.'],
        ['(\\S+) lebih kecil dari pivot: tukar ke sisi kiri\\.', '$1 is smaller than the pivot: swap it to the left side.'],
        ['Pivot (\\S+) menempati posisi akhirnya \\(indeks (\\d+)\\)\\.', 'Pivot $1 takes its final position (index $2).'],
        ['Bandingkan (\\S+) dan (\\S+)\\.', 'Compare $1 and $2.'],
        ['Cari yang terkecil: (\\S+) vs (\\S+)\\.', 'Find the smallest: $1 vs $2.'],

        // hash table
        ['Laci \\[(\\d+)\\] diperiksa, kata tidak ada\\.', 'Slot [$1] checked, the word is not there.'],

        // linked list and BST sentences with numbers
        ['Nilai (\\S+) tidak ada di list\\. Pencarian memeriksa semua (\\d+) node: O\\(n\\)\\.', 'Value $1 is not in the list. The search checked all $2 nodes: O(n).'],
        ['Nilai (\\S+) <b>tidak ditemukan</b> setelah memeriksa (\\d+) node\\. O\\(n\\)\\.', 'Value $1 was not found after checking $2 nodes. O(n).'],
        ['Nilai (\\S+) ditemukan di indeks (\\d+) setelah', 'Value $1 was found at index $2 after'],
        ['^Hapus (\\S+)$', 'Delete $1'],
        ['(\\d+) langkah, O\\(n\\)', '$1 steps, O(n)'],
        ['1 langkah, O\\(1\\)', '1 step, O(1)'],
        ['Sisip (\\S+): bandingkan dengan akar, ke kiri bila lebih kecil, ke kanan bila lebih besar, sampai menemukan tempat kosong\\.', 'Insert $1: compare with the root, go left if smaller and right if larger, until an empty spot is found.'],
        ['(\\S+) ditemukan setelah (\\d+) perbandingan \\(jalur: ([^)]*)\\)\\. Pohon seimbang membuat jalurnya pendek: O\\(log n\\)\\.', '$1 was found after $2 comparisons (path: $3). A balanced tree keeps the path short: O(log n).'],
        ['(\\S+) tidak ada\\. Jalur yang diperiksa: (.*)\\.', '$1 is not there. Path checked: $2.'],

        // graph search
        ['^Mulai dari (\\S+): masukkan ke (antrean|tumpukan)\\.$', 'Start from $1: add it to the $2.'],
        ['^Ambil (\\S+) dari (depan antrean|puncak tumpukan) dan kunjungi\\.$', 'Take $1 from the $2 and visit it.'],
        ['^Tetangga (\\S+) yang belum dikunjungi \\((.*)\\) dimasukkan\\.$', 'The unvisited neighbours of $1 ($2) are added.'],
        ['^(\\S+) tidak punya tetangga baru\\.$', '$1 has no new neighbours.'],
        ['^Selesai\\. Urutan kunjungan: (.*)\\.$', 'Done. Visiting order: $1.'],

        // nested loops, hanoi, sql, regex
        [' berjalan (\\d+) kali, baris dalam', ' runs $1 times, the inner loop'],
        [' berjalan (\\d+) kali tiap putaran luar\\. Total', ' runs $1 times for each outer round. Total'],
        ['(\\d+) baris', '$1 rows'],
        ['(\\d+) kecocokan ditemukan\\.', '$1 matches found.'],

        // frame size decoder
        ['^Ketik angka yang tercetak di sisi dalam tangkai kacamata lama Anda, misalnya (\\S+)\\.$', 'Enter the numbers printed on the inside of your old glasses\' temple, for example $1.'],
        ['^kecil \\(cocok wajah kecil / anak\\)$', 'small (suits a small face / a child)'],
        ['^sedang \\(paling umum untuk dewasa\\)$', 'medium (the most common for adults)'],
        ['^besar \\(wajah lebar atau selera oversize\\)$', 'large (a wide face or an oversize taste)'],
        ['^lensa (\\d+) mm$', 'lens $1 mm'],
        ['Lebar total frame sekitar', 'Total frame width is about'],
        ['Ukuran lensa tergolong', 'The lens size counts as'],
    ];

    I.pairs.push(...pairs);
    I.patterns.push(...patterns);
})();
