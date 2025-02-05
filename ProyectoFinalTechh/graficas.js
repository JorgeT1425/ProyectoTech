document.addEventListener("DOMContentLoaded", () => {
    // Función para la gráfica de barras
    function GraficaBarr() {
      const llamarB = document.getElementById("Grafico_Barras");
      if (llamarB) {
        new Chart(llamarB.getContext('2d'), {
          type: "bar",
          data: {
            labels: ["Eólica", "Solar", "Hidráulica", "Biomasa", "Geotérmica"],
            datasets: [{
              label: "Producción (en GW)",
              data: [300, 200, 450, 120, 90],
              backgroundColor: ['#ffe400', '#645d22', '#226064', '#57d4dc', '#b01919']
            }]
          },
          options: {
            responsive: false,
            scales: {
              y: { beginAtZero: true }
            }
          }
        });
      }
    }
    GraficaBarr();
    function GraficaTort() {
      const llamarT = document.getElementById("Grafico_Torta");
      if (llamarT) {
        new Chart(llamarT.getContext('2d'), {
          type: "pie",
          data: {
            labels: ["Solar", "Eólica", "Hidráulica", "Total Energías Limpias"],
            datasets: [{
              data: [0.32,0.07,71,33],
              backgroundColor: ["#245524", "#262455", "#552424", "#680d0d"]
            }]
          },
          options: {
            responsive: false
          }
        });
      }
    }
    GraficaTort();
    function TempoLine() {
      const llamarL = document.getElementById("Grafico_Linea");
      if (llamarL && !llamarL.classList.contains("renderizado")) {
const labels = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011', '2012','2013', '2014','2015', '2016','2017', '2018','2019', '2020','2021', '2022'];
        const windEnergy = [0, 0, 0, 0, 0.05, 0.04, 0.06, 0.04, 0.05, 0.05, 0.03, 0.04, 0.05, 0.05, 0.07, 0.06, 0.05, 0.00, 0.04, 0.06, 0.01, 0.05];
        const solarEnergy = [0.0018, 0.0026, 0.0046, 0.0064, 0.0079, 0.0095, 0.062,0.049,0,0,0,0,0,0,0,0,0,0,0,0.005,0.012,0.13,0.19,0.31];
        const geothermalEnergy = [0.49, 0.49, 0.49, 0.49, 0.46, 0.50, 0.51, 0.50, 0.50, 1.0, 1.1, 1.37, 1.47, 1.34, 1.72, 1.82, 1.99, 1.99, 2.11, 2.44, 2.82, 2.82];
    
        const data = {
          labels: labels,
          datasets: [
            {
              label: 'Energía Eólica (GW)',
              data: windEnergy,
              borderColor: 'rgba(44, 159, 44)',
              backgroundColor: 'rgba(60, 214, 60)',
              tension: 0.4,
            },
            {
              label: 'Energía Solar PV (GW)',
              data: solarEnergy,
              borderColor: 'rgba(168, 214, 60)',
              backgroundColor: 'rgba(113, 156, 16)',
              tension: 0.4,
            },
            {
              label: 'Energía Geotérmica (GW)',
              data: geothermalEnergy,
              borderColor: 'rgba(193, 0, 255)',
              backgroundColor: 'rgba(48, 50, 207)',
              tension: 0.4,
            }
          ]
        };
    
        const options = {
          responsive: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.dataset.label}: ${tooltipItem.raw} GW`;
                }
              }
            },
            title: {
              display: true,
              text: 'Tendencia en la Capacidad Instalada de Energías Renovables',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Año',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Capacidad Instalada (GW)',
              },
              beginAtZero: true,
            },
          },
        };
    
        new Chart(llamarL.getContext('2d'), {
          type: 'line',
          data: data,
          options: options,
        });
    
        llamarL.classList.add("renderizado"); // Evitar múltiples renderizados
      }
    }
    TempoLine();
    function GraficoAr() {
      const llamarA = document.getElementById("Grafico_Area");
      if (llamarA && !llamarA.classList.contains("renderizado")) {
        new Chart(llamarA.getContext('2d'), {
          type: "line",
          data: {
            labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
            datasets: [
              {
                label: "Innovación en Colombia",
                data: [30, 45, 55, 60, 75, 80, 90],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                tension: 0.4,
                fill: true,
              },
              {
                label: "Emprendimiento en Colombia",
                data: [25, 40, 50, 65, 70, 85, 95],
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor: "rgba(255, 159, 64, 1)",
                borderWidth: 2,
                tension: 0.4,
                fill: true,
              }
            ]
          },
          options: {
            responsive: false,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Año",
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Nivel de Desarrollo (%)",
                },
              },
            },
          },
        });
        llamarA.classList.add("renderizado"); // Marca el canvas como renderizado
      }
    }
    GraficoAr();
  });