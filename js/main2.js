// lower button, clicking poops up lower navigation and then hides it when clicked again.
var hamburger_footer = document.querySelector(".hamburger_footer");
hamburger_footer.addEventListener("click", function () {
    document.querySelector(".page-footer").classList.toggle("nav-opened_footer");
}, false);