let get= new Promise((resolve, reject) =>{
    const work=true;
    if(work){
        setTimeout(()=>resolve('API is working fine.'),3000);
    }                                                                 //promises
    else{
        reject('It is not working');
    }
});


function print(){
    get.then(res =>{
        console.log(res);
    }).catch(err=>{                                                 //then & catch
        console.log(err);
    }).finally(()=>{
        console.log("Its done");
    });
}
print();

async function printRes(){
    console.log('hello');
    try{
        let res= await get;                                            //async & await
        console.log(res);
    }catch(err){
        console.log(err);
    } 
}
printRes(); 