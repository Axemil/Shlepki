$(document).ready(function () {

  document.querySelectorAll('.product-button-cart, .main-new_link, .btn-animate, .btn-aminate2').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

});
