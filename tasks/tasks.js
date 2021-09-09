import { getUser, getTasks, addTask } from "../local-storage-utils.js";

const header = document.getElementById("header");
const taskList = document.getElementById("task-list");
const user = getUser();
const username = user.username;
const tasks = getTasks();
const taskItem = document.getElementById("new-task-item");


const newTaskEl = document.getElementById("newTask");
newTaskEl.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    if (taskItem.value.length < 1) return;
    addTask(taskItem.value);
    taskList.innerHTML += "<li>" + taskItem.value + "</li>";
    taskItem.value = "";
  },
);

let allTasks = [];

for (let i = 0; i < tasks.length; i++) {
  allTasks.push([tasks[i].task]);
}
  for (let i = 0; i < allTasks.length; i++) {
  taskList.innerHTML += "<li>" + allTasks[i] + "</li>";
  }

header.textContent = `${username}'s To Do List!`;

// console.log(allTasks);