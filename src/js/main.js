$(document).ready(function () {
$('.about-company-tabs__nav-item').on('click', function () {
    $('.about-company-tabs__nav-item').removeClass('active');
    $(this).addClass('active');
    $('.about-company-tabs__item').removeClass('active-item');
    var blockId = "#" + this.dataset.block;
    $(blockId).addClass('active-item');
});

});