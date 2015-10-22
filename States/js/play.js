//Create function is to prepare the keyboard for input and to create player and win sprites
var playState = {
create: function() {
	this.keyboard = game.input.keyboard;

	this.player = game.add.sprite(16, 16, 'player')
	game.physics.enable(this.player, Phaser.Physics.ARCADE)

	this.win = game.add.sprite(256, 256, 'win')
	game.physics.enable(this.win, Phaser.Physics.ARCADE)

},

update:function(){
	//when the player sprite and win sprite overlap the win function is called (notice that the win function is ccapitalized whole the win sprite is not)
	game.physics.arcade.collide(this.player, this.win, this.Win, null, this)

//The player needs to move!
	//along x axis

	if(this.keyboard.isDown(Phaser.Keyboard.A)) {
		this.player.body.velocity.x=-175
	} else if (this.keyboard.isDown(Phaser.Keyboard.D)){
		this.player.body.velocity.x=175
	} else{
		this.player.body.velocity.x=0
	}

	if(this.keyboard.isDown(Phaser.Keyboard.W)) {
		this.player.body.velocity.y=-175
	} else if (this.keyboard.isDown(Phaser.Keyboard.S)){
		this.player.body.velocity.y=175
	} else{
		this.player.body.velocity.y=0
	}
},

		Win: function() {
			game.state.start('win')
		},
	}