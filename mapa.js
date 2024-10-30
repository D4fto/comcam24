
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
    ['mun_4100459',1.66,2.13,'jasd'],
    ['mun_4101705',1.66,1.66,'jfddfi'],
]
definyPosition(cidades)