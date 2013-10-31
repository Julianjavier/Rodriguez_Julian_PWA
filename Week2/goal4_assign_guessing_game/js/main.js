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

    var playerGuess=0;
    var guessesRemaining=3;
    var guessesMade=0;

    var dom={
       input: document.querySelector("#input"),
       output:document.querySelector("#output"),
       button:document.querySelector("button")
    }

    var randomNum= Math.floor(Math.random()*10+1)

    var clickFn= function(e){
       console.log(guessesRemaining,input.value);
       validateInput();
    }

    var validateInput= function(){
        playerGuess= parseInt(dom.input.value)

        if (isNAN(playerGuess)){
            dam.output.innerHTML= "Derp not a number"
        } else if (playerGuess<1 || playerGuess>10){
            dom.output.innerHTML="Please enter a number between 1 and 10"
        } else {
            playGame();
        };
    };

    var playGame = function(){
        guessesRemaining--;
        guessesMade++;
        gameState = "Gues: "+guessesMade+", Remaining: "+ guessesRemaining;
        playerGuess= parseInt(input.value);

        if(playerGuess > randomNum){
            dom.output.innerHTML= "Too high"+gameState;
        } else if(playerGuess<randomNum){
            dom.output.innerHTML= "Too low"+gameState;
        } else if(playerGuess === randomNum){
            gameOver(true)
        };

        if (guessesRemaining < 1){
            console.log("Game Over : guessesRemaining is < 1");
            gameOver(false)
        };
    };

    var gameOver= function(win){
        if (win){
            dom.output.innerHTML
                 ="Yes, its "+randomNum+"!"+"<br>"
                 +"It only took you "+guessesMade +" guesses.";
        } else{
            dom.output.innerHTML
            ="No more left!" + "<br>"
            +"The number was: "+randomNum+"."
        }
    }
   dom.button.removeEventListener("click", clickFn, false)
   dom.addEventListener("click",clickFn)
})();