"use strict";
GameStates.makeComics = function( game, shared ) 
{
	var music = null;
	var backButton = null;   
	var Score;
	var space;
    function startGame(pointer) 
    {
    	music.stop();
        game.state.start('Game', true, false);
    }
    return {
    	init: function(parameter1)//, parameter2)
    	{      //Note: the parameters passed on game.state start are sent to the init function(if it exists)       
    		Score = parameter1;
//     		space = parameter2;
    	},
        create: function () 
        {
        	music = new Phaser.Sound(game,'titleMusic',1,true);
			//music.play();
			game.add.sprite(0, 0, 'comicsPage');
			if(Score == "C200")
			{
				backButton = this.add.button( 0, 0, 'backArrow', startGame, this);
			}
// 			game.add.sprite(0, 0, 'backArrow');
        },
        update: function () 
        {
        }
    };
};
