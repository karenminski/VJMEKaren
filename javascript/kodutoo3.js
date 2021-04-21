window.onload = function () {
	putOpeningTime();
	clockTick();
	//let timer = setInterval(clockTick, 500); //clearInterval(timer);
}

function putOpeningTime() {
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds();
	document.getElementById("timeplace").innerHTML = "Leht avati kell: " + currenthour + ":" + currentminute + ":" + currentsecond + ".";
}

function clockTick() {
	let currenttime = new Date();
	let currenthour = currenttime.getHours();
	let currentminute = currenttime.getMinutes();
	let currentsecond = currenttime.getSeconds();
	let secangle = currentsecond * 6;
	let minangle = currentminute * 6 + currentsecond * .1;
	let hourangle = currenthour * 30 + currentminute * .5;
	//transform: rotate(45deg)
	document.getElementById("secondhand").style.transform = "rotate(" + secangle + "deg)";
	document.getElementById("minutehand").style.transform = "rotate(" + minangle + "deg)";
	document.getElementById("hourhand").style.transform = "rotate(" + hourangle + "deg)";
	//setTimeout(clockTick, 1000);
	requestAnimationFrame(clockTick);
}