import constants from './constants'
class menu extends Phaser.Scene{

    constructor(){
        super({key:'menu'})
    }
    init(){
        
        console.log('something simetyhing')
    }
    create(){
        this.add.image(0,0,'title_bg').setOrigin(0)
    }
    
}
export default menu