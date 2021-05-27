const {printTable} = require('console-table-printer')
const {ValueQuestion} = require('./view')
var prompt = require('prompt-sync')({sigint:true}); 

async function App(status,update,view){
    while(true){
        const {model, actualView} = status
        const {title, table} = actualView

        console.clear()
        console.log(title)
        printTable(table)
        console.log('                                                       para salir ponga ctrl^C')
        const {convert,unit,temperature,option} = await (ValueQuestion(model))
        const UpdateValues = update(option,temperature, unit,convert,model)
        status = {
            ...status,
            model: UpdateValues,
            actualView: view(UpdateValues)
        }
    }
}
module.exports = App