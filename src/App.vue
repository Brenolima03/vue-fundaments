<template>
  <TheHeader v-if="showHeader"/>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"

export default {
  name: "App",
  components: {
    TheHeader
  },
  data() {
    return {
      showHeader: true,
      firstName: "Jon",
      lastName: "Snow",
      showName: false,
      accessLevel: 'admin'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
