const input = document.getElementById("inputNuevaTarea");
const boton = document.getElementById("btnAgregar");
const listaUI = document.getElementById("listaTareas");

let tareas = JSON.parse(localStorage.getItem("mis_tareas")) || [];

renderizarLista();

function agregarTarea() {
  const textoUsuario = input.value;

  if (textoUsuario === "") {
    alert(`Escriba una tarea`);
    return;
  }

  let nuevaTarea = {
    id: Date.now(),
    texto: textoUsuario,
    completada: false
  };

  tareas.push(nuevaTarea);
  input.value = "";
  console.log("Lista actualizada:", tareas);

  renderizarLista();
  guardarDatos();
}

function renderizarLista() {
  listaUI.innerHTML = "";

  for (let i = 0; i < tareas.length; i++) {
    listaUI.innerHTML += `
    <li class="tarea-item">
        <span>${tareas[i].texto}</span>
        <button class="btn-borrar" onclick="borrarTarea(${tareas[i].id})"><i class='bx bx-trash'></i></button>
    </li>
`;
  }

  console.log("Dibujando lista en pantalla...");
}

function borrarTarea(idParaBorrar) {
  console.log("Borrando tarea con id:", idParaBorrar);

  tareas = tareas.filter(tarea => tarea.id !== idParaBorrar);

  renderizarLista();
  guardarDatos();
}

function guardarDatos() {
  localStorage.setItem("mis_tareas", JSON.stringify(tareas));
}

boton.addEventListener("click", agregarTarea);
