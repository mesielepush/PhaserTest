import loadScene from './loadScene'
import menu from './menu'
import play from './play'

const config = ()=>{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: "arcade",
            arcade: {
                debug: true
            }
        },
        
        scene: [loadScene,menu,play],
        render:{
            pixelArt:true
        }
    };
    
    var game = new Phaser.Game(config);
    
    /* function preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');
    
        this.load.image('sky', 'assets/skies/nebula.jpg');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/muzzleflash4.png');

        
    }
    
    function create ()
    {
        this.add.image(400, 300, 'sky');
    
        var particles = this.add.particles('red');
    
        var emitter = particles.createEmitter({
            speed: 50,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
    
        var logo = this.physics.add.image(400, 100, 'logo');
    
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
    
        emitter.startFollow(logo);
    } */
    
};

export default config

