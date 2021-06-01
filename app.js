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
        const {Citys,option,names} = await (ValueQuestion(model))
        const UpdateValues = update(Citys,option,names,model)
        status = {
            ...status,
            model: UpdateValues,
            actualView: view(UpdateValues)
        }
    }
}
module.exports = App