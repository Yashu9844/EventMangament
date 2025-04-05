
    function coursel(){
        const images = [
            'assets/w6.jpg',
            'assets/w5.jpg',
            'assets/w4.jpg',
            'assets/w3.jpg',
            'assets/w2.jpg',
            'assets/w1.jpg',
          ];
      
          let current = 0;
          const carousel = document.getElementById("carousel");
      
          setInterval(() => {
            current = (current + 1) % images.length;
            carousel.style.backgroundImage = `url('${images[current]}')`;
          }, 4000);
        
    
        }

        coursel()

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
    
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });