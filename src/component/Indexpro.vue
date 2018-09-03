<template>
    <div class="index_pro">
        <h2>产品推荐</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <router-link :to="`/indexprodetail/${item.id}`">
                    <div class="pic">
                        <img :src="item.productImg" alt="" />
                    </div>
                    <div class="name"> {{item.productName}}</div>
                    <div class="specification"> {{item.productSpecification}}</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    import axios from "axios";
    import Imgzoom from "./Imgzoom";
    export default {
        components:{
            name:"Indexpro",
            Imgzoom,
        },
       data () {
    return {
      items:[],
    }
  },
        mounted() {
            axios.get("https://www.simplelinker.com/company/simple/getRecommend")
            .then((response)=>{
                this.items=response.data.result;
            })
            .then((error)=>{
                console.log(error)
            })
        },
    }
</script>


<style lang="less">
.index_pro{
    width: 1400px;
    margin: 0px auto 0;
    overflow: hidden;
    text-align: center;
    h2{
       
        padding: 20px 0;
         text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #42b983;
    }
   ul{
       width: 1400px;
       margin: 0 auto;
       overflow: hidden;
       text-align: center;
       li{
           display: inline-block;
           vertical-align: middle;
           width: 258px;
           margin: 0 20px 20px;
           text-align: center;
           border: 1px solid #ddd;
           overflow: hidden;
       }
      
   }
   
   .name{
       margin-top: 8px;
       font-size: 14px;
       color: #666;
   }
   .specification{
       font-size: 14px;
       margin:10px 0;
       color: #999;
   }
    li:hover{
           border: 1px solid #42b983;
       }
       .pic{
        width: 258px;
                
                overflow: hidden;
       
        img{
            width: 100%;
             transition: all 0.6s;
        }
   }
        .pic img:hover{
           
           transform:scale(1.2);
            
       }
}

</style>
