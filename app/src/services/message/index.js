import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'
import _ from 'lodash'

const socket = io('http://localhost:3030')
const app = feathers().configure(socketio(socket))

// Get the message service that uses a websocket connection
export default {
    getService() {
        return app.service('messages')
    }
}