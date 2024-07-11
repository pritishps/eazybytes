document.addEventListener('DOMContentLoaded', () => {
    const tasksTableBody = document.querySelector('#tasksTable tbody');
    const addTaskBtn = document.getElementById('addTaskBtn');

    const tasks = [
        { taskName: 'Task 1', dueDate: '2024-07-10', status: 'In Progress' },
        { taskName: 'Task 2', dueDate: '2024-07-15', status: 'Completed' }
    ];

    function loadTasks() {
        tasksTableBody.innerHTML = '';
        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.taskName}</td>
                <td>${task.dueDate}</td>
                <td>${task.status}</td>
                <td class="actions">
                    <button onclick="editTask('${task.taskName}')">Edit</button>
                    <button onclick="deleteTask('${task.taskName}')">Delete</button>
                </td>
            `;
            tasksTableBody.appendChild(row);
        });
    }

    function editTask(taskName) {
        alert(`Edit task: ${taskName}`);
    }

    function deleteTask(taskName) {
        alert(`Delete task: ${taskName}`);
    }

    addTaskBtn.addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        const dueDate = prompt('Enter due date:');
        const status = prompt('Enter status:');
        if (taskName && dueDate && status) {
            tasks.push({ taskName, dueDate, status });
            loadTasks();
        }
    });

    loadTasks();
});
