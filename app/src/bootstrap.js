const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication/client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')

const socket = io('http://localhost:3030/')
const feathers = Feathers()
    .configure(socketio(socket))
    .configure(hooks())
    .configure(authentication({storage: window.localStorage}))

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
const vueFeathers = require('vue-feathers')
// Install plugins
Vue.use(Router)
Vue.use(Resource)

// And plug it in
Vue.use(vueFeathers, feathers)

