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
    
    var grids = [[50,750],[100,750],[150,750],[200,750],[250,750],[300,750],[350,750],[400,750],
    			 [450,750],[500,750],[550,750],[600,750],[650,750],[720,750],
    			 [720,680],[720,630],[720,580],[720,525],										//17
    			 [650,525],[580,525],[530,525],[470,525],[420,525],[365,525],
    			 [365,600], 																	//24
    			 [300,600],[240,600],[190,600],[130,600],										//29
    			 [85,600] ,[85,530] ,[85,480] ,[85,420] ,[85,370],								//33
    			 [150,370],[200,370],[250,370],[300,370],[350,370],[400,370],[450,370],
    			 [500,370],[550,370],[590,370],[640,370],[720,370],								//45
				 [720,300],[720,250],[720,200],[720,150],[720,100],[720,50],					//51
				 [670,50], [600,50] ,[550,50] ,[500,50],										//55
				 [500,100],[500,150],[500,210],													//58
				 [460,210],[410,210],[360,210],[310,210],[260,210],[210,210],[160,210],[110,210],//66
				 [110,170],[110,110],[110,60],[110,10]];
    
    var playerPosition = 0;
    var turn = 0;
    var playerRed = 0;
    var playerRedPosition = 0;
    var playerGreen = 0;
    var playerGreenPosition = 0;
    var playerYellow = 0;
    var playerYellowPosition = 0;
    var playerBlue = 0;
    var playerBluePosition = 0;
    
    function quitGame() 
    {
        game.state.start('MainMenu');
    }
    
    function turns()
    {
    	// turn: 0 is red, 1 is green, 2 is yellow, 3 is blue
    	var playersTurn = "";
    	switch(turn)
    	{
    		case 0:
    			playersTurn = "red";
    			break;
    		case 1:
    			playersTurn = "green";
    			break;
    		case 2:
    			playersTurn = "yellow";
    			break;
    		case 3:
    			playersTurn = "blue";
    			break;
    	}
    	turn += 1;
    	if(turn == 4)
    		turn = 0;
    	rollDice(playersTurn);
    }
    
    function rollDice(playersTurn) 
    {
    	var roll = 3;//game.rnd.integerInRange(1, 6);
        diceNum.text = roll;
        text.kill();
        var gridX = [];
		var gridY = [];
        var p = null;
        var currPos = 0;
        var currentPosition = 0;
    	if(playersTurn == "red")
    	{
    		p = playerRed;
    		currentPosition = playerRedPosition;
    		playerRedPosition += roll;
    		currPos = playerRedPosition;
    	}
    	else if(playersTurn == "green")
    	{
    		p = playerGreen;
    		currentPosition = playerGreenPosition;
    		playerGreenPosition += roll;
    		currPos = playerGreenPosition;
    	}
    	else if(playersTurn == "yellow")
    	{
    		p = playerYellow;
    		currentPosition = playerYellowPosition;
    		playerYellowPosition += roll;
    		currPos = playerYellowPosition;
    	}
    	else if(playersTurn == "blue")
    	{
    		p = playerBlue;
    		currentPosition = playerBluePosition;
    		playerBluePosition += roll;
    		currPos = playerBluePosition;
    	}
    	
		//playerPosition += roll;
		for(var i=currentPosition; i<=currentPosition+roll; i++)
		{
			if(grids[i])
			{
				// var x = grids[i][0];
// 				var y = grids[i][1];
// 				p = game.physics.arcade.moveToXY(p,x,y, 100, 0);
// 				p.body.velocity.x = 0;
// 				p.body.velocity.y = 0;
				p.x = grids[i][0];
				p.y = grids[i][1];
				//180 left, 0 right, 90 down, -90 up
				if(currPos >= 13 && currPos < 17)
					p.angle = -90;
				else if(currPos >= 17 && currPos < 23)
					p.angle = 180;
				else if(currPos == 23)//> 20 && playerPosition < 21)
					p.angle = 90;
				else if(currPos >= 24 && currPos < 29)
					p.angle = 180;
				else if(currPos >= 29 && currPos < 33)
					p.angle = -90;
				else if(currPos >= 33 && currPos < 45)
					p.angle = 0;
				else if(currPos >= 45 && currPos < 51)
					p.angle = -90;
				else if(currPos >= 51 && currPos < 55)
					p.angle = 180;
				else if(currPos >= 55 && currPos < 58)
					p.angle = 90;
				else if(currPos >= 58 && currPos < 66)
					p.angle = 180;
				else if(currPos >= 66)
					p.angle = -90;
			}
		}
		
			
        
		
    }
    
    return {
        create: function () 
        {
//         	game.physics.startSystem(Phaser.Physics.ARCADE);
        	music = new Phaser.Sound(game,'backgroundMusic',1,true);	
//         	music.play();
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
    		dice.events.onInputDown.add(turns, this );
	
			//player 4
			playerBlue = game.add.sprite(grids[playerBluePosition][0],grids[playerBluePosition][1], 'blueCar');
			playerBlue.anchor.setTo(0.5,0.5);
			playerBlue.angle = 0;
// 			game.physics.arcade.enable(playerBlue);
// 			playerBlue.enableBody = true;
			
			//player 3
			playerYellow = game.add.sprite(grids[playerYellowPosition][0],grids[playerYellowPosition][1], 'yellowCar');
			playerYellow.anchor.setTo(0.5,0.5);
			playerYellow.angle = 0;
// 			game.physics.arcade.enable(playerYellow);
// 			playerYellow.enableBody = true;
			
			//player 2
			playerGreen = game.add.sprite(grids[playerGreenPosition][0],grids[playerGreenPosition][1], 'greenCar');
			playerGreen.anchor.setTo(0.5,0.5);
			playerGreen.angle = 0;
// 			game.physics.arcade.enable(playerGreen);
// 			playerGreen.enableBody = true;
			
			//player 1
			playerRed = game.add.sprite(grids[playerRedPosition][0],grids[playerRedPosition][1], 'redCar');
			playerRed.anchor.setTo(0.5,0.5);
			playerRed.angle = 0;
// 			game.physics.arcade.enable(playerRed);
// 			playerRed.enableBody = true;
			turn = 0;
        },
        update: function () 
        {
        	
        },
    };
};