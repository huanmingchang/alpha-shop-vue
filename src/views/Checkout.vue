<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper />
    <FormPanel />
    <ShoppingCart />
    <ButtonPanel />
  </main>
</template>

<script>
import Stepper from '../components/Stepper'
import FormPanel from '../components/FormPanel'
import ShoppingCart from '../components/ShoppingCart'
import ButtonPanel from '../components/ButtonPanel'

export default {
  name: 'Cart',
  components: {
    Stepper,
    FormPanel,
    ShoppingCart,
    ButtonPanel,
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/reset.scss';
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/layout.scss';
@import '../styles/size.scss';

.main {
  margin: 0 15px;
}

.main__title {
  margin: 1rem 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 38px;
}

@media (min-width: 576px) {
  .main {
    width: 80%;
    margin: 0 auto;
  }
}
@media (min-width: 768px) {
  .main__title {
    margin: 5rem 0 3rem;
    font-size: 2rem;
  }
}

@media (min-width: 1200px) {
  .main {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }
}

@media (min-width: 1400px) {
  .main {
    max-width: 1440px;
  }
}
</style>
