<template>
    <div>
        <pre>
            {{ $route.query.page }}
        </pre>
        User
        <button @click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$router)
        },
        methods: {
            login() {
                this.$router.push("/");
            }
        },
    }
</script>