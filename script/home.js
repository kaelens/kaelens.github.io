const modelColor = 0x7B61FF;
const bgColor = 0xffffff;
const modelGeometry = new THREE.Geometry();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
const material = new THREE.MeshPhongMaterial({
  color: modelColor,
  wireframe: true,
  side: THREE.DoubleSide,
});


camera.position.z = 400;

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setClearColor(0xffffff);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const geometry = new THREE.IcosahedronGeometry(15, 1);

const planet = new THREE.Mesh(geometry, material);
planet.scale.x = planet.scale.y = planet.scale.z = 10;
scene.add(planet);

const render = function () {
  requestAnimationFrame(render);

  planet.rotation.x -= 0.001;
  planet.rotation.y += 0.002;

  renderer.render(scene, camera);
};

render();
