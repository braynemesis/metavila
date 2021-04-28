import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFeather from "vue-feather"
import "@/assets/scss/main.scss"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
  icon: 'error'
};

Vue.use(VueSweetalert2, options);
Vue.component("feather", VueFeather);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
