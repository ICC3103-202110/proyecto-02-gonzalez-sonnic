const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const axios = require('axios')
var inquirer = require('inquirer');
const { Table } = require('console-table-printer');

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function chooses(){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'opciones',
            message: 'select option',
            choices: ['Add City', 'Update City', 'Delete City'],
            default: "\n"
      
        },
    ])    
}

async function GetTempInApi(nombre){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+nombre+"&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const DATO = []
    const respond =  await axios.get(URL)
    try{
        DATO[0] = respond.data.main.temp
        DATO[1] = respond.data.main.temp_min
        DATO[2] = respond.data.main.temp_max
        return DATO
    }
    catch(error){
        console.error("Error con la api, revise el nombre de la ciduad      "+respond.data.main.error+ error)
    }
}

function viewapp(d,ver){
    const p = new Table();
    var u = d[0].length
    if(ver === true){
        for (let i = 0; i < u ; i++){
            GetTempInApi(d[0][i]).then(val => {
                p.addRow({ "              City": d[0][i],"Temp": chalk.yellow(val[0]),"Max": chalk.red(val[2]),"Min": chalk.blue(val[1])})
                console.clear()
                console.log(getTitle())
                p.printTable()
                console.log("use las flechas del teclado para elegir una opcion (no apareceran las opciones hasta que use las flechas)")
                console.log("\n\n\n")
                return d
            })
           

            //p.addRow({ "City": d[0][i], "Temp": chalk.yellow(temp.then(val => (val))), "Max": chalk.red(temp_max.then(val => (val))), "Min": chalk.blue(temp_min.then(val => (val)))});   
            /*  p.addRow({"City": d[0][i], "temp": val[0],"temp_min": val[1],"temp_max": val[2]})
                p.printTable()
                return d */
        }
        
    }
    else{
        for (let i = 0; i < u ; i++){
            p.addRow({ "City": "Nombre Ciudad", "Temp": 0, "Max": 0, "Min": 0});   
        }
        p.printTable();
        return d
    }
}

function BigTable(nombre, temp,Max,Min){
    const BTable = [
        {
            "nombre":nombre, "temperatura":temp, "maximo":Max, "minimo":Min
        }
    ]
    return BTable
}






function ADDCity(a){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'add_city',
            message: "Name of the city you want to add  :",
            default: "\n",    
        }
    ])

}


function deleteCity(a){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'ciudad_eliminar',
            message: 'Pick The City to Delete',
            choices: a[0],   
        },
    ])
}

function updateCity(a){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'ciudad_Actualizar',
            message: 'Pick The City to Update',
            choices: a[0],   
        },
    ])
}



module.exports = {
    getTitle,
    viewapp,
    chooses,
    ADDCity,
    deleteCity,
    updateCity,
}

