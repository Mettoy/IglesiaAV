function actualizarMenu() {
  const menuLinks = document.getElementById('menuLinks');
  menuLinks.innerHTML = ''; // Limpiar el menú actual

  // Menú común para todos
  const inicio = document.createElement('a');
  inicio.href = "inicio.html";
  inicio.textContent = "Inicio";
  menuLinks.appendChild(inicio);

  // Acceso total para Administrador o ADMON
  if (rolUsuario === 'Administrador' || rolUsuario === 'ADMON') {
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

  } else if (rolUsuario === 'Discipulador') {
    const discipulado = document.createElement('a');
    discipulado.href = "discipulado.html";
    discipulado.textContent = "Discipulado";
    menuLinks.appendChild(discipulado);

  } else if (rolUsuario === 'Tesorero') {
    const diezmo = document.createElement('a');
    diezmo.href = "diezmo.html";
    diezmo.textContent = "Diezmo";
    menuLinks.appendChild(diezmo);

    const ofrendas = document.createElement('a');
    ofrendas.href = "ofrendas.html";
    ofrendas.textContent = "Ofrendas";
    menuLinks.appendChild(ofrendas);

  } else if (rolUsuario === 'Preadministrador') {
    const crearAcceso = document.createElement('a');
    crearAcceso.href = "acceso.html";
    crearAcceso.textContent = "Crear Acceso";
    menuLinks.appendChild(crearAcceso);

    const discipulado = document.createElement('a');
    discipulado.href = "discipulado.html";
    discipulado.textContent = "Discipulado";
    menuLinks.appendChild(discipulado);
  }
}