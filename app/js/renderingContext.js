import THREE from 'three';
THREE.OrbitControls = require('three-orbit-controls')(THREE);

export default class RenderingContext {
  constructor(scene, camera, renderer, controls) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;
  }

  static getDefault(containerElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 0, 300);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const controls = new THREE.OrbitControls(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerElement.appendChild(renderer.domElement);
    scene.add(camera);

    const pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    scene.add(pointLight);

    return new RenderingContext(scene, camera, renderer, controls);
  }
}
