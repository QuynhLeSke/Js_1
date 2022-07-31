"use strict";

export const displayTaskBar = (task) => {
  const taskCtn = document.createElement("div");
  const colorBoder =
    task.priority === 0 ? "prilow" : task.priority === 1 ? "primed" : "prihigh";
  const priBtn = document.getElementById("priBtn");
  const colorBtn =
    task.priority === 0 ? "low" : task.priority === 1 ? "med" : "high";
  taskCtn.classList.add("task-ctn");
  taskCtn.classList.add("show");
  taskCtn.classList.add(colorBoder);
  priBtn.classList.add(colorBtn);

  taskCtn.innerHTML = `<input type="checkbox">
                    <h4 id="titleTask">${task.title}</h4>
                    <p id="desTask">${task.description}</p>
                    <input type="date" value="${task.dueDate}">
                    <button id="priBtn">${task.priority}</button>
                    <button>Delete</button>`;
  return taskCtn;
};
