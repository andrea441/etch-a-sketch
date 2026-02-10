let currentSize = 16;

const grid = document.querySelector('#grid');
const sizeButton = document.querySelector('#size');
const restartButton = document.querySelector('#restart');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return `rgb(${getRandomInt(0, 255)} ${getRandomInt(0, 255)} ${getRandomInt(0, 255)})`
}

function drawGrid(size = currentSize) {
    grid.textContent = '';

    grid.style.setProperty('--size', size);

    const totalSquares = size ** 2;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        grid.appendChild(square);
    }
}

grid.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('cell')) {
        const cell = e.target;
        if (cell.classList.contains('colored') && Number(cell.style.opacity) < 1) {
             cell.style.opacity = Number(cell.style.opacity) + 0.1;
        }
        else if (!cell.classList.contains('colored')) {
            cell.style.backgroundColor = getRandomColor();
            cell.style.opacity = 0.1;
            cell.classList.add('colored');
        }
    }
})

sizeButton.addEventListener('click', () => {
    const input = +prompt('Choose the new grid size: ');
    if (Number.isInteger(input) && input > 0 && input <= 100) {
        currentSize = input;
        drawGrid();
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
})

restartButton.addEventListener('click', () => {
    drawGrid();
})

drawGrid();