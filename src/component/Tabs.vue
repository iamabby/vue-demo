<template>
    <div>
     
        <div class="tabCon">
            <div v-for='(itemCon,index) in tabContents' v-show=" index == num" :key="index">
                {{itemCon}}
            </div>
        </div>
         <ul>
            <li  v-for="(item,index) in tabs" :class="{active:index == num}" :key="index" @click="tab(index)">
                {{item}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    components:{
        name:"Tabs",
    },
     data(){
        return{
            tabContents: ["内容一", "内容二","内容三"],
            tabs: ["标题一", "标题二","标题三"],
            num: 1,
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }
}
</script>
<style lang="less" scoped>

</style>










 


<style lang="less" scoped>
.imgzoom{
    width: 400px;
    height: 400px;
    img{
        width: 100%;
    
    }
}
</style>

