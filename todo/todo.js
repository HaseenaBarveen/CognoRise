function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = taskInput.value + " <span onclick='editTask(this)'>✎</span> <span onclick='deleteTask(this)'>❌</span>";
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(spanElement) {
    const newTask = prompt("Edit task:", spanElement.parentNode.firstChild.nodeValue);
    if (newTask !== null) {
        spanElement.parentNode.firstChild.nodeValue = newTask;
    }
}

function deleteTask(spanElement) {
    const confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
        spanElement.parentNode.remove();
    }
}
