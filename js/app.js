// Enemies our player must avoid
var Enemy = function(x,y,speed) {

    this.x = x;
    this.y = y;
    this.speed = speed;

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    /*this.x = this.x + this.speed * dt;

    this.y = this.y;*/
    this.x = this.x+((Math.random() * (15 - 1 + 1) + 1)*dt*35);

   this.y = this.y;

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

   

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyPress) {
  
    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };

    if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };
  
    if (this.y < 0) {
        setTimeout(function () {
            this.x = 202;
            this.y = 405;
        }, 600);

    };
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
    allEnemies.push(new Enemy(0,60));
    allEnemies.push(new Enemy(0,145));
    allEnemies.push(new Enemy(0,230));


var player = new Player(205,325);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
