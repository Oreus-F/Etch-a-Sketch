const container = document.querySelector(".container");
const settings = document.querySelector(".settings");
let allColumns;
let allCells;
let listenerVariable = "mouseover";
let action = selectedColorBrushMode;


function removeGrid(){
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

function makeGrid(gridNumb){
    for (let i = 0; i < gridNumb; i++){
        const column = document.createElement("div");
        container.appendChild(column).setAttribute("class", "gridColumn");
    };
    let allColumns = document.querySelectorAll(".gridColumn");

    allColumns.forEach((column) => {
        for (let j= 0; j< gridNumb; j++) {
            const cell = document.createElement("div");
            column.appendChild(cell).setAttribute("class", "gridRow");
        };
    });

    allCells = document.querySelectorAll(".gridRow");
    allCells.forEach((cell) => {
        cell.addEventListener(listenerVariable, action);
    });
};

function newGrid(){
    let gridNumb = getGridNumb();
    removeGrid();
    makeGrid(gridNumb);
};

function clearAll(){
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

function eraserBrushMode(event){
    event.target.removeAttribute("style");
};

function rainbowBrushMode(event){
    event.target.style.backgroundColor = getRandomRGB()
};

//NEED OPTION TO CHOOSE COLOR NOW ITS JUST BLACK
function selectedColorBrushMode(event){
    event.target.style.backgroundColor = "black";
};



//Listener for all settings panel
settings.addEventListener("click", (e) => {
    let target = e.target;
    allColumns = document.querySelectorAll(".gridColumn");
    allCells = document.querySelectorAll(".gridRow");

    switch(target.id){

        case "newGrid":
            newGrid();
            break;

        case "clearAll":
            clearAll();
            break;

        case "colorMode":
            if (action === selectedColorBrushMode) {
                break;
            } else {
                allCells.forEach((cell) => {
                    cell.removeEventListener(listenerVariable, action);
                });
                allCells.forEach((cell) => {
                    action = selectedColorBrushMode;
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break; 

        case "rainbowMode":
            if (action === rainbowBrushMode) {
                break;
            } else {
                allCells.forEach((cell) => {
                    cell.removeEventListener(listenerVariable, action);
                });
                allCells.forEach((cell) => {
                    action = rainbowBrushMode;
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break; 
        
        case "eraserMode":
            if (action === eraserBrushMode) {
                break;
            } else {
                allCells.forEach((cell) => {
                    cell.removeEventListener(listenerVariable, action);
                });
                allCells.forEach((cell) => {
                    action = eraserBrushMode;
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break;                

        case "mouseover":
            if (listenerVariable === "mouseover") {
                break;
            } else {
                allCells.forEach((cell) => {
                    cell.removeEventListener(listenerVariable, action);
                });
                allCells.forEach((cell) => {
                    listenerVariable = "mouseover";
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break; 
            
        case "click":
            if (listenerVariable === "click") {
                break;
            } else {
                allCells.forEach((cell) => {
                    cell.removeEventListener(listenerVariable, action);
                });
                allCells.forEach((cell) => {
                    listenerVariable = "click";
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break; 

    };
}); 


makeGrid(16);

