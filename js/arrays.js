const tareasAgendadas = [];

class Agenda {
    constructor(dia /* , horario, tarea */ ) {
        this.dia = dia;
        /*         this.horario = horario;
                this.tarea = tarea; */
    }
    agregarTarea() {
        this.dia = prompt('Agregar dia:');
        if (this.dia == 'Lunes' || this.dia == 'lunes' || this.dia == 'lUnes' || this.dia == 'luNes' || this.dia == 'lunEs' || this.dia == 'luneS' || this.dia == 'L' || this.dia == 'l') {
            alert('Dia Lunes Seleccionado');
        } else if (this.dia == 'Martes' || this.dia == 'martes' || this.dia == 'mArtes' || this.dia == 'maRtes' || this.dia == 'marTes' || this.dia == 'martEs' || this.dia == 'marteS' || this.dia == 'M' || this.dia == 'm') {
            alert('Dia Martes Seleccionado');
        } else if (this.dia == 'Miercoles' || this.dia == 'miercoles' || this.dia == 'mIercoles' || this.dia == 'miErcoles' || this.dia == 'mieRcoles' || this.dia == 'mierColes' || this.dia == 'miercOles' || this.dia == 'miercoLes' || this.dia == 'miercolEs' || this.dia == 'miercoleS' || this.dia == 'Mi' || this.dia == 'mi') {
            alert('Dia Miercoles Seleccionado');
        } else if (this.dia == 'Jueves' || this.dia == 'jueves' || this.dia == 'jUeves' || this.dia == 'juEves' || this.dia == 'jueVes' || this.dia == 'juevEs' || this.dia == 'jueveS' || this.dia == 'J' || this.dia == 'j') {
            alert('Dia Jueves Seleccionado');
        } else if (this.dia == 'Viernes' || this.dia == 'viernes' || this.dia == 'vIernes' || this.dia == 'viErnes' || this.dia == 'vieRnes' || this.dia == 'vierNes' || this.dia == 'viernEs' || this.dia == 'vierneS' || this.dia == 'V' || this.dia == 'v') {
            alert('Dia Viernes Seleccionado');
        } else {
            alert('Error');
            return; // no se como
        }
        this.horario = prompt('Agregar horario:'),
            this.tarea = prompt('Agregar tarea:');
    }
}

function cargarTareas() {
    const cantidadDeTareas = parseInt(prompt('Cantidad de Tareas'));
    if (cantidadDeTareas <= 0 || isNaN(cantidadDeTareas) || cantidadDeTareas == "" || cantidadDeTareas == null) {
        alert('Por favor, cargar nuevamente');
        return cargarTareas();
    } else {
        for (let i = 0; i < cantidadDeTareas; i++) {
            let agenda = new Agenda();
            agenda.agregarTarea();
            tareasAgendadas.push(agenda)
        }
    }
    console.log(tareasAgendadas);
};

cargarTareas()



/* do {
}
while (this.dia !== null || this.horario !== null || this.tarea !== null); */