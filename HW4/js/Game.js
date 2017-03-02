"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var bills = null;
    var MAXBILLS = 100;
    var counter = 0;
    
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
        bill.kill();
    }
    
    return {
    
        create: function () 
        {
            bills = game.add.group();
    		for(var i = 0; i < MAXBILLS; i++) 
    		{
        		var bill = game.add.sprite(0, 0, 'bills');
        		bills.add(bill);
		        bill.anchor.setTo(0.5, 0.5);
		        game.physics.enable(bill, Phaser.Physics.ARCADE);
    		    bill.kill();
    		}
        },

        update: function () 
        {
        	counter++;
        	if (counter < 6 && counter > 4)
        	{
        		throwMoney();
    		}
    		if(counter > 10)
    		{
    			counter = 0;
    		}
        }
    };
};