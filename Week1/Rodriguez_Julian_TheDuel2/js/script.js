/*
Julian Rodriguez
10/1/13
Goal 1 Duel 1 Assignment
*/

//self executing function

(function(){
    console.log("LETS ROCK");

  var playerData1= ["Spiderman", 20 , 100]
  var playerData2= ["Batman" , 20 , 100]

//    //Player Names
//    var playerOneName = "Spiderman";
//    var playerTwoName = "Batman";
//
//    //Player Damage
//    var playerOneDMG =20;
//    var playerTwoDMG =20;
//
//    //Player Health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;

    var round=0;

    //calculates player health and damage
    function fight(){
        alert (playerData1[0]+":"+playerData1[2]+" START "+playerData2[0]+":"+playerData2[2])
        for (var i=0; i<10;i++){

        var minDamage1 = playerData1[1]* .5
        var minDamage2 = playerData2[1]* .5
        var p1=Math.floor(Math.random()*(playerData1[1]-minDamage1)+minDamage1)
        var p2=Math.floor(Math.random()*(playerData2[1]-minDamage2)+minDamage2)

         //inflict damage
         playerOneHealth-=p1;
         playerTwoHealth-=p2;
         console.log(playerData1[0]+":"+playerOneHealth+" START "+playerData2[0]+":"+playerTwoHealth)

            var results= winnerCheck();

            if(results === "NO WINNER"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" ROUND"+round+" Over "+playerTwoName+" : "+playerTwoHealth)
            } else{
                alert(results)
                break;

            }

        }

    }

    fight();
    //verifies the winner after values are calculated.
    function winnerCheck(){
          var result= "NO WINNER"

        if (playerOneHealth<1 && playerTwoHealth<1){
            result="DRAW"
        } else if (playerData1[2]<1){
            result=playerData1[0]+" WINS"
        } else if (playerData1[2]<1){
            result=playerData1[0]+" WINS"
        };

        return result;
    };

})();