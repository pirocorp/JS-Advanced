function solve(moves) {
    const firstPlayerMark = 'X';
    const secondPlayerMark = 'O';
    let hasWinner = false;
    let firstPlayerTurn = true;

    const board = [
        [false, false, false], 
        [false, false, false], 
        [false, false, false]
    ];    

    for (let i = 0; i < moves.length; i++) {

        if(board.every(r => r.every(c => c))) {
            break;
        }

        let [x, y] = moves[i]
            .split(' ')
            .map(x => Number(x));

        if(!board[x][y]) {
            board[x][y] = firstPlayerTurn 
                ? firstPlayerMark 
                : secondPlayerMark;

            checkWinner();
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if(hasWinner) {
            break;
        }
        
        firstPlayerTurn = !firstPlayerTurn;
    }

    if(hasWinner) {
        const winner = firstPlayerTurn ? firstPlayerMark : secondPlayerMark;

        console.log(`Player ${winner} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(')
    }

    printBoard();

    function checkWinner() {
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            let target = row[0];
            
            if (target && row.every(x => x === target)){
                hasWinner = true;
                return;
            }

            target = board[0][i];

            if (target && board.every(r => r[i] === target)) {
                hasWinner = true;
                return;
            }
        }

        const main = board[0][0]
            && board[0][0] === board[1][1] 
            && board[1][1] === board[2][2];

        const second = board[0][2]
            && board[0][2] === board[1][1]
            && board[1][1] === board[2][0];

        if(main || second) {
            hasWinner = true;
        }
    }

    function printBoard() {
        board.forEach(r => console.log(r.join("\t")));
    }
};

/* solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
); */

/* solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
); */

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);