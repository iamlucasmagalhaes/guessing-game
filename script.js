const randomNumber = Math.floor(Math.random() * 100) + 1 //gera um número aleatório entre 1 e 100
console.log(randomNumber)
let maxHealth = 10 //define um valor para minha saúde máxima
const span = document.getElementById('maxHealth') //seleciona o meu span que vai ser alterado toda vez que o jogador errar o número

const allowedKeys = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"] //teclas permitidas no input
let numbersPlayed = [] //armazena todos os números que o jogador já jogou

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
        listNumbersPlayed()
    }
    //se a vida máxima ficar zerada aparece um alerta e a página é recarregada
    if(maxHealth === 0){
        alert('Você perdeu')
        location.reload()
        input.value = ''
    }
}

//lista os números que o jogador já jogou 
function listNumbersPlayed(){
    const ul = document.getElementById('numbersPlayed') //seleciona minha lista
    const li = document.createElement('li') //cria um novo li para cada elemento
    const inputValue = input.value.trim() //remove espaços em branco antes e depois do valor do input

    // Verifica se o número já foi jogado
    if (numbersPlayed.includes(inputValue)) {
        alert('Você já inseriu esse número') //mostra um alerta se o número já foi jogado
        return //sai da função sem adicionar o número à lista
    }

    li.innerText = `${input.value}, ` //adiciona no texto de li o valor do meu input
    li.classList.add('flex-item')
    numbersPlayed.push(input.value) //adiciona números já jogados ao meu vetor
    ul.appendChild(li)
}

//captura o botão do meu formulário para o evento de submit
document.querySelector('form').addEventListener('submit', function(ev){
    ev.preventDefault() //impede o comportamento padrão do meu formulário
    //se o valor do input for diferente de vazio ele chama a minha função para verificar os valores
    if(input.value === ''){
        alert('Insira um valor válido')
    } else {
        checkNumber()
        remainingHealth()
    }
})