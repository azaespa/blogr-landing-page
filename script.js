const navbarToggler = document.querySelector(".navbar-toggler"),
    hamburgerIcon = navbarToggler.querySelector("#hamburger"),
    closeIcon = navbarToggler.querySelector("#close");

function init(){
    navbarToggler.addEventListener("click", toggleNav);
}

function toggleNav(){
    if(navbarToggler.getAttribute("aria-expanded") === "true"){
        setDisplay(hamburgerIcon, "none");
        setDisplay(closeIcon, "block");
    } else {
        setDisplay(closeIcon, "none");
        setDisplay(hamburgerIcon, "block");
    }
}

function setDisplay(element, display){
    element.style.display = display;
}

init();


