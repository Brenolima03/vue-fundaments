<template>
  <div>
    <TheHeader>
      <template v-slot:title></template>
      <h1>Home</h1>
      <template v-slot:description></template>
    </TheHeader>
    <div class="card">
      Test
    </div>
    <div>
      <BaseCard/>
    </div>

  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import BaseCard from '@/components/BaseCard.vue';

export default {
  name: "App",
  components: { TheHeader, BaseCard }, 
  data() {
    return {
    };
  },

  watch: {
  },

  computed: {},

  methods: {
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
