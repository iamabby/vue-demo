<template>
    <div>
        <ul class="news_list">
            <li v-for="(item,index) in items" :key="index">
                <router-link :to="`/Newsdetail/${item.id}`">
                    <div class="pic">
                        <img :src="item.newsPicture" alt="" />
                    </div>
                    <div class="news_info">
                        <div class="title">{{item.newsTitle}}</div>
                        <div class="summary">{{item.newsSummary}}</div>
                        <div class="datetime">{{item.newsReleaseTime}}</div>
                        <div class="share">
                            <share></share>
                        </div>
                    </div>

                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import Share from "./Share"
export default {
    components:{
        name:"Newslist",
        Share,
    },
    data(){
     return{
          items:[]
     }
    },
    mounted() {
        axios.get("https://www.simplelinker.com/company/simple/getNewsList")
        .then((res)=>{
            this.items=res.data.result;
        })
        .then(error=>{
            console.log(error);
        })
    },
}
</script>

<style lang="less">
.news_list{
    width: 1400px;
    margin: 40px auto 0;
    li{
        position: relative;
        padding: 20px 0;
        border-bottom: 1px solid #eee;
    }
    .pic{
        width: 20%;
        display: inline-block;
        vertical-align: middle;
    }
    .news_info{
        width: 76%;
        display: inline-block;
        vertical-align: top;
        margin-left: 30px;
        text-align: left;
    }
    .title{
        font-size: 16px;
        color: #000;
    }
    .summary{
        margin: 25px 0;
        font-size: 14px;
        color: #999;

    }
    .share{
        position: absolute;
        right: 0;
        bottom: 20px;
    }
}
</style>

