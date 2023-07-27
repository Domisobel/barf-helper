'use strict'

const btnCount = document.querySelector('.btn-count');

const calResult = document.querySelector('.cal-result');
const errorCalWeight = document.querySelector('.error-calcium-weight');
const errorMeatWeight = document.querySelector('.error-meat-weight');

const meatWeight = document.querySelector('.meat-weight').value;
const calciumWeight = document.querySelector('.calcium-weight').value;

//btn calc
btnCount.addEventListener('click', function () {
    const dosage = meatWeight * calciumWeight / 1000;
    
    if (meatWeight <= 0 || isNaN(meatWeight)) {
        errorMeatWeight.textContent = 'Nieprawidłowa waga mięsa';
    } 
    if (calciumWeight <=0 || isNaN(calciumWeight)) {
        errorCalWeight.textContent = 'Nieprawidłowa waga suplementu';
    } else {
        calResult.textContent = `Porcja suplementu to ${dosage}g`;
    }
})