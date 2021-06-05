const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
var inquirer = require('inquirer');
const { Table } = require('console-table-printer');

function viewapp(d){
    const p = new Table();
    var u = d[0].length
    for (let i = 0; i < u ; i++){
        p.addRow({ "City": d[0][i], "Temp": Math.random(), "Max": Math.random(), "Min": Math.random()});   
    }
    p.printTable();
    return d
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

