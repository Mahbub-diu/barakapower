$(document).ready(function () {
  setTimeout(() => {
    $('.preloader').fadeOut();
  }, 2000);
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
    "<button type='button' class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next '><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
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
