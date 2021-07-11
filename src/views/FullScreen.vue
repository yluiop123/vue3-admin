<template>
    <div style="background:#0f375f">
         <el-row :gutter="20" style="height:400px;">
             <!--一周内漏洞统计 -->
            <el-col :span="8" id="bugCount">
            </el-col>
            <!--3d地球 -->
            <el-col :span="8" id="main">
            </el-col>
            <!--当日漏洞统计饼图 -->
            <el-col :span="8" id="nowBugCount">
            </el-col>
        </el-row>
        <el-row :gutter="20" style="height:400px;">
             <!--攻击来源统计 -->
            <el-col :span="8" id="bugSource">
            </el-col>
            <!---->
            <el-col :span="8" id="score">
            </el-col>
            <!-- -->
            <el-col :span="8" id="deviceCount">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';
import { reactive,onMounted } from "vue";
import request from '../utils/request';
export default {
    name: "fullscreen",
    setup() {
        
        onMounted(() => {
            //加载3d地球
            var myChart = echarts.init(document.getElementById('main'));
            var uploadedDataURL = './geodata.json';
            var baseTexture = null;
            var option = null;
            var geoJson = null;
            // 请求world.json文件
            function getGeoJsonData() {
                request({
                    url: uploadedDataURL,
                    method: 'get',
                }).then((jsonObj=>{
                    geoJson = jsonObj;
                    getBaseTexture();
                }))
            }

            // 生成球面纹理
            function getBaseTexture() {
                echarts.registerMap('world', geoJson);
                let canvas = document.createElement('canvas');
                baseTexture = echarts.init(canvas, null, {
                    width: 4096,
                    height: 2048,
                });
                baseTexture.setOption({
                    backgroundColor: '#031c48',
                    geo: {
                        type: 'map',
                        map: 'world',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        boundingCoords: [
                            [-180, 90],
                            [180, -90],
                        ],
                        roam: false,
                        itemStyle: {
                            normal: {
                                areaColor: '#2455ad',
                                borderColor: '#000c2d',
                            },
                            emphasis: {
                                areaColor: '#357cf8',
                            },
                        },
                        label: {
                            normal: {
                                fontSize: 20,
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                            emphasis: {
                                fontSize: 30,
                                show: true,
                                textStyle: {
                                    color: 'yellow',
                                },
                            },
                        },
                    },
                });
                drawEarth();
            }

            // 绘制球体
            function drawEarth() {
                option = {
                    grid:{
                        y:50
                    },
                    backgroundColor: '#013954',
                    tooltip: {
                        trigger: 'item',
                    },
                    globe: {
                        baseTexture: baseTexture, // 基础纹理
                        globeRadius: 150, // 球面半径
                        environment: './environment.jpg',
                        shading: 'color',
                        light: {
                            // 光照阴影
                            main: {
                                color: '#fff', // 光照颜色
                                intensity: 1, // 光照强度
                                alpha: 40,
                                beta: -30,
                            },
                            ambient: {
                                color: '#fff',
                                intensity: 1,
                            },
                        },
                        viewControl: {
                            alpha: 30,
                            beta: 160,
                            autoRotate: true, // 开启自动旋转
                            autoRotateAfterStill: 10,
                            distance: 240,
                        },
                    },
                    series: [
                        {
                            name: '世界贸易情况',
                            type: 'lines3D',
                            coordinateSystem: 'globe',
                            effect: {
                                show: true,
                            },
                            blendMode: 'lighter',
                            lineStyle: {
                                width: 2,
                            },
                            data: [],
                            silent: false,
                        },
                    ],
                };
                // 随机数据 i控制线数量
                for (let i = 0; i < 10; i++) {
                    option.series[0].data = option.series[0].data.concat(rodamData());
                }
                myChart.clear();
                myChart.setOption(option, true);
            }

            function rodamData() {
                let name = '随机数据' + Math.random().toFixed(5) * 100000;
                // 模拟数据，构造飞线的起始经纬度
                let longitude = 116.2;
                let latitude = 39.56;
                let longitude2 = Math.random() * 360 - 180;
                let latitude2 = Math.random() * 180 - 90;
                return {
                    coords: [
                        [longitude, latitude],
                        [longitude2, latitude2],
                    ],
                    value: (Math.random() * 3000).toFixed(2),
                };
            }

            getGeoJsonData();

            //漏洞统计堆叠图
            const bugCountChart = echarts.init(document.getElementById('bugCount'));
            const bugCountOption = {
                title: {
                    text: '漏洞统计图',
                    textStyle: {
                        color: 'rgba(250,250,250,0.6)'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    textStyle:{
                        color:'#fff'
                    },
                    data: ['信息', '低危', '中危', '高危']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '信息',
                        type: 'line',
                        stack: '数量',
                        areaStyle: {},
                        data: [ 3, 5, 5, 15, 10, 8, 5]
                    },
                    {
                        name: '低危',
                        type: 'line',
                        stack: '数量',
                        areaStyle: {},
                        data: [ 3, 5, 7, 5, 5, 8, 2]
                    },
                    {
                        name: '中危',
                        type: 'line',
                        stack: '数量',
                        areaStyle: {},
                        data: [ 2, 5, 5, 8, 8, 2, 5]
                    },
                    {
                        name: '高危',
                        type: 'line',
                        stack: '数量',
                        areaStyle: {},
                        data: [9, 6, 2, 5, 8, 4, 2]
                    }
                ]
            };
            bugCountChart.setOption(bugCountOption);

            const nowBugCountChart = echarts.init(document.getElementById('nowBugCount'));
            const nowBugCountoption = {
                title: {
                    text: '当日漏洞统计',
                    left: 'center',
                    textStyle: {
                        color: 'rgba(250,250,250,0.6)'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    textStyle:{
                        color:'#fff'
                    },
                },
                series: [
                    {
                        name: '漏洞级别',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 5, name: '信息'},
                            {value: 2, name: '低危'},
                            {value: 5, name: '中危'},
                            {value: 2, name: '高危'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                color:'#fff',
                                //shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            nowBugCountChart.setOption(nowBugCountoption);

            //攻击来源统计
            const bugSourceChart = echarts.init(document.getElementById('bugSource'));
            const bugSourceOption = {
                title: {
                    text: '攻击源统计图',
                    textStyle: {
                        color: 'rgba(250,250,250,0.6)'
                    }
                },
                grid:{
                    x:80,
                },
                backgroundColor: "#0f375f",
                barWidth: 15,
                xAxis: {
                    type: 'value',
                    splitLine: {                       
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)",
                            type: 'dashed'
                        }
                    },
                    axisTick: {
                        show: false
                    },

                    axisLabel: { //  改变x轴字体颜色和大小
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['亚洲', '欧洲', '大洋洲', '南美洲', '北美洲', '大洋洲','南极洲'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: { //  改变y轴颜色
                        lineStyle: {
                            color: '#2c4054'
                        }
                    },
                    axisLabel: { //  改变y轴字体颜色和大小
                        //formatter: '{value} m³ ', //  给y轴添加单位
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16
                        }
                    }
                },
                series: [{
                        type: 'bar',
                        name: "来源",
                        barWidth : 30,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, 
                                    position:"insideRight", 
                                    textStyle: {
                                        color: "#FFFFFF",
                                        fontSize: 16,
                                        fontWeight: 600
                                    }
                                },
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(24,144,255,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(24,144,255,0)'
                                }]),
                                barBorderRadius:15
                            
                            }
                        },
                        data: [19, 29, 39, 81, 29, 39]
                    }
                ]
            };
            bugSourceChart.setOption(bugSourceOption);

            //系统评分
            const scoreChart = echarts.init(document.getElementById('score'));
            const scoreOption = {
                series: [{
                    type: 'gauge',
                    axisLine: {
                        lineStyle: {
                            width: 30,
                            color: [
                                [0.3, '#67e0e3'],
                                [0.7, '#37a2da'],
                                [1, '#fd666d']
                            ]
                        }
                    },
                    pointer: {
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        distance: -30,
                        length: 8,
                        lineStyle: {
                            color: '#fff',
                            width: 2
                        }
                    },
                    splitLine: {
                        distance: -30,
                        length: 30,
                        lineStyle: {
                            color: '#fff',
                            width: 4
                        }
                    },
                    axisLabel: {
                        color: 'auto',
                        distance: 40,
                        fontSize: 20
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} 分',
                        color: 'auto'
                    },
                    data: [{
                        value: 88
                    }]
                }]
            };
            scoreChart.setOption(scoreOption);

            //设备统计
            const deviceCountChart = echarts.init(document.getElementById('deviceCount'));
            const deviceCountOption = {
                title: {
                    text: '设备统计图',
                    textStyle: {
                        color: 'rgba(250,250,250,0.6)'
                    }
                },
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: '办公室', max: 20},
                        { name: '实验室', max: 20},
                        { name: '会议室', max: 20},
                        { name: '研究院', max: 20},
                        { name: '市场部', max: 20},
                        { name: '研发部', max: 20}
                    ]
                },
                series: [{
                    name: '设备类型',
                    type: 'radar',
                    data: [
                        {
                            value: [4, 3, 15, 10, 18, 5],
                            name: '主机'
                        },
                        {
                            value: [5, 14, 17, 15, 12, 18],
                            name: '防火墙'
                        },
                        {
                            value: [3, 11, 10, 13, 12, 3],
                            name: '交换机'
                        },
                        {
                            value: [7, 16, 20, 16, 15, 18],
                            name: '路由器'
                        }
                    ]
                }]
            };
            deviceCountChart.setOption(deviceCountOption);
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
