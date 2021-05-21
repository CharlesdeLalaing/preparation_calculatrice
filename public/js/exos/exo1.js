//exo1
let reponse1 = document.querySelector('#response1');
let chiffre1A = document.querySelectorAll('input')[0];
let chiffre1B = document.querySelectorAll('input')[1];
let addition = document.getElementsByClassName('btn')[0];

addition.addEventListener('click' , () => {
    reponse1.innerHTML = +chiffre1A.value + +chiffre1B.value;
})



//exo1 correction

let equalBtn = document.getElementsByClassName('btn')[0];
let spanResponse = document.querySelectorAll('span')[1];
let x =document.querySelectorAll('input')[0];
let y =document.querySelectorAll('input')[1];

function addition1() {
    spanResponse.innerHTML = (Number(x.value) + Number(y.value)).toFixed(2)
};

equalBtn.addEventListener('click', addition1)