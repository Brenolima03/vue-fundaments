<!-- App.vue -->
<template>
    <AppButton
      data-vue="Jon"
      variant="danger"
      @update="getUpdate"
    >Save <template #icon>Icon</template></AppButton>
</template>

<script>
import AppButton from "./components/AppButton";

export default {
  name: "App",
  components: {AppButton},
  methods: {
    getUpdate(data) {
      console.log("getUpdate", data);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
