function display_tbl() {
    let num = document.getElementById("num").value;
    let div = document.querySelector(".mathstbl");

    if (num == "") {
        alert("Enter value")
    } else {
        var output = ""
        for (let i = 1; i <= 10; i++) {
            output = output + "<p>" + num + "*" + i + "=" + num * i + "</p>"
        }
    }
    div.innerHTML = output
    return false
}
