"use strict";

export const displayProjBar = () => {
  const projName = document.getElementById("proj-name");
  const projCtn = document.getElementById("proj-ctn");

  projName.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && e.target.value) {
      e.preventDefault();
      const newProj = document.createElement("button");
      const delicon = document.createElement("a");
      const delimg = document.createElement("img");

      delicon.setAttribute("href", "#");
      delimg.setAttribute("src", "../vendor/del-icon.png");
      delimg.classList.add("del-icon");

      newProj.textContent = e.target.value;
      newProj.appendChild(delicon);
      delicon.appendChild(delimg);
      projCtn.appendChild(newProj);

      e.target.value = "";
    }
  });
};
export const getProjectTitleFromDOM = () => {
  const projName = document.getElementById("proj-name");
  const titleValue = projName.value;
  return titleValue;
};
