const btn= document.getElementById('btn');
const jokeques= document.getElementById('jokeques');
const jokeans= document.getElementById('jokeans');
btn.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(res){
        btn.textContent="Next";
        jokeques.innerHTML=res.data.setup;
        jokeans.innerHTML="";
        setTimeout(()=>{
            jokeans.innerHTML=res.data.punchline;
        },2000);
    }).then(function(err){
        console.log(err);
    });
}