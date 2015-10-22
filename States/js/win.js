var winState = {

	create:function(){
		var winLabel = game.add.text(80,80, 'YOU WON!!!!!!!!!!!!!',
						{font:'50px Arial', fill:'#00FF00'})


		//give players instructions on how to retart

		var startLabel = game.add.text(80, game.world.height-80,
						'press "W" to restart',
						{font: '25px Arial', fill:'#ffffff'})

	//we define the wkey so we can act when the player presses it

	var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W)

	// When the player presses the W key we will call the start function
	wkey.onDown.addOnce(this.restart, this)
	},


	restart: function(){
		game.state.start('menu')
	},
}