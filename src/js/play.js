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

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.input.on("pointermove", (pointer) => {
            if (pointer.isDown) { //is clicking
                let fire = this.add.sprite(pointer.worldX, pointer.worldY, "daze", "fire00.png").play("blaze");
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
       
            
       
        
        
        
        
        if(this.anna.active === true){
            
            if (this.keyboard.D.isDown === true){
                this.anna.play("right",true);
                this.anna.setVelocityX(64)
            }
            if (this.keyboard.A.isDown === true){
                this.anna.anims.playReverse("left",true);
                this.anna.setVelocityX(-64)
            }
            if(this.keyboard.A.isUp && this.keyboard.D.isUp){
                this.anna.setVelocityX(0)
            }
            if (this.keyboard.W.isDown === true){
                this.anna.play("up",true);
                this.anna.setVelocityY(-64)
            }
            if (this.keyboard.S.isDown === true){
                this.anna.anims.playReverse("down",true);
                this.anna.setVelocityY(64)
            }
            if(this.keyboard.S.isUp && this.keyboard.W.isUp){
                this.anna.setVelocityY(0)
            }
        }
        
    }
}
export default play