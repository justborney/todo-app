<template>
  <div class="app">
    <div class="list">
      <div v-for="(goods, index) in goods_list" :key="index" class="goods">
        <div class="name">
          Товар: {{ goods.name }}
        </div>
        
        <div class="price">
          Цена: {{ goods.price }}$
        </div>

        <button class="button-add" @click="addGoodsToBasket(goods)">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: { 
    goods_list() {
      return [
        {
          name: 'Кожанка',
          price: 10
        },
        {
          name: 'Футболка',
          price: 4
        },
        {
          name: 'Джинсы',
          price: 7
        }
      ];
    }
  },

  methods: {
    addGoodsToBasket(goods) {
      this.$store.commit('addGoodsToBasket', goods)
    }
  }
}
</script>

<style>
  .basket {
    background: black;
    color: white;
    text-align: center;
  }

  .list {
    display: flex;
    background: gray;
    padding: 10px;
  }

  .basket .goods,
  .list .goods {
    background: lightgray;
    margin: 5px;
    padding: 5px;
  }
</style>