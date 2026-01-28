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
    <li class="text-primary bg-backgroundSecondary border-b-2 border-translucent p-3 mb-2 flex justify-between items-center" style="animation: aparecer 0.4s linear forwards;">
      <span>${tareas[i].texto}</span>
      <button class="bg-none border-none cursor-pointer p-1.25 transition-transform duration-200 hover:scale-110" onclick="borrarTarea(${tareas[i].id})"><i class='bx bx-trash text-xl text-danger'></i></button>
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

window.borrarTarea = borrarTarea;
