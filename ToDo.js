const myTasksList = document.getElementById("myTasks");
const noTasksMessage = document.getElementById("no-tasks-message");
const instructionMessage = document.getElementById("instruction-message");

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-ZA', options);
document.getElementById("date").innerHTML = formattedDate;

// Call the function initially to set the initial visibility
updateTaskListVisibility();
function updateTaskListVisibility() {
    if (myTasksList.children.length === 0) {
        noTasksMessage.classList.add('show-message');
        instructionMessage.classList.add('show-message');
        document.getElementById("deleteB").disabled = true;
    } else {
        noTasksMessage.innerHTML= "";
        instructionMessage.innerHTML = "";
        document.getElementById("deleteB").disabled = false;

    }
}

function addTask(taskText) {
    if (taskText.trim() !== "") {
        // Add the task to the list
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        myTasksList.appendChild(taskItem);
        // Update the visibility of messages
        updateTaskListVisibility();
        // Clear the input field (if needed)
        const newTaskInput = document.getElementById("new-task-input");
        newTaskInput.value = "";
       // Save the updated task list to local storage
        saveTasksToLocalStorage();
    }else{
        alert("Task cannot be empty.Add a new task below.");
    }
}

const newTaskForm = document.getElementById("new-task-form");
newTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTaskInput = document.getElementById("new-task-input");
    const taskText = newTaskInput.value;

    addTask(taskText);
});

function saveTasksToLocalStorage() {
    const taskItems = document.querySelectorAll("#myTasks li");
    const taskList = Array.from(taskItems).map((taskItem) => taskItem.textContent);

    // Save the task list to local storage
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function setInitialTasks() {
    const savedTasks = localStorage.getItem("taskList");
    if (savedTasks) {
        const taskList = JSON.parse(savedTasks);
        for (let i = 0; i < taskList.length; i++) {
            addTask(taskList[i]);
        }
    }
}
setInitialTasks();

function deleteAllTasks() {
    const taskItems = document.querySelectorAll("#myTasks li");
    for (let i = 0; i < taskItems.length; i++) {
        taskItems[i].remove();
    }
    // Update the visibility of messages
    updateTaskListVisibility();
    // Save the updated task list to local storage
    saveTasksToLocalStorage();
}



