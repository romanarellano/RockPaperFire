window.onload = function() {
  




};


 Wins=0;
 Ties=0;
 Losses=0;

 function randFunction(You){


var Yours=('You: ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];
var Machine;

switch(You){


    case "rock": 

    if(Computer === 'rock'){
      Machine='Computer: '+ elements[0];
      result=('Tie Game');
      Ties=Ties+1;
      document.getElementById('tie').innerHTML= Ties;
    }else if(Computer === 'paper'){
      Machine=('Computer: ' + elements[1] );
      result='You Lose';
      Losses=Losses+1;
      document.getElementById('loss').innerHTML= Losses;
    }else {
      Machine=('Computer: ' + elements[2] );
      result='You Win';
      Wins=Wins+1;
     document.getElementById('won').innerHTML= Wins;
    }
      document.getElementById('yourPick').innerHTML=Yours;
      document.getElementById('computerPick').innerHTML=Machine;
      document.getElementById('winOrLose').innerHTML=result;
    break;

    case "paper": 

   if(Computer === 'paper'){
      Machine='Computer: '+ elements[1];
      result='Tie Game';
      Ties=Ties+1;
      document.getElementById('tie').innerHTML=Ties;
    }else if(Computer === 'fireball'){
      Machine=('Computer: ' + elements[2] );
      result = 'You Lose';
     Losses=Losses+1;
      document.getElementById('loss').innerHTML=Losses;
    }else{
      Machine=('Computer: ' +elements[0]);
      result = 'You Win';
     Wins=Wins+1;
      document.getElementById('won').innerHTML=Wins;
}
    document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('computerPick').innerHTML=Machine;
    document.getElementById('winOrLose').innerHTML=result;
    break;

    case "fireball": 

    if(Computer === 'fireball'){
      Machine= "Computer: "+ elements[2];
      result=('Tie Game');
      Ties=Ties+1;
      document.getElementById('tie').innerHTML=Ties;
    }else if(Computer === 'rock'){
      Machine=("Computer: " + elements[0] );
      result='You Lose';
     Losses=Losses+1;
      document.getElementById('loss').innerHTML=Losses;
    }else {
      Machine=("Computer: " +elements[1]);
      result="You Win";
       Wins=Wins+1;
      document.getElementById('win').innerHTML=Wins;
    }

      document.getElementById('yourPick').innerHTML=Yours;
      document.getElementById('computerPick').innerHTML=Machine;
      document.getElementById('winOrLose').innerHTML=result;
     
    }

     if(Wins===5){

      
       $('#background').empty(); 
       $('#background').css('background-color','red');
       $('h1').css('left','200px');
       $('#background').append('<h1>You Win</h1>');
      // $('#butt').show();
     

           }
     else if(Losses===5){
       
        $('#background').empty(); 
        $('#background').css('background-color','blue');
        $('h1').css('left','200px');
        $('#background').append('<h1>You Lose</h1>');
       // $('#butt').show();

     }

 }    


  

