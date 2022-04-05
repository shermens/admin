import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import './plugins'
// import JwPagination from "jw-vue-pagination";

// Vue.component("jw-pagination", JwPagination);
Vue.prototype.$http = axios
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
