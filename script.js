let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let taskInput = document.getElementById("taskInput").value;

  if (taskInput) {
    tasks.push({ text: taskInput, completed: false });
    document.getElementById("taskInput").value = "";
    displayTasks();
  }

  console.log(tasks);
}

function displayTasks() {
  let taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class='btn btn-dark btn-sm' onclick='toggleTask(${index})'> √ </button>
    `;

    taskList.appendChild(li);
  });

  updateTaskCounter();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

document.getElementById("clearTaskBtn").addEventListener("click", function () {
  tasks = [];
  displayTasks();
  let audio = document.getElementById("clearAudio");
  audio.play();
});

function updateTaskCounter() {
  let taskCount = tasks.length;
  document.getElementById("taskCounter").innerText = `Tasks remaining: ${taskCount}`;
}

