const grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('cell');
    grid.appendChild(square);
}