import { get, post, put } from './helpers'

// 提现列表
const getDraws = () => get('draw')

// 获取项目
const getProjects = params => get('project', params)

const getUserOrder = (order_id) => get('order/' + order_id)

const draw = data => post('draw', data)

const orderPay = (order_id, data) => put(`order/${order_id}/pay`, data)

const updateAgent = (agent_id, data) => put('agent/' + agent_id, data)
const getAgentOrders = (agent_id, params) => get('agent/' + agent_id + '/order', params)

export {
  getDraws,
  getProjects,
  getUserOrder,
  draw,
  orderPay,
  updateAgent,
  getAgentOrders
}
