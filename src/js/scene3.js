import scene2 from "./scene2";

class scene3 extends Phaser.Scene{
    constructor (){
        super({key:'scene3'});
    }
    preload(){
        this.load.audio("song",['../src/mp3/song.mp3'])
    }
    create(){
        this.soundFX = this.sound.add("song",{loop:"true"});
        this.soundFX.play();
    }
}
export default scene3