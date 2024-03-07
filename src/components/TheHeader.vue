<template>
    <div>v-model is for forms</div>
    <br><br>

    <div>
        <label>Nome</label><br>
        <input
            v-model="name"
            type="text"
        ><br>
        {{ name }}
    </div>
    <br><br>
    
    <div>
        <label>Sports</label><br>
        <select v-model="sports">
            <option value="">Choose</option>
            <option value="soccer">Soccer</option>
            <option value="skating">Skating</option>
            <option value="tennis">Tennis</option>
        </select><br>
        {{ sports }}
    </div>
    <br><br>

    <div>
        <label>NewsLetter</label><br>
        <input
            v-model="newsletter"
            type="radio"
            value="Yes"
        >
        <input
            v-model="newsletter"
            type="radio"
            value="no"
        ><br>
        {{ newsletter }}
    </div>
    <br><br>

    <div>
        <label>Contract</label><br>
        <input
            v-model="contract"
            type="checkbox"
        >Do you accept our terms?
        {{ contract }}
    </div>
    <br><br>

    <div>
        <label>Colors you like the most</label><br>
        <input
            v-model="colors"
            type="checkbox"
            value="yellow"
        >yellow<br>

        <input
            v-model="colors"
            type="checkbox"
            value="blue"
        >blue<br>

        <input
            v-model="colors"
            type="checkbox"
            value="red"
        >red<br>

        <input
            v-model="colors"
            type="checkbox"
            value="green"
        >green<br>

        {{ colors }}
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            name: "Jon Snow",
            sports: "",
            newsletter: "no",
            contract: false,
            colors: [],
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
