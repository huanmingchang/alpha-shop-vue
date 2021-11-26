<template>
  <div class="form-part">
    <div class="form-title">付款方式</div>
    <div class="forms stage-3">
      <div class="form-row cardname">
        <label for="">持卡人姓名</label>
        <input
          id="creditcard-name"
          type="text"
          placeholder="John Doe"
          v-model="userInfo.cardname"
        />
      </div>
      <div class="form-row cardnumber">
        <label for="">卡號</label>
        <input
          id="creditcard-number"
          type="text"
          placeholder="1111 2222 3333 4444"
          v-model="userInfo.cardnumber"
        />
      </div>
      <div class="form-row validity">
        <label for="">有效期限</label>
        <input
          id="creditcard-validity"
          type="text"
          placeholder="ＭＭ/YY"
          v-model="userInfo.validity"
        />
      </div>
      <div class="form-row cvc">
        <label for="">CVC/CCV</label>
        <input
          id="creditcard-cvc"
          type="text"
          placeholder="123"
          v-model="userInfo.cvc"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormThree',
  props: {
    initialUserInfo: {
      type: Object,
      default: () => ({
        delivery: '',
        cardname: '',
        cardnumber: '',
        validity: '',
        cvc: '',
      }),
    },
  },
  data() {
    return {
      userInfo: this.initialUserInfo,
    }
  },
}
</script>
