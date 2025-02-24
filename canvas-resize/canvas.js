var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// // rectangle
// c.fillStyle = "red";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "blue";
// c.fillRect(250, 250, 100, 100);
// c.fillStyle = "green";
// c.fillRect(400, 400, 100, 100);
// console.log(canvas);

// // line
// c.beginPath();
// c.moveTo(50, 500);
// c.lineTo(50, 300);
// c.moveTo(100, 250);
// c.lineTo(250, 100);
// c.moveTo(300, 50);
// c.lineTo(500, 50);
// c.strokeStyle = "orange";
// c.stroke();

// // arc / circle
// c.beginPath();
// c.arc(225, 225, 50, 0, Math.PI * 2, false);
// c.strokeStyle = "purple"
// c.stroke();

// for (var i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 50, 0, Math.PI * 2, false);
//   c.strokeStyle = `rgb(
//     ${Math.random() * 255}
//     ${Math.random() * 255}
//     ${Math.random() * 255})`;
//   c.stroke();
// }



function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "purple"
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}



var circleArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}



function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

animate()