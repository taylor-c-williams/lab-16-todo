import { completeTask, unCompleteTask, getTasks } from '../local-storage-utils.js';

const taskList = document.getElementById('task-list');

export function renderTask(taskItems) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    li.append(span);
    span.setAttribute('id', taskItems.id);
    span.textContent = taskItems.task;
    
    li.append(checkbox);
    checkbox.setAttribute('id', taskItems.id);
    checkbox.setAttribute('type', 'checkbox');
    
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            completeTask (taskItems.id);
            span.style.textDecoration = 'line-through';
        } else if (!event.currentTarget.checked) {
            unCompleteTask(taskItems.id);
            span.style.textDecoration = 'none';
        } 
    });

    if (taskItems.completed) {
        span.style.textDecoration = 'line-through';
        checkbox.checked = true;

    } else if (!taskItems.completed){
        span.style.textDecoration = 'none';
    }
  
    return li;
}

export function render(){
    const tasks = getTasks();
    for (let task of tasks){
        const liItem = renderTask(task);
        taskList.append(liItem);}}
