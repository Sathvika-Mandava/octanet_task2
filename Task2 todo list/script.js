function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskLabels = document.getElementById("taskLabels").value;

    if (taskName === "") {
        alert("Task name cannot be empty.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskName}</span>
        <span>${taskDeadline}</span>
        <span>${taskPriority}</span>
        <span>${taskLabels}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskPriority").value = "High";
    document.getElementById("taskLabels").value = "";
}

function deleteTask(element) {
    const listItem = element.parentElement;
    listItem.remove();
}
