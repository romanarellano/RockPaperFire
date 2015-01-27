window.onload = function() {
  


  //rockpaper();


};
var Wins=0;
var Ties=0;
var Losses=0;
function rockFunction(){

You='rock';
var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];
var Machine;

switch(You){


    case "rock": 

    if(Computer === 'rock'){
      Machine='Computer: '+ Computer;
      result=('Tie game');
      
      document.getElementById('tie').innerHTML=Ties++;
    }else if(Computer === 'paper'){
      Machine=('Computer: ' + Computer );
      result='You Lose';
      
      document.getElementById('loss').innerHTML=Losses++;
    }else {
      Machine=('Computer: ' + elements[2] );
      result='You win';
      Wins++;
     document.getElementById('won').innerHTML=Wins++;
    }
    document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('computerPick').innerHTML=Machine;
    document.getElementById('winOrLose').innerHTML=result;
   // document.getElementById('Score').innerHTML=result;
    }
}

function paperFunction(){

You='paper';
var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){


    case "paper": 

   if(Computer === 'paper'){
      Machine='Computer: '+ Computer;
      result=('Tie game');
     
      document.getElementById('tie').innerHTML=Ties++;
    }else if(Computer === 'fireball'){
      Machine=('Computer: ' + Computer );
      result = 'You lose';
     
      document.getElementById('loss').innerHTML=Losses++;
    }else 
      Machine=('Computer: ' +elements[0]);
      result = 'You Win';
     
      document.getElementById('won').innerHTML=Wins++;
}
    document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('computerPick').innerHTML=Machine;
    document.getElementById('winOrLose').innerHTML=result;
  //  document.getElementById('Score').innerHTML=result;

    
}

function fireballFunction(){


You='fireball';
var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){
case "fireball": 

    if(Computer === 'fireball'){
      Machine= "Computer: "+ Computer;
      result=('Tie game');
      
      document.getElementById('tie').innerHTML=Ties++;
    }else if(Computer === 'rock'){
      Machine=("Computer: " + elements[0] );
      result='You win';
     
      document.getElementById('won').innerHTML=Wins++;
    }else {
      Machine=("Computer: " +elements[1]);
      result="You lose";
      
      document.getElementById('loss').innerHTML=Losses++;
    }
    }

     document.getElementById('yourPick').innerHTML=Yours;
     document.getElementById('computerPick').innerHTML=Machine;
     document.getElementById('winOrLose').innerHTML=result;
   //  document.getElementById('Score').innerHTML=result;
}











