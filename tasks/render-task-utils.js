export function renderTasks(allTasks) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.classList.add('taskLi');
    span.classList.add('taskSpan');


    span.textContent = allTasks.task;

    li.append(
        span,

    );
    return li;
}