<template>
    <nav class="nav has-shadow" id="top">
        <div class="container">
            <y-nav-logo
                    logo-url="images/logo.png"
                    logo-alt="some description"
                    path="/"
            >
            </y-nav-logo>
            <span class="nav-toggle" @click="menuToggle = !menuToggle" :class="{ 'is-active' : menuToggle}">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu" :class="{ 'is-active' : menuToggle}">
                <!--Slot for nav bar links-->
                <slot></slot>

                <span class="nav-item">
                    <router-link to="/login" class="button">
                            Log in
                    </router-link>

                    <router-link to="/signup" class="button is-info">
                        Sign up
                    </router-link>
                </span>
            </div>
        </div>
    </nav>
</template>

<style rel="stylesheet/scss" lang="sass">
    .navbar {
        border-left: 0;
        border-right: 0;
        border-top: 0; }
</style>

<script>
    import YNavLogo from './YNavLogo.vue'
    export default {
        data() {
            return {
                menuToggle: false
            }
        },
        components: {
            YNavLogo
        }
    }


</script>