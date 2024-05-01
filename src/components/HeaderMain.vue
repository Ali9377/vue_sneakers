<template>
  <header>
    <div class="header_logo">
      <router-link to="/">
        <img src="/logo.png" alt="Logo" />
      </router-link>
      <div>
        <h2>Vue Sneakers</h2>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul>
      <li>
        <img src="/cart.svg" alt="cart" />
        <b>1205 руб.</b>
      </li>
      <li>
        <router-link to="/charts">
          <img src="/heart.svg" alt="favorites" />
          <span>Закладки</span>
        </router-link>
      </li>
      <li>
        <img src="/profile.svg" alt="profile" />
        <span>Аккаунт</span>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  border-bottom: 1px solid #dddddd;

  .header_logo {
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
      text-transform: uppercase;
      font-weight: 700;
    }

    p {
      color: #898989;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
