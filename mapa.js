
function s(t){
    console.log(t.id)
    navigator.clipboard.writeText(t.innerHTML);
    if(t.classList.contains('clicked')){
        t.classList.remove('clicked')
        
    }else{
        t.classList.add('clicked')

    }
    document.getElementById('output').innerHTML=t.id
}
const municipios = document.getElementById('Municï¿½pios').querySelectorAll('path')
for (const item of municipios) {
    item.addEventListener('click',()=>{
        s(item)
    })
}
document.getElementById('mapa').querySelector('svg').style.transform = `scale(${document.getElementById('mapa').clientWidth/1059})`
document.getElementById('mapa').style.height = (1056*(document.getElementById('mapa').clientWidth/1059)) + 'px'
window.addEventListener('resize', ()=>{
    console.log(`scale(${document.getElementById('mapa').offsetWidth})`)
    document.getElementById('mapa').querySelector('svg').style.transform = `scale(${document.getElementById('mapa').clientWidth/1059})`
    document.getElementById('mapa').style.height = (1056*(document.getElementById('mapa').clientWidth/1059)) + 'px'
})

function definyPosition(dados){
    for (const element of dados) {
        const path = document.getElementById(element[0]);
          const text = path.nextElementSibling;
        
          // Calcula a posição do centroide aproximado
          const bbox = path.getBBox();
          console.log(bbox)
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
        
          // Define a posição do texto no centro
          text.setAttribute('x', centerX * element[1]);
          text.setAttribute('y', centerY*element[2]);
          text.innerHTML=element[3]
    }
}
cidades=[
    ['mun_4100459',1.66,2.10,'Altamira Paraná'],
    ['mun_4101705',1.66,1.66,'Araruna'],
    ['mun_4102505',2,1.57,'Barbosa Ferraz'],
    ['mun_4103008',1.60,1.8,'Boa Esperança'],
    ['mun_4103909',1.60,2,'Campina da Lagoa'],
    ['mun_4104303',1.84,1.66,'Campo Mourão'],
    ['mun_4106555',1.93,1.70,'Corumbataí do Sul'],
    ['mun_4107504',1.85,1.40,'Eng.Beltrão'],
    ['mun_4107553',1.68,1.70,'Farol'],
    ['mun_4107702',2,1.50,'Fenix'],
    ['mun_4108601',1.40,1.75,'Goioerê'],
    ['mun_4110805',1.98,1.85,'Iretama'],
    ['mun_4112207',1.55,1.67,'Janiópolis'],
    ['mun_4112959',1.50,1.92,'Juranda'],
    ['mun_4113734',1.80,1.90,'Luiziana'],
    ['mun_4114005',1.70,1.90,'Mamborê'],
    ['mun_4116109',1.38,1.63,'Moreira Sales'],
    ['mun_4116802',1.73,2.05,'Nova Cantu'],
    ['mun_4118808',1.85,1.55,'Peabiru'],
    ['mun_4120655',1.20,1.83,'IV Centenário'],
    ['mun_4121109',1.93,1.5,'Quinta do Sol'],
    ['mun_4121356',1.45,1.90,'Rancho Alegre D.Oeste'],
    ['mun_4122503',1.89,2,'Roncador'],
    ['mun_4127205',1.82,1.26,'Terra Boa'],
    ['mun_4128005',1.35,1.95,'Ubiratã'],
]
definyPosition(cidades)