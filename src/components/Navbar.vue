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

<style lang="scss" scoped>
@import '../styles/reset.scss';
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

nav {
  position: relative;
  width: 100%;
  height: 56px;
  .hamburger {
    @include position(absolute, 50%, 17px, 0, -50%);
    height: 15px;
    width: 20px;
  }
  .nav-wrapper {
    @include flex(column, start, center);
    @include position(absolute, 100%, 0, 0, 0);
    width: 100%;
    height: 394px;
    margin-top: 1rem;
    z-index: 10;
    background: var(--bg-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &__menu {
      @include flex(column, start, center);
      width: 100%;
      a {
        @include flex(row, center, center);
        padding: 1.5rem 0;
        width: 92%;
        font-size: 1rem;
        font-weight: 500;
        line-height: 24px;
        color: var(--font-color);
        border-bottom: 1px solid rgba(42, 42, 42, 0.1);
      }
      a:first-child {
        padding-top: 0;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    &__icons-wrapper {
      @include flex(row, space-between, center);
      padding-top: 1.5rem;
      margin: 0 auto;
      width: 152px;
      height: 24px;
      &--search {
        width: 21px;
        height: 21px;
      }
      &--cart {
        width: 21px;
        height: 22px;
      }
      &--switch {
        width: 24px;
        height: 24px;
      }
    }
  }
  .nav__logo {
    @include position(absolute, 50%, 50%, -50%, -50%);
    width: 135.86px;
    height: 24px;
  }
}

@media (min-width: 768px) {
  nav {
    height: 60px;
    .hamburger {
      display: none;
    }
    .nav-container {
      display: block;
    }
    .nav-wrapper {
      @include flex(row, space-between, center);
      @include position(absolute, 0, 0, 0, 0);
      margin-top: 0rem;
      padding: 0 5%;
      height: 100%;
      width: 100%;
      z-index: 0;
      background: transparent;
      box-shadow: none;
      &__menu {
        @include flex(row, space-between, center);
        width: 15%;
        white-space: nowrap;
        a {
          border-bottom: none;
          font-size: 14px;
          margin-right: 8%;
        }
        a:first-child {
          padding-top: 1.5rem;
        }
      }
      &__icons-wrapper {
        padding: 0;
        margin: 0;
        width: 132px;
        &--search {
          width: 24px;
          height: 24px;
        }
        &--cart {
          width: 24px;
          height: 24px;
        }
      }
    }
    .nav__logo {
      width: 169.83px;
      height: 30px;
    }
  }
}

@media (min-width: 992px) {
  nav {
    .nav-wrapper {
      padding: 0 8%;
      &__menu {
        width: 20%;
      }
    }
  }
}

@media (min-width: 1200px) {
  nav {
    width: 80%;
    margin: 0 auto;
    .nav-wrapper {
      padding: 0;
      margin: 0;
      width: 100%;
      &__menu {
        width: 26.6%;
        a {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
