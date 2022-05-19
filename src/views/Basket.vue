<template>
  <div class="basket">
    <div class="list">
      <div v-for="(goods, index) in goods_list" :key="index" class="goods">
        <div class="name">
          Товар: {{ goods.name }}
        </div>
        
        <div class="price">
          Цена: {{ goods.price }}
        </div>

        <div v-if="goods.count">x{{ goods.count }}</div>
        <div v-else>x1</div>

        <button class="button-add" @click="deleteg(goods)">
          Удалить
        </button>
      </div>
    </div>

    <div>Общая сумма {{ total }}$</div>
  </div>
</template>

<script>
export default {
  name: 'Basket',

  computed: {
    goods_list() {
      return this.$store.state.basket;
    },
    
    total() {
      return this.$store.state.basket.reduce((buffer, goods) => {
        return buffer + goods.price * (goods.count || 1);
      }, 0);
    }
  },

  methods: {
    deleteg(goods) {
      this.$store.commit('deleteGoods', goods)
    }
  }
};
</script>
