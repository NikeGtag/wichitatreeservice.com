// Mobile menu toggle (if you add a hamburger later)
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('#mobile-menu');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('hidden');
    });
  }
});
