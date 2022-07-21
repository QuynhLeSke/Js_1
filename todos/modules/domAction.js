export const action = () => {
  const projAdd = document.getElementById("proj-add");
  const addTask = document.getElementById("addTask");
  const formTask = document.getElementById("formTask");
  const addNewTask = document.getElementById("addNewTask");
  const cancle = document.getElementById("cancle");

  addTask.addEventListener("click", () => {
    formTask.classList.remove("hidden");
    formTask.classList.add("show");
  });

  cancle.addEventListener("click", () => {
    formTask.classList.remove("show");
    formTask.classList.add("hidden");
  });
};
