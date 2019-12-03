const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6], 
    [0,3,6], 
    [1,4,7],
    [2,5,6]
];

const grid = () => Array.from(document.getElementsByClassName('q'));
const qNumId = (qEl) => Number.parseInt(qEl.id.replace('q', '')); 
const emptyQs = () => grid().filter(qEl => qEl.innerText === '');
const allSame = (arr) => arr.every(qEl => qEl.innerText === arr[0].innerText && qEl.innerText !== '');

const takeTurn = (index, letter) => grid()[index].innerText = letter;
const opponentChoice = () => qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)]);

const endGame = (winningSequence) => { console.log('Game Over!', winningSequence)  };

const checkForVictory = () => {
    let victory = false;
    winningCombos.forEach(combo => {
        const _grid = grid();
        const sequence = [_grid[combo[0]], _grid[combo[1]], _grid[combo[2]]];
        if(allSame(sequence)) {
            victory = true; 
            endGame();
        }
    });
    return victory; 
};

const opponentTurn = () => {
    disableListeners(); 
    setTimeout(() => {
        takeTurn(opponentChoice(), 'O');
        if(!checkForVictory());
        enableListeners();
    }, 1000);
    debugger
};

const clickFn = (event) => {
    takeTurn(qNumId(event.target), 'X');
    if(!checkForVictory());
    opponentTurn();
};



const enableListeners = () =>  grid().forEach(qEl => qEl.addEventListener('click', () => clickFn(event)));
const disableListeners = () => grid().forEach(qEl => qEl.removeEventListener('click', () => clickFn(event)));

enableListeners();
     
