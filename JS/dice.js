let games = 1
let player1totalOld = 0
let player2totalOld = 0


const diceroll = () =>{
    return Math.floor(Math.random() * 6) + 1
}

const throw2dice = () =>{
    return [diceroll(), diceroll()]

}

function rollDice() {
    let roll = throw2dice()
    let player1score = roll[0];
    let player2score = roll[1];
    player1score = parseInt(player1score)
    player2score = parseInt(player2score)
    console.log(player1score)
    console.log(player2score)
    alert("Player One rolled: " + player1score + "   &   Player Two rolled: " + player2score);
    if (player1score == 1) {
    document.getElementById('pic1').src="Images/one.png";
}else if (player1score == 2) {
    document.getElementById('pic1').src="Images/two.png";
}else if (player1score == 3) {
    document.getElementById('pic1').src="Images/three.png";
}else if (player1score == 4) {
    document.getElementById('pic1').src="Images/four.png";
}else if (player1score == 5) {
    document.getElementById('pic1').src="Images/five.png";
}else if (player1score == 6) {
    document.getElementById('pic1').src="Images/six.png";
}
if (player2score == 1) {
    document.getElementById('pic2').src="Images/one.png"
}else if (player2score == 2) {
    document.getElementById('pic2').src="Images/two.png";
}else if (player2score == 3) {
    document.getElementById('pic2').src="Images/three.png";
}else if (player2score == 4) {
    document.getElementById('pic2').src="Images/four.png";
}else if (player2score == 5) {
    document.getElementById('pic2').src="Images/five.png";
}else if (player2score == 6) {
    document.getElementById('pic2').src="Images/six.png";
}
        let scores = document.getElementById("scores").innerHTML;
        player1score = parseInt(player1score);
        player2score = parseInt(player2score);
        player1total = player1totalOld + player1score;
        player2total = player2totalOld + player2score;
        document.getElementById("scores").innerHTML = "Player 1 total score is " + player1total + "<p></p>" + " Player 2 total score is " + player2total;
        player1totalOld = player1total;
        player2totalOld = player2total;
        document.getElementById("gamesPlayed").innerHTML = games++

        preventBack = function () {
            try {
                history.forward();
                setTimeout('preventBack()', 500);
            } catch (e) {}
          };
        
}

function reset() {
    player1total = 0;
    player2total = 0;
    document.getElementById("scores").innerHTML = "Player 1 total score is " + player1total + "<p></p>" + " Player 2 total score is " + player2total;
    player1totalOld = 0;
    player2totalOld = 0;
    games = 0;
    document.getElementById("gamesPlayed").innerHTML = games;
    games = 1;
}

document.getElementById("buttonOne").addEventListener("click",rollDice)
document.getElementById("buttonTwo").addEventListener("click",reset)