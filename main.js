$(document).ready(() => {
  let popup = $('.popup'),
    overlay = $('.overlay');
  $('.popup-open').on('click', () => {
    $('.popup, .overlay').fadeIn();
    $('body').css('overflow', 'hidden')
  });

  $('.popup-close').on('click', () => {
    $('.popup, .overlay').fadeOut();
    $('body').css('overflow', 'auto')
  });
});