const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome() {
    alertMsg();
}

function alertMsg() {
    window.alert("Please input a value");
}

checkBtn.addEventListener("click", checkPalindrome());