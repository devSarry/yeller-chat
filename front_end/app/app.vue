<template>
    <div id="app">
        <h1>Hello World</h1>
        <input type="text" v-model="user.email">
        <input type="text" v-model="user.password">
        <button @click="loginUser(email,password)">login</button>
        <hr>
        <input type="text"  v-model="newMessage">
        <button @click="sendMessage">create message</button>

        <hr>
        <br>

        <ul>
            <li v-for="m in messages">
                {{ m.text }}
            </li>
        </ul>
        <h1>Hello World</h1>
        <ul>
            <li>
                link
            </li>
            <li>
                <router-link to="/test">
                    Fire  Event
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',

    data() {
        return {
            user: { type: 'local'},
            newMessage: '',
            messages: [],
        }
    },
    services: {
        userService: 'users',
        messageService: 'messages'
    },

    mounted() {
        this.userService.on('created', user => console.log('User Created:', user))

        console.log(this.$services.messages.find())

        this.messageService.on('created', message => {
            this.messages.push(message)
        });
    },
    methods: {
        registerUser(email, password) {
            //console.log(email, password);
            //console.log(this.userService.create({ email, password }))
        },
        loginUser(email, password) {
            this.$store.dispatch('login', this.user)
            this.messageService.find().then(results => {
                this.messages = results.data
            })
        },
        sendMessage() {
            this.messageService.create({text: this.newMessage, something: 'test'})
                .then(res => {
                    console.log(res)
                    this.newMessage = '';
                })
        }
    }
}



</script>
