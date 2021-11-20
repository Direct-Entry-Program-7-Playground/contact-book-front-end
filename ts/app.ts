// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
$(document).ready(function () {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      $("#invlidImageAlert").hide();

      reader.onload = function (e) {
        if ((e.target.result + "").split("/")[0] !== "data:image") {
          $("#invlidImageAlert").stop().show(200).delay(5000).hide(200);

          return;
        }
        $("#img-upload").attr("src", e.target.result + "");
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#formFile").on("change", function () {
    readURL(this);
  });
});
