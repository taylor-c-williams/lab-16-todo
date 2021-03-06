import { createUser } from './local-storage-utils.js';

const signupEl = document.getElementById('create-user');

signupEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserData = new FormData(signupEl);
    createUser(newUserData);
    window.location = './index.html';
    alert('Your account has been created!');
});