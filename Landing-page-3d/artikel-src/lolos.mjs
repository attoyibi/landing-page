// The one place that knows where LolosSeleksi lives. If the site moves to its own domain (lolosseleksi.id),
// change LOLOS_URL here and run `npm run artikel`; every link in every CPNS article follows.
export const LOLOS_URL = 'https://lolosseleksi.vercel.app';

// A link to a LolosSeleksi page with campaign tags, so analytics shows which article sent the visitor.
export const lolos = (path, slug = 'artikel') =>
    `${LOLOS_URL}${path}?utm_source=muchson.web.id&utm_medium=artikel&utm_campaign=${encodeURIComponent(slug)}`;

// References shared by the CPNS articles. [label, url] pairs, ready for a `sources` list.
export const REF = {
    PERMEN: ['Peraturan Menteri PANRB Nomor 6 Tahun 2024 tentang Pengadaan Pegawai ASN (teks resmi, BKN)', 'https://www.bkn.go.id/wp-content/uploads/2024/08/2024permenpanrb-Pengadaan-CASN-.pdf'],
    PERMEN_BPK: ['Peraturan Menteri PANRB 6/2024, status berlaku dan mencabut Permen 27/2021 (peraturan.bpk.go.id)', 'https://peraturan.bpk.go.id/Details/294203/permen-panrb-no-6-tahun-2024'],
    KEP406: ['Keputusan Menteri PANRB Nomor 406 Tahun 2026 tentang Nilai Ambang Batas SKD Sekolah Kedinasan (JDIH KemenPANRB, 27 Juli 2026)', 'https://data-jdih.menpan.go.id/dokumen/2026kepmenpanrb406.pdf'],
    KEP321: ['Rangkuman nilai ambang batas SKD CPNS 2024 (KepmenPANRB 321/2024), Okezone', 'https://economy.okezone.com/read/2024/08/22/320/3052822/segini-nilai-ambang-batas-cpns-2024?page=all'],
    KOMPAS: ['Kompas.com, 16 November 2026: registrasi akun SSCASN CPNS 2026 dibuka, jadwal pendaftaran belum diumumkan', 'https://tekno.kompas.com/read/2026/11/16/12350037/registrasi-akun-sscasn-cpns-2026-dibuka-ini-link-resmi-dan-syaratnya'],
    BKN48: ['Siaran Pers BKN Nomor 048/RILIS/BKN/X/2020: ketentuan pemberkasan peserta lulus CPNS 2019', 'https://bkn.go.id/wp-content/uploads/2020/10/048_RILIS_BKN_X_2020-Jelang-Pengumuman-Hasil-Akhir-Seleksi-CPNS-2019-Inilah-Ketentuan-Pemberkasan-bagi-Peserta-Lulus.pdf'],
    DETIK_SKB: ['detikFinance, 5 November 2024: kisi-kisi SKB CPNS 2024 dari KemenPAN-RB', 'https://finance.detik.com/cpns/d-7623605/kisi-kisi-skb-cpns-2024-dari-kemenpan-rb'],
    DUNLOSKY: ['Dunlosky dkk. (2013), Improving Students\' Learning With Effective Learning Techniques, Psychological Science in the Public Interest 14(1)', 'https://doi.org/10.1177/1529100612453266'],
    ROEDIGER: ['Roediger dan Karpicke (2006), Test-Enhanced Learning, Psychological Science 17(3)', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x'],
    CEPEDA: ['Cepeda dkk. (2006), Distributed Practice in Verbal Recall Tasks, Psychological Bulletin 132(3)', 'https://doi.org/10.1037/0033-2909.132.3.354'],
    SETKAB: ['Setkab, 16 Oktober 2019: BKN mengingatkan modus penipuan jelang penerimaan CPNS', 'https://setkab.go.id/?p=171582'],
    HUKUMONLINE_SAMAPTA: ['Hukumonline: kenali tes kesamaptaan sebelum daftar CPNS Kemenkumham', 'https://www.hukumonline.com/berita/a/yuk--kenali-tes-kesamaptaan-sebelum-daftar-cpns-kemenkumham-lt596ca4ab4de38'],
};
