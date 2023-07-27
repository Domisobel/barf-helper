'use strict'

const btnCount = document.querySelector('.btn-count');
const btnClear = document.querySelector('.btn-clear')

const calResult = document.querySelector('.cal-result');
const errorCalWeight = document.querySelector('.error-calcium-weight');
const errorMeatWeight = document.querySelector('.error-meat-weight');

const meatWeight = document.querySelector('.meat-weight');
    const calciumWeight = document.querySelector('.calcium-weight');
//btn calc
btnCount.addEventListener('click', function () {
    const meatWeight = document.querySelector('.meat-weight').value;
    const calciumWeight = document.querySelector('.calcium-weight').value;
    
    if (meatWeight <= 0 || isNaN(meatWeight)) {
        errorMeatWeight.textContent = 'Nieprawidłowa waga mięsa';
    } 
    if (calciumWeight <=0 || isNaN(calciumWeight)) {
        errorCalWeight.textContent = 'Nieprawidłowa waga suplementu';
    } 
    if ( meatWeight > 0 && calciumWeight > 0) {
        const dosage = meatWeight * calciumWeight / 1000;
        calResult.textContent = `Porcja suplementu to ${dosage}g`;
    } 
})
//clear
btnClear.addEventListener('click', function () {
    meatWeight.value = '';
    calciumWeight.value = '';
    
    errorCalWeight.textContent = '';
    errorMeatWeight.textContent = '';
    calResult.textContent = '';
    
})