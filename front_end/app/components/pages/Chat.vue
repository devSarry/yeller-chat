<template>
    <section class="section is-large">
        <div class="card">
            <div class="content">
                <ul>
                    <li v-for="m in messages">
                        {{ m.text }}
                    </li>
                </ul>
            </div>

            <footer class="card-footer ">

                <p class="control has-addons is-medium">
                    <input class="input is-medium is-expanded" type="text" placeholder="Type something..." v-model="newMessage" @keydown.enter="sendMessage">
                    <a class="button is-info is-medium" @click="sendMessage" >
                        Search
                    </a>
                </p>
            </footer>
        </div>
    </section>
</template>

<script>

    export default{
    data() {
        return {
            user: { type: 'local'},
            newMessage: '',
            messages: [],
        }
    },

    services: {
        userService: 'user',
        messageService: 'messages'
    },
    created() {
        this.userService.on('created', user => console.log('User Created:', user))

        console.log(this.$services.messages.find())

        this.messageService.find().then(results => {
            console.log(results)
            this.messages = results.data
            })

        this.messageService.on('created', message => {
            this.messages.push(message)
        });
    },
    methods: {
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
