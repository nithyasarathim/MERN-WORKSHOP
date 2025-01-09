function changeContent() {
    document.getElementById("demo").innerHTML = 
        "Believe in yourself! You can achieve great things.<center> <button onclick='nextStep()'>Next Step</button> </center>";
}

function nextStep() {
    document.getElementById("demo").innerHTML = 
        "Keep pushing forward! <button onclick='finalStep()'>Final Push</button>";
    document.getElementById("demo").style.color = "blue";
}

function finalStep() {
    document.getElementById("demo").innerHTML = 
        "Success is within reach. Never give up! 🎉";
    document.getElementById("demo").style.color = "green";
    document.getElementById("demo").style.fontSize = "30px";
}

function AlertMsg() {
    alert("You've started your motivational journey!");
    console.log("Motivational alert triggered.");
}