
const button = document.getElementById("button");
const place = document.getElementById("weather");
const weather_deg = document.getElementById("weather_deg");
let count=0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        button.textContent = "Next";
        weather_deg.textContent ="";
        place.textContent = response.data[count].country;
        setTimeout(function(){
            city.textContent = response.data[count].city;
            weather_deg.textContent = response.data[count].temperature;
        },1500);
        count++;
    })
    .catch(function(error){
        console.log(error);
    });
};
