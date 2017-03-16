<template>
    <div>
        <div class="message-box">
            <y-chat-message v-for="m in messages" :message="m"></y-chat-message>
        </div>
        <div class="message-input">
            <p class="control has-addons is-medium">
                <input class="input is-medium is-expanded" type="text" placeholder="Type something..." v-model="newMessage" @keydown.enter="sendMessage">
                <a class="button is-info is-medium" @click="sendMessage" >
                    Send
                </a>
            </p>
        </div>
    </div>
</template>
<style lang="css">
    .message-box {
        padding-top: 1em;
        padding-left: 1em;
        padding-right: 1em;
        padding-bottom: 5px;
        border-left: 6px solid #42e6d7!important;
        border-radius: 5px;
        height: 402px;
        overflow: auto;
        line-height: 18px;
    }

    .message-input {
        padding: 1em;
    }
</style>
<script>

    import YChatMessage from '../chat/YChatMessage.vue'
    export default{

    components: {
        YChatMessage
    },
    data() {
        return {
            user: { type: 'local'},
            newMessage: '',
            messages: [],
        }
    },

    services: {
        messageService: 'messages'
    },
    created() {
        //this.userService.on('created', user => console.log('User Created:', user))

        this.$services.messages.find().then(res => {
            this.messages = res.data;
        });

        this.messageService.on('created', message => {
            this.messages.push(message)
        });
    },

    updated() {
        var el = document.querySelector('.message-box');
        el.scrollTop = el.scrollHeight;
    },
    methods: {
        sendMessage() {
            this.messageService.create({text: this.newMessage, something: 'test'})
                .then(res => {
                    console.log(res);
                    this.newMessage = '';
                })
        }
    }

    }
</script>
