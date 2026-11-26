import { TaskManager } from './taskManager.js';

const taskManager = new TaskManager();

taskManager.load();

console.log(taskManager);

const listaTareas = document.querySelector('#lista-tareas');
const formulario = document.querySelector('#formulario-tareas');

const nombreTarea = document.querySelector('#nombre-tarea');
const estadoTarea = document.querySelector('#estado-tarea');
const descripcionTarea = document.querySelector('#descripcion-tarea');
const categoriaTarea = document.querySelector('#categoria-tarea');
const fechaFinal = document.querySelector('#fecha-final');

taskManager.mostrarTareas(listaTareas);



formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    const nombre = nombreTarea.value;
    const descripcion = descripcionTarea.value;
    const final = fechaFinal.value;
    const estado = estadoTarea.value;
    const categoria = categoriaTarea.value;

    taskManager.addTask(
        nombre,
        descripcion,
        final,
        estado,
        categoria
    );

    taskManager.mostrarTareas(listaTareas);

    formulario.reset();
});


listaTareas.addEventListener('click', (event) => {

    if (event.target.classList.contains('btn-completar')) {

        const tarjeta = event.target.parentElement.parentElement;
        const taskId = Number(tarjeta.dataset.taskId);
        const task = taskManager.getTaskById(taskId);

        if (task) {

            task.status = 'DONE';
            task.completed = true;

    
            taskManager.save();
            taskManager.mostrarTareas(listaTareas);
        }
    }

});





