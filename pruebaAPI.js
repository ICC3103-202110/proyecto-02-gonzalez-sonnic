const axios = require('axios')
async function GetTempInApi(nombre){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+nombre+"&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const DATO = []
    const respond =  await axios.get(URL)
    DATO[0] = respond.data.main.temp
    DATO[1] = respond.data.main.temp_min
    DATO[2] = respond.data.main.temp_max
    return DATO
}
GetTempInApi("Buenos Aires").then(val => console.log(val))