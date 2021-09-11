import { getUser } from "./local-storage-utils.js";

const loginEl = document.getElementById('login');

loginEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginData = new FormData(loginEl);
  const loginUsername = loginData.get('username-input');
  const loginPass = loginData.get('pass-input');
  const user = getUser();

  if (user.password == loginPass && user.username === loginUsername) 
  {
    window.location = `./tasks/index.html`;
  }
  else {
    alert('incorrect login');
  }
    
  })

//   export function createQuest(quest) {
//     const link = document.createElement('a');
//     link.classList.add('userLogin');
//     link.href = `../task/?id=${user.id}`;

//     link.textContent = quest.title;
//     return link;
// }