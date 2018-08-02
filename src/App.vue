<template>
  <div id="app">

    <navs></navs>
    <router-view></router-view>
   <footers></footers>
   <fixbox></fixbox>
  </div>
</template>

<script>
import Navs from "./component/Navs";
import Footers from "./component/Footer";
import Fixbox from "./component/Fixbox";
export default {
  name: 'app',
  components:{
    Navs,
    Footers,
    Fixbox,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
body,div,ul,ol,li,p,span{
  padding:0;
  margin:0;
}
body{
  min-width: 1400px;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
}
a{
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
