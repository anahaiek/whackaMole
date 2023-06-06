let currMoleTile;
let currPlantTile;
let currPlantTile2;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html - configura a grade para o tabuleiro do jogo em html
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile); //adiciona o evento de click com o mouse
        document.getElementById("board").appendChild(tile);
    }  
    
    setInterval(setMole, 2000); //2000 miliseconds = 2 seconds
    setInterval(setPlant, 3000); //3000 milisecond = 3 seconds
    setInterval(setPlant2,3000);
}

function getRandomTile() {
    // math.random --> (0-1)*9 = (0-9) -> round down to (0-8) -Cria um número aleatório entre (0 e 1) * 9 = (0-9) arredonda para baixo (0-8)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole(){

    if (gameOver) {
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./img/monty-mole.png";

    let num = getRandomTile();

    if(currPlantTile && currPlantTile.id == num) {
        return;
    }
    if(currPlantTile2 && currPlantTile2.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {

    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./img/piranha-plant.png";

    let num = getRandomTile();
    
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}


function setPlant2() {

    if (gameOver) {
        return;
    }

    if (currPlantTile2) {
        currPlantTile2.innerHTML = "";
    }

    let plant2 = document.createElement("img");
    plant2.src = "./img/piranha-plant.png";

    let num = getRandomTile();
    
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    if(currPlantTile && currPlantTile.id == num) {
        return;
    }
    currPlantTile2 = document.getElementById(num);
    currPlantTile2.appendChild(plant2);
}

function selectTile() {
    if (gameOver) {
    return;
}
    if(this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }

    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}