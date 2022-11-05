/******************************************************************************
 *         Name: tic-tac-toe.js
 *       Author: Chad Chapman
 * Date Created: November 3, 2022
 *  Description: Functions that support implementation of Tic Tac Toe game.
******************************************************************************/


    
let gameInstance = {
    gameBoard: [["-", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"]],
                
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
        for(let i = 0; i < this.gameBoard.length; i++) {
            for(let j = 0; j < this.gameBoard[i].length; j++) {
                $(`#row${i}-col${j}`).text(`${i}${j}`);
                console.log(`${i}${j}`);
                console.log(this.gameBoard[i][j]);
            }
        }

        // Add effects
        $(this.gameButtonContainer).effect( "bounce", {times:3}, 300 );
        $(this.$button).prop("disabled", true);
    },

};

gameInstance.init();



const player = (symbol) => {
    
}

