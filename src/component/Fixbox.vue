<template>
    <div class="fixbox">
        <ul>
            <li>
                <a href="https://wpa.qq.com/msgrd?v=3&uin=1127153857&site=qq&menu=yes" target="_blank" style="position:relative;">
                    <img src="./../assets/icon-qq.png" alt="" />
                </a>
            </li>
            <li class="email">
                <img src="./../assets/icon-email.png" alt="" />
                <span>marketing@tuner168.com</span>
            </li>
            <li class="tel">
                <img src="./../assets/icon-tel.png" alt="" />
                <span>400-8050-562</span>
            </li>
            <li class="backTop" @click="backTop" >
                <img src="./../assets/icon-back.png" alt="" />
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    components:{
        name:"Fixbox",
     
    },
    data(){
       
  return{
      
  }
    },

     methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>500){
           
          }
        },
        backTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }


 

}
</script>


<style lang="scss" scoped>
.fixbox{
    position: fixed;
    z-index: 1000;
    right: 0;
    top: 55%;
    ul{
        width: 50px;
       
        li{
            position: relative;
            width: 100%;
            margin-left: 0;
            margin-bottom: 1px;
             background: #3c3b3a;
             cursor: pointer;
              span{
                display: none;
          
            }
        }
        img{
            width: 30px;
            margin: 10px auto;
        }
        li:hover{
            background: red;
           
        }
       
    }
     .email:hover{
             span{
                position: absolute;
                right: 50px;
                top: 0;
                display: block;
                width: 229px;
                height: 54px;
                line-height: 54px;
                color: #fff;
                background-color: red;
            }
        }
       
     .tel:hover{
             span{
                position: absolute;
                 right: 50px;
                top: 0;
                display: block;
                width: 229px;
                 height: 54px;
                line-height: 54px;
                color: #fff;
                background-color: red;
            }
        }   
}
</style>

