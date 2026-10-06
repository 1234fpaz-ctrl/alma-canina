/* Alma Canina — interacciones globales (ligeras, sin dependencias). */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reveal on scroll + disparadores (huellas, pelota, huella→documento) */
function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('.reveal, .paw-trail, .ball-zone, .paw-doc, [data-count]');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => (el.textContent = el.dataset.count ?? ''));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('is-visible');
        if (el.dataset.count) animateCount(el);
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => io.observe(el));
}

/* Contadores animados */
function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count || 0);
  const start = performance.now();
  const dur = 1400;
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Header: fondo al hacer scroll y se oculta al bajar */
function initHeader() {
  const header = document.querySelector<HTMLElement>('.site-header');
  if (!header) return;
  const overlay = header.dataset.overlay === 'true';
  const logoDark = header.querySelector<HTMLElement>('.logo-dark');
  const logoLight = header.querySelector<HTMLElement>('.logo-light');
  let lastY = window.scrollY;
  const update = () => {
    const y = window.scrollY;
    const scrolled = y > 24;
    header.dataset.scrolled = String(scrolled);
    header.dataset.hidden = String(y > 400 && y > lastY + 4);
    if (y < lastY - 4) header.dataset.hidden = 'false';
    if (overlay && logoDark && logoLight) {
      logoDark.hidden = !scrolled;
      logoLight.hidden = scrolled;
      header.classList.toggle('text-blanco', !scrolled);
    }
    lastY = y;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* Menú móvil accesible */
function initMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const close = menu?.querySelector<HTMLButtonElement>('.menu-close');
  if (!toggle || !menu || !close) return;
  const setOpen = (open: boolean) => {
    menu.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) {
      menu.removeAttribute('inert');
      setTimeout(() => close.focus(), 50);
    } else {
      menu.setAttribute('inert', '');
      toggle.focus();
    }
  };
  toggle.addEventListener('click', () => setOpen(true));
  close.addEventListener('click', () => setOpen(false));
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
    if (e.key === 'Tab') {
      const f = menu.querySelectorAll<HTMLElement>('a, button');
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* Perrito que cruza ocasionalmente por el borde inferior (máx. 1 vez por visita de página) */
function initWalker() {
  const dog = document.querySelector<HTMLElement>('[data-dog-walker]');
  if (!dog || reduceMotion) return;
  let walked = false;
  const walk = () => {
    if (walked || document.hidden) return;
    walked = true;
    dog.classList.add('is-walking');
    dog.addEventListener('animationend', (e) => { if (e.target === dog) dog.classList.remove('is-walking'); }, { once: true });
  };
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && window.scrollY / max > 0.45) { walk(); window.removeEventListener('scroll', onScroll); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(walk, 25000);
}

/* Parallax muy sutil */
function initParallax() {
  const els = document.querySelectorAll<HTMLElement>('.parallax');
  if (!els.length || reduceMotion) return;
  let ticking = false;
  const update = () => {
    els.forEach((el) => {
      const speed = Number(el.dataset.speed || 0.08);
      const rect = el.parentElement!.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.08)`;
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

initReveal();
initHeader();
initMenu();
initWalker();
initParallax();
