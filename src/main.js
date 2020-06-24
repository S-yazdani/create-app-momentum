import Vue from 'vue'

import VueRouter from 'vue-router'
import App from './App.vue'
import {Routes} from './Routs/Routes'
import {store} from './Stors/Module/store';
import {i18n} from './plugins/i18n'

Vue.use(VueRouter)


Vue.config.productionTip = false


const router =new VueRouter({
  routes : Routes,
  mode:'history',
})



router.beforeEach((to,from,next)=>{

let language = to.params.lang;
if(!language){
  language='en'
}
i18n.locale=language
next()
})





new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
