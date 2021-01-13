// 暴露组件
import RightGrow from './RightGrow'
RightGrow.install = Vue => {
  Vue.component(RightGrow.name, RightGrow)
}
export default RightGrow
