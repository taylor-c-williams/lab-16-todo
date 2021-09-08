import { getUser, getTasks } from "../local-storage-utils.js";



// export function renderTaskList(tasks){
    
//     const listUl = document.createElement('ul');
//     const listLi = document.createElement('li');
    
//     listUl.classList.add('list-ul');
//     listLi.classList.add('list-li');

//     listUl.textContent = getTasks();
//     listLi.textContent = getTasks();
    
//     listUl.append(listLi);
    
//     return li }


// export function renderTasks(tasks){
//         const user = getUser();
//         const li = document.createElement('li');
//         const h3 = document.createElement('h3');
//         const addButton = document.createElement('button');
    
//         li.classList.add('task');
//         h3.classList.add('title');
//         addButton.classList.add('button');
    
//         h3.textContent = user.tasks.id;
//         addButton.textContent = `Complete Task`;
    
//         addButton.addEventListener('click', () => {
//             completeTask(user.tasks[0]);
//             alert(`yay`)
//         })
    
    
//         li.append(
//             h3,
//             addButton,
//         );
//         return li;
//         }