import winningArrays from './WinningArrays.js';
import Cell from './Cell.js';

class Game {
    constructor(players=[1, 2], board=[], currentPlayer=players[0]) {
        this.players = players
        this.board = board
        this.currentPlayer = currentPlayer
    }

    chooseColumn(column) {
        for (let i=column+42; i>=0; i-=7) {
            if (!this.board[i].player) {
                this.claimCell(i);
                break
            } else {
                console.log("error else");
            }
        }
    }

    checkWin() {
        //some logic that checks if the game has been won
        for (let i = 0; i < winningArrays.length; i++) {
            const cell1 = this.board[winningArrays[i][0]]
            const cell2 = this.board[winningArrays[i][1]]
            const cell3 = this.board[winningArrays[i][2]]
            const cell4 = this.board[winningArrays[i][3]]

            // // check those squares to see if they all have the class of player-one
            if (cell1.player === 'player-1' &&
                cell2.player === 'player-1' &&
                cell3.player === 'player-1' &&
                cell4.player === 'player-1'
            ){
                // add winner useState to stop game?
                console.log("Player One Wins!");
            }
            // // check those squares to see if they all have the class of player-two
            if (cell1.player === 'player-2' &&
                cell2.player === 'player-2' &&
                cell3.player === 'player-2' &&
                cell4.player === 'player-2'
            ){
                // add winner useState to stop game?
                console.log("Player Two Wins!");
            }

        }
    }

    claimCell(id) {
        this.board[id].claim(this.currentPlayer)
    }

    changeCurrentPlayer() {
        if (this.currentPlayer === this.players[0]){
            this.currentPlayer = this.players[1];
        } else {
            this.currentPlayer = this.players[0];
        }
    }

    clone() {
      return new Game(this.players, this.board, this.currentPlayer)
    }

    takeTurn(column) {
        this.chooseColumn(column)
        this.checkWin()
        this.changeCurrentPlayer()
    }

    static newGame() {
        const game = new Game()
        this.board = []
        for (let i = 0; i < 49; i++){
            const cell = new Cell(i);
            game.board.push(cell)
        }
        return game
    }
}

export default Game;
