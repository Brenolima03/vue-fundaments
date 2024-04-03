<template>
  <h4>User</h4>
  <br>
  {{ user.first_name }}
  {{ user.last_name }}
  <br><br>
  <h4>Admin</h4>
  {{ admin.first_name }}
  {{ admin.last_name }}
  <!-- If you click on it, the name will change. -->
  <div class="square" @click="changeName()">
    
  </div>
  <AppProduct/>
</template>

<script>
  import { ref, reactive } from 'vue';
  import AppProduct from './components/products/AppProduct.vue';

  export default {
    name: "App",

    components: {
      AppProduct,
    },
    setup() {
      const user = reactive({
        first_name: "Eunice",
        last_name: "Lima"
      })

      const admin = ref({
        first_name: "Admin",
        last_name: "Master"
      })

      let name = "Breno";

      const changeName = () => {
        name = "Jon Snow";
        user.first_name = "Mauricio";
        admin.value.first_name = "Breno"
      }
      return {
        user,
        admin,
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
