// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import MainHeader from './components/header';
import MainFooter from './components/footer';

Vue.use(Element);
Vue.component('main-header', MainHeader);
Vue.component('main-footer', MainFooter);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
