"use strict";
GameStates.makePreloader = function( game ) 
{
	var background = null;
	var preloadBar = null;
	var ready = false;
    return {
        preload: function () 
        {
            background = game.add.sprite(-100, 100, 'preloaderBackground');
            preloadBar = game.add.sprite(300, 400, 'preloaderBar');
            game.load.setPreloadSprite(preloadBar);
            game.load.image('titlePage', 'assets/willFerrell.jpg');
            game.load.image('spaces', 'assets/Spaces.png');
            game.load.image('diceSpot', 'assets/diceSpot.png');
            
 			game.load.image('playButton', 'assets/theface.png');
			game.load.image('background', 'assets/background.png');
			game.load.image('logo', 'assets/jeopardyLogo.jpg');
			game.load.audio('backgroundMusic', ['assets/kong.mp3']);
 			game.load.audio('titleMusic', ['assets/jeopardyMusic.mp3']);
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
