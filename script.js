const userboard = document.getElementById('playerBoard')
const cpuBoard = document.getElementById('cpuBoard')
const totalNumbers = document.getElementById('totalNumbers')
const numberDraw = document.getElementById('numberDraw')
const automaticBtn = document.getElementById('automatica')

const userNumbers = fifteenRandomNumbers()
const cpuNumbers = fifteenRandomNumbers()

let userAcerts = 0
let cpuAcerts = 0

// Creo el array con todos los numeros del 1 al 99, ya que son las bolas que pueden salir
const balls = []
for (let i = 1; i < 100; i++) {
    balls.push(i)
}

for (let i = 0; i < userNumbers.length; i++) {
    userboard.innerHTML += `<div class="numero-contenedor__child" id='userNum${i}'>${userNumbers[i]}</div>`
}

for (let i = 0; i < cpuNumbers.length; i++) {
    cpuBoard.innerHTML += `<div class="numero-contenedor__child" id='cpuNum${i}'>${cpuNumbers[i]}</div>`
}


numberDraw.addEventListener('click', randomNumberDraw)

automaticBtn.addEventListener('click', () => {
    alert('Automatico activado!')
    automaticBtn.style.display = 'none'
    const div = document.getElementsByClassName('jugada-automatica')
    div[0].style.height = '10vh'
    automaticInterval = setInterval(randomNumberDraw, 300)
})


function randomNumberDraw() {
    const randomNumber = balls[Math.floor(Math.random() * balls.length)]
    balls.splice(balls.indexOf(randomNumber), 1)
    console.log(balls)

    numberDraw.innerText = randomNumber

    totalNumbers.innerHTML += `<div class="numero-obtenido">${randomNumber}</div>`

    if (userNumbers.includes(randomNumber)) {
        document.getElementById(`userNum${userNumbers.indexOf(randomNumber)}`).style.backgroundColor = 'green'
        userAcerts++
    }

    if (cpuNumbers.includes(randomNumber)) {
        document.getElementById(`cpuNum${cpuNumbers.indexOf(randomNumber)}`).style.backgroundColor = 'red'
        cpuAcerts++
    }

    checkWinner()

    if (balls.length === 0) {
        alert('No quedan mas bolas!')
        document.getElementById('numberDraw').style.display = 'none'
    }
}

function checkWinner() {
    if (userAcerts === 15) {
        document.getElementById('numberDraw').style.display = 'none'
        alert(`Ganaste!, quedaron en el bolillero ${balls.length} bolas`)
        clearInterval(automaticInterval)
    } else if (cpuAcerts === 15) {
        document.getElementById('numberDraw').style.display = 'none'
        alert(`Perdiste, la ganadora es la CPU! Quedaron en el bolillero ${balls.length} bolas`)
        clearInterval(automaticInterval)
    }
}

function fifteenRandomNumbers() {

    const arr = [];

    for (let i = 0; i < 15; i++) {
        const randomNumber = Math.floor(Math.random() * 100)

        isInArray = arr.includes(randomNumber)

        if (randomNumber == 100 || randomNumber == 0) {
            i-- // Si bien no lo agrega al array por el continue, con el i-- "vuelvo" un ciclo, ya que si no lo pierdo y quedo con menos de 15
            continue
        } else if (!isInArray) {
            arr.push(randomNumber)
        } else {
            i--
        }
    }

    return arr
}