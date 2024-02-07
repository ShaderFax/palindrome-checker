const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
str = textInput.value;
const regex = [A-Za-z0-9]/g;
const lowerCase = str.toLowerCase().replace(regex, '');
const reverseString = lowerCase.split('').reverse().join('');

function alertMsg() {
    window.alert("Please input a value");
}

function checkPalindrome(str) {
alertMsg();
    
    
}

checkBtn.addEventListener("click", checkPalindrome());