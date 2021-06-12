const axios = require('axios')
const { printTable } = require('console-table-printer');
const { Table } = require('console-table-printer');
async function GetTempInApi(nombre){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+nombre+"&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const DATO = []
    const respond =  await axios.get(URL)
    DATO[0] = respond.data.main.temp
    DATO[1] = respond.data.main.temp_min
    DATO[2] = respond.data.main.temp_max
    return DATO
}
GetTempInApi("Santiago").then(val => 
    {const p = new Table()
    p.addRow({"City": "santiago", "temp": val[0],"temp_min": val[1],"temp_max": val[2]})
    p.printTable()
})