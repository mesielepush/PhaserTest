import scene2 from "./menu";

import constants from './constants'
class play extends Phaser.Scene{
    constructor (){
        super({key:'play'});
    }
    preload(){
        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 9,
                end: 17
            })
        });
        this.anims.create({
            key: "down",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 18,
                end: 26
            })
        });
        this.anims.create({
            key: "up",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 0,
                end: 8
            })
        });
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 27,
                end: 35
            })
        });
        this.anims.create({
            key: "blaze",
            duration: 50,
            frames: this.anims.generateFrameNames("daze", {
                prefix: "fire0",
                suffix: ".png",
                end: 55
            }),
            showOnStart: true,
            hideOnComplete: true
        });
        this.textures.addSpriteSheetFromAtlas("hooded",{
            frameWidth:64,
            frameHeight:64,
            atlas:"characters",
            frame:"hooded"
        });
        this.textures.addSpriteSheetFromAtlas("mandy",{
            frameWidth:64,
            frameHeight:64,
            atlas:"characters",
            frame:"mandy"
        });

        

    }
    create(){
        
        this.anna = this.physics.add.sprite(400,400,"anna",26).setScale(2); 
        this.hooded = this.physics.add.sprite(200, 200, "hooded", 26).setScale(2).setImmovable(true);
        this.fireAttacks = this.physics.add.group();
        this.assassins = this.physics.add.group({ immovable: true });
        this.assassins.add(this.hooded);
        //this.physics.add.existing() manual add 
        window.hooded = this.hooded;
        window.anna = this.anna;


        this.anna.setSize(40,50).setOffset(10,10);
        this.anna.setCollideWorldBounds(true);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.input.on("pointermove", (pointer) => {
            if (pointer.isDown) { //is clicking
                let fire = this.add.sprite(pointer.worldX, pointer.worldY, "daze", "fire00.png").play("blaze").setSize(30,70);
                this.fireAttacks.add(fire);
                fire.on("animationcomplete", () => {
                    fire.destroy();
                })
            }
        });
        this.physics.world.addCollider(this.anna,this.assassins, () =>{
            this.anna.destroy();
            this.hooded.destroy()
        });
        this.physics.world.addCollider(this.fireAttacks, this.assassins, (fireAttacks, hooded) => {
            fireAttacks.destroy();
            hooded.destroy();

            let x = 0;
            let y = 0;
            switch (Phaser.Math.Between(0, 1)) {
                case 0: x = Phaser.Math.Between(0, this.game.renderer.width);
                    break;
                case 1: y = Phaser.Math.Between(0, this.game.renderer.height);
            }
            for (let i = 0; i < 2; i++) { //spawn 2
                this.assassins.add(this.physics.add.sprite(x, y, "hooded", 26).setScale(2).setImmovable(true));
            }
        });
        
        

    }
    update(time,delta){
        
        
            for (let i = 0; i < this.assassins.getChildren().length; i++) {
                this.physics.accelerateToObject(this.assassins.getChildren()[i], this.anna);
    
            }
       
            
       
        
        
        
        
            if (this.anna.active === true) {
                if (this.keyboard.D.isDown === true) {
                    this.anna.setVelocityX(constants.anna.speed);
    
                }
    
                if (this.keyboard.W.isDown === true) {
                    this.anna.setVelocityY(-constants.anna.speed);
                }
    
                if (this.keyboard.S.isDown === true) {
                    this.anna.setVelocityY(constants.anna.speed);
                }
    
                if (this.keyboard.A.isDown === true) {
                    this.anna.setVelocityX(-constants.anna.speed);
                }
                if (this.keyboard.A.isUp && this.keyboard.D.isUp) { //not moving on X axis
                    this.anna.setVelocityX(0);
                }
                if (this.keyboard.W.isUp && this.keyboard.S.isUp) { //not pressing y movement
                    this.anna.setVelocityY(0);
                }
    
                if (this.anna.body.velocity.x > 0) { //moving right
                    this.anna.play("right", true);
                } else if (this.anna.body.velocity.x < 0) { //moving left
                    this.anna.anims.playReverse("left", true);
                } else if (this.anna.body.velocity.y < 0) { //moving up
                    this.anna.play("up", true);
                } else if (this.anna.body.velocity.y > 0) { //moving down
                    this.anna.play("down", true);
                }
            }
        
    }
}
export default play