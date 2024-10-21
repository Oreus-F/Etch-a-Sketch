const container = document.querySelector(".container");
const settings = document.querySelector(".settings");
const inputColor = document.querySelector("#colorMode");
const rainbowKeepButton = document.querySelector("#keepRainbowColor");
let allColumns;
let allCells;
let listenerVariable = "mouseover";
let action = selectedColorBrushMode;
let isMouseDown = false;
let darkMode = true;
let keepRainbowOption = true;


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

function hexToRGB(hex){
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return color = `rgb(${r}, ${g}, ${b})`;
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

    if (keepRainbowOption){
        if (darkMode) {
            if (event.target.classList.contains("colored")){
                if (event.target.style.opacity == 1) {
                    return;
                } else {
                    event.target.style.opacity -= "-0.2";
                };
            } else {
                event.target.classList.add("colored");
                event.target.style.opacity -= "-0.2";
                return style = event.target.style.backgroundColor = getRandomRGB();
            };
        } else {
            if (event.target.classList.contains("colored")) {
                return;
            } else {
                event.target.classList.add("colored");
                return style = event.target.style.backgroundColor = getRandomRGB();
            };
        };
    } else {
        if (darkMode) {
            if (event.target.style.opacity == 1) {
                return style = event.target.style.backgroundColor = getRandomRGB();
            } else {
                event.target.style.opacity -= "-0.2";
                return style = event.target.style.backgroundColor = getRandomRGB();
            };
        } else {
            return style = event.target.style.backgroundColor = getRandomRGB();
        };
    };
};

function selectedColorBrushMode(event){

    if (darkMode) {
        if (event.target.style.backgroundColor == hexToRGB(inputValueColor())) {
            if (event.target.style.opacity == 1) {
                return;
            } else {
                event.target.style.opacity -= "-0.2";
            };
        } else {
            event.target .style.opacity = "0.2";
            event.target.classList.remove("colored");
            return style = event.target.style.backgroundColor = inputValueColor();
        };
    } else {
        event.target.classList.remove("colored");
        return style = event.target.style.backgroundColor = inputValueColor();
    };  
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
        clearAll();
        darkMode = false;
    } else {
        clearAll();
        darkMode = true;
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

        case "darkerMode":
            DarkerMode();
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
                });
                action = rainbowBrushMode;
                allCells.forEach((cell) => {
                    cell.addEventListener(listenerVariable, action);
                    });
            };
            break; 
        
        case "keepRainbowColor":
            if (keepRainbowOption){
                keepRainbowOption = false;
                rainbowKeepButton.textContent = "Keep Rainbow Color : OFF";
            } else {
                keepRainbowOption = true;
                rainbowKeepButton.textContent = "Keep Rainbow Color : ON";
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

//Listener for explanation
settings.addEventListener("mouseover", (e) => {
    let target = e.target;
    const helpMeBox = document.querySelector("#settingsExplained");

    switch(target.id){

        case "newGrid":
            helpMeBox.textContent = "Enter a number to create a new grid between 2x2 and 100x100";
    };
});



document.addEventListener("mouseup", stopDraw)
document.addEventListener("DOMContentLoaded", () => makeGrid(16));

