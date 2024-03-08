<template>
  <div>
    <input
      v-model="name"
      type="text"
    ><br><br>
    {{ name }}
    <br><br>

    <label>First name: </label>
    <input
      v-model="user.firstName"
      type="text"
    ><br>
    <label>Last name: </label>
    <input
      v-model="user.lasttName"
      type="text"
    ><br><br>
    {{ user.firstName }} {{ user.lasttName }}
    <br><br><br>

    <select
      v-model="pageCount"
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select><br><br>
    {{ pageCount }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: '',
      pageCount: 5,
      user: {
        firstName: "",
        lasttName: "",
      }
    };
  },

  watch: {
    name() {
      this.saveUsername();
    },
    pageCount() {
      this.changePage();
    },
    user: {
      handler() {
        console.log("User updated.");
      },
      deep: true,
    },
  },

  computed: {},

  methods: {
    saveUsername() {
      console.log("Ajax");
      console.log(this.name);
    },
    changePage() {
      console.log("Ajax changePage");
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
