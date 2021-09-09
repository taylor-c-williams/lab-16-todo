import { getUser, getTasks, addTask } from '../local-storage-utils.js';


const header = document.getElementById('header');
const taskList = document.getElementById('task-list');
const user = getUser();
const username = user.username;
const tasks = getTasks();

tasks.forEach(task => console.log(task.task));
const newArray = tasks.filter(tasks => tasks.task = true);
console.log(newArray);


header.textContent = `${username}'s To Do List!`;
taskList.textContent = tasks.task;

const newTaskEl = document.getElementById('newTask');
newTaskEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTaskData = new FormData(newTaskEl);
  const newTask = newTaskData.get('new-task');
  addTask(newTask);
  })


