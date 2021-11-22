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
