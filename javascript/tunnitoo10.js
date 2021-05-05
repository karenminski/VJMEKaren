//let message = "See tõesti töötab!";
let picurl = "../media/";
let picnameprefix = "tlu_";
let picext = ".jpg";
let minpicnum = 1;
let maxpicnum = 43;
let picnum = 1;
let picchange = 0;

window.onload = function(){
    putOpeningTime();
    putRandomPic();
    document.getElementById("tlu_pic").addEventListener("click", putRandomPic);
	// Failis clock8.js
    init_clock();
    //let timer = setInterval(clockTick, 500); //clearInterval(timer);
    document.getElementById("nextphoto").addEventListener("click", nextPhoto);
    document.getElementById("prevphoto").addEventListener("click", prevPhoto);
	// Failis music8.js
	prepare_music();
	init_draw();
}


function nextPhoto(){
	picnum ++;
	if(picnum > maxpicnum){
		picnum = minpicnum;
	}
	putPhoto();
}

function prevPhoto(){
	picnum --;
	if(picnum < minpicnum){
		picnum = maxpicnum;
	}
	putPhoto();
}

function putRandomPic(){
	let randomnum = minpicnum + Math.round(Math.random() * (maxpicnum - minpicnum));
	picnum = randomnum;
	putPhoto();
}

function putPhoto(){
	if(picchange%2 == 0){
		document.getElementById("tlu_pic2").src = picurl + picnameprefix + picnum + picext;
		document.getElementById("tlu_pic2").style.opacity = 1;
		document.getElementById("tlu_pic2").classList.add("bluranim");
		document.getElementById("tlu_pic").classList.remove("bluranim");

	} else {
		document.getElementById("tlu_pic").src = picurl + picnameprefix + picnum + picext;
		document.getElementById("tlu_pic2").style.opacity = 0;
		document.getElementById("tlu_pic").classList.add("bluranim");
		document.getElementById("tlu_pic2").classList.remove("bluranim");
	}
	document.getElementById("photo_filename").innerText = picnameprefix + picnum + picext;
	picchange ++;
}

function putOpeningTime(){
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds(); 
	document.getElementById("timeplace").innerHTML = "Leht avati kell: " + currenthour +":" + currentminute + ":" + currentsecond +".";
}