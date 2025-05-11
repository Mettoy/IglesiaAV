// Guardar los datos de la tabla en localStorage
function guardarTablaEnLocalStorage() {
  const filas = document.querySelectorAll("#tabla-miembros tr");
  const datos = Array.from(filas).map(fila => {
    const celdas = fila.querySelectorAll("td");
    return {
      nombre: celdas[0].textContent,
      edad: celdas[1].textContent,
      correo: celdas[2].textContent
    };
  });
  localStorage.setItem("miembros", JSON.stringify(datos));
}

// Cargar los datos de la tabla desde localStorage
function cargarTablaDesdeLocalStorage() {
  const tabla = document.getElementById("tabla-miembros");
  const datos = JSON.parse(localStorage.getItem("miembros")) || [];
  tabla.innerHTML = datos.map(dato => `
    <tr>
      <td>${dato.nombre}</td>
      <td>${dato.edad}</td>
      <td>${dato.correo}</td>
    </tr>
  `).join("");
}

// Llamar a cargarTablaDesdeLocalStorage al cargar la página
document.addEventListener("DOMContentLoaded", cargarTablaDesdeLocalStorage);