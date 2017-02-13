var counter= 0;


function setup() {
  
  createCanvas(600, 600);
  
  for (var i = 0; i < 470; i++) {
    var sprite = createSprite(
      random(height), random(width),
      random(80, 80), random(80, 80));
   	  fill(random(254), random(254), random(255));
    sprite.onMousePressed = deleteAndAdd;
  }
}

function draw() {
  background('255');
  drawSprites();
  
  stroke(255);
  
  if (counter < 470) {

  }
  else {
    fill(random(255), random(255), random(255));
    rect(0,0,600,600);
    fill(255);
    textAlign(CENTER);
    textSize(33);
    text("YOU CLEARED ALL OF THE BOXES!!", width/2, height/2);
  }
}


function deleteAndAdd() {
  counter += 1;
  this.remove();
}
