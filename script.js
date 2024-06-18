document.addEventListener('DOMContentLoaded', function() {
    console.log("Script cargado correctamente");

    // Función para insertar el logo
    function insertarLogo() {
        const topMarginDiv = document.querySelector('.top-margin');

        if (topMarginDiv) {
            const logoContainer = document.createElement('div');
            logoContainer.className = 'logo-container';
            logoContainer.innerHTML = `
                <a href="index.html">
                    <img src="../images/logo-sinfondo.png" alt="Logo" class="logo">
                </a>
            `;
            topMarginDiv.prepend(logoContainer);
        }
    }

    // Insertar el logo
    insertarLogo();

    // Función para manejar la cantidad de acompañantes
    const cantidadAcompanantesElement = document.getElementById('cantidadAcompanantes');
    if (cantidadAcompanantesElement) {
        cantidadAcompanantesElement.addEventListener('change', function() {
            const cantidad = parseInt(this.value);
            const acompanantesContainer = document.getElementById('acompanantesContainer');
            
            // Limpiar los campos existentes
            acompanantesContainer.innerHTML = '';

            for (let i = 1; i <= cantidad; i++) {
                const group = document.createElement('div');
                group.className = 'form-group';

                const label = document.createElement('label');
                label.textContent = `Nombre y Apellido del Acompañante ${i}:`;
                group.appendChild(label);

                const input = document.createElement('input');
                input.type = 'text';
                input.id = `acompanante${i}`;
                input.name = `acompanante${i}`;
                input.required = true;
                group.appendChild(input);

                acompanantesContainer.appendChild(group);
            }
        });
    }

    // Función para generar reporte de ventas
    const generarReporteButton = document.getElementById('generarReporte');
    if (generarReporteButton) {
        generarReporteButton.addEventListener('click', function() {
            const fecha = document.getElementById('fecha').value;
    
            if (fecha) {
                const mensajeReporte = `Generando reporte de ventas para la fecha: ${fecha}`;
                document.getElementById('reporteResultado').innerText = mensajeReporte;
            } else {
                document.getElementById('reporteResultado').innerText = 'Por favor, seleccione una fecha.';
            }
        });
    }

    // Función para consultar paquete
    const consultarPaqueteButton = document.getElementById('consultarPaquete');
    if (consultarPaqueteButton) {
        consultarPaqueteButton.addEventListener('click', function() {
            const fecha = document.getElementById('fecha').value;
    
            if (fecha) {
                const mensajeReporte = `Consultando paquete para la fecha: ${fecha}`;
                document.getElementById('paqueteResultado').innerText = mensajeReporte;
            } else {
                document.getElementById('paqueteResultado').innerText = 'Por favor, seleccione una fecha.';
            }
        });
    }
});
