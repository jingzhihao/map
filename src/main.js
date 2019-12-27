import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
        key: '08c5fa3e1c7b95f6e608c773c2649b46',
        plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
        v: '1.4.4',
        uiVersion: '1.0'
    })
    // '''
    // key： 高德的key（自己申请）

// plugin： 引用的插件（根据需要引入）

// v： 高德SDK 版本

// uiVersion：UI库 版本
// '''
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')