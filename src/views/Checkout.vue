<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper :current-step="currentStep" />
    <div class="main__form-panel">
      <div class="main__form-panel__container">
        <form id="a-form">
          <router-view />
        </form>
      </div>
    </div>
    <ShoppingCart />
    <div class="main__button-panel">
      <button
        v-show="currentStep !== 1"
        class="main__button-panel__btn btn-outline"
        @click.prevent.stop="GoPrevStep"
      >
        上一步
      </button>
      <button
        class="main__button-panel__btn btn-primary first-step"
        @click.prevent.stop="GoNextStep"
      >
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
  data() {
    return {
      currentStep: 1,
    }
  },
  methods: {
    GoNextStep() {
      const nextBtn = document.querySelector('.btn-primary')
      if (this.currentStep === 1) {
        this.$router.push({ name: 'second-step' })
        nextBtn.classList.remove('first-step')
      }

      if (this.currentStep === 2) {
        this.$router.push({ name: 'third-step' })
        nextBtn.innerText = '確認下單'
        nextBtn.classList.add('last-step')
      }
      this.currentStep++

      if (this.currentStep >= 3) {
        this.currentStep = 3
      }
    },
    GoPrevStep() {
      const nextBtn = document.querySelector('.btn-primary')
      if (this.currentStep === 3) {
        this.$router.push({ name: 'second-step' })
        nextBtn.innerText = '下一步'
        nextBtn.classList.remove('last-step')
      }

      if (this.currentStep === 2) {
        this.$router.push({ name: 'first-step' })
        nextBtn.classList.add('first-step')
      }
      this.currentStep--

      if (this.currentStep <= 1) {
        this.currentStep = 1
      }
    },
  },
}
</script>
