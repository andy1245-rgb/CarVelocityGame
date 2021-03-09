import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 225.5,
        y: 140
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "sprite2clone" },
        this.whenIReceiveSprite2clone
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenIReceiveSprite2clone() {
    this.createClone();
  }

  *startAsClone() {
    this.goto(this.stage.vars.i * 130, this.stage.vars.y);
  }
}
