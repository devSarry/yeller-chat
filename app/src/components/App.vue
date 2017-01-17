<script>
    import Navbar from './Navbar.vue'
    export default {
        name: "app",
        components: {
            Navbar
        }
    }
</script>

<template>
    <div>
        <navbar></navbar>
        <div class="section">
            <router-view></router-view>
        </div>
    </div>
</template>