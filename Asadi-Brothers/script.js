
  AOS.init();



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
    },
  });

// Product 2
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
    },
  });


  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
    },
  });

  let milad = document.getElementById('anim');


  var typed = new Typed('.anim' , {
  strings:[
  'Best Product'
],
  typeSpeed:100,
  typeSpeed:100,
  loop:true
  });

  var typed1 = new Typed('.anim1' , {
    strings:[
    "Best Product"
  ],
    typeSpeed:100,
    typeSpeed:100,
    loop:true
    });


    var typed1 = new Typed('.type1' , {
      strings:[
      "First slide label"
    ],
      typeSpeed:100,
      typeSpeed:100,
      loop:true
      });

      window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let header = document.getElementById('Header')
  let search  = document.getElementById('srch')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.background = 'black'
    header.style.position = 'fixed'
    search.style.background = 'white';
  }
  else{
    header.style.position = 'relative'
    header.style.background = 'white'
    search.style.background = 'gainsboro';
  }}


  function myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    if(w < 900){
      search.style.background = 'white';
    }
  }


  $('.menu').click(function(){
    $('nav').toggle('300')
  })


  