function setup() {
  createCanvas(570, 570);
}
function draw() {
  background("white");
//head
  fill(255, 220, 185)
ellipse(244,290,143,200);

  // neck
  fill(232, 199, 169);
  rect(221, 380, 45, 30, 16);
  
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

//hair

//shirt
    fill(0);
  rect(180, 390, 140, 800, 48);
  
  
  // longsleeve
  fill(0);
  rect(165, 420, 26, 135, 12);
  rect(310, 420, 26, 135, 12);
  
  //hands
  fill(255, 220, 185);  
  ellipse(178, 555, 24, 18);
  ellipse(323, 555, 24, 18);


 // --- SIDEBURNS ---
  fill(25, 20, 15); 
  noStroke();

  // left sideburn
  beginShape();
  vertex(170, 230);
  bezierVertex(172, 260, 170, 280, 175, 300);
  bezierVertex(180, 300, 185, 290, 180, 260);
  endShape(CLOSE);

  // right sideburn
  beginShape();
  vertex(318, 230);
  bezierVertex(316, 260, 318, 280, 312, 300);
  bezierVertex(308, 300, 303, 290, 308, 260);
  endShape(CLOSE);


//hair

push();
translate(-50, 5);


  beginShape();
  vertex(225, 220);
  bezierVertex(275, 60, 355, 140, 365, 295);
  vertex(365, 255);
  vertex(352, 264);
  vertex(338, 256);
  vertex(325, 265);
  vertex(310, 256);
  vertex(295, 265);
  vertex(280, 256);
  vertex(265, 264);
  vertex(250, 256);
  vertex(235, 264);
  vertex(225, 255);
  endShape(CLOSE)
  
 //mouth
   noFill();
  stroke(227, 93, 106)
  strokeWeight(0.5);
  arc(290, 335, 50, 10, 0, PI * 0.5);
  noStroke();
}



arc(247, 260, 150, 200, PI, 0, CHORD);
