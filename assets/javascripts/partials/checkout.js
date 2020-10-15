$(document).ready(function () {

  $('.wrap-textarea-title').click(function () {
    $(this).siblings('.wrap').addClass('active');
    $(this).remove();
  });

});
