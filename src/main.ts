import store from '@/store'
import { formatDate } from '@/utils/Date'
import moment from 'moment'
import Vue from 'vue'
import App from './App.vue'

moment.locale('fr')

Vue.config.productionTip = false

Vue.filter('formatDate', (date: Date | undefined) => formatDate(date))

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
