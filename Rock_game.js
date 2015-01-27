window.onload = function() {
  


  //rockpaper();


};
 
function rockFunction(){

You='rock';
var Yours=('You clicked ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){


    case "rock": 

    if(Computer === 'rock'){
      chosen=('Tie game');

    }else if(Computer === 'paper'){
      chosen=('You lose!' +'\n' +'Computer chose ' + Computer );
      
      
     
    }else chosen=('You win' + '\n' + 'Computer chose ' + elements[2] );


}

 document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('runGame').innerHTML=chosen;
}

function paperFunction(){

You='paper';
var Yours=('You clicked ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){


    case "paper": 

   if(Computer === 'paper'){
      chosen=('Tie game');

    }else if(Computer === 'fireball'){
      chosen=('You lose!' +'\n' +'Computer chose ' + Computer );
    
    

    }else chosen=('You win' + '\n' + 'Computer chose ' +elements[0]);


}

 document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('runGame').innerHTML=chosen;

}

function fireballFunction(){


You='fireball';
var Yours=('You clicked ' + You);
var elements = ['rock','paper','fireball'];
var Computer = elements[Math.floor(Math.random()*3)];

switch(You){
case "fireball": 

    if(Computer === 'fireball'){
      chosen=('Tie game');

    }else if(Computer === 'rock'){
      chosen=("You lose!" + "</br>" +"Computer chose " + elements[1] );
     

    }else {
      chosen=("You win" + "</br>" + "Computer chose " +elements[1]);
    }
    }

     document.getElementById('yourPick').innerHTML=Yours;
    document.getElementById('runGame').innerHTML=chosen;
    
}











