<template>
  <div class="sort_card">
    <h1>Все кроссовки</h1>
    <select>
      <option name="">По названию</option>
      <option>По цене</option>
      <option>По рейтингу</option>
    </select>
  </div>
  <div class="find_card">
    <input type="text" placeholder="Поиск..." />
    <img src="/search.svg" alt="search" />
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
</style>
