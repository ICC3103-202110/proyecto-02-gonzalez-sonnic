const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const axios = require('axios')
var inquirer = require('inquirer');
const { Table } = require('console-table-printer');

async function GetTempInApi(NameCity){
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="+NameCity+"&appid=4a1eda2045c44d25c46638c9f6b344ea&units=metric"
    const Dato = []
    try{
        var respond = await axios.get(URL)
        Dato.push(respond.data.main.temp)
        Dato.push(respond.data.main.temp_min)
        Dato.push(respond.data.main.temp_max)
        return Dato
    }
    catch (error){
        console.error("Error con la api >:(")
        const Datos = [0,0,0]
        return Datos
    }
}

function viewapp(d,ver){
    const p = new Table();
    var u = d[0].length
    if(ver === true){
        for (let i = 0; i < u ; i++){
            const API = GetTempInApi(d[0][i])
            p.addRow({ "City": d[0][i], "Temp": API[0], "Max": chalk.red(API[1]), "Min": chalk.blue(API[2])});   
        }
        p.printTable();
        return d
    }
    else{
        for (let i = 0; i < u ; i++){
            p.addRow({ "City": d[0][i], "Temp": 0, "Max": 0, "Min": 0});   
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

