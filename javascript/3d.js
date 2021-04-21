let cube = document.getElementById("cube");
let area = document.getElementById("area");
let swaptext = document.getElementById("swaptext");
let counter = 1;

window.onload = function(){
    area.style.perspective="15000px";
    area.style.perspectiveOrigin="10% 80%";
    window.setInterval(swapBackFace, 2000);
}

function swapBackFace() {
    swaptext.innerHTML = "Tagakülg" + counter;
    counter++;
}