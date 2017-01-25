<template>
    <div class="nav-left">
        <router-link class="nav-item" :to="path">
            <img :src="logoUrl" :alt="logoAlt">
        </router-link>
    </div>
</template>
<script>
    export default{
        props: [ 'logoUrl', 'logoAlt', 'path']
    }
</script>
