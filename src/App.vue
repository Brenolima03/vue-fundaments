<template>
  <AppHook v-if="showAppHook"/>
  <button @click="showAppHook = !showAppHook">Toggle</button>
  <h4>User</h4>
  {{ fullName }}

  <button @click="user.first_name = 'Mauricio'">Update</button>
</template>

<script>
  import { ref, computed, watch } from 'vue';
  import AppHook from "./components/AppHook"
  export default {
    name: "App",

    components: {
      AppHook
    },

    setup() {
      const user = ref({
        first_name: "Eunice",
        last_name: "Lima"
      })

      const showAppHook = ref(true);

      const fullName = computed(() => {
        return `${user.value.first_name} ${user.value.last_name}`
      })

      watch(() => user.value.first_name, () => {
        console.log("Logic");
      })

      return {
        user,
        fullName,
        showAppHook
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
