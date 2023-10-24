document.addEventListener('DOMContentLoaded', function() {
    const addTask = document.getElementById('add-task') as HTMLButtonElement;
    const taskContainer = document.getElementById('task-container') as HTMLDivElement;
    const inputTask = document.getElementById('input-task') as HTMLInputElement;

    addTask.addEventListener('click', function() {
        const task = document.createElement('div');
        task.classList.add('task');

        const li = document.createElement('li');
        li.innerText = inputTask.value;
        task.appendChild(li);

        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('checkTask');
        task.appendChild(checkButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-can"></i>';
        deleteButton.classList.add('deleteTask');
        task.appendChild(deleteButton);

        if (inputTask.value === '') {
            alert('Please Enter a Task');
        } else {
            taskContainer.appendChild(task);
            inputTask.value = '';
        }

        checkButton.addEventListener('click', function() {
            li.style.textDecoration = 'line-through';
        });

        deleteButton.addEventListener('click', function(e) {
            const target = e.target as HTMLElement;
            if (target) {
                target.parentElement?.remove();
            }
        });
    });
});
