import Vue from 'vue'
import Router from 'vue-router'
import SelectItem from '@/pages/common/SelectItem'
import Percent from '@/pages/common/Percent'

// agent
import Agent from '@/pages/agent/Agent'
import Earnings from '@/pages/agent/Earnings'
import QuotSetting from '@/pages/agent/QuotSetting'
import Info from '@/pages/agent/Info'
import Withdraw from '@/pages/agent/Withdraw'
import Order from '@/pages/agent/Order'
import WithdrawInfo from '@/pages/agent/WithdrawInfo'
import AddCard from '@/pages/agent/AddCard'
import OrderQuote from '@/pages/agent/OrderQuote'
import OrderInfo from '@/pages/agent/OrderInfo'
import OrderComplete from '@/pages/agent/OrderComplete'
import QuoteSuccess from '@/pages/agent/QuoteSuccess'
import Bill from '@/pages/agent/Bill'

// user
import User from '@/pages/user/User'
import UserOrder from '@/pages/user/Order'
import OrderPay from '@/pages/user/OrderPay'
import PaySuccess from '@/pages/user/PaySuccess'
import ItemInfo from '@/pages/user/ItemInfo'
import Step from '@/pages/common/Step'

// user

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/select_item',
      name: 'SelectItem',
      component: SelectItem
    },
    {
      path: '/step',
      name: 'Step',
      component: Step
    },
    {
      path: '/percent',
      name: 'Percent',
      component: Percent
    },

    // agent
    {
      path: '/',
      redirect: '/agent'
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent,
    },
    // 报价
    {
      path: '/agent/quot/:status',
      name: 'OrderQuote',
      component: OrderQuote
    },
    // 我的收益
    {
      path: '/agent/earnings',
      name: 'Earnings',
      component: Earnings
    },
    // 报价设置
    {
      path: '/agent/quot_setting',
      name: 'QuotSetting',
      component: QuotSetting
    },
    // 我的代理信息
    {
      path: '/agent/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/agent/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/agent/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/agent/withdraw_info',
      name: 'WithdrawInfo',
      component: WithdrawInfo
    },
    {
      path: '/agent/add_card',
      name: 'AddCard',
      component: AddCard
    },
    {
      path: '/agent/order_info',
      name: 'OrderInfo',
      component: OrderInfo
    },
    {
      path: '/agent/order_complete',
      name: 'OrderComplete',
      component: OrderComplete
    },
    {
      path: '/agent/quote_success',
      name: 'QuoteSuccess',
      component: QuoteSuccess
    },
    {
      path: '/agent/bill',
      name: 'Bill',
      component: Bill
    },

    // user
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/order',
      name: 'UserOrder',
      component: UserOrder
    },
    {
      path: '/user/order/:id/pay',
      name: 'OrderPay',
      component: OrderPay
    },
    {
      path: '/user/pay_success',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/user/item_info/:status',
      name: 'ItemInfo',
      component: ItemInfo
    }
  ]
})
