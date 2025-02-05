document.addEventListener("DOMContentLoaded", () => {
    const bCalc = document.getElementById("Elboton");

    bCalc.addEventListener("click", () => {
        let cantidad = parseFloat(document.getElementById("Lacalculadora").value);
        let rC = document.getElementById("otro");
        function calcular(cantidad){

            let TwhConsumidos = (cantidad*12)/1000;
            let CTotal = TwhConsumidos*(0.059/100);
            return CTotal;
        }
        valor = calcular(cantidad);
        rC.textContent = `El porcentaje total de energía eólica usada es:  ${valor}%`;

    });
});