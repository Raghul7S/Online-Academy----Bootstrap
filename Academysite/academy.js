const cards = document.querySelectorAll('.animate-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

cards.forEach(card => {
  observer.observe(card);
});

