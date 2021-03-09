import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 198.5,
        y: 144
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sprite3clone" },
        this.whenIReceiveSprite3clone
      )
    ];
  }

  *startAsClone() {
    this.goto(this.stage.vars.i * 130, this.stage.vars.y);
  }

  *whenIReceiveSprite3clone() {
    this.createClone();
  }
}
