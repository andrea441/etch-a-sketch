function drawGrid(size) {
    grid.textContent = '';

    grid.style.setProperty('--size', size);

    totalSquares = size ** 2;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('cell');
        grid.appendChild(square);
    }
}

// Select the grid container
const grid = document.querySelector('#grid');

// Create the grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('cell');
    grid.appendChild(square);
}

// Add functionality to the cells
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('colored');
    });
})

// Add functionality to the button
const sizeBtn = document.querySelector('#size');
sizeBtn.addEventListener('click', () => {
    size = prompt('Choose the new grid size: ');
    drawGrid(size);
})