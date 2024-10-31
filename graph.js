import { dados } from './dados.js';
function searchByName(name){
    for (const element of dados) {
        if(element.nome===name){
            return element
        }
    }
}
function searchById(id){
    for (const element of munIds) {
        if(element[0]===id){
            return element[1]
        }
    }
    
}
function atualizarMun(muni){
    const url = new URL(window.location);
    url.searchParams.set('mun', muni)
    history.pushState(null, '', url)

}
function getQueryParam(paramName) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get(paramName);
}
let mun = getQueryParam('mun') || '000'
let munIds = [
    ['000', 'Selecione um município'],
    ['mun_4100459','Altamira do Paraná'],
    ['mun_4101705','Araruna'],
    ['mun_4102505','Barbosa Ferraz'],
    ['mun_4103008','Boa Esperança'],
    ['mun_4103909','Campina da Lagoa'],
    ['mun_4104303','Campo Mourão'],
    ['mun_4106555','Corumbataí do Sul'],
    ['mun_4107504','Engenheiro Beltrão'],
    ['mun_4107553','Farol'],
    ['mun_4107702','Fênix'],
    ['mun_4108601','Goioerê'],
    ['mun_4110805','Iretama'],
    ['mun_4112207','Janiópolis'],
    ['mun_4112959','Juranda'],
    ['mun_4113734','Luiziana'],
    ['mun_4114005','Mamborê'],
    ['mun_4116109','Moreira Sales'],
    ['mun_4116802','Nova Cantu'],
    ['mun_4118808','Peabiru'],
    ['mun_4120655','Quarto Centenário'],
    ['mun_4121109','Quinta do Sol'],
    ['mun_4121356','Rancho Alegre do Oeste'],
    ['mun_4122503','Roncador'],
    ['mun_4127205','Terra Boa'],
    ['mun_4128005','Ubiratã'],
]
for (let i = 1; i<munIds.length;i++) {
    const item = munIds[i]
    document.getElementById('municipios').insertAdjacentHTML('beforeend',`<option value="${item[0]}">${item[1]}</option>`)
    if(mun === item[0]){
        document.getElementById('municipios').value = item[0]
    }
}
document.getElementById('munSelected').innerHTML = mun!='000'?`Município selecionado: ${searchById(mun)}`:'Selecione um município'
document.getElementById('municipios').addEventListener('input',()=>{
    mun=document.getElementById('municipios').value
    document.getElementById('munSelected').innerHTML = mun!='000'?`Município selecionado: ${searchById(mun)}`:'Selecione um município'
    atualizarMun(mun)
    drawCity()
})
let sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2000.urbana
}
console.log(sum)
 sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2000.rural
}
console.log(sum)
 sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2010.urbana
}
console.log(sum)
 sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2010.rural
}
console.log(sum)
 sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2000.homem
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2000.mulher
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2000.total
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2010.homem
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2010.mulher
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2010.total
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2022.homem
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2022.mulher
}
console.log(sum)
sum = 0
for (const item of dados) {
    sum+=item.dados.populacao2022.total
}
console.log(sum)
sum = 0
function drawCity(){
    google.charts.setOnLoadCallback(drawChart12);
    google.charts.setOnLoadCallback(drawChart13);
    google.charts.setOnLoadCallback(drawChart14);
    google.charts.setOnLoadCallback(drawChart15);
    google.charts.setOnLoadCallback(drawChart16);
}
function drawAll() {
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    google.charts.setOnLoadCallback(drawChart5);
    google.charts.setOnLoadCallback(drawChart6);
    google.charts.setOnLoadCallback(drawChart7);
    google.charts.setOnLoadCallback(drawChart8);
    google.charts.setOnLoadCallback(drawChart9);
    google.charts.setOnLoadCallback(drawChart10);
    google.charts.setOnLoadCallback(drawChart11);
    drawCity()
    
}
google.charts.load('current', { packages: ['corechart'], 'language': 'pt' });
drawAll()
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        document.querySelector('#myChart5').style.height = '500px'
        document.querySelector('#myChart7').style.height = '850px'
    }
    else if(window.innerWidth <= 1000){
        document.querySelector('#myChart7').style.height = '1000px'
        
    }
    else {
        document.querySelector('#myChart5').style.height = '1000px'
        document.querySelector('#myChart7').style.height = '1250px'
    }
    drawAll()
});
function drawChart() {
    let datas = [['cidade', '2000', '2010', '2022']]
    for (let i = 1; i < dados.length; i++) {
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
    let datas = [['cidade', 'taxa de escolaridade', { role: 'tooltip' },{role: 'style'}]]
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.taxaEscolaridade.valor / 100, String(dados[i].dados.taxaEscolaridade.valor).replace('.', ',') + "%",i%2==0?'#3366cc':'#5888e9'])
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
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.IDEB.AnosIniciais.valor >= 0 ? dados[i].dados.IDEB.AnosIniciais.valor : null, dados[i].dados.IDEB.AnosIniciais.valor >= 0 ? String(dados[i].dados.IDEB.AnosIniciais.valor).replace('.', ',') : 'Sem dados', dados[i].dados.IDEB.AnosFinais.valor >= 0 ? dados[i].dados.IDEB.AnosFinais.valor : null, dados[i].dados.IDEB.AnosFinais.valor >= 0 ? String(dados[i].dados.IDEB.AnosFinais.valor).replace('.', ',') : 'Sem dados'])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'IDEB - Índice de Desenvolvimento da Educação Básica',
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

            gridlines: {
                color: 'black'
            },
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9', '#DC3912']
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart3'));
    chart.draw(data, options);

}
function drawChart4() {
    let datas = [['cidade', 'Esgotamento sanitário', { role: 'tooltip' }, {role:'style'}]]
    for (let i = 0; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.esgotamentoSanitario.valor / 100, String(dados[i].dados.esgotamentoSanitario.valor).replace('.', ',') + "%",i%2==0?'#1166c2':'#5177e4'])
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
    for (let i = 1; i < dados.length; i++) {
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
        ['0%~40%', daidos._0_40[0], daidos._0_40[0] + daidos._0_40[1] + '.', '#b8ff4c'],
        ['40%~60%', daidos._40_60[0], daidos._40_60[0] + daidos._40_60[1] + '.', '#98f823'],
        ['60%~70%', daidos._60_70[0], daidos._60_70[0] + daidos._60_70[1] + '.', '#78d900'],
        ['70%~80%', daidos._70_80[0], daidos._70_80[0] + daidos._70_80[1] + '.', '#57ba00'],
        ['80%~90%', daidos._80_90[0], daidos._80_90[0] + daidos._80_90[1] + '.', '#329d00'],
        ['90%~95%', daidos._90_95[0], daidos._90_95[0] + daidos._90_95[1] + '.', '#008000'],
        ['95%~100%', daidos._95_100[0], daidos._95_100[0] + daidos._95_100[1] + '.', '#006400'],
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
    let datas = [['cidade', 'Mortalidade infantil', { role: 'tooltip' }, {role: 'style'}]]
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.mortalidadeInfantil.valor >= 0 ? dados[i].dados.mortalidadeInfantil.valor : null, dados[i].dados.mortalidadeInfantil.valor >= 0 ? String(dados[i].dados.mortalidadeInfantil.valor).replace('.', ',') + ' óbitos por mil nascidos vivos' : 'Sem dados',i%2==0?'#3366cc':'#5888e9'])
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
function drawChart7() {
    let datas = [['cidade', 'IDHM 2000', { role: 'tooltip' }, 'IDHM 2010', { role: 'tooltip' }]]
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.IDHM._2000 >= 0 ? dados[i].dados.IDHM._2000 : null, dados[i].dados.IDHM._2000 >= 0 ? String(dados[i].dados.IDHM._2000).replace('.', ',') : 'Sem dados', dados[i].dados.IDHM._2010 >= 0 ? dados[i].dados.IDHM._2010 : null, dados[i].dados.IDHM._2010 >= 0 ? String(dados[i].dados.IDHM._2010).replace('.', ',') : 'Sem dados'])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'IDHM - Índice de Desenvolvimento Humano Municipal',
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

            gridlines: {
                color: 'black'
            },
            
            maxValue:1,
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#DC3912','#5888e9']
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart7'));
    chart.draw(data, options);

}
function drawChart8() {
    let datas = [['cidade', '2000', '2010']]
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.populacao2000.urbana,dados[i].dados.populacao2010.urbana])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'População Urbana',
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

            gridlines: {
                color: 'black'
            }
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#DC3912','#5888e9']
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart8'));
    chart.draw(data, options);

}
function drawChart9() {
    let datas = [['cidade', '2000', '2010']]
    for (let i = 1; i < dados.length; i++) {
        datas.push([dados[i].nome, dados[i].dados.populacao2000.rural,dados[i].dados.populacao2010.rural])
    }

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'População rural',
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

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    };

    // Draw
    const chart = new google.visualization.BarChart(document.getElementById('myChart9'));
    chart.draw(data, options);

}
function drawChart10() {
    let urbana = 0
    let rural = 0
    for (let i = 1; i < dados.length; i++) {
        urbana+=Number(dados[i].dados.populacao2000.urbana)
        rural+=Number(dados[i].dados.populacao2000.rural)
    }
    let datas = [
        ['região', 'total'],
        ['urbana',urbana],
        ['rural',rural]
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'População urbana/rural na região da Comcam 2000',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('myChart10'));
    chart.draw(data, options);

}
function drawChart11() {
    let urbana = 0
    let rural = 0
    for (let i = 1; i < dados.length; i++) {
        urbana+=Number(dados[i].dados.populacao2010.urbana)
        rural+=Number(dados[i].dados.populacao2010.rural)
    }
    let datas = [
        ['região', 'total'],
        ['urbana',urbana],
        ['rural',rural]
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: 'População urbana/rural na região da Comcam 2010',
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',

        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    }
    const chart = new google.visualization.PieChart(document.getElementById('myChart11'));
    chart.draw(data, options);
};
function drawChart12() {
    let cidade = searchByName(searchById(mun))

    console.log(searchById(mun))
    let datas = [
        ['Ano', 'total'],
        ['População 2000',cidade.dados.populacao2000.total],
        ['População 2010', cidade.dados.populacao2010.total],
        ['População 2022', cidade.dados.populacao2022.total],
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: `População no município de ${searchById(mun)} 2000-2022`,
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',
        focusTarget: 'category',
        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    }
    const chart = new google.visualization.LineChart(document.getElementById('myChart12'));
    chart.draw(data, options);
};
function drawChart13() {
    let cidade = searchByName(searchById(mun))

    console.log(searchById(mun))
    let datas = [
        ['Qual', 'total'],
        ['Sim', cidade.dados.esgotamentoSanitario.valor],
        ['Não', 100-cidade.dados.esgotamentoSanitario.valor],
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: `Esgotamento sanitario no município de ${searchById(mun)} - 2010`,
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',

        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#00aa00','#666666']
    }
    const chart = new google.visualization.PieChart(document.getElementById('myChart13'));
    chart.draw(data, options);
};
function drawChart14() {
    let cidade = searchByName(searchById(mun))

    console.log(searchById(mun))
    let datas = [
        ['sexo', 'total'],
        ['Masculino',cidade.dados.populacao2000.homem],
        ['Feminino',cidade.dados.populacao2000.mulher]
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: `População Masculina/Feminina no município de ${searchById(mun)} 2000`,
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',

        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    }
    const chart = new google.visualization.PieChart(document.getElementById('myChart14'));
    chart.draw(data, options);
};
function drawChart15() {
    let cidade = searchByName(searchById(mun))

    console.log(searchById(mun))
    let datas = [
        ['sexo', 'total'],
        ['Masculino',cidade.dados.populacao2010.homem],
        ['Feminino',cidade.dados.populacao2010.mulher]
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: `População Masculina/Feminina no município de ${searchById(mun)} 2010`,
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',

        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    }
    const chart = new google.visualization.PieChart(document.getElementById('myChart15'));
    chart.draw(data, options);
};
function drawChart16() {
    let cidade = searchByName(searchById(mun))

    console.log(searchById(mun))
    let datas = [
        ['sexo', 'total'],
        ['Masculino',cidade.dados.populacao2022.homem],
        ['Feminino',cidade.dados.populacao2022.mulher]
    ]
    

    // Set Data
    const data = google.visualization.arrayToDataTable(datas);

    // Set Options
    const options = {
        title: `População Masculina/Feminina no município de ${searchById(mun)} 2022`,
        legend: {
            position: 'top', textStyle: {
                fontSize: 16
            }
        },
        backgroundColor: 'transparent',

        hAxis: {

            gridlines: {
                color: 'black'
            }
            
        },
        vAxis: {
            textStyle: {
                fontSize: 12,
            },

        },
        colors: ['#5888e9','#DC3912']
    }
    const chart = new google.visualization.PieChart(document.getElementById('myChart16'));
    chart.draw(data, options);
};
