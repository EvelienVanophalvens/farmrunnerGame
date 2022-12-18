class Animals{
    constructor(xCoord, yCoord,speed, ){
        this.x = xCoord;
        this.y = yCoord;
        this.speed = speed;
    }
    move(){
        this.x -= this.speed
    }
    isColliding(omtrekPerson, omtrekAnimal){
        let hit = collidePolyPoly(omtrekPerson, omtrekAnimal);
        return hit;
    };

}


