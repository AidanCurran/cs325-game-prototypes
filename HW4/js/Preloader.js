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
            preloadBar = game.add.sprite(500, 400, 'preloaderBar');
            game.load.setPreloadSprite(preloadBar);
            game.load.image('titlePage', 'assets/mainMenu.png');
			game.load.image('snob', 'assets/snob.png');
			game.load.image('bills', 'assets/dollarBill.png');
			game.load.image('playButton', 'assets/playButton.png');
			game.load.image('endPage', 'assets/EndPage.png');
			game.load.image('backButton', 'assets/BackButton.png');
			game.load.audio('titleMusic', ['assets/MoneyMoneyMoney.mp3']);
        	// game.load.tilemap('map', 'assets/Map.json', null, Phaser.Tilemap.TILED_JSON);
//         	game.load.spritesheet( 'character', 'assets/character.png', 16, 32);
//         	game.load.image('cave', 'assets/cave.png');
//         	game.load.image('objects', 'assets/objects.png');
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
