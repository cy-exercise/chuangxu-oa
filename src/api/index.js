import { get, post } from './helpers'

const user_id = JSON.parse(localStorage.getItem('user')).id;
const agent_id = JSON.parse(localStorage.getItem('agent')).id;

// 获取用户账户
const getUserAccount = get(`user/${user_id}/account`)
// 提现列表
const getDraws = get(`draw`)

// 获取项目
const getProjects = get('project')

const getOrder = get('order')

const getAgentOrders = get(`agent/${agent_id}/order`)

export {
  getUserAccount,
  getDraws,
  getProjects,
  getOrder,
  getAgentOrders
}
