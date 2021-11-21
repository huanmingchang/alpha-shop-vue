<template>
  <div class="main__form-panel">
    <div class="main__form-panel__container">
      <form id="a-form">
        <div class="form-part">
          <div class="form-title">寄送地址</div>
          <div class="forms stage-1">
            <div class="form-row title">
              <label for="">稱謂</label>
              <div class="select-wrapper">
                <select name="gender" id="gender" required>
                  <option value="male" selected>先生</option>
                  <option value="female">小姐</option>
                </select>
              </div>
            </div>
            <div class="form-row name">
              <label for="">姓名</label>
              <input id="customer-name" type="text" placeholder="請輸入姓名" />
            </div>
            <div class="form-row phone">
              <label for="">電話</label>
              <input
                id="customer-phone"
                type="text"
                placeholder="請輸入行動電話"
              />
            </div>
            <div class="form-row email">
              <label for="">Email</label>
              <input
                id="customer-email"
                type="text"
                placeholder="請輸入電子郵件"
              />
            </div>
            <div class="form-row city">
              <label for="">縣市</label>
              <div class="select-wrapper">
                <select name="city" id="city" required>
                  <option value="" disabled selected>請選擇縣市</option>
                  <option value="">台北市</option>
                  <option value="">新北市</option>
                  <option value="">桃園市</option>
                  <option value="">台中市</option>
                  <option value="">台南市</option>
                  <option value="">高雄市</option>
                </select>
              </div>
            </div>
            <div class="form-row address">
              <label for="">地址</label>
              <input
                id="customer-address"
                type="text"
                placeholder="請輸入地址"
              />
            </div>
          </div>
        </div>
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
                class="standard delivery checked"
                id="standard-delivery"
                checked
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
              />
              <label
                for="dhl-delivery"
                id="dhl-delivery"
                class="dhl delivery-content"
              >
                <div class="delivery-content__details">
                  <div class="delivery-content__details--option-dhl">
                    DHL 貨運
                  </div>
                  <div class="delivery-content__details--freight">$500</div>
                </div>
                <div class="delivery-content__time">48 小時內送達</div>
              </label>
            </div>
          </div>
        </div>
        <div class="form-part">
          <div class="form-title">付款方式</div>
          <div class="forms stage-3">
            <div class="form-row cardname">
              <label for="">持卡人姓名</label>
              <input id="creditcard-name" type="text" placeholder="John Doe" />
            </div>
            <div class="form-row cardnumber">
              <label for="">卡號</label>
              <input
                id="creditcard-number"
                type="text"
                placeholder="1111 2222 3333 4444"
              />
            </div>
            <div class="form-row validity">
              <label for="">有效期限</label>
              <input
                id="creditcard-validity"
                type="text"
                placeholder="ＭＭ/YY"
              />
            </div>
            <div class="form-row cvc">
              <label for="">CVC/CCV</label>
              <input id="creditcard-cvc" type="text" placeholder="123" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPanel',
}
</script>

<style lang="scss" scoped>
@import '../styles/reset.scss';
@import '../styles/variables.scss';
@import '../styles/mixins.scss';
@import '../styles/layout.scss';
@import '../styles/size.scss';

%input-common-style {
  padding: 0.75rem 0 0.75rem 1rem;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  font-size: 0.75rem;
  color: $font-color;
  border: 1px solid $input-border-grey;
  background: $white;
  &:placeholder {
    color: $placeholder-grey;
  }
  &:hover,
  &:focus {
    border-color: $neutrals-grey;
  }
}

form {
  height: 100%;
  width: 100%;
}

.form-part {
  width: 100%;
  height: 100%;
  .form-title {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
  }
  .forms {
    .form-row {
      @include flex(column, start, start);
      width: 100%;
      label {
        padding: 1.5rem 0 0.5rem 0;
        font-size: 0.75rem;
        line-height: 1rem;
        color: $footer-grey;
      }
      input {
        @extend %input-common-style;
      }
      .select-wrapper {
        position: relative;
        width: 100%;
        z-index: 0;
        &::after {
          content: '\25BE';
          position: absolute;
          top: 50%;
          right: 8px;
          transform: translateY(-50%);
          z-index: -1;
          color: $font-color;
        }
        select {
          @extend %input-common-style;
          -webkit-appearance: none;
          background: transparent;
          cursor: pointer;
          &:invalid {
            color: $placeholder-grey;
          }
        }
      }
    }
    .radio-wrapper {
      @include flex(row, start, center);
      margin-top: 1.5rem;
      padding: 0 20px 0 20px;
      width: 100%;
      height: 60px;
      border-radius: 4px;
      border: 1px solid $pale-grey;
      input {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid $radio-color;
        background: $radio-background;

        &:checked {
          box-shadow: inset 0 0 0 5px $radio-check;
          background: $radio-check-background;
        }
      }
      .delivery-content {
        @include flex(column, center, start);
        flex: 1;
        margin-left: 20px;
        height: 100%;
        color: $neutrals-black;
        &__details {
          @include flex(row, space-between, center);
          width: 100%;
          &--option {
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 20px;
            color: $neutrals-black;
            &-dhl {
              font-size: 0.875rem;
              font-weight: 700;
              line-height: 20px;
              color: $neutrals-black;
            }
          }
          &--freight {
            font-size: 0.75rem;
            font-weight: 400;
            line-height: 16px;
            color: $neutrals-black;
          }
        }
        &__time {
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 16px;
          color: $delivery-time;
        }
      }

      &:hover {
        border: 1px solid $font-color;
      }
    }
    .radio-wrapper.checked {
      border: 1px solid $font-color;
    }
  }
  .forms.stage-1 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    column-gap: 30px;
    grid-template-areas:
      'title title name name name'
      'phone phone phone phone phone'
      'email email email email email'
      'city city city city city'
      'address address address address address';
    .title {
      grid-area: title;
    }
    .name {
      grid-area: name;
    }
    .phone {
      grid-area: phone;
    }
    .email {
      grid-area: email;
    }
    .city {
      grid-area: city;
    }
    .address {
      grid-area: address;
    }
  }
  .forms.stage-3 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 30px;
    grid-template-areas:
      'cardname cardname cardname cardname'
      'cardnumber cardnumber cardnumber cardnumber'
      'validity validity cvc cvc';
    .cardname {
      grid-area: cardname;
    }
    .cardnumber {
      grid-area: cardnumber;
    }
    .validity {
      grid-area: validity;
      margin-right: 30px;
    }
    .cvc {
      grid-area: cvc;
    }
  }
}

@media (min-width: 768px) {
  .main__form-panel {
    grid-area: form-panel;
  }

  .form-part {
    margin-top: 4rem;
    height: 288px;
    .forms.stage-1 {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: auto;
      column-gap: 30px;
      grid-template-areas:
        'title title name name name name'
        'phone phone phone email email email'
        'city city address address address address';
    }

    .forms.stage-3 {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: auto;
      column-gap: 30px;
      grid-template-areas:
        'cardname cardname cardname cardname . .'
        'cardnumber cardnumber cardnumber cardnumber . .'
        'validity validity validity cvc cvc cvc';
    }
  }

  .main__cart-container {
    padding: 1.5rem;
    margin: 0;
    height: 100%;
    &__title {
      display: block;
      margin-bottom: 34px;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 22px;
    }
    &__items {
      margin-bottom: 2rem;
      &__product-info-wrapper {
        @include flex(row, space-between, start);
        &--details {
          @include flex(column, start, start);
        }
        &--modifier {
          margin: 18px 0 0;
        }

        &__freight {
          padding: 1rem 0 2rem;
        }
        &__subtotal {
          padding-top: 1rem 0;
        }
      }
    }
  }
}
</style>
