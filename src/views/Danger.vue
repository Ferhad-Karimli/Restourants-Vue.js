<template>
    <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
        <h1 class="text-white display-1">Danger!</h1>
        <router-link tag="button" to="/" class="btn btn-danger btn-lg rounded-0 mt-5">Back to home</router-link>
    </div>
</template>


<style scoped>
    .container-fluid {
        width: 100%;
        height: 100vh;
        background-color: tomato;
    }
</style>