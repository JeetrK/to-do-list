// Init an empty array element called tasks
let tasks = [];

// Add an event listener to the "add task button" to call the function
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Add an event listener to the input field to handle the "Enter" key
document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();  // Call the same function when "Enter" is pressed
  }
});

// Function to add a task
function addTask() {
  // Get the value of the input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  // Check if taskInput has value
  if (taskInput) {
    tasks.push({ text: taskInput, completed: false }); // Store task as an object with a completed flag

    // Clear the input box after adding the task
    document.getElementById("taskInput").value = "";

    // Update the displayed task list
    displayTasks();
  }

  console.log(tasks);
}

// Function to display the list of tasks
function displayTasks() {
  let taskList = document.getElementById("taskList");

  taskList.innerHTML = "";  // Clear the existing list

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    // Add "completed" class if the task is marked as done
    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class='btn btn-dark btn-sm' onclick='toggleTask(${index})'> √ </button>
    `;

    taskList.appendChild(li);
  });

  // Update the task counter display
  updateTaskCounter();
}

// Function to toggle the task completion (strike-through effect)
function toggleTask(index) {
  // Toggle the "completed" status of the task
  tasks[index].completed = !tasks[index].completed;

  // Re-display tasks after modification
  displayTasks();
}

// Function to remove a task (currently not used)
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Clear all tasks
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  tasks = [];
  displayTasks();
});

// Function to update the task counter
function updateTaskCounter() {
  let taskCount = tasks.length;
  document.getElementById("taskCounter").innerText = `Tasks remaining: ${taskCount}`;
}
