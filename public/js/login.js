const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#inputUsername').value.trim();
  const password = document.querySelector('#inputPassword').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.getElementById('signUpUsername').value.trim();
  const userPassword = document.getElementById('signUpPassword').value.trim();
  const firstName = document.getElementById('signUpFirst').value.trim();
  const lastName = document.getElementById('signUpLastName').value.trim();
  const bio = document.getElementById('signUpBio').value.trim();

  if (name && username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({  userName, userPassword, firstName, lastName, bio }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.loginFormHandler')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signupFormHandler')
  .addEventListener('submit', signupFormHandler);
