import THREE from 'three';
import MainView from './mainView';

export default class SphereView extends MainView {
  constructor(model) {
    super(model);

    const sphere = this.create();
    this.add(sphere);
  }

  create() {
    const {radius, segments, rings} = this.model;

    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, rings),
      new THREE.MeshLambertMaterial({color: 0xCC0000, wireframe: true})
    );
  }
}
