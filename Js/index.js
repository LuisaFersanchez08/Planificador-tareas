import { TaskManager } from './taskManager.js';

const taskManager = new TaskManager();

taskManager.load();


const listaTareas = document.querySelector('#lista-tareas');
const formulario = document.querySelector('#formulario-tareas');

const nombreTarea = document.querySelector('#nombre-tarea');
const descripcionTarea = document.querySelector('#descripcion-tarea');
const estadoTarea = document.querySelector('#estado-tarea');
const categoriaTarea = document.querySelector('#categoria-tarea');
const fechaInicio = document.querySelector('#fecha-inicio');
const fechaFinal = document.querySelector('#fecha-final');


const errorNombre = document.querySelector('#errorNombre');
const errorDescripcion = document.querySelector('#errorDescripcion');
const errorFecha = document.querySelector('#errorFecha');
const errorFecha1 = document.querySelector('#errorFecha1');


taskManager.mostrarTareas(listaTareas);


function validFormFieldInput(data) {
    return data.trim() !== '';
}


formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const nombre = nombreTarea.value.trim();
    const descripcion = descripcionTarea.value.trim();
    const estado = estadoTarea.value;
    const categoria = categoriaTarea.value;
    const inicio = fechaInicio.value;
    const final = fechaFinal.value;

    let formularioValido = true;


    if (!validFormFieldInput(nombre)) {
        errorNombre.classList.remove('d-none');
        formularioValido = false;
    } else {
        errorNombre.classList.add('d-none');
    }


    if (!validFormFieldInput(descripcion)) {
        errorDescripcion.classList.remove('d-none');
        formularioValido = false;
    } else {
        errorDescripcion.classList.add('d-none');
    }


    if (!validFormFieldInput(inicio)) {
        errorFecha.classList.remove('d-none');
        formularioValido = false;
    } else {
        errorFecha.classList.add('d-none');
    }


    if (!validFormFieldInput(final)) {
        errorFecha1.classList.remove('d-none');
        formularioValido = false;
    } else {
        errorFecha1.classList.add('d-none');
    }


    if (inicio !== '' && final !== '' && final < inicio) {
        errorFecha1.classList.remove('d-none');
        formularioValido = false;
    }

    if (
        estadoTarea.selectedIndex === 0 ||
        categoriaTarea.selectedIndex === 0
    ) {
        alert('Selecciona un estado y una categoría.');
        formularioValido = false;
    }

    if (!formularioValido) {
        return;
    }

    taskManager.addTask(
        nombre,
        descripcion,
        final,
        estado,
        categoria
    );


    taskManager.mostrarTareas(listaTareas);
    formulario.reset();

    console.log(taskManager.tasks);

});



