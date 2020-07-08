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
        
        this.anna = this.add.sprite(400,400,"anna",26).setScale(2); 
        this.hooded = this.add.sprite(200,200, "hooded",26).setScale(2);
        window.hooded = this.hooded;
        window.anna = this.anna;

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
    }
    update(time,delta){
        if (this.keyboard.D.isDown === true){
            console.log(this.anna.x);
            this.anna.play("right",true);
            this.anna.x = this.anna.x +64*(delta/1000);
        }
        if (this.keyboard.A.isDown === true){
            console.log(this.anna.x);
            this.anna.anims.playReverse("left",true);
            this.anna.x = this.anna.x -64*(delta/1000);
        }
    }
}
export default play