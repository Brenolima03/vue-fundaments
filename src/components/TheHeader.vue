<template>
    <div>
        <button @click.once="onClick">Send</button>
    </div>

    <div
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
    >
        Mouse
    </div>
    <br><br>

    <form action="https://google.com"
        @submit.prevent="onSubmit"
    >
        <input
            type="text"
            @keyup.enter="onKeyUp">
        <button type="submit">Send</button>
    </form>

</template>

<script>
export default {
    name: "App",
    data() {
        return {}
    },

    methods: {
        onClick($event) {
            console.log("click", $event);
        },
        onMouseOver($event) {
            console.log("mouse over", $event);
        },
        onMouseOut($event) {
            console.log("mouse out", $event);
        },
        onSubmit($event) {
            console.log("submit", $event);
        },
        onKeyUp($event) {
            console.log("keyup", $event);
        },
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
