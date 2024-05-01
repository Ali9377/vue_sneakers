<script setup lang="ts">
import { ref } from 'vue'

import CardList from './components/CardList.vue'
import DrawerCart from './components/DrawerCart.vue'
import Header from './components/HeaderMain.vue'
import Charts from './views/ChartsVue.vue'

const drawerOpen = ref(false)
</script>

<template>
  <div class="container">
    <DrawerCart v-if="drawerOpen" />
    <Header :drawerOpen="drawerOpen" @toggleDrawer="drawerOpen = !drawerOpen" />
    <CardList />
    <Charts />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  border-radius: 50px;
  margin: 80px 80px 0 80px;
  background-color: aliceblue;

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }
}
</style>
