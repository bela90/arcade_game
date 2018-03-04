const CANVAS_WIDTH = 505;
const PLAYER_X_MOVE_VALUE = 101;
const PLAYER_Y_MOVE_VALUE = 83;
const PLAYER_START_X = 202;
const PLAYER_START_Y = 325;

// Enemies our player must avoid
var Enemy = function(x,y,speed) {

    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // if bug goes outside canvas width, return it to the start position
    if(this.x >= CANVAS_WIDTH){
        
        this.x = 0;
        //range between 90-140
        this.speed=(Math.random()*51)+90;
    }

    checkCollision(this);

};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function(x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};


Player.prototype.update = function(dt) {

    // function is empty since player is updated 
    // on key press

};


Player.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Player is moving on key press
Player.prototype.handleInput = function (keyPress) {

    // move player left until player is in the maximum left position, ie. x = 0
    if (keyPress == 'left' && this.x > 0) {
        this.x -= PLAYER_X_MOVE_VALUE;
    };

    // move player right until player is in the maximum right position, ie. x = 404
    if (keyPress == 'right' && this.x < 404) {
        this.x += PLAYER_X_MOVE_VALUE;
    };

    // move player up until player is in the maximum up position
    if (keyPress == 'up' && this.y > 0) {
       
        this.y -= PLAYER_Y_MOVE_VALUE;
    
        // if player is in maximum up position set alert 
        // and return player in the start position
        if (this.y == -7) {        
            
            setTimeout(function(){

                alert('Congratulations! You made it!');
                player.x = PLAYER_START_X;
                player.y = PLAYER_START_Y;

            }, 400);
        }
    };

    // move player down until player is in the maximum down position
    if (keyPress == 'down' && this.y < 408) {

        this.y += PLAYER_Y_MOVE_VALUE;
    };

};


// Instantiating objects for enemies 
var allEnemies = [];
    allEnemies.push(new Enemy(0,60,145));
    allEnemies.push(new Enemy(0,145,70));
    allEnemies.push(new Enemy(200,145,70));
    allEnemies.push(new Enemy(0,230,80));

// Instantiating object for enemies 
var player = new Player(PLAYER_START_X, PLAYER_START_Y, 50);


// This listens for key presses and sends the keys to 
// Player.handleInput() method
document.addEventListener('keyup', function(e) {
    
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// check for collision between enemy and player
var checkCollision = function(enemyBug) {
    
    // checking if player and enemy bug characters are overlapping from every side
    // if they are overlapping, put player on the start position
    if (
        player.y + 139 >= enemyBug.y + 77
        && player.x + 17 <= enemyBug.x + 99
        && player.y + 63 <= enemyBug.y + 143
        && player.x + 84 >= enemyBug.x + 1) {
        player.x = PLAYER_START_X;
        player.y = PLAYER_START_Y;
    }
};








