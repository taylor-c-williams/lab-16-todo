import { getUser, getTasks, addTask, completeTask, unCompleteTask } from '../local-storage-utils.js';

const header = document.getElementById('header');
const taskList = document.getElementById('task-list');
const user = getUser();
const tasks = getTasks();
const username = user.username;
const taskItem = document.getElementById('new-task-item');
const newTaskEl = document.getElementById('newTask');

newTaskEl.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        if (taskItem.value.length < 1) return;
        addTask(taskItem.value);
        taskList.innerHTML += '<li>' + taskItem.value + '</li>' + '<input type="checkbox" id="checkbox"></input>';
        taskItem.value = '';
    },
    true
);


header.textContent = `${username}'s To Do List!`;

function renderTask(listOfTasks) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    li.append(span);
    span.setAttribute('id', listOfTasks.id);
    span.textContent = listOfTasks.task;
    
    li.append(checkbox);
    checkbox.setAttribute('id', listOfTasks.id);
    checkbox.setAttribute('type', 'checkbox');
    
    // checkbox.addEventListener('click', () => {
    //     completeTask (listOfTasks.id);
    //     span.style.textDecoration = 'line-through';
    // });

    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            completeTask (listOfTasks.id);
            span.style.textDecoration = 'line-through';
        } else if (!event.currentTarget.checked) {
            unCompleteTask(listOfTasks.id);
            span.style.textDecoration = 'none';
        }
    });

    if (listOfTasks.completed) {
        span.style.textDecoration = 'line-through';
        checkbox.checked = true;

    } else if (!listOfTasks.completed){
        span.style.textDecoration = 'none';
    }
  
    return li;
}

for (let task of tasks){
    const liItem = renderTask(task);
    taskList.append(liItem);}

