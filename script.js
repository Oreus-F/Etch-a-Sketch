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
            let activeCell = window.getComputedStyle(e.target);
            let opacityCell = activeCell.getPropertyValue("opacity");
            opacityCell = Number(opacityCell);
            if (opacityCell < 1){
                opacityCell += 0.1;
                e.target.style.opacity = opacityCell;
                e.target.style.backgroundColor = getRandomRGB();
            };
        });
    });

};

makeGrid(16);



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


function newGrid(){
    let gridNumb = getGridNumb();
    removeGrid();
    makeGrid(gridNumb);
};


function clearAll(){
    const allCells = document.querySelectorAll(".gridRow");
    allCells.forEach((element) =>{
        element.removeAttribute("style");
    });
};


newButton = document.querySelector(".newGrid");
clearButton = document.querySelector(".clearAll");

newButton.addEventListener("click", newGrid);
clearButton.addEventListener("click", clearAll);


