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
            game.load.image('titlePage', 'assets/mainMenu.png');
            game.load.image('diceSpot', 'assets/DiceSpot.png');
 			game.load.image('redCar', 'assets/redcar.png');
 			game.load.image('greenCar', 'assets/greenCar.png');
 			game.load.image('yellowCar', 'assets/yellowCar.png');
 			game.load.image('blueCar', 'assets/blueCar.png');
			game.load.image('playButton', 'assets/playButton.png');
			game.load.audio('backgroundMusic', ['assets/backgroundMusic.mp3']);
 			game.load.audio('titleMusic', ['assets/carNoise.mp3']);
			game.load.image('spritesheet', 'assets/spritesheet.png');
			game.load.tilemap('Road', 'assets/roadMap.json', null, Phaser.Tilemap.TILED_JSON);
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
