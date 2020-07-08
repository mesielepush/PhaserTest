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
        this.hooded = this.physics.add.sprite(200,200, "hooded",26).setScale(2).setImmovable(true);
        window.hooded = this.hooded;
        window.anna = this.anna;

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
    }
    update(time,delta){
        this.physics.world.collide(this.anna,this.hooded, () =>{
            this.anna.destroy();
            this.hooded.destroy()
        })
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