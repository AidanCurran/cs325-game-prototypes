window.onload = function() 
{   
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() 
    {
        game.load.image( 'asteroid', 'assets/asteroid.png' );
        game.load.image( 'ground', 'assets/ground.png' );
        game.load.image( 'person', 'assets/person.png' );
    }
    
    var person;
    var rocks;
    var text;
    var a;
    
    function create() 
    {
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	game.stage.backgroundColor = '#323a75';
    	text = game.add.text(125, 180, "YOU DIED! \n      RIP");
    	text.fill = '#323a75';
    	text.style.font = '100px Arial';
	    rocks = game.add.group();
	    rocks.enableBody = true;
		rocks.physicsBodyType = Phaser.Physics.ARCADE;
    	for (var i = 0; i < 250; i++)
    	{
        	a = rocks.create(game.world.randomX, -i*30, 'asteroid');
        	a.name = 'asteroid' + i;
        	game.physics.enable( a, Phaser.Physics.ARCADE);
    	}
    	var ground = game.add.sprite(0, game.world.height - 65, 'ground');
    	person = game.add.sprite(375, game.world.height - 125, 'person');
    	game.physics.enable( person, Phaser.Physics.ARCADE);
    	person.body.collideWorldBounds = true;
    	
    }
    
    function update() 
    {
    	game.physics.arcade.overlap(person, rocks, collisionHandler, null, this);
    	rocks.y += 5;
    	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    	{
        	person.x -= 7;
    	}
    	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    	{
        	person.x += 7;
    	}
    }
    
    function collisionHandler (person, rocks) 
    {
    	person.kill();
    	rocks.kill();
    	text.fill = '#ffffff';
	}
};
