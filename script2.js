setInterval(function time() {
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    if(minuto < 10) minuto = '0' + minuto 
    let horaCompleta = data.getHours() + ':' + minuto;

    
let setarhora = document.querySelector('#hora')
setarhora.innerText = horaCompleta

let grettings = document.querySelector('#grettings')

let background = document.querySelector('.main')

let imagem = document.querySelector('#imagem')


//funções


function noite(){
    background.style.background = 'linear-gradient(-136deg, #403361, #080c0e)'
    imagem.src = "assets/img/mon.webp"
    
    imagem.style.marginTop = '60px'
    imagem.style.padding = '10px'
}

function dia(){
    background.style.background = 'linear-gradient(-136deg, #f7f19e, #78cff1)'
    imagem.src = 'assets/img/sun-summer-free-svg-cutting-file-324x458.png'
    imagem.style.marginTop = '30px'
    imagem.style.padding = '0'
    
}



if (hora >= 0 && hora < 5){
    noite() 
    grettings.innerText = 'Boa madrugada!'
    grettings.style.fontSize = '63px'
}
else if(hora <= 12){
    dia()
    grettings.innerText = 'Bom dia!'

}
else if (hora <= 18){
    dia()
    grettings.innerText = 'Boa tarde!'
    
    background.style.background = 'linear-gradient(-136deg, #ee7e33, #70eebe)'
}
else if (hora > 18 && hora <= 24) {
    noite()
    grettings.innerText = 'Boa noite!'
}
else {
    grettings.innerText = 'hora invalida'
}
}
)


