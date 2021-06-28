let x = true;

const cells = document.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {

    const cell = cells[i];
    cell.onClick = (event) => {
        if (event.target.innerHTML == "") {
        event.target.innerHTML =
            (x && `<span class="x">X</span>`) || `<span class="o">O</span>`;
            x != x
        }
    };
}








// const winCombinations = [
//     [0, 1, 2, 3],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11],
//     [12, 13, 14, 15],
//     [0, 4, 8, 12],
//     [1, 5, 9, 13],
//     [2, 6, 10, 14],
//     [3, 7, 11, 15],
//     [0, 5, 10, 15],
//     [3, 6, 9, 12]
// ];

// const checkVariant = (a, b, c, d) => {
//     if (
//         cells[a].innerHTML != "" &&
//         cells[a].innerHTML == cells[b].innerHTML &&
//         cells[a].innerHTML == cells[c].innerHTML &&
//         cells[a].innerHTML == cells[d].innerHTML
//     ) {
//         return cells[0].children[0].innerHTML;
//     } else return false;
// };

// const checkWinner = () => {
//     let isWin = checkVariant(0, 1, 2, 3, 4);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(4, 5, 6, 7);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(8, 9, 10, 11);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(12, 13, 14, 15);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(0, 4, 8, 12);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(1, 5, 9, 13);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(2, 6, 10, 14);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(3, 7, 11, 15);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(0, 5, 10, 15);
//     if (isWin != false) return isWin;

//     isWin = checkVariant(3, 6, 9, 12);
//     if (isWin != false) return isWin;
// };



