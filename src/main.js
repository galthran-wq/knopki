import Vue from "vue";
import {store} from "@/store";
import App from "./App.vue";
import router from "./starterRouter";
import Argon from "./plugins/argon-kit";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount("#app");
