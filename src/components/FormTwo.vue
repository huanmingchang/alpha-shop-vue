<template>
  <div class="form-part">
    <div class="form-title">運送方式</div>
    <div class="forms stage-2">
      <div
        class="radio-wrapper standard checked"
        id="standard-delivery-wrapper"
      >
        <input
          type="radio"
          name="delivery"
          value="general"
          checked
          class="standard delivery checked"
          id="standard-delivery"
          v-model="delivery"
          @change.prevent.stop="handleRadioBorder"
        />
        <label for="standard-delivery" class="standard delivery-content">
          <div class="delivery-content__details">
            <div class="delivery-content__details--option">標準運送</div>
            <div class="delivery-content__details--freight">免費</div>
          </div>
          <div class="delivery-content__time">約 3~7 個工作天</div>
        </label>
      </div>
      <div class="radio-wrapper dhl" id="dhl-delivery-wrapper">
        <input
          type="radio"
          name="delivery"
          value="dhl"
          class="dhl delivery"
          id="dhl-delivery"
          v-model="delivery"
          @change.prevent.stop="handleRadioBorder"
        />
        <label
          for="dhl-delivery"
          id="dhl-delivery"
          class="dhl delivery-content"
        >
          <div class="delivery-content__details">
            <div class="delivery-content__details--option-dhl">DHL 貨運</div>
            <div class="delivery-content__details--freight">$500</div>
          </div>
          <div class="delivery-content__time">48 小時內送達</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormTwo',
  props: {
    initialUserInfo: {
      type: Object,
      default: () => ({
        delivery: '',
      }),
    },
  },
  data() {
    return {
      delivery: this.initialUserInfo.delivery,
    }
  },
  methods: {
    handleRadioBorder(e) {
      const standardRadioWrapper = document.querySelector(
        '#standard-delivery-wrapper'
      )
      const dhlRadioWrapper = document.querySelector('#dhl-delivery-wrapper')
      if (e.target.classList.contains('dhl')) {
        standardRadioWrapper.classList.remove('checked')
        dhlRadioWrapper.classList.add('checked')
      }
      if (e.target.classList.contains('standard')) {
        standardRadioWrapper.classList.add('checked')
        dhlRadioWrapper.classList.remove('checked')
      }
    },
  },
  watch: {
    delivery: {
      handler: function changeDelivery() {
        this.$emit('change-delivery', this.delivery)
      },
      deep: true,
    },
  },
}
</script>
