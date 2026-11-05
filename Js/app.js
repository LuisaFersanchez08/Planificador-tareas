
function validFormFieldInput(data) {
    if (data === "") {
        return false;
    }
    return true;
}


const nombreTarea = document.querySelector('#nombre-tarea');
const descipcionTarea = document.querySelector('#descripcion-tarea');
const fechaInicio = document.querySelector('#fecha-inicio');
const fechaFinal = document.querySelector('#fecha-final');


const errorNombre = document.querySelector('#errorNombre');
const errorDescripcion = document.querySelector('#errorDescripcion');
const errorFecha = document.querySelector('#errorFecha');
const errorFecha1 = document.querySelector('#errorFecha1');
const boton = document.querySelector('#btn-agregar');
const formulario = document.querySelector('#formulario-tareas')



formulario.addEventListener('submit', function (event){

event.preventDefault();

const nombre = nombreTarea.value.trim();
const descripcion = descipcionTarea.value.trim();


    if (!validFormFieldInput(nombre)) {
        errorNombre.classList.remove('d-none');
    } else {
        errorNombre.classList.add('d-none');
    }


    if (!validFormFieldInput(descripcion)) {
        errorDescripcion.classList.remove('d-none');

    } 
    
    else {
        errorDescripcion.classList.add('d-none');
    }


    if (!validFormFieldInput(fechaInicio.value)) {
        errorFecha.classList.remove('d-none');
    } 
    
    else {
        errorFecha.classList.add('d-none');
    }

    if (!validFormFieldInput(fechaFinal.value)) {
        errorFecha1.classList.remove('d-none');
    } 
    
    else {
        errorFecha1.classList.add('d-none');
    }



}
) 