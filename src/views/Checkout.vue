<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper />
    <div class="main__form-panel">
      <div class="main__form-panel__container">
        <form id="a-form">
          <router-view />
        </form>
      </div>
    </div>
    <ShoppingCart />
    <div class="main__button-panel">
      <button class="main__button-panel__btn btn-outline d-none">上一步</button>
      <button class="main__button-panel__btn btn-primary first-step">
        下一步
      </button>
    </div>
  </main>
</template>

<script>
import Stepper from '../components/Stepper'
import ShoppingCart from '../components/ShoppingCart'

export default {
  name: 'Cart',
  components: {
    Stepper,
    ShoppingCart,
  },
}
</script>
