
const bindRow = (rootE, data) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.id = data.id;

    taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${data.completed ? 'checked' : ''}>
        <span class="task-text ${data.completed ? 'completed' : ''}">${data.title}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    addEventListeners(taskItem);
    rootE.appendChild(taskItem);
};

const bindRows = (rootE, rows) => {
    rootE.innerHTML = '';
    rows.forEach(row => bindRow(rootE, row));
};

const addEventListeners = (taskItem) => {
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
};

const initializeTodoApp = () => {
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    const loadTasks = () => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            bindRows(taskList, tasks);
        }
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('.task-item').forEach(taskItem => {
            tasks.push({
                id: taskItem.dataset.id,
                title: taskItem.querySelector('.task-text').textContent,
                completed: taskItem.querySelector('.task-checkbox').checked
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please enter task content!');
            return;
        }

        bindRow(taskList, {
            id: Date.now(),
            title: taskText,
            completed: false
        });

        taskInput.value = '';
        saveTasks();
    };

    loadTasks();
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
};

document.addEventListener('DOMContentLoaded', initializeTodoApp);

export { bindRows, bindRow, addEventListeners };