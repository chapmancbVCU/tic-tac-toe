/******************************************************************************
 *         Name: tic-tac-toe.js
 *       Author: Chad Chapman
 * Date Created: November 3, 2022
 *  Description: Functions that support implementation of Tic Tac Toe game.
******************************************************************************/
    
let game = {
    gameBoard: [],
    
    init: function() {
        this.cacheDOM();
        this.bindEvents();
    },

    bindEvents: function() {
        this.$button.on('click', this.setInitialGameState.bind(this));
    },
    cacheDOM: function () {
        this.$el = $("#game");
        this.$button = this.$el.find("#start-game");
        this.gameButtonContainer = this.$el.find(".game-button-container");
    },

    
    setInitialGameState: function() {
        const row = 3;
        const col = 3;
        for(let i = 0; i < row; i++) {
            this.gameBoard[i] = [];
            for(let j = 0; j < col; j++) {
                this.gameBoard[i][j] = gameCube(`${i}${j}`);
                $(`#${i}${j}`).text(this.gameBoard[i][j].getCoordinates());
                console.log(this.gameBoard[i][j].getCoordinates());
            }
        }

        // Add effects
        $(this.gameButtonContainer).effect( "bounce", {times:3}, 300 );
        $(this.$button).prop("disabled", true);
    },
};

game.init();

const gameCube = (coordinates) => {
    const getCoordinates = () => {
        return coordinates;
    }

    return {getCoordinates }
};

const player = (symbol) => {
    let playerTurn = false;

    /**
     * This function reports whether or not it is the player's turn.
     * @returns A boolean value, true if it is the player's turn and false if
     * it is not the player's turn to play.
     */
    const getPlayerTurn = () => {
        return playerTurn;
    }

    /**
     * Use to set if it is player's turn.  Boolean values is only accepted.  If
     * a bad value is entered a messages is written to the console.
     * @param {boolean} newTurn 
     */
    const setPlayerTurn = (newTurn) => {
        if(typeof newTurn == "boolean") {
            playerTurn = newTurn;
        } else {
            console.log("Value not boolean");
        }
    }
    return {
        getGameStatus, getPlayerTurn, setPlayerTurn
    };  
};

