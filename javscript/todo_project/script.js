console.log("running script.js");
let taskList=[];
function addTask() {
    let inputTask = document.getElementById("input_task").value;
    let inputDate = document.getElementById("addDate").value;
    if (inputTask.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    console.log("Adding task-->", inputTask, "with date-->", inputDate);
    taskList.push({task: inputTask, date: inputDate});
    document.getElementById("input_task").value = "";
    document.getElementById("addDate").value = "";

    displayTasks();

    let taskNoElement = document.getElementById("task_no");
    if (taskList.length > 0) {
        taskNoElement.style.color = "white";
        let taskNoText = `You have ${taskList.length} task(s) pending`;
        taskNoElement.textContent = taskNoText;
    }
}
function displayTasks() {
    let taskListContainer = document.getElementById("task_list");
    taskListContainer.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        let taskItem = document.createElement("div");

        let taskText = document.createElement("p");
        taskText.textContent = taskList[i].task;
        taskItem.appendChild(taskText);
        

        let taskDate = document.createElement("p");
        taskDate.textContent = taskList[i].date || "No date set";
        taskItem.appendChild(taskDate);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteTask(i);
        };
        taskItem.appendChild(deleteButton);

        taskListContainer.appendChild(taskItem);
    }

    function deleteTask(index) {
        taskList.splice(index, 1);
        displayTasks();
        let taskNoElement = document.getElementById("task_no");
        if (taskList.length > 0) {
            taskNoElement.style.color = "white";
            let taskNoText = `You have ${taskList.length} task(s) pending`;
            taskNoElement.textContent = taskNoText;
        }
        else {
            taskNoElement.style.color = "rgb(87, 71, 101)";
            taskNoElement.textContent = "No tasks pending";
        }
    }
}