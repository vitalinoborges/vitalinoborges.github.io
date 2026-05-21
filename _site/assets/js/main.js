// ============================================================
// SCROLL TO TOP
// ============================================================
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// READING PROGRESS BAR
// ============================================================
const progressBar = document.getElementById('readingProgress');

if (progressBar) {
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + '%';
  });
}
