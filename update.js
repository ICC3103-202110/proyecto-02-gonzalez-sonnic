

function Update(Citys,option,names,Model){
    let azar = Math.random()
    if(Citys === 'Add city'){
        newOption = option
    }
    else if(Citys === 'Update city'){

    }
    else if(Citys === 'Delete city'){

    }
    return{
        ...Model,
        nombre: newOption,
        temp: azar,
        max: azar,
        min: azar
    }
}
module.exports = Update