import THREE from 'three';
import MainView from './MainView';

export default class SphereView extends MainView {
  constructor(model) {
    super(model);

    const sphere = this.create();
    sphere.position.z = -300;
    this.add(sphere);
  }

  create() {
    const {radius, segments, rings} = this.model;

    return new THREE.Mesh(
      new THREE.SphereGeometry(radius, segments, rings),
      new THREE.MeshLambertMaterial({wireframe: true})
    );
  }
}
