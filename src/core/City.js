import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import modelUrl from '../model/city.fbx';

export default class {
    constructor(scene) {
        this.scene = scene;
        this.loadCity();
    }

    /**
     * 加载模型
     */
    loadCity() {
        const fbxLoader = new FBXLoader();
        fbxLoader.load(modelUrl, (object) => {
            this.scene.add(object)
        })
    }

    start() {
        console.log(1111);
    }
}
