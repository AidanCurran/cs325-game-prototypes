"use strict";
GameStates.makePreloader = function( game ) 
{
	var background = null;
	var preloadBar = null;
	var ready = false;
    return {
        preload: function () 
        {
            background = game.add.sprite(0, 0, 'preloaderBackground');
            preloadBar = game.add.sprite(200, 650, 'preloaderBar');
            game.load.setPreloadSprite(preloadBar);
            game.load.image('titlePage', 'assets/ferrellMenu.jpg');
            game.load.image('pointSpace', 'assets/ps.png');
            game.load.image('doneSpace', 'assets/doneSpace.png');
 			game.load.image('playButton', 'assets/theface.png');
 			game.load.image('backArrow', 'assets/backArrow.png');
			game.load.image('background', 'assets/gameBoardv2.png');
			game.load.image('comicsPage', 'assets/comicsPage.png');
			game.load.audio('backgroundMusic', ['assets/kong.mp3']);
 			game.load.audio('titleMusic', ['assets/jeopardyMusic.mp3']);
 			game.load.audio('backgroundMusic2', ['assets/Hatoa.mp3']);
 			game.load.audio('backgroundMusic3', ['assets/BlackSands.mp3']);
        },
    
        create: function () 
        {
            preloadBar.cropEnabled = false;
        },
    
        update: function () 
        {
            if (game.cache.isSoundDecoded('titleMusic') && ready == false)
            {
                ready = true;
                game.state.start('MainMenu');
            }
        }
    };
};
