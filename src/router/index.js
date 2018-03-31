import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      component: (resolve) => require(['../views/list.vue'],resolve)
    },
    {
      path: '/cart',
      component: (resolve) => require(['../views/cart.vue'],resolve)
    },
    {
      path: '/product/:id',
      component: (resolve) => require(['../views/product.vue'],resolve)
    },
    {
      path: '*',
      redirect: './list'
    }
  ]
})
