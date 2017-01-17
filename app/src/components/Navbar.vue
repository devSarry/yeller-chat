<script>
    export default {
        name: "Navbar"
    }
</script>

<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <a class="nav-item" href="/">
                    <img src="http://placehold.it/150x150" alt="Description">
                </a>
            </div>
              <span class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
            <div class="nav-right nav-menu">
                <router-link class="nav-item is-tab" to="/home">
                    Home
                </router-link>
                <router-link class="nav-item is-tab" to="/about">
                    About
                </router-link>
                <router-link class="nav-item is-tab" to="/chat">
                    Chat
                </router-link>
                <span class="nav-item">
                  <a class="button">
                    Log in
                  </a>
                  <a class="button is-info">
                    Sign up
                  </a>
                </span>
            </div>
        </div>
    </nav>
</template>
