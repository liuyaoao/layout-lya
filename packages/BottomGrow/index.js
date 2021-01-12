// 暴露组件
import BottomGrow from './BottomGrow'
BottomGrow.install = Vue => {
  Vue.component(BottomGrow.name, BottomGrow)
}
export default BottomGrow
