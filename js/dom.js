$(document).ready(function () {
	mostrarTarea();
});

function chuckNorrisApi() {
	$.get("https://api.chucknorris.io/jokes/random", replaceJoke);
}
function replaceJoke({ value }, estado) {
	if (estado === "success" && value) {
		$("#chuckNorris").text(value);
	}
}

function noHayTareas() {
	const EMPTY_LIST = !$("#listaVacia").length;
	const LOCAL_STORAGE_NOT_EMPTY = !!tareasAgregadas.length; //Transformo Array.length a booleano

	if (!Array.isArray(tareasAgregadas)) {
		return false;
	}

	if (LOCAL_STORAGE_NOT_EMPTY && !EMPTY_LIST) {
		$("#listaVacia").remove();
	} else if (!LOCAL_STORAGE_NOT_EMPTY && EMPTY_LIST) {
		$(".tareasContainer2").prepend(
			`<p id="listaVacia" class="is-size-5 is-medium ml-2 text-red">No hay tareas pendientes</p>`
		);
	}
}

/*-------------------------------------------------- constructor de tareas */
class Tarea {
	constructor(id, tarea, horario) {
		this.id = id;
		this.tarea = tarea;
		this.horario = horario;
	}
}

/* --------------------------------------------------------------------------- Buttons */
const agregarBtn = document.getElementById("agregarBtn");

/* ------------------------- Array Tareas Agregadas por Button Agregar */
let tareasAgregadas = checkLocalStorage();

/*--------------------------------------------------------------------------- Containers */

const tareasContainer = document.getElementById("tareasContainer");

/*--------------------------------------------------------------------------- Inputs */
let tareaInput = document.getElementById("tareaInput");
let horarioInput = document.getElementById("horarioInput");

/* --------------------------------------------------------------------------------------- funciones */

function checkLocalStorage() {
	if (localStorage.getItem("Tareas Agregadas")) {
		return JSON.parse(localStorage.getItem("Tareas Agregadas"));
	} else {
		return [];
	}
}

function agregarTarea() {
	if (
		!tareaInput.value ||
		!horarioInput.value ||
		horarioInput.value > 23.59 ||
		horarioInput.value < 0
	) {
		alert("Agregue Horario y/o tarea válida");
		return;
	} else {
		let randomId = Date.now();
		let tareaNueva = new Tarea(randomId, tareaInput.value, horarioInput.value);
		tareasAgregadas.push(tareaNueva);
		localStorage.setItem("Tareas Agregadas", JSON.stringify(tareasAgregadas));
		tareaInput.value = "";
		horarioInput.value = "";
	}
}

function mostrarTarea() {
	tareasContainer.innerHTML = "";
	for (const tareas of tareasAgregadas) {
		tareasContainer.innerHTML += `
            <div class = "columns pt-4" data-id= ${tareas.id} >
                    <div div div class = "column is-four-fifths is-centered divTareas">
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.tarea} </h3>
                        <h3 id="tareaLink" class="is-size-4 ml-6 tareaLink"> ${tareas.horario} </h3>
                    </div>
                    <div class="column is-one-fifths has-text-centered">

                        <button id="borrarBtn" onclick="borrarTarea(${tareas.id})" class="button is-danger">Borrar</button>

                    </div>
                </div>
            `;
	}
	noHayTareas();
	chuckNorrisApi();
}

/* ---------------------------------------------------------------------------- Event Listeners */
$("#agregarBtn").click(function () {
	agregarTarea();
	mostrarTarea();
});

function borrarTarea(idIngresado) {
	let nuevasTareas = tareasAgregadas.filter(
		(tareas) => tareas.id != idIngresado
	);
	tareasAgregadas = nuevasTareas;
	localStorage.setItem("Tareas Agregadas", JSON.stringify(tareasAgregadas));
	mostrarTarea();
}
