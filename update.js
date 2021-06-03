function update_table(temperature){
    return (Number(temperature))
}

function añadir_ciudad(d,add_city){
    if (d[0][0] === ""){
        d[0].splice(0,1)
    }
    d[0].push(add_city)
}


function delete_ciudad(d,ciudad_eliminar){
    var u = d[0].length
    let myArray = d[0]
    for (let i = 0; i < u ; i++){
        if (ciudad_eliminar === myArray[i]){
            d[0].splice(i,1)
        }
    }
}


module.exports = {
    update_table,
    añadir_ciudad,
    delete_ciudad,
}