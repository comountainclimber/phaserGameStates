var menuState = {
	create: function(){
	//Here we display the name of the game. When defining text, the first two parameters are x and y positional values
	var nameLabel = game.add.text(20,20, 'Menu States!',
					{font: '50px Arial', fill:'#ffffff'})

	var nameLabel = game.add.text(20,60, '(and a shitty game)',
					{font: '25px Arial', fill:'#ffffff'})

	var startLabel = game.add.text(80, game.world.height-80,
					'Press the "W" key to play!',
					{font: '25px Arial', fill:'#ffffff'})
	//we then have to define the wkey as Phaser.Keyboard.W so that we can act when the player presses it
	var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W)

	// When the player presses the W key we will call the start function
	wkey.onDown.addOnce(this.start, this)
	},

	//The start function calls the play state
	start: function(){
		game.state.start('play')
	},

}