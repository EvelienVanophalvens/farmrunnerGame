//zie gebruikte bronnen in pdf document

let omtrekPerson = [];
//persoon tekenen
function person(xCoord, yCoord){
    let x = [xCoord-5,xCoord+10,xCoord+10,xCoord+5, xCoord+5,xCoord+15,xCoord+15,xCoord+5,xCoord+5,xCoord+15,xCoord+10,xCoord+2.5,xCoord-5,xCoord-10,xCoord,xCoord,xCoord-10,xCoord-10,xCoord,xCoord,xCoord-5];
    let y = [yCoord,yCoord,yCoord+10,yCoord+10,yCoord+15,yCoord+15,yCoord+20,yCoord+20,yCoord+25,yCoord+30,yCoord+35,yCoord+30,yCoord+35, yCoord+30 ,yCoord+25,yCoord+20,yCoord+20,yCoord+15,yCoord+15,yCoord+10,yCoord+10];




   //vectoren maken voor omtrekPerson
   for(let i=0;i<x.length;i++){
    omtrekPerson[i] = createVector(x[i],y[i])
}


//omtrekPerson tekenen
fill("#313639");
beginShape();
for(const {x,y} of omtrekPerson) vertex(x, y);
endShape(CLOSE);
fill("white");
}


//lopen
    /*als x persoon groter is dan 10,
        als x persoon kleiner 290 is kan de persoon naar rechts en naar links
        anders kan hij alleen links
    (als niet groter is dan 10) anders  kan hij alleen maar naar rechts
    */

function run(){
    //opzij lopen
    if(xPerson > 10){
    if(xPerson < 290){
        if(keyIsDown(LEFT_ARROW)){
            xPerson = xPerson - 2;        
        }else if(keyIsDown(RIGHT_ARROW)){
            xPerson = xPerson +2;        
        }
    }else if(keyIsDown(LEFT_ARROW)){
        xPerson = xPerson - 2;
    }
    }else if(keyIsDown(RIGHT_ARROW)){
        xPerson = xPerson + 2;
    }

    //naar boven of onder
    /*als y persoon groter is dan 10, 
        als y persoon kleiner is dan 580, kan hij zowel naar boven als als beneden
        anders kan hij alleen maar naar boven
    (als niet groter is dan 10)anders kan hij alleen maar naar beneden
    */
    if(yPerson > 5){
    if(yPerson < 560){
        if(keyIsDown(DOWN_ARROW)){
            yPerson = yPerson+2;
        }else if(keyIsDown(UP_ARROW)){
             yPerson = yPerson-2;
        }
    }else if(keyIsDown(UP_ARROW)){
        yPerson = yPerson - 2;
    }
    }else if(keyIsDown(DOWN_ARROW)){
        yPerson = yPerson +2;
    }
}