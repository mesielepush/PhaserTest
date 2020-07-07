import scene2 from "./menu";

import constants from './constants'
class play extends Phaser.Scene{
    constructor (){
        super({key:'play'});
    }
    preload(){
        this.anims.create({
            key: "dazzle",
            frameRate: 20,
            frames: this.anims.generateFrameNames("daze",{
                prefix: "daze0",
                suffix: ".png",
                start: 0,
                end:41,
            }),
            repeat: -1
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

        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("hooded", {
                frames: [143,144,145,146,147,148,149,150,151]
            })
        });
        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start:9,
                end:17
            })
        });

    }
    create(){
        let pimple = this.add.sprite(100,100,'daze','daze015.png');
        pimple.play("dazzle");
        let anna = this.add.sprite(400,400,"anna").setScale(2).anims.playReverse('left'); 
        let hooded = this.add.sprite(200,200, "hooded").setScale(2).play('right');
        window.hooded = hooded;
        window.anna = anna;
        window.pimple = pimple;

        pimple.on("animationupdate", ()=>{
            console.log('ahhhhh')
        });
        pimple.on("animationrepeat", ()=>{
            console.log('LEVELUP')
        });

    }
}
export default play