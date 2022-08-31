import Button from "../js/button.js";

let score;

// Clase Victoria, donde se crean los botones, el logo y el fondo del menú derrota
export class Victoria extends Phaser.Scene {
  constructor() {
    super("Victoria");
  }

  init(data) {
    score = data.score;
  }

  create() {
    // Fondo del menú victoria
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "victoria_bg"
      )
      .setScale(1.1);
    // tuki
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "tuki"
    );
    // Texto muestra el puntaje que sacaste al ganar!
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY/ 0.9,
        `VOS SI QUE SABES JUGAR, Puntaje alcanzado: ${score}`
      )
      .setOrigin(0.5);

    // Boton para volver a jugar
    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Volver al menu",
      this,
      () => {
        // Instrucción para pasar a la escena MainMenu
        this.scene.start("MainMenu");
      }
    );
  }
}
