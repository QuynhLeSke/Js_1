"use strict";

export const displayProjBar = () => {
  const projName = document.getElementById("proj-name");
  const projCtn = document.getElementById("proj-ctn");

  projName.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && e.target.value) {
      e.preventDefault();
      const newProj = document.createElement("button");
      newProj.textContent = e.target.value;
      projCtn.appendChild(newProj);
      e.target.value = "";
    }
  });
};
