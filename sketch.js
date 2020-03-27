
function preload() {
  bg_img = loadImage("images/bg.png");
}


function setup() {
  createCanvas(800,600);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(bg_img);


  player_car = new Car(mouseX, 300, 50, 90);

  enemy_x = Math.round(random(50, 750));

  enemy = new Enemy(enemy_x, 0, 50, 90);

  score = 0;

  PLAY = 1;
  END = 0;
  gameState = PLAY;
}

function draw() {
  background(0);  
  drawSprites();

  out();

  if(gameState === PLAY) {
    if(gameState === PLAY) {
      player_car.x = mouseX;
   } else {
     player_car.x = 200;
   }

   bg.velocityY = 7;

  if(bg.y > 300){
    bg.y = bg.height/4;

    
  }

     bg.velocityY = 7;



  enemy.y = enemy.y + 5;

  if(enemy.y == 400) {
    enemy.y = 0;
    enemy_x = Math.round(random(50, 750));
    switchImg();
    enemy.x = enemy_x;
  }
   if(gameState == PLAY) {
     score = score + Math.round(getFrameRate()/60.25);
          fill("#ff0000");
     textStyle(BOLD)
     textStyle(BOLD)
     textSize(20)
     text("Score: "+score, 20, 50);
   }
  
  
  }

  player_car.display();
  enemy.display(); 

    if(gameState === END) {
      score = 0;
           fill("#ff0000");
     textStyle(BOLD)
      textSize(20)
      text("Score: "+score, 20, 50);

      player_car.x = 200;

      enemy.y = 410;

      bg.velocityY = 0;
    }
  

}

function switchImg() {
  var random_animation = Math.round(random(1,4));
    switch(random_animation) {
      case 1: enemy.animation = loadImage("images/car_blue.png");
              break;
      case 2: enemy.animation = loadImage("images/car_red.png");
              break;
      case 3: enemy.animation = loadImage("images/car_yellow.png");
              break;
      case 4: enemy.animation = loadImage("images/car_green.png");
              break;
      default: break;
    }
}

function out() {
 if(enemy.x - player_car.x < player_car.width / 2 + enemy.width / 2 &&
    player_car.x - enemy.x < player_car.width / 2 + enemy.width / 2 &&
    enemy.y - player_car.y < player_car.height / 2 + enemy.height / 2 &&
    player_car.y - enemy.y < player_car.height / 2 + enemy.height / 2) {

      gameState = END;
      


    }
}