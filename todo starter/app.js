let tasks = [];

function ddTask() {
  const task = document.querySelector(".js-task-input").value;

  tasks.push({
    name: task,
    completed: false,
  });
}
