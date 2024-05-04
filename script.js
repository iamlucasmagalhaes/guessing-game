const randomNumber = Math.floor(Math.random() * 100) + 1 //gera um número aleatório entre 1 e 100
console.log(randomNumber)
let maxHealth = 10 //define um valor para minha saúde máxima
const span = document.getElementById('maxHealth') //seleciona o meu span que vai ser alterado toda vez que o jogador errar o número

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"] //teclas permitidas no input

const input = document.getElementById('input') //seleciona o meu input

//atribui o evento de apertar a tecla para o meu input
input.addEventListener('keydown', function (ev){
    ev.preventDefault()

    //verifica se a tecla apertado faz parte do meu array de números permitidos
    if(allowedKeys.includes(ev.key)){
        //adiciona o valor da tecla ao meu input
        input.value += ev.key
    }

    //verifica se a tecla Backspace foi pressionada
    if(ev.key === 'Backspace'){
        //apaga o ultimo caractere do meu input
        input.value = input.value.slice(0, -1)
    }
})

//verifica se o número digitado é igual ao número sorteado
function checkNumber(){
    const inputNumber = Number(input.value) //transforma a minha string em um número
    if(inputNumber === randomNumber){
        return true
    } else {
        return false
    }
}

//mostra a quantidade de tentativas restantes
function remainingHealth(){
    //se o número for igual mostra uma mensagem
    if(checkNumber()){
        console.log('acertou')
    } else { //se o número for diferente ele subtrai 1 do valor máximo e muda o valor dentro do span
        maxHealth--
        span.textContent = ' '
        span.textContent = `${maxHealth}`
    }
    //se a vida máxima ficar zerada aparece um alerta e a página é recarregada
    if(maxHealth === 0){
        alert('Você perdeu')
        location.reload()
        input.value = ''
    }
}

//captura o botão do meu formulário para o evento de submit
document.querySelector('form').addEventListener('submit', function(ev){
    ev.preventDefault() //impede o comportamento padrão do meu formulário

    //se o valor do input for diferente de vazio ele chama a minha função para verificar os valores
    if(input.value !== ''){
        checkNumber()
        remainingHealth()
    }
})