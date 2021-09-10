const swiper = new Swiper('.swiper', {
    loop: true,

  
    
    navigation: {
      nextEl: '.swiper-button-go',
      prevEl: '.swiper-button-back',
    }
  });



  const team = new Swiper('.team', {
    spaceBetween: 30,
    loop: true, 
    
     
    navigation: {
      nextEl: '.swiper-button-g',
      prevEl: '.swiper-button-b',
    },

    breakpoints: {
      320: {
        slidesPerView: 1
      },
     768: {
        slidesPerView: 4
      }
    }
  });