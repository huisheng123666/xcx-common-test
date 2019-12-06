export default {
  install(Vue) {
    Vue.prototype.$popup = function () {
      const cComponent = getCComponent(this.$children)
      cComponent.text = '456'
    }
  }
}

function getCComponent(children) {
  for (let i = children.length - 1; i >= 0; i--) {
    if (children[i].$options.name === 'popup') {
      return children[i]
    }
  }
}
