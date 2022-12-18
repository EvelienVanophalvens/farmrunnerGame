//zie gebruikte bronnen in pdf document
class Rabbit extends Animals{
    constructor(xCoord, yCoord, speed){
        super(xCoord, yCoord, speed);
    }
    display(){
        let x = [this.x,this.x,this.x+10,this.x+10,this.x+20,this.x+20,this.x+30,this.x+30,this.x+60,this.x+60,this.x+40,this.x+40, this.x+20, this.x+20, this.x]
        let y = [this.y,this.y-10,this.y-10,this.y,this.y,this.y-10,this.y-10,this.y+20,this.y+20,this.y+65,this.y+65,this.y+50, this.y+50, this.y+65, this.y+65]
        omtrekAnimal = [];

        //vectoren maken voor omtrek konijn     
        for(let i=0;i<x.length;i++){
            omtrekAnimal[i] = createVector(x[i],y[i]);
        }

        //omtrek konijn tekenen
        fill("#7a3815");
        beginShape();
        for(const {x,y} of omtrekAnimal) vertex(x, y);
        endShape(CLOSE);
        fill("white");

    }
}
