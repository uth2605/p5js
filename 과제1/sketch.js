function setup() {
  createCanvas(600, 400);
  background(255);
  
  fill(255, 215, 0); 
  rect(450, 0, 150, 150);

  fill(200, 0, 0);
  rect(0, 200, 250, 200);

  fill(0, 50, 150);
  rect(350, 250, 100, 100);

  fill(0);
  rect(80, 80, 40, 40);
  
  fill(0, 50, 150);
  arc(525, 150, 150, 150, radians(180), radians(360)); 

  fill(255, 215, 0);
  arc(0, 400, 200, 200, radians(-90), radians(0));


  stroke(0);
  strokeWeight(10); 
  
  line(150, 0, 150, 400);
  line(250, 0, 250, 400);
  line(350, 0, 350, 400);
  line(450, 0, 450, 400);
  line(300, 0, 300, 150)
  line(80, 0, 80, 200); 

 
  
  line(0, 150, 600, 150);
  line(0, 250, 600, 250);
  line(250, 350, 450, 350); 
  line(300, 70, 600, 70 )
  line(0, 80, 150, 80);   
  line(0, 200, 250, 200);
  
  
  arc(150, 150, 100, 100, radians(0), radians(90)); 
  arc(250, 0, 300, 300, radians(90), radians(180)); 
  arc(450, 400, 150, 150, radians(180), radians(270));
}