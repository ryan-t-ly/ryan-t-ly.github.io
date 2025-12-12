function setup() {

}


function draw() {
function setup() {
  createCanvas(570, 570);
}
function draw() {
  background("red");
//head
  fill(255, 220, 185)
ellipse(244,290,155,200);
 // eyes
  noStroke();
  fill(255);
  ellipse(210, 275, 32, 20);
  ellipse(275, 275, 32, 20);
  fill(100, 60, 20);
  ellipse(210, 275, 14, 14);
  ellipse(275, 275, 14, 14);
  fill(0);
  ellipse(210, 275, 6, 6);
  ellipse(275, 275, 6, 6);

  // ears
  fill(255, 220, 185)
  ellipse(165, 275, 20, 39);
  ellipse(325, 275, 20, 39);

// ear piercings
  stroke(90);
  strokeWeight(1);
  fill(140);
  ellipse(163, 290, 3, 3);
  ellipse(326, 290, 3, 3);
  noStroke();
  fill(220);
  ellipse(308, 308, 1, 1);

 // eyelids
  fill(232, 199, 169);
  arc(210, 275, 32, 20, PI, TWO_PI, CHORD);
  arc(275, 275, 32, 20, PI, TWO_PI, CHORD);
  
  
  //nose
push();
translate(40, 137); 
stroke(232, 199, 169);
strokeWeight(3);
line(200, 150, 197, 180);
line(197, 180, 207, 175);
pop();
noStroke();

}
