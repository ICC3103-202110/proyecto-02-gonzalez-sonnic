function CelsiusKelvin(temp){
    return parseFloat(parseFloat(temp) + 273.15)
}
function CelsiusFahrenheit(temp){
    return parseFloat((temp * 9/5) + 32)
}
function CelsiusRankine(temp){
    return parseFloat((temp * 9/5 + 491.67 ))
}
function KelvinFahrenheit(temp){
    return parseFloat((temp - 273.15) * 9/5 + 32)
}
function KelvinCelsius(temp){
    return parseFloat(parseFloat(temp) - 273.15) 
}
function KelvinRankine(temp){
    return parseFloat((temp * 1.8))
}
function FahrenheitKelvin(temp){
    return parseFloat(( temp - 32) * 5/9 + 273.15)
}
function FahrenheitCelsius(temp){
    return parseFloat(( temp - 32) * 5/9)
}
function FahrenheitRankine(temp){
    return parseFloat((parseFloat(temp) + 459.67))
}
function Update(option,temperature,unit,convert,Model){
    if(unit === 'Celsius' && convert === 'Fahrenheit'){
        NewTemp = CelsiusFahrenheit(temperature)
    }
    else if(unit === 'Celsius' && convert === 'Kelvin'){
        NewTemp = CelsiusKelvin(temperature)
    }
    else if(unit === 'Celsius' && convert === ' '){
        convert = 'Rankine'
        NewTemp = CelsiusRankine(temperature)
    }
    else if(unit === 'Kelvin' && convert === 'Celsius'){
        NewTemp = KelvinCelsius(temperature)
    }
    else if(unit === 'Kelvin' && convert === 'Fahrenheit'){
        NewTemp = KelvinFahrenheit(temperature)
    }
    else if(unit === 'Kelvin' && convert === ' '){
        convert = 'Rankine'
        NewTemp = KelvinRankine(temperature)
    }
    else if(unit === 'Fahrenheit' && convert === 'Kelvin'){
        NewTemp = FahrenheitKelvin(temperature)
    }
    else if(unit === 'Fahrenheit' && convert === 'Celsius'){
        NewTemp = FahrenheitCelsius(temperature)
    }
    else if(unit === 'Fahrenheit' && convert === ' '){
        convert = 'Rankine'
        NewTemp = FahrenheitRankine(temperature)
    }
    else if(unit === ' ' && convert === 'Celsius'){
        unit = 'Rankine'
        NewTemp = ((temperature - 491.67) * 5/9)
    }
    else if(unit === ' ' && convert === 'Kelvin'){
        unit = 'Rankine'
        NewTemp = (temperature *  5/9)
    }
    else if(unit === ' ' && convert === 'Fahrenheit'){
        unit = 'Rankine'
        NewTemp = (temperature - 459.67 )
    }
    else if(unit === ' ' && convert === ' '){
        unit = 'Rankine'
        convert = 'Rankine'
        NewTemp = temperature
    }
    else{
        NewTemp = temperature
    }
    
    if(option === 'y'){
        return{
            ...Model,
            LeftValue: temperature,
            LeftUnit: unit,
            RightValue: NewTemp,
            RightUnit: convert
        }
    }
    else{
        return {
            ...Model,
            LeftValue: NewTemp,
            LeftUnit: convert,
            RightValue: temperature,
            RightUnit: unit
        }
    }
}
module.exports = Update