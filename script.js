//Init an empty array element called tasks
let tasks = [];

// Add am on CLICK event Listener to the "add task button" that calls a fucntion
document.getElementById("addTaskBtn").addEventListener("click", function () {
  //Get the value of the input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if taskInput has value
  if (taskInput) {
    tasks.push(taskInput);

    document.getElementById("taskInput").value = "";

    displayTasks();
  }

  console.log(tasks);
});

//function to display list
function displayTasks() {
  let taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    li.innerHTML = `${tasks} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ `;

    taskList.appendChild(li);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

document.getElementById("clearTasksBtn").addEventListener("click", function () {
  tasks = [];

  displayTasks();
});
