import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 52.363129656302505,
        y: 34.11203107159656
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.position = 0;
    this.vars.velocit = -2.8352126185418928e-14;

    this.watchers.velocit = new Watcher({
      label: "Sprite1: velocit",
      style: "normal",
      visible: true,
      value: () => this.vars.velocit,
      x: 442,
      y: 141
    });
  }

  *whenGreenFlagClicked() {
    if (this.stage.vars.i < 2) {
      this.stage.vars.y = 105;
      if (this.stage.vars.i == 0) {
        this.stage.vars.y = -90;
      }
      if (this.random(1, 2) == 1) {
        this.broadcast("sprite2clone");
      } else {
        this.broadcast("sprite3clone");
      }
      this.stage.vars.i += 1;
    }
  }

  *whenGreenFlagClicked2() {
    this.size = 80;
    this.stage.vars.angle = 90;
    this.direction = this.stage.vars.angle;
    this.goto(0, 0);
    this.vars.velocit = 0;
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.stage.vars.angle += -2.5;
        this.direction = this.stage.vars.angle;
      }
      if (this.keyPressed("right arrow")) {
        this.stage.vars.angle += 2.5;
        this.direction = this.stage.vars.angle;
      }
      if (this.keyPressed("up arrow")) {
        this.vars.velocit += 0.5;
      }
      if (this.keyPressed("down arrow")) {
        this.vars.velocit += -0.5;
      }
      this.move(this.vars.velocit);
      this.vars.velocit = this.vars.velocit * 0.915;
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        if (this.vars.velocit > 0) {
          this.vars.velocit = 0 - this.vars.velocit;
        } else {
          this.vars.velocit = 0 - this.vars.velocit;
        }
      }
      if (this.touching(this.sprites["Sprite3"].andClones())) {
        if (this.vars.velocit > 0) {
          this.vars.velocit = 0 - this.vars.velocit;
        }
        if (this.vars.velocit < 0) {
          this.vars.velocit = 0 + this.vars.velocit;
        }
      }
      if (this.touching(this.sprites[undefined].andClones())) {
        if (this.vars.velocit > 0) {
          this.vars.velocit = 0 - this.vars.velocit;
        }
        if (this.vars.velocit < 0) {
          this.vars.velocit = 0 + this.vars.velocit;
        }
      }
      yield;
    }
  }
}
