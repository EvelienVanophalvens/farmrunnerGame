function farmBackground(){
    background("#49798d");
    // boerderij/stal
    fill("#97a7b7");
    triangle(150, 460, 300, 350, 450, 460);
    fill("#f90d11");
    rect(150, 460, 300, 140);
    stroke("white");
    strokeWeight(4);
    rect(200, 500, 100, 100);
    rect(300, 500, 100, 100);
    line(200,500,300,600);
    line(200,600,300,500);
    line(300,500,400,600);
    line(300,600,400,500);

  


    //silo
    fill("#fec144");
    rect(50, 460, 50, 200);
    triangle(50, 460, 75, 430, 100, 460);
    noStroke();

    fill("white");
    //bergen
    line(0, 200, 150, 100);
    line(150, 100, 200, 230);

    line(200,230, 300, 70);
    line(300,70, 350, 200);

    line(350,200, 500, 10);
    line(500,10, 700, 300);

    line(700, 300, 800, 100);



    //sneeuw
    noStroke()
    beginShape();
    vertex(50, 165);
    vertex(80, 170);
    vertex(100, 180);
    vertex(120, 160);
    vertex(160, 170);
    vertex(150, 150);
    vertex(165, 140);
    vertex(150, 100);
    endShape();

    beginShape();
    vertex(250, 150);
    vertex(280, 160);
    vertex(290, 150);
    vertex(300, 160);
    vertex(320, 120);
    vertex(300, 70);
    endShape();
    
    beginShape();
    vertex(430, 100);
    vertex(460, 150);
    vertex(480, 120);
    vertex(500, 170);
    vertex(520, 120);
    vertex(540, 145);
    vertex(550, 120);
    vertex(570, 130);
    vertex(565, 100);
    vertex(500, 10);
    endShape();



    //lucht
    fill("#63c7ff");
    beginShape()
    vertex(0,0);
    vertex(0,200);
    vertex(150,100);
    vertex(200,230);
    vertex(300,70);
    vertex(350,200);
    vertex(500, 10);
    vertex(700, 300);
    vertex(700, 300);
    vertex(800,100);
    vertex(800, 0);
    endShape()
}