"use strict";

var startTime = Date.now();
var container;
var camera, scene, renderer, stats;
var cube;

window.addEventListener('load', init);
// window.addEventListener('load', loadResources);
    
function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 30, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    scene = new THREE.Scene();

    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // var material = new THREE.MeshNormalMaterial();
    // var material = getShaderMaterial();

    cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), material);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    render();
}

function render() {
    requestAnimationFrame(render);

    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.0225;
    // cube.rotation.z += 0.0175;

    // var dtime = Date.now() - startTime;

    // // Pass the time to the shader uniform
    // uTime.value = dtime;

    // cube.scale.x = 1.0 + 0.3 * Math.sin(dtime / 300);
    // cube.scale.y = 1.0 + 0.3 * Math.sin(dtime / 300);
    // cube.scale.z = 1.0 + 0.3 * Math.sin(dtime / 300);

    renderer.render(scene, camera);
}

// var vertexShader, fragmentShader;

// function loadResources() {
//     return Promise.all([
//         window.fetch('vertex-shader.glsl'),
//         window.fetch('fragment-shader.glsl')
//     ])
//     .then(function(res) {
//         return Promise.all([res[0].text(), res[1].text()]);
//     })
//     .then(function(data) {
//         vertexShader = data[0]; fragmentShader = data[1];
//     })
//     .then(init);
// }

// var uTime = { type: 'f', value: null };

// function getShaderMaterial() {
//     return new THREE.ShaderMaterial({
//         attributes: {},
//         uniforms: { uTime: uTime },
//         vertexShader: vertexShader,
//         fragmentShader: fragmentShader,
//         vertexColors: THREE.VertexColors
//     });
// }
