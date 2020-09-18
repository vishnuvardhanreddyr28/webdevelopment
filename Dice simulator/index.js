
var player1=Math.ceil(6*Math.random());

var dice1="dice"+player1+".png";
var dice1src="images/"+dice1;

var imgsrc1=document.querySelectorAll("img")[0];
imgsrc1.setAttribute("src",dice1src);


var player2=Math.ceil(6*Math.random());

var dice2="dice"+player2+".png";
var dice2src="images/"+dice2;

var imgsrc2=document.querySelectorAll("img")[1];
imgsrc2.setAttribute("src",dice2src);


var winnersrc=document.querySelector("h1");

if(player1>player2)
{
  winnersrc.innerHTML="Player 1 wins";
}
else if(player2>player1)
{
  winnersrc.innerHTML="Player 2 wins";
}
else{
  winnersrc.innerHTML="Draw";
}







