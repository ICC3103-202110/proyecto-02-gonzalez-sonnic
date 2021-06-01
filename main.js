const InitModel = require('./model')
const App = require('./app')
const Update = require('./update')
const {view} = require('./view');

const status = {
    model: InitModel,
    actualView: view(InitModel)
}

App(status,Update,view)