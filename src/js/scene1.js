class scene1 extends Phaser.Scene {
    constructor(){
        super({key:"scene1"});
    }
    preload(){
        this.load.image('background1','../src/images/star.jpg');
    }
    create(){
        this.image = this.add.image(400,300,'background1');
        this.input.keyboard.on('keyup_D', function(event){
            this.image.x += 10;
        },this)
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.input.on('pointerdown', function(event){
            this.image.x = event.x;
            this.image.y = event.y;
        },this)
    }
    update(delta) {
        if (this.key_A.isDown){
            this.image.x--;
        }
    }
}
export default scene1