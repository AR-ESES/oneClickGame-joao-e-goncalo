let unicorn;

let uImg;
let tImg;
let bImg;
let trains = [];

function preload () {
  uImg = loadImage ('unicorn.png');
  tImg = loadImage ('train.png');
  bImg = loadImage ('background.jpg');
  
  
}
function setup() {
  createCanvas(800, 450);
unicorn = new Unicorn();

}

function keyPressed(){
   if(key === ' '){
    unicorn.jump();
}
 } 
  
function draw() {
  if (random(1) < 0.005) {
    trains.push(new Train());
  }
  background(bImg);
  unicorn.show();
  unicorn.move();
  
  for (let t of trains){
    t.move();
    t.show();
    if (unicorn.hits(t)) {7
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
}}