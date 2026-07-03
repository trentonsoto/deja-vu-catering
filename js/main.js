const heroHeadline = document.querySelector('.hero-headline');
if (heroHeadline) {
  const updateHeroScale = () => {
    heroHeadline.classList.toggle('is-small', window.scrollY > 0);
  };
  updateHeroScale();
  window.addEventListener('scroll', updateHeroScale, { passive: true });

  const homeLink = heroHeadline.querySelector('a');
  if (homeLink) {
    homeLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
