import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合,依赖topCategory
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      // list: topCategory.map(item => ({ name: item }))
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = []
      state.list = payload
    }
  },
  actions: {
    async getList (context) {
      // console.log('发请求了')
      try {
        const { result } = await findAllCategory()
        // console.log(result)
        context.commit('setList', result)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
