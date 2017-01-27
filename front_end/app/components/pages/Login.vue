<template>
    <section class="hero is-fullheight is-dark is-bold">

        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4 is-offset-4">
                        <h1 v-if="error" class="title">
                            Login
                        </h1>


                        <div class="box">
                            <label class="label">Email</label>
                            <p class="control">
                                <input class="input"
                                       type="text"
                                       v-model="user.email"
                                       placeholder="jsmith@example.org">
                            </p>
                            <label class="label">Password</label>
                            <p class="control">
                                <input type="password"
                                       class="input"
                                       v-model="user.password"
                                       placeholder="●●●●●●●">
                            </p>
                            <hr>
                            <p class="control">
                                <button @click="loginUser()" class="button is-primary">Login</button>
                                <button class="button is-default">Cancel</button>
                            </p>
                        </div>
                        <p class="has-text-centered">
                            <router-link to="/signup">Register an Account</router-link>
                            |
                            <a href="#">Forgot password</a>
                            |
                            <a href="#">Need help?</a>
                        </p>
                    </div>


                </div>
            </div>
        </div>

    </section>
</template>
<script>
import Vue from 'vue'
import Message from 'vue-bulma-message'

const MessageComponent = Vue.extend(Message)

const openMessage = (propsData = {

      title: '',
      message: '',
      type: '',
      direction: '',
      duration: 1500,
      container: '.messages'
}) => {
        return new MessageComponent({
           el: document.createElement('div'),
           propsData
        })
      }

export default {
    components: {
        Message
    },
    data() {
        return {
            user: { type: 'local'},
            newMessage: '',
            messages: [],
        }
    },
    methods: {
        loginUser() {
            this.$store.dispatch('login', this.user)
        },
       openMessageWithType (type) {
          openMessage({
            title: 'Login Error',
            message: 'Please try again',
            type: type
          })
        }
    },

    computed: {
        error() {
            if(this.$store.state.auth.error) {
                this.openMessageWithType('danger')
                return this.$store.state.auth.error
            }


        }
    }
}


</script>