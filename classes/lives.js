let omtrekHat
class Lives{
    constructor(xCoord, yCoord,speed ){
        this.x = xCoord;
        this.y = yCoord;
        this.speed = speed;
    }
    move(){
        this.x -= this.speed;
    }

    display(){
        let x = [this.x,this.x+30,this.x+30,this.x+50,this.x+50,this.x-20,this.x-20,this.x]
        let y = [this.y,this.y,this.y+10,this.y+10,this.y+20,this.y+20,this.y+10,this.y+10]
        omtrekHat = [];

        //vectoren maken voor omtrek konijn     
        for(let i=0;i<x.length;i++){
            omtrekHat[i] = createVector(x[i],y[i]);
        }

        //omtrek konijn tekenen
        fill("#8d6339");
        beginShape();
        for(const {x,y} of omtrekHat) vertex(x, y);
        endShape(CLOSE);
        fill("white");
    }

    isColliding(omtrekPerson, omtrekHat){
        let hit = collidePolyPoly(omtrekPerson, omtrekHat);
        return hit;
    };
    
}
