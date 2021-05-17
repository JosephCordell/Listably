const loginFormHandler = async (event) => {
    event.preventDefault();

    //collects values from the login form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

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
            alert(response.statusText);
        }
    }
};

document.querySelector('.loginform').addEventListener('submit', loginFormHandler);
