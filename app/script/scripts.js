$(document).ready(function() {
  $('#preload').remove()
  $('body').removeClass('loading')
  $('.close-dimmer').click(function() {
    $(this).closest('body').addClass('dimmer-open')
  })

  $('.close-menu').click(function() {
    $(this).closest('body').removeClass('dimmer-open')
  })

  $('.imgLiquid').imgLiquid({
    verticalAlign: 'top'
  })
  $('.imgLiquidNoFill').imgLiquid({
    fill: false,
    horizontalAlign: 'center'
  })
  $('.image-compound__image').children('img').removeAttr('style')
  $('.image_front').children('img').removeAttr('style')

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

  $('#carousel__inner').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    navText: false,
    dots: true,
    margin: 10,
    pullDrag: false,
    dotsContainer: '.owl-dots',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight'
  })
  $('#carousel__home').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    navText: false,
    dots: true,
    margin: 10,
    pullDrag: false,
    dotsContainer: '.owl-dots',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown'
  })

  $('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    language: 'es'
  })
  var slider = document.querySelectorAll('section')[0]
  const topBar = document.getElementById('top')
  const topHeader = document.getElementsByClassName('top-header')[0]
  topHeader.classList.add('static')
  $(window).scroll(function() {
    if (slider.clientHeight > 115) {
      topHeader.classList.remove('static')
      if ($(window).scrollTop() >= (slider.clientHeight - 80)) {
        topBar.classList.add('float')
      } else {
        if (topBar.classList.contains('float')) {
          topBar.classList.remove('float')
        }
      }
    }
  })
  AOS.init()

  $('#form_ficha').submit(function(e) {
    e.preventDefault()
    $(this).parent().fadeOut()
    $('#datos').fadeIn()
    $('#step_ficha').removeClass('active')
    $('#step_datos').addClass('active')
  })
  $('.back-to-top').hover(
    () => {
      $('.back-to-top span').addClass('animated infinite bounce ')
    },
    () => {
      $('.back-to-top span').removeClass('animated infinite bounce ')
    }
  )
  $(window).scroll(function() {
    var scroll = $(window).scrollTop()
    if (scroll >= 500) {
      $('.back-to-top').addClass('visible')
    } else {
      $('.back-to-top').removeClass('visible')
    }
  })
})

var timelineSwiper = new Swiper('.timeline .swiper-container', {
  direction: 'vertical',
  autoplay: {
    delay: 5000
  },
  initialSlide: 1,
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
      direction: 'vertical'
    }
  }
})

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target)
          $target.focus()
          if ($target.is(':focus')) {
            return false
          } else {
            $target.attr('tabindex', '-1')
            $target.focus()
          };
        })
      }
    }
  })

var historySwiper = new Swiper('.history .swiper-container', {
  direction: 'vertical',
  autoplay: {
    delay: 5000
  },
  speed: 400,
  pagination: '.swiper-pagination-years',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year')
    return '<span class="' + className + '">' + year + '</span>'
  },
  paginationClickable: true
})
