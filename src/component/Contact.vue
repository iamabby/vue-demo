<template>

    <div>
        <img src="../assets/contact-banner.jpg" alt="" class="banner" />

        <div class="contcat">
            <div class="contact_box">

                <h6 class="ch6">
                    佛山市芯谱电子科技有限公司
                </h6>
                <p>
                    <b class="p-contact-b">地址：</b>佛山市南海区西樵镇大同龙高路段吴全年综合楼首层3号
                </p>

                <p>
                    <b class="red">联系电话：1512160785</b>
                </p>
                <p>
                    <b class="red">微信号：wx_liangzh</b>
                </p>
                <p>
                    <b class="p-contact-b" style="line-height:1.5;">邮箱：</b>
                    <span style="line-height:1.5;">marketing@tuner168.com</span>
                </p>

            </div>

            <div class="map_block">
                <baidu-map class="map" :center="{lng: 113.00074, lat: 23.112487}" :zoom="15">
                    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                    <bm-marker :position="{lng:  113.00074, lat: 23.112487}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                        <bm-label content="佛山市芯谱电子科技有限公司" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: -35, height: 30}" />
                    </bm-marker>
                </baidu-map>
            </div>

        </div>
    </div>

</template>



<script>
  export default {

data () {
    return {
      center:"佛山",
    }
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = 113.00074
      this.center.lat = 23.112487
      this.zoom = 15
    }
  }
    
  }
</script>


<style  scoped>
.banner{
    width: 100%;
}
.contcat{
    display: table;
    width: 1200px;
    margin:50px auto ;
    clear: both;
}
.contact_box{
    float: left;
    text-align: left;
    font-size: 14px;
    color: #999;
}
.ch6{
    font-size: 18px;
}
.contact_box p{
    margin: 8px 0;
}
.map_block{
    float: right;
    width: 700px;
    height: 500px;
}
.map{
    width: 700px;
    height: 500px;
}
</style>


