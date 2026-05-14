// ─── DATA ──────────────────────────────────────────────────────
const MENU_ITEMS = [
  {
    name: "Caramel Machiato",
    cat: "coffee",
    desc: "Espresso dengan susu segar dan saus karamel, topped whipped cream dan taburan oreo.",
    price: "Rp 28.000",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
    tag: "Signature"
  },
  {
    name: "Es Kopi Haku",
    cat: "special",
    desc: "Minuman signature Hakui Kopi — perpaduan sempurna antara espresso, susu, dan es yang menyegarkan.",
    price: "Rp 25.000",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    tag: "Best Seller"
  },
  {
    name: "Cold Brew",
    cat: "coffee",
    desc: "Kopi diseduh dingin selama 12 jam untuk menghasilkan rasa yang halus dan tanpa rasa pahit.",
    price: "Rp 27.000",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&q=80",
  },
  {
    name: "Espresso",
    cat: "coffee",
    desc: "Single shot espresso dengan biji pilihan. Kuat, penuh karakter, dan klasik.",
    price: "Rp 18.000",
    img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
  },
  {
    name: "Creamy Chocolatte",
    cat: "noncoffee",
    desc: "Coklat rich dengan susu full cream dan lapisan krim lembut. Non-coffee favorit semua usia.",
    price: "Rp 24.000",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    tag: "Favorit"
  },
  {
    name: "Matcha Latte",
    cat: "noncoffee",
    desc: "Matcha grade A dari Jepang dipadukan dengan susu oat segar dan sedikit madu.",
    price: "Rp 26.000",
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80",
  },
  {
    name: "Americano",
    cat: "coffee",
    desc: "Espresso panjang dengan air panas. Bold, bersih, dan sempurna untuk memulai hari.",
    price: "Rp 20.000",
    img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80",
  },
  {
    name: "Taro Latte",
    cat: "noncoffee",
    desc: "Creamy taro blend dengan susu segar — warna cantik, rasa manis lembut yang khas.",
    price: "Rp 25.000",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

const GALLERY_ITEMS = [
  { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80", alt: "Interior Hakui Kopi" },
  { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", alt: "Barista Hakui Kopi" },
  { img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80", alt: "Menu Hakui Kopi" },
  { img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80", alt: "Suasana Hakui Kopi" },
  { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", alt: "Kopi Hakui" },
  { img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80", alt: "Es Kopi Haku" },
  { img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80", alt: "Eksterior Hakui" },
  { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", alt: "Cafe vibes Hakui" },
];

// ─── RENDER MENU ─────────────────────────────────────────────────
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  MENU_ITEMS.forEach((item, i) => {
    if (filter !== 'all' && item.cat !== filter) return;
    const card = document.createElement('div');
    card.className = 'menu__card';
    card.setAttribute('data-cat', item.cat);
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="menu__card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="menu__card-body">
        <div class="menu__card-cat">${item.cat === 'special' ? '★ Signature' : item.cat === 'coffee' ? 'Coffee' : 'Non-Coffee'}</div>
        <h3 class="menu__card-name">${item.name}</h3>
        <p class="menu__card-desc">${item.desc}</p>
        <div class="menu__card-price">${item.price}</div>
      </div>
    `;
    card.style.animation = 'fadeUp 0.5s ease both';
    grid.appendChild(card);
  });
}

// ─── RENDER GALLERY ───────────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  GALLERY_ITEMS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery__item';
    el.innerHTML = `
      <img src="${item.img}" alt="${item.alt}" loading="lazy" />
      <div class="gallery__item__overlay"></div>
    `;
    grid.appendChild(el);
  });
}

// ─── NAV ──────────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  const hamburger = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '100%';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(13,11,8,0.97)';
    links.style.padding = '20px';
    links.style.borderBottom = '1px solid rgba(255,220,120,0.12)';
    links.style.backdropFilter = 'blur(20px)';
  });

  // smooth close on link click
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) links.style.display = 'none';
    });
  });
}

// ─── MENU TABS ────────────────────────────────────────────────────
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('menu__tab--active'));
      tab.classList.add('menu__tab--active');
      renderMenu(tab.dataset.cat);
    });
  });
}

// ─── INTERSECTION OBSERVER (scroll reveal) ────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about__grid, .location__card, .menu__card, .gallery__item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ─── HERO PARALLAX ────────────────────────────────────────────────
function initParallax() {
  const heroImg = document.querySelector('.hero__img-wrap');
  if (!heroImg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroImg.style.transform = `translateY(${y * 0.3}px)`;
  });
}

// ─── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderMenu('all');
  renderGallery();
  initMenuTabs();
  initParallax();
  // delay reveal so rendered elements are in DOM
  setTimeout(initReveal, 100);
});
