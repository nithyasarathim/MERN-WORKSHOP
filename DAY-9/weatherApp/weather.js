const inp = document.getElementById('cityInp');
const cName = document.getElementById('cName');
const temp = document.getElementById('temp');
const feel = document.getElementById('feel');
const desc = document.getElementById('desc');
const wind = document.getElementById('wind');
const sugg = document.getElementById('sugg');
const icon = document.getElementById('icon');

inp.addEventListener('keypress', async (e) => {
  if (e.key === "Enter") {
    const city = inp.value.trim();
    if (city) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
        );
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        updateWeather(data);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert('Enter a city name!');
    }
  }
});

function updateWeather(data) {
  cName.textContent = `${data.name}, ${data.sys.country}`;
  temp.textContent = `${data.main.temp}°C`;
  feel.textContent = `${data.main.feels_like}°C`;
  desc.textContent = data.weather[0].description;
  wind.textContent = `${data.wind.speed} m/s`;

  const weatherMain = data.weather[0].main.toLowerCase();

  if (weatherMain.includes("rain")) {
    sugg.textContent = "Don't forget your umbrella! ☔";
    icon.src = "assets/rain.png";
    document.body.style.background = "linear-gradient(to bottom, #5f5aa2, #305973)";
  } else if (weatherMain.includes("cloud")) {
    sugg.textContent = "It's cloudy outside. ☁️";
    icon.src = "assets/clouds.png";
    document.body.style.background = "linear-gradient(to bottom, #757f9a, #d7dde8)";
  } else if (weatherMain.includes("clear")) {
    sugg.textContent = "It's a clear day! Enjoy the sunshine! ☀️";
    icon.src = "assets/sun.png";
    document.body.style.background = "linear-gradient(to bottom,rgb(255, 238, 124),rgb(227, 170, 36))";
  } else if (weatherMain.includes("snow")) {
    sugg.textContent = "It's snowing! Stay warm! ❄️";
    icon.src = "assets/snowy.png";
    document.body.style.background = "linear-gradient(to bottom, #83a4d4, #b6fbff)";
  } else {
    sugg.textContent = "Visibility is low, take care! 🌫️";
    icon.src = "assets/haze.png";
    document.body.style.background = "linear-gradient(to bottom, #6a85b6, #bac8e0)";
  }
}
