//zie gebruikte bronnen in pdf document
let omtrekAnimal;


class Cow extends Animals{
    constructor(xCoord, yCoord, speed){
        super(xCoord, yCoord, speed);
    }
    
    display(){
        let x = [this.x,this.x+80,this.x+80,this.x+80,this.x+60,this.x+60,this.x+60,this.x+40,this.x+40,this.x+20,this.x+20,this.x];
       let y = [this.y,this.y,this.y+30,this.y+50,this.y+50,this.y+50,this.y+30,this.y+30,this.y+50,this.y+50,this.y+20,this.y+20];
       omtrekAnimal = [];
        


        //vectoren maken voor omtrekKoe
        for(let i=0;i<x.length;i++){
            omtrekAnimal[i] = createVector(x[i],y[i])
        }
        //console.log(omtrekKoe);

        //omtrekKoe tekenen
        fill("white");
        beginShape();
        for(const {x,y} of omtrekAnimal) vertex(x, y);
        endShape(CLOSE);
        fill("white");
    

        //afsluiting poten en hoofd
        beginShape(LINES);
        vertex(this.x+20, this.y);
        vertex(this.x+20, this.y+20);
        vertex(this.x+20, this.y+30);
        vertex(this.x+40, this.y+30);
        vertex(this.x+60, this.y+30);
        vertex(this.x+80, this.y+30);
        endShape();
        
    }

    
}

