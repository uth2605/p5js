let bgR = 230;
let bgG = 230;
let bgB = 250;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgR, bgG, bgB);

  // 목, 얼굴, 귀
  fill(243, 218, 192);
  rect(278, 268, 44, 57);
  stroke(220, 192, 162);
  strokeWeight(1);
  ellipse(300, 212, 150, 170);
  ellipse(223, 210, 22, 32);
  ellipse(377, 210, 22, 32);

  // 바르샤 유니폼
  noStroke();
  fill(165, 0, 68);
  rect(140, 318, 160, 100, 60, 0, 0, 0);
  fill(0, 77, 152);
  rect(300, 318, 160, 100, 0, 60, 0, 0);

  // 목쪽 옷깃
  fill(243, 218, 192);
  arc(300, 318, 100, 60, 0, PI);

  // 눈썹
  noFill();
  stroke(45, 38, 32);
  strokeWeight(3);
  arc(265, 194, 42, 14, PI + 0.35, TWO_PI - 0.35, OPEN);
  arc(335, 194, 42, 14, PI + 0.35, TWO_PI - 0.35, OPEN);

  // 코
  stroke(218, 200, 162);
  arc(300, 234, 18, 12, 0.35, PI - 0.35, OPEN);

  // [마우스 이벤트 1] 클릭 시 표정 변화 (입과 볼터치)
  noStroke();
  if (mouseIsPressed) {
    // 웃는 입
    fill(210, 100, 100);
    arc(300, 255, 30, 20, 0, PI);
    // 발그레한 볼
    fill(255, 150, 150, 180);
    ellipse(250, 235, 25, 15);
    ellipse(350, 235, 25, 15);
  } else {
    // 평소 입
    fill(210, 160, 140);
    ellipse(300, 260, 26, 10);
    stroke(190, 145, 125);
    strokeWeight(1);
    line(288, 258, 312, 258);
  }

  // 눈 흰자
  fill(255);
  stroke(70, 65, 45);
  strokeWeight(1);
  ellipse(265, 202, 32, 18);
  ellipse(335, 202, 32, 18);

  // [마우스 이벤트 2] 마우스 커서를 따라가는 눈동자
  let eyeXOffset = (mouseX - 300) * 0.015;
  let eyeYOffset = (mouseY - 200) * 0.015;

  // 눈동자가 눈 흰자 밖으로 나가지 않도록 제한 (조건문 활용)
  if (eyeXOffset > 4) { eyeXOffset = 4; }
  if (eyeXOffset < -4) { eyeXOffset = -4; }
  if (eyeYOffset > 3) { eyeYOffset = 3; }
  if (eyeYOffset < -3) { eyeYOffset = -3; }

  // 눈동자 렌더링
  noStroke();
  fill(48, 44, 24); 
  ellipse(266 + eyeXOffset, 203 + eyeYOffset, 15, 15);
  ellipse(336 + eyeXOffset, 203 + eyeYOffset, 15, 15);
  fill(22, 18, 16); 
  ellipse(266 + eyeXOffset, 203 + eyeYOffset, 8, 8);
  ellipse(336 + eyeXOffset, 203 + eyeYOffset, 8, 8);
  fill(255); 
  ellipse(270 + eyeXOffset, 199 + eyeYOffset, 4, 4);
  ellipse(340 + eyeXOffset, 199 + eyeYOffset, 4, 4);

  // 눈 테두리
  noFill();
  stroke(60, 48, 38);
  strokeWeight(2);
  arc(265, 202, 32, 20, PI + 0.35, TWO_PI - 0.35, OPEN);
  arc(335, 202, 32, 20, PI + 0.35, TWO_PI - 0.35, OPEN);

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

// [키보드 이벤트] 배경 변경 및 GIF 저장
function keyPressed() {
  // 'b' 또는 'B' 키를 누르면 배경색이 무작위로 바뀜
  if (key == 'b' || key == 'B') {
    bgR = random(150, 255);
    bgG = random(150, 255);
    bgB = random(150, 255);
  }
  // 's' 또는 'S' 키를 누르면 화면을 3초간 녹화하여 GIF로 자동 저장
  else if (key == 's' || key == 'S') {
    saveGif('20222977_interaction_char.gif', 7);
  }
}