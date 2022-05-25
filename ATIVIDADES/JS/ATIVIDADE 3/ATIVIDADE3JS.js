const divLampada = document.querySelector('div.lampada')
const botao = document.querySelector('#ligar-desligar')

botao.addEventListener('click', () => {
    divLampada.classList.toggle('ligado')
})