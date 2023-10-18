const boxes = document.querySelectorAll(".box ul"),
  tasks = document.querySelectorAll(".box ul li"),
  formAdd = document.querySelector("#add-task");

const taskListenerDrag = (t) => {
    t.classList.add("task");
    t.setAttribute("draggable", "true");
    t.addEventListener("dragstart", () => {
      t.classList.add("is-dragging");
    });
    t.addEventListener("dragend", () => {
      t.classList.remove("is-dragging");
    });
  },
  boxListenerDrag = (b) => {
    b.addEventListener("dragover", (e) => {
      e.preventDefault();
      const el = document.querySelector(".is-dragging");

      b.appendChild(el);
    });
  },
  addNewTodo = (e) => {
    e.preventDefault();
    const inputAdd = document.querySelector("#txt-todo"),
      ul = document.querySelector("#todo ul"),
      str = inputAdd.value;

    if (!str) return;
    const newTask = document.createElement("li");
    newTask.innerHTML = str;
    taskListenerDrag(newTask);

    ul.appendChild(newTask);
    inputAdd.value = "";
  },
  ToggleClassDark = (e) => {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
  };

tasks.forEach((t) => {
  taskListenerDrag(t);
});
boxes.forEach((b) => {
  boxListenerDrag(b);
});
formAdd.addEventListener("submit", (e) => addNewTodo(e));
