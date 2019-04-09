import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import Poeple from '@/components/People'
import OrderComplete from '@/components/OrderComplete'
import OrderQuote from '@/components/OrderQuote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Order
    },
    {
      path: '/people',
      name: 'Poeple',
      component: Poeple
    },
    {
      path: '/order_complete',
      name: 'OrderComplete',
      component: OrderComplete
    },
    {
      path: '/order_quote',
      name: 'OrderQuote',
      component: OrderQuote
    }
  ]
})
