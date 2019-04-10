import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import Poeple from '@/components/People'
import OrderComplete from '@/components/OrderComplete'
import OrderQuote from '@/components/OrderQuote'
import Earnings from '@/components/Earnings'
import Withdraw from '@/components/Withdraw'
import AddCard from '@/components/AddCard'
import SelectItem from '@/components/SelectItem'
import PriceSetting from '@/components/PriceSetting'

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
    },
    {
      path: '/earnings',
      name: 'Earnings',
      component: Earnings
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/add_card',
      name: 'AddCard',
      component: AddCard
    },
    {
      path: '/select_item',
      name: 'SelectItem',
      component: SelectItem
    },
    {
      path: '/price_setting',
      name: 'PriceSetting',
      component: PriceSetting
    }
  ]
})
