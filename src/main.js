import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/css/font-awesome.min.css"
import "@/assets/css/themify-icons.css"
import "@/assets/css/elegant-icons.css"
import "@/assets/css/owl.carousel.min.css"
import "@/assets/css/nice-select.css"
import "@/assets/css/jquery-ui.min.css"
import "@/assets/css/slicknav.min.css"
import "@/assets/css/style.css"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
