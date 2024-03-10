<template>
  <header class="header">
    <h1
      v-if="$slots.title" 
      class="title">
      <slot name="title"></slot>
    </h1>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </header>
</template>

<script>
  export default {
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
