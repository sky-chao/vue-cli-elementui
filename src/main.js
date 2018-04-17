// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import router from './router'

Vue.use(ElementUI)
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        todos: [
            { "id": 1, "title": "cooking", "done": 1 },
            { "id": 2, "title": "working", "done": 1 },
            { "id": 3, "title": "sing", "done": 1 }
        ]
    }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})