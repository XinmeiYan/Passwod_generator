const pwE1 = document.getElementById('pw');
const copyE1 = document.getElementById('copy');
const lenE1 = document.getElementById('len');
const upperE1 = document.getElementById('upper');
const lowerE1 = document.getElementById('lower');
const numberE1 = document.getElementById('number');
const symbolE1 = document.getElementById('symbol');
const generateE1 = document.getElementById('generate');


/*--range of each--*/
const upperletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerletters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '~!@#$%^&*()_+-=?';


/*--randomly select letter from the range listed above--*/
function getUppercase(){
    return upperletters[Math.floor(Math.random()*upperletters.length)]
}

function getLowercase(){
    return lowerletters[Math.floor(Math.random()*lowerletters.length)]
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}


function generatePassword(){

    /*--length of the password--*/
    const len = lenE1.value;

    let password = '';

    if (upperE1.checked){
        password += getUppercase();
    }

    if (lowerE1.checked){
        password += getLowercase();
    }

    if (numberE1.checked){
        password += getNumber();
    }

    if (symbolE1.checked){
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++){
        const x = generateX();
        password += x;
    }
    pwE1.innerText = password;
}

function generateX(){
    const xs = [];
    
    /*--push() method adds new items to the end of an array, 
    and changes the length of the array and returns the new length--*/
    if (upperE1.checked){
        xs.push(getUppercase());
    }

    if (lowerE1.checked){
        xs.push(getLowercase());
    }

    if (numberE1.checked){
        xs.push(getNumber());
    }

    if (symbolE1.checked){
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateE1.addEventListener('click', generatePassword)

copyE1.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = pwE1.innerText;

    if(!password){return;}

    /*--put the password inside the textarea, select, copy and then remove--*/
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    /*--show that the password is copied--*/
    alert('Password copied to clipboard.');
});