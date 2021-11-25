// Example starter JavaScript for disabling form submissions if there are invalid fields
import $ from "jquery";

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
  const reader = new FileReader();

  reader.onload = (e) => {
    $("#img-upload").attr("src", e.target.result as string);
  };

  $("#formFile").on("input", () => {
    let files = (document.getElementById("formFile") as HTMLInputElement).files;
    $("#invlidImageAlert").hide();
    if (files && files[0]) {
      const reg = /(image\/[a-z]+)/gi;
      if (files[0].type.match(reg)) {
        reader.readAsDataURL(files[0]);
      } else {
        $("#invlidImageAlert").stop().show(200).delay(10000).hide(200);
        return;
      }
    }
  });

  $("#validationEmail").on("change", (e) => {
    if (
      $("#validationEmail")
        .val()
        .toString()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      removeRequired();
    } else {
      addRequired();
    }
  });

  $("#validationPhoneNumber").on("change", (e) => {
    if (
      $("#validationPhoneNumber")
        .val()
        .toString()
        .match(/[0-9]{10}/)
    ) {
      removeRequired();
    } else {
      addRequired();
    }
  });

  function removeRequired() {
    $("#validationEmail").removeAttr("required");
    $("#validationPhoneNumber").removeAttr("required");
  }

  function addRequired() {
    $("#validationEmail").attr("required", 1);
    $("#validationPhoneNumber").attr("required", 1);
  }
});
