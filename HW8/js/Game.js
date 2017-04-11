"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var music = null;
    var map = null;
    var fore = null;
    var background = null;
    var dice = null;
    var diceNum = null;
    var text = null;
    var player = null;
    
    var grids = [[100,750],[200,750],[300,750],[400,750],[500,750],
				 [600,750],[700,750],[700,650],[700,650],[700,650],
				 [700,550],[600,550],[500,550],[400,550],[400,600],
				 [300,600],[200,600],[100,600],[100,500],[100,400],
				 [100,300],[200,300],[300,300],[400,300],[500,300],
				 [600,300],[700,300],[750,300],[750,200],[750,100],
				 [750,50], [650,50], [550,50], [550,100],[550,200],
				 [400,200],[300,200],[200,200],[100,200],[100,100],
				 [100,50], [100,10]];
    var playerPosition = 0;
    
    function quitGame() 
    {
        game.state.start('MainMenu');
    }
    
    function rollDice() 
    {
    	var roll = game.rnd.integerInRange(1, 6);
        diceNum.text = roll;
        text.kill();
		var currentPosition = playerPosition;
		playerPosition += roll;
        for(var i=currentPosition; i<=currentPosition+roll; i++)
		{
			if(grids[i])
			{
				player.x = grids[i][0];
				player.y = grids[i][1];
			}
		}
    }
    
    return {
        create: function () 
        {
        	music = new Phaser.Sound(game,'backgroundMusic',1,true);	
        	music.play();
    		map = game.add.tilemap('Road', 32, 32, 64, 32);
        	map.addTilesetImage('spritesheet','spritesheet');
        	background = map.createLayer('Background');
        	background.resizeWorld();
        	fore = map.createLayer('Road');
        	diceNum = game.add.text(530, 635, '0', { fontSize: '64px', fill: '#000000' });
        	game.add.text(480, 575, 'Dice', { fontSize: '64px', fill: '#000000' });
        	text = game.add.text(160, 650, 'Click box to roll', { fontSize: '32px', fill: '#000000' });
        	dice = game.add.sprite(410, 575, 'diceSpot');
        	dice.inputEnabled = true;
        	dice.input.useHandCursor = true;
    		dice.events.onInputDown.add(rollDice, this );

    		player = game.add.sprite(grids[playerPosition][0],grids[playerPosition][1], 'redCar');
			player.anchor.setTo(0.5,0.5);
        },
        update: function () 
        {
        	if(playerPosition >= 42)
        	{
        		quitGame();
        	}
        },
    };
};