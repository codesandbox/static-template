(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!form.checkValidity()) {
        }

        form.classList.add("was-validated");
        var myModalEl = document.querySelector("#confirmacionContacto");
        var modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance

        modal.show();
      },
      false
    );
  });
})();
