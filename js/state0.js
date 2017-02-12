var demo = {},
    centerX = 1600 / 2,
    centerY = 800 / 2,
    rockman_1,
    speed = 5;

demo.state0 = function() {};
demo.state0.prototype = {
    preload: function() {
        game.load.image("rockman_1", "assets/sprites/rockman_1.png");
        game.load.image("rockman_1", "assets/sprites/rockman_2.png");
        game.load.image("rockman_1", "assets/sprites/rockman_3.png");
    },
    create: function() {
        game.stage.backgroundColor = "#AAAAAA";
        console.log("state0");
        addChangeStateEvent();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        rockman_1 = game.add.sprite(centerX, centerY, "rockman_1");
        rockman_1.anchor.setTo(0.5, 0.5);

    },
    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        	rockman_1.x += speed;
        }

        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        	rockman_1.x -= speed;
        }

        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        	rockman_1.y -= speed;
        }

        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        	rockman_1.y += speed;
        }
    },
};

function changeState(i, stateNum) {
    game.state.start("state" + stateNum);
};

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addChangeStateEvent() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

};