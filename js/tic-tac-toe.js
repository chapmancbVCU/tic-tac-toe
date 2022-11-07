/******************************************************************************
 *         Name: tic-tac-toe.js
 *       Author: Chad Chapman
 * Date Created: November 3, 2022
 *  Description: Functions that support implementation of Tic Tac Toe game.
******************************************************************************/
    
let game = {
    /*gameBoard: [["-", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"]],
     */
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
    let gameStatus = "START"; 
    let playerTurn = false;

    const getGameStatus = () => {
        return gameStatus;
    }
    const getPlayerTurn = () => {
        return playerTurn;
    }
    const setPlayerTurn = (newTurn) => {
        playerTurn = newTurn;
    }
    return {
        getGameStatus, getPlayerTurn, setPlayerTurn
    };  
};

