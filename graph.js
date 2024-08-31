import { dados } from './dados.js';

function drawAll() {
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    google.charts.setOnLoadCallback(drawChart5);
    google.charts.setOnLoadCallback(drawChart6);
}
google.charts.load('current', { packages: ['corechart'], 'language': 'pt' });
drawAll()
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        document.querySelector('#myChart5').style.height = '500px'
    }
    else {
        document.querySelector('#myChart5').style.height = '1000px'
    }
    drawAll()
});
function drawChart() {
    let datas = [['cidade', '2000', '2010', '2022']]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.populacao2000.total, dados[i].dados.populacao2010.total, dados[i].dados.populacao2022.total])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'População total',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '75%' },
        hAxis: {
            format: 'decimal',
            gridlines: {
                color: 'black'
            }
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            }
        },
        colors: ['#5888e9', '#DC3912', '#FF9900']
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);

}
function drawChart2() {
    let datas = [['cidade', 'taxa de escolaridade', { role: 'tooltip' }]]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.taxaEscolaridade.valor / 100, String(dados[i].dados.taxaEscolaridade.valor).replace('.', ',') + "%"])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'Taxa de escolaridade',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '75%' },
        hAxis: {
            format: 'percent',

            gridlines: {
                color: 'black'
            },
            minValue: 0.95
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        }
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart2'));
    chart.draw(data, options);

}
function drawChart3() {
    let datas = [['cidade', 'IDEB anos iniciais', { role: 'tooltip' }, 'IDEB anos finais', { role: 'tooltip' }]]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.IDEB.AnosIniciais.valor >= 0 ? dados[i].dados.IDEB.AnosIniciais.valor : null, dados[i].dados.IDEB.AnosIniciais.valor >= 0 ? String(dados[i].dados.IDEB.AnosIniciais.valor).replace('.', ',') : 'Sem dados', dados[i].dados.IDEB.AnosFinais.valor >= 0 ? dados[i].dados.IDEB.AnosFinais.valor : null, dados[i].dados.IDEB.AnosFinais.valor >= 0 ? String(dados[i].dados.IDEB.AnosFinais.valor).replace('.', ',') : 'Sem dados'])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'IDEB',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '60%' },
        hAxis: {

            gridlines: {
                color: 'black'
            },
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        }
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart3'));
    chart.draw(data, options);

}
function drawChart4() {
    let datas = [['cidade', 'Esgotamento sanitário', { role: 'tooltip' }]]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.esgotamentoSanitario.valor / 100, String(dados[i].dados.esgotamentoSanitario.valor).replace('.', ',') + "%"])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'Esgotamento sanitário',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '75%' },
        hAxis: {
            format: 'percent',

            gridlines: {
                color: 'black'
            },
            minValue: 0.95
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        }
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart4'));
    chart.draw(data, options);

}
function drawChart5() {
    let daidos = {
        _0_40: [0, ''],
        _40_60: [0, ''],
        _60_70: [0, ''],
        _70_80: [0, ''],
        _80_90: [0, ''],
        _90_95: [0, ''],
        _95_100: [0, '']
    }
    for (let i = 0; i < dados.length; i++) {
        let num = dados[i].dados.arborizacao.valor
        switch (true) {
            case (num <= 40):
                daidos._0_40[0] += 1
                daidos._0_40[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 40 && num < 60):
                daidos._40_60[0] += 1
                daidos._40_60[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 60 && num < 70):
                daidos._60_70[0] += 1
                daidos._60_70[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 70 && num < 80):
                daidos._70_80[0] += 1
                daidos._70_80[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 80 && num < 90):
                daidos._80_90[0] += 1
                daidos._80_90[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 90 && num < 95):
                daidos._90_95[0] += 1
                daidos._90_95[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
            case (num >= 95 && num <= 100):
                daidos._95_100[0] += 1
                daidos._95_100[1] += '\n' + dados[i].nome + ' : ' + String(dados[i].dados.arborizacao.valor).replace('.', ',') + '%'
                break;
        }
    }


    let datas = [
        ['Arborização', 'cidades', { role: 'tooltip' }, { role: 'style' }],
        ['0%~40%', daidos._0_40[0], daidos._0_40[0] + daidos._0_40[1] + '.', '#006400'],
        ['40%~60%', daidos._40_60[0], daidos._40_60[0] + daidos._40_60[1] + '.', '#008000'],
        ['60%~70%', daidos._60_70[0], daidos._60_70[0] + daidos._60_70[1] + '.', '#329d00'],
        ['70%~80%', daidos._70_80[0], daidos._70_80[0] + daidos._70_80[1] + '.', '#57ba00'],
        ['80%~90%', daidos._80_90[0], daidos._80_90[0] + daidos._80_90[1] + '.', '#78d900'],
        ['90%~95%', daidos._90_95[0], daidos._90_95[0] + daidos._90_95[1] + '.', '#98f823'],
        ['95%~100%', daidos._95_100[0], daidos._95_100[0] + daidos._95_100[1] + '.', '#b8ff4c'],
    ]

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'Arborização',
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '75%' },
        hAxis: {
            format: 'percent',
            gridlines: {
                color: 'black'
            },
            minValue: 0
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        }
    };

    // Draw
    const chart = new google.visualization.ColumnChart(document.getElementById('myChart5'));
    chart.draw(data, options);

}
function drawChart6() {
    let datas = [['cidade', 'Mortalidade infantil', { role: 'tooltip' }]]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.mortalidadeInfantil.valor >= 0 ? dados[i].dados.mortalidadeInfantil.valor : null, dados[i].dados.mortalidadeInfantil.valor >= 0 ? String(dados[i].dados.mortalidadeInfantil.valor).replace('.', ',') + ' óbitos por mil nascidos vivos' : 'Sem dados'])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'Mortalidade infantil',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        chartArea: { bottom: 75, top: 150 },
        bar: { groupWidth: '60%' },
        hAxis: {
            title: 'Óbitos por mil nascidos vivos',
            gridlines: {
                color: 'black'
            },
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        }
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart6'));
    chart.draw(data, options);

}