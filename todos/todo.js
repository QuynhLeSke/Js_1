"use strict";
const addTodo = document.getElementById("addTodo");
const projAdd = document.getElementById("proj-add");
const submit = document.getElementById("submit");
const projName = document.getElementById("proj-name");
const projCtn = document.getElementById("proj-ctn");
const addTask = document.getElementById("addTask");
const formTask = document.getElementById("formTask");
const addNewTask = document.getElementById("addNewTask");

addTodo.onclick = function () {
  projAdd.classList.remove("hidden");
};

submit.addEventListener("click", () => {
  const newProj = document.createElement("button");
  const name = projName.value;
  newProj.textContent = name;
  projCtn.appendChild(newProj);

  projAdd.classList.add("hidden");
  projName.value = "";
});

addTask.addEventListener("click", () => {
  formTask.classList.remove("hidden");
  formTask.classList.add("show");
});

addNewTask.addEventListener("click", () => {
  const title = document.getElementById("title");
  const des = document.getElementById("des");
  const dateTask = document.getElementById("dateTask");
});
