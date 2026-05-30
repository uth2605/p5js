function setup() {
  createCanvas(600, 400);
  background(230, 230, 250);
  
  //목 얼굴 귀
  fill(243, 218, 192);
  rect(278, 268, 44, 57);
  stroke(220, 192, 162);
  strokeWeight(1);
  ellipse(300, 212, 150, 170);
  ellipse(223, 210, 22, 32);
  ellipse(377, 210, 22, 32);
  //바르샤
  noStroke(); 
  fill(165, 0, 68); 
  rect(140, 318, 160, 100, 60, 0, 0, 0); 
  fill(0, 77, 152); 
  rect(300, 318, 160, 100, 0, 60, 0, 0);
  //목쪽
  fill(243, 218, 192);
  arc(300, 318, 100, 60, 0, 3.141592);
  //눈썹
  noFill();
  stroke(45, 38, 32);
  strokeWeight(3);
  arc(265, 194, 42, 14, PI + 0.35, TWO_PI - 0.35, OPEN);
  arc(335, 194, 42, 14, PI + 0.35, TWO_PI - 0.35, OPEN);

  //눈
  fill(255);
  stroke(70, 65, 45);
  strokeWeight(1);
  ellipse(265, 202, 32, 18);
  ellipse(335, 202, 32, 18);
  noStroke();
  fill(48, 44, 24);
  ellipse(266, 203, 15, 15);
  ellipse(336, 203, 15, 15);
  fill(22, 18, 16);
  ellipse(266, 203, 8, 8);
  ellipse(336, 203, 8, 8);
  fill(255);
  ellipse(270, 199, 4, 4);
  ellipse(340, 199, 4, 4);
  noFill();
  stroke(60, 48, 38);
  strokeWeight(2);
  arc(265, 202, 32, 20, PI + 0.35, TWO_PI - 0.35, OPEN);
  arc(335, 202, 32, 20, PI + 0.35, TWO_PI - 0.35, OPEN);

  stroke(218, 200, 162);
  arc(300, 234, 18, 12, 0.35, PI - 0.35, OPEN);
  noStroke();
  fill(210, 160, 140);
  ellipse(300, 260, 26, 10);
  stroke(190, 145, 125);
  strokeWeight(1);
  line(288, 258, 312, 258);
  noStroke();
  // 머리카락
  noStroke();
  
  fill(60, 40, 20); 
  
  arc(300, 180, 160, 140, PI, TWO_PI);
  beginShape();
  vertex(230, 196);
  curveVertex(240, 186); 
  curveVertex(270, 186); 
  curveVertex(290, 181); 
  vertex(300, 176); 
  curveVertex(310, 186); 
  curveVertex(350, 186); 
  vertex(370, 196); 
  vertex(370, 176);
  vertex(230, 176); 
  endShape(CLOSE);
  
  stroke(40, 25, 10); 
  strokeWeight(1);
  noFill();
  bezier(290, 120, 290, 190, 230, 180, 235, 190); 
  bezier(320, 120, 310, 190, 370, 180, 365, 190); 

}