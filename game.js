Game = {
// Initialize and start our game
start: function() {
// Start crafty and set a background color so that we can see it's working
Crafty.init(480, 320);
Crafty.background('green');

var map = Crafty.e("TiledLevel").tiledLevel("maps/test_map.json")
//map.bind("TiledLevelLoaded", callback )
//map.getTile(row, column, layer)
}
}