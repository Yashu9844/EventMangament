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



function howItWorksAnimation() {
  document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  });
}
howItWorksAnimation();



function teamIntroAnimation() {
  document.addEventListener("DOMContentLoaded", function() {
    // Animation for staggered items
    const staggerItems = document.querySelectorAll('.stagger-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, index * 150); // Stagger effect with 150ms delay between items
        }
      });
    }, { threshold: 0.1 });
    
    staggerItems.forEach(item => {
      observer.observe(item);
    });
    
    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.getAttribute('data-width');
      }, 500);
    });
    
    // Counter animation
    function animateCounters() {
      const counters = document.querySelectorAll('.counter-value');
      const speed = 200;
      
      counters.forEach(counter => {
        const target = counter.innerText;
        counter.innerText = '0';
        
        const updateCount = () => {
          // Only animate numeric counters
          if (target.match(/^\d+\+?$/)) {
            const numValue = parseInt(target);
            const value = parseInt(counter.innerText);
            const increment = Math.ceil(numValue / speed);
            
            if (value < numValue) {
              counter.innerText = value + increment;
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          } else {
            counter.innerText = target;
          }
        };
        
        updateCount();
      });
    }
    
    // Trigger counter animation when in view
    const counterSection = document.querySelector('.counter-value');
    const counterObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        counterObserver.unobserve(counterSection);
      }
    }, { threshold: 0.5 });
    
    if (counterSection) {
      counterObserver.observe(counterSection);
    }
  });
}
teamIntroAnimation();