// Minimal JS: mobile menu + accent switcher persistence
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const btn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.primary-nav ul');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.background = 'rgba(6,9,12,0.95)';
      nav.style.padding = '10px';
      nav.style.borderRadius = '10px';
      nav.style.boxShadow = '0 10px 30px rgba(2,6,8,0.6)';
    });
  }

  // Accent switcher buttons
  const swatches = document.querySelectorAll('.swatch');
  swatches.forEach(s => {
    s.addEventListener('click', () => {
      const theme = s.getAttribute('data-theme');
      if (theme) {
        document.body.classList.remove('theme-cyberblue','theme-violet','theme-emerald','theme-blue');
        document.body.classList.add(theme);
        // save preference
        try { localStorage.setItem('hv_theme', theme); } catch(e){}
      }
    });
  });

  // Load saved theme
  try {
    const saved = localStorage.getItem('hv_theme');
    if (saved) {
      document.body.classList.remove('theme-cyberblue','theme-violet','theme-emerald','theme-blue');
      document.body.classList.add(saved);
    }
  } catch(e){}
});
