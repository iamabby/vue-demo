<template>
    <div class="footerBox">
        <div class="footer">
            <div class="mainContent">
                <div class="contact">
                    <p>联系我们
                        <span class="telphone">400-8050-562</span>
                    </p>
                    <p class="slogan">为物联网提供更便捷的蓝牙接入</p>
                </div>
                <div class="footerTable">
                    <table>
                        <tr>
                            <td>
                                <router-link to="/about">关于我们</router-link>
                            </td>
                            <td>
                                <router-link to="/contact">联系我们</router-link>
                            </td>
                            <td>
                                <router-link to="/download">资料下载</router-link>
                            </td>
                            <td>
                                <router-link to="/support">技术支持</router-link>
                            </td>
                            <td>
                                <router-link to="/product">产品中心</router-link>
                            </td>
                            <td>
                                <router-link to="/solution">解决方案</router-link>
                            </td>
                            <td>
                                <p>微信公众号</p>
                                <img src=".././assets/erweima.jpg" alt="" class="erweima" />

                            </td>
                            <td>
                               <share></share>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="bottomer">
           <div class="mainContent">
                <div class="blogroll">
                    <span>友情链接：</span>
                    <a href="http://www.ickey.cc/e/" target="_blank">云汉电子社区</a>
                    <a href="http://www.elecfans.com/" target="_blank">电子发烧友</a>
                    <a href="http://www.ti.com.cn/" target="_blank">德州仪器（TI）</a>
                </div>

                <div class="copyright">Copyright © 2016 深圳市昇润科技有限公司 版权所有粤ICP备15015853号</div>

            </div>
        </div>
    </div>
</template>


<script>
import Share from "./Share";
export default {
    components:{
    name:"Footer",
    Share
    },
    
    
}
</script>


<style >
.footer{
    width: 100%;
    padding: 30px 0;
    margin-top: 20px;
    font-size: 14px;
    color: #fff;
    background: #535353;
}
.footer a{
    color: #fff;
}
.contact{
    display: inline-block;
    vertical-align: middle;
    width: 30%;
    text-align: left;
}
.telphone{
    padding-left: 20px;
    font-size: 26px;
}
.slogan{
    width: 240px;
    margin-top: 15px;
    padding: 10px 15px;
    font-size: 16px;
    border-top: 1px solid #fff;
}
.footerTable{
    display: inline-block;
    vertical-align: middle;
    width: 68%;
    text-align: right;

}
.footerTable table{
    width: 100%;
}
.footerTable table td{
    position: relative;
    padding: 20px ;
    text-align: center;
    box-sizing: border-box;
}
.erweima{
    width: 120px;
    margin-top: 10px;
}
.bottomer{
    width: 100%;
    padding: 10px 0;
    line-height: 24px;
    font-size: 12px;
     color: #a3a3a3;
     background: #3c3b3a;
}
.bottomer div{
 display: inline-block;
 vertical-align: middle;
 margin: 0 20px;
}
.bottomer a{
    margin: 0 15px;
}
div.copyright{
    margin-left: 80px;
}
</style>

