// import { getProjectTitleFromDOM } from "./render";

// let project = [];

// function Project(title) {
//   this.title = title;
// }
// const checkExist = (title) => {
//   getProj();
//   for (let singleProj in project) {
//     if (singleProj.title === title) {
//       return false;
//     }
//   }
//   return true;
// };
// const addProj = (titleValue) => {
//   if (!checkExist(titleValue)) {
//     alert("Already exist!!");
//   } else {
//     const newProj = new Project(titleValue);
//     project.push(newProj);
//   }
// };

// const populateStorage = () => {
//   localStorage.setItem("project", JSON.stringify(project));
// };

// const getProj = () => {
//   project = JSON.parse(localStorage.getItem("project")) || [];
// };

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getTitle() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getTitle() === taskName);
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getTitle() !== taskName);
  }
}
