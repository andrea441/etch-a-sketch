# Etch-A-Sketch
This Etch-A-Sketch project is a browser-based drawing board built as part of The Odin Project curriculum. This project demonstrates fundamental skills in web development, specifically focusing on DOM manipulation and dynamic grid generation.

## Live Demo
Check out the live version of the project here: **[Etch-A-Sketch Live Demo](https://andrea441.github.io/etch-a-sketch/)**

## Description
This project is a practice exercise to test and build competency in:
* Creating a dynamic grid that users can interact with using their mouse.
* Implementing JavaScript logic to manipulate DOM elements in real-time.
* Using CSS Flexbox to create a responsive drawing area.
* Adding interactive features like random color generation and progressive opacity.

## Technologies Used
* **HTML5**: Used for the basic structure of the application, including a control panel and the grid container.
* **CSS3**: Used for styling and layout. Key concepts applied include:
* **Flexbox**: Used to align the layout and manage the grid squares (`display: flex`, `flex-wrap: wrap`).
* **CSS Variables**: Utilized to dynamically adjust the grid size through the `--size` property.
* **Visual Design**: Applied a specific color palette (`#415a77`, `#e0e1dd`) and a red border for the grid container to mimic a classic Etch-A-Sketch toy.
* **JavaScript (ES6)**: Used for the application logic, including:
* **Event Listeners**: Handling `mouseover` for drawing and `click` for button controls.
* **Dynamic Style Manipulation**: Increasing cell opacity by 10% each time it is hovered and generating random RGB values.

## How to Use
1. **View Online**: Simply click the [Live Demo](https://andrea441.github.io/etch-a-sketch/) link to browse the website.
2. **Run Locally**:
* Clone this repository to your local machine.
* Navigate to the project folder.
* Open `index.html` in your preferred web browser.
3. **Drawing**: Hover your mouse over the grid to start drawing.
4. **Settings**: Use the "Change Grid Size" button to resize the canvas (between 1 and 100) or use the "Restart" button to clear the board.

## Acknowledgements
* Project curriculum and design specification provided by [The Odin Project](https://www.theodinproject.com/).