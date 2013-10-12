/*
Julian Rodriguez
10/1/13
Goal 1 Duel 1 Assignment
*/

//self executing function

(function(){
    console.log("LETS ROCK");

  var button= document.querySelector(".buttonblue")

    button.addEventListener("click",fight)


  var player1 ={Name:"Spiderman",
                Damage:20,
                Health: 100}


  var player2= {Name:"Batman",
                Damage:20,
                Health:100}

  var playerData = [player1,player2]


    var round=1;

    //calculates player health and damage
    function fight(){
        //alert (playerData1[0]+":"+playerData1[2]+" START "+playerData2[0]+":"+playerData2[2])
         var roundUpdate= document.querySelector("input")
         var spiderHealth = document.querySelector("#kabal")
         var batHealth = document.querySelector("#kratos")

         roundUpdate.value= "Round "+round

        var minDamage1 = playerData[0].Damage* .5
        var minDamage2 = playerData[1].Damage* .5
        var p1=Math.floor(Math.random()*(playerData[0].Damage-minDamage1)+minDamage1)
        var p2=Math.floor(Math.random()*(playerData[1].Damage-minDamage2)+minDamage2)

         //inflict damage
            playerData[0].Health-=p1;
            playerData[1].Health-=p2;
         console.log(playerData[0].Name+":"+playerData[0].Health+" START "+playerData[1].Name+":"+playerData[1].Health)

            var results= winnerCheck();

            if(results === "NO WINNER"){
                round++;
                spiderHealth.innerHTML= playerData[0].Health
                batHealth.innerHTML= playerData[1].Health

                //alert(playerData1[0]+":"+playerData1[2]+" ROUND"+round+" Over "+playerData2[0]+" : "+playerData2[2])
            } else{
                roundUpdate.value= results;

            }
        }


    //verifies the winner after values are calculated.
    function winnerCheck(){

        var button= document.querySelector(".buttonblue")

          var result= "NO WINNER"

        if (playerData[0].Health<1 && playerData[1].Health<1){
            result="DRAW";
            button.removeEventListener("click", fight);
            }else if (playerData[0].Health<1){
            result=playerData[1].Name+" WINS";
            button.removeEventListener("click", fight);
        } else if (playerData[1].Health<1 ){
            result=playerData[0].Name+" WINS";
            button.removeEventListener("click", fight);
        };


        return result;
    };

})();