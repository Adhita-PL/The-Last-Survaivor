var gameState = "start";
var bg;
var alanScore = 0;
var sophiaScore = 0;
function preload() {
  logoImg = loadImage("images/The last survivor.jpg");
  normalBg = loadImage("normalBG/background.png");
  graveyardBG = loadImage("Graveyard/gravetileset.jpg");
  //desertBG = loadImage("Desert/BG.jpg");

  alanStand = loadAnimation("../Alan/Idle__000.png","../Alan/Idle__001.png");
  alanRun = loadAnimation("Alan/Run__000.png","Alan/Run__001.png","Alan/Run__002.png","Alan/Run__003.png","Alan/Run__004.png","Alan/Run__005.png","Alan/Run__006.png");
  alanJump = loadAnimation("Alan/Jump__000.png","Alan/Jump__001.png","Alan/Jump__002.png","Alan/Jump__003.png","Alan/Jump__004.png","Alan/Jump__005.png","Alan/Jump__006.png","Alan/Jump__007.png","Alan/Jump__008.png","Alan/Jump__009.png");
  alanAttack = loadAnimation("Alan/Attack__000.png","Alan/Attack__001.png","Alan/Attack__002.png","Alan/Attack__003.png","Alan/Attack__004.png","Alan/Attack__005.png","Alan/Attack__006.png","Alan/Attack__007.png","Alan/Attack__008.png","Alan/Attack__009.png");
  alanDead = loadAnimation("Alan/Dead__000.png","Alan/Dead__001.png","Alan/Dead__002.png","Alan/Dead__003.png","Alan/Dead__004.png","Alan/Dead__005.png","Alan/Dead__006.png","Alan/Dead__007.png","Alan/Dead__008.png","Alan/Dead__009.png");
  
  sophiaStand = loadAnimation("../Sophia/Idle__000.png","../Sophia/Idle__001.png");
  sophiaRun = loadAnimation("../Sophia/Run__000.png","../Sophia/Run__001.png","../Sophia/Run__002.png","../Sophia/Run__003.png","../Sophia/Run__004.png","../Sophia/Run__005.png","../Sophia/Run__006.png","../Sophia/Run__007.png","../Sophia/Run__008.png","../Sophia/Run__009.png");
  sophiaJump = loadAnimation("Sophia/Jump__000.png","Sophia/Jump__001.png","Sophia/Jump__002.png","Sophia/Jump__003.png","Sophia/Jump__004.png","Sophia/Jump__005.png","Sophia/Jump__006.png","Sophia/Jump__007.png","Sophia/Jump__008.png","Sophia/Jump__009.png");
  sophiaAttack = loadAnimation("Sophia/Attack__000.png","Sophia/Attack__001.png","Sophia/Attack__002.png","Sophia/Attack__003.png","Sophia/Attack__004.png","Sophia/Attack__005.png","Sophia/Attack__006.png","Sophia/Attack__007.png","Sophia/Attack__008.png","Sophia/Attack__009.png",)
  
  coinsImg = loadAnimation("../goldCoins/1.png","../goldCoins/2.png","../goldCoins/3.png","../goldCoins/4.png","../goldCoins/5.png","../goldCoins/6.png");
  
  elephantLeft = loadAnimation("Animals/ele1.png","Animals/ele2.png","Animals/ele3.png");
  elephantRight = loadAnimation("Animals/ele4.png","Animals/ele5.png","Animals/ele6.png");

  gameoverimg = loadImage("images/Game over.png");

  coinTouch = loadSound("sounds/gameCoinTouch.mp3");
}

function setup() {
  createCanvas(1200,800);

  normal = createSprite(600,400);
  normal.addImage(normalBg);
  normal.scale = 1.2;;

  graveyard = createSprite(600,400,windowWidth, windowHeight);
  graveyard.addImage(graveyardBG);
  graveyard.scale = 1.4 ;
  
  logo = createSprite(600,50);
  logo.addImage("logo",logoImg);

  inviground1 = createSprite(50,700,500,10);
  inviground2 = createSprite(685,630,450,10);
  inviground3 = createSprite(285,430,230,10);
  inviground4 = createSprite(150,130,300,10);
  inviground5 = createSprite(1000,705,150,10);
  inviground6 = createSprite(530,265,150,5);
  inviground7 = createSprite(710,475,300,10);
  inviground8 = createSprite(750,170,150,10);
  inviground9 = createSprite(1100,140,250,10);
  inviground1.visible = false;
  inviground2.visible = false;
  inviground3.visible = false;
  inviground4.visible = false;
  inviground5.visible = false;
  inviground6.visible = false;
  inviground7.visible = false;
  inviground8.visible = false;
  inviground9.visible = false;

  // alan and sophia for forest level
  alan = createSprite(30,610);
  alan.addAnimation("stand",alanStand);
  alan.addAnimation("jump", alanJump);
  alan.addAnimation("run",alanRun);
  alan.addAnimation("attack",alanAttack);
  alan.scale = 0.15;

  sophia = createSprite(70,645);
  sophia.addAnimation("stand",sophiaStand);
  sophia.addAnimation("jump", sophiaJump);
  sophia.addAnimation("run",sophiaRun);
  sophia.scale =  0.15;

  elephant = createSprite(525,580);
  elephant.addAnimation("right",elephantRight);
  elephant.addAnimation("left",elephantLeft);
  elephant.velocityX = 2;

  coins = createSprite(50,30);
  coins.addAnimation("coins",coinsImg);
  coins.scale = 0.01;

  coin1 = createSprite(1000,620);
  coin1.addAnimation("coins",coinsImg);
  coin1.scale = 0.01;

  coin2 = createSprite(280,320);
  coin2.addAnimation("coins",coinsImg);
  coin2.scale = 0.01;

  coin3 = createSprite(520,190);
  coin3.addAnimation("coins",coinsImg);
  coin3.scale = 0.01;

  coin4 = createSprite(745,100);
  coin4.addAnimation("coins",coinsImg);
  coin4.scale = 0.01;

  coin5 = createSprite(1130,50);
  coin5.addAnimation("coins",coinsImg);
  coin5.scale = 0.01;

  //graveyard
  // alan and sophia for graveyard level
  alan1 = createSprite(20,490);
  alan1.addAnimation("stand",alanStand);
  alan1.addAnimation("jump", alanJump);
  alan1.addAnimation("run",alanRun);
  alan1.addAnimation("attack",alanAttack);
  alan1.scale = 0.15;
   
  sophia1 = createSprite(60,490);
  sophia1.addAnimation("stand",sophiaStand);
  sophia1.addAnimation("jump", sophiaJump);
  sophia1.addAnimation("run",sophiaRun);
  sophia1.scale =  0.15;

  coin6 = createSprite(1080,450);
  coin6.addAnimation("coins",coinsImg);
  coin6.scale = 0.01;

  coin7 = createSprite(740,370);
  coin7.addAnimation("coins",coinsImg);
  coin7.scale = 0.01;

  coin8 = createSprite(370,170);
  coin8.addAnimation("coins",coinsImg);
  coin8.scale = 0.01;

  coin9 = createSprite(1130,50);
  coin9.addAnimation("coins",coinsImg);
  coin9.scale = 0.01;

}

function draw() {
  background(0);  
  if(gameState === "start") {
    alan1.visible = false;
    sophia1.visible = false;
    normal.visible = false;
    graveyard.visible = false;
    alan.visible = false;
    sophia.visible = false;
    elephant.visible = false;
    coins.visible = false;
    coin1.visible = false;
    coin2.visible = false;
    coin3.visible = false;
    coin4.visible = false;
    coin5.visible = false;
    coin6.visible = false;
    coin7.visible = false;
    coin8.visible = false;
    coin9.visible = false;
    textSize(30);
    fill("red");
    text("Alan and sophia were travelling through a forest. In their way they found a map. The map ",25,200);
    text("shows a way to a secret place where there's a lot of money. They thought to go to ",25, 230);
    text("the place and collect the money for the purpose of devoloping their village.",25,260);
    text("So, help Alan and sophia to collect the money!",25,330);
    text("The one with more money at the end will be the hero of the village", 25,360);
    text("(HINT : Press Arrow keys to control Alan and press A,S,D,W keys for Sophia)",25,390);
    textSize(35);
    text("Press Space to start the game",300,500);
    if(keyCode === 32) {
      gameState = "play";
    }
  }
  if(gameState === "play") {
    logo.visible = false;
    graveyard.visible = false;
    normal.visible  = true;
    elephant.visible = true;
    alan.visible = true;
    sophia.visible = true;
    coins.visible = true;
    coin1.visible = true;
    coin2.visible = true;
    coin3.visible = true;
    coin4.visible = true;
    coin5.visible = true;
    coin6.visible = false;
    coin7.visible = false;
    coin8.visible = false;
    coin9.visible = false;
    background(255);
    // alan
    if(keyDown("LEFT_ARROW")) {
      alan.x = alan.x - 3;
      alan.mirrorX*-1;
      alan.changeAnimation("run", alanRun)
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("RIGHT_ARROW")) {
      alan.x = alan.x + 3;
      alan.changeAnimation("run", alanRun);
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("UP_ARROW")) {
      alan.velocityY = -5;
      alan.changeAnimation("jump", alanJump);
    }
    if(elephant.isTouching(alan) || elephant.isTouching(sophia) || alan.y >= 730 || sophia.y >= 730) {
      gameState = "end";  
    } 
    alan.velocityY = alan.velocityY + 0.5;
    alan.collide(inviground1);
    alan.collide(inviground2);
    alan.collide(inviground3);
    alan.collide(inviground4);
    alan.collide(inviground5);
    alan.collide(inviground6);
    alan.collide(inviground7);
    alan.collide(inviground8);
    alan.collide(inviground9);
    //sophia
    if(keyDown("a")) {                                 // A
      sophia.x = sophia.x - 3;
      sophia.mirrorX*-1;
      sophia.changeAnimation("run", sophiaRun)
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }
    if(keyDown("d")) {                                       // d
      sophia.x = sophia.x + 3;
      sophia.changeAnimation("run", sophiaRun);
    }else {
      sophia.changeAnimation("stand", sophiaStand);
    }                                                          
    if(keyDown("w")) {                                  // w
      sophia.velocityY = -5;
      sophia.changeAnimation("jump", sophiaJump);
    }
    sophia.velocityY = sophia.velocityY + 0.5;
    
    sophia.collide(inviground1);
    sophia.collide(inviground2);
    sophia.collide(inviground3);
    sophia.collide(inviground4);
    sophia.collide(inviground5);
    sophia.collide(inviground6);
    sophia.collide(inviground7);
    sophia.collide(inviground8);
    sophia.collide(inviground9);
    
    if(elephant.x >= 890) {
      elephant.changeAnimation("left",elephantLeft);
      elephant.velocityX = -2;
    }
    if(elephant.x <= 580) {
      elephant.changeAnimation("right",elephantRight);
      elephant.velocityX = 2;
    }
    if((alan.x >=60 && alan.y <= 610) ) { //&& (sophia.x >= 1150 && sophia.y <= 170)) {
      gameState = "level2";
      alan.visible = false;
      sophia.visible  = false;
    }
    if(alan.isTouching(coins)) {
      coins.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(alan.isTouching(coin1)) {
      coin1.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(alan.isTouching(coin2)) {
      coin2.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(alan.isTouching(coin3)) {
      coin3.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(alan.isTouching(coin4)) {
      coin4.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(alan.isTouching(coin5)) {
      coin5.destroy();
      coinTouch.play();
      alanScore ++;
    }
    if(sophia.isTouching(coins)) {
      coins.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
    if(sophia.isTouching(coin1)) {
      coin1.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
    if(sophia.isTouching(coin2)) {
      coin2.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
    if(sophia.isTouching(coin3)) {
      coin3.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
    if(sophia.isTouching(coin4)) {
      coin4.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
    if(sophia.isTouching(coin5)) {
      coin5.destroy();
      coinTouch.play();
      sophiaScore ++;
    }
  }
  if(gameState === "level2") {   
      background(255);
      alan1.visible = true;
      sophia1.visible = true;
      graveyard.visible = true;
      coin6.visible = true;
      coin7.visible = true;
      coin8.visible = true;
      coin9.visible = true;
      normal.visible = false;
      coin1.visible = false;
      coin2.visible = false;
      coin3.visible = false;
      coin4.visible = false;
      coin5.visible = false;
      coins.visible = false;
      elephant.destroy();
      block1 = createSprite(0,500,500,5);
      block2 = createSprite(0,200,500,5);
      block3 = createSprite(500,300,380,5);
      block4 = createSprite(750,500,280,5);
      block5 = createSprite(1040,600,290,5);
      block6 = createSprite(475,700,250,5);
      block7 = createSprite(1075,200,250,5);      //1120,160
      
      if(keyDown("LEFT_ARROW")) {
        alan1.x = alan1.x - 3;
        alan1.mirrorX*-1;
        alan1.changeAnimation("run", alanRun)
      }else {
        alan1.changeAnimation("stand", alanStand);
      }
      if(keyDown("RIGHT_ARROW")) {
        alan1.x = alan1.x + 3;
        alan1.changeAnimation("run", alanRun);
      }else {
        alan1.changeAnimation("stand", alanStand);
      }
      if(keyDown("UP_ARROW")) {
        alan1.velocityY = -5;
        alan1.changeAnimation("jump", alanJump);
      }
      alan1.velocityY = alan1.velocityY + 0.5;
      alan1.collide(block1);
      alan1.collide(block2);
      alan1.collide(block3);
      alan1.collide(block4);
      alan1.collide(block5);
      alan1.collide(block6);
      alan1.collide(block7);

      // sophia
      if(keyDown("a")) {                                 // A
        sophia1.x = sophia1.x - 3;
        sophia1.mirrorX*-1;
        sophia1.changeAnimation("run", sophiaRun)
      }else {
        sophia1.changeAnimation("stand", sophiaStand);
      }
      if(keyDown("d")) {                                       // d
        sophia1.x = sophia1.x + 3;
        sophia1.changeAnimation("run", sophiaRun);
      }else {
        sophia1.changeAnimation("stand", sophiaStand);
      }                                                          
      if(keyDown("w")) {                                  // w
        sophia1.velocityY = -5;
        sophia1.changeAnimation("jump", sophiaJump);
      }
      sophia1.velocityY = sophia1.velocityY + 0.5;
      sophia1.collide(block1);
      sophia1.collide(block2);
      sophia1.collide(block3);
      sophia1.collide(block4);
      sophia1.collide(block5);
      sophia1.collide(block6);
      sophia1.collide(block7);

      if(alan1.isTouching(coin6)) {
        coin6.destroy();
        coinTouch.play();
        alanScore ++;
      }
      if(alan1.isTouching(coin7)) {
        coin7.destroy();
        coinTouch.play();
        alanScore ++;
      }
      if(alan1.isTouching(coin8)) {
        coin8.destroy();
        coinTouch.play();
        alanScore ++;
      }
      if(alan1.isTouching(coin9)) {
        coin9.destroy();
        coinTouch.play();
        alanScore ++;
      }
      if(sophia1.isTouching(coin6)) {
        coin6.destroy();
        coinTouch.play();
        sophiaScore ++;
      }
      if(sophia1.isTouching(coin7)) {
        coin7.destroy();
        coinTouch.play();
        sophiaScore ++;
      }
      if(sophia1.isTouching(coin8)) {
        coin8.destroy();
        coinTouch.play();
        sophiaScore ++;
      }
      if(sophia1.isTouching(coin9)) {
        coin9.destroy();
        coinTouch.play();
        sophiaScore ++;
      }
      if((alan1.x >1120 && alan1.y <= 160) && (sophia.x > 1120 && sophia.y <= 160)) {
        gameState = "gameover";
        alan1.visible = false;
        sophia1.visible  = false;
      }
  }
  drawSprites();
  if(gameState === "end") {
    clear();
    background(0);
    textSize(30);
    fill("red");
    text("Game Over!!", 500,400);
    text("Press R to restart",450,440);
  }  
  if(gameState === "gameover") {
    background(0);
    if(alanScore > sophiaScore) {
      fill("red");
      textSize(30);
      text("Yayy!! You've collected all the coins! Now alan is having",200,50);
      text("more money then sophia, Alan is the hero of the village",200,80);
    } else{
      text("Yayy!! You've collected all the coins! Now sophia is having",200,50);
      text("more money then alan, Sophia is the hero of the village",200,80);
    }
  }
  if(keyDown("r")&& gameState === "end") {
    gameState = "start";
    alan.x = 30;
    alan.y = 610;
    sophia.x = 70;
    sophia.y = 645;
  }
  
  textSize(20);
  fill("red");
  text(mouseX + ',' + mouseY, 10, 15);
  fill("black");
  text("Alan : "+alanScore, 1050,20);
  text("Sophia : "+sophiaScore, 1050,40);
}
