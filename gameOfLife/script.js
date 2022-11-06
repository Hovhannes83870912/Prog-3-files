// let matrix  = [
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,2,0,0,2,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,3,0,0,0,0],
//     [0,0,0,0,2,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,1,0,0,0,0],
//     [0,0,0,0,0,3,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ]
let matrix = [];
var grasses = [];
var grassEaterArr = [];
var Something = [];
var PredatorArr = [];
var BombArr = [];
var side = 30
function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, somethingCount, predatorCount) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < somethingCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < predatorCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 5;
        }
    }
    matrixGenerator(10, 2, 2, 2, 6)

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grassObject = new Grass(x, y);
                grasses.push(grassObject)
            }
            else if (matrix[y][x] == 2) {
                let grassEaterObject = new GrassEater(x, y);
                grassEaterArr.push(grassEaterObject)
            }
            else if (matrix[y][x] == 3) {
                let newSomething = new Lie(x, y);
                Something.push(newSomething)
            }
            else if (matrix[y][x] == 5) {
                let newPredator = new Predator(x, y);
                PredatorArr.push(newPredator)
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac');
    var bomb = new Bomb(matrix.length + 1, matrix.length + 1)
    BombArr.push(bomb)
    console.log(BombArr);
}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#00ab41");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill("#000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (let i in grasses) {
        grasses[i].mul();
    }
    for (let i in BombArr) {
        BombArr[i].fall();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in Something) {
        Something[i].move();
    }
    for (let i in PredatorArr) {
        PredatorArr[i].eat();
    }
}



