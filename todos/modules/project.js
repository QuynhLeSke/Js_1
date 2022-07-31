import { uid } from "uid";
import Task from "./task";

export default class Project {
  tasks = [];
  constructor(name) {
    this.id = uid();
    this.name = name;
  }

  addTask(title, description, dueDate, priority) {
    const taskId = uid();
    const newTask = new Task(taskId, title, description, dueDate, priorityi);
    this.tasks.push(newTask);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }
}
