import { getUser, getTasks, addTask } from '../local-storage-utils.js';


const header = document.getElementById('header');
const taskList = document.getElementById('task-list');
const user = getUser();
const username = user.username;
const tasks = getTasks();
console.log(tasks);
const newTasks = tasks.slice(1,4);
console.log(newTasks);


tasks.forEach(task => console.log(task.task));
let allTasks = [];
for (let i = 0, l = tasks.length; i < l; i++) {
allTasks.push([tasks[i].task])};


header.textContent = `${username}'s To Do List!`;
taskList.textContent = allTasks;
// taskList.textContent = `${tasks[0].task}`;

const newTaskEl = document.getElementById('newTask');
newTaskEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTaskData = new FormData(newTaskEl);
  const newTask = newTaskData.get('new-task');
  addTask(newTask);
  })

console.log(tasks);
