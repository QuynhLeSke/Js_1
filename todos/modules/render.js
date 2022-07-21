"use strict";

export const displayProjBar = (project) => {
  // const projName = document.getElementById("proj-name");
  // const projCtn = document.getElementById("proj-ctn");

  // projName.addEventListener("keypress", (e) => {
  //   if (e.key == "Enter" && e.target.value) {
  //     e.preventDefault();
  //     const newProj = document.createElement("button");
  //     const delicon = document.createElement("a");
  //     const delimg = document.createElement("img");

  //     delicon.setAttribute("href", "#");
  //     delimg.setAttribute("src", "../vendor/del-icon.png");
  //     delimg.classList.add("del-icon");

  //     newProj.textContent = e.target.value;
  //     newProj.appendChild(delicon);
  //     delicon.appendChild(delimg);
  //     projCtn.appendChild(newProj);

  //     e.target.value = "";
  //   }
  // });
  const newProj = document.createElement("button");
  const delicon = document.createElement("a");
  const delimg = document.createElement("img");

  delicon.setAttribute("href", "#");
  delimg.setAttribute("src", "../vendor/del-icon.png");
  delimg.classList.add("del-icon");

  newProj.textContent = project.name;
  newProj.appendChild(delicon);
  delicon.appendChild(delimg);
  // projCtn.appendChild(newProj);

  return newProj;
};

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
