const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')


changeLocation.city.focus()

//udDataUi
const upDataUi = (weather) =>{

    let clouds = weather.clouds.all > 0 ? 'Clouds': 'Clear'
    let temp = Math.round(weather.main.temp)
    details.innerHTML = `
    <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
          <p class="mb-3">${clouds}</p>
          <div class="display-4 mb-3">
            <span>${temp}</span>
            <span>&deg;C</span>
          </div>
    `

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

    weatherIcon.src =`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}




//get weathet
const getWeather = async (city) =>{
    const data = await getData(city)
    return data
}



//get location
changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()

    const cityName = changeLocation.city.value.trim();
    changeLocation.reset()
    getWeather(cityName).then((data)=>upDataUi(data))

})