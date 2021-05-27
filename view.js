var prompt = require('prompt-sync')({sigint:true});  
const figlet = require('figlet');
const chalk = require('chalk');  
const inquirer = require('inquirer')
const model = require('./model');
const { printTable } = require('console-table-printer');

function getTitle(){
  let azar = Math.random()
  let mess = 'Banner'
  if(azar > 0 && azar <= 0.2){
    mess = 'Colossal'
  }
  if(azar > 0.2 && azar <= 0.4){
    mess = 'Epic'
  }
  if(azar > 0.4 && azar <= 0.6){
    mess = 'Banner'
  }
  if(azar > 0.6 && azar <= 0.8){
    mess = 'Big Money-ne'
  }
  if(azar > 0.8 && azar <= 1){
    mess ='Big Money-sw'
  }
  return chalk.yellow(
    figlet.textSync('UNIT - CONVERT',
      {
        horizontalLayout: 'full',
        font: mess
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
        LeftValue: chalk.green(nLeftValue),LeftUnit: chalk.green(LeftUnit), RightValue: chalk.yellow(nRightValue), RightUnit: chalk.yellow(RightUnit)
      }
    ]
}
function ValueQuestion(model){
  const {LeftValue,RightValue,LeftUnit,RightUnit} = model
  const message1 = 'Left temperature is source? '
  const message2 ='Temperature value to convert?'
  const message3 = 'From'
  const message4 = 'To'
  const option = ['Celsius', 'Fahrenheit', 'Kelvin', ' ']
  return inquirer.prompt([
    {
      name: 'option',
      type: 'input',
      message: message1,
      default: "Y/N",
      
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
  EmptyTable,
  view,
  ValueQuestion,
}