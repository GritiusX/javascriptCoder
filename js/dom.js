/*-------------------------------------------------- constructor de tareas */
class Tareas {
    constructor(id, tarea, horario) {
        this.id = id;
        this.tarea = tarea;
        this.horario = horario;
    }
}

/* --------------------------------------------------------------------------- Buttons */
const agregarBtn = document.getElementById('agregarBtn');
const editarBtn = document.getElementById('editarBtn');
const borrarBtn = document.getElementById('borrarBtn');

/* ------------------------- Array Tareas Agregadas por Button Agregar */
let tareasAgregadas = checkLocalStorage();

/*--------------------------------------------------------------------------- Inputs */
let tareaInput = document.getElementById('tareaInput');
let horarioInput = document.getElementById('horarioInput');

/* <h3> que cambiara cada vez que agregues con el button */
let tareaLink = document.getElementById('tareaLink');

/* --------------------------------------------------------------------------------------- funciones */
function checkLocalStorage() {
    if (localStorage.getItem('Tareas Asignadas')) {
        return JSON.parse(localStorage.getItem('Tareas Asignadas'));
    } else {
        return [];
    }
}



function setTarea() {
    if (!tareaInput.value || !horarioInput.value) {
        alert('Agregue Horario o tarea');
    } else {
        let idTareaRandom = Math.floor(Math.random() * 1000);
        let nuevaTarea = new Tareas(
            idTareaRandom,
            tareaInput.value,
            horarioInput.value);
        tareasAgregadas.push(nuevaTarea);
        localStorage.setItem('Tareas Asignadas', JSON.stringify(tareasAgregadas));
        tareaInput.value = "";
        horarioInput.value = "";
        /*       localStorage.clear(); */
    }
}

function mostrarTareas() {
    let tareasContainer = document.getElementById('tareasContainer');
    for (const tareas of tareasAgregadas) {
        tareasContainer.innerHTML += `
        <div class="columns pt-4">
                    <div class="column is-four-fifths is-centered divTareas">
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.tarea} </h3>
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.horario} </h3>
                    </div>
                    <div class="column is-one-fifths has-text-centered divBtns">

                        <button id="editarBtn" class="button is-warning">Editar</button>
                        <button id="borrarBtn" class="button is-danger">Borrar</button>

                    </div>
                </div>
        `;
    }
}


agregarBtn.addEventListener('click', () => {
    setTarea();
    mostrarTareas();
});





/* 
agregarBtn.addEventListener('keyup', function (e) {
    if (e === 13) {
        if (tareaInput.value == '' || horarioInput.value == '') {
            alert('Agregue Horario o tarea')
        } else {

            console.log(tareaInput.value);
            console.log(horarioInput.value);

        }
    }
}) 
*/






/* 


tareasSolicitadasContainer
mesCambia
tablaNumDias
tablaCompletaMes
tareaInput
 */