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
            game.load.image('titlePage', 'assets/MainMenu.png');
            game.load.image('spaces', 'assets/Spaces.png');
            game.load.image('diceSpot', 'assets/diceSpot.png');
                
 			game.load.image('redCar', 'assets/r.png');
 			game.load.image('greenCar', 'assets/g.png');
 			game.load.image('yellowCar', 'assets/y.png');
 			game.load.image('blueCar', 'assets/b.png');
 			
 			game.load.image('redTurn', 'assets/rt.png');
 			game.load.image('greenTurn', 'assets/gt.png');
 			game.load.image('yellowTurn', 'assets/yt.png');
 			game.load.image('blueTurn', 'assets/bt.png');
 			
 			game.load.spritesheet( 'dices', 'assets/ds.png', 100, 100);
 			game.load.image('gameOver','assets/gameOver.png',0,0);
 			
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
