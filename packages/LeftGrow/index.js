// 暴露组件
import LeftGrow from './LeftGrow'
LeftGrow.install = Vue => {
  Vue.component(LeftGrow.name, LeftGrow)
}
export default LeftGrow
