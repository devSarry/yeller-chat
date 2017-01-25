// Import controllers.
import AppController from './app-controller'

// Export application router.
export default {
    mode: 'hash',
    linkActiveClass: 'is-active',
    routes: [
        ...AppController
    ]
}
