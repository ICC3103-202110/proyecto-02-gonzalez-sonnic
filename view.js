const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const axios = require('axios')
var inquirer = require('inquirer');
const { Table } = require('console-table-printer');

async function GetTempInApi(nombre,opt){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+nombre+"&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const DATO = []
    const respond =  await axios.get(URL)
    try{
        if(opt === 0){
            DATO[0] = respond.data.main.temp
            return DATO
        }
        if(opt === 1){
            DATO[1] = respond.data.main.temp_min
            return DATO
        }
        if(opt === 2){
            DATO[2] = respond.data.main.temp_max
            return DATO
        }
    }
    catch(error){
        console.error("Error en la api  "+error)
    }
}

function viewapp(d,ver){
    const p = new Table();
    var u = d[0].length
    if(ver === true){
        for (let i = 0; i < u ; i++){
            const temp = GetTempInApi(d[0][i],0)
            const temp_min = GetTempInApi(d[0][i],1)
            const temp_max = GetTempInApi(d[0][i],2)
            p.addRow({ "City": d[0][i], "Temp": chalk.yellow(temp.then(val => (val))), "Max": chalk.red(temp_max.then(val => (val))), "Min": chalk.blue(temp_min.then(val => (val)))});   
        }
        p.printTable();
        return d
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


function chooses(a){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'opciones',
            message: 'select option',
            choices: ['Add City', 'Update City', 'Delete City'],
      
        },
    ])    
}


function ADDCity(a){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'add_city',
            message: "Name of the city you want to add  :",
            default: "",    
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

