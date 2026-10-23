const D = '2026-10-23';
const C = 'PBO dengan Java';
const jv = String.raw;

const REF_JLS = ['The Java Language Specification', 'https://docs.oracle.com/javase/specs/jls/se21/html/index.html'];
const REF_EJ = ['Joshua Bloch, Effective Java (edisi ke-3, Addison-Wesley, 2018)', ''];
const REF_DEVJ = ['dev.java: Learn Java (Oracle)', 'https://dev.java/learn/'];
const REF_API = ['Java SE API Documentation', 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html'];

export default [
    {
        slug: 'abstract-class-dan-interface-java-kapan-memakai-yang-mana',
        title: 'Abstract Class dan Interface Java: Pilih yang Mana?',
        description: 'Bedakan abstract class dan interface di Java: kontrak, default method, pewarisan ganda tipe, contoh nyata, dan panduan memilih, dengan diagram UML dan kode yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'abstract class', 'interface', 'default method', 'UML'], cta: 'none',
        prereq: ['inheritance', 'polimorfisme'],
        lead: 'Abstract class dan interface sama-sama mendefinisikan kontrak yang harus dipenuhi class lain, tetapi dipakai untuk tujuan berbeda. Memahami perbedaannya adalah salah satu pertanyaan wawancara PBO yang paling sering muncul.',
        body: [
            { objectives: ['mendefinisikan dan memakai abstract class dengan method abstrak', 'mendefinisikan dan mengimplementasikan interface', 'menjelaskan default method, static method, dan multiple interface', 'memilih antara abstract class dan interface berdasarkan kebutuhan', 'membaca diagram kelas UML sederhana'] },
            { h2: 'Abstract class: kerangka dengan bagian yang wajib diisi' },
            { code: jv`abstract class Pembayaran {
    protected final double jumlah;
    Pembayaran(double jumlah) { this.jumlah = jumlah; }

    abstract double biayaAdmin();                 // wajib diimplementasikan subclass

    final double total() {                         // algoritma tetap (template), memakai bagian abstrak
        return jumlah + biayaAdmin();
    }
}

class KartuKredit extends Pembayaran {
    KartuKredit(double j) { super(j); }
    double biayaAdmin() { return jumlah * 0.02; }
}
class TransferBank extends Pembayaran {
    TransferBank(double j) { super(j); }
    double biayaAdmin() { return 2_500; }
}

public class Main {
    public static void main(String[] args) {
        // new Pembayaran(1000);   // error: class abstrak tidak bisa diinstansiasi
        Pembayaran[] p = { new KartuKredit(100_000), new TransferBank(100_000) };
        for (Pembayaran x : p) System.out.println(x.getClass().getSimpleName() + ": " + x.total());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Abstract class boleh punya atribut, konstruktor, dan method konkret. Contoh ini adalah pola Template Method.' },
            { h2: 'Interface: kontrak murni tentang kemampuan' },
            { code: jv`interface DapatDicetak {
    void cetak();                                  // otomatis public abstract
}
interface DapatDisimpan {
    void simpan(String lokasi);
    default void simpanCadangan() {                // default method: implementasi bawaan
        simpan("cadangan/");
    }
    static String format() { return "txt"; }       // static method pada interface
}

class Laporan implements DapatDicetak, DapatDisimpan {     // boleh banyak interface
    public void cetak() { System.out.println("mencetak laporan"); }
    public void simpan(String lokasi) { System.out.println("menyimpan ke " + lokasi); }
}

public class Main {
    public static void main(String[] args) {
        Laporan l = new Laporan();
        l.cetak();
        l.simpan("dokumen/");
        l.simpanCadangan();
        DapatDicetak c = l;                         // variabel bertipe interface
        c.cetak();
        System.out.println(DapatDisimpan.format());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Satu class boleh mengimplementasikan banyak interface tetapi hanya mewarisi satu class.' },
            { h2: 'Hubungan dalam diagram UML' },
            { svg: 'diagram', w: 620, h: 250, label: 'Diagram kelas', nodes: [{ id: 'I', x: 110, y: 60, shape: 'class', w: 170, h: 70, stereotype: 'interface', t: 'DapatDicetak', attrs: [], methods: ['cetak()'] }, { id: 'A', x: 330, y: 60, shape: 'class', w: 170, h: 80, t: 'Pembayaran', abstract: true, attrs: ['#jumlah'], methods: ['biayaAdmin()', 'total()'] }, { id: 'K', x: 220, y: 200, shape: 'class', w: 170, h: 60, t: 'KartuKredit', attrs: [], methods: ['biayaAdmin()'] }, { id: 'L', x: 500, y: 200, shape: 'class', w: 170, h: 60, t: 'Laporan', attrs: [], methods: ['cetak()'] }], edges: [{ from: 'K', to: 'A', head: 'open' }, { from: 'L', to: 'I', head: 'open', dashed: true }], caption: 'Garis solid dengan segitiga kosong: pewarisan (extends). Garis putus-putus dengan segitiga kosong: realisasi (implements).' },
            { h2: 'Membandingkan keduanya' },
            { table: { head: ['Aspek', 'Abstract class', 'Interface'], rows: [['Hubungan', 'Pewarisan satu induk (extends)', 'Implementasi banyak (implements)'], ['Atribut', 'Boleh atribut instance dengan keadaan', 'Hanya konstanta (public static final)'], ['Konstruktor', 'Ada', 'Tidak ada'], ['Method', 'Abstrak dan konkret', 'Abstrak, default, static, private'], ['Cocok untuk', 'Keluarga class sejenis yang berbagi kode dan keadaan', 'Kemampuan atau peran yang dapat dimiliki class tak berkaitan']] } },
            { w: 'quiz', title: 'Latihan memilih', questions: [{ q: 'Beberapa jenis pegawai berbagi atribut nama dan gaji pokok serta sebagian logika gaji.', options: ['Abstract class', 'Interface'], answer: 0, why: 'Ada keadaan dan kode yang dibagi.' }, { q: 'Class Mobil, Printer, dan Laporan semuanya bisa "Dicetak" padahal tak berkerabat.', options: ['Abstract class', 'Interface'], answer: 1, why: 'Kemampuan lintas hierarki.' }, { q: 'Anda ingin menyediakan antarmuka yang bisa diganti implementasinya (misalnya penyimpanan ke file atau basis data).', options: ['Abstract class', 'Interface'], answer: 1, why: 'Kontrak murni memudahkan penggantian dan pengujian.' }] },
            { callout: 'Aturan praktis: <b>program ke interface, bukan ke implementasi</b>. Deklarasikan variabel sebagai <code>List</code> atau <code>DapatDicetak</code>, dan pilih class konkretnya hanya saat membuat objek.', kind: 'good', title: 'Prinsip desain' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Berapa interface yang boleh diimplementasikan satu class?', options: ['Satu', 'Banyak', 'Tidak ada'], answer: 1, why: 'Banyak, dipisah koma.' }, { q: 'Bisakah abstract class diinstansiasi dengan new?', options: ['Ya', 'Tidak', 'Hanya jika public'], answer: 1, why: 'Hanya subclass konkretnya yang dapat dibuat.' }, { q: 'Default method pada interface berguna untuk...', options: ['Menambah perilaku tanpa memecahkan implementasi lama', 'Mengganti konstruktor', 'Membuat atribut'], answer: 0, why: 'Interface dapat berevolusi tanpa merusak kode lama.' }] },
            { exercise: [['Ubah nama DapatDicetak menjadi Cetakan? Mengapa penamaan interface sebagai sifat (kata sifat) umum?', 'Interface biasanya menyatakan kemampuan: Comparable, Runnable, Serializable.'], ['Sebutkan interface standar yang sering dipakai.', 'Comparable, Comparator, Runnable, Iterable, List, Map, AutoCloseable.'], ['Mengapa abstract class dapat punya konstruktor?', 'Untuk menginisialisasi atribut bersama yang dipanggil oleh konstruktor subclass lewat super(...).'], ['Dua interface punya default method bernama sama; class mengimplementasikan keduanya. Apa yang terjadi?', 'Error kompilasi kecuali class menimpa method itu (dan dapat memanggil salah satunya lewat NamaInterface.super.method()).']] },
            { summary: ['Abstract class: kerangka dengan keadaan dan kode bersama, sebagian method wajib diisi subclass.', 'Interface: kontrak kemampuan; satu class dapat mengimplementasikan banyak.', 'Pilih abstract class untuk keluarga sejenis, interface untuk peran lintas hierarki.', 'Program ke interface, bukan ke implementasi.'] },
        ],
        faq: [['Apakah interface bisa mewarisi interface lain?', 'Ya, dengan extends, termasuk dari beberapa interface sekaligus.'], ['Apa itu functional interface?', 'Interface dengan tepat satu method abstrak (misalnya Runnable, Comparator); dapat dipakai dengan lambda.'], ['Kapan abstract class tidak diperlukan lagi?', 'Bila tidak ada keadaan bersama, interface dengan default method sering cukup.']],
        sources: [['Oracle: Interfaces (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html'], ['Oracle: Abstract Methods and Classes', 'https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html'], REF_EJ, REF_JLS],
    },

    {
        slug: 'exception-handling-java-try-catch-finally-dan-custom-exception',
        title: 'Exception Handling Java: try, catch, dan Custom Exception',
        description: 'Kuasai exception di Java: checked vs unchecked, try-catch-finally, try-with-resources, throws, membuat exception sendiri, dan praktik terbaik penanganan kesalahan.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'exception', 'try-catch', 'try-with-resources', 'custom exception'], cta: 'none',
        prereq: ['method Java', 'inheritance'],
        lead: 'Program nyata menghadapi hal tak terduga: berkas hilang, masukan salah, jaringan putus. Exception memisahkan alur normal dari penanganan kesalahan sehingga kode tetap bersih. Kuncinya bukan sekadar menangkap, tetapi memutuskan siapa yang berhak dan mampu menangani.',
        body: [
            { objectives: ['menjelaskan hierarki Throwable, Error, dan Exception', 'membedakan checked dan unchecked exception', 'memakai try, catch, finally, dan try-with-resources', 'membuat custom exception', 'menerapkan praktik penanganan kesalahan yang baik'] },
            { h2: 'Hierarki exception' },
            { svg: 'diagram', w: 600, h: 250, label: 'Hierarki Throwable', nodes: [{ id: 'T', x: 300, y: 30, shape: 'rect', w: 140, h: 36, t: 'Throwable' }, { id: 'E', x: 140, y: 110, shape: 'rect', w: 130, h: 36, t: 'Exception' }, { id: 'Er', x: 460, y: 110, shape: 'rect', w: 130, h: 36, t: 'Error' }, { id: 'IO', x: 60, y: 200, shape: 'rect', w: 120, h: 36, t: 'IOException' }, { id: 'RT', x: 230, y: 200, shape: 'rect', w: 150, h: 36, t: 'RuntimeException' }, { id: 'OOM', x: 500, y: 200, shape: 'rect', w: 190, h: 36, t: 'OutOfMemoryError' }], edges: [{ from: 'E', to: 'T', head: 'open' }, { from: 'Er', to: 'T', head: 'open' }, { from: 'IO', to: 'E', head: 'open' }, { from: 'RT', to: 'E', head: 'open' }, { from: 'OOM', to: 'Er', head: 'open' }], caption: 'Checked: Exception selain RuntimeException (misalnya IOException). Unchecked: RuntimeException dan turunannya, serta Error.' },
            { table: { head: ['Jenis', 'Contoh', 'Kompiler memaksa ditangani?', 'Penyebab umumnya'], rows: [['Checked', 'IOException, SQLException', 'Ya (try-catch atau throws)', 'Kondisi eksternal yang wajar terjadi'], ['Unchecked', 'NullPointerException, IllegalArgumentException', 'Tidak', 'Kesalahan pemrograman atau pelanggaran kontrak'], ['Error', 'OutOfMemoryError, StackOverflowError', 'Tidak', 'Masalah JVM; biasanya tidak ditangkap']] } },
            { h2: 'try, catch, finally' },
            { code: jv`public class Main {
    static int bagi(int a, int b) { return a / b; }

    public static void main(String[] args) {
        String[] masukan = {"10", "0", "abc", null};
        for (String m : masukan) {
            try {
                int n = Integer.parseInt(m);
                System.out.println("100 / " + n + " = " + bagi(100, n));
            } catch (NumberFormatException e) {
                System.out.println("bukan angka: " + e.getMessage());
            } catch (ArithmeticException e) {
                System.out.println("tidak boleh membagi nol");
            } finally {
                System.out.println("  (selesai memproses " + m + ")");   // selalu dijalankan
            }
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Urutkan catch dari yang paling spesifik ke yang paling umum. finally selalu berjalan, cocok untuk pembersihan.' },
            { h2: 'try-with-resources' },
            `Sumber daya seperti berkas atau koneksi harus ditutup walau terjadi kesalahan. Cara modern: deklarasikan di tanda kurung try; objek yang mengimplementasikan <code>AutoCloseable</code> ditutup otomatis.`,
            { code: jv`class Sumber implements AutoCloseable {
    private final String nama;
    Sumber(String nama) { this.nama = nama; System.out.println("buka " + nama); }
    void pakai(boolean gagal) {
        if (gagal) throw new IllegalStateException("gagal memakai " + nama);
        System.out.println("pakai " + nama);
    }
    @Override public void close() { System.out.println("tutup " + nama); }
}

public class Main {
    public static void main(String[] args) {
        try (Sumber a = new Sumber("A"); Sumber b = new Sumber("B")) {
            a.pakai(false);
            b.pakai(true);
        } catch (IllegalStateException e) {
            System.out.println("ditangkap: " + e.getMessage());
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Resource ditutup dalam urutan terbalik (B lalu A), bahkan ketika exception dilempar.' },
            { h2: 'Exception sendiri' },
            { code: jv`class SaldoTidakCukupException extends Exception {          // checked
    private final double kekurangan;
    SaldoTidakCukupException(double kekurangan) {
        super("saldo kurang Rp" + String.format("%.0f", kekurangan));
        this.kekurangan = kekurangan;
    }
    double getKekurangan() { return kekurangan; }
}

class Rekening {
    private double saldo;
    Rekening(double saldo) { this.saldo = saldo; }

    void tarik(double jumlah) throws SaldoTidakCukupException {        // mendeklarasikan
        if (jumlah > saldo) throw new SaldoTidakCukupException(jumlah - saldo);
        saldo -= jumlah;
    }
}

public class Main {
    public static void main(String[] args) {
        Rekening r = new Rekening(100_000);
        try {
            r.tarik(150_000);
        } catch (SaldoTidakCukupException e) {
            System.out.println(e.getMessage() + " (kurang " + e.getKekurangan() + ")");
        }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { callout: 'Gunakan <b>checked</b> exception bila pemanggil bisa dan diharapkan pulih dari kondisi itu. Gunakan <b>unchecked</b> untuk kesalahan pemrograman (argumen null, indeks salah). Banyak kerangka kerja modern lebih menyukai unchecked agar kode tidak tertutup blok try-catch.', kind: 'info', title: 'Kapan memakai yang mana' },
            { h2: 'Praktik yang baik' },
            { ul: ['<b>Jangan menelan exception</b>: catch kosong menyembunyikan bug. Minimal catat log.', '<b>Tangkap yang spesifik</b>, bukan <code>catch (Exception e)</code> serampangan.', '<b>Tangani di tempat yang mampu</b> memperbaiki atau menerjemahkannya; biarkan sisanya naik.', '<b>Sertakan penyebab</b> saat membungkus: <code>throw new LayananException("gagal", e)</code>.', '<b>Jangan memakai exception untuk alur normal</b>; periksa kondisi lebih dulu jika murah.', 'Pesan error harus membantu: apa yang gagal, dengan nilai apa.'] },
            { code: jv`public class Main {
    static void layanan() {
        try {
            Integer.parseInt("x");
        } catch (NumberFormatException e) {
            throw new IllegalStateException("konfigurasi port rusak", e);   // bungkus dengan penyebab
        }
    }

    public static void main(String[] args) {
        try { layanan(); }
        catch (IllegalStateException e) {
            System.out.println(e.getMessage());
            System.out.println("penyebab: " + e.getCause());
        }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apakah blok finally selalu berjalan?', options: ['Ya (kecuali JVM berhenti)', 'Tidak, hanya bila ada exception', 'Hanya jika tidak ada exception'], answer: 0, why: 'Baik ada maupun tidak ada exception.' }, { q: 'IOException adalah...', options: ['Checked exception', 'Unchecked exception', 'Error'], answer: 0, why: 'Wajib ditangani atau dideklarasikan.' }, { q: 'Apa keunggulan try-with-resources?', options: ['Menutup resource otomatis', 'Mempercepat program', 'Menghilangkan exception'], answer: 0, why: 'close() dipanggil otomatis dalam urutan terbalik.' }] },
            { exercise: [['Tulis metode yang membaca bilangan dari String dan mengembalikan 0 jika tidak valid, tanpa melempar exception.', 'Bungkus Integer.parseInt dalam try-catch NumberFormatException; kembalikan 0 di catch (dan pertimbangkan apakah itu keputusan yang tepat).'], ['Mengapa catch (Exception e) {} kosong berbahaya?', 'Kesalahan hilang tanpa jejak sehingga bug sulit dilacak.'], ['Ubah SaldoTidakCukupException menjadi unchecked. Apa yang berubah pada tanda tangan tarik?', 'Turunkan dari RuntimeException; klausa throws tidak lagi wajib.'], ['Apa yang tercetak bila try mengembalikan nilai dan finally juga mengeluarkan return?', 'Return dalam finally menimpa yang di try; hindari praktik ini.']] },
            { summary: ['Throwable → Error dan Exception; RuntimeException dan Error bersifat unchecked.', 'try/catch/finally dan try-with-resources mengatur penanganan dan pembersihan.', 'Custom exception menyampaikan kesalahan domain dengan data yang berguna.', 'Jangan telan exception; tangkap yang spesifik; bungkus dengan penyebab.'] },
        ],
        faq: [['Apa bedanya throw dan throws?', 'throw melempar objek exception di dalam method; throws pada tanda tangan method mendeklarasikan exception checked yang mungkin dilempar.'], ['Apakah exception lambat?', 'Membuat stack trace berbiaya, jadi jangan dipakai untuk alur yang sangat sering. Untuk kasus jarang tidak masalah.'], ['Bolehkah menangkap beberapa exception dalam satu catch?', 'Ya, dengan multi-catch: catch (IOException | SQLException e).']],
        sources: [['Oracle: Exceptions (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/essential/exceptions/'], ['Oracle: The try-with-resources Statement', 'https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html'], REF_EJ, REF_JLS],
    },

    {
        slug: 'java-collections-framework-list-set-map-dan-queue',
        title: 'Java Collections: List, Set, Map, dan Queue',
        description: 'Kenali Java Collections Framework: ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, PriorityQueue, dan ArrayDeque, lengkap dengan kompleksitas dan cara memilihnya.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'Collections', 'HashMap', 'List', 'Set'], cta: 'none',
        prereq: ['array dan ArrayList', 'interface'],
        lead: 'Hampir semua program Java memakai koleksi. Pustaka standar menyediakan hierarki interface dan implementasi dengan karakteristik berbeda. Memilih yang tepat bisa berarti selisih antara program yang cepat dan program yang merayap.',
        body: [
            { objectives: ['menggambarkan hierarki interface Collection dan Map', 'memakai List, Set, Map, Queue, dan Deque', 'memilih implementasi berdasarkan kompleksitas dan urutan', 'menelusuri koleksi dengan for-each dan Iterator', 'menjelaskan peran equals dan hashCode pada HashMap dan HashSet'] },
            { h2: 'Peta besar' },
            { svg: 'diagram', w: 620, h: 250, label: 'Hierarki koleksi', nodes: [{ id: 'It', x: 130, y: 25, shape: 'rect', w: 130, h: 32, t: 'Iterable' }, { id: 'Co', x: 130, y: 85, shape: 'rect', w: 130, h: 32, t: 'Collection' }, { id: 'Li', x: 40, y: 165, shape: 'rect', w: 70, h: 32, t: 'List' }, { id: 'Se', x: 130, y: 165, shape: 'rect', w: 70, h: 32, t: 'Set' }, { id: 'Qu', x: 220, y: 165, shape: 'rect', w: 70, h: 32, t: 'Queue' }, { id: 'Ma', x: 430, y: 85, shape: 'rect', w: 130, h: 32, t: 'Map' }, { id: 'HM', x: 370, y: 165, shape: 'rect', w: 90, h: 32, t: 'HashMap' }, { id: 'TM', x: 480, y: 165, shape: 'rect', w: 90, h: 32, t: 'TreeMap' }, { id: 'LH', x: 590, y: 165, shape: 'rect', w: 90, h: 32, t: 'LinkedHashMap' }], edges: [{ from: 'Co', to: 'It', head: 'open' }, { from: 'Li', to: 'Co', head: 'open' }, { from: 'Se', to: 'Co', head: 'open' }, { from: 'Qu', to: 'Co', head: 'open' }, { from: 'HM', to: 'Ma', head: 'open' }, { from: 'TM', to: 'Ma', head: 'open' }, { from: 'LH', to: 'Ma', head: 'open' }], caption: 'Map bukan turunan Collection karena menyimpan pasangan kunci–nilai.' },
            { table: { head: ['Interface', 'Implementasi umum', 'Sifat', 'Operasi utama'], rows: [['List', 'ArrayList, LinkedList', 'Berurutan, boleh duplikat', 'get(i) O(1) pada ArrayList'], ['Set', 'HashSet / LinkedHashSet / TreeSet', 'Tanpa duplikat; Hash tak berurutan, Linked urut sisip, Tree terurut', 'contains O(1) Hash, O(log n) Tree'], ['Map', 'HashMap / LinkedHashMap / TreeMap', 'Kunci unik → nilai', 'get O(1) Hash, O(log n) Tree'], ['Queue/Deque', 'ArrayDeque, PriorityQueue', 'FIFO/LIFO, atau berdasarkan prioritas', 'offer/poll O(1) atau O(log n) untuk PriorityQueue']] } },
            { h2: 'List, Set, dan Map beraksi' },
            { code: jv`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> daftar = new ArrayList<>(List.of("kopi", "teh", "kopi", "susu"));
        Set<String> unik = new LinkedHashSet<>(daftar);            // hapus duplikat, jaga urutan
        Set<String> terurut = new TreeSet<>(daftar);               // terurut abjad
        System.out.println(daftar + " -> " + unik + " | " + terurut);

        Map<String, Integer> hitung = new TreeMap<>();
        for (String s : daftar) hitung.merge(s, 1, Integer::sum);  // hitung kemunculan
        System.out.println(hitung);

        for (Map.Entry<String, Integer> e : hitung.entrySet())
            System.out.println(e.getKey() + " muncul " + e.getValue() + "x");

        System.out.println(hitung.getOrDefault("coklat", 0));
        System.out.println(hitung.containsKey("teh"));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Queue, Deque, dan PriorityQueue' },
            { code: jv`import java.util.*;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> tumpuk = new ArrayDeque<>();     // dipakai sebagai stack
        tumpuk.push(1); tumpuk.push(2); tumpuk.push(3);
        System.out.println(tumpuk.pop() + " " + tumpuk.peek());

        Queue<String> antre = new ArrayDeque<>();        // dipakai sebagai queue
        antre.offer("Ani"); antre.offer("Budi");
        System.out.println(antre.poll() + " " + antre.size());

        PriorityQueue<int[]> tugas = new PriorityQueue<>((a, b) -> a[0] - b[0]);   // prioritas terkecil dulu
        tugas.add(new int[]{3, 30}); tugas.add(new int[]{1, 10}); tugas.add(new int[]{2, 20});
        while (!tugas.isEmpty()) System.out.print(tugas.poll()[1] + " ");
        System.out.println();
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Untuk stack dan queue pilih ArrayDeque. Kelas Stack dan Vector adalah peninggalan lama.' },
            { h2: 'Mengapa equals dan hashCode penting' },
            { code: jv`import java.util.*;

class KunciSalah {
    final int id;
    KunciSalah(int id) { this.id = id; }
}
class KunciBenar {
    final int id;
    KunciBenar(int id) { this.id = id; }
    @Override public boolean equals(Object o) { return o instanceof KunciBenar k && k.id == id; }
    @Override public int hashCode() { return Integer.hashCode(id); }
}

public class Main {
    public static void main(String[] args) {
        Map<KunciSalah, String> a = new HashMap<>();
        a.put(new KunciSalah(1), "satu");
        System.out.println("tanpa equals/hashCode : " + a.get(new KunciSalah(1)));

        Map<KunciBenar, String> b = new HashMap<>();
        b.put(new KunciBenar(1), "satu");
        System.out.println("dengan equals/hashCode: " + b.get(new KunciBenar(1)));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'HashMap menghitung hashCode untuk menemukan "ember", lalu memakai equals untuk memastikan kunci sama. Tanpa keduanya, objek yang isinya sama dianggap berbeda.' },
            { w: 'hash', title: 'Cara kerja hash table', desc: 'Masukkan kunci dan perhatikan ember tempat ia jatuh serta tabrakan.' },
            { callout: 'Jangan mengubah isi objek yang dipakai sebagai kunci HashMap atau elemen HashSet dengan cara yang memengaruhi hashCode. Objek akan "hilang" di embernya. Pakai kunci immutable seperti String atau record.', kind: 'warn', title: 'Jebakan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Koleksi yang tidak mengizinkan duplikat?', options: ['List', 'Set', 'Queue'], answer: 1, why: 'Set menyimpan elemen unik.' }, { q: 'Map yang menjaga kunci terurut?', options: ['HashMap', 'TreeMap', 'ArrayList'], answer: 1, why: 'TreeMap berbasis pohon seimbang, operasi O(log n).' }, { q: 'Struktur yang disarankan sebagai stack modern?', options: ['Stack', 'ArrayDeque', 'Vector'], answer: 1, why: 'ArrayDeque lebih cepat dan tidak tersinkronisasi tanpa perlu.' }] },
            { exercise: [['Hitung frekuensi kata pada kalimat dengan Map.', 'Pisahkan dengan split, lalu hitung.merge(kata, 1, Integer::sum).'], ['Hapus duplikat dari List<Integer> sambil menjaga urutan.', 'new ArrayList<>(new LinkedHashSet<>(daftar)).'], ['Kapan LinkedHashMap berguna?', 'Saat butuh urutan penyisipan atau urutan akses (misalnya cache LRU).'], ['Mengapa iterasi HashMap tidak punya urutan terjamin?', 'Urutan bergantung pada hash dan kapasitas tabel, bukan urutan penyisipan.']] },
            { summary: ['Collection (List, Set, Queue) dan Map memiliki beberapa implementasi.', 'Pilih Hash untuk kecepatan, Tree untuk urutan terurut, Linked untuk urutan sisip.', 'Hash memerlukan equals dan hashCode yang konsisten.', 'ArrayDeque untuk stack dan queue; PriorityQueue untuk prioritas.'] },
        ],
        faq: [['Mengapa List<int> tidak bisa?', 'Generics hanya menerima tipe referensi; gunakan List<Integer>.'], ['Apakah HashMap aman untuk banyak thread?', 'Tidak. Pakai ConcurrentHashMap untuk akses bersamaan.'], ['Apa bedanya Comparable dan Comparator?', 'Comparable didefinisikan di class itu sendiri (urutan alami); Comparator di luar, bisa banyak aturan urutan.']],
        sources: [['Oracle: Collections (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/collections/'], ['Java SE API: java.util', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/package-summary.html'], REF_EJ, REF_API],
    },

    {
        slug: 'generics-java-tipe-parameter-wildcard-dan-type-erasure',
        title: 'Generics Java: Tipe Parameter dan Wildcard',
        description: 'Pahami generics di Java: class dan method generik, batasan tipe, wildcard, PECS, dan type erasure, supaya kode aman tipe tanpa casting dan tanpa duplikasi.',
        date: D, category: C, level: 'Lanjut', tags: ['Java', 'generics', 'wildcard', 'type erasure', 'bounded type'], cta: 'none',
        prereq: ['interface', 'collections'],
        lead: 'Sebelum generics, koleksi menyimpan Object dan kita harus casting sambil berharap tidak keliru. Generics memindahkan pemeriksaan tipe dari saat berjalan ke saat kompilasi: kesalahan tertangkap lebih dulu dan kode tidak dipenuhi casting.',
        body: [
            { objectives: ['menjelaskan masalah yang diselesaikan generics', 'membuat class dan method generik', 'memakai batasan tipe (extends) dan wildcard', 'menerapkan aturan PECS', 'menjelaskan type erasure dan batasannya'] },
            { h2: 'Masalah tanpa generics' },
            { code: jv`import java.util.*;

public class Main {
    @SuppressWarnings({"rawtypes", "unchecked"})
    public static void main(String[] args) {
        List mentah = new ArrayList();            // tipe mentah (raw): jangan dipakai
        mentah.add("teks");
        mentah.add(42);
        try {
            String s = (String) mentah.get(1);    // baru ketahuan saat berjalan
        } catch (ClassCastException e) {
            System.out.println("ClassCastException saat runtime");
        }

        List<String> aman = new ArrayList<>();
        aman.add("teks");
        // aman.add(42);                          // ditolak kompiler
        String s = aman.get(0);                   // tanpa casting
        System.out.println(s);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Class dan method generik' },
            { code: jv`class Kotak<T> {
    private T isi;
    void simpan(T isi) { this.isi = isi; }
    T ambil() { return isi; }
}

class Pasangan<K, V> {
    final K kunci; final V nilai;
    Pasangan(K kunci, V nilai) { this.kunci = kunci; this.nilai = nilai; }
    @Override public String toString() { return kunci + " => " + nilai; }
}

public class Main {
    static <T> void tukar(T[] a, int i, int j) {        // method generik
        T t = a[i]; a[i] = a[j]; a[j] = t;
    }

    static <T extends Comparable<T>> T maks(T a, T b) {   // batasan: T harus bisa dibandingkan
        return a.compareTo(b) >= 0 ? a : b;
    }

    public static void main(String[] args) {
        Kotak<String> k = new Kotak<>();
        k.simpan("halo");
        System.out.println(k.ambil().toUpperCase());

        System.out.println(new Pasangan<>("umur", 20));

        Integer[] angka = {1, 2, 3};
        tukar(angka, 0, 2);
        System.out.println(java.util.Arrays.toString(angka));

        System.out.println(maks(3, 9) + " " + maks("apel", "mangga") + " " + maks(2.5, 1.5));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Satu implementasi bekerja untuk banyak tipe sambil tetap aman tipe.' },
            { h2: 'Generics tidak kovarian' },
            `<code>List&lt;Integer&gt;</code> <b>bukan</b> subtipe dari <code>List&lt;Number&gt;</code>, walau Integer adalah Number. Bila diperbolehkan, kita bisa memasukkan Double ke list yang sebenarnya berisi Integer. Wildcard menyelesaikan kebutuhan ini dengan aman.`,
            { table: { head: ['Bentuk', 'Artinya', 'Boleh membaca?', 'Boleh menulis?'], rows: [['List<?>', 'List berisi tipe apa pun', 'Sebagai Object', 'Tidak (kecuali null)'], ['List<? extends Number>', 'List berisi Number atau turunannya (producer)', 'Ya, sebagai Number', 'Tidak'], ['List<? super Integer>', 'List berisi Integer atau induknya (consumer)', 'Sebagai Object', 'Ya, Integer']] } },
            { callout: '<b>PECS</b>: Producer Extends, Consumer Super. Bila parameter <i>menghasilkan</i> nilai untuk Anda baca, pakai <code>? extends T</code>. Bila ia <i>menerima</i> nilai yang Anda tulis, pakai <code>? super T</code>.', kind: 'info', title: 'Aturan mengingat' },
            { code: jv`import java.util.*;

public class Main {
    static double jumlah(List<? extends Number> daftar) {      // producer: hanya membaca
        double t = 0;
        for (Number n : daftar) t += n.doubleValue();
        return t;
    }

    static void isiAngka(List<? super Integer> tujuan) {        // consumer: menulis Integer
        for (int i = 1; i <= 3; i++) tujuan.add(i);
    }

    public static void main(String[] args) {
        System.out.println(jumlah(List.of(1, 2, 3)) + " " + jumlah(List.of(1.5, 2.5)));

        List<Number> angka = new ArrayList<>();
        List<Object> objek = new ArrayList<>();
        isiAngka(angka);
        isiAngka(objek);
        System.out.println(angka + " " + objek);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Type erasure' },
            `Generics hanya ada saat kompilasi. Kompiler menghapus parameter tipe dan memasukkan casting yang diperlukan, agar kompatibel dengan kode lama. Akibatnya beberapa hal tidak bisa dilakukan:`,
            { ul: ['<code>new T()</code> atau <code>new T[10]</code> tidak diperbolehkan.', '<code>x instanceof List&lt;String&gt;</code> tidak diperbolehkan (hanya <code>List&lt;?&gt;</code>).', 'Tipe primitif tidak bisa menjadi argumen tipe (<code>List&lt;int&gt;</code>); pakai wrapper.', 'Dua method overload yang berbeda hanya pada argumen tipe generik bentrok setelah erasure.'] },
            { code: jv`import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();
        System.out.println(a.getClass() == b.getClass());     // sama saat runtime: ArrayList
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Keuntungan utama generics?', options: ['Kesalahan tipe tertangkap saat kompilasi', 'Program lebih cepat', 'Kode lebih pendek saja'], answer: 0, why: 'Tanpa casting dan lebih aman.' }, { q: 'List<Integer> adalah subtipe dari List<Number>?', options: ['Ya', 'Tidak', 'Hanya pada Java 21'], answer: 1, why: 'Generics invarian.' }, { q: 'PECS untuk parameter yang kita baca nilainya?', options: ['? extends T', '? super T', '?'], answer: 0, why: 'Producer Extends.' }] },
            { exercise: [['Tulis method generik salin(List<? extends T> sumber, List<? super T> tujuan).', '<code>static <T> void salin(List<? extends T> s, List<? super T> t) { for (T x : s) t.add(x); }</code>'], ['Mengapa tidak bisa new T[10]?', 'Karena type erasure: saat runtime T tidak diketahui sehingga array tidak bisa dibuat dengan aman.'], ['Buat class generik Tumpukan<T> dengan push, pop, dan kosong().', 'Gunakan ArrayList<T> atau ArrayDeque<T> di dalamnya.'], ['Apa beda List<?> dan List<Object>?', 'List<Object> hanya menerima list bertipe tepat Object; List<?> menerima list dengan argumen tipe apa pun (hanya-baca).']] },
            { summary: ['Generics memberi keamanan tipe saat kompilasi tanpa casting.', 'Class dan method generik; batasan dengan extends.', 'Wildcard dan PECS untuk fleksibilitas; generics invarian.', 'Type erasure membatasi operasi saat runtime.'] },
        ],
        faq: [['Apa itu diamond operator?', 'Tanda <> pada new ArrayList<>() yang membuat kompiler menyimpulkan argumen tipe dari konteks.'], ['Mengapa tidak memakai raw type?', 'Kompiler tidak bisa memeriksa tipe sehingga kesalahan baru muncul saat runtime.'], ['Apakah generics ada di C++?', 'C++ memiliki template yang menghasilkan kode terpisah per tipe; generics Java memakai erasure dan satu kode untuk semua tipe.']],
        sources: [['Oracle: Generics (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/generics/index.html'], ['Oracle: Wildcards', 'https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html'], REF_EJ, REF_JLS],
    },

    {
        slug: 'record-enum-dan-sealed-class-java-modern',
        title: 'Record, Enum, dan Sealed Class: Java Modern',
        description: 'Pelajari record, enum, dan sealed class Java modern serta switch dengan pattern matching untuk memodelkan data dengan lebih ringkas dan aman.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'record', 'enum', 'sealed', 'pattern matching'], cta: 'none',
        prereq: ['class dan interface', 'polimorfisme'],
        lead: 'Java telah banyak berubah. Record menghilangkan kode berulang untuk class pembawa data, enum menyatakan himpunan nilai tetap, dan sealed class dengan pattern matching memungkinkan kompiler memastikan Anda sudah menangani semua kasus.',
        body: [
            { objectives: ['membuat record dan menjelaskan apa yang dihasilkan otomatis', 'memakai enum dengan atribut dan method', 'membatasi hierarki dengan sealed class/interface', 'memakai switch dengan pattern matching yang eksak', 'memilih antara class biasa, record, dan enum'] },
            { h2: 'Record: data tanpa seremonial' },
            { code: jv`record Titik(int x, int y) {
    Titik {                                    // konstruktor kompak: validasi
        if (x < 0 || y < 0) throw new IllegalArgumentException("koordinat negatif");
    }
    double jarakKeAsal() { return Math.sqrt(x * x + y * y); }
}

public class Main {
    public static void main(String[] args) {
        Titik p = new Titik(3, 4);
        System.out.println(p);                              // toString otomatis
        System.out.println(p.x() + " " + p.y());             // accessor otomatis
        System.out.println(p.equals(new Titik(3, 4)));      // equals berdasarkan isi
        System.out.println(p.hashCode() == new Titik(3, 4).hashCode());
        System.out.println(p.jarakKeAsal());
        try { new Titik(-1, 0); } catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Satu baris deklarasi menghasilkan konstruktor, accessor, equals, hashCode, dan toString. Record bersifat immutable.' },
            { h2: 'Enum: himpunan nilai tetap' },
            { code: jv`enum Hari {
    SENIN(true), SELASA(true), RABU(true), KAMIS(true), JUMAT(true), SABTU(false), MINGGU(false);

    private final boolean kerja;
    Hari(boolean kerja) { this.kerja = kerja; }
    boolean hariKerja() { return kerja; }
}

enum Operasi {
    TAMBAH("+") { double terapkan(double a, double b) { return a + b; } },
    KALI("*")   { double terapkan(double a, double b) { return a * b; } };

    final String simbol;
    Operasi(String simbol) { this.simbol = simbol; }
    abstract double terapkan(double a, double b);        // perilaku berbeda per konstanta
}

public class Main {
    public static void main(String[] args) {
        for (Hari h : Hari.values())
            if (!h.hariKerja()) System.out.println(h + " (ordinal " + h.ordinal() + ")");
        System.out.println(Hari.valueOf("RABU").hariKerja());

        for (Operasi o : Operasi.values())
            System.out.println("6 " + o.simbol + " 7 = " + o.terapkan(6, 7));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Enum aman tipe: variabel bertipe Hari tidak mungkin berisi "Selasaa". Hindari menyimpan status sebagai String atau int bebas.' },
            { h2: 'Sealed: hierarki yang tertutup' },
            `Sealed class atau interface menyatakan dengan tegas siapa saja yang boleh menjadi turunannya. Dipadukan dengan switch pattern matching, kompiler dapat memeriksa bahwa semua kasus tertangani <i>tanpa default</i>.`,
            { code: jv`sealed interface Bentuk permits Lingkaran, Persegi, Segitiga { }
record Lingkaran(double r) implements Bentuk { }
record Persegi(double s) implements Bentuk { }
record Segitiga(double alas, double tinggi) implements Bentuk { }

public class Main {
    static double luas(Bentuk b) {
        return switch (b) {                                     // tanpa default: kompiler memastikan lengkap
            case Lingkaran l -> Math.PI * l.r() * l.r();
            case Persegi p   -> p.s() * p.s();
            case Segitiga t  -> 0.5 * t.alas() * t.tinggi();
        };
    }

    public static void main(String[] args) {
        for (Bentuk b : new Bentuk[]{ new Lingkaran(1), new Persegi(2), new Segitiga(3, 4) })
            System.out.printf("%s -> %.2f%n", b, luas(b));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Jika Anda menambah Trapesium ke permits, semua switch yang tidak menanganinya gagal dikompilasi. Kesalahan tertangkap lebih awal.' },
            { h2: 'Deconstruction dan guard' },
            { code: jv`record Titik(int x, int y) { }
sealed interface Ekspr permits Angka, Tambah, Kali { }
record Angka(int nilai) implements Ekspr { }
record Tambah(Ekspr kiri, Ekspr kanan) implements Ekspr { }
record Kali(Ekspr kiri, Ekspr kanan) implements Ekspr { }

public class Main {
    static int hitung(Ekspr e) {
        return switch (e) {
            case Angka a -> a.nilai();
            case Tambah(Ekspr k, Ekspr r) -> hitung(k) + hitung(r);     // membongkar record
            case Kali(Ekspr k, Ekspr r) -> hitung(k) * hitung(r);
        };
    }

    static String kuadran(Object o) {
        return switch (o) {
            case Titik(int x, int y) when x > 0 && y > 0 -> "kuadran I";
            case Titik(int x, int y) when x < 0 && y > 0 -> "kuadran II";
            case Titik t -> "bukan kuadran I atau II";
            default -> "bukan titik";
        };
    }

    public static void main(String[] args) {
        Ekspr e = new Tambah(new Angka(2), new Kali(new Angka(3), new Angka(4)));
        System.out.println(hitung(e));                  // 2 + 3 * 4
        System.out.println(kuadran(new Titik(1, 2)) + ", " + kuadran(new Titik(-1, 2)) + ", " + kuadran("x"));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { table: { head: ['Kebutuhan', 'Pakai'], rows: [['Pembawa data immutable (DTO, nilai)', 'record'], ['Himpunan nilai tetap dan terhingga', 'enum'], ['Beberapa jenis tertutup dengan data berbeda', 'sealed interface + record'], ['Objek dengan keadaan dan perilaku yang berubah', 'class biasa']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Record secara otomatis menghasilkan...', options: ['equals, hashCode, toString, accessor', 'Hanya konstruktor', 'Setter'], answer: 0, why: 'Record immutable tanpa setter.' }, { q: 'Keunggulan sealed + switch pola?', options: ['Kompiler memeriksa kelengkapan kasus', 'Lebih cepat', 'Tidak butuh class'], answer: 0, why: 'Tidak perlu default dan tidak ada kasus terlewat.' }, { q: 'Bisakah enum memiliki method dan atribut?', options: ['Ya', 'Tidak'], answer: 0, why: 'Enum adalah class khusus.' }] },
            { exercise: [['Ubah class Mahasiswa dengan nim dan nama menjadi record.', '<code>record Mahasiswa(String nim, String nama) { }</code>'], ['Buat enum Level dengan nilai RENDAH, SEDANG, TINGGI dan method yang memetakan skor 0–100 ke Level.', 'Method static dengan if berdasarkan ambang batas.'], ['Tambahkan Elips ke hierarki Bentuk. Apa yang terjadi pada switch luas() sebelumnya?', 'Gagal dikompilasi sampai kasus Elips ditambahkan.'], ['Mengapa record tidak cocok untuk entitas yang berubah?', 'Record bersifat immutable; perubahan memerlukan pembuatan record baru.']] },
            { summary: ['Record: data immutable tanpa kode berulang.', 'Enum: himpunan konstanta aman tipe dengan atribut dan perilaku.', 'Sealed: hierarki tertutup; switch pola memeriksa kelengkapan.', 'Pilih bentuk yang sesuai dengan sifat data.'] },
        ],
        faq: [['Sejak versi Java berapa fitur ini tersedia?', 'Record resmi di Java 16, sealed di 17, dan switch pattern matching di 21.'], ['Bisakah record mewarisi class?', 'Tidak (sudah mewarisi java.lang.Record), tetapi boleh mengimplementasikan interface.'], ['Apakah record boleh berisi method tambahan?', 'Boleh, termasuk method static dan konstruktor tambahan.']],
        sources: [['dev.java: Records', 'https://dev.java/learn/records/'], ['Oracle: Pattern Matching (Java Language Updates)', 'https://docs.oracle.com/en/java/javase/21/language/pattern-matching.html'], ['Oracle: Enum Types (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html'], ['JEP 409: Sealed Classes', 'https://openjdk.org/jeps/409']],
    },
];
