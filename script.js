const container = document.querySelector(".container");

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
            e.target.style.background = "lightblue";
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

function resetGrid(gridNumb){
    gridNumb = ""
    while (!(Number(gridNumb))){
        gridNumb = prompt("Grid Size ?");
        if (!(Number(gridNumb))) {
            alert("Incorrect data collected, please enter a number.");
        };
    };

    removeGrid();
    makeGrid(gridNumb);
};

reset.addEventListener("click", resetGrid);