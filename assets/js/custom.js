$(document).ready(function () {
  setTimeout(() => {
    $('.preloader').fadeOut();
  }, 3000);
});

$('.homeslider-wrapper').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-up'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa-solid fa-arrow-down'></i></button>",
});

$('.latestnews-slide-wrapper').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  // prevArrow:
  //   "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-up'></i></button>",
  // nextArrow:
  //   "<button type='button' class='slick-next '><i class='fa-solid fa-arrow-down'></i></button>",
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 990) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});
// DOMContentLoaded  end

$('.newsslider-wrapper').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa-solid fa-arrow-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$('.portfolio-slider-wrapper').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa-solid fa-arrow-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$('.team-slider-wrapper').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-arrow-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa-solid fa-arrow-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.our-project-slider-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 500,
  // fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
});
