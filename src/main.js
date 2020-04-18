import Vue from 'vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Template from './Template.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: require('./App.vue').default
  },
  {
    path: "/shs",
    component: require('./components/SHS.vue').default
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  document.title = typeof to.meta.title === 'undefined' ? 'Bestlink College of the Philippines' : to.meta.title;
  next()
})

window.Router = router;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(Template)
}).$mount('#app')
