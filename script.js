const grid = document.querySelector('#grid');
const sizeButton = document.querySelector('#size');

function drawGrid(size = 16) {
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
        e.target.classList.add('colored');
    }
})

sizeButton.addEventListener('click', () => {
    const input = +prompt('Choose the new grid size: ');
    if (Number.isInteger(input) && input > 0 && input <= 100) {
        drawGrid(input);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
})

drawGrid();