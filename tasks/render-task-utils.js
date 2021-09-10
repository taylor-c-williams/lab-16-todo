
function renderTask(arrayItem) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
  
    li.append(btn);
    btn.classList.add('tasks');
    btn.setAttribute('id', arrayItem.id);
    btn.textContent = arrayItem.tasks;
  
    btn.addEventListener('click', () => {
        completeToDos(arrayItem.id);
        btn.style.textDecoration = 'line-through';
    });
    if (arrayItem.completed) {
        btn.style.textDecoration = 'line-through';
    }  
  
    return li;
}
function callRender() {
  const allTasks = getTasks();
    for (let tasks of allTasks) {
        const liItem = renderTodo(tasks);
        tasks.append(liItem);
    }
}

callRender()