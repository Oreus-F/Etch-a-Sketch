const container = document.querySelector(".container");


function getRandomRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;  
};

function makeGrid(gridNumb){
    for (let i = 0; i < gridNumb; i++){
        const column = document.createElement("div");
        container.appendChild(column).setAttribute("class", "gridColumn");
    };
    const allColumns = document.querySelectorAll(".gridColumn");

    allColumns.forEach((column) => {
        for (let j= 0; j< gridNumb; j++) {
            const cell = document.createElement("div");
            column.appendChild(cell).setAttribute("class", "gridRow");
        };
    });
    const allCells = document.querySelectorAll(".gridRow");
    allCells.forEach((cell) => {
        cell.addEventListener("mouseover", function(e) {
            e.target.style.background = getRandomRGB();
        });
    });

};

makeGrid(16);

const upperSection = document.querySelector(".upperSection");
const reset = document.createElement("button");
upperSection.appendChild(reset);
reset.textContent = "RESET GRID";

function removeGrid(){
    const allColumns = document.querySelectorAll(".gridColumn");
    allColumns.forEach((column) => {
        column.remove();
    });
};


function getGridNumb(){
    let gridNumb = "";
    while (!(Number(gridNumb > 1 && gridNumb < 100))){
        gridNumb = prompt("Grid size ?");
        if (!(Number(gridNumb > 1 && gridNumb < 100))){ 
            alert("Only a number between 2 and 100 are allowed.");
        };
    };
    return gridNumb;
};


function resetGrid(gridNumb){
    gridNumb = getGridNumb();
    removeGrid();
    makeGrid(gridNumb);
};

reset.addEventListener("click", resetGrid);

