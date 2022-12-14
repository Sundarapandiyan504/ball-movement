//Set global variable that would contain the position, velocity and the html element "ball"
var speedX=20;
var speedY=30;
const balldimanson=100;
  var ball=document.getElementById("ball");
  var ball1=document.getElementById("ball1");
  var height = window.innerHeight;
  var width = window.innerWidth;
  var positionX=width/2;
  var positionY=height/2;
 ball.style.left = positionX + `px`;
 ball.style.top = positionY+`px`;
 ball1.style.left = positionX + `px`;
 ball1.style.top = positionY+`px`;
  //var bal=document.getElementById("bal");
  //write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  positionX+=speedX
  positionY+=speedY
  ball.style.left = positionX + `px`;
  ball.style.top = positionY+`px`;
  ball1.style.top = positionX + `px`;
  ball1.style.left = positionY+`px`;
  if(positionX+balldimanson >= width||positionX <= 0){
    speedX *= -1
  }
  if(positionY+balldimanson >=height||positionY <= 0){
    speedY *= -1
  }
  //console.log(positionX)
  console.log(positionY)
  console.log(positionX)
  }
// This call the moveBall function every 100ms
setInterval(moveBall, 50);



