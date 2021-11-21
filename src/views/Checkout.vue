<template>
  <main>
    <ShoppingCart />
  </main>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart'
export default {
  name: 'Cart',
  components: {
    ShoppingCart,
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/reset.scss';
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/layout.scss';
@import '../styles/size.scss';

@media (min-width: 576px) {
  .main {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
