<template>
  <nav id="navbar">
    <img :src="images.hamburger" alt="" class="hamburger" />
    <div class="nav-container">
      <div class="nav-wrapper">
        <div class="nav-wrapper__menu">
          <router-link
            to="/"
            v-for="category in categories"
            :key="category.id"
            class="nav-wrapper__menu__category"
            >{{ category.name }}</router-link
          >
        </div>
        <div class="nav-wrapper__icons-wrapper">
          <router-link to="/"
            ><img
              :src="images.searchIcon"
              alt="search"
              class="nav-wrapper__icons-wrapper--search"
          /></router-link>
          <router-link to="/"
            ><img
              :src="images.cartIcon"
              alt="cart"
              class="nav-wrapper__icons-wrapper--cart"
          /></router-link>
          <router-link to="/"
            ><img
              :src="images.swtichModeIcon"
              alt="switch mode"
              class="nav-wrapper__icons-wrapper--switch"
          /></router-link>
        </div>
      </div>
    </div>
    <div class="nav__logo">
      <router-link to="/"
        ><img :src="images.logo" class="nav__logo__pic" alt="logo"
      /></router-link>
    </div>
  </nav>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'Navbar',
  data() {
    return {
      images: {
        hamburger: require('../assets/hamburger@2x.png'),
        logo: require('../assets/logo-daymode@2x (1).png'),
        searchIcon: require('../assets/search-daymode.png'),
        cartIcon: require('../assets/shopping-cart-daymode@2x.png'),
        swtichModeIcon: require('../assets/moon-icon@2x.png'),
      },
      categories: [
        {
          id: uuidv4(),
          name: '男款',
        },
        {
          id: uuidv4(),
          name: '女款',
        },
        {
          id: uuidv4(),
          name: '最新消息',
        },
        {
          id: uuidv4(),
          name: '客製商品',
        },
        {
          id: uuidv4(),
          name: '聯絡我們',
        },
      ],
    }
  },
}
</script>

