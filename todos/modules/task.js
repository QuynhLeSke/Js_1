// export class Task {
//   constructor(title, description, date, priority) {
//     this.title = title;
//     this.description = description;
//     this.date = date;
//     this.priority = priority;
//   }
// }

export default class Task {
  constructor(title, priority, dueDate = "", description = "") {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }
}
