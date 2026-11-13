(function () {
  var BREAKPOINT = 900;
  var btn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) { return; }
  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
    if (open) { menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden', ''); }
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
  window.addEventListener('resize', function () { if (window.innerWidth > BREAKPOINT) { setOpen(false); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
}());
