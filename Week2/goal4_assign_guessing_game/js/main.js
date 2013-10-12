/**
 * GUESSING GAME:
 *
 * Created By:Julian Rodriguez
 * Date: 10/09/13
 * 
 * GUESSING GAME
 */

//Game variables



(function (){
    var button= document.querySelector("button")
        button.addEventListener("click",onClick)
        function onClick(e){
            "...."
        }

    var guess = prompt()
    var randomInt;

    var valueCheck = function (ran,gue){
        //stores the random integer to be reused
        randomInt = (Math.floor(Math.random()*10)+1)
        //

    if (gue < 0 || gue >10){console.log ("Place a number between 1 or 10")}
    else if (ran > gue){console.log("You are below the value");}
    else if (ran < gue ) {console.log("You are over the value");}
    else if (ran === gue) {console.log ("You got it!");}

    };
    console.log(valueCheck (randomInt, guess))
    console.log((Math.floor(Math.random()*10)+1))
})();