import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium';
export default {
    base: './',
    plugins: [vue(),cesium()
    ],
    // optimizeDeps: {
    //     include: ['schart.js']
    // }
}