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

};


function removeGrid(){
    const allColumns = document.querySelectorAll(".gridColumn");
    allColumns.forEach((column) => {
        column.remove();
    });
};


function getGridNumb(){
    let gridNumb = "";
    while (!(Number(gridNumb > 1 && gridNumb <= 100))){
        gridNumb = prompt("Grid size ?");
        if (!(Number(gridNumb > 1 && gridNumb <= 100))){ 
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

function getRandomRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;  
};


makeGrid(16);

// OK COMMENT CA MARCHE PUTAIN

const allCells = document.querySelectorAll(".gridRow");
allCells.forEach((cell) => {
    cell.addEventListener(("mousedown"), (e) => {
        e.target.style.backgroundColor = "black";
    });
});


const settings = document.querySelector(".settings");


//Listener for all settings panel
settings.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){

        case "newGrid":
            newGrid();
            break;

        case "clearAll":
            clearAll();
            break;

        case "colorMode":
            console.log("Choisi ta couleur rené");
            break;

        case "rainbowMode":
            console.log("LES COULEURS SA MERE");
            break;
        
        case "eraserMode":
            console.log("Oops misktakes are made");
            break;

        case "mouseover":
            console.log("Oui passe au dessus avec ta souris !");
            break;
        
        case "click":
            console.log("VAS Y CLICK BATAAAAARD");
            break;

    };
}); 


