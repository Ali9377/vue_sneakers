<script setup lang="ts">
import CardItem from './CartItem.vue';
</script>
<template>
  <div class="drawer"></div>
  <div class="cart">
    <div class="cart_header">
      <img src="/close.svg" alt="close" />
      <h2>Корзина</h2>
    </div>
    <CardItem />
    <CardItem />
    <CardItem />
    <div class='cart_footer'>
      <div class='total'>
        <span>Итого:</span>
        <div class='total_line'></div>
        <b>1000 руб.</b>
      </div>      
      <button class="btn">Оформить заказ</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}

.cart {
  position: fixed;
  right: 0;
  top: 0;
  background: #ffffff;
  height: 100vh;
  width: 25%;
  z-index: 11;
  text-align: center;

  .cart_header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
    gap: 100px;
  }

  .total {
    display: flex;
    padding: 20px;
    
    .total_line {
      flex: 1 1 0%;
      height: 1px;
      border-bottom: 1px dashed;
      color: rgb(128, 128, 128, 0.4);
    }
  }

  .btn {
    position: fixed;
    bottom: 0;
    right: 80px;
    padding: 10px 100px;
    background-color: rgb(0, 190, 10);
    border: none;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
