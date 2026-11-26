// =========================================================================
// DATA LENGKAP 76 SLAID HARI GRADUASI TADIKA INSPIRASI 2026
// =========================================================================
const defaultSlides = [
  // 1-9: Pembukaan & Persembahan Awal
  {
    type: 'cover',
    badge: 'MAJLIS APRESIASI & KONVOKESYEN CILIK',
    title: 'HARI GRADUASI',
    subtitle: 'TADIKA INSPIRASI',
    year: '2026',
    confetti: true
  },
  {
    type: 'agenda',
    icon: 'fa-user-tie',
    badge: 'ATUR CARA MAJLIS',
    title: 'Ketibaan Pengarah & Pengelola Tadika',
    note: 'Mengalu-alukan kehadiran barisan pengurusan tertinggi'
  },
  {
    type: 'agenda',
    icon: 'fa-graduation-cap',
    badge: 'PERARAKAN MASUK',
    title: 'Perarakan Masuk Para Graduan',
    note: 'Graduan Cilik Tadika Inspirasi Tahun 2026',
    confetti: true
  },
  {
    type: 'video_slide',
    badge: 'NYANYIAN LAGU RASMI',
    title: 'Nyanyian Lagu Negaraku',
    note: 'Para hadirin dimohon berdiri tegak',
    videoSrc: 'videos/negaraku.mp4'
  },
  {
    type: 'video_slide',
    badge: 'NYANYIAN LAGU RASMI',
    title: 'Nyanyian Lagu Negeri Selangor',
    note: 'Para hadirin dimohon berdiri tegak',
    videoSrc: 'videos/selangor.mp4'
  },
  {
    type: 'cover',
    badge: 'MAJLIS APRESIASI & KONVOKESYEN CILIK',
    title: 'HARI GRADUASI',
    subtitle: 'TADIKA INSPIRASI',
    year: '2026',
    confetti: true
  },
  {
    type: 'person_simple',
    icon: 'fa-user-tie',
    badge: 'BACAAN DOA',
    title: 'Bacaan Doa',
    name: 'Ustaz Mohamad Anuar Bin Mohamad Asri',
    role: 'Memohon keberkatan serta kelancaran majlis'
  },
  {
    type: 'vip_photo',
    badge: 'UCAPAN & PERASMIAN',
    title: 'Perasmian oleh',
    name: 'PUAN FERAWIKA BINTI KARNADY',
    role: 'PENGARAH URUSAN TADIKA INSPIRASI',
    photo: 'images/Fera.png',
    placeholderLabel: 'Foto Puan Ferawika'
  },
  {
    type: 'performance_list',
    badge: 'PERSEMBAHAN PEMBUKAAN',
    title: 'PERSEMBAHAN TILAWAH AL-QURAN',
    items: [
      'Haris Aiman bin Muhammad Ariff (6 tahun)',
      'Mohamad Akasyah Faris Bin Mohamad Aiman (4 tahun)',
      'Muhammad Aariz Idraki Bin Amirul Aiman (5 tahun)',
    ],
    confetti: true
  },
  {
    type: 'performance_single',
    badge: 'PERSEMBAHAN PELAJAR',
    title: 'PERSEMBAHAN ARAB SONG',
    performer: 'PELAJAR 4 TULIP',
    teacher: 'NOOR FATIN ZULAIKHA BINTI SAIFUL BAHARI',
    nickname: 'TEACHER FATIN',
    photo: 'images/fatin.png',
    confetti: true
  },

  /*// 10: Tajuk Segmen Anugerah Subjek Terbaik
  {
    type: 'section_header',
    icon: 'fa-book-open-reader',
    badge: 'KECEMERLANGAN AKADEMIK',
    title: 'Anugerah Subjek Terbaik',
    subtitle: 'Kategori 4 Tahun, 5 Tahun & 6 Tahun'
  },

  // 11-16: Anugerah Subjek Terbaik (4 Tahun - 6 Subjek)
  ...['Bahasa Melayu', 'Bahasa Inggeris', 'Matematik', 'Sains', 'Bahasa Arab', 'Pendidikan Islam'].map(subjek => ({
    type: 'award_photo',
    badge: 'ANUGERAH SUBJEK TERBAIK • 4 TAHUN',
    awardTitle: `SUBJEK TERBAIK ${subjek.toUpperCase()} (4 TAHUN)`,
    name: 'NAMA PENERIMA',
    placeholderLabel: `Foto Pelajar 4T (${subjek})`,
    confetti: true
  })),

  // 17-22: Anugerah Subjek Terbaik (5 Tahun - 6 Subjek)
  ...['Bahasa Melayu', 'Bahasa Inggeris', 'Matematik', 'Sains', 'Bahasa Arab', 'Pendidikan Islam'].map(subjek => ({
    type: 'award_photo',
    badge: 'ANUGERAH SUBJEK TERBAIK • 5 TAHUN',
    awardTitle: `SUBJEK TERBAIK ${subjek.toUpperCase()} (5 TAHUN)`,
    name: 'NAMA PENERIMA',
    placeholderLabel: `Foto Pelajar 5T (${subjek})`,
    confetti: true
  })),

  // 23-28: Anugerah Subjek Terbaik (6 Tahun - 6 Subjek)
  ...['Bahasa Melayu', 'Bahasa Inggeris', 'Matematik', 'Sains', 'Bahasa Arab', 'Pendidikan Islam'].map(subjek => ({
    type: 'award_photo',
    badge: 'ANUGERAH SUBJEK TERBAIK • 6 TAHUN',
    awardTitle: `SUBJEK TERBAIK ${subjek.toUpperCase()} (6 TAHUN)`,
    name: 'NAMA PENERIMA',
    placeholderLabel: `Foto Pelajar 6T (${subjek})`,
    confetti: true
  })),*/

  // 29-41: Anugerah Kedudukan Terbaik Mengikut Kelas
  {
    type: 'section_header',
    icon: 'fa-medal',
    badge: 'PENGIKTIRAFAN PRESTASI KELAS',
    title: 'Anugerah Kedudukan Terbaik Mengikut Kelas',
    subtitle: 'Kategori 4 Tahun, 5 Tahun & 6 Tahun'
  },
  // 4 Tahun (4 Tulip)
  { type: 'sub_header', badge: 'KATEGORI UMUR', title: '4 TAHUN', subtitle: 'Anugerah Kedudukan Terbaik Kelas 4 Tulip' },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 4 TULIP', awardTitle: 'TEMPAT KETIGA (4 TULIP)', name: 'NURYN ERYNA BINTI MOHAMAD AZIZUL HAIREE', photo: 'images/Kedudukan/nuryn.PNG', placeholderLabel: 'Tempat Ke-3 (4T)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 4 TULIP', awardTitle: 'TEMPAT KEDUA (4 TULIP)', name: 'MOHAMAD AKASYAH FARIS BIN MOHAMAD AIMAN', photo: 'images/Kedudukan/akasyah.PNG', placeholderLabel: 'Tempat Ke-2 (4T)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 4 TULIP', awardTitle: 'TEMPAT PERTAMA (4 TULIP)', name: 'MUHAMMAD AIMAN FATEH BIN MUHAMMAD FARHAN', photo: 'images/Kedudukan/aiman.PNG', placeholderLabel: 'Tempat Pertama (4T)', confetti: true },

  // 5 Tahun (5 Hibiscus)
  { type: 'sub_header', badge: 'KATEGORI UMUR', title: '5 TAHUN', subtitle: 'Anugerah Kedudukan Terbaik Kelas 5 Hibiscus' },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 5 HIBISCUS', awardTitle: 'TEMPAT KETIGA (5 HIBISCUS)', name: 'AIRIS LASHIRA BINTI NUR LATIF', photo: 'images/Kedudukan/airis.PNG', placeholderLabel: 'Tempat Ke-3 (5H)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 5 HIBISCUS', awardTitle: 'TEMPAT KEDUA (5 HIBISCUS)', name: 'AARIZ IDRAKI BIN AMIRUL AIMAN', photo: 'images/Kedudukan/aariz.PNG', placeholderLabel: 'Tempat Ke-2 (5H)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 5 HIBISCUS', awardTitle: 'TEMPAT PERTAMA (5 HIBISCUS)', name: 'AMAL AL AHSAN BIN MUHAMMAD ALIF', photo: 'images/Kedudukan/amal.PNG', placeholderLabel: 'Tempat Pertama (5H)', confetti: true },

  // 6 Tahun (6 Rafflesia)
  { type: 'sub_header', badge: 'KATEGORI UMUR', title: '6 TAHUN', subtitle: 'Anugerah Kedudukan Terbaik Kelas 6 Rafflesia' },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 6 RAFFLESIA', awardTitle: 'TEMPAT KETIGA (6 RAFFLESIA)', name: 'ANNUR FATHIA BINTI MOHD HEDDAYAT', photo: 'images/Kedudukan/annur.PNG', imgPos: 'top', placeholderLabel: 'Tempat Ke-3 (6R)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 6 RAFFLESIA', awardTitle: 'TEMPAT KEDUA (6 RAFFLESIA)', name: 'MUHAMMAD AFFAN AL FATIH BIN MUHAMMAD AMEIN', photo: 'images/Kedudukan/affan.PNG', imgPos: 'top', placeholderLabel: 'Tempat Ke-2 (6R)', confetti: true },
  { type: 'award_photo', badge: 'KEDUDUKAN TERBAIK • 6 RAFFLESIA', awardTitle: 'TEMPAT PERTAMA (6 RAFFLESIA)', name: 'HARIS AIMAN BIN MUHAMMAD ARIFF', photo: 'images/Kedudukan/haris.PNG', imgPos: 'top', placeholderLabel: 'Tempat Pertama (6R)', confetti: true },
  
  // 42-43: Persembahan Pertengahan
  {
    type: 'performance_single',
    badge: 'PERSEMBAHAN PELAJAR',
    title: 'PERSEMBAHAN CHORAL SPEAKING',
    performer: 'PELAJAR 5 HIBISCUS DAN 6 RAFFLESIA',
    teacher: 'PUAN FERAWIKA BINTI KARNADY',
    nickname: 'TEACHER FERA',
    photo: 'images/Fera.png',
    confetti: true
  },
  {
    type: 'video_slide',
    badge: 'VIDEO PERSEMBAHAN',
    title: 'VIDEO LAGU PERSEMBAHAN',
    videoSrc: 'videos/Westlife.mp4',
  },
  {
    type: 'performance_single',
    badge: 'PERSEMBAHAN NYANYIAN',
    title: 'PERSEMBAHAN NYANYIAN “KAU ILHAMKU”',
    performer: 'PELAJAR 5 HIBISCUS DAN 6 RAFFLESIA',
    teacher: 'PUAN FERAWIKA BINTI KARNADY',
    nickname: 'TEACHER FERA',
    photo: 'images/Fera.png',
    confetti: true
  },

  {
    type: 'video_slide',
    badge: 'VIDEO PERSEMBAHAN',
    title: 'VIDEO LAGU PERSEMBAHAN',
    videoSrc: 'videos/ilhamku.mp4',
  },

  // 44-56: Anugerah Khas (12 Penerima)
  {
    type: 'section_header',
    icon: 'fa-trophy',
    badge: 'PENGIKTIRAFAN SAHSIAH & BAKAT',
    title: 'Anugerah Khas',
    subtitle: 'Tadika Inspirasi 2026'
  },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'KEHADIRAN CEMERLANG', name: 'MOHAMAD AKASYAH FARIS BIN MOHAMAD AIMAN', photo: 'images/Kedudukan/akasyah.png', placeholderLabel: 'Akasyah Faris', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH AKHLAK & SAHSIAH TERBAIK', name: 'AARIZ IDRAKI BIN AMIRUL AIMAN', photo: 'images/Kedudukan/aariz.png', placeholderLabel: 'Akasyah Faris', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH NAIK AL-QURAN', name: 'HARIS AIMAN BIN MUHAMMAD ARIFF', photo: 'images/6Tahun/haris.png', imgPos: 'top', placeholderLabel: 'Haris Aiman', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH NAIK AL-QURAN', name: 'ANNUR FATHIA BINTI MOHD HEDDAYAT', photo: 'images/6Tahun/annur.png', imgPos: 'top', placeholderLabel: 'Annur Fathia', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH NAIK AL-QURAN', name: 'AMAL AL-AHSAN BIN MUHAMMAD ALIF', photo: 'images/Kedudukan/amal.png', placeholderLabel: 'Amal Al-Ahsan', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH NAIK AL-QURAN', name: 'MUHAMMAD AQIB BIN NAJIBUSYAFIK', photo: 'images/6Tahun/aqib.png', placeholderLabel: 'Muhammad Aqib', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR PALING AKTIF', name: 'MOHAMAD FATTEH SHAH BIN MOHAMAD IQRAAM SHAH', photo: 'images/6Tahun/fatteh.png', placeholderLabel: 'Fatteh Shah', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR BERKETRAMPILAN KEMAS', name: 'MUHAMMAD ZULQARNAIN BIN MUHAMAD ZULHUSMI', photo: 'images/6Tahun/zulqarnain.png', placeholderLabel: 'Zulqarnain', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR PALING KREATIF', name: 'MUHAMMAD AQIB BIN NAJIBUSYAFIK', photo: 'images/6Tahun/aqib.png', placeholderLabel: 'Muhammad Aqib', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR PRIHATIN', name: 'AQIL LUQMAN BIN KHAIRUL KHANIZAM', photo: 'images/6Tahun/aqil.png', placeholderLabel: 'Aqil Luqman', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR AKADEMIK TERBAIK', name: 'ANNUR FATHIA BINTI MOHD HEDDAYAT', photo: 'images/6Tahun/annur.png', imgPos: 'top', placeholderLabel: 'Annur Fathia', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH PELAJAR CEMERLANG', name: 'MUHAMMAD AFFAN AL FATIH BIN MUHAMMAD AMEIN', photo: 'images/6Tahun/affan.png', imgPos: 'top', placeholderLabel: 'Affan Al Fatih', confetti: true },
  { type: 'award_photo', badge: 'ANUGERAH KHAS 2026', awardTitle: 'ANUGERAH TOKOH PELAJAR', name: 'HARIS AIMAN BIN MUHAMMAD ARIFF', photo: 'images/6Tahun/haris.png', imgPos: 'top', placeholderLabel: 'Haris Aiman', confetti: true },

  // 57-58: Persembahan & Cenderahati Pelajar
  {
    type: 'performance_single',
    badge: 'PERSEMBAHAN PELAJAR',
    title: 'PERSEMBAHAN BISMILLAH SONG',
    performer: 'PELAJAR 4 TULIP',
    teacher: 'NOOR FATIN ZULAIKHA BINTI SAIFUL BAHARI',
    nickname: 'TEACHER FATIN',
    photo: 'images/fatin.png',
    confetti: true
  },

  {
    type: 'video_slide',
    badge: 'PERSEMBAHAN PELAJAR • 4 TULIP',
    title: 'Persembahan Bismillah Song',
    videoSrc: 'videos/bismillah.mp4'
  },

  {
    type: 'section_header',
    icon: 'fa-gift',
    badge: 'APRESIASI GRADUAN',
    title: 'Penyampaian Cenderahati (Semua Pelajar)',
    subtitle: 'Tahniah kepada semua graduan cilik Tadika Inspirasi 2026',
    confetti: true
  },

  {
    type: 'student_list',
    badge: 'SENARAI GRADUAN • 4 TAHUN',
    title: 'Kelas 4 Tulip',
    students: [
      '1. MUHAMMAD AIMAN FATEH BIN MUHAMMAD FARHAN',
      '2. MOHAMAD AKASYAH FARIS BIN MOHAMAD AIMAN',
      '3. NURYN ERYNA BINTI MOHAMAD AZIZUL HAIREE',
      '4. MINA ARI BINTI MUHAMMAD YUNUS',
      '5. AMMAR NAWFAL BIN MUHAMMAD ZAKI'
    ]
  },
  {
    type: 'student_list',
    badge: 'SENARAI GRADUAN • 5 TAHUN',
    title: 'Kelas 5 Hibiscus',
    students: [
      '1. AMAL AL AHSAN BIN MUHAMMAD ALIF',
      '2. AARIZ IDRAKI BIN AMIRUL AIMAN',
      '3. AIRIS LASHIRA BINTI NUR LATIF',
      '4. AKMAL KONG KONG AHMAD ZAFRAN KONG',
      '5. AARIF MALIQUE BIN MOHAMAD AFIQ AIMAN'
    ]
  },
  {
    type: 'student_list',
    badge: 'SENARAI GRADUAN • 6 TAHUN',
    title: 'Kelas 6 Rafflesia',
    students: [
      '1. HARIS AIMAN BIN MUHAMMAD ARIFF',
      '2. MUHAMMAD AFFAN AL FATIH BIN MUHAMMAD AMEIN',
      '3. ANNUR FATHIA BINTI MOHD HEDDAYAT',
      '4. AQIL LUQMAN BIN KHAIRUL KHANIZAM',
      '5. MUHAMMAD AQIB BIN NAJIBUSYAFIK',
      '6. MUHAMMAD ZULQARNAIN BIN MUHAMAD ZULHUSMI',
      '7. MOHAMAD FATTEH SHAH BIN MOHAMAD IQRAAM SHAH'
    ]
  },

  // 59-70: Penyampaian Cenderahati & Penghargaan (Tetamu VIP & Guru)
  {
    type: 'section_header',
    icon: 'fa-award',
    badge: 'SEGMEN PENGHARGAAN',
    title: 'Penyampaian Cenderahati & Penghargaan',
    subtitle: 'Tetamu VIP & Barisan Guru Tadika Inspirasi'
  },
 { type: 'sub_header', badge: 'PENGHARGAAN WARGA PENDIDIK', title: 'Penghargaan Guru', subtitle: 'Tadika Inspirasi 2026' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: 'NORLAILATULAILA BINTI IBRAHIM', role: 'GURU PEMBIMBING', education: 'DIPLOMA PENDIDIKAN AWAL KANAK-KANAK', photo: 'images/laila.png', placeholderLabel: 'Teacher Norlailatulaila' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: 'NUR ZULAIKA SYAZWANI BINTI CHE RONI', role: 'GURU PEMBIMBING', education: 'IJAZAH SARJANA MUDA (KEPUJIAN) SAINS TEKSTIL DAN TEKNOLOGI FESYEN', photo: 'images/zulaika.jpeg', placeholderLabel: 'Teacher Zulaika' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: 'FAIRUZ BINTI AHMAD ANUAR', role: 'GURU PEMBIMBING',photo: 'images/fairuz.png', placeholderLabel: 'Teacher Fairuz' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: 'AIMAN SYAFIQAH BINTI HILMI AZMAN', role: 'GURU', education: 'IJAZAH SARJANA MUDA TEKNOLOGI (MAKANAN)',photo: 'images/syafiqah.png', placeholderLabel: 'Teacher Aiman' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: 'NOOR FATIN ZULAIKHA BINTI SAIFUL BAHARI', role: 'GURU', education: 'DIPLOMA PENDIDIKAN AWAL KANAK-KANAK', photo: 'images/fatin.png', placeholderLabel: 'Teacher Fatin' },
  { type: 'staff_photo', badge: 'PENGHARGAAN GURU', name: '`AMNI IZZATI BINTI ZAINORIN', role: 'GURU PEMBIMBING', education: 'DIPLOMA PENDIDIKAN LEPASAN IJAZAH', photo: 'images/amni.png', placeholderLabel: 'Teacher `Amni' }, 
{
    type: 'sub_header',
    badge: 'PENGHARGAAN JAWATANKUASA MAJLIS',
    title: 'Penghargaan Urus Setia',
    subtitle: ''
  },
  { type: 'staff_simple', badge: 'PENGHARGAAN URUS SETIA', name: 'NURAISHAH BINTI NUR QAYYUM', role: 'JURUGAMBAR' },
  { type: 'staff_simple', badge: 'PENGHARGAAN URUS SETIA', name: 'TASNIM BINTI JUSNI', role: 'PENGACARA MAJLIS' },

  { type: 'sub_header', badge: 'PENGHARGAAN KHAS', title: 'Penghargaan VIP', subtitle: 'Pengelola Tadika Inspirasi' },
  { type: 'staff_photo', badge: 'TETAMU VIP', name: 'ENCIK MOHAMAD AIMAN BIN MOHAMAD ASRI', role: 'PENGELOLA 1', photo: 'images/aiman.png', placeholderLabel: 'Encik Mohamad Aiman' },
  { type: 'staff_photo', badge: 'TETAMU VIP', name: 'ENCIK MOHAMAD ANUAR BIN MOHAMAD ASRI', role: 'PENGELOLA 2', photo: 'images/ustaz_1.png', placeholderLabel: 'Encik Mohamad Anuar' },

  // 71-72: Anugerah Bapa Mithali 2026
  {
    type: 'section_header',
    icon: 'fa-crown',
    badge: '',
    title: 'Anugerah Bapa Mithali 2026',
    subtitle: 'Penghargaan khas atas sokongan dan komitmen luar biasa'
  },
  {
    type: 'award_photo',
    badge: 'ANUGERAH KHAS 2026',
    awardTitle: 'ANUGERAH BAPA MITHALI',
    name: 'KARNADY BIN RACHMAN',
    photo: 'images/karnady.jpg', // Padam baris ini jika tiada gambar, atau tukar nama fail mengikut gambar sebenar
    placeholderLabel: 'Foto Karnady Bin Rachman',
    confetti: true
  },

  // 73-76: Majlis Restu Ilmu, Persembahan Penutup & Terima Kasih
  {
    type: 'section_header',
    icon: 'fa-heart',
    badge: 'DETIK PENUH MAKNA',
    title: 'Majlis Restu Ilmu',
    subtitle: 'Memohon restu ibu bapa dan guru sebelum melangkah ke alam persekolahan baharu'
  },
  {
    type: 'performance_single',
    badge: 'PERSEMBAHAN PENUTUP',
    title: 'PERSEMBAHAN NYANYIAN “XIE XIE NI”',
    performer: 'PELAJAR 4 TULIP, 5 HIBISCUS DAN 6 RAFFLESIA',
    teacher: 'PUAN FERAWIKA BINTI KARNADY',
    nickname: 'TEACHER FERA',
    photo: 'images/fera.png',
    confetti: true
  },

  {
    type: 'video_slide',
    badge: 'PERSEMBAHAN PELAJAR',
    title: 'Persembahan Nyanyian “XIE XIE NI”',
    videoSrc: 'videos/xie.mp4'
  },

  {
    type: 'closing_thanks',
    badge: 'SEKALUNG PENGHARGAAN',
    title: 'TERIMA KASIH',
    subtitle: 'Kepada semua ibu bapa, tetamu jemputan, guru-guru dan para graduan cilik yang menjayakan majlis ini.',
    confetti: true
  },
  {
    type: 'closing_quote',
    badge: 'HARI GRADUASI TADIKA INSPIRASI 2026',
    quote: '“Teruslah melangkah, demi masa depan yang cerah”',
    subtitle: 'Selamat Maju Jaya Anak-Anak Tadika Inspirasi!',
    sidePhotos: [
      'images/kenangan1.jpeg',
      'images/kenangan2.jpeg',
      'images/kenangan3.jpeg',
      'images/kenangan4.jpeg'
    ],
    confetti: true
  }
];

// =========================================================================
// STATE & LOCAL STORAGE
// =========================================================================
const STORAGE_KEY = 'tadika_inspirasi_2026_slides_v1';
let slides = JSON.parse(localStorage.getItem(STORAGE_KEY)) || JSON.parse(JSON.stringify(defaultSlides));
let currentIndex = 0;
let isEditMode = false;
let activePhotoTarget = null;
let idleTimer = null;
let isBarManuallyHidden = false;

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
  } catch (e) {
    console.warn('Storage penuh (gambar terlalu besar):', e);
  }
}

// =========================================================================
// RENDER SLIDES
// =========================================================================
function renderSlide(index) {
  const stage = document.getElementById('stage');
  if (!stage) return;
  const s = slides[index];
  const counter = document.getElementById('slide-counter');
  if (counter) counter.textContent = `${index + 1} / ${slides.length}`;

  let html = '';

  if (s.type === 'cover') {
    html = `
      <div class="slide-card glass-panel p-10 md:p-16">
        <div class="-mb-4 cursor-pointer flex justify-center" onclick="handlePhotoClick()">
          <img src="${s.photo || 'images/logo.png'}" alt="Logo Tadika Inspirasi" class="w-64 md:w-80 h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105" />
        </div>
        <span class="px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs font-extrabold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-5xl md:text-7xl font-bold text-stone-800 tracking-tight mb-2" data-editable="title">${s.title}</h1>
        <h2 class="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-amber-600 to-emerald-700 tracking-wide mb-4" data-editable="subtitle">${s.subtitle}</h2>
        <div class="inline-block px-8 py-2 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 font-extrabold text-2xl tracking-widest shadow-sm" data-editable="year">${s.year}</div>
      </div>
    `;
  } else if (s.type === 'agenda') {
    html = `
      <div class="slide-card glass-panel p-10 md:p-16">
        <div class="w-20 h-20 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
          <i class="fa-solid ${s.icon} text-3xl text-emerald-700"></i>
        </div>
        <span class="px-4 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-5" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 leading-tight max-w-3xl mb-5" data-editable="title">${s.title}</h1>
        <p class="text-stone-500 text-lg md:text-xl font-medium max-w-2xl" data-editable="note">${s.note}</p>
      </div>
    `;
  } else if (s.type === 'person_simple') {
    html = `
      <div class="slide-card glass-panel p-10 md:p-16">
        <div class="w-44 h-44 md:w-52 md:h-52 rounded-full bg-white border-4 border-amber-200 flex items-center justify-center mb-6 shadow-lg overflow-hidden p-1.5">
          <img src="images/ustaz_1.png" alt="Ustaz Mohamad Anuar" class="w-full h-full object-cover object-top rounded-full" onerror="this.src='https://img.icons8.com/color/144/muslim-man.png'" />
        </div>
        <span class="px-4 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 mb-3" data-editable="name">${s.name}</h1>
        <p class="text-emerald-700 font-semibold text-base md:text-lg" data-editable="role">${s.role}</p>
      </div>
    `;
  } else if (s.type === 'vip_photo') {
    html = `
      <div class="slide-card glass-panel p-8 md:p-14">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-4xl text-center md:text-left">
          ${renderPhotoBox(s)}
          <div class="flex-1">
            <span class="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
            <p class="text-xl md:text-2xl font-serif-display italic text-stone-600 mb-2" data-editable="title">${s.title}</p>
            <h1 class="font-serif-display text-3xl md:text-5xl font-bold text-stone-800 leading-tight mb-4" data-editable="name">${s.name}</h1>
            <div class="inline-block px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm md:text-base tracking-wide" data-editable="role">${s.role}</div>
          </div>
        </div>
      </div>
    `;
  } else if (s.type === 'performance_list') {
    const listHtml = s.items.map((item, i) => `
      <li class="flex items-center gap-3 bg-white/80 border border-rose-100 px-5 py-3.5 rounded-xl shadow-sm text-left">
        <span class="w-7 h-7 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center flex-shrink-0">${i + 1}</span>
        <span class="font-semibold text-stone-800 text-base md:text-lg" data-editable-item="${i}">${item}</span>
      </li>
    `).join('');
    html = `
      <div class="slide-card glass-panel p-8 md:p-12">
        <span class="px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase mb-3" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-3xl md:text-5xl font-bold text-stone-800 mb-6" data-editable="title">${s.title}</h1>
        <ul class="grid grid-cols-1 gap-3.5 w-full max-w-2xl mx-auto">
          ${listHtml}
        </ul>
      </div>
    `;
  } else if (s.type === 'performance_single') {
    html = `
      <div class="slide-card glass-panel p-10 md:p-14">
        <div class="w-16 h-16 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mb-5 shadow-sm">
          <i class="fa-solid fa-music text-2xl"></i>
        </div>
        <span class="px-4 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-4xl md:text-5xl font-bold text-stone-800 mb-4" data-editable="title">${s.title}</h1>
        <div class="px-6 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-extrabold text-xl md:text-2xl mb-6" data-editable="performer">
          ${s.performer}
        </div>
        <div class="bg-white/85 border border-stone-200/80 rounded-2xl px-6 py-4 max-w-2xl inline-flex items-center gap-4 shadow-sm ${s.photo ? 'text-left' : 'text-center'}">
          ${s.photo ? `
            <div class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-rose-200 overflow-hidden flex-shrink-0 bg-rose-50 shadow-sm">
              <img src="${s.photo}" alt="${s.teacher}" class="w-full h-full object-cover object-center scale-125 translate-y-2" />
            </div>
          ` : ''}
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Guru Pembimbing</p>
            <p class="font-bold text-stone-800 text-base md:text-lg" data-editable="teacher">${s.teacher}</p>
            <p class="text-rose-700 font-semibold text-sm mt-0.5" data-editable="nickname">(${s.nickname})</p>
          </div>
        </div>
      </div>
    `;
    } else if (s.type === 'video_slide') {
    const frameClass = s.vertical
      ? 'h-[62vh] aspect-[9/16] mx-auto'
      : 'w-full max-w-4xl aspect-video';

    html = `
      <div class="slide-card glass-panel p-6 md:p-10">
        <span class="px-4 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-widest uppercase mb-3" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-3xl md:text-4xl font-bold text-stone-800 mb-5" data-editable="title">${s.title}</h1>
        <div class="${frameClass} rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-black">
          <video src="${s.videoSrc}" controls playsinline class="w-full h-full object-contain"></video>
        </div>
      </div>
    `;
  } else if (s.type === 'section_header') {
    html = `
      <div class="slide-card glass-panel p-12 md:p-16">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-rose-100 border-4 border-white shadow-md flex items-center justify-center mb-6">
          <i class="fa-solid ${s.icon} text-4xl text-amber-700"></i>
        </div>
        <span class="px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 leading-tight max-w-3xl mb-4" data-editable="title">${s.title}</h1>
        <p class="text-stone-600 text-lg md:text-2xl font-medium max-w-2xl" data-editable="subtitle">${s.subtitle}</p>
      </div>
    `;
  } else if (s.type === 'sub_header') {
    html = `
      <div class="slide-card glass-panel p-12 md:p-16">
        <span class="px-5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-widest uppercase mb-5" data-editable="badge">${s.badge}</span>
        <h1 class="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-emerald-700 mb-4" data-editable="title">${s.title}</h1>
        <p class="text-stone-600 text-xl md:text-2xl font-semibold" data-editable="subtitle">${s.subtitle}</p>
      </div>
    `;
  } else if (s.type === 'award_photo') {
    html = `
      <div class="slide-card glass-panel p-8 md:p-14">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-4xl text-center md:text-left">
          ${renderPhotoBox(s)}
          <div class="flex-1">
            <span class="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-widest uppercase mb-4" data-editable="badge">
              <i class="fa-solid fa-star text-amber-500"></i> ${s.badge}
            </span>
            <h2 class="text-xl md:text-2xl font-extrabold text-rose-700 tracking-wide uppercase mb-3" data-editable="awardTitle">${s.awardTitle}</h2>
            <p class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">Dianugerahkan Kepada</p>
            <h1 class="font-serif-display text-3xl md:text-5xl font-bold text-stone-800 leading-tight" data-editable="name">${s.name}</h1>
          </div>
        </div>
      </div>
    `;
    } else if (s.type === 'student_list') {
    const listItems = (s.students || []).map((nama, idx) => `
      <div class="bg-white/85 border border-rose-100 rounded-2xl px-5 py-3 text-left text-lg md:text-xl font-bold text-stone-800 shadow-xs leading-snug" data-editable="student_${idx}">
        ${nama}
      </div>
    `).join('');

    html = `
      <div class="slide-card glass-panel p-6 md:p-10 w-full max-w-6xl">
        <span class="px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs md:text-sm font-extrabold tracking-widest uppercase mb-2" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 mb-6" data-editable="title">${s.title}</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-6xl mx-auto">
          ${listItems}
        </div>
      </div>
    `;
  } else if (s.type === 'staff_photo') {
    html = `
      <div class="slide-card glass-panel p-8 md:p-16">
        <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14 w-full max-w-6xl text-center md:text-left">
          ${renderPhotoBox(s)}
          <div class="flex-1">
            <span class="inline-block px-5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-extrabold tracking-widest uppercase mb-5" data-editable="badge">${s.badge}</span>
            <p class="text-sm font-bold uppercase tracking-widest text-stone-400 mb-1.5">Nama</p>
            <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-6" data-editable="name">${s.name}</h1>
            <div class="flex flex-col items-center md:items-start gap-3">
              <div class="inline-block px-6 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 font-extrabold text-base md:text-lg tracking-wider uppercase" data-editable="role">
                JAWATAN: ${s.role}
              </div>
              ${s.education ? `
                <div class="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm md:text-base tracking-wide uppercase" data-editable="education">
                  <i class="fa-solid fa-graduation-cap text-amber-600 text-lg"></i> ${s.education}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    } else if (s.type === 'staff_simple') {
    html = `
      <div class="slide-card glass-panel p-10 md:p-16 text-center">
        <span class="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-widest uppercase mb-5" data-editable="badge">${s.badge}</span>
        <p class="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Nama</p>
        <h1 class="font-serif-display text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-6 max-w-4xl mx-auto" data-editable="name">${s.name}</h1>
        <div class="inline-block px-6 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 font-extrabold text-base md:text-lg tracking-wider uppercase" data-editable="role">
          JAWATAN: ${s.role}
        </div>
      </div>
    `;
  } else if (s.type === 'closing_thanks') {
    html = `
      <div class="slide-card glass-panel p-12 md:p-16">
        <div class="w-20 h-20 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-6 shadow-sm">
          <i class="fa-solid fa-hands-holding-heart text-3xl"></i>
        </div>
        <span class="px-4 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-widest uppercase mb-4" data-editable="badge">${s.badge}</span>
        <h1 class="font-serif-display text-6xl md:text-8xl font-bold text-stone-800 tracking-wide mb-5" data-editable="title">${s.title}</h1>
        <p class="text-stone-600 text-lg md:text-2xl max-w-2xl leading-relaxed" data-editable="subtitle">${s.subtitle}</p>
      </div>
    `;
  } else if (s.type === 'closing_quote') {
    const p = s.sidePhotos || [];
    html = `
      <div class="slide-card glass-panel p-8 md:p-14 relative overflow-hidden w-full max-w-7xl">
        ${p[0] ? `<img src="${p[0]}" alt="Kenangan 1" class="hidden md:block absolute top-4 left-4 w-64 h-44 object-cover rounded-2xl border-4 border-white shadow-xl -rotate-6" />` : ''}
        ${p[1] ? `<img src="${p[1]}" alt="Kenangan 2" class="hidden md:block absolute top-4 right-4 w-64 h-44 object-cover rounded-2xl border-4 border-white shadow-xl rotate-6" />` : ''}
        ${p[2] ? `<img src="${p[2]}" alt="Kenangan 3" class="hidden md:block absolute bottom-4 left-4 w-64 h-44 object-cover rounded-2xl border-4 border-white shadow-xl rotate-3" />` : ''}
        ${p[3] ? `<img src="${p[3]}" alt="Kenangan 4" class="hidden md:block absolute bottom-4 right-4 w-64 h-44 object-cover rounded-2xl border-4 border-white shadow-xl -rotate-3" />` : ''}

        <div class="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <span class="px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-5" data-editable="badge">${s.badge}</span>
          <h1 class="font-serif-display italic text-4xl md:text-5xl font-bold text-stone-800 leading-snug mb-5" data-editable="quote">${s.quote}</h1>
          <p class="text-rose-700 font-bold text-lg md:text-xl" data-editable="subtitle">${s.subtitle}</p>
        </div>
      </div>
    `;
  }

  stage.innerHTML = html;
  setupEditListeners();

  if (s.confetti && !isEditMode) {
    setTimeout(triggerConfetti, 250);
  }
  updateDrawerHighlight();
}

function renderPhotoBox(s) {
  if (s.photo) {
    return `
      <div class="photo-frame" onclick="handlePhotoClick()">
        <img src="${s.photo}" alt="Foto" style="object-position: ${s.imgPos || 'center'};" />
      </div>
    `;
  }
  return `
    <div class="photo-frame" onclick="handlePhotoClick()">
      <i class="fa-solid fa-image text-4xl text-rose-400/70 mb-2"></i>
      <span class="text-sm font-bold text-rose-800/80 px-4 text-center">${s.placeholderLabel || 'Ruang Gambar'}</span>
      <span class="text-[11px] text-stone-500 mt-1">Tadika Inspirasi 2026</span>
    </div>
  `;
}

// =========================================================================
// EDIT MODE & PHOTO UPLOAD
// =========================================================================
function toggleEditMode() {
  isEditMode = !isEditMode;
  document.body.classList.toggle('edit-mode', isEditMode);
  const banner = document.getElementById('edit-banner');
  const btn = document.getElementById('btn-edit-mode');
  if (banner) banner.classList.toggle('hidden', !isEditMode);
  if (btn) {
    btn.classList.toggle('bg-rose-600', isEditMode);
    btn.classList.toggle('text-white', isEditMode);
  }
  renderSlide(currentIndex);
}

function setupEditListeners() {
  if (!isEditMode) return;
  document.querySelectorAll('[data-editable]').forEach(el => {
    el.setAttribute('contenteditable', 'true');
    el.addEventListener('input', () => {
      const field = el.getAttribute('data-editable');
      slides[currentIndex][field] = el.innerText.trim();
      saveToStorage();
    });
  });
  document.querySelectorAll('[data-editable-item]').forEach(el => {
    el.setAttribute('contenteditable', 'true');
    el.addEventListener('input', () => {
      const idx = parseInt(el.getAttribute('data-editable-item'), 10);
      slides[currentIndex].items[idx] = el.innerText.trim();
      saveToStorage();
    });
  });
}

function handlePhotoClick() {
  if (!isEditMode) return;
  activePhotoTarget = currentIndex;
  document.getElementById('photo-uploader').click();
}

document.getElementById('photo-uploader').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file || activePhotoTarget === null) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const maxDim = 600;
      let w = img.width, h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
        else { w = Math.round(w * maxDim / h); h = maxDim; }
      }
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      slides[activePhotoTarget].photo = canvas.toDataURL('image/jpeg', 0.82);
      saveToStorage();
      renderSlide(currentIndex);
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});

function resetAllEdits() {
  if (!confirm('Padam semua perubahan nama & gambar dan kembali ke asal?')) return;
  localStorage.removeItem(STORAGE_KEY);
  slides = JSON.parse(JSON.stringify(defaultSlides));
  renderSlide(currentIndex);
}

function downloadSavedData() {
  fetch('script.js')
    .then(res => res.text())
    .then(code => {
      const updatedCode = code.replace(
        /const defaultSlides = \[[\s\S]*?\];\s*\/\/ =+/,
        `const defaultSlides = ${JSON.stringify(slides, null, 2)};\n// =========================================================================`
      );
      const blob = new Blob([updatedCode], { type: 'application/javascript' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'script.js';
      a.click();
    })
    .catch(() => {
      const fallback = `const defaultSlides = ${JSON.stringify(slides, null, 2)};`;
      const blob = new Blob([fallback], { type: 'application/javascript' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'slides_data.js';
      a.click();
    });
}

// =========================================================================
// NAVIGATION & DRAWER
// =========================================================================
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    renderSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide(currentIndex);
  }
}

function goToSlide(idx) {
  currentIndex = idx;
  renderSlide(currentIndex);
  toggleDrawer(false);
}

function buildDrawer() {
  const list = document.getElementById('drawer-list');
  if (!list) return;
  list.innerHTML = slides.map((s, idx) => {
    const label = s.awardTitle || s.title || s.name || `Slaid ${idx + 1}`;
    const sub = s.name && s.awardTitle ? ` — ${s.name}` : '';
    return `
      <button onclick="goToSlide(${idx})" id="drawer-item-${idx}" class="p-2 rounded-lg hover:bg-rose-50 text-left truncate border border-transparent transition">
        <span class="font-bold text-rose-700 mr-1">${idx + 1}.</span>
        <span class="text-stone-700 font-medium">${label}${sub}</span>
      </button>
    `;
  }).join('');
}

function updateDrawerHighlight() {
  document.querySelectorAll('[id^="drawer-item-"]').forEach((el, idx) => {
    el.classList.toggle('bg-rose-100/80', idx === currentIndex);
    el.classList.toggle('border-rose-300', idx === currentIndex);
  });
}

function toggleDrawer(forceState) {
  const drawer = document.getElementById('slide-drawer');
  if (!drawer) return;
  const show = typeof forceState === 'boolean' ? forceState : drawer.classList.contains('hidden');
  drawer.classList.toggle('hidden', !show);
}

// =========================================================================
// CONFETTI, BUTTERFLIES & GARDEN PARTICLES
// =========================================================================
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#F4B6CB', '#A84A6B', '#89B59E', '#F7D774', '#E9B949']
    });
  }
}

const butterflyPalettes = [
  { top: '#F497B6', bottom: '#F9C6D7', stroke: '#A84A6B' },
  { top: '#F7C95C', bottom: '#FCE39C', stroke: '#B88414' },
  { top: '#8ECAE6', bottom: '#BDE0FE', stroke: '#3B7A9E' },
  { top: '#CDB4DB', bottom: '#E2D1F0', stroke: '#6D4C82' }
];

const butterflies = [];

function createButterflyElement(palette) {
  const el = document.createElement('div');
  el.className = 'butterfly-actor';
  el.innerHTML = `
    <div class="butterfly-wings">
      <svg class="wing-left" width="22" height="40" viewBox="0 0 22 40">
        <path d="M21 18 C12 2, 1 4, 2 16 C3 22, 14 22, 21 20 Z" fill="${palette.top}" stroke="${palette.stroke}" stroke-width="1"/>
        <path d="M21 21 C13 22, 4 28, 8 36 C12 40, 19 31, 21 23 Z" fill="${palette.bottom}" stroke="${palette.stroke}" stroke-width="1"/>
      </svg>
      <div style="width:2.5px;height:20px;background:#4A3B3E;border-radius:4px;"></div>
      <svg class="wing-right" width="22" height="40" viewBox="0 0 22 40">
        <path d="M1 18 C10 2, 21 4, 20 16 C19 22, 8 22, 1 20 Z" fill="${palette.top}" stroke="${palette.stroke}" stroke-width="1"/>
        <path d="M1 21 C9 22, 18 28, 14 36 C10 40, 3 31, 1 23 Z" fill="${palette.bottom}" stroke="${palette.stroke}" stroke-width="1"/>
      </svg>
    </div>
  `;
  document.getElementById('butterfly-layer').appendChild(el);
  return el;
}

function spawnButterfly(x, y) {
  const palette = butterflyPalettes[Math.floor(Math.random() * butterflyPalettes.length)];
  const el = createButterflyElement(palette);
  butterflies.push({
    el,
    x: x ?? Math.random() * window.innerWidth,
    y: y ?? Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 1.8,
    vy: (Math.random() - 0.5) * 1.4,
    phase: Math.random() * Math.PI * 2,
    scale: 0.75 + Math.random() * 0.45
  });
}

function spawnExtraButterfly() {
  spawnButterfly(window.innerWidth * 0.5, window.innerHeight * 0.75);
  if (butterflies.length > 14) {
    const oldest = butterflies.shift();
    oldest.el.remove();
  }
}

function animateButterflies() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  butterflies.forEach(b => {
    b.phase += 0.04;
    b.vx += (Math.random() - 0.5) * 0.12;
    b.vy += (Math.random() - 0.5) * 0.12 + Math.sin(b.phase) * 0.03;
    b.vx = Math.max(-2.2, Math.min(2.2, b.vx));
    b.vy = Math.max(-1.8, Math.min(1.8, b.vy));

    b.x += b.vx;
    b.y += b.vy;

    if (b.x < 30) b.vx += 0.15;
    if (b.x > w - 60) b.vx -= 0.15;
    if (b.y < 30) b.vy += 0.15;
    if (b.y > h - 60) b.vy -= 0.15;

    const angle = Math.atan2(b.vy, b.vx) * (180 / Math.PI) + 90;
    b.el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${angle * 0.35}deg) scale(${b.scale})`;
  });
  requestAnimationFrame(animateButterflies);
}

function initGardenParticles() {
  const layer = document.getElementById('particle-layer');
  if (!layer) return;
  const colors = ['#F6C3D4', '#F9D5E1', '#B8D8C6', '#FCE39C'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const size = 8 + Math.random() * 10;
    p.style.width = `${size}px`;
    p.style.height = `${size * 0.75}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.backgroundColor = colors[i % colors.length];
    p.style.animationDuration = `${10 + Math.random() * 12}s`;
    p.style.animationDelay = `${-Math.random() * 15}s`;
    layer.appendChild(p);
  }
}

// =========================================================================
// AUTO-HIDE CONTROL BAR & KEYBOARD SHORTCUTS
// =========================================================================
function resetIdleTimer() {
  const bar = document.getElementById('control-bar');
  if (!bar || isBarManuallyHidden) return;
  bar.classList.remove('bar-hidden');
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (!isEditMode && document.getElementById('slide-drawer').classList.contains('hidden')) {
      bar.classList.add('bar-hidden');
    }
  }, 2500);
}

function toggleHideBar() {
  const bar = document.getElementById('control-bar');
  if (!bar) return;
  isBarManuallyHidden = !isBarManuallyHidden;
  bar.classList.toggle('bar-hidden', isBarManuallyHidden);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

document.addEventListener('mousemove', () => {
  if (!isBarManuallyHidden) resetIdleTimer();
});

document.addEventListener('keydown', (e) => {
  if (isEditMode && e.target.isContentEditable) return;
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
  } else if (e.key.toLowerCase() === 'c') {
    triggerConfetti();
  } else if (e.key.toLowerCase() === 'b') {
    spawnExtraButterfly();
  } else if (e.key.toLowerCase() === 'h') {
    toggleHideBar();
  } else if (e.key.toLowerCase() === 'f') {
    toggleFullscreen();
  } else if (e.key === '1') {
    toggleBgm('vip');
  } else if (e.key === '2') {
    toggleBgm('perarakan');
  }else if (e.key === '3') {
    toggleBgm('hadiah');
  } else if (e.key.toLowerCase() === 'm') {
    stopAllBgm();
  }
});

// =========================================================================
// TOUCH SWIPE SUPPORT (TABLET & TELEFON)
// =========================================================================
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
  if (!isBarManuallyHidden) resetIdleTimer();
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (isEditMode) return;
  const drawer = document.getElementById('slide-drawer');
  if (drawer && !drawer.classList.contains('hidden')) return;

  const deltaX = e.changedTouches[0].screenX - touchStartX;
  const deltaY = e.changedTouches[0].screenY - touchStartY;

  // Pastikan leretan mendatar lebih besar daripada menegak (minima 50px)
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      nextSlide(); // Swipe ke kiri -> slaid seterusnya
    } else {
      prevSlide(); // Swipe ke kanan -> slaid sebelum
    }
  }
}, { passive: true });

// =========================================================================
// INIT
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
  buildDrawer();
  renderSlide(0);
  initGardenParticles();
  for (let i = 0; i < 5; i++) spawnButterfly();
  animateButterflies();
  resetIdleTimer();
});

// =========================================================================
// MUZIK LATAR VIP & PERARAKAN (SHORTCUT BAR BAWAH)
// =========================================================================
function toggleBgm(type) {
  const tracks = {
    vip: {
      audio: document.getElementById('bgm-vip'),
      btn: document.getElementById('btn-bgm-vip'),
      ring: 'ring-emerald-500'
    },
    perarakan: {
      audio: document.getElementById('bgm-perarakan'),
      btn: document.getElementById('btn-bgm-perarakan'),
      ring: 'ring-purple-500'
    },
    hadiah: {
      audio: document.getElementById('bgm-hadiah'),
      btn: document.getElementById('btn-bgm-hadiah'),
      ring: 'ring-amber-500'
    }
  };

  // Hentikan lagu lain yang sedang dimainkan
  Object.keys(tracks).forEach(key => {
    if (key !== type && tracks[key].audio && !tracks[key].audio.paused) {
      tracks[key].audio.pause();
      tracks[key].audio.currentTime = 0;
      if (tracks[key].btn) {
        tracks[key].btn.classList.remove('ring-2', 'ring-offset-1', tracks[key].ring, 'animate-pulse');
      }
    }
  });

  // Mainkan atau hentikan lagu yang dipilih
  const target = tracks[type];
  if (target && target.audio) {
    if (target.audio.paused) {
      target.audio.play();
      if (target.btn) {
        target.btn.classList.add('ring-2', 'ring-offset-1', target.ring, 'animate-pulse');
      }
    } else {
      target.audio.pause();
      if (target.btn) {
        target.btn.classList.remove('ring-2', 'ring-offset-1', target.ring, 'animate-pulse');
      }
    }
  }
}

function stopAllBgm() {
  const rings = {
    vip: 'ring-emerald-500',
    perarakan: 'ring-purple-500',
    hadiah: 'ring-amber-500'
  };
  Object.keys(rings).forEach(type => {
    const audio = document.getElementById(`bgm-${type}`);
    const btn = document.getElementById(`btn-bgm-${type}`);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (btn) {
      btn.classList.remove('ring-2', 'ring-offset-1', rings[type], 'animate-pulse');
    }
  });
}