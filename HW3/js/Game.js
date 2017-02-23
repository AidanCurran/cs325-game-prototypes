BasicGame.Game = function (game)
{
    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)
    
    this.player = null;
    this.fore = null;
};

BasicGame.Game.prototype = 
{
    create: function () 
    {
    	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    	this.map = this.game.add.tilemap('map', 32, 32, 64, 32);
        this.map.addTilesetImage('cave','cave');
        this.map.addTilesetImage('objects','objects');
        this.background = this.map.createLayer('Background');
        this.background.resizeWorld();
        this.fore = this.map.createLayer('Foreground');
        this.map.setCollisionBetween(1, 10000, true, 'Foreground');
        this.player = this.game.add.sprite( 0, 265, 'character' );
        this.game.world.addAt(this.player, 1);
        this.game.physics.arcade.enable(this.player);
        this.game.camera.follow(this.player);
        this.player.anchor.setTo( 0.5, 0.5 );
        this.player.animations.add('run-down', [0,1,2,3], 10, true);
        this.player.animations.add('run-right', [4,5,6,7], 10, true);
        this.player.animations.add('run-up', [8,9,10,11], 10, true);
        this.player.animations.add('run-left', [12,13,14,15], 10, true);
    },

    update: function () 
    {
    	this.game.physics.arcade.collide(this.player, this.fore);
	    if (this.input.keyboard.isDown(Phaser.KeyCode.LEFT))
	    {
	        this.player.x -= 1;
	        this.player.animations.play('run-left');
	    }
	    else if (this.input.keyboard.isDown(Phaser.KeyCode.RIGHT))
	    {
	        this.player.x += 1;
    	    this.player.animations.play('run-right');
    	}
    	else if (this.input.keyboard.isDown(Phaser.KeyCode.UP))
	    {
	        this.player.y -= 1;
    	    this.player.animations.play('run-up');
    	}
    	else if (this.input.keyboard.isDown(Phaser.KeyCode.DOWN))
	    {
	        this.player.y += 1;
    	    this.player.animations.play('run-down');
    	}
    	else
    	{
        	this.player.animations.stop();
        	this.player.frame = 0;
    	}
    	if (this.player.getBounds().contains(704, 32)) 
    	{
    		this.state.start('EndGame');
		}
    },

    quitGame: function (pointer) 
    {
        this.state.start('EndGame');
    }
};






