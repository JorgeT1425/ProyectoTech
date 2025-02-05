// Función para cargar el archivo CSV y procesarlo
async function cargarCSV() {
    try {
        const respuesta = await fetch("./listado.csv"); // Cargar el archivo CSV
        const texto = await respuesta.text(); // Leer el contenido por líneas

        const lineas = texto.split("\n").map(l => l.trim()).filter(l => l); // Limpiar espacios y líneas vacías
        const encabezados = lineas[0].split(","); // Obtener los encabezados (Primera Línea)
        const cuerpo = lineas.slice(1); // Obtener las filas de datos

        const tbody = document.querySelector("#tablaUsuarios tbody");
        const filtroPais = document.querySelector("#filtroPais");
        const filtroAno = document.querySelector("#filtroAno");

        let paises = new Set();
        let anos = new Set();
        let datos = [];

        // Recorrer cada línea de datos
        cuerpo.forEach(linea => {
            const columnas = linea.split(",").map(d => d.trim()); // Dividir por coma y limpiar espacios
            if (columnas.length === encabezados.length) {
                const obj = {
                    pais: columnas[0],
                    codigo: columnas[1],
                    ano: columnas[2],
                    biomasa: columnas[3],
                    solar: columnas[4],
                    eolica: columnas[5],
                    hidroelectrica: columnas[6],
                };

                paises.add(obj.pais);
                anos.add(obj.ano);
                datos.push(obj);
            }
        });

        // Llenar los filtros de país y año
        paises.forEach(pais => {
            const opcion = document.createElement("option");
            opcion.value = pais;
            opcion.textContent = pais;
            filtroPais.appendChild(opcion);
        });

        anos.forEach(ano => {
            const opcion = document.createElement("option");
            opcion.value = ano;
            opcion.textContent = ano;
            filtroAno.appendChild(opcion);
        });

        // Seleccionar Colombia por defecto si existe
        if (paises.has("Colombia")) {
            filtroPais.value = "Colombia";
        }

        // Función para actualizar la tabla según los filtros seleccionados
        function actualizarTabla() {
            const paisSeleccionado = filtroPais.value;
            const anoSeleccionado = filtroAno.value;
            tbody.innerHTML = ""; // Limpiar tabla

            datos.forEach(dato => {
                if (
                    (paisSeleccionado === "" || dato.pais === paisSeleccionado) &&
                    (anoSeleccionado === "" || dato.ano === anoSeleccionado)
                ) {
                    const fila = document.createElement("tr");
                    fila.innerHTML = `
                        <td>${dato.pais}</td>
                        <td>${dato.codigo}</td>
                        <td>${dato.ano}</td>
                        <td>${dato.biomasa}</td>
                        <td>${dato.solar}</td>
                        <td>${dato.eolica}</td>
                        <td>${dato.hidroelectrica}</td>
                    `;
                    tbody.appendChild(fila);
                }
            });
        }

        document.querySelector("#btnBuscar").addEventListener("click", actualizarTabla);

        actualizarTabla(); // Cargar datos con Colombia por defecto

    } catch (error) {
        console.error("Error al cargar el archivo CSV", error);
    }
}

// Llamar a la función para cargar el CSV
cargarCSV();
