// click on btn
let toggleBtn = document.querySelector(".tbtn");
// target = navbar 
let nav = document.querySelector(".navbar")
// icon change target = fa-bars
let icon = document.querySelector(".fa-bars")
// use add event listner 
toggleBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-toggle");

    if (nav.classList.contains("nav-toggle") == true) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close");
    } else {
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})