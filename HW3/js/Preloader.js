BasicGame.Preloader = function (game) 
{
	this.ready = false;
};

BasicGame.Preloader.prototype = 
{
	preload: function () 
	{
		this.load.image('titlePage', 'assets/MainMenu.png');
		this.load.image('iDubbz', 'assets/iDubbz.jpg');
		this.load.image('playButton', 'assets/play_button.png');
		this.load.image('endPage', 'assets/EndPage.png');
		this.load.image('backButton', 'assets/BackButton.png');
		this.load.audio('titleMusic', ['assets/Otis McMusic.mp3']);
		this.load.audio('endMusic', ['assets/MadWorld.mp3']);
        this.game.load.tilemap('map', 'assets/Map.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.spritesheet( 'character', 'assets/character.png', 16, 32);
        this.load.image('cave', 'assets/cave.png');
        this.load.image('objects', 'assets/objects.png');
	},

	create: function () 
	{
	},

	update: function () 
	{
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
};