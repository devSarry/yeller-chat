import Test from '../components/Test.vue'


/* Lazy loading of routes might be soemthing to look into.
   It allows 
* https://router.vuejs.org/en/advanced/lazy-loading.html*/

export default [
    // 
    { path: '/', component: require('../components/pages/Home.vue') },
    { path: '/chat', component: require('../components/pages/Chat.vue') },
    { path: '/test', component: Test },
    { path: '/login', component: require('../components/pages/Login.vue') },
    { path: '/signup', component: require('../components/pages/Signup.vue') }
]
