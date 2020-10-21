$(document).ready(function () {

  $('.popup .popup__close, .popup__content_ok').click(function () {
    $(this).parent().parent().removeClass('active');
  });

  $('.popup .forgot-pass').click(function () {
    $(this).parent().parent().parent().parent().parent().removeClass('active');
    $('.popup-change-pass').addClass('active');
  });

});
