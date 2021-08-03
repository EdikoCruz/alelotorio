import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// @ts-ignore
import VueChartkick from 'vue-chartkick';
// @ts-ignore
import Chart from 'chart.js';
Chart.defaults.global.elements.point.radius = 1;
Chart.defaults.global.legend.reverse = true;

Vue.use(VueChartkick, {adapter: Chart});

import './registerServiceWorker';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
// import '../node_modules/materialize-css/extras/noUiSlider/nouislider.css';
// import '../node_modules/materialize-css/extras/noUiSlider/nouislider.min.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
