let currentHour = 24;
let currentMinute = 60;
let angle = 0;
let currentSecond = 0;
let milliFreeze = 0;
let m = 0;
let bool = true;
let startSecond = 0;
let i = 0;
function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
}

function draw() {
  background("Green");
  fill("red");
  // gets the starting second that the program starts on,
  // very useful for the pendulum buffer time
  if(i < 1){
    i = 1;
    startSecond = second();
  }
  // if the hour is less than 12 you fill the background with white
  // and progressively add a pixel onto the white background every minute
  if(hour() < 12){
    fill("black");
    rect(0, 725, 600, -720);
    fill("white");
    rect(0, 725, 600, -(hour() * 60));
    rect(0, 725, 600, -((hour() * 60) + minute()));
  }
  // same thing but for black going down to indicate afternoon and evening
  if(hour() >= 12){
    fill("white");
    rect(0, 5, 600, 720);
    fill("black");
    rect(0, 5, 600, (hour() - 12) * 60);
    rect(0, (hour() - 12) * 60, 600, minute() * 1.1);
  }
  // sets up the notches and time trackers for morning/AM times
  if(hour() <= 12){
    push();
    fill(0,0,0);
    line(0, 5, 75, 5);
    line(0, 65, 75, 65);
    line(0, 125, 75, 125);
    line(0, 185, 75, 185);
    line(0, 245, 75, 245);
    line(0, 305, 75, 305);
    line(0, 365, 75, 365);
    line(0, 425, 75, 425);
    line(0, 485, 75, 485);
    line(0, 545, 75, 545);
    line(0, 605, 75, 605);
    line(0, 665, 75, 665);
    line(0, 725, 75, 725);

    rect(2, 7, 50, 25, 3);
    rect(2, 67, 50, 25, 3);
    rect(2, 127, 50, 25, 3);
    rect(2, 187, 50, 25, 3);
    rect(2, 247, 50, 25, 3);
    rect(2, 307, 50, 25, 3);
    rect(2, 367, 50, 25, 3);
    rect(2, 427, 50, 25, 3);
    rect(2, 487, 50, 25, 3);
    rect(2, 547, 50, 25, 3);
    rect(2, 607, 50, 25, 3);
    rect(2, 667, 50, 25, 3);
    fill("white");
    circle(27, 680, 8);
    triangle(27, 614, 22, 624, 32, 624);
    triangle(20, 554, 15, 564, 25, 564);
    circle(34, 560, 8);
    triangle(20, 494, 15, 504, 25, 504);
    triangle(29, 504, 34, 494, 39, 504);
    triangle(27, 434, 22, 444, 32, 444);
    triangle(20, 444, 15, 434, 10, 444);
    circle(38, 439, 8);
    rect(25, 370, 4, 19);
    rect(21, 310, 4, 19);
    circle(34, 319, 8);
    rect(21, 250, 4, 19);
    triangle(29, 264, 34, 254, 39, 264);
    triangle(27, 194, 22, 204, 32, 204);
    rect(16, 190, 4, 19);
    circle(38, 199, 8);
    rect(16, 130, 4, 19);
    triangle(27, 134, 22, 144, 32, 144);
    triangle(34, 144, 39, 134, 44, 144);
    triangle(25, 84, 20, 74, 15, 84);
    triangle(29, 84, 34, 74, 39, 84);
    circle(44, 79, 8);
    rect(9, 70, 4, 19);
    rect(21, 10, 4, 19);
    rect(29, 10, 4, 19);
    pop();
  }
  // Sets up notches and time trackers for afternoon/evening/PM times
  if(hour() > 12){
    push();
    stroke(255);
    line(600, 5, 525, 5);
    line(600, 65, 525, 65);
    line(600, 125, 525, 125);
    line(600, 185, 525, 185);
    line(600, 245, 525, 245);
    line(600, 305, 525, 305);
    line(600, 365, 525, 365);
    line(600, 425, 525, 425);
    line(600, 485, 525, 485);
    line(600, 545, 525, 545);
    line(600, 605, 525, 605);
    line(600, 665, 525, 665);
    line(600, 725, 525, 725);

    noStroke();
    fill(255,255,255);
    rect(598, 63, -50, -25, 3);
    rect(598, 123, -50, -25, 3);
    rect(598, 183, -50, -25, 3);
    rect(598, 243, -50, -25, 3);
    rect(598, 303, -50, -25, 3);
    rect(598, 363, -50, -25, 3);
    rect(598, 423, -50, -25, 3);
    rect(598, 483, -50, -25, 3);
    rect(598, 543, -50, -25, 3);
    rect(598, 603, -50, -25, 3);
    rect(598, 663, -50, -25, 3);
    rect(598, 723, -50, -25, 3);
    fill("black");
    circle(573, 51, 8);
    triangle(573, 116, 568, 106, 578, 106);
    triangle(585, 166, 580, 176, 575, 166);
    circle(567, 171, 8);
    triangle(585, 226, 580, 236, 575, 226);
    triangle(571, 226, 566, 236, 561, 226);
    triangle(573, 296, 578, 286, 568, 286);
    triangle(580, 286, 585, 296, 590, 286);
    circle(562, 291, 8);
    rect(571, 360, 4, -19);
    rect(577, 420, 4, -19);
    circle(567, 411, 8);
    rect(577, 480, 4, -19);
    triangle(571, 466, 566, 476, 561, 466);
    triangle(573, 536, 568, 526, 578, 526);
    rect(580, 540, 4, -19);
    circle(562, 531, 8);
    rect(580, 600, 4, -19);
    triangle(578, 586, 573, 596, 568, 586);
    triangle(566, 586, 561, 596, 556, 586);
    triangle(575, 646, 580, 656, 585, 646);
    triangle(571, 646, 566, 656, 561, 646);
    circle(555, 651, 8);
    rect(587, 660, 4, -19);
    rect(575, 720, 4, -19);
    rect(567, 720, 4, -19);
    pop();
  }
  // debug code
  // fill("red");
  // text("Hour: " + hour(), 100, 20);
  // text("Minute: " + minute(), 100, 40);
  // text("milliseconds: " + m, 100, 60);
  // text("second: " + currentSecond, 100, 80);
  // sets up the pendulum
  fill("brown");
  rect(200, 725, 200, -200);
  translate(300, 530,);
  // tracks the seconds and milliseconds.
  if (currentSecond != second()){
    currentSecond = second();  
    milliFreeze = millis();
  }
  m = floor(millis() - milliFreeze);
  // perfroms the buffer and rotates the pendulum for half a second
  if(m > 500 && currentSecond % 2 == 0 && startSecond < currentSecond && bool == true){
    angle = angle + 0.5;
    rotate(angle);
  }
  // same thing here but in the other direction for odd seconds
  else if(m > 500 && currentSecond % 2 == 1 && startSecond < currentSecond && bool == true){
    angle = angle - 0.5;
    rotate(angle);
  }
  // swaps the direction of the rotation when on an even second
  else if(currentSecond % 2 == 0 && bool == false){
    angle = angle + 0.5;
    rotate(angle);
  }
  // swaps the direction of the rotation when on an odd second
  else if (currentSecond % 2 == 1 && bool == false){
    angle = angle - 0.5;
    rotate(angle);
  }
  // disables the buffer after one use
  if(milliFreeze > 1000){
    bool = false;
  }
  // draws the pendulum
  fill("gray");
  rect(-5, 0, 10, 150);
  translate(0, 0);

}