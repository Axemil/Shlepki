$(document).ready(function () {
  $('.accordion').on('click', '.accordion-control', function (e) {
    e.preventDefault();
    $(this).next('.accordion-panel').not(':animated').slideToggle();
    $(this).toggleClass('active');
  });
});