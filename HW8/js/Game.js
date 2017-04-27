"use strict";
GameStates.makeGame = function( game, shared ) 
{
    var music;
    var background;
    var playersTurn = 1;
    var gameDone = 0;
    var F200 = null;
    var H200 = null;
    var S200 = null;
    var C200 = null;
    var F400 = null;
    var H400 = null;
    var S400 = null;
    var C400 = null;
    var F600 = null;
    var H600 = null;
    var S600 = null;
    var C600 = null;
    var F800 = null;
    var H800 = null;
    var S800 = null;
    var C800 = null;
    var F1000 = null;
    var H1000 = null;
    var S1000 = null;
    var C1000 = null;
    var p1Points = 0;
    var p2Points = 0;
    var p3Points = 0;
    var p4Points = 0;
    var p1Text;
    var p2Text;
    var p3Text;
    var p4Text;
    var question;
    
    function quitGame() 
    {
        game.state.start('MainMenu');
    }
    
    function F200Click()
    {
//     	game.state.start('Fantasy');
    	F200.loadTexture('doneSpace',0);
    	F200.inputEnabled = false;
    	gameDone += 1;
    }
    function H200Click()
    {
//     	game.state.start('Horror');
    	H200.loadTexture('doneSpace',0);
    	H200.inputEnabled = false;
    	gameDone += 1;
    }
    function S200Click()
    {
//     	game.state.start('SciFi');
    	S200.loadTexture('doneSpace',0);
    	S200.inputEnabled = false;
    	gameDone += 1;
    }
    function C200Click()
    {
    	C200.loadTexture('doneSpace',0);
    	C200.inputEnabled = false;
    	gameDone += 1;
    }
    function F400Click()
    {
    	F400.loadTexture('doneSpace',0);
    	F400.inputEnabled = false;
//     	game.state.start('Fantasy');
    	gameDone += 1;
    }
    function H400Click()
    {
    	H400.loadTexture('doneSpace',0);
    	H400.inputEnabled = false;
//     	game.state.start('Horror');
    	gameDone += 1;
    }
    function S400Click()
    {
//     	game.state.start('SciFi');
    	S400.loadTexture('doneSpace',0);
    	S400.inputEnabled = false;
    	gameDone += 1;
    }
    function C400Click()
    {
    	C400.loadTexture('doneSpace',0);
    	C400.inputEnabled = false;
//     	game.state.start('Comics');
    	gameDone += 1;
    }
    function F600Click()
    {
    	F600.loadTexture('doneSpace',0);
    	F600.inputEnabled = false;
//     	game.state.start('Fantasy');
    	gameDone += 1;
    }
    function H600Click()
    {
    	H600.loadTexture('doneSpace',0);
    	H600.inputEnabled = false;
//     	game.state.start('Horror');
    	gameDone += 1;
    }
    function S600Click()
    {
    	S600.loadTexture('doneSpace',0);
    	S600.inputEnabled = false;
//     	game.state.start('SciFi');
    	gameDone += 1;
    }
    function C600Click()
    {
    	C600.loadTexture('doneSpace',0);
    	C600.inputEnabled = false;
//     	game.state.start('Comics');
    	gameDone += 1;
    }
    function F800Click()
    {
    	F800.loadTexture('doneSpace',0);
    	F800.inputEnabled = false;
//     	game.state.start('Fantasy');
    	gameDone += 1;
    }
    function H800Click()
    {
    	H800.loadTexture('doneSpace',0);
    	H800.inputEnabled = false;
//     	game.state.start('Horror');
    	gameDone += 1;
    }
    function S800Click()
    {
    	S800.loadTexture('doneSpace',0);
    	S800.inputEnabled = false;
//     	game.state.start('SciFi');
    	gameDone += 1;
    }
    function C800Click()
    {
    	C800.loadTexture('doneSpace',0);
    	C800.inputEnabled = false;
//     	game.state.start('Comics');
    	gameDone += 1;
    }
    function F1000Click()
    {
    	F1000.loadTexture('doneSpace',0);
    	F1000.inputEnabled = false;
//     	game.state.start('Fantasy');
    	gameDone += 1;
    }
    function H1000Click()
    {
    	H1000.loadTexture('doneSpace',0);
    	H1000.inputEnabled = false;
//     	game.state.start('Horror');
    	gameDone += 1;
    }
    function S1000Click()
    {
    	S1000.loadTexture('doneSpace',0);
    	S1000.inputEnabled = false;
//     	game.state.start('SciFi');
    	gameDone += 1;
    }
    function C1000Click()
    {
    	C1000.loadTexture('doneSpace',0);
    	C1000.inputEnabled = false;
//     	game.state.start('Comics');
    	gameDone += 1;
    }
    
    function disableClick()
    {
        	F200.inputEnabled = false;
    		F400.inputEnabled = false;
    		F600.inputEnabled = false;
    		F800.inputEnabled = false;
    		F1000.inputEnabled = false;
    		H200.inputEnabled = false;
    		H400.inputEnabled = false;
    		H600.inputEnabled = false;
    		H800.inputEnabled = false;
    		H1000.inputEnabled = false;
    		S200.inputEnabled = false;
    		S400.inputEnabled = false;
    		S600.inputEnabled = false;
    		S800.inputEnabled = false;
    		S1000.inputEnabled = false;
    		C200.inputEnabled = false;
    		C400.inputEnabled = false;
    		C600.inputEnabled = false;
    		C800.inputEnabled = false;
    		C1000.inputEnabled = false;
    }
    
    function enableClick()
    {
        	F200.inputEnabled = true;
    		F400.inputEnabled = true;
    		F600.inputEnabled = true;
    		F800.inputEnabled = true;
    		F1000.inputEnabled = true;
    		H200.inputEnabled = true;
    		H400.inputEnabled = true;
    		H600.inputEnabled = true;
    		H800.inputEnabled = true;
    		H1000.inputEnabled = true;
    		S200.inputEnabled = true;
    		S400.inputEnabled = true;
    		S600.inputEnabled = true;
    		S800.inputEnabled = true;
    		S1000.inputEnabled = true;
    		C200.inputEnabled = true;
    		C400.inputEnabled = true;
    		C600.inputEnabled = true;
    		C800.inputEnabled = true;
    		C1000.inputEnabled = true;
    }
    return {
        create: function () 
        {
        	var m = game.rnd.integerInRange(1, 3);
        	if(m == 1)
        	{
        		music = new Phaser.Sound(game,'backgroundMusic',1,true);	
        		music.volume -= 0.5;
        		//music.play();
        	}
        	else if (m == 2)
        	{
        		music = new Phaser.Sound(game,'backgroundMusic2',1,true);	
        		music.volume -= 0.5;
        		//music.play();
        	}
        	else
        	{
        		music = new Phaser.Sound(game,'backgroundMusic3',1,true);	
        		music.volume -= 0.5;
        		//music.play();
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
    		F200.events.onInputDown.add(F200Click, this );
    		
    		F400 = game.add.sprite(89,339,'pointSpace');
    		F400.inputEnabled = true;
        	F400.input.useHandCursor = true;
    		F400.events.onInputDown.add(F400Click, this );
    		
    		F600 = game.add.sprite(89,453,'pointSpace');
    		F600.inputEnabled = true;
        	F600.input.useHandCursor = true;
    		F600.events.onInputDown.add(F600Click, this );
    		
    		F800 = game.add.sprite(89,569,'pointSpace');
    		F800.inputEnabled = true;
        	F800.input.useHandCursor = true;
    		F800.events.onInputDown.add(F800Click, this );
    		
    		F1000 = game.add.sprite(89,686,'pointSpace');
    		F1000.inputEnabled = true;
        	F1000.input.useHandCursor = true;
    		F1000.events.onInputDown.add(F1000Click, this );
    		
//////////////////////////////////////////////////////////////////////////////////////////

    		H200 = game.add.sprite(249,223,'pointSpace');
    		H200.inputEnabled = true;
        	H200.input.useHandCursor = true;
    		H200.events.onInputDown.add(H200Click, this );
    		
    		H400 = game.add.sprite(249,339,'pointSpace');
    		H400.inputEnabled = true;
        	H400.input.useHandCursor = true;
    		H400.events.onInputDown.add(H400Click, this );
    		
    		H600 = game.add.sprite(249,453,'pointSpace');
    		H600.inputEnabled = true;
        	H600.input.useHandCursor = true;
    		H600.events.onInputDown.add(H600Click, this );
    		
    		H800 = game.add.sprite(249,569,'pointSpace');
    		H800.inputEnabled = true;
        	H800.input.useHandCursor = true;
    		H800.events.onInputDown.add(H800Click, this );
    		
    		H1000 = game.add.sprite(249,686,'pointSpace');
    		H1000.inputEnabled = true;
        	H1000.input.useHandCursor = true;
    		H1000.events.onInputDown.add(H1000Click, this );
    		
//////////////////////////////////////////////////////////////////////////////////////////

    		S200 = game.add.sprite(411,223,'pointSpace');
    		S200.inputEnabled = true;
        	S200.input.useHandCursor = true;
    		S200.events.onInputDown.add(S200Click, this );
    		
    		S400 = game.add.sprite(411,339,'pointSpace');
    		S400.inputEnabled = true;
        	S400.input.useHandCursor = true;
    		S400.events.onInputDown.add(S400Click, this );
    		
    		S600 = game.add.sprite(411,453,'pointSpace');
    		S600.inputEnabled = true;
        	S600.input.useHandCursor = true;
    		S600.events.onInputDown.add(S600Click, this );
    		
    		S800 = game.add.sprite(411,569,'pointSpace');
    		S800.inputEnabled = true;
        	S800.input.useHandCursor = true;
    		S800.events.onInputDown.add(S800Click, this );
    		
    		S1000 = game.add.sprite(411,686,'pointSpace');
    		S1000.inputEnabled = true;
        	S1000.input.useHandCursor = true;
    		S1000.events.onInputDown.add(S1000Click, this );
    		
//////////////////////////////////////////////////////////////////////////////////////////

	    	C200 = game.add.sprite(570,223,'pointSpace');
    		C200.inputEnabled = true;
        	C200.input.useHandCursor = true;
    		C200.events.onInputDown.add(C200Click, this );
    		
    		C400 = game.add.sprite(570,339,'pointSpace');
    		C400.inputEnabled = true;
        	C400.input.useHandCursor = true;
    		C400.events.onInputDown.add(C400Click, this );
    		
    		C600 = game.add.sprite(570,453,'pointSpace');
    		C600.inputEnabled = true;
        	C600.input.useHandCursor = true;
    		C600.events.onInputDown.add(C600Click, this );
    		
    		C800 = game.add.sprite(570,569,'pointSpace');
    		C800.inputEnabled = true;
        	C800.input.useHandCursor = true;
    		C800.events.onInputDown.add(C800Click, this );
    		
    		C1000 = game.add.sprite(570,686,'pointSpace');
    		C1000.inputEnabled = true;
        	C1000.input.useHandCursor = true;
    		C1000.events.onInputDown.add(C1000Click, this );
        },
        
        update: function () 
        {
        	if(gameDone >= 20)
        	{
        		gameDone = 0;
        		quitGame();
        	}
        },
    };
};