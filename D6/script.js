function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  // task title
  let span = document.createElement("span");
  span.innerText = taskText;

  // delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}