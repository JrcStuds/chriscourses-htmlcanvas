var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// rectangle
c.fillStyle = "red";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "blue";
c.fillRect(250, 250, 100, 100);
c.fillStyle = "green";
c.fillRect(400, 400, 100, 100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(50, 500);
c.lineTo(50, 300);
c.moveTo(100, 250);
c.lineTo(250, 100);
c.moveTo(300, 50);
c.lineTo(500, 50);
c.strokeStyle = "orange";
c.stroke();

// arc / circle
/* c.beginPath();
c.arc(225, 225, 50, 0, Math.PI * 2, false);
c.strokeStyle = "purple"
c.stroke(); */

for (var i = 0; i < 10; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x, y, 50, 0, Math.PI * 2, false);
  c.strokeStyle = `rgb(
    ${Math.random() * 255}
    ${Math.random() * 255}
    ${Math.random() * 255})`;
  c.stroke();
}