<template>
  <div class="cart_item">
    <img src="/sneakers/sneakers-1.jpg" alt="Sneakers" class="cart_sneakers" />
    <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
    <span>1000 руб.</span>
    <div>
      <img src="/close.svg" alt="delete" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart_item {
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  padding: 20px;

  .cart_sneakers {
    width: 70px;
    height: 70px;
  }
}
</style>
