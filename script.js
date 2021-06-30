const hamburgerMenu = document.querySelector(".hamburger-btn"),
    hamburgerIcon = hamburgerMenu.querySelector(".hamburger-icon");

const connectNav = document.getElementById("connectNav"),
    connectBtn = connectNav.querySelector("#connectBtn"),
    connectCollapse = connectNav.querySelector("#connect");

function init(){
    hamburgerMenu.addEventListener("click", handleClickMenu)
    connectBtn.addEventListener("click", handleClickNav);
    
}

function handleClickMenu(event){
    updateCollapseAttribute(hamburgerMenu);
    if(hamburgerMenu.getAttribute("collapsed") !== "true"){
        hamburgerMenu.classList.add("opened");
    } else {
        if(hamburgerMenu.classList.contains("opened")){
            hamburgerMenu.classList.remove("opened");
        }
    }
}

function handleClickNav(event) {
    const btn = event.target;
    updateCollapseAttribute(btn);
}

function updateCollapseAttribute(btn) {
    if(btn.getAttribute("collapsed") !== "true" && hamburgerMenu.getAttribute("aria-expanded") !== "true") {
        return btn.setAttribute("collapsed", "true");
    } else {
        return btn.setAttribute("collapsed", "false");
    }
}

init();


