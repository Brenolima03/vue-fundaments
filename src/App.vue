<template>
  <div>
    <TheHeader v-if="showHeader"/>
    <h1>Hello, {{ name }}!</h1>
    <br>
    <input
      v-model="name"
      type="text"
    ><br>
    {{ name }} <br><br>
    <button @click="showHeader = !showHeader">Ativar ou desativar header</button>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: "App",
  components: { TheHeader }, 
  data() {
    return {
      name: "Jon Snow",
      showHeader: true,
    };
  },

  // Criação
    // Preparar o ambiente
    // Ajax, inicializar variáveis
    // Não tem acesso ao template (DOM)

  // Montagem
    // Inicializar lib externa (new Lib())
    // Precisa de acesso ao template (DOM)

  // Atualização
    // Debug

  // Desmontagem
    // Remover tudo quer for necessário
    // para liberar memória (lib -> destroy())

  // Hooks
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },
  // updated() {
  //   console.log("updated");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },

  // beforeCreate() {
  //   console.log("beforeCreate");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },
  // created() {
  //   console.log("created");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },
  // mounted() {
  //   console.log("mounted");
  //   console.log("Estado", this.name);
  //   console.log("DOM: ", this.$el);
  // },

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
