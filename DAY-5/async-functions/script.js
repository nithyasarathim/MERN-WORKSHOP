function print(msg){
    document.getElementById('demo').innerHTML = msg;
}

function add(a,b,callback){  //callback is a function parameter !
    let sum=a+b;
    callback(sum);
}
add(89,11,print);