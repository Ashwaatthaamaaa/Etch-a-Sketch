const body = document.querySelector('body');

function createGrid(size) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');
    
    const fragment = document.createDocumentFragment(); // Create a document fragment to hold grid elements
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            //div.classList.add('grids');
            //div.textContent = i * size + j + 1; // Assigning unique numbers to each square
            fragment.appendChild(div);
        }
    }
    
    gridContainer.appendChild(fragment); // Append all grid elements at once
    
    const flexBasisValue = (100 / size) + "%";
    const grids = Array.from(gridContainer.querySelectorAll('.grids'));
    grids.forEach(grid => grid.style.flexBasis = flexBasisValue);

    body.appendChild(gridContainer);
    pen(); // Attach mouseover event listeners to grids
}

function pen() {
    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'blue';
        });
    });
}

// Initial grid creation
createGrid(16);

// Event listener for changing grid size
const changeButton = document.querySelector(".btn");
changeButton.addEventListener('click', () => {
    const newSize = Number(prompt("Number of Squares?"));
    while (newSize>=100){
        const newSize = Number(prompt("Number of Squares?"));
    }
    const gridContainer = document.querySelector('.grid');
    gridContainer.remove();
    createGrid(newSize);
});

