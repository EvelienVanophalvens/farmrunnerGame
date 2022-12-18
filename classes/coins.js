class Coins{
    constructor(xCoord, yCoord,speed){
        this.x = xCoord;
        this.y = yCoord;
        this.speed = speed;
    }
    move(){
        this.x -= this.speed;
    }
    display(){
        fill("#f6af29");
        circle(this.x, this.y, 30);
        fill("white");
    }
    isColliding(omtrekPerson){
        let hit = collideCirclePoly(this.x, this.y, 30, omtrekPerson);
        return hit;
    };

}