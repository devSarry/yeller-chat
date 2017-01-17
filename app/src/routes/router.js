
import Vue from 'vue'
import Router from 'vue-router'

import App from '../components/App.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Chat from '../components/Chat.vue'

// route config
let routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/chat',
        name: 'chat',
        component: Chat
    },
    { path: '*', redirect: '/home' }
]

// Set up a new router
let router = new Router({
    routes: routes
})

// Start up our app
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
