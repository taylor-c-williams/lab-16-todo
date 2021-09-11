import { getUser, getTasks, addTask } from '../local-storage-utils.js';
import { render } from './render-task-utils.js';

const taskList = document.getElementById('task-list');
const header = document.getElementById('header');
const taskItem = document.getElementById('new-task-item');
const newTaskEl = document.getElementById('newTask');
const noTasks = document.getElementById('no-tasks');
const user = getUser();
const tasks = getTasks();
const username = user.username;

render();

newTaskEl.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        if (taskItem.value.length < 1) return;
        addTask(taskItem.value);
        taskList.textContent = '';
        render();
        taskItem.value = '';
        taskItem.focus();
    },
    false
);

header.textContent = `${username}'s To Do List!`;

if (tasks = true){
    noTasks.style.visibility = 'hidden';
}
