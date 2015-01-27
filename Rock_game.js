
function user1(){



}

function user2(){



}




function rockpaper(){

  var elements = ['rock','paper','fireball'];

  var You = prompt('type: \n rock,paper, or fireball');

  console.log('You typed ' + You);


  if(elements.indexOf(You)==-1){
     alert('Try again');
     rockpaper();

  }
  

  var Computer = elements[Math.floor(Math.random()*3)];

  switch(You){


    case "rock": 

    if(Computer === 'rock')console.log('Tie game');

    else if(Computer === 'paper')console.log('You lose!' +'\n' +'Computer chose ' + Computer );

    else console.log('You win' + '\n' + 'Computer chose ' + elements[2] );

    break;
    
    case "paper": 

    if(Computer === 'paper')console.log('Tie game');

    else if(Computer === 'fireball')console.log('You lose!' +'\n' +'Computer chose ' + Computer );

    else console.log('You win' + '\n' + 'Computer chose ' +elements[0]);

    break;


    case "fireball": 

    if(Computer === 'fireball')console.log('Tie game');

    else if(Computer === 'rock')console.log('You lose!' +'\n' +'Computer chose ' + elements[1] );

    else console.log('You win' + '\n' + 'Computer chose ' +elements[1]);

    }
    return "";
}

console.log(rockpaper());

