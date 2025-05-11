<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miembros</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Menú (igual que inicio.html) -->
    <nav class="menu">
        <ul>
            <li><a href="inicio.html">Inicio</a></li>
            <li><a href="miembros.html">Miembros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>

    <main>
        <h1>Lista de Miembros</h1>

        <!-- Barra de búsqueda y botón de añadir -->
        <div class="barra-superior">
            <input type="text" id="busqueda" placeholder="Buscar miembro...">
            <button id="añadirBtn" class="boton-verde">➕ Añadir</button>
        </div>

        <!-- Tabla estilo Excel -->
        <table class="tabla">
            <thead>
                <tr>
                    <th>Nombre Completo</th>
                    <th>Género</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Dirección</th>
                    <th>Estado</th>
                    <th>Número de Teléfono</th>
                    <th>Código de Miembro</th>
                    <th>Hijos</th>
                    <th>Nombre de Cónyuge</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aquí irán los miembros -->
            </tbody>
        </table>
    </main>

    <!-- Formulario emergente -->
    <div id="formulario" class="modal">
        <div class="modal-contenido">
            <span class="cerrar">&times;</span>
            <h2>Añadir Miembro</h2>
            <form>
                <label>Nombre Completo:</label>
                <input type="text" required>

                <label>Género:</label>
                <button type="button">F</button>
                <button type="button">M</button>

                <label>Fecha de Nacimiento:</label>
                <input type="date" required>

                <label>Dirección:</label>
                <input type="text" required>

                <label>Estado:</label>
                <select>
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Viudo</option>
                </select>

                <label>Número de Teléfono:</label>
                <input type="text" required>

                <label>Código de Miembro:</label>
                <input type="text" required>

                <label>Hijos:</label>
                <input type="number" min="0">

                <label>Nombre de Cónyuge (Opcional):</label>
                <input type="text">

                <label>Fecha de Aceptación:</label>
                <input type="date" required>

                <label>Iglesia donde aceptó:</label>
                <input type="text" required>

                <label>Bautizado:</label>
                <select id="bautizado">
                    <option>No</option>
                    <option>Sí</option>
                </select>
                <input type="text" id="lugarBautizo" placeholder="Lugar de bautizo" style="display: none;">

                <label>Bautizado por el Espíritu Santo:</label>
                <select id="espirituSanto">
                    <option>No</option>
                    <option>Sí</option>
                </select>
                <input type="text" id="lugarEspiritu" placeholder="Lugar donde recibió el Espíritu Santo" style="display: none;">

                <button type="submit">Guardar</button>
            </form>
        </div>
    </div>

    <script src="script.js"></script>

</body>
</html>
