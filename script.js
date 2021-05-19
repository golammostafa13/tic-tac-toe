let letsStart = document.querySelector('#start');
let front = document.querySelector('#front');
let board = document.querySelector('#board');
let mainBoard = document.querySelector('.middle');
let squareBoxes = document.querySelectorAll('.square-box');
let playAgain = document.querySelector('#play-again');
let showWinner = document.querySelector('#show-winner');
let playerOne;
let playerTwo;
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let img1 = document.querySelector('#img-1');
let img2 = document.querySelector('#img-2');
let firstPlayers;
let firstPlayerImg;
let secondPlayers;
let secondPlayerImg;
let firstPart = document.querySelector('.first-part')
let lastPart = document.querySelector('.last-part')
let array = [];
let isDraw = true;
let cnt = 0;

for(let i = 0; i < 9; i++){
    array[i] = 'null';
}
    //first Player selection
function firstPlayerSelect(){
    firstPlayers = document.querySelectorAll('.boys-1');
    firstPlayerImg = document.querySelector('#player-1-img');

    for(let i = 0; i < firstPlayers.length; i++){
        let player = firstPlayers[i];
        player.addEventListener('click',()=>{
            firstPlayerImg.innerHTML="";
            let img = document.createElement('img');
            img.src = player.firstElementChild.src;
            img1.src = img.src;
            img.alt="player-1-img";
            firstPlayerImg.appendChild(img);
            playerOne = player.lastElementChild.innerHTML;
            firstPart.firstElementChild.innerHTML = playerOne + ' turns'
            player.firstElementChild.style.backgroundColor = '#7e0000';
        })
    }
}

    //second Player selection
function secondPlayerSelect(){
    secondPlayers = document.querySelectorAll('.boys-2');
    secondPlayerImg = document.querySelector('#player-2-img');

    // console.log(secondPlayers);
    for(let i = 0; i < secondPlayers.length; i++){
        let player = secondPlayers[i];
        player.addEventListener('click',()=>{
            secondPlayerImg.innerHTML="";
            let img = document.createElement('img');
            img.src = player.lastElementChild.src;
            img2.src = img.src;
            img.alt="player-2-img";
            secondPlayerImg.appendChild(img);
            playerTwo = player.firstElementChild.innerHTML;
            player.lastElementChild.style.backgroundColor = '#7e0000';
        })
    }
}
    //start the game
function clickToStartButton(){
    if(!firstPlayerImg.innerHTML || !secondPlayerImg.innerHTML){
        alert('Please select Player');
    }else{
        front.style.display = 'none';
        letsStart.style.display = 'none';
        board.style.display = 'flex';
        
        number1.innerHTML = '';
        number2.innerHTML = '';
        number1.innerHTML = playerOne;
        number2.innerHTML = playerTwo;
        startGame();
    }
}

function gameConstruct(playerSelect, cnt){
    for(let i = 0; i<squareBoxes.length; i++) {
        let square = squareBoxes[i];
        // console.log(square);
        square.addEventListener('click',(e)=>{
            e.preventDefault();
            let element = document.createElement('img');
    
            if(playerSelect && array[i]==='null') {
                element.src = img1.src;
                playerSelect = !playerSelect;
                array[i] = 'X';
                lastPart.firstElementChild.innerHTML = playerTwo + ' turns';
                firstPart.firstElementChild.innerHTML = '';
            }
            else if(array[i]==='null') {
                element.src = img2.src;
                array[i] = 'O'
                playerSelect = !playerSelect;
                lastPart.firstElementChild.innerHTML = '';
                firstPart.firstElementChild.innerHTML = playerOne + ' turns'
            }
            square.appendChild(element);
            result(array);
            cnt++;
            if(isDraw && cnt === 9){
                console.log('match is draw');
                showResult('');
            }
        })
    }
    
}
    // who win?
function result(array){
    // console.log(array[0], array[1], array[2]);
    if(array[0] !== 'null' && array[0] === array[1] && array[1] === array[2]){
        isDraw = false;
        if(array[0] === 'X'){
            showResult(img1.src);
        }
        else {
            showResult(img2.src);
        }
    }

    if(array[3] !== 'null' && array[3] === array[4] && array[4] === array[5]){
        isDraw = false;
        if(array[3] === 'X')
        showResult(img1.src);
        else conole.log(img2.src);
    }

    if(array[6] !== 'null' && array[6] === array[7] && array[7] === array[8]){
        isDraw = false;
        if(array[6] === 'X')
        showResult(img1.src);
        else showResult(img2.src);
    }

    if(array[0] !== 'null' && array[0] === array[3] && array[3] === array[6]){
        if(array[0] === 'X')
        showResult(img1.src);
        else showResult(img2.src);
    }

    if(array[1] !== 'null' && array[1] === array[4] && array[4] === array[7]){
        isDraw = false;
        if(array[1] === 'X')
            showResult(img1.src);
        else showResult(img2.src);
    }

    if(array[2] !== 'null' && array[2] === array[5] && array[5] === array[8]){
        isDraw = false;
        if(array[2] === 'X')
            showResult(img1.src);
        else showResult(img2.src);
    }

    if(array[0] !== 'null' && array[0] === array[4] && array[4] === array[8]){
        isDraw = false;
        if(array[0] === 'X')
            showResult(img1.src);
        else showResult(img2.src);
    }

    if(array[2] !== 'null' && array[2] === array[4] && array[4] === array[6]){
        isDraw = false;
        if(array[2] === 'X')
            showResult(img1.src);
        else showResult(img2.src);
    }
    
}

// front part gayeb;
let startGame = () =>{

    let playerSelect = true;
    gameConstruct(playerSelect, cnt);
        
}
function showResult(src){
    if(!src){
        showWinner.children[1].innerHTML = '';
        showWinner.children[1].innerHTML = 'MATCH DRAW';
    }
    else{
        showWinner.children[0].src = '';
        showWinner.children[0].src = src;
    }
    showWinner.style.display = 'flex'
}

firstPlayerSelect();
secondPlayerSelect();
letsStart.addEventListener('click', clickToStartButton);

    // play again 
playAgain.addEventListener('click', (e) =>{
    // e.preventDefault()
    front.style.display = 'none';
    letsStart.style.display = 'none';
    board.style.display = 'flex';
    location.reload();
})