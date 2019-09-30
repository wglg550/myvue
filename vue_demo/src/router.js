import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './page/index.vue'
import H1 from './page/H1.vue'
import H2 from './page/H2.vue'

Vue.use(VueRouter);

//const index    = (resolve) => require(['./page/index.vue'],resolve)

//路由指向
const routes = [
  // {path: '/', redirect: '/index'},
  {
    path: '/', name: 'index', components: {
      default: index,
      left: H1,
      right: H2
    }
  },
  {
    path: '/h1',
    name: 'H1',
    components: {
      default: index,
      left: H2,//显示H2组件内容
      right: H1//显示H1组件内容
    }
  }
  // ,
  // {path: '/', name: 'test1', component: test1}
];
export default new VueRouter({
  routes: routes,
  mode: 'history',
  // mode: 'hash',
  // base: __dirname
})
