window.onload = function() {
  rockpaper();
};


function user1(){



}

function user2(){



}




function rockpaper(){

  var chosen;

  var elements = ['rock','paper','fireball'];

  var You = prompt('Type: \n rock,paper, or fireball');

  var choose=('You typed ' + You);


  if(elements.indexOf(You)==-1){
     alert('Try again');
     rockpaper();

  }
  

  var Computer = elements[Math.floor(Math.random()*3)];

  switch(You){


    case "rock": 

    if(Computer === 'rock')chosen=('Tie game');

    else if(Computer === 'paper')chosen=('You lose!' +'\n' +'Computer chose ' + Computer );

    else chosen=('You win' + '\n' + 'Computer chose ' + elements[2] );

    break;
    
    case "paper": 

    if(Computer === 'paper')chosen=('Tie game');

    else if(Computer === 'fireball')chosen=('You lose!' +'\n' +'Computer chose ' + Computer );

    else chosen=('You win' + '\n' + 'Computer chose ' +elements[0]);

    break;


    case "fireball": 

    if(Computer === 'fireball'){
      chosen=('Tie game');

    }else if(Computer === 'rock'){
      chosen=('You lose!' +'\n' +'Computer chose ' + elements[1] );

    }else {
      chosen=('You win' + '\n' + 'Computer chose ' +elements[1]);
    }
    }
    document.getElementById('test').innerHTML=choose;
    document.getElementById('runGame').innerHTML=chosen;
    //return chosen + "\n"+ "Thank you for playing!";
}





