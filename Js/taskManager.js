export class TaskManager {

    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


    addTask(name, description, dueDate, status, category) {
        this.currentId++;

        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            dueDate: dueDate,
            status: status,
            category: category,
            completed: false
        });

        this.save();
    }


    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


    load() {
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);

            this.currentId = this.tasks.length > 0
                ? Math.max(...this.tasks.map(task => task.id))
                : 0;
        }
    }


    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);

        if (task) {
            task.completed = !task.completed;
            this.save();
        }
    }


    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);

        this.save();
    }

    mostrarTareas(contenedor) {
        contenedor.innerHTML = '';

        this.tasks.forEach((task) => {

            const columna = document.createElement('div');
            columna.className = 'col-auto';

            columna.innerHTML = `
                <div class="card mb-3 tarjeta-tarea"
                     data-task-id="${task.id}">

                    <div class="card-body1 p-2">

                        <div class="d-flex justify-content-between">
                            <span class="span p-1 my-2 categoria"></span>

                            <span class="span p-1 my-2 estado"></span>
                        </div>

                        <h5 class="card-title"></h5>

                        <p class="card-text"></p>

                        <button type="button"
                            class="btn btn-light btn-sm mb-3 btn-completar">
                            Completar
                        </button>

                        <button type="button"
                            class="btn btn-light btn-sm mb-3">
                            Progreso
                        </button>

                        <button type="button"
                            class="btn btn-light btn-sm mb-3 btn-eliminar">
                            Borrar
                        </button>

                    </div>
                </div>
            `;

            columna.querySelector('.categoria').textContent =
                task.category || 'Sin categoría';

            columna.querySelector('.estado').textContent =
                task.status;

            columna.querySelector('.card-title').textContent =
                task.name;

            columna.querySelector('.card-text').textContent =
                task.description;

            const botonCompletar =
                columna.querySelector('.btn-completar');

            const botonEliminar =
                columna.querySelector('.btn-eliminar');

            const tarjeta =
                columna.querySelector('.tarjeta-tarea');

            if (task.completed) {
                tarjeta.classList.add('completada');
                botonCompletar.textContent = 'Marcar como pendiente';
            }

            botonCompletar.addEventListener('click', () => {
                this.toggleTaskCompletion(task.id);
                this.mostrarTareas(contenedor);
            });

            botonEliminar.addEventListener('click', () => {
                this.deleteTask(task.id);
                this.mostrarTareas(contenedor);
            });

            
            contenedor.appendChild(columna);
        });
    }
}
