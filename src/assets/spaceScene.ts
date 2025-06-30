import * as THREE from "three";
import marsImg from '@/assets/imgs/mars.jpg'
import jupiterImg from '@/assets/imgs/jupiter.jpg'
import neptuneImg from '@/assets/imgs/neptune.jpg'

interface PlanetMesh extends THREE.Mesh {
    radius?: number;
}

export default function setScene(onPlanetEnter?: (planetName: string | null) => void) {
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

    const planets = setPlanets();

    scene.add(setBackground());
    const {ufoGroup, ufoMesh} = setUFO();

    const keyState:Record<string, boolean> = {};
    document.addEventListener("keydown", (e) => {
        keyState[e.code] = true;
    });
    document.addEventListener("keyup", (e) => {
        keyState[e.code] = false;
    });


    // --- Add mobile touch controls ---
    function createTouchButton(label: string, code: string, style: Partial<CSSStyleDeclaration>) {
        const btn = document.createElement("button");
        btn.innerText = label;
        btn.style.position = "fixed";
        btn.style.zIndex = "1000";
        btn.style.opacity = "0.65";
        btn.style.borderRadius = "8px";
        btn.style.border = "none";
        btn.style.fontSize = "18px";
        btn.style.width = "48px";
        btn.style.height = "48px";
        btn.style.background = "#333";
        btn.style.color = "#fff";
        btn.style.touchAction = "none";
        Object.assign(btn.style, style);

        // Touch events
        btn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            keyState[code] = true;
        });
        btn.addEventListener("touchend", (e) => {
            e.preventDefault();
            keyState[code] = false;
        });

        // Optional: also support mouse for testing on desktop
        btn.addEventListener("mousedown", (e) => {
            e.preventDefault();
            keyState[code] = true;
        });
        btn.addEventListener("mouseup", (e) => {
            e.preventDefault();
            keyState[code] = false;
        });
        btn.addEventListener("mouseleave", (e) => {
            keyState[code] = false;
        });

        document.body.appendChild(btn);
        return btn;
    }

    // Only show on small screens
    if (window.innerWidth < 800) {
        // Arrow keys
        createTouchButton("▲", "ArrowUp", { left: "60px", bottom: "105px" });
        createTouchButton("◀", "ArrowLeft", { left: "10px", bottom: "55px" });
        createTouchButton("▼", "ArrowDown", { left: "60px", bottom: "55px" });
        createTouchButton("▶", "ArrowRight", { left: "110px", bottom: "55px" });
        //TODO: Font Awesome icons

        // Up/Down (ascend/descend)
        createTouchButton("+", "Space", { right: "30px", bottom: "105px", width: "64px" });
        createTouchButton("-", "ShiftLeft", { right: "30px", bottom: "55px", width: "64px" });
    }
    // --- End mobile controls ---



    const speed = 0.4; // Adjust for desired feel

    scene.add(ufoGroup);

    planets.forEach(planet => {
        scene.add(planet);
    })

    function animate(t=0) {
        requestAnimationFrame(animate);

        const maxBank = 0.4;
        const bankSpeed = 0.1;

        let closestPlanet = null;

        planets.forEach(planet => {
            const distance = ufoGroup.position.distanceTo(planet.position);
            const minThreshold = planet?.radius? planet.radius + 5: 0;
            const maxThreshold = planet?.radius? planet.radius + 10: 0;

            if (distance < minThreshold) {
                const pushDir = ufoGroup.position.clone().sub(planet.position).normalize();

                ufoGroup.position.copy(
                    planet.position.clone().add(pushDir.multiplyScalar(minThreshold + .5))
                );
            }

            if (distance < maxThreshold) {
                closestPlanet = planet.name;
            }
        });

        if (onPlanetEnter) onPlanetEnter(closestPlanet);

        if (keyState["ArrowUp"]) {
            ufoGroup.position.x -= Math.sin(ufoGroup.rotation.y) * speed;
            ufoGroup.position.z -= Math.cos(ufoGroup.rotation.y) * speed;
        }
        if (keyState["ArrowDown"]) {
            ufoGroup.position.x += Math.sin(ufoGroup.rotation.y) * speed;
            ufoGroup.position.z += Math.cos(ufoGroup.rotation.y) * speed;
        }
        if (keyState["ArrowLeft"]) ufoGroup.rotation.y += 0.03;
        if (keyState["ArrowRight"]) ufoGroup.rotation.y -= 0.03;
        if (keyState["Space"]) ufoGroup.position.y += speed;
        if (keyState["ShiftLeft"] || keyState["ShiftRight"]) ufoGroup.position.y -= speed;

        let targetBank = 0;
        if (keyState["ArrowLeft"]) targetBank = -maxBank;
        else if (keyState["ArrowRight"]) targetBank = maxBank;
        ufoMesh.rotation.y += (targetBank - ufoMesh.rotation.y) * bankSpeed;

        camera.position.x = ufoGroup.position.x + Math.sin(ufoGroup.rotation.y)*10;
        camera.position.y = ufoGroup.position.y + 3;
        camera.position.z = ufoGroup.position.z + Math.cos(ufoGroup.rotation.y)*10;
        camera.lookAt(ufoGroup.position);

        ufoMesh.rotation.z = t * 0.0008;
        renderer.render(scene, camera);
    }
    animate();
}

const setPlanets = () => {
    const loadTexture = (url: string) => {
        const loader = new THREE.TextureLoader();
        return loader.load(url);
    };

    const planets: PlanetMesh[] = [];
    const planetData = [
        { name: "About Me", position: new THREE.Vector3(30, 0, -30), texture: marsImg, radius: 10 },
        { name: "Portfolio", position: new THREE.Vector3(-65, 5, -70), texture: jupiterImg, radius: 25 },
        { name: "Resume", position: new THREE.Vector3(80, -20, -40), texture: neptuneImg, radius: 8 },
    ];

    planetData.forEach(planet => {
        const geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            map: planet.texture ? loadTexture(planet.texture) : undefined,
            color: planet.texture ? 0xffffff : 0x999999, // fallback color
        });

        const planetObj = new THREE.Mesh(geometry, material) as PlanetMesh;
        planetObj.position.copy(planet.position);
        planetObj.name = planet.name;
        planetObj.radius = planet.radius;
        planets.push(planetObj);
    });

    return planets;

}

const setUFO = () => {
    const ufoGroup = new THREE.Group();
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

    ufoGroup.add(ufo);

    return {ufoGroup, ufoMesh: ufo};
};

const setBackground = () => {
    const sceneElements = new THREE.Group();
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starsVertices = [];
    for (let i = 0; i < 9000; i++) {
        starsVertices.push((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400);
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

