import Vue from 'vue'
import Router from 'vue-router'
import SelectItem from '@/pages/common/SelectItem'
import Percent from '@/pages/common/Percent'
import Login from '@/pages/common/Login'

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
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    // agent
    {
      path: '/',
      redirect: '/agent',
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent,
      meta: {
        title: '个人中心'
      }
    },
    // 报价
    {
      path: '/agent/quote',
      name: 'OrderQuote',
      component: OrderQuote,
      meta: {
        title: '报价'
      }
    },
    // 我的收益
    {
      path: '/agent/earnings',
      name: 'Earnings',
      component: Earnings,
      meta: {
        title: '我的收益'
      }
    },
    // 报价设置
    {
      path: '/agent/quot_setting',
      name: 'QuotSetting',
      component: QuotSetting,
      meta: {
        title: '报价设置'
      }
    },
    // 我的代理信息
    {
      path: '/agent/info',
      name: 'Info',
      component: Info,
      meta: {
        title: '我的代理信息'
      }
    },
    {
      path: '/agent/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta: {
        title: '收益提现'
      }
    },
    {
      path: '/agent/order/:id',
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
      component: AddCard,
      meta: {
        title: '添加银行卡'
      }
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
      component: Bill,
      meta: {
        title: '账单'
      }
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
      component: ItemInfo,
      meta: {
        title: '项目详情'
      }
    }
  ]
})
