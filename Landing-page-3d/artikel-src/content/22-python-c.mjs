const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_THINK = ['Allen B. Downey, Think Python (edisi ke-3), buku teks terbuka', 'https://allendowney.github.io/ThinkPython/'];
const REF_MIT = ['MIT OpenCourseWare 6.0001: Introduction to Computer Science and Programming in Python', 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'];

export default [
    {
        slug: 'list-python-operasi-slicing-dan-list-comprehension',
        title: 'List Python: Operasi, Slicing, dan List Comprehension',
        description: 'Kuasai list Python: operasi umum, slicing, salinan dangkal vs dalam, jebakan list 2D, list comprehension, pengurutan dengan key, dan kompleksitas tiap operasi.',
        date: D, category: C, level: 'Dasar', tags: ['list Python', 'list comprehension', 'slicing', 'struktur data', 'mutable'], cta: 'none',
        prereq: ['variabel dan mutabilitas', 'perulangan for'],
        lead: 'List adalah struktur data paling serbaguna di Python: urutan elemen yang dapat berubah dan boleh berisi tipe apa saja. Hampir setiap program nyata memakainya. Memahami list berarti memahami operasi umumnya, biaya masing-masing, dan beberapa jebakan yang menimpa hampir setiap pemula.',
        body: [
            { objectives: ['membuat dan memodifikasi list dengan operasi umum', 'memakai indexing, slicing, dan perulangan pada list', 'menjelaskan perbedaan salinan dangkal dan dalam serta jebakan list 2D', 'menulis list comprehension', 'mengurutkan list dengan sorted dan key, serta memperkirakan kompleksitas operasinya'] },
            { h2: 'Dasar-dasar list' },
            { code: py`nilai = [88, 72, 95, 64]
print(nilai[0], nilai[-1], nilai[1:3], len(nilai))
nilai.append(80)          # tambah di akhir
nilai.insert(1, 100)      # sisipkan di indeks 1
nilai.remove(64)          # hapus kemunculan pertama dari nilai 64
akhir = nilai.pop()       # ambil dan hapus elemen terakhir
print(nilai, akhir)
print(sorted(nilai), nilai.index(95), nilai.count(72))
print(sum(nilai), min(nilai), max(nilai))`, lang: 'python', run: true },
            { table: { head: ['Operasi', 'Fungsi', 'Kompleksitas'], rows: [['lst[i]', 'Akses berdasarkan indeks', 'O(1)'], ['lst.append(x)', 'Tambah di akhir', 'O(1) amortisasi'], ['lst.pop()', 'Hapus di akhir', 'O(1)'], ['lst.insert(0, x)', 'Sisip di awal', 'O(n): semua elemen bergeser'], ['lst.pop(0)', 'Hapus di awal', 'O(n)'], ['x in lst', 'Cari elemen', 'O(n)'], ['lst.sort()', 'Urutkan di tempat', 'O(n log n)'], ['lst + lain', 'Gabung membuat list baru', 'O(n + m)']] } },
            { callout: 'Untuk antrean (pengambilan dari depan), jangan pakai <code>pop(0)</code> pada list besar. Gunakan <code>collections.deque</code> yang menghapus dari depan dalam O(1).', kind: 'warn', title: 'Pilih struktur yang tepat' },
            { h2: 'Salinan: dangkal, dalam, atau sama sekali tidak' },
            { trace: true, title: 'Tiga cara "menyalin" list', desc: 'Amati bahwa b ikut berubah, sedangkan c tidak. Perhatikan juga nilai d.', code: py`a = [1, 2, 3]
b = a            # bukan salinan: dua nama, satu list
c = a[:]         # salinan dangkal
a.append(4)
print(a, b, c)` },
            { h3: 'Salinan dangkal belum cukup untuk list bersarang' },
            { code: py`import copy
asli = [[1, 2], [3, 4]]
dangkal = asli.copy()
dalam = copy.deepcopy(asli)
asli[0].append(99)
print(dangkal)   # ikut berubah: elemen dalamnya sama
print(dalam)     # tidak berubah`, lang: 'python', run: true },
            { h2: 'Jebakan klasik: list 2D' },
            { code: py`salah = [[0] * 3] * 3     # tiga referensi ke SATU list yang sama
salah[0][0] = 1
print(salah)

benar = [[0] * 3 for _ in range(3)]   # tiga list terpisah
benar[0][0] = 1
print(benar)`, lang: 'python', run: true, caption: 'Perkalian pada list menyalin referensi, bukan isi. Gunakan comprehension untuk membuat baris yang benar-benar terpisah.' },
            { h2: 'List comprehension' },
            `Cara ringkas membangun list baru dari urutan lain, dengan filter opsional. Bentuk umumnya: <code>[ekspresi for x in urutan if kondisi]</code>.`,
            { code: py`kuadrat = [x * x for x in range(1, 6)]
genap = [x for x in range(10) if x % 2 == 0]
nama = ["ani", "budi", "citra"]
kapital = [n.capitalize() for n in nama]
pasangan = [(i, j) for i in range(2) for j in range(2)]
print(kuadrat, genap, kapital, pasangan, sep="\n")

# setara dengan perulangan biasa:
hasil = []
for x in range(1, 6):
    hasil.append(x * x)
print(hasil == kuadrat)`, lang: 'python', run: true },
            { h2: 'Mengurutkan dengan sorted dan key' },
            { code: py`siswa = [("Ani", 88), ("Budi", 72), ("Citra", 95)]
print(sorted(siswa, key=lambda s: s[1]))                # menurut nilai
print(sorted(siswa, key=lambda s: s[1], reverse=True))  # menurun
kata = ["pisang", "apel", "kiwi", "jeruk"]
print(sorted(kata, key=len))                            # menurut panjang
print(kata)                                              # sorted tidak mengubah aslinya`, lang: 'python', run: true, caption: 'sort() mengubah list di tempat dan mengembalikan None; sorted() membuat list baru. Keduanya stabil: elemen setara mempertahankan urutan awal.' },
            { w: 'compare', title: 'Kapan memakai list comprehension?', tabs: [{ label: 'Pakai bila', html: 'Membangun list baru dari urutan lain dengan transformasi atau filter sederhana. Hasilnya lebih ringkas dan umumnya lebih cepat daripada append dalam perulangan.' }, { label: 'Jangan bila', html: 'Logikanya rumit (banyak percabangan atau efek samping seperti print). Pakai perulangan biasa agar lebih terbaca. Jangan menulis comprehension tiga tingkat.' }] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: '<code>a = [1, 2]; b = a; b.append(3)</code>. Berapa <code>len(a)</code>?', options: ['2', '3', 'Error'], answer: 1, why: 'a dan b menunjuk list yang sama.' }, { q: 'Hasil <code>[x * 2 for x in range(3)]</code>?', options: ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]'], answer: 0, why: 'x = 0, 1, 2 dikalikan 2.' }, { q: 'Operasi mana yang paling mahal pada list besar?', options: ['lst.append(x)', 'lst.insert(0, x)', 'lst[5]'], answer: 1, why: 'Menyisipkan di awal menggeser semua elemen.' }] },
            { exercise: [['Buat list kuadrat bilangan ganjil dari 1 sampai 15 dengan satu comprehension.', '<code>[x * x for x in range(1, 16, 2)]</code> menghasilkan [1, 9, 25, 49, 81, 121, 169, 225].'], ['Hapus duplikat dari list sambil mempertahankan urutan kemunculan pertama.', '<code>hasil = []\nfor x in data:\n    if x not in hasil:\n        hasil.append(x)</code>. Cara cepat: <code>list(dict.fromkeys(data))</code>.'], ['Mengapa <code>nilai = nilai.sort()</code> berbahaya?', 'sort() mengubah list di tempat dan mengembalikan None, sehingga nilai menjadi None dan datanya hilang dari variabel itu.'], ['Putar list ke kanan sebanyak k posisi: [1,2,3,4,5] dengan k = 2 menjadi [4,5,1,2,3].', '<code>k %= len(lst); lst[-k:] + lst[:-k]</code> (bila k tidak 0).']] },
            { summary: ['List: urutan mutable, akses indeks O(1), sisip atau hapus di awal O(n).', 'Penugasan tidak menyalin; pakai copy atau deepcopy sesuai kebutuhan.', 'Buat list 2D dengan comprehension, bukan perkalian.', 'sorted() membuat list baru, sort() mengubah di tempat; keduanya mendukung key.'] },
        ],
        faq: [['Apa bedanya list dan array?', 'List Python dapat memuat tipe campuran dan ukurannya dinamis. Modul array atau NumPy menyimpan tipe seragam secara padat dan lebih efisien untuk komputasi numerik.'], ['Mengapa append dikatakan O(1) amortisasi?', 'Sesekali list harus mengalokasikan ruang lebih besar dan menyalin isinya (O(n)), tetapi biayanya tersebar sehingga rata-rata per append tetap konstan.'], ['Kapan memakai tuple, bukan list?', 'Bila datanya tetap dan tidak akan diubah, misalnya koordinat. Tuple lebih ringan dan bisa dipakai sebagai kunci kamus.']],
        sources: [['Dokumentasi Python: Lists (tutorial, termasuk list comprehension)', 'https://docs.python.org/3/tutorial/datastructures.html'], ['Dokumentasi Python: Sorting Techniques (HOWTO)', 'https://docs.python.org/3/howto/sorting.html'], ['Python Wiki: TimeComplexity (kompleksitas operasi tipe bawaan)', 'https://wiki.python.org/moin/TimeComplexity'], ['Dokumentasi Python: copy, shallow and deep copy operations', 'https://docs.python.org/3/library/copy.html'], REF_THINK],
    },

    {
        slug: 'tuple-set-dan-dictionary-python-kapan-memakai-yang-mana',
        title: 'Tuple, Set, dan Dictionary Python: Kapan Memakai Yang Mana',
        description: 'Bandingkan tuple, set, dan dictionary Python: sifat, kompleksitas, dan kapan memakai masing-masing, dengan contoh kode yang dijalankan dan latihan.',
        date: D, category: C, level: 'Dasar', tags: ['tuple Python', 'set Python', 'dictionary Python', 'hash table', 'struktur data'], cta: 'none',
        prereq: ['list Python', 'mutable vs immutable'],
        lead: 'Setelah list, ada tiga struktur data bawaan lain yang menyelesaikan masalah berbeda: tuple untuk data tetap, set untuk keunikan dan operasi himpunan, dan dictionary untuk pencarian berdasarkan kunci. Memilih yang tepat sering mengubah kode lambat menjadi cepat dan kode rumit menjadi sederhana.',
        body: [
            { objectives: ['membuat dan memakai tuple, termasuk unpacking', 'memakai set untuk menghilangkan duplikat dan operasi himpunan', 'memakai dictionary untuk memetakan kunci ke nilai dan menghitung frekuensi', 'menjelaskan mengapa pencarian set dan dict rata-rata O(1)', 'memilih struktur data yang tepat untuk suatu masalah'] },
            { h2: 'Tuple: urutan yang tidak berubah' },
            { code: py`titik = (3, 4)
x, y = titik                 # unpacking
print(x, y, titik[0], len(titik))
satu = (5,)                  # tuple satu elemen butuh koma
print(type(satu), type((5)))
a, b = 1, 2
a, b = b, a                  # menukar nilai tanpa variabel bantu
print(a, b)
try:
    titik[0] = 9
except TypeError as e:
    print("Error:", e)`, lang: 'python', run: true },
            { h2: 'Set: kumpulan unik tanpa urutan' },
            { code: py`angka = [3, 1, 3, 2, 1, 5]
unik = set(angka)
print(unik, len(unik))
unik.add(10); unik.discard(1)
print(3 in unik)             # pencarian cepat

A = {1, 2, 3, 4}
B = {3, 4, 5}
print(A | B)    # gabungan
print(A & B)    # irisan
print(A - B)    # selisih
print(A ^ B)    # beda simetris`, lang: 'python', run: true },
            { svgraw: '<svg viewBox="0 0 520 200" role="img" aria-label="Diagram Venn operasi himpunan" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><circle cx="205" cy="100" r="78" fill="#1e5ab2" fill-opacity=".25" stroke="#1e5ab2" stroke-width="2"/><circle cx="315" cy="100" r="78" fill="#1f7a46" fill-opacity=".25" stroke="#1f7a46" stroke-width="2"/><text x="160" y="104" font-size="16" font-weight="700" fill="#0f1a33" text-anchor="middle">1  2</text><text x="260" y="104" font-size="16" font-weight="700" fill="#0f1a33" text-anchor="middle">3  4</text><text x="360" y="104" font-size="16" font-weight="700" fill="#0f1a33" text-anchor="middle">5</text><text x="165" y="28" font-size="14" font-weight="700" fill="#1e5ab2" text-anchor="middle">A</text><text x="355" y="28" font-size="14" font-weight="700" fill="#1f7a46" text-anchor="middle">B</text><text x="260" y="190" font-size="12.5" fill="#4a5568" text-anchor="middle">A &amp; B (irisan) = {3, 4}  |  A | B = {1,2,3,4,5}  |  A - B = {1, 2}</text></svg>', caption: 'Operasi himpunan pada A = {1,2,3,4} dan B = {3,4,5}.' },
            { h2: 'Dictionary: kunci ke nilai' },
            { code: py`siswa = {"nama": "Ani", "umur": 19}
siswa["jurusan"] = "SI"            # tambah atau ubah
print(siswa["nama"], siswa.get("alamat", "tidak ada"))
for k, v in siswa.items():
    print(k, "=", v)
print("umur" in siswa, list(siswa.keys()))
del siswa["umur"]
print(siswa)`, lang: 'python', run: true },
            { h3: 'Pola penting: menghitung frekuensi' },
            { code: py`teks = "kucing makan ikan lalu kucing tidur lalu kucing bangun"
hitung = {}
for kata in teks.split():
    hitung[kata] = hitung.get(kata, 0) + 1
print(hitung)

from collections import Counter
print(Counter(teks.split()).most_common(2))

kuadrat = {x: x * x for x in range(1, 6)}   # dict comprehension
print(kuadrat)`, lang: 'python', run: true },
            { h2: 'Mengapa pencarian set dan dict begitu cepat?' },
            `Keduanya memakai <b>tabel hash</b>: kunci diubah menjadi angka (hash) yang menentukan lokasi penyimpanan, sehingga pencarian rata-rata langsung ke lokasi yang tepat tanpa memeriksa elemen satu per satu. Karena itu kunci dict dan elemen set harus <i>hashable</i> (immutable): list tidak boleh, tuple boleh.`,
            { w: 'hash', title: 'Lihat cara kerja tabel hash' },
            { code: py`import time
data = list(range(200000))
ss = set(data)
t = time.perf_counter(); 199999 in data; t1 = time.perf_counter() - t
t = time.perf_counter(); 199999 in ss;   t2 = time.perf_counter() - t
print("list lebih lambat sekitar", int(t1 / t2) > 100)   # biasanya ratusan kali`, lang: 'python', run: true, caption: 'Pencarian di list O(n), di set O(1) rata-rata. Selisihnya membesar seiring jumlah data.' },
            { h2: 'Memilih struktur data' },
            { table: { head: ['Kebutuhan', 'Pilih', 'Alasan'], rows: [['Urutan yang berubah, boleh duplikat', 'list', 'Fleksibel, akses indeks'], ['Data tetap (koordinat, record)', 'tuple', 'Immutable, bisa jadi kunci'], ['Elemen unik dan pemeriksaan keanggotaan cepat', 'set', 'Hash, operasi himpunan'], ['Cari nilai berdasarkan kunci', 'dict', 'Pencarian O(1) rata-rata'], ['Antrean masuk-keluar dari ujung', 'collections.deque', 'O(1) di kedua ujung']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa hasil <code>set([1, 2, 2, 3, 3, 3])</code>?', options: ['{1, 2, 3}', '{1, 2, 2, 3, 3, 3}', 'Error'], answer: 0, why: 'Set hanya menyimpan elemen unik.' }, { q: 'Mana yang boleh menjadi kunci dictionary?', options: ['[1, 2]', '(1, 2)', '{1, 2}'], answer: 1, why: 'Tuple immutable sehingga hashable; list dan set tidak.' }, { q: '<code>d.get("x", 0)</code> bila "x" tidak ada?', options: ['KeyError', '0', 'None'], answer: 1, why: 'get mengembalikan nilai bawaan yang diberikan.' }] },
            { exercise: [['Diberi list nama dengan duplikat, tampilkan jumlah nama unik.', '<code>len(set(nama))</code>'], ['Tulis program yang mengelompokkan kata berdasarkan panjangnya ke dalam dict: {3: ["aku", "dia"], 4: [...]}.', '<code>g = {}\nfor k in kata:\n    g.setdefault(len(k), []).append(k)</code>'], ['Periksa apakah dua list memiliki elemen yang sama (tanpa peduli urutan atau duplikat).', '<code>set(a) == set(b)</code>'], ['Mengapa <code>{[1, 2]: "a"}</code> menimbulkan TypeError?', 'List mutable sehingga tidak hashable: hash-nya bisa berubah bila isinya berubah, merusak tabel hash.']] },
            { summary: ['Tuple immutable; cocok untuk data tetap dan kunci dict.', 'Set menyimpan elemen unik dengan pemeriksaan keanggotaan cepat dan operasi himpunan (| & - ^).', 'Dict memetakan kunci ke nilai; get(), items(), setdefault(), Counter memudahkan pola umum.', 'Set dan dict berbasis hash: pencarian rata-rata O(1), kunci harus hashable.'] },
        ],
        faq: [['Apakah dictionary Python berurutan?', 'Sejak Python 3.7, urutan penyisipan dijamin oleh bahasa. Itu tidak berarti dict adalah urutan yang diindeks seperti list.'], ['Apa bedanya set dan frozenset?', 'frozenset immutable sehingga bisa menjadi elemen set lain atau kunci dict.'], ['Kapan memakai defaultdict?', 'Bila Anda sering menulis "jika kunci belum ada, buat nilai awal". <code>defaultdict(list)</code> membuat list kosong otomatis.']],
        sources: [['Dokumentasi Python: Data Structures (tuple, set, dictionary)', 'https://docs.python.org/3/tutorial/datastructures.html'], ['Dokumentasi Python: collections (Counter, defaultdict, deque)', 'https://docs.python.org/3/library/collections.html'], ['Python Wiki: TimeComplexity', 'https://wiki.python.org/moin/TimeComplexity'], REF_MIT],
    },

    {
        slug: 'fungsi-python-parameter-return-scope-dan-call-stack',
        title: 'Fungsi Python: Parameter, Return, Scope, dan Call Stack',
        description: 'Pelajari fungsi Python: definisi, parameter dan argumen, return, nilai default dan jebakannya, scope LEGB, docstring, serta penelusuran call stack langkah demi langkah.',
        date: D, category: C, level: 'Dasar', tags: ['fungsi Python', 'parameter', 'return', 'scope LEGB', 'call stack'], cta: 'none',
        prereq: ['percabangan dan perulangan'],
        lead: 'Fungsi memecah program besar menjadi bagian kecil yang bisa dipakai ulang, diuji, dan dipahami sendiri-sendiri. Itu keterampilan yang membedakan skrip sekali pakai dari perangkat lunak. Materi ini membahas bukan hanya cara menulis fungsi, tetapi juga apa yang terjadi di memori saat fungsi dipanggil.',
        body: [
            { objectives: ['mendefinisikan dan memanggil fungsi dengan parameter dan nilai kembali', 'membedakan parameter dan argumen, serta return dan print', 'memakai nilai default dan menghindari jebakan default mutable', 'menjelaskan scope LEGB dan variabel lokal vs global', 'membaca call stack saat fungsi memanggil fungsi lain'] },
            { h2: 'Anatomi fungsi' },
            { svg: 'diagram', w: 620, h: 150, label: 'Anatomi definisi dan pemanggilan fungsi', nodes: [{ id: 'def', x: 190, y: 50, shape: 'rect', w: 330, h: 44, t: 'def luas(panjang, lebar):   ← nama dan parameter', fill: '#e8f1ff' }, { id: 'body', x: 190, y: 100, shape: 'rect', w: 330, h: 44, t: '    return panjang * lebar   ← nilai kembali', fill: '#e4f6cc' }, { id: 'call', x: 500, y: 75, shape: 'rect', w: 200, h: 56, t: 'hasil = luas(5, 3)  ← argumen: 5 dan 3', fill: '#fff1d6' }], edges: [{ from: 'call', to: 'def', label: 'memanggil' }], caption: 'Parameter adalah nama di definisi, argumen adalah nilai yang dikirim saat memanggil.' },
            { code: py`def luas(panjang, lebar):
    """Menghitung luas persegi panjang."""   # docstring
    return panjang * lebar

def sapa(nama, sapaan="Halo"):               # nilai default
    print(f"{sapaan}, {nama}!")

hasil = luas(5, 3)
print(hasil)
sapa("Dewi")
sapa("Budi", sapaan="Selamat pagi")           # argumen kata kunci
print(luas.__doc__)`, lang: 'python', run: true },
            { h2: 'return bukan print' },
            `<code>return</code> mengirim nilai kembali ke pemanggil dan mengakhiri fungsi. <code>print</code> hanya menampilkan sesuatu di layar. Fungsi tanpa return mengembalikan <code>None</code>.`,
            { code: py`def kuadrat_print(x):
    print(x * x)

def kuadrat_return(x):
    return x * x

a = kuadrat_print(4)       # mencetak 16, tetapi a bernilai None
b = kuadrat_return(4)      # b bernilai 16
print(a, b)
print(kuadrat_return(kuadrat_return(2)))   # bisa dipakai lagi karena mengembalikan nilai`, lang: 'python', run: true },
            { h2: 'Call stack: apa yang terjadi saat fungsi dipanggil' },
            `Setiap pemanggilan membuat <b>frame</b> baru berisi variabel lokalnya. Frame ditumpuk, dan hilang saat fungsi selesai. Pada penelusuran ini, perhatikan frame <code>kuadrat()</code> muncul di panel memori setiap kali fungsi dipanggil.`,
            { trace: true, title: 'Telusuri pemanggilan fungsi bersarang', code: py`def kuadrat(x):
    hasil = x * x
    return hasil

def jumlah_kuadrat(a, b):
    return kuadrat(a) + kuadrat(b)

total = jumlah_kuadrat(2, 3)
print(total)` },
            { h2: 'Scope: di mana sebuah nama dapat dilihat' },
            `Python mencari nama dengan urutan <b>LEGB</b>: <b>L</b>ocal (di dalam fungsi), <b>E</b>nclosing (fungsi pembungkus), <b>G</b>lobal (tingkat modul), <b>B</b>uilt-in (bawaan seperti len).`,
            { code: py`x = "global"

def a():
    x = "lokal di a"        # variabel baru, bukan mengubah yang global
    return x

def b():
    return x                # tidak ada x lokal: pakai yang global

print(a(), b(), x)

def c():
    global x
    x = "diubah oleh c"     # sengaja mengubah yang global (hindari bila bisa)
c()
print(x)

def d():
    print(x2)               # error: x2 dianggap lokal karena ditugaskan di bawah
    x2 = 1
try:
    d()
except UnboundLocalError as e:
    print("UnboundLocalError:", e)`, lang: 'python', run: true },
            { callout: 'Hindari mengubah variabel global dari dalam fungsi. Kirim data lewat <b>parameter</b> dan kembalikan hasil lewat <b>return</b>. Fungsi yang bergantung hanya pada masukannya jauh lebih mudah diuji dan di-debug.', kind: 'good', title: 'Prinsip desain' },
            { h2: 'Jebakan: nilai default yang mutable' },
            { code: py`def tambah_salah(x, daftar=[]):     # list dibuat SATU kali saat def dijalankan
    daftar.append(x)
    return daftar

print(tambah_salah(1))
print(tambah_salah(2))              # ikut membawa 1: default dipakai ulang!

def tambah_benar(x, daftar=None):
    if daftar is None:
        daftar = []
    daftar.append(x)
    return daftar

print(tambah_benar(1), tambah_benar(2))`, lang: 'python', run: true },
            { h2: 'Fungsi dengan banyak nilai kembali dan type hints' },
            { code: py`def statistik(data: list[float]) -> tuple[float, float, float]:
    """Mengembalikan (minimum, maksimum, rata-rata)."""
    return min(data), max(data), sum(data) / len(data)

kecil, besar, rata = statistik([4, 8, 15, 16, 23, 42])
print(kecil, besar, round(rata, 2))`, lang: 'python', run: true, caption: 'Type hints tidak dipaksakan saat dijalankan, tetapi membantu pembaca dan alat analisis kode.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Fungsi tanpa pernyataan return mengembalikan...', options: ['0', 'None', 'String kosong'], answer: 1, why: 'Python mengembalikan None secara implisit.' }, { q: 'Dalam urutan LEGB, nama dicari pertama kali di...', options: ['Global', 'Built-in', 'Local'], answer: 2, why: 'Dimulai dari scope lokal fungsi.' }, { q: 'Mengapa <code>def f(x, d=[])</code> berbahaya?', options: ['List kosong tidak valid', 'List default dibuat sekali dan dipakai bersama semua pemanggilan', 'Python melarang default'], answer: 1, why: 'Objek mutable default hanya dibuat saat def dijalankan.' }] },
            { exercise: [['Tulis fungsi <code>apakah_genap(n)</code> yang mengembalikan True/False. Mengapa lebih baik <code>return n % 2 == 0</code> daripada if-else yang mengembalikan True/False?', '<code>def apakah_genap(n): return n % 2 == 0</code>. Ekspresinya sudah bernilai bool, jadi if-else hanya mengulang hal yang sama dengan lebih panjang.'], ['Tulis fungsi <code>hitung_vokal(teks)</code> dan panggil dengan tiga contoh, termasuk string kosong.', '<code>def hitung_vokal(teks): return sum(1 for c in teks.lower() if c in "aiueo")</code>. hitung_vokal("") menghasilkan 0.'], ['Apa keluaran: <code>def f(): x = 5\nx = 1\nf()\nprint(x)</code>?', '1. x di dalam f adalah variabel lokal baru, tidak mengubah x global.'], ['Tulis fungsi yang menerima list dan mengembalikan list baru berisi elemen kuadratnya tanpa mengubah list asli.', '<code>def kuadratkan(data): return [x * x for x in data]</code>']] },
            { summary: ['def mendefinisikan fungsi; parameter di definisi, argumen saat pemanggilan.', 'return mengirim nilai kembali; print hanya menampilkan.', 'Setiap pemanggilan membuat frame di call stack dengan variabel lokalnya sendiri.', 'Scope LEGB: Local, Enclosing, Global, Built-in.', 'Jangan memakai objek mutable sebagai nilai default; pakai None lalu buat di dalam fungsi.'] },
        ],
        faq: [['Apa bedanya parameter dan argumen?', 'Parameter adalah variabel pada definisi fungsi, argumen adalah nilai konkret yang diberikan saat memanggil.'], ['Apakah Python pass by value atau pass by reference?', 'Keduanya tidak tepat. Python mengirim referensi ke objek (pass by object reference). Mengubah objek mutable di dalam fungsi terlihat dari luar; menugaskan ulang nama parameter tidak.'], ['Berapa panjang fungsi yang baik?', 'Tidak ada angka pasti. Fungsi yang baik melakukan satu hal dan bisa dijelaskan dalam satu kalimat; bila terlalu panjang, pecah.']],
        sources: [['Dokumentasi Python: Defining Functions (tutorial)', 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions'], ['Dokumentasi Python: Python Scopes and Namespaces', 'https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces'], ['Dokumentasi Python: Execution model (naming and binding)', 'https://docs.python.org/3/reference/executionmodel.html'], ['PEP 257, Docstring Conventions', 'https://peps.python.org/pep-0257/'], REF_THINK],
    },

    {
        slug: 'args-kwargs-lambda-dan-fungsi-tingkat-tinggi-python',
        title: '*args, **kwargs, Lambda, dan Fungsi Tingkat Tinggi Python',
        description: 'Pelajari argumen variabel *args dan **kwargs, unpacking, fungsi lambda, map, filter, sorted dengan key, closure, dan dekorator sederhana, semua dengan contoh yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['args kwargs', 'lambda', 'map filter', 'closure', 'decorator'], cta: 'none',
        prereq: ['fungsi Python', 'list dan dictionary'],
        lead: 'Fungsi di Python adalah objek biasa: bisa disimpan di variabel, dikirim sebagai argumen, dan dikembalikan dari fungsi lain. Gagasan itu membuka gaya pemrograman yang ringkas dan kuat. Materi ini membahas mulai dari argumen yang jumlahnya fleksibel sampai dekorator, dengan semua contoh dijalankan sungguhan.',
        body: [
            { objectives: ['memakai *args dan **kwargs untuk argumen berjumlah variabel', 'memakai unpacking * dan ** saat memanggil fungsi', 'menulis fungsi lambda dan tahu batasnya', 'memakai map, filter, sorted(key=), dan reduce', 'menjelaskan closure dan menulis dekorator sederhana'] },
            { h2: '*args dan **kwargs' },
            { code: py`def jumlah(*args):                 # args adalah tuple
    print(args)
    return sum(args)

print(jumlah(1, 2, 3, 4))

def profil(**kwargs):               # kwargs adalah dict
    for k, v in kwargs.items():
        print(f"{k}: {v}")

profil(nama="Ani", umur=19, kota="Malang")

def campur(a, b=2, *args, **kwargs):
    print(a, b, args, kwargs)
campur(1, 3, 5, 7, x=9)`, lang: 'python', run: true },
            { h3: 'Unpacking saat memanggil' },
            { code: py`def kali(a, b, c):
    return a * b * c

angka = [2, 3, 4]
print(kali(*angka))                 # list dibuka menjadi 3 argumen
opsi = {"a": 2, "b": 5, "c": 10}
print(kali(**opsi))                 # dict dibuka menjadi argumen kata kunci
print([*range(3), *"ab"])           # unpacking juga bisa membangun list`, lang: 'python', run: true },
            { h2: 'Lambda: fungsi anonim satu ekspresi' },
            { code: py`kuadrat = lambda x: x * x
print(kuadrat(7))
tambah = lambda a, b=10: a + b
print(tambah(5), tambah(5, 1))`, lang: 'python', run: true },
            { callout: 'Lambda hanya boleh berisi <b>satu ekspresi</b> tanpa pernyataan. Pakai terutama sebagai argumen singkat (misalnya untuk <code>key=</code>). Bila logikanya butuh nama atau lebih dari satu baris, tulis <code>def</code>.', kind: 'info', title: 'Batas lambda' },
            { h2: 'Fungsi tingkat tinggi: map, filter, sorted, reduce' },
            { svg: 'flow', label: 'Tiga operasi pada urutan', steps: [{ t: 'map(f, data)', d: 'terapkan f ke setiap elemen' }, { t: 'filter(f, data)', d: 'pertahankan yang f-nya benar' }, { t: 'reduce(f, data)', d: 'lipat menjadi satu nilai' }], caption: 'Banyak orang Python lebih suka list comprehension daripada map dan filter karena lebih mudah dibaca, tetapi konsepnya sama pentingnya.' },
            { code: py`from functools import reduce
data = [1, 2, 3, 4, 5, 6]

print(list(map(lambda x: x * 10, data)))
print(list(filter(lambda x: x % 2 == 0, data)))
print(reduce(lambda total, x: total + x, data))        # 21
print(reduce(lambda a, b: a * b, data))                 # 720

# versi comprehension (sering lebih jelas)
print([x * 10 for x in data], [x for x in data if x % 2 == 0])

siswa = [{"nama": "Ani", "nilai": 88}, {"nama": "Budi", "nilai": 72}, {"nama": "Citra", "nilai": 95}]
terbaik = max(siswa, key=lambda s: s["nilai"])
print(terbaik["nama"], [s["nama"] for s in sorted(siswa, key=lambda s: -s["nilai"])])`, lang: 'python', run: true },
            { h2: 'Closure: fungsi yang mengingat lingkungannya' },
            { code: py`def buat_penghitung():
    hitung = 0
    def tambah():
        nonlocal hitung       # mengubah variabel di fungsi pembungkus
        hitung += 1
        return hitung
    return tambah

a = buat_penghitung()
b = buat_penghitung()
print(a(), a(), a(), b())    # a dan b punya "hitung" masing-masing`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri closure', desc: 'Perhatikan bahwa setiap pemanggilan a() mengubah hitung milik buat_penghitung yang sama.', code: py`def buat_penghitung():
    hitung = 0
    def tambah():
        nonlocal hitung
        hitung += 1
        return hitung
    return tambah

a = buat_penghitung()
print(a())
print(a())` },
            { h2: 'Dekorator: membungkus fungsi' },
            { code: py`import time
from functools import wraps

def catat_waktu(fungsi):
    @wraps(fungsi)
    def pembungkus(*args, **kwargs):
        mulai = time.perf_counter()
        hasil = fungsi(*args, **kwargs)
        durasi = time.perf_counter() - mulai
        print(f"{fungsi.__name__} selesai, durasi positif: {durasi >= 0}")
        return hasil
    return pembungkus

@catat_waktu              # sama dengan: hitung = catat_waktu(hitung)
def hitung(n):
    return sum(range(n))

print(hitung(100000))`, lang: 'python', run: true, caption: 'Dekorator dipakai untuk pencatatan log, pengukuran waktu, cache (functools.lru_cache), dan pemeriksaan izin.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Di dalam <code>def f(*args)</code>, args bertipe...', options: ['list', 'tuple', 'dict'], answer: 1, why: 'Argumen posisi ekstra dikumpulkan dalam tuple.' }, { q: '<code>list(filter(lambda x: x > 2, [1, 2, 3, 4]))</code> menghasilkan...', options: ['[3, 4]', '[1, 2]', '[False, False, True, True]'], answer: 0, why: 'filter mempertahankan elemen yang kondisinya benar.' }, { q: 'Apa fungsi <code>nonlocal</code>?', options: ['Membuat variabel global', 'Mengubah variabel di fungsi pembungkus', 'Menghapus variabel'], answer: 1, why: 'nonlocal merujuk variabel di scope pembungkus terdekat.' }] },
            { exercise: [['Tulis fungsi <code>rata_rata(*angka)</code> yang menerima sejumlah bilangan dan mengembalikan rata-ratanya.', '<code>def rata_rata(*angka): return sum(angka) / len(angka)</code>. Tangani kasus tanpa argumen (ZeroDivisionError) bila diminta.'], ['Urutkan list kata berdasarkan huruf terakhirnya.', '<code>sorted(kata, key=lambda k: k[-1])</code>'], ['Ubah <code>reduce(lambda a, b: a + b, data)</code> menjadi pemanggilan fungsi bawaan.', '<code>sum(data)</code>'], ['Buat fungsi <code>pangkat(n)</code> yang mengembalikan fungsi yang memangkatkan argumennya dengan n.', '<code>def pangkat(n):\n    return lambda x: x ** n</code>. Contoh: <code>kubik = pangkat(3); kubik(2)</code> menghasilkan 8.']] },
            { summary: ['*args mengumpulkan argumen posisi (tuple), **kwargs argumen kata kunci (dict).', '* dan ** pada pemanggilan membuka list atau dict menjadi argumen.', 'Lambda: fungsi anonim satu ekspresi, cocok untuk key= dan argumen singkat.', 'map, filter, reduce, dan sorted(key=) menerima fungsi sebagai argumen.', 'Closure mengingat lingkungannya; dekorator membungkus fungsi tanpa mengubah kodenya.'] },
        ],
        faq: [['Apakah map lebih cepat dari list comprehension?', 'Untuk fungsi bawaan, kadang sedikit lebih cepat; untuk lambda biasanya tidak. Pilih yang paling terbaca, lalu ukur bila performa penting.'], ['Mengapa menamai lambda dengan variabel dianggap kurang baik?', 'PEP 8 menyarankan def untuk fungsi bernama, karena traceback dan debugging lebih jelas. Lambda tetap cocok sebagai argumen sementara.'], ['Apa itu keyword-only argument?', 'Parameter setelah * pada definisi, misalnya <code>def f(a, *, b)</code>, hanya bisa diberikan dengan nama: <code>f(1, b=2)</code>.']],
        sources: [['Dokumentasi Python: More on Defining Functions (*args, **kwargs, lambda)', 'https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions'], ['Dokumentasi Python: functools (reduce, wraps, lru_cache)', 'https://docs.python.org/3/library/functools.html'], ['Dokumentasi Python: Python Scopes and Namespaces (nonlocal)', 'https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces'], ['PEP 318, Decorators for Functions and Methods', 'https://peps.python.org/pep-0318/'], REF_MIT],
    },
];
