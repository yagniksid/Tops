window.addEventListener("scroll", function () {
    // target = header
    let header = document.getElementById("topHeader");
    // window task
    let current = window.scrollY;
    if (current > 0) {
        header.classList.add("header-fixed")
    } else {
        header.classList.remove("header-fixed")
    }
})