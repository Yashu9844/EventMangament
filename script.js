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



function galleryAnimation(){
  const elements = document.querySelectorAll('.translate-y-10');
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      }, {
        threshold: 0.1
      });
    
      elements.forEach(el => observer.observe(el));
}
galleryAnimation();


document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.group');
  faqItems.forEach(item => {
    window.addEventListener('scroll', () => {
      if (item.getBoundingClientRect().top < window.innerHeight) {
        item.classList.add('opacity-100');
      }
    });
  });
});





const fadeUps = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-6");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeUps.forEach(el => {
  el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-1000");
  observer.observe(el);
});



function setupModalTwo() {
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  if (closeModal && modal) {
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

    const serviceButtons = document.querySelectorAll('.enquire-btn');
    serviceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    });
  }
}
setupModalTwo();
