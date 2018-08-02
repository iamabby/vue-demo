<template>
    <div class="imgzoom">

        <div>
            <div class="tabCon">
                <div v-for="(item,index) in temps" :key="index">
                    <img-zoom :src="item.imgUrl" width="450" height="250" :bigsrc="item.imgUrl" :configs="configs"></img-zoom>
                </div>
            </div>
            <ul>
                <li v-for="(item,index) in tabs" :class="{active:index == num}" :key="index" @click="tab(index)">
                    {{item}}
                </li>
            </ul>

        </div>

    </div>

</template>




<script>
import imgZoom from 'vue2.0-zoom';
import con1 from "../assets/contact-banner.jpg";
import con2 from "../assets/contact-banner.jpg";
import con3 from "../assets/contact-banner.jpg";

export default {
    name:"Imgzoom",
    components:{
        imgZoom,
    },
    data(){
        
     return{
            tabContents: ["内容一", "内容二","内容三"],
            tabs: ["标题一", "标题二","标题三"],
            num: 1,
            temps:[
                {
                    imgUrl:con1
                },
                {
                    imgUrl:con2
                },
                {
                    imgUrl:con3
                }
            ],
             configs: {
             width:650,
             height:350,
             maskWidth:100,
             maskHeight:100,
             maskColor:'red',
             maskOpacity:0.2
           }
            
        }
    },
     methods: {
        tab(index) {
            this.num = index;
        }
    },
   
}

</script>