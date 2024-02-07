const getText = document.getElementById('text-input');
const getButton = document.getElementById('check-btn');
const getResult = document.getElementById('result');

function checkPalindrome(str) {
    if(getText.length === 0) {
        window.alert("Please input a value");
    }
}

getButton.addEventListener("click", checkPalindrome());