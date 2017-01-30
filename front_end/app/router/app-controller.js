import Test from '../components/Test.vue'


/* Lazy loading of routes might be soemthing to look into.
   It allows 
* https://router.vuejs.org/en/advanced/lazy-loading.html*/

export default [
    // 
    { path: '/', component: require('../components/pages/Home.vue'), meta: {forVisitors: true} },
    { path: '/chat', component: require('../components/pages/Chat.vue') , meta: {forVisitors: false} },
    { path: '/test', component: Test},
    { path: '/login', component: require('../components/pages/Login.vue'), meta: {forVisitors: true}},
    { path: '/signup', component: require('../components/pages/Signup.vue'), meta: {forVisitors: true}}
]
