var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click', function() {
    var guess= parseInt(document.getElementById("guessInput").value);
    attempts++;
    if (guess===randomNumber) {
        document.getElementById("result").innerHTML="Congratulations! You have guessed the number in "+attempts+" attempts.";
    } else if (guess<randomNumber) {
        document.getElementById("result").innerHTML="Number is too Low, try a Higher number";
    } else {
        document.getElementById("result").innerHTML="Number is too high, try a Lower number";
    }

});
console.log(randomNumber);