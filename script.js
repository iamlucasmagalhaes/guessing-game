const randomNumber = Math.floor(Math.random() * 100) + 1 //gera um número aleatório entre 1 e 100
console.log(randomNumber)

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"] //teclas permitidas no input

const input = document.getElementById('input')

input.addEventListener('keydown', function (ev){
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
    }

    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
})

//verifica se o número digitado é igual ao número sorteado
function checkNumber(){
    const inputNumber = Number(input.value) //transforma a minha string em um número
    if(inputNumber === randomNumber){
        console.log('São iguais')
    } else {
        console.log('São diferentes')
    }
}

//captura o botão do meu formulário para o evento de submit
document.querySelector('form').addEventListener('submit', function(ev){
    ev.preventDefault() //impede o comportamento padrão do meu formulário

    //se o valor do input for diferente de vazio ele chama a minha função para verificar os valores
    if(input.value !== ''){
        checkNumber()
    }
})