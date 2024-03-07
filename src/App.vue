<template>
  <div>
    {{ fullName }}

    <h2>Ongoing todos</h2>
    <div
      v-for="todo in incompleteTodos"
      :key="todo.id"
    >
      {{ todo.title }}
    </div>
    <br><br>

    <h2>Finished todos</h2>
    <div
      v-for="todo in completeTodos"
      :key="todo.id"
    >
      {{ todo.title }}
    </div>
    <br><br>

    <h2>Todos</h2>
    <div
      v-for="todo in todos"
      :key="todo.id"
    >
      <input
        v-model="todo.completed"
        type="checkbox">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        firstName: "Jon",
        lastName: "Snow",
      },
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
    }
  },

  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },

    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    },

    completeTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },

  methods: {}
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
