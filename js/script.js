{    
const getMoveName = function(argMoveId) {
    if(argMoveId === 1) {
    return 'kamień';
    } 
    if(argMoveId === 2) {
    return 'papier';
    } 
    if(argMoveId === 3) {
    return 'nożyce';
    } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
}    
const displayResult = function(argComputerMove,argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove)
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
    }
    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
    }
    if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
    }
    if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!');
    }
    if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!');
    }
    if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!');
    }
    if(argComputerMove == argPlayerMove) {
    printMessage('Remis!')
    }
}
const playGame = function(argPlayerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const argComputerMove = getMoveName(randomNumber); 

    printMessage('Mój ruch to: ' + argComputerMove);

    const argPlayerMove = getMoveName(argPlayerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);    
}


document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});
}
