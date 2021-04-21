var rotate = 0;
var canvas = document.getElementById('canvas');

//check for browser support for <canvas> element
if (canvas.getContext) {
	//get drawing context
	var ctx = canvas.getContext('2d');
	draw();
}

function draw() {
	ctx.beginPath();
	ctx.fillStyle = "rgb(135, 206, 235)";
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fill();
	ctx.closePath();

	updateAnimation();
	// Sun
	ctx.save();
	ctx.translate(canvas.width / 1.2, canvas.height / 4);
	ctx.fillStyle = "yellow"
	ctx.rotate(rotate);
	console.log(rotate);
	ctx.beginPath();
	ctx.arc(0, 0, 75, 0, 2 * Math.PI, false);
	ctx.fill();

	var rotate2 = 0;
	for (var i = 0; i < 8; i++) {
		ctx.save();
		ctx.fillStyle = "yellow"
		ctx.rotate(rotate2);
		ctx.translate(75, 0);
		if (i % 2 == 0)
			ctx.fillRect(0, 0, 35, 2);
		else
			ctx.fillRect(0, 0, 25, 2);
		ctx.restore();
		rotate2 += (2 * Math.PI) / 8;
	}
	ctx.restore();

	setTimeout(draw, 25);
	// Grass
	ctx.beginPath();
	ctx.fillStyle = "green";
	ctx.rect(0, canvas.height - 80, canvas.width, canvas.height);
	ctx.fill();
	ctx.closePath();

	for (let i = 0; i < 30; i++) {
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.moveTo(-200 + (40 * i), canvas.height - 20);
		ctx.lineTo(20 + (70 * i), canvas.height - 100);
		ctx.lineTo(-100 + (30 * i), canvas.height - 65);
		ctx.fill();
		ctx.closePath();
	}

	// Cloud
	ctx.beginPath();
	ctx.moveTo(170, 80);
	ctx.bezierCurveTo(150, 100, 130, 150, 230, 150);
	ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
	ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
	ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
	ctx.bezierCurveTo(320, 5, 250, 20, 240, 50);
	ctx.bezierCurveTo(200, 10, 140, 20, 170, 80);
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.fillStyle = 'white';
	ctx.fill();

	// House
	var img = document.createElement("img");
	img.src = '../../media/brick.png';
	var pat = ctx.createPattern(img, "repeat");

	ctx.beginPath();
	ctx.lineWidth = "10";
	ctx.rect(105, 300, 90, 170);
	ctx.fillStyle = pat;
	ctx.stroke();
	ctx.fill();

	// Door
	ctx.beginPath();
	ctx.lineWidth = "10";
	ctx.rect(138, 400, 20, 70);
	ctx.fillStyle = "rgb(139,69,19)";
	ctx.stroke();
	ctx.fill();

	// Windows
	ctx.beginPath();
	ctx.lineWidth = "10";
	ctx.rect(175, 408, 10, 25);
	ctx.fillStyle = "white";
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.lineWidth = "10";
	ctx.rect(112, 408, 10, 25);
	ctx.fillStyle = "white";
	ctx.stroke();
	ctx.fill();

	// Roof
	ctx.strokeStyle = "rgb(139,69,19)";
	ctx.beginPath();
	ctx.moveTo(150, 200);
	ctx.lineTo(100, 300);
	ctx.lineTo(200, 300);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "rgb(139,69,19)";
	ctx.fill();
}

function updateAnimation() {
	rotate += Math.PI / 200;
}
