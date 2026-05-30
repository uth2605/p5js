let colorStart, colorEnd;

function setup() {
  createCanvas(600, 400);
  
  // 색상 변화를 위한 시작/끝 색상 (우측 상단 사각형용)
  colorStart = color(255, 215, 0); // 기존 노란색
  colorEnd = color(255, 100, 0);   // 주황색
}

function draw() {
  background(255);
  
  // 프레임에 따른 시간 변수
  let t = frameCount * 0.05;

  // ------------------------------------
  // 1. 도형 채우기 (strokeWeight 기본값 1)
  // ------------------------------------
  strokeWeight(1);
  stroke(0);

  // [색상 변화] 우측 상단 사각형
  let inter = map(sin(t), -1, 1, 0, 1);
  let c = lerpColor(colorStart, colorEnd, inter);
  fill(c); 
  rect(450, 0, 150, 150);

  // [크기 변화] 좌측 하단 붉은색 사각형
  let sizeOffset = sin(t * 1.2) * 20; // 크기가 -20에서 +20까지 변동
  fill(200, 0, 0);
  rect(0, 200, 250 + sizeOffset, 200 + sizeOffset);

  // 중앙 하단 파란색 사각형 (정지)
  fill(0, 50, 150);
  rect(350, 250, 100, 100);

  // [기본 애니메이션] 좌측 상단 검은색 사각형 (좌우 이동)
  let moveX = map(cos(t), -1, 1, 60, 100); 
  fill(0);
  rect(moveX, 80, 40, 40);
  
  // 우측 상단 파란색 아크 (정지)
  fill(0, 50, 150);
  arc(525, 150, 150, 150, radians(180), radians(360)); 

  // 좌측 하단 노란색 아크 (정지)
  fill(255, 215, 0);
  arc(0, 400, 200, 200, radians(-90), radians(0));

  // ------------------------------------
  // 2. 선 및 윤곽선 아크 그리기 (과제 1의 굵은 선)
  // ------------------------------------
  stroke(0);
  strokeWeight(10); 
  
  line(150, 0, 150, 400);
  line(250, 0, 250, 400);
  line(350, 0, 350, 400);
  line(450, 0, 450, 400);
  line(300, 0, 300, 150);
  line(80, 0, 80, 200); 

  line(0, 150, 600, 150);
  line(0, 250, 600, 250);
  line(250, 350, 450, 350); 
  line(300, 70, 600, 70);
  line(0, 80, 150, 80);   
  line(0, 200, 250, 200);
  
  // 원본 코드에서 마지막 도형들이 fill(255, 215, 0) 상태로 그려진 것을 반영
  fill(255, 215, 0); 
  arc(150, 150, 100, 100, radians(0), radians(90)); 
  arc(250, 0, 300, 300, radians(90), radians(180)); 
  arc(450, 400, 150, 150, radians(180), radians(270));
}

// 키보드 입력 시 GIF 저장 이벤트
function keyPressed() {
  if (key === 's' || key === 'S') {
    // 4초 분량의 프레임을 캡처하여 지정된 파일명으로 저장
    saveGif('20222977_엄태호_과제2.gif', 4); 
  }
}