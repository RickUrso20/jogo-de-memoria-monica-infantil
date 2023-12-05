const input = document.querySelector('.login_input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validityState = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    } 
        
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validityState);
form.addEventListener('submit', handleSubmit);