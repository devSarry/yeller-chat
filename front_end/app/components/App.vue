<template>
    <div id="app">
        <y-header></y-header>

        <router-view></router-view>

        <y-footer></y-footer>
    </div>
</template>

<script>

import YHeader from './layout/YHeader.vue'
import YFooter from './layout/YFooter.vue'

export default {

    name: 'app',

    data() {
        return {
            user: { type: 'local'},
            newMessage: '',
            messages: [],
        }
    },
    components: {
        YHeader,
        YFooter
    }
}
</script>
