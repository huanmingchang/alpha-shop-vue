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
              <button
                class="btn btn-minus"
                @click.prevent.stop="minusButtonClick(product.id)"
              ></button>
              <span
                class="
                  main__cart-container__items__product-info-wrapper--modifier--qty
                  text-center
                "
                >{{ product.qty }}</span
              >
              <button
                class="btn btn-plus"
                @click.prevent.stop="addButtonClick(product.id)"
              ></button>
            </div>
          </div>
          <div class="main__cart-container__items__product-info-wrapper--price">
            {{ product.price | addNumberComma }}
          </div>
        </div>
      </div>
      <div class="main__cart-container__items__freight">
        <div class="main__cart-container__items__freight--name">運費</div>
        <div class="main__cart-container__items__freight--total">
          {{ summary.freight }}
        </div>
      </div>
      <div class="main__cart-container__items__subtotal">
        <div class="main__cart-container__items__subtotal--name">小計</div>
        <div class="main__cart-container__items__subtotal--total">
          {{ summary.price | addNumberComma }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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
          price: 3999,
        },
        {
          id: uuidv4(),
          image: require('../assets/product-2@2x.png'),
          name: '刷色直筒牛仔褲',
          qty: 1,
          price: 1299,
        },
      ],
      summary: {
        freight: '免費',
        price: 5298,
      },
    }
  },
  methods: {
    addButtonClick(productId) {
      this.products.forEach((product) => {
        if (product.id === productId) {
          product.qty++
        }
      })
    },
    minusButtonClick(productId) {
      this.products.forEach((product) => {
        if (product.id === productId) {
          product.qty--
        }

        if (product.qty <= 0) {
          product.qty = 0
        }
      })
    },
    calculateTotalAmount() {
      const freight = Number(this.summary.freight.replace(/[^0-9]+/g, ''))
      const total = Object.values(this.products).map(
        (product) => product.price * product.qty
      )
      const newTotal = total.reduce((total, freight) => total + freight)
      this.summary.price = newTotal
    },
  },
  updated() {
    this.calculateTotalAmount()
  },
  filters: {
    addNumberComma(price) {
      return (
        '$' + price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      )
    },
  },
}
</script>
