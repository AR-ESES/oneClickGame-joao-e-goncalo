var xLoc = 0;
var yLoc = 0;
var score = 0;
var speed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  frameRate(speed);
  xLoc = random(0, width - 50);
  yLoc = random(0, height - 50);
  text("Score: " + score, 20, 21);
  
  rect(xLoc, yLoc, 50, 50);
}

function mousePressed() {
  if (mouseX > xLoc && mouseX < xLoc + 50 && mouseY > yLoc && mouseY < yLoc + 50) {
    // console.log("button is clicked!")
    score = score + 1;
    instructions = "";
  } else {
    // console.log("you missed the button")
    score = 0;
  }
}
