export const action = () => {
  const projAdd = document.getElementById("proj-add");
  const addTask = document.getElementById("addTask");
  const formTask = document.getElementById("formTask");
  const addNewTask = document.getElementById("addNewTask");
  const cancle = document.getElementById("cancle");
  const projName = document.getElementById("proj-name");
  const projCtn = document.getElementById("proj-ctn");

  const closeForm = () => {
    formTask.classList.remove("show");
    formTask.classList.add("hidden");
  };

  const addForm = () => {
    formTask.classList.remove("hidden");
    formTask.classList.add("show");
  };

  const addProject = (e) => {
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
  };

  projName.addEventListener("keypress", addProject);
  addTask.addEventListener("click", addForm);
  cancle.addEventListener("click", closeForm);
};
