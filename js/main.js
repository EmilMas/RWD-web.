// upper button(when the screen resolution is below 40em - 640px), clicking poops up upper navigation and then hides it when clicked again.
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector(".page-header").classList.toggle("nav-opened");
}, false);



