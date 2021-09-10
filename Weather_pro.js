let head=document.getElementById("location");
let to=document.getElementById("top");
let hum=document.getElementById("humidity");
let temp=document.getElementById("temperature");
let loc=document.getElementById("location");
let win=document.getElementById("wind");
let btn=document.getElementById("submit");
let cityName=document.getElementById("city-search");
btn.addEventListener('click',GetData);

function GetData(){
const  url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=8a89c504dea9c0e87f45c52a16fa4e2e`
axios.get(url)
       .then(res=>{
       axios.get(url);
        loc.innerText=`${cityName.value}`;
        to.innerText=`${res.data.weather[0].description}`;
        temp.innerText=` ${res.data.main.temp} C`;
        hum.innerText=` ${res.data.main.humidity} `;
        win.innerText=`${res.data.wind.speed} m/s`;
             
       })
       .catch(err=>{
           console.log("Error");
          
       })
}   
