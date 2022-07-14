"use strict";

const displayProjBar = require("./modules/render");

const projAdd = document.getElementById("proj-add");

const addTask = document.getElementById("addTask");
const formTask = document.getElementById("formTask");
const addNewTask = document.getElementById("addNewTask");

displayProjBar();

addTask.addEventListener("click", () => {
  formTask.classList.remove("hidden");
  formTask.classList.add("show");
});

addNewTask.addEventListener("click", () => {
  const title = document.getElementById("title");
  const des = document.getElementById("des");
  const dateTask = document.getElementById("dateTask");
});
