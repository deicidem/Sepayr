$(document).ready(() => {
  $('.lines').css('height', $(window).height() - $('.footer').height() - 36);
  $('.popup-open').on('click', () => {
    $('.popup, .overlay').fadeIn();
    $('body').css('overflow', 'hidden');
  });

  $('.popup-close').on('click', () => {
    $('.popup, .overlay').fadeOut();
    $('body').css('overflow', 'auto');
  });

  $(window).resize(function () {
    $('.lines').css('height', $(window).height() - $('.footer').height() - 36);
  });

  $("#phone").mask("+7 (999) 999-99-99");

});