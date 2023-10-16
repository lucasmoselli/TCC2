var globalChart = document.getElementById('global');
var inclinadoChart = document.getElementById('inclinado');
var temperaturaChart = document.getElementById('temperatura');
var velocidadeVentoChart = document.getElementById('velocidadeVento');

console.log('teste')
fetch('http://localhost:3000/query3')
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

            for (var i = 0; i < 15; i++) {
                horas.push(data[i].time_stamp);
                global.push(data[i].glo_avg_ep01CP_Media)
                inclinado.push(data[i].tilt_avg_ep01CP_Media)
                temperatura.push(data[i].tp_sfc_ep10CP_Media)
            }

            new Chart(globalChart, {
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

            new Chart(temperaturaChart, {
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
            new Chart(inclinadoChart, {
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