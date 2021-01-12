import Vue from 'vue'
import App from './App.vue'

import layout_lya from '../packages'

Vue.config.productionTip = false

Vue.use(layout_lya)

new Vue({
  render: h => h(App),
}).$mount('#app')
