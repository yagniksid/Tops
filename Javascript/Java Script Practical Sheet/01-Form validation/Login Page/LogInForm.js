// check form input value onclick blank or null
// function check_form() {
//     let mail = document.getElementById("email").value;
//     let pass = document.getElementById("pass").value;

//     if (mail == "" || mail == null) {
//         document.getElementById("msg1").innerText = "Enter Email Id..!!"
//         return false;
//     } else if (pass == "" || pass == null) {
//         document.getElementById("msg2").innerText = "Create Your Password..!!"
//         return false;
//     } else {
//         document.getElementById("msg1").innerText = ""
//         document.getElementById("msg2").innerText = ""
//         return false;
//     }
// }

function check_form() {
    let mail = document.getElementById("email").value;
    console.log("🚀 ~ check_form ~ mail:", mail)
    let pass = document.getElementById("pass").value;
    console.log("🚀 ~ check_form ~ pass:", pass)

    // Simulate login validation (replace with your actual validation logic)

    if (mail && pass) {
        alert("Login successful!");
        return true;
    } else {
        let validEmail = email_ex();
        let validPass = pass_ex();

        if (!validEmail || !validPass) {
            return false; // Prevent form submission
        }

        if (mail === "" || mail === null) {
            document.getElementById("msg1").innerText = "Enter Email Id..!!";
        } else {
            document.getElementById("msg1").innerText = "";
        }

        if (pass === "" || pass === null) {
            document.getElementById("msg2").innerText = "Create Your Password..!!";
        } else {
            document.getElementById("msg2").innerText = "";
        }

        return false; // Prevent form submission
    }
}



// blur efftct
function check_blank_value(blank, spanid) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(spanid).innerText = "Enter Value..!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}

// show password
function showpass() {
    let pass = document.getElementById("pass");
    if ((pass.type == "password")) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

// email expression
function email_ex() {
    let mail = document.getElementById("email").value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(mail)) {
        document.getElementById("msg1").innerText = ""
        return false;
    } else {
        document.getElementById("msg1").innerText = "Enter proper email id"
        return false;
    }
}

// password expression
function pass_ex() {
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(pass)) {
        document.getElementById("msg2").innerText = ""
        return false;
    } else {
        document.getElementById("msg2").innerText = "Enter password Ex. Testing123! "
        return false;
    }
}
