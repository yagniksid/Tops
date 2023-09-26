function showPassword() {
    let pass = document.getElementById("pass");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}