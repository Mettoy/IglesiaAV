function actualizarMenu() {
  const menuLinks = document.getElementById('menuLinks');
  menuLinks.innerHTML = '';

  const inicio = document.createElement('a');
  inicio.href = "inicio.html";
  inicio.textContent = "Inicio";
  menuLinks.appendChild(inicio);

  const diezmo = document.createElement('a');
  diezmo.href = "diezmo.html";
  diezmo.textContent = "Diezmo";
  menuLinks.appendChild(diezmo);

  const ofrendas = document.createElement('a');
  ofrendas.href = "ofrendas.html";
  ofrendas.textContent = "Ofrendas";
  menuLinks.appendChild(ofrendas);

  const crearAcceso = document.createElement('a');
  crearAcceso.href = "acceso.html";
  crearAcceso.textContent = "Crear Acceso";
  menuLinks.appendChild(crearAcceso);

  const discipulado = document.createElement('a');
  discipulado.href = "discipulado.html";
  discipulado.textContent = "Discipulado";
  menuLinks.appendChild(discipulado);
}