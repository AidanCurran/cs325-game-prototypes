"use strict";
GameStates.makeMainMenu = function( game, shared ) 
{
	var music = null;
	var playButton = null;   
    function startGame(pointer) 
    {
    	music.stop();
        game.state.start('Game');
    }
    return {
    
        create: function () 
        {
        	music = this.add.audio('titleMusic');
			music.play();
			game.add.sprite(0, 0, 'titlePage');
			playButton = this.add.button( 300, 650, 'playButton', startGame, this);
        },
        update: function () 
        {
        }
    };
};
