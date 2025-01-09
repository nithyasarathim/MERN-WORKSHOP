var op="";
var num1="";
var num2="";
document.getElementById("display").value=result;

function append(val){
    if(op===""){
        num1+=val;
        document.getElementById("display").value=num1;
    }
    else{
        num2+=val;
        document.getElementById("display").value=num1+" "+op+" "+num2;
    }
}

function operation(operator){
        op=operator;
        document.getElementById("display").value=num1+" "+op;
}

function eql(){
    var result=0;
    switch(op){
        case "+":
            result=parseInt(num1)+parseInt(num2);
            break;
        case "-":
            result=parseInt(num1)-parseInt(num2);
            break;
        case "*":
            result=parseInt(num1)*parseInt(num2);
            break;
        case "/":
            result=parseInt(num1)/parseInt(num2);
            break;
    }
    document.getElementById("display").value=result;
}

function clr(){
    num1="";
    num2="";
    op="";
    document.getElementById("display").value=0;
}

const body = document.querySelector('body');
const button = document.querySelectorAll('button');

const color = [
  'red',
  'black',
  'blue',
  'pink',
  'yellow',
  'green',
  'violet',
  'whitesmoke'
];

button.forEach((button) =>
  button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
  })
);