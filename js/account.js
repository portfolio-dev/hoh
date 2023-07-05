var loginImg = document.querySelectorAll('.login-img');
var loginForm = document.querySelectorAll('.login-form');
var regisImg = document.querySelectorAll('.regis-img');
var regisForm = document.querySelectorAll('.regis-form');
var resetForm = document.querySelectorAll('.reset-form');
  
function regisAccount() {
    loginImg.forEach(function(element) {
        element.style.display = 'none';
    });
    loginForm.forEach(function(element) {
        element.style.display = 'none';
    });
    regisImg.forEach(function(element) {
        element.style.display = 'block';
    });
    regisForm.forEach(function(element) {
        element.style.display = 'block';
    });
}
    
    function loginAccount() {
    loginImg.forEach(function(element) {
        element.style.display = 'block';
    });
    loginForm.forEach(function(element) {
        element.style.display = 'block';
    });
    regisImg.forEach(function(element) {
        element.style.display = 'none';
    });
    regisForm.forEach(function(element) {
        element.style.display = 'none';
    });
}

function resetAccount() {
    loginImg.forEach(function(element) {
        element.style.display = 'block';
    });
    resetForm.forEach(function(element) {
        element.style.display = 'block';
    });
    loginForm.forEach(function(element) {
        element.style.display = 'none';
    });
    regisImg.forEach(function(element) {
        element.style.display = 'none';
    });
    regisForm.forEach(function(element) {
        element.style.display = 'none';
    });
}