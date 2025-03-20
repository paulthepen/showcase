import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default function setScene() {
//Scene Setup
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 7;
    camera.position.y = 3;
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(w, h);
    document.getElementById("spaceScene")?.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    scene.add(setBackground());
    const ufo = setUFO();
    scene.add(ufo);

    function animate(t=0) {
        requestAnimationFrame(animate);
        ufo.rotation.z = t * 0.001;
        renderer.render(scene, camera);
    }
    animate();
}

const setUFO = () => {
    const curve = new THREE.EllipseCurve(0, 0, 1.5, 1.5, 0, 2 * Math.PI, false, 1);
    const points = curve.getPoints(50);
    const shape = new THREE.Shape(points);
    const extrudeSettings = {
        depth: .25,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 1,
        bevelSegments: 10
    }
    const saucer = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({
        color: 0x44ff44,
        metalness: 1,
        roughness: 0.6
    });
    const ufo = new THREE.Mesh(saucer, material);
    ufo.rotation.x = -Math.PI / 2;

    return ufo;
};

const setBackground = () => {
    const sceneElements = new THREE.Group();
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
        starsVertices.push((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200);
    }
    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    sceneElements.add(stars);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    sceneElements.add(light);
    const light2 = new THREE.HemisphereLight(0xffffff, 0x666666, 2);
    sceneElements.add(light2);

    return sceneElements;
}

