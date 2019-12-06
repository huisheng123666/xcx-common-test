import Vue from 'vue'
import App from './App'
import Popup from './components/popup/popup'
import Picker from './components/picker/picker'
import uiInstruct from './ui-instruct'

Vue.config.productionTip = false

Vue.component('popup', Popup)
Vue.component('c-picker', Picker)

Vue.use(uiInstruct)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
