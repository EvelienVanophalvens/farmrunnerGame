
//zie gebruikte bronnen in pdf document
class Chicken extends Animals{
    constructor(xCoord, yCoord, speed){
        super(xCoord, yCoord, speed);
    }
    display(){
        let x = [this.x,this.x,this.x+20,this.x+20,this.x+50,this.x+50,this.x+50,this.x,this.x,this.x-4,this.x,this.x-10];
        let y = [this.y,this.y-5,this.y-5,this.y+10,this.y+10,this.y+10,this.y+40,this.y+40,this.y+20,this.y+18,this.y+14,this.y+8];
        omtrekAnimal = [];
        
    

        //vectoren maken voor omtrekChicken
        for(let i=0;i<x.length;i++){
            omtrekAnimal[i] = createVector(x[i],y[i]);
        }

        //omtrekChicken tekenen
        fill("#9b2f0e");
        beginShape();
        for(const {x,y} of omtrekAnimal) vertex(x, y);
        endShape(CLOSE);
        fill("white");
    
    }
}

