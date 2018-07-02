// modules
import Vue from 'vue'
// global css style
import './helper/style/reset.css'
import './helper/style/main.css'
import './helper/style/global.css'
// components
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
