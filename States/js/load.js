var loadState = {
	//preload is another standard Phaser function that we use to define and load assets
	preload: function(){

		//Adds a loading label on the screen
		var loadingLabel = game.add.text(80,150, 'loading...',
							{font: '30px Courier', fill: '#ffffff'})

		//Load all of the assets. The first parameter is the variable that will point to the image and the second parameter is the image file itself

		game.load.image('player', 'assets/player.png')
		game.load.image('win', 'assets/win.png')


	},

	create:function(){
		game.state.start('menu')
	}


}