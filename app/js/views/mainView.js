import Observer from '../observer';
import RenderingContext from '../renderingContext';

const renderingContext = RenderingContext.getDefault(document.querySelector('#container'));
const {scene, camera, renderer, controls} = renderingContext;

export default class MainView extends Observer {
  constructor(model) {
    super();
    this.model = model;
    this.update();
  }

  add(mesh) {
    renderingContext.scene.add(mesh);
  }

  update() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(() => this.update());
  }
}
