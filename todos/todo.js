"use strict";

import Project from "./modules/project";
import { action } from "./modules/domAction.js";

// displayProjBar();
action();

const savedProject = localStorage.getItem("allTodo")
  ? Object.assign(new Project(), JSON.parse(localStorage.getItem("projTodo")))
  : new Project("All");

const projList = localStorage.getItem("projTodo")
  ? JSON.parse(localStorage.getItem("projTodo")).map((project) =>
      Object.assign(new Project(), project)
    )
  : [];

let currentProject = savedProject;

function addNewTask(e) {
  e.preventDefault();
  const title = document.getElementById("title");
  const des = document.getElementById("des");
  const dateTask = document.getElementById("dateTask");
}
