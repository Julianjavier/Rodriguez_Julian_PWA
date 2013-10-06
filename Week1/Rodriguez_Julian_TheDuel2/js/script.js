/*
Julian Rodriguez
10/1/13
Goal 1 Duel 1 Assignment
*/

//self executing function

(function(){
    console.log("LETS ROCK");

    //Player Names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //Player Damage
    var playerOneDMG =20;
    var playerTwoDMG =20;

    //Player Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round=0;

    //calculates player health and damage
    function fight(){
        alert (playerOneName+":"+playerOneHealth+"START"+playerTwoName+":"+playerTwoHealth)
        for (var i=0; i<10;i++){

        var minDamage1 = playerOneDMG* .5
        var minDamage2 = playerTwoDMG* .5
        var p1=Math.floor(Math.random()*(playerOneDMG-minDamage1)+minDamage1)
        var p2=Math.floor(Math.random()*(playerTwoDMG-minDamage2)+minDamage2)

         //inflict damage
         playerOneHealth-=p1;
         playerTwoHealth-=p2;
         console.log(playerOneName+":"+playerOneHealth+"START"+playerTwoName+":"+playerTwoHealth)

            var results= winnerCheck();

            if(results === "NO WINNER"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"ROUND"+round+"Over"+playerTwoName+":"+playerTwoHealth)
            } else{
                alert(results)
                break;

            }

        }

    }

    fight();
    //verifies the winner after values are calculated.
    function winnerCheck(){

        if (playerOneHealth<1 && playerTwoHealth<1){
            result="DRAW"
        } else if (playerOneName<1){
            result=playerTwoName+"WINS"
        } else if (playerTwoName<1){
            result=playerOneName+"WINS"
        };

        return result;
    };

})();