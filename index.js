import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 19.80518708321803,
    y: 215.6130944157206,
    direction: -172.5,
    costumeNumber: 1,
    size: 80,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: -125,
    y: 107,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3
  }),
  Sprite3: new Sprite3({
    x: -140,
    y: -88,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
