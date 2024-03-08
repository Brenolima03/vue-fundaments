<template>
  <header class="header">
    Header
  </header>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener("resize", this.resize);
    },
    beforeUnmount() {
      // Destruir libs, eventos, listeners, etc
      console.log("beforeUnmount");
      window.removeEventListener("resize", this.resize)
    },
    unmounted() {
      console.log("unmounted");
    },

    methods: {
      resize($event) {
        console.log($event);
      }
    }
  }
</script>

<style>
  .title {
    font-size: 20px;
    color: blue;
  }

  .title-home {
    font-size: 20px;
    color: green;
  }

  .text {
    color: grey;
  }

  .text-home {
    color: #42b983;
  }

  .todo-items {
    background: #000;
    margin: 0 0 5px 0;
    color: #fff;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
