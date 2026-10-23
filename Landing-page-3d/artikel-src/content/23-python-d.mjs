const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_THINK = ['Allen B. Downey, Think Python (edisi ke-3), buku teks terbuka', 'https://allendowney.github.io/ThinkPython/'];
const REF_MIT = ['MIT OpenCourseWare 6.0001: Introduction to Computer Science and Programming in Python', 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'];

export default [
    {
        slug: 'modul-package-dan-import-python-mengorganisasi-kode',
        title: 'Modul, Package, dan Import Python: Mengorganisasi Kode',
        description: 'Pelajari cara memecah program menjadi modul dan package, bentuk-bentuk import, perilaku __name__, pustaka standar yang berguna, dan struktur proyek Python yang rapi.',
        date: D, category: C, level: 'Menengah', tags: ['modul Python', 'package', 'import', '__name__ main', 'struktur proyek'], cta: 'none',
        prereq: ['fungsi Python'],
        lead: 'Program kecil muat dalam satu berkas, tetapi program nyata tidak. Python mengorganisasi kode lewat modul (satu berkas) dan package (folder berisi modul). Materi ini menjelaskan cara memakai dan membuat keduanya, serta mengapa blok <code>if __name__ == "__main__"</code> ada di hampir setiap skrip yang rapi.',
        body: [
            { objectives: ['memakai pustaka standar lewat import, from-import, dan alias', 'membuat modul sendiri dan mengimpornya dari berkas lain', 'menjelaskan arti if __name__ == "__main__"', 'menyusun package dengan struktur folder yang benar', 'mengenali pustaka standar yang paling sering dipakai'] },
            { h2: 'Bentuk-bentuk import' },
            { code: py`import math
from random import randint, seed
import statistics as stat
from datetime import date

print(math.sqrt(144), math.pi)
seed(1); print(randint(1, 6) in range(1, 7))
print(stat.mean([2, 4, 6, 9]), stat.median([2, 4, 6, 9]))
print(date(2026, 10, 23).strftime("%d %B %Y"))`, lang: 'python', run: true },
            { table: { head: ['Bentuk', 'Efek', 'Kapan'], rows: [['import math', 'Memakai math.sqrt(...): nama modul tetap tampak', 'Paling aman dan jelas'], ['from math import sqrt', 'Memakai sqrt(...) langsung', 'Bila hanya butuh satu-dua nama'], ['import numpy as np', 'Memberi alias pendek', 'Konvensi komunitas (np, pd)'], ['from math import *', 'Mengimpor semua nama', '<b>Hindari</b>: mengotori namespace dan membingungkan sumber nama']] } },
            { h2: 'Membuat modul sendiri' },
            `Setiap berkas <code>.py</code> otomatis menjadi modul. Misalkan berkas <code>geometri.py</code> berisi fungsi-fungsi, lalu dipakai oleh <code>utama.py</code> di folder yang sama.`,
            { code: py`# geometri.py
PI = 3.14159

def luas_lingkaran(r):
    return PI * r * r

def keliling_persegi(s):
    return 4 * s

if __name__ == "__main__":
    # hanya berjalan bila berkas ini dijalankan langsung
    print("Tes cepat:", luas_lingkaran(2))`, lang: 'python', file: 'geometri.py' },
            { code: py`# utama.py
import geometri
from geometri import keliling_persegi

print(geometri.luas_lingkaran(10))
print(keliling_persegi(5))`, lang: 'python', file: 'utama.py' },
            { h2: 'Apa arti if __name__ == "__main__"?' },
            `Setiap modul punya variabel <code>__name__</code>. Bila berkas dijalankan langsung (<code>python geometri.py</code>), nilainya <code>"__main__"</code>. Bila diimpor dari berkas lain, nilainya nama modul (<code>"geometri"</code>). Blok tersebut membuat kode uji atau program utama tidak ikut berjalan ketika modul hanya diimpor.`,
            { w: 'compare', title: 'Dua cara berkas dipakai', tabs: [{ label: 'Dijalankan langsung', html: '<code>python geometri.py</code><br><code>__name__</code> bernilai <code>"__main__"</code>, jadi blok if dijalankan dan "Tes cepat" tercetak.' }, { label: 'Diimpor', html: '<code>import geometri</code><br><code>__name__</code> bernilai <code>"geometri"</code>, jadi blok if dilewati. Fungsi tetap tersedia, tanpa efek samping.' }] },
            { h2: 'Package: folder berisi modul' },
            { svg: 'diagram', w: 560, h: 250, label: 'Struktur sebuah package', nodes: [{ id: 'r', x: 90, y: 30, shape: 'rect', w: 150, h: 36, t: 'proyek/', fill: '#fff1d6' }, { id: 'u', x: 90, y: 90, shape: 'rect', w: 150, h: 36, t: 'utama.py' }, { id: 'p', x: 300, y: 90, shape: 'rect', w: 170, h: 36, t: 'toko/ (package)', fill: '#e4f6cc' }, { id: 'i', x: 460, y: 140, shape: 'rect', w: 160, h: 36, t: '__init__.py' }, { id: 'a', x: 460, y: 190, shape: 'rect', w: 160, h: 36, t: 'produk.py' }, { id: 'b', x: 460, y: 235, shape: 'rect', w: 160, h: 28, t: 'harga.py' }], edges: [{ from: 'r', to: 'u', head: 'none' }, { from: 'r', to: 'p', head: 'none' }, { from: 'p', to: 'i', head: 'none' }, { from: 'p', to: 'a', head: 'none' }, { from: 'p', to: 'b', head: 'none' }], caption: '__init__.py menandai folder sebagai package (kini opsional untuk namespace package, tetapi tetap lazim dipakai).' },
            { code: py`# di utama.py
from toko.produk import Produk
from toko import harga
import toko.harga as h`, lang: 'python' },
            { h2: 'Pustaka standar yang wajib dikenal' },
            { table: { head: ['Modul', 'Kegunaan'], rows: [['math', 'Fungsi matematika (sqrt, sin, log, pi)'], ['random', 'Bilangan acak'], ['datetime', 'Tanggal dan waktu'], ['collections', 'Counter, defaultdict, deque'], ['itertools', 'Alat iterasi (permutations, combinations, product)'], ['json', 'Membaca dan menulis JSON'], ['csv', 'Membaca dan menulis CSV'], ['os dan pathlib', 'Berkas dan folder'], ['sys', 'Argumen baris perintah, interpreter'], ['re', 'Ekspresi reguler'], ['unittest', 'Pengujian']] } },
            { code: py`from itertools import permutations, combinations
from collections import Counter
print(list(permutations("ABC", 2)))
print(list(combinations([1, 2, 3, 4], 2)))
print(Counter("mississippi").most_common(2))`, lang: 'python', run: true },
            { callout: 'Jangan memberi nama berkas Anda sama dengan modul standar (misalnya <code>random.py</code> atau <code>math.py</code>). Python akan mengimpor berkas Anda, bukan pustaka standar, dan menimbulkan error yang membingungkan.', kind: 'warn', title: 'Jebakan umum' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada berkas yang diimpor, nilai <code>__name__</code> adalah...', options: ['"__main__"', 'Nama modul', 'None'], answer: 1, why: 'Hanya saat dijalankan langsung nilainya "__main__".' }, { q: 'Mengapa <code>from modul import *</code> tidak dianjurkan?', options: ['Tidak valid di Python 3', 'Mengotori namespace dan menyamarkan asal nama', 'Terlalu lambat'], answer: 1, why: 'Sulit menelusuri dari mana sebuah nama berasal dan bisa menimpa nama lain.' }] },
            { exercise: [['Buat modul <code>suhu.py</code> berisi <code>celsius_ke_fahrenheit(c)</code> dan <code>fahrenheit_ke_celsius(f)</code> dengan blok uji di bawah <code>__main__</code>.', '<code>def celsius_ke_fahrenheit(c): return c * 9 / 5 + 32\ndef fahrenheit_ke_celsius(f): return (f - 32) * 5 / 9\nif __name__ == "__main__":\n    print(celsius_ke_fahrenheit(100))</code>'], ['Apa bedanya <code>import math</code> dan <code>from math import sqrt</code> dari sisi cara memanggil?', 'Dengan import math, panggil <code>math.sqrt(9)</code>. Dengan from math import sqrt, panggil <code>sqrt(9)</code> langsung.'], ['Pakai itertools untuk mencetak semua susunan dua huruf dari "XYZ" tanpa pengulangan.', '<code>list(permutations("XYZ", 2))</code> menghasilkan 6 pasangan berurutan.']] },
            { summary: ['Import memberi akses ke modul; hindari from ... import *.', 'Setiap berkas .py adalah modul; folder berisi modul adalah package.', 'if __name__ == "__main__" memisahkan kode yang hanya berjalan saat dijalankan langsung.', 'Kenali pustaka standar sebelum memasang paket pihak ketiga.'] },
        ],
        faq: [['Apa bedanya modul, package, dan library?', 'Modul satu berkas, package folder berisi modul, library (pustaka) istilah umum untuk kumpulan kode yang bisa dipakai ulang, bisa berupa satu atau banyak package.'], ['Mengapa import gagal padahal berkas ada?', 'Biasanya berkas tidak berada di jalur pencarian Python (sys.path). Jalankan dari folder proyek, atau gunakan struktur package dan <code>python -m</code>.'], ['Bagaimana memasang pustaka pihak ketiga?', 'Dengan pip di dalam virtual environment, misalnya <code>pip install requests</code>. Lihat materi virtual environment.']],
        sources: [['Dokumentasi Python: Modules (tutorial)', 'https://docs.python.org/3/tutorial/modules.html'], ['Dokumentasi Python: The Import System', 'https://docs.python.org/3/reference/import.html'], ['Dokumentasi Python: __main__ (Top-level code environment)', 'https://docs.python.org/3/library/__main__.html'], ['Dokumentasi Python: The Python Standard Library', 'https://docs.python.org/3/library/'], REF_THINK],
    },

    {
        slug: 'file-io-python-membaca-menulis-txt-csv-json',
        title: 'File I/O Python: Membaca dan Menulis TXT, CSV, dan JSON',
        description: 'Pelajari membaca dan menulis berkas teks, CSV, dan JSON di Python dengan with, mode berkas, encoding UTF-8, pathlib, serta praktik aman agar berkas tidak rusak atau bocor.',
        date: D, category: C, level: 'Menengah', tags: ['file Python', 'baca tulis file', 'CSV', 'JSON', 'pathlib'], cta: 'none',
        prereq: ['string', 'list dan dictionary', 'perulangan'],
        lead: 'Variabel hilang begitu program selesai. Agar data bertahan, program perlu menyimpannya ke berkas, dan membacanya kembali di lain waktu. Materi ini membahas tiga format yang paling sering ditemui: teks biasa, CSV (tabel), dan JSON (data bersarang), beserta cara membuka berkas dengan aman.',
        body: [
            { objectives: ['membuka berkas dengan with dan memilih mode yang tepat', 'membaca berkas per baris dan seluruhnya', 'menulis dan menambah isi berkas dengan encoding UTF-8', 'membaca dan menulis CSV dengan modul csv', 'menyimpan dan memuat struktur data dengan JSON', 'memakai pathlib untuk jalur berkas'] },
            { h2: 'Membuka berkas: with menjamin berkas tertutup' },
            { table: { head: ['Mode', 'Arti', 'Efek bila berkas sudah ada'], rows: [['"r"', 'Baca (bawaan)', 'Error bila berkas tidak ada'], ['"w"', 'Tulis', '<b>Menimpa</b> seluruh isi lama'], ['"a"', 'Tambah di akhir (append)', 'Isi lama dipertahankan'], ['"x"', 'Buat baru', 'Error bila sudah ada'], ['"r+"', 'Baca dan tulis', 'Isi dipertahankan']] } },
            { code: py`with open("catatan.txt", "w", encoding="utf-8") as f:
    f.write("Baris pertama\n")
    f.write("Baris kedua: é ü 日本\n")
    f.writelines(["Baris ketiga\n", "Baris keempat\n"])

with open("catatan.txt", "a", encoding="utf-8") as f:
    f.write("Ditambahkan di akhir\n")

with open("catatan.txt", encoding="utf-8") as f:
    for nomor, baris in enumerate(f, start=1):   # membaca per baris, hemat memori
        print(nomor, baris.rstrip())

with open("catatan.txt", encoding="utf-8") as f:
    isi = f.read()
print(len(isi), "karakter;", isi.count("\n"), "baris")`, lang: 'python', run: true },
            { callout: 'Selalu sebutkan <code>encoding="utf-8"</code>. Tanpa itu, Python memakai encoding bawaan sistem yang bisa berbeda antar komputer (di Windows sering bukan UTF-8), sehingga huruf non-ASCII rusak.', kind: 'warn', title: 'Encoding' },
            { h2: 'CSV: data tabel' },
            { code: py`import csv

siswa = [("Ani", 88), ("Budi", 72), ("Citra", 95)]
with open("nilai.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["nama", "nilai"])
    w.writerows(siswa)

with open("nilai.csv", newline="", encoding="utf-8") as f:
    for baris in csv.DictReader(f):          # tiap baris menjadi dict
        print(baris["nama"], int(baris["nilai"]) + 5)

total = 0
with open("nilai.csv", newline="", encoding="utf-8") as f:
    r = csv.reader(f); next(r)               # lewati header
    total = sum(int(n) for _, n in r)
print("Total:", total)`, lang: 'python', run: true, caption: 'Nilai di CSV selalu berupa teks. Konversi ke int atau float sendiri.' },
            { h2: 'JSON: data bersarang' },
            { code: py`import json

data = {"nama": "Ani", "nilai": [88, 90], "aktif": True, "alamat": None}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open("data.json", encoding="utf-8") as f:
    baru = json.load(f)
print(baru["nilai"][1], type(baru["aktif"]), baru["alamat"])

teks = json.dumps(data, ensure_ascii=False)       # ke string, bukan berkas
print(teks)
print(json.loads(teks) == data)`, lang: 'python', run: true },
            { table: { head: ['Python', 'JSON'], rows: [['dict', 'object'], ['list, tuple', 'array'], ['str', 'string'], ['int, float', 'number'], ['True, False', 'true, false'], ['None', 'null']] } },
            { h2: 'pathlib: jalur berkas yang aman lintas sistem' },
            { code: py`from pathlib import Path

p = Path("laporan") / "2026" / "okt.txt"      # operator / menyambung jalur
p.parent.mkdir(parents=True, exist_ok=True)
p.write_text("isi laporan", encoding="utf-8")
print(p.name, p.suffix, p.exists(), p.read_text(encoding="utf-8"))
print([x.name for x in Path("laporan/2026").iterdir()])`, lang: 'python', run: true },
            { h2: 'Contoh utuh: menghitung frekuensi kata dari berkas' },
            { code: py`from collections import Counter
from pathlib import Path

Path("puisi.txt").write_text("Padi menguning padi merunduk\nPadi berisi padi merunduk", encoding="utf-8")
kata = Path("puisi.txt").read_text(encoding="utf-8").lower().split()
for k, n in Counter(kata).most_common(3):
    print(f"{k:<10}{n}")`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mode berkas yang menimpa isi lama adalah...', options: ['"r"', '"a"', '"w"'], answer: 2, why: 'Mode "w" mengosongkan berkas saat dibuka.' }, { q: 'Mengapa memakai <code>with open(...)</code>?', options: ['Lebih cepat', 'Berkas otomatis ditutup meski terjadi error', 'Agar bisa menulis'], answer: 1, why: 'Context manager menjamin berkas ditutup.' }, { q: 'Dalam CSV, angka dibaca sebagai tipe...', options: ['int', 'float', 'str'], answer: 2, why: 'Semua nilai dibaca sebagai teks.' }] },
            { exercise: [['Tulis program yang membaca "nilai.csv" dan mencetak nama siswa dengan nilai tertinggi.', '<code>import csv\nwith open("nilai.csv", newline="", encoding="utf-8") as f:\n    baris = list(csv.DictReader(f))\nprint(max(baris, key=lambda b: int(b["nilai"]))["nama"])</code>'], ['Mengapa <code>open("a.txt", "w")</code> pada berkas penting berbahaya?', 'Berkas langsung dikosongkan. Gunakan "a" untuk menambah, atau tulis ke berkas sementara lalu ganti nama bila aman.'], ['Simpan list of dict berisi tiga produk ke JSON, lalu baca kembali dan tampilkan total harga.', '<code>json.dump(produk, f)</code>, lalu <code>sum(p["harga"] for p in json.load(f))</code>.']] },
            { summary: ['Pakai with open(...) dan tentukan encoding="utf-8".', 'Mode: r baca, w tulis (menimpa), a tambah, x buat baru.', 'CSV untuk tabel (modul csv), JSON untuk data bersarang (modul json).', 'pathlib.Path menyederhanakan penanganan jalur lintas sistem operasi.'] },
        ],
        faq: [['Mengapa baris yang dibaca ada karakter \\n di akhir?', 'Pembacaan per baris mempertahankan pemisah baris. Gunakan <code>.rstrip()</code> atau <code>.strip()</code> untuk membuangnya.'], ['Bagaimana membaca berkas besar?', 'Iterasi langsung pada objek berkas (for baris in f) membaca satu baris sekali, sehingga hemat memori.'], ['Apa bedanya json.dump dan json.dumps?', 'dump menulis ke objek berkas, dumps menghasilkan string. Begitu pula load dan loads.']],
        sources: [['Dokumentasi Python: Reading and Writing Files (tutorial)', 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files'], ['Dokumentasi Python: csv, CSV File Reading and Writing', 'https://docs.python.org/3/library/csv.html'], ['Dokumentasi Python: json, JSON encoder and decoder', 'https://docs.python.org/3/library/json.html'], ['Dokumentasi Python: pathlib, Object-oriented filesystem paths', 'https://docs.python.org/3/library/pathlib.html'], REF_THINK],
    },

    {
        slug: 'exception-handling-python-try-except-finally-dan-raise',
        title: 'Exception Handling Python: try, except, finally, dan raise',
        description: 'Pelajari penanganan kesalahan di Python: jenis exception umum, try/except/else/finally, raise, exception kustom, dan prinsip EAFP, dilengkapi penelusuran alur eksekusi.',
        date: D, category: C, level: 'Menengah', tags: ['exception Python', 'try except', 'finally', 'raise', 'error handling'], cta: 'none',
        prereq: ['fungsi', 'percabangan'],
        lead: 'Program yang baik tidak hanya benar saat masukannya benar, tetapi juga bersikap wajar saat ada yang salah: berkas tidak ada, pengguna mengetik huruf alih-alih angka, jaringan putus. Python menangani situasi ini dengan exception. Memahaminya berarti Anda bisa membuat program yang tangguh, bukan sekadar yang "jalan di komputer saya".',
        body: [
            { objectives: ['membaca pesan traceback dan mengenali jenis exception umum', 'memakai try, except, else, dan finally dengan benar', 'melempar exception dengan raise dan membuat exception kustom', 'memilih antara memeriksa dulu (LBYL) dan mencoba lalu menangani (EAFP)', 'menghindari kebiasaan buruk seperti except kosong'] },
            { h2: 'Apa itu exception?' },
            `Exception adalah kejadian yang mengganggu alur normal program. Bila tidak ditangani, program berhenti dan Python mencetak <b>traceback</b>: jejak pemanggilan yang berakhir pada jenis dan pesan kesalahan.`,
            { code: py`def bagi(a, b):
    return a / b

print(bagi(10, 2))
print(bagi(1, 0))`, lang: 'python', run: true, expectError: true, caption: 'Baris terakhir keluaran adalah jenis dan pesan exception. Baca dari bawah ke atas saat men-debug.' },
            { table: { head: ['Exception', 'Penyebab umum', 'Contoh'], rows: [['ValueError', 'Nilai valid secara tipe, tetapi tidak sesuai', 'int("abc")'], ['TypeError', 'Operasi pada tipe yang salah', '"a" + 1'], ['ZeroDivisionError', 'Pembagian dengan nol', '5 / 0'], ['IndexError', 'Indeks di luar jangkauan', '[1, 2][5]'], ['KeyError', 'Kunci kamus tidak ada', '{"a": 1}["b"]'], ['FileNotFoundError', 'Berkas tidak ditemukan', 'open("tidak_ada.txt")'], ['AttributeError', 'Atribut atau metode tidak ada', '(5).append(1)']] } },
            { h2: 'try, except, else, finally' },
            { svg: 'diagram', w: 640, h: 250, label: 'Alur try, except, else, finally', nodes: [{ id: 't', x: 90, y: 60, shape: 'rect', w: 120, h: 44, t: 'try' }, { id: 'e', x: 90, y: 160, shape: 'rect', w: 120, h: 44, t: 'except', fill: '#fde4e1' }, { id: 'el', x: 300, y: 60, shape: 'rect', w: 140, h: 44, t: 'else', fill: '#e4f6cc' }, { id: 'f', x: 500, y: 110, shape: 'rect', w: 150, h: 44, t: 'finally (selalu)', fill: '#fff1d6' }, { id: 'l', x: 300, y: 160, shape: 'text', t: 'Bila exception terjadi', chars: 22 }, { id: 'm', x: 300, y: 25, shape: 'text', t: 'Bila tidak ada exception', chars: 26 }], edges: [{ from: 't', to: 'e', label: 'ada error', dx: -20 }, { from: 't', to: 'el', label: 'sukses' }, { from: 'el', to: 'f' }, { from: 'e', to: 'f', via: [[300, 215], [500, 215]] }], caption: 'finally berjalan dalam semua kasus, termasuk saat ada return atau exception yang tidak ditangkap.' },
            { code: py`def baca_angka(teks):
    try:
        n = int(teks)
    except ValueError:
        print(f"  '{teks}' bukan bilangan bulat")
        return None
    else:
        print(f"  berhasil: {n}")
        return n
    finally:
        print("  (selesai memeriksa)")

for t in ["42", "abc"]:
    print(repr(t), "->", baca_angka(t))`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri alur saat exception terjadi', desc: 'Perhatikan bagaimana eksekusi melompat dari baris int() langsung ke blok except, dan blok else dilewati.', code: py`teks = "x7"
try:
    n = int(teks)
    print("sukses", n)
except ValueError:
    print("gagal")
    n = -1
finally:
    print("selesai")` },
            { h2: 'Menangkap exception tertentu, bukan semuanya' },
            { code: py`def hitung(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return float("inf")
    except TypeError as e:
        print("Tipe salah:", e)
        return None

print(hitung(6, 3), hitung(1, 0), hitung("1", 2))`, lang: 'python', run: true },
            { callout: 'Hindari <code>except:</code> kosong atau <code>except Exception: pass</code>. Ia menelan semua kesalahan, termasuk bug yang seharusnya Anda ketahui, sehingga program gagal diam-diam. Tangkap hanya yang bisa Anda tangani, dan catat (log) sisanya.', kind: 'bad', title: 'Kebiasaan buruk yang paling umum' },
            { h2: 'raise dan exception kustom' },
            { code: py`class SaldoKurang(Exception):
    """Dilempar bila saldo tidak cukup untuk penarikan."""
    def __init__(self, saldo, jumlah):
        super().__init__(f"Saldo {saldo} kurang dari {jumlah}")
        self.kurang = jumlah - saldo

def tarik(saldo, jumlah):
    if jumlah <= 0:
        raise ValueError("jumlah harus positif")
    if jumlah > saldo:
        raise SaldoKurang(saldo, jumlah)
    return saldo - jumlah

for j in [30, 500, -5]:
    try:
        print("sisa:", tarik(100, j))
    except SaldoKurang as e:
        print("Ditolak:", e, "| kurang", e.kurang)
    except ValueError as e:
        print("Masukan salah:", e)`, lang: 'python', run: true },
            { h2: 'EAFP dan LBYL' },
            { w: 'compare', title: 'Dua gaya menangani kemungkinan error', tabs: [{ label: 'LBYL (Look Before You Leap)', html: 'Periksa dulu, baru lakukan.<br><code>if "k" in d: nilai = d["k"]</code><br>Cocok bila pemeriksaannya murah dan jelas. Rentan "balapan" bila keadaan berubah di antara pemeriksaan dan tindakan.' }, { label: 'EAFP (Easier to Ask Forgiveness than Permission)', html: 'Coba saja, tangani bila gagal.<br><code>try: nilai = d["k"]\nexcept KeyError: nilai = None</code><br>Gaya yang lazim di Python; ringkas dan tahan balapan, misalnya saat membuka berkas.' }] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Blok mana yang berjalan hanya bila TIDAK ada exception?', options: ['except', 'else', 'finally'], answer: 1, why: 'else dijalankan bila blok try selesai tanpa exception.' }, { q: 'Exception yang muncul pada <code>int("12a")</code>?', options: ['TypeError', 'ValueError', 'IndexError'], answer: 1, why: 'Tipenya benar (str) tetapi isinya tidak valid untuk int.' }, { q: 'Mengapa <code>except: pass</code> berbahaya?', options: ['Memperlambat program', 'Menelan semua error termasuk bug tanpa jejak', 'Tidak valid'], answer: 1, why: 'Kesalahan hilang diam-diam sehingga sulit dilacak.' }] },
            { exercise: [['Tulis fungsi <code>minta_angka()</code> yang terus bertanya sampai pengguna memasukkan bilangan bulat valid.', '<code>def minta_angka():\n    while True:\n        try:\n            return int(input("Angka: "))\n        except ValueError:\n            print("Bukan bilangan bulat, coba lagi.")</code>'], ['Ubah fungsi bagi agar mengembalikan None dan mencetak pesan bila pembagi nol, tanpa memakai if.', '<code>try: return a / b\nexcept ZeroDivisionError: print("pembagi nol"); return None</code>'], ['Apa yang tercetak: try berisi return 1 dan finally berisi print("F")?', 'F tercetak lebih dulu, lalu fungsi mengembalikan 1. finally tetap berjalan sebelum return benar-benar keluar.']] },
            { summary: ['Exception menghentikan program bila tidak ditangani; traceback dibaca dari bawah.', 'try/except menangkap kesalahan tertentu, else untuk jalur sukses, finally untuk pembersihan yang selalu berjalan.', 'raise melempar exception; buat kelas turunan Exception untuk kesalahan domain.', 'Tangkap spesifik, jangan menelan semua error.'] },
        ],
        faq: [['Kapan memakai assert dan kapan exception?', 'assert untuk memeriksa asumsi internal saat pengembangan (bisa dinonaktifkan). Exception untuk kesalahan yang bisa terjadi di dunia nyata, seperti masukan pengguna atau berkas.'], ['Apa itu exception chaining?', 'Dengan <code>raise Baru from e</code>, Python menyimpan exception asal sebagai penyebab sehingga traceback menampilkan keduanya.'], ['Apakah exception lambat?', 'Menangani exception lebih mahal daripada percabangan biasa, tetapi blok try yang tidak melempar exception hampir tanpa biaya.']],
        sources: [['Dokumentasi Python: Errors and Exceptions (tutorial)', 'https://docs.python.org/3/tutorial/errors.html'], ['Dokumentasi Python: Built-in Exceptions', 'https://docs.python.org/3/library/exceptions.html'], ['Dokumentasi Python: The try statement', 'https://docs.python.org/3/reference/compound_stmts.html#the-try-statement'], REF_THINK],
    },

    {
        slug: 'pengujian-python-assert-unittest-dan-test-driven-development',
        title: 'Pengujian Python: assert, unittest, dan Test-Driven Development',
        description: 'Pelajari menguji kode Python dengan assert dan unittest: merancang kasus uji, kasus tepi, struktur test case, dan siklus TDD merah-hijau-refactor dengan contoh yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['unittest', 'assert', 'TDD', 'pengujian perangkat lunak', 'testing Python'], cta: 'none',
        prereq: ['fungsi', 'exception'],
        lead: '"Berjalan" bukan berarti "benar". Pengujian otomatis adalah cara memastikan kode melakukan yang seharusnya, dan tetap melakukannya setelah Anda mengubahnya enam bulan lagi. Materi ini memperkenalkan pengujian dari yang paling sederhana (assert) sampai kerangka unittest dan alur TDD.',
        body: [
            { objectives: ['menulis pernyataan assert sederhana', 'merancang kasus uji: normal, batas, dan error', 'menulis test case dengan unittest dan membaca hasilnya', 'menjelaskan siklus TDD: merah, hijau, refactor', 'menulis kode yang mudah diuji'] },
            { h2: 'Mengapa menguji?' },
            { ul: ['Menemukan bug lebih awal, saat memperbaikinya masih murah.', 'Memberi keberanian mengubah kode (refactoring) tanpa takut merusak hal lain.', 'Berfungsi sebagai dokumentasi hidup tentang perilaku yang diharapkan.', 'Memaksa Anda memikirkan kasus tepi di awal.'] },
            { h2: 'Langkah paling sederhana: assert' },
            { code: py`def luas_persegi_panjang(p, l):
    return p * l

assert luas_persegi_panjang(3, 4) == 12
assert luas_persegi_panjang(0, 5) == 0
print("semua assert lolos")

try:
    assert luas_persegi_panjang(2, 2) == 5, "harusnya 4"
except AssertionError as e:
    print("gagal:", e)`, lang: 'python', run: true },
            { h2: 'Merancang kasus uji' },
            { table: { head: ['Jenis', 'Contoh untuk fungsi rata_rata(list)'], rows: [['Normal', '[2, 4, 6] → 4'], ['Satu elemen', '[7] → 7'], ['Batas / nol', '[0, 0] → 0'], ['Negatif / pecahan', '[-1, 1] → 0; [0.5, 1.5] → 1.0'], ['Tidak valid', '[] → seharusnya menimbulkan ValueError (bukan ZeroDivisionError yang membingungkan)']] } },
            { h2: 'unittest: kerangka pengujian bawaan' },
            { code: py`import sys, unittest

def rata_rata(data):
    if not data:
        raise ValueError("data tidak boleh kosong")
    return sum(data) / len(data)

class TesRataRata(unittest.TestCase):
    def test_normal(self):
        self.assertEqual(rata_rata([2, 4, 6]), 4)

    def test_satu_elemen(self):
        self.assertEqual(rata_rata([7]), 7)

    def test_pecahan(self):
        self.assertAlmostEqual(rata_rata([0.1, 0.2]), 0.15)   # aman untuk float

    def test_kosong(self):
        with self.assertRaises(ValueError):
            rata_rata([])

unittest.main(argv=["x"], exit=False, testRunner=unittest.TextTestRunner(stream=sys.stdout, verbosity=2))`, lang: 'python', run: true },
            { callout: 'Nama metode uji harus diawali <code>test</code> agar ditemukan otomatis. Gunakan <code>assertAlmostEqual</code> untuk float, bukan <code>assertEqual</code>, karena 0.1 + 0.2 tidak persis 0.3.', kind: 'info', title: 'Aturan unittest' },
            { h2: 'Test-Driven Development (TDD)' },
            { svg: 'cycle', label: 'Siklus TDD', items: ['Merah: tulis tes yang gagal', 'Hijau: tulis kode paling sederhana agar lulus', 'Refactor: rapikan tanpa mengubah perilaku', 'Ulangi untuk fitur berikutnya'], caption: 'Tes ditulis lebih dulu sehingga ia menjadi spesifikasi yang bisa dijalankan.' },
            { code: py`# Langkah 1 (merah): tes untuk fungsi yang belum ada
# assert fizzbuzz(3) == "Fizz"; assert fizzbuzz(5) == "Buzz"; ...
# Langkah 2 (hijau): implementasi
def fizzbuzz(n):
    if n % 15 == 0: return "FizzBuzz"
    if n % 3 == 0: return "Fizz"
    if n % 5 == 0: return "Buzz"
    return str(n)

assert fizzbuzz(3) == "Fizz" and fizzbuzz(5) == "Buzz"
assert fizzbuzz(15) == "FizzBuzz" and fizzbuzz(7) == "7"
print([fizzbuzz(i) for i in range(1, 16)])`, lang: 'python', run: true },
            { h2: 'Menulis kode yang mudah diuji' },
            { w: 'checklist', title: 'Ciri kode yang mudah diuji', desc: 'Centang yang sudah Anda terapkan. Progres tersimpan di browser ini.', items: ['Fungsi mengembalikan nilai, bukan hanya mencetak.', 'Fungsi bergantung pada parameter, bukan variabel global.', 'Satu fungsi melakukan satu hal.', 'Masukan dari luar (berkas, jaringan, waktu) dipisahkan dari logika.', 'Ada tes untuk kasus normal, tepi, dan error.', 'Tes berjalan cepat dan bisa dijalankan kapan saja.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Urutan siklus TDD yang benar?', options: ['Hijau, merah, refactor', 'Merah, hijau, refactor', 'Refactor, merah, hijau'], answer: 1, why: 'Tulis tes yang gagal (merah), buat lulus (hijau), lalu rapikan.' }, { q: 'Mengapa memakai <code>assertAlmostEqual</code> untuk float?', options: ['Lebih cepat', 'Float tidak presisi persis', 'Wajib di unittest'], answer: 1, why: 'Selisih sangat kecil akibat representasi biner.' }, { q: 'Apakah kode yang lulus semua tes pasti bebas bug?', options: ['Ya', 'Tidak, hanya terbukti benar pada kasus yang diuji', 'Hanya bila tesnya > 100'], answer: 1, why: 'Tes menunjukkan adanya bug, bukan ketiadaannya.' }] },
            { exercise: [['Tulis tiga assert untuk fungsi <code>apakah_kabisat(tahun)</code> yang mencakup tahun 1900, 2000, dan 2024.', '<code>assert not apakah_kabisat(1900)\nassert apakah_kabisat(2000)\nassert apakah_kabisat(2024)</code>'], ['Rancang kasus uji untuk fungsi <code>nilai_maksimum(daftar)</code>.', 'Normal [3, 9, 2] → 9; satu elemen [5] → 5; semua sama [4, 4] → 4; negatif [-3, -1] → -1; kosong [] → ValueError.'], ['Mengapa tes sebaiknya tidak bergantung satu sama lain?', 'Agar urutan eksekusi tidak memengaruhi hasil, dan satu tes yang gagal tidak menyembunyikan yang lain. unittest menyiapkan keadaan baru lewat setUp.']] },
            { summary: ['assert memeriksa asumsi dengan cepat; unittest menyusun tes menjadi test case yang bisa dijalankan otomatis.', 'Rancang kasus normal, batas, dan error.', 'TDD: tes gagal dulu, buat lulus, lalu rapikan.', 'Kode yang mengembalikan nilai dan tidak bergantung pada global lebih mudah diuji.'] },
        ],
        faq: [['Apa bedanya unittest dan pytest?', 'unittest ada di pustaka standar dan bergaya kelas. pytest pihak ketiga, lebih ringkas (cukup fungsi dan assert biasa), dan sangat populer. Konsepnya sama.'], ['Berapa banyak tes yang cukup?', 'Tidak ada angka pasti. Fokus pada logika penting dan kasus tepi; cakupan (coverage) membantu melihat bagian yang belum diuji.'], ['Apakah menulis tes memperlambat pengembangan?', 'Di awal terasa lebih lambat, tetapi pada proyek yang bertahan lama justru menghemat waktu karena bug ditemukan lebih cepat.']],
        sources: [['Dokumentasi Python: unittest, Unit testing framework', 'https://docs.python.org/3/library/unittest.html'], ['Dokumentasi Python: The assert statement', 'https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement'], ['Kent Beck, Test-Driven Development: By Example (Addison-Wesley, 2002)', ''], REF_MIT],
    },
];
