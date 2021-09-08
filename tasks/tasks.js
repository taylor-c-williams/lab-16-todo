import { getUser, getTasks, addTask } from '../local-storage-utils.js';


const header = document.getElementById('header');
const taskList = document.getElementById('task-list');
const user = getUser();
const username = user.username;
const tasks = getTasks();
const tasksOnly = tasks.slice(0);


header.textContent = `${username}'s To Do List!`;
taskList.textContent = tasksOnly;

const newTaskEl = document.getElementById('newTask');
newTaskEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTaskData = new FormData(newTaskEl);
  const newTask = newTaskData.get('new-task');
  addTask(newTask);
  })


