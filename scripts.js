(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('primary-navigation');

  if (!hamburger || !nav) return;

  const openMenu = () => {
    nav.setAttribute('data-state', 'open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    nav.setAttribute('data-state', 'closed');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const toggleMenu = () => {
    const isOpen = nav.getAttribute('data-state') === 'open';
    isOpen ? closeMenu() : openMenu();
  };

  // Click / touch on hamburger
  hamburger.addEventListener('click', toggleMenu, { passive: true });
  hamburger.addEventListener('touchstart', (e) => {
    // Ensure touch triggers quickly on some mobile browsers
    e.preventDefault();
    toggleMenu();
  }, { passive: false });

  // Close when clicking a nav link
  nav.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close when clicking outside panel (mobile)
  document.addEventListener('click', (e) => {
    const isOpen = nav.getAttribute('data-state') === 'open';
    if (!isOpen) return;
    const clickInsideMenu = nav.contains(e.target);
    const clickHamburger = hamburger.contains(e.target);
    if (!clickInsideMenu && !clickHamburger) {
      closeMenu();
    }
  });
})();
