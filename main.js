const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navLinks.classList.add('show');
    menuBtn.setAttribute('aria-expanded', 'true');
  };

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (navLinks.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // إغلاق القائمة عند الضغط على أي رابط داخلها (مفيد عند التنقل بين الصفحات من الجوال)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener('click', (event) => {
    if (
      navLinks.classList.contains('show') &&
      !navLinks.contains(event.target) &&
      event.target !== menuBtn
    ) {
      closeMenu();
    }
  });

  // إغلاق القائمة بمفتاح Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  // إغلاق القائمة تلقائياً إذا تم تكبير الشاشة (مثل تدوير الجوال أو فتح جهاز لوحي)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
      closeMenu();
    }
  });
}
