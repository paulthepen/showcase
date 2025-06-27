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

    const keyState = {};
    document.addEventListener("keydown", (e) => {
        keyState[e.code] = true;
    });
    document.addEventListener("keyup", (e) => {
        keyState[e.code] = false;
    });

    const speed = 0.05; // Adjust for desired feel

    scene.add(ufo);

    function animate(t=0) {
        requestAnimationFrame(animate);

        if (keyState["ArrowUp"]) {
            ufo.position.x -= Math.sin(ufo.rotation.y) * speed;
            ufo.position.z -= Math.cos(ufo.rotation.y) * speed;
        }
        if (keyState["ArrowDown"]) {
            ufo.position.x += Math.sin(ufo.rotation.y) * speed;
            ufo.position.z += Math.cos(ufo.rotation.y) * speed;
        }
        if (keyState["ArrowLeft"]) ufo.rotation.y -= 0.03;
        if (keyState["ArrowRight"]) ufo.rotation.y += 0.03;
        if (keyState["Space"]) ufo.position.y += speed;
        if (keyState["ShiftLeft"] || keyState["ShiftRight"]) ufo.position.y -= speed;

        // camera.position.z = ufo.position.z + 10;
        // camera.position.y = ufo.position.y + 3;
        // camera.lookAt(ufo.position);

        ufo.rotation.z = t * 0.0009;
        renderer.render(scene, camera);
    }
    animate();
}

const setUFO = () => {
    const curve = new THREE.EllipseCurve(0, 0, 1.5, 1.5, 0, 2 * Math.PI, false, 1);
    const curveSmall = new THREE.EllipseCurve(0, 0, .1, .1, 0, 1.9 * Math.PI, false, 1);
    const points = curve.getPoints(50);
    const pointsSmall = curveSmall.getPoints(100);
    const shape = new THREE.Shape(points);
    const shapeSmall = new THREE.Shape(pointsSmall);
    const extrudeSettings = {
        depth: .2,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 1.75,
        bevelSegments: 20
    }
    const saucer = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const material = new THREE.MeshStandardMaterial({
        color: 0x44ff44,
        metalness: 1,
        roughness: 0.6
    });
    const saucerTop = new THREE.ExtrudeGeometry(shapeSmall, extrudeSettings);
    const materialSmall = new THREE.MeshStandardMaterial({
        color: 0x666666,
        metalness: 1,
        roughness: 0.6
    });
    const ufo = new THREE.Mesh(saucer, material);
    const cockpit = new THREE.Mesh(saucerTop, materialSmall);
    cockpit.position.z=.4;
    ufo.add(cockpit);
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
    const light3 = new THREE.DirectionalLight(0xffffff, .5);
    light3.position.set(0, -10, 10);
    sceneElements.add(light3);

    return sceneElements;
}

