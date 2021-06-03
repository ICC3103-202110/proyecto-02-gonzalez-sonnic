const { printTable } = require('console-table-printer');
const figlet = require('figlet');
const chalk = require('chalk');
const {viewapp,getTitle,chooses_1,chooses_2,chooses_3,chooses_4} = require('./view')
const {update_table, añadir_ciudad,delete_ciudad} = require('./update')
var inquirer = require('inquirer');


async function app(d){
    while (true) {
        const currentView = viewapp(d);
        console.clear()
        console.log(getTitle());
        console.log(viewapp(currentView));
        const {opciones} = await (chooses_1(d));
        if (opciones === 'Add City'){                                                /*decide agregar una ciudad*/
            const {add_city} = await (chooses_2(d))
            añadir_ciudad(d,add_city)
        }
        if (opciones === 'Update City'){                                             /*quiere actualizar la cuidad elegida*/
            const {opciones_cuidades} = await (chooses_4(d))
        }
        if (opciones === 'Delete City'){                                             /*Quiere eliminar una ciudad*/
            const {ciudad_eliminar} = await (chooses_3(d))
            delete_ciudad(d,ciudad_eliminar) 
        }
    }
}    
module.exports = {
    app
}
