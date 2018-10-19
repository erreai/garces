$(document).ready(function() {
  $('.close-dimmer').click(function() {
    $(this).closest('body').addClass('dimmer-open')
  })

  $('.close-menu').click(function() {
    $(this).closest('body').removeClass('dimmer-open')
  })

  $('.imgLiquid').imgLiquid({
    verticalAlign: top
  })

  $('#carousel-lbx').owlCarousel({
    items: 1,
    lazyLoad: true,
    navText: ['<i></i><i></i>', '<i></i><i></i>'],
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    pullDrag: false
  })

  $('#carousel__home').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    navText: false,
    dots: true,
    margin: 10,
    pullDrag: false,
    dotsContainer: '.owl-dots'
  })

  $('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    language: 'es'
  })
  var slider = document.querySelectorAll('section')[0]
  let topBar = document.getElementById('top')
  $(window).scroll(function() {
    if ($(window).scrollTop() >= (slider.clientHeight - 80)) {
      topBar.classList.add('float')
    } else {
      if (topBar.classList.contains('float')) {
        topBar.classList.remove('float')
      }
    }
  })
})

var timelineSwiper = new Swiper('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year')
    return '<span class="' + className + '">' + year + '</span>'
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: 'horizontal'
    }
  }
})

AOS.init()
