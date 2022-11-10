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
                this.gameBoard[i][j] = gameCube(`${i}${j}`, this.$el.find(`#${i}${j}`));
                $(`#${i}${j}`).text(this.gameBoard[i][j].getCoordinates());
                console.log(this.gameBoard[i][j].getCoordinates());
                //this.$findCubeID = this.gameBoard[i][j].getCubeID();
                //this.gameBoard[i][j].setMark('x');
                //this.$findCubeID.on('click', this.gameBoard[i][j].setMark("x"));
                //this.$findCubeID.text(this.gameBoard[i][j].getMark());
            }
        }

        // Add effects
        $(this.gameButtonContainer).effect( "bounce", {times:3}, 300 );
        $(this.$button).prop("disabled", true);

        /*for(let i = 0; i < row; i++) {
            for(let j = 0; j < col; j++) {
                this.gameBoard[i][j].getCubeID().on('click', this.gameBoard[i][j].setMark("x").bind(this));
                //this.$findCubeID.text(this.gameBoard[i][j].getMark());
            }
        }*/
        
        const gameDiv = document.querySelectorAll(".cube");
        gameDiv.forEach(cube => cube.addEventListener('click', function() {
            let charI = cube.id.charAt(0);
            let charJ = cube.id.charAt(1);
            let myMark = this.gameBoard[charI][charJ].getCoordinates();
            console.log(`loc: ${charI}${charJ}, mark: ${myMark}`);

        }));
    },
};

game.init();

const gameCube = (coordinates, cubeID) => {
    let mark = "x";
    const getCoordinates = () => {
        return coordinates;
    }

    const getCubeID = () => {
        return cubeID;
    }
    const getMark = () => {
        return mark;
    }

    const placeMark = () => {
        this.evHandler.on('click', this.text("x"));
    }

    const setMark = (markToSet) => {
        if(markToSet === "x" || markToSet === "o") {
            mark = markToSet;
            console.log(`mark: ${mark}`);
        } else {
            console.log("Invalid symbol");
        }
    }

    return {getCoordinates, getCubeID, getMark, setMark }
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
        getPlayerTurn, setPlayerTurn
    };  
};

