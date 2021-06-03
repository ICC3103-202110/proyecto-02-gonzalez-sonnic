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


function chooses_1(a){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'opciones',
            message: '',
            choices: ['Add City', 'Update City', 'Delete City'],
      
        },
    ])    
}


function chooses_2(a){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'add_city',
            message: "Name of the city you want to add  :",
            default: "",    
        }
    ])

}


function chooses_3(a){
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'ciudad_eliminar',
            message: 'Pick The City to Delete',
            choices: a[0],   
        },
    ])
}

function chooses_4(a){
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
    chooses_1,
    chooses_2,
    chooses_3,
    chooses_4,
}

