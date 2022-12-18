let xPerson = 150;
let yPerson= 300;

let cow1 = new Cow(700,100,2);
let chicken1 = new Chicken(700,200, 2);
let rabbit1 = new Rabbit(700,350, 2);
let live1 = new Lives(700,500, 2);
let liveCount1 = new Lives(100,5,0);
let liveCount2 = new Lives(180,5,0);
let liveCount3 = new Lives(260,5,0);
let coin1 = new Coins(700,50, 2);
let coin2 = new Coins(700, 300,2);
let point = 0;


let coins2;
let coins;
let lives;
let staticLives;
let a;

let hitsound;
let coinsound;
let livesound;

let gameOver = false;
function preload(){
    hitsound = loadSound("sounds/hit.wav");
    coinsound = loadSound("sounds/coin.wav");
    livesound = loadSound("sounds/live.wav");
}

function setup(){
    

createCanvas(800,600);
a = [cow1, chicken1, rabbit1]
lives = [live1];
staticLives = [liveCount1, liveCount2, liveCount3];
coins = [coin1];
coins2 = [coin2];

    setInterval(addCow,1200);
    setInterval(addChicken,1200);
    setInterval(addRabbit,1200);
    

    setInterval(addLive1, 5000);
    setInterval(addCoin, 5000);
    setInterval(addCoin2, 5000);



}


function draw(){
    if(gameOver === false){
        farmBackground();
        noStroke()

        run();
        person(xPerson,yPerson);

        //levens
        fill("black");
        text("Your lives", 10, 10, 60, 20)
        for(let i = 0; i < staticLives.length; i++){
            staticLives[i].display();
        }
    

        for(let i = 0; i < lives.length; i++){
            lives[i].display();
            lives[i].move();
            if(lives[i].isColliding(omtrekPerson, omtrekHat)){
                if(staticLives.length === 1){
                    staticLives.push(liveCount2);
                }else if(staticLives.length === 2){
                    staticLives.push(liveCount3);
                }
                lives = [];
                livesound.play();
            }
        
        }
        //punten
        fill("black");
        text("Your points", 10, 30, 80, 30)
        for(let i = 0; i < coins.length; i++){
            coins[i].display();
            coins[i].move();
            if(coins[i].isColliding(omtrekPerson) ){
                point++;
                coins = [];
                coinsound.play();
        }

        }

        for(let i = 0; i < coins2.length; i++){
            coins2[i].display();
            coins2[i].move();
            if(coins2[i].isColliding(omtrekPerson)){
                point++;
                coins2 = [];
                coinsound.play();
            }

        }
        text(point, 85, 30, 90, 50);

    
    

        //dieren
        for(let i = 0; i < a.length; i++){
            let hit = false;
            a[i].display();
            a[i].move(); 
            if(a[i].isColliding(omtrekPerson, omtrekAnimal) ){
                console.log(omtrekAnimal);
                hit = true;
                staticLives.pop();
                xPerson = 150;
                yPerson = 300;
                hitsound.play();
         }
        }


        //als er geen levens meer zijn dan gameover scherm
        if(staticLives.length === 0){
            gameOver = true;
            background("black")
            textSize(50);
        text("game over", width/2, height/2, width/2, height/2);
        text("your points:", (width/2)-50, (height/2) +100, (width/2) + 100, (height/2)+200);
        text(point, (width/2)+210, (height/2) +100, (width/2) + 250, (height/2)+200);
        textSize(40);

        text("Press spacebar to start again", (width/2)-150, (height/2) +200, (width/2)+150, height/2+300);
        textSize(11);
        }
    }

}

    //dieren toevoegen
function addCow(){
    let xCoord = 700;
    let yCoord = 100;
    let speed = 2;
     let cow = new Cow(xCoord, yCoord, speed);
     a.push(cow);
}
function addChicken(){
    let xCoord = 700;
    let yCoord = 200;
    let speed = 2;
     let chicken = new Chicken(xCoord, yCoord, speed);
     a.push(chicken);
}
    
function addRabbit(){
    let xCoord = 700;
    let yCoord = 350;
    let speed = 2;
     let rabbit = new Rabbit(xCoord, yCoord, speed);
     a.push(rabbit);

}

function addLive1(){
    let xCoord = 700;
    let yCoord = 500;
    let speed = 2;
    let live = new Lives(xCoord, yCoord, speed);
    lives.push(live);
    
}
function addCoin(){
    let xCoord = 700;
    let yCoord = 50;
    let speed = 2;
    let coin = new Coins(xCoord, yCoord, speed);
    coins.push(coin);

}
function addCoin2(){
    let xCoord = 700;
    let yCoord = 300;
    let speed = 2;
    let coin = new Coins(xCoord, yCoord, speed);
    coins2.push(coin);

}
function keyPressed(e){
    e.preventDefault();
    if(e.keyCode == 32 ){
        gameOver = false;
        staticLives = [liveCount1, liveCount2, liveCount3];
        xPerson = 150;
        yPerson= 300;
        a = [];
        lives = [];
        staticLives = [liveCount1, liveCount2, liveCount3];
        coins = [];
        coins2 = [];
        point = 0;

    }
}

  

