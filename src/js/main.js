$(document).ready(function () {
  // About company
  let navItem = $('.about__nav-item');
  let block = $('.about__item');
  navItem.on('click', function () {
    navItem.removeClass('active');
    $(this).addClass('active');
    block.removeClass('active-item');
    let blockId = "#" + this.dataset.block;
    $(blockId).addClass('active-item');
  });

  // product page
  const slider = $('.product__horizontal');
  $(slider).slick({
    arrows: false,
    responsive: true,
    slidesToShow: 1
  });
  $('.product__arrow-left').on('click',() => {
    $(slider).slick('slickPrev');
  });
  $('.product__arrow-right').on('click',() => {
    $(slider).slick('slickNext');
  });

  $(slider).on('afterChange', () => {
    $('.product__arrow-right').text($('.slick-current').next().find('.product__heading').text());
    $('.product__arrow-left').text($('.slick-current').prev().find('.product__heading').text());
  })

  // Side-menu toggler
  $('.top-menu__burger-icon').on('click', () => {
    $('.side-menu').toggleClass('active');
    $('.side-menu__overlay').toggleClass('active');
    $('.side-menu__wrapper').toggleClass('active');
  });
  $('.side-menu__close').on('click', () => {
    $('.side-menu').toggleClass('active');
    $('.side-menu__overlay').toggleClass('active');
    $('.side-menu__wrapper').toggleClass('active');
  })
  $('.side-menu__overlay').on('click', () => {
    $('.side-menu').toggleClass('active');
    $('.side-menu__overlay').toggleClass('active');
    $('.side-menu__wrapper').toggleClass('active');
  })
});