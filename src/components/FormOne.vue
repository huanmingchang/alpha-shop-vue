<template>
  <div class="form-part">
    <div class="form-title">寄送地址</div>
    <div class="forms stage-1">
      <div class="form-row title">
        <label for="">稱謂</label>
        <div class="select-wrapper">
          <select name="gender" id="gender" required v-model="userInfo.gender">
            <option value="male" selected>先生</option>
            <option value="female">小姐</option>
          </select>
        </div>
      </div>
      <div class="form-row name">
        <label for="">姓名</label>
        <input
          id="customer-name"
          type="text"
          placeholder="請輸入姓名"
          v-model="userInfo.name"
        />
      </div>
      <div class="form-row phone">
        <label for="">電話</label>
        <input
          id="customer-phone"
          type="text"
          placeholder="請輸入行動電話"
          v-model="userInfo.phone"
        />
      </div>
      <div class="form-row email">
        <label for="">Email</label>
        <input
          id="customer-email"
          type="text"
          placeholder="請輸入電子郵件"
          v-model="userInfo.email"
        />
      </div>
      <div class="form-row city">
        <label for="">縣市</label>
        <div class="select-wrapper">
          <select name="city" id="city" required v-model="userInfo.city">
            <option value="" disabled selected>請選擇縣市</option>
            <option
              v-for="(city, index) in defaultCities"
              :key="index"
              :value="city"
            >
              {{ city }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-row address">
        <label for="">地址</label>
        <input
          id="customer-address"
          type="text"
          placeholder="請輸入地址"
          v-model="userInfo.address"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormOne',
  data() {
    return {
      defaultCities: [
        '台北市',
        '新北市',
        '桃園市',
        '台中市',
        '台南市',
        '高雄市',
      ],
      userInfo: {
        gender: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        delivery: '',
        cardname: '',
        cardnumber: '',
        validity: '',
        cvc: '',
      },
    }
  },
}
</script>
