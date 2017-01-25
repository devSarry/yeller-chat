<template>
    <div>
        <y-navbar>
            <y-navbar-link to="/test">Test</y-navbar-link>
            <y-navbar-link to="/chat">Chat</y-navbar-link>
        </y-navbar>
    </div>
</template>

<script>
    import YNavbar from '../Nav/YNavbar.vue'
    import YNavbarLink from '../Nav/YLink.vue'
    export default{
        components: {
            YNavbar,
            YNavbarLink
        }
    }
</script>
