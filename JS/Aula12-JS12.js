const cepForm = document.querySelector('#cep-form')

 cepForm.addEventListener('submit', (event) => {
    event.preventDefault() //impede o comportamento padrão do formulário
    event.stopPropagation() 

    const inputCep = event.target[0]

    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json`,{
        method:'GET'
    }).then(function(resposta){
        return resposta.json()
    }).then(dados =>{
        console.log(dados)
    })



  /*   event.target.submit() //continua o envio do formulario */
})