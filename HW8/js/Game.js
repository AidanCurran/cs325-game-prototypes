"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var music = null;
    var map = null;
    var fore = null;
    var background = null;
    var dices = null;
    var diceNum = null;
    var text = null;
    var player = null;
    var spaces = null;
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
    var turn = 0;
    var playerRed = null;
    var playerRedPosition = 0;
    var playerGreen = null;
    var playerGreenPosition = 0;
    var playerYellow = null;
    var playerYellowPosition = 0;
    var playerBlue = null;
    var playerBluePosition = 0;
    var turnImage = null;
    var turnDuring = false;
    
    function quitGame() 
    {
    	playerRed.x = 50;
		playerRed.y = 750;
    	playerRedPosition = 0;
    	playerGreen.x = 50;
		playerGreen.y = 750;
    	playerGreenPosition = 0;
    	playerYellow.x = 50;
		playerYellow.y = 750;
    	playerYellowPosition = 0;
    	playerBlue.x = 50;
		playerBlue.y = 750;
    	playerBluePosition = 0;
    	game.add.sprite(0, 0, 'gameOver');
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
    
    function checkRotation(position, p)
    {
    	if(position >= 13 && position < 17)
			p.angle = -90;
		else if(position >= 17 && position < 23)
			p.angle = 180;
		else if(position == 23)
			p.angle = 90;
		else if(position >= 24 && position < 29)
			p.angle = 180;
		else if(position >= 29 && position < 33)
			p.angle = -90;
		else if(position >= 33 && position < 45)
			p.angle = 0;
		else if(position >= 45 && position < 51)
			p.angle = -90;
		else if(position >= 51 && position < 55)
			p.angle = 180;
		else if(position >= 55 && position < 58)
			p.angle = 90;
		else if(position >= 58 && position < 66)
			p.angle = 180;
		else if(position >= 66)
			p.angle = -90;
    }
    
    function checkSpace(position, p)
    {
    		if(position == 1)
			{
				p.x = 50;
				p.y = 750;
				position = 0;
			}
			else if(position == 5)
			{
				p.x = 400;
				p.y = 750;
				position = position + 2;
			}
			else if(position == 12)	// -3
			{
				p.x = 500;
				p.y = 750;
				position = position - 3;
			}
			else if(position == 17)	// -5
			{
				p.x = 650;
				p.y = 750;
				position = position - 5;
			}
			else if(position == 18)	// +2
			{
				p.x = 650;
				p.y = 525;
				position = position + 2;
			}
			else if(position == 24)	// +2
			{
				p.x = 240;
				p.y = 600;
				position = position + 2;
			}
			else if(position == 29)	// -4
			{
				p.x = 300;
				p.y = 600;
				position = position - 4;
			}
			else if(position == 33)	// -1
			{
				p.x = 85;
				p.y = 420;
				position = position - 1;
			}
			else if(position == 38)	// +2
			{
				p.x = 450;
				p.y = 370;
				position = position + 2;
			}
			else if(position == 44)	// -3
			{//500,370
				p.x = 500;
				p.y = 370;
				position = position - 3;
			}
			else if(position == 49)	// +5
			{
				p.x = 550;
				p.y = 50;
				position = position + 5;
			}
			else if(position == 58)	// -7
			{
				p.x = 720;
				p.y = 50;
				position = position - 7;
			}
			else if(position == 62)	// +5
			{
				p.x = 110;
				p.y = 170;
				position = position + 5;
			}
			else if(position == 66)	// -20
			{
				p.x = 720;
				p.y = 300;
				position = position - 20;
			}
    }
    
    function rollDice(playersTurn) 
    {
    	var roll = game.rnd.integerInRange(1, 6);
    	switch(roll)
    	{
    		case 1:
    			dices.frame = 0;
    			break;
    		case 2:
    			dices.frame = 1;
    			break;
    		case 3:
    			dices.frame = 2;
    			break;
    		case 4:
    			dices.frame = 3;
    			break;
    		case 5:
    			dices.frame = 4;
    			break;
    		case 6:
    			dices.frame = 5;
    			break;
    	}
        // diceNum.text = roll;
        text.kill();
        var p = null;
        var currPos = 0;
        var currentPosition = 0;
        
        // RED	-----------------------------------------
    	if(playersTurn == "red")
    	{
    		p = playerRed;
    		currentPosition = playerRedPosition;
    		playerRedPosition = playerRedPosition + roll;
    		for(var i=currentPosition; i<=currentPosition+roll; i++)
			{
				if(grids[i])
				{
					p.x = grids[i][0];
					p.y = grids[i][1];
				}
			}
			checkRotation(playerRedPosition, p);
			checkSpace(playerRedPosition, p);
			checkRotation(playerRedPosition, p);
    	}
    	// GREEN	-----------------------------------------
    	else if(playersTurn == "green")
    	{
    		p = playerGreen;
    		currentPosition = playerGreenPosition;
    		playerGreenPosition = playerGreenPosition + roll;
    		for(var i=currentPosition; i<=currentPosition+roll; i++)
			{
				if(grids[i])
				{
					p.x = grids[i][0];
					p.y = grids[i][1];
				}
			}
			checkRotation(playerGreenPosition, p);
			checkSpace(playerGreenPosition, p);
			checkRotation(playerGreenPosition, p);
			
    	}
    	// YELLOW	-----------------------------------------
    	else if(playersTurn == "yellow")
    	{
    		p = playerYellow;
    		currentPosition = playerYellowPosition;
    		playerYellowPosition = playerYellowPosition + roll;
    		for(var i=currentPosition; i<=currentPosition+roll; i++)
			{
				if(grids[i])
				{
					p.x = grids[i][0];
					p.y = grids[i][1];
				}
			}
			checkRotation(playerYellowPosition, p);
			checkSpace(playerYellowPosition, p);
			checkRotation(playerYellowPosition, p);
    	}
    	// BLUE	-----------------------------------------
    	else if(playersTurn == "blue")
    	{
    		p = playerBlue;
    		currentPosition = playerBluePosition;
    		playerBluePosition = playerBluePosition + roll;
    		for(var i=currentPosition; i<=currentPosition+roll; i++)
			{
				if(grids[i])
				{
					p.x = grids[i][0];
					p.y = grids[i][1];
				}
			}
			checkRotation(playerBluePosition, p);
			checkSpace(playerBluePosition, p);
			checkRotation(playerBluePosition, p);
    	}
    	turnDuring = false;
    }
    
    function killSelf()
    {
        turnImage.kill();
    }
    
    
    return {
        create: function () 
        {
        	music = new Phaser.Sound(game,'backgroundMusic',1,true);	
        	music.volume -= 0.5;
        	music.play();
        	
    		map = game.add.tilemap('Road', 32, 32, 64, 32);
        	map.addTilesetImage('spritesheet','spritesheet');
        	background = map.createLayer('Background');
        	background.resizeWorld();
        	fore = map.createLayer('Road');
        	game.add.text(430, 610, 'Dice', { fontSize: '48px', fill: '#000000' });
        	text = game.add.text(160, 650, 'Click die to roll', { fontSize: '32px', fill: '#000000' });
        	spaces = game.add.sprite(0,0, 'spaces');
        	dices = game.add.sprite(550, 590, 'dices');
        	dices.inputEnabled = true;
        	dices.input.useHandCursor = true;
    		dices.events.onInputDown.add(turns, this );
			//player 4
			playerBlue = game.add.sprite(grids[playerBluePosition][0],grids[playerBluePosition][1], 'blueCar');
			playerBlue.anchor.setTo(0.5,0.5);
			playerBlue.angle = 0;
			//player 3
			playerYellow = game.add.sprite(grids[playerYellowPosition][0],grids[playerYellowPosition][1], 'yellowCar');
			playerYellow.anchor.setTo(0.5,0.5);
			playerYellow.angle = 0;
			//player 2
			playerGreen = game.add.sprite(grids[playerGreenPosition][0],grids[playerGreenPosition][1], 'greenCar');
			playerGreen.anchor.setTo(0.5,0.5);
			playerGreen.angle = 0;
			//player 1
			playerRed = game.add.sprite(grids[playerRedPosition][0],grids[playerRedPosition][1], 'redCar');
			playerRed.anchor.setTo(0.5,0.5);
			playerRed.angle = 0;
			turn = 0;
        },
        
        update: function () 
        {
        	checkRotation(playerRedPosition, playerRed);
        	checkRotation(playerGreenPosition, playerGreen);
        	checkRotation(playerYellowPosition, playerYellow);
        	checkRotation(playerBluePosition, playerBlue);
        	checkSpace(playerBluePosition, playerBlue);
        	checkSpace(playerYellowPosition, playerYellow);
        	checkSpace(playerGreenPosition, playerGreen);
        	checkSpace(playerRedPosition, playerRed);
        	if(playerGreenPosition >= 70 || playerRedPosition >= 70 || playerYellowPosition >= 70 || playerBluePosition >= 70)
			{	
				game.add.sprite(0, 0, 'gameOver');
				game.time.events.add(5000, quitGame, this);
			}
			if (turnDuring == false)
			{
				switch(turn)
    			{
    				case 0:
    					turnImage = game.add.sprite(200, 300, 'redTurn');
    					break;
    				case 1:
    					turnImage = game.add.sprite(200, 300, 'greenTurn');
    					break;
    				case 2:
    					turnImage = game.add.sprite(200, 300, 'yellowTurn');
    					break;
    				case 3:
    					turnImage = game.add.sprite(200, 300, 'blueTurn');
    					break;
    			}
    			game.time.events.add(600, killSelf, turnImage);
    			turnDuring = true;
    		}
        },
    };
};