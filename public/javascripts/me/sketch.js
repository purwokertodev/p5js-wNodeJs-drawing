

// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  socket = io.connect('https://dry-badlands-93790.herokuapp.com');
  socket.on('mouse',
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      fill(0, 255, 255);
      noStroke();
      ellipse(data.x,data.y, 20, 20);
    }
  );
}

function draw() {

}

function mouseDragged() {
  fill(255, 0, 255);
  noStroke();
  ellipse(mouseX,mouseY, 20, 20);
  sendMouse(mouseX,mouseY);
}


function sendMouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos);
  var data = {
    x: xpos,
    y: ypos
  };
  socket.emit('mouse',data);
}
