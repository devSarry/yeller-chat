<template>

    <router-link class="nav-item is-tab" :to="to">
        <slot></slot>
    </router-link>

</template>

<script>

    export default{
        props: ['to']

    }
</script>
