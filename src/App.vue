<template>
  {{ name }}
  <!-- If you click on it, the name will change. -->
  <div class="square" @click="changeName='Jon'">
    
  </div>
  <AppProduct/>
</template>

<script>
  import AppProduct from './components/products/AppProduct.vue';

  export default {
    name: "App",

    components: {
      AppProduct,
    },
    setup() {
      let name = "Breno";

      const changeName = () => {
        name = "Jon Snow";
      }
      return {
        name,
        changeName
      }
    }
  }
</script>

<style>
  .square {
    width: 100px;
    height: 100px;
    background-color: green;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
