<template>
    <div>

      <div>
      <indexpro></indexpro>
      </div>

      <router-view></router-view>
    </div>
</template>




<script>
	import Indexpro from "./Indexpro";
    export default{
       
        
        components:{
        	 name:"Product",
        Indexpro,
        }
    }
</script>