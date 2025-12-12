var ballx = 600;
var bally = 600;
var ballSize = 200; // initial ball size
var score = 0;
var gameState = "L1";

var bg1, bg2, bg3;

function preload() {
  bg1 = loadImage("level1.png");
  bg2 = loadImage("level2.png");
  bg3 = loadImage("level3.png");
  ballImage = loadImage("ufo.png");
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);

  if (gameState == "L1") {
    levelOne();
  } else if (gameState == "L2") {
    levelTwo();
  } else if (gameState == "L3") {
    levelThree();
  } else if (gameState == "win") {
    winGame(); // show the win screen
  }

  // ✅ draw the score on top of everything
  fill(255);
  textSize(20);
  text("Score: " + score, width / 2, 40);
}

// ---------- LEVEL ONE ---------- 
function levelOne() {
  image(bg1, 0, 0, width, height); // space background
  text("Level 1", width / 2, height - 20);
  
  // Gradually decrease ball size over time in Level 1
  if (ballSize > 100) { // make sure it doesn't get too small too fast
    ballSize -= 0.05;  // gradually decrease ball size
  }
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 15) {
    gameState = "L2";
  }

  image(ballImage, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

// ---------- LEVEL TWO ---------- 
function levelTwo() {
  image(bg2, 0, 0, width, height); // space background w/ planets
  text("Level 2", width / 2, height - 20);
  
  // Continue decreasing ball size in Level 2
  if (ballSize > 70) { // make sure it doesn't get too small too fast
    ballSize -= 0.1;  // slightly faster reduction
  }

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 30) {
    gameState = "L3";
  }

  image(ballImage, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

// ---------- LEVEL THREE ---------- 
function levelThree() {
  image(bg3, 0, 0, width, height); // space background w/ sun
  text("Level 3", width / 2, height - 20);

  // Continue decreasing ball size in Level 3
  if (ballSize > 30) { // make sure it doesn't get too small
    ballSize -= 0.2;  // faster reduction
  }

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 45) {
    gameState = "win";
  }

  image(ballImage, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

// ---------- WIN SCREEN ----------
function winGame() {
  background(0);
  fill(255);
  textSize(60);
  text("You Won!", width / 2, height / 2 - 40);

  // Draw restart button
  textSize(30);
  fill(50, 200, 50);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 60, 200, 60, 10);

  fill(255);
  text("Restart", width / 2, height / 2 + 70);
}

// ---------- MOUSE CLICK ----------
function mousePressed() {
  if (gameState == "win") {
    if (
      mouseX > width / 2 - 100 &&
      mouseX < width / 2 + 100 &&
      mouseY > height / 2 + 30 &&
      mouseY < height / 2 + 90
    ) {
      restartGame();
    }
  }
}

// ---------- RESTART ----------
function restartGame() {
  score = 0;
  ballx = 300;
  bally = 300;
  ballSize = 200;  // reset to original size on restart
  gameState = "L1";
}
