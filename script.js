const button1 = document.querySelector(".button-header");
const button2 = document.querySelector(".button-subs");

const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;


button1.addEventListener('click', function(){
    const error = document.querySelector(".error-header")
    const userInput = document.querySelector(".input-header")
    if(!regexExp.test(userInput.value)){
        error.classList.add("alert")
        userInput.style.borderColor = "#EF4877"
    }
    else{
        error.classList.remove('alert')
        userInput.style.borderColor = "#07043B"
    }
})

button2.addEventListener('click', function(){
    const error = document.querySelector(".error-subs")
    const userInput = document.querySelector(".input-subs")
    if(!regexExp.test(userInput.value)){
        error.classList.add("alert")
        userInput.style.borderColor = "#EF4877"
    }
    else{
        error.classList.remove('alert')
        userInput.style.borderColor = "#07043B"
    }
})