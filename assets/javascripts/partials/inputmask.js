$(document).ready(function () {
  if ($("#userPhone").length) {
    var selector = document.getElementById("userPhone");
    var im = new Inputmask("+38 (999) 999-99-99");
    im.mask(selector);
  }
  if ($("#mobuserPhone").length) {
    var selector = document.getElementById("mobuserPhone");
    var im = new Inputmask("+38 (999) 999-99-99");
    im.mask(selector);
  }
});