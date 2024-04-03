<template>
  <h4>User</h4>
  {{ fullName }}

  <button @click="user.first_name = 'Mauricio'">Update</button>
</template>

<script>
  import { ref, computed, watch } from 'vue';

  export default {
    name: "App",

    components: {
    },

    setup() {
      const user = ref({
        first_name: "Eunice",
        last_name: "Lima"
      })

      const fullName = computed(() => {
        return `${user.value.first_name} ${user.value.last_name}`
      })

      watch(() => user.value.first_name, () => {
        console.log("Logic");
      })

      return {
        user,
        fullName
      }
    }
  }
</script>

<style>
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
