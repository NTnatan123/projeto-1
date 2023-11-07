function setup() {
    createCanvas(400,400);
    background("black");
  }
  
  function draw() {
    stroke("light purple")
    fill("purple");
  
  if(mouseIsPressed)  {
    rect(mouseX,mouseY,20,20);
  }
  
  
  }