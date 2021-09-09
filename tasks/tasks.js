import { getUser, getTasks, addTask } from "../local-storage-utils.js";

const header = document.getElementById("header");
const taskList = document.getElementById("task-list");
const user = getUser();
const username = user.username;
const tasks = getTasks();
const taskItem = document.getElementById("new-task-item");


tasks.forEach((task) => console.log(task.task));


let allTasks = [];
for (let i = 0; i < tasks.length; i++) {
  allTasks.push([tasks[i].task]);
}

const newTaskEl = document.getElementById("newTask");
newTaskEl.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const newTaskData = new FormData(newTaskEl);
    const newTask = newTaskData.get("new-task");
    if (taskItem.value.length < 1) return;
    addTask(taskItem.value);
    taskList.innerHTML += "<li>" + taskItem.value + "</li>";
    taskItem.value = "";
  },
true
);

let newLi = document.createElement('li');

if(!allTasks){
  newLi.style.visibility = none; 
}else{
  for (let i = 0; i < allTasks.length; i++) {
  newLi.append(allTasks[i]);
  }
}



header.textContent = `${username}'s To Do List!`;
taskList.textContent = newLi.textContent ; 

console.log(allTasks);