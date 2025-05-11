document.getElementById('añadirBtn').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'block';
});

document.querySelector('.cerrar').addEventListener('click', () => {
    document.getElementById('formulario').style.display = 'none';
});

document.getElementById('bautizado').addEventListener('change', (e) => {
    document.getElementById('lugarBautizo').style.display = e.target.value === 'Sí' ? 'block' : 'none';
});

document.getElementById('espirituSanto').addEventListener('change', (e) => {
    document.getElementById('lugarEspiritu').style.display = e.target.value === 'Sí' ? 'block' : 'none';
});
