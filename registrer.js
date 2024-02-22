let userLogin = document.getElementById("logIn");
let regexUserName = /^[a-zA-Z]+$/;
let regexGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;

userLogin.addEventListener("click", function (e) {
    e.preventDefault();
    let userNameInput = document.getElementById("usermainName").value;
    let userEmailInput = document.getElementById("userGmail").value;
    let userPasswordInput = document.getElementById("userPassword").value;

    console.log("Name:", userNameInput);
    console.log("Email:", userEmailInput);
    console.log("Password:", userPasswordInput);

    if (!regexUserName.test(userNameInput)) {
        Swal.fire("Oops...", "There are some numbers in your name!", "error");
    } else if (!regexGmail.test(userEmailInput)) {
        Swal.fire("Oops...", "Invalid email address!", "error");
    } else if (!regexPassword.test(userPasswordInput)) {
        Swal.fire("Oops...", "Invalid password!", "error");
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: true,
            timer: 1500
        }).then(function () {
            window.location = "./Homepage.html"
        });
    }
});