$(document).ready(function () {
  let navItem = $('.about__nav-item');
  let block = $('.about__item');
  navItem.on('click', function () {
    navItem.removeClass('active');
    $(this).addClass('active');
    block.removeClass('active-item');
    let blockId = "#" + this.dataset.block;
    $(blockId).addClass('active-item');
  });
});