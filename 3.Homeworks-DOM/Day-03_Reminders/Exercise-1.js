document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Load to do from localStorage
    loadTasks();

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            addTask();
        }
    });

    // Add new to do
    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Add content to do please!');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';

        addEventListeners(taskItem)

        saveTasks();
    }

    // Function save list to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            const text = taskItem.querySelector('.task-text').textContent;
            const isCompleted = taskItem.querySelector('.task-checkbox').checked;
            tasks.push({ text, isCompleted });
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function get to do list from localStorage
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);

            tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';

                taskItem.innerHTML = `
                    <input type="checkbox" class="task-checkbox" ${task.isCompleted ? 'checked' : ''}>
                    <span class="task-text ${task.isCompleted ? 'completed' : ''}">${task.text}</span>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                `;

                taskList.appendChild(taskItem);

                addEventListeners(taskItem)
            });
        }
    }

    // Add all event listeners
    function addEventListeners(taskItem) {
        const checkbox = taskItem.querySelector('.task-checkbox');
        const taskTextSpan = taskItem.querySelector('.task-text');
        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        // Checkbox event
        checkbox.addEventListener('change', function() {
            taskTextSpan.classList.toggle('completed', this.checked);
            saveTasks();
        });

        // Delete button event
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
            saveTasks();
        });

        // Edit button event
        editBtn.addEventListener('click', function() {
            const currentText = taskTextSpan.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.className = 'edit-input';

            // Replace span with input
            taskTextSpan.replaceWith(input);
            input.focus();

            // Save on Enter or blur
            input.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    finalizeEdit();
                }
            });

            input.addEventListener('blur', finalizeEdit);

            function finalizeEdit() {
                const newText = input.value.trim();
                if (newText) {
                    taskTextSpan.textContent = newText;
                }
                input.replaceWith(taskTextSpan);
                saveTasks();
            }
        });
    }
});