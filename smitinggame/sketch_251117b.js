let baronHP = 3000;
let maxHP = 3000;
let baronAlive = true;
let message = "";
let gameOver = false;
let startMessageTimer = 240; // number of frames to show the message (4 seconds at 60 FPS)

let shakeIntensity = 0;

let failShake = 0;
let smiteFailed = false; // NEW: track if smite was incorrect

let baron;
let smiteIcon;


// flashing smite
let flashDirection = 1; 
let flashSize = 80;      
let colorPulse = 0;      

let badMeme; //jg diff
let goodMeme; // happi cat

function preload() {
  baron = loadImage("custombaron.png");    
  smiteIcon = loadImage("customsmite.png"); 
  soundFormats("mp3");
  badMeme= loadImage("jgdiff.jpg");
  goodMeme= loadImage("smitegood.gif"); //trying load image
  
}

function setup() {
  createCanvas(600, 600);

}


function draw() {
  // Show GIF if smite succeeded
  if (gameOver && !smiteFailed) {
    image(goodMeme, 0, 0, width, height);  
    return; 
  

 
}


  // Background
  background(baron);
// Show GIF if smite succeeded
  if (gameOver && !smiteFailed && goodMeme) {
    image(goodMeme, 0, 0, width, height);
    return; // skip the rest of draw() so HP bar and background are hidden
  

  
}
  // Flash smite effect if in the right HP window
  if (baronHP >= 1100 && baronHP <= 1200 && baronAlive) {
    flashSize += flashDirection;
    if (flashSize >= 55 || flashSize <= 45) flashDirection *= -1;

    colorPulse += 5;
    if (colorPulse > 255) colorPulse = 0;

    fill(255, 255 - colorPulse, 0, 150);
    noStroke();
    rect(5, 5, flashSize + 10, flashSize + 10, 10);
  } else {
    flashSize = 80;
    colorPulse = 0;
  }

  // Draw smite icon
  image(smiteIcon, 10, 10, 80, 80);

  

  // Baron HP decreases
  if (baronAlive && !gameOver) {
    baronHP -= 2;
    // AUTO FAIL if player did NOT smite before 1100 HP
if (baronHP < 1101 && !gameOver && !smiteFailed) {
  smiteFailed = true;
  gameOver = true;
  failShake = 40;          // start shaking
  badMeme = loadImage("jgdiff.jpg"); // show jg diff
}

    if (baronHP < 1000 && random() < 0.1) baronHP += random(-10, 10);
    baronHP = constrain(baronHP, 0, maxHP);

    if (baronHP <= 0) {
      baronHP = 0;
      baronAlive = false;
      message = "BARON DIED NATURALLY LMAO";
      gameOver = true;
    }
  }

  // Health Bar with jitter
 if (!smiteFailed) {  // only show HP bar and text if smite hasn't failed
  // Health Bar with jitter
  push();
  let jitterX = baronHP < 900 ? random(-3, 3) : 0;
  let jitterY = baronHP < 900 ? random(-3, 3) : 0;
  translate(jitterX, jitterY);

  fill(80);
  rect(50, 120, 500, 30);

  let hpWidth = map(baronHP, 0, maxHP, 0, 500);
  fill(0, 128, 0);
  rect(50, 120, hpWidth, 30);
  pop();

  // Baron HP Text
 if (!gameOver && !smiteFailed) {
  textAlign(CENTER);
  fill(255);
  textSize(22);
  text("BARON NASHOR HEALTH: " + baronHP.toFixed(0) + " HP", width / 2, 110);
 }
}


  // Show fail image if smite failed
  if (smiteFailed) {
  let imgX = 0;
  let imgY = 0;
  let imgWidth = width;
  let imgHeight = height;

    // Apply shake
    if (failShake > 0) {
      imgX += random(-failShake, failShake);
      imgY += random(-failShake, failShake);
      failShake -= 1;
    }

    image(badMeme, imgX, imgY, 600, 600);
  }



  if (startMessageTimer > 0) {
    textSize(22);
    fill(255, 255, 0);
    text("PRESS D TO SMITE! (SMITE BETWEEN 1100-1200 HP)", width / 2, 200);
    startMessageTimer--;
  }


}

function keyPressed() {
  
  if (key === 'd' && !gameOver) {
    if (baronHP >= 1100 && baronHP <= 1200) {
      // SUCCESS
      message = "GOOD SMITE!";
      baronAlive = false;
      gameOver = true;


      

    } else {
      // FAILURE
      smiteFailed = true; // mark as fail
      failShake = 40;
      

      if (baronHP > 1200) {
         badMeme= loadImage("jgdiff.jpg");
      } else {
         badMeme= loadImage("jgdiff.jpg");
      }

      gameOver = true;
    }
  }
}
