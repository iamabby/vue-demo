<template>
    <div>
        <img :src="items.productImg" alt="" />
        <div>这个是详情界面</div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    components:{
        name:"Indexprodetail"
    },
    data(){
        return{
         items:""
        }
    },
    mounted() {
        axios.get("https://www.simplelinker.com/company/simple/getProductDetail?PRODUCT_ID="+ this.$route.params.id)
        .then((respones)=>{
           this.items=respones.data.result;
        })
        .then((error)=>{
            console.log(error);
        })
    },
}
</script>
<style lang="less" scoped>

</style>

