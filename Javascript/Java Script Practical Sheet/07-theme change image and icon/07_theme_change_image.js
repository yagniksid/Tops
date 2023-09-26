let icon = document.querySelector("#icon");
icon.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode") == true) {
        icon.src = "../image/sun2.png"

    }
    else {
        icon.src = "../image/moon2.png"
    }
})