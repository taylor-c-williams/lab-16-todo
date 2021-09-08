import { getUser, getTasks } from "../local-storage-utils.js";

export function renderTaskList(task){
    const user = getUser();
    const tasks = getTasks();
    
    const listUl = document.createElement('ul');
    const listLi = document.createElement('li');
    
    listUl.classList.add('list-ul');
    listLi.classList.add('list-li');

    listUl.textContent = tasks;
    
    listUl.append(listLi);
    }