
    function coursel(){
        const images = [
            'assets/image1.jpg',
            'assets/image2.jpg',
            'assets/image3.jpg',
            'assets/image2.jpg',
            'assets/image1.jpg',
            'assets/image3.jpg',
          ];
      
          let current = 0;
          const carousel = document.getElementById("carousel");
      
          setInterval(() => {
            current = (current + 1) % images.length;
            carousel.style.backgroundImage = `url('${images[current]}')`;
          }, 4000);
        
    
        }

        coursel()