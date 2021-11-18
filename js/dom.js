/*-------------------------------------------------- constructor de tareas */
class Tarea {
    constructor(id, tarea, horario) {
        this.id = id;
        this.tarea = tarea;
        this.horario = horario;
    }
}

/* --------------------------------------------------------------------------- Buttons */
const agregarBtn = document.getElementById('agregarBtn');



/* ------------------------- Array Tareas Agregadas por Button Agregar */
//let tareasAgregadas = [];
let tareasAgregadas = checkLocalStorage();

/*--------------------------------------------------------------------------- Containers */

const tareasContainer = document.getElementById('tareasContainer');

/*--------------------------------------------------------------------------- Inputs */
let tareaInput = document.getElementById('tareaInput');
let horarioInput = document.getElementById('horarioInput');

/* --------------------------------------------------------------------------------------- funciones */

function checkLocalStorage() {
    if (localStorage.getItem('Tareas Agregadas')) {
        return JSON.parse(localStorage.getItem('Tareas Agregadas'))
    } else {
        return [];
    }
}

function agregarTarea() {
    if (!tareaInput.value || !horarioInput.value || horarioInput.value > 23.59 || horarioInput.value < 0) {
        alert('Agregue Horario y/o tarea válida');
        return
    } else {
        let randomId = Math.floor(Math.random() * 1000);
        let tareaNueva = new Tarea(randomId, tareaInput.value, horarioInput.value);
        tareasAgregadas.push(tareaNueva);
        localStorage.setItem('Tareas Agregadas', JSON.stringify(tareasAgregadas));
        tareaInput.value = ''
        horarioInput.value = '';
    }
}

function mostrarTarea() {
    tareasContainer.innerHTML = '';
    for (const tareas of tareasAgregadas) {
        tareasContainer.innerHTML += `
            <div class = "columns pt-4" data-id= ${tareas.id} >
                    <div div div class = "column is-four-fifths is-centered divTareas">
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.tarea} </h3>
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.horario} </h3>
                    </div>
                    <div class="column is-one-fifths has-text-centered">

                        <button id="editarBtn" class="button is-warning">Editar</button>
                        <button id="borrarBtn" class="button is-danger">Borrar</button>

                    </div>
                </div>
            `
    }
    const deleteButtons = document.querySelectorAll('#borrarBtn'); // will give you an array of buttons

    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteRow);
    });

    function deleteRow(e) {
        e.target.parentElement.parentElement.remove();
    }
}




/* ---------------------------------------------------------------------------- Event Listeners */

agregarBtn.addEventListener('click', () => {
    agregarTarea();
    mostrarTarea();
    // localStorage.clear();
})



/* 
function mostrarTareas() {
    let tareasContainer = document.getElementById('tareasContainer');
    if (!localStorage.getItem('Tareas Asignadas')) {
        tareasContainer.innerHTML = `
         <p class="label is-size-5 is-medium ml-2">No hay tareas pendientes</p>
        `;
    } else {
        tareasContainer.innerHTML = "";
        for (const tareas of tareasAgregadas) {
            tareasContainer.innerHTML += `
        <div class="columns pt-4">
                    <div class="column is-four-fifths is-centered divTareas">
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.tarea} </h3>
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.horario} </h3>
                    </div>
                    <div class="column is-one-fifths has-text-centered divBtns">

                        <button id="editarBtn" class="button is-warning edit">Editar</button>
                        <button id="borrarBtn" class="button is-danger">Borrar</button>

                    </div>
                </div>
        `;
        }
    }

}



document.addEventListener("DOMContentLoaded", localStorage.getItem('Tareas Asignadas'));

agregarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setTarea();
    mostrarTareas();
});

borrarBtn.addEventListener('click', () => {
    console.log('hola');
});
 */

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