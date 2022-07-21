export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getTitle() !== taskName);
  }
}
