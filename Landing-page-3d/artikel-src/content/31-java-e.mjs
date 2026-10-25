const D = '2026-10-23';
const C = 'PBO dengan Java';
const jv = String.raw;

const REF_JLS = ['The Java Language Specification', 'https://docs.oracle.com/javase/specs/jls/se21/html/index.html'];
const REF_EJ = ['Joshua Bloch, Effective Java (edisi ke-3, Addison-Wesley, 2018)', ''];
const REF_UML = ['Object Management Group: Unified Modeling Language (UML) Specification', 'https://www.omg.org/spec/UML/'];
const REF_GOETZ = ['Brian Goetz et al., Java Concurrency in Practice (Addison-Wesley, 2006)', ''];

export default [
    {
        slug: 'uml-class-diagram-dari-kode-java-relasi-dan-multiplisitas',
        title: 'UML Class Diagram: Relasi dan Multiplisitas dari Kode Java',
        description: 'Pelajari diagram kelas UML: relasi, multiplisitas, dan pemetaannya ke kode Java, termasuk pewarisan, komposisi, agregasi, dan dependensi.',
        date: D, category: C, level: 'Menengah', tags: ['UML', 'class diagram', 'komposisi', 'agregasi', 'pemodelan'], cta: 'none',
        prereq: ['class dan objek', 'inheritance', 'interface'],
        lead: 'Diagram kelas adalah bahasa gambar bersama untuk membicarakan desain. Anda tidak perlu menghafal seluruh UML; cukup tujuh simbol relasi dan cara membaca multiplisitas. Materi ini memetakan setiap simbol ke kode Java yang sesuai, sehingga gambar dan kode saling menjelaskan.',
        body: [
            { objectives: ['membaca kotak class: nama, atribut, operasi, visibilitas', 'membedakan asosiasi, agregasi, komposisi, pewarisan, realisasi, dan dependensi', 'membaca multiplisitas (1, 0..1, *, 1..*)', 'menerjemahkan diagram menjadi kerangka kode Java dan sebaliknya', 'menyusun diagram kelas untuk studi kasus sederhana'] },
            { h2: 'Kotak class' },
            { svg: 'diagram', w: 560, h: 190, label: 'Anatomi kotak class', nodes: [{ id: 'a', x: 160, y: 95, shape: 'class', w: 240, h: 150, t: 'Mahasiswa', attrs: ['-nim: String', '-nama: String', '#ipk: double'], methods: ['+getNama(): String', '+hitungSks(): int', '-validasi(): void'] }, { id: 'n', x: 440, y: 95, shape: 'text', w: 200, h: 100, t: 'Tiga bagian: nama class, atribut, operasi. Visibilitas: + public, − private, # protected, ~ package.' }], edges: [], caption: 'Nama class miring menandakan class abstrak; stereotip «interface» menandakan interface.' },
            { h2: 'Tujuh simbol hubungan' },
            { table: { head: ['Hubungan', 'Simbol', 'Makna', 'Bentuk dalam Java'], rows: [['Pewarisan (generalisasi)', 'garis solid, segitiga kosong', 'adalah sebuah (is-a)', 'class B extends A'], ['Realisasi', 'garis putus-putus, segitiga kosong', 'memenuhi kontrak', 'class B implements I'], ['Asosiasi', 'garis dengan panah terbuka', 'mengetahui atau memakai', 'atribut bertipe class lain'], ['Agregasi', 'belah ketupat kosong', 'memiliki; bagian dapat hidup sendiri', 'atribut referensi yang diterima dari luar'], ['Komposisi', 'belah ketupat terisi', 'memiliki; bagian mati bersama keseluruhan', 'atribut yang dibuat dan dimiliki penuh'], ['Dependensi', 'panah putus-putus', 'memakai sementara', 'parameter atau variabel lokal']] } },
            { h2: 'Dari diagram ke kode: perpustakaan' },
            { svg: 'diagram', w: 640, h: 360, label: 'Diagram kelas perpustakaan', nodes: [{ id: 'P', x: 110, y: 60, shape: 'class', w: 180, h: 80, t: 'Perpustakaan', attrs: ['-nama: String'], methods: ['+tambahBuku(b)', '+pinjam(a, b)'] }, { id: 'B', x: 420, y: 60, shape: 'class', w: 180, h: 80, t: 'Buku', attrs: ['-isbn: String', '-judul: String'], methods: ['+tersedia(): boolean'] }, { id: 'A', x: 110, y: 220, shape: 'class', w: 180, h: 80, t: 'Anggota', attrs: ['-id: String', '-nama: String'], methods: ['+batas(): int'] }, { id: 'M', x: 420, y: 220, shape: 'class', w: 180, h: 80, t: 'Peminjaman', attrs: ['-tanggal: LocalDate'], methods: ['+kembalikan()'] }, { id: 'D', x: 570, y: 310, shape: 'class', w: 90, h: 36, t: 'Dosen', attrs: [], methods: [] }], edges: [{ from: 'P', to: 'B', head: 'diaf', from_label: '1', to_label: '*' }, { from: 'A', to: 'M', head: 'vee', from_label: '1', to_label: '*' }, { from: 'M', to: 'B', head: 'vee', from_label: '*', to_label: '1' }, { from: 'D', to: 'A', head: 'open' }], caption: 'Perpustakaan memiliki banyak Buku (komposisi). Satu Anggota dapat memiliki banyak Peminjaman; setiap Peminjaman merujuk satu Buku. Dosen adalah Anggota (pewarisan).' },
            { code: jv`import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

class Buku {
    private final String isbn, judul;
    private boolean dipinjam;
    Buku(String isbn, String judul) { this.isbn = isbn; this.judul = judul; }
    boolean tersedia() { return !dipinjam; }
    void tandaiDipinjam(boolean v) { dipinjam = v; }
    String judul() { return judul; }
}

class Anggota {
    private final String id, nama;
    private final List<Peminjaman> riwayat = new ArrayList<>();      // asosiasi 1 → *
    Anggota(String id, String nama) { this.id = id; this.nama = nama; }
    int batas() { return 3; }
    void catat(Peminjaman p) { riwayat.add(p); }
    long aktif() { return riwayat.stream().filter(p -> !p.sudahKembali()).count(); }
    String nama() { return nama; }
}

class Dosen extends Anggota {                                       // pewarisan
    Dosen(String id, String nama) { super(id, nama); }
    @Override int batas() { return 10; }
}

class Peminjaman {
    private final Buku buku;                                         // asosiasi * → 1
    private final LocalDate tanggal;
    private boolean kembali;
    Peminjaman(Buku buku, LocalDate tanggal) { this.buku = buku; this.tanggal = tanggal; buku.tandaiDipinjam(true); }
    void kembalikan() { kembali = true; buku.tandaiDipinjam(false); }
    boolean sudahKembali() { return kembali; }
}

class Perpustakaan {
    private final List<Buku> koleksi = new ArrayList<>();             // komposisi: buku dimiliki perpustakaan
    void tambahBuku(Buku b) { koleksi.add(b); }
    Peminjaman pinjam(Anggota a, Buku b) {
        if (!b.tersedia()) throw new IllegalStateException(b.judul() + " sedang dipinjam");
        if (a.aktif() >= a.batas()) throw new IllegalStateException(a.nama() + " mencapai batas");
        Peminjaman p = new Peminjaman(b, LocalDate.of(2026, 10, 23));
        a.catat(p);
        return p;
    }
}

public class Main {
    public static void main(String[] args) {
        Perpustakaan lib = new Perpustakaan();
        Buku b1 = new Buku("111", "Algoritma"), b2 = new Buku("222", "Java"), b3 = new Buku("333", "Basis Data");
        lib.tambahBuku(b1); lib.tambahBuku(b2); lib.tambahBuku(b3);
        Anggota ani = new Anggota("A1", "Ani"); Dosen dr = new Dosen("D1", "Pak Rudi");

        lib.pinjam(ani, b1);
        try { lib.pinjam(dr, b1); } catch (IllegalStateException e) { System.out.println("ditolak: " + e.getMessage()); }
        System.out.println(dr.nama() + " batas " + dr.batas() + ", Ani batas " + ani.batas());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Setiap garis pada diagram berpadanan dengan atribut atau pewarisan di kode. Itulah yang membuat diagram berguna sebagai peta.' },
            { h2: 'Komposisi atau agregasi?' },
            { w: 'compare', title: 'Bedanya dalam praktik', tabs: [{ label: 'Komposisi (♦ terisi)', html: 'Bagian <b>tidak bermakna tanpa</b> keseluruhan. Rumah dan Kamar: bila rumah dihancurkan, kamarnya ikut hilang. Biasanya objek bagian dibuat di dalam keseluruhan.' }, { label: 'Agregasi (◇ kosong)', html: 'Bagian <b>dapat berdiri sendiri</b>. Kelas dan Dosen: kelas dibubarkan, dosen tetap ada. Biasanya objek bagian diberikan dari luar. Banyak tim memperlakukan agregasi sama dengan asosiasi biasa.' }] },
            { callout: 'Diagram yang baik <b>menjawab satu pertanyaan</b> dan memuat secukupnya. Jangan masukkan setiap atribut dan getter; tunjukkan class penting dan hubungan di antaranya. Diagram yang terlalu rinci cepat usang dan tak ada yang membacanya.', kind: 'good', title: 'Pedoman' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Belah ketupat terisi menandakan...', options: ['Komposisi', 'Pewarisan', 'Dependensi'], answer: 0, why: 'Keseluruhan memiliki dan mengendalikan umur bagian.' }, { q: 'Garis putus-putus dengan segitiga kosong menunjukkan...', options: ['implements (realisasi)', 'extends', 'asosiasi'], answer: 0, why: 'Class memenuhi kontrak interface.' }, { q: 'Multiplisitas "0..1" artinya...', options: ['Nol atau satu', 'Tepat satu', 'Banyak'], answer: 0, why: 'Opsional.' }] },
            { exercise: [['Gambarkan diagram kelas untuk Pesanan, Pelanggan, Produk, dan ItemPesanan.', 'Pelanggan 1—* Pesanan; Pesanan 1—* ItemPesanan (komposisi); ItemPesanan *—1 Produk.'], ['Terjemahkan "Mobil memiliki satu Mesin (komposisi)" ke Java.', 'class Mobil { private final Mesin mesin = new Mesin(); }'], ['Mengapa Dosen tidak perlu mengulang atribut id dan nama?', 'Atribut diwarisi dari Anggota.'], ['Apa bedanya asosiasi dan dependensi?', 'Asosiasi adalah hubungan struktural (atribut); dependensi hanya pemakaian sementara (parameter atau variabel lokal).']] },
            { summary: ['Kotak class: nama, atribut, operasi dengan visibilitas.', 'Pewarisan dan realisasi: segitiga kosong (solid dan putus-putus).', 'Komposisi (♦ terisi) lebih kuat dari agregasi (◇ kosong); asosiasi adalah dasar.', 'Multiplisitas menyatakan jumlah objek yang terlibat.', 'Peta hubungan dapat diterjemahkan langsung ke kode.'] },
        ],
        faq: [['Apakah UML masih dipakai?', 'Ya, terutama diagram kelas, urutan, dan aktivitas untuk komunikasi desain, sering dibuat cepat dengan alat teks seperti PlantUML atau Mermaid.'], ['Apa itu diagram sekuens?', 'Menunjukkan urutan pesan antarobjek dari waktu ke waktu; dipakai untuk menjelaskan satu skenario.'], ['Haruskah mendiagramkan sebelum coding?', 'Untuk desain yang rumit, sketsa singkat membantu. Hindari diagram lengkap di muka yang kemudian tidak diperbarui.']],
        sources: [REF_UML, ['Martin Fowler, UML Distilled (Addison-Wesley, edisi ke-3)', ''], ['PlantUML: Class Diagram', 'https://plantuml.com/class-diagram'], REF_EJ],
    },

    {
        slug: 'multithreading-java-thread-executor-synchronized-dan-race-condition',
        title: 'Multithreading Java: Thread, Executor, dan Race Condition',
        description: 'Pahami concurrency Java: thread, race condition yang diperagakan, synchronized, AtomicInteger, ExecutorService, dan deadlock, dengan eksperimen nyata.',
        date: D, category: C, level: 'Lanjut', tags: ['Java', 'thread', 'concurrency', 'synchronized', 'ExecutorService'], cta: 'none',
        prereq: ['PBO Java dasar', 'lambda'],
        lead: 'Menjalankan banyak pekerjaan sekaligus meningkatkan responsivitas dan memakai banyak inti CPU, tetapi memperkenalkan jenis bug yang sulit: hasil yang berubah-ubah dari satu proses ke proses berikutnya. Materi ini memperagakan bug itu, lalu memperbaikinya dengan alat standar.',
        body: [
            { objectives: ['membuat dan menjalankan thread, serta menunggu hasilnya dengan join', 'menjelaskan race condition dan memperagakannya', 'memperbaiki dengan synchronized dan AtomicInteger', 'memakai ExecutorService dan Future', 'menjelaskan deadlock dan cara menghindarinya'] },
            { h2: 'Thread pertama' },
            { code: jv`public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> System.out.println("dari thread: " + Thread.currentThread().getName()));
        t.setName("pekerja-1");
        t.start();                      // jalankan secara bersamaan; JANGAN memanggil run() langsung
        t.join();                       // tunggu t selesai
        System.out.println("kembali ke " + Thread.currentThread().getName());
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Race condition' },
            `Operasi <code>hitung++</code> tampak satu langkah, padahal terdiri dari tiga: baca, tambah, tulis. Dua thread dapat sama-sama membaca nilai lama sebelum salah satunya menulis, sehingga satu penambahan hilang.`,
            { svg: 'flow', label: 'Satu penambahan hilang', steps: [{ t: 'Thread A membaca 5', d: 'dan Thread B juga membaca 5' }, { t: 'A menulis 6', d: 'B menulis 6' }, { t: 'Hasil 6', d: 'seharusnya 7: satu penambahan hilang' }] },
            { code: jv`public class Main {
    static int hitung = 0;

    public static void main(String[] args) throws InterruptedException {
        Runnable kerja = () -> { for (int i = 0; i < 100_000; i++) hitung++; };
        Thread a = new Thread(kerja), b = new Thread(kerja);
        a.start(); b.start();
        a.join(); b.join();
        System.out.println("diharapkan 200000, hasil lebih kecil dari itu? " + (hitung < 200_000));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Hasil sesungguhnya berbeda di setiap proses. Bug concurrency mungkin tidak tampak pada beberapa kali percobaan dan muncul di produksi.' },
            { h2: 'Perbaikan 1: synchronized' },
            { code: jv`public class Main {
    private static int hitung = 0;
    private static final Object kunci = new Object();

    static void tambah() {
        synchronized (kunci) { hitung++; }      // hanya satu thread pada satu waktu
    }

    public static void main(String[] args) throws InterruptedException {
        Runnable kerja = () -> { for (int i = 0; i < 100_000; i++) tambah(); };
        Thread a = new Thread(kerja), b = new Thread(kerja);
        a.start(); b.start(); a.join(); b.join();
        System.out.println(hitung);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Perbaikan 2: kelas atomik' },
            { code: jv`import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger hitung = new AtomicInteger();
        Runnable kerja = () -> { for (int i = 0; i < 100_000; i++) hitung.incrementAndGet(); };   // satu operasi atomik
        Thread a = new Thread(kerja), b = new Thread(kerja);
        a.start(); b.start(); a.join(); b.join();
        System.out.println(hitung.get());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Atomik memakai instruksi CPU compare-and-swap, tanpa kunci, sehingga lebih ringan untuk penghitung sederhana.' },
            { h2: 'ExecutorService: kelola kumpulan thread' },
            { code: jv`import java.util.*;
import java.util.concurrent.*;

public class Main {
    static long fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }

    public static void main(String[] args) throws Exception {
        ExecutorService pool = Executors.newFixedThreadPool(4);
        List<Future<Long>> hasil = new ArrayList<>();
        for (int n : new int[]{20, 25, 30, 32})
            hasil.add(pool.submit(() -> fib(n)));              // tugas dikirim ke pool

        for (Future<Long> f : hasil) System.out.println(f.get());   // get() menunggu hasil
        pool.shutdown();                                          // wajib, agar program bisa selesai

        CompletableFuture<String> a = CompletableFuture.supplyAsync(() -> "data pengguna");
        CompletableFuture<String> b = a.thenApply(String::toUpperCase);
        System.out.println(b.get());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Membuat thread manual untuk setiap tugas boros. Pool memakai ulang thread dan membatasi jumlah yang berjalan serentak.' },
            { h2: 'Deadlock' },
            `Dua thread saling menunggu kunci yang dipegang yang lain, dan tidak ada yang bisa maju. Aturan pencegahan paling sederhana: <b>selalu ambil kunci dalam urutan yang sama</b>.`,
            { svg: 'diagram', w: 560, h: 170, label: 'Deadlock', nodes: [{ id: 'A', x: 90, y: 40, shape: 'circle', w: 70, h: 70, t: 'Thread A' }, { id: 'B', x: 470, y: 40, shape: 'circle', w: 70, h: 70, t: 'Thread B' }, { id: 'K1', x: 90, y: 135, shape: 'rect', w: 90, h: 34, t: 'Kunci 1' }, { id: 'K2', x: 470, y: 135, shape: 'rect', w: 90, h: 34, t: 'Kunci 2' }], edges: [{ from: 'K1', to: 'A', label: 'dipegang' }, { from: 'K2', to: 'B', label: 'dipegang' }, { from: 'A', to: 'K2', dashed: true, label: 'menunggu', via: [[280, 90]] }, { from: 'B', to: 'K1', dashed: true, label: 'menunggu', via: [[280, 120]] }], caption: 'Siklus menunggu: A menunggu Kunci 2 milik B, sementara B menunggu Kunci 1 milik A.' },
            { callout: 'Cara paling aman menghadapi concurrency: <b>hindari keadaan yang dibagi</b>. Gunakan objek immutable, kumpulan data per thread, atau struktur siap pakai di <code>java.util.concurrent</code> (ConcurrentHashMap, BlockingQueue) alih-alih menulis kunci sendiri. Java 21 juga menghadirkan virtual thread yang meringankan beban banyak tugas I/O.', kind: 'info', title: 'Prinsip' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa hitung++ tidak aman antar thread?', options: ['Terdiri dari baca-tambah-tulis yang dapat terselip', 'Terlalu lambat', 'int tidak boleh dibagi'], answer: 0, why: 'Tidak atomik.' }, { q: 'Untuk menjalankan thread secara bersamaan kita memanggil...', options: ['start()', 'run()', 'join()'], answer: 0, why: 'run() hanya memanggil biasa pada thread saat ini.' }, { q: 'Cara standar mencegah deadlock sederhana?', options: ['Mengambil kunci dalam urutan yang sama', 'Menambah thread', 'Memakai static'], answer: 0, why: 'Menghilangkan siklus menunggu.' }] },
            { exercise: [['Mengapa program bisa tidak selesai jika ExecutorService tidak di-shutdown?', 'Thread pekerja non-daemon tetap hidup menunggu tugas, sehingga JVM tidak keluar.'], ['Bagaimana memperbaiki race condition pada penghitung tanpa kunci?', 'Gunakan AtomicInteger atau LongAdder.'], ['Apa perbedaan Runnable dan Callable?', 'Runnable tidak mengembalikan nilai dan tidak boleh melempar checked exception; Callable mengembalikan nilai dan boleh melempar.'], ['Kapan menambah jumlah thread tidak lagi mempercepat?', 'Saat jumlah thread melampaui inti CPU untuk pekerjaan berat CPU, atau saat tugas terhambat sumber daya bersama (kunci, disk, jaringan).']] },
            { summary: ['Thread dijalankan dengan start() dan ditunggu dengan join().', 'Race condition terjadi pada operasi baca-ubah-tulis yang dibagi.', 'Perbaikan: synchronized, kelas atomik, atau hindari keadaan bersama.', 'ExecutorService mengelola pool; Future dan CompletableFuture mewakili hasil.', 'Hindari deadlock dengan urutan kunci yang konsisten.'] },
        ],
        faq: [['Apa itu virtual thread?', 'Thread ringan yang dikelola JVM (Java 21), memungkinkan jutaan tugas I/O bersamaan tanpa membuat thread sistem operasi sebanyak itu.'], ['Apakah volatile cukup?', 'volatile menjamin visibilitas perubahan antar thread, tetapi tidak membuat operasi majemuk seperti ++ menjadi atomik.'], ['Bagaimana menguji kode concurrent?', 'Sulit; kurangi keadaan bersama, gunakan struktur dari java.util.concurrent, dan uji berulang dengan beban tinggi.']],
        sources: [['Oracle: Concurrency (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/essential/concurrency/'], ['Java SE API: java.util.concurrent', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html'], ['JEP 444: Virtual Threads', 'https://openjdk.org/jeps/444'], REF_GOETZ],
    },

    {
        slug: 'unit-testing-java-junit-assertion-dan-test-driven-development',
        title: 'Unit Testing Java: JUnit, Assertion, dan TDD',
        description: 'Belajar menguji kode Java dengan JUnit 5: struktur tes, assertion, pengujian exception, parameterized test, test double, dan siklus red-green-refactor pada TDD.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'JUnit', 'unit test', 'TDD', 'mock'], cta: 'none',
        prereq: ['class dan method', 'exception', 'interface'],
        lead: 'Tes otomatis adalah jaring pengaman yang membuat Anda berani mengubah kode. Di Java, JUnit adalah standar de facto. Materi ini menunjukkan cara menulis tes yang jelas dan andal, serta bagaimana desain yang baik (interface, injeksi dependensi) membuat tes mudah ditulis.',
        body: [
            { objectives: ['menulis tes JUnit 5 dengan @Test dan assertion', 'menguji kasus batas dan exception', 'memakai parameterized test', 'menggunakan test double sederhana tanpa pustaka', 'menerapkan siklus TDD: red, green, refactor'] },
            { h2: 'Anatomi sebuah tes' },
            `Pola yang mudah dibaca: <b>Arrange–Act–Assert</b>. Siapkan data, jalankan perilaku yang diuji, lalu periksa hasilnya. Nama tes harus menjelaskan skenario.`,
            { code: jv`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class KalkulatorDiskonTest {

    @Test
    void diskonMemberSepuluhPersen() {
        // Arrange
        KalkulatorDiskon k = new KalkulatorDiskon();
        // Act
        double hasil = k.hitung(200_000, true);
        // Assert
        assertEquals(180_000, hasil, 0.001);
    }

    @Test
    void hargaNegatifDitolak() {
        KalkulatorDiskon k = new KalkulatorDiskon();
        assertThrows(IllegalArgumentException.class, () -> k.hitung(-1, false));
    }
}`, lang: 'java', file: 'KalkulatorDiskonTest.java', caption: 'Kode ini dijalankan oleh JUnit (lewat Maven, Gradle, atau IDE), bukan oleh java Main. Contoh lengkap yang dapat dijalankan di bawah memakai asersi buatan sendiri agar bisa Anda coba langsung.' },
            { h2: 'Mencoba prinsipnya tanpa pustaka' },
            `Inti JUnit sederhana: jalankan sekumpulan fungsi, tangkap kegagalan, dan laporkan. Kita buat versi mini untuk memahami apa yang terjadi di balik layar.`,
            { code: jv`import java.util.*;

class KalkulatorDiskon {
    double hitung(double harga, boolean member) {
        if (harga < 0) throw new IllegalArgumentException("harga negatif");
        return member ? harga * 0.9 : harga;
    }
}

public class Main {
    static int lulus = 0, gagal = 0;

    static void tes(String nama, Runnable isi) {
        try { isi.run(); lulus++; System.out.println("LULUS  " + nama); }
        catch (AssertionError e) { gagal++; System.out.println("GAGAL  " + nama + " -> " + e.getMessage()); }
    }

    static void sama(double harapan, double aktual) {
        if (Math.abs(harapan - aktual) > 1e-9) throw new AssertionError("diharapkan " + harapan + " tetapi " + aktual);
    }

    static void melempar(Class<? extends Throwable> jenis, Runnable r) {
        try { r.run(); }
        catch (Throwable t) { if (jenis.isInstance(t)) return; throw new AssertionError("jenis salah: " + t); }
        throw new AssertionError("tidak ada exception");
    }

    public static void main(String[] args) {
        KalkulatorDiskon k = new KalkulatorDiskon();
        tes("member mendapat 10 persen", () -> sama(180_000, k.hitung(200_000, true)));
        tes("non-member tanpa diskon", () -> sama(200_000, k.hitung(200_000, false)));
        tes("harga nol", () -> sama(0, k.hitung(0, true)));
        tes("harga negatif ditolak", () -> melempar(IllegalArgumentException.class, () -> k.hitung(-1, false)));
        tes("tes yang sengaja salah", () -> sama(100, k.hitung(200_000, true)));
        System.out.println(lulus + " lulus, " + gagal + " gagal");
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Menguji banyak data: parameterized test' },
            { code: jv`import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

class GradeTest {
    @ParameterizedTest
    @CsvSource({ "100,A", "85,A", "84,B", "70,B", "69,C", "55,C", "54,D", "0,D" })   // termasuk nilai batas
    void petakanNilaiKeGrade(int nilai, String grade) {
        assertEquals(grade, Grade.dari(nilai));
    }
}`, lang: 'java', file: 'GradeTest.java', caption: 'Selalu uji nilai batas (boundary): 85 dan 84, 70 dan 69. Di sanalah bug off-by-one bersembunyi.' },
            { h2: 'Test double: mengganti dependensi' },
            { code: jv`interface Jam { int jam(); }
class JamSistem implements Jam { public int jam() { return java.time.LocalTime.now().getHour(); } }
class JamTetap implements Jam {                       // test double: nilainya kita kendalikan
    private final int j;
    JamTetap(int j) { this.j = j; }
    public int jam() { return j; }
}

class Sapaan {
    private final Jam jam;
    Sapaan(Jam jam) { this.jam = jam; }
    String sapa() {
        int h = jam.jam();
        if (h < 11) return "Selamat pagi";
        if (h < 15) return "Selamat siang";
        if (h < 18) return "Selamat sore";
        return "Selamat malam";
    }
}

public class Main {
    public static void main(String[] args) {
        for (int h : new int[]{7, 12, 16, 21})
            System.out.println(h + ":00 -> " + new Sapaan(new JamTetap(h)).sapa());   // deterministik, tak bergantung waktu sungguhan
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Tanpa menyuntikkan Jam, tes bergantung pada jam kapan tes dijalankan dan tidak bisa diulang. Ini penerapan Dependency Inversion yang membuat kode mudah diuji.' },
            { h2: 'TDD: red, green, refactor' },
            { svg: 'cycle', label: 'Siklus TDD', items: ['Red: tulis tes yang gagal', 'Green: buat tes lulus secepatnya', 'Refactor: rapikan, tes tetap hijau'], caption: 'Ulangi siklus pendek ini untuk setiap perilaku kecil.' },
            { callout: 'Tes yang baik: <b>cepat, mandiri, berulang, dan jelas</b>. Satu tes memeriksa satu perilaku; tes tidak bergantung pada urutan eksekusi, jaringan, waktu sistem, atau basis data produksi. Tes yang sering gagal tanpa alasan akan diabaikan, dan itu lebih buruk daripada tidak ada tes.', kind: 'good', title: 'Ciri tes yang sehat' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Singkatan AAA pada struktur tes?', options: ['Arrange, Act, Assert', 'Add, Apply, Approve', 'Answer, Ask, Accept'], answer: 0, why: 'Siapkan, jalankan, periksa.' }, { q: 'Nilai batas penting diuji karena...', options: ['Kesalahan off-by-one sering di sana', 'Lebih cepat', 'Diwajibkan JUnit'], answer: 0, why: 'Perubahan perilaku terjadi di batas.' }, { q: 'Langkah pertama pada TDD?', options: ['Menulis tes yang gagal', 'Menulis seluruh program', 'Refactor'], answer: 0, why: 'Tes mendefinisikan perilaku yang diinginkan.' }] },
            { exercise: [['Tulis tes untuk method yang menentukan apakah tahun kabisat, termasuk 1900, 2000, 2024.', '1900 bukan kabisat (kelipatan 100 tetapi bukan 400), 2000 kabisat, 2024 kabisat.'], ['Mengapa tes yang bergantung pada LocalDate.now() rapuh?', 'Hasilnya berubah menurut hari tes dijalankan; suntikkan Clock atau Jam tiruan.'], ['Apa beda assertEquals(expected, actual) dan assertSame?', 'assertEquals memakai equals (isi); assertSame memeriksa referensi yang sama.'], ['Apa itu cakupan kode (code coverage) dan apakah 100 persen berarti bebas bug?', 'Persentase baris yang dijalankan tes; 100 persen tidak menjamin tes memeriksa perilaku dengan benar.']] },
            { summary: ['JUnit: @Test, assertion, assertThrows, parameterized test.', 'Pola AAA dan nama tes yang deskriptif.', 'Uji nilai batas dan kasus gagal.', 'Test double dan injeksi dependensi membuat tes deterministik.', 'TDD: red, green, refactor.'] },
        ],
        faq: [['Bagaimana menambahkan JUnit ke proyek?', 'Tambahkan dependensi org.junit.jupiter:junit-jupiter di Maven atau Gradle, lalu jalankan dengan mvn test atau gradle test.'], ['Apa bedanya mock, stub, dan fake?', 'Stub mengembalikan jawaban tetap; fake adalah implementasi sederhana yang bekerja (misalnya penyimpanan di memori); mock memverifikasi interaksi. Mockito adalah pustaka populer.'], ['Seberapa banyak tes yang cukup?', 'Cukup untuk membuat Anda percaya diri mengubah kode. Fokuskan pada logika bisnis dan area yang berisiko.']],
        sources: [['JUnit 5 User Guide', 'https://junit.org/junit5/docs/current/user-guide/'], ['Kent Beck, Test-Driven Development: By Example (Addison-Wesley, 2002)', ''], ['Martin Fowler: Mocks Aren\'t Stubs', 'https://martinfowler.com/articles/mocksArentStubs.html'], REF_EJ],
    },

    {
        slug: 'package-modul-maven-dan-gradle-mengelola-proyek-java',
        title: 'Package, Maven, dan Gradle: Mengelola Proyek Java',
        description: 'Susun proyek Java yang rapi: package dan import, struktur direktori standar, modul, dependensi, Maven dan Gradle, build, serta praktik versi dan jar.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'Maven', 'Gradle', 'package', 'dependensi'], cta: 'none',
        prereq: ['dasar Java', 'class dan interface'],
        lead: 'Program sungguhan bukan satu berkas. Ia terdiri dari ratusan class yang dikelompokkan dalam package, bergantung pada pustaka luar, dan dibangun dengan alat otomatis. Memahami struktur ini mengubah Anda dari penulis skrip menjadi pengembang proyek.',
        body: [
            { objectives: ['mengelompokkan class dengan package dan memakai import', 'mengikuti struktur direktori standar Maven/Gradle', 'membaca pom.xml dan build.gradle dasar', 'menjelaskan dependensi, repositori, dan versi', 'membangun dan menjalankan proyek dari baris perintah'] },
            { h2: 'Package' },
            `Package adalah ruang nama yang mengelompokkan class terkait dan menghindari bentrok nama. Konvensi: nama domain terbalik, huruf kecil, misalnya <code>id.web.muchson.perpustakaan.model</code>.`,
            { code: jv`// berkas: src/main/java/id/contoh/perpustakaan/model/Buku.java
package id.contoh.perpustakaan.model;

public record Buku(String isbn, String judul) { }

// berkas: src/main/java/id/contoh/perpustakaan/App.java
package id.contoh.perpustakaan;

import id.contoh.perpustakaan.model.Buku;     // memakai class dari package lain
import java.util.List;                          // dari pustaka standar

public class App {
    public static void main(String[] args) {
        List<Buku> daftar = List.of(new Buku("111", "Algoritma"));
        System.out.println(daftar);
    }
}`, lang: 'java' },
            { table: { head: ['Kata kunci', 'Fungsi'], rows: [['package x.y;', 'Menyatakan lokasi class (harus cocok dengan struktur folder)'], ['import x.y.Kelas;', 'Memakai nama pendek untuk class dari package lain'], ['import x.y.*;', 'Mengimpor seluruh package (kurang disarankan: kurang jelas)'], ['import static ...', 'Mengimpor anggota static, misalnya Math.max']] } },
            { h2: 'Struktur proyek standar' },
            { code: jv`proyek-perpustakaan/
├── pom.xml                      (Maven)  atau  build.gradle  (Gradle)
├── src/
│   ├── main/
│   │   ├── java/id/contoh/perpustakaan/...     kode produksi
│   │   └── resources/                           berkas konfigurasi, templat
│   └── test/
│       └── java/id/contoh/perpustakaan/...     kode tes (JUnit)
└── target/  atau  build/                        hasil build (jangan di-commit)`, lang: 'text', caption: 'Maven dan Gradle sepakat dengan tata letak ini, jadi alat dan IDE langsung mengerti proyek Anda.' },
            { h2: 'Maven: pom.xml' },
            { code: jv`<project xmlns="http://maven.apache.org/POM/4.0.0">
  <modelVersion>4.0.0</modelVersion>

  <groupId>id.contoh</groupId>          <!-- organisasi -->
  <artifactId>perpustakaan</artifactId> <!-- nama proyek -->
  <version>1.0.0</version>

  <properties>
    <maven.compiler.release>21</maven.compiler.release>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <dependency>                        <!-- pustaka luar, diunduh otomatis dari Maven Central -->
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.2</version>
      <scope>test</scope>               <!-- hanya untuk tes -->
    </dependency>
  </dependencies>
</project>`, lang: 'xml' },
            { code: jv`mvn compile        # mengompilasi
mvn test           # menjalankan tes
mvn package        # menghasilkan target/perpustakaan-1.0.0.jar
mvn clean          # menghapus hasil build`, lang: 'bash' },
            { h2: 'Gradle: build.gradle' },
            { code: jv`plugins {
    id 'java'
    id 'application'
}

group = 'id.contoh'
version = '1.0.0'

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.2'
}

java { toolchain { languageVersion = JavaLanguageVersion.of(21) } }
application { mainClass = 'id.contoh.perpustakaan.App' }
tasks.test { useJUnitPlatform() }`, lang: 'text' },
            { code: jv`./gradlew build       # kompilasi + tes + jar
./gradlew test
./gradlew run`, lang: 'bash' },
            { table: { head: ['Aspek', 'Maven', 'Gradle'], rows: [['Konfigurasi', 'XML deklaratif (pom.xml)', 'Skrip Groovy/Kotlin (lebih ringkas, lebih fleksibel)'], ['Konvensi', 'Sangat kuat, seragam', 'Konvensi sama, mudah dikustomisasi'], ['Kecepatan', 'Cukup', 'Umumnya lebih cepat berkat build inkremental dan cache'], ['Dipakai di', 'Banyak proyek perusahaan dan Spring', 'Android dan banyak proyek modern']] } },
            { h2: 'Dependensi dan versi' },
            { ul: ['<b>Koordinat</b>: groupId : artifactId : version mengidentifikasi sebuah pustaka secara unik di repositori seperti Maven Central.', '<b>Dependensi transitif</b>: pustaka yang Anda pakai membawa pustakanya sendiri; alat build menyelesaikannya otomatis.', '<b>Versi semantik</b> (MAJOR.MINOR.PATCH): naik MAJOR berarti perubahan yang bisa merusak.', '<b>Kunci versi</b>: hindari rentang longgar seperti "latest" agar build dapat diulang.', '<b>Keamanan</b>: perbarui dependensi secara berkala; kerentanan sering berada di pustaka pihak ketiga.'] },
            { callout: 'Jangan meng-commit hasil build (target/, build/, *.class) ke Git. Tambahkan ke <code>.gitignore</code>. Yang disimpan di Git adalah kode sumber dan berkas konfigurasi build.', kind: 'info', title: 'Catatan praktis' },
            { h2: 'Modul Java (JPMS)' },
            `Sejak Java 9 tersedia sistem modul: berkas <code>module-info.java</code> menyatakan modul mana yang dibutuhkan dan package mana yang diekspor, sehingga detail internal benar-benar tersembunyi. Aplikasi biasa jarang memakainya, tetapi pustaka dan JDK sendiri disusun sebagai modul.`,
            { code: jv`module id.contoh.perpustakaan {
    requires java.logging;                   // modul yang dibutuhkan
    exports id.contoh.perpustakaan.model;    // hanya package ini terlihat dari luar
}`, lang: 'java', file: 'module-info.java' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Konvensi nama package?', options: ['Domain terbalik, huruf kecil', 'Huruf besar semua', 'Bebas'], answer: 0, why: 'Menghindari bentrok nama antar organisasi.' }, { q: 'Folder untuk kode tes pada struktur standar?', options: ['src/test/java', 'src/main/tes', 'test/'], answer: 0, why: 'Dikenali Maven dan Gradle.' }, { q: 'Dependensi transitif adalah...', options: ['Dependensi dari dependensi Anda', 'Dependensi lokal', 'Dependensi yang dihapus'], answer: 0, why: 'Alat build menyelesaikannya otomatis.' }] },
            { exercise: [['Buat struktur folder untuk proyek bernama toko dengan package id.contoh.toko.', 'src/main/java/id/contoh/toko/ dan src/test/java/id/contoh/toko/.'], ['Mengapa import dengan tanda bintang kurang disarankan?', 'Tidak jelas dari mana sebuah class berasal dan dapat memicu bentrok nama.'], ['Apa bedanya jar biasa dan "fat jar"?', 'Jar biasa hanya berisi kode Anda; fat jar menyertakan dependensi sehingga dapat dijalankan langsung dengan java -jar.'], ['Mengapa dependensi test diberi scope test?', 'Agar tidak ikut terbawa ke hasil produksi.']] },
            { summary: ['Package mengelompokkan class; import memakai class dari package lain.', 'Struktur src/main/java dan src/test/java adalah standar.', 'Maven (XML) dan Gradle (skrip) mengelola kompilasi, tes, dan dependensi.', 'Pahami koordinat, versi, dan dependensi transitif; jangan commit hasil build.'] },
        ],
        faq: [['Pilih Maven atau Gradle?', 'Keduanya baik. Ikuti yang dipakai tim atau kerangka kerja Anda; untuk Android, Gradle adalah standar.'], ['Apa itu classpath?', 'Daftar lokasi tempat JVM mencari class dan jar saat berjalan atau kompilasi; alat build mengisinya otomatis.'], ['Bagaimana menjalankan jar?', 'java -jar nama.jar bila manifest menentukan class utama.']],
        sources: [['Apache Maven: Getting Started Guide', 'https://maven.apache.org/guides/getting-started/'], ['Gradle: Building Java Applications', 'https://docs.gradle.org/current/userguide/building_java_projects.html'], ['Oracle: Packages (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/package/index.html'], ['Maven Central Repository', 'https://central.sonatype.com/']],
    },

    {
        slug: 'proyek-mini-java-sistem-kasir-dengan-pbo-dari-desain-sampai-kode',
        title: 'Proyek Mini Java: Sistem Kasir dari Desain sampai Kode',
        description: 'Latihan terpadu PBO Java: membangun sistem kasir dari kebutuhan, desain kelas, sampai kode, dengan interface, polimorfisme, koleksi, dan exception.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'proyek', 'PBO', 'sistem kasir', 'studi kasus'], cta: 'none',
        prereq: ['seluruh materi PBO Java sebelumnya'],
        lead: 'Teori PBO baru melekat setelah dipakai. Di sini kita membangun sistem kasir kecil dari nol: menganalisis kebutuhan, menentukan class, menggambar hubungan, menulis kode, lalu mengujinya. Ikuti alurnya, lalu kembangkan sendiri sebagai latihan.',
        body: [
            { objectives: ['mengubah deskripsi kebutuhan menjadi daftar class dan tanggung jawabnya', 'menerapkan enkapsulasi, interface, polimorfisme, dan koleksi dalam satu proyek', 'memakai exception untuk aturan bisnis', 'menguji alur utama dengan skenario', 'mengidentifikasi titik pengembangan lanjut'] },
            { h2: 'Langkah 1: kebutuhan' },
            { ul: ['Kasir mencatat <b>pesanan</b> berisi beberapa <b>item</b> (produk dan jumlah).', 'Produk punya kode, nama, harga, dan <b>stok</b>; stok berkurang saat dibeli dan tidak boleh negatif.', 'Ada beberapa jenis <b>diskon</b> (tanpa diskon, persentase, potongan tetap bila belanja minimal).', 'Struk menampilkan rincian, diskon, PPN 11 persen, dan total.', 'Pembayaran tunai menghitung kembalian dan menolak uang kurang.'] },
            { h2: 'Langkah 2: mencari class (kata benda dan kata kerja)' },
            { table: { head: ['Kata dalam kebutuhan', 'Menjadi', 'Tanggung jawab'], rows: [['produk', 'class Produk', 'Menyimpan data produk dan menjaga stok'], ['pesanan, item', 'class Pesanan (memuat ItemPesanan)', 'Menghimpun item dan menghitung subtotal'], ['diskon (banyak jenis)', 'interface Diskon', 'Menghitung potongan; setiap jenis satu implementasi'], ['stok tidak cukup, uang kurang', 'Exception khusus', 'Menyatakan pelanggaran aturan bisnis'], ['struk', 'class Struk', 'Menyusun teks tampilan']] } },
            { svg: 'diagram', w: 660, h: 270, label: 'Desain kelas kasir', nodes: [{ id: 'Pe', x: 110, y: 70, shape: 'class', w: 190, h: 100, t: 'Pesanan', attrs: ['-items: List<Item>'], methods: ['+tambah(produk, jumlah)', '+subtotal()', '+total(diskon)'] }, { id: 'It', x: 340, y: 70, shape: 'class', w: 170, h: 70, t: 'ItemPesanan', attrs: ['-jumlah: int'], methods: ['+subtotal()'] }, { id: 'Pr', x: 560, y: 70, shape: 'class', w: 170, h: 90, t: 'Produk', attrs: ['-kode', '-harga', '-stok'], methods: ['+kurangiStok(n)'] }, { id: 'Di', x: 110, y: 210, shape: 'class', w: 190, h: 50, stereotype: 'interface', t: 'Diskon', attrs: [], methods: ['+potongan(subtotal)'] }, { id: 'Dp', x: 360, y: 215, shape: 'class', w: 150, h: 36, t: 'DiskonPersen', attrs: [], methods: [] }, { id: 'Dm', x: 560, y: 215, shape: 'class', w: 170, h: 36, t: 'DiskonMinimal', attrs: [], methods: [] }], edges: [{ from: 'Pe', to: 'It', head: 'diaf', from_label: '1', to_label: '*' }, { from: 'It', to: 'Pr', head: 'vee', from_label: '*', to_label: '1' }, { from: 'Dp', to: 'Di', head: 'open', dashed: true }, { from: 'Dm', to: 'Di', head: 'open', dashed: true }, { from: 'Pe', to: 'Di', head: 'vee', dashed: true }], caption: 'Pesanan memiliki ItemPesanan (komposisi); tiap item merujuk satu Produk. Pesanan memakai Diskon (interface) sehingga jenis diskon baru tidak mengubah Pesanan.' },
            { h2: 'Langkah 3: kode' },
            { code: jv`import java.util.*;

class StokTidakCukupException extends RuntimeException {
    StokTidakCukupException(String nama, int diminta, int tersedia) {
        super("Stok " + nama + " tidak cukup (diminta " + diminta + ", tersedia " + tersedia + ")");
    }
}
class UangKurangException extends Exception {
    UangKurangException(long kurang) { super("Uang kurang Rp" + kurang); }
}

class Produk {
    private final String kode, nama;
    private final long harga;
    private int stok;
    Produk(String kode, String nama, long harga, int stok) {
        if (harga <= 0) throw new IllegalArgumentException("harga harus positif");
        this.kode = kode; this.nama = nama; this.harga = harga; this.stok = stok;
    }
    String nama() { return nama; }
    long harga() { return harga; }
    int stok() { return stok; }
    void kurangiStok(int n) {
        if (n > stok) throw new StokTidakCukupException(nama, n, stok);
        stok -= n;
    }
}

record ItemPesanan(Produk produk, int jumlah) {
    long subtotal() { return produk.harga() * jumlah; }
}

interface Diskon { long potongan(long subtotal); }
class TanpaDiskon implements Diskon { public long potongan(long s) { return 0; } }
class DiskonPersen implements Diskon {
    private final int persen;
    DiskonPersen(int persen) { this.persen = persen; }
    public long potongan(long s) { return s * persen / 100; }
}
class DiskonMinimal implements Diskon {
    private final long minimal, potong;
    DiskonMinimal(long minimal, long potong) { this.minimal = minimal; this.potong = potong; }
    public long potongan(long s) { return s >= minimal ? potong : 0; }
}

class Pesanan {
    private static final int PPN = 11;
    private final List<ItemPesanan> items = new ArrayList<>();

    void tambah(Produk p, int jumlah) {
        if (jumlah <= 0) throw new IllegalArgumentException("jumlah harus positif");
        p.kurangiStok(jumlah);                               // aturan bisnis ditegakkan di sini
        items.add(new ItemPesanan(p, jumlah));
    }
    long subtotal() { return items.stream().mapToLong(ItemPesanan::subtotal).sum(); }
    long total(Diskon d) {
        long setelahDiskon = subtotal() - d.potongan(subtotal());
        return setelahDiskon + setelahDiskon * PPN / 100;
    }
    String struk(Diskon d) {
        StringBuilder sb = new StringBuilder();
        for (ItemPesanan i : items)
            sb.append(String.format("%-10s %2d x %7d = %8d%n", i.produk().nama(), i.jumlah(), i.produk().harga(), i.subtotal()));
        sb.append(String.format("%-27s %8d%n", "Subtotal", subtotal()));
        sb.append(String.format("%-27s %8d%n", "Diskon", -d.potongan(subtotal())));
        sb.append(String.format("%-27s %8d%n", "Total + PPN 11%", total(d)));
        return sb.toString();
    }
    long bayar(long uang, Diskon d) throws UangKurangException {
        long total = total(d);
        if (uang < total) throw new UangKurangException(total - uang);
        return uang - total;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Produk kopi = new Produk("K1", "Kopi", 20_000, 10);
        Produk roti = new Produk("R1", "Roti", 12_000, 3);

        Pesanan p = new Pesanan();
        p.tambah(kopi, 3);
        p.tambah(roti, 2);
        Diskon diskon = new DiskonMinimal(100_000, 10_000);
        System.out.print(p.struk(diskon));

        try { p.bayar(80_000, diskon); }
        catch (UangKurangException e) { System.out.println(e.getMessage()); }
        System.out.println("kembalian: " + p.bayar(100_000, diskon));

        try { new Pesanan().tambah(roti, 5); }
        catch (StokTidakCukupException e) { System.out.println(e.getMessage()); }
        System.out.println("sisa stok roti: " + roti.stok());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Perhitungan: subtotal 84.000; diskon 0 (di bawah 100.000); setelah PPN 11% menjadi 93.240; kembalian dari 100.000 adalah 6.760.' },
            { callout: 'Perhatikan hasil <i>desain</i>: Pesanan tidak mengetahui jenis diskon, produk menjaga stoknya sendiri, dan aturan uang kurang berada di satu tempat. Menambah diskon baru atau metode pembayaran QRIS tidak mengubah class yang sudah ada.', kind: 'good', title: 'Apa yang kita peroleh' },
            { h2: 'Langkah 4: uji dengan skenario' },
            { table: { head: ['Skenario', 'Diharapkan'], rows: [['Membeli 3 kopi dan 2 roti tanpa memenuhi minimal diskon', 'Total 93.240 (84.000 + PPN)'], ['Membeli roti melebihi stok', 'StokTidakCukupException, stok tidak berubah'], ['Membayar kurang dari total', 'UangKurangException dengan selisih'], ['Jumlah nol atau negatif', 'IllegalArgumentException']] } },
            { h2: 'Tantangan pengembangan' },
            { ul: ['Simpan produk dan penjualan ke berkas CSV atau basis data (lihat materi File I/O).', 'Tambahkan metode pembayaran (interface MetodeBayar: Tunai, QRIS, Kartu).', 'Buat laporan penjualan harian dengan stream dan groupingBy.', 'Tulis tes JUnit untuk setiap aturan di tabel skenario.', 'Gunakan BigDecimal atau long dengan satuan terkecil dan pertimbangkan pembulatan PPN.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa Pesanan menerima Diskon (interface) dan bukan jenis tertentu?', options: ['Agar jenis diskon baru tidak mengubah Pesanan', 'Agar lebih cepat', 'Wajib oleh Java'], answer: 0, why: 'Open/Closed dan Dependency Inversion.' }, { q: 'Siapa yang menjaga stok tidak negatif?', options: ['Produk', 'Main', 'Struk'], answer: 0, why: 'Enkapsulasi: objek menjaga invariannya sendiri.' }, { q: 'Mengapa harga disimpan sebagai long?', options: ['Menghindari kesalahan presisi desimal pada uang', 'Karena lebih kecil', 'Tidak ada alasan'], answer: 0, why: 'Satuan terkecil integer menghindari pembulatan desimal.' }] },
            { exercise: [['Tambahkan DiskonKombinasi yang menjumlahkan beberapa Diskon.', 'Class yang menyimpan List<Diskon> dan menjumlahkan potongan() masing-masing (pola Composite).'], ['Mengapa kurangiStok dipanggil di Pesanan.tambah, bukan di Main?', 'Aturan bisnis harus berada dalam model sehingga tidak bisa dilewati oleh pemanggil.'], ['Bagaimana menangani pesanan dibatalkan setelah stok dikurangi?', 'Sediakan method untuk mengembalikan stok atau tunda pengurangan sampai pembayaran sukses (transaksi).'], ['Rancang interface MetodeBayar dan dua implementasinya.', 'interface MetodeBayar { boolean proses(long jumlah); } lalu Tunai dan Qris.']] },
            { summary: ['Cari class dari kata benda; tanggung jawab dari kata kerja.', 'Enkapsulasi menjaga invarian (stok), interface memberi fleksibilitas (diskon).', 'Exception khusus menyatakan pelanggaran aturan bisnis.', 'Desain yang baik membuat fitur baru berupa penambahan, bukan pengubahan.'] },
        ],
        faq: [['Apakah proyek ini cukup untuk tugas besar kuliah?', 'Sebagai kerangka ya. Tambahkan penyimpanan data, antarmuka (konsol atau GUI), dan tes agar sepadan dengan tugas akhir.'], ['Mengapa tidak memakai kerangka kerja seperti Spring?', 'Untuk belajar, memahami PBO murni lebih dulu membuat kerangka kerja lebih mudah dipahami kemudian.'], ['Bagaimana membagi pekerjaan dalam tim?', 'Per class atau per fitur; sepakati interface lebih dulu supaya anggota bisa bekerja paralel.']],
        sources: [['Oracle: Object-Oriented Programming Concepts (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/concepts/index.html'], ['Craig Larman, Applying UML and Patterns (Prentice Hall)', ''], REF_EJ, ['dev.java: Learn Java', 'https://dev.java/learn/']],
    },
];
