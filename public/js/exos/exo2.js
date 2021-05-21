// //exo2
let reponse2 = document.querySelector('#response2');
let chiffre2A = document.querySelectorAll('input')[2];
let chiffre2B = document.querySelectorAll('input')[3];
let resultat = document.getElementsByClassName('btn')[2];


let operator  = document.querySelector('select');
let opt;


resultat.addEventListener('click' , () => {
    opt = operator.options[operator.selectedIndex];
    //LES OPTIONS FONT DES INDEX, PARMIS LES OPTIONS[INDEX DE L'ELEMENT CHOISIT]
    console.log(opt);
        switch (opt.value) {
        case '+' :
            reponse2.innerHTML = (+chiffre2A.value) + (+chiffre2B.value)
        break;
        case '-' :
            reponse2.innerHTML = (chiffre2A.value) - (chiffre2B.value)
        break;
        case '*' :
            reponse2.innerHTML = (chiffre2A.value) * (chiffre2B.value)
        break;
        case '/' :
            reponse2.innerHTML = (chiffre2A.value) / (chiffre2B.value)
        break;
        default:
            break;
    }
});


//correction

let spanResponse2 = document.getElementById('response2');
let input3 = document.querySelectorAll('input')[2];
let input4 = document.querySelectorAll('input')[3];
let select = document.querySelector('select');
let equalBtn2 = document.getElementsByTagName('button')[1]

let operator1;

console.log(operator1);

let addition2 = () => {
    operator1 = select.options[select.selectedIndex];
    console.log(operator1.value);
    switch (operator1.value) {
        case '+':
            spanResponse2.innerHTML = +input3.value + +input4.value;
        break;
        case '-':
            spanResponse2.innerHTML = input3.value - input4.value;   
        break;
        case '*':
            spanResponse2.innerHTML = input3.value * input4.value;            
        break;
        case '/':
            spanResponse2.innerHTML = input3.value / input4.value;            
        break;
        default:
        break;
    }
}

equalBtn2.addEventListener('click', addition2)