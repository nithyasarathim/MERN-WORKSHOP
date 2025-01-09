var op="";
var num1="";
var num2="";
document.getElementById("display").value=0;
const alertBox=document.getElementById("message");

function append(val) {
    if (op==="") {
        num1+=val;
        document.getElementById("display").value=num1;
    } else {
        num2+=val;
        document.getElementById("display").value=num1+" "+op+" "+num2;
    }
}

function operation(operator) {
    if (num1==="") {
        alertBox.innerHTML="Please enter a number first";
    } else {
        op=operator;
        document.getElementById("display").value=num1+" "+op;
        alertBox.innerHTML=""; 
    }
}

function eql() {
    var result=0;
    if (num1===""|| num2===""|| op==="") {
        alertBox.innerHTML="Please complete the operation.";
        return;
    }

    switch (op) {
        case "+":
            result=parseInt(num1)+parseInt(num2);
            alertBox.innerHTML=num1+" + "+num2+" = "+result;
            break;
        case "-":
            result=parseInt(num1)-parseInt(num2);
            alertBox.innerHTML=num1+" - "+num2+" = "+result;
            break;
        case "*":
            result=parseInt(num1)*parseInt(num2);
            alertBox.innerHTML=num1+" * "+num2+" = "+result;
            break;
        case "/":
            if (num2==="0") {
                alertBox.innerHTML="Division by zero is not allowed.";
                return;
            }
            result=parseInt(num1)/parseInt(num2);
            alertBox.innerHTML=num1+" / "+num2+" = "+result;
            break;
    }

    const body=document.querySelector('body');
    const color=['red','black','blue','pink','yellow','green','violet','whitesmoke'];
    document.getElementById("display").value=result;
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}

function clr() {
    num1="";
    num2="";
    op="";
    document.getElementById("display").value=0;
    alertBox.innerHTML=""; 
}
