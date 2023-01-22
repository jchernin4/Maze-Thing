const mazeArr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 0, 2, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 1, 1, 1, 1, 1, 0,
    1, 0, 0, 0, 0, 0, 3, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 0,
];

const rowsX = 8;
const columnsY = 9;
const origPlayerLoc = getPlayerLoc();
const origGoalLoc = getGoalLoc();
let curPlayerLoc = origPlayerLoc;

if (origPlayerLoc[1] < 2 || origGoalLoc[1] < 2) {
    return console.log("You cannot currently place the player or goal with y val < 2");
}

move("up");
move("down");
move("left");
move("right");

function getPlayerLoc() {
    console.log("-----------------------------");
    let temp = getCoordsFromIndex(mazeArr.indexOf(2));
    console.log(mazeArr.indexOf(2));
    console.log(temp);
    console.log(getIndexFromCoords(temp[0], temp[1]));
    console.log("-----------------------------");
    return getCoordsFromIndex(mazeArr.indexOf(2));
}
function getGoalLoc() {
    return getCoordsFromIndex(mazeArr.indexOf(3));
}

function move(direction) {
    let changeToIndex;
    if (direction == "up") {
        changeToIndex = getIndexFromCoords(curPlayerLoc[0], curPlayerLoc[1] - 1);
        console.log(changeToIndex)
        if (curPlayerLoc[1] > 0 && mazeArr[changeToIndex] != -1 && mazeArr[changeToIndex] != 1) {
            console.log("OK up");
        }
    } else if (direction == "down") {
        changeToIndex = getIndexFromCoords(curPlayerLoc[0], curPlayerLoc[1] + 1);
        if (curPlayerLoc[1] < rowsX - 1 && mazeArr[changeToIndex] != -1 && mazeArr[changeToIndex] != 1) {
            console.log("OK down");
        }
    } else if (direction == "left") {
        changeToIndex = getIndexFromCoords(curPlayerLoc[0] - 1, curPlayerLoc[1]);
        if (curPlayerLoc[0] > 0 && mazeArr[changeToIndex] != -1 && mazeArr[changeToIndex] != 1) {
            console.log("OK left");
        }
    } else if (direction == "right") {
        changeToIndex = getIndexFromCoords(curPlayerLoc[0] + 1, curPlayerLoc[1]);
        console.log(getIndexFromCoords(curPlayerLoc[0] + 1, curPlayerLoc[1]))
        //console.log(mazeArr[changeToIndex])
        if (curPlayerLoc[0] < columnsY - 1 && mazeArr[changeToIndex] != -1 && mazeArr[changeToIndex] != 1) {
            console.log("OK right");
        }
    } else {
        console.error(`Invalid direction "${direction}" given.`);
    }
}

function getIndexFromCoords(x, y) {
    let index = columnsY / y;
    index = index + x;
    console.log("x = " + x + " y = " + y + " index = " + index);
    return index;
}

function getCoordsFromIndex(index) {
    let x = Math.floor(index % columnsY);
    let y = Math.floor(index / columnsY);

    //console.log("Index % columnsY = " + x);
    //console.log("Index / columnsY = " + y);

    return [x, y];
}