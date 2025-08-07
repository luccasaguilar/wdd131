document.querySelectorAll('img.lazy-fade').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add('lazy-fade-loaded');
  });
});

