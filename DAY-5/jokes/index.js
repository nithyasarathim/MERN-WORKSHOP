const btn= document.getElementById('btn');
const jokeques= document.getElementById('jokeques');
const jokeans= document.getElementById('jokeans');
const quoteBtn = document.getElementById('quoteBtn');
const quote = document.getElementById('quote');
const showDogsBtn = document.getElementById('dogBtn');
const dogImage = document.getElementById('dogImage');
const dogQuote = document.getElementById('dog');

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

quoteBtn.onclick = () => { 
    axios.get('https://api.adviceslip.com/advice')
        .then(function(res) {
            quoteBtn.textContent = "Next";
            quote.innerHTML = res.data.slip.advice;
        })
        .catch(function(err) {
            console.log(err);
            quote.innerHTML = "Could not fetch a quote. Please try again later.";
        });
}

showDogsBtn.onclick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(res) {
            showDogsBtn.textContent = "Show Another Dog";
            dogQuote.innerHTML = "Here's a cute dog for you!";
            dogImage.src = res.data.message;
            dogImage.style.display = "block";
        })
        .catch(function(err) {
            console.log(err);
            dogQuote.innerHTML = "Could not fetch a dog image. Please try again later.";
            dogImage.style.display = "none";
        });
}

