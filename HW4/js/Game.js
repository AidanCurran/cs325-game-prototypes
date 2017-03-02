"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var bills = null;
    var MAXBILLS = 100;
    var counter = 0;
    var score = 0;
    var time = 0;
    var scoreText, text, timer, timerEvent;
    var music = null;
    
    function quitGame() 
    {
        game.state.start('MainMenu');
    }
    
    function throwMoney()
    {
        var bill = bills.getFirstDead();
        bill.revive();
        bill.checkWorldBounds = true;
        bill.outOfBoundsKill = true;
        bill.reset(0, 100 + Math.random() * 500);
        bill.body.velocity.x = 200;
        bill.inputEnabled = true;
        bill.input.useHandCursor = true;
    	bill.events.onInputDown.add(collectMoney, this );
    }
    
    function collectMoney(bill, pointer)
    {
    	score += 1;
        bill.kill(); 
		music.play();
    }
    
    function timerEnd()
    {
    	game.state.start('MainMenu');
    }
    
    return {
        create: function () 
        {
        	music = this.add.audio('coin');
        	text = game.add.text( 550 , 15, "Collect As Much As You Can Before Time Runs Out (or hit 1000)", { fontSize: '25px', fill: '#ffffff', align: 'center' } );
        	text.anchor.setTo( 0.5, 0.0 );
        	scoreText = game.add.text(1000, 15, 'Dollas: 0', { fontSize: '25px', fill: '#ffffff' });
            bills = game.add.group();
    		for(var i = 0; i < MAXBILLS; i++) 
    		{
        		var bill = game.add.sprite(0, 0, 'bills');
        		bills.add(bill);
		        bill.anchor.setTo(0.5, 0.5);
		        game.physics.enable(bill, Phaser.Physics.ARCADE);
    		    bill.kill();
    		}
        	timer = game.time.create();
        	timerEvent = timer.add(Phaser.Timer.MINUTE * 5, this.endTimer, this);
        	timer.start();
        },
        update: function () 
        {
        	scoreText.text = 'Dollas: ' + score;
        	counter++;
        	if (counter < 6 && counter > 4)
        		throwMoney();
    		if(counter > 10)
    			counter = 0;
    		if(score >= 1000)
    			quitGame();
        },
        render: function () 
        {
        	if (timer.running) 
            	game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 25, 25, '#ffffff');
    	},
    	formatTime: function(s) 
    	{
        	var minutes = "0" + Math.floor(s / 60);
        	var seconds = "0" + (s - minutes * 60);
        	return minutes.substr(-2) + ":" + seconds.substr(-2);   
    	}
    };
};