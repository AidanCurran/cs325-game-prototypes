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
 			game.load.spritesheet( 'dices', 'assets/ds.png', 100, 100);
			game.load.image('background', 'assets/gameBoardv2.png');
			game.load.image('beginning', 'assets/beginning.png');
			game.load.image('star','assets/star.png');
			game.load.image('continue','assets/continue.png');
			game.load.image('check','assets/c.png');
			
			game.load.image('cPage', 'assets/comicsPage.png');
			game.load.image('fPage', 'assets/fantasyPage.png');
			game.load.image('hPage', 'assets/horrorPage.png');
			game.load.image('sPage', 'assets/scifiPage.png');
			
			game.load.image('p1w', 'assets/p1winner.png');
			game.load.image('p2w', 'assets/p2winner.png');
			game.load.image('p3w', 'assets/p3winner.png');
			game.load.image('p4w', 'assets/p4winner.png');
			
			// fantasy book questions
			game.load.image('fq1', 'assets/f200q.png');
			game.load.image('fq2', 'assets/f400q.png');
			game.load.image('fq3', 'assets/f600q.png');
			game.load.image('fq4', 'assets/f800q.png');
			game.load.image('fq5', 'assets/f1000q.png');
			// horror book questions
			game.load.image('hq1', 'assets/h200q.png');
			game.load.image('hq2', 'assets/h400q.png');
			game.load.image('hq3', 'assets/h600q.png');
			game.load.image('hq4', 'assets/h800q.png');
			game.load.image('hq5', 'assets/h1000q.png');
			// sci-fi book questions
			game.load.image('sq1', 'assets/s200q.png');
			game.load.image('sq2', 'assets/s400q.png');
			game.load.image('sq3', 'assets/s600q.png');
			game.load.image('sq4', 'assets/s800q.png');
			game.load.image('sq5', 'assets/s1000q.png');
			// comic book questions
			game.load.image('cq3', 'assets/c200q.png');
			game.load.image('cq4', 'assets/c400q.png');
			game.load.image('cq2', 'assets/c600q.png');
			game.load.image('cq1', 'assets/c800q.png');
			game.load.image('cq5', 'assets/c1000q.png');
			
			game.load.audio('incorrect', ['assets/sadTrombone.mp3']);
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
