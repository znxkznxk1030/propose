import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// import '@morioh/v-lightbox/dist/lightbox.css'

import FirstPage from './components/FirstPage.vue'
// import MainPage from './components/MainPage.vue'
import Gallery from './components/Gallery.vue'


import VueSilentbox from 'vue-silentbox'
import VueCarousel from 'vue-carousel';
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.use(VueCarousel);
Vue.use(VueSilentbox)

const routes = [
    { path: '/', component: FirstPage },
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