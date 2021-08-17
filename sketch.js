var ball = {
  x:200,
  y:300,
  r:30,
  xspeed:0,
  yspeed:0,
  color:["blue","red","green","purple","orange"]
};



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[4]);


  ball.yspeed = 1;
  ball.y = ball.y - ball.yspeed;

}