"use strict";
GameStates.makeGame = function( game, shared ) 
{
    var music;
    var background;
    var playersTurn = 1;
    var dices;
    var gameDone = 0;
    var F200,H200,S200,C200,F400,H400,S400,C400,F600,H600,S600,C600,F800,H800,S800,C800,F1000,H1000,S1000,C1000;
    var p1Points = 0;
    var p2Points = 0;
    var p3Points = 0;
    var p4Points = 0;
    var p1Text,p2Text,p3Text,p4Text;
    var fq1,fq2,fq3,fq4,fq5;
    var hq1,hq2,hq3,hq4,hq5;
    var sq1,sq2,sq3,sq4,sq5;
    var cq1,cq2,cq3,cq4,cq5;
    var comicsPage,scifiPage,horrorPage,fantasyPage;
    var turnImage;
    var star;
    var whichQ = 0;
    var answered = false;
    var sad;
    var whoseTurn;
    
    function quitGame() 
    {
    	music.stop();
        game.state.start('MainMenu');
    }
    
    function turn()
    {
    	if(playersTurn == 4)
    		playersTurn = 1;
    	else
			playersTurn += 1;
		star.kill();
		switch(playersTurn)
    	{
			case 1:
   		 		star = game.add.sprite(735, 205, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    		case 2:
				star = game.add.sprite(735, 354, 'star');
				star.anchor.setTo(0.5,0.5);
    			break;
     		case 3:
    			star = game.add.sprite(735, 495, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    		case 4:
    			star = game.add.sprite(735, 640, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    	}
    }
    
    function turnPaused()
    {
    	if(playersTurn == 4)
    		playersTurn = 1;
    	else
			playersTurn += 1;
		star.kill();
		switch(playersTurn)
    	{
			case 1:
   		 		star = game.add.sprite(735, 205, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    		case 2:
				star = game.add.sprite(735, 354, 'star');
				star.anchor.setTo(0.5,0.5);
    			break;
     		case 3:
    			star = game.add.sprite(735, 495, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    		case 4:
    			star = game.add.sprite(735, 640, 'star');
    			star.anchor.setTo(0.5,0.5);
    			break;
    	}
    	star.visible = false;
    }
    
    function playerPoints(points)
    {
    	switch(playersTurn)
    	{
    		case 1:
    			p1Points += points;
    			p1Text.text = p1Points;
    			break;
    		case 2:
    			p2Points += points;
    			p2Text.text = p2Points;
    			break;
    		case 3:
    			p3Points += points;
    			p3Text.text = p3Points;
    			break;
    		case 4:
    			p4Points += points;
    			p4Text.text = p4Points;
    			break;
    	}
    }
    
    function playerLosePoints(points)
    {
    	switch(playersTurn)
    	{
    		case 1:
    			p1Points -= points;
    			p1Text.text = p1Points;
    			break;
    		case 2:
    			p2Points -= points;
    			p2Text.text = p2Points;
    			break;
    		case 3:
    			p3Points -= points;
    			p3Text.text = p3Points;
    			break;
    		case 4:
    			p4Points -= points;
    			p4Text.text = p4Points;
    			break;
    	}
    }
    
    function unpause(event) 
    {
    	if (game.paused) 
    	{
    		if(whichQ == 1)
    		{
    			if(event.x > 490 && event.x < 810 && event.y > 333 && event.y < 521)
				{
					game.paused = false;
    				fq1.visible = false;
        			fq1.kill();
        			fantasyPage.visibe = false;
        			fantasyPage.kill();
    				F200.loadTexture('doneSpace',0);
    				F200.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(200);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(100);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 5)
    		{	
    			if(event.x > 44 && event.x < 244 && event.y > 554 && event.y < 705)
				{
					game.paused = false;
    				fq2.visible = false;
        			fq2.kill();
        			fantasyPage.visibe = false;
        			fantasyPage.kill();
    				F400.loadTexture('doneSpace',0);
    				F400.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(400);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(200);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 9)
    		{
    			if(event.x > 299 && event.x < 481 && event.y > 554 && event.y < 746)
				{
					game.paused = false;
    				fq3.visible = false;
        			fq3.kill();
        			fantasyPage.visibe = false;
        			fantasyPage.kill();
    				F600.loadTexture('doneSpace',0);
    				F600.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(600);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(300);
					turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 13)
    		{
    			if(event.x > 583 && event.x < 815 && event.y > 551 && event.y < 788)
				{
					game.paused = false;
    				fq4.visible = false;
        			fq4.kill();
        			fantasyPage.visibe = false;
        			fantasyPage.kill();
    				F800.loadTexture('doneSpace',0);
    				F800.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(800);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(400);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 17)
    		{
    			if(event.x > 25 && event.x < 349 && event.y > 329 && event.y < 512)
				{
					game.paused = false;
    				fq5.visible = false;
        			fq5.kill();
        			fantasyPage.visibe = false;
        			fantasyPage.kill();
    				F1000.loadTexture('doneSpace',0);
    				F1000.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(1000);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(500);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
//////////////////////////////////////////////////////////////////////////////////////////
    		if(whichQ == 2)
    		{
    			if(event.x > 568 && event.x < 817 && event.y > 334 && event.y < 505)
				{
					game.paused = false;
    				hq1.visible = false;
        			hq1.kill();
        			horrorPage.visibe = false;
        			horrorPage.kill();
    				H200.loadTexture('doneSpace',0);
    				H200.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(200);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(100);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 6)
    		{	
    			if(event.x > 567 && event.x < 808 && event.y > 547 && event.y < 717)
				{
					game.paused = false;
    				hq2.visible = false;
        			hq2.kill();
        			horrorPage.visibe = false;
        			horrorPage.kill();
    				H400.loadTexture('doneSpace',0);
    				H400.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(400);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(200);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 10)
    		{
    			if(event.x > 9 && event.x < 211 && event.y > 336 && event.y < 636)
				{
					game.paused = false;
    				hq3.visible = false;
        			hq3.kill();
        			horrorPage.visibe = false;
        			horrorPage.kill();
    				H600.loadTexture('doneSpace',0);
    				H600.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(600);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(300);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
        		}
    		}
    		else if(whichQ == 14)
    		{
    			if(event.x > 248 && event.x < 507 && event.y > 336 && event.y < 482)
				{
					game.paused = false;
    				hq4.visible = false;
        			hq4.kill();
        			horrorPage.visibe = false;
        			horrorPage.kill();
    				H800.loadTexture('doneSpace',0);
    				H800.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(800);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(400);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 18)
    		{
    			if(event.x > 248 && event.x < 468 && event.y > 520 && event.y < 769)
				{
					game.paused = false;
    				hq5.visible = false;
        			hq5.kill();
        			horrorPage.visibe = false;
        			horrorPage.kill();
    				H1000.loadTexture('doneSpace',0);
    				H1000.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(1000);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(500);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    			
    		}
//////////////////////////////////////////////////////////////////////////////////////////
    		if(whichQ == 3)
    		{
    			if(event.x > 345 && event.x < 610 && event.y > 594 && event.y < 740)
				{
    				game.paused = false;
    				sq1.visible = false;
        			sq1.kill();
        			scifiPage.visibe = false;
        			scifiPage.kill();
    				S200.loadTexture('doneSpace',0);
    				S200.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(200);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(100);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 7)
    		{	
    			if(event.x > 615 && event.x < 862 && event.y > 350 && event.y < 595)
				{
    				game.paused = false;
    				sq2.visible = false;
        			sq2.kill();
        			scifiPage.visibe = false;
        			scifiPage.kill();
    				S400.loadTexture('doneSpace',0);
    				S400.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(400);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(200);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 11)
    		{
    			
    			if(event.x > 19 && event.x < 356 && event.y > 199 && event.y < 542)
				{
    				game.paused = false;
    				sq3.visible = false;
        			sq3.kill();
        			scifiPage.visibe = false;
        			scifiPage.kill();
    				S600.loadTexture('doneSpace',0);
    				S600.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(600);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(300);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 15)
    		{
    			if(event.x > 66 && event.x < 583 && event.y > 286 && event.y < 749)
				{
    				game.paused = false;
    				sq4.visible = false;
        			sq4.kill();
        			scifiPage.visibe = false;
        			scifiPage.kill();
    				S800.loadTexture('doneSpace',0);
    				S800.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(800);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(400);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 19)
    		{
    			if(event.x > 272 && event.x < 544 && event.y > 352 && event.y < 533)
				{
    				game.paused = false;
    				sq5.visible = false;
        			sq5.kill();
        			scifiPage.visibe = false;
        			scifiPage.kill();
    				S1000.loadTexture('doneSpace',0);
    				S1000.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(1000);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(500);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
//////////////////////////////////////////////////////////////////////////////////////////

    		if(whichQ == 4)
    		{
				var wrong;
				if(event.x > 402 && event.x < 562 && event.y > 529 && event.y < 689)
				{
					answered = false;
    				game.paused = false;
        			cq1.visible = false;
        			cq1.kill();
        			comicsPage.visibe = false;
        			comicsPage.kill();
    				C200.loadTexture('doneSpace',0);
    				C200.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(200);
    				turn();
				}
				else
				{
					playerLosePoints(100);
					turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
				}
    		}
    		else if(whichQ == 8)
    		{	
				if(event.x > 27 && event.x < 330 && event.y > 528 && event.y < 697)
				{
					answered = false;
    				game.paused = false;
        			cq2.visible = false;
        			cq2.kill();
        			comicsPage.visibe = false;
        			comicsPage.kill();
    				C400.loadTexture('doneSpace',0);
    				C400.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(400);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(200);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 12)
    		{
				if(event.x > 48 && event.x < 294 && event.y > 308 && event.y < 494)
				{
    				game.paused = false;
    				cq3.visible = false;
        			cq3.kill();
        			comicsPage.visibe = false;
        			comicsPage.kill();
    				C600.loadTexture('doneSpace',0);
    				C600.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(600);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(300);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 16)
    		{
    			if(event.x > 386 && event.x < 589 && event.y > 312 && event.y < 462)
				{
    				game.paused = false;
    				cq4.visible = false;
        			cq4.kill();
        			comicsPage.visibe = false;
        			comicsPage.kill();
    				C800.loadTexture('doneSpace',0);
    				C800.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(800);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(400);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    		else if(whichQ == 20)
    		{
				if(event.x > 636 && event.x < 876 && event.y > 310 && event.y < 638)
				{
    				game.paused = false;
    				cq5.visible = false;
        			cq5.kill();
        			comicsPage.visibe = false;
        			comicsPage.kill();
    				C1000.loadTexture('doneSpace',0);
    				C1000.inputEnabled = false;
    				gameDone += 1;
    				star.visible = true;
    				whoseTurn.kill();
    				playerPoints(1000);
    				turn();
    			}
    			else
    			{
    				playerLosePoints(500);
    				turnPaused();
					whoseTurn.kill();
					whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        			whoseTurn.anchor.setTo( 0.5, 0.0 );
    			}
    		}
    	}       
	}
    
    return {
        create: function () 
        {
        	var m = game.rnd.integerInRange(1, 3);
        	if(m == 1)
        	{
        		music = new Phaser.Sound(game,'backgroundMusic',1,true);	
        		music.volume = 0.3;
        		music.play();
        	}
        	else if (m == 2)
        	{
        		music = new Phaser.Sound(game,'backgroundMusic2',1,true);	
        		music.volume = 0.3;
        		music.play();
        	}
        	else
        	{
        		music = new Phaser.Sound(game,'backgroundMusic3',1,true);	
        		music.volume = 0.3;
        		music.play();
        	}
        	
        	var background = game.add.sprite(0, 0, 'background');
        	p1Text = game.add.text(800, 240, '0', { fontSize: '40px', fill: '#ffffff' });
        	p1Text.anchor.setTo( 0.5, 0.0 );
        	p2Text = game.add.text(800, 390, '0', { fontSize: '40px', fill: '#ffffff' });
        	p2Text.anchor.setTo( 0.5, 0.0 );
        	p3Text = game.add.text(800, 530, '0', { fontSize: '40px', fill: '#ffffff' });
        	p3Text.anchor.setTo( 0.5, 0.0 );
        	p4Text = game.add.text(800, 680, '0', { fontSize: '40px', fill: '#ffffff' });
        	p4Text.anchor.setTo( 0.5, 0.0 );
        	
        	
        	F200 = game.add.sprite(89,223,'pointSpace');
        	F200.inputEnabled = true;
        	F200.input.useHandCursor = true;
    		F200.events.onInputDown.add(function()
    		{
    			whichQ = 1;
    			game.paused = true;
    			fantasyPage = game.add.image(0, 0, 'fPage');
    			fq1 = game.add.image(100,100,'fq1');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		F400 = game.add.sprite(89,339,'pointSpace');
    		F400.inputEnabled = true;
        	F400.input.useHandCursor = true;
    		F400.events.onInputDown.add(function()
    		{
    			whichQ = 5;
    			game.paused = true;
    			fantasyPage = game.add.image(0, 0, 'fPage');
    			fq2 = game.add.image(100,100,'fq2');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		F600 = game.add.sprite(89,453,'pointSpace');
    		F600.inputEnabled = true;
        	F600.input.useHandCursor = true;
    		F600.events.onInputDown.add(function()
    		{
    			whichQ = 9;
    			game.paused = true;
    			fantasyPage = game.add.image(0, 0, 'fPage');
    			fq3 = game.add.image(100,100,'fq3');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		F800 = game.add.sprite(89,569,'pointSpace');
    		F800.inputEnabled = true;
        	F800.input.useHandCursor = true;
    		F800.events.onInputDown.add(function()
    		{
    			whichQ = 13;
    			game.paused = true;
    			fantasyPage = game.add.image(0, 0, 'fPage');
    			fq4 = game.add.image(100,100,'fq4');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		F1000 = game.add.sprite(89,686,'pointSpace');
    		F1000.inputEnabled = true;
        	F1000.input.useHandCursor = true;
    		F1000.events.onInputDown.add(function()
    		{
    			whichQ = 17;
    			game.paused = true;
    			fantasyPage = game.add.image(0, 0, 'fPage');
    			fq5 = game.add.image(100,100,'fq5');	
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
//////////////////////////////////////////////////////////////////////////////////////////

    		H200 = game.add.sprite(249,223,'pointSpace');
    		H200.inputEnabled = true;
        	H200.input.useHandCursor = true;
    		H200.events.onInputDown.add(function()
    		{
    			whichQ = 2;
    			game.paused = true;
    			horrorPage = game.add.image(0, 0, 'hPage');
    			hq1 = game.add.image(100,100,'hq1');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		H400 = game.add.sprite(249,339,'pointSpace');
    		H400.inputEnabled = true;
        	H400.input.useHandCursor = true;
    		H400.events.onInputDown.add(function()
    		{
    			whichQ = 6;
    			game.paused = true;
    			horrorPage = game.add.image(0, 0, 'hPage');
    			hq2 = game.add.image(100,100,'hq2');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		H600 = game.add.sprite(249,453,'pointSpace');
    		H600.inputEnabled = true;
        	H600.input.useHandCursor = true;
    		H600.events.onInputDown.add(function()
    		{
    			whichQ = 10;
    			game.paused = true;
    			horrorPage = game.add.image(0, 0, 'hPage');
    			hq3 = game.add.image(100,100,'hq3');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		H800 = game.add.sprite(249,569,'pointSpace');
    		H800.inputEnabled = true;
        	H800.input.useHandCursor = true;
    		H800.events.onInputDown.add(function()
    		{
    			whichQ = 14;
    			game.paused = true;
    			horrorPage = game.add.image(0, 0, 'hPage');
    			hq4 = game.add.image(100,100,'hq4');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		H1000 = game.add.sprite(249,686,'pointSpace');
    		H1000.inputEnabled = true;
        	H1000.input.useHandCursor = true;
    		H1000.events.onInputDown.add(function()
    		{
    			whichQ = 18;
    			game.paused = true;
    			horrorPage = game.add.image(0, 0, 'hPage');
    			hq5 = game.add.image(100,100,'hq5');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
//////////////////////////////////////////////////////////////////////////////////////////

    		S200 = game.add.sprite(411,223,'pointSpace');
    		S200.inputEnabled = true;
        	S200.input.useHandCursor = true;
    		S200.events.onInputDown.add(function()
    		{
    			whichQ = 3;
    			game.paused = true;
    			scifiPage = game.add.image(0, 0, 'sPage');
    			sq1 = game.add.image(100,100,'sq1');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		S400 = game.add.sprite(411,339,'pointSpace');
    		S400.inputEnabled = true;
        	S400.input.useHandCursor = true;
    		S400.events.onInputDown.add(function()
    		{
    			whichQ = 7;
    			game.paused = true;
    			scifiPage = game.add.image(0, 0, 'sPage');
    			sq2 = game.add.image(100,100,'sq2');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		S600 = game.add.sprite(411,453,'pointSpace');
    		S600.inputEnabled = true;
        	S600.input.useHandCursor = true;
    		S600.events.onInputDown.add(function()
    		{
    			whichQ = 11;
    			game.paused = true;
    			scifiPage = game.add.image(0, 0, 'sPage');
    			sq3 = game.add.image(100,100,'sq3');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		S800 = game.add.sprite(411,569,'pointSpace');
    		S800.inputEnabled = true;
        	S800.input.useHandCursor = true;
    		S800.events.onInputDown.add(function()
    		{
    			whichQ = 15;
    			game.paused = true;
    			scifiPage = game.add.image(0, 0, 'sPage');
    			sq4 = game.add.image(100,100,'sq4');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		S1000 = game.add.sprite(411,686,'pointSpace');
    		S1000.inputEnabled = true;
        	S1000.input.useHandCursor = true;
    		S1000.events.onInputDown.add(function()
    		{
    			whichQ = 19;
    			game.paused = true;
    			
    			scifiPage = game.add.image(0, 0, 'sPage');
    			sq5 = game.add.image(100,100,'sq5');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
//////////////////////////////////////////////////////////////////////////////////////////

	    	C200 = game.add.sprite(570,223,'pointSpace');
    		C200.inputEnabled = true;
        	C200.input.useHandCursor = true;
    		C200.events.onInputUp.add(function()
    		{
    			whichQ = 4;
    			game.paused = true;
    			comicsPage = game.add.image(0, 0, 'cPage');
    			cq1 = game.add.image(100,100,'cq1');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		C400 = game.add.sprite(570,339,'pointSpace');
    		C400.inputEnabled = true;
        	C400.input.useHandCursor = true;
    		C400.events.onInputDown.add(function()
    		{
    			whichQ = 8;
    			game.paused = true;
    			comicsPage = game.add.image(0, 0, 'cPage');
    			cq2 = game.add.image(100,100,'cq2');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		C600 = game.add.sprite(570,453,'pointSpace');
    		C600.inputEnabled = true;
        	C600.input.useHandCursor = true;
    		C600.events.onInputDown.add(function()
    		{
    			whichQ = 12;
    			game.paused = true;
    			comicsPage = game.add.image(0, 0, 'cPage');
    			cq3 = game.add.image(100,100,'cq3');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		C800 = game.add.sprite(570,569,'pointSpace');
    		C800.inputEnabled = true;
        	C800.input.useHandCursor = true;
    		C800.events.onInputDown.add(function()
    		{
    			whichQ = 16;
    			game.paused = true;
    			comicsPage = game.add.image(0, 0, 'cPage');
    			cq4 = game.add.image(100,100,'cq4');
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		C1000 = game.add.sprite(570,686,'pointSpace');
    		C1000.inputEnabled = true;
        	C1000.input.useHandCursor = true;
    		C1000.events.onInputDown.add(function()
    		{
    			whichQ = 20;
    			game.paused = true;
    			comicsPage = game.add.image(0, 0, 'cPage');
    			cq5 = game.add.image(100,100,'cq5');  
    			whoseTurn = game.add.text(780, 30, 'Whose Turn Is\nIt Anyway: Player ' + playersTurn, { fontSize: '20px', fill: '#ffffff' });
        		whoseTurn.anchor.setTo( 0.5, 0.0 );
    		},this);
    		
    		dices = game.add.sprite(750, 50, 'dices');
        	dices.inputEnabled = true;
        	dices.input.useHandCursor = true;
    		dices.events.onInputDown.add(function ()
    		{
    			var roll = game.rnd.integerInRange(1, 4);
    			switch(roll)
    			{
    				case 1:
   		 				dices.frame = 0;
    					playersTurn = 1;
   		 				star = game.add.sprite(735, 205, 'star');
    					star.anchor.setTo(0.5,0.5);
    					break;
    				case 2:
    					dices.frame = 1;
    					playersTurn = 2;
    					star = game.add.sprite(735, 354, 'star');
    					star.anchor.setTo(0.5,0.5);
    					break;
    				case 3:
    					dices.frame = 2;
    					playersTurn = 3;
    					star = game.add.sprite(735, 495, 'star');
    					star.anchor.setTo(0.5,0.5);
    					break;
    				case 4:
    					dices.frame = 3;
    					playersTurn = 4;
    					star = game.add.sprite(735, 640, 'star');
    					star.anchor.setTo(0.5,0.5);
    					break;
    			}
    			game.time.events.add(800, function(){dices.kill(); game.add.text(740, 80, 'Star indicates\n  player turn', { fontSize: '20px', fill: '#ffffff' });}, dices);
    		}, this );
    		turnImage = game.add.sprite(450, 400, 'beginning');
        	turnImage.anchor.setTo(0.5,0.5);
        	game.time.events.add(1000, function(){turnImage.kill();}, turnImage);
    		game.input.onDown.add(unpause, self);
        },
        
        update: function () 
        {
        	if(gameDone > 20)
        	{
        		gameDone = 0;
        		quitGame();
        	}
        	else if(gameDone == 20)
        	{
        		var winner;
        		if(p1Points > p2Points && p1Points > p3Points && p1Points > p4Points)
    			{
    				winner = game.add.sprite(450, 400, 'p1w');
    				winner.anchor.setTo(0.5,0.5);
    			}
    			else if(p2Points > p1Points && p2Points > p3Points && p2Points > p4Points)
    			{
    				winner = game.add.sprite(450, 400, 'p2w');
    				winner.anchor.setTo(0.5,0.5);
    			}
    			else if(p3Points > p1Points && p3Points > p2Points && p3Points > p4Points)
    			{
    				winner = game.add.sprite(450, 400, 'p3w');
    				winner.anchor.setTo(0.5,0.5);
    			}
    			else
    			{
    				winner = game.add.sprite(450, 400, 'p4w');
    				winner.anchor.setTo(0.5,0.5);
    			}
        		game.time.events.add(2000, function(){gameDone += 1;}, gameDone);
        	}
        },   
    };
};