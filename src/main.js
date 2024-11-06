import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui'

Vue.use(ElementUI);
Vue.use(formCreate)
Vue.config.productionTip = false
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
