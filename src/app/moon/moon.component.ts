import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-moon',
  standalone: true,
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.css'
})
export class MoonComponent implements AfterViewInit {

  @ViewChild('canvasContainer')
  container!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {

    const scene = new THREE.Scene();

    const container = this.container.nativeElement;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);

    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load('/Images/moon-txt.jpg');
    const moonBump = textureLoader.load('/Images/moon-bump.jpg');

    const geometry = new THREE.SphereGeometry(1, 64, 64);

    const material = new THREE.MeshStandardMaterial({
      map: moonTexture,
      bumpMap: moonBump,
      bumpScale: 3,
      roughness: 1
    });

    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(5, 2, 5);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);

      moon.rotation.y += 0.002;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }
}