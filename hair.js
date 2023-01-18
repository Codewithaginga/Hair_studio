let menuBtn = document.getElementById("menuBtn");
let sidenav = document.getElementById("sidenav");
let menu = document.getElementById("menu");


menuBtn.onclick = function() {

    if(sidenav.style.right === "-200px") {
        sidenav.style.right === "0";
    }

    else{
        sidenav.style.right === "-200px";
    }
}