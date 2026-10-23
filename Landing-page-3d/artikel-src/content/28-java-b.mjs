const D = '2026-10-23';
const C = 'PBO dengan Java';
const jv = String.raw;

const REF_TUT = ['Oracle: The Java Tutorials, Classes and Objects', 'https://docs.oracle.com/javase/tutorial/java/javaOO/index.html'];
const REF_INH = ['Oracle: Inheritance (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/IandI/index.html'];
const REF_JLS = ['The Java Language Specification', 'https://docs.oracle.com/javase/specs/jls/se21/html/index.html'];
const REF_EJ = ['Joshua Bloch, Effective Java (edisi ke-3, Addison-Wesley, 2018)', ''];
const REF_DEVJ = ['dev.java: Learn Java (Oracle)', 'https://dev.java/learn/'];

export default [
    {
        slug: 'class-dan-objek-java-membuat-tipe-data-sendiri',
        title: 'Class dan Objek di Java: Membuat Tipe Sendiri',
        description: 'Pahami class sebagai cetak biru dan objek sebagai instansinya: atribut, method, new, heap dan stack, referensi null, serta cara menelusuri objek di memori.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'class', 'objek', 'PBO', 'heap'], cta: 'none',
        prereq: ['method Java', 'array'],
        lead: 'Pemrograman berorientasi objek memodelkan program sebagai kumpulan objek yang punya data dan perilaku. Class adalah cetak birunya, objek adalah benda nyata yang dibuat dari cetak biru itu. Materi ini membangun fondasi yang dipakai di semua materi PBO berikutnya.',
        body: [
            { objectives: ['membedakan class dan objek', 'mendeklarasikan atribut dan method', 'membuat objek dengan new dan memakai titik untuk mengakses anggota', 'menjelaskan referensi, null, dan NullPointerException', 'menggambarkan keadaan memori (stack dan heap) untuk beberapa objek'] },
            { h2: 'Cetak biru dan benda nyata' },
            { svg: 'diagram', w: 560, h: 190, label: 'Satu class, banyak objek', nodes: [{ id: 'c', x: 110, y: 95, shape: 'class', w: 170, h: 100, t: 'Mahasiswa', attrs: ['nim', 'nama'], methods: ['belajar()'] }, { id: 'o1', x: 330, y: 45, shape: 'rect', w: 170, h: 50, t: 'a: nim=A01, nama=Ani' }, { id: 'o2', x: 330, y: 140, shape: 'rect', w: 170, h: 50, t: 'b: nim=A02, nama=Budi' }], edges: [{ from: 'c', to: 'o1', label: 'new' }, { from: 'c', to: 'o2', label: 'new' }], caption: 'Setiap objek memiliki salinan atribut sendiri, tetapi berbagi definisi method dari class.' },
            { h2: 'Mendefinisikan class' },
            { code: jv`class Mahasiswa {
    String nim;                      // atribut (field)
    String nama;
    double ipk;

    void perkenalkan() {             // method
        System.out.println("Saya " + nama + " (" + nim + "), IPK " + ipk);
    }

    boolean berprestasi() {
        return ipk >= 3.5;
    }
}

public class Main {
    public static void main(String[] args) {
        Mahasiswa a = new Mahasiswa();   // membuat objek
        a.nim = "A01"; a.nama = "Ani"; a.ipk = 3.8;

        Mahasiswa b = new Mahasiswa();
        b.nim = "A02"; b.nama = "Budi"; b.ipk = 3.1;

        a.perkenalkan();
        b.perkenalkan();
        System.out.println(a.berprestasi() + " " + b.berprestasi());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Hanya satu class yang boleh public per berkas; class lain berada dalam berkas yang sama tanpa public.' },
            { h2: 'Nilai awal atribut' },
            { table: { head: ['Tipe atribut', 'Nilai awal otomatis'], rows: [['int, long, short, byte', '0'], ['double, float', '0.0'], ['boolean', 'false'], ['char', "'\\u0000' (karakter kosong)"], ['Tipe referensi (String, objek, larik)', 'null']] } },
            `Variabel <b>lokal</b> di dalam method tidak diberi nilai awal otomatis; kompiler menolak pemakaian sebelum diisi.`,
            { h2: 'Referensi dan null' },
            { code: jv`class Kotak { int isi; }

public class Main {
    public static void main(String[] args) {
        Kotak p = new Kotak();
        Kotak q = p;                  // q dan p menunjuk objek yang sama
        q.isi = 42;
        System.out.println(p.isi);

        Kotak r = new Kotak();        // objek lain
        r.isi = 42;
        System.out.println((p == r) + " " + (p == q));   // == membandingkan alamat

        Kotak kosong = null;
        try {
            System.out.println(kosong.isi);
        } catch (NullPointerException e) {
            System.out.println("NullPointerException: tidak ada objek di balik referensi null");
        }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { svg: 'diagram', w: 560, h: 190, label: 'Stack dan heap', nodes: [{ id: 'p', x: 80, y: 40, shape: 'rect', w: 110, h: 36, t: 'p' }, { id: 'q', x: 80, y: 95, shape: 'rect', w: 110, h: 36, t: 'q' }, { id: 'r', x: 80, y: 150, shape: 'rect', w: 110, h: 36, t: 'r' }, { id: 'o1', x: 380, y: 68, shape: 'rect', w: 150, h: 50, t: 'Kotak (isi = 42)' }, { id: 'o2', x: 380, y: 150, shape: 'rect', w: 150, h: 50, t: 'Kotak (isi = 42)' }], edges: [{ from: 'p', to: 'o1' }, { from: 'q', to: 'o1' }, { from: 'r', to: 'o2' }], caption: 'Variabel di stack menyimpan referensi; objeknya berada di heap. p dan q menunjuk objek yang sama, r menunjuk objek lain bernilai sama.' },
            { callout: 'Java mengelola memori heap otomatis dengan <b>garbage collector</b>: objek yang tidak lagi ditunjuk variabel mana pun akan dibersihkan. Anda tidak perlu (dan tidak bisa) membebaskan objek secara manual.', kind: 'info', title: 'Pengelolaan memori' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Class adalah...', options: ['Cetak biru pembuat objek', 'Objek yang sedang berjalan', 'Variabel global'], answer: 0, why: 'Objek dibuat dari class dengan new.' }, { q: 'Nilai awal atribut String yang belum diisi?', options: ['""', 'null', '"0"'], answer: 1, why: 'Atribut referensi bernilai null secara bawaan.' }, { q: 'Kapan NullPointerException terjadi?', options: ['Saat memakai anggota dari referensi null', 'Saat objek terlalu besar', 'Saat memakai new'], answer: 0, why: 'Tidak ada objek untuk diakses.' }] },
            { exercise: [['Buat class Buku dengan atribut judul dan harga, serta method yang mengembalikan harga setelah diskon persen tertentu.', 'Method dengan parameter persen: <code>return harga * (1 - persen / 100.0);</code>'], ['Berapa objek Mahasiswa yang dibuat oleh: Mahasiswa m1 = new Mahasiswa(); Mahasiswa m2 = m1; Mahasiswa m3 = new Mahasiswa();', 'Dua objek: m1 dan m2 menunjuk objek yang sama.'], ['Mengapa p == r bernilai false padahal isinya sama?', '== membandingkan alamat objek, bukan isinya. Perbandingan isi memerlukan method equals yang diimplementasikan.'], ['Apa bedanya atribut dan variabel lokal?', 'Atribut milik objek dan hidup sepanjang objek; variabel lokal hidup hanya selama method berjalan dan tidak punya nilai awal otomatis.']] },
            { summary: ['Class adalah cetak biru; objek adalah instansinya (dibuat dengan new).', 'Atribut menyimpan keadaan, method menyatakan perilaku.', 'Variabel menyimpan referensi; objek berada di heap; null berarti tidak ada objek.', 'Garbage collector membersihkan objek yang tak lagi dirujuk.'] },
        ],
        faq: [['Apa beda class dan struct?', 'Java tidak punya struct; class mencakup keperluan itu. Record (Java 16+) adalah bentuk ringkas untuk class pembawa data.'], ['Berapa banyak class boleh dalam satu berkas?', 'Banyak, tetapi paling banyak satu yang public dan namanya harus sama dengan nama berkas.'], ['Apakah objek selalu di heap?', 'Secara konseptual ya; JVM bisa mengoptimalkan (escape analysis) sehingga sebagian objek tidak benar-benar dialokasikan di heap.']],
        sources: [REF_TUT, REF_DEVJ, REF_JLS, REF_EJ],
    },

    {
        slug: 'konstruktor-this-static-dan-blok-inisialisasi-java',
        title: 'Konstruktor, this, dan static di Java',
        description: 'Pelajari konstruktor, overloading konstruktor, kata kunci this, anggota static, konstanta, dan urutan inisialisasi objek di Java, dengan contoh kode yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'konstruktor', 'this', 'static', 'inisialisasi'], cta: 'none',
        prereq: ['class dan objek'],
        lead: 'Bagaimana memastikan objek lahir dalam keadaan valid? Jawabannya konstruktor. Materi ini juga membahas this (objek saat ini), static (milik class, bukan objek), dan urutan inisialisasi yang sering muncul di soal ujian.',
        body: [
            { objectives: ['menulis konstruktor dan overloading konstruktor', 'memakai this untuk membedakan atribut dari parameter dan memanggil konstruktor lain', 'membedakan anggota static dan instance', 'mendeklarasikan konstanta dengan static final', 'memprediksi urutan inisialisasi objek'] },
            { h2: 'Konstruktor' },
            `Konstruktor adalah blok khusus yang dipanggil saat <code>new</code>. Namanya sama dengan class dan tidak punya tipe kembalian. Bila Anda tidak menulis satu pun, Java menyediakan konstruktor kosong bawaan; begitu Anda menulis satu, yang bawaan hilang.`,
            { code: jv`class Mahasiswa {
    String nim, nama;
    double ipk;

    Mahasiswa(String nim, String nama) {
        this(nim, nama, 0.0);                // memanggil konstruktor lain
    }

    Mahasiswa(String nim, String nama, double ipk) {
        this.nim = nim;                      // this.nim = atribut; nim = parameter
        this.nama = nama;
        this.ipk = ipk;
    }

    @Override public String toString() { return nama + " (" + nim + "), IPK " + ipk; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Mahasiswa("A01", "Ani"));
        System.out.println(new Mahasiswa("A02", "Budi", 3.4));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'this(...) harus menjadi pernyataan pertama di konstruktor. Memusatkan inisialisasi di satu konstruktor menghindari kode berulang.' },
            { callout: 'Tanpa <code>this.</code>, <code>nim = nim;</code> hanya menugaskan parameter ke dirinya sendiri dan atribut tetap kosong. Ini salah satu bug paling klasik bagi pemula.', kind: 'warn', title: 'Jebakan shadowing' },
            { h2: 'static: milik class, bukan objek' },
            { code: jv`class Akun {
    static int jumlahAkun = 0;                   // satu salinan untuk seluruh class
    static final double BUNGA = 0.05;             // konstanta
    private static int nomorBerikut = 1000;

    final int nomor;                              // satu per objek, tidak dapat diubah lagi
    double saldo;

    Akun(double saldoAwal) {
        this.nomor = nomorBerikut++;
        this.saldo = saldoAwal;
        jumlahAkun++;
    }

    static double bungaTahunan(double saldo) {    // method static: tidak memakai this
        return saldo * BUNGA;
    }
}

public class Main {
    public static void main(String[] args) {
        Akun a = new Akun(1_000_000);
        Akun b = new Akun(500_000);
        System.out.println(a.nomor + " " + b.nomor);
        System.out.println("jumlah akun: " + Akun.jumlahAkun);
        System.out.println("bunga a: " + Akun.bungaTahunan(a.saldo));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { table: { head: ['Jenis anggota', 'Disimpan di', 'Diakses lewat', 'Contoh'], rows: [['Instance', 'Setiap objek', 'objek.anggota', 'nama, saldo'], ['static', 'Class (satu salinan)', 'NamaClass.anggota', 'jumlahAkun, BUNGA'], ['static final', 'Class, tak berubah', 'NamaClass.NAMA', 'Math.PI']] } },
            { h2: 'Urutan inisialisasi' },
            { code: jv`class Contoh {
    static { System.out.println("1. blok static (sekali saat class dimuat)"); }
    int x = inisialisasi("2. inisialisasi atribut");
    { System.out.println("3. blok inisialisasi instance"); }

    Contoh() { System.out.println("4. badan konstruktor"); }

    static int inisialisasi(String pesan) { System.out.println(pesan); return 1; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("-- objek pertama");
        new Contoh();
        System.out.println("-- objek kedua");
        new Contoh();
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Blok static hanya berjalan sekali saat class pertama kali dipakai; sisanya berjalan setiap kali objek dibuat.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Konstruktor memiliki tipe kembalian?', options: ['void', 'Tidak punya', 'Nama class'], answer: 1, why: 'Bila diberi tipe kembalian, ia menjadi method biasa.' }, { q: 'Kapan konstruktor bawaan (tanpa parameter) hilang?', options: ['Saat kita menulis konstruktor lain', 'Tidak pernah', 'Saat memakai static'], answer: 0, why: 'Java hanya membuatkannya jika tidak ada konstruktor sama sekali.' }, { q: 'Atribut static dimiliki oleh...', options: ['Setiap objek', 'Class', 'Method main saja'], answer: 1, why: 'Hanya ada satu salinan untuk seluruh class.' }] },
            { exercise: [['Tambahkan validasi di konstruktor agar ipk di luar 0 sampai 4 melempar IllegalArgumentException.', '<code>if (ipk < 0 || ipk > 4) throw new IllegalArgumentException("ipk tidak valid");</code>'], ['Mengapa method static tidak bisa memakai this?', 'Method static tidak terikat pada objek tertentu sehingga tidak ada objek "saat ini".'], ['Tulis class dengan penghitung id otomatis berurutan dari 1.', 'Pakai static int berikut = 1 dan this.id = berikut++ pada konstruktor.'], ['Berapa kali blok static di Contoh berjalan bila dibuat 100 objek?', 'Sekali.']] },
            { summary: ['Konstruktor menyiapkan objek; overloading dan this(...) memusatkan inisialisasi.', 'this merujuk ke objek saat ini dan membedakan atribut dari parameter.', 'static dimiliki class; static final untuk konstanta.', 'Urutan: blok static, inisialisasi atribut dan blok instance, lalu badan konstruktor.'] },
        ],
        faq: [['Bolehkah konstruktor private?', 'Boleh. Dipakai pada Singleton, kelas utilitas, dan factory method yang mengontrol pembuatan objek.'], ['Apakah final berarti objeknya tidak berubah?', 'Tidak. final pada variabel referensi membuat referensinya tidak bisa diarahkan ke objek lain, tetapi isi objek tetap bisa berubah.'], ['Kapan sebaiknya memakai static?', 'Untuk konstanta, fungsi utilitas tanpa keadaan, dan penghitung milik class. Hindari menyimpan keadaan global yang berubah.']],
        sources: [['Oracle: Providing Constructors for Your Classes', 'https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html'], ['Oracle: Understanding Class Members', 'https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html'], ['Oracle: Initializing Fields', 'https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html'], REF_JLS],
    },

    {
        slug: 'enkapsulasi-java-access-modifier-getter-setter-dan-immutability',
        title: 'Enkapsulasi Java: Access Modifier dan Immutability',
        description: 'Pahami enkapsulasi: private, getter dan setter yang bermakna, validasi, access modifier, package, dan objek immutable, dengan contoh rekening yang menjaga invariannya.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'enkapsulasi', 'access modifier', 'getter setter', 'immutable'], cta: 'none',
        prereq: ['class dan konstruktor'],
        lead: 'Enkapsulasi bukan sekadar membuat atribut private. Tujuannya menjaga <b>invarian</b>, aturan yang harus selalu benar tentang sebuah objek (misalnya saldo tidak boleh negatif), dengan hanya mengizinkan perubahan lewat jalur yang dapat divalidasi.',
        body: [
            { objectives: ['menjelaskan manfaat enkapsulasi dan menyebut empat access modifier', 'merancang class yang menjaga invarian lewat konstruktor dan method', 'membedakan getter/setter yang berguna dari yang hanya formalitas', 'membuat class immutable', 'menghindari kebocoran representasi internal'] },
            { h2: 'Masalah tanpa enkapsulasi' },
            { code: jv`class RekeningRapuh {
    public double saldo;                      // siapa pun dapat mengubah
}

public class Main {
    public static void main(String[] args) {
        RekeningRapuh r = new RekeningRapuh();
        r.saldo = 100_000;
        r.saldo = -5_000_000;                 // tidak ada yang mencegah
        System.out.println("saldo: " + r.saldo);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Saldo negatif tidak masuk akal, tetapi kode di mana pun bisa membuatnya.' },
            { h2: 'Solusi: sembunyikan data, kendalikan perubahan' },
            { code: jv`class Rekening {
    private final String nomor;
    private double saldo;

    Rekening(String nomor, double saldoAwal) {
        if (saldoAwal < 0) throw new IllegalArgumentException("saldo awal tidak boleh negatif");
        this.nomor = nomor;
        this.saldo = saldoAwal;
    }

    public double getSaldo() { return saldo; }
    public String getNomor() { return nomor; }

    public void setor(double jumlah) {
        if (jumlah <= 0) throw new IllegalArgumentException("jumlah setoran harus positif");
        saldo += jumlah;
    }

    public void tarik(double jumlah) {
        if (jumlah <= 0) throw new IllegalArgumentException("jumlah penarikan harus positif");
        if (jumlah > saldo) throw new IllegalStateException("saldo tidak cukup");
        saldo -= jumlah;
    }
}

public class Main {
    public static void main(String[] args) {
        Rekening r = new Rekening("001", 100_000);
        r.setor(50_000);
        r.tarik(30_000);
        System.out.println(r.getSaldo());
        try { r.tarik(1_000_000); }
        catch (IllegalStateException e) { System.out.println("ditolak: " + e.getMessage()); }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Tidak ada setSaldo(). Saldo hanya berubah lewat setor dan tarik, yang menjaga invarian saldo >= 0.' },
            { h2: 'Empat tingkat akses' },
            { table: { head: ['Modifier', 'Class sendiri', 'Package', 'Subclass', 'Dari mana saja'], rows: [['private', 'Ya', 'Tidak', 'Tidak', 'Tidak'], ['(tanpa modifier)', 'Ya', 'Ya', 'Tidak', 'Tidak'], ['protected', 'Ya', 'Ya', 'Ya', 'Tidak'], ['public', 'Ya', 'Ya', 'Ya', 'Ya']] } },
            { callout: 'Mulai dengan akses seketat mungkin (<b>private</b>) dan longgarkan hanya bila perlu. Semakin sedikit yang terbuka, semakin leluasa Anda mengubah isi class tanpa merusak kode lain.', kind: 'good', title: 'Prinsip' },
            { h2: 'Getter dan setter: jangan otomatis' },
            `Membuat getter dan setter untuk setiap atribut sama saja dengan membuat atribut public. Pertimbangkan: apakah nilai ini memang perlu dibaca dari luar? Apakah perlu diubah, dan dengan aturan apa? Sering kali method bermakna seperti <code>setor()</code> lebih baik daripada <code>setSaldo()</code>.`,
            { h2: 'Objek immutable' },
            { code: jv`final class Uang {                       // final: tidak dapat diwarisi
    private final long jumlah;                // tidak dapat berubah setelah dibuat
    private final String mataUang;

    Uang(long jumlah, String mataUang) {
        this.jumlah = jumlah;
        this.mataUang = mataUang;
    }

    Uang tambah(Uang lain) {                  // menghasilkan objek BARU
        if (!mataUang.equals(lain.mataUang)) throw new IllegalArgumentException("mata uang berbeda");
        return new Uang(jumlah + lain.jumlah, mataUang);
    }

    @Override public String toString() { return jumlah + " " + mataUang; }
}

public class Main {
    public static void main(String[] args) {
        Uang a = new Uang(1000, "IDR");
        Uang b = a.tambah(new Uang(500, "IDR"));
        System.out.println(a + " | " + b);     // a tidak berubah
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'String, Integer, dan LocalDate di pustaka standar juga immutable. Objek immutable aman dibagikan dan aman untuk thread.' },
            { h2: 'Bocornya representasi internal' },
            { code: jv`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Kelas {
    private final List<String> peserta = new ArrayList<>();
    void daftar(String nama) { peserta.add(nama); }

    List<String> bocor()   { return peserta; }                            // memberi akses ke daftar asli
    List<String> aman()    { return Collections.unmodifiableList(peserta); }
}

public class Main {
    public static void main(String[] args) {
        Kelas k = new Kelas();
        k.daftar("Ani");
        k.bocor().add("Penyusup");             // mengubah isi internal tanpa lewat daftar()
        System.out.println(k.aman());
        try { k.aman().add("Lain"); }
        catch (UnsupportedOperationException e) { System.out.println("tidak boleh diubah"); }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tujuan utama enkapsulasi?', options: ['Menjaga invarian dan menyembunyikan detail', 'Membuat kode lebih pendek', 'Mempercepat program'], answer: 0, why: 'Perubahan dikendalikan lewat antarmuka yang jelas.' }, { q: 'Modifier yang hanya mengizinkan akses dalam class sendiri?', options: ['private', 'protected', 'public'], answer: 0, why: 'private paling ketat.' }, { q: 'Ciri class immutable?', options: ['Atribut final dan tidak ada setter', 'Semua method static', 'Semua atribut public'], answer: 0, why: 'Keadaannya tidak berubah setelah dibuat.' }] },
            { exercise: [['Rancang class Suhu yang menyimpan derajat Celcius dan menolak nilai di bawah −273,15.', 'Validasi di konstruktor dan setter; sediakan getFahrenheit() yang dihitung.'], ['Apa risiko mengembalikan array internal dari getter?', 'Pemanggil dapat mengubah isi array sehingga invarian rusak. Kembalikan salinan (clone atau Arrays.copyOf).'], ['Sebutkan keuntungan class immutable.', 'Aman dibagi, aman untuk multithread, mudah dipikirkan, cocok sebagai kunci HashMap.'], ['Mengapa class Uang dideklarasikan final?', 'Agar subkelas tidak bisa menambahkan keadaan yang dapat diubah sehingga merusak sifat immutable.']] },
            { summary: ['Enkapsulasi menjaga invarian: sembunyikan data, ubah lewat method yang memvalidasi.', 'Mulai dari private; longgarkan hanya bila perlu.', 'Hindari getter/setter otomatis; pilih method bermakna.', 'Class immutable dan kopi defensif mencegah kebocoran representasi.'] },
        ],
        faq: [['Apakah semua atribut harus private?', 'Praktik umum: ya, kecuali konstanta static final. Pengecualian jarang dan harus disengaja.'], ['Bagaimana dengan record?', 'Record (Java 16+) adalah class immutable ringkas dengan komponen final dan accessor otomatis; cocok untuk data pembawa nilai.'], ['Apa bedanya protected dan package-private?', 'protected juga mengizinkan subclass di package lain, package-private (tanpa modifier) hanya package yang sama.']],
        sources: [['Oracle: Controlling Access to Members of a Class', 'https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html'], ['Oracle: A Strategy for Defining Immutable Objects', 'https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html'], REF_EJ, REF_JLS],
    },

    {
        slug: 'inheritance-java-extends-super-dan-hierarki-class',
        title: 'Inheritance Java: extends, super, dan Hierarki',
        description: 'Pelajari pewarisan di Java: extends, super, urutan konstruktor, overriding, protected, class Object, dan kapan komposisi lebih baik, dengan hierarki pegawai yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'inheritance', 'extends', 'super', 'overriding'], cta: 'none',
        prereq: ['enkapsulasi', 'konstruktor'],
        lead: 'Pewarisan memungkinkan class baru memakai dan memperluas class yang sudah ada. Dipakai tepat, ia menghilangkan duplikasi dan memodelkan hubungan "adalah sebuah". Dipakai berlebihan, ia menghasilkan hierarki kaku yang sulit diubah.',
        body: [
            { objectives: ['membuat subclass dengan extends dan memanggil super', 'memprediksi urutan pemanggilan konstruktor', 'melakukan overriding dengan @Override dan memahami aturannya', 'menjelaskan class Object dan method toString/equals', 'menilai kapan memilih komposisi dibanding pewarisan'] },
            { h2: 'Hubungan "adalah sebuah"' },
            { svg: 'diagram', w: 560, h: 245, label: 'Hierarki pegawai', nodes: [{ id: 'P', x: 280, y: 55, shape: 'class', w: 190, h: 90, t: 'Pegawai', attrs: ['nama', 'gajiPokok'], methods: ['gaji()'] }, { id: 'M', x: 130, y: 190, shape: 'class', w: 190, h: 70, t: 'Manajer', attrs: ['tunjangan'], methods: ['gaji()'] }, { id: 'T', x: 430, y: 190, shape: 'class', w: 190, h: 70, t: 'Teknisi', attrs: ['jamLembur'], methods: ['gaji()'] }], edges: [{ from: 'M', to: 'P', head: 'open', label: 'extends' }, { from: 'T', to: 'P', head: 'open', label: 'extends' }], caption: 'Manajer adalah sebuah Pegawai; ia mewarisi nama dan gajiPokok dan menambah tunjangan.' },
            { code: jv`class Pegawai {
    protected String nama;
    protected double gajiPokok;

    Pegawai(String nama, double gajiPokok) {
        this.nama = nama;
        this.gajiPokok = gajiPokok;
        System.out.println("  konstruktor Pegawai");
    }

    double gaji() { return gajiPokok; }

    @Override public String toString() { return nama + " menerima Rp" + String.format("%.0f", gaji()); }
}

class Manajer extends Pegawai {
    private double tunjangan;

    Manajer(String nama, double gajiPokok, double tunjangan) {
        super(nama, gajiPokok);              // wajib di baris pertama
        this.tunjangan = tunjangan;
        System.out.println("  konstruktor Manajer");
    }

    @Override double gaji() { return super.gaji() + tunjangan; }   // memperluas perilaku induk
}

class Teknisi extends Pegawai {
    private int jamLembur;
    Teknisi(String nama, double gajiPokok, int jamLembur) {
        super(nama, gajiPokok);
        this.jamLembur = jamLembur;
    }
    @Override double gaji() { return gajiPokok + jamLembur * 50_000; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("membuat Manajer:");
        Pegawai m = new Manajer("Rina", 8_000_000, 3_000_000);
        Pegawai t = new Teknisi("Dodi", 5_000_000, 10);
        System.out.println(m);
        System.out.println(t);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Konstruktor induk selalu berjalan lebih dulu. Jika Anda tidak menulis super(...), Java menyisipkan super() tanpa argumen.' },
            { h2: 'Aturan overriding' },
            { ul: ['Gunakan <code>@Override</code>: kompiler akan memberi error bila method tidak benar-benar menimpa (salah ketik nama atau parameter).', 'Nama, parameter, dan (kompatibel) tipe kembalian harus sama dengan method induk.', 'Akses tidak boleh lebih sempit (public tidak bisa menjadi private).', 'Method <code>final</code> tidak bisa ditimpa; class <code>final</code> tidak bisa diwarisi.', 'Method <code>static</code> tidak ditimpa tetapi disembunyikan (hiding).'] },
            { h2: 'Semua class mewarisi Object' },
            { code: jv`class Titik {
    final int x, y;
    Titik(int x, int y) { this.x = x; this.y = y; }
}

class TitikBaik {
    final int x, y;
    TitikBaik(int x, int y) { this.x = x; this.y = y; }
    @Override public boolean equals(Object o) {
        return o instanceof TitikBaik t && t.x == x && t.y == y;
    }
    @Override public int hashCode() { return 31 * x + y; }
    @Override public String toString() { return "(" + x + ", " + y + ")"; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Titik(1, 2).equals(new Titik(1, 2)));          // pakai equals bawaan Object (alamat)
        System.out.println(new TitikBaik(1, 2).equals(new TitikBaik(1, 2)));
        System.out.println(new TitikBaik(3, 4));                               // toString kustom
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Ketika equals ditimpa, hashCode juga harus ditimpa agar objek bekerja benar di HashMap dan HashSet.' },
            { h2: 'Pewarisan atau komposisi?' },
            { w: 'compare', title: 'Pilih yang tepat', tabs: [{ label: 'Pewarisan', html: 'Cocok bila subclass benar-benar <b>jenis</b> dari induk dan dapat dipakai di mana pun induk dipakai (prinsip substitusi Liskov). Contoh: Manajer adalah Pegawai.' }, { label: 'Komposisi', html: 'Cocok bila hubungannya "memiliki" atau sekadar ingin memakai ulang perilaku. Contoh: Mobil <b>memiliki</b> Mesin. Lebih fleksibel dan tidak mengikat ke hierarki. Pedoman klasik: utamakan komposisi dibanding pewarisan.' }] },
            { callout: 'Contoh peringatan: kelas Stack yang mewarisi Vector (di pustaka lama Java) membuka semua method Vector sehingga pengguna dapat menyisip di tengah dan merusak sifat LIFO. Desain yang baik memakai komposisi.', kind: 'warn', title: 'Pelajaran dari pustaka standar' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Kata kunci untuk mewarisi class?', options: ['extends', 'implements', 'inherits'], answer: 0, why: 'implements untuk interface.' }, { q: 'Konstruktor mana yang berjalan lebih dulu saat membuat Manajer?', options: ['Manajer', 'Pegawai (induk)', 'Object saja'], answer: 1, why: 'Induk diinisialisasi sebelum anak.' }, { q: 'Fungsi @Override?', options: ['Mempercepat method', 'Meminta kompiler memeriksa bahwa method benar-benar menimpa', 'Membuat method static'], answer: 1, why: 'Menangkap salah ketik pada tanda tangan method.' }] },
            { exercise: [['Tambahkan class Direktur yang mewarisi Manajer dengan bonus tahunan di gaji.', 'Subclass baru dengan super(...) dan override gaji() yang memanggil super.gaji() + bonus.'], ['Mengapa Java tidak mendukung pewarisan class ganda?', 'Menghindari ambiguitas (masalah berlian) saat dua induk punya method yang sama; kebutuhan itu diselesaikan dengan interface.'], ['Apa yang terjadi bila subclass tidak memanggil super(...) dan induk tidak punya konstruktor tanpa parameter?', 'Error kompilasi: konstruktor induk yang tanpa argumen tidak ditemukan.'], ['Tulis equals dan hashCode untuk class Mahasiswa dengan kunci nim.', 'Bandingkan nim di equals (dengan pemeriksaan tipe) dan hashCode dari nim.hashCode().']] },
            { summary: ['extends mewarisi atribut dan method; super mengakses induk dan memanggil konstruktornya.', 'Konstruktor induk berjalan sebelum anak.', 'Overriding dengan @Override; ikuti aturan akses dan tanda tangan.', 'Pewarisan memodelkan is-a; utamakan komposisi bila hubungannya has-a.'] },
        ],
        faq: [['Apa bedanya overriding dan overloading?', 'Overriding mengganti method induk pada subclass (tanda tangan sama); overloading menyediakan beberapa versi dengan parameter berbeda dalam satu class.'], ['Apakah private ikut diwarisi?', 'Anggota private ada pada objek tetapi tidak dapat diakses langsung oleh subclass; gunakan method yang diwariskan untuk mengaksesnya.'], ['Berapa dalam hierarki yang wajar?', 'Semakin dangkal semakin baik; tiga tingkat sudah patut dipertanyakan.']],
        sources: [REF_INH, ['Java SE API: Object', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html'], REF_EJ, REF_JLS],
    },

    {
        slug: 'polimorfisme-java-overriding-dynamic-dispatch-dan-instanceof',
        title: 'Polimorfisme Java: Overriding dan Dynamic Dispatch',
        description: 'Pahami polimorfisme di Java: tipe deklarasi vs tipe sebenarnya, dynamic dispatch, upcasting dan downcasting, instanceof dengan pola, dan mengapa ia membuat kode mudah diperluas.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'polimorfisme', 'dynamic dispatch', 'upcasting', 'instanceof'], cta: 'none',
        prereq: ['inheritance'],
        lead: 'Polimorfisme berarti "banyak bentuk": satu pemanggilan, perilaku berbeda tergantung jenis objek sebenarnya. Inilah yang membuat kita dapat menambah jenis baru tanpa mengubah kode yang sudah ada.',
        body: [
            { objectives: ['membedakan tipe referensi (deklarasi) dan tipe objek (sebenarnya)', 'menjelaskan dynamic dispatch pada pemanggilan method', 'melakukan upcasting dan downcasting dengan aman', 'memakai instanceof dengan pola', 'menunjukkan bagaimana polimorfisme menghilangkan if/else berdasarkan jenis'] },
            { h2: 'Satu referensi, banyak jenis objek' },
            { code: jv`abstract class Hewan {
    abstract String suara();
    void bersuara() { System.out.println(getClass().getSimpleName() + ": " + suara()); }
}
class Kucing extends Hewan { String suara() { return "meong"; } }
class Anjing extends Hewan { String suara() { return "guk"; } }
class Bebek  extends Hewan { String suara() { return "kwek"; } }

public class Main {
    public static void main(String[] args) {
        Hewan[] kandang = { new Kucing(), new Anjing(), new Bebek() };
        for (Hewan h : kandang) {
            h.bersuara();                 // method yang dijalankan ditentukan oleh jenis objek sebenarnya
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Perulangan tidak peduli jenis hewannya. Menambah class Sapi tidak mengubah perulangan sama sekali.' },
            { h2: 'Dynamic dispatch' },
            `Java memilih <b>versi method</b> pada saat program berjalan berdasarkan kelas objek yang sesungguhnya, bukan tipe variabelnya. Sebaliknya, <b>atribut</b> dan method <b>static</b> ditentukan oleh tipe variabel pada saat kompilasi.`,
            { code: jv`class Induk {
    String nama = "atribut Induk";
    String siapa() { return "method Induk"; }
    static String stat() { return "static Induk"; }
}
class Anak extends Induk {
    String nama = "atribut Anak";
    @Override String siapa() { return "method Anak"; }
    static String stat() { return "static Anak"; }
}

public class Main {
    public static void main(String[] args) {
        Induk x = new Anak();             // tipe deklarasi Induk, objek sebenarnya Anak
        System.out.println(x.siapa());    // method: mengikuti objek (Anak)
        System.out.println(x.nama);       // atribut: mengikuti tipe variabel (Induk)
        System.out.println(Induk.stat()); // static: mengikuti tipe, bukan objek
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Hanya method instance yang polimorfik. Inilah mengapa atribut sebaiknya private dan diakses lewat method.' },
            { svg: 'flow', label: 'Cara JVM memilih method', steps: [{ t: 'x.siapa()', d: 'kompiler memeriksa: Induk punya siapa()?' }, { t: 'Saat dijalankan', d: 'JVM melihat objek di balik x: Anak' }, { t: 'Cari dari bawah', d: 'Anak.siapa() ada → jalankan' }] },
            { h2: 'Upcasting dan downcasting' },
            { code: jv`class Hewan { void makan() { System.out.println("makan"); } }
class Burung extends Hewan { void terbang() { System.out.println("terbang"); } }

public class Main {
    public static void main(String[] args) {
        Hewan h = new Burung();          // upcasting: otomatis, selalu aman
        h.makan();
        // h.terbang();                  // error kompilasi: tipe Hewan tidak punya terbang()

        Burung b = (Burung) h;           // downcasting: eksplisit, diperiksa saat berjalan
        b.terbang();

        Hewan lain = new Hewan();
        try {
            Burung salah = (Burung) lain;
        } catch (ClassCastException e) {
            System.out.println("ClassCastException: Hewan bukan Burung");
        }

        if (h instanceof Burung bb) {    // instanceof dengan pola: periksa dan cast sekaligus
            bb.terbang();
        }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Manfaat: tanpa rantai if/else' },
            { code: jv`import java.util.List;

interface Bentuk { double luas(); }
record Lingkaran(double r) implements Bentuk { public double luas() { return Math.PI * r * r; } }
record Persegi(double s)   implements Bentuk { public double luas() { return s * s; } }
record Segitiga(double a, double t) implements Bentuk { public double luas() { return 0.5 * a * t; } }

public class Main {
    static double totalLuas(List<Bentuk> daftar) {
        double total = 0;
        for (Bentuk b : daftar) total += b.luas();      // tidak ada if (b instanceof Lingkaran) ...
        return total;
    }

    public static void main(String[] args) {
        List<Bentuk> daftar = List.of(new Lingkaran(1), new Persegi(2), new Segitiga(3, 4));
        System.out.printf("%.3f%n", totalLuas(daftar));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Menambah bentuk baru cukup membuat record baru yang mengimplementasikan Bentuk. totalLuas tidak perlu diubah. Ini yang disebut prinsip open/closed.' },
            { callout: 'Bila kode Anda penuh <code>if (x instanceof A) ... else if (x instanceof B) ...</code>, itu tanda bahwa perilaku seharusnya menjadi method yang ditimpa pada masing-masing class.', kind: 'info', title: 'Tanda desain' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada Induk x = new Anak(), method siapa() yang dijalankan ditentukan oleh...', options: ['Tipe variabel (Induk)', 'Objek sebenarnya (Anak)', 'Urutan penulisan'], answer: 1, why: 'Itulah dynamic dispatch.' }, { q: 'Downcasting yang salah menyebabkan...', options: ['Error kompilasi', 'ClassCastException saat berjalan', 'null'], answer: 1, why: 'Diperiksa saat runtime.' }, { q: 'Atribut yang sama namanya pada Induk dan Anak diakses menurut...', options: ['Objek sebenarnya', 'Tipe variabel', 'Acak'], answer: 1, why: 'Atribut tidak polimorfik.' }] },
            { exercise: [['Tambahkan class Sapi ke contoh Hewan. Apa yang perlu diubah di Main?', 'Tidak ada selain menambahkannya ke larik; perulangan tetap sama.'], ['Prediksi keluaran: Induk x = new Anak(); x.stat() (static) pada contoh dynamic dispatch.', 'Memanggil static lewat instance mengikuti tipe variabel: "static Induk".'], ['Mengapa upcasting tidak memerlukan casting eksplisit?', 'Setiap objek Anak pasti juga sebuah Induk, jadi konversi selalu aman.'], ['Kapan instanceof dengan pola tetap wajar dipakai?', 'Saat berurusan dengan data dari luar desain kita (misalnya hasil parsing) atau pada sealed hierarchy dengan switch pola.']] },
            { summary: ['Polimorfisme: satu pemanggilan, perilaku mengikuti objek sebenarnya.', 'Method instance dipilih saat runtime; atribut dan static mengikuti tipe variabel.', 'Upcasting otomatis; downcasting eksplisit dan dapat gagal (gunakan instanceof).', 'Polimorfisme menghilangkan rantai if/else dan memudahkan perluasan.'] },
        ],
        faq: [['Apa bedanya polimorfisme kompilasi dan runtime?', 'Overloading adalah polimorfisme saat kompilasi (statis); overriding adalah polimorfisme saat berjalan (dinamis).'], ['Apakah polimorfisme memperlambat program?', 'Dispatch dinamis berbiaya kecil dan JIT sering menghilangkannya lewat inlining; jarang menjadi masalah.'], ['Apakah interface juga polimorfik?', 'Ya. Variabel bertipe interface dapat menunjuk objek class mana pun yang mengimplementasikannya.']],
        sources: [['Oracle: Polymorphism (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html'], ['dev.java: Pattern Matching for instanceof', 'https://dev.java/learn/pattern-matching/'], REF_EJ, REF_JLS],
    },
];
