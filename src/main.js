import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import '@morioh/v-lightbox/dist/lightbox.css'
import Lightbox from '@morioh/v-lightbox'

import MainPage from './components/MainPage.vue'
import Gallery from './components/Gallery.vue'
import VueSilentbox from 'vue-silentbox'

// global register
Vue.use(VueSilentbox)
Vue.use(Lightbox);

const routes = [
    { path: '/', component: MainPage },
    { path: '/photos', component: Gallery },
]

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')