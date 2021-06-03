
const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses_1,chooses_2,chooses_3,chooses_4} = require('./view')
const {update_table,añadir_ciudad,delete_ciudad} = require('./update')
const {app} = require('./app')
var inquirer = require('inquirer');

let t=[[""],"0","0","0"]
console.log(app(t));
