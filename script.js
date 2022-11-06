const API ={
 KEY: '8f40a3de95bb42549fc58d2e64fbe19a',
 Value:'http://api.openweathermap.org/data/2.5/'
}

const searchBox = document.querySelector('.search-box')

console.log(searchBox)



const button = document.querySelector('.btn')
  button.addEventListener('click', btnResalt)

  function btnResalt(er){
   if(er.class == '.btn'){
   getResalt(searchBox.value)
   console.log(searchBox.value)
  }
  }
  searchBox.addEventListener('keypress', setQuery)

  function setQuery(e){
    if(e.keyCode== 13){
     getResalt(searchBox.value)
    console.log(searchBox.value)
   
   }
   }
  
function getResalt(query){
  fetch(`${API.Value}weather?q=${query}&units=metric&APPID=${API.KEY}`)
  .then((weather)=>{
  return weather.json()
 }).then(displayResalt)
 }

function displayResalt(weather){
 console.log(weather)
 let city = document.querySelector(".location .city")
 city.innerHTML = `${weather.name},  ${weather.sys.country}`
 let now = new Date();
 let date = document.querySelector('.date')
 date.innerHTML=detaBulder(now)
 
 let temp = document.querySelector('.temp')
 temp.innerHTML=`${Math.round(weather.main.temp)} <span>°C</span>`
 let weatherr = document.querySelector('.weather')
  weatherr.innerHTML=weather.weather[0].main
 let ollWay = document.querySelector('.hello')
 ollWay.innerHTML=`${Math.round(weather.main.temp_min) } °C / ${Math.round(weather.main.temp_max) } °C  `
}



function detaBulder(m){
 let months=[
  "January",
   'February',
    'March',
  'April',
    'May',
      'June', 
     'July',
      'August',
       'September',
        'October',
         'November',
           'December'
 ]


 let days=[
  "Sunday",
   "Monday",
 "Tuesday",
  "Wednesday",
   "Thursday",
    "Friday",
     "Saturday"

]

 let day = days [m.getDay()]
let date = m.getDate()
let month = months[m.getMonth()]
let year = m.getFullYear()

return ` ${day} ${date} , ${month}, ${year}`
 
}
