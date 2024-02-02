import { Scene, Color, PerspectiveCamera, WebGLRenderer } from 'three';

export class InitScene {
    readonly scene: Scene;
    readonly camera: PerspectiveCamera;
    readonly renderer: WebGLRenderer;

    constructor() {
        this.scene = new Scene();
        this.scene.background = new Color(0xffffff);

        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);

        this.renderer = new WebGLRenderer();

        document.body.appendChild(this.renderer.domElement);
    }
}

