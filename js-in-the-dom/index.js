const formBtn = document.getElementById('close-form');
const form = document.querySelector('.form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const formContainer = document.querySelector('.form-container');

let emailList = [];

formBtn.addEventListener('click', toggler);

function toggler() {
    form.classList.toggle('hide');
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+';
    } else {
        formBtn.innerText = 'X';
    }
}

function validateForm() {
    if (!nameInput.value && !emailInput.value) {
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        alert(`You must enter a name and an email address to subscribe!`);
    } else if (!nameInput.value) {
        nameInput.style.border = '2px solid red';
        alert(`Please enter a name to subscribe`);
    } else if (!emailInput.value) {
        emailInput.style.border = '2px solid red';
        alert(`Please enter an email address to subscribe`);
    } else {
        emailList.push({
            name: nameInput.value,
            email: emailInput.value,
        });
        displayThankYou();
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});

function displayThankYou() {
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(function () {
        formContainer.remove();
    }, 3000);
}

nameInput.addEventListener('change', function () {
    nameInput.style.border = 'none';
});

emailInput.addEventListener('change', function () {
    emailInput.style.border = 'none';
});

const cart = document.createElement('div');

const main = document.querySelector('main');

let cartItems = 0;

function addToCart() {
    if (cartItems === 0) {
        cartItems = 1;
        cart.setAttribute('class', 'cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
    } else {
        cartItems = cartItems + 1;
        cart.innerText = `Your Cart: ${cartItems}`;
    }
}
