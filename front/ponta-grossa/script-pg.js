let menu = document.querySelector('.bx-nav');
let navbar = document.querySelector('.nav-lateral');
let menuCidades = document.querySelector('#bx-cidades')
let cidades = document.querySelector('.cidades')
var globalChart = document.getElementById('global');
var inclinadoChart = document.getElementById('inclinado');
var temperaturaChart = document.getElementById('temperatura');
var velocidadeVentoChart = document.getElementById('velocidadeVento');
var dataInicial = document.getElementById('data-inicial')
var dataFinal = document.getElementById('data-final')

let globalGrafico = 0
let inclinadoGrafico = 0
let temperaturaGrafico = 0
let velocidadeGrafico = 0

menu.onclick = () => {
  navbar.classList.toggle('open');
}

menuCidades.onclick = () => {
  cidades.classList.toggle('open')
}
window.addEventListener('load', function () {

  fetch('http://localhost:3000/query')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then(data => {
      if (data) {

        let horas = [];
        let global = [];
        let inclinado = [];
        let temperatura = [];
        let velocidadeVento = []

        for (var i = 0; i < 24; i++) {
          horas.push(data[i].time_stamp);
          global.push(data[i].glo_avg_ep01PG_Media)
          inclinado.push(data[i].tilt_avg_ep01PG_Media)
          temperatura.push(data[i].tp_sfc_ep10PG_Media)
          velocidadeVento.push(data[i].ws_avg_ep10PG_Media
          )
        }

        globalGrafico = new Chart(globalChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Global',
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                data: global,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });

        temperaturaGrafico = new Chart(temperaturaChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Temperatura',
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                data: temperatura,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (Celsius)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        inclinadoGrafico = new Chart(inclinadoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: inclinado,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        velocidadeGrafico = new Chart(velocidadeVentoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
                data: velocidadeVento,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocidade (m/s)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
      }
      else {
        console.error('A resposta do servidor está vazia.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
})

const hoje = document.getElementById('hoje').addEventListener('click', function () {
  globalGrafico.destroy()
  inclinadoGrafico.destroy()
  temperaturaGrafico.destroy()
  velocidadeGrafico.destroy()

  fetch('http://localhost:3000/query')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then(data => {
      if (data) {

        let horas = [];
        let global = [];
        let inclinado = [];
        let temperatura = [];
        let velocidadeVento = []

        for (var i = 0; i < 24; i++) {
          horas.push(data[i].time_stamp);
          global.push(data[i].glo_avg_ep01PG_Media)
          inclinado.push(data[i].tilt_avg_ep01PG_Media)
          temperatura.push(data[i].tp_sfc_ep10PG_Media)
          velocidadeVento.push(data[i].ws_avg_ep10PG_Media
          )
        }

        globalChart = new Chart(globalChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Global',
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                data: global,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });

        temperaturaGrafico = new Chart(temperaturaChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Temperatura',
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                data: temperatura,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (Celsius)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        inclinadoGrafico = new Chart(inclinadoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: inclinado,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        velocidadeGrafico = new Chart(velocidadeVentoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
                data: velocidadeVento,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocidade (m/s)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
      }
      else {
        console.error('A resposta do servidor está vazia.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
})

const ontem = document.getElementById('ontem').addEventListener('click', function () {
  globalGrafico.destroy()
  inclinadoGrafico.destroy()
  temperaturaGrafico.destroy()
  velocidadeGrafico.destroy()

  fetch('http://localhost:3000/query')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then(data => {
      if (data) {

        let horas = [];
        let global = [];
        let inclinado = [];
        let temperatura = [];
        let velocidadeVento = []

        for (var i = 0; i < 24; i++) {
          horas.push(data[i].time_stamp);
          global.push(data[i].glo_avg_ep01PG_Media)
          inclinado.push(data[i].tilt_avg_ep01PG_Media)
          temperatura.push(data[i].tp_sfc_ep10PG_Media)
          velocidadeVento.push(data[i].ws_avg_ep10PG_Media
          )
        }

        globalGrafico = new Chart(globalChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Global',
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                data: global,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });

        temperaturaGrafico = new Chart(temperaturaChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Temperatura',
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                data: temperatura,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (Celsius)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        inclinadoChart = new Chart(inclinadoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: inclinado,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        velocidadeGrafico = new Chart(velocidadeVentoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
                data: velocidadeVento,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocidade (m/s)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
      }
      else {
        console.error('A resposta do servidor está vazia.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
})

const dias7 = document.getElementById('7dias').addEventListener('click', function () {
  globalGrafico.destroy()
  inclinadoGrafico.destroy()
  temperaturaGrafico.destroy()
  velocidadeGrafico.destroy()

  fetch('http://localhost:3000/query2')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then(data => {
      if (data) {

        let horas = [];
        let global = [];
        let inclinado = [];
        let temperatura = [];
        let velocidadeVento = []

        for (var i = 0; i < data.length; i++) {
          horas.push(data[i].time_stamp);
          global.push(data[i].glo_avg_ep01PG_Media)
          inclinado.push(data[i].tilt_avg_ep01PG_Media)
          temperatura.push(data[i].tp_sfc_ep10PG_Media)
          velocidadeVento.push(data[i].ws_avg_ep10PG_Media
          )
        }

        globalGrafico = new Chart(globalChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Global',
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                data: global,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });

        temperaturaGrafico = new Chart(temperaturaChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Temperatura',
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                data: temperatura,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (Celsius)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        inclinadoGrafico = new Chart(inclinadoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: inclinado,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        velocidadeGrafico = new Chart(velocidadeVentoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
                data: velocidadeVento,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocidade (m/s)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
      }
      else {
        console.error('A resposta do servidor está vazia.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
})

const dias15 = document.getElementById('15dias').addEventListener('click', function () {
  globalGrafico.destroy()
  inclinadoGrafico.destroy()
  temperaturaGrafico.destroy()
  velocidadeGrafico.destroy()

  fetch('http://localhost:3000/query3')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      return response.json();
    })
    .then(data => {
      if (data) {

        let horas = [];
        let global = [];
        let inclinado = [];
        let temperatura = [];
        let velocidadeVento = [];

        for (var i = 0; i < data.length; i++) {
          horas.push(data[i].time_stamp);
          global.push(data[i].glo_avg_ep01PG_Media)
          inclinado.push(data[i].tilt_avg_ep01PG_Media)
          temperatura.push(data[i].tp_sfc_ep10PG_Media)
          velocidadeVento.push(data[i].ws_avg_ep10PG_Media)
        }

        globalGrafico = new Chart(globalChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Global',
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'orange',
                data: global,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });

        temperaturaGrafico = new Chart(temperaturaChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Temperatura',
                fill: false,
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                data: temperatura,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (Celsius)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        velocidadeGrafico = new Chart(velocidadeVentoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Velocidade do Vento',
                fill: false,
                borderColor: 'lightblue',
                backgroundColor: 'lightblue',
                data: velocidadeVento,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Velocidade (m/s)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
        inclinadoGrafico = new Chart(inclinadoChart, {
          type: 'line',
          data: {
            labels: horas,
            datasets: [
              {
                label: 'Inclinado',
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: inclinado,
                pointRadius: 2,
                borderWidth: 3
              },
            ]
          },
          options: {
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Dia e Hora (UTC-3)'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Potência (W)'
                }
              }]
            },
            aspectRatio: 1,
            maintainAspectRatio: false,
          }
        });
      }
      else {
        console.error('A resposta do servidor está vazia.');
      }
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
})

const procurar = document.getElementById('submit').addEventListener('click', function () {
  if (dataFinal.value > dataInicial.value) {
    globalGrafico.destroy()
    inclinadoGrafico.destroy()
    temperaturaGrafico.destroy()
    velocidadeGrafico.destroy()

    fetch('http://localhost:3000/query5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then(data => {
        if (data) {
          console.log(data[1]);

          let horas = [];
          let global = [];
          let inclinado = [];
          let temperatura = [];
          let velocidadeVento = []

          for (var i = 0; i < data.length; i++) {
            console.log((data[i].time_stamp > dataInicial.value) && (data[i].time_stamp < dataFinal.value))
            if ((data[i].time_stamp > dataInicial.value) && (data[i].time_stamp < dataFinal.value)) {
              horas.push(data[i].time_stamp);
              global.push(data[i].glo_avg_ep01CP_Media)
              inclinado.push(data[i].tilt_avg_ep01CP_Media)
              temperatura.push(data[i].tp_sfc_ep10CP_Media)
              velocidadeVento.push(data[i].ws_avg_ep10CP_Media)
            }
          }

          console.log(global[2])

          globalGrafico = new Chart(globalChart, {
            type: 'line',
            data: {
              labels: horas,
              datasets: [
                {
                  label: 'Global',
                  fill: false,
                  borderColor: 'orange',
                  backgroundColor: 'orange',
                  data: global,
                  pointRadius: 2,
                  borderWidth: 3
                },
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Dia e Hora (UTC-3)'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Potência (W)'
                  }
                }]
              },
              aspectRatio: 1,
              maintainAspectRatio: false,
            }
          });

          temperaturaGrafico = new Chart(temperaturaChart, {
            type: 'line',
            data: {
              labels: horas,
              datasets: [
                {
                  label: 'Temperatura',
                  fill: false,
                  borderColor: 'yellow',
                  backgroundColor: 'yellow',
                  data: temperatura,
                  pointRadius: 2,
                  borderWidth: 3
                },
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Dia e Hora (UTC-3)'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Temperatura (Celsius)'
                  }
                }]
              },
              aspectRatio: 1,
              maintainAspectRatio: false,
            }
          });
          inclinadoGrafico = new Chart(inclinadoChart, {
            type: 'line',
            data: {
              labels: horas,
              datasets: [
                {
                  label: 'Inclinado',
                  fill: false,
                  borderColor: 'red',
                  backgroundColor: 'red',
                  data: inclinado,
                  pointRadius: 2,
                  borderWidth: 3
                },
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Dia e Hora (UTC-3)'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Potência (W)'
                  }
                }]
              },
              aspectRatio: 1,
              maintainAspectRatio: false,
            }
          });
          velocidadeGrafico = new Chart(velocidadeVentoChart, {
            type: 'line',
            data: {
              labels: horas,
              datasets: [
                {
                  label: 'Inclinado',
                  fill: false,
                  borderColor: 'lightblue',
                  backgroundColor: 'lightblue',
                  data: velocidadeVento,
                  pointRadius: 2,
                  borderWidth: 3
                },
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Dia e Hora (UTC-3)'
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Velocidade (m/s)'
                  }
                }]
              },
              aspectRatio: 1,
              maintainAspectRatio: false,
            }
          });
        }
        else {
          console.error('A resposta do servidor está vazia.');
        }
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  }
  else {
    window.alert('A data inicial deve ser menor que a data final!')
  }
})