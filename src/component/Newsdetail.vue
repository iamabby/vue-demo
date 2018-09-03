<template>
    <div class="news_details">
        <div class="news_title">{{items.newsTitle}}</div>
        <div class="news_time">{{items.newsReleaseTime}}</div>
        <div>
            <img :src="items.newsPicture" alt="" />
        </div>
        <div class="news_info">{{items.newsDetail}}</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    components:{
     name:"Newsdetail"
    },
    data(){
     return{
     items:[]
     }
    },
    mounted() {
      axios.get("https://www.simplelinker.com/company/simple/getNewsDetail?NEWS_ID="+this.$route.params.id)
      .then(res=>{
          this.items=res.data.result;
      })  
      .then(error=>{
          console.log(error);
      })
    },
}
</script>

<style lang="less">
.news_details{
 width: 1400px;
 margin: 40px auto ;
 .news_title{
     font-size: 16px;
     font-weight: bold;
     color: #666;
     padding: 15px 0;
 }
 img{
     width: 100%;
     overflow: hidden;
     margin: 20px auto;
 }
 .news_info{
     font-size: 14px;
     color: #999;
     line-height: 30px;
     text-align: left;
 }
}
</style>
