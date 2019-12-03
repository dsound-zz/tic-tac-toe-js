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

const clickFn = (event) => console.log(event);

const enableListeners = () =>  grid().forEach(qEl => qEl.addEventListener('click', clickFn()));
const disableListeners = () => grid().forEach(qEl => qEl.removeEventListener('click', clickFn()));

enableListeners();
     
