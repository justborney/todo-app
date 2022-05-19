import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      basket: []
    }
  },

  mutations: {
    addGoodsToBasket(state, goods) {
      const findIndex = state.basket.findIndex((item) => item.name === goods.name);
      if (findIndex !== -1) {
        state.basket[findIndex].count = state.basket[findIndex].count ? ++state.basket[findIndex].count : 2
      } else {
        state.basket.push(goods);
      }
    },

    
    deleteGoods(state, goods) {
      const findIndex = state.basket.findIndex((item) => item.name === goods.name);
      
      if (state.basket[findIndex].count && state.basket[findIndex].count > 1) {
        state.basket[findIndex].count -= 1;
      } else {
        state.basket.splice(findIndex, 1);
      }
    }
  }
})

