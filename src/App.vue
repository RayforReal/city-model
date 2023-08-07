<template>
    <canvas id="webgl" ref="webglRef">浏览器不支持canvas，请切换浏览器重试</canvas>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const webglRef = ref();

const initCity = () => {
    // 获取canvas元素
    const canvas = document.getElementById('webgl');
    // 创建场景
    const scene = new THREE.Scene();
    // 创建相机
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(1000, 500, 100);
    scene.add(camera);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    // 设置像素比
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // 设置场景颜色
    renderer.setClearColor(new THREE.Color(0x000000), 1)

    // 添加相机控件
    const controls = new OrbitControls(camera, canvas);
    // 是否有惯性
    controls.enableDamping = true;
    // 是否可以缩放
    controls.enableZoom = false;
    // 最近和最远距离
    controls.minDistance = 100;
    controls.maxDistance = 2000;
    // 开启右键拖动
    controls.enablePan = true;

    const start = () => {
        controls.update();
        // 渲染场景
        renderer.render(scene, camera)
        requestAnimationFrame(start)
    }
    start();
    window.addEventListener('resize', () => {
        // 更新宽高比
        camera.aspect = window.innerWidth / window.innerHeight
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        // 设置像素比
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
}
onMounted(() => {
    // 初始化三维场景
    initCity();
})
</script>

