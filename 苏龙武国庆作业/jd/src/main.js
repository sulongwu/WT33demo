// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import ElementUI from 'element-ui';
import { Button,Rate } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false
//Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Rate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
