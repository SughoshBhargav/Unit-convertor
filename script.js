// JavaScript source code
const buttonEl = document.getElementById('button-el');
const inputEl = document.getElementById('input-el')

const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const meterToFeet = 3.281
const literToGallon = 3.785
const kiloToPound = 2.205


buttonEl.addEventListener("click", function () {

    let valueToConvert = inputEl.value;
    let metertoFeetConversin = (valueToConvert * meterToFeet).toFixed(3);
    
    let feetToMeterConversin = (valueToConvert / meterToFeet).toFixed(3);

    let litertoGallonConversin = (valueToConvert / literToGallon).toFixed(3);
    let gallontoLiterConversin = (valueToConvert * literToGallon).toFixed(3);

    let kilotoPoundConversin = (valueToConvert * kiloToPound).toFixed(3);
    let poundtoKiloConversin = (valueToConvert / kiloToPound).toFixed(3);

    lengthEl.innerHTML = `${valueToConvert} meters = ${metertoFeetConversin} feet | ${valueToConvert} feets = ${feetToMeterConversin} meters `

    volumeEl.innerHTML = `${valueToConvert} liters = ${litertoGallonConversin} gallons | ${valueToConvert} gallons = ${gallontoLiterConversin} liters `

    massEl.innerHTML = `${valueToConvert} kilos = ${kilotoPoundConversin} pounds | ${valueToConvert} pounds = ${poundtoKiloConversin} kilos `

});