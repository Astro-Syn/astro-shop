import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

@Component({
  selector: 'app-moon',
  standalone: true,
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent {

 @ViewChild('canvasContainer')
  container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      this.container.nativeElement.clientWidth /
      this.container.nativeElement.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    renderer.setSize(
      this.container.nativeElement.clientWidth,
      this.container.nativeElement.clientHeight
    );

    this.container.nativeElement.appendChild(
      renderer.domElement
    );

 
//renderer
const w = window.innerWidth;
const h = window.innerHeight;

renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);


//camera



camera.position.z = 2;


//textures
const textureLoader = new THREE.TextureLoader();
const moonTexture = textureLoader.load('Images/moon-txt.jpg')
const moonBump = textureLoader.load('Images/moon-bump.jpg')


//controls

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.2;

//scene



const geomerty = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial(
    {
        map: moonTexture,
        bumpMap: moonBump,
        bumpScale: 3,
        roughness: 1,
        metalness: 0,
        
    }
)

const mesh = new THREE.Mesh(geomerty, material)

scene.add(mesh)




const light = new THREE.DirectionalLight(0xffffff, 3);
scene.add(light)
light.position.set(5, 2, 5);


scene.add(new THREE.AmbientLight(0xffffff, 0.2));


function animate(t = 0){
    requestAnimationFrame(animate)
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera);
    controls.update()

}

animate()





  }
}
