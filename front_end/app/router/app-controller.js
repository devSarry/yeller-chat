import Test from '../components/Test.vue'

export default [
    // 
    { path: '/', component: require('../components/pages/Home.vue') },
    { path: '/chat', component: require('../components/pages/Chat.vue') },
    { path: '/test', component: Test },
    { path: '/login', component: require('../components/pages/Login.vue') },
    { path: '/signup', component: require('../components/pages/Signup.vue') }
]
