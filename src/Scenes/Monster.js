class Monster extends Phaser.Scene {

    keyF;
    keyS;
    keyA;
    keyD;
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.smile_x = 300;
        this.smile_y = 380;

        this.l_arm_x = 390;
        this.l_arm_y = 400;

        this.r_arm_x = 210;
        this.r_arm_y = 400;

        this.l_leg_x = 360;
        this.l_leg_y = 470;

        this.r_leg_x = 240;
        this.r_leg_y = 470;

        this.r_horn_x = 330;
        this.r_horn_y = 270;
    
        this.l_horn_x = 280;
        this.l_horn_y = 270;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.l_arm = this.add.sprite(this.l_arm_x, this.l_arm_y, "monsterParts", "arm_greenB.png");
        my.sprite.r_arm = this.add.sprite(this.r_arm_x, this.r_arm_y, "monsterParts", "arm_greenB.png");
        
        my.sprite.l_leg = this.add.sprite(this.l_leg_x, this.l_leg_y, "monsterParts", "leg_greenC.png");
        my.sprite.r_leg = this.add.sprite(this.r_leg_x, this.r_leg_y, "monsterParts", "leg_greenC.png");

        my.sprite.l_horn = this.add.sprite(this.l_horn_x, this.l_horn_y, "monsterParts", "detail_green_horn_small.png");
        my.sprite.r_horn = this.add.sprite(this.r_horn_x, this.r_horn_y, "monsterParts", "detail_green_horn_small.png");


        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_human_green.png");
        
        my.sprite.smile = this.add.sprite(this.smile_x, this.smile_y, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.smile_x, this.smile_y, "monsterParts", "mouthF.png");


        my.sprite.fangs.visible = false;
        my.sprite.r_arm.flipX = true;
        my.sprite.r_leg.flipX = true;
        my.sprite.l_horn.flipX = true;
        
        
        

        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.keyS.isDown) {
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if(this.keyF.isDown) {
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }

        if(this.keyA.isDown) {
            for(const s in my.sprite) {
                my.sprite[s].x--;
            }
        }

        else if(this.keyD.isDown) {
            for(const s in my.sprite) {
                my.sprite[s].x++;
            }
        }
        
    }

}