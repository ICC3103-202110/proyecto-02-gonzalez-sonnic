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
    const {LeftValue,RightValue,LeftUnit,RightUnit} = model
    let nLeftValue = parseFloat(LeftValue);
    let nRightValue = parseFloat(RightValue)
    return [
      {
        nombre: chalk.green(nLeftValue),temp: chalk.green(LeftUnit), max: chalk.yellow(nRightValue), min: chalk.yellow(RightUnit)
      }
    ]
}
function ValueQuestion(model){
  const {LeftValue,RightValue,LeftUnit,RightUnit} = model
  const message1 = 'Left temperature is source? '
  const message2 ='Temperature value to convert?'
  const message3 = 'select action'
  const message4 = 'To'
  const option = ['Add city', 'Update city', 'Delete city']
  return inquirer.prompt([
    {
      type: 'list',
      name: 'unit',
      message: message3,
      default: 'use arrows keys',
      choices: option
      
    },
    {
      name: 'temperature',
      type: 'input',
      message: message2,
      default: parseFloat(LeftValue),
    },
    {
      type: 'list',
      name: 'unit',
      message: message3,
      default: 'use arrows keys',
      choices: option
    },
    {
      type: 'list',
      name: 'convert',
      message: message4,
      default: 'use arrows keys',
      choices: option
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