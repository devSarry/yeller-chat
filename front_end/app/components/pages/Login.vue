<template>
    <section class="hero is-fullheight is-dark is-bold">

        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4 is-offset-4">
                        <h1 class="title">
                            Login
                        </h1>


                        <div class="box">
                            <label class="label">Email</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="jsmith@example.org">
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

    export default {
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