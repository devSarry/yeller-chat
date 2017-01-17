<script>

    import Message from '../services/message'

    export default {

        data() {
            return {
                message: '',
                messages: []
            }
        },

        created (){
            Message.getService().find({}).then((result) => {
                this.messages = result.data;
        })



            // When a new message is created, add it to the messages array which is bound to the view.
            Message.getService().on('created', message => this.messages.push(message)
        )
            // Listen for when a message is deleted from the server and remove it from the view
            Message.getService().on('removed', message => this.removeMessage(message)
        )

            Message.getService().on('patched', message => {
                // update the view for all socket clients
                let index = _.findIndex(this.messages, {_id: message._id})
                this.messages[index].text = message.text
            });
        },

        methods: {
            send(){
                if (this.message.trim()) {
                    // Persist a new message to the db
                    Message.getService().create({text: this.message})
                    // Clear input field
                    this.message = ''
                }
            }
        }
    }
</script>

<template>
    <div>
        <div class="columns">
            <div class="column is-three-quarters">
                <div class="chat-window">
                    <div class="message" v-for="m in messages">
                        {{ m.text }}
                    </div>
                </div>
            </div>

            <div class="column is-hidden-mobile">
                <div class="user-list">
                    Users
                </div>
            </div>

        </div>

        <p class="control has-addons ">
            <input class="input is-expanded is-medium"
                   v-model="message"
                   type="text" placeholder="Message">
            <a class="button is-medium is-primary" @click="send">
                Send
            </a>
        </p>
    </div>
</template>
