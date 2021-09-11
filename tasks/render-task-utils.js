import { completeTask, unCompleteTask, getTasks } from '../local-storage-utils.js';

const taskList = document.getElementById('task-list');

export function renderTask(listOfTasks) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    li.append(span);
    span.setAttribute('id', listOfTasks.id);
    span.textContent = listOfTasks.task;
    
    li.append(checkbox);
    checkbox.setAttribute('id', listOfTasks.id);
    checkbox.setAttribute('type', 'checkbox');
    
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

export function render(){
    const tasks = getTasks();
    for (let task of tasks){
        const liItem = renderTask(task);
        taskList.append(liItem);}}
