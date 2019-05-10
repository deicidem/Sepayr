$(document).ready(() => {
  $('.lines').css('height', $('body').height() - $('.footer').height() - 36);
  $('.popup-open').on('click', () => {
    $('.popup').fadeOut();
    $('.popup-form, .overlay').fadeIn();
    $('body').css('overflow', 'hidden');
  });

  $('.popup-close').on('click', () => {
    $('.popup, .overlay').fadeOut();
    $('body').css('overflow', 'auto');
  });

  $('.popup-agree, .footer-copyright a').on('click', () => {
    $('.popup').fadeOut();
    $('.popup-privacy, .overlay').fadeIn();
    $('body').css('overflow', 'hidden');
  });


  $(window).resize(function () {
    $('.lines').css('height', $('body').height() - $('.footer').height() - 36);
  });

  $("#phone").mask("+7 (999) 999-99-99");

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('.overlay').fadeOut();
      $(location).attr('href', '../send.html');
      $("footer form").trigger("reset");
    });
    return false;
  });

});