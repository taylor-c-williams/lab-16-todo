// window.location = `./todos/index.html?username=${userName}`;
// });

// const data = new URLSearchParams(window.location.search);
// const questId = data.get('id')

import { getUser } from "./local-storage-utils.js";

const loginEl = document.getElementById('login');
const usernameInput = document.getElementById('username-input');
const passInput = document.getElementById('pass-input');

loginEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginData = new FormData(loginEl);
  
  const loginUsername = loginData.get('username-input');
  const loginPass = loginData.get('pass-input');
  const user = getUser();

  if (user.password === loginPass && user.username === loginUsername) 
  {
    // window.location = `./todos/index.html?username=${userName}`;
    alert('right!');
  }
  else {
    alert('wrong!');
  }
    
  })
  
  // const searchParams = new URLSearchParams(window.location.search);
  // const userID = searchParams.get('id')


//   export function completeTodo(id) {
//     // - find the correct todo in your array
//     const todos = getTodos();

//     const matchingTodo = todos.find(todo => todo.id === id);

//     matchingTodo.completed = true;
//     // - set that todo to `completed: true`
//     // save todos

//     setTodos(todos);
// 
