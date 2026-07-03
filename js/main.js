const heroHeadline = document.querySelector('.hero-headline');
if (heroHeadline) {
  const updateHeroScale = () => {
    heroHeadline.classList.toggle('is-small', window.scrollY > 0);
  };
  updateHeroScale();
  window.addEventListener('scroll', updateHeroScale, { passive: true });
}
