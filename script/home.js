var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function () {
  init();
  animate();
};

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 400;
  scene.add(camera);

  skelet = new THREE.Object3D();

  scene.add(skelet);

  var geom = new THREE.IcosahedronGeometry(15, 1);

  var mat = new THREE.MeshPhongMaterial({
    color: 0x008c53,
    wireframe: true,
    side: THREE.DoubleSide,
  });

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 10;
  skelet.add(planet);

  var light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  skelet.rotation.x -= 0.001;
  skelet.rotation.y += 0.002;
  renderer.clear();

  renderer.render(scene, camera);
}
