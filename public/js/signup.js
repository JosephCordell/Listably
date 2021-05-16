const signupFormHandler = async (event) => {
    event.preventDefault();
     console.log('TESTSLKSLJ');
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username, email, password)
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);