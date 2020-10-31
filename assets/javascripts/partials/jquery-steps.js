$(document).ready(function () {

  jQuery.extend(jQuery.validator.messages, {required: 'Это поле необходимо.'});

  var form = $("#steps-form");
  form.validate({
    errorPlacement: function errorPlacement(error, element) {
      element.parent().prepend(error); 
    }
  });
  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex) {
      if (currentIndex > newIndex)
        {
            return true;
        }
      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function (event, currentIndex) {
      // alert("Submitted!");
    },
    labels: {
      next: "Далее",
      finish: "Подтвердить"
    }
  });
  $.each($('.number'), function () {
    var price = $(this).html();
    $(this).html(price.replace('.', ''));
  });

});