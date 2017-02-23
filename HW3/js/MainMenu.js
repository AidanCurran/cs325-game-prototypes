BasicGame.MainMenu = function (game) 
{
	this.music = null;
	this.playButton = null;
};

BasicGame.MainMenu.prototype = 
{
	create: function () 
	{
		this.music = this.add.audio('titleMusic');
		this.music.play();
		this.add.sprite(0, 0, 'titlePage');
		this.add.sprite(227, -20, 'iDubbz');
		this.playButton = this.add.button( 70, 300, 'playButton', this.startGame, this);
	},

	update: function () 
	{
	},

	startGame: function (pointer) 
	{
		this.music.stop();
		this.state.start('Game');
	}
};
