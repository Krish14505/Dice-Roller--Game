//This js file is used to roll a dice and change the player name

//Player name by default
let player1 = "player1";
let player2 = "player2";

//The function to change the name of the player
function editNames() {

    player1= prompt("Change the player1 name: ");
    player2= prompt("change the player2 name: ");

    //a little validation for correctly inputing the player name.
    if(player1.length < 1 || player2.length < 1 ) {
        alert("please enter valid name")
        return;
    }

    document.querySelector("p.firstPlayer").innerHTML = player1;
    document.querySelector("p.secondPlayer").innerHTML = player2;

}


//function of rollTheDice
function rollTheDice() {

    let diceNum1 = document.querySelector(".image1");
    let diceNum2 = document.querySelector(".image2");

    diceNum1.setAttribute("src", "/dice_Images/diceroll.gif");
    diceNum2.setAttribute("src","/dice_Images/diceroll.gif");

    let result = document.querySelector("h1");


    setTimeout( () => {
        let randomNumber1 = Math.floor(Math.random() * 6 )+1 ;
        let randomNumber2 = Math.floor(Math.random() * 6 )+1 ;

        diceNum1.setAttribute("src", `/dice_Images/dice${randomNumber1}.png`);
        diceNum2.setAttribute("src",`/dice_Images/dice${randomNumber2}.png`);

        //check for the winner

        if(randomNumber1 === randomNumber2) {
            
            result.innerHTML = "DRAW!";
        }
        else if(randomNumber1 < randomNumber2) {
           
            result.innerHTML = (player2+ " WINS!");

        }
        else {

            result.innerHTML = (player1 + " WINS!");

        }


    },2500);
    
}    