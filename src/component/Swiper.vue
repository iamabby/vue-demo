<template>
    <div>
        <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/1.jpg" alt=""  />
        </div>
        <div class="swiper-slide">
             <img src="../assets/2.jpg" alt=""  />
        </div>
        <div class="swiper-slide">
             <img src="../assets/3.jpg" alt=""  />
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
   
</div>
    </div>
</template>


<script>
import Swiper from 'swiper';
export default {
    components:{
        name:"Swiper",
    },
    mounted() {
        new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
   
  })        
    }
}
      
</script>



<style>
.swiper-container {
    width:100%;
    height: 650px;
} 


</style>


