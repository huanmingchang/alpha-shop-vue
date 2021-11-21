<template>
  <div class="main__cart">
    <div class="main__cart-container d-flex flex-column">
      <div class="main__cart-container__title">購物籃</div>
      <div
        v-for="product in products"
        :key="product.id"
        class="main__cart-container__items"
      >
        <div class="main__cart-container__items__photo-wrapper">
          <img :src="product.image" class="product-photo" alt="product-photo" />
        </div>
        <div class="main__cart-container__items__product-info-wrapper">
          <div
            class="main__cart-container__items__product-info-wrapper--details"
          >
            <div
              class="main__cart-container__items__product-info-wrapper--name"
            >
              {{ product.name }}
            </div>
            <div
              class="
                main__cart-container__items__product-info-wrapper--modifier
              "
            >
              <button class="btn btn-minus"></button>
              <span
                class="
                  main__cart-container__items__product-info-wrapper--modifier--qty
                  text-center
                "
                >{{ product.qty }}</span
              >
              <button class="btn btn-plus"></button>
            </div>
          </div>
          <div class="main__cart-container__items__product-info-wrapper--price">
            {{ product.price }}
          </div>
        </div>
      </div>
      <div class="main__cart-container__items__freight">
        <div class="main__cart-container__items__freight--name">運費</div>
        <div class="main__cart-container__items__freight--total">免費</div>
      </div>
      <div class="main__cart-container__items__subtotal">
        <div class="main__cart-container__items__subtotal--name">小計</div>
        <div class="main__cart-container__items__subtotal--total">$5,298</div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ShoppingCart',
  data() {
    return {
      products: [
        {
          id: uuidv4(),
          image: require('../assets/product-1@2x.png'),
          name: '破壞補丁修身牛仔褲',
          qty: 1,
          price: '$3,999',
        },
        {
          id: uuidv4(),
          image: require('../assets/product-2@2x.png'),
          name: '刷色直筒牛仔褲',
          qty: 1,
          price: '$1,299',
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
@import '../styles/layout.scss';
@import '../styles/size.scss';

.main__cart-container {
  @include flex(column, start, start);
  padding: 1rem;
  margin-top: 2rem;
  width: 100%;
  border: 1px solid $pale-grey;
  border-radius: 8px;
  background: $cart-container;
  &__title {
    display: none;
  }
  &__items {
    @include flex(row, start, start);
    margin-bottom: 1rem;
    width: 100%;
    &__photo-wrapper {
      margin-right: 21px;
      width: 100px;
      height: 100px;
      border-radius: 4px;
    }
    &__product-info-wrapper {
      @include flex(column, start, end);
      flex: 1;
      &--details {
        @include flex(column, start, end);
      }
      &--name {
        font-weight: 400;
        line-height: 1.5rem;
      }
      &--modifier {
        @include flex(row, space-between, center);
        margin: 18px 0 17px;
        width: 116px;
        height: 27px;
        &--qty {
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          color: $neutrals-black;
        }
        .btn.btn-plus,
        .btn.btn-minus {
          position: relative;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: $pale-grey;
        }
        .btn-plus::after {
          content: '\002B';
          color: $neutrals-black;
          @include position(absolute, 50%, 50%, -50%, -50%);
        }
        .btn-minus::after {
          content: '\2212';
          color: $neutrals-black;
          @include position(absolute, 50%, 50%, -50%, -50%);
        }
      }
      &--price {
        font-weight: 700;
        line-height: 22px;
        color: $neutrals-black;
      }
    }
    &__freight,
    &__subtotal {
      @include flex(row, space-between, center);
      width: 100%;
      border-top: 1px solid $pale-grey;
      &--name {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      }
      &--total {
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        color: $neutrals-black;
      }
    }

    &__freight {
      padding: 1rem 0;
    }
    &__subtotal {
      padding-top: 1rem;
    }
  }
}

@media (min-width: 768px) {
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
