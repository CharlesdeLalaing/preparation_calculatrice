// //exo3

// let btnPlus = document.querySelectorAll('button')[3];
// let btnMinus = document.querySelectorAll('button')[4];
// let btnTimes = document.querySelectorAll('button')[5];
// let btnDivide = document.querySelectorAll('button')[6];

// let btnSpan = document.querySelectorAll('span')[3];

// btnPlus.addEventListener('click', () => {
//     btnSpan.children[0].setAttribute('class', 'fas fa-plus')
// })
// btnMinus.addEventListener('click', () => {
//     btnSpan.children[0].setAttribute('class', 'fas fa-minus')
// })
// btnTimes.addEventListener('click', () => {
//     btnSpan.children[0].setAttribute('class', 'fas fa-times')
// })
// btnDivide.addEventListener('click', () => {
//     btnSpan.children[0].setAttribute('class', 'fas fa-divide')
// })
// let btnEqual = document.querySelectorAll('button')[2];
// let caseEqual = document.querySelectorAll('span')[4];

// let btnReponse1 = document.querySelectorAll('input')[4];
// let btnReponse2 = document.querySelectorAll('input')[5];

// btnEqual.addEventListener('click', () => {

//     switch (btnSpan.children[0].className) {
//         case 'fas fa-plus':
//             caseEqual.innerText = +btnReponse1.value + +btnReponse2.value
//         break;
//         case 'fas fa-minus':
//             caseEqual.innerText = btnReponse1.value - btnReponse2.value
//         break;
//         case 'fas fa-times':
//             caseEqual.innerText = btnReponse1.value * btnReponse2.value
//         break;
//         case 'fas fa-divide':
//             caseEqual.innerText = btnReponse1.value / btnReponse2.value
//         break;
//         default:
//             break;
//     }
// })


//correction

let input5 = document.querySelectorAll('input')[4];
let input6 = document.querySelectorAll('input')[5];
let btnEqual = document.querySelectorAll('button')[2];
let btnPlusCorr = document.querySelectorAll('button')[3];
let btnMoinsCorr = document.querySelectorAll('button')[4];
let btnTimesCorr = document.querySelectorAll('button')[5];
let btnDivideCorr = document.querySelectorAll('button')[6];
let spanOperation = document.querySelectorAll('span')[3];
let spanResponse3 = document.querySelectorAll('span')[4]

function operation2() {
    if (spanOperation.innerHTML == btnPlusCorr.innerHTML) {
        spanResponse3.innerHTML = +input5.value +  +input6.value
    } else if (spanOperation.innerHTML == btnMoinsCorr.innerHTML) {
        spanResponse3.innerHTML = input5.value -  input6.value        
    } else if (spanOperation.innerHTML == btnTimesCorr.innerHTML) {
        spanResponse3.innerHTML = input5.value *  input6.value   
    } else if (spanOperation.innerHTML == btnDivideCorr.innerHTML) {
        spanResponse3.innerHTML = input5.value /  input6.value    
    }{
        
    }
}

btnPlusCorr.addEventListener('click', () => {
    spanOperation.innerHTML = btnPlusCorr.innerHTML
})
btnMoinsCorr.addEventListener('click', () => {
    spanOperation.innerHTML = btnMoinsCorr.innerHTML
})
btnTimesCorr.addEventListener('click', () => {
    spanOperation.innerHTML = btnTimesCorr.innerHTML
})
btnDivideCorr.addEventListener('click', () => {
    spanOperation.innerHTML = btnDivideCorr.innerHTML
})

btnEqual.addEventListener('click', operation2)