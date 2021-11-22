<template>
  <div class="main__stepper-panel">
    <div
      class="
        main__stepper-panel__container
        d-flex
        align-items-center
        justify-content-between
      "
    >
      <div class="main__stepper-panel__container__step initial">
        <div
          class="main__stepper-panel__container__step--circle-container"
        ></div>
        <span
          class="main__stepper-panel__container__step--connect-line first"
        ></span>
        <div class="main__stepper-panel__container__step--label-container">
          寄送地址
        </div>
      </div>
      <div class="main__stepper-panel__container__step">
        <div
          class="main__stepper-panel__container__step--circle-container"
        ></div>
        <span
          class="main__stepper-panel__container__step--connect-line second"
        ></span>
        <div class="main__stepper-panel__container__step--label-container">
          運送方式
        </div>
      </div>
      <div class="main__stepper-panel__container__step">
        <div
          class="main__stepper-panel__container__step--circle-container"
        ></div>
        <div class="main__stepper-panel__container__step--label-container">
          付款資訊
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
}
</script>
