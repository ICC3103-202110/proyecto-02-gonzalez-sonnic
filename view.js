var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')
const model = require('./model');
const { printTable } = require('console-table-printer');

function getTitle(){
  return chalk.yellow(
    figlet.textSync('Weather aap',
      {
        horizontalLayout: 'full',
        font: 'Banner'
      }
    )
  )
}

function getTableTemperature(model){
    const{nombre,temp,max,min} = model
    let temperatura = temp
    let nombres = nombre
    let maximo = max
    let minimo = min
    let names = []
    return [
      {
        nombre: chalk.green(nombres),temp: chalk.green(temperatura), max: chalk.yellow(maximo), min: chalk.yellow(minimo)
      }
    ]
}
function ValueQuestion(model){
  //const {LeftValue,RightValue,LeftUnit,RightUnit} = model
  const message1 = 'location'
  const message3 = 'select action'
  const option = ['Add city', 'Update city', 'Delete city']
  return inquirer.prompt([
    {
      type: 'list',
      name: 'Citys',
      message: message3,
      default: 'use arrows keys',
      choices: option
      
    },
    {
      type: 'input',
      name: 'option',
      message: message1,
      default: "?",
    }
  ])
}
function view(model){
  return {
    title: getTitle(),
    table: getTableTemperature(model)
  }
}
module.exports = {
  view,
  ValueQuestion,
}