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

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
      document.getElementById('navbar_top_news').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top_news').classList.remove('fixed-top');
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
  slidesToShow: 3,
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


// ------ Chart ------------

var xyValues = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

var myChart = new Chart("myChart", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "#1fa66e",
      data: xyValues
    }]
  },
  options:{}
});


var xLineValues = [50,60,70,80,90,100,110,120,130,140,150];
var yLineValues = [7,8,8,9,9,9,10,11,14,14,15];
var barColors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#f1c40f",
  "#27ae60",
  "#fd79a8",
  "#fdcb6e",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
];

var Line = new Chart("myLineChart", {
  type: "line",
  data: {
    labels: xLineValues,
    datasets: [{
      backgroundColor: "transparent",
      borderColor: "#1fa66e",
      data: yLineValues
    }]
  },
  options:{}
});



var xPieValues = [50,60,70,80,90];
var yPieValues = [50,60,70,80,90];

var Pie = new Chart("myPieChart", {
  type: "doughnut",
  data: {
    labels: xPieValues,
    datasets: [{
      backgroundColor: barColors,
      data: yPieValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production"
    }
  }
});

// ------------- CART ------------------



// --------------- SUCCESS MILESTONE ---------------


// --------------- SUCCESS MILESTONE ---------------

