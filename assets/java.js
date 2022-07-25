
// * GetElements
const maintable = document.getElementById('maintable');
const cells = document.getElementsByTagName('td');
const button = document.getElementById('reset')
const info = document.getElementById('info')

// * Scoring
let playerstep = 0;
let cellsfull = 0;
let winstep = 0;
let tttmatrix = [
    ['','',''],
    ['','',''],
    ['','','']
];

// * Console help
function resetStat() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }

    button.style.display = 'none';
    info.innerText = '';
    playerstep = 0;
    cellsfull = 0;
    winstep = 0;
    tttmatrix = [
    ['','',''],
    ['','',''],
    ['','','']
    ];
}

function showStat() {
    console.log(playerstep);
    console.log(cellsfull);
    console.log(winstep);
}

// * Functions
function checkThree() {
    console.table(tttmatrix)

    if (tttmatrix[0][0] !== '' && tttmatrix[0][1] !== '' && tttmatrix[0][2] !== '') {
        console.log("in1");
        if (tttmatrix[0][0] === tttmatrix[0][1] && tttmatrix[0][1] === tttmatrix[0][2]) {
            info.innerText = `${tttmatrix[0][0]} player win the game`;
            button.style.display = 'block';
            winstep++;
        }
    }
    if (tttmatrix[1][0] !== '' && tttmatrix[1][1] !== '' && tttmatrix[1][2] !== '') {
        console.log("in2");
        if (tttmatrix[1][0] === tttmatrix[1][1] && tttmatrix[1][1] === tttmatrix[1][2]) {
            info.innerText = `${tttmatrix[1][0]} player win the game`;
            button.style.display = 'block';
            winstep++;
        }
    }
    if (tttmatrix[2][0] !== '' && tttmatrix[2][1] !== '' && tttmatrix[2][2] !== ''){
        console.log("in3");
        if (tttmatrix[2][0] === tttmatrix[2][1] && tttmatrix[2][1] === tttmatrix[2][2]) {
            info.innerText = `${tttmatrix[2][0]} player win the game`;
            button.style.display = 'block';
            winstep++;
        }

    }

    if (tttmatrix[0][0] !== '' && tttmatrix[1][1] !== '' && tttmatrix[2][2] !== ''){
        console.log('test1');
        console.log("in4");
        if (tttmatrix[0][0] === tttmatrix[1][1] && tttmatrix[1][1] === tttmatrix[2][2]) {
            info.innerText = `${tttmatrix[0][0]} player win the game`;
            button.style.display = 'block';
            console.log('test1.2');
            winstep++;
        }
    }
    if (tttmatrix[0][2] !== '' && tttmatrix[1][1] !== '' && tttmatrix[2][0] !== ''){
         console.log('test2');
         console.log("in5");
        if (tttmatrix[0][2] === tttmatrix[1][1] && tttmatrix[1][1] === tttmatrix[2][0]) {
            info.innerText = `${tttmatrix[0][2]} player win the game`;
            button.style.display = 'block';
            console.log('test2.2');
            winstep++;
        }
    }

    if (tttmatrix[0][0] !== '' && tttmatrix[0][1] !== '' && tttmatrix[0][2] !== ''){
        console.log("in6");
        if (tttmatrix[0][0] === tttmatrix[0][1] && tttmatrix[0][1] === tttmatrix[0][2]) {
        info.innerText = `${tttmatrix[0][0]} player win the game`;
        button.style.display = 'block';
        winstep++;
        }
    }
    if (tttmatrix[1][0] !== '' && tttmatrix[1][1] !== '' && tttmatrix[1][2] !== ''){
        console.log("in7");
        if (tttmatrix[1][0] === tttmatrix[1][1] && tttmatrix[1][1] === tttmatrix[1][2]) {
            info.innerText = `${tttmatrix[1][0]} player win the game`;
            button.style.display = 'block';
            winstep++;
        }
    }
    if (tttmatrix[2][0] !== '' && tttmatrix[2][1] !== '' && tttmatrix[2][2] !== ''){
        console.log("in8");
        if (tttmatrix[2][0] === tttmatrix[2][1] && tttmatrix[0][1] === tttmatrix[2][2]) {
            info.innerText = `${tttmatrix[2][0]} player win the game`;
            button.style.display = 'block';
            winstep++;
    }

    }
    if (tttmatrix[0][0] !== '' && tttmatrix[0][1] !== '' && tttmatrix[0][2] !== '' && tttmatrix[1][0] !== '' && tttmatrix[1][1] !== '' && tttmatrix[1][2] !== '' && tttmatrix[2][0] !== '' && tttmatrix[2][1] !== '' && tttmatrix[2][2] !== '' ) {
        info.innerText = `Draw`;
        console.log("indraw");
        winstep++;
    }

    if (winstep === 1) {
        return true;
    }
}

function Game() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            let cell = cells[i];

            if (winstep === 1) {
                button.style.display = "block";
                return;
            }

            if (playerstep === 0 && cell.innerText === '') {
                cell.innerText = 'X';
                playerstep++;
                cellsfull++;
            } else if (playerstep === 1 && cell.innerText === '') {
                cell.innerText = 'O';
                playerstep--;
                cellsfull++;
            }

            if (i < 3) {
                tttmatrix[0][i] = cell.innerText;
            } else if (i > 2 && i <= 5) {
                tttmatrix[1][i-3] = cell.innerText;
            } else if (i > 5) {
                tttmatrix[2][i-6] = cell.innerText;
            }

            if (cellsfull === 9) {
                console.warn('All cell is full!');
                console.table(tttmatrix);
                cellsfull++;
            }
            checkThree()
        })
    }
}
Game();