const userboard = document.getElementById('playerBoard')
const cpuBoard = document.getElementById('cpuBoard')
const totalNumbers = document.getElementById('totalNumbers')
const numberDraw = document.getElementById('numberDraw')

const userNumbers = fifteenRandomNumbers()
const cpuNumbers = fifteenRandomNumbers()

for (let number of userNumbers) {
    userboard.innerHTML += `<div class="numero-contenedor__child">${number}</div>`
}

for (let number of cpuNumbers) {
    cpuBoard.innerHTML += `<div class="numero-contenedor__child">${number}</div>`
}

numberDraw.addEventListener('click', randomNumberDraw)
randomNumberDraw()



function randomNumberDraw() {

    const randomNumber = Math.floor(Math.random() * 100)

    numberDraw.innerText = randomNumber

    totalNumbers.innerHTML += `<div class="numero-obtenido">${randomNumber}</div>`
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