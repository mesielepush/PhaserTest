import constants from './constants'
class loadScene extends Phaser.Scene {
    constructor(){
        super({key:"loadScene"});
    }
    preload(){
        this.load.image('title_bg',"../src/images/title_bg.jpg")
        this.load.image('options_button',"../src/images/options_button.png")
        this.load.image('play_button',"../src/images/play_button.png")
        this.load.image('logo',"../src/images/logo.png")
        this.load.spritesheet('cat',"../src/images/sprites/cat.png",{
            frameWidth:32,
            frameHeight:32
        });

        this.load.spritesheet('anna', "../src/images/sprites/anna.png",{
            frameHeight:64,
            frameWidth:64
        })
        this.load.atlas('characters',"../src/images/sprites/characters.png","../src/images/sprites/characters.json")
        this.load.atlas('daze',"../src/images/sprites/daze.png","../src/images/sprites/daze.json")


        this.load.audio('title_music','../src/mp3/song.mp3');
        let loadingBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        });
        
        this.load.on('progress', (percent) =>{
            loadingBar.fillRect(0,this.game.renderer.height / 2,this.game.renderer.width * percent, 50)
            console.log(percent);

        });
        this.load.on('complete', () =>{
            console.log('DONE')
        })
    }
    create(){
        this.scene.start(constants.scenes.menu,'Hellow from the loade scene')
       
    }
    
}
export default loadScene