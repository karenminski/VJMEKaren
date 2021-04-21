let canvas;
let ctx;

function init_draw(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	draw_image();
	//draw_rect();
	//draw_circle();
	//draw_lines();
	//draw_pacman();
}

function draw_image(){
	ctx.beginPath();
		ctx.fillStyle = "lightblue";
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();
	ctx.closePath();

	ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.rect(0, canvas.height - 100, canvas.width, canvas.height);
		ctx.fill();
	ctx.closePath();

	ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.arc(800, 110, 100, 0, 2 * Math.PI);
		ctx.fill();
	ctx.closePath();

	for(let i = 0; i < 20; i++){
		ctx.beginPath();
			ctx.fillStyle = "green";
			ctx.moveTo(-100 + (50 * i), canvas.height - 50);
			ctx.lineTo(50 + (100 * i), canvas.height - 120);
			ctx.lineTo(-100 + (70 * i), canvas.height - 50);
			ctx.fill();
		ctx.closePath();
	}

	for(let i = 0; i < 8; i++){
		ctx.beginPath();
			ctx.fillStyle = "white";
			ctx.moveTo(20 + (80 * i), 50);
			ctx.bezierCurveTo(20 + (80 * i), 100, 
							  100 + (80 * i), 100,
							  100 + (80 * i), 50);
			//ctx.quadraticCurveTo(20, 100, 200, 20);
			ctx.fill();
		ctx.closePath();
		ctx.beginPath();
			ctx.fillStyle = "white";
			ctx.moveTo(40 + (80 * i), 50);
			ctx.bezierCurveTo(40 + (80 * i), 0, 
							120 + (80 * i), 0,
							120 + (80 * i), 50);
			//ctx.quadraticCurveTo(20, 100, 200, 20);
			ctx.fill();
		ctx.closePath();

	}
}
/*
function draw_pacman(){
	ctx.beginPath();
		ctx.fillStyle = "#FFFF00";
		ctx.arc(800, 110, 100, .1 * Math.PI, 1.9 * Math.PI);
		ctx.lineTo(800, 110);
		//ctx.stroke();
		ctx.fill();
	ctx.closePath();
}

function draw_lines(){
	ctx.beginPath();
		ctx.strokeStyle = "#0000FF";
		ctx.moveTo(canvas.width / 2, canvas.height / 2);
		ctx.lineTo(canvas.width / 2, canvas.height / 2 - 200);
		ctx.lineTo(canvas.width / 2 + 200, canvas.height / 2);
		ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
		ctx.strokeStyle = "#FF00FF";
		ctx.moveTo(0,0);
		ctx.lineTo(canvas.width, canvas.height);
		ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
		ctx.strokeStyle = "#FF00FF";
		ctx.moveTo(0,0);
		ctx.quadraticCurveTo(canvas.width, 0, canvas.width, canvas.height);
		ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
		ctx.strokeStyle = "#FF00FF";
		ctx.moveTo(0,0);
		ctx.bezierCurveTo(canvas.width, 0, 0, canvas.height, canvas.width, canvas.height);
		ctx.stroke();
	ctx.closePath();
}

function draw_circle(){
	ctx.beginPath();
		//kaar   x, y, r, algusnurk ja lĆµppnurk
		ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
		ctx.stroke();
	ctx.closePath();
}

function draw_rect(){
	ctx.strokeStyle = "#FF0000";
	ctx.lineWidth = 8;
	ctx.fillStyle = "#FF9900";
	ctx.beginPath();
		//x, y, w, h
		ctx.rect(100, 100, canvas.width / 4, canvas.height / 4);
		//ctx.stroke();
		ctx.fill();
		ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
		ctx.strokeStyle = "#00FF00";
		ctx.fillStyle = "#00FF99";
		ctx.rect(100 + canvas.width / 4 + 8, 100 + canvas.height / 4 + 8, canvas.width / 4, canvas.height / 4);
		ctx.fill();
		ctx.stroke();
	ctx.closePath();
	
	//kaks kohe suletud kujundit:
	//fillRect
	//strokeRect	
}
*/