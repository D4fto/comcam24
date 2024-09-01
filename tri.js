let base = 10
let resposta=''
for(let i = 1; i<=base;i++){
    for(let a=0;a<i;a++){
        resposta+='*'
    }
    resposta+='\n'
}
console.log(resposta)