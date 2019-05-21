import { get, post, put } from './helpers'


// 提现列表
const getDraws = get(`draw`)

// 获取项目
const getProjects = get('project')

const getOrder = get('order')

const draw = post('draw')

export {
  getDraws,
  getProjects,
  getOrder,
  draw
}
