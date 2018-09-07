<template>
    <div v-if="items.length>0">
        <img :src="items[0].productImg" alt="" />
        <div>{{items[0].productName}}</div>
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
         items:[]
        }
    },
    mounted() {
    	
    	  axios.get("https://www.simplelinker.com/company/simple/getProductDetail?product_id="+ this.$route.params.id)
            .then((response)=>{
                this.items=response.data.result;
                console.log(this.items);
            })
            .then((error)=>{
                console.log(error)
            })
    },
}
</script>
<style lang="less" scoped>

</style>

