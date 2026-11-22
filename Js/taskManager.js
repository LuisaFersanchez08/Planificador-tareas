export class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, dueDate, status) {
        this.currentId++
        this.tasks.push({id:this.currentId, name:name, description: description,dueDate:dueDate,status: "PORHACER"});
    }

    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
            task.completed = !task.completed;
        }
    }
}
