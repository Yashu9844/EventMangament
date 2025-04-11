// Carousel function
function coursel() {
  const images = [
    'assets/w6.jpg',
    'assets/w5.jpg',
    'assets/w4.jpg',
    'assets/w3.jpg',
    'assets/w2.jpg',
    'assets/w1.jpg',
  ];

  let current = 0;
  const carousel = document.getElementById('carousel');

  if (carousel) {
    setInterval(() => {
      current = (current + 1) % images.length;
      carousel.style.backgroundImage = `url('${images[current]}')`;
    }, 4000);
  }
}

// Mobile menu toggle
function setupMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Modal setup
function setupModal() {
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  if (openModal && closeModal && modal) {
    openModal.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });

    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });

    // 👇 Attach to service cards too
    const serviceButtons = document.querySelectorAll('.enquire-btn');
    serviceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    });
  }
}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  coursel();
  setupMobileMenu();
  setupModal();

  // ScrollCue initialization (only if needed)
  if (typeof scrollCue !== 'undefined') {
    scrollCue.init({
      interval: -200,
      duration: 800,
    });
  }
});