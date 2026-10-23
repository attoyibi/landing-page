const D = '2026-10-23';
const C = 'PBO dengan Java';
const jv = String.raw;

const REF_JLS = ['The Java Language Specification', 'https://docs.oracle.com/javase/specs/jls/se21/html/index.html'];
const REF_EJ = ['Joshua Bloch, Effective Java (edisi ke-3, Addison-Wesley, 2018)', ''];
const REF_API = ['Java SE API Documentation', 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html'];
const REF_GOF = ['Gamma, Helm, Johnson, Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software (Addison-Wesley, 1994)', ''];
const REF_MARTIN = ['Robert C. Martin, Clean Architecture (Pearson, 2017), bagian prinsip SOLID', ''];

export default [
    {
        slug: 'lambda-dan-stream-api-java-pemrograman-fungsional',
        title: 'Lambda dan Stream API Java: Gaya Fungsional',
        description: 'Pelajari lambda, functional interface, method reference, dan Stream API di Java: filter, map, reduce, collect, groupingBy, serta kapan stream membantu dan kapan merugikan.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'lambda', 'stream', 'functional interface', 'collectors'], cta: 'none',
        prereq: ['interface', 'collections', 'generics dasar'],
        lead: 'Sejak Java 8, Java dapat mengekspresikan perilaku sebagai nilai (lambda) dan memproses koleksi dengan alur deklaratif (Stream). Hasilnya kode yang menyatakan apa yang diinginkan, bukan bagaimana mengulanginya langkah demi langkah.',
        body: [
            { objectives: ['menulis lambda dan method reference', 'mengenali functional interface standar (Predicate, Function, Consumer, Supplier)', 'membangun pipeline stream: filter, map, sorted, limit', 'memakai terminal operation: collect, reduce, count, anyMatch', 'mengelompokkan data dengan Collectors.groupingBy dan menilai kapan stream tepat dipakai'] },
            { h2: 'Lambda: fungsi sebagai nilai' },
            `Lambda adalah implementasi ringkas dari <b>functional interface</b>, yaitu interface dengan satu method abstrak.`,
            { code: jv`import java.util.*;
import java.util.function.*;

public class Main {
    public static void main(String[] args) {
        // cara lama: kelas anonim
        Comparator<String> lama = new Comparator<>() {
            public int compare(String a, String b) { return a.length() - b.length(); }
        };
        // lambda
        Comparator<String> baru = (a, b) -> a.length() - b.length();
        // method reference
        Comparator<String> ref = Comparator.comparingInt(String::length);

        List<String> kata = new ArrayList<>(List.of("semangka", "apel", "kiwi", "durian"));
        kata.sort(baru);
        System.out.println(kata);

        Predicate<String> panjang = s -> s.length() > 4;
        Function<String, Integer> hitung = String::length;
        Consumer<String> cetak = s -> System.out.println("-> " + s);
        Supplier<String> pembuat = () -> "dibuat saat dibutuhkan";
        BiFunction<Integer, Integer, Integer> tambah = (a, b) -> a + b;

        System.out.println(panjang.test("durian") + " " + hitung.apply("kiwi") + " " + tambah.apply(2, 3));
        cetak.accept(pembuat.get());
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { table: { head: ['Interface', 'Method', 'Makna', 'Contoh lambda'], rows: [['Predicate<T>', 'boolean test(T)', 'Uji kondisi', 's -> s.isEmpty()'], ['Function<T,R>', 'R apply(T)', 'Ubah T menjadi R', 's -> s.length()'], ['Consumer<T>', 'void accept(T)', 'Pakai nilai (efek samping)', 's -> System.out.println(s)'], ['Supplier<T>', 'T get()', 'Hasilkan nilai', '() -> new ArrayList<>()'], ['Comparator<T>', 'int compare(T,T)', 'Bandingkan dua nilai', '(a,b) -> a - b']] } },
            { h2: 'Stream: pipeline tiga tahap' },
            { svg: 'flow', label: 'Pipeline stream', steps: [{ t: 'Sumber', d: 'list.stream(), Stream.of, IntStream.range' }, { t: 'Operasi antara', d: 'filter, map, sorted, distinct, limit (malas)' }, { t: 'Operasi terminal', d: 'collect, count, reduce, forEach (memicu eksekusi)' }], caption: 'Operasi antara bersifat malas: tidak ada yang berjalan sampai ada operasi terminal.' },
            { code: jv`import java.util.*;
import java.util.stream.*;

record Mahasiswa(String nama, String jurusan, double ipk) { }

public class Main {
    public static void main(String[] args) {
        List<Mahasiswa> data = List.of(
            new Mahasiswa("Ani", "TI", 3.8), new Mahasiswa("Budi", "SI", 3.1),
            new Mahasiswa("Citra", "TI", 3.5), new Mahasiswa("Dewi", "SI", 3.9),
            new Mahasiswa("Eko", "TI", 2.9));

        List<String> berprestasi = data.stream()
            .filter(m -> m.ipk() >= 3.5)
            .sorted(Comparator.comparingDouble(Mahasiswa::ipk).reversed())
            .map(Mahasiswa::nama)
            .collect(Collectors.toList());
        System.out.println(berprestasi);

        double rata = data.stream().mapToDouble(Mahasiswa::ipk).average().orElse(0);
        System.out.printf("rata-rata %.2f%n", rata);

        System.out.println(data.stream().anyMatch(m -> m.ipk() < 3.0));
        System.out.println(data.stream().map(Mahasiswa::jurusan).distinct().count());

        Map<String, List<String>> perJurusan = data.stream()
            .collect(Collectors.groupingBy(Mahasiswa::jurusan, TreeMap::new,
                     Collectors.mapping(Mahasiswa::nama, Collectors.toList())));
        System.out.println(perJurusan);

        Map<String, Double> rataPerJurusan = data.stream()
            .collect(Collectors.groupingBy(Mahasiswa::jurusan, TreeMap::new, Collectors.averagingDouble(Mahasiswa::ipk)));
        rataPerJurusan.forEach((j, r) -> System.out.printf("%s: %.2f%n", j, r));

        int jumlahKuadrat = IntStream.rangeClosed(1, 5).map(x -> x * x).sum();
        System.out.println(jumlahKuadrat);
        System.out.println(Stream.of(1, 2, 3, 4).reduce(0, Integer::sum));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Malas dan satu kali pakai' },
            { code: jv`import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        Stream<Integer> s = Stream.of(1, 2, 3, 4, 5, 6)
            .peek(x -> System.out.println("filter melihat " + x))
            .filter(x -> x % 2 == 0)
            .peek(x -> System.out.println("  lolos " + x));
        System.out.println("pipeline dibuat, belum ada yang berjalan");
        System.out.println("hasil: " + s.limit(2).collect(Collectors.toList()));   // berhenti setelah dua lolos

        try { s.count(); }
        catch (IllegalStateException e) { System.out.println("stream hanya dapat dipakai sekali"); }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Setelah dua elemen genap terkumpul, pemrosesan berhenti (short-circuit): angka 5 dan 6 tidak pernah diperiksa.' },
            { w: 'compare', title: 'Stream atau for biasa?', tabs: [{ label: 'Stream cocok', html: 'Transformasi data berurutan (filter-map-collect), pengelompokan, agregasi. Hasilnya lebih ringkas dan menyatakan maksud.' }, { label: 'for biasa cocok', html: 'Logika kompleks dengan banyak variabel yang berubah, pemakaian indeks, break/continue, atau penanganan exception checked di tengah. Memaksakan stream membuat kode lebih sulit dibaca.' }] },
            { callout: 'Lambda tidak boleh mengubah variabel lokal luar (harus efektif final). Hindari efek samping di dalam <code>map</code>/<code>filter</code>; gunakan operasi terminal seperti <code>collect</code> untuk membentuk hasil. <code>parallelStream()</code> bukan jalan pintas cepat: ia membantu hanya untuk pekerjaan CPU yang besar dan bebas efek samping.', kind: 'warn', title: 'Peringatan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Functional interface adalah interface dengan...', options: ['Satu method abstrak', 'Tepat dua method', 'Tanpa method'], answer: 0, why: 'Lambda mengimplementasikan method abstrak tunggal itu.' }, { q: 'Kapan pipeline stream benar-benar berjalan?', options: ['Saat dibuat', 'Saat operasi terminal dipanggil', 'Saat kompilasi'], answer: 1, why: 'Operasi antara bersifat malas.' }, { q: 'String::length adalah...', options: ['Method reference', 'Atribut', 'Konstruktor'], answer: 0, why: 'Setara s -> s.length().' }] },
            { exercise: [['Dari list angka 1..20, ambil kuadrat dari yang genap dan kumpulkan ke List.', '<code>IntStream.rangeClosed(1,20).filter(x -> x % 2 == 0).map(x -> x*x).boxed().collect(Collectors.toList())</code>'], ['Hitung jumlah kata yang diawali huruf "a" dari List<String>.', '<code>kata.stream().filter(s -> s.startsWith("a")).count()</code>'], ['Mengapa variabel lokal yang dipakai lambda harus efektif final?', 'Lambda menangkap salinan nilai; mengubahnya membuat salinan dan aslinya tidak sinkron, sehingga bahasa melarangnya.'], ['Apa beda map dan flatMap?', 'map mengubah satu elemen menjadi satu elemen; flatMap mengubah satu elemen menjadi stream lalu meratakannya.']] },
            { summary: ['Lambda mengimplementasikan functional interface; method reference menyingkatnya.', 'Stream: sumber → operasi antara (malas) → operasi terminal.', 'Collectors.groupingBy untuk pengelompokan dan agregasi.', 'Gunakan stream untuk transformasi data, for biasa untuk logika rumit.'] },
        ],
        faq: [['Apakah stream lebih cepat dari for?', 'Tidak otomatis. Untuk data kecil keduanya setara; stream menang di keterbacaan, bukan kecepatan.'], ['Apa itu Optional?', 'Pembungkus untuk nilai yang mungkin tidak ada, mengurangi null. Banyak terminal operation (findFirst, max) mengembalikannya.'], ['Bagaimana men-debug stream?', 'Gunakan peek sementara atau pecah pipeline menjadi variabel antara.']],
        sources: [['Oracle: Lambda Expressions (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html'], ['Oracle: Aggregate Operations (Streams)', 'https://docs.oracle.com/javase/tutorial/collections/streams/index.html'], ['Java SE API: java.util.stream', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/package-summary.html'], REF_EJ],
    },

    {
        slug: 'string-stringbuilder-dan-text-java-immutability-dan-performa',
        title: 'String dan StringBuilder Java: Immutability dan Performa',
        description: 'Pahami String di Java: immutable, string pool, == vs equals, metode penting, StringBuilder untuk perulangan, format, text block, dan regular expression dasar.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'String', 'StringBuilder', 'string pool', 'regex'], cta: 'none',
        prereq: ['tipe data', 'method'],
        lead: 'String adalah tipe yang paling sering dipakai dan paling sering disalahpahami. Mengerti bahwa String immutable menjelaskan tiga hal sekaligus: mengapa == berbahaya, mengapa menyambung di perulangan lambat, dan mengapa String aman sebagai kunci HashMap.',
        body: [
            { objectives: ['menjelaskan immutability dan string pool', 'membedakan == dan equals pada String', 'memakai metode String yang paling sering dipakai', 'memilih StringBuilder untuk penyambungan berulang', 'memakai format, text block, dan regex dasar'] },
            { h2: 'String itu immutable' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        String s = "java";
        String t = s.toUpperCase();         // menghasilkan objek BARU
        s.concat(" modern");                // hasilnya dibuang; s tidak berubah
        System.out.println(s + " " + t);

        String a = "halo";
        String b = "halo";                   // literal sama dibagi lewat string pool
        String c = new String("halo");       // objek terpisah di heap
        System.out.println((a == b) + " " + (a == c) + " " + a.equals(c) + " " + (a == c.intern()));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Selalu gunakan equals untuk membandingkan isi String. == hanya kebetulan benar untuk literal yang berbagi pool.' },
            { h2: 'Metode yang sering dipakai' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        String s = "  Belajar Java Itu Menyenangkan  ";
        System.out.println("[" + s.trim() + "] panjang=" + s.length());
        String p = s.trim();
        System.out.println(p.toLowerCase() + " | " + p.charAt(0) + " | " + p.indexOf("Java"));
        System.out.println(p.substring(8, 12) + " | " + p.replace("Itu", "Sangat"));
        System.out.println(p.contains("Java") + " " + p.startsWith("Bel") + " " + p.isBlank() + " " + "".isEmpty());
        System.out.println(String.join("-", "2026", "10", "23"));
        for (String kata : p.split("\\s+")) System.out.print("<" + kata + ">");
        System.out.println();
        System.out.println("abc".compareTo("abd") + " " + "Apel".equalsIgnoreCase("apel"));
        System.out.println("ha".repeat(3) + " " + "madam".contentEquals(new StringBuilder("madam").reverse()));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Menyambung di perulangan: StringBuilder' },
            `Setiap <code>+=</code> pada String membuat objek baru dan menyalin seluruh isi lama, sehingga n penyambungan berbiaya O(n²). StringBuilder menyimpan buffer yang bisa diubah, jadi O(n).`,
            { code: jv`public class Main {
    static long ukur(Runnable r) {
        long mulai = System.nanoTime();
        r.run();
        return (System.nanoTime() - mulai) / 1_000_000;
    }

    public static void main(String[] args) {
        int n = 30_000;
        long ms1 = ukur(() -> { String s = ""; for (int i = 0; i < n; i++) s += "x"; });
        long ms2 = ukur(() -> { StringBuilder sb = new StringBuilder(); for (int i = 0; i < n; i++) sb.append("x"); sb.toString(); });
        System.out.println("String += lebih lambat dari StringBuilder: " + (ms1 > ms2));

        StringBuilder sb = new StringBuilder("Java");
        sb.append(" 21").insert(0, ">> ").reverse().reverse().setCharAt(3, 'j');
        System.out.println(sb + " panjang " + sb.length());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Pengukuran waktu berbeda di setiap mesin, tetapi arahnya konsisten: penyambungan String berulang jauh lebih lambat.' },
            { callout: 'Kompiler memang mengoptimalkan <code>a + b + c</code> dalam satu ekspresi, tetapi tidak dapat mengoptimalkan penyambungan yang tersebar di tiap iterasi perulangan. Di sanalah StringBuilder dibutuhkan.', kind: 'info', title: 'Catatan' },
            { h2: 'Format dan text block' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        String nama = "Ani"; int umur = 20; double ipk = 3.756;
        System.out.println(String.format("%s berumur %d tahun, IPK %.2f", nama, umur, ipk));
        System.out.printf("|%-8s|%8s|%05d|%n", "kiri", "kanan", 42);
        System.out.println("%s lulus dengan %.1f%%".formatted(nama, 95.5));

        String json = """
            {
              "nama": "%s",
              "umur": %d
            }
            """.formatted(nama, umur);
        System.out.print(json);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Text block (""") memudahkan teks multibaris tanpa karakter escape. Jangan gunakan format %n sembarangan; %n adalah pemisah baris sesuai platform.' },
            { h2: 'Regular expression dasar' },
            { code: jv`import java.util.regex.*;

public class Main {
    public static void main(String[] args) {
        String teks = "Hubungi kami: info@contoh.id atau admin@sekolah.sch.id, telp 0812-3456-7890.";
        Pattern email = Pattern.compile("[\\w.]+@[\\w.]+\\.[a-z]{2,}");
        Matcher m = email.matcher(teks);
        while (m.find()) System.out.println("email: " + m.group());

        System.out.println("0812-3456-7890".matches("\\d{4}-\\d{4}-\\d{4}"));
        System.out.println("a1b22c333".replaceAll("\\d+", "#"));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { w: 'regex', title: 'Coba regular expression', desc: 'Ubah pola dan teks untuk melihat bagian yang cocok.', pattern: '[\w.]+@[\w.]+\.[a-z]{2,}', text: 'Hubungi info@contoh.id atau admin@sekolah.sch.id untuk informasi.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa String disebut immutable?', options: ['Isinya tidak bisa diubah setelah dibuat', 'Tidak bisa dibandingkan', 'Selalu kosong'], answer: 0, why: 'Operasi seperti toUpperCase menghasilkan objek baru.' }, { q: 'Cara aman membandingkan isi dua String?', options: ['==', 'equals()', 'compare()'], answer: 1, why: '== membandingkan referensi.' }, { q: 'Untuk menyambung ribuan potongan teks dalam perulangan, pakai...', options: ['String +=', 'StringBuilder', 'char[]'], answer: 1, why: 'Menghindari salinan berulang.' }] },
            { exercise: [['Tulis method yang memeriksa apakah sebuah String adalah palindrom (abaikan huruf besar-kecil).', 'Bandingkan dengan kebalikannya: <code>new StringBuilder(s).reverse().toString().equalsIgnoreCase(s)</code>'], ['Hitung jumlah huruf vokal pada String.', 'Telusuri dengan charAt dan periksa dengan "aeiou".indexOf(c) >= 0 setelah lowercase.'], ['Mengapa StringBuffer ada selain StringBuilder?', 'StringBuffer tersinkronisasi (aman thread) tetapi lebih lambat; StringBuilder adalah pilihan umum untuk satu thread.'], ['Format angka 1234567.891 dengan dua desimal.', '<code>String.format("%,.2f", 1234567.891)</code> (pemisah ribuan tergantung locale).']] },
            { summary: ['String immutable; operasi menghasilkan objek baru.', 'Bandingkan isi dengan equals, bukan ==.', 'StringBuilder untuk penyambungan berulang.', 'format, text block, dan regex melengkapi pemrosesan teks.'] },
        ],
        faq: [['Apa itu string pool?', 'Area memori tempat JVM menyimpan literal String unik agar dapat dibagi, menghemat memori.'], ['Mengapa String aman sebagai kunci HashMap?', 'Karena immutable, hashCode-nya tidak berubah.'], ['Apakah char dan String bisa dibandingkan dengan ==?', 'char (primitif) bisa dengan ==; String harus dengan equals.']],
        sources: [['Oracle: Strings (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/data/strings.html'], ['Java SE API: String', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html'], ['Oracle: Regular Expressions', 'https://docs.oracle.com/javase/tutorial/essential/regex/'], REF_EJ],
    },

    {
        slug: 'file-io-java-nio-path-files-dan-pembacaan-data',
        title: 'File I/O Java: Path, Files, dan Pembacaan Data',
        description: 'Baca dan tulis berkas di Java dengan java.nio.file: Path, Files, try-with-resources, BufferedReader, penanganan encoding, dan pengolahan CSV sederhana secara aman.',
        date: D, category: C, level: 'Menengah', tags: ['Java', 'file I/O', 'NIO', 'Path', 'CSV'], cta: 'none',
        prereq: ['exception handling', 'String', 'collections'],
        lead: 'Program yang tidak bisa menyimpan dan membaca data hanya berguna selama berjalan. API modern java.nio.file (Path dan Files) menggantikan banyak kode lama dengan metode singkat dan aman, asalkan kita memahami encoding dan penutupan resource.',
        body: [
            { objectives: ['membedakan Path dan Files serta operasi dasarnya', 'membaca dan menulis berkas teks dengan encoding UTF-8', 'memproses berkas besar baris demi baris tanpa memuat seluruhnya', 'menangani IOException dengan try-with-resources', 'membaca dan menulis CSV sederhana'] },
            { h2: 'Path dan Files' },
            { code: jv`import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        Path dir = Files.createTempDirectory("latihan");          // folder sementara
        Path berkas = dir.resolve("catatan.txt");                  // menggabungkan path

        Files.writeString(berkas, "baris satu\nbaris dua\n", StandardCharsets.UTF_8);
        Files.writeString(berkas, "baris tiga\n", StandardOpenOption.APPEND);   // menambah di akhir

        System.out.println(Files.exists(berkas) + " " + Files.size(berkas) + " byte");
        List<String> baris = Files.readAllLines(berkas, StandardCharsets.UTF_8);
        System.out.println(baris);
        System.out.println(berkas.getFileName() + " di dalam folder bernama latihan? " + berkas.getParent().getFileName().toString().startsWith("latihan"));

        Files.delete(berkas);
        Files.delete(dir);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Path hanyalah representasi alamat; Files melakukan operasinya (baca, tulis, hapus, salin).' },
            { h2: 'Berkas besar: baca per baris' },
            `<code>readAllLines</code> memuat semuanya ke memori. Untuk berkas besar, baca bertahap dengan <code>BufferedReader</code> atau <code>Files.lines</code> (stream malas) dan <b>tutup</b> sumbernya.`,
            { code: jv`import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) throws IOException {
        Path berkas = Files.createTempFile("log", ".txt");
        try (BufferedWriter w = Files.newBufferedWriter(berkas, StandardCharsets.UTF_8)) {
            for (int i = 1; i <= 5; i++) {
                w.write((i % 2 == 0 ? "ERROR" : "INFO") + " kejadian " + i);
                w.newLine();
            }
        }                                                          // otomatis ditutup

        int error = 0;
        try (BufferedReader r = Files.newBufferedReader(berkas, StandardCharsets.UTF_8)) {
            String baris;
            while ((baris = r.readLine()) != null) if (baris.startsWith("ERROR")) error++;
        }
        System.out.println("jumlah ERROR: " + error);

        try (Stream<String> s = Files.lines(berkas)) {            // stream wajib ditutup
            System.out.println(s.filter(l -> l.contains("INFO")).count() + " baris INFO");
        }
        Files.delete(berkas);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { callout: 'Selalu sebutkan <b>encoding</b> (UTF-8) saat membaca atau menulis teks. Bergantung pada pengaturan bawaan sistem membuat program berperilaku berbeda di Windows dan Linux, dan karakter seperti é atau huruf non-Latin bisa rusak.', kind: 'warn', title: 'Encoding' },
            { h2: 'Contoh: mengolah CSV' },
            { code: jv`import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;

record Nilai(String nama, int uts, int uas) {
    double akhir() { return 0.4 * uts + 0.6 * uas; }
}

public class Main {
    static Nilai urai(String baris) {
        String[] kolom = baris.split(",");
        return new Nilai(kolom[0].trim(), Integer.parseInt(kolom[1].trim()), Integer.parseInt(kolom[2].trim()));
    }

    public static void main(String[] args) throws IOException {
        Path csv = Files.createTempFile("nilai", ".csv");
        Files.write(csv, List.of("nama,uts,uas", "Ani,80,90", "Budi,70,65", "Citra,95,88", "tidak,valid"));

        List<Nilai> daftar = new ArrayList<>();
        List<String> gagal = new ArrayList<>();
        for (String baris : Files.readAllLines(csv).stream().skip(1).toList()) {     // lewati header
            try { daftar.add(urai(baris)); }
            catch (RuntimeException e) { gagal.add(baris); }                        // data kotor dicatat, bukan menghentikan program
        }
        daftar.stream().sorted(Comparator.comparingDouble(Nilai::akhir).reversed())
              .forEach(n -> System.out.printf("%-6s %.1f%n", n.nama(), n.akhir()));
        System.out.println("baris bermasalah: " + gagal);
        Files.delete(csv);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Untuk CSV sungguhan dengan koma dalam tanda kutip, gunakan pustaka seperti Apache Commons CSV, bukan split(",").' },
            { h2: 'Kelas lama yang sering ditemui' },
            { table: { head: ['Kebutuhan', 'Cara modern', 'Sering ditemui di kode lama'], rows: [['Representasi lokasi berkas', 'Path, Paths.get / Path.of', 'java.io.File'], ['Baca seluruh isi kecil', 'Files.readString / readAllLines', 'FileReader + BufferedReader'], ['Tulis teks', 'Files.writeString / newBufferedWriter', 'FileWriter / PrintWriter'], ['Telusuri folder', 'Files.walk / Files.list', 'File.listFiles']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa memakai try-with-resources pada pembacaan berkas?', options: ['Menutup berkas otomatis walau ada error', 'Agar lebih cepat', 'Wajib oleh JVM'], answer: 0, why: 'Menghindari kebocoran file handle.' }, { q: 'Untuk berkas berukuran gigabyte, pilih...', options: ['readAllLines', 'Membaca per baris dengan BufferedReader atau Files.lines', 'readString'], answer: 1, why: 'Tidak memuat semuanya ke memori.' }, { q: 'Mengapa perlu menyebut UTF-8?', options: ['Agar konsisten lintas platform', 'Agar berkas kecil', 'Tidak perlu'], answer: 0, why: 'Encoding bawaan berbeda antar sistem.' }] },
            { exercise: [['Tulis program yang menghitung jumlah baris pada sebuah berkas teks.', 'Files.lines(path).count() dalam try-with-resources.'], ['Salin berkas A ke B tanpa menimpa jika B sudah ada.', '<code>Files.copy(a, b)</code> melempar FileAlreadyExistsException bila B ada, kecuali ditambah REPLACE_EXISTING.'], ['Apa bedanya Path.of("a/b").resolve("c") dan Path.of("a/b").resolveSibling("c")?', 'resolve menambah di dalam: a/b/c; resolveSibling menggantikan elemen terakhir: a/c.'], ['Mengapa membaca baris tidak boleh mengasumsikan semuanya valid?', 'Data luar dapat rusak; tangani baris buruk (catat atau lewati) agar satu baris tidak menghentikan seluruh proses.']] },
            { summary: ['Path menyatakan alamat; Files melakukan operasinya.', 'Gunakan try-with-resources dan sebutkan encoding UTF-8.', 'Berkas besar: baca bertahap, bukan sekaligus.', 'Waspadai data kotor dan batasan split untuk CSV.'] },
        ],
        faq: [['Bagaimana menulis objek ke berkas?', 'Gunakan format teks terstruktur seperti JSON (pustaka Jackson atau Gson). Serialisasi bawaan Java (ObjectOutputStream) kurang disarankan karena masalah keamanan dan kompatibilitas.'], ['Bagaimana cara melihat folder kerja?', 'Path.of("").toAbsolutePath() atau System.getProperty("user.dir").'], ['Apa bedanya stream byte dan karakter?', 'InputStream/OutputStream bekerja dengan byte; Reader/Writer dengan karakter dan encoding.']],
        sources: [['Oracle: Basic I/O (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/essential/io/index.html'], ['Java SE API: java.nio.file.Files', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html'], ['dev.java: Reading and Writing Files', 'https://dev.java/learn/java-io/'], REF_EJ],
    },

    {
        slug: 'prinsip-solid-java-lima-aturan-desain-class-yang-baik',
        title: 'Prinsip SOLID di Java: Lima Aturan Desain Class',
        description: 'Pelajari lima prinsip SOLID dengan kode Java sebelum dan sesudah refactoring: SRP, OCP, LSP, ISP, DIP, serta kapan prinsip ini berlebihan.',
        date: D, category: C, level: 'Lanjut', tags: ['Java', 'SOLID', 'desain', 'refactoring', 'clean code'], cta: 'none',
        prereq: ['inheritance', 'interface', 'polimorfisme'],
        lead: 'Fitur PBO memberi alat; SOLID memberi arahan memakainya. Lima prinsip ini muncul dari pengalaman bertahun-tahun merawat perangkat lunak besar: bagaimana membuat kode mudah diubah tanpa merusak yang lain. Kita pelajari masing-masing lewat contoh yang buruk lalu diperbaiki.',
        body: [
            { objectives: ['menyebut dan menjelaskan lima prinsip SOLID', 'mengenali pelanggaran masing-masing dalam kode', 'melakukan refactoring dengan interface dan komposisi', 'menimbang manfaat dan biaya prinsip desain'] },
            { w: 'cards', title: 'Lima prinsip sekilas (ketuk kartu)', items: [{ tag: 'S', front: 'Single Responsibility', backTag: 'Inti', back: 'Satu class, satu alasan untuk berubah.' }, { tag: 'O', front: 'Open/Closed', backTag: 'Inti', back: 'Terbuka untuk perluasan, tertutup untuk perubahan: tambah perilaku dengan kode baru, bukan mengubah kode lama.' }, { tag: 'L', front: 'Liskov Substitution', backTag: 'Inti', back: 'Subclass harus dapat dipakai di mana pun induknya dipakai tanpa merusak kebenaran.' }, { tag: 'I', front: 'Interface Segregation', backTag: 'Inti', back: 'Banyak interface kecil lebih baik daripada satu interface gemuk.' }, { tag: 'D', front: 'Dependency Inversion', backTag: 'Inti', back: 'Bergantunglah pada abstraksi (interface), bukan implementasi konkret.' }] },
            { h2: 'S: Single Responsibility' },
            { code: jv`// SEBELUM: satu class melakukan tiga hal (perhitungan, tampilan, penyimpanan)
class LaporanGajiBuruk {
    double hitungGaji(double pokok, double tunjangan) { return pokok + tunjangan; }
    String formatTeks(String nama, double gaji) { return nama + ": Rp" + String.format("%.0f", gaji); }
    void simpan(String teks) { System.out.println("[disimpan] " + teks); }
}

// SESUDAH: tiap class punya satu alasan berubah
class KalkulatorGaji { double hitung(double pokok, double tunjangan) { return pokok + tunjangan; } }
class PemformatLaporan { String format(String nama, double gaji) { return nama + ": Rp" + String.format("%.0f", gaji); } }
class PenyimpanLaporan { void simpan(String teks) { System.out.println("[disimpan] " + teks); } }

public class Main {
    public static void main(String[] args) {
        double gaji = new KalkulatorGaji().hitung(5_000_000, 1_000_000);
        String teks = new PemformatLaporan().format("Ani", gaji);
        new PenyimpanLaporan().simpan(teks);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Bila format laporan berubah, hanya PemformatLaporan yang disentuh; rumus gaji dan penyimpanan tetap aman.' },
            { h2: 'O: Open/Closed' },
            { code: jv`import java.util.List;

// SEBELUM: setiap jenis diskon baru mengubah method yang sama
class HitungDiskonBuruk {
    double diskon(String jenis, double harga) {
        if (jenis.equals("member")) return harga * 0.1;
        else if (jenis.equals("hariRaya")) return harga * 0.2;
        return 0;                                   // jenis baru? ubah method ini lagi
    }
}

// SESUDAH: jenis baru = class baru
interface Diskon { double hitung(double harga); }
class DiskonMember implements Diskon { public double hitung(double h) { return h * 0.1; } }
class DiskonHariRaya implements Diskon { public double hitung(double h) { return h * 0.2; } }
class DiskonMahasiswa implements Diskon { public double hitung(double h) { return Math.min(h * 0.15, 50_000); } }   // tambahan tanpa menyentuh kode lama

public class Main {
    static double totalDiskon(List<Diskon> daftar, double harga) {
        double t = 0;
        for (Diskon d : daftar) t += d.hitung(harga);
        return t;
    }
    public static void main(String[] args) {
        System.out.println(totalDiskon(List.of(new DiskonMember(), new DiskonMahasiswa()), 200_000));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'L: Liskov Substitution' },
            `Contoh klasik: Persegi sebagai turunan Persegi Panjang tampak masuk akal secara matematika, tetapi melanggar harapan pemakai kelas induk.`,
            { code: jv`class PersegiPanjang {
    protected int lebar, tinggi;
    void setLebar(int l) { lebar = l; }
    void setTinggi(int t) { tinggi = t; }
    int luas() { return lebar * tinggi; }
}
class Persegi extends PersegiPanjang {          // melanggar LSP
    @Override void setLebar(int l) { lebar = l; tinggi = l; }
    @Override void setTinggi(int t) { lebar = t; tinggi = t; }
}

public class Main {
    static void ubahUkuran(PersegiPanjang p) {
        p.setLebar(5);
        p.setTinggi(4);
        System.out.println("diharapkan 20, hasil " + p.luas());
    }
    public static void main(String[] args) {
        ubahUkuran(new PersegiPanjang());
        ubahUkuran(new Persegi());                // mengejutkan: 16
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Solusi: jangan memakai pewarisan di sini. Buat Bentuk dengan luas(), atau jadikan keduanya immutable.' },
            { h2: 'I: Interface Segregation' },
            { code: jv`// BURUK: Robot dipaksa menerapkan makan() dan tidur()
interface PekerjaGemuk { void kerja(); void makan(); void tidur(); }

// BAIK: interface kecil, dipakai sesuai kebutuhan
interface Bekerja { void kerja(); }
interface Makan { void makan(); }
interface Tidur { void tidur(); }

class Manusia implements Bekerja, Makan, Tidur {
    public void kerja() { System.out.println("manusia bekerja"); }
    public void makan() { System.out.println("manusia makan"); }
    public void tidur() { System.out.println("manusia tidur"); }
}
class Robot implements Bekerja {                  // hanya yang relevan
    public void kerja() { System.out.println("robot bekerja"); }
}

public class Main {
    public static void main(String[] args) {
        Bekerja[] tim = { new Manusia(), new Robot() };
        for (Bekerja b : tim) b.kerja();
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'D: Dependency Inversion' },
            { code: jv`interface Notifikasi { void kirim(String pesan); }
class Email implements Notifikasi { public void kirim(String p) { System.out.println("email: " + p); } }
class Sms implements Notifikasi { public void kirim(String p) { System.out.println("sms: " + p); } }
class NotifikasiUji implements Notifikasi {              // pengganti untuk pengujian
    final java.util.List<String> terkirim = new java.util.ArrayList<>();
    public void kirim(String p) { terkirim.add(p); }
}

class LayananPesanan {
    private final Notifikasi notifikasi;                   // bergantung pada abstraksi
    LayananPesanan(Notifikasi notifikasi) { this.notifikasi = notifikasi; }   // disuntikkan dari luar
    void proses(String id) { notifikasi.kirim("pesanan " + id + " diproses"); }
}

public class Main {
    public static void main(String[] args) {
        new LayananPesanan(new Email()).proses("A1");
        new LayananPesanan(new Sms()).proses("A2");
        NotifikasiUji uji = new NotifikasiUji();
        new LayananPesanan(uji).proses("A3");
        System.out.println("terkirim saat uji: " + uji.terkirim);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Dengan menyuntikkan dependensi lewat konstruktor, LayananPesanan tidak peduli apakah notifikasinya email, SMS, atau tiruan untuk pengujian.' },
            { callout: 'SOLID adalah panduan, bukan hukum. Menerapkannya secara berlebihan menghasilkan lusinan class kecil dan lapisan abstraksi untuk masalah yang sederhana. Mulailah sederhana, lalu lakukan refactoring ketika kebutuhan berubah memperlihatkan titik sakitnya.', kind: 'warn', title: 'Seimbang' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Class yang menghitung, memformat, dan menyimpan sekaligus melanggar...', options: ['SRP', 'LSP', 'DIP'], answer: 0, why: 'Terlalu banyak alasan untuk berubah.' }, { q: 'Menambah jenis diskon baru tanpa mengubah kode lama adalah penerapan...', options: ['Open/Closed', 'Interface Segregation', 'Liskov'], answer: 0, why: 'Terbuka untuk perluasan, tertutup untuk modifikasi.' }, { q: 'Menyuntikkan interface lewat konstruktor adalah penerapan...', options: ['Dependency Inversion', 'Single Responsibility', 'Hiding'], answer: 0, why: 'Modul tingkat tinggi tidak bergantung pada detail.' }] },
            { exercise: [['Refactor class dengan banyak if (jenis.equals(...)) menjadi desain yang mengikuti OCP.', 'Ekstrak interface, buat satu class per jenis, dan pilih implementasi lewat peta atau pabrik.'], ['Mengapa Persegi sebagai turunan PersegiPanjang melanggar LSP?', 'Kode yang mengharapkan lebar dan tinggi independen menjadi salah bila diberikan Persegi.'], ['Apa hubungan DIP dengan pengujian unit?', 'Dependensi abstrak dapat diganti tiruan (mock/fake) sehingga unit diuji tanpa sumber daya nyata.'], ['Kapan SRP sudah cukup?', 'Bila perubahan satu kebutuhan bisnis biasanya hanya menyentuh satu class.']] },
            { summary: ['S: satu class satu alasan berubah.', 'O: tambah perilaku dengan kode baru, bukan mengubah yang lama.', 'L: subclass harus bisa menggantikan induk tanpa kejutan.', 'I: interface kecil dan fokus.', 'D: bergantung pada abstraksi dan suntikkan dependensi.'] },
        ],
        faq: [['Dari mana asal SOLID?', 'Dikumpulkan dan dipopulerkan oleh Robert C. Martin sejak awal 2000-an; akronimnya diberikan oleh Michael Feathers.'], ['Apakah SOLID hanya untuk Java?', 'Tidak. Berlaku untuk bahasa berorientasi objek mana pun, dan sebagian prinsipnya relevan juga untuk gaya fungsional.'], ['Bagaimana memulai menerapkannya?', 'Perhatikan class yang paling sering diubah atau paling sulit diuji, lalu pecah sesuai tanggung jawabnya.']],
        sources: [REF_MARTIN, ['Robert C. Martin, Design Principles and Design Patterns (2000)', ''], REF_EJ, ['dev.java: Learn Java', 'https://dev.java/learn/']],
    },

    {
        slug: 'design-pattern-java-singleton-factory-strategy-observer',
        title: 'Design Pattern Java: Singleton, Factory, Strategy, Observer',
        description: 'Kenali empat pola desain yang paling sering dipakai: Singleton, Factory Method, Strategy, dan Observer, dengan implementasi Java, diagram UML, dan peringatan penyalahgunaan.',
        date: D, category: C, level: 'Lanjut', tags: ['Java', 'design pattern', 'Strategy', 'Observer', 'Factory'], cta: 'none',
        prereq: ['interface', 'polimorfisme', 'SOLID'],
        lead: 'Pola desain adalah solusi yang teruji untuk masalah desain yang berulang. Nilai utamanya bukan kode siap tempel, melainkan kosakata bersama: ketika seorang rekan berkata "pakai Strategy di sini", seluruh struktur langsung terbayang.',
        body: [
            { objectives: ['menjelaskan tujuan dan struktur Singleton, Factory Method, Strategy, dan Observer', 'mengimplementasikan masing-masing dalam Java', 'mengenali kapan sebuah pola tepat dan kapan berlebihan', 'membaca diagram UML pola tersebut'] },
            { table: { head: ['Pola', 'Kategori', 'Masalah yang diselesaikan'], rows: [['Singleton', 'Creational', 'Memastikan hanya ada satu instance'], ['Factory Method', 'Creational', 'Memisahkan pembuatan objek dari pemakaiannya'], ['Strategy', 'Behavioral', 'Mengganti algoritma saat berjalan'], ['Observer', 'Behavioral', 'Memberi tahu banyak pihak ketika sesuatu berubah']] } },
            { h2: 'Singleton' },
            { code: jv`class Konfigurasi {
    private static final Konfigurasi INSTANCE = new Konfigurasi();   // dibuat sekali saat class dimuat
    private final String bahasa = "id";
    private Konfigurasi() { System.out.println("Konfigurasi dibuat"); }
    static Konfigurasi get() { return INSTANCE; }
    String bahasa() { return bahasa; }
}

enum Logger {            // cara paling ringkas dan aman: enum dengan satu konstanta
    INSTANCE;
    void log(String s) { System.out.println("[LOG] " + s); }
}

public class Main {
    public static void main(String[] args) {
        Konfigurasi a = Konfigurasi.get(), b = Konfigurasi.get();
        System.out.println(a == b);
        Logger.INSTANCE.log("halo");
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { callout: 'Singleton pada dasarnya adalah <b>keadaan global</b>: sulit diuji dan menyembunyikan dependensi. Pertimbangkan menyuntikkan satu objek bersama melalui konstruktor (lihat DIP) alih-alih memanggil <code>get()</code> dari mana-mana.', kind: 'warn', title: 'Peringatan' },
            { h2: 'Factory Method' },
            { code: jv`interface Notifikasi { void kirim(String pesan); }
class Email implements Notifikasi { public void kirim(String p) { System.out.println("EMAIL: " + p); } }
class Sms implements Notifikasi { public void kirim(String p) { System.out.println("SMS: " + p); } }
class Push implements Notifikasi { public void kirim(String p) { System.out.println("PUSH: " + p); } }

class PabrikNotifikasi {
    static Notifikasi buat(String jenis) {
        return switch (jenis) {
            case "email" -> new Email();
            case "sms" -> new Sms();
            case "push" -> new Push();
            default -> throw new IllegalArgumentException("jenis tidak dikenal: " + jenis);
        };
    }
}

public class Main {
    public static void main(String[] args) {
        for (String j : new String[]{"email", "sms", "push"})
            PabrikNotifikasi.buat(j).kirim("pesanan dikirim");      // pemakai tidak tahu class konkretnya
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Pemakai hanya mengenal interface Notifikasi. Menambah jenis baru hanya mengubah pabrik.' },
            { h2: 'Strategy' },
            { svg: 'diagram', w: 620, h: 230, label: 'Pola Strategy', nodes: [{ id: 'K', x: 110, y: 90, shape: 'class', w: 170, h: 70, t: 'Keranjang', attrs: ['-strategi'], methods: ['total()'] }, { id: 'S', x: 400, y: 40, shape: 'class', w: 190, h: 60, stereotype: 'interface', t: 'Pengiriman', attrs: [], methods: ['biaya(berat)'] }, { id: 'R', x: 330, y: 180, shape: 'class', w: 130, h: 40, t: 'Reguler', attrs: [], methods: [] }, { id: 'E', x: 490, y: 180, shape: 'class', w: 130, h: 40, t: 'Ekspres', attrs: [], methods: [] }], edges: [{ from: 'K', to: 'S', head: 'diaf' }, { from: 'R', to: 'S', head: 'open', dashed: true }, { from: 'E', to: 'S', head: 'open', dashed: true }], caption: 'Keranjang memiliki sebuah strategi pengiriman yang dapat diganti kapan saja.' },
            { code: jv`import java.util.function.DoubleUnaryOperator;

interface Pengiriman { double biaya(double beratKg); }

class Keranjang {
    private Pengiriman strategi;
    private final double beratKg;
    Keranjang(double beratKg, Pengiriman strategi) { this.beratKg = beratKg; this.strategi = strategi; }
    void ganti(Pengiriman s) { this.strategi = s; }
    double ongkir() { return strategi.biaya(beratKg); }
}

public class Main {
    public static void main(String[] args) {
        Pengiriman reguler = b -> 9_000 * b;                  // strategi sebagai lambda
        Pengiriman ekspres = b -> 15_000 + 12_000 * b;
        Keranjang k = new Keranjang(2, reguler);
        System.out.println("reguler: " + k.ongkir());
        k.ganti(ekspres);                                      // ganti algoritma saat berjalan
        System.out.println("ekspres: " + k.ongkir());
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Karena Pengiriman adalah functional interface, strategi sederhana cukup berupa lambda. Pola ini menggantikan rantai if/else berdasarkan jenis algoritma.' },
            { h2: 'Observer' },
            { code: jv`import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

class Berita {
    private final List<Consumer<String>> pelanggan = new ArrayList<>();
    void berlangganan(Consumer<String> p) { pelanggan.add(p); }
    void terbit(String judul) {
        System.out.println("-- terbit: " + judul);
        for (Consumer<String> p : pelanggan) p.accept(judul);         // memberi tahu semua pengamat
    }
}

public class Main {
    public static void main(String[] args) {
        Berita redaksi = new Berita();
        redaksi.berlangganan(j -> System.out.println("  [email] " + j));
        redaksi.berlangganan(j -> System.out.println("  [aplikasi] " + j.toUpperCase()));
        redaksi.terbit("Java 25 dirilis");
        redaksi.berlangganan(j -> System.out.println("  [arsip] " + j.length() + " karakter"));
        redaksi.terbit("Belajar pola desain");
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Subjek tidak tahu siapa pengamatnya. Pola ini ada di balik event listener GUI, MVC, dan pemrograman reaktif.' },
            { w: 'compare', title: 'Ringkasan kapan memakai', tabs: [{ label: 'Strategy', html: 'Bila ada beberapa cara melakukan hal yang sama (pengurutan, diskon, ongkir) dan pilihannya berubah.' }, { label: 'Observer', html: 'Bila satu perubahan perlu diketahui beberapa pihak yang tidak boleh saling terikat.' }, { label: 'Factory', html: 'Bila pembuatan objek rumit atau bergantung kondisi, dan pemakai tidak perlu tahu class konkretnya.' }, { label: 'Singleton', html: 'Hampir selalu ada alternatif lebih baik (injeksi dependensi). Pakai hanya untuk sumber daya yang memang tunggal.' }] },
            { callout: 'Bahaya terbesar pola desain adalah <b>patternitis</b>: memakai pola karena ingin, bukan karena perlu. Pola mencegah satu masalah dengan harga kerumitan. Pastikan masalahnya benar-benar ada.', kind: 'warn', title: 'Jangan berlebihan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pola yang menggantikan if/else untuk memilih algoritma?', options: ['Strategy', 'Singleton', 'Observer'], answer: 0, why: 'Setiap algoritma menjadi objek yang bisa ditukar.' }, { q: 'Event listener GUI adalah contoh pola...', options: ['Observer', 'Factory', 'Adapter'], answer: 0, why: 'Banyak pendengar diberi tahu saat kejadian terjadi.' }, { q: 'Cara paling aman membuat Singleton di Java?', options: ['Enum dengan satu konstanta', 'Variabel public static non-final', 'Konstruktor public'], answer: 0, why: 'Tahan terhadap refleksi dan serialisasi.' }] },
            { exercise: [['Tambahkan strategi pengiriman "gratis di atas 500 ribu" yang bergantung pada total belanja.', 'Ubah interface agar menerima total belanja atau tambahkan parameter; ini menunjukkan strategi dapat membutuhkan konteks.'], ['Apa perbedaan Strategy dan Factory?', 'Strategy memilih perilaku yang dapat ditukar saat berjalan; Factory memilih objek mana yang dibuat.'], ['Mengapa Observer yang tidak pernah berhenti berlangganan dapat menyebabkan kebocoran memori?', 'Subjek menyimpan referensi pengamat sehingga pengamat tidak bisa dibersihkan garbage collector.'], ['Cari satu pola desain di pustaka standar Java.', 'Iterator (Iterator), Comparator (Strategy), Collections.unmodifiableList (Decorator), BufferedReader (Decorator).']] },
            { summary: ['Pola desain adalah kosakata solusi yang teruji.', 'Singleton: satu instance (hati-hati keadaan global).', 'Factory: pisahkan pembuatan dari pemakaian.', 'Strategy: algoritma yang dapat ditukar; Observer: pemberitahuan banyak pihak.', 'Pakai bila masalahnya nyata.'] },
        ],
        faq: [['Ada berapa pola desain?', 'Buku Gang of Four (1994) memuat 23 pola dalam tiga kategori: creational, structural, behavioral.'], ['Apakah pola desain masih relevan dengan lambda?', 'Ya, hanya bentuknya yang lebih ringkas. Strategy dan Observer sering menjadi satu baris lambda.'], ['Bagaimana mempelajarinya?', 'Mulailah dari yang dibahas di sini, lalu cari contohnya dalam pustaka yang sudah Anda pakai.']],
        sources: [REF_GOF, ['Eric Freeman dan Elisabeth Robson, Head First Design Patterns (O\'Reilly, edisi ke-2)', ''], ['Refactoring Guru: Design Patterns', 'https://refactoring.guru/design-patterns'], REF_EJ],
    },
];
