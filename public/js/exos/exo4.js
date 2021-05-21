//exo4

//correction

let indicator = document.getElementById('exo-4').querySelector('i');
let input7 = document.getElementById('exo-4').getElementsByClassName('form-control')[0];
let input8 = document.getElementById('exo-4').getElementsByClassName('form-control')[1];
let equal3 = document.getElementById('exo-4').querySelectorAll('.btn')[0];
let btnPlus = document.getElementById('operatorsExo4').querySelectorAll('.btn')[0];
let btnMoins = document.getElementById('operatorsExo4').querySelectorAll('.btn')[1];
let btnTimes = document.getElementById('operatorsExo4').querySelectorAll('.btn')[2];
let btnDivide = document.getElementById('operatorsExo4').querySelectorAll('.btn')[3];
let btnArray = [btnPlus, btnMoins, btnTimes, btnDivide];

btnArray.forEach(element => {
    element.addEventListener('click', () => {
        indicator.classList = element.children[0].classList;
    })
});

let numbers = Array.from(document.querySelector('#numbersExo4').children);
let lastInput;

input7.addEventListener('focus', () => {
    lastInput = input7;
});
input8.addEventListener('focus', () => {
    lastInput = input8;
});

numbers.forEach(element => {
    element.addEventListener('click' , (e) => {
        lastInput.value += e.target.innerText;
    })
});

equal3.addEventListener('click' , () => {
    let calcul;
    input7 = document.getElementById('exo-4').getElementsByClassName('form-control')[0].value;
    input8 = document.getElementById('exo-4').getElementsByClassName('form-control')[1].value;
    let operator = document.querySelector('#exo-4').querySelector('i');
    if (operator.classList == "fas fa-plus") {
        calcul = +input7 + +input8
    } else if (operator.classList == "fas fa-minus") {
        calcul = input7 - input8
    } else if (operator.classList == "fas fa-times") {
        calcul = input7 * input8
    } else if (operator.classList == "fas fa-divide") {
        calcul = input7 / input8
    }
    let reponse4 = document.querySelector('#response4');
    reponse4.innerHTML = calcul.toFixed(2);
})