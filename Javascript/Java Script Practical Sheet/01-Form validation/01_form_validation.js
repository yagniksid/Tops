// check form input value onclick blank or null
function check_form() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let add = document.getElementById("add").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let exp = document.getElementById("exp").value;
    let mob = document.getElementById("mob").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (fname == "" || fname == null) {
        document.getElementById("msg").innerText = "Enter First Name..!!"
        return false;
    } else if (mname == "" || mname == null) {
        document.getElementById("msg1").innerText = "Enter Middle Name..!!"
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg2").innerText = "Enter Last Name..!!"
        return false;
    } else if (add == "" || add == null) {
        document.getElementById("msg3").innerText = "Enter Address..!!"
        return false;
    } else if (dob == "" || dob == null) {
        document.getElementById("msg4").innerText = "Select DOB..!!"
        return false;
    } else if (male == false && female == false) {
        document.getElementById("msg5").innerText = "Select Gender..!!"
        return false;
    } else if (exp == "-1") {
        document.getElementById("msg6").innerText = "Select Your Experience Field ..!!"
        return false;
    } else if (mob == "" || mob == null) {
        document.getElementById("msg7").innerText = "Enter Mobile Number..!!"
        return false;
    } else if (mail == "" || mail == null) {
        document.getElementById("msg8").innerText = "Enter Email Id..!!"
        return false;
    } else if (pass == "" || pass == null) {
        document.getElementById("msg9").innerText = "Create Your Password..!!"
        return false;
    } else {
        document.getElementById("msg").innerText = ""
        document.getElementById("msg1").innerText = ""
        document.getElementById("msg2").innerText = ""
        document.getElementById("msg3").innerText = ""
        document.getElementById("msg4").innerText = ""
        document.getElementById("msg5").innerText = ""
        document.getElementById("msg6").innerText = ""
        document.getElementById("msg7").innerText = ""
        document.getElementById("msg8").innerText = ""
        document.getElementById("msg9").innerText = ""
        return false;
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
// blur efftct for gender
function gender_check(blank, spanid) {
    if (blank.checked == false) {
        document.getElementById(spanid).innerText = "Select Gender..!!"
        return false;
    } else {
        document.getElementById(spanid).innerText = ""
        return false;
    }
}
// blur efftct for experience
function exp_check(blank, spanid) {
    if (blank.value == -1) {
        document.getElementById(spanid).innerText = "Select Your Experience Field ..!!"
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

// keyboard events

// name expression
function name_expression(expr, spanid) {
    let regex = /^[a-zA-z]*$/;
    if (regex.test(expr.value)) {
        document.getElementById(spanid).innerText = "";
        return false;
    } else {
        document.getElementById(spanid).innerText = "Only Alphabets allowed";
        return false;
    }
}

// for address
function addresslength() {
    let add = document.getElementById("add").value;
    if (add.length <= 50) {
        document.getElementById("msg3").innerText = "Address must be minimum 50 characters"
        return false;
    } else {
        document.getElementById("msg3").innerText = ""
        return false;
    }
}

// mobile number expression
function num_expression(expr, spanid) {
    let regex = /^[0-9]*$/;
    let numberx = /^[6-9]/;
    if (!(regex.test(expr.value) && numberx.test(expr.value))) {
        document.getElementById(spanid).innerText = "Enter proper mobile number..!!"
        return false;
    } else if (expr.value.length < 10) {
        document.getElementById(spanid).innerText = "Mobile number must be 10 digit"
        return false;
    }
}

// email expression
function email_ex() {
    let mail = document.getElementById("email").value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(mail)) {
        document.getElementById("msg8").innerText = ""
        return false;
    } else {
        document.getElementById("msg8").innerText = "Enter proper email id"
        return false;
    }
}

// password expression
function pass_ex() {
    let pass = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(pass)) {
        document.getElementById("msg9").innerText = ""
        return false;
    } else {
        document.getElementById("msg9").innerText = "Create strong password Ex. Testing123! "
        return false;
    }
}
