let cube = document.getElementById("cube");
let angle = 0;
let counter = 0;
let dropSound = new Audio("tilkumine.mp3");

let right = document.getElementById("right");
let back = document.getElementById("back");
let left = document.getElementById("left");
let front = document.getElementById("front");

window.onload = function(){
    document.addEventListener("click", activateUserGestureTasks);
    document.getElementById("main-content").addEventListener("click", randomizeCubeBackground);
    right.innerHTML = back.innerHTML = left.innerHTML = front.innerHTML = "Veerandpöördeid: " + counter;
};

function activateUserGestureTasks(){
    document.removeEventListener("click", activateUserGestureTasks);
    rotateCube();
}

function randomizeCubeBackground(){
    let randomNum = Math.round(Math.random() * 360);
    let colorString = "hsl(" + randomNum + ", 90%, 95%)";
    document.getElementById("main-content").style.backgroundColor = colorString;
}

function rotateCube(){
    cube.style.transform = "rotateY(" + angle + "deg)";
    angle++;
    if(angle > 360){
        angle = 1;
    }
    
    switch(angle){
        case 90:
            console.log("veerand");
            countUp();
            break;
        case 180:
            console.log("pool");
            countUp();
            break;
        case 270:
            console.log("kolmveerand");
            countUp();
            break;
        case 360:
            console.log("terve ring");
            countUp();
            dropSound.play();
            break;
    }
    
    requestAnimationFrame(rotateCube);
}

function countUp(){
    counter++;
    right.innerHTML = back.innerHTML = left.innerHTML = front.innerHTML = "Veerandpöördeid: " + counter;
}