const axios = require('axios')
async function GetTempInApi(NameCity){
    const URL = "api.openweathermap.org/data/2.5/weather?q="+NameCity+"&appid=36e0137cea2ff88ff93dee221e46ecdd&units=metric"
    const Dato = []
    try {
        const respond = axios.get(URL)
        Dato[0] = respond.data.main.temp
        Dato[1] = respond.data.main.temp_min
        Dato[2] = respond.data.main.temp_max
        return Dato
    }
    catch (error){
        console.error("Error con la api")
    }
}

function update_table(temperature){
    return (Number(temperature))
}

function añadir_ciudad(d,add_city){
    if (d[0][0] === ""){
        d[0].splice(0,1)
    }
    d[0].push(add_city)
}


function delete_ciudad(d,ciudad_eliminar){
    var u = d[0].length
    let myArray = d[0]
    for (let i = 0; i < u ; i++){
        if (ciudad_eliminar === myArray[i]){
            d[0].splice(i,1)
        }
    }
}


module.exports = {
    update_table,
    añadir_ciudad,
    delete_ciudad,
}