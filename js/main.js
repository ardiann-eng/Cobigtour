// Cobig Tour - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons after paint
  requestAnimationFrame(function() { lucide.createIcons(); });

  // 1. Sticky nav
  const nav = document.getElementById('nav');
  const announcementBar = document.getElementById('announcement-bar');
  function handleScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      nav.style.top = '0';
      if (announcementBar) announcementBar.style.transform = 'translateY(-100%)';
    } else {
      nav.classList.remove('scrolled');
      nav.style.top = '';
      if (announcementBar) announcementBar.style.transform = '';
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');
  function openMenu() { mobileMenu.classList.add('open'); mobileMenu.setAttribute('aria-hidden','false'); document.body.classList.add('menu-open'); }
  function closeMenu() { mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden','true'); document.body.classList.remove('menu-open'); }
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(function(link) { link.addEventListener('click', closeMenu); });

  // 3. Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  reveals.forEach(function(el) { observer.observe(el); });

  // 4. FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var btn = item.querySelector('.faq-btn');
    btn.addEventListener('click', function() {
      if (item.classList.contains('open')) { item.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
      else { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });
  if (faqItems.length > 0) { faqItems[0].classList.add('open'); faqItems[0].querySelector('.faq-btn').setAttribute('aria-expanded','true'); }

  // 5. Custom dropdowns
  document.querySelectorAll('.custom-select-btn, .quick-select-btn').forEach(function(btn) {
    var dropdown = document.getElementById(btn.dataset.target);
    var wrap = btn.closest('.custom-select-wrap, .quick-select-wrap');
    var hiddenInput = wrap.querySelector('input[type="hidden"]');
    var chevron = btn.querySelector('[data-lucide="chevron-down"]');
    var valueEl = btn.querySelector('.select-value, .qs-value');
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      document.querySelectorAll('.custom-dropdown').forEach(function(d) { if (d !== dropdown) d.classList.add('hidden'); });
      dropdown.classList.toggle('hidden');
      if (chevron) chevron.style.transform = dropdown.classList.contains('hidden') ? '' : 'rotate(180deg)';
    });
    dropdown.querySelectorAll('.custom-option, .qs-option').forEach(function(opt) {
      opt.addEventListener('click', function() {
        valueEl.textContent = opt.textContent;
        hiddenInput.value = opt.dataset.value;
        dropdown.classList.add('hidden');
        if (chevron) chevron.style.transform = '';
      });
    });
  });
  document.addEventListener('click', function() {
    document.querySelectorAll('.custom-dropdown').forEach(function(d) { d.classList.add('hidden'); });
  });

  // 5b. Testimonial marquee
  var marquee = document.querySelector('.testimonial-marquee');
  if (marquee) { marquee.innerHTML += marquee.innerHTML; }

  // 6. Quick search bar
  var quickBtn = document.getElementById('quick-search-btn');
  if (quickBtn) {
    quickBtn.addEventListener('click', function() {
      var bulan = document.getElementById('quick-bulan').value;
      var paket = document.getElementById('quick-paket').value;
      var jamaah = document.getElementById('quick-jamaah').value;
      var msg = 'Assalamualaikum, saya ingin konsultasi paket umroh Cobig Tour.\n\nPaket: ' + paket + '\nBulan: ' + bulan + '\nJamaah: ' + jamaah;
      window.open('https://wa.me/6285395621456?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  // 7. Form submit
  var form = document.getElementById('registration-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var nama = form.querySelector('#nama').value.trim();
    var wa = form.querySelector('#whatsapp').value.trim();
    var email = form.querySelector('#email').value.trim();
    var paket = form.querySelector('#paket').value;
    var bulan = form.querySelector('#bulan').value;
    var catatan = form.querySelector('#catatan').value.trim();
    var msg = 'Assalamualaikum, saya ingin mendaftar umroh Cobig Tour.\n\nNama: ' + nama + '\nWhatsApp: ' + wa;
    if (email) msg += '\nEmail: ' + email;
    msg += '\nPaket: ' + paket + '\nBulan: ' + bulan;
    if (catatan) msg += '\nCatatan: ' + catatan;
    window.open('https://wa.me/6285395621456?text=' + encodeURIComponent(msg), '_blank');
  });

  // 8. Image fallback
  document.querySelectorAll('img[data-fallback]').forEach(function(img) {
    img.addEventListener('error', function() { this.style.display = 'none'; this.parentElement.classList.add('img-fallback'); });
  });
});


// Package carousel (mobile)
(function() {
  var track = document.getElementById('paket-track');
  var dots = document.getElementById('paket-dots');
  var prev = document.getElementById('paket-prev');
  var next = document.getElementById('paket-next');
  if (!track || !dots) return;
  var cards = track.children;
  var current = 0;
  var total = cards.length;

  // Create dots
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('span');
    dot.className = 'w-3 h-3 rounded-full bg-navy-300 border border-navy-400 transition-colors cursor-pointer';
    dot.dataset.index = i;
    dot.addEventListener('click', function() { goTo(+this.dataset.index); });
    dots.appendChild(dot);
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, total - 1));
    if (window.innerWidth < 768) {
      var card = cards[current];
      var offset = card.offsetLeft;
      track.style.transform = 'translateX(-' + offset + 'px)';
    }
    var allDots = dots.children;
    for (var j = 0; j < allDots.length; j++) {
      allDots[j].className = j === current
        ? 'w-3 h-3 rounded-full bg-gold-500 transition-colors cursor-pointer'
        : 'w-3 h-3 rounded-full bg-navy-300 border border-navy-400 transition-colors cursor-pointer';
    }
  }

  prev.addEventListener('click', function() { goTo(current - 1); });
  next.addEventListener('click', function() { goTo(current + 1); });

  // Touch swipe
  var startX = 0, diffX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; });
  track.addEventListener('touchmove', function(e) { diffX = e.touches[0].clientX - startX; });
  track.addEventListener('touchend', function() {
    if (diffX > 50) goTo(current - 1);
    else if (diffX < -50) goTo(current + 1);
    diffX = 0;
  });

  // Reset on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      track.style.transform = '';
    } else {
      goTo(current);
    }
  });

  goTo(0);
})();
