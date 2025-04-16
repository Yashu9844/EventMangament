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
  setupDropdowns();
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


function aboutUsanimation(){
  // Animation for About Us section
document.addEventListener('DOMContentLoaded', function() {
  // Elements to animate
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Animation options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  // Intersection Observer callback
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        
        setTimeout(() => {
          el.classList.add('animated');
          // Remove observer after animation
          observer.unobserve(el);
        }, delay);
      }
    });
  };
  
  // Create observer
  const observer = new IntersectionObserver(animateOnScroll, options);
  
  // Observe all elements
  animateElements.forEach(el => {
    observer.observe(el);
  });
  
  // Parallax effect for decorative elements
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Apply parallax to image decorative elements
    const decorElements = document.querySelectorAll('.decor-element');
    decorElements.forEach(el => {
      const speed = el.dataset.speed || 0.1;
      el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
    
    // Stats counter animation when in view
    const counterSection = document.querySelector('.stats-section');
    if (counterSection && isElementInViewport(counterSection) && !counterSection.classList.contains('counted')) {
      counterSection.classList.add('counted');
      animateCounters();
    }
  });
  
  // Counter animation for stats
  function animateCounters() {
    const counters = document.querySelectorAll('.counter-value');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounters(), 1);
      } else {
        counter.innerText = target;
      }
    });
  }
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Image tilt effect on hover
  const tiltImage = document.querySelector('.tilt-effect');
  if (tiltImage) {
    tiltImage.addEventListener('mousemove', function(e) {
      const boundingRect = this.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;
      
      const centerX = boundingRect.width / 2;
      const centerY = boundingRect.height / 2;
      
      const tiltX = (mouseX - centerX) / centerX * 10;
      const tiltY = (mouseY - centerY) / centerY * 10;
      
      this.style.transform = `perspective(1000px) rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
    });
    
    tiltImage.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
});
}



function aboutUsAnimation(){
  function createBubbles() {
    const bubbles = document.getElementById('bubbles');
    const colors = ['#8A2BE2', '#FF69B4', '#9370DB', '#FF1493', '#BA55D3'];
    
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      const size = Math.random() * 100 + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      bubble.style.position = 'absolute';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.borderRadius = '50%';
      bubble.style.backgroundColor = color;
      bubble.style.opacity = '0.1';
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.transform = 'scale(0)';
      
      bubbles.appendChild(bubble);
      
      gsap.to(bubble, {
        scale: 1,
        duration: Math.random() * 3 + 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
      
      gsap.to(bubble, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 20 + 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    }
  }
  
  // Sparkle effect on hover for buttons
  function createSparkleEffect() {
    const button = document.getElementById('cta-button');
    
    button.addEventListener('mousemove', (e) => {
      const x = e.clientX - button.getBoundingClientRect().left;
      const y = e.clientY - button.getBoundingClientRect().top;
      
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      button.appendChild(sparkle);
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      gsap.to(sparkle, {
        scale: Math.random() * 2 + 1,
        opacity: 0.7,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          gsap.to(sparkle, {
            opacity: 0,
            duration: 0.5,
            ease: 'power1.in',
            onComplete: () => {
              sparkle.remove();
            }
          });
        }
      });
    });
  }
  
  // Initialize animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    createSparkleEffect();
    
    // Hero section animations
    gsap.to('#main-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2
    });
    
    gsap.to('#subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 0.6
    });
    
    // Story section animations
    ScrollTrigger.create({
      trigger: '#story-image-container',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('#story-image', {
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out'
        });
      }
    });
    
    ScrollTrigger.create({
      trigger: '#story-content',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('#story-title', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        
        gsap.to('#story-text', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3
        });
      }
    });
    
    // Values section animations
    ScrollTrigger.create({
      trigger: '#values-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('#values-title', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        
        gsap.to('.value-card', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2
        });
      }
    });
    
    // Team section animations
    ScrollTrigger.create({
      trigger: '#team-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('#team-title', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        
        gsap.to('.team-member', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15
        });
      }
    });
    
    // CTA section animations
    ScrollTrigger.create({
      trigger: '#cta-section',
      start: 'top 80%',
      onEnter: () => {
        gsap.to('#cta-title', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        
        gsap.to('#cta-text', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2
        });
        
        gsap.to('#cta-button', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.4
        });
      }
    });
  });
}

aboutUsAnimation();


// Add this to your existing JavaScript code
function setupDropdowns() {
  // Desktop services dropdown
  const desktopServicesBtn = document.getElementById('desktop-services-btn');
  const desktopServicesDropdown = document.getElementById('desktop-services-dropdown');
  const desktopArrowDown = document.getElementById('desktop-arrow-down');
  const desktopArrowUp = document.getElementById('desktop-arrow-up');

  if (desktopServicesBtn && desktopServicesDropdown) {
    desktopServicesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      desktopServicesDropdown.classList.toggle('hidden');
      desktopArrowDown.classList.toggle('hidden');
      desktopArrowUp.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
      desktopServicesDropdown.classList.add('hidden');
      desktopArrowDown.classList.remove('hidden');
      desktopArrowUp.classList.add('hidden');
    });
  }

  // Mobile services dropdown
  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileServicesDropdown = document.getElementById('mobile-services-dropdown');

  if (mobileServicesBtn && mobileServicesDropdown) {
    mobileServicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      mobileServicesDropdown.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
      mobileServicesDropdown.classList.add('hidden');
    });
  }
}

// Then add this to your DOMContentLoaded event listener
