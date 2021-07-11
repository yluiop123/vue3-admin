<template>
    <div style="height:750px;" id="cesiumContainer">

    </div>
</template>

<script>
import { reactive,onMounted } from "vue";
import request from '../utils/request';
import { Viewer } from 'cesium';
export default {
    name: "cesium",
    setup() {
        
        onMounted(() => {
            //加载3d地球
            const viewer = new Viewer("cesiumContainer", {
                infoBox: false,
                selectionIndicator: false,
                shadows: true,
                shouldAnimate: true,
            });

        })
 
        return {
        };
    },
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}
</style>
