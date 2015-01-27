window.onload = function() {
  


  //rockpaper();


};
 Wins=0;
 Ties=0;
 Losses=0;



function rockFunction(){

You='rock';
var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];
var Machine;

switch(You){


    case "rock": 

    if(Computer === 'rock'){
      Machine='Computer: '+ elements[0];
      result=('Tie Game');
      
      document.getElementById('tie').innerHTML= Ties++;
    }else if(Computer === 'paper'){
      Machine=('Computer: ' + elements[1] );
      result='You Lose';
      
      document.getElementById('loss').innerHTML= Losses++;
    }else {
      Machine=('Computer: ' + elements[2] );
      result='You Win';
      
     document.getElementById('won').innerHTML= Wins++;
    }
      document.getElementById('yourPick').innerHTML=Yours;
      document.getElementById('computerPick').innerHTML=Machine;
      document.getElementById('winOrLose').innerHTML=result;
   // break;
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
      Machine='Computer: '+ elements[1];
      result='Tie Game';
     
      document.getElementById('tie').innerHTML=Ties++;
    }else if(Computer === 'fireball'){
      Machine=('Computer: ' + elements[2] );
      result = 'You Lose';
     
      document.getElementById('loss').innerHTML=Losses++;
    }else{
      Machine=('Computer: ' +elements[0]);
      result = 'You Win';
     
      document.getElementById('won').innerHTML=Wins++;
}
    document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('computerPick').innerHTML=Machine;
    document.getElementById('winOrLose').innerHTML=result;
   // break;
}
    
}

function fireballFunction(){


You='fireball';
var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){
case "fireball": 

    if(Computer === 'fireball'){
      Machine= "Computer: "+ elements[2];
      result=('Tie Game');
      
      document.getElementById('tie').innerHTML=Ties++;
    }else if(Computer === 'rock'){
      Machine=("Computer: " + elements[0] );
      result='You Lose';
     
      document.getElementById('loss').innerHTML=Losses++;
    }else {
      Machine=("Computer: " +elements[1]);
      result="You Win";
      
      document.getElementById('win').innerHTML=Wins++;
    }

      document.getElementById('yourPick').innerHTML=Yours;
      document.getElementById('computerPick').innerHTML=Machine;
      document.getElementById('winOrLose').innerHTML=result;
    // break;
    }

     
}











