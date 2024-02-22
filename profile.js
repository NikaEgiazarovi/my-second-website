let image = document.querySelector(".pfpPic");
let fileInput = document.querySelector(".upload");
let nameInputs = document.querySelectorAll('.name1');
let submitButton = document.getElementById("subBtn");

fileInput.addEventListener("change", () => {
    image.src = URL.createObjectURL(fileInput.files[0]);
});

submitButton.addEventListener("click", () => {
    let fileInputValue = fileInput.files[0] ? fileInput.files[0].name : "";
    
    let userInputValue = [];
    nameInputs.forEach(input => {
        userInputValue.push(input.value);
    });

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    localStorage.setItem("fileInputValue", fileInputValue);
    localStorage.setItem("userInputValue", JSON.stringify(userInputValue));
});

window.onload = () => {
  let storedFileInputValue = localStorage.getItem("fileInputValue");
  let storedUserInputValue = JSON.parse(localStorage.getItem("userInputValue"));

  if (storedFileInputValue) {
      image.src = storedFileInputValue;
  }

  if (storedUserInputValue) {
      nameInputs.forEach((input, index) => {
          input.value = storedUserInputValue[index];
      });
  }
}
