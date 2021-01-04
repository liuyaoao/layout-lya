import BottomGrow from './bottomGrow/index.vue'
BottomGrow.install = function(Vue){
  Vue.component(BottomGrow.name, BottomGrow)
}

const components = [
  BottomGrow
]

const install = function(Vue){
  if(install.installed) return
  components.map(component => Vue.component(component.name,component))
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install,
  BottomGrow
}
