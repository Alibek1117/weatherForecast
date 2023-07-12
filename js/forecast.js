const KEY = '96b947a45d33d7dc1c49af3203966408'
const overlay = document.getElementById('overlay')
const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`

    console.log('loading');
    overlay.classList.remove('d-none')
    const req = await fetch(base + query)
    const data = await req.json()
    overlay.classList.add('d-none')
    console.log('Finish');
    return data 
}

