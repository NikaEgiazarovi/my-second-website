let inputData = document.getElementById("userData");
let addBTN = document.getElementById("addData");
let ul = document.getElementById("list");

addBTN.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inputData.value;
    ul.appendChild(li);

    let closeBtn = document.createElement("button");
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");
    trashIcon.style.color = "#ffffff";
    closeBtn.appendChild(trashIcon);

    li.appendChild(closeBtn);
    closeBtn.style.borderRadius = "10px";

    let closeClass = document.createAttribute("class");
    closeClass.value = "close";
    closeBtn.setAttributeNode(closeClass);

    inputData.value = "";

    let userLogin = document.querySelector(".fa-trash")

    userLogin.addEventListener("click", function (e) {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
            function () {
                swal("Deleted!", "Your imaginary file has been deleted.", "success");
            });

    })
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash")) {
        event.target.parentNode.parentNode.remove();
    }
});

inputData.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        addBTN.click();
    }
});


