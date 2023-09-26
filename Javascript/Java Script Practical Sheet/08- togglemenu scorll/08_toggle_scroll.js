let tbtn = document.querySelector(".tbtn");
let nav = document.querySelector(".navbar");
let closebtn = document.querySelector(".cbtn")
tbtn.addEventListener("click", function () {
   nav.classList.add("navigate");
})
closebtn.addEventListener("click", function () {
   nav.classList.remove("navigate");
})

window.addEventListener("scroll", function () {
   let header = document.querySelector(".header");
   let current = window.scrollY;

   if (current > 0) {
      header.classList.add("header-fixed");
   }
   else {
      header.classList.remove("header-fixed");
   }
})

