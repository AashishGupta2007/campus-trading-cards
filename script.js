const cards = document.querySelectorAll('.card');

// Hover handles desktop; this adds a tap toggle for touch devices,
// where :hover doesn't fire reliably.
cards.forEach((card) => {
  card.addEventListener('click', () => {
    const wasActive = card.classList.contains('is-active');
    cards.forEach((c) => c.classList.remove('is-active'));
    if (!wasActive) card.classList.add('is-active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.card')) {
    cards.forEach((c) => c.classList.remove('is-active'));
  }
});
