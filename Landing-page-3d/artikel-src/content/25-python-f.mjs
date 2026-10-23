const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_CLRS = ['Cormen, Leiserson, Rivest, Stein, Introduction to Algorithms (edisi ke-4, MIT Press, 2022)', ''];
const REF_SEDGE = ['Robert Sedgewick dan Kevin Wayne, Algorithms (edisi ke-4), materi pendamping algs4.cs.princeton.edu', 'https://algs4.cs.princeton.edu/'];
const REF_MIT6006 = ['MIT OpenCourseWare 6.006: Introduction to Algorithms', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'];
const REF_COLL = ['Dokumentasi Python: collections (deque)', 'https://docs.python.org/3/library/collections.html#collections.deque'];

const GRAF = { nodes: [{ id: 'A', x: 50, y: 70 }, { id: 'B', x: 170, y: 35 }, { id: 'C', x: 170, y: 105 }, { id: 'D', x: 300, y: 35 }, { id: 'E', x: 300, y: 105 }, { id: 'F', x: 420, y: 70 }], edges: [['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'E'], ['D', 'F'], ['E', 'F']], start: 'A' };

export default [
    {
        slug: 'stack-dan-queue-python-implementasi-dan-aplikasi',
        title: 'Stack dan Queue di Python: Implementasi dan Aplikasi',
        description: 'Implementasikan stack dan queue di Python untuk kurung seimbang, postfix, dan antrean, plus priority queue dengan heapq, dengan kode yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['stack', 'queue', 'deque', 'postfix', 'struktur data'], cta: 'none',
        prereq: ['list Python', 'kelas dasar', 'konsep stack dan queue'],
        lead: 'Stack dan queue sederhana secara konsep, tetapi aplikasinya luas: kompiler memeriksa kurung dengan stack, sistem operasi menjadwalkan proses dengan queue, dan algoritma graf bergantung pada keduanya. Materi ini menjembatani konsep dengan implementasi dan menunjukkan masalah nyata yang diselesaikannya.',
        body: [
            { objectives: ['mengimplementasikan stack dengan list dan queue dengan deque', 'memakai stack untuk memeriksa kurung seimbang dan mengevaluasi ekspresi postfix', 'memakai queue untuk simulasi antrean', 'memakai priority queue dengan heapq', 'memilih struktur yang tepat berdasarkan pola akses'] },
            { h2: 'Ulasan cepat' },
            { w: 'stack', title: 'Stack dan queue: coba dulu', desc: 'Tambahkan beberapa huruf, lalu ambil. Perhatikan siapa yang keluar duluan pada masing-masing mode.' },
            { h2: 'Implementasi dengan kelas' },
            { code: py`from collections import deque

class Stack:
    def __init__(self):
        self._data = []
    def push(self, x):  self._data.append(x)          # O(1)
    def pop(self):
        if not self._data:
            raise IndexError("stack kosong")
        return self._data.pop()                       # O(1)
    def peek(self):     return self._data[-1]
    def kosong(self):   return not self._data
    def __len__(self):  return len(self._data)

class Queue:
    def __init__(self):
        self._data = deque()
    def enqueue(self, x): self._data.append(x)        # O(1)
    def dequeue(self):    return self._data.popleft() # O(1); list.pop(0) akan O(n)
    def kosong(self):     return not self._data
    def __len__(self):    return len(self._data)

s = Stack()
for x in "ABC": s.push(x)
print([s.pop() for _ in range(3)])      # ['C', 'B', 'A']  (LIFO)
q = Queue()
for x in "ABC": q.enqueue(x)
print([q.dequeue() for _ in range(3)])  # ['A', 'B', 'C']  (FIFO)`, lang: 'python', run: true },
            { h2: 'Aplikasi 1: memeriksa kurung seimbang' },
            `Setiap kurung tutup harus berpasangan dengan kurung buka <b>terakhir</b> yang belum tertutup, itu persis perilaku stack.`,
            { code: py`def seimbang(teks):
    pasangan = {")": "(", "]": "[", "}": "{"}
    tumpuk = []
    for ch in teks:
        if ch in "([{":
            tumpuk.append(ch)
        elif ch in ")]}":
            if not tumpuk or tumpuk.pop() != pasangan[ch]:
                return False
    return not tumpuk              # harus kosong di akhir

for t in ["(a + b) * [c - d]", "((a + b)", "{[(])}", "", "(()())"]:
    print(f"{t!r:22} -> {seimbang(t)}")`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri pemeriksaan "{[()]}"', desc: 'Perhatikan isi tumpuk bertambah saat kurung buka dan berkurang saat kurung tutup yang cocok.', code: py`teks = "{[()]}"
pasangan = {")": "(", "]": "[", "}": "{"}
tumpuk = []
ok = True
for ch in teks:
    if ch in "([{":
        tumpuk.append(ch)
    else:
        if not tumpuk or tumpuk.pop() != pasangan[ch]:
            ok = False
print(ok and not tumpuk)` },
            { h2: 'Aplikasi 2: mengevaluasi ekspresi postfix' },
            `Notasi postfix (RPN) menaruh operator <i>setelah</i> operandnya, sehingga tidak perlu tanda kurung dan presedensi. Ekspresi <code>(3 + 4) * 2</code> menjadi <code>3 4 + 2 *</code>. Evaluasinya trivial dengan stack: angka di-push, operator mengambil dua angka teratas lalu mendorong hasilnya.`,
            { code: py`def hitung_postfix(ekspresi):
    tumpuk = []
    for token in ekspresi.split():
        if token in "+-*/":
            b, a = tumpuk.pop(), tumpuk.pop()      # b diambil lebih dulu
            tumpuk.append({"+": a + b, "-": a - b, "*": a * b, "/": a / b}[token])
        else:
            tumpuk.append(float(token))
    return tumpuk.pop()

print(hitung_postfix("3 4 + 2 *"))         # (3 + 4) * 2 = 14
print(hitung_postfix("5 1 2 + 4 * + 3 -")) # 5 + ((1 + 2) * 4) - 3 = 14
print(hitung_postfix("10 2 8 * + 3 -"))    # 10 + 2 * 8 - 3 = 23`, lang: 'python', run: true },
            { callout: 'Urutan pengambilan penting untuk operator yang tidak komutatif: pada <code>8 3 -</code>, 3 di-pop lebih dulu (jadi b) dan 8 sebagai a, sehingga hasilnya 8 - 3 = 5, bukan -5.', kind: 'warn', title: 'Jebakan umum' },
            { h2: 'Aplikasi 3: simulasi antrean' },
            { code: py`from collections import deque

pelanggan = deque([("Ani", 3), ("Budi", 2), ("Citra", 4)])   # (nama, lama layanan menit)
waktu = 0
while pelanggan:
    nama, lama = pelanggan.popleft()          # yang paling dulu datang dilayani lebih dulu
    mulai = waktu
    waktu += lama
    print(f"{nama:<6} dilayani menit {mulai:>2}-{waktu:<2} (menunggu {mulai} menit)")`, lang: 'python', run: true },
            { h2: 'Priority queue: yang terpenting keluar dulu' },
            { code: py`import heapq

igd = []
heapq.heappush(igd, (3, "Demam ringan"))      # angka lebih kecil = lebih darurat
heapq.heappush(igd, (1, "Henti jantung"))
heapq.heappush(igd, (2, "Patah tulang"))
while igd:
    prioritas, kasus = heapq.heappop(igd)       # O(log n)
    print(prioritas, kasus)`, lang: 'python', run: true, caption: 'heapq mengimplementasikan min-heap pada list biasa. push dan pop masing-masing O(log n).' },
            { h2: 'Memilih struktur' },
            { table: { head: ['Kebutuhan', 'Struktur', 'Python'], rows: [['Yang terakhir masuk keluar dulu (undo, rekursi, kurung)', 'Stack', 'list: append / pop'], ['Yang pertama masuk keluar dulu (antrean, BFS)', 'Queue', 'collections.deque: append / popleft'], ['Yang terpenting keluar dulu (penjadwalan, Dijkstra)', 'Priority queue', 'heapq'], ['Ambil dari kedua ujung', 'Deque', 'collections.deque']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa queue sebaiknya memakai deque, bukan list, bila besar?', options: ['deque lebih mudah ditulis', 'list.pop(0) O(n), deque.popleft() O(1)', 'list tidak bisa jadi queue'], answer: 1, why: 'Menghapus di depan list menggeser semua elemen.' }, { q: 'Hasil postfix "6 2 /"?', options: ['3.0', '0.333', '8'], answer: 0, why: '6 / 2 = 3.' }, { q: 'Struktur yang dipakai untuk memeriksa kurung seimbang?', options: ['Queue', 'Stack', 'Set'], answer: 1, why: 'Kurung tutup cocok dengan kurung buka terakhir.' }] },
            { exercise: [['Ubah <code>seimbang</code> agar mengembalikan posisi kesalahan pertama, atau -1 bila seimbang.', 'Simpan pasangan (karakter, indeks) di tumpuk. Saat tidak cocok, kembalikan indeks karakter itu; di akhir, bila tumpuk tidak kosong, kembalikan indeks kurung buka teratas.'], ['Evaluasi manual postfix <code>4 5 + 2 3 * -</code>.', '4 5 + = 9; 2 3 * = 6; 9 6 - = 3.'], ['Tulis fungsi yang membalik string memakai stack.', '<code>def balik(s):\n    t = list(s); hasil = ""\n    while t: hasil += t.pop()\n    return hasil</code>'], ['Mengapa BFS memakai queue sedangkan DFS memakai stack?', 'BFS menjelajah per lapisan jarak sehingga yang ditemukan lebih dulu diproses lebih dulu (FIFO); DFS menyelam ke simpul yang terakhir ditemukan (LIFO).']] },
            { summary: ['Stack (LIFO): list dengan append dan pop; queue (FIFO): deque dengan append dan popleft.', 'Stack untuk kurung seimbang, postfix, undo, dan rekursi; queue untuk antrean dan BFS.', 'Priority queue dengan heapq: operasi O(log n).', 'Pilih deque, bukan list, untuk antrean besar.'] },
        ],
        faq: [['Bagaimana mengubah infix menjadi postfix?', 'Dengan algoritma shunting-yard dari Dijkstra: stack operator dan keluaran, dengan membandingkan presedensi operator.'], ['Apakah ada batas ukuran stack?', 'Stack sebagai struktur data bebas, dibatasi memori. Call stack Python punya batas kedalaman rekursi (bawaan sekitar 1000).'], ['Apa bedanya queue.Queue dan collections.deque?', 'queue.Queue aman digunakan antar thread dan menawarkan penguncian. Untuk satu thread, deque lebih ringan dan cepat.']],
        sources: [REF_COLL, ['Dokumentasi Python: heapq, Heap queue algorithm', 'https://docs.python.org/3/library/heapq.html'], REF_CLRS, REF_SEDGE],
    },

    {
        slug: 'binary-search-tree-python-insert-search-delete-dan-traversal',
        title: 'Binary Search Tree: Insert, Search, Delete, dan Traversal',
        description: 'Pelajari binary search tree: sisip, cari, hapus, traversal, dan kompleksitas seimbang vs miring, dengan visualisasi interaktif dan kode Python.',
        date: D, category: C, level: 'Menengah', tags: ['binary search tree', 'BST', 'pohon biner', 'traversal', 'struktur data'], cta: 'none',
        prereq: ['rekursi', 'kelas dan objek', 'binary search'],
        lead: 'Binary search tree (BST) menggabungkan kecepatan pencarian biner dengan kemudahan menyisip dan menghapus pada linked list. Syaratnya satu aturan sederhana: semua nilai di kiri lebih kecil dan semua nilai di kanan lebih besar. Dari aturan itu lahir pencarian yang sangat cepat, selama pohonnya tidak melengkung.',
        body: [
            { objectives: ['menyatakan sifat BST dan memeriksa apakah sebuah pohon valid', 'mengimplementasikan sisip, cari, minimum, dan tinggi', 'menghapus node pada tiga kasus: daun, satu anak, dua anak', 'melakukan traversal in-order, pre-order, post-order, dan per tingkat', 'menjelaskan mengapa kompleksitas bergantung pada tinggi pohon'] },
            { h2: 'Sifat BST' },
            { svg: 'diagram', w: 560, h: 250, label: 'Contoh BST', nodes: [{ id: '50', x: 280, y: 30, shape: 'circle', w: 46, h: 46, t: '50' }, { id: '30', x: 160, y: 110, shape: 'circle', w: 46, h: 46, t: '30' }, { id: '70', x: 400, y: 110, shape: 'circle', w: 46, h: 46, t: '70' }, { id: '20', x: 100, y: 190, shape: 'circle', w: 46, h: 46, t: '20' }, { id: '40', x: 220, y: 190, shape: 'circle', w: 46, h: 46, t: '40' }, { id: '60', x: 340, y: 190, shape: 'circle', w: 46, h: 46, t: '60' }, { id: '80', x: 460, y: 190, shape: 'circle', w: 46, h: 46, t: '80' }], edges: [{ from: '50', to: '30', head: 'none' }, { from: '50', to: '70', head: 'none' }, { from: '30', to: '20', head: 'none' }, { from: '30', to: '40', head: 'none' }, { from: '70', to: '60', head: 'none' }, { from: '70', to: '80', head: 'none' }], caption: 'Untuk setiap node: semua nilai di subpohon kiri lebih kecil, semua nilai di subpohon kanan lebih besar.' },
            { w: 'bst', title: 'Bangun dan jelajahi BST', desc: 'Sisipkan nilai, cari, dan jalankan traversal. Coba "Isi menaik" untuk melihat apa yang terjadi bila data masuk terurut.' },
            { h2: 'Implementasi: sisip, cari, minimum, tinggi' },
            { code: py`class Node:
    def __init__(self, nilai):
        self.nilai, self.kiri, self.kanan = nilai, None, None

def sisip(node, nilai):
    if node is None:
        return Node(nilai)
    if nilai < node.nilai:
        node.kiri = sisip(node.kiri, nilai)
    elif nilai > node.nilai:
        node.kanan = sisip(node.kanan, nilai)
    return node                               # duplikat diabaikan

def cari(node, nilai):
    while node and node.nilai != nilai:
        node = node.kiri if nilai < node.nilai else node.kanan
    return node is not None

def minimum(node):
    while node.kiri:
        node = node.kiri
    return node

def tinggi(node):
    return 0 if node is None else 1 + max(tinggi(node.kiri), tinggi(node.kanan))

akar = None
for v in [50, 30, 70, 20, 40, 60, 80]:
    akar = sisip(akar, v)
print(cari(akar, 60), cari(akar, 65), minimum(akar).nilai, tinggi(akar))`, lang: 'python', run: true },
            { h2: 'Traversal' },
            { table: { head: ['Traversal', 'Urutan kunjungan', 'Kegunaan'], rows: [['In-order', 'kiri → akar → kanan', 'Menghasilkan nilai <b>terurut</b> pada BST'], ['Pre-order', 'akar → kiri → kanan', 'Menyalin atau menyimpan pohon'], ['Post-order', 'kiri → kanan → akar', 'Menghapus pohon, menghitung ukuran subpohon'], ['Per tingkat (BFS)', 'tingkat demi tingkat', 'Mencari jalur terpendek, mencetak per lapis']] } },
            { cont: true, code: py`from collections import deque

def inorder(n):   return inorder(n.kiri) + [n.nilai] + inorder(n.kanan) if n else []
def preorder(n):  return [n.nilai] + preorder(n.kiri) + preorder(n.kanan) if n else []
def postorder(n): return postorder(n.kiri) + postorder(n.kanan) + [n.nilai] if n else []
def per_tingkat(n):
    hasil, antre = [], deque([n] if n else [])
    while antre:
        x = antre.popleft(); hasil.append(x.nilai)
        antre.extend(c for c in (x.kiri, x.kanan) if c)
    return hasil

print("in-order   :", inorder(akar))
print("pre-order  :", preorder(akar))
print("post-order :", postorder(akar))
print("per tingkat:", per_tingkat(akar))`, lang: 'python', run: true, caption: 'Perhatikan bahwa in-order menghasilkan 20, 30, 40, 50, 60, 70, 80: terurut. Itu cara termudah memeriksa bahwa pohon benar-benar BST.' },
            { h2: 'Menghapus node: tiga kasus' },
            { w: 'cards', title: 'Ketuk kartu untuk penanganan tiap kasus', items: [{ tag: 'Kasus 1', front: 'Node daun (tanpa anak)', backTag: 'Tindakan', back: 'Cukup lepas dari induknya.' }, { tag: 'Kasus 2', front: 'Node dengan satu anak', backTag: 'Tindakan', back: 'Sambungkan induk langsung ke anak tunggal itu.' }, { tag: 'Kasus 3', front: 'Node dengan dua anak', backTag: 'Tindakan', back: 'Ganti nilainya dengan penerus in-order (minimum di subpohon kanan), lalu hapus penerus itu (yang pasti kasus 1 atau 2).' }] },
            { cont: true, code: py`def hapus(node, nilai):
    if node is None:
        return None
    if nilai < node.nilai:
        node.kiri = hapus(node.kiri, nilai)
    elif nilai > node.nilai:
        node.kanan = hapus(node.kanan, nilai)
    else:                                   # node ditemukan
        if node.kiri is None:  return node.kanan     # kasus 1 dan 2
        if node.kanan is None: return node.kiri
        penerus = minimum(node.kanan)               # kasus 3
        node.nilai = penerus.nilai
        node.kanan = hapus(node.kanan, penerus.nilai)
    return node

akar = hapus(akar, 20)    # daun
akar = hapus(akar, 70)    # dua anak (60 dan 80)
akar = hapus(akar, 30)    # satu anak (40)
print(inorder(akar), per_tingkat(akar))`, lang: 'python', run: true },
            { h2: 'Kompleksitas: semuanya soal tinggi pohon' },
            `Sisip, cari, dan hapus masing-masing butuh waktu <b>O(h)</b> dengan h tinggi pohon. Bila pohon seimbang, h ≈ log₂ n. Bila data masuk terurut, pohon melengkung seperti linked list dan h = n.`,
            { cont: true, code: py`import random

def tinggi_pohon(urutan):
    akar = None
    for v in urutan:
        akar = sisip(akar, v)
    return tinggi(akar)

n = 500
acak = random.Random(11).sample(range(n), n)
print("data acak   : tinggi", tinggi_pohon(acak), "(sekitar 2 log2 n =", round(2 * 8.97), ")")
import sys; sys.setrecursionlimit(5000)
print("data terurut: tinggi", tinggi_pohon(list(range(n))), "(= n, pohon melengkung)")`, lang: 'python', run: true },
            { callout: 'Untuk menjamin O(log n) pada semua masukan, dipakai <b>pohon seimbang otomatis</b> seperti AVL tree dan red-black tree, yang menata ulang pohon (rotasi) saat ketidakseimbangan terjadi. Pustaka standar banyak bahasa (misalnya TreeMap di Java) memakainya. Python tidak punya BST seimbang bawaan; <code>sorted()</code> dengan <code>bisect</code> sering cukup.', kind: 'info', title: 'Pohon seimbang' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Hasil traversal in-order pada BST selalu...', options: ['Acak', 'Terurut menaik', 'Terurut menurun'], answer: 1, why: 'Kiri (lebih kecil), akar, kanan (lebih besar).' }, { q: 'Menghapus node dengan dua anak: diganti dengan...', options: ['Anak kiri', 'Penerus in-order (minimum subpohon kanan)', 'Akar'], answer: 1, why: 'Penerus in-order mempertahankan sifat BST.' }, { q: 'Waktu pencarian pada BST dengan n node yang melengkung?', options: ['O(log n)', 'O(n)', 'O(1)'], answer: 1, why: 'Tingginya n.' }] },
            { exercise: [['Sisipkan 8, 3, 10, 1, 6, 14, 4, 7, 13 ke BST kosong. Gambarkan pohonnya dan tuliskan traversal in-order.', 'Akar 8; 3 dan 10 anaknya; 1 dan 6 anak 3; 14 anak kanan 10; 4 dan 7 anak 6; 13 anak kiri 14. In-order: 1, 3, 4, 6, 7, 8, 10, 13, 14.'], ['Berapa tinggi pohon pada soal sebelumnya?', '4 (jalur 8 → 3 → 6 → 4, atau 8 → 10 → 14 → 13).'], ['Tulis fungsi yang memeriksa apakah sebuah pohon biner adalah BST yang valid.', 'Gunakan batas bawah dan atas: <code>def valid(n, lo=-inf, hi=inf): return n is None or (lo < n.nilai < hi and valid(n.kiri, lo, n.nilai) and valid(n.kanan, n.nilai, hi))</code>. Atau periksa bahwa in-order terurut ketat.'], ['Mengapa cukup memeriksa anak langsung tidak cukup untuk memvalidasi BST?', 'Aturan berlaku untuk seluruh subpohon: cucu kanan dari anak kiri juga harus lebih kecil dari akar.']] },
            { summary: ['BST: kiri lebih kecil, kanan lebih besar, untuk setiap node.', 'Sisip, cari, hapus berbiaya O(h); seimbang h ≈ log n, melengkung h = n.', 'Hapus: daun, satu anak, atau dua anak (ganti dengan penerus in-order).', 'In-order menghasilkan urutan terurut; pre-order, post-order, dan per tingkat punya kegunaan sendiri.', 'AVL dan red-black tree menjaga keseimbangan secara otomatis.'] },
        ],
        faq: [['Apa bedanya BST dengan binary heap?', 'Heap hanya menjamin akar adalah minimum (atau maksimum), tidak menyusun urutan kiri-kanan, sehingga cocok untuk priority queue tetapi tidak untuk pencarian umum.'], ['Mengapa tidak memakai dict saja?', 'dict (hash table) memberi pencarian rata-rata O(1) tetapi tidak menjaga urutan kunci. BST memungkinkan pertanyaan terurut: minimum, penerus, dan rentang nilai.'], ['Bagaimana BST menangani duplikat?', 'Bergantung desain: diabaikan, ditolak, atau disimpan dengan penghitung atau dalam subpohon tertentu (misalnya kanan).']],
        sources: [REF_CLRS, REF_SEDGE, REF_MIT6006, ['Dokumentasi Python: bisect, Array bisection algorithm', 'https://docs.python.org/3/library/bisect.html']],
    },

    {
        slug: 'graf-python-representasi-bfs-dan-dfs-langkah-demi-langkah',
        title: 'Graf di Python: Representasi, BFS, dan DFS',
        description: 'Pelajari graf: matriks dan daftar ketetanggaan, BFS dan DFS dengan animasi langkah demi langkah, jalur terpendek, dan komponen terhubung.',
        date: D, category: C, level: 'Menengah', tags: ['graf', 'BFS', 'DFS', 'daftar ketetanggaan', 'jalur terpendek'], cta: 'none',
        prereq: ['stack dan queue', 'dictionary dan set', 'rekursi'],
        lead: 'Peta jalan, jaringan pertemanan, hubungan antar halaman web, dan jadwal kuliah dengan prasyarat semuanya adalah graf. Dua algoritma penjelajahan, BFS dan DFS, menjadi dasar hampir semua algoritma graf lanjutan. Materi ini menunjukkan keduanya bekerja langkah demi langkah, lalu memakainya menyelesaikan masalah nyata.',
        body: [
            { objectives: ['menjelaskan simpul, sisi, graf berarah dan tak berarah', 'membandingkan matriks dan daftar ketetanggaan serta memilih yang tepat', 'mengimplementasikan BFS dan DFS (rekursif dan iteratif)', 'mencari jalur terpendek pada graf tak berbobot dengan BFS', 'menghitung komponen terhubung', 'menganalisis kompleksitas O(V + E)'] },
            { h2: 'Istilah dasar' },
            { svg: 'diagram', w: 560, h: 150, label: 'Graf kecil dengan 6 simpul', nodes: GRAF.nodes.map(n => ({ id: n.id, x: n.x + 40, y: n.y + 20, shape: 'circle', w: 42, h: 42, t: n.id })), edges: GRAF.edges.map(([a, b]) => ({ from: a, to: b, head: 'none' })), caption: 'Graf tak berarah dengan simpul (vertex) A sampai F dan 7 sisi (edge). Pada graf berarah, sisi punya arah (panah).' },
            { h2: 'Representasi: matriks vs daftar ketetanggaan' },
            { code: py`graf = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "E"],
    "D": ["B", "F"],
    "E": ["B", "C", "F"],
    "F": ["D", "E"],
}
# matriks ketetanggaan untuk graf yang sama
simpul = sorted(graf)
matriks = [[1 if v in graf[u] else 0 for v in simpul] for u in simpul]
print("   ", *simpul)
for u, baris in zip(simpul, matriks):
    print(u, " ", *baris)
print("jumlah sisi:", sum(len(t) for t in graf.values()) // 2)`, lang: 'python', run: true },
            { table: { head: ['Aspek', 'Daftar ketetanggaan', 'Matriks ketetanggaan'], rows: [['Memori', 'O(V + E)', 'O(V²)'], ['Cek sisi u–v', 'O(derajat u)', 'O(1)'], ['Daftar tetangga u', 'O(derajat u)', 'O(V)'], ['Cocok untuk', 'Graf jarang (sedikit sisi), kasus umum', 'Graf padat, cek sisi sangat sering']] } },
            { h2: 'Penjelajahan langkah demi langkah' },
            { w: 'graphsearch', title: 'BFS dan DFS pada graf yang sama', desc: 'Pilih BFS atau DFS lalu tekan Maju. Bandingkan urutan kunjungan dan isi antrean atau tumpukan.', nodes: GRAF.nodes, edges: GRAF.edges, start: GRAF.start },
            { h2: 'BFS: lapis demi lapis dengan antrean' },
            { cont: true, code: py`from collections import deque

def bfs(graf, mulai):
    dikunjungi, urutan = {mulai}, []
    antre = deque([mulai])
    while antre:
        u = antre.popleft()
        urutan.append(u)
        for v in sorted(graf[u]):
            if v not in dikunjungi:
                dikunjungi.add(v)         # tandai saat dimasukkan agar tidak masuk dua kali
                antre.append(v)
    return urutan

print(bfs(graf, "A"))`, lang: 'python', run: true },
            { h2: 'DFS: menyelam dulu dengan rekursi atau tumpukan' },
            { cont: true, code: py`def dfs_rekursif(graf, u, dikunjungi=None, urutan=None):
    dikunjungi = dikunjungi if dikunjungi is not None else set()
    urutan = urutan if urutan is not None else []
    dikunjungi.add(u); urutan.append(u)
    for v in sorted(graf[u]):
        if v not in dikunjungi:
            dfs_rekursif(graf, v, dikunjungi, urutan)
    return urutan

def dfs_iteratif(graf, mulai):
    dikunjungi, urutan, tumpuk = set(), [], [mulai]
    while tumpuk:
        u = tumpuk.pop()
        if u in dikunjungi:
            continue
        dikunjungi.add(u); urutan.append(u)
        for v in sorted(graf[u], reverse=True):     # dibalik agar yang kecil diproses lebih dulu
            if v not in dikunjungi:
                tumpuk.append(v)
    return urutan

print(dfs_rekursif(graf, "A"))
print(dfs_iteratif(graf, "A"))`, lang: 'python', run: true },
            { w: 'compare', title: 'BFS atau DFS?', tabs: [{ label: 'BFS', html: '<b>Struktur:</b> antrean (FIFO).<br><b>Menjelajah:</b> per lapisan jarak dari awal.<br><b>Cocok:</b> jalur terpendek pada graf tak berbobot, "berapa langkah", jaringan sosial (teman tingkat 2).<br><b>Memori:</b> bisa besar bila graf lebar.' }, { label: 'DFS', html: '<b>Struktur:</b> tumpukan atau rekursi (LIFO).<br><b>Menjelajah:</b> sedalam mungkin sebelum mundur.<br><b>Cocok:</b> deteksi siklus, pengurutan topologis, komponen terhubung, backtracking, labirin.<br><b>Memori:</b> sebesar kedalaman.' }] },
            { h2: 'Jalur terpendek dengan BFS' },
            { cont: true, code: py`from collections import deque

def jalur_terpendek(graf, asal, tujuan):
    induk = {asal: None}
    antre = deque([asal])
    while antre:
        u = antre.popleft()
        if u == tujuan:
            break
        for v in sorted(graf[u]):
            if v not in induk:
                induk[v] = u
                antre.append(v)
    if tujuan not in induk:
        return None
    jalur, x = [], tujuan
    while x is not None:          # susun mundur dari tujuan lewat induk
        jalur.append(x); x = induk[x]
    return jalur[::-1]

print(jalur_terpendek(graf, "A", "F"))   # 3 sisi: A-B-D-F
print(jalur_terpendek(graf, "C", "D"))`, lang: 'python', run: true, caption: 'BFS menemukan jalur dengan jumlah sisi paling sedikit karena simpul ditemukan berurutan menurut jaraknya.' },
            { h2: 'Komponen terhubung' },
            { cont: true, code: py`def komponen(graf):
    terlihat, hasil = set(), []
    for s in sorted(graf):
        if s not in terlihat:
            grup = dfs_rekursif(graf, s)          # semua yang terjangkau dari s
            terlihat.update(grup)
            hasil.append(sorted(grup))
    return hasil

g2 = {"A": ["B"], "B": ["A"], "C": ["D"], "D": ["C"], "E": []}
print(komponen(g2))            # tiga kelompok terpisah
print(len(komponen(graf)))     # graf utama: satu kelompok`, lang: 'python', run: true },
            { callout: 'Baik BFS maupun DFS mengunjungi tiap simpul sekali dan memeriksa tiap sisi sekali (dua kali pada graf tak berarah), sehingga waktunya <b>O(V + E)</b> dengan daftar ketetanggaan. Dengan matriks, waktunya O(V²).', kind: 'info', title: 'Kompleksitas' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Struktur data pendamping BFS?', options: ['Stack', 'Queue', 'Heap'], answer: 1, why: 'Antrean menjaga urutan lapisan.' }, { q: 'Algoritma untuk jalur terpendek (jumlah sisi) pada graf tak berbobot?', options: ['DFS', 'BFS', 'Keduanya selalu'], answer: 1, why: 'BFS menemukan simpul berurutan menurut jaraknya.' }, { q: 'Mengapa perlu menandai simpul yang sudah dikunjungi?', options: ['Agar lebih rapi', 'Agar tidak berputar tanpa henti pada siklus', 'Wajib oleh Python'], answer: 1, why: 'Tanpa penanda, graf bersiklus membuat penjelajahan tak berhingga.' }] },
            { exercise: [['Pada graf contoh, tuliskan urutan BFS dari F (tetangga diurutkan abjad).', 'F; tetangga D, E; lalu dari D: B; dari E: B (sudah), C; hasil: F, D, E, B, C, A.'], ['Berapa jumlah sisi pada graf lengkap dengan 6 simpul? Berapa elemen matriksnya yang bernilai 1?', 'Sisi = 6×5/2 = 15. Pada matriks, setiap sisi muncul dua kali: 30 elemen bernilai 1.'], ['Ubah bfs agar menghitung jarak (jumlah sisi) tiap simpul dari awal.', 'Simpan dict jarak: <code>jarak = {mulai: 0}</code>, dan saat menemukan v dari u: <code>jarak[v] = jarak[u] + 1</code>.'], ['Bagaimana mendeteksi apakah graf tak berarah memiliki siklus dengan DFS?', 'Saat menjelajah dari u ke v, bila v sudah dikunjungi dan bukan induk u, berarti ada siklus.']] },
            { summary: ['Graf: simpul dan sisi; representasi daftar ketetanggaan hemat untuk graf jarang.', 'BFS (antrean) menjelajah per lapisan dan menemukan jalur terpendek tak berbobot.', 'DFS (tumpukan atau rekursi) menyelam dalam; berguna untuk siklus, komponen, dan backtracking.', 'Keduanya O(V + E); tandai simpul yang sudah dikunjungi.'] },
        ],
        faq: [['Bagaimana dengan graf berbobot?', 'BFS tidak cukup. Gunakan algoritma Dijkstra (bobot tak negatif) dengan priority queue, atau Bellman-Ford bila ada bobot negatif.'], ['Apa itu pengurutan topologis?', 'Mengurutkan simpul graf berarah tanpa siklus (DAG) agar setiap sisi mengarah ke depan, misalnya urutan mengambil mata kuliah berprasyarat. Dapat dilakukan dengan DFS.'], ['Mengapa DFS rekursif bisa gagal pada graf besar?', 'Python membatasi kedalaman rekursi (bawaan sekitar 1000). Pakai versi iteratif dengan tumpukan eksplisit.']],
        sources: [REF_CLRS, REF_SEDGE, REF_MIT6006, ['Dokumentasi Python: Design and History FAQ, why must self be explicit (konteks pemodelan data), lihat juga collections', 'https://docs.python.org/3/library/collections.html'], ['Python.org: Python Patterns, Implementing Graphs (essay klasik Guido van Rossum)', 'https://www.python.org/doc/essays/graphs/']],
    },

    {
        slug: 'menara-hanoi-dan-rekursi-lanjutan-python',
        title: 'Menara Hanoi dan Rekursi Lanjutan di Python',
        description: 'Pahami berpikir rekursif lewat Menara Hanoi dan permutasi: animasi interaktif, bukti 2^n − 1 langkah, batas rekursi, dan kapan beralih ke iterasi.',
        date: D, category: C, level: 'Menengah', tags: ['Menara Hanoi', 'rekursi', 'permutasi', 'divide and conquer', 'recursion limit'], cta: 'none',
        prereq: ['fungsi', 'rekursi dasar (faktorial, Fibonacci)'],
        lead: 'Rekursi terasa mudah pada faktorial, tetapi baru sungguh teruji pada masalah yang tidak bisa dibayangkan langkah demi langkah di kepala. Menara Hanoi adalah contoh klasiknya: aturannya sederhana, namun urutan solusinya hampir mustahil ditebak tanpa berpikir rekursif. Di sini Anda belajar mempercayai rekursi: asumsikan masalah yang lebih kecil sudah beres.',
        body: [
            { objectives: ['menyusun solusi rekursif dengan kasus dasar dan langkah rekursif yang benar', 'menyelesaikan Menara Hanoi dan membuktikan jumlah langkah minimum 2ⁿ − 1', 'menghasilkan permutasi dengan rekursi', 'menjelaskan batas kedalaman rekursi dan kapan beralih ke iterasi'] },
            { h2: 'Aturan permainan' },
            `Ada tiga tiang dan n cakram bertumpuk menurun di tiang A. Pindahkan semuanya ke tiang C dengan aturan: pindahkan satu cakram per langkah, dan jangan pernah menaruh cakram besar di atas cakram yang lebih kecil. Mainkan sendiri (mulai dari 2 atau 3 cakram) sebelum membaca penjelasannya.`,
            { w: 'hanoi', n: 3 },
            { h2: 'Berpikir rekursif: percayai masalah yang lebih kecil' },
            `Untuk memindahkan n cakram dari A ke C: (1) pindahkan <b>n-1 cakram teratas</b> dari A ke B (bantu: C); (2) pindahkan cakram terbesar dari A ke C; (3) pindahkan n-1 cakram dari B ke C (bantu: A). Langkah 1 dan 3 adalah masalah yang sama persis dengan ukuran lebih kecil. Kasus dasar: 0 cakram, tidak perlu melakukan apa pun.`,
            { svg: 'flow', label: 'Tiga langkah rekursif Menara Hanoi', steps: [{ t: 'Pindahkan n-1 cakram', d: 'dari A ke B (rekursif)' }, { t: 'Pindahkan cakram terbesar', d: 'dari A ke C' }, { t: 'Pindahkan n-1 cakram', d: 'dari B ke C (rekursif)' }], caption: 'Tidak perlu memikirkan detail langkah kecil: cukup percayai bahwa pemanggilan rekursif menyelesaikannya.' },
            { code: py`def hanoi(n, asal, tujuan, bantu, langkah):
    if n == 0:                                  # kasus dasar
        return
    hanoi(n - 1, asal, bantu, tujuan, langkah)  # 1. n-1 cakram ke tiang bantu
    langkah.append((n, asal, tujuan))           # 2. cakram terbesar ke tujuan
    hanoi(n - 1, bantu, tujuan, asal, langkah)  # 3. n-1 cakram dari bantu ke tujuan

langkah = []
hanoi(3, "A", "C", "B", langkah)
for i, (cakram, a, t) in enumerate(langkah, 1):
    print(f"{i}. cakram {cakram}: {a} -> {t}")
print("total:", len(langkah))`, lang: 'python', run: true },
            { h2: 'Mengapa tepat 2ⁿ − 1 langkah?' },
            `Misalkan T(n) adalah jumlah langkah. Dari tiga langkah rekursif di atas: <code>T(n) = T(n-1) + 1 + T(n-1) = 2T(n-1) + 1</code>, dengan <code>T(0) = 0</code>.`,
            { table: { head: ['n', 'T(n) = 2T(n-1) + 1', '2ⁿ − 1'], rows: [['0', '0', '0'], ['1', '2·0 + 1 = 1', '1'], ['2', '2·1 + 1 = 3', '3'], ['3', '2·3 + 1 = 7', '7'], ['4', '2·7 + 1 = 15', '15'], ['10', '', '1.023'], ['64', '', '18.446.744.073.709.551.615']] } },
            { math: 'T(n) = 2T(n − 1) + 1,  T(0) = 0  ⇒  T(n) = 2ⁿ − 1' },
            `Bukti dengan induksi: basis T(0) = 0 = 2⁰ − 1. Langkah: bila T(n−1) = 2ⁿ⁻¹ − 1, maka T(n) = 2(2ⁿ⁻¹ − 1) + 1 = 2ⁿ − 1. ∎ Pertumbuhan eksponensial inilah yang membuat legenda 64 cakram (dengan satu langkah per detik) memakan waktu sekitar 585 miliar tahun.`,
            { code: py`def jumlah_langkah(n):
    return 0 if n == 0 else 2 * jumlah_langkah(n - 1) + 1

for n in [1, 5, 10, 20, 30]:
    print(n, jumlah_langkah(n), 2 ** n - 1 == jumlah_langkah(n))

detik = 2 ** 64 - 1
print("64 cakram, 1 langkah/detik:", round(detik / (365.25 * 24 * 3600) / 1e9), "miliar tahun")`, lang: 'python', run: true },
            { h2: 'Contoh lain: semua permutasi' },
            `Susunan semua huruf dari "ABC": pilih satu huruf sebagai awal, lalu permutasikan sisanya secara rekursif.`,
            { code: py`def permutasi(huruf):
    if len(huruf) <= 1:                  # kasus dasar
        return [huruf]
    hasil = []
    for i, h in enumerate(huruf):
        sisa = huruf[:i] + huruf[i + 1:]
        for p in permutasi(sisa):        # permutasi dari sisanya
            hasil.append(h + p)
    return hasil

print(permutasi("ABC"))
print(len(permutasi("ABCD")), "= 4! =", 4 * 3 * 2 * 1)`, lang: 'python', run: true },
            { h2: 'Batas kedalaman rekursi' },
            `Setiap pemanggilan menambah satu frame pada call stack. Python membatasi kedalamannya (bawaan sekitar 1000) untuk mencegah kehabisan memori.`,
            { code: py`import sys
print("batas bawaan:", sys.getrecursionlimit())

def turun(n):
    return 0 if n == 0 else 1 + turun(n - 1)

print(turun(500))
try:
    turun(5000)
except RecursionError as e:
    print("RecursionError:", str(e)[:45])

def turun_iteratif(n):          # versi iteratif tidak dibatasi call stack
    hasil = 0
    while n > 0:
        hasil, n = hasil + 1, n - 1
    return hasil
print(turun_iteratif(5000))`, lang: 'python', run: true },
            { w: 'compare', title: 'Rekursi atau iterasi?', tabs: [{ label: 'Pilih rekursi bila', html: 'Strukturnya rekursif secara alami: pohon, graf, pembagian masalah (divide and conquer), backtracking. Kodenya lebih mirip definisi matematikanya.' }, { label: 'Pilih iterasi bila', html: 'Kedalaman bisa sangat besar atau performa penting, dan masalahnya linear (menjumlahkan, mencari, menelusuri list). Iterasi tidak terbatas call stack dan lebih hemat memori.' }] },
            { callout: 'Python <b>tidak</b> mengoptimalkan rekursi ekor (tail recursion), sehingga rekursi sangat dalam harus diubah menjadi perulangan. Bahasa seperti Scheme menjamin optimasi tersebut.', kind: 'warn', title: 'Perhatian' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Jumlah langkah minimum Menara Hanoi untuk 5 cakram?', options: ['10', '31', '32'], answer: 1, why: '2⁵ − 1 = 31.' }, { q: 'Kasus dasar Hanoi dalam kode di atas?', options: ['n == 0 (tidak melakukan apa pun)', 'n == 1 saja', 'Tidak ada'], answer: 0, why: 'Tanpa cakram, tidak ada yang dipindah.' }, { q: 'Apa yang terjadi bila rekursi tidak punya kasus dasar?', options: ['Berjalan lebih cepat', 'RecursionError setelah kedalaman melewati batas', 'Python menambahkannya otomatis'], answer: 1, why: 'Pemanggilan tak pernah berhenti.' }] },
            { exercise: [['Berapa langkah untuk 6 cakram? Berapa kali cakram terkecil berpindah?', '2⁶ − 1 = 63 langkah. Cakram terkecil berpindah di setiap langkah ganjil: 32 kali.'], ['Tulis fungsi rekursif untuk menghitung 2ⁿ tanpa operator ** (dengan perkalian saja).', '<code>def pangkat2(n): return 1 if n == 0 else 2 * pangkat2(n - 1)</code>. Versi lebih cepat: <code>pangkat2(n//2)**2</code> dengan penanganan ganjil, O(log n).'], ['Tulis fungsi rekursif untuk membalik string.', '<code>def balik(s): return s if len(s) <= 1 else balik(s[1:]) + s[0]</code>'], ['Mengapa jumlah permutasi n huruf unik adalah n!?', 'Ada n pilihan untuk posisi pertama, n-1 untuk kedua, dan seterusnya: n × (n-1) × ... × 1 = n!.']] },
            { summary: ['Berpikir rekursif: tentukan kasus dasar, lalu nyatakan masalah dengan masalah yang lebih kecil dan percayai hasilnya.', 'Hanoi: T(n) = 2T(n-1) + 1 menghasilkan 2ⁿ − 1 langkah, eksponensial.', 'Permutasi n unsur berjumlah n!.', 'Python membatasi kedalaman rekursi; ubah ke iterasi bila terlalu dalam.'] },
        ],
        faq: [['Apakah ada solusi Hanoi tanpa rekursi?', 'Ada. Untuk setiap langkah ganjil pindahkan cakram terkecil searah putaran tetap (tergantung n), dan pada langkah genap lakukan satu-satunya langkah legal yang tidak melibatkan cakram terkecil.'], ['Mengapa Hanoi dipakai untuk mengajar rekursi?', 'Karena solusi rekursifnya ringkas dan elegan, sedangkan mencari urutannya tanpa rekursi sulit. Ia memaksa kita memercayai pemanggilan rekursif.'], ['Berapa batas rekursi yang aman?', 'Bergantung memori; bawaan 1000 aman. <code>sys.setrecursionlimit</code> dapat menaikkannya, tetapi nilai terlalu besar berisiko menghentikan interpreter secara paksa.']],
        sources: [REF_CLRS, ['Dokumentasi Python: sys.getrecursionlimit', 'https://docs.python.org/3/library/sys.html#sys.getrecursionlimit'], ['Dokumentasi Python: itertools.permutations', 'https://docs.python.org/3/library/itertools.html#itertools.permutations'], ['MIT OpenCourseWare 6.0001, Lecture 6: Recursion, Dictionaries', 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'], ['Anany Levitin, Introduction to the Design and Analysis of Algorithms, bab Decrease-and-Conquer', '']],
    },
];
