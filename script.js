const container = document.querySelector(".container");
const settings = document.querySelector(".settings");
const inputColor = document.querySelector("#colorMode");
let allColumns;
let allCells;
let listenerVariable = "mouseover";
let action = selectedColorBrushMode;
let isMouseDown = false;
let darkMode = false;


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
            cell.addEventListener(listenerVariable, action);
            cell.addEventListener("mousedown", startDraw);
            cell.addEventListener("mouseover", draw);
        };
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
        element.classList.remove("colored");
    });
};

function getRandomRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;  
};

function inputValueColor(){
    inputColor.addEventListener("change", (e) => {
        return inputColor.value;
    });
    return inputColor.value;
};

function eraserBrushMode(event){
    event.target.classList.remove("colored");
    event.target.removeAttribute("style");
};

function rainbowBrushMode(event){
    if (event.target.classList.contains("colored")) {
        return;
    } else {
        event.target.classList.add("colored");
        return style = event.target.style.backgroundColor = getRandomRGB();
};
};


function selectedColorBrushMode(event){
    event.target.classList.remove("colored");
    return style = event.target.style.backgroundColor = inputValueColor();
};

function startDraw(){
    isMouseDown = true;
};

function draw(event){
    if (isMouseDown === true){
        action(event);
    };
};

function stopDraw(){
    isMouseDown = false;
};

function DarkerMode(){
    if (darkMode) {
        darkMode = false;
        console.log(darkMode);
    } else {
        darkMode = true;
        console.log(darkMode);
    };
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
                action = selectedColorBrushMode;
                allCells.forEach((cell) => {
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
                    cell.removeEventListener("mousedown", startDraw);
                    cell.removeEventListener("mouseover", draw);
                });
                action = rainbowBrushMode;
                allCells.forEach((cell) => {
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
                action = eraserBrushMode;
                allCells.forEach((cell) => {
                    cell.addEventListener(listenerVariable, action);
                    });
                };
                break;                

        case "darkerMode":
            DarkerMode();
            break;

        case "mouseover":
            if (listenerVariable === "mouseover") {
                break;
            } else {
                allCells.forEach((cell) => {
                    listenerVariable = "mousedown";
                    cell.removeEventListener(listenerVariable, action);
                    cell.removeEventListener("mousedown", startDraw);
                    cell.removeEventListener("mouseover", draw);
                    listenerVariable = "mouseover";
                    cell.addEventListener(listenerVariable, action);
                });
            };
            break; 
            
        case "click":
            if (listenerVariable === "mousedown") {
                break;
            } else {
                allCells.forEach((cell) => {
                    listenerVariable = "mouseover";
                    cell.removeEventListener(listenerVariable, action);
                    listenerVariable = "mousedown";
                    cell.addEventListener(listenerVariable, action);
                    cell.addEventListener("mousedown", startDraw);
                    cell.addEventListener("mouseover", draw);

                });
                };
            break; 

    };
}); 

console.log(darkMode);

document.addEventListener("mouseup", stopDraw)
document.addEventListener("DOMContentLoaded", () => makeGrid(16));

