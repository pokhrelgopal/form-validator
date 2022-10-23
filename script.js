const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const data = [username, email, password, password2]

// Functions
// --> Input Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

// --> Input Success Message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Event Listerners for required fields
data.forEach(function (dt) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        if (dt.value === '') {
            showError(dt, ` Required !`)
        }
        else if ((password.value).length < 6) {
            showError(password, `Password must be minimum 6 characters long`)
        }
        else if (password.value != password2.value && password.value != '') {
            showError(password, ` Doesnot match`)
            showError(password2, ` Doesnot match`)
        }
        else {
            showSuccess(dt);
        }
    })
})
