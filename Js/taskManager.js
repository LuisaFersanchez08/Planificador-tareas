export class TaskManager {

    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
            task.completed = !task.completed;
        }
    }

    
}