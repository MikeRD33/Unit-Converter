
const lengthEl = document.getElementById('length-box')
const volumeEl = document.getElementById('volume-box')
const massEl =  document.getElementById('mass-box')
const inputEl = document.getElementById('input-number')
const convertBtnEl = document.getElementById('convert-btn')
let userInput = "";

convertBtnEl.addEventListener('click', function(){
    userInput = inputEl.value;

    let metersToFeet = (userInput * 3.281).toFixed(3);
    let feetToMeters = (userInput * 0.3048).toFixed(3);
    let litersToGallons = (userInput * 0.264).toFixed(3);
    let gallonsToLiters = (userInput * 3.78541).toFixed(3);
    let kilosToPounds = (userInput * 2.204).toFixed(3);
    let poundsToKilos = (userInput * 0.453592).toFixed(3);

    lengthEl.innerHTML = `${userInput} meters = ${metersToFeet} feet | ${userInput} feet = ${feetToMeters} meters`
    volumeEl.innerHTML = `${userInput} liters = ${litersToGallons} gallons | ${userInput} gallons = ${gallonsToLiters} liters`
    massEl.innerHTML =   `${userInput} kilos = ${kilosToPounds} pounds | ${userInput} pounds = ${poundsToKilos} kilos`
  })










