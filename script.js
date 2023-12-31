"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const addTask = document.getElementById('add-task');
    const taskContainer = document.getElementById('task-container');
    const inputTask = document.getElementById('input-task');
    addTask.addEventListener('click', function () {
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
        }
        else {
            taskContainer.appendChild(task);
            inputTask.value = '';
        }
        checkButton.addEventListener('click', function () {
            li.style.textDecoration = 'line-through';
        });
        deleteButton.addEventListener('click', function (e) {
            var _a;
            const target = e.target;
            if (target) {
                (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
            }
        });
    });
});
