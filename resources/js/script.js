import { DragControls } from '../../three.js/examples/jsm/controls/DragControls.js';

/* Moteur de Rendu / Canvas */
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* Camera */
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.5, 1000 );

/* Scene */
const scene = new THREE.Scene();

/* Mise en place */
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/* Redimentionnement Auto Canvas */
function updateViewportSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", updateViewportSize);
updateViewportSize();

/* Cube */
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
const animate = function () {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};
animate();

/* Sphere */
const geometry2 = new THREE.SphereGeometry( 0.8, 45, 45 );
const material2 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

/* liste des objets pour l'interaction */
var objects = [];
objects.push(cube);
objects.push(sphere);

/* Controles */
var controls = new DragControls( objects, camera, renderer.domElement );
controls.addEventListener( 'dragstart', function ( event ) {
	event.object.material.color = new THREE.Color(0xff0000) ;
});
controls.addEventListener( 'dragend', function ( event ) {
	event.object.material.color = new THREE.Color(0x00ff00);
});

/* Rendu */
renderer.render(scene, camera);