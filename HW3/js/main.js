window.onload = function() 
{
	var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );
	game.state.add('Boot', BasicGame.Boot);
	game.state.add('Preloader', BasicGame.Preloader);
	game.state.add('MainMenu', BasicGame.MainMenu);
	game.state.add('Game', BasicGame.Game);
	game.state.add('EndGame', BasicGame.EndGame);
	game.state.start('Boot');
};
