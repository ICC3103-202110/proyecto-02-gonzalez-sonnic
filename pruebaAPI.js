const axios = require('axios')
function GetTempInApi(){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const respond =  axios.get(URL)
    return respond
}
console.log(GetTempInApi())