const fName = document.getElementById('fname'),
lName = document.getElementById('lname'),
num = document.getElementById('num'),
pwr = document.getElementById('pwr'),
cPwr = document.getElementById('cpwr'),
submit = document.getElementById('submit');

let firstNameValue = fName.value.trim();
let lastNameValue = fName.value.trim();
let numValue = fName.value.trim();
let pwrValue = fName.value.trim();
let cPwrValue = fName.value.trim();


const fMessage =document.querySelector('.fname'),
lMessage =document.querySelector('.lname'),
numMessage =document.querySelector('.num'),
cpasMessage =document.querySelector('.pwr');

fName.addEventListener('keydown', firstNameFunc)

function firstNameFunc(){
    try {
        if(lastNameValue == ''){
            fName.classList.remove('success');
            fName.classList.add('red');
            throw "iltimos ismingizni kiriting!"
        } else if(!isNaN(lastNameValue)){
            fName.classList.remove('success');
            fName.classList.add('red');
            throw "iltimos ismingizni kiriting!"
        } else{
            success()
        }
    } catch(error) {
        errorFunc()
    }
}

lName.addEventListener('keydown', lastNameFunc);

function lastNameFunc(){
    try {
        if(lName.value == ''){
            lName.classList.remove('success');
            lName.classList.add('red');
            throw "iltimos familiyangizni kiriting!"
        } else{
            success()
        }
    } catch(error) {
        errorFunc()
    }
}

num.addEventListener('keydown', phoneNumberFunc);


function phoneNumberFunc(){
    try {
        if(numValue == ''){
            num.classList.remove('success');
            num.classList.add('red');
            throw "iltimos telfon raqamingizni kiriting!"
        } else if(!isNaN(numValue)){
            num.classList.remove('success');
            num.classList.add('red');
            throw "iltimos telfon raqamingizni kiriting!"
        }
        else{
            success()
        }
    } catch(error) {
        errorFunc()
    }
}

pwr.addEventListener('keydown', passwordFunc);

function passwordFunc(){
    try {
        if(pwrValue.length < 8){
            
            throw "parolda kamida 8ta belgi bo'lishi kerak";
        }else {
            success()
        }
    } catch (error) {
        errorFunc();
    }
}


function errorFunc(){
    numMessage.classList.add('error')
    numMessage.innerText = error
}

function success(){
    num.classList.add('success');
    num.classList.remove('red');
    numMessage.classList.remove('error');
    numMessage.innerText = "";
}

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    firstNameFunc();
    lastNameFunc();
    phoneNumberFunc();
    passwordFunc()
})