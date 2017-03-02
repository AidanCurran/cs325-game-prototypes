"use strict";

GameStates.makeGame = function( game, shared ) 
{
    var bills = null;
    var MAXBILLS = 150;
    
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
        	bill.reset(0, Math.random() * 600);
        	bill.body.velocity.x = 500;
        	bill.body.velocity.y = 0;
        }
    
    return {
    
        create: function () 
        {
            bills = game.add.group();
    		for(var i = 0; i < MAXBILLS; i++) 
    		{
        		// Create each bullet and add it to the group.
        		var bill = game.add.sprite(0, 0, 'bills');
        		bills.add(bill);

        		// Set its pivot point to the center of the bullet
		        bill.anchor.setTo(0.5, 0.5);

    		    // Enable physics on the bullet
		        game.physics.enable(bill, Phaser.Physics.ARCADE);

    		    // Set its initial state to "dead".
    		    bill.kill();
    		}
            
           //  bills.anchor.setTo( 0.5, 0.5 );
//             game.physics.enable( bills, Phaser.Physics.ARCADE );
//             bills.body.collideWorldBounds = true;
//             bills.inputEnabled = true;
//             bills.events.onInputDown.add( function() { quitGame(); }, this );
        },
    
    	
    
        update: function () 
        {
        	//if (game.input.activePointer.isDown) {
        		throwMoney();
    		//}
        }
        
        
    };
};