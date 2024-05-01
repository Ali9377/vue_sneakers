<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import Card from './CardSneakers.vue'

const items = ref<any[]>([])
const filter = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const fetchData = async () => {
  try {
    const params = new URLSearchParams()
    params.set('sortBy', filter.sortBy)
    if (filter.searchQuery) {
      params.set('title', `*${filter.searchQuery}*`)
    }
    const data = await fetch(`https://39eb68d6dd2f318b.mokky.dev/items?${params}`).then((res) =>
      res.json()
    )
    items.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(fetchData)

watch(filter, fetchData)

const onChangeSelect = (event: any) => {
  filter.sortBy = event.target.value
}

const onChangeSearch = (event: any) => {
  filter.searchQuery = event.target.value
}

const onClickFavorite = (id: number) => {
  const index = items.value.findIndex((item) => item.id === id)
  if (index !== -1) {
    items.value[index].isFavorite = !items.value[index].isFavorite
  }
}

const onClickAdd = (id: number) => {
  const index = items.value.findIndex((item) => item.id === id)
  if (index !== -1) {
    items.value[index].isAdded = !items.value[index].isAdded
  }
}
</script>
<template>
  <div class="card_find_wrapper">
    <h1>Все кроссовки</h1>
    <div class="sort_card">
      <select @change="onChangeSelect">
        <option value="name">По названию</option>
        <option value="price">По цене(дешевле)</option>
        <option value="-price">По цене(дороже)</option>
      </select>
    </div>
    <div class="find_card">
      <input type="text" placeholder="Поиск..." @input="onChangeSearch" />
      <img src="/search.svg" alt="search" />
    </div>
  </div>
  <div class="card_block">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :item="[item]"
      :title="item.title"
      :imgUrl="item.imgUrl"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>
<style lang="scss" scoped>
.card_find_wrapper {
  display: flex;
  align-items: center;
  gap: 50px;
  .sort_card {
    select {
      padding: 5px 15px;
      border-radius: 8px;
      border-color: rgb(170, 170, 170, 0.5);
      outline: none;
      cursor: pointer;
    }
  }
  .find_card {
    display: flex;
    align-items: center;
    position: relative;

    input {
      padding: 10px 25px;
      border-radius: 15px;
      outline: none;
      border: 1px solid;
      border-color: rgb(170, 170, 170);

      &:focus {
        border-color: rgb(0, 255, 42, 0.3);
      }
    }

    img {
      position: absolute;
      left: 6px;
      cursor: pointer;
    }
  }
}
.card_block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 2%;
}
</style>
