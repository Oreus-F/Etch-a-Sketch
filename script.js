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


makeGrid(80);