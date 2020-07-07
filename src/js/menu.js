import constants from './constants'
class menu extends Phaser.Scene{

    constructor(){
        super({key:'menu'})
    }
    
    create(){

        this.add.image(this.game.renderer.width /2, this.game.renderer.height * 0.20, 'logo').setDepth(1);        
        this.add.image(0,0,'title_bg').setOrigin(0).setDepth(0);
        let playButton = this.add.image(this.game.renderer.width/2,this.game.renderer.height / 2,'play_button').setDepth(1);

        
        let options_button =this.add.image(this.game.renderer.width/2,this.game.renderer.height / 2+100,constants.image.options).setDepth(1);

        let hoverSprite = this.add.sprite(100,100,'cat')
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);

        this.sound.pauseOnBlur = true;
        this.sound.play('title_music',{
            loop: true
        })

        this.anims.create({
            key:'walk',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('cat', {
                frames: [0,1,2,3]
            })
        })


        
        playButton.setInteractive();
        playButton.on('pointerover', ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play('walk')
            hoverSprite.x = playButton.x-playButton.width;
            hoverSprite.y = playButton.y
        });
        playButton.on('pointerout', ()=>{
            hoverSprite.setVisible(false)

        });
        playButton.on('pointerup', ()=>{
            console.log('OPEN SESAME')
        });

        options_button.setInteractive();
        options_button.on('pointerover', ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play('walk')
            hoverSprite.x = options_button.x-options_button.width;
            hoverSprite.y = options_button.y
        });
        options_button.on('pointerout', ()=>{
            hoverSprite.setVisible(false)

        });
        options_button.on('pointerup', ()=>{
            console.log('options up')
        });
    }
    
}
export default menu