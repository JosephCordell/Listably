const loginFormHandler = async (event) => {
    event.preventDefault();

    //collects values from the login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log('0');
    if (email && password) {
        //Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/user');
        } else {
            modal.classList.remove('hide');
        }
    }
};
const modal = document.querySelector('#myModal');
const span = document.querySelector('#modal-close');

document.querySelector('.loginform').addEventListener('submit', loginFormHandler);

span.addEventListener(
    'click',
    () => {
        modal.classList.add('hide');
    },
    false
);

window.addEventListener(
    'click',
    (event) => {
        if (event.target === modal) {
            modal.classList.add('hide');
        }
    },
    false
);
