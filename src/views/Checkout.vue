<template>
  <main class="main">
    <div class="main__title">結帳</div>
    <Stepper :current-step="currentStep" />
    <div class="main__form-panel">
      <div class="main__form-panel__container">
        <form id="a-form">
          <router-view
            :initial-user-info="userInfo"
            @change-delivery="changeDeliveryCost"
          />
        </form>
      </div>
    </div>
    <ShoppingCart :initial-delivery="userInfo.delivery" />
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
      currentStep: Number(this.$route.name),
      userInfo: {
        gender: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        delivery: 'general',
        cardname: '',
        cardnumber: '',
        validity: '',
        cvc: '',
      },
    }
  },
  methods: {
    GoNextStep() {
      if (this.currentStep === 1) {
        this.$router.push({ name: '2' })
      }

      if (this.currentStep === 2) {
        this.$router.push({ name: '3' })
      }
      this.currentStep++

      if (this.currentStep >= 3) {
        this.currentStep = 3
      }
    },
    GoPrevStep() {
      if (this.currentStep === 3) {
        this.$router.push({ name: '2' })
      }

      if (this.currentStep === 2) {
        this.$router.push({ name: '1' })
      }
      this.currentStep--

      if (this.currentStep <= 1) {
        this.currentStep = 1
      }
    },
    changeButtonStyle() {
      const nextBtn = document.querySelector('.btn-primary')
      if (this.currentStep !== 1) {
        nextBtn.classList.remove('first-step')
      }

      if (this.currentStep === 1) {
        nextBtn.classList.add('first-step')
      }

      if (this.currentStep === 3) {
        nextBtn.innerText = '確認下單'
        nextBtn.classList.add('last-step')
      }

      if (this.currentStep !== 3) {
        nextBtn.innerText = '下一步'
        nextBtn.classList.remove('last-step')
      }
    },
    changeDeliveryCost(e) {
      if (e === 'general') {
        this.userInfo.delivery = 'general'
      }
      if (e === 'dhl') {
        this.userInfo.delivery = 'dhl'
      }
    },
  },
  updated() {
    this.changeButtonStyle()
  },
}
</script>
