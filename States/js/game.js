//note that the 'gameDiv' element matches the one in our index.html
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv')

game.state.add('boot', bootState)
game.state.add('load', loadState)
game.state.add('menu', menuState)
game.state.add('play', playState)
game.state.add('win', winState)

//After all of states are added, we start the game by calling boot state

game.state.start('boot')