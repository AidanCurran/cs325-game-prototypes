
BasicGame.EndGame = function (game) 
{
	this.music = null;
	this.playButton = null;
};

BasicGame.EndGame.prototype = 
{
	create: function () 
	{
		this.music = this.add.audio('endMusic');
		this.music.play();
		this.add.sprite(0, 0, 'endPage');
		this.playButton = this.add.button( 300, 450, 'backButton', this.endGame, this);
	},

	update: function () 
	{
	},

	endGame: function (pointer) 
	{
		this.music.stop();
		this.state.start('MainMenu');
	}
};