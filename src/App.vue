<template>
  <div>
    <AppProducts/>
    {{ $store.getters.total }}
        <pre>
            {{ $store.state.cart }}
        </pre>
    <button @click="updateUser()">Update user</button>
  </div>
</template>

<script>
  import AppProducts from './components/products/AppProducts.vue';
  export default {
    name: "App",
    components: {
      AppProducts
    },
    data() {
      return {}
    },
    methods: {
      updateUser() {
        const newUser = {
          firstName: "Breno",
          lastName: "Lima",
          email: "email@email.com"
        }
        this.$store.commit("storeUser", newUser)
      }
    },
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
