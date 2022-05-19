<template>
  <div class="app">
    <div class="header">
      <div class="home">
        <router-link to="/">Товары</router-link>
        <router-link to="/basket">Корзина</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>


<script>
export default {
  name: 'App'
}

</script>