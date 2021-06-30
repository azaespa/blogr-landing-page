const connectNav = document.getElementById("connectNav"),
    connectBtn = connectNav.getElementById("connectBtn"),
    connectCollapse = connectNav.querySelector(".collapse");

function init(){
    connectBtn.addEventListener("click", handleClick);
        
}

function handleClick(event) {
    console.log(event.target)
}

init();


