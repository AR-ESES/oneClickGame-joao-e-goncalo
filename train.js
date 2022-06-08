class Train {
  constructor(){
    this.r = 100;
    this.x = width;
    this.y = height - 60;
  }
  
  
  move(){
    this.x -= 14;
  }
  show (){
    image(tImg, this.x, this.y, this.r, this.r)
  }
}
