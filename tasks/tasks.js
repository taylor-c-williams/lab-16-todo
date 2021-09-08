import { getUser, getTasks } from "../local-storage-utils.js";
import { renderTaskList } from "./render-task-utils.js";

const header = document.getElementById('header');
const user = getUser();
const username = user.username;



header.textContent = `${username}'s To Do List!`

renderTaskList()

console.log(getTasks())



// for (let task of tasks){
//     const li = addTask(message);
//     ul.append(li);
// }

