"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var music;
    var background;
    var playersTurn = 1;
    
    
    function quitGame() 
    {
        game.state.start('MainMenu');
    }
    
    return {
        create: function () 
        {
        	music = new Phaser.Sound(game,'backgroundMusic',1,true);	
        	music.volume -= 0.5;
        	//music.play();
        	var background = game.add.sprite(0, 0, 'background');
        	var logo = game.add.sprite(50,0,'logo');
        },
        
        update: function () 
        {
        	
        },
    };
};