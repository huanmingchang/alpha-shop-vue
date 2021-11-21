<template>
  <footer>
    <div
      class="
        footer-info-wrapper
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <div
        class="
          footer-logo
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <router-link to="/">
          <img :src="images.logo" class="footer__logo__pic" alt="logo"
        /></router-link>
      </div>
      <div
        v-for="item in footerContents"
        :key="item.id"
        class="footer-info d-flex flex-column"
      >
        <h4 class="footer-info__title">{{ item.title }}</h4>
        <div class="footer-info__content d-flex flex-column">
          <router-link
            to="/"
            class="footer-info__content--item"
            v-for="(content, index) in item.contents"
            :key="index"
            >{{ content }}</router-link
          >
        </div>
      </div>
      <div class="footer-info d-flex flex-column">
        <h4 class="footer-info__title">追蹤 ALPHA Shop</h4>
        <div class="footer-info__content d-flex flex-column">
          <div class="footer-info__content--item">＋886 02123-45678</div>
          <div class="footer-info__icons-wrapper d-flex">
            <router-link to="/"
              ><img
                :src="images.fbIcon"
                alt=""
                class="footer-info__icons-wrapper--fb"
            /></router-link>
            <router-link to="/"
              ><img
                :src="images.igIcon"
                alt=""
                class="footer-info__icons-wrapper--ig"
            /></router-link>
            <router-link to="/"
              ><img
                :src="images.whatsappIcon"
                alt=""
                class="footer-info__icons-wrapper--whatsapp"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Footer',
  data() {
    return {
      images: {
        logo: require('../assets/logo-daymode@2x (1).png'),
        fbIcon: require('../assets/fb-daymode@2x.png'),
        igIcon: require('../assets/ig-daymode@2x.png'),
        whatsappIcon: require('../assets/whatsapp-daymode@2x.png'),
      },
      footerContents: [
        {
          id: uuidv4(),
          title: '客戶服務',
          contents: ['運送說明', '退換貨相關', '付款資訊', 'FAQ'],
        },
        {
          id: uuidv4(),
          title: '關於我們',
          contents: ['品牌故事', '媒體聯繫', 'Press Kit'],
        },
        {
          id: uuidv4(),
          title: '資訊',
          contents: ['隱私權政策', 'Cookie', 'GDPR'],
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

footer {
  display: none;
}

@media (min-width: 768px) {
  footer {
    margin-top: 3rem;
    display: flex;
    width: 100%;
    height: 284px;
    background: $footer;
    .footer-info-wrapper {
      margin: 0 auto;
      width: 80%;
      height: 100%;
      .footer-logo {
        width: 175.49px;
        height: 31px;
      }
      .footer-info {
        height: 100%;
        &__title {
          padding: 4rem 0 1.5rem;
          font-size: 1rem;
          font-weight: 700;
        }
        &__content--item {
          font-size: 0.8rem;
          font-weight: 400;
          line-height: 1.2rem;
          color: $footer-grey;
        }
        &__content--item:hover {
          text-decoration: underline;
        }
        &__icons-wrapper {
          @include flex(row, start, center);
          padding-top: 10px;
          width: 104px;
          height: 24px;
          &--fb {
            margin-right: 27.47px;
            width: 9.33px;
            height: 20px;
          }
          &--ig {
            margin-right: 20px;
            width: 20px;
            height: 20px;
          }
          &--whatsapp {
            width: 20px;
            height: 20.1px;
          }
        }
      }
    }
  }
}

@media (min-width: 992px) {
  footer {
    margin-top: 124px;
    .footer-info-wrapper {
      .footer-info {
        &__title {
          font-size: 1.5rem;
        }
        &__content--item {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  footer {
    margin-top: 124px;
  }
}
</style>
