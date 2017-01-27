<template>
    <section class="hero is-fullheight is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4 is-offset-4">
                        <h1 class="title">
                            Register an Account
                        </h1>

                        <h1 v-if="errors">Invalid login</h1>


                        <div class="box">
                            <label class="label">Name</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="John Smith" v-model="user.name">
                            </p>
                            <label class="label">Username</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="jsmith" v-model="user.username">
                            </p>
                            <label class="label">Email</label>
                            <p class="control">
                                <input class="input" type="text" placeholder="jsmith@example.org" v-model="user.email">
                            </p>
                            <hr>
                            <label class="label">Password</label>
                            <p class="control">
                                <input class="input" type="password" placeholder="●●●●●●●" v-model="user.password">
                            </p>
                            <label class="label">Confirm Password</label>
                            <p class="control">
                                <input class="input" type="password" placeholder="●●●●●●●"
                                       v-model="user.password_confirm">
                            </p>
                            <hr>
                            <p class="control">
                                <button class="button is-primary" @click="registerUser">Register</button>
                                <button class="button is-default" @click="sendMessage">Cancel</button>
                            </p>
                        </div>
                        <p class="has-text-centered">
                            <router-link to="login">Login</router-link>
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

        services: {
            userService: 'users'
        },

        data() {
            return {
                user: { type: 'local' },
                newMessage: '',
                messages: [],
            }
        },
        methods: {
            registerUser() {
                if ( this.user.password === this.user.password_confirm)
                {
                    this.userService.create(this.user).then(res => {
                        this.$store.dispatch('login', this.user)
                        console.log(res)
                    }).catch(error => {
                        console.error('Error authenticating!', error)
                    })
                }
            }
        },



    }




</script>