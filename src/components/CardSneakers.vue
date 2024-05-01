<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  isFavorite: boolean
  isAdded: boolean
  title: string
  price: number
  imgUrl: string
  id: number
  onClickFavorite: (id: number) => void
  onClickAdd: (id: number) => void
}>()
</script>

<template>
  <div class="card">
    <img
      @click="() => onClickFavorite(props.id)"
      :src="isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="add to favorite"
      class="favorite"
    />
    <img :src="imgUrl" alt="Sneakers" />
    <p>{{ title }}</p>
    <div class="card_footer">
      <div>
        <span>Цена:</span>
        <b>{{ price }} руб.</b>
      </div>
      <img
        @click="() => onClickAdd(props.id)"
        :src="isAdded ? '/checked.svg' : '/plus.svg'"
        alt="added to cart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 300px;
  padding: 20px;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);

  .favorite {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .card_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: block;
    }
  }

  &:hover {
    box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
    transition: 300ms ease-in-out;
  }
}
</style>
