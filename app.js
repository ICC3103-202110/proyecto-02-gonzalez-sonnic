const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses,ADDCity,deleteCity,updateCity} = require('./view')
const {update_table, añadir_ciudad,delete_ciudad} = require('./update')
var inquirer = require('inquirer');


async function app(d){
    let verification = false
    while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        viewapp(currentView,verification);
        const {opciones} = await (chooses());
        if (opciones === 'Add City'){                                                /*decide agregar una ciudad*/
            const {add_city} = await (ADDCity(d))
            añadir_ciudad(d,add_city)
        }
        if (opciones === 'Update City'){                                             /*quiere actualizar la cuidad elegida*/
            const {opciones_cuidades} = await (updateCity(d))
        }
        if (opciones === 'Delete City'){                                             /*Quiere eliminar una ciudad*/
            const {ciudad_eliminar} = await (deleteCity(d))
            delete_ciudad(d,ciudad_eliminar) 
        }
        verification = true
    }
}    
module.exports = {
    app
}
