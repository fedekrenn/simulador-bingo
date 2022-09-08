function fiftennNumbersAleatory() {

    const arr = [];

    for (let i = 0; i < 15; i++) {
        const number = Math.floor(Math.random() * 100)

        isInArray = arr.includes(number)

        if (number == 100) {
            continue
        } else if (!isInArray) {
            arr.push(number)
        } else {
            i--
        }
    }
    return arr
}

function printNumbersInBoard() {

    const userboard = fiftennNumbersAleatory()
    const cpuBoard = fiftennNumbersAleatory()

    const user = document.getElementById('playerBoard')
    const cpu = document.getElementById('cpuBoard')

    for (let number of userboard) {
        user.innerHTML += `<div class="numero-contenedor__child">${number}</div>`
    }

    for (let number of cpuBoard) {
        cpu.innerHTML += `<div class="numero-contenedor__child">${number}</div>`
    }
}

printNumbersInBoard()