export const USER = 'USER';

export function getUser(){
    const stringyUser = localStorage.getItem(USER);
    return JSON.parse(stringyUser);
}

export function setUser(user){
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getTasks(){
    const { tasks } = getUser();
    return tasks;
}

export function setTasks(tasks){
    const user = getUser();
    user.tasks = tasks;
    setUser(user);
}

export function addTask(message){
    const tasks = getTasks();
    const newTask = {
        id: Math.ceil(Math.random()* 10000),
        task: message,
        completed: false,
    };
    tasks.push(newTask);
    setTasks(tasks);
}

export function completeTask(id){
    const tasks = getTasks();
    const taskMatch = tasks.find(task => task.id === id);
    taskMatch.completed = true;
    setTasks(tasks);
}

export function createUser(formData) {
    const newUser = { username:formData.get('new-username-input'), 
        password:formData.get('new-pass-input'), 
        tasks: [] }
    setUser(newUser);
 }

