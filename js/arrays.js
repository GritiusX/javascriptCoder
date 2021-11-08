const tareasAgendadas = [];
class Agenda {
    constructor(dia, horario, tarea) {
        this.dia = dia;
        this.horario = horario;
        this.tarea = tarea;
    }
}

function setTarea() {
    let diaIngresado = prompt('Agregar dia:').toLowerCase();
    while (!diaIngresado) {
        alert('Dia ingresado invalido, vuelva a ingresar uno valido')
        diaIngresado = prompt('Agregar dia:'.toLowerCase());
    }
    alert('Dia ' + diaIngresado + ' ingresado');
    let horarioIngresado = parseFloat(prompt('Agregar horario:'));
    while (isNaN(horarioIngresado) || horarioIngresado <= 0 || !horarioIngresado) {
        alert('Horario ingresado invalido, vuelva a ingresar un horario valido')
        horarioIngresado = parseFloat(prompt('Agregar horario:'));
    }
    let tareaIngresado = prompt('Agregar tarea:').toLowerCase();
    while (!tareaIngresado) {
        alert('Tarea ingresada invalida, vuelva a ingresar una tarea valida')
        tareaIngresado = prompt('Agregar tarea:').toLowerCase();
    }

    let nuevaTarea = new Agenda(diaIngresado, horarioIngresado, tareaIngresado);
    return nuevaTarea;
}


let cargarTareas = function cargarTareas() {
    const cantidadDeTareas = parseInt(prompt('Cantidad de Tareas'));
    if (cantidadDeTareas <= 0 || isNaN(cantidadDeTareas) || cantidadDeTareas == "" || cantidadDeTareas == null) {
        alert('Por favor, cargar nuevamente');
        return cargarTareas();
    } else {
        for (let i = 0; i < cantidadDeTareas; i++) {
            let agenda = setTarea();
            tareasAgendadas.push(agenda)
        }
    }
};

cargarTareas();
console.log(tareasAgendadas);