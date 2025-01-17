import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Play } from "../scenes/play.js";
import { Play2 } from "../scenes/play2.js";
import { Retry } from "../scenes/retry.js";
import { Victoria } from "../scenes/victoria.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: false,
    },
  },
  scene: [Preloads, MainMenu, Play, Play2, Retry, Victoria], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
};

const game = new Phaser.Game(config);
