window.onload = function() {
  


  rockpaper();
};
 
img.onload=function(){

        image.appendChild(img);
      };

function rockpaper(){

  var chosen;

  var img = new Image();

  var elements = ['rock','paper','fireball'];

  var You = prompt('Type: \n rock,paper, or fireball');

  var Yours=('You typed ' + You);


  if(elements.indexOf(You)==-1){
     alert('Try again');
     rockpaper();

  }
  

  var Computer = elements[Math.floor(Math.random()*3)];

  var image =document.getElementById('yourPick');

  switch(You){


    case "rock": 

    if(Computer === 'rock'){
      chosen=('Tie game');

    }else if(Computer === 'paper'){
      chosen=('You lose!' +'\n' +'Computer chose ' + Computer );
      img.src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0iHuXcwu9PCSTCfXER-WtYCSH8nZ_gDOK88nltRtybjSwpiKx8dz4F9s';
      
     
    }else chosen=('You win' + '\n' + 'Computer chose ' + elements[2] );

    break;
    
    case "paper": 

    if(Computer === 'paper'){
      chosen=('Tie game');

    }else if(Computer === 'fireball'){
      chosen=('You lose!' +'\n' +'Computer chose ' + Computer );
      img.src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0iHuXcwu9PCSTCfXER-WtYCSH8nZ_gDOK88nltRtybjSwpiKx8dz4F9s';
      image.appendChild(img);

    }else chosen=('You win' + '\n' + 'Computer chose ' +elements[0]);

    break;


    case "fireball": 

    if(Computer === 'fireball'){
      chosen=('Tie game');

    }else if(Computer === 'rock'){
      chosen=("You lose!" + "</br>" +"Computer chose " + elements[1] );
      img.src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0iHuXcwu9PCSTCfXER-WtYCSH8nZ_gDOK88nltRtybjSwpiKx8dz4F9s';
      image.appendChild(img);

    }else {
      chosen=("You win" + "</br>" + "Computer chose " +elements[1]);
    }
    }
    
    image.innerHTML=Yours;

    document.getElementById('runGame').innerHTML=chosen;
    
}





